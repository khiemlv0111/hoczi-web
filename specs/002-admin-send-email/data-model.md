# Data Model: Admin gửi email từ hệ thống

Migration: `hoczi-api/src/migrations/<timestamp>-AddEmailBroadcasts.ts` (có `down` xóa 2 bảng). Không sửa/xóa dữ liệu cũ.

## email_broadcasts

| Cột | Kiểu | Ràng buộc |
|---|---|---|
| id | serial | PK |
| created_by | int | FK users(id) ON DELETE SET NULL, null |
| tenant_id | int | null (tenant của admin) |
| client_request_id | uuid | not null |
| subject | varchar(200) | not null, 1–200 ký tự |
| content_json | jsonb | not null — tài liệu TipTap đã validate |
| content_html | text | not null — HTML server render (chỉ thẻ cho phép) |
| content_text | text | not null — bản text thuần |
| recipient_count | int | not null, 1–1 000 |
| sent_count | int | default 0 |
| failed_count | int | default 0 |
| status | varchar(30) | `queued` \| `sending` \| `completed` \| `completed_with_errors` |
| started_at / completed_at | timestamptz | null |
| created_at / updated_at | timestamptz | |

- UNIQUE (created_by, client_request_id) — chống double-click (FR-014).
- INDEX (tenant_id, created_at DESC).

**Trạng thái**: `queued → sending` (job bắt đầu) → `completed` (không có thất bại) hoặc `completed_with_errors` (≥ 1 thất bại).

## email_broadcast_recipients

| Cột | Kiểu | Ràng buộc |
|---|---|---|
| id | serial | PK |
| broadcast_id | int | FK email_broadcasts ON DELETE CASCADE |
| email | varchar(254) | not null, lowercase, đã kiểm tra định dạng |
| user_id | int | null — user được chọn (nếu có) |
| status | varchar(20) | `pending` \| `sending` \| `sent` \| `failed` |
| attempts | int | default 0 |
| error | varchar(500) | null |
| provider_message_id | varchar(255) | null |
| locked_at | timestamptz | null — khi chuyển `sending` |
| sent_at | timestamptz | null |
| created_at / updated_at | timestamptz | |

- UNIQUE (broadcast_id, email) — mỗi địa chỉ một lần trong một lần gửi.
- INDEX (broadcast_id, status).

**Trạng thái**: `pending → sending → sent | failed`; `sending` quá 5 phút → `pending` (worker crash).

## Quy tắc validate (từ spec)

- Tiêu đề: trim, 1–200 ký tự, không chứa ký tự xuống dòng.
- Nội dung: TipTap doc hợp lệ, chỉ node/mark cho phép (plan §3), tổng text 1–20 000 ký tự.
- Người nhận: hợp `emails[]` + email của `user_ids[]` → trim + lowercase → loại trùng → mỗi địa chỉ khớp định dạng email, ≤ 254 ký tự → tổng 1–1 000.

## Dùng lại

- `ai_jobs`: thêm `AiJobType.SEND_EMAIL_BROADCAST = 'send_email_broadcast'`, payload `{ broadcastId }`.
- `users`: admin gửi; nguồn email khi chọn user.
