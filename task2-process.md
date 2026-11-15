# Task 2 — Gửi bài tập hằng ngày qua email (quy trình, chưa code)

> Yêu cầu gốc: mỗi ngày gửi bài tập cho user qua email đã đăng ký (VD: Lê Văn Khiêm — 3 bài Toán),
> 1 giờ sau gửi đáp án có giải thích. Dùng OpenAI ra đề + giải đề, lưu đề và lời giải vào DB.

## A. Quy trình làm việc (Spec Kit, theo constitution)

| Bước | Lệnh | Đầu ra | Ai duyệt |
|---|---|---|---|
| 1 | `/speckit-specify` | `specs/001-daily-exercise-email/spec.md` (user stories, acceptance, edge cases) | Bạn |
| 2 | `/speckit-clarify` | Chốt các câu hỏi ở mục D, ghi lại vào spec | Bạn |
| 3 | `/speckit-plan` | `plan.md`, `data-model.md`, `contracts/` (API admin/user), `research.md` (OpenAI structured output, SES) + Constitution Check | Bạn |
| 4 | `/speckit-tasks` | `tasks.md` chia theo user story | Bạn |
| 5 | `/speckit-analyze` | Kiểm tra spec ↔ plan ↔ tasks khớp nhau | — |
| 6 | `/speckit-implement` | Code + migration; chạy tsc/lint/build; test tay bằng 1 user thật | Bạn review PR |

Chỉ sang bước sau khi bước trước đã được duyệt.

## B. Luồng nghiệp vụ (bản nháp, sẽ đưa vào spec)

```
[User/Admin] đăng ký nhận bài: môn + lớp + số bài/ngày + giờ nhận
        │
        ▼
(1) Worker tick mỗi 5 phút ── tìm đăng ký "đến giờ" mà hôm nay chưa gửi
        │
        ▼
(2) Lấy/tạo bộ đề của ngày (môn, lớp, ngày) ── OpenAI: sinh N bài + đáp án + giải thích
        │   (1 lần gọi, JSON schema) → lưu DB → ghi AiUsageLog
        ▼
(3) Gửi email ĐỀ (chỉ đề) ── lưu delivery = questions_sent, sent_at
        │   tạo job SEND_ANSWERS với run_after = sent_at + 1h
        ▼
(4) Worker nhận job sau 1h ── gửi email ĐÁP ÁN + GIẢI THÍCH ── delivery = answers_sent
        │
        ▼
(5) Lỗi → retry theo backoff có sẵn của ai_jobs; quá số lần → delivery = failed (admin thấy)
```

Tận dụng hạ tầng có sẵn:
- **Hàng đợi `ai_jobs` + `src/worker.ts`** đã có `run_after` và retry/backoff → dùng để hẹn "1h sau gửi đáp án".
  Không dùng `setTimeout`/node-cron trong API (restart là mất, chạy nhiều instance thì gửi trùng).
- **OpenAI client + `aiConfig` + `AiUsageLog`** (`src/helpers/ai/*`).
- **`utils/send_email.ts` (SES)**: cần sửa vì hiện tại (a) nuốt lỗi nên không retry được,
  (b) ghép HTML không escape, (c) footer đang ghi "Tefibit".

## C. Dữ liệu dự kiến (sẽ chốt ở `/speckit-plan`)

| Bảng | Nội dung chính |
|---|---|
| `exercise_subscriptions` | user_id, subject_id, grade_id, questions_per_day (mặc định 3), send_time, timezone, is_active, unsubscribe_token |
| `daily_exercise_sets` | date, subject_id, grade_id, status (generating/ready/failed), model, prompt_version |
| `daily_exercises` | set_id, order, question, answer, explanation (markdown/LaTeX) |
| `exercise_deliveries` | subscription_id, set_id, status (pending/questions_sent/answers_sent/failed), questions_sent_at, answers_sent_at, error — unique(subscription_id, date) để không gửi trùng |

Thêm migration TypeORM (có `down`), các lớp Controller → Service → Repository, job type mới `SEND_DAILY_EXERCISES`, `SEND_EXERCISE_ANSWERS`.

## D. Câu hỏi cần bạn chốt (bước clarify)

1. **Ai nhận?** User tự đăng ký (opt-in) trên web, admin gán cho user/lớp, hay cả hai?
2. **Đề dùng chung hay riêng?** Chung theo (môn, lớp, ngày) thì rẻ và dễ kiểm soát; riêng từng user thì tốn OpenAI hơn.
3. **Duyệt nội dung:** constitution (nguyên tắc IV) yêu cầu nội dung AI phải qua bước duyệt nháp trước khi tới học viên.
   Chọn: (a) sinh trước, admin duyệt trước giờ gửi, nếu chưa duyệt thì không gửi; (b) gửi tự động, ghi ngoại lệ vào plan và cho admin xem/sửa sau.
4. **Môn/lớp:** chỉ Toán lúc đầu hay mọi môn (Toán, Tiếng Anh, HSK…)? Có dùng Knowledge Base/RAG để bám giáo trình không?
5. **Giờ gửi:** cố định (VD 7:00 giờ VN) hay mỗi user tự chọn?
6. **Hủy nhận:** có link unsubscribe trong email (nên có) và trang quản lý trên web không?
7. **Trang admin:** có cần trang xem lịch sử bộ đề/lượt gửi, gửi lại, chạy thử thủ công không?
