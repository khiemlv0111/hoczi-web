# Nhập bài học HSK

Sinh file dữ liệu `app/studies/chinese/hsk5/_data/lesson-XX.ts` từ:

1. **File bài tập HTML** của giáo viên (`HSK5 tiêu chuẩn bài N.html`) – từ vựng, 13 phần bài tập, điểm.
2. **File nội dung học** `hsk5/study-XX.js` – soạn tay từ slide PPTX: tên bài, mục tiêu, khởi động,
   bài khóa + bản dịch, luyện nhanh, và `fixes` để sửa lỗi trong file HTML gốc. Xem các file có sẵn làm mẫu.

```bash
node scripts/hsk-import/import.js "app/studies/chinese/hsk5/docs/HSK5 tiêu chuẩn bài 12.html" \
  scripts/hsk-import/hsk5/study-12.js app/studies/chinese/hsk5/_data
node scripts/hsk-import/check.js app/studies/chinese/hsk5/_data
```

Sau đó đăng ký bài trong `hsk5/_data/lessons.ts`.

Lưu ý:
- `import.js` chạy phần khai báo dữ liệu trong `<script>` của file HTML để đọc dữ liệu, nên chỉ dùng với file bài tập tin cậy.
- Ngữ pháp được lấy tự động từ bảng `GRAMx_INTRO`; muốn thêm điểm ngữ pháp khác thì khai báo `extraGrammar` trong file nội dung học.
- Bài 6 và bài 9 được viết tay trực tiếp trong `_data` (bài 6 không có file HTML), không sinh bằng script.
- Bài 12–30 được soạn tay từ bản scan `hsk5/Giáo Trình Chuẩn HSK5 (Tập 1).pdf` (bài 12–18) và `Giáo Trình Chuẩn HSK 5 ( tập 2).pdf` (bài 19–30), cách làm giống HSK2–4 bên dưới; phần luyện tập 100 điểm và bản dịch bài khóa là nội dung soạn thêm.

## HSK2, HSK3, HSK4

Các bài `app/studies/chinese/hsk2/_data/` (`lesson-01.ts` … `lesson-15.ts`), `hsk3/_data/` và `hsk4/_data/` (`lesson-01.ts` … `lesson-20.ts`) được soạn tay từ bản scan
`app/studies/chinese/docs/hsk2/*.pdf`, `docs/hsk3/*.pdf`, `docs/hsk4/*.pdf` (render trang bằng `pdftoppm` rồi đọc ảnh), không dùng `import.js`.
Kiểm tra: `node scripts/hsk-import/check.js app/studies/chinese/hsk3/_data` (tương tự với `hsk2/_data`, `hsk4/_data`).
