# Research: Admin gửi email từ hệ thống

## R1. Định dạng nội dung an toàn

- **Decision**: Web dùng một editor TipTap rút gọn (`EmailEditor`, StarterKit với heading 2–3; tắt code, codeBlock; Link chỉ http/https/mailto),
  gửi `editor.getJSON()` lên server. Server có `helpers/richText.ts`:
  `validateDoc(json)` (kiểm tra cấu trúc, node/mark theo danh sách cho phép, độ sâu ≤ 10, ≤ 20 000 ký tự text) và
  `renderHtml(doc)` / `renderText(doc)` tự sinh HTML với style inline (hợp với email) và text thuần.
- **Rationale**: Không bao giờ parse HTML do client gửi, nên không có lớp lỗ hổng XSS/HTML injection. Không cần thêm thư viện
  (`sanitize-html`, DOMPurify + jsdom). Editor hiện có (`RichTextEditor`) cho phép ảnh base64 và màu, không hợp với email, nên làm editor riêng.
- **Alternatives**: Gửi HTML rồi sanitize bằng `sanitize-html` (thêm dependency, vẫn phải tin cấu hình allow-list đúng);
  Markdown (admin phải học cú pháp).

## R2. Gửi nền và tiến độ

- **Decision**: Một job `send_email_broadcast` cho mỗi lần gửi, trong `ai_jobs` / `src/worker.ts`. Job lặp theo lô 50 người nhận
  (`UPDATE … WHERE id IN (SELECT … WHERE status='pending' … FOR UPDATE SKIP LOCKED LIMIT 50) SET status='sending'`).
  Giới hạn tốc độ bằng `EMAIL_SEND_RATE_PER_SECOND` (mặc định 10; SES production mặc định 14/s).
  Tiến độ = đếm trạng thái người nhận; web gọi lại `GET /api/admin/emails/:id` mỗi 3 giây khi lần gửi đang `sending`.
- **Rationale**: Dùng lại hạ tầng của task 2 (bền qua restart, nhiều worker an toàn). 1 000 người ở 10/s ≈ 100 giây.
- **Chống gửi trùng khi crash**: người nhận ở trạng thái `sending` quá 5 phút được trả về `pending` khi job chạy lại. Có thể gửi
  trùng tối đa cho các địa chỉ đang gửi dở đúng lúc crash (≤ 1 lô = 50). Đã ghi vào Assumptions của spec.
- **Phục hồi sau crash**: job `send_email_broadcast` ở trạng thái `running` bị bỏ dở chỉ được requeue sau `AI_WORKER_STALE_JOB_MINUTES`
  (mặc định 30 phút). Để đạt SC-007 (tiếp tục trong ≤ 15 phút), job này cập nhật `ai_jobs.locked_at` sau mỗi email (heartbeat) và worker
  requeue riêng job `send_email_broadcast` có `locked_at` cũ hơn 10 phút (`aiJobRepository.requeueStale` nhận thêm tham số theo loại job).
  Heartbeat theo từng email (không theo lô) vì trường hợp xấu nhất một lô 50 địa chỉ đều lỗi tạm thời và chờ 2 + 4 + 8 s mỗi địa chỉ
  mất ~12 phút, vượt ngưỡng 10 phút; còn giữa hai email liên tiếp tối đa ~14 s nên worker còn sống không bao giờ bị requeue nhầm.
- **Alternatives**: Gửi đồng bộ trong request (timeout với 1 000 người); một job cho mỗi người nhận (1 000 dòng `ai_jobs`, khó kiểm soát tốc độ);
  SES bulk/template API (phải quản lý template trên SES, thừa với nhu cầu hiện tại).

## R3. Phân loại lỗi SES

- **Decision**: Dùng `isTransient` (task 2 đã nhận diện `$retryable`, 5xx, throttling). Lỗi tạm thời → thử lại cho người nhận đó
  tối đa 3 lần (chờ 2 s, 4 s, 8 s); lỗi khác (`MessageRejected`, `MailFromDomainNotVerifiedException`, địa chỉ không hợp lệ…) → `failed`
  ngay, kèm `error` (≤ 500 ký tự, không lộ thông tin nhạy cảm). Nếu lỗi là cấu hình (thiếu `FROM_EMAIL`, sai credentials) thì dừng cả
  lần gửi: mọi người nhận còn `pending` → `failed` với cùng lý do, lần gửi → `completed_with_errors`.

## R4. Chống double-click

- **Decision**: Web sinh `client_request_id` (UUID v4, `crypto.randomUUID()`) khi mở form soạn, gửi kèm request. Unique `(created_by, client_request_id)`.
  Nếu đã tồn tại → trả lại lần gửi đó (200), không tạo mới. Nút gửi cũng bị khóa trong lúc chờ.

## R5. Phân quyền và tenant

- **Decision**: Cả router `/api/admin` chạy `authMiddleware` + `requireRole(ROLES.ADMIN)`. Lần gửi lưu `tenant_id` của admin.
  Admin có tenant chỉ thấy lịch sử của tenant mình; `super_admin`/admin hệ thống thấy tất cả (giống task 2).
  Chọn user: admin có tenant chỉ chọn được user cùng tenant (service kiểm tra lại `user_ids`). Địa chỉ gõ tay không bị giới hạn.
- Danh sách user để chọn: endpoint mới `GET /api/admin/emails/recipients?keyword=` trả tối đa 20 user `{ id, name, email, has_valid_email }` **trong phạm vi tenant của admin** (admin không tenant / `super_admin` thấy tất cả). Không dùng `/api/users/user-list` (không lọc tenant) hay `/api/users/user-tenant-list` (chỉ trả user không thuộc tenant nào). Web không cho chọn user có `has_valid_email = false`.

## R6. Gỡ chức năng cũ

- **Decision**: Xóa route `POST /api/admin/send-email`, `AdminController.sendEmail`, `UserService.sendEmail`, `SendEmailRequest`,
  `UserService.registerService` (web, không nơi nào gọi). Giữ hàm `sendEmail` cũ trong `utils/send_email.ts` chỉ nếu còn nơi dùng;
  nếu không còn thì xóa luôn và chuyển khung email sang `helpers/emailLayout.ts` (sửa footer "Tefibit" → Hoczi).

## R8. Cổng build của API (constitution VI)

- **Decision**: Sửa `hoczi-api/tsconfig.json` `"ignoreDeprecations": "6.0"` → `"5.0"`.
- **Rationale**: TypeScript đang cài là 5.9.3; giá trị `"6.0"` chỉ hợp lệ với TypeScript 6 nên `tsc`, `yarn build`, `yarn dev` (ts-node) đều lỗi TS5103.
  `"5.0"` giữ đúng mục đích (tắt cảnh báo deprecation của TS 5.x) và đã được kiểm chứng compile sạch ở task 001.
- **Alternatives**: Nâng TypeScript lên 6.x (thay đổi lớn hơn, có thể kéo theo lỗi type khác, ngoài phạm vi tính năng).

## R7. Khung email

- **Decision**: `helpers/emailLayout.ts` dùng chung cho email admin và (sau này) email bài tập: logo Hoczi, nội dung, footer
  "Email được gửi từ Hoczi". Email admin **không** có link hủy nhận (thông báo trực tiếp, theo giả định của spec).
