import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第9课 题太多，我没做完。 (Câu hỏi quá nhiều nên mình không làm hết.)
// Nguồn: Giáo trình chuẩn HSK2, trang 79–86 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson09: Lesson = {
  level: "hsk2",
  no: 9,
  slug: "bai-9",
  zh: "题太多，我没做完。",
  pinyin: "Tí tài duō, wǒ méi zuòwán.",
  vi: "Câu hỏi quá nhiều nên mình không làm hết.",
  en: "There were too many questions; I didn't finish.",
  topic: "学习与工作 · Học tập, thi cử, đi làm",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 11 từ mới: 错、从、跳舞、第一、希望、问题、欢迎、上班、懂、完、题.",
    "Hiểu và dùng được 3 điểm ngữ pháp: bổ ngữ chỉ kết quả (看见、听懂、做完、找到), giới từ 从, cách diễn tả thứ tự với 第.",
    "Đọc hiểu 4 đoạn hội thoại về gọi nhầm số, học múa, David tìm được việc, bài kiểm tra.",
    "Nói kết quả của hành động (đã/chưa làm xong, nghe hiểu…); nói khởi điểm thời gian (从……开始).",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：上班、唱歌、对错、问题、第一、跳舞",
      vi: "Chọn hình tương ứng với các từ: 上班 (đi làm), 唱歌 (hát), 对错 (đúng sai), 问题 (vấn đề, câu hỏi), 第一 (thứ nhất), 跳舞 (múa).",
    },
    {
      zh: "给下面的动词加上合适的宾语：学汉语、看……、写……、吃……、喝……、打……、做……",
      vi: "Thêm tân ngữ phù hợp sau động từ: học tiếng Hán, xem…, viết…, ăn…, uống…, đánh/chơi…, làm…",
    },
  ],

  vocab: [
    { id: 1, han: "错", py: "cuò", pos: "tt.", meaning: "sai, nhầm", example: "你打错了，我们这儿没有叫张欢的。", exampleVi: "Anh gọi nhầm số rồi, ở chỗ chúng tôi không có ai tên Trương Hoan cả." },
    { id: 2, han: "从", py: "cóng", pos: "giới.", meaning: "từ", example: "您从几岁开始学习跳舞？", exampleVi: "Cô bắt đầu học múa từ lúc mấy tuổi vậy?" },
    { id: 3, han: "跳舞", py: "tiào wǔ", pos: "đgt.", meaning: "múa, khiêu vũ", example: "我希望她能跟您学跳舞。", exampleVi: "Tôi mong là nó có thể học múa với cô." },
    { id: 4, han: "第一", py: "dì yī", pos: "số.", meaning: "thứ nhất, đầu tiên", example: "我第一次跳舞是在七岁的时候。", exampleVi: "Lần đầu tiên tôi múa là vào năm lên bảy tuổi." },
    { id: 5, han: "希望", py: "xīwàng", pos: "đgt.", meaning: "mong, hy vọng", example: "这是他的第一个工作，希望他能喜欢。", exampleVi: "Đây là công việc đầu tiên của nó, hy vọng nó sẽ thích." },
    { id: 6, han: "问题", py: "wèntí", pos: "dt.", meaning: "vấn đề, câu hỏi", example: "没问题，非常欢迎。", exampleVi: "Không có vấn đề gì, tôi rất hoan nghênh." },
    { id: 7, han: "欢迎", py: "huānyíng", pos: "đgt.", meaning: "hoan nghênh", example: "没问题，非常欢迎。", exampleVi: "Không có vấn đề gì, tôi rất hoan nghênh." },
    { id: 8, han: "上班", py: "shàng bān", pos: "đgt.", meaning: "đi làm", example: "他从什么时候开始上班？", exampleVi: "Khi nào thì nó bắt đầu đi làm?" },
    { id: 9, han: "懂", py: "dǒng", pos: "đgt.", meaning: "hiểu, biết", example: "你都听懂了吗？", exampleVi: "Bạn có hiểu hết những gì đã nghe không?" },
    { id: 10, han: "完", py: "wán", pos: "đgt.", meaning: "xong, hết", example: "题太多，我没做完。", exampleVi: "Câu hỏi quá nhiều nên mình không làm hết." },
    { id: 11, han: "题", py: "tí", pos: "dt.", meaning: "câu hỏi, đề bài", example: "题太多，我没做完。", exampleVi: "Câu hỏi quá nhiều nên mình không làm hết." },
    { id: 12, han: "张欢", py: "Zhāng Huān", pos: "dt.", meaning: "Trương Hoan (tên người)", example: "请问张欢在吗？", exampleVi: "Xin hỏi Trương Hoan có ở đó không?" },
  ],

  text: {
    title: "课文 题太多，我没做完。",
    paragraphs: [
      {
        heading: "课文一 · 打电话 (Gọi điện thoại)",
        zh: "A：你好！请问张欢在吗？\nB：你打错了，我们这儿没有叫张欢的。\nA：对不起。",
        vi: "A: Chào chị! Xin hỏi Trương Hoan có ở đó không?\nB: Anh gọi nhầm số rồi, ở chỗ chúng tôi không có ai tên Trương Hoan cả.\nA: Xin lỗi chị.",
        questions: ["这儿有叫张欢的人吗？"],
      },
      {
        heading: "课文二 · 在学校 (Ở trường)",
        zh: "A：您从几岁开始学习跳舞？\nB：我第一次跳舞是在七岁的时候。\nA：我女儿今年也七岁了。我希望她能跟您学跳舞，可以吗？\nB：没问题，非常欢迎。",
        vi: "A: Cô bắt đầu học múa từ lúc mấy tuổi vậy?\nB: Lần đầu tiên tôi múa là vào năm lên bảy tuổi.\nA: Con gái tôi năm nay cũng được bảy tuổi rồi. Tôi mong là nó có thể học múa với cô, được không cô?\nB: Không có vấn đề gì, tôi rất hoan nghênh.",
        questions: ["老师从几岁开始学跳舞？", "老师想教她的女儿跳舞吗？"],
      },
      {
        heading: "课文三 · 在家里 (Ở nhà)",
        zh: "A：你知道吗？大卫找到工作了。\nB：太好了！他从什么时候开始上班？\nA：从下个星期一开始。\nB：这是他的第一个工作，希望他能喜欢。",
        vi: "A: Chị biết không? David đã tìm được việc rồi.\nB: Tốt quá! Vậy khi nào thì nó bắt đầu đi làm?\nA: Thứ hai tuần sau.\nB: Đây là công việc đầu tiên của nó, hy vọng nó sẽ thích.",
        questions: ["大卫什么时候去工作？"],
      },
      {
        heading: "课文四 · 在教室 (Trong lớp học)",
        zh: "A：昨天的考试怎么样？你都听懂了吗？\nB：听懂了。\nA：你都做完了没有？\nB：题太多，我没做完。",
        vi: "A: Bài kiểm tra hôm qua thế nào rồi? Bạn có hiểu hết những gì đã nghe không?\nB: Mình hiểu hết chứ.\nA: Vậy bạn có làm hết không?\nB: Câu hỏi quá nhiều nên mình không làm hết.",
        questions: ["这次考试她都听懂了吗？", "她考试为什么没做完？"],
      },
    ],
    notes: [
      "张欢 (Zhāng Huān): Trương Hoan.",
      "打错了: gọi nhầm số (错 làm bổ ngữ kết quả).",
      "跟……学: học với/theo ai (跟您学跳舞).",
    ],
  },

  grammar: [
    {
      word: "结果补语",
      title: "Bổ ngữ chỉ kết quả",
      usages: [
        {
          label: "Khẳng định",
          explain: "Một số động từ hoặc tính từ đứng sau động từ để cho biết kết quả của hành động: 看见、听懂、做好、找到…",
          examples: ["我看见你的女朋友了。", "我听懂今天的汉语课了。", "我做好饭了。", "大卫找到工作了。"],
        },
        {
          label: "Phủ định: 没(有) + động từ + bổ ngữ",
          explain: "Thêm 没(有) trước động từ, cuối câu không dùng 了.",
          examples: ["我没有看见你的女朋友。", "我没听懂他说的话。", "我没做完（考试题）。"],
        },
        {
          label: "Nghi vấn: …… + (了)没有？",
          explain: "Thường thêm (了)没有 vào cuối câu để chuyển sang câu hỏi.",
          examples: ["你看见我的女朋友了没有？", "你听懂他说的话没有？", "你（都）做完（考试题）了没有？"],
        },
      ],
    },
    {
      word: "从……(到……)",
      title: "Giới từ 从 (từ)",
      usages: [
        {
          label: "Cách dùng",
          explain: "从 cho biết khởi điểm của một khoảng thời gian, quãng đường, một quá trình hay trình tự, thường kết hợp với 到.",
          examples: ["从北京到上海要坐几个小时的飞机？", "从老人到孩子都喜欢吃苹果。", "从下个星期一开始（上班）。"],
        },
      ],
    },
    {
      word: "第 + 数词 + 量词",
      title: "Cách diễn tả thứ tự: 第……",
      usages: [
        {
          label: "Cách dùng",
          explain: "第 đứng trước cụm từ chỉ số lượng để nói về thứ tự.",
          examples: ["第一本书", "第二个工作", "我第一次跳舞是在七岁的时候。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "你打___了，我们这儿没有叫张欢的。", options: ["错", "完", "懂", "到"], answer: "错" },
    { sentence: "您___几岁开始学习跳舞？", options: ["从", "离", "给", "对"], answer: "从" },
    { sentence: "我希望她能跟您学___。", options: ["跳舞", "上班", "问题", "欢迎"], answer: "跳舞" },
    { sentence: "我___次跳舞是在七岁的时候。", options: ["第一", "一下", "一起", "一点儿"], answer: "第一" },
    { sentence: "这是他的第一个工作，___他能喜欢。", options: ["希望", "欢迎", "知道", "觉得"], answer: "希望" },
    { sentence: "没___，非常欢迎。", options: ["问题", "事情", "时间", "意思"], answer: "问题" },
    { sentence: "没问题，非常___。", options: ["欢迎", "希望", "问题", "上班"], answer: "欢迎" },
    { sentence: "他从什么时候开始___？", options: ["上班", "跳舞", "欢迎", "希望"], answer: "上班" },
    { sentence: "昨天的考试你都听___了吗？", options: ["懂", "错", "完", "见"], answer: "懂" },
    { sentence: "___太多，我没做完。", options: ["题", "问题", "事情", "错"], answer: "题" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [10, 9, 11] },
        { vocabId: 3, distractors: [8, 7, 5] },
        { vocabId: 4, distractors: [2, 6, 11] },
        { vocabId: 5, distractors: [7, 6, 3] },
        { vocabId: 6, distractors: [11, 5, 7] },
        { vocabId: 7, distractors: [5, 8, 6] },
        { vocabId: 8, distractors: [3, 7, 4] },
        { vocabId: 9, distractors: [10, 1, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 5, 6, 7, 8, 9],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["题", "太多", "，", "我", "没", "做完", "。"], answer: "题太多，我没做完。", vi: "Câu hỏi nhiều quá, tôi làm không xong." },
        { tokens: ["您", "从", "几岁", "开始", "学习跳舞", "？"], answer: "您从几岁开始学习跳舞？", vi: "Cô bắt đầu học múa từ mấy tuổi?" },
        { tokens: ["大卫", "找到", "工作", "了", "。"], answer: "大卫找到工作了。", vi: "David tìm được việc rồi." },
        { tokens: ["这", "是", "他的", "第一个", "工作", "。"], answer: "这是他的第一个工作。", vi: "Đây là công việc đầu tiên của anh ấy." },
        { tokens: ["你", "都", "做完", "了", "没有", "？"], answer: "你都做完了没有？", vi: "Bạn làm xong hết chưa?" },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Gọi nhầm số", text: "A：你好！请问张欢在吗？\nB：你打{{c1}}了，我们这儿没有{{c2}}张欢的。\nA：{{c3}}。" },
        { title: "Bài khóa 2 · Học múa", text: "A：您{{c4}}几岁开始学习{{c5}}？\nB：我{{c6}}次跳舞是在七岁的{{c7}}。\nA：我女儿今年也七岁了。我{{c8}}她能跟您学跳舞，可以吗？\nB：没{{c9}}，非常{{c10}}。" },
      ],
      answers: { c1: "错", c2: "叫", c3: "对不起", c4: "从", c5: "跳舞", c6: "第一", c7: "时候", c8: "希望", c9: "问题", c10: "欢迎" },
      bank: ["错", "叫", "对不起", "从", "跳舞", "第一", "时候", "希望", "问题", "欢迎", "完", "上班", "离"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Tìm được việc", text: "A：你知道吗？大卫找{{e1}}工作了。\nB：太好了！他从什么时候开始{{e2}}？\nA：{{e3}}下个星期一开始。\nB：这是他的{{e4}}个工作，{{e5}}他能喜欢。" },
        { title: "Bài khóa 4 · Bài kiểm tra", text: "A：昨天的考试怎么样？你都听{{e6}}了吗？\nB：听懂了。\nA：你都做{{e7}}了{{e8}}？\nB：{{e9}}太多，我{{e10}}做完。" },
      ],
      answers: { e1: "到", e2: "上班", e3: "从", e4: "第一", e5: "希望", e6: "懂", e7: "完", e8: "没有", e9: "题", e10: "没" },
      bank: ["到", "上班", "从", "第一", "希望", "懂", "完", "没有", "题", "没", "不", "错", "吗"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我听懂今天的汉语课了。", vi: "Tôi nghe hiểu bài tiếng Hán hôm nay rồi.", keywords: ["nghe hiểu", "tiếng hán"] },
        { zh: "我没听懂他说的话。", vi: "Tôi không nghe hiểu lời anh ấy nói.", keywords: ["không", "hiểu", "nói"] },
        { zh: "从北京到上海要坐几个小时的飞机？", vi: "Từ Bắc Kinh đến Thượng Hải phải đi máy bay mấy tiếng?", keywords: ["bắc kinh", "thượng hải", "máy bay"] },
        { zh: "从老人到孩子都喜欢吃苹果。", vi: "Từ người già đến trẻ em đều thích ăn táo.", keywords: ["người già", "trẻ em", "táo"] },
        { zh: "希望他能喜欢。", vi: "Hy vọng anh ấy sẽ thích.", keywords: ["hy vọng", "thích"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi nấu xong cơm rồi.", answers: ["我做好饭了。"] },
        { vi: "Bạn có nhìn thấy bạn gái tôi không?", answers: ["你看见我的女朋友了没有？", "你看见我的女朋友了吗？", "你看见我女朋友了吗？"] },
        { vi: "Bạn gọi nhầm số rồi.", answers: ["你打错了。"] },
        { vi: "Thứ hai tuần sau bắt đầu đi làm.", answers: ["从下个星期一开始上班。", "下个星期一开始上班。"] },
        { vi: "Đây là quyển sách đầu tiên của tôi.", answers: ["这是我的第一本书。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "A打错电话了。", a: true },
        { q: "张欢在B那儿工作。", a: false },
        { q: "老师第一次跳舞是在七岁的时候。", a: true },
        { q: "老师不想教A的女儿跳舞。", a: false },
        { q: "大卫找到工作了。", a: true },
        { q: "大卫从明天开始上班。", a: false },
        { q: "B昨天的考试都听懂了。", a: true },
        { q: "B考试的题都做完了。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "题太多，我没做完。",
        "你打错了。",
        "大卫找到工作了。",
        "从下个星期一开始。",
        "你都听懂了吗？",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你的一次考试：考试怎么样？你都听懂了吗？做完了没有？ (Kể về một lần thi: thế nào? Bạn nghe hiểu hết không? Làm xong chưa?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 9 (bổ ngữ kết quả, 从, 第).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["懂", "完", "到", "见", "好", "从", "第"],
      minGrammar: 2,
      sample: "上个星期我参加了第一次汉语考试。考试从上午九点开始。听力我都听懂了，但是题太多了，我没做完。老师说我考得还可以。我希望下次考试能做完所有的题。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: bổ ngữ chỉ kết quả", points: 6,
      subtitle: "Chọn bổ ngữ kết quả thích hợp.",
      grammarWord: "结果补语",
      options: ["见", "懂", "完", "到", "好", "错"],
      items: [
        { q: "我看___你的女朋友了。", answers: ["见"] },
        { q: "我听___今天的汉语课了。", answers: ["懂"] },
        { q: "我做___饭了，快来吃吧。", answers: ["好"] },
        { q: "大卫找___工作了。", answers: ["到"] },
        { q: "题太多，我没做___。", answers: ["完"] },
        { q: "你打___了，我们这儿没有叫张欢的。", answers: ["错"] },
        { q: "我没听___他说的话。", answers: ["懂"] },
        { q: "这本书你看___了没有？", answers: ["完"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 从 / 到", points: 6,
      subtitle: "Chọn 从 hoặc 到 cho mỗi chỗ trống.",
      grammarWord: "从……到……",
      options: ["从", "到"],
      items: [
        { q: "___北京到上海要坐几个小时的飞机？", answers: ["从"] },
        { q: "从老人___孩子都喜欢吃苹果。", answers: ["到"] },
        { q: "他___下个星期一开始上班。", answers: ["从"] },
        { q: "您___几岁开始学习跳舞？", answers: ["从"] },
        { q: "我从早上八点___下午五点都在公司。", answers: ["到"] },
        { q: "___我家到学校要走二十分钟。", answers: ["从"] },
        { q: "从星期一___星期五我都要上班。", answers: ["到"] },
        { q: "他___什么时候开始上班？", answers: ["从"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: phủ định 没 / 不", points: 5,
      subtitle: "Câu có bổ ngữ kết quả phủ định bằng 没; chọn 没 hoặc 不.",
      grammarWord: "没 / 不",
      options: ["没", "不"],
      items: [
        { q: "题太多，我___做完。", answers: ["没"] },
        { q: "我___听懂他说的话。", answers: ["没"] },
        { q: "我___有看见你的女朋友。", answers: ["没"] },
        { q: "我___喜欢喝咖啡。", answers: ["不"] },
        { q: "昨天我___找到他。", answers: ["没"] },
        { q: "明天我___去上班。", answers: ["不"] },
        { q: "饭还___做好，你等一下。", answers: ["没"] },
        { q: "我们这儿___是医院。", answers: ["不"] },
      ],
    },
  ],
};
