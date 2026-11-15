# Data Model: Gửi bài tập hằng ngày qua email

Migration: `hoczi-api/src/migrations/<timestamp>-AddDailyExercises.ts` (có `down` xóa 4 bảng theo thứ tự ngược). Không xóa/sửa dữ liệu cũ.

## exercise_subscriptions

| Cột | Kiểu | Ràng buộc |
|---|---|---|
| id | serial | PK |
| user_id | int | FK users(id) ON DELETE CASCADE, not null |
| tenant_id | int | null (copy từ user lúc tạo) |
| subject_id | int | FK subjects(id) ON DELETE CASCADE, not null |
| grade_id | int | FK grades(id) ON DELETE CASCADE, not null |
| questions_per_day | int | not null, default 3, CHECK 1–10 |
| send_time | time | not null, default '07:00' |
| timezone | varchar(64) | not null, default 'Asia/Ho_Chi_Minh' |
| is_active | boolean | not null, default true |
| unsubscribe_token | varchar(64) | not null, UNIQUE |
| created_by | int | null (user hoặc admin tạo) |
| created_at / updated_at | timestamptz | default now() |

- UNIQUE (user_id, subject_id, grade_id) — FR-002.
- INDEX (is_active).

## daily_exercise_sets

| Cột | Kiểu | Ràng buộc |
|---|---|---|
| id | serial | PK |
| subject_id | int | FK subjects ON DELETE CASCADE |
| grade_id | int | FK grades ON DELETE CASCADE |
| set_date | date | not null |
| status | varchar(20) | `generating` \| `ready` \| `failed`, default `generating` |
| exercise_count | int | default 0 |
| provider | varchar(50) | null (`openai`) |
| model | varchar(100) | null |
| prompt_version | varchar(50) | null |
| error | text | null |
| generated_at | timestamptz | null |
| created_at / updated_at | timestamptz | |

- UNIQUE (subject_id, grade_id, set_date) — FR-006 / SC-005.

**Trạng thái**: `generating → ready` (sinh thành công) · `generating → failed` (lỗi cuối) · `failed → generating` (job sau claim lại) ·
`generating (quá 10') → generating` (claim lại) · `ready → generating` (cần thêm bài) .

## daily_exercises

| Cột | Kiểu | Ràng buộc |
|---|---|---|
| id | serial | PK |
| set_id | int | FK daily_exercise_sets ON DELETE CASCADE |
| position | int | thứ tự 1..n |
| question | text | not null |
| answer | text | not null |
| explanation | text | not null |
| edited_by_admin | boolean | default false |
| edited_by | int | null |
| created_at / updated_at | timestamptz | |

- UNIQUE (set_id, position).

## exercise_deliveries

| Cột | Kiểu | Ràng buộc |
|---|---|---|
| id | serial | PK |
| subscription_id | int | FK exercise_subscriptions ON DELETE CASCADE |
| set_id | int | FK daily_exercise_sets ON DELETE SET NULL, null |
| user_id | int | not null (để lọc) |
| tenant_id | int | null |
| delivery_date | date | ngày địa phương theo timezone đăng ký |
| kind | varchar(20) | `scheduled` \| `test`, default `scheduled` |
| status | varchar(20) | `pending` \| `questions_sent` \| `answers_sent` \| `failed` \| `skipped` |
| exercise_count | int | null — số bài đã gửi |
| questions_sent_at | timestamptz | null |
| answers_sent_at | timestamptz | null |
| error | text | null |
| created_at / updated_at | timestamptz | |

- UNIQUE (subscription_id, delivery_date) WHERE kind = 'scheduled' — FR-014 / SC-003.
- INDEX (delivery_date), INDEX (status).

**Trạng thái**: `pending → questions_sent → answers_sent`; `pending → skipped` (đăng ký bị tắt trước khi gửi đề, chỉ với `scheduled`);
bất kỳ → `failed` (job lỗi cuối, ghi `error`); admin "Gửi lại" đưa `failed` về luồng gửi tương ứng.

## Dùng lại

- `ai_jobs`: thêm `AiJobType.SEND_DAILY_EXERCISES = 'send_daily_exercises'`, `SEND_EXERCISE_ANSWERS = 'send_exercise_answers'` (payload `{ deliveryId, force? }`). Không đổi schema.
- `ai_usage_logs`: operation `daily_exercise`.
- `users.email`, `subjects.name`, `grades.name`.
