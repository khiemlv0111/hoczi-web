# Quickstart: kiểm tra chức năng admin gửi email

## Chuẩn bị

1. `hoczi-api/.env`: DB, `ACCESS_SECRET`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `FROM_EMAIL` (đã verify trên SES; nếu SES
   còn sandbox thì địa chỉ nhận cũng phải verify). Tùy chọn: `EMAIL_SEND_RATE_PER_SECOND` (mặc định 10).
2. `cd hoczi-api && yarn migration:run` → có bảng `email_broadcasts`, `email_broadcast_recipients`.
3. Chạy `yarn dev`, `yarn worker:dev`, `cd ../hoczi-web && npm run dev`.

## Kịch bản

| # | Bước | Kết quả mong đợi |
|---|---|---|
| Q1 (US1) | Admin → `/admin/emails` → gõ 1 địa chỉ thật + chọn 1 user, tiêu đề, nội dung có chữ đậm + danh sách + link → Xem trước → Gửi | Hai hộp thư nhận 2 email riêng, From = `FROM_EMAIL`, định dạng giống bản xem trước, mỗi người chỉ thấy địa chỉ mình |
| Q2 (US1) | Nhập `a@x.com, A@X.com; b@x` | Báo `b@x` sai; sửa xong thì chỉ còn 1 người nhận `a@x.com` |
| Q3 (US1) | Dán vào editor đoạn `<script>alert(1)</script>` và link `javascript:alert(1)` | Email hiển thị chữ thường, không có script; link javascript bị từ chối |
| Q4 (US1) | Bấm Gửi 2 lần thật nhanh | Chỉ 1 lần gửi trong lịch sử, mỗi người nhận 1 email |
| Q5 (US1) | Gửi tới 1 địa chỉ chưa verify (SES sandbox) + 1 địa chỉ đã verify | Lần gửi `completed_with_errors`; địa chỉ chưa verify `failed` kèm lý do; địa chỉ kia `sent` |
| Q6 (US1) | Gửi 200 địa chỉ test (VD `success+N@simulator.amazonses.com`) | Trang chi tiết hiển thị tiến độ tăng dần tới 200 đã gửi |
| Q7 (US1) | Dừng worker khi đang gửi Q6, chạy lại | Gửi tiếp phần còn lại; không địa chỉ nào nhận 2 lần (trừ địa chỉ đang gửi dở đúng lúc dừng) |
| Q8 (US2) | Mở lịch sử | Lần gửi mới nhất ở đầu: thời gian, admin, tiêu đề, số người nhận, đã gửi/thất bại; chi tiết lọc được theo trạng thái |
| Q9 (bảo mật) | `curl -X POST /api/admin/send-email` không token / token admin | 401 (cả router admin cần đăng nhập) / 404 (route đã gỡ) |
| Q10 (bảo mật) | `POST /api/admin/emails` không token / token user thường | 401 / 403, không email nào được gửi |
| Q11 (tenant) | Đăng nhập admin thuộc tenant A → ô chọn người nhận tìm user; chọn user không có email hợp lệ; gọi thẳng `POST /api/admin/emails` với `user_ids` là user của tenant B; mở lịch sử | Chỉ thấy user tenant A; user không có email bị khóa chọn và hiện "Không có email hợp lệ"; API trả 400 `invalid_user_ids: [id]` và không tạo lần gửi; lịch sử chỉ có lần gửi của tenant A, mở lần gửi tenant khác → 404 |

## Cổng kiểm tra (constitution VI)

```bash
cd hoczi-api && npx tsc --noEmit && yarn build
cd ../hoczi-web && npx tsc --noEmit && npm run lint && npm run build
```

`yarn build` của API chạy được sau T002 (`ignoreDeprecations` → `"5.0"`).

## Kết quả kiểm tra (2026-11-15)

| Kiểm tra | Kết quả |
|---|---|
| Migration trên Postgres tạm: chạy, revert, chạy lại; `schema:log` | ✅ không chênh lệch với entity |
| Validate nội dung: node `image`, link `javascript:`, heading 1, nội dung rỗng | ✅ 400 kèm lý do |
| Render: `<script>` trong text bị escape, `href` có `&` và `"` được escape; bản text thuần đúng | ✅ |
| Người nhận: địa chỉ sai → 400 `invalid_emails`; user không có email / khác tenant → 400 `invalid_user_ids`; 0 hoặc 1 001 người → 400; trùng hoa/thường gộp lại; user được chọn gắn `user_id` | ✅ |
| Tìm người nhận: admin tenant chỉ thấy user tenant mình; `has_valid_email` đúng | ✅ |
| Double submit đồng thời cùng `client_request_id` | ✅ 1 lần gửi, 1 job |
| Gửi 119 người (SES stub): lỗi tạm thời thử lại thành công, `MessageRejected` → failed kèm lý do, 5 người kẹt `sending` 6 phút được gửi lại, không gửi trùng, heartbeat cập nhật | ✅ `completed_with_errors`, 118 sent / 1 failed |
| Chạy lại job đã xong | ✅ không gửi thêm |
| Lỗi cấu hình (`UnrecognizedClientException`) | ✅ dừng cả lần gửi, mọi người nhận `failed` với cùng lý do |
| Lịch sử theo tenant; admin tenant xem lần gửi tenant khác | ✅ 404 |
| `requeueStale(10, 'send_email_broadcast')` chỉ đụng job gửi email | ✅ |
| HTTP (API thật trên DB tạm): Q9, Q10, danh sách, lỗi `invalid_emails`, lỗi DTO | ✅ 401/404/401/403/200/400/400 |
| `npx tsc --noEmit` + `yarn build` api | ✅ |
| `npx tsc --noEmit` + `npm run build` web | ✅ (route `/admin/emails`) |
| `npm run lint` web | ⚠️ file mới không có lỗi; toàn dự án còn 167 lỗi có sẵn (không đổi so với trước) |
| Gửi SES thật, hiển thị trên Gmail/Outlook, thao tác giao diện trong trình duyệt, 1 000 người nhận | ❌ chưa chạy — cần SES thật (Q1–Q8 trên môi trường dev) |
