---
description: "Task list for 002-admin-send-email"
---

# Tasks: Admin gửi email từ hệ thống

**Input**: Design documents from `specs/002-admin-send-email/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/api.md, quickstart.md

**Tests**: Không có framework test (constitution VI) → không có task test tự động; kiểm tra bằng quickstart Q1–Q10 + verification gates.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: chạy song song được (khác file, không phụ thuộc task chưa xong)
- **[Story]**: US1 (gửi email, P1) / US2 (lịch sử, P2)

## Phase 1: Setup

- [X] T001 Thêm `aiConfig.email` (`sendRatePerSecond` từ env `EMAIL_SEND_RATE_PER_SECOND` mặc định 10, `maxRecipients` 1000, `batchSize` 50, `maxAttemptsPerRecipient` 3, `staleSendingMinutes` 5, `staleJobMinutes` 10) trong `hoczi-api/src/config/ai.ts`; thêm `EMAIL_SEND_RATE_PER_SECOND=10` vào `hoczi-api/env.example`

- [X] T002 Sửa `hoczi-api/tsconfig.json`: `"ignoreDeprecations": "6.0"` → `"5.0"` (TypeScript cài là 5.9.3; research R8); xác nhận `npx tsc --noEmit` và `yarn build` chạy được trước khi code

## Phase 2: Foundational (chặn mọi user story)

- [X] T003 Bảo vệ toàn bộ router admin: `adminRoutes.use(authMiddleware, requireRole(ROLES.ADMIN))`, gỡ route `POST /send-email` trong `hoczi-api/src/routes/admin.route.ts`; xóa `AdminController.sendEmail` (`hoczi-api/src/controllers/AdminController.ts`), `UserService.sendEmail` (`hoczi-api/src/services/UserService.ts`), `SendEmailRequest` (`hoczi-api/src/dto/user.dto.ts`), `UserService.registerService` (`hoczi-web/data/services/user.service.ts`)
- [X] T004 [P] Entity `EmailBroadcast` (bảng `email_broadcasts`: `created_by` int null FK users ON DELETE SET NULL, `tenant_id` int null (tenant của admin), `client_request_id` uuid not null, `subject` varchar(200) not null, `content_json` jsonb, `content_html` text, `content_text` text, `recipient_count` int, `sent_count`/`failed_count` default 0, `status` varchar(30) `queued | sending | completed | completed_with_errors` default `queued`, `started_at`/`completed_at` timestamptz null, `created_at`/`updated_at` timestamptz, UNIQUE(created_by, client_request_id), INDEX(tenant_id, created_at), FK created_by → users ON DELETE SET NULL với tên FK cố định) trong `hoczi-api/src/entities/EmailBroadcast.ts`
- [X] T005 [P] Entity `EmailBroadcastRecipient` (bảng `email_broadcast_recipients`: `email` varchar(254) lowercase, `user_id` int null, `status` varchar(20) `pending | sending | sent | failed`, `attempts` default 0, `error` varchar(500) null, `provider_message_id` varchar(255) null, `locked_at`/`sent_at` timestamptz null, UNIQUE(broadcast_id, email), INDEX(broadcast_id, status), FK broadcast_id ON DELETE CASCADE) trong `hoczi-api/src/entities/EmailBroadcastRecipient.ts`
- [X] T006 Migration tạo 2 bảng + FK + index, `down` xóa theo thứ tự ngược, trong `hoczi-api/src/migrations/1792400000000-AddEmailBroadcasts.ts`; kiểm tra `schema:log` không còn chênh lệch trên Postgres tạm
- [X] T007 [P] Thêm `AiJobType.SEND_EMAIL_BROADCAST = 'send_email_broadcast'` trong `hoczi-api/src/entities/AiJob.ts`; trong `hoczi-api/src/repositories/aiJobRepository.ts` thêm `heartbeat(jobId)` (cập nhật `locked_at = now()`) và cho `requeueStale(staleMinutes, type?)` lọc theo loại job; trong `hoczi-api/src/worker.ts` gọi thêm `requeueStale(10, 'send_email_broadcast')` mỗi phút
- [X] T008 [P] Khung email Hoczi dùng chung `wrapEmailHtml(title, bodyHtml, footerHtml?)` (logo, footer "Email được gửi từ Hoczi") trong `hoczi-api/src/helpers/emailLayout.ts`; nếu `sendEmail` cũ trong `hoczi-api/src/utils/send_email.ts` không còn nơi dùng sau T003 thì xóa, giữ `sendHtmlEmail`

**Checkpoint**: `npx tsc --noEmit` (api) pass; `POST /api/admin/send-email` → 404; `POST /api/admin/create-user` không token → 401.

## Phase 3: User Story 1 — Soạn và gửi email tới một hoặc nhiều người (P1) 🎯 MVP

**Goal**: Admin gõ địa chỉ và/hoặc chọn user, soạn tiêu đề + nội dung có định dạng, xem trước, gửi; mỗi người nhận một email riêng từ `FROM_EMAIL`; thấy tiến độ và kết quả thật.

**Independent Test**: quickstart Q1–Q7, Q9, Q10.

- [X] T009 [P] [US1] `validateRichDoc(json)` + `renderRichHtml(doc)` + `renderRichText(doc)`: chỉ node `doc, paragraph, heading(level 2|3), bulletList, orderedList, listItem, blockquote, hardBreak, horizontalRule, text` và mark `bold, italic, underline, strike, link(href http:|https:|mailto:)`; độ sâu ≤ 10; tổng text 1–20 000 ký tự; escape mọi text/href; style inline cho email; ném `BadRequestError` khi sai, trong `hoczi-api/src/helpers/richText.ts`
- [X] T010 [P] [US1] DTO `PreviewEmailRequest` (`subject` 1–200 ký tự, không xuống dòng; `content` object) và `CreateBroadcastRequest` (+ `client_request_id` IsUUID, `emails` string[] ≤ 1000 phần tử, mỗi phần tử ≤ 254 ký tự, `user_ids` int[] ≤ 1000) trong `hoczi-api/src/dto/adminEmail.dto.ts`
- [X] T011 [P] [US1] Repositories: `emailBroadcastRepository` (`createWithRecipients` trong transaction cùng enqueue job, `findByClientRequestId`, `findById`, `refreshCounts`, `markStatus`) và `emailBroadcastRecipientRepository` (`claimBatch(broadcastId, size)` bằng `FOR UPDATE SKIP LOCKED` chuyển `pending → sending` + `locked_at`, `requeueStaleSending(broadcastId, minutes)`, `markSent`, `markFailed`, `failAllPending(broadcastId, reason)`) trong `hoczi-api/src/repositories/emailBroadcastRepository.ts`, `hoczi-api/src/repositories/emailBroadcastRecipientRepository.ts`
- [X] T012 [US1] `AdminEmailService`: `preview()`; `create()` (gộp `emails` + email của `user_ids` trong tenant của admin — user không tồn tại/ngoài tenant/không có email hợp lệ → 400 `invalid_user_ids`, không tạo lần gửi, trim + lowercase, loại trùng, kiểm tra định dạng → 400 kèm `invalid_emails`, 1–1 000 người nhận, 503 nếu thiếu `FROM_EMAIL`, idempotent theo `client_request_id`); `sendBroadcast(broadcastId, jobId)` cho worker (requeue người nhận `sending` quá 5 phút, gọi `aiJobRepository.heartbeat(jobId)` sau mỗi email (không theo lô — xem research R2), lặp claim lô 50, gửi qua `sendHtmlEmail` theo `sendRatePerSecond`, lỗi tạm thời thử lại tối đa 3 lần với chờ 2/4/8 s, lỗi cấu hình → `failAllPending`, cuối cùng `completed`/`completed_with_errors`) trong `hoczi-api/src/services/AdminEmailService.ts`
- [X] T013 [US1] Controller + route `POST /api/admin/emails/preview`, `POST /api/admin/emails` (lỗi 400 trả thêm `invalid_emails` / `invalid_user_ids`) trong `hoczi-api/src/controllers/AdminEmailController.ts` và `hoczi-api/src/routes/admin.route.ts`
- [X] T014 [US1] `AdminEmailService.searchRecipients(actor, keyword)` + `GET /api/admin/emails/recipients?keyword=` trả tối đa 20 `{ id, name, email, has_valid_email }`, chỉ user trong tenant của admin (admin không tenant / `super_admin`: tất cả), trong `hoczi-api/src/services/AdminEmailService.ts`, `hoczi-api/src/controllers/AdminEmailController.ts`, `hoczi-api/src/routes/admin.route.ts`; repository `userRepository.searchForEmail(keyword, tenantId?)` trong `hoczi-api/src/repositories/userRepository.ts`
- [X] T015 [US1] Worker xử lý job `send_email_broadcast` → `AdminEmailService.sendBroadcast(broadcastId, job.id)`; lỗi cuối → `failAllPending` + trạng thái `completed_with_errors` trong `hoczi-api/src/worker.ts`
- [X] T016 [P] [US1] Service web `searchRecipients`, `preview`, `create`, `get(id)` + types theo contracts/api.md trong `hoczi-web/data/services/adminEmail.service.ts`
- [X] T017 [P] [US1] `EmailEditor` (TipTap: StarterKit với `heading: { levels: [2, 3] }`, tắt `code`, `codeBlock`; Link `protocols` http/https/mailto, `autolink`; toolbar đậm/nghiêng/gạch chân/gạch ngang/H2/H3/danh sách/trích dẫn/link; `onChange(json)`) trong `hoczi-web/app/admin/emails/EmailEditor.tsx`
- [X] T018 [US1] `ComposeEmail`: ô người nhận gõ tay (tách theo `,` `;` xuống dòng, báo địa chỉ sai ngay), chọn user qua `AdminEmailService.searchRecipients` của web (không cho chọn user `has_valid_email = false`, hiện lý do; chip có nút xóa), đếm người nhận hợp lệ, tiêu đề, `EmailEditor`, nút Xem trước (iframe `srcDoc` từ `/preview`), nút Gửi khóa khi đang gửi, `client_request_id = crypto.randomUUID()` tạo mới sau mỗi lần gửi thành công, trong `hoczi-web/app/admin/emails/ComposeEmail.tsx`
- [X] T019 [US1] `BroadcastDetail`: trạng thái, thanh tiến độ đã gửi/thất bại/còn chờ, tự gọi lại mỗi 3 giây khi `queued|sending`, bảng người nhận lọc theo trạng thái + phân trang, nội dung đã gửi trong `hoczi-web/app/admin/emails/BroadcastDetail.tsx`; trang `hoczi-web/app/admin/emails/page.tsx` + `AdminEmailsPage.tsx` (tab Soạn email / Lịch sử; sau khi gửi mở `BroadcastDetail`)
- [X] T020 [US1] Mục "Emails" (icon `Mail`) vào `navMain` trong `hoczi-web/app/admin/layout.tsx`; chuỗi `admin_email.*` trong `hoczi-web/messages/vi.json` và `hoczi-web/messages/en.json`

**Checkpoint**: US1 chạy độc lập; lịch sử xem được qua `BroadcastDetail` ngay sau khi gửi.

## Phase 4: User Story 2 — Xem lịch sử email đã gửi (P2)

**Goal**: Danh sách các lần gửi (mới nhất trước, phân trang, lọc theo tenant) và chi tiết từng người nhận.

**Independent Test**: quickstart Q8.

- [X] T021 [US2] `AdminEmailService.list(actor, page, limit)` và `get(actor, id, recipientFilter)` (admin có tenant chỉ thấy tenant mình; `super_admin`/admin không tenant thấy tất cả; `pending_count` = recipient_count − sent − failed) + `emailBroadcastRepository.findAll`, `emailBroadcastRecipientRepository.findByBroadcast` trong `hoczi-api/src/services/AdminEmailService.ts` và hai repository
- [X] T022 [US2] Route `GET /api/admin/emails` (`limit` ≤ 100) và `GET /api/admin/emails/:id` (`?status&page&limit`) trong `hoczi-api/src/controllers/AdminEmailController.ts`, `hoczi-api/src/routes/admin.route.ts`
- [X] T023 [P] [US2] Hàm `list` trong `hoczi-web/data/services/adminEmail.service.ts`
- [X] T024 [US2] `EmailHistory` (bảng: thời gian, admin, tiêu đề, số người nhận, đã gửi/thất bại, trạng thái; bấm để mở `BroadcastDetail`; phân trang) trong `hoczi-web/app/admin/emails/EmailHistory.tsx`, gắn vào tab Lịch sử của `AdminEmailsPage.tsx`; chuỗi bổ sung trong `messages/vi.json`, `messages/en.json`

## Phase 5: Polish & Cross-Cutting

- [X] T025 Kiểm tra luồng trên Postgres tạm với `sendHtmlEmail` được stub: tạo lần gửi 120 người nhận, double request cùng `client_request_id`, lỗi tạm thời rồi thành công, lỗi cố định, worker dừng giữa chừng rồi chạy lại, HTML render từ doc chứa `<script>`/`javascript:`
- [X] T026 Verification gates: `npx tsc --noEmit` + `yarn build` (api), `npx tsc --noEmit` + `npm run lint` + `npm run build` (web); ghi kết quả và các kịch bản quickstart chưa chạy được vào cuối `specs/002-admin-send-email/quickstart.md`

## Dependencies & Execution Order

- T002 (sửa tsconfig) làm trước tiên để các bước kiểm tra `tsc`/build chạy được.
- Phase 1 → Phase 2 → US1 → US2 → Polish. US2 cần dữ liệu do US1 tạo (lần gửi), nhưng code API của US2 độc lập.
- Phase 2: T004, T005, T007, T008 song song; T006 sau T004–T005; T003 độc lập.
- US1: T009, T010, T011, T016, T017 song song → T012 → T013, T014, T015 → T018, T019 → T020.

## Parallel Example: User Story 1

```text
T009 helpers/richText.ts  ‖  T010 dto/adminEmail.dto.ts  ‖  T011 repositories  ‖  T016 web service  ‖  T017 EmailEditor.tsx
```

## Implementation Strategy

1. MVP = Phase 1 + 2 + US1. Riêng T003 (đóng lỗ hổng) có thể làm và deploy trước, độc lập với phần còn lại.
2. Sau đó US2 (lịch sử), rồi Polish.
