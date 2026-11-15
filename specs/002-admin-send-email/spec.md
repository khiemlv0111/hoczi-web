# Feature Specification: Admin gửi email từ hệ thống

**Feature Branch**: `002-admin-send-email`

**Created**: 2026-11-15

**Status**: Draft

**Input**: User description: "Trong trang admin /admin thêm chức năng gửi email, gửi đến 1 hoặc nhiều email, bằng email của hệ thống với title và content."

## Clarifications

### Session 2026-11-15

- Q: Nguồn người nhận? → A: Cả hai — gõ địa chỉ tự do và chọn từ danh sách user.
- Q: Số người nhận tối đa và cách gửi? → A: Tối đa 1 000 mỗi lần, gửi nền, có tiến độ.
- Q: Định dạng nội dung? → A: Soạn thảo có định dạng (đậm, nghiêng, danh sách, link…), không ảnh/đính kèm.

## Bối cảnh hiện trạng

- Hệ thống đã có một chức năng gửi email tự do, nhưng **ai cũng gọi được mà không cần đăng nhập**. Người ngoài có thể dùng địa chỉ email của Hoczi để gửi thư tùy ý (spam, lừa đảo), làm hỏng uy tín tên miền và có thể khiến dịch vụ gửi email bị khóa.
- Chức năng đó báo "thành công" kể cả khi gửi thất bại, chèn nội dung thô vào email (người gửi có thể nhúng mã/link giả), và chân email ghi sai thương hiệu ("Tefibit").
- Chưa có trang nào trên web dùng chức năng này.

Tính năng mới thay thế chức năng cũ bằng một công cụ chỉ dành cho admin, an toàn và có lưu lịch sử.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Admin soạn và gửi email tới một hoặc nhiều người (Priority: P1)

Admin vào mục "Gửi email" trong trang quản trị, gõ địa chỉ và/hoặc chọn user làm người nhận (một hoặc nhiều), tiêu đề và nội dung,
xem trước, rồi bấm gửi. Mỗi người nhận nhận một email riêng từ địa chỉ email hệ thống của Hoczi, mang thương hiệu Hoczi.
Sau khi gửi, admin thấy kết quả: bao nhiêu email gửi thành công, địa chỉ nào thất bại và vì sao.

**Why this priority**: Đây là toàn bộ giá trị cốt lõi của yêu cầu.

**Independent Test**: Đăng nhập admin, gửi một email tới 2 người (1 địa chỉ gõ tay, 1 user chọn từ danh sách); cả hai hộp thư nhận được email với đúng tiêu đề, nội dung, người gửi là email hệ thống; mỗi người chỉ thấy địa chỉ của chính mình.

**Acceptance Scenarios**:

1. **Given** admin đã đăng nhập, **When** nhập 1 địa chỉ hợp lệ, tiêu đề, nội dung và bấm gửi, **Then** người nhận nhận email đúng tiêu đề và nội dung, người gửi là email hệ thống Hoczi.
2. **Given** admin nhập 3 địa chỉ (phân tách bằng dấu phẩy, chấm phẩy hoặc xuống dòng), **When** bấm gửi, **Then** mỗi người nhận một email riêng và không thấy địa chỉ của người khác.
3. **Given** danh sách có địa chỉ sai định dạng hoặc trùng lặp, **When** admin bấm gửi, **Then** hệ thống chỉ rõ địa chỉ sai và không gửi cho tới khi admin sửa; địa chỉ trùng chỉ gửi một lần.
4. **Given** tiêu đề hoặc nội dung trống, **When** bấm gửi, **Then** nút gửi bị chặn và báo lỗi rõ ràng.
5. **Given** một địa chỉ bị dịch vụ email từ chối, **When** gửi xong, **Then** admin thấy địa chỉ đó ở trạng thái thất bại kèm lý do, các địa chỉ khác vẫn được gửi.
6. **Given** nội dung có chữ đậm, danh sách và link, **When** người nhận mở email, **Then** định dạng hiển thị đúng như trong bản xem trước; mọi mã/thẻ không được phép (script, sự kiện, link javascript:) bị loại bỏ.
7. **Given** người chưa đăng nhập hoặc không phải admin, **When** cố gửi email qua hệ thống, **Then** bị từ chối và không email nào được gửi.

---

### User Story 2 - Xem lịch sử email đã gửi (Priority: P2)

Admin xem danh sách các lần gửi trước: thời gian, người gửi (admin nào), tiêu đề, số người nhận, số thành công/thất bại;
mở chi tiết để xem nội dung và trạng thái từng người nhận.

