# Feature Specification: Gửi bài tập hằng ngày qua email

**Feature Branch**: `001-daily-exercise-email`

**Created**: 2026-11-14

**Status**: Draft

**Input**: User description: "Mỗi ngày gửi bài tập cho users theo email đã đăng ký, ví dụ gửi cho Lê Văn Khiêm 3 bài tập Toán, 1 giờ sau gửi đáp án có giải thích; dùng OpenAI để ra đề và giải đề; lưu cả đề và lời giải vào DB."

## Clarifications

### Session 2026-11-14

- Q: Ai đăng ký nhận bài? → A: Cả hai — user tự đăng ký trên web, admin cũng có thể đăng ký thay user.
- Q: Bộ đề dùng chung hay riêng? → A: Dùng chung theo (môn, lớp, ngày); mọi người đăng ký cùng môn + lớp nhận cùng bộ đề trong ngày.
- Q: Có duyệt nội dung trước khi gửi không? → A: Không chặn; gửi tự động. Admin xem lại, sửa và gửi lại trên trang admin. (Ngoại lệ có chủ đích với nguyên tắc IV của constitution — phải ghi vào Complexity Tracking của plan.)
- Q: Hỗ trợ môn nào? → A: Mọi môn đang có trong hệ thống; giai đoạn này chưa bám tài liệu Knowledge Base.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Nhận đề và đáp án hằng ngày qua email (Priority: P1)

Một học viên (VD: Lê Văn Khiêm) đã được đăng ký nhận bài Toán lớp 5, 3 bài/ngày, giờ nhận 07:00.
Mỗi ngày lúc 07:00 học viên nhận một email chỉ chứa đề bài. Khoảng 1 giờ sau, học viên nhận
email thứ hai chứa lại đề, đáp án và lời giải thích từng bước cho từng bài.

**Why this priority**: Đây là giá trị cốt lõi của tính năng; không có nó thì mọi phần khác vô nghĩa.

**Independent Test**: Tạo sẵn một đăng ký cho một user có email thật (bằng dữ liệu mẫu hoặc trang admin),
đặt giờ nhận gần thời điểm hiện tại; kiểm tra hộp thư nhận email đề đúng giờ, rồi email đáp án sau ~1 giờ,
và cả đề lẫn lời giải được lưu lại trong hệ thống.

**Acceptance Scenarios**:

1. **Given** user có đăng ký đang bật cho Toán lớp 5, 3 bài/ngày, giờ nhận 07:00 (giờ Việt Nam), **When** tới 07:00, **Then** trong vòng 10 phút user nhận email có đúng 3 bài Toán lớp 5, không kèm đáp án.
2. **Given** user đã nhận email đề lúc T, **When** tới T + 1 giờ, **Then** trong vòng 10 phút user nhận email đáp án gồm cả 3 bài, mỗi bài có đáp án và lời giải thích.
3. **Given** hai user cùng đăng ký Toán lớp 5 trong cùng ngày, **When** cả hai nhận bài, **Then** cả hai nhận cùng một bộ đề và hệ thống chỉ ra đề một lần cho (môn, lớp, ngày) đó.
4. **Given** user đã nhận bài hôm nay, **When** hệ thống chạy lại hoặc khởi động lại, **Then** user không nhận email đề hoặc đáp án trùng lặp trong cùng ngày.
5. **Given** user bấm link "Hủy nhận" trong email, **When** mở link, **Then** đăng ký bị tắt và user không nhận thêm email nào từ ngày hôm sau (kể cả email đáp án còn chờ của hôm nay vẫn được gửi để hoàn tất bài).

---

### User Story 2 - Admin đăng ký và giám sát bài tập hằng ngày (Priority: P2)

Admin tạo đăng ký nhận bài cho một user (chọn user, môn, lớp, số bài/ngày, giờ nhận), bật/tắt đăng ký,
xem lịch sử các bộ đề đã ra và từng lượt gửi (đã gửi đề, đã gửi đáp án, lỗi). Admin có thể sửa nội dung
một bài (đề/đáp án/lời giải) nếu AI sai, gửi lại email cho một lượt gửi lỗi, và chạy thử ngay cho một đăng ký.

