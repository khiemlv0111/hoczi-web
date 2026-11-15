# Research: Gửi bài tập hằng ngày qua email

## R1. Lập lịch hằng ngày

- **Decision**: "Scheduler tick" mỗi 60 giây trong vòng lặp của `hoczi-api/src/worker.ts` (cùng chỗ với `requeueStale`).
  Tick chạy một câu SQL tạo lượt gửi cho đăng ký tới giờ (`INSERT … SELECT … ON CONFLICT DO NOTHING RETURNING`),
  rồi enqueue job `send_daily_exercises` cho từng lượt gửi mới.
- **Rationale**: Worker đã là process nền duy nhất (PM2 `hoczi-ai-worker`). Unique partial index
  `(subscription_id, delivery_date) WHERE kind = 'scheduled'` làm tick idempotent khi restart hoặc chạy nhiều worker.
  Đăng ký trễ giờ (worker dừng) vẫn được gửi trong cùng ngày; qua ngày mới thì ngày cũ không còn khớp → không gửi bù (đúng spec).
- **Alternatives**: `node-cron` trong API (chạy theo từng instance → gửi trùng, đã có dependency nhưng không an toàn);
  cron hệ điều hành (thêm hạ tầng); job tự hẹn lại chính nó (phức tạp, mất lịch nếu job lỗi cuối).
- **Rủi ro**: tick insert lượt gửi nhưng enqueue lỗi → lượt gửi kẹt `pending`. Giảm thiểu: insert + enqueue trong một transaction.

## R2. Hẹn gửi đáp án sau 1 giờ

- **Decision**: Sau khi gửi email đề thành công, enqueue `send_exercise_answers` với `run_after = now() + 60 phút`
  (`aiJobRepository.enqueue` thêm tham số `runAfter`). Độ trễ cấu hình được qua env `DAILY_EXERCISE_ANSWER_DELAY_MINUTES` (mặc định 60).
- **Rationale**: `ai_jobs.run_after` + `claimNext … FOR UPDATE SKIP LOCKED` đã có; bền qua restart.
- **Alternatives**: `setTimeout` (mất khi restart); tick quét `questions_sent_at < now()-1h` (thêm truy vấn, khó gửi lại thủ công).

## R3. Bộ đề dùng chung và tranh chấp khi sinh

- **Decision**: Bảng `daily_exercise_sets` unique `(subject_id, grade_id, set_date)`. `ensureSet(needed)`:
  1. `INSERT … ON CONFLICT DO NOTHING` (status `generating`) → nếu insert được thì job này sinh đề.
  2. Nếu đã tồn tại: `UPDATE … SET status='generating' WHERE id=? AND (status='failed' OR (status='generating' AND updated_at < now()-10') OR (status='ready' AND exercise_count < needed)) RETURNING` → claim được thì sinh (bổ sung số bài còn thiếu).
  3. Nếu `ready` và đủ bài → dùng; nếu đang `generating` bởi job khác → ném `RetryableJobError` (worker thử lại theo backoff 1, 2, 4… phút).
  Số bài sinh = max(`questions_per_day`) của các đăng ký đang bật cùng (môn, lớp), tối thiểu `needed`.
- **Rationale**: Đảm bảo SC-005 (1 lần sinh / môn+lớp+ngày) mà không cần khóa phân tán.
- **Alternatives**: Sinh trước toàn bộ bộ đề lúc 00:00 (lãng phí cho môn không ai đăng ký hôm đó, giờ gửi sớm bị trễ).

## R4. Gọi OpenAI

- **Decision**: Helper mới `helpers/ai/dailyExercise.ts` gọi `getOpenAI().responses.create` với
  `text.format = { type: 'json_schema', strict: true }`, `store: false`, `max_output_tokens` từ `aiConfig.limits`,
  ghi `recordUsage` (operation `daily_exercise`, `promptVersion = 'daily_exercise@v1'`). Không dùng `runGrounded`
  (nó gắn `file_search` vào kho HSK khi có vector store). Kiểm tra `assertOpenAiConfigured()` và `assertWithinBudget(null)`.
  Lỗi giữ nguyên lớp lỗi OpenAI để `isTransient` của worker phân loại; output sai → `PermanentJobError` sau khi worker đã thử lại
  (dùng lỗi tạm thời `RetryableJobError` cho output sai, tối đa theo `max_attempts`).
