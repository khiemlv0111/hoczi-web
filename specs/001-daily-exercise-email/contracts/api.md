# API Contract: Daily Exercises

Base: `/api/daily-exercises`. Mọi response thành công: `{ "success": true, "data": … }`.
Lỗi: `{ "success": false, "message": string }` với 400 (validate), 401, 403, 404, 409 (trùng đăng ký).

## Kiểu dữ liệu

```ts
type SubscriptionDto = {
  id: number; user_id: number; subject_id: number; grade_id: number;
  questions_per_day: number;        // 1–10
  send_time: string;                // "HH:MM", phút ∈ 00/15/30/45
  timezone: string;                 // IANA
  is_active: boolean; created_at: string; updated_at: string;
  user?: { id: number; name: string | null; email: string };   // chỉ API admin
  subject: { id: number; name: string }; grade: { id: number; name: string };
};
type ExerciseDto = { id: number; position: number; question: string; answer: string; explanation: string; edited_by_admin: boolean };
type ExerciseSetDto = {
  id: number; set_date: string; status: 'generating' | 'ready' | 'failed'; exercise_count: number;
  model: string | null; prompt_version: string | null; error: string | null; generated_at: string | null;
  subject: { id: number; name: string }; grade: { id: number; name: string };
  exercises?: ExerciseDto[];        // chỉ ở GET chi tiết
};
type DeliveryDto = {
  id: number; subscription_id: number; set_id: number | null; delivery_date: string;
  kind: 'scheduled' | 'test'; status: 'pending' | 'questions_sent' | 'answers_sent' | 'failed' | 'skipped';
  exercise_count: number | null; questions_sent_at: string | null; answers_sent_at: string | null; error: string | null;
  user: { id: number; name: string | null; email: string }; subject: { id: number; name: string }; grade: { id: number; name: string };
};
type Paged<T> = { items: T[]; total: number; page: number; limit: number };
```

## Công khai (không cần đăng nhập)

| Method | Path | Body | Data |
|---|---|---|---|
| POST | `/public/unsubscribe` | `{ token: string }` (64 hex) | `{ subject_name, grade_name }` — 404 nếu token sai |

## User đã đăng nhập (`requireRole(ANY)`)

| Method | Path | Body / Query | Data |
|---|---|---|---|
| GET | `/options` | — | `{ subjects: {id,name}[], grades: {id,name}[] }` |
| GET | `/my-subscriptions` | — | `SubscriptionDto[]` |
| POST | `/my-subscriptions` | `{ subject_id, grade_id, questions_per_day?, send_time?, timezone? }` | `SubscriptionDto` (409 nếu đã có cặp môn+lớp) |
| PUT | `/my-subscriptions/:id` | `{ questions_per_day?, send_time?, timezone?, is_active? }` | `SubscriptionDto` (404 nếu không phải của mình) |

## Admin (`requireRole(ADMIN)`, lọc theo tenant của admin nếu có)

| Method | Path | Body / Query | Data |
|---|---|---|---|
| GET | `/admin/subscriptions` | `?page&limit&keyword&is_active` | `Paged<SubscriptionDto>` |
| POST | `/admin/subscriptions` | `{ user_id, subject_id, grade_id, questions_per_day?, send_time?, timezone? }` | `SubscriptionDto` |
| PUT | `/admin/subscriptions/:id` | `{ subject_id?, grade_id?, questions_per_day?, send_time?, timezone?, is_active? }` | `SubscriptionDto` |
| POST | `/admin/subscriptions/:id/test-run` | — | `DeliveryDto` (kind `test`, status `pending`) |
| GET | `/admin/sets` | `?page&limit&date&subject_id&grade_id` | `Paged<ExerciseSetDto>` |
| GET | `/admin/sets/:id` | — | `ExerciseSetDto` kèm `exercises` |
| PUT | `/admin/exercises/:id` | `{ question?, answer?, explanation? }` | `ExerciseDto` (403 nếu admin thuộc tenant) |
| GET | `/admin/deliveries` | `?page&limit&date&status&keyword` | `Paged<DeliveryDto>` |
| POST | `/admin/deliveries/:id/resend` | `{ part: 'questions' \| 'answers' }` | `DeliveryDto` — 400 nếu gửi lại đáp án khi chưa từng gửi đề |

Mặc định: `questions_per_day = 3`, `send_time = "07:00"`, `timezone = "Asia/Ho_Chi_Minh"`, `page = 1`, `limit = 20` (tối đa 100).

## Email

| Email | Subject | Nội dung |
|---|---|---|
| Đề | `Hoczi – Bài tập {môn} {lớp} ngày {dd/MM/yyyy}` | Lời chào theo tên, N đề bài đánh số, ghi chú "Đáp án sẽ được gửi sau khoảng 1 giờ", link hủy nhận |
| Đáp án | `Hoczi – Đáp án bài tập {môn} {lớp} ngày {dd/MM/yyyy}` | Mỗi bài: đề, **Đáp án**, **Lời giải**; link hủy nhận |

Email có cả phần `text` và `html` (HTML đã escape).
