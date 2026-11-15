---
description: "Task list for 001-daily-exercise-email"
---

# Tasks: Gửi bài tập hằng ngày qua email

**Input**: Design documents from `specs/001-daily-exercise-email/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/api.md, quickstart.md

**Tests**: Không có framework test (constitution VI) → không có task test tự động; kiểm tra bằng quickstart + verification gates.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: chạy song song được (khác file, không phụ thuộc task chưa xong)
- **[Story]**: US1 / US2 / US3

## Phase 1: Setup

- [x] T001 Thêm `WEB_APP_URL` và `DAILY_EXERCISE_ANSWER_DELAY_MINUTES=60` vào `hoczi-api/env.example`; thêm `aiConfig.dailyExercise` (`webAppUrl` mặc định `https://hoczi.com`, `answerDelayMinutes` mặc định 60, `schedulerIntervalMs` mặc định 60000, `maxPerDay` 10) trong `hoczi-api/src/config/ai.ts`

## Phase 2: Foundational (chặn mọi user story)

- [x] T002 [P] Entity `ExerciseSubscription` (bảng `exercise_subscriptions`: `questions_per_day` int default 3 CHECK 1–10, `send_time` time default '07:00', `timezone` varchar(64) default 'Asia/Ho_Chi_Minh', `is_active` default true, `unsubscribe_token` varchar(64) UNIQUE, UNIQUE(user_id, subject_id, grade_id)) trong `hoczi-api/src/entities/ExerciseSubscription.ts`
- [x] T003 [P] Entity `DailyExerciseSet` (bảng `daily_exercise_sets`, status `generating | ready | failed`, UNIQUE(subject_id, grade_id, set_date)) trong `hoczi-api/src/entities/DailyExerciseSet.ts`
- [x] T004 [P] Entity `DailyExercise` (bảng `daily_exercises`, UNIQUE(set_id, position), `edited_by_admin` default false) trong `hoczi-api/src/entities/DailyExercise.ts`
- [x] T005 [P] Entity `ExerciseDelivery` (bảng `exercise_deliveries`, kind `scheduled | test`, status `pending | questions_sent | answers_sent | failed | skipped`, UNIQUE(subscription_id, delivery_date) WHERE kind = 'scheduled') trong `hoczi-api/src/entities/ExerciseDelivery.ts`
- [x] T006 Migration tạo 4 bảng + FK + index, `down` xóa theo thứ tự ngược trong `hoczi-api/src/migrations/1792300000000-AddDailyExercises.ts`
- [x] T007 [P] Thêm `AiJobType.SEND_DAILY_EXERCISES`, `SEND_EXERCISE_ANSWERS` trong `hoczi-api/src/entities/AiJob.ts`; `enqueue(type, payload, maxAttempts, runAfter?)` trong `hoczi-api/src/repositories/aiJobRepository.ts`
- [x] T008 [P] `RetryableJobError` + nhận diện lỗi SES tạm thời trong `isTransient` tại `hoczi-api/src/helpers/ai/errors.ts`
- [x] T009 [P] `sendHtmlEmail({ to, subject, html, text })` ném lỗi khi SES lỗi (giữ `sendEmail` cũ) trong `hoczi-api/src/utils/send_email.ts`
- [x] T010 [P] Repositories `hoczi-api/src/repositories/exerciseSubscriptionRepository.ts`, `dailyExerciseSetRepository.ts`, `exerciseDeliveryRepository.ts` (CRUD, phân trang, `createDueDeliveries()` SQL idempotent, `claimSetForGeneration()`, `findRecentQuestions()`)
- [x] T011 [P] DTO (class-validator) cho mọi body trong contracts/api.md tại `hoczi-api/src/dto/dailyExercise.dto.ts` (`send_time` regex `^([01]\d|2[0-3]):(00|15|30|45)$`, `questions_per_day` 1–10, timezone IANA hợp lệ)

**Checkpoint**: `npx tsc --noEmit` (api) pass; `yarn migration:run` tạo đủ bảng.

## Phase 3: User Story 1 — Nhận đề và đáp án hằng ngày (P1) 🎯 MVP

**Goal**: Đăng ký đang bật nhận email đề đúng giờ và email đáp án sau 1 giờ; đề/lời giải lưu DB; không gửi trùng.

**Independent Test**: quickstart Q2–Q5, Q10 (tạo đăng ký bằng API admin hoặc SQL).