- **Schema**: `{ exercises: [{ question, answer, explanation }] }`, tất cả string bắt buộc.
- **Prompt**: tham số (môn, lớp, số bài, danh sách đề 7 ngày gần nhất để tránh trùng) truyền dưới dạng JSON data, không nối vào instructions.
  Yêu cầu: tiếng Việt (trừ môn ngoại ngữ), đúng trình độ lớp, đề tự chứa đủ dữ kiện, đáp án ngắn gọn, lời giải từng bước,
  **công thức viết bằng ký tự Unicode thường (×, ÷, ², √, ½, π, ≤…) — không LaTeX, không Markdown, không HTML** để email hiển thị được.
- **Validation**: đủ số bài, mỗi trường không rỗng, độ dài tối đa (question/answer 2 000, explanation 6 000 ký tự).

## R5. Gửi email (SES)

- **Decision**: Thêm `sendHtmlEmail({ to, subject, html, text })` trong `utils/send_email.ts` — **ném lỗi** khi SES lỗi (hàm cũ `sendEmail` nuốt lỗi, giữ nguyên cho chỗ dùng cũ).
  `isTransient` nhận thêm lỗi SES: `$retryable`, HTTP ≥ 500, `TooManyRequestsException`/`Throttling*`.
  Template ở `helpers/exerciseEmail.ts`: escape `& < > " '`, `\n` → `<br>`, logo Hoczi, footer Hoczi, link hủy nhận.
- **Rationale**: retry/backoff của worker chỉ hoạt động khi lỗi được ném ra; escape chặn nội dung AI chèn HTML (FR-017).

## R6. Hủy nhận

- **Decision**: `unsubscribe_token` = 32 byte ngẫu nhiên (hex 64 ký tự), unique. Link trong email mở trang web
  `/daily-exercises/unsubscribe?token=…`; trang có nút xác nhận gọi `POST /api/daily-exercises/public/unsubscribe`.
- **Rationale**: không cần đăng nhập (FR-005); dùng POST thay vì GET để trình quét link của hộp thư không tự hủy.
  Phản hồi chỉ trả tên môn/lớp, không lộ email/user.

## R7. Phân quyền và tenant

- **Decision**: API user dùng `requireRole(ROLES.ANY)` và luôn lọc theo `req.user.id`. API admin dùng `requireRole(ROLES.ADMIN)`;
  đăng ký/lượt gửi lưu `tenant_id` của user; admin có `tenant_id` chỉ thấy/sửa dữ liệu của tenant mình, admin không có tenant
  (hệ thống) thấy tất cả. Bộ đề không chứa dữ liệu tenant (dùng chung toàn hệ thống); sửa bộ đề chỉ cho admin hệ thống
  (`tenant_id` null) hoặc `super_admin`.
- **Lưu ý**: router `/api/admin` hiện tại không có auth — tính năng này **không** đặt route ở đó.

## R8. Múi giờ và giờ nhận

- **Decision**: `send_time` kiểu `time`, chọn theo bước 15 phút (DTO validate `HH:MM`, phút ∈ {00,15,30,45});
  `timezone` IANA, validate bằng `Intl.DateTimeFormat`; mặc định `Asia/Ho_Chi_Minh`. Ngày địa phương tính trong SQL:
  `(now() AT TIME ZONE timezone)::date`.

## R9. Frontend Next.js 16

- **Decision**: Trang hủy nhận là route công khai; `page.tsx` (server component) nhận `searchParams` (Promise trong Next 16) và truyền
  `token` vào `UnsubscribePage` (client). Các trang admin/user là client component như các trang hiện có, dùng `useAppData().messages` + `t()`.