**Why this priority**: Vì nội dung được gửi tự động không qua duyệt trước, admin cần công cụ để phát hiện và
sửa sai; đồng thời admin là kênh đăng ký đầu tiên (VD đăng ký cho Lê Văn Khiêm).

**Independent Test**: Trong trang admin, tạo đăng ký cho một user, bấm "Chạy thử ngay", xác nhận email đề tới hộp thư,
lượt gửi hiện trong lịch sử với trạng thái đúng; sửa lời giải của một bài và thấy nội dung mới khi xem lại bộ đề.

**Acceptance Scenarios**:

1. **Given** admin đã đăng nhập, **When** tạo đăng ký cho user X với Toán lớp 5, 3 bài, 07:00, **Then** đăng ký xuất hiện trong danh sách ở trạng thái bật.
2. **Given** một lượt gửi bị lỗi, **When** admin bấm "Gửi lại", **Then** email tương ứng được gửi lại và trạng thái lượt gửi được cập nhật.
3. **Given** một bộ đề đã gửi, **When** admin sửa lời giải của bài 2 và lưu, **Then** nội dung mới được lưu và dùng cho mọi email đáp án gửi sau thời điểm sửa.
4. **Given** admin bấm "Chạy thử ngay" cho một đăng ký, **When** hệ thống xử lý, **Then** email đề được gửi ngay (không chờ tới giờ nhận) và email đáp án theo sau ~1 giờ.
5. **Given** user không phải admin, **When** cố truy cập các chức năng quản trị này, **Then** bị từ chối.

---

### User Story 3 - User tự đăng ký và quản lý việc nhận bài (Priority: P3)

User đã đăng nhập vào trang cá nhân để tự bật nhận bài tập hằng ngày: chọn môn, lớp, số bài/ngày và giờ nhận;
có thể đổi cài đặt hoặc tắt bất cứ lúc nào.

**Why this priority**: Mở rộng tính năng cho nhiều người dùng mà không cần admin; chưa cần cho MVP.

**Independent Test**: Đăng nhập bằng user thường, bật nhận Toán lớp 5 lúc giờ gần hiện tại, xác nhận nhận được email đề; tắt đăng ký và xác nhận ngày hôm sau không nhận nữa.

**Acceptance Scenarios**:

1. **Given** user đã đăng nhập và chưa có đăng ký, **When** bật nhận bài với môn + lớp + số bài + giờ, **Then** đăng ký được lưu và hiển thị lại đúng cài đặt.
2. **Given** user đã có đăng ký, **When** đổi giờ nhận, **Then** từ lần gửi kế tiếp hệ thống dùng giờ mới.
3. **Given** user đã có đăng ký, **When** tắt nhận bài, **Then** không còn email đề mới nào được gửi.
4. **Given** user chỉ xem/sửa được đăng ký của chính mình, **When** cố sửa đăng ký của người khác, **Then** bị từ chối.

---

### Edge Cases

- User không có email hoặc email không hợp lệ → không tạo được đăng ký; báo lỗi rõ ràng.
- Ra đề bằng AI thất bại hoặc trả về nội dung sai định dạng / thiếu bài → thử lại có giới hạn; nếu vẫn lỗi, lượt gửi hôm đó ghi trạng thái lỗi để admin thấy và không gửi email đề thiếu/hỏng.
- Gửi email đề thất bại (dịch vụ email lỗi tạm thời) → thử lại có giới hạn; email đáp án chỉ được hẹn sau khi email đề gửi thành công.
- Hệ thống ngừng chạy đúng giờ nhận → khi chạy lại trong cùng ngày, đăng ký "trễ giờ" vẫn được gửi (một lần); qua ngày mới thì bỏ qua ngày đã lỡ, không gửi bù.
- Admin/user đổi cài đặt (số bài, môn, lớp) sau khi bài hôm nay đã gửi → áp dụng từ ngày hôm sau.
- Hai đăng ký cùng (môn, lớp) nhưng khác số bài/ngày → bộ đề dùng chung được tạo đủ số bài lớn nhất cần trong ngày; mỗi người nhận đúng số bài mình chọn (lấy từ đầu bộ đề).
- Một user đăng ký nhiều môn → mỗi đăng ký là một lượt gửi riêng, email riêng.
- Đăng ký bị tắt giữa lúc email đề đã gửi và trước khi gửi đáp án → vẫn gửi email đáp án của ngày đó.
- Nội dung công thức toán (phân số, lũy thừa, căn) phải đọc được trong email phổ biến (Gmail, Outlook) mà không cần cài thêm.
- Nội dung do AI sinh ra không được làm vỡ email hay chèn mã độc vào email (phải được làm sạch trước khi đưa vào email).

