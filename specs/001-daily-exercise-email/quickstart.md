# Quickstart: kiểm tra tính năng bài tập hằng ngày

## Chuẩn bị

1. `hoczi-api/.env` có: DB, `ACCESS_SECRET`, `OPENAI_API_KEY`, `OPENAI_MODEL` (hỗ trợ structured outputs),
   `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `FROM_EMAIL` (đã verify trên SES; nếu SES còn sandbox thì email nhận cũng phải verify),
   `WEB_APP_URL` (VD `http://localhost:3000`). Tùy chọn: `DAILY_EXERCISE_ANSWER_DELAY_MINUTES=2` để thử nhanh.
2. `cd hoczi-api && yarn migration:run` → có 4 bảng `exercise_subscriptions`, `daily_exercise_sets`, `daily_exercises`, `exercise_deliveries`.
3. Chạy `yarn dev` (API), `yarn worker:dev` (worker), `cd ../hoczi-web && npm run dev`.

## Kịch bản

| # | Bước | Kết quả mong đợi |
|---|---|---|
| Q1 (US2) | Đăng nhập admin → `/admin/daily-exercises` → tab Đăng ký → tạo cho user có email thật: Toán, Lớp 5, 3 bài, giờ = 15 phút tới | Đăng ký xuất hiện, trạng thái bật |
| Q2 (US1) | Chờ tới giờ nhận | ≤ 10 phút: email đề với 3 bài, không có đáp án; tab Lượt gửi: `questions_sent`; tab Bộ đề: 1 bộ `ready`, 3 bài |
| Q3 (US1) | Chờ `DAILY_EXERCISE_ANSWER_DELAY_MINUTES` | Email đáp án gồm đề + đáp án + lời giải; lượt gửi `answers_sent` |
| Q4 (US1) | Restart worker trong ngày | Không có email trùng; vẫn chỉ 1 lượt gửi `scheduled` cho đăng ký hôm nay |
| Q5 (US1) | Tạo đăng ký thứ hai (user khác) cùng Toán Lớp 5 | Dùng lại cùng bộ đề; `ai_usage_logs` chỉ có 1 dòng `daily_exercise` cho bộ đề này |
| Q6 (US2) | Admin bấm "Chạy thử" một đăng ký | Email đề gửi ngay; lượt gửi `kind = test` |
| Q7 (US2) | Admin sửa lời giải bài 2 rồi "Gửi lại đáp án" | Email mới chứa lời giải đã sửa; bài có cờ "đã sửa" |
| Q8 (US2) | Đặt `OPENAI_API_KEY` sai rồi chạy thử | Lượt gửi `failed`, hiện lỗi; không có email đề hỏng; "Gửi lại" sau khi sửa key → thành công |
| Q9 (US3) | Đăng nhập user thường → `/quizzes/results/daily-exercises` → bật nhận Toán Lớp 5 | Lưu và hiển thị lại đúng cài đặt; đổi giờ / tắt hoạt động |
| Q10 (US1) | Bấm link "Hủy nhận" trong email → bấm xác nhận | Trang báo đã hủy; đăng ký `is_active = false`; email đáp án hôm nay (nếu còn chờ) vẫn tới |
| Q11 (US2) | User thường gọi `GET /api/daily-exercises/admin/sets` | 403 |

## Cổng kiểm tra (constitution VI)

```bash
cd hoczi-api && npx tsc --noEmit && yarn build
cd ../hoczi-web && npx tsc --noEmit && npm run lint && npm run build
```

## Kết quả kiểm tra (2026-11-14)

| Kiểm tra | Kết quả |
|---|---|
| Migration trên Postgres tạm (chạy toàn bộ migrations, revert, chạy lại) | ✅ ; `schema:log` không còn chênh lệch cho 4 bảng mới |
| Luồng service end-to-end trên DB tạm (OpenAI + SES được stub) | ✅ Q2–Q5, Q7, Q10 (logic), Q6 test-run, chặn sửa bộ đề với admin thuộc tenant, đăng ký trùng → 409 |
| Các trạng thái claim bộ đề (mới / đang sinh / quá 10' / lỗi / đủ / thiếu bài) | ✅ |
| `npx tsc --noEmit` web | ✅ |
| `npm run lint` web | ⚠️ File mới không có lỗi; toàn dự án còn 167 lỗi có sẵn từ trước (gồm `app/admin/layout.tsx`, `app/quizzes/results/layout.tsx`) |
| `npm run build` web | ✅ (có route `/admin/daily-exercises`, `/quizzes/results/daily-exercises`, `/daily-exercises/unsubscribe`) |
| `npx tsc --noEmit` / `yarn build` api | ⚠️ Lỗi có sẵn: `tsconfig.json` đặt `"ignoreDeprecations": "6.0"` nhưng TypeScript cài là 5.9 (TS5103). Với `--ignoreDeprecations 5.0` thì compile sạch |
| Gọi OpenAI thật, gửi SES thật, giao diện trên trình duyệt | ❌ Chưa chạy — cần key/SES thật (Q1–Q11 trên môi trường dev) |
