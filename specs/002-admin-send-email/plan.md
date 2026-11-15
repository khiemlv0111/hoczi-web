# Implementation Plan: Admin gửi email từ hệ thống

**Branch**: `002-admin-send-email` | **Date**: 2026-11-15 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/002-admin-send-email/spec.md`

## Summary

Admin soạn email (tiêu đề + nội dung có định dạng) tại `/admin/emails`. Người nhận lấy từ hai nguồn: địa chỉ gõ tay và user
chọn từ danh sách. Mỗi lần gửi có tối đa 1 000 người nhận, mỗi người nhận một email riêng từ `FROM_EMAIL`. Việc gửi chạy nền
trong worker có sẵn (hàng đợi `ai_jobs` của task 2). Trạng thái từng người nhận được lưu lại, nên có lịch sử và tiến độ.

Nội dung gửi lên dạng **TipTap JSON**, không phải HTML. Server kiểm tra từng node/mark theo danh sách cho phép rồi tự render
ra HTML (escape toàn bộ text) và text thuần. Vì vậy không có đường nào chèn HTML tùy ý, và không cần thêm thư viện sanitize.

Đồng thời đóng lỗ hổng hiện tại: gỡ `POST /api/admin/send-email` (không cần đăng nhập) và bắt buộc đăng nhập + quyền admin
cho toàn bộ router `/api/admin`.

## Technical Context

**Language/Version**: TypeScript 5.9 — API (Node.js); TypeScript + React 19 / Next.js 16 — web

**Primary Dependencies**: Express 4, TypeORM 0.3, `@aws-sdk/client-sesv2` (`sendHtmlEmail` từ task 2), class-validator; web: `@tiptap/react` + `@tiptap/starter-kit` 3.x (đã có, StarterKit 3 đã gồm Underline + Link), axios, Tailwind 4. **Không thêm dependency mới.**

**Storage**: PostgreSQL — 2 bảng mới `email_broadcasts`, `email_broadcast_recipients` (xem [data-model.md](./data-model.md)); dùng lại `ai_jobs`, `users`

**Testing**: Chưa có framework (constitution VI) → `tsc`, lint, build, kịch bản [quickstart.md](./quickstart.md); thử luồng gửi trên Postgres tạm với SES được stub (như task 2)

**Target Platform**: Linux server (PM2 `hoczi-api` + `hoczi-ai-worker`), trình duyệt

**Project Type**: Web application (monorepo `hoczi-api/` + `hoczi-web/`)

**Performance Goals**: 1 000 người nhận hoàn tất ≤ 30 phút (SC-007); mặc định gửi 10 email/giây → ~2 phút

**Constraints**: không gửi trùng khi double-click / restart; tôn trọng giới hạn tốc độ SES; chỉ admin; HTML trong email chỉ gồm thẻ cho phép

**Scale/Scope**: vài lần gửi mỗi ngày, ≤ 1 000 người nhận mỗi lần

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Nguyên tắc | Đánh giá | Ghi chú |
|---|---|---|
| I. Monorepo Boundaries | ✅ | Web gọi API qua `data/services/adminEmail.service.ts`; hợp đồng ở `contracts/api.md`; SES chỉ ở API |
| II. 3-Layer | ✅ | `admin.route.ts → AdminEmailController → AdminEmailService → repositories/emailBroadcast*`; worker gọi service; lỗi dùng `ApiError` |
| III. Data & Migration | ✅ | 1 migration có `down`; lưu `tenant_id`, lọc lịch sử theo tenant ở service. **Gỡ bỏ** endpoint cũ (không đụng dữ liệu) |
| IV. AI Safety | ✅ N/A | Không dùng AI |
| V. Frontend | ✅ | `app/admin/emails/page.tsx` + `AdminEmailsPage.tsx`; mục "Emails" trên sidebar admin; chuỗi trong `messages/vi.json` + `en.json` |
| VI. Verification | ✅ | tsc, lint, build, quickstart |
| VII. Simple | ✅ | Dùng lại worker/`ai_jobs`/`sendHtmlEmail`/TipTap; không thêm dependency hay process |

**Kết quả**: PASS, không có vi phạm. Re-check sau Phase 1: không đổi.

## Project Structure

### Documentation (this feature)

```text
specs/002-admin-send-email/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/api.md
└── tasks.md            # /speckit-tasks
```

### Source Code (repository root)

```text
hoczi-api/src/
├── entities/            EmailBroadcast.ts, EmailBroadcastRecipient.ts, AiJob.ts (+SEND_EMAIL_BROADCAST)
├── migrations/          <ts>-AddEmailBroadcasts.ts
├── repositories/        emailBroadcastRepository.ts, emailBroadcastRecipientRepository.ts,
│                        userRepository.ts (searchForEmail, findBasicByIds — chọn người nhận theo tenant)
├── errors/api-erros.ts  ApiError nhận thêm `extra` (field phụ trong body lỗi, VD invalid_emails)
├── middlewares/error.ts trả `{ ...extra, message }`; lỗi không có extra giữ nguyên `{ message }`
├── dto/                 adminEmail.dto.ts            (xóa SendEmailRequest khỏi user.dto.ts)
├── helpers/             richText.ts (validate + render TipTap JSON → HTML/text), emailLayout.ts (khung Hoczi dùng chung)
├── services/            AdminEmailService.ts         (xóa UserService.sendEmail)
├── controllers/         AdminEmailController.ts      (xóa AdminController.sendEmail)
├── routes/              admin.route.ts (authMiddleware + requireRole(ADMIN) cho cả router; gỡ /send-email; thêm /emails/*)
├── config/              ai.ts → thêm cấu hình email (rate, max recipients)
├── repositories/aiJobRepository.ts  requeueStale theo loại job + heartbeat
├── ../tsconfig.json     ignoreDeprecations "5.0"
└── worker.ts            + job send_email_broadcast

hoczi-web/
├── data/services/       adminEmail.service.ts        (xóa UserService.registerService — không nơi nào dùng)
├── app/admin/emails/    page.tsx, AdminEmailsPage.tsx, ComposeEmail.tsx, EmailEditor.tsx, EmailHistory.tsx, BroadcastDetail.tsx
├── app/admin/layout.tsx (menu)
└── messages/vi.json, en.json (namespace "admin_email")
```

**Structure Decision**: Web application trong monorepo hiện có; backend 3 lớp; gửi nền trong worker hiện có.

## Thiết kế chính (chi tiết ở research.md)

1. **Tạo lần gửi** (`POST /api/admin/emails`): validate tiêu đề, nội dung JSON, gộp `emails[]` + email của `user_ids[]`, chuẩn hóa
   (trim, lowercase), loại trùng, kiểm tra định dạng, ≤ 1 000. Lỗi địa chỉ → 400, kèm danh sách địa chỉ sai. Render HTML/text một lần
   rồi lưu. Lần gửi + người nhận + job được tạo **trong một transaction**. `client_request_id` (UUID do web sinh cho mỗi lần soạn)
   unique theo admin, nên gửi lại cùng request trả về lần gửi cũ (chống double-click, FR-014).
2. **Job `send_email_broadcast {broadcastId}`**: lặp — claim 50 người nhận `pending` (`FOR UPDATE SKIP LOCKED`), gửi từng email
   với giới hạn tốc độ, đánh dấu `sent`/`failed`, cập nhật bộ đếm — cho tới hết. Lỗi tạm thời của SES → thử lại tối đa 3 lần cho người
   nhận đó (backoff ngắn); lỗi cố định (địa chỉ bị từ chối) → `failed` ngay. Worker restart → job được requeue, chỉ người nhận
   `pending` được gửi tiếp.
3. **Render nội dung**: chỉ cho phép node `doc, paragraph, heading(2–3), bulletList, orderedList, listItem, blockquote, hardBreak,
   horizontalRule, text` và mark `bold, italic, underline, strike, link(http/https/mailto)`. Gặp node/mark khác → 400. Text luôn escape.
4. **Phục hồi sau crash**: job gửi cập nhật heartbeat `ai_jobs.locked_at` sau mỗi email; worker requeue job `send_email_broadcast` bị bỏ dở sau 10 phút
   (thay vì 30 phút chung), người nhận `sending` quá 5 phút về lại `pending` (research R2).
5. **Cổng build API**: sửa `hoczi-api/tsconfig.json` `ignoreDeprecations` `"6.0"` → `"5.0"` (research R8) để `tsc`/`yarn build` chạy được.
6. **Bảo mật router admin**: `adminRoutes.use(authMiddleware, requireRole(ROLES.ADMIN))`. `/create-user` hiện là stub — vẫn giữ nhưng
   giờ cần quyền admin.

## Complexity Tracking

Không có vi phạm constitution cần giải trình.