## Requirements *(mandatory)*

### Functional Requirements

**Đăng ký nhận bài**

- **FR-001**: Hệ thống MUST lưu đăng ký nhận bài gồm: user, môn, lớp, số bài/ngày (1–10, mặc định 3), giờ nhận (mặc định 07:00), múi giờ (mặc định Asia/Ho_Chi_Minh), trạng thái bật/tắt.
- **FR-002**: Mỗi user MUST có tối đa một đăng ký cho mỗi cặp (môn, lớp).
- **FR-003**: Admin MUST tạo, sửa, bật/tắt đăng ký cho bất kỳ user nào trong phạm vi tenant của mình.
- **FR-004**: User đã đăng nhập MUST tạo, sửa, bật/tắt đăng ký của chính mình và không truy cập được đăng ký của người khác.
- **FR-005**: Mỗi email MUST có link "Hủy nhận" dùng được mà không cần đăng nhập; link chỉ tắt đúng đăng ký đó và không lộ thông tin khác.

**Ra đề và giải đề**

- **FR-006**: Mỗi ngày, với mỗi (môn, lớp) có ít nhất một đăng ký đang bật, hệ thống MUST tạo đúng một bộ đề dùng chung cho ngày đó, đủ số bài lớn nhất mà các đăng ký cần.
- **FR-007**: Mỗi bài trong bộ đề MUST có: thứ tự, đề bài, đáp án, lời giải thích từng bước; phù hợp trình độ của lớp và môn đã chọn; viết bằng tiếng Việt (trừ môn ngoại ngữ, dùng ngôn ngữ phù hợp với môn).
- **FR-008**: Đề và lời giải MUST được tạo bằng AI trong cùng một lần sinh, rồi lưu bền vào hệ thống trước khi bất kỳ email nào được gửi.
- **FR-009**: Mỗi lần gọi AI MUST được ghi nhận chi phí/sử dụng; hệ thống MUST lưu thông tin mô hình và phiên bản prompt đã dùng cho mỗi bộ đề.
- **FR-010**: Nếu AI trả về nội dung không hợp lệ (thiếu bài, thiếu đáp án/lời giải), hệ thống MUST coi là lỗi và thử lại có giới hạn, không gửi bộ đề hỏng.
- **FR-011**: Bộ đề ngày mới SHOULD tránh trùng với đề của các ngày gần đây (ít nhất 7 ngày trước) cho cùng (môn, lớp).

**Gửi email**

- **FR-012**: Vào giờ nhận của mỗi đăng ký đang bật, hệ thống MUST gửi một email chỉ chứa đề bài (không có đáp án) tới email đã đăng ký của user, với độ trễ không quá 10 phút.
- **FR-013**: Sau khi email đề gửi thành công lúc T, hệ thống MUST gửi email đáp án (đề + đáp án + lời giải) vào khoảng T + 1 giờ (độ trễ không quá 10 phút).
- **FR-014**: Mỗi đăng ký MUST nhận tối đa một email đề và một email đáp án mỗi ngày, kể cả khi hệ thống khởi động lại hoặc chạy nhiều tiến trình song song.
- **FR-015**: Hệ thống MUST lưu mỗi lượt gửi với trạng thái (chờ, đã gửi đề, đã gửi đáp án, lỗi), thời điểm gửi đề, thời điểm gửi đáp án và nội dung lỗi nếu có.
- **FR-016**: Gửi email lỗi MUST được thử lại có giới hạn với khoảng chờ tăng dần; quá giới hạn thì lượt gửi chuyển sang trạng thái lỗi.
- **FR-017**: Nội dung email MUST được làm sạch (không cho nội dung AI chèn mã/HTML tùy ý), hiển thị được công thức toán ở dạng đọc được trong các ứng dụng email phổ biến, và mang thương hiệu Hoczi.

