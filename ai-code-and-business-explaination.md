# Tích hợp AI (OpenAI) vào Hoczi — Tài liệu tổng hợp

> **Tài liệu này dành cho ai quay lại sau một thời gian (kể cả chính mình sau 3 tháng).** Nó gom mọi thứ về tính năng AI vào một chỗ: làm để làm gì, dùng thế nào, cài đặt và vận hành ra sao, khi lỗi thì xem đâu, và từng file code có ý nghĩa gì.
>
> Tài liệu liên quan: `openai-integration-guide.md` là **bản kế hoạch** (vì sao chọn thiết kế này, các phase, decision log). Tài liệu này mô tả **cái đã được xây**.
>
> Trạng thái (2026-10-03): code xong Phase 1–3, đã type-check và chạy thử end-to-end với OpenAI/S3 giả lập. **Chưa chạy với OpenAI thật, S3 thật, giáo trình tiếng Trung thật.** Phase 4 (đánh giá chất lượng, pilot) chưa làm.

---

## Đọc nhanh (2 phút)

- **Mục đích:** để AI soạn bài tập, bài đọc, giải thích ngữ pháp tiếng Trung (HSK) **dựa trên giáo trình Hoczi đã nạp**, có ghi nguồn (tài liệu, trang). **Giáo viên duyệt** rồi mới xuất bản vào ngân hàng câu hỏi.
- **Chatbot "Hoczi Assistant"** (nút tròn góc phải dưới mọi trang `/admin`): hỏi gì cũng được. Có **intent router** chọn 1 trong 3 đường:
  - **số liệu hệ thống** (chỉ admin): truy vấn DB qua các công cụ cố định, ví dụ "có bao nhiêu user";
  - **nội dung học / tài liệu đã upload**: trả lời theo tài liệu, kèm nguồn;
  - **câu khác**: kiến thức chung.
- **AI Learn cho học viên** (`/quizzes/results/ai-learn/<chủ đề>`, ví dụ `/science`): gia sư AI theo từng môn (12 chủ đề). Trước đây trang này gọi một API không tồn tại nên luôn báo lỗi; giờ đã nối vào OpenAI, có tìm trong tài liệu khi liên quan, không có quyền truy vấn DB.
- **3 mục mới trong sidebar admin:**
  - **AI Documents:** nạp giáo trình (PDF/MD/TXT) cho AI đọc. **Làm bước này trước.**
  - **AI Studio:** yêu cầu AI sinh nội dung, rồi duyệt, sửa và xuất bản.
  - **Knowledge base:** ghi chú kiến thức do admin viết, tự động đưa lên AI (dùng cho chatbot và hỏi đáp, chưa dùng cho AI Studio).
- **Thành phần kỹ thuật:**
  - API (`hoczi-api`);
  - **worker chạy riêng** (`src/worker.ts`, PM2 app `hoczi-ai-worker`) để xử lý tài liệu nền;
  - OpenAI (vector store + Responses API);
  - S3 lưu file gốc;
  - Postgres (5 bảng mới).
