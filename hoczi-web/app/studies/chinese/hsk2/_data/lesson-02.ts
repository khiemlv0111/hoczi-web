import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第2课 我每天六点起床。 (Hằng ngày tôi thức dậy lúc 6 giờ.)
// Nguồn: Giáo trình chuẩn HSK2, trang 23–30 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson02: Lesson = {
  level: "hsk2",
  no: 2,
  slug: "bai-2",
  zh: "我每天六点起床。",
  pinyin: "Wǒ měi tiān liù diǎn qǐ chuáng.",
  vi: "Hằng ngày tôi thức dậy lúc 6 giờ.",
  en: "I get up at six every day.",
  topic: "健康与作息 · Sức khỏe, sinh hoạt hằng ngày",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 14 từ mới: 生病、每、早上、跑步、起床、药、身体、出院(出)、高、米、知道、休息、忙、时间.",
    "Hiểu và dùng được 3 điểm ngữ pháp: câu hỏi với 是不是, đại từ 每, đại từ nghi vấn 多 (多大/多高).",
    "Đọc hiểu 4 đoạn hội thoại về thói quen chạy bộ, thăm người bệnh, chiều cao – tuổi của bạn, thầy giáo bận rộn.",
    "Hỏi – đáp về giờ giấc sinh hoạt, sức khỏe, tuổi và chiều cao.",
    "Ngữ âm: trọng âm từ ba âm tiết; chữ Hán: nét ㇌ (横撇弯钩), ㇋ (横折折撇), chữ 生、高, bộ ⺮ và bộ 欠.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：起床、跑步、吃药、生病、休息、出院",
      vi: "Chọn hình tương ứng với các từ: 起床 (thức dậy), 跑步 (chạy bộ), 吃药 (uống thuốc), 生病 (bị ốm), 休息 (nghỉ ngơi), 出院 (xuất viện).",
    },
    {
      zh: "看下面的图片，说说马丁什么时间做什么事情：早上……，下午……，晚上……，星期六和星期天……",
      vi: "Xem hình và cho biết Martin làm gì vào lúc nào: buổi sáng…, buổi chiều…, buổi tối…, thứ bảy và chủ nhật…",
    },
  ],

  vocab: [
    { id: 1, han: "生病", py: "shēng bìng", pos: "đgt.", meaning: "bị bệnh, bị ốm", example: "你很少生病，是不是喜欢运动？", exampleVi: "Anh ít khi bị bệnh, chắc là anh thích tập thể dục phải không?" },
    { id: 2, han: "每", py: "měi", pos: "đt.", meaning: "mỗi", example: "我每天早上都要出去跑步。", exampleVi: "Mỗi buổi sáng tôi đều ra ngoài chạy bộ." },
    { id: 3, han: "早上", py: "zǎoshang", pos: "dt.", meaning: "buổi sáng", example: "他每天早上出去跑步，身体很好。", exampleVi: "Sáng nào anh ấy cũng ra ngoài chạy bộ, sức khỏe rất tốt." },
    { id: 4, han: "跑步", py: "pǎo bù", pos: "đgt.", meaning: "chạy bộ", example: "我每天早上都要出去跑步。", exampleVi: "Mỗi buổi sáng tôi đều ra ngoài chạy bộ." },
    { id: 5, han: "起床", py: "qǐ chuáng", pos: "đgt.", meaning: "thức dậy", example: "你每天几点起床？", exampleVi: "Hằng ngày anh thức dậy lúc mấy giờ?" },
    { id: 6, han: "药", py: "yào", pos: "dt.", meaning: "thuốc", example: "吃药了吗？", exampleVi: "Cô uống thuốc chưa?" },
    { id: 7, han: "身体", py: "shēntǐ", pos: "dt.", meaning: "sức khỏe, cơ thể", example: "现在身体怎么样？", exampleVi: "Bây giờ cô thấy trong người thế nào?" },
    { id: 8, han: "出院", py: "chū yuàn", pos: "đgt.", meaning: "xuất viện (出: ra, ra ngoài)", example: "什么时候能出院？", exampleVi: "Khi nào cô có thể xuất viện?" },
    { id: 9, han: "高", py: "gāo", pos: "tt.", meaning: "cao", example: "他多高？", exampleVi: "Anh ấy cao bao nhiêu?" },
    { id: 10, han: "米", py: "mǐ", pos: "lượng.", meaning: "mét", example: "一米八几。", exampleVi: "Trên một mét tám mươi." },
    { id: 11, han: "知道", py: "zhīdào", pos: "đgt.", meaning: "biết", example: "你怎么知道这么多啊？", exampleVi: "Sao bạn biết về anh ấy nhiều như vậy?" },
    { id: 12, han: "休息", py: "xiūxi", pos: "đgt.", meaning: "nghỉ ngơi", example: "张老师星期六也不休息啊？", exampleVi: "Thứ bảy mà thầy Trương cũng không nghỉ ngơi à?" },
    { id: 13, han: "忙", py: "máng", pos: "tt.", meaning: "bận", example: "他这几天很忙，没有时间休息。", exampleVi: "Mấy ngày nay anh ấy rất bận, không có thời gian nghỉ ngơi." },
    { id: 14, han: "时间", py: "shíjiān", pos: "dt.", meaning: "thời gian", example: "没有时间休息。", exampleVi: "Không có thời gian nghỉ ngơi." },
    { id: 15, han: "大卫", py: "Dàwèi", pos: "dt.", meaning: "David (tên người)", example: "大卫今年多大？", exampleVi: "David năm nay bao nhiêu tuổi?" },
  ],

  text: {
    title: "课文 我每天六点起床。",
    paragraphs: [
      {
        heading: "课文一 · 在运动场 (Ở sân vận động)",
        zh: "A：你很少生病，是不是喜欢运动？\nB：是啊，我每天早上都要出去跑步。\nA：你每天几点起床？\nB：我每天六点起床。",
        vi: "A: Anh ít khi bị bệnh, chắc là anh thích tập thể dục phải không?\nB: Đúng vậy. Mỗi buổi sáng tôi đều ra ngoài chạy bộ.\nA: Hằng ngày anh thức dậy lúc mấy giờ?\nB: 6 giờ.",
        questions: ["他为什么很少生病？", "他每天几点起床？"],
      },
      {
        heading: "课文二 · 在医院 (Trong bệnh viện)",
        zh: "A：吃药了吗？现在身体怎么样？\nB：吃了。现在好多了。\nA：什么时候能出院？\nB：医生说下个星期。",
        vi: "A: Cô uống thuốc chưa? Bây giờ cô thấy trong người thế nào?\nB: Tôi uống rồi. Giờ thì tôi đã khỏe hơn nhiều.\nA: Khi nào cô có thể xuất viện?\nB: Bác sĩ nói là tuần sau.",
        questions: ["她现在身体怎么样？", "她什么时候能出院？"],
      },
      {
        heading: "课文三 · 在操场 (Ở sân thể thao)",
        zh: "A：大卫今年多大？\nB：二十多岁。\nA：他多高？\nB：一米八几。\nA：你怎么知道这么多啊？\nB：他是我同学。",
        vi: "A: David năm nay bao nhiêu tuổi vậy?\nB: Hơn 20 tuổi.\nA: Thế anh ấy cao bao nhiêu?\nB: Trên một mét tám mươi.\nA: Sao bạn biết về anh ấy nhiều như vậy?\nB: Anh ấy học cùng lớp với mình mà.",
        questions: ["大卫今年多大？多高？"],
      },
      {
        heading: "课文四 · 在房间 (Trong phòng)",
        zh: "A：张老师星期六也不休息啊？\nB：是啊，他这几天很忙，没有时间休息。\nA：那会很累吧？\nB：他每天回来都很累。",
        vi: "A: Thứ bảy mà thầy Trương cũng không nghỉ ngơi à?\nB: Đúng vậy, mấy ngày nay anh ấy rất bận, không có thời gian nghỉ ngơi.\nA: Nếu thế thì chắc là anh ấy mệt lắm.\nB: Ngày nào về đến nhà anh ấy cũng rất mệt.",
        questions: ["张老师星期六休息吗？为什么？"],
      },
    ],
    notes: [
      "大卫 (Dàwèi): David; 张 (Zhāng): họ Trương.",
      "一米八几: hơn 1 mét 80 (một mét tám mấy).",
      "Ngữ âm – trọng âm từ ba âm tiết: đa số “vừa + nhẹ + mạnh” (收音机、新加坡、电视剧); một số “vừa + mạnh + nhẹ” (胡萝卜、没关系、老狐狸); rất ít “mạnh + nhẹ + nhẹ” (什么的、怪不得、姑娘家).",
      "Chữ Hán – nét 横撇弯钩 (ngang phẩy cong móc: 队、阵) và 横折折撇 (ngang gập gập phẩy: 及、级). Chữ 生 giống mầm cây mọc trên mặt đất (sinh trưởng); chữ 高 giống lầu gác cao.",
      "Bộ ⺮ (竹字头): liên quan đến tre trúc (篮、笔); bộ 欠: liên quan đến hoạt động của miệng (歌、吹).",
    ],
  },

  grammar: [
    {
      word: "是不是",
      title: "Câu hỏi với 是不是",
      usages: [
        {
          label: "Cách dùng",
          explain: "Khi người hỏi đã phỏng đoán khá chắc chắn về một sự việc và muốn khẳng định điều đó, có thể dùng 是不是. 是不是 thường đứng trước vị ngữ, nhưng cũng có thể đứng ở đầu hoặc cuối câu.",
          examples: ["你很少生病，是不是喜欢运动？", "是不是明天爸爸休息？", "我们星期一去北京，是不是？"],
        },
      ],
    },
    {
      word: "每",
      title: "Đại từ 每 (mỗi)",
      usages: [
        {
          label: "Cách dùng",
          explain: "每 dùng trước lượng từ để chỉ một cá thể hay một nhóm bất kỳ trong tổng thể: 每天 (mỗi ngày), 每年 (mỗi năm), 每个月 (mỗi tháng), 每个星期 (mỗi tuần). Thường đi với 都.",
          examples: ["山姆每年都去中国旅游。", "你每个星期六都工作吗？", "我每天六点起床。"],
        },
      ],
    },
    {
      word: "多 + 形容词",
      title: "Đại từ nghi vấn 多 (bao nhiêu)",
      usages: [
        {
          label: "Cách dùng",
          explain: "多 dùng trước tính từ để hỏi về mức độ (多大: bao nhiêu tuổi, 多高: cao bao nhiêu). Khi trả lời phải nêu số lượng cụ thể.",
          examples: ["A：你多大？B：我16岁。", "A：王医生的儿子多高？B：他儿子一米七。", "A：他多高？B：一米八几。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "你很少___，是不是喜欢运动？", options: ["生病", "起床", "休息", "知道"], answer: "生病" },
    { sentence: "我___天早上都要出去跑步。", options: ["每", "多", "最", "也"], answer: "每" },
    { sentence: "你每天几点___？", options: ["起床", "生病", "出院", "知道"], answer: "起床" },
    { sentence: "吃___了吗？现在身体怎么样？", options: ["药", "米", "时间", "身体"], answer: "药" },
    { sentence: "什么时候能___？——医生说下个星期。", options: ["出院", "跑步", "休息", "起床"], answer: "出院" },
    { sentence: "A：他多___？B：一米八几。", options: ["高", "忙", "大", "好"], answer: "高" },
    { sentence: "你怎么___这么多啊？", options: ["知道", "觉得", "休息", "生病"], answer: "知道" },
    { sentence: "张老师星期六也不___啊？", options: ["休息", "起床", "出院", "跑步"], answer: "休息" },
    { sentence: "他这几天很___，没有时间休息。", options: ["忙", "高", "新", "多"], answer: "忙" },
    { sentence: "他很忙，没有___休息。", options: ["时间", "身体", "药", "早上"], answer: "时间" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [5, 8, 12] },
        { vocabId: 3, distractors: [14, 7, 4] },
        { vocabId: 4, distractors: [5, 12, 1] },
        { vocabId: 5, distractors: [4, 8, 11] },
        { vocabId: 7, distractors: [14, 3, 6] },
        { vocabId: 11, distractors: [12, 1, 5] },
        { vocabId: 12, distractors: [11, 4, 8] },
        { vocabId: 14, distractors: [7, 3, 11] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 4, 5, 7, 11, 12, 14],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "每天", "六点", "起床", "。"], answer: "我每天六点起床。", vi: "Hằng ngày tôi thức dậy lúc 6 giờ." },
        { tokens: ["你很少生病", "，", "是不是", "喜欢", "运动", "？"], answer: "你很少生病，是不是喜欢运动？", vi: "Bạn ít bị ốm, có phải là thích thể thao không?" },
        { tokens: ["我", "每天早上", "都", "要", "出去跑步", "。"], answer: "我每天早上都要出去跑步。", vi: "Sáng nào tôi cũng ra ngoài chạy bộ." },
        { tokens: ["他", "这几天", "很忙", "，", "没有", "时间休息", "。"], answer: "他这几天很忙，没有时间休息。", vi: "Mấy ngày nay anh ấy rất bận, không có thời gian nghỉ." },
        { tokens: ["你", "怎么", "知道", "这么多", "啊", "？"], answer: "你怎么知道这么多啊？", vi: "Sao bạn biết nhiều thế?" },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ở sân vận động", text: "A：你很少{{c1}}，{{c2}}喜欢运动？\nB：是啊，我{{c3}}天{{c4}}都要出去{{c5}}。\nA：你每天几点{{c6}}？\nB：我每天六点起床。" },
        { title: "Bài khóa 2 · Trong bệnh viện", text: "A：吃{{c7}}了吗？现在{{c8}}怎么样？\nB：吃了。现在好多了。\nA：什么时候能{{c9}}？\nB：{{c10}}说下个星期。" },
      ],
      answers: { c1: "生病", c2: "是不是", c3: "每", c4: "早上", c5: "跑步", c6: "起床", c7: "药", c8: "身体", c9: "出院", c10: "医生" },
      bank: ["生病", "是不是", "每", "早上", "跑步", "起床", "药", "身体", "出院", "医生", "休息", "多", "时间"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Ở sân thể thao", text: "A：大卫今年{{e1}}大？\nB：二十{{e2}}岁。\nA：他多{{e3}}？\nB：一{{e4}}八几。\nA：你怎么{{e5}}这么多啊？\nB：他是我同学。" },
        { title: "Bài khóa 4 · Trong phòng", text: "A：张老师星期六也不{{e6}}啊？\nB：是啊，他这几天很{{e7}}，没有{{e8}}休息。\nA：那会很{{e9}}吧？\nB：他{{e10}}天回来都很累。" },
      ],
      answers: { e1: "多", e2: "多", e3: "高", e4: "米", e5: "知道", e6: "休息", e7: "忙", e8: "时间", e9: "累", e10: "每" },
      bank: ["多", "多", "高", "米", "知道", "休息", "忙", "时间", "累", "每", "几", "身体"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我每天早上都要出去跑步。", vi: "Mỗi buổi sáng tôi đều ra ngoài chạy bộ.", keywords: ["buổi sáng", "chạy bộ"] },
        { zh: "现在好多了。", vi: "Bây giờ đã khỏe hơn nhiều rồi.", keywords: ["bây giờ", "nhiều"] },
        { zh: "医生说下个星期能出院。", vi: "Bác sĩ nói tuần sau có thể xuất viện.", keywords: ["bác sĩ", "tuần sau", "xuất viện"] },
        { zh: "山姆每年都去中国旅游。", vi: "Năm nào Sam cũng đi du lịch Trung Quốc.", keywords: ["năm", "du lịch", "trung quốc"] },
        { zh: "他每天回来都很累。", vi: "Ngày nào về nhà anh ấy cũng rất mệt.", keywords: ["ngày", "mệt"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Bạn bao nhiêu tuổi?", answers: ["你多大？", "你多大了？"] },
        { vi: "Anh ấy cao bao nhiêu?", answers: ["他多高？"] },
        { vi: "Có phải ngày mai bố được nghỉ không?", answers: ["是不是明天爸爸休息？", "明天爸爸是不是休息？", "爸爸明天是不是休息？"] },
        { vi: "Thứ bảy nào bạn cũng làm việc à?", answers: ["你每个星期六都工作吗？"] },
        { vi: "Hằng ngày bạn dậy lúc mấy giờ?", answers: ["你每天几点起床？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "他很少生病，因为他喜欢运动。", a: true },
        { q: "他每天七点起床。", a: false },
        { q: "她吃药了，现在好多了。", a: true },
        { q: "她明天能出院。", a: false },
        { q: "大卫今年二十多岁。", a: true },
        { q: "大卫一米七几。", a: false },
        { q: "张老师这几天很忙。", a: true },
        { q: "张老师星期六休息。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我每天六点起床。",
        "现在身体怎么样？",
        "大卫今年多大？",
        "他是我同学。",
        "他这几天很忙。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你的一天：你每天几点起床？早上、下午、晚上做什么？ (Kể về một ngày của bạn: mấy giờ dậy? Sáng, chiều, tối làm gì?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 2 (是不是, 每, 多 + tính từ).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["每", "是不是", "多大", "多高", "多"],
      minGrammar: 2,
      sample: "我每天六点起床，早上出去跑步，所以我很少生病。上午我去学校学习汉语，下午我很忙，没有时间休息。晚上我在家看书。我每个星期六都和朋友一起去踢足球，我们都觉得运动对身体很好。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: câu hỏi với 是不是", points: 6,
      subtitle: "Điền cụm từ hỏi để xác nhận điều mình đoán.",
      grammarWord: "是不是",
      items: [
        { q: "你很少生病，___喜欢运动？", answers: ["是不是"] },
        { q: "___明天爸爸休息？", answers: ["是不是"] },
        { q: "我们星期一去北京，___？", answers: ["是不是"] },
        { q: "你今天没吃早饭，___？", answers: ["是不是"] },
        { q: "他___你的同学？", answers: ["是不是"] },
        { q: "你___生病了？", answers: ["是不是"] },
        { q: "你每天都很累，___工作太忙了？", answers: ["是不是"] },
        { q: "这本书___你的？", answers: ["是不是"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: đại từ 每", points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "每 / 都",
      options: ["每", "都"],
      items: [
        { q: "我___天六点起床。", answers: ["每"] },
        { q: "山姆每年___去中国旅游。", answers: ["都"] },
        { q: "你___个星期六都工作吗？", answers: ["每"] },
        { q: "我每天早上___要出去跑步。", answers: ["都"] },
        { q: "他___天回来都很累。", answers: ["每"] },
        { q: "我们每个月___去看电影。", answers: ["都"] },
        { q: "___个人都喜欢她。", answers: ["每"] },
        { q: "他每个星期天___在家休息。", answers: ["都"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 多 + tính từ", points: 5,
      subtitle: "Chọn tính từ thích hợp để hỏi.",
      grammarWord: "多大 / 多高",
      options: ["大", "高"],
      items: [
        { q: "A：你多___？B：我16岁。", answers: ["大"] },
        { q: "A：王医生的儿子多___？B：他儿子一米七。", answers: ["高"] },
        { q: "A：他多___？B：一米八几。", answers: ["高"] },
        { q: "A：大卫今年多___？B：二十多岁。", answers: ["大"] },
        { q: "A：你的猫多___了？B：六个多月。", answers: ["大"] },
        { q: "A：你妹妹多___？B：一米六。", answers: ["高"] },
        { q: "A：你爸爸今年多___岁数？B：五十多岁。", answers: ["大"] },
        { q: "A：那个学生多___？B：一米九。", answers: ["高"] },
      ],
    },
  ],
};