**Quản trị**

- **FR-018**: Admin MUST xem danh sách bộ đề theo ngày/môn/lớp và chi tiết từng bài.
- **FR-019**: Admin MUST sửa được đề bài, đáp án, lời giải của từng bài; email đáp án gửi sau khi sửa dùng nội dung mới; hệ thống ghi nhận bài đã được admin chỉnh sửa.
- **FR-020**: Admin MUST xem danh sách lượt gửi (lọc theo ngày, user, trạng thái) và gửi lại email đề hoặc đáp án cho một lượt gửi.
- **FR-021**: Admin MUST "Chạy thử ngay" cho một đăng ký: gửi email đề ngay (dùng bộ đề hôm nay, tạo nếu chưa có) và hẹn email đáp án sau 1 giờ; lần chạy thử không chặn lượt gửi theo lịch nếu hôm nay chưa gửi theo lịch.
- **FR-022**: Các chức năng quản trị MUST chỉ dành cho vai trò admin, được kiểm tra ở phía máy chủ.

### Key Entities

- **Đăng ký nhận bài (Exercise Subscription)**: một user muốn nhận bài của một (môn, lớp); số bài/ngày, giờ nhận, múi giờ, bật/tắt, mã hủy nhận bí mật; ai tạo (user hay admin).
- **Bộ đề ngày (Daily Exercise Set)**: bộ đề dùng chung cho (môn, lớp, ngày); trạng thái (đang tạo, sẵn sàng, lỗi); mô hình AI và phiên bản prompt đã dùng.
- **Bài tập (Daily Exercise)**: một bài trong bộ đề; thứ tự, đề bài, đáp án, lời giải thích; cờ đã được admin sửa.
- **Lượt gửi (Exercise Delivery)**: việc gửi bộ đề của một ngày cho một đăng ký; trạng thái, thời điểm gửi đề/đáp án, số bài đã gửi, lỗi; mỗi đăng ký có tối đa một lượt gửi theo lịch mỗi ngày.
- Dùng lại: **User** (email, tenant), **Môn (Subject)**, **Lớp (Grade)**, nhật ký sử dụng AI hiện có.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: ≥ 99% lượt gửi theo lịch có email đề tới hộp thư trong vòng 10 phút sau giờ nhận đã chọn.
- **SC-002**: ≥ 99% lượt gửi đã gửi đề có email đáp án tới trong khoảng 60–70 phút sau email đề.
- **SC-003**: 0 trường hợp một đăng ký nhận hai email đề (hoặc hai email đáp án) theo lịch trong cùng một ngày.
- **SC-004**: 100% bộ đề và lời giải đã gửi đi đều tra cứu lại được trong trang admin.
- **SC-005**: Chỉ một lần ra đề cho mỗi (môn, lớp, ngày), bất kể số người đăng ký.
- **SC-006**: Admin tạo xong một đăng ký cho user trong dưới 1 phút; user tự đăng ký hoặc hủy nhận trong dưới 1 phút.
- **SC-007**: Mọi lượt gửi lỗi đều hiển thị lý do trong trang admin và có thể gửi lại bằng một thao tác.

## Assumptions

- Email nhận bài là email trong tài khoản user hiện có; không cần bước xác nhận email riêng cho tính năng này.
- Dùng lại dịch vụ gửi email và nhà cung cấp AI hiện có của hệ thống; danh mục Môn và Lớp lấy từ dữ liệu hiện có.
- Giờ nhận chọn theo bước 15 phút; múi giờ mặc định Asia/Ho_Chi_Minh.
- Chưa bám tài liệu Knowledge Base/RAG trong giai đoạn này (có thể bổ sung sau).
- Chưa có chức năng nộp bài/chấm điểm: học viên tự làm và tự đối chiếu với email đáp án.
- Ngoại lệ có chủ đích với nguyên tắc IV (không duyệt nháp trước khi gửi) được bù bằng: kiểm tra định dạng nội dung AI, lưu đầy đủ, và công cụ admin xem/sửa/gửi lại.
- Ngày (cho bộ đề và lượt gửi) tính theo múi giờ của đăng ký.
- Lần chạy thử thủ công của admin không tính là lượt gửi theo lịch.