- **Muốn chạy được cần:**
  - chạy migration;
  - điền biến `OPENAI_*` và `AWS_S3_BUCKET_NAME`;
  - tạo một vector store;
  - bật CORS cho S3;
  - **chạy worker**.

  Xem [mục 8](#8-cài-đặt-và-vận-hành).
- **Khi có lỗi:** xem [mục 9](#9-xử-lý-sự-cố). Tài liệu đứng mãi ở `pending` thì gần như chắc chắn **worker không chạy**.

## Mục lục

1. [Bài toán nghiệp vụ](#1-bài-toán-nghiệp-vụ)
2. [Vai trò và quyền](#2-vai-trò-và-quyền)
3. [Hướng dẫn sử dụng giao diện](#3-hướng-dẫn-sử-dụng-giao-diện)
4. [Luồng nghiệp vụ chi tiết (phía hệ thống)](#4-luồng-nghiệp-vụ-chi-tiết-phía-hệ-thống)
5. [Các cơ chế bảo vệ](#5-các-cơ-chế-bảo-vệ)
6. [Danh sách file thay đổi và ý nghĩa](#6-danh-sách-file-thay-đổi-và-ý-nghĩa)
7. [Ví dụ một vòng đầy đủ](#7-ví-dụ-một-vòng-đầy-đủ)
8. [Cài đặt và vận hành](#8-cài-đặt-và-vận-hành)
9. [Xử lý sự cố](#9-xử-lý-sự-cố)
10. [Tra cứu nhanh](#10-tra-cứu-nhanh)
11. [Giới hạn hiện tại và việc tiếp theo](#11-giới-hạn-hiện-tại-và-việc-tiếp-theo)

---

## 1. Bài toán nghiệp vụ

Hoczi muốn dùng AI để **soạn nội dung học tiếng Trung (HSK)**: bài đọc, giải thích ngữ pháp, bài tập kèm đáp án.

Nếu để AI tự viết "từ trí nhớ" thì có ba rủi ro:

1. **Bịa kiến thức:** đưa từ vựng hoặc ngữ pháp không có trong giáo trình, hoặc sai cấp độ.
2. **Sai đáp án:** câu trắc nghiệm có hai đáp án đúng, hoặc đáp án không nằm trong các lựa chọn.
3. **Không kiểm chứng được:** giáo viên không biết nội dung lấy từ đâu.

Giải pháp là **RAG (Retrieval-Augmented Generation)**:

- Trước khi viết, AI phải **tìm trong kho giáo trình đã được duyệt** của Hoczi.
- AI viết **dựa trên đoạn tìm được** và **ghi nguồn** (tài liệu nào, trang nào).
- Server **kiểm tra tự động** kết quả, sau đó **giáo viên duyệt** rồi mới đưa tới học viên.

### Khái niệm cần biết

| Khái niệm | Ý nghĩa trong hệ thống |
|---|---|
| **Vector store** | Kho tìm kiếm theo ngữ nghĩa do OpenAI lưu trữ. Hoczi upload text giáo trình vào đây |
| **`file_search`** | Công cụ của OpenAI Responses API: AI tự tìm đoạn liên quan trong vector store trước khi trả lời |
| **Attributes** | Nhãn gắn vào từng file trong vector store (`tenant_id`, `hsk_level`…) để lọc khi tìm. Tối đa 16 nhãn |
| **Chunk (cụm)** | Một phần của tài liệu (mặc định 4 trang) được upload thành một file riêng, có ghi số trang |
| **Structured output (strict JSON schema)** | Bắt AI trả về JSON đúng cấu trúc định sẵn, để server đọc và kiểm tra được |
| **Draft (bản nháp)** | Kết quả AI sinh ra, chưa tới học viên cho tới khi được duyệt và xuất bản |
| **Tenant** | Tổ chức/trường dùng Hoczi. Tài liệu `system` dùng chung cho mọi tenant; tài liệu có `tenant_id` chỉ tenant đó thấy |
| **HSK 2.0 / 3.0** | HSK 2.0 có 6 cấp, HSK 3.0 có 9 cấp. Cùng "cấp 3" nhưng nội dung khác nhau, nên phải lưu cả chuẩn lẫn cấp |

---

## 2. Vai trò và quyền

Quyền dựa trên `users.role` có sẵn.

| Vai trò | Được làm gì | Màn hình / API |
|---|---|---|
| `admin`, `super_admin` | Upload giáo trình, theo dõi xử lý, retry, xoá, xem chi phí; quản lý ghi chú knowledge base | `/admin/ai-documents`, `/admin/knowledge-base`, `/api/knowledge/*`, `/api/knowledge-bases/*` |
| `teacher`, `author` (và admin) | Yêu cầu AI sinh nội dung, xem bản nháp, sinh lại | `/admin/ai-studio`, `POST /api/ai/generate`, `GET /api/ai/drafts` |
| `teacher` (và admin) | Sửa, duyệt, từ chối, xuất bản bản nháp vào ngân hàng câu hỏi | `/admin/ai-studio/[id]`, `PUT/POST /api/ai/drafts/:id/*` |
| Mọi user đã đăng nhập | Hỏi đáp về giáo trình, câu trả lời có trích nguồn | `POST /api/ai/ask` |

Phạm vi bản nháp:

- Admin thấy tất cả bản nháp.
- Người có tenant chỉ thấy bản nháp của tenant mình.
- Người không có tenant chỉ thấy bản nháp do chính mình tạo.

---

## 3. Hướng dẫn sử dụng giao diện

Ba mục mới nằm ở sidebar trang admin, ngay dưới **Studies**. Chatbot là nút tròn ở góc phải dưới.

```
AI Documents ──(tài liệu ready)──► AI Studio ──(duyệt + publish)──► Questions
      │
      └──────────────┬──► Chatbot (Hoczi Assistant)
Knowledge base ──────┘
```

### 3.1. AI Documents (`/admin/ai-documents`): nạp giáo trình cho AI

**Chức năng:** đây là "thư viện" mà AI được phép đọc. AI chỉ viết dựa trên tài liệu ở đây, nên **đây là bước phải làm đầu tiên**.

**Ai dùng:** `admin`, `super_admin`.

**Upload tài liệu:**

1. Bấm **+ Upload Document**.
2. Chọn file `.pdf`, `.md` hoặc `.txt`, tối đa 100 MB (đổi bằng `AI_MAX_UPLOAD_MB`).
3. Điền thông tin:

| Trường | Ý nghĩa | Lưu ý |
|---|---|---|
| **Title** | Tên tài liệu | Tự lấy theo tên file nếu để trống |
| **HSK standard** | HSK 3.0 (cấp 1–9) hoặc HSK 2.0 (cấp 1–6) | **Phải đúng.** AI chỉ tìm tài liệu cùng chuẩn và cùng cấp |
| **Level** | Cấp HSK | **Phải đúng**, lý do như trên |
| **Content type** | textbook, workbook, answer_key, grammar, reading, vocabulary, other | Dùng để lọc khi sinh bài |
| **Script** | Giản thể hoặc phồn thể | |
| **Edition** | Phiên bản sách, ví dụ `2021` | Không bắt buộc |
| **Tenant ID** | Để trống thì mọi trường dùng được; nhập ID thì chỉ tenant đó dùng | Tenant khác không bao giờ thấy |
| **Rights basis** | Owned / Licensed / Permission granted / Public domain | Bắt buộc |
| **Rights notes** | Số hợp đồng, giấy phép… | Không bắt buộc, nên ghi |

4. Tick ô xác nhận được phép đưa tài liệu lên OpenAI, rồi bấm **Upload**.

**Theo dõi trạng thái** (trang tự làm mới 5 giây một lần khi có tài liệu đang xử lý):

| Status | Ý nghĩa | Cần làm |
|---|---|---|
| `pending` | Đã nhận, chờ worker | Đợi. Đứng mãi thì xem [9.1](#91-tài-liệu-đứng-mãi-ở-pending) |
| `processing` | Worker đang đọc file và đưa lên AI | Đợi (vài giây tới vài phút; OCR lâu hơn) |
| `ready` | **Sẵn sàng**, AI Studio dùng được | Không cần làm gì |
| `failed` | Lỗi, lý do hiện ngay dưới trạng thái | Xem [9.2](#92-tài-liệu-failed) |
| `deleting` | Đang xoá | Đợi. Nếu có dòng "Delete failed" thì bấm Retry |

**Các thao tác khác:**
- Bấm **tên tài liệu** để xem chi tiết:
  - số trang, số ký tự;
  - trang nào đã OCR, trang nào OCR xong vẫn trống (cần kiểm tra tay);
  - tài liệu được chia thành mấy phần, mỗi phần gồm trang nào.
- **Retry:** chỉ hiện khi `failed`, chạy lại xử lý. Phần nào đã xong và không đổi thì không làm lại.
- **Index anyway:** chỉ hiện khi lỗi trùng file, dùng để nạp lại dù trùng.
- **Delete:** gỡ khỏi AI, xoá file trên OpenAI và S3. Câu hỏi đã xuất bản từ tài liệu này **vẫn giữ nguyên**. Bản ghi trong DB được giữ ở trạng thái `deleted` để truy vết.

**Mẹo với PDF scan** (PDF toàn ảnh, không có lớp chữ). Chọn một trong hai cách:
- Bật OCR (`AI_OCR_ENABLED=true`), AI sẽ đọc chữ từ ảnh. Tốn thêm chi phí, chất lượng phụ thuộc bản scan.
- Hoặc tự chuẩn bị file `.md` theo mẫu dưới. Hệ thống hiểu dòng `[page N]` và dùng nó để trích dẫn số trang:

```
[page 1]
第一课 你好
...

[page 2]
...
```

### 3.2. AI Studio (`/admin/ai-studio`): sinh và duyệt nội dung

**Chức năng:** yêu cầu AI soạn bài dựa trên tài liệu ở AI Documents. Kết quả là **bản nháp**. Học viên **không thấy gì** cho tới khi giáo viên duyệt và xuất bản.

**Ai dùng:** sinh nội dung: `teacher`, `author`, `admin`, `super_admin`. Duyệt và xuất bản: `teacher`, `admin`, `super_admin`.

#### Bước 1: Điền form "Generate from sources" (cột trái)

| Trường | Ý nghĩa |
|---|---|
| **Task** | *Exercise set*: bộ bài tập · *Reading passage + questions*: bài đọc kèm câu hỏi · *Grammar explanation + practice*: giải thích ngữ pháp kèm bài luyện |
| **Standard / Level** | Chuẩn và cấp HSK. **Phải có ít nhất một tài liệu `ready` cùng chuẩn và cấp**, nếu không AI báo thiếu nguồn |
| **Script** | Giản thể hoặc phồn thể (phải khớp tài liệu đã nạp) |
| **Difficulty** | Easy / Medium / Hard |
| **Items** | Số câu hỏi, tối đa 20 (`AI_MAX_ITEM_COUNT`). Nhiều câu thì lâu hơn và dễ bị cắt ngang |
| **Explain in** | Ngôn ngữ phần giải thích: Việt, Anh, Trung |
| **Item types** | Trắc nghiệm, đúng/sai, điền từ, sắp xếp câu. ⚠️ Chỉ **trắc nghiệm** và **đúng/sai** xuất bản được vào ngân hàng câu hỏi |
| **Include pinyin** | Kèm phiên âm |
| **Topic / lesson / grammar point** | Chủ đề cần tập trung, ví dụ `Bài 5`, `cấu trúc 是…的`. **Nên điền** để kết quả sát hơn |
| **Limit to document IDs** | Chỉ dùng một số tài liệu; ID lấy ở cột `#` của AI Documents, ví dụ `3, 7` |
| **Notes** | Hướng dẫn thêm, ví dụ "ngữ cảnh mua sắm". Được gửi như dữ liệu tham khảo, không phải mệnh lệnh |

Bấm **Generate draft** và chờ khoảng 30 giây tới 1 phút. Xong hệ thống tự chuyển sang trang bản nháp.

#### Bước 2: Duyệt bản nháp (`/admin/ai-studio/<id>`)

**Cột trái: nội dung**
- Tiêu đề và thông số (loại bài, chuẩn, cấp, loại chữ, độ khó).
- Theo loại bài: đoạn văn kèm pinyin và bản dịch, bảng từ vựng, điểm ngữ pháp, cấu trúc, ví dụ, lỗi thường gặp.
- Từng câu hỏi: đáp án đúng **có dấu ✓ màu xanh**, phần giải thích, và dòng **Source**. Ví dụ `doc-12 p.46` là tài liệu #12, trang 46; mở sách ra đối chiếu được. Dòng vàng "No verified source" nghĩa là câu này không có nguồn đã kiểm chứng, cần xem kỹ.
- Hộp vàng "The indexed sources did not support this request" nghĩa là tài liệu không đủ để làm yêu cầu này. Bản nháp như vậy **không duyệt được**: hãy đổi chủ đề hoặc tài liệu rồi sinh lại, hoặc nạp thêm tài liệu.

**Cột phải**
- **Automated checks:** cảnh báo tự động, ví dụ đáp án không khớp lựa chọn, trùng lựa chọn, câu không có nguồn, sai cấp, thiếu câu, trích dẫn bịa đã bị loại. "No issues found" **không có nghĩa là đúng 100%**; vẫn phải tự kiểm tra từng đáp án.
- **Sources retrieved:** các đoạn tài liệu AI đã tìm, kèm điểm liên quan (0–1), model và phiên bản prompt.
- **Review:** các nút thao tác.

| Nút | Khi nào dùng | Kết quả |
|---|---|---|
| **Edit** | Cần sửa câu chữ hoặc đáp án | Mở ô JSON để sửa, Save thì hệ thống kiểm tra lại |
| **Regenerate** | Kết quả chưa tốt | Tạo **bản nháp mới** với cùng yêu cầu; bản cũ giữ nguyên |
| **Approve** | Đã kiểm tra, nội dung đúng | Chuyển `approved`, lưu người duyệt và ghi chú |
| **Reject** | Không dùng | Chuyển `rejected` (vẫn sinh lại được) |

**Sửa JSON:** mỗi câu hỏi có dạng như sau. Đổi `correctOptionIndex` (đếm từ 0) để đổi đáp án; giữ nguyên các trường khác nếu không chắc.

```json
{
  "type": "multiple_choice",
  "prompt": "他___学生。",
  "pinyin": "Tā ___ xuésheng.",
  "options": ["是", "有", "在"],
  "correctOptionIndex": 0,
  "correctAnswer": null,
  "correctOrder": [],
  "explanation": "Dùng 是 để nối chủ ngữ với danh từ.",
  "citations": [{ "documentId": "doc-12", "page": 46, "section": null }]
}
```

#### Bước 3: Xuất bản

Sau khi Approve, ô xuất bản hiện ra:
1. Nhập **Category ID / Topic ID / Grade ID** (không bắt buộc) để xếp câu hỏi vào đúng mục của ngân hàng câu hỏi.
2. Bấm **Publish**. Câu trắc nghiệm và đúng/sai được thêm vào **Questions**:
   - admin tạo thì là câu hỏi hệ thống;
   - giáo viên tạo thì câu hỏi thuộc tenant của giáo viên.
3. Trang hiển thị ID các câu hỏi đã tạo và các câu bị bỏ qua (điền từ, sắp xếp câu).

#### Danh sách "Drafts" (cột phải trang AI Studio)

Tất cả bản nháp bạn được phép xem: admin thấy hết; giáo viên thấy bản nháp của tenant mình. Lọc được theo trạng thái:

- Trạng thái: `draft`, rồi `approved`, rồi `published`; hoặc `rejected`.
- Cột **Checks**:
  - `OK`: không có cảnh báo;
  - `N issue(s)`: có N cảnh báo;
  - `No evidence`: tài liệu không đủ để làm yêu cầu.

### 3.3. Knowledge base (`/admin/knowledge-base`): ghi chú kiến thức

**Chức năng:** admin tự viết các ghi chú ngắn (quy định, mẹo ngữ pháp, giải thích thêm). Ghi chú được **tự động đưa lên AI** mỗi khi tạo hoặc sửa.

**Ai dùng:** `admin`, `super_admin`.

**Cách dùng:**
1. Bấm **+ New Knowledge**, điền Title, Content (bắt buộc), Category, Description, Status.
2. Xem cột **AI index**:

| AI index | Ý nghĩa |
|---|---|
| `not indexed` | Chưa đưa lên AI (ghi chú Inactive, hoặc tạo trước khi có tính năng) |
| `queued` | Đang chờ worker |
| `indexed` | Đã lên AI |
| `failed` | Lỗi. Rê chuột vào nhãn để xem lỗi, bấm **Reindex** để thử lại |

3. Chuyển Status sang *Inactive* thì ghi chú bị gỡ khỏi AI. Xoá ghi chú cũng gỡ khỏi AI.

⚠️ Ghi chú **chưa có trường cấp HSK**, nên **AI Studio chưa dùng tới** (AI Studio luôn lọc theo cấp HSK). Ghi chú được dùng bởi **chatbot** và API hỏi đáp `POST /api/ai/ask`. Muốn AI Studio dùng được nội dung nào, hãy upload nội dung đó ở **AI Documents**.

### 3.4. Chatbot "Hoczi Assistant" (mọi trang `/admin`)

**Chức năng:** trợ lý hỏi đáp cho admin và giáo viên. Mỗi câu hỏi được **định tuyến (intent router)** sang một trong ba đường:
- Câu hỏi **về số liệu của Hoczi** (chỉ **admin / super_admin**): AI gọi các công cụ thống kê cố định, server truy vấn DB rồi AI trả lời theo kết quả. Ví dụ:
  - "Hệ thống có tất cả bao nhiêu user?" / "Có bao nhiêu giáo viên?" / "Tháng này có bao nhiêu user mới?"
  - "Có bao nhiêu trường (tenant)? Trường nào đông user nhất?"
  - "Có bao nhiêu câu hỏi, quiz, bài học, khoá học, sách, lớp?"
  - "Tuần này có bao nhiêu lượt làm quiz? Điểm trung bình? Quiz nào được làm nhiều nhất?"
  - "Tháng này AI tốn bao nhiêu tiền? Có bao nhiêu tài liệu đang lỗi?"

  Giáo viên hỏi những câu này sẽ được trả lời "chỉ quản trị viên mới hỏi được số liệu hệ thống".
- Câu hỏi **về nội dung học** (từ vựng, ngữ pháp, bài học, HSK, tài liệu đã upload): AI **tìm trong tài liệu** (AI Documents + Knowledge base) rồi trả lời, kèm nguồn.
- Câu hỏi **khác** (soạn email, ý tưởng hoạt động lớp, kiến thức chung…): AI trả lời bằng **kiến thức chung**, không tìm tài liệu.
- Nếu tài liệu không có thông tin, AI nói rõ "tài liệu không đề cập" rồi trả lời bằng kiến thức chung.

**Ai dùng:** mọi user đã đăng nhập vào được trang admin. Tài liệu riêng của tenant khác không bao giờ được dùng để trả lời.

**Cách dùng:**
1. Bấm nút tròn màu xanh ở **góc phải dưới**, khung chat mở ra.
2. Gõ câu hỏi, bấm **Enter** để gửi (**Shift+Enter** để xuống dòng). Hoặc bấm một câu gợi ý khi khung chat còn trống.
3. Đọc câu trả lời. Dưới mỗi câu trả lời có nhãn nguồn:

| Nhãn | Ý nghĩa |
|---|---|
| 🔵 **From Hoczi database: User statistics…** | Lấy từ DB thật qua công cụ thống kê; nhãn liệt kê các công cụ đã chạy |
| 🟢 **From your documents** | Trả lời dựa trên tài liệu đã upload; bên dưới liệt kê nguồn (tên tài liệu, trang, mã `doc-12` / `kb-5`) |
| 🟢 **Documents + general knowledge** | Kết hợp tài liệu và kiến thức chung |
| ⚪ **General knowledge** | Không dựa trên tài liệu Hoczi; **cần tự kiểm tra** nếu là kiến thức chuyên môn |

4. Hỏi tiếp được, AI nhớ ngữ cảnh khoảng **12 tin nhắn gần nhất**.
5. Nút 🗑 xoá hội thoại; nút ✕ đóng khung chat. Hội thoại được giữ khi chuyển trang hoặc reload trong cùng tab trình duyệt (lưu ở `sessionStorage`); đóng tab là mất.

**Lưu ý:**
- Số liệu chỉ là **thống kê tổng hợp** (đếm, tổng, trung bình, top N). Chatbot **không** tra cứu được thông tin cá nhân (tên, email từng user) và **không sửa/xoá** được gì trong DB. Câu hỏi nằm ngoài các công cụ hiện có thì AI sẽ nói không truy cập được dữ liệu đó (xem [4.5c](#45c-intent-router-và-công-cụ-dữ-liệu) để thêm công cụ).
- Ngày tương đối ("tháng này", "tuần trước") được AI đổi thành ngày cụ thể dựa trên ngày hiện tại của server.
- Nhãn "From your documents" chỉ hiện khi có **ít nhất một nguồn đã kiểm chứng**. AI nói là dựa trên tài liệu nhưng trích dẫn không khớp thì hệ thống tự hạ xuống "General knowledge".
- Câu trả lời **không được lưu** trên server; chỉ ghi log chi phí (`operation = chat_assistant`). Mỗi câu hỏi tính vào giới hạn `AI_RATE_LIMIT_PER_MINUTE` và ngân sách tháng.
- Chatbot **chạy được cả khi chưa có vector store** (`OPENAI_VECTOR_STORE_ID` trống); lúc đó mọi câu trả lời đều là kiến thức chung. Vẫn cần `OPENAI_API_KEY` và `OPENAI_MODEL`.

### 3.5. AI Learn (`/quizzes/results/ai-learn/<chủ đề>`): gia sư AI cho học viên

**Chức năng:** trang học với AI cho học viên (khu "User Dashboard" → **AI Learn**). Mỗi chủ đề là một gia sư riêng:

| Khoá (URL) | Môn | | Khoá (URL) | Môn |
|---|---|---|---|---|
| `math` | Mathematics | | `coding` | Coding |
| `science` | Science | | `geography` | Geography |
| `history` | History | | `languages` | Languages (gồm tiếng Trung/HSK, tiếng Anh) |
| `literature` | Literature | | `biology` | Biology |
| `writing` | Writing & Grammar | | `physics` | Physics |
| `chemistry` | Chemistry | | `art` | Art & Creativity |

**Ai dùng:** mọi user đã đăng nhập (học viên, giáo viên, admin).

**Gia sư làm gì:**
- Giải thích từng bước, có ví dụ, đúng trình độ người học; trả lời bằng ngôn ngữ người học dùng.
- Bài tập: được dặn hướng dẫn cách làm trước rồi để học viên tự làm bước cuối. Thử thực tế thì khi học viên ghi rõ "giải giúp em…", AI vẫn đưa lời giải đầy đủ; muốn chặt hơn thì sửa prompt (xem [11](#11-giới-hạn-hiện-tại-và-việc-tiếp-theo)).
- Giữ đúng môn: hỏi môn khác thì trả lời ngắn và gợi ý chủ đề phù hợp; từ chối lịch sự yêu cầu không liên quan học tập; nội dung phù hợp học sinh.
- Câu hỏi có thể nằm trong **tài liệu đã upload** (AI Documents, Knowledge base) thì tìm trong đó và hiện nguồn (nhãn 🟢 "From your documents" + danh sách nguồn). Còn lại là ⚪ "General knowledge".
- **Không** có công cụ truy vấn DB (kể cả khi admin dùng trang này).

**Cách dùng:**
1. Vào **AI Learn**, chọn chủ đề (hoặc mở thẳng URL, ví dụ `/quizzes/results/ai-learn/science`).
2. Bấm một câu gợi ý, hoặc gõ câu hỏi rồi **Enter**.
3. Hỏi tiếp được, gia sư nhớ 12 tin gần nhất.
4. Nút 🗑 (góc phải tiêu đề) bắt đầu hội thoại mới. Hội thoại mỗi chủ đề được giữ riêng khi reload hoặc quay lại trong cùng tab trình duyệt.

**Lưu ý:** mỗi câu hỏi tính vào rate limit (`AI_RATE_LIMIT_PER_MINUTE`, mặc định 10/phút/user) và ngân sách tháng như các tính năng AI khác; log ghi `operation = learn_chat`. Hội thoại không lưu trên server.

---

## 4. Luồng nghiệp vụ chi tiết (phía hệ thống)

```
 Admin upload PDF ──► S3 ──► knowledge_documents (pending)
                                   │  ai_jobs: ingest_document
                                   ▼
                    Worker: tải file → kiểm tra → trích text / OCR
                            → chia cụm trang → upload OpenAI + attributes
                                   ▼
          knowledge_document_chunks (indexed)    document: ready
                                   │
 Giáo viên bấm "Generate" ─────────┤  file_search lọc theo tenant + HSK
                                   ▼
                    AI trả JSON + trích dẫn → server kiểm tra
                                   ▼
                     ai_drafts (draft) ──► sửa / duyệt / từ chối / sinh lại
                                   ▼ approved
                     Publish ──► questions + answers (ngân hàng câu hỏi)
```

### 4.1. Upload tài liệu

1. Admin chọn file (`.pdf`, `.md`, `.txt`) và nhập metadata:
   - chuẩn HSK, cấp độ, giản thể/phồn thể, loại tài liệu (textbook, workbook, answer_key…), phiên bản sách;
   - tenant (để trống nghĩa là dùng chung);
   - **cơ sở bản quyền**, kèm tick xác nhận được phép đưa lên OpenAI.
2. Trình duyệt xin server một **link upload S3 có chữ ký** (presigned POST) rồi **upload thẳng lên S3**.
   - Server không phải giữ file lớn trong RAM.
   - Chữ ký có điều kiện `content-length-range`, nên S3 tự từ chối file vượt `AI_MAX_UPLOAD_MB`.
3. Trình duyệt gọi API đăng ký tài liệu. Server:
   - kiểm tra key thuộc thư mục `knowledge/`;
   - kiểm tra file thật sự có trên S3 và đúng dung lượng;
   - kiểm tra cấp HSK hợp lệ (HSK 2.0 tối đa cấp 6);
   - tạo bản ghi `knowledge_documents` ở trạng thái `pending`;
   - **đưa một job vào hàng đợi**. Không xử lý ngay vì OCR và index có thể mất vài phút.

### 4.2. Xử lý nền (ingestion) — worker

Worker là **tiến trình riêng** (`src/worker.ts`). Nó liên tục lấy job từ bảng `ai_jobs` và xử lý như sau:

1. **Tải file từ S3**, tính SHA-256.
   - Nếu một tài liệu khác cùng nội dung đã `ready` thì báo lỗi "Same file as document #X", tránh trả tiền index hai lần.
   - Admin vẫn có thể bấm "Index anyway", hoặc upload thành phiên bản mới.
2. **Xác định định dạng từ nội dung file:** byte đầu `%PDF-`, hoặc text UTF-8 hợp lệ. Không tin đuôi file hay MIME do trình duyệt gửi.
3. **Trích text theo từng trang.** Trang gần như không có chữ được coi là **trang scan**:
   - nếu bật `AI_OCR_ENABLED`: tách riêng trang đó ra PDF một trang, gửi cho AI đọc chữ;
   - nếu không bật: tài liệu `failed` kèm hướng dẫn. Admin upload bản text `.md` có các dòng `[page N]`.
4. **Kiểm tra chất lượng:** text rỗng, hoặc quá 1% ký tự lỗi (`�`), thì không index.
5. **Chia cụm:** mặc định 4 trang một file. Mỗi file bắt đầu bằng
   `SOURCE documentId=doc-12 | title=... | pages 5-8`, và mỗi trang có dấu `[page N]`.
   > Lý do: OpenAI chỉ cho biết đoạn văn thuộc file nào, **không cho biết trang**. Phải tự ghi số trang vào nội dung thì AI mới trích dẫn được trang.
6. **Upload lên OpenAI:** upload file, gắn vào vector store với attributes `source`, `document_id`, `chunk_id`, `tenant_id`, `title`, `hsk_standard`, `hsk_level`, `script`, `content_type`, `edition`, `book_id`, `lesson_id`, `page_start`, `page_end`.
7. Tài liệu chuyển sang **`ready`**. Lỗi tạm thời (mạng, OpenAI quá tải) được thử lại sau 1, 2, 4… phút. Lỗi vĩnh viễn (file hỏng, trùng) thì tài liệu chuyển `failed`, kèm lý do để admin xem và bấm Retry.

**Retry không làm lại từ đầu.** Cụm nào nội dung và attributes không đổi, và đã `indexed`, thì được giữ nguyên.

### 4.3. Sinh nội dung (generate)

Giáo viên chọn:

- loại bài: bài tập, bài đọc + câu hỏi, hoặc giải thích ngữ pháp;
- chuẩn và cấp HSK, giản thể/phồn thể, độ khó;
- số câu và dạng câu: trắc nghiệm, đúng/sai, điền từ, sắp xếp câu;
- có kèm pinyin hay không, ngôn ngữ giải thích;
- chủ đề, giới hạn theo ID tài liệu, ghi chú.

Server xử lý theo các bước:

1. **Giới hạn sử dụng:** tối đa N request mỗi phút cho mỗi user, và ngân sách tháng cho toàn hệ thống và từng tenant.
2. **Bộ lọc tìm kiếm** luôn có `tenant_id ∈ {system, tenant của user}`, cộng thêm đúng chuẩn, cấp và loại chữ. User chỉ thu hẹp được phạm vi, không mở rộng được.
3. **Gọi OpenAI Responses API:**
   - `file_search` bắt buộc (`tool_choice: required`);
   - JSON schema strict;
   - `include: file_search_call.results` để lấy danh sách đoạn đã tìm thấy.

   Tham số của giáo viên, kể cả ghi chú, được gửi như **dữ liệu**, không ghép vào lời dặn hệ thống. Cách này chống prompt injection.
4. **Kiểm tra kết quả:**
   - mỗi trích dẫn phải khớp một đoạn thật sự đã tìm thấy (đúng tài liệu, trang nằm trong khoảng trang của đoạn đó); trích dẫn không khớp bị xoá và ghi cảnh báo;
   - trắc nghiệm và đúng/sai: đáp án phải trỏ đúng vào một lựa chọn, không có lựa chọn trùng;
   - sắp xếp câu: thứ tự phải dùng mỗi đoạn đúng một lần; điền từ: phải có đáp án;
   - cấp độ và loại chữ khớp yêu cầu, đủ số câu, câu nào cũng có nguồn.
5. Lưu thành **bản nháp** (`ai_drafts`), gồm:
   - kết quả và danh sách cảnh báo;
   - danh sách đoạn đã tìm (chỉ ID, trang, điểm số; **không lưu nội dung sách**);
   - model và phiên bản prompt.

Nếu giáo trình không có thông tin phù hợp, AI phải trả `insufficientEvidence: true` thay vì bịa. Bản nháp như vậy **không duyệt được**.

### 4.4. Duyệt và xuất bản

| Hành động | Điều kiện | Kết quả |
|---|---|---|
| Sửa (Edit) | Bản nháp đang `draft` | Lưu JSON mới, **kiểm tra lại** với các nguồn đã tìm lúc sinh, đánh dấu `edited` |
| Duyệt (Approve) | `draft` và không thiếu bằng chứng | `approved`, lưu người duyệt và ghi chú |
| Từ chối (Reject) | `draft` hoặc `approved` | `rejected` |
| Sinh lại (Regenerate) | Bất kỳ | Tạo bản nháp **mới** với cùng tham số, trỏ `parent_draft_id` về bản cũ |
| Xuất bản (Publish) | `approved` | Tạo `questions` + `answers` trong một transaction, chuyển sang `published` |

Quy tắc khi xuất bản:

- Chỉ **trắc nghiệm** (`mcq`) và **đúng/sai** (`true_false`) được xuất bản, vì ngân hàng câu hỏi hiện chỉ có hai loại này. Điền từ và sắp xếp câu bị bỏ qua, có ghi lý do.
- Với bài đọc, đoạn văn được ghép vào đầu nội dung từng câu hỏi.
- Quyền sở hữu theo đúng quy tắc của `QuestionService.createQuestion`: admin tạo câu hỏi hệ thống (`is_system = true`); người khác tạo câu hỏi thuộc tenant của mình.
- `ai_drafts.published_refs` lưu ID các câu hỏi đã tạo. Từ một câu hỏi có thể truy ngược ra bản nháp, nguồn, model và prompt.

### 4.5. Hỏi đáp (ask)

Mọi user đã đăng nhập hỏi về giáo trình. Câu trả lời chỉ dựa trên tài liệu và kèm trích dẫn đã kiểm tra. Phản hồi có thêm số trích dẫn bị loại vì không khớp nguồn. Kết quả không được lưu lại, chỉ ghi usage.

### 4.5b. Chatbot (chat)

1. Trình duyệt gửi tối đa 12 tin nhắn gần nhất (`user`/`assistant`, mỗi tin ≤ 4000 ký tự) tới `POST /api/ai/chat`. Server kiểm tra lại và cắt còn 12; tin cuối phải là của user.
2. Kiểm tra rate limit và ngân sách như các tính năng AI khác.
3. Gọi Responses API với `file_search` ở chế độ **`auto`**: **AI tự quyết** có tìm tài liệu hay không. Prompt `CHAT_INSTRUCTIONS` dặn: câu về nội dung học thì tìm; câu khác thì không. Bộ lọc luôn có `tenant_id ∈ {system, tenant của user}`. Không có vector store thì không gửi công cụ tìm kiếm.
4. AI trả JSON `{ answer, answerSource: documents|general|mixed, citations }`. Server giữ trích dẫn khớp đoạn đã tìm, gắn tên tài liệu. **Không còn trích dẫn hợp lệ nào thì `source` thành `general`.**
5. Trả về `{ answer, source, searched, citations, unverifiedCitationCount }`. Không lưu hội thoại; chỉ ghi `ai_usage_logs`.

### 4.5c. Intent router và công cụ dữ liệu

Intent router có **hai tầng**:

**Tầng 1: luật cố định, không gọi model** (`hoczi-api/src/helpers/ai/intentRouter.ts`, đặc tả ở `intent-router.md` gốc repo):
- Áp dụng cho chatbot admin (`/api/ai/chat`) và AI Learn (`/api/ai/learn/chat`).
- Nếu **toàn bộ** tin nhắn mới nhất là một câu trong danh sách thì trả lời mẫu ngay. Không gọi OpenAI, không tốn tiền, không tính vào rate limit, chạy được cả khi chưa cấu hình OpenAI.
- So khớp bỏ qua hoa/thường, dấu tiếng Việt, dấu câu, emoji, khoảng trắng thừa, và chữ "ạ" ở cuối. "xin chao", "XIN CHÀO!!!", "Chào buổi sáng ạ" đều khớp. "Xin chào, có bao nhiêu user?" **không** khớp, nên vẫn đi tiếp tầng 2.
- Hiện có 1 intent:

| Intent | Câu khớp | Trả lời |
|---|---|---|
| `greeting` | Xin chào, Hello, Good morning, Bạn ơi, Allo, Alo, Chào bạn, Chào buổi sáng, Chào buổi tối, Chào buổi chiều, Chào buổi trưa | "Chào bạn, tôi có thể giúp gì cho bạn" |

- Phản hồi có `source: 'rule'`; giao diện không hiện nhãn nguồn.
- Log ghi `ai_usage_logs` với `provider = 'rule'`, `model = 'intent-router'`, `prompt_version = 'intent:greeting'`, chi phí 0. Đếm được số lần tiết kiệm:

```sql
SELECT prompt_version, count(*) FROM ai_usage_logs WHERE provider = 'rule' GROUP BY 1;
```

**Thêm câu hoặc intent mới:** sửa mảng `QUICK_INTENTS` trong `intentRouter.ts` (thêm vào `phrases` của intent có sẵn, hoặc thêm phần tử `{ name, phrases, reply }`), rồi cập nhật `intent-router.md` cho khớp. ⚠️ **Chỉ sửa `intent-router.md` thì hệ thống không thay đổi**; file đó là đặc tả, code không đọc nó. Chỉ nên đưa vào đây những câu **trọn vẹn, không cần ngữ cảnh** (chào hỏi, cảm ơn, tạm biệt…); câu cần suy luận phải để model xử lý.

**Tầng 2: model tự định tuyến** (khi tầng 1 không khớp).

**Cách định tuyến:** không có bước phân loại riêng. Trong **một** lần gọi, AI được đưa các công cụ phù hợp với quyền của người hỏi và tự chọn:

| Người hỏi | Công cụ được đưa cho AI |
|---|---|
| `admin`, `super_admin` | 5 công cụ dữ liệu + `file_search` (nếu có vector store) |
| Người khác | Chỉ `file_search` (nếu có vector store) |

Prompt `chat@v2` (`chatInstructions()`) mô tả khi nào dùng công cụ nào và cho AI biết ngày hôm nay.

**Vòng gọi công cụ** (`runGrounded` với `functionTools`):
1. AI trả về `function_call` (tên công cụ + tham số JSON). AI **không viết SQL**.
2. Server kiểm tra tham số, chạy **câu SQL cố định có tham số** (`dataTools.ts`), trả kết quả dạng `function_call_output`.
3. Gửi lại cho AI: lịch sử + output của AI (kể cả phần suy luận đã mã hoá, cần vì `store: false`) + kết quả công cụ, để AI viết câu trả lời.
4. Tối đa **4 vòng**; quá thì báo lỗi "needed too many steps".
5. Tham số sai (ví dụ ngày không đúng `YYYY-MM-DD`) thì AI nhận thông báo lỗi để tự sửa. Lỗi khác chỉ báo "The query failed." (chi tiết ghi log server).

**Nhãn nguồn do server quyết định**, không tin nhãn AI tự ghi:
- có công cụ chạy thành công thì `data`;
- có trích dẫn tài liệu hợp lệ thì `documents` / `mixed`;
- còn lại là `general`.

**5 công cụ hiện có** (`hoczi-api/src/helpers/ai/dataTools.ts`):

| Công cụ | Tham số | Trả về |
|---|---|---|
| `get_user_stats` | `tenant_id`, `created_from`, `created_to` (đều có thể null) | Tổng user, theo role, số user không thuộc tenant |
| `get_tenant_stats` | `top_n` (1–20, mặc định 5) | Tổng tenant (bỏ đã xoá), theo trạng thái, theo gói, top tenant đông user (id, tên, số user) |
| `get_content_stats` | — | Câu hỏi (tổng, hệ thống, của tenant/giáo viên, đang bật), quiz, bài học, khoá học, sách, lớp |
| `get_quiz_activity` | `from`, `to` (theo ngày bắt đầu làm) | Số lượt, theo trạng thái, số học viên khác nhau, điểm TB lượt đã nộp, top 5 quiz |
| `get_ai_stats` | `from` (mặc định đầu tháng), `to` | Tài liệu theo trạng thái, bản nháp theo trạng thái, số request/lỗi/chi phí AI theo thao tác |

Ngày `to` là **bao gồm** (`< to + 1 ngày`). Chỉ trả số liệu tổng hợp; tên tenant và tên quiz là dữ liệu tổ chức, không phải dữ liệu cá nhân.

**Thêm một công cụ mới** (ví dụ thống kê lớp học):
1. Trong `dataTools.ts`, thêm một phần tử vào `ADMIN_DATA_TOOLS`:
   - `name`: snake_case;
   - `description`: rõ ràng, vì AI dựa vào đây để chọn;
   - `parameters`: dùng `params({...})`, mọi field bắt buộc, field tuỳ chọn để kiểu `[..., 'null']`;
   - `run`: kiểm tra tham số bằng `intArg` / `dateArg`, chỉ dùng `AppDataSource.query` với `$1, $2…`, **chỉ trả số liệu tổng hợp**, `LIMIT` nhỏ.
2. Thêm nhãn vào `DATA_TOOL_LABELS`.
3. Nếu cần, thêm ví dụ vào danh sách loại câu hỏi trong `chatInstructions()` và tăng phiên bản `chat@vN` trong `PROMPT_VERSIONS`.
4. Không cần sửa frontend: nhãn hiển thị lấy từ `queried[].label`.

> Muốn giáo viên hỏi số liệu **của tenant mình**: tạo bộ công cụ riêng, bắt buộc lọc theo `user.tenant_id` phía server (không để AI truyền tenant), rồi đưa cho giáo viên trong `AiGenerationService.chat`. Chưa làm.

### 4.5d. AI Learn (gia sư cho học viên)

1. `TopicPage` gửi `{ topic, messages }` (12 tin gần nhất, bỏ các bong bóng lỗi) tới `POST /api/ai/learn/chat`.
2. Server tra `topic` trong danh sách cố định `LEARN_TOPICS` (`prompts.ts`); khoá lạ thì trả 400. **Không dùng nhãn môn do trình duyệt gửi**, để không ai chèn nội dung vào prompt qua tên môn.
3. Kiểm tra rate limit và ngân sách; gọi `runGrounded` với:
   - prompt `learnInstructions(topic)` (`learn@v1`);
   - `fileSearch: 'auto'`, lọc theo tenant;
   - **không có `functionTools`**.
4. Lọc trích dẫn, gắn tên tài liệu, server tự quyết nhãn `documents` / `mixed` / `general`. Trả `{ answer, source, citations, unverifiedCitationCount }`.

Muốn thêm chủ đề mới: thêm khoá vào `LEARN_TOPICS` (backend) **và** `TOPIC_CONFIG` trong `TopicPage.tsx` (frontend, gồm icon, màu, câu gợi ý), cùng thẻ chủ đề ở `AILearnPage.tsx`.

### 4.6. Ghi chú knowledge base

Ghi chú do admin viết ở `/admin/knowledge-base`. Mỗi lần tạo hoặc sửa, ghi chú được tự động **đưa vào hàng đợi index** lên cùng vector store (`document_id = kb-<id>`, `tenant_id = system`). Ghi chú bị tắt hoặc xoá thì được gỡ khỏi index.

> Ghi chú chưa có trường HSK, nên chỉ được dùng cho **hỏi đáp**. Phần sinh nội dung không dùng tới vì luôn lọc theo cấp HSK.

### 4.7. Xoá tài liệu

Xoá chạy nền theo thứ tự: gỡ từng cụm khỏi vector store, xoá file trên OpenAI, xoá file gốc trên S3, chuyển trạng thái `deleted`. Bản ghi được **giữ lại** (xoá mềm) để truy vết nội dung đã xuất bản từ tài liệu đó. Nội dung đã xuất bản không bị xoá theo.

### 4.8. Theo dõi chi phí

Mỗi lần gọi AI (generate, regenerate, ask, ocr, chat) ghi một dòng `ai_usage_logs` gồm: user, tenant, model, token vào/ra, số lần `file_search`, độ trễ, kết quả, chi phí ước tính.

- Chi phí tính theo giá trong env `AI_PRICE_*`. **Chưa điền giá thì chi phí bằng 0 và ngân sách tháng không có tác dụng.**
- Không lưu nội dung prompt hay dữ liệu học viên. OpenAI chỉ nhận **mã băm** của user id (`safety_identifier`).

---

## 5. Các cơ chế bảo vệ

| Cơ chế | Chống lại | Nằm ở |
|---|---|---|
| Bắt buộc ghi và xác nhận bản quyền | Đưa sách không có quyền lên bên thứ ba | `AiDocumentsPage.tsx`, `ai.dto.ts` |
| Lọc `tenant_id` phía server, luôn bật | Tenant A đọc tài liệu riêng của tenant B | `retrieval.ts → buildFilters` |
| Lọc chuẩn và cấp HSK | Trộn nội dung khác cấp | `retrieval.ts`, `validation.ts` |
| Kiểm tra trích dẫn với kết quả tìm thật | AI bịa nguồn | `validation.ts` |
| Tham số gửi như dữ liệu; prompt dặn bỏ qua lệnh trong tài liệu | Prompt injection | `prompts.ts`, `AiGenerationService.ts` |
| Bản nháp + duyệt bắt buộc | Đáp án sai tới học viên | `AiGenerationService.ts` |
| Rate limit và ngân sách tháng | Spam, chi phí tăng mất kiểm soát | `usage.ts` |
| Kiểm tra định dạng bằng nội dung, giới hạn dung lượng trong chữ ký S3 | File giả mạo, file quá lớn | `extraction.ts`, `storage.ts` |
| Key `knowledge/` bắt buộc khi đăng ký | Đăng ký file bất kỳ trong bucket | `KnowledgeDocumentService.ts` |
| Chatbot chỉ dùng công cụ dữ liệu cố định: SQL có tham số, chỉ đọc, chỉ số liệu tổng hợp, chỉ đưa cho admin, tối đa 4 vòng | AI tự viết SQL (SQL injection, đọc/xoá dữ liệu tuỳ ý), lộ thông tin cá nhân, vòng lặp tốn tiền | `dataTools.ts`, `retrieval.ts`, `AiGenerationService.chat` |
| Error middleware giấu lỗi 5xx nội bộ | Lộ SQL, stack trace, chi tiết provider | `middlewares/error.ts`, `helpers/ai/errors.ts` |

> **Kiểm tra tự động không chứng minh nội dung đúng.** Nó chỉ bắt lỗi cấu trúc và trích dẫn giả. Đúng hay sai về chuyên môn vẫn phải do giáo viên duyệt.

---

## 6. Danh sách file thay đổi và ý nghĩa

Ký hiệu: 🆕 file mới · ✏️ file sửa.

### 6.1. Backend `hoczi-api`

#### Cấu hình và hạ tầng

| File | | Ý nghĩa |
|---|---|---|
| `src/config/ai.ts` | 🆕 | Đọc **toàn bộ cấu hình AI** từ env tại một chỗ, dạng getter nên đọc lúc dùng. Gồm model, vector store, timeout, giới hạn token, rate limit, ngân sách, giá ước tính, tham số trích xuất/OCR/chia cụm, tham số worker. `assertOpenAiConfigured()` báo lỗi rõ ràng khi thiếu key, nhưng không làm API sập lúc khởi động |
| `env.example` | ✏️ | Liệt kê **mọi biến môi trường** đang dùng (trước đây chỉ có AWS và Google), kèm chú thích. Thêm nhóm OpenAI, giới hạn chi phí, ingestion, worker |
| `package.json` | ✏️ | Thêm dependency: `openai@6.49.0` (bản 7.x cần Node 22, Docker đang dùng Node 20), `@aws-sdk/s3-presigned-post`, `pdf-parse@1.1.1`, `pdf-lib`, `@types/pdf-parse`. Thêm script `migration:*`, `worker:dev`, `worker` |
| `ecosystem.config.js` | ✏️ | Thêm PM2 app **`hoczi-ai-worker`** chạy `dist/worker.js`, một instance, `kill_timeout` 120 giây để worker làm xong job đang chạy trước khi tắt |
| `src/index.ts` | ✏️ | **Bật lại `errorMiddleware`** sau routes. Lỗi giờ trả JSON đúng status, ví dụ thiếu token trả 401 thay vì 500 |
| `src/middlewares/error.ts` | ✏️ | Thêm: `JsonWebTokenError` trả 401; lỗi 5xx không phải `ApiError` thì ghi log chi tiết nhưng chỉ trả "Internal server error" cho client |
| `src/middlewares/requireRole.ts` | 🆕 | Middleware phân quyền. JWT chỉ chứa `id` và `email`, nên middleware **đọc `role` và `tenant_id` từ DB**, gắn vào `req.user`, rồi kiểm tra quyền. Định nghĩa các nhóm `ROLES.ADMIN`, `REVIEWER`, `AUTHOR`, `ANY` |
| `src/worker.ts` | 🆕 | **Tiến trình xử lý nền.** Vòng lặp lấy job, dispatch theo loại (`ingest_document`, `delete_document`, `index_knowledge_base`, `unindex_knowledge_base`). Lỗi tạm thời thì thử lại với backoff tăng dần (tối đa 1 giờ, tối đa 5 lần); lỗi vĩnh viễn thì đánh dấu thất bại lên tài liệu/ghi chú. Mỗi phút trả các job bị kẹt về hàng đợi. Nhận SIGTERM thì làm xong job hiện tại rồi dừng |

#### Module AI — `src/helpers/ai/`

| File | | Ý nghĩa |
|---|---|---|
| `openaiClient.ts` | 🆕 | Tạo **một client OpenAI dùng chung** (lazy), có timeout và số lần retry từ config |
| `errors.ts` | 🆕 | `toApiError`: đổi lỗi OpenAI thành mã HTTP dễ hiểu (503 chưa cấu hình hoặc bị rate limit, 504 timeout, 502 lỗi provider) mà không lộ chi tiết. `isTransient`: phân biệt lỗi nên thử lại. `PermanentJobError`: lỗi không nên thử lại. `errorCode`: mã lỗi ngắn để ghi log |
| `storage.ts` | 🆕 | Làm việc với S3 cho tài liệu tri thức. `createKnowledgeUpload` tạo presigned POST (key `knowledge/<uuid>/<tên an toàn>`, giới hạn dung lượng, cố định Content-Type, hết hạn sau 15 phút). Các hàm `head`, `download`, `delete` file gốc |
| `extraction.ts` | 🆕 | **Trích nội dung tài liệu:**<br>• `detectFormat`: xác định PDF/text từ byte<br>• `extractPdfPages`: text từng trang bằng pdf.js; trang lỗi giữ đúng số trang để OCR<br>• `extractTextPages`: đọc `.md`/`.txt`, hiểu dòng `[page N]`<br>• `ocrPdfPage`: tách một trang bằng `pdf-lib`, gửi AI đọc chữ, ghi usage<br>• `extractDocument`: điều phối, phát hiện trang scan, kiểm tra chất lượng, trả báo cáo trích xuất<br>• `buildChunks`: chia theo cụm trang, hoặc theo đoạn với text không có trang<br>• `chunkFileContent`: thêm dòng `SOURCE documentId=…` để AI trích dẫn<br>Có xử lý một lỗi của pdf.js: phải truyền bản copy độc lập của Buffer, nếu không PDF nhỏ bị đọc sai |
| `schemas.ts` | 🆕 | **Cấu trúc JSON bắt buộc** (strict) cho từng loại bài:<br>• `reading_passage`: đoạn văn, pinyin, bản dịch, từ vựng<br>• `grammar_explanation`: điểm ngữ pháp, cấu trúc, ví dụ, lỗi thường gặp<br>• `exercise_set`: hướng dẫn<br>• `ask`: câu trả lời<br>• `chatSchema` (chatbot): câu trả lời, `answerSource` (data/documents/general/mixed), trích dẫn<br>Phần chung: câu hỏi (4 dạng), trích dẫn (`documentId`, `page`, `section`), cờ `insufficientEvidence`. Mọi field đều required, giá trị tuỳ chọn dùng kiểu nullable |
| `prompts.ts` | 🆕 | **Lời dặn cho AI:** chỉ dựa vào nguồn, trích dẫn đúng `documentId` và trang, báo thiếu bằng chứng thay vì bịa, đúng cấp và loại chữ, không chép nguyên văn dài, mỗi câu đúng một đáp án, coi tài liệu là dữ liệu chứ không phải lệnh. Có prompt riêng cho từng loại bài, cho hỏi đáp, cho **chatbot** (`chatInstructions({ canQueryData, today })`, phiên bản `chat@v2`: luật định tuyến (số liệu → công cụ, nội dung học → tài liệu, còn lại → kiến thức chung); với người không phải admin thì dặn trả lời "chỉ admin hỏi được số liệu"; text thường không Markdown; trả lời theo ngôn ngữ người hỏi) cho **AI Learn** (`LEARN_TOPICS`: 12 chủ đề cố định; `learnInstructions(topic)`, phiên bản `learn@v1`: gia sư từng bước, hướng dẫn bài tập, giữ đúng môn, nội dung phù hợp học sinh, tìm tài liệu khi liên quan) và OCR. `PROMPT_VERSIONS` đánh số phiên bản, lưu vào mỗi bản nháp và log để so sánh khi sửa prompt |
| `retrieval.ts` | 🆕 | **Lõi gọi AI có tìm kiếm.** Nhận một câu hỏi hoặc cả hội thoại (`ChatTurn[]`). `fileSearch: 'required'` (sinh bài, ask) bắt buộc tìm; `'auto'` (chatbot) để AI tự quyết và chạy được khi chưa có vector store. `functionTools`: **vòng gọi công cụ** (tối đa 4 vòng): chạy `function_call`, gửi lại `function_call_output` kèm suy luận đã mã hoá; cộng dồn token qua các vòng; trả `toolCalls`.<br>• `buildFilters`: dựng bộ lọc, **luôn có tenant**<br>• `runGrounded`: gọi Responses API với `file_search`, schema strict, `include` kết quả tìm; gom các đoạn tìm được (tài liệu, chunk, trang, điểm); parse JSON; xử lý kết quả bị cắt ngang; ghi usage cho cả thành công lẫn lỗi; gửi mã băm user id<br>Định nghĩa kiểu `ChunkAttributes`, phải khớp với những gì ingestion ghi |
| `validation.ts` | 🆕 | **Kiểm tra kết quả AI.** `filterCitations` giữ trích dẫn khớp đoạn đã tìm, loại phần còn lại. `validateGeneration` kiểm tra cấp, loại chữ, số câu, từng câu theo dạng, mỗi câu có nguồn; trả danh sách vấn đề và danh sách trích dẫn hợp lệ |
| `usage.ts` | 🆕 | **Kiểm soát chi phí.** `assertWithinLimits` chặn khi vượt số request mỗi phút hoặc ngân sách tháng (toàn hệ thống, theo tenant) và trả 429. `recordUsage` ghi `ai_usage_logs`; lỗi khi ghi log không làm hỏng request. `estimateCostUsd` tính chi phí theo giá trong env |
| `intentRouter.ts` | 🆕 | **Tầng 1 của intent router: trả lời mẫu không cần model** (đặc tả `intent-router.md`). `QUICK_INTENTS`: danh sách intent `{ name, phrases, reply }` (hiện có `greeting`). `normalizeMessage`: bỏ dấu, hoa/thường, dấu câu, emoji, chữ "ạ" cuối câu. `matchQuickIntent`: chỉ khớp khi cả tin nhắn là một câu trong danh sách. `quickReply`: trả lời và ghi log `provider = 'rule'` (chi phí 0) |
| `dataTools.ts` | 🆕 | **Công cụ dữ liệu cho chatbot (intent router).** `ADMIN_DATA_TOOLS`: 5 công cụ thống kê chỉ đọc (user, tenant, nội dung, hoạt động quiz, AI), mỗi công cụ gồm mô tả, schema tham số strict, hàm `run` chạy SQL cố định có tham số. `intArg` / `dateArg` kiểm tra tham số, lỗi có `expose` để AI đọc được. `DATA_TOOL_LABELS`: nhãn hiển thị. Cách thêm công cụ: [4.5c](#45c-intent-router-và-công-cụ-dữ-liệu) |
| `anthropicChat.ts` | 🆕 | Chat Claude có sẵn từ trước, chuyển từ controller vào đây: model lấy từ `ANTHROPIC_MODEL` (mặc định giữ `claude-opus-4-7`), có timeout, ghi usage, lỗi trả 502 gọn gàng |

#### Entities (bảng dữ liệu)

| File | | Ý nghĩa |
|---|---|---|
| `src/entities/KnowledgeDocument.ts` | 🆕 | Bảng `knowledge_documents`: **tài liệu nguồn**. Lưu tên file, dung lượng, checksum, `hsk_standard`, `hsk_level`, phiên bản sách, loại chữ, ngôn ngữ, loại tài liệu, `tenant_id` (NULL = dùng chung), liên kết sách/bài, `storage_key` S3, phiên bản (`version`, `supersedes_document_id`), vector store, trạng thái (`pending → processing → ready / failed`, `deleting → deleted`), bản quyền, báo cáo trích xuất, lỗi, người upload, thời điểm index/xoá |
| `src/entities/KnowledgeDocumentChunk.ts` | 🆕 | Bảng `knowledge_document_chunks`: **từng cụm đã upload** của một tài liệu, gồm thứ tự, trang đầu/cuối, số ký tự, `openai_file_id`, checksum, trạng thái. Duy nhất theo (`document_id`, `chunk_index`). Dùng để map trích dẫn về trang, để retry không upload lại, và để xoá đúng file trên OpenAI |
| `src/entities/AiJob.ts` | 🆕 | Bảng `ai_jobs`: **hàng đợi việc nền**. Gồm loại job, payload JSON, trạng thái (`queued`, `running`, `succeeded`, `failed`), số lần thử, thời điểm được chạy, khoá worker, lỗi gần nhất |
| `src/entities/AiDraft.ts` | 🆕 | Bảng `ai_drafts`: **bản nháp AI**. Gồm loại bài, tham số yêu cầu, kết quả JSON, trích dẫn hợp lệ, danh sách đoạn đã tìm (không có nội dung sách), cảnh báo, cờ thiếu bằng chứng, provider/model/prompt version, trạng thái (`draft`, `approved`, `rejected`, `published`), tenant, người tạo, người duyệt và ghi chú, cờ đã sửa, bản nháp gốc khi sinh lại, ID câu hỏi đã xuất bản |
| `src/entities/AiUsageLog.ts` | 🆕 | Bảng `ai_usage_logs`: **mỗi lần gọi AI** một dòng: user, tenant, thao tác, provider, model, prompt version, token, số lần `file_search`, độ trễ, kết quả, mã lỗi, chi phí ước tính, request id của provider. Không chứa prompt hay dữ liệu học viên |
| `src/entities/KnowledgeBase.ts` | ✏️ | Thêm `index_status` (`not_indexed`, `queued`, `indexed`, `failed`), `openai_file_id`, `index_error`, `indexed_at`; FK `created_by` đổi sang `ON DELETE SET NULL` |

#### Migrations — `src/migrations/`

| File | | Ý nghĩa |
|---|---|---|
| `1791026043573-InitialSchema.ts` | 🆕 | **Baseline** toàn bộ schema cũ, sinh từ entities. Trên DB đã có bảng `users` (DB cũ tạo bằng `query.sql`) thì **không làm gì**, chỉ ghi nhận đã chạy. Không cho revert, vì revert sẽ xoá mọi bảng |
| `1791026050694-CreateKnowledgeBases.ts` | 🆕 | Tạo bảng `knowledge_bases`; bỏ qua nếu bảng đã tồn tại |
| `1791027143843-AddAiIntegration.ts` | 🆕 | Tạo 5 bảng mới cùng index và khoá ngoại; thêm 4 cột index vào `knowledge_bases`. Revert được |
| `query.sql` | ✏️ | Bỏ khối `CREATE TABLE knowledge_bases` vì đã có migration. Từ nay `query.sql` chỉ chứa dữ liệu seed và script một lần |

#### Repositories (truy cập DB)

| File | | Ý nghĩa |
|---|---|---|
| `src/repositories/knowledgeDocumentRepository.ts` | 🆕 | Danh sách tài liệu có lọc (trạng thái, chuẩn, cấp, tenant; mặc định ẩn tài liệu đã xoá), chi tiết kèm chunk, tìm tài liệu trùng checksum, tạo/sửa. Repository cho chunk: lấy theo tài liệu, lưu, xoá |
| `src/repositories/aiJobRepository.ts` | 🆕 | **Hàng đợi trên Postgres.** `enqueue` thêm job. `claimNext` nhận job **nguyên tử** bằng `FOR UPDATE SKIP LOCKED` (nhiều worker không nhận trùng). `requeueStale` trả lại job bị kẹt. `markSucceeded`, `markFailed`, `retryLater` |
| `src/repositories/aiDraftRepository.ts` | 🆕 | Danh sách bản nháp có lọc trạng thái/loại và giới hạn theo tenant hoặc người tạo (kèm tên người tạo), chi tiết, tạo, lưu |
| `src/repositories/aiUsageLogRepository.ts` | 🆕 | Ghi log; đếm request của user trong khoảng thời gian (rate limit, **bỏ qua các dòng `provider = 'rule'`**); tổng chi phí từ một mốc, có thể theo tenant (ngân sách); bảng tổng hợp theo thao tác và kết quả (màn hình usage) |
| `src/repositories/knowledgeBaseRepository.ts` | ✏️ | Thêm `update(id, data)` để cập nhật trạng thái index |

#### Services (nghiệp vụ)

| File | | Ý nghĩa |
|---|---|---|
| `src/services/KnowledgeDocumentService.ts` | 🆕 | **Nghiệp vụ admin với tài liệu:**<br>• `createUploadUrl`: chỉ nhận `.pdf/.md/.txt`; Content-Type do server quyết định<br>• `registerDocument`: kiểm tra key, cấp HSK, file có trên S3 và đúng dung lượng; tính `version` khi thay thế bản cũ; tạo bản ghi; đưa job ingest vào hàng đợi<br>• `getDocuments`, `getDocumentDetail`<br>• `retryDocument`: chỉ cho tài liệu `failed`, hoặc thử xoá lại tài liệu `deleting`<br>• `deleteDocument`: chuyển `deleting`, đưa job xoá vào hàng đợi<br>• `getUsageSummary`: chi phí tháng này so với ngân sách |
| `src/services/AiIngestionService.ts` | 🆕 | **Việc worker làm:**<br>• `ingestDocument`: tải → checksum → chặn trùng → trích xuất → chia cụm → upload kèm attributes; bỏ qua cụm không đổi; dọn cụm thừa; nếu tài liệu bị xoá giữa chừng thì không chuyển `ready`<br>• `deleteDocument`: gỡ vector store, xoá file OpenAI, xoá S3, xoá mềm<br>• `indexKnowledgeBase` / `unindexKnowledgeBase`: index hoặc gỡ ghi chú<br>• `markDocumentFailed`, `markKnowledgeBaseFailed`: ghi lỗi cuối cùng<br>Hàm nội bộ: `uploadIndexedFile` (upload, gắn vector store, cấu hình chia nhỏ, chờ xử lý xong), `removeRemoteFile` (bỏ qua 404), `compactAttributes` (bỏ giá trị rỗng, cắt chuỗi 512 ký tự) |
| `src/services/AiGenerationService.ts` | 🆕 | **Nghiệp vụ AI cho giáo viên:**<br>• `generate`: kiểm tra cấp và số câu → giới hạn sử dụng → chuẩn hoá tham số → `runGrounded` → `validateGeneration` → lưu bản nháp<br>• `regenerate`: sinh lại với cùng tham số<br>• `ask`: hỏi đáp có trích dẫn đã lọc<br>• `chat` và `learnChat` gọi `quickReply` trước: câu chào hỏi được trả lời ngay, không qua rate limit/model<br>• `learnChat`: gia sư AI Learn; kiểm tra chủ đề trong `LEARN_TOPICS`, `fileSearch: 'auto'`, không có công cụ DB<br>• `chat`: chatbot với intent router; cắt hội thoại còn 12 tin, `fileSearch: 'auto'`, **chỉ admin được nhận `ADMIN_DATA_TOOLS`**, lọc trích dẫn, gắn tên tài liệu, server tự quyết nhãn nguồn (`data` / `documents` / `mixed` / `general`), trả `queried` (công cụ đã chạy)<br>• `listDrafts`, `getDraft`: theo phạm vi quyền<br>• `updateDraft`: sửa và kiểm tra lại<br>• `approveDraft`, `rejectDraft`<br>• `publishDraft`: transaction tạo `questions` + `answers` cho trắc nghiệm và đúng/sai; bỏ qua dạng khác kèm lý do; lưu `published_refs` |
| `src/services/KnowledgeBaseService.ts` | ✏️ | Tạo hoặc sửa ghi chú thì **đưa job index vào hàng đợi**; thêm `reindexKnowledgeBase`; khi xoá, nếu ghi chú đã được index thì đưa job gỡ index vào hàng đợi |

#### DTO, Controllers, Routes

| File | | Ý nghĩa |
|---|---|---|
| `src/dto/ai.dto.ts` | 🆕 | **Ràng buộc dữ liệu đầu vào** (class-validator) và các danh sách hợp lệ (chuẩn HSK, cấp tối đa, loại chữ, loại tài liệu, bản quyền, độ khó). Request: tạo link upload, đăng ký tài liệu, sinh nội dung, hỏi đáp, chatbot (`ChatRequest`: 1–40 tin nhắn `ChatMessage`, role `user`/`assistant`, ≤ 4000 ký tự), AI Learn (`LearnChatRequest` = `ChatRequest` + `topic`), sửa bản nháp, duyệt/từ chối (ghi chú), xuất bản (category/topic/grade) |
| `src/controllers/KnowledgeDocumentController.ts` | 🆕 | Nhận HTTP → validate DTO → gọi `KnowledgeDocumentService` → trả JSON. Endpoint: upload-url, đăng ký, danh sách (lọc trạng thái, chuẩn, cấp, tenant), chi tiết, retry, xoá, usage |
| `src/controllers/AiController.ts` | 🆕 | Nhận HTTP → validate → gọi `AiGenerationService` với user hiện tại (`id`, `role`, `tenant_id` do `requireRole` nạp). Endpoint: generate, ask, chat, learnChat, danh sách/chi tiết bản nháp, sửa, sinh lại, duyệt, từ chối, xuất bản |
| `src/controllers/KnowledgeBaseController.ts` | ✏️ | Thêm `reindexKnowledgeBase` |
| `src/controllers/QuestionController.ts` | ✏️ | `claudeChat` gọi `anthropicChat` thay vì gọi SDK trực tiếp (thêm timeout, ghi usage, lỗi gọn hơn). Route không đổi: `POST /api/users/claude-chat` |
| `src/routes/knowledge.route.ts` | 🆕 | `/api/knowledge/*`: toàn bộ yêu cầu `ROLES.ADMIN` |
| `src/routes/ai.route.ts` | 🆕 | `/api/ai/*`: `ask`, `chat` và `learn/chat` cho mọi user; `generate`, xem và sinh lại bản nháp cho `AUTHOR`; sửa, duyệt, từ chối, xuất bản cho `REVIEWER` |
| `src/routes/knowledgeBase.route.ts` | ✏️ | Thêm `requireRole(ROLES.ADMIN)` cho cả nhóm (trước đây mọi user đăng nhập đều gọi được); thêm `POST /:id/reindex` |
| `src/routes/index.ts` | ✏️ | Mount `/api/knowledge` và `/api/ai` **sau `authMiddleware`**, không đặt dưới `/api/admin` (nhánh này đang public cho form liên hệ) |

### 6.2. Frontend `hoczi-web`

| File | | Ý nghĩa |
|---|---|---|
| `data/services/ai.service.ts` | 🆕 | **Lớp gọi API AI:**<br>• kiểu dữ liệu: `KnowledgeDocument`, `AiDraft`, `DraftOutput`, `DraftItem`, `Citation`…<br>• `uploadAndRegister`: xin link → POST form lên S3 → đăng ký<br>• các hàm tài liệu, sinh nội dung, bản nháp<br>• `chat`: gửi hội thoại cho chatbot<br>• `learnChat(topic, messages)`: gia sư AI Learn (kiểu `LearnReply`)<br>• `apiErrorMessage`: lấy thông báo lỗi từ server (validate, ngân sách, provider) để hiển thị |
| `app/admin/ai-documents/page.tsx` | 🆕 | Route `/admin/ai-documents` |
| `app/admin/ai-documents/AiDocumentsPage.tsx` | 🆕 | **Quản lý tài liệu nguồn:**<br>• bảng tài liệu (cấp, loại, phạm vi, dung lượng, trạng thái, lỗi); tự làm mới 5 giây một lần khi có tài liệu đang xử lý<br>• modal upload: file, metadata, chọn bản quyền, tick xác nhận; danh sách cấp đổi theo chuẩn HSK<br>• modal chi tiết: báo cáo trích xuất, trang đã OCR, các cụm đã index, Retry / "Index anyway" khi trùng<br>• modal xác nhận xoá |
| `app/admin/ai-studio/page.tsx` | 🆕 | Route `/admin/ai-studio` |
| `app/admin/ai-studio/AiStudioPage.tsx` | 🆕 | **Form sinh nội dung** (loại bài, chuẩn/cấp, loại chữ, độ khó, số câu, dạng câu, pinyin, ngôn ngữ giải thích, chủ đề, ID tài liệu, ghi chú). Sinh xong chuyển sang trang duyệt. **Danh sách bản nháp** có lọc trạng thái và cột "Checks" (OK / số vấn đề / không đủ bằng chứng) |
| `app/admin/ai-studio/[id]/page.tsx` | 🆕 | Route `/admin/ai-studio/[id]` (đọc `params` dạng Promise theo Next 16) |
| `app/admin/ai-studio/[id]/AiDraftDetailPage.tsx` | 🆕 | **Trang duyệt bản nháp:**<br>• hiển thị nội dung theo loại bài (đoạn văn, pinyin, bản dịch, từ vựng, ngữ pháp, ví dụ, lỗi thường gặp)<br>• từng câu hỏi có đánh dấu đáp án ✓ và nguồn<br>• cảnh báo khi thiếu bằng chứng<br>• khung kiểm tra tự động và nguồn đã tìm (có điểm)<br>• sửa JSON<br>• duyệt/từ chối kèm ghi chú, sinh lại, xuất bản (nhập category/topic/grade); sau xuất bản hiển thị ID câu hỏi và các câu bị bỏ qua |
| `app/admin/knowledge-base/KnowledgeBasePage.tsx` | ✏️ | Thêm cột **AI index** (trạng thái, rê chuột xem lỗi) và nút **Reindex** khi index thất bại |
| `data/services/knowledgeBase.service.ts` | ✏️ | Thêm trường `index_status`, `index_error`, `indexed_at` và hàm `reindexKnowledgeBase` |
| `app/admin/layout.tsx` | ✏️ | Sidebar thêm **AI Documents** (icon `FileText`) và **AI Studio** (icon `Sparkles`); gắn `<AdminChatbot />` để chatbot có mặt trên mọi trang admin |
| `app/components/ai/ChatSources.tsx` | 🆕 | Component dùng chung cho chatbot admin và AI Learn: `ChatSourceBadge` (nhãn nguồn: database / tài liệu / kết hợp / kiến thức chung; không hiện gì với câu trả lời mẫu `rule`) và `ChatCitationList` (danh sách nguồn: tên tài liệu, trang, mã) |
| `app/quizzes/results/ai-learn/[topic]/TopicPage.tsx` | ✏️ | **Trước đây gọi `/api/ai-learn/chat` (không tồn tại) nên luôn lỗi.** Giờ gọi `AiService.learnChat` với khoá chủ đề; gửi 12 tin gần nhất (bỏ bong bóng lỗi); hiện nhãn nguồn và danh sách nguồn; bong bóng lỗi màu đỏ với thông báo từ server; lưu hội thoại theo chủ đề vào `sessionStorage`; nút 🗑 bắt đầu hội thoại mới; Enter không gửi nhầm khi đang gõ dấu (`isComposing`) |
| `app/admin/AdminChatbot.tsx` | 🆕 | **Chatbot nổi góc phải dưới:** nút mở/đóng; khung chat (gợi ý câu hỏi khi trống, bong bóng user/AI/lỗi, nhãn nguồn và danh sách trích dẫn (dùng `ChatSources.tsx`), "Thinking…"); Enter gửi, Shift+Enter xuống dòng (an toàn với bộ gõ tiếng Việt/Trung); gửi 12 tin gần nhất; lưu hội thoại vào `sessionStorage` (bọc try/catch); nút xoá hội thoại |

### 6.3. Tài liệu

| File | | Ý nghĩa |
|---|---|---|
| `openai-integration-guide.md` | ✏️ | Thêm mục "Implementation status", đánh dấu checklist, ghi decision log: hàng đợi Postgres, một vector store dùng chung lọc theo tenant, giữ `knowledge_bases` và index luôn, `/api/admin` để public là có lý do, pin `openai@6.49.0` |
| `ai-code-and-business-explaination.md` | 🆕 | Tài liệu này: nghiệp vụ, hướng dẫn sử dụng, vận hành, xử lý sự cố, ý nghĩa code |

> Các file của trang Knowledge base ban đầu (`KnowledgeBaseController`, `knowledgeBase.dto.ts`, `knowledgeBase.route.ts`…) đã có trong commit `57a7008`. Ở đây chỉ liệt kê những thay đổi tiếp theo.

---

## 7. Ví dụ một vòng đầy đủ

1. Admin upload `HSK3_Standard_Course.pdf`: HSK 3.0, cấp 3, giản thể, textbook, dùng chung, bản quyền `licensed`. Tài liệu `#12` ở trạng thái `pending`.
2. Worker trích được 120 trang và chia thành 30 cụm. Mỗi cụm là một file trên OpenAI, có attributes `document_id=doc-12`, `hsk_level=3`, `page_start/page_end`. Tài liệu `#12` chuyển `ready`.
3. Giáo viên tenant 4 yêu cầu: bài tập, HSK 3.0 cấp 3, 5 câu trắc nghiệm, chủ đề "是…的".
4. Server tìm với bộ lọc `tenant_id ∈ {system, 4}` và `hsk_standard=hsk3`, `hsk_level=3`. AI tìm được trang 45–48 của `doc-12`, viết 5 câu và trích `doc-12 p.46`. Trích dẫn này khớp, được giữ. Một câu có `correctOptionIndex` sai, server ghi cảnh báo.
5. Giáo viên mở bản nháp, thấy cảnh báo, sửa câu đó (server kiểm tra lại, hết cảnh báo), rồi Approve và Publish. Ngân hàng câu hỏi có thêm 5 câu `mcq` thuộc tenant 4; bản nháp lưu ID 5 câu đó.
6. Bảng `ai_usage_logs` có thêm một dòng `generate` (token, độ trễ, chi phí ước tính).

---

## 8. Cài đặt và vận hành

### 8.1. Checklist đưa lên môi trường mới (staging / production)

Làm đủ các bước dưới đây. Thiếu bước nào thì giao diện vẫn hiện nhưng thao tác sẽ lỗi (503 "AI service is not configured", upload bị chặn, tài liệu đứng ở `pending`…).

| # | Việc | Cách làm |
|---|---|---|
| 1 | Cài dependency | `cd hoczi-api && yarn install` (lưu ý `yarn.lock` đang bị `.gitignore`) |
| 2 | Build | `yarn build`, kết quả ra `dist/`. Xem lưu ý về lỗi TS5103 ở [9.6](#96-yarn-build-báo-ts5103) |
| 3 | Chạy migration | `npm run migration:show` để xem, `npm run migration:run:prod` để chạy (dùng `dist/`). Trên DB cũ, `InitialSchema` chỉ được ghi nhận chứ không tạo lại bảng |
| 4 | Tạo vector store | Trên OpenAI dashboard (Storage → Vector stores → Create), hoặc bằng API (xem dưới). **Mỗi môi trường một store riêng** |
| 5 | Điền `.env` của API | Tối thiểu: `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPENAI_VECTOR_STORE_ID`, `AWS_S3_BUCKET_NAME`, `AWS_REGION`. Nên điền `AI_PRICE_*` và `AI_MONTHLY_BUDGET_USD`. Danh sách đầy đủ: `hoczi-api/env.example` và [10.4](#104-biến-môi-trường) |
| 6 | CORS cho S3 bucket | Cho phép `POST` từ domain web (xem dưới) |
| 7 | Chạy worker | PM2: `pm2 start ecosystem.config.js --only hoczi-ai-worker --env production` |
| 8 | Restart API | `pm2 restart hoczi-api` để nhận env và code mới |
| 9 | Thử | Upload một file `.md` nhỏ ở AI Documents; đợi `ready`; sinh thử ở AI Studio |

**Tạo vector store bằng API:**

```bash
curl https://api.openai.com/v1/vector_stores \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "hoczi-production"}'
# lấy "id" (dạng vs_...) điền vào OPENAI_VECTOR_STORE_ID
```

**CORS cho S3** (AWS Console → bucket → Permissions → CORS):

```json
[
  {
    "AllowedOrigins": ["https://hoczi.com", "https://www.hoczi.com"],
    "AllowedMethods": ["POST"],
    "AllowedHeaders": ["*"],
    "MaxAgeSeconds": 3000
  }
]
```

Khi dev local, thêm `http://localhost:3000` (hoặc cổng web đang dùng) vào `AllowedOrigins`.

**Chọn model:** `OPENAI_MODEL` phải hỗ trợ **`file_search`** và **structured outputs**. `OPENAI_OCR_MODEL` (nếu bật OCR) phải nhận **file PDF làm đầu vào**. Kiểm tra tên model hiện hành trong tài liệu OpenAI trước khi điền; code không cố định model.

### 8.2. Chạy khi phát triển (local)

```bash
cd hoczi-api
yarn dev            # API
yarn worker:dev     # worker (terminal khác), bắt buộc để tài liệu được xử lý
cd ../hoczi-web
yarn dev            # web
```

### 8.3. Worker

- Là tiến trình **riêng**, không chạy chung với API. API chỉ đưa việc vào bảng `ai_jobs`; worker lấy ra và làm.
- Các loại job: `ingest_document`, `delete_document`, `index_knowledge_base`, `unindex_knowledge_base`.
- Lỗi tạm thời (mạng, OpenAI quá tải, lỗi 5xx) được thử lại sau 1, 2, 4, 8… phút (tối đa 1 giờ), tối đa 5 lần. Lỗi vĩnh viễn (file hỏng, trùng) không thử lại; lỗi ghi lên tài liệu hoặc ghi chú.
- Worker chết giữa chừng thì sau 30 phút (`AI_WORKER_STALE_JOB_MINUTES`) job được trả về hàng đợi.
- Nên chạy **1 instance**. Chạy nhiều instance vẫn an toàn vì hai worker không nhận trùng job (`SKIP LOCKED`), nhưng chưa được kiểm tra kỹ.
- **Nếu deploy bằng Docker:** `Dockerfile` hiện chỉ chạy `npm start` (API). Cần thêm một container thứ hai từ cùng image, chạy lệnh `npm run worker`.

Lệnh PM2 hay dùng:

```bash
pm2 status
pm2 logs hoczi-ai-worker --lines 200
pm2 restart hoczi-ai-worker
```

### 8.4. Migration

| Lệnh | Dùng khi |
|---|---|
| `npm run migration:show` | Xem migration nào đã chạy |
| `npm run migration:run` | Chạy migration (ts-node, dùng `src/`) |
| `npm run migration:run:prod` | Chạy migration từ `dist/` sau khi build |
| `npm run migration:revert` | Hoàn tác migration cuối. `InitialSchema` **không** revert được (cố ý) |
| `npm run migration:generate -- src/migrations/<Ten>` | Sau khi sửa entity: sinh migration, **đọc kỹ SQL** rồi commit |

Quy ước: mọi thay đổi schema đi qua migration. **Không** bật `synchronize`, **không** thêm `CREATE TABLE` vào `query.sql`.

### 8.5. Theo dõi chi phí và sử dụng

- API: `GET /api/knowledge/usage` (admin) trả tổng chi phí tháng này, ngân sách, và bảng tổng hợp theo thao tác/kết quả. Chưa có giao diện.
- SQL:

```sql
-- chi phí và số request theo ngày, 30 ngày gần nhất
SELECT date(created_at) d, operation, count(*) n,
       sum(input_tokens) tin, sum(output_tokens) tout,
       round(sum(estimated_cost_usd)::numeric, 4) usd
FROM ai_usage_logs
WHERE created_at > now() - interval '30 days'
GROUP BY 1, 2 ORDER BY 1 DESC, 2;
```

- **Chi phí chỉ là ước tính**, tính từ `AI_PRICE_*`. Chưa điền giá thì luôn bằng 0 và **ngân sách tháng không có tác dụng**. Số chính xác xem ở trang billing của OpenAI.
- Chi phí OpenAI gồm ba phần:
  - token: sinh nội dung, hỏi đáp, OCR;
  - số lần gọi `file_search`;
  - **dung lượng lưu trữ vector store** tính theo GB/ngày. Phần này không ghi trong `ai_usage_logs`.

---

## 9. Xử lý sự cố

### 9.1. Tài liệu đứng mãi ở `pending`

Gần như chắc chắn **worker không chạy**.
1. `pm2 status`: có `hoczi-ai-worker` không, có `online` không?
2. `pm2 logs hoczi-ai-worker`: có lỗi kết nối DB hoặc thiếu env không?
3. Kiểm tra hàng đợi:

```sql
SELECT id, type, status, attempts, run_after, last_error
FROM ai_jobs ORDER BY id DESC LIMIT 20;
```

- Job `queued` mà `run_after` ở tương lai: đang chờ thử lại sau một lỗi tạm thời; đọc `last_error`.
- Job `running` lâu bất thường: worker có thể đã chết; nó tự được trả về hàng đợi sau 30 phút.

### 9.2. Tài liệu `failed`

| Thông báo lỗi | Nguyên nhân | Cách xử lý |
|---|---|---|
| `…page(s) have no usable text layer…` | PDF scan (ảnh) | Bật `AI_OCR_ENABLED=true`, restart worker, bấm Retry; hoặc upload `.md` có `[page N]` |
| `Same file as document #X` | File đã được nạp | Không cần làm gì; hoặc "Index anyway" |
| `Extracted text looks corrupt…` | Font tiếng Trung trong PDF không giải mã được | Upload bản `.md`/`.txt` đã sửa (hoặc dùng OCR) |
| `No text could be extracted…` | File rỗng hoặc không đọc được | Kiểm tra lại file |
| `File content is a PDF but the name ends with…` | Đuôi file không khớp nội dung | Đổi tên file cho đúng |
| `Text file is not valid UTF-8` | File text không phải UTF-8 | Lưu lại file dạng UTF-8 |
| `OCR needed for N pages, above AI_OCR_MAX_PAGES` | Quá nhiều trang cần OCR | Tách file nhỏ hơn hoặc tăng `AI_OCR_MAX_PAGES` |
| `Indexing failed for … unsupported_file / invalid_file` | OpenAI từ chối file | Xem nội dung file; báo dev |
| `AI integration is not configured. Missing env: …` | Thiếu biến môi trường | Điền env, restart API và worker, Retry |

### 9.3. Lỗi khi upload ở trình duyệt

| Hiện tượng | Nguyên nhân | Cách xử lý |
|---|---|---|
| Lỗi CORS trong console, "Failed to fetch" | S3 chưa cấu hình CORS | Xem [8.1](#81-checklist-đưa-lên-môi-trường-mới-staging--production) bước 6 |
| "Upload rejected by storage (file too large?)" | Vượt `AI_MAX_UPLOAD_MB` hoặc link hết hạn (15 phút) | Giảm dung lượng; thử lại |
| "Unsupported file type" | Không phải `.pdf/.md/.txt` | Đổi định dạng |
| "Uploaded file not found" | Upload S3 chưa xong, hoặc sai bucket | Kiểm tra `AWS_S3_BUCKET_NAME`, `AWS_REGION` |
| 403 Forbidden | Tài khoản không phải admin | Dùng tài khoản `admin`/`super_admin` |

### 9.4. Lỗi khi sinh nội dung (AI Studio)

| Thông báo | Nguyên nhân | Cách xử lý |
|---|---|---|
| Bản nháp "No evidence" / hộp vàng | Không có tài liệu `ready` cùng chuẩn, cấp, loại chữ; hoặc chủ đề không có trong tài liệu | Kiểm tra AI Documents; đổi chủ đề; bỏ giới hạn document IDs |
| "AI service is not configured" (503) | Thiếu `OPENAI_*` | Điền env, restart API |
| "Too many AI requests, please wait a minute" (429) | Vượt `AI_RATE_LIMIT_PER_MINUTE` | Đợi 1 phút |
| "AI quota exhausted: the OpenAI account has no credits…" (503) | OpenAI trả 429 `credit_balance_exhausted` / `insufficient_quota` / `billing_hard_limit_reached`: tài khoản/project **hết credit**, chưa có billing, hoặc chạm **giới hạn chi tiêu của project** | OpenAI dashboard → Billing (nạp credit) và Project → Limits (nâng usage limit). Kiểm tra key trên server có thuộc đúng project không |
| "AI provider is rate limiting requests, try again later" (503) | OpenAI trả 429 `rate_limit_exceeded`: vượt giới hạn RPM/TPM của tier tài khoản | Thử lại sau; xem Limits của project; giảm `AI_RATE_LIMIT_PER_MINUTE` |
| "Monthly AI budget … has been reached" (429) | Vượt ngân sách tháng | Tăng `AI_MONTHLY_BUDGET_USD` / `AI_TENANT_MONTHLY_BUDGET_USD`, hoặc chờ sang tháng |
| "AI output was incomplete…" (502) | Kết quả quá dài, bị cắt | Giảm số câu; tăng `AI_MAX_OUTPUT_TOKENS` |
| "AI provider timed out" (504) | OpenAI phản hồi chậm | Thử lại; tăng `OPENAI_REQUEST_TIMEOUT_MS` |
| "AI provider request failed" (502) | Lỗi từ OpenAI (key sai, model không hỗ trợ…) | Xem log API (`pm2 logs hoczi-api`), tìm dòng `[ai] generate failed` |
| "HSK2 has levels 1-6" | Chọn cấp 7–9 cho HSK 2.0 | Chọn lại |

**Xác định đúng nguyên nhân lỗi OpenAI** (chạy trên server đang lỗi):

```sql
SELECT created_at, operation, model, error_code FROM ai_usage_logs
WHERE outcome = 'error' ORDER BY id DESC LIMIT 10;
-- 429:credit_balance_exhausted hoặc 429:insufficient_quota → hết credit/billing; 429:rate_limit_exceeded → rate limit;
-- 401:invalid_api_key → sai key; 404:model_not_found → model không có trong project
```

Hoặc gọi thẳng OpenAI bằng key của server (gần như không tốn phí):

```bash
curl -s https://api.openai.com/v1/responses -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" -d '{"model":"'"$OPENAI_MODEL"'","input":"ping","max_output_tokens":16}'
```

### 9.4b. Chatbot

| Hiện tượng | Nguyên nhân | Cách xử lý |
|---|---|---|
| Không thấy nút chat | Trang không thuộc `/admin`, hoặc bản web chưa deploy | Chatbot chỉ có trong layout admin |
| "AI service is not configured" | Thiếu `OPENAI_API_KEY` / `OPENAI_MODEL` | Điền env, restart API |
| Luôn trả "General knowledge" dù hỏi về giáo trình | Chưa có vector store, chưa có tài liệu `ready`, tài liệu thuộc tenant khác, hoặc tài liệu không chứa nội dung đó | Kiểm tra `OPENAI_VECTOR_STORE_ID`, AI Documents; hỏi cụ thể hơn (tên bài, cấp HSK) |
| "Too many AI requests…" | Vượt rate limit | Đợi 1 phút |
| Admin hỏi số liệu nhưng AI trả lời chung chung / đoán số | Câu hỏi nằm ngoài 5 công cụ, hoặc diễn đạt mơ hồ | Hỏi cụ thể hơn; nếu cần loại số liệu mới thì thêm công cụ ([4.5c](#45c-intent-router-và-công-cụ-dữ-liệu)) |
| Giáo viên hỏi số liệu bị từ chối | Đúng thiết kế: công cụ dữ liệu chỉ cho admin | Dùng tài khoản admin |
| "The assistant needed too many steps…" | AI gọi công cụ quá 4 vòng | Tách câu hỏi nhỏ hơn |
| Số liệu lệch với trang Dashboard | Dashboard đang hiển thị số mẫu cố định, chatbot đọc DB thật | Tin số của chatbot; kiểm tra bằng SQL nếu cần |
| Gõ "Xin chào" mà vẫn chờ lâu / bị tính rate limit | Câu không khớp đúng danh sách (ví dụ có thêm chữ khác), hoặc API chưa deploy bản có intent router | Xem bảng intent ở [4.5c](#45c-intent-router-và-công-cụ-dữ-liệu); thêm câu vào `QUICK_INTENTS` |
| Đã sửa `intent-router.md` nhưng chatbot không đổi | Code không đọc file `.md` | Sửa `QUICK_INTENTS` trong `intentRouter.ts`, deploy lại API |
| Câu trả lời có ký tự Markdown (`**`) | Model không theo hết lời dặn | Vô hại; có thể chỉnh `chatInstructions()` rồi tăng phiên bản `chat@v2` |

### 9.4c. AI Learn

| Hiện tượng | Nguyên nhân | Cách xử lý |
|---|---|---|
| "Unknown topic …" (400) | Khoá chủ đề trên URL không có trong `LEARN_TOPICS` | Dùng khoá đúng; hoặc thêm chủ đề ở cả backend và frontend ([4.5d](#45d-ai-learn-gia-sư-cho-học-viên)) |
| Bong bóng đỏ "No Token Found!" / 401 | Chưa đăng nhập hoặc token hết hạn | Đăng nhập lại |
| "Too many AI requests…" | Học viên hỏi quá 10 câu/phút | Đợi; hoặc tăng `AI_RATE_LIMIT_PER_MINUTE` |
| "AI quota exhausted…" / "AI service is not configured" | Hết credit OpenAI / thiếu env | Xem 9.4 |
| Gia sư đưa ngay đáp án bài tập | Model ưu tiên yêu cầu rõ của học viên | Chỉnh `learnInstructions()` trong `prompts.ts`, tăng `learn@v2` |

### 9.5. Lỗi khi duyệt / xuất bản

| Thông báo | Cách xử lý |
|---|---|
| "The sources did not support this request…" khi Approve | Bản nháp thiếu bằng chứng, không duyệt được. Sinh lại với phạm vi khác |
| "Only drafts can be edited" | Bản đã duyệt hoặc xuất bản thì không sửa được. Sinh lại để có bản nháp mới |
| "Only approved drafts can be published" | Approve trước rồi mới Publish |
| "Nothing to publish: no item maps to a question-bank type" | Bản nháp không có câu trắc nghiệm hay đúng/sai |
| "Draft not found" | Bản nháp thuộc tenant khác, hoặc không tồn tại |

### 9.6. `yarn build` báo TS5103

`hoczi-api/tsconfig.json` có `"ignoreDeprecations": "6.0"`, nhưng TypeScript 5.9 chỉ chấp nhận `"5.0"`. Vì vậy `tsc` báo `TS5103` và **thoát với mã lỗi 1**, dù vẫn sinh đủ file trong `dist/`. Lỗi này **có từ trước** tính năng AI.

- Script deploy kiểu `yarn build && pm2 restart` hoặc `RUN npm run build` trong Dockerfile **sẽ dừng ở bước build**.
- Cách sửa: đổi thành `"ignoreDeprecations": "5.0"` (hoặc nâng TypeScript lên 6). Cần kiểm tra lại cách build trên server hiện tại trước khi đổi.

### 9.7. Xem log

| Ở đâu | Tìm gì |
|---|---|
| `pm2 logs hoczi-api` | `[ai] generate failed`, `[ai] ask failed`, `[error] <METHOD> <URL>` (lỗi 5xx đã được giấu khỏi client) |
| `pm2 logs hoczi-ai-worker` | `[worker] job #N … failed`, `retry in Ns` |
| Bảng `ai_jobs` | `last_error` của job |
| Bảng `knowledge_documents` | `error_message`, `extraction_report` |
| Bảng `ai_usage_logs` | `outcome = 'error'`, `error_code` (ví dụ `401:invalid_api_key`), `provider_request_id` để hỏi OpenAI support |

---

## 10. Tra cứu nhanh

### 10.1. API endpoints

Tất cả đều cần đăng nhập (header `Authorization: Bearer <token>`).

| Method | Đường dẫn | Quyền | Chức năng |
|---|---|---|---|
| POST | `/api/knowledge/documents/upload-url` | admin | Xin link upload S3 (`{ filename }`) |
| POST | `/api/knowledge/documents` | admin | Đăng ký tài liệu sau khi upload |
| GET | `/api/knowledge/documents?page&limit&status&hsk_standard&hsk_level&tenant_id` | admin | Danh sách (`tenant_id=system` cho tài liệu dùng chung) |
| GET | `/api/knowledge/documents/:id` | admin | Chi tiết kèm các phần đã index |
| POST | `/api/knowledge/documents/:id/retry` | admin | Thử lại (`{ allow_duplicate }`) |
| DELETE | `/api/knowledge/documents/:id` | admin | Xoá |
| GET | `/api/knowledge/usage` | admin | Chi phí tháng này |
| GET/POST/PUT/DELETE | `/api/knowledge-bases[/:id]` | admin | CRUD ghi chú |
| POST | `/api/knowledge-bases/:id/reindex` | admin | Index lại ghi chú |
| POST | `/api/ai/generate` | teacher, author, admin | Sinh bản nháp |
| GET | `/api/ai/drafts?page&limit&status&task_type` | teacher, author, admin | Danh sách bản nháp |
| GET | `/api/ai/drafts/:id` | teacher, author, admin | Chi tiết bản nháp |
| POST | `/api/ai/drafts/:id/regenerate` | teacher, author, admin | Sinh lại |
| PUT | `/api/ai/drafts/:id` | teacher, admin | Sửa (`{ output }`) |
| POST | `/api/ai/drafts/:id/approve` | teacher, admin | Duyệt (`{ notes }`) |
| POST | `/api/ai/drafts/:id/reject` | teacher, admin | Từ chối (`{ notes }`) |
| POST | `/api/ai/drafts/:id/publish` | teacher, admin | Xuất bản (`{ category_id, topic_id, grade_id }`) |
| POST | `/api/ai/ask` | mọi user | Hỏi đáp (`{ question, hsk_standard?, hsk_level?, script? }`) |
| POST | `/api/ai/chat` | mọi user (công cụ dữ liệu chỉ cho admin) | Chatbot (`{ messages: [{ role, content }] }`); trả `{ answer, source: data/documents/mixed/general, queried, searched, citations }` |
| POST | `/api/ai/learn/chat` | mọi user | Gia sư AI Learn (`{ topic, messages }`, `topic` ∈ khoá trong `LEARN_TOPICS`); trả `{ answer, source, citations }` |
| POST | `/api/users/claude-chat` | mọi user | Chat Claude cũ (không dùng giáo trình) |

"admin" ở đây là `admin` hoặc `super_admin`.

### 10.2. Bảng dữ liệu mới

| Bảng | Chứa gì | Cột hay xem |
|---|---|---|
| `knowledge_documents` | Tài liệu nguồn | `status`, `error_message`, `extraction_report`, `hsk_standard`, `hsk_level`, `tenant_id` |
| `knowledge_document_chunks` | Các phần đã upload lên OpenAI | `document_id`, `page_start`, `page_end`, `openai_file_id`, `status` |
| `ai_jobs` | Hàng đợi việc nền | `type`, `status`, `attempts`, `run_after`, `last_error` |
| `ai_drafts` | Bản nháp AI | `status`, `validation_issues`, `insufficient_evidence`, `published_refs` |
| `ai_usage_logs` | Mỗi lần gọi AI | `operation`, `outcome`, `error_code`, `estimated_cost_usd` |
| `knowledge_bases` (thêm cột) | Ghi chú | `index_status`, `index_error`, `openai_file_id` |

### 10.3. Các trạng thái

| Đối tượng | Trạng thái |
|---|---|
| Tài liệu | `pending` → `processing` → `ready` / `failed`; `deleting` → `deleted` |
| Phần (chunk) | `pending` → `indexed` / `failed` |
| Job | `queued` → `running` → `succeeded` / `failed` (hoặc về `queued` để thử lại) |
| Bản nháp | `draft` → `approved` → `published`; `draft`/`approved` → `rejected` |
| Ghi chú (AI index) | `not_indexed`, `queued`, `indexed`, `failed` |

### 10.4. Biến môi trường

Đầy đủ kèm giá trị mặc định ở `hoczi-api/env.example`. Các biến quan trọng:

| Biến | Bắt buộc | Ý nghĩa |
|---|---|---|
| `OPENAI_API_KEY` | ✅ | Key OpenAI, **chỉ để phía server** |
| `OPENAI_MODEL` | ✅ | Model sinh nội dung (phải hỗ trợ `file_search` + structured outputs) |
| `OPENAI_VECTOR_STORE_ID` | ✅ | Vector store của môi trường này (`vs_…`) |
| `AWS_S3_BUCKET_NAME`, `AWS_REGION` | ✅ | Bucket lưu file gốc |
| `OPENAI_OCR_MODEL` | Khi bật OCR | Model đọc PDF scan; mặc định dùng `OPENAI_MODEL` |
| `AI_OCR_ENABLED` | | `true` để OCR trang scan (mặc định `false`) |
| `AI_PRICE_INPUT_PER_1M_USD`, `AI_PRICE_OUTPUT_PER_1M_USD`, `AI_PRICE_FILE_SEARCH_PER_1K_USD` | Nên có | Giá để ước tính chi phí; không có thì ngân sách vô tác dụng |
| `AI_MONTHLY_BUDGET_USD`, `AI_TENANT_MONTHLY_BUDGET_USD` | Nên có | Ngân sách tháng (0 = không giới hạn) |
| `AI_RATE_LIMIT_PER_MINUTE` | | Số request AI mỗi phút mỗi user (mặc định 10) |
| `AI_MAX_ITEM_COUNT`, `AI_MAX_OUTPUT_TOKENS` | | Giới hạn số câu và độ dài đầu ra |
| `AI_MAX_UPLOAD_MB` | | Dung lượng file tối đa (mặc định 100) |
| `AI_PAGES_PER_CHUNK` | | Số trang mỗi phần khi chia PDF (mặc định 4) |
| `OPENAI_FILE_SEARCH_MAX_RESULTS` | | Số đoạn tối đa AI lấy về mỗi lần tìm (mặc định 8) |
| `ANTHROPIC_MODEL` | | Model cho `claude-chat` cũ (mặc định `claude-opus-4-7`) |

---

## 11. Giới hạn hiện tại và việc tiếp theo

- **Chưa thử với OpenAI thật, S3 thật, sách tiếng Trung thật**: cần kiểm tra trích text CJK (pdf.js bản trong `pdf-parse` khá cũ), chất lượng OCR, CORS của S3.
- Chỉ **trắc nghiệm và đúng/sai** xuất bản được; điền từ và sắp xếp câu cần mở rộng ngân hàng câu hỏi.
- Chưa tự nhận diện **bài/mục** trong sách, chỉ chia theo cụm trang (`lesson_label`/`section_label` đang để trống).
- Ghi chú knowledge base chưa có trường HSK nên không dùng được cho phần sinh nội dung.
- Màn hình cho giáo viên đang nằm trong khu **admin**; chưa có portal riêng.
- Chi phí chỉ là **ước tính** theo giá nhập tay.
- Chưa có giao diện cho **thống kê chi phí** (`/api/knowledge/usage`). Hỏi đáp đã có qua **chatbot**; `/api/ai/ask` (chỉ trả lời theo tài liệu) vẫn chưa có giao diện riêng.
- **AI Learn:** gia sư vẫn đưa lời giải đầy đủ khi học viên yêu cầu rõ ("giải giúp em"), dù prompt dặn hướng dẫn trước; cần quyết định chính sách sư phạm rồi chỉnh prompt. Danh sách chủ đề đang khai báo ở hai nơi (backend `LEARN_TOPICS`, frontend `TOPIC_CONFIG`). Chưa có giới hạn riêng cho học viên (dùng chung rate limit và ngân sách).
- Chatbot **không lưu hội thoại** trên server và chưa có giao diện cho học viên (chỉ trong khu admin).
- `yarn build` thoát với mã lỗi do `tsconfig.json` (TS5103, lỗi có từ trước); `Dockerfile` chưa có container cho worker. Xem [9.6](#96-yarn-build-báo-ts5103) và [8.3](#83-worker).
- **Phase 4** của guide (bộ đánh giá với chuyên gia, pilot nhỏ, quy trình rollback) chưa làm. Lý do chọn OpenAI thay vì Anthropic vẫn chưa được ghi vào decision log.

---

## Lịch sử tài liệu

| Ngày | Nội dung |
|---|---|
| 2026-10-03 | Tạo tài liệu: nghiệp vụ, danh sách file, hướng dẫn sử dụng 3 mục AI, cài đặt, xử lý sự cố, tra cứu |
| 2026-10-03 | Lỗi 429 `credit_balance_exhausted` trên production: tài khoản OpenAI hết credit; code nhận diện mã này và báo "AI quota exhausted" |
| 2026-10-03 | Thêm chatbot "Hoczi Assistant" trong layout admin (`/api/ai/chat`, `AdminChatbot.tsx`) |
| 2026-10-06 | Intent router tầng 1 (`intentRouter.ts`, theo `intent-router.md`): câu chào hỏi được trả lời mẫu, không gọi model. Sửa lỗi: thiếu cấu hình OpenAI giờ trả 503 "AI service is not configured" thay vì 500 |
| 2026-10-04 | Nối trang AI Learn (`/quizzes/results/ai-learn/[topic]`) với OpenAI: endpoint `/api/ai/learn/chat`, 12 chủ đề cố định, prompt gia sư `learn@v1`, component dùng chung `ChatSources.tsx` |
| 2026-10-04 | Thêm intent router cho chatbot: 5 công cụ thống kê DB cho admin (`dataTools.ts`), vòng gọi công cụ trong `runGrounded`, prompt `chat@v2`, nhãn "From Hoczi database" |