**Why this priority**: Cần để kiểm tra lại, đối soát khi người nhận báo không nhận được, và truy vết ai đã gửi gì.

**Independent Test**: Sau khi gửi ở US1, mở trang lịch sử, thấy đúng lần gửi với tiêu đề, số người nhận và trạng thái từng địa chỉ.

**Acceptance Scenarios**:

1. **Given** admin đã gửi email, **When** mở lịch sử, **Then** lần gửi hiện ở đầu danh sách với thời gian, admin gửi, tiêu đề, số người nhận, số thành công/thất bại.
2. **Given** một lần gửi có địa chỉ thất bại, **When** mở chi tiết, **Then** thấy từng địa chỉ với trạng thái và lý do lỗi.

---

### Edge Cases

- Danh sách người nhận vượt giới hạn cho phép mỗi lần gửi → chặn và báo số tối đa.
- Địa chỉ có khoảng trắng, chữ hoa/thường khác nhau → chuẩn hóa trước khi kiểm tra trùng.
- Tiêu đề quá dài (> 200 ký tự) hoặc nội dung quá dài (> 20 000 ký tự) → báo lỗi.
- Dịch vụ email tạm thời lỗi hoặc giới hạn tốc độ → thử lại có giới hạn; quá giới hạn thì đánh dấu thất bại, không báo "thành công" giả.
- Admin bấm gửi hai lần liên tiếp (double click) → chỉ tạo một lần gửi.
- Admin rời trang hoặc hệ thống khởi động lại giữa chừng → việc gửi tiếp tục; địa chỉ đã gửi xong không bao giờ được gửi lại. Riêng địa chỉ đang được gửi đúng lúc hệ thống dừng có thể nhận email 2 lần (xem Assumptions).
- User được chọn không có email hợp lệ → không cho thêm vào danh sách người nhận và báo ngay cho admin lúc chọn. Nếu máy chủ vẫn nhận được user không hợp lệ (VD dữ liệu đổi giữa chừng) thì từ chối cả lần gửi và nêu rõ user nào, không gửi một phần.
- Email hệ thống chưa được cấu hình → báo lỗi rõ cho admin, không gửi.
- Nội dung chứa link → hiển thị được trong email nhưng không thể chèn mã/HTML tùy ý.

## Requirements *(mandatory)*

### Functional Requirements

**Phân quyền & an toàn**

- **FR-001**: Chỉ người dùng có vai trò admin (đã đăng nhập) MUST dùng được chức năng gửi email; kiểm tra phía máy chủ.
- **FR-002**: Chức năng gửi email tự do hiện có (không cần đăng nhập) MUST bị gỡ bỏ hoặc chặn bằng cùng quyền admin, để không còn đường nào gửi email tùy ý mà không đăng nhập.
- **FR-003**: Email MUST luôn được gửi từ địa chỉ email hệ thống đã cấu hình; admin không được đổi địa chỉ người gửi.

**Soạn & gửi**

- **FR-004**: Admin MUST nhập được một hoặc nhiều người nhận. Admin có thể **gõ địa chỉ tự do** (phân tách bằng dấu phẩy, chấm phẩy hoặc xuống dòng) **và/hoặc chọn từ danh sách user** của hệ thống (tìm theo tên/email); hai nguồn được gộp và loại trùng.
- **FR-005**: Hệ thống MUST kiểm tra định dạng từng địa chỉ, loại trùng (không phân biệt hoa/thường), và hiển thị số người nhận hợp lệ trước khi gửi.
- **FR-006**: Mỗi lần gửi MUST có tối đa **1 000** người nhận. Việc gửi chạy **nền**: admin bấm gửi xong có thể rời trang; trang chi tiết hiển thị **tiến độ** (đã gửi / thất bại / còn chờ) và tự cập nhật tới khi hoàn tất.
- **FR-007**: Admin MUST nhập tiêu đề (bắt buộc, 1–200 ký tự) và nội dung (bắt buộc, tối đa 20 000 ký tự). Nội dung soạn bằng **trình soạn thảo có định dạng**: đậm, nghiêng, gạch chân, tiêu đề nhỏ, danh sách, trích dẫn, link. Không có ảnh, bảng hay tệp đính kèm.
- **FR-008**: Admin MUST xem trước email (tiêu đề, nội dung, khung thương hiệu Hoczi) trước khi gửi.
- **FR-009**: Mỗi người nhận MUST nhận một email riêng; không người nhận nào thấy địa chỉ của người khác.
- **FR-010**: Nội dung có định dạng MUST được lọc ở máy chủ, chỉ giữ các định dạng cho phép ở FR-007 (loại bỏ script, style, thuộc tính sự kiện, link không phải http/https/mailto); email kèm phần văn bản thuần sinh từ nội dung cho ứng dụng không hiển thị HTML.
- **FR-011**: Email MUST dùng khung thương hiệu Hoczi (logo, chân email Hoczi), không còn tên "Tefibit".
- **FR-012**: Sau khi gửi, hệ thống MUST báo kết quả thật: số thành công, số thất bại và lý do từng địa chỉ thất bại; không báo thành công khi gửi lỗi.
- **FR-013**: Lỗi tạm thời của dịch vụ email MUST được thử lại có giới hạn trước khi đánh dấu thất bại.
- **FR-014**: Hệ thống MUST chống gửi trùng khi admin bấm gửi nhiều lần cho cùng một lần soạn.