- [x] T012 [P] [US1] Prompt + JSON schema strict + gọi OpenAI Responses API + `recordUsage` (operation `daily_exercise`, `daily_exercise@v1`) + validate output trong `hoczi-api/src/helpers/ai/dailyExercise.ts`; thêm `daily_exercise` vào `PROMPT_VERSIONS` ở `hoczi-api/src/helpers/ai/prompts.ts`
- [x] T013 [P] [US1] Dựng email đề / đáp án (HTML escape, `\n`→`<br>`, footer Hoczi, link hủy nhận `${webAppUrl}/daily-exercises/unsubscribe?token=`) trong `hoczi-api/src/helpers/exerciseEmail.ts`
- [x] T014 [US1] `DailyExerciseService`: `scheduleDueDeliveries()`, `ensureSet()`, `sendQuestions(deliveryId, force)`, `sendAnswers(deliveryId, force)`, `markDeliveryFailed()`, `unsubscribe(token)` trong `hoczi-api/src/services/DailyExerciseService.ts`
- [x] T015 [US1] Worker: scheduler tick mỗi `schedulerIntervalMs`, xử lý 2 job type mới, `onFinalFailure` ghi `failed` vào lượt gửi trong `hoczi-api/src/worker.ts`
- [x] T016 [US1] Controller + route công khai `POST /api/daily-exercises/public/unsubscribe` trong `hoczi-api/src/controllers/DailyExerciseController.ts`, `hoczi-api/src/routes/dailyExercise.route.ts`, mount trước `authMiddleware` trong `hoczi-api/src/routes/index.ts`
- [x] T017 [P] [US1] Service web `unsubscribe(token)` (và types) trong `hoczi-web/data/services/dailyExercise.service.ts`
- [x] T018 [US1] Trang hủy nhận `hoczi-web/app/daily-exercises/unsubscribe/page.tsx` + `UnsubscribePage.tsx`; chuỗi `daily_exercise.unsubscribe_*` trong `hoczi-web/messages/vi.json` và `en.json`

**Checkpoint**: US1 chạy được độc lập (đăng ký tạo bằng SQL/admin API).

## Phase 4: User Story 2 — Admin đăng ký và giám sát (P2)

**Goal**: Admin tạo/sửa/bật tắt đăng ký, xem bộ đề & lượt gửi, sửa bài, gửi lại, chạy thử.

**Independent Test**: quickstart Q1, Q6, Q7, Q8, Q11.

- [x] T019 [US2] Service admin: list/create/update subscriptions (lọc tenant), `testRun`, list/get sets, `updateExercise` (đặt `edited_by_admin`), list deliveries, `resend(part)` trong `hoczi-api/src/services/DailyExerciseService.ts`
- [x] T020 [US2] Controller + route admin `/api/daily-exercises/admin/*` với `requireRole(ROLES.ADMIN)` trong `hoczi-api/src/controllers/DailyExerciseController.ts`, `hoczi-api/src/routes/dailyExercise.route.ts`; `GET /options` (ANY)
- [x] T021 [P] [US2] Hàm admin + options trong `hoczi-web/data/services/dailyExercise.service.ts`
- [x] T022 [US2] Trang `hoczi-web/app/admin/daily-exercises/page.tsx` + `DailyExercisesPage.tsx` (tabs) + `SubscriptionsTab.tsx` + `SetsTab.tsx` + `DeliveriesTab.tsx`
- [x] T023 [US2] Thêm mục "Daily exercises" vào sidebar `hoczi-web/app/admin/layout.tsx`; chuỗi `daily_exercise.*` (admin) trong `messages/vi.json`, `messages/en.json`

## Phase 5: User Story 3 — User tự đăng ký (P3)

**Goal**: User xem/tạo/sửa/tắt đăng ký của chính mình.

**Independent Test**: quickstart Q9.

- [x] T024 [US3] Service `listMine/createMine/updateMine` (chỉ của `req.user.id`) + route `/my-subscriptions` (ANY) trong `hoczi-api/src/services/DailyExerciseService.ts`, `DailyExerciseController.ts`, `dailyExercise.route.ts`
- [x] T025 [P] [US3] Hàm `my-subscriptions` trong `hoczi-web/data/services/dailyExercise.service.ts`
- [x] T026 [US3] Trang `hoczi-web/app/quizzes/results/daily-exercises/page.tsx` + `MyDailyExercisesPage.tsx`; menu trong `hoczi-web/app/quizzes/results/layout.tsx`; chuỗi trong `messages/vi.json`, `en.json`

## Phase 6: Polish

- [x] T027 Verification gates: `npx tsc --noEmit` + `yarn build` (api); `npx tsc --noEmit` + `npm run lint` + `npm run build` (web)
- [x] T028 Ghi kết quả kiểm tra và các kịch bản quickstart chưa chạy được vào cuối `specs/001-daily-exercise-email/quickstart.md`

## Dependencies & Execution Order

- Phase 1 → Phase 2 → US1 → (US2, US3 song song được) → Polish.
- US2/US3 dùng lại service/route của US1 (cùng file) nên làm tuần tự trong thực tế.
- Trong Phase 2: T002–T005, T007–T011 song song; T006 sau T002–T005.

## Parallel Example: User Story 1

```text
T012 helpers/ai/dailyExercise.ts   ‖   T013 helpers/exerciseEmail.ts   ‖   T017 web service
```

## Implementation Strategy

MVP = Phase 1 + 2 + US1 (admin có thể tạo đăng ký bằng SQL). Sau đó US2 (công cụ admin, cần cho vận hành vì không duyệt trước), rồi US3.
