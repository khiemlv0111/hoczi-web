# Implementation Plan: Gửi bài tập hằng ngày qua email

**Branch**: `001-daily-exercise-email` | **Date**: 2026-11-14 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-daily-exercise-email/spec.md`

## Summary

Mỗi ngày gửi N bài tập (mặc định 3) theo (môn, lớp) cho user đã đăng ký, 1 giờ sau gửi đáp án + lời giải.
Đề và lời giải được OpenAI sinh trong một lần gọi (structured output, JSON schema strict), lưu vào DB,
dùng chung cho mọi đăng ký cùng (môn, lớp, ngày). Lịch chạy trong `src/worker.ts` hiện có: một "scheduler tick"
mỗi phút tạo lượt gửi cho đăng ký tới giờ (idempotent nhờ unique index) và đưa job vào hàng đợi `ai_jobs`;
job gửi đề hẹn job gửi đáp án bằng `run_after = now + 60 phút`. Email gửi qua SES với HTML đã escape.
Admin quản lý đăng ký / bộ đề / lượt gửi tại `/admin/daily-exercises`; user tự đăng ký tại
`/quizzes/results/daily-exercises`; hủy nhận qua `/daily-exercises/unsubscribe?token=…`.

## Technical Context

**Language/Version**: TypeScript 5.9 (Node.js) — API; TypeScript + React 19 / Next.js 16 — web

**Primary Dependencies**: Express 4, TypeORM 0.3, `openai` 6.49 (Responses API), `@aws-sdk/client-sesv2`, class-validator; web: axios, Tailwind 4, lucide-react. **Không thêm dependency mới.**

**Storage**: PostgreSQL — 4 bảng mới (xem [data-model.md](./data-model.md)), dùng lại `ai_jobs`, `ai_usage_logs`, `users`, `subjects`, `grades`

**Testing**: Chưa có framework (constitution VI) → kiểm tra bằng `tsc`, lint, build và các kịch bản trong [quickstart.md](./quickstart.md)

**Target Platform**: Linux server (PM2: `hoczi-api` + `hoczi-ai-worker`), trình duyệt

**Project Type**: Web application (monorepo `hoczi-api/` + `hoczi-web/`)

**Performance Goals**: email đề ≤ 10 phút sau giờ nhận; email đáp án 60–70 phút sau email đề

**Constraints**: không gửi trùng khi restart / nhiều worker; 1 lần gọi AI cho mỗi (môn, lớp, ngày); khóa AI chỉ ở server

**Scale/Scope**: hàng trăm đến vài nghìn đăng ký; SES gửi tuần tự trong worker là đủ

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Nguyên tắc | Đánh giá | Ghi chú |
|---|---|---|
| I. Monorepo Boundaries | ✅ | Web chỉ gọi API qua `data/services/dailyExercise.service.ts`; hợp đồng API định nghĩa trong `contracts/api.md` trước khi code |
| II. 3-Layer | ✅ | `routes/dailyExercise.route.ts → DailyExerciseController → DailyExerciseService → repositories/*`; worker gọi service; lỗi dùng `ApiError` |
| III. Data & Migration | ✅ | 1 migration có `down`; không xóa dữ liệu; subscription/delivery lưu `tenant_id` và lọc theo tenant ở service |
| IV. AI Safety | ⚠️ Ngoại lệ | Khóa ở server, ghi `AiUsageLog`, chạy trong worker, timeout/retry qua `aiConfig` ✅. **Không qua `AiDraft` trước khi gửi** và **không dùng RAG** → xem Complexity Tracking |
| V. Frontend | ✅ | `page.tsx` + `XxxPage.tsx`; chuỗi trong `messages/vi.json` + `en.json`; trang admin thêm vào sidebar |
| VI. Verification | ✅ | tsc (2 app), lint, build, kịch bản quickstart |
| VII. Spec-Driven & Simple | ✅ | Dùng lại `ai_jobs`/worker/OpenAI client/SES; không thêm dependency, không thêm process mới |

**Kết quả**: PASS (có 1 ngoại lệ đã được user chấp thuận, ghi bên dưới). Re-check sau Phase 1: không đổi.

## Project Structure

### Documentation (this feature)

```text
specs/001-daily-exercise-email/
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
├── entities/            ExerciseSubscription.ts, DailyExerciseSet.ts, DailyExercise.ts, ExerciseDelivery.ts, AiJob.ts (+2 job types)
├── migrations/          <ts>-AddDailyExercises.ts
├── repositories/        exerciseSubscriptionRepository.ts, dailyExerciseSetRepository.ts, exerciseDeliveryRepository.ts, aiJobRepository.ts (enqueue runAfter)
├── dto/                 dailyExercise.dto.ts
├── helpers/ai/          dailyExercise.ts (prompt + schema + gọi OpenAI + validate), prompts.ts (PROMPT_VERSIONS), errors.ts (RetryableJobError, SES transient)
├── helpers/             exerciseEmail.ts (dựng HTML/text email, escape)
├── utils/               send_email.ts (+ sendHtmlEmail ném lỗi)
├── services/            DailyExerciseService.ts
├── controllers/         DailyExerciseController.ts
├── routes/              dailyExercise.route.ts, index.ts
├── config/              ai.ts (+ dailyExercise config)
└── worker.ts            scheduler tick + 2 job types

hoczi-web/
├── data/services/       dailyExercise.service.ts
├── app/admin/daily-exercises/          page.tsx, DailyExercisesPage.tsx, SubscriptionsTab.tsx, SetsTab.tsx, DeliveriesTab.tsx
├── app/quizzes/results/daily-exercises/ page.tsx, MyDailyExercisesPage.tsx
├── app/daily-exercises/unsubscribe/    page.tsx, UnsubscribePage.tsx
├── app/admin/layout.tsx, app/quizzes/results/layout.tsx   (menu)
└── messages/vi.json, messages/en.json  (namespace "daily_exercise")
```

**Structure Decision**: Web application trong monorepo hiện có; backend theo 3 lớp, lịch chạy nằm trong worker hiện có.

## Thiết kế chính (tóm tắt — chi tiết ở research.md)

1. **Scheduler tick (worker, mỗi 60s)**: một câu SQL `INSERT … SELECT … ON CONFLICT DO NOTHING RETURNING id` tạo
   lượt gửi `kind='scheduled'` cho đăng ký đang bật mà giờ địa phương ≥ `send_time` và chưa có lượt gửi của ngày địa phương;
   mỗi id trả về → enqueue `send_daily_exercises`. Unique partial index `(subscription_id, delivery_date) WHERE kind='scheduled'`
   đảm bảo không trùng dù nhiều worker.
2. **Job `send_daily_exercises {deliveryId}`**: `ensureSet(subject, grade, date, needed)` → lấy N bài đầu → gửi email đề →
   cập nhật lượt gửi `questions_sent` → enqueue `send_exercise_answers` với `run_after = now + 60'`.
3. **ensureSet**: tạo/claim hàng `daily_exercise_sets` bằng câu UPDATE có điều kiện (failed, generating quá 10', hoặc thiếu bài);
   job nào claim được thì gọi OpenAI; job khác ném `RetryableJobError` → worker thử lại sau.
4. **Job `send_exercise_answers {deliveryId}`**: đọc nội dung bài **hiện tại** (có cả sửa của admin) → gửi → `answers_sent`.
5. **Lỗi**: lỗi tạm thời (OpenAI/SES/mạng/`RetryableJobError`) → backoff sẵn có; lỗi cuối → `delivery.status='failed'`, `error`.
6. **Email**: HTML dựng từ text đã escape, xuống dòng → `<br>`; công thức viết bằng Unicode (prompt yêu cầu, không LaTeX);
   footer Hoczi + link hủy nhận `WEB_APP_URL/daily-exercises/unsubscribe?token=…`.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| IV: nội dung AI tới học viên **không qua `AiDraft`/duyệt trước** | User chốt (2026-11-14): gửi tự động mỗi ngày, không cần người duyệt hằng ngày | Duyệt trước giờ gửi cần người trực mỗi ngày; nếu không duyệt thì không gửi → mất giá trị cốt lõi. Bù lại: validate schema + nội dung, lưu đầy đủ (model, prompt_version), admin xem/sửa/gửi lại, cờ `edited_by_admin` |
| IV: **không bám Knowledge Base/RAG** | KB hiện chỉ có tài liệu HSK; Toán/môn khác chưa có nguồn | Dùng `runGrounded` sẽ bắt buộc file_search vào kho HSK — sai nguồn cho Toán. Bổ sung RAG khi có tài liệu môn tương ứng |
