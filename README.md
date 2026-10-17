Tôi muốn tích hợp dự án hoczi này với openai/chatgpt để upload tài liệu
- Cụ thể là giáo trình chuẩn hsk làm knowledge base, sử dụng cho bài đọc, ngữ pháp và bài tập cũng như đáp án, cũng như là RAG. 
- Docs file nằm ở openai-integration-guide.md hướng dẫn
- ./hoczi-web/hoczi-api ==> đây là path của Backend dự án Hoczi
- Còn đây ./hoczi-web là path của Frontend
trên Sidebar của admin /admin hãy thêm item Knowledge base với path  /knowledge-base trang này sẽ quản lý list, thêm, sửa xoá knowledge base


- các trang /quizzes/results/ai-learn/[topic] đang là hardcode, hãy apply AI chatbot cho các trang này
- Ví dụ trang /quizzes/results/ai-learn/science như trong ảnh 
