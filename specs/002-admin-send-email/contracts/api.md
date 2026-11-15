# API Contract: Admin Emails

Base: `/api/admin/emails`. Toàn bộ router `/api/admin` yêu cầu `Authorization: Bearer <token>` + vai trò `admin`/`super_admin`
(401 nếu không có token, 403 nếu không phải admin). Response thành công: `{ "success": true, "data": … }`;
lỗi: `{ "success": false, "message": string, "invalid_emails"?: string[], "invalid_user_ids"?: number[] }`.

## Kiểu dữ liệu

```ts
// Tài liệu TipTap (ProseMirror JSON). Chỉ các node/mark dưới đây được chấp nhận.
type RichNode =
  | { type: 'doc' | 'paragraph' | 'bulletList' | 'orderedList' | 'listItem' | 'blockquote'; content?: RichNode[] }
  | { type: 'heading'; attrs: { level: 2 | 3 }; content?: RichNode[] }
  | { type: 'hardBreak' | 'horizontalRule' }
  | { type: 'text'; text: string; marks?: RichMark[] };
type RichMark =
  | { type: 'bold' | 'italic' | 'underline' | 'strike' }
  | { type: 'link'; attrs: { href: string } };           // http:, https:, mailto: only

type BroadcastStatus = 'queued' | 'sending' | 'completed' | 'completed_with_errors';
type RecipientStatus = 'pending' | 'sending' | 'sent' | 'failed';

type BroadcastSummary = {
  id: number; subject: string; status: BroadcastStatus;
  recipient_count: number; sent_count: number; failed_count: number; pending_count: number;
  created_by: { id: number; name: string | null; email: string } | null;
  created_at: string; started_at: string | null; completed_at: string | null;
};
type BroadcastDetail = BroadcastSummary & {
  content_html: string;                                  // HTML đã render (để xem lại)
  recipients: { items: Recipient[]; total: number; page: number; limit: number };
};
type Recipient = { id: number; email: string; user_id: number | null; status: RecipientStatus; error: string | null; sent_at: string | null };
```

## Endpoints

| Method | Path | Body / Query | Data |
|---|---|---|---|
| GET | `/recipients` | `?keyword=` (≥ 0 ký tự, trả tối đa 20) | `{ id, name, email, has_valid_email }[]` — user trong phạm vi tenant của admin |
| POST | `/preview` | `{ subject, content: RichNode }` | `{ subject, html, text }` — HTML đầy đủ trong khung Hoczi, để hiển thị trong iframe xem trước |
| POST | `/` | `{ client_request_id: uuid, subject: string, content: RichNode, emails?: string[], user_ids?: number[] }` | `BroadcastSummary` (status `queued`). Cùng `client_request_id` gửi lại → trả lần gửi đã có |
| GET | `/` | `?page=1&limit=20` (limit ≤ 100) | `{ items: BroadcastSummary[], total, page, limit }` — mới nhất trước, lọc theo tenant của admin |
| GET | `/:id` | `?status=&page=1&limit=50` (lọc người nhận) | `BroadcastDetail` |

### Validate `POST /`

| Điều kiện | Kết quả |
|---|---|
| `subject` trống, > 200 ký tự hoặc có xuống dòng | 400 |
| `content` sai cấu trúc / có node, mark ngoài danh sách / link không phải http(s)/mailto / text rỗng hoặc > 20 000 ký tự | 400 |
| Có địa chỉ sai định dạng | 400, `invalid_emails: [...]` |
| `user_ids` có user không tồn tại, ngoài tenant của admin, hoặc không có email hợp lệ | 400, `invalid_user_ids: number[]`; không tạo lần gửi |
| Sau khi gộp + loại trùng: 0 hoặc > 1 000 người nhận | 400 |
| `FROM_EMAIL` chưa cấu hình | 503 `Email sending is not configured` |

## Gỡ bỏ

| Method | Path | Lý do |
|---|---|---|
| POST | `/api/admin/send-email` | Không cần đăng nhập — cho phép gửi email tùy ý (lỗ hổng). Thay bằng `POST /api/admin/emails` |

`POST /api/admin/create-user` giữ nguyên hành vi nhưng giờ cần quyền admin.

## Email gửi đi

- From: `FROM_EMAIL`; To: đúng một người nhận; Subject: `subject` của admin.
- Body: `html` (khung Hoczi + `content_html`) và `text` (`content_text`), UTF-8.