**Lịch sử**

- **FR-015**: Hệ thống MUST lưu mỗi lần gửi: admin gửi, thời gian, tiêu đề, nội dung, danh sách người nhận và trạng thái từng người nhận (chờ, đã gửi, thất bại + lý do).
- **FR-016**: Admin MUST xem được danh sách lịch sử (mới nhất trước, có phân trang) và chi tiết từng lần gửi.

### Key Entities

- **Lần gửi email (Email Campaign/Broadcast)**: một lần admin bấm gửi; admin gửi, tiêu đề, nội dung (đã lọc), thời gian, số người nhận, số đã gửi/thất bại/còn chờ, trạng thái tổng (đang gửi, hoàn tất, hoàn tất có lỗi).
- **Người nhận (Email Recipient)**: một địa chỉ trong lần gửi; địa chỉ, user liên kết (nếu có), trạng thái, thời điểm gửi, lý do lỗi.
- Dùng lại: **User** (admin gửi; người nhận nếu chọn từ danh sách user).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 0 email có thể được gửi qua hệ thống bởi người chưa đăng nhập hoặc không phải admin.
- **SC-002**: Admin soạn và gửi một email tới 5 người trong dưới 2 phút.
- **SC-007**: Khi hệ thống hoạt động bình thường (không bị dừng giữa chừng), một lần gửi 1 000 người nhận hoàn tất (mọi địa chỉ ở trạng thái đã gửi hoặc thất bại) trong vòng 30 phút; admin thấy tiến độ cập nhật trong lúc gửi. Nếu hệ thống dừng giữa chừng, việc gửi tự tiếp tục trong vòng 15 phút sau khi hệ thống chạy lại.
- **SC-003**: 100% lần gửi hiển thị kết quả đúng với thực tế (số thành công/thất bại khớp với email thực sự tới/không tới).
- **SC-004**: 100% lần gửi tra cứu lại được trong lịch sử với trạng thái từng người nhận.
- **SC-005**: Không người nhận nào thấy địa chỉ email của người nhận khác.
- **SC-006**: Nội dung có định dạng hiển thị đúng như bản xem trước trong Gmail và Outlook; 0 email chứa mã/thẻ ngoài danh sách cho phép.

## Assumptions

- "Email của hệ thống" là địa chỉ người gửi đã cấu hình sẵn cho Hoczi (đang dùng cho các email khác); không cần nhiều địa chỉ người gửi.
- Chỉ vai trò admin dùng; giáo viên/user thường không có chức năng này trong giai đoạn này.
- Không có tệp đính kèm, không hẹn giờ gửi, không mẫu email lưu sẵn, không theo dõi mở/click (có thể bổ sung sau).
- Không cần link hủy nhận vì đây là email thông báo do admin chủ động gửi, không phải bản tin định kỳ.
- Admin của một tenant chỉ thấy lịch sử gửi của tenant mình; admin hệ thống thấy tất cả (giống quy tắc phân quyền của các tính năng admin khác).
- Nếu hệ thống dừng đúng lúc đang gửi tới một địa chỉ, không thể biết email đó đã đi hay chưa; hệ thống chọn gửi lại (người nhận có thể nhận 2 lần) thay vì bỏ sót. Tối đa ảnh hưởng một lô đang gửi (≤ 50 địa chỉ).
- Dịch vụ gửi email hiện tại của hệ thống được dùng lại; nếu dịch vụ còn ở chế độ thử nghiệm (chỉ gửi tới địa chỉ đã xác minh) thì đó là ràng buộc vận hành, không thuộc phạm vi tính năng.
