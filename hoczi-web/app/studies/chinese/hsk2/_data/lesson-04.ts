import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第4课 这个工作是他帮我介绍的。 (Ông ấy đã giới thiệu giúp tôi công việc này.)
// Nguồn: Giáo trình chuẩn HSK2, trang 39–46 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson04: Lesson = {
  level: "hsk2",
  no: 4,
  slug: "bai-4",
  zh: "这个工作是他帮我介绍的。",
  pinyin: "Zhège gōngzuò shì tā bāng wǒ jièshào de.",
  vi: "Ông ấy đã giới thiệu giúp tôi công việc này.",
  en: "He helped me get this job.",
  topic: "生活与工作 · Sinh nhật, điện thoại, công việc",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 13 từ mới: 生日、快乐、给、接、晚上、问、非常、开始、已经、长、两、帮、介绍.",
    "Hiểu và dùng được 3 điểm ngữ pháp: cấu trúc 是……的 nhấn mạnh chủ thể hành động, cấu trúc chỉ thời gian ……的时候, phó từ 已经.",
    "Đọc hiểu 4 đoạn hội thoại về quà sinh nhật, cuộc điện thoại buổi sáng, đá bóng, công việc ở công ty.",
    "Hỏi – đáp ai đã làm việc gì (是谁……的？), từ khi nào, đã bao lâu.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：生日、晚上、两个儿子、电话、看书、工作",
      vi: "Chọn hình tương ứng với các từ: 生日 (sinh nhật), 晚上 (buổi tối), 两个儿子 (hai đứa con trai), 电话 (điện thoại), 看书 (đọc sách), 工作 (làm việc).",
    },
    {
      zh: "看下面的图片，给这些名词搭配合适的动词：……妈妈、……医生、……朋友、……电话",
      vi: "Xem hình và viết động từ thích hợp trước các danh từ: (giúp) mẹ, (hỏi) bác sĩ, (giới thiệu) bạn, (gọi/nghe) điện thoại.",
    },
  ],

  vocab: [
    { id: 1, han: "生日", py: "shēngrì", pos: "dt.", meaning: "sinh nhật", example: "生日快乐！", exampleVi: "Chúc mừng sinh nhật!" },
    { id: 2, han: "快乐", py: "kuàilè", pos: "tt.", meaning: "vui vẻ", example: "生日快乐！这是送给你的！", exampleVi: "Chúc sinh nhật vui vẻ! Đây là món quà mình tặng bạn." },
    { id: 3, han: "给", py: "gěi", pos: "giới.", meaning: "cho (dùng sau động từ)", example: "这是送给你的！", exampleVi: "Đây là quà tặng cho bạn!" },
    { id: 4, han: "接", py: "jiē", pos: "đgt.", meaning: "nhận, nghe/trả lời (điện thoại)", example: "不知道，是儿子接的。", exampleVi: "Em không biết nữa, con trai nghe điện thoại." },
    { id: 5, han: "晚上", py: "wǎnshang", pos: "dt.", meaning: "buổi tối", example: "好，晚上我问一下儿子。", exampleVi: "Được rồi, để tối anh sẽ hỏi con." },
    { id: 6, han: "问", py: "wèn", pos: "đgt.", meaning: "hỏi", example: "晚上我问一下儿子。", exampleVi: "Tối anh sẽ hỏi con." },
    { id: 7, han: "非常", py: "fēicháng", pos: "p.", meaning: "rất, vô cùng", example: "你喜欢踢足球吗？——非常喜欢。", exampleVi: "Anh có thích đá bóng không? — Rất thích." },
    { id: 8, han: "开始", py: "kāishǐ", pos: "đgt.", meaning: "bắt đầu", example: "你是什么时候开始踢足球的？", exampleVi: "Anh bắt đầu đá bóng từ khi nào vậy?" },
    { id: 9, han: "已经", py: "yǐjīng", pos: "p.", meaning: "đã", example: "已经踢了十年了。", exampleVi: "Đã đá được 10 năm rồi." },
    { id: 10, han: "长", py: "cháng", pos: "tt.", meaning: "dài, lâu", example: "你在这儿工作多长时间了？", exampleVi: "Anh làm việc ở đây được bao lâu rồi?" },
    { id: 11, han: "两", py: "liǎng", pos: "số.", meaning: "hai", example: "已经两年多了。", exampleVi: "Được hơn hai năm rồi." },
    { id: 12, han: "帮", py: "bāng", pos: "đgt.", meaning: "giúp, giúp đỡ", example: "这个工作是他帮我介绍的。", exampleVi: "Ông ấy đã giới thiệu giúp tôi công việc này." },
    { id: 13, han: "介绍", py: "jièshào", pos: "đgt.", meaning: "giới thiệu", example: "这个工作是王方帮我介绍的。", exampleVi: "Công việc này là Vương Phương giới thiệu giúp tôi." },
    { id: 14, han: "谢", py: "Xiè", pos: "dt.", meaning: "Tạ (họ)", example: "你认识谢先生吗？", exampleVi: "Anh có quen ông Tạ không?" },
  ],

  text: {
    title: "课文 这个工作是他帮我介绍的。",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "A：生日快乐！这是送给你的！\nB：是什么？是一本书吗？\nA：对，这本书是我写的。\nB：太谢谢你了！",
        vi: "A: Chúc sinh nhật vui vẻ! Đây là món quà mình tặng bạn.\nB: Quà gì vậy? Có phải một quyển sách không?\nA: Đúng vậy, quyển sách này là do mình viết đấy.\nB: Cảm ơn bạn nhiều lắm!",
        questions: ["这本书是谁写的？"],
      },
      {
        heading: "课文二 · 在家里 (Ở nhà)",
        zh: "A：早上有你一个电话。\nB：电话是谁打的？\nA：不知道，是儿子接的。\nB：好，晚上我问一下儿子。",
        vi: "A: Buổi sáng có người gọi điện cho anh đó.\nB: Ai gọi vậy?\nA: Em không biết nữa, con trai nghe điện thoại.\nB: Được rồi, để tối anh sẽ hỏi con.",
        questions: ["早上的电话是谁接的？"],
      },
      {
        heading: "课文三 · 在运动场 (Ở sân vận động)",
        zh: "A：你喜欢踢足球吗？\nB：非常喜欢。\nA：你是什么时候开始踢足球的？\nB：我十一岁的时候开始踢足球，已经踢了十年了。",
        vi: "A: Anh có thích đá bóng không?\nB: Rất thích.\nA: Anh bắt đầu đá bóng từ khi nào vậy?\nB: Từ lúc 11 tuổi. Tôi đá bóng được 10 năm rồi.",
        questions: ["他是什么时候开始踢足球的？"],
      },
      {
        heading: "课文四 · 在公司 (Trong công ty)",
        zh: "A：你在这儿工作多长时间了？\nB：已经两年多了，我是2011年来的。\nA：你认识谢先生吗？\nB：认识，我们是大学同学，这个工作是他帮我介绍的。",
        vi: "A: Anh làm việc ở đây được bao lâu rồi?\nB: Được hơn hai năm rồi. Tôi đến đây vào năm 2011.\nA: Anh có quen ông Tạ không?\nB: Có quen, chúng tôi là bạn cùng lớp ở đại học. Ông ấy đã giới thiệu giúp tôi công việc này.",
        questions: ["他在那儿工作多长时间了？", "工作是谁帮他介绍的？"],
      },
    ],
    notes: [
      "谢 (Xiè): họ Tạ; 谢先生: ông Tạ.",
      "两 và 二: trước lượng từ dùng 两 (两个人、两年), không nói *二个人.",
      "多长时间: bao lâu (hỏi về khoảng thời gian).",
    ],
  },

  grammar: [
    {
      word: "是……的",
      title: "Cấu trúc 是……的: nhấn mạnh chủ thể thực hiện hành động",
      usages: [
        {
          label: "Khẳng định",
          explain: "Khi biết rõ sự việc đã xảy ra, dùng 是……的 để nhấn mạnh ai là người thực hiện hành động: tân ngữ + 是 + ai + động từ + 的.",
          examples: ["这本书是我买的。", "晚饭是妈妈做的。", "电话是谁打的？", "这个工作是他帮我介绍的。"],
        },
        {
          label: "Phủ định",
          explain: "Thêm 不 vào trước 是.",
          examples: ["这个汉字不是大卫写的。", "苹果不是王方买的。", "电话不是我接的。"],
        },
      ],
    },
    {
      word: "……的时候",
      title: "Cấu trúc diễn tả thời gian: ……的时候 (khi…, lúc…)",
      usages: [
        {
          label: "Số lượng + 的时候",
          explain: "Cụm từ chỉ số lượng (giờ, tuổi…) + 的时候 để nói về thời gian.",
          examples: ["今天早上八点的时候我没在家。", "我十八岁的时候一个人来到北京。", "我十一岁的时候开始踢足球。"],
        },
        {
          label: "Động từ + 的时候",
          explain: "Cấu trúc “động từ + 的时候” cũng dùng để nói về thời gian.",
          examples: ["我睡觉的时候，我妈妈在做饭。", "麦克到学校的时候下雨了。", "王老师工作的时候，她丈夫开车去医院了。"],
        },
      ],
    },
    {
      word: "已经",
      title: "Phó từ chỉ thời gian 已经 (đã)",
      usages: [
        {
          label: "Cách dùng",
          explain: "已经 diễn tả hành động đã hoàn thành hay đạt đến mức độ nào đó; cuối câu thường có 了.",
          examples: ["王老师已经回家了。", "我的身体已经好了。", "（足球我）已经踢了十年了。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "___快乐！这是送给你的！", options: ["生日", "晚上", "工作", "电话"], answer: "生日" },
    { sentence: "生日___！", options: ["快乐", "非常", "已经", "长"], answer: "快乐" },
    { sentence: "这是送___你的！", options: ["给", "帮", "问", "接"], answer: "给" },
    { sentence: "电话是谁打的？——不知道，是儿子___的。", options: ["接", "问", "帮", "开始"], answer: "接" },
    { sentence: "好，___我问一下儿子。", options: ["晚上", "生日", "已经", "非常"], answer: "晚上" },
    { sentence: "你喜欢踢足球吗？——___喜欢。", options: ["非常", "已经", "开始", "快乐"], answer: "非常" },
    { sentence: "你是什么时候___踢足球的？", options: ["开始", "介绍", "已经", "帮"], answer: "开始" },
    { sentence: "我___踢了十年了。", options: ["已经", "非常", "开始", "长"], answer: "已经" },
    { sentence: "你在这儿工作多___时间了？", options: ["长", "两", "大", "高"], answer: "长" },
    { sentence: "这个工作是他帮我___的。", options: ["介绍", "接", "问", "给"], answer: "介绍" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [5, 2, 8] },
        { vocabId: 2, distractors: [7, 1, 9] },
        { vocabId: 5, distractors: [1, 9, 13] },
        { vocabId: 7, distractors: [2, 8, 9] },
        { vocabId: 8, distractors: [9, 13, 7] },
        { vocabId: 9, distractors: [8, 7, 5] },
        { vocabId: 12, distractors: [6, 4, 3] },
        { vocabId: 13, distractors: [8, 12, 1] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 5, 7, 8, 9, 12, 13],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["这个工作", "是", "他", "帮我", "介绍", "的", "。"], answer: "这个工作是他帮我介绍的。", vi: "Công việc này là anh ấy giới thiệu giúp tôi." },
        { tokens: ["这本书", "是", "我", "写", "的", "。"], answer: "这本书是我写的。", vi: "Quyển sách này do tôi viết." },
        { tokens: ["你", "是", "什么时候", "开始", "踢足球", "的", "？"], answer: "你是什么时候开始踢足球的？", vi: "Bạn bắt đầu đá bóng từ khi nào?" },
        { tokens: ["我", "十一岁的时候", "开始", "踢足球", "。"], answer: "我十一岁的时候开始踢足球。", vi: "Tôi bắt đầu đá bóng từ năm 11 tuổi." },
        { tokens: ["你", "在这儿", "工作", "多长时间", "了", "？"], answer: "你在这儿工作多长时间了？", vi: "Bạn làm việc ở đây bao lâu rồi?" },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Quà sinh nhật", text: "A：{{c1}}{{c2}}！这是送{{c3}}你的！\nB：是什么？是一本书吗？\nA：对，这本书{{c4}}我写{{c5}}。\nB：太谢谢你了！" },
        { title: "Bài khóa 2 · Cuộc điện thoại", text: "A：早上有你一个{{c6}}。\nB：电话是{{c7}}打的？\nA：不知道，是儿子{{c8}}的。\nB：好，{{c9}}我{{c10}}一下儿子。" },
      ],
      answers: { c1: "生日", c2: "快乐", c3: "给", c4: "是", c5: "的", c6: "电话", c7: "谁", c8: "接", c9: "晚上", c10: "问" },
      bank: ["生日", "快乐", "给", "是", "的", "电话", "谁", "接", "晚上", "问", "帮", "已经", "了"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Đá bóng", text: "A：你喜欢踢足球吗？\nB：{{e1}}喜欢。\nA：你是什么时候{{e2}}踢足球的？\nB：我十一岁的{{e3}}开始踢足球，{{e4}}踢了十年了。" },
        { title: "Bài khóa 4 · Trong công ty", text: "A：你在这儿工作多{{e5}}时间了？\nB：已经{{e6}}年多了，我{{e7}}2011年来的。\nA：你{{e8}}谢先生吗？\nB：认识，我们是大学同学，这个工作是他{{e9}}我{{e10}}的。" },
      ],
      answers: { e1: "非常", e2: "开始", e3: "时候", e4: "已经", e5: "长", e6: "两", e7: "是", e8: "认识", e9: "帮", e10: "介绍" },
      bank: ["非常", "开始", "时候", "已经", "长", "两", "是", "认识", "帮", "介绍", "二", "给", "快乐"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "晚饭是妈妈做的。", vi: "Bữa tối là mẹ nấu.", keywords: ["bữa tối", "mẹ", "nấu"] },
        { zh: "我十八岁的时候一个人来到北京。", vi: "Năm 18 tuổi tôi một mình đến Bắc Kinh.", keywords: ["18 tuổi", "một mình", "bắc kinh"] },
        { zh: "王老师已经回家了。", vi: "Thầy Vương đã về nhà rồi.", keywords: ["thầy vương", "về nhà"] },
        { zh: "我睡觉的时候，我妈妈在做饭。", vi: "Lúc tôi ngủ, mẹ tôi đang nấu cơm.", keywords: ["ngủ", "mẹ", "nấu cơm"] },
        { zh: "我们是大学同学。", vi: "Chúng tôi là bạn cùng lớp đại học.", keywords: ["bạn", "đại học"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Quyển sách này là tôi mua.", answers: ["这本书是我买的。"] },
        { vi: "Điện thoại không phải tôi nghe.", answers: ["电话不是我接的。"] },
        { vi: "Sức khỏe của tôi đã tốt rồi.", answers: ["我的身体已经好了。"] },
        { vi: "Chúc mừng sinh nhật!", answers: ["生日快乐！"] },
        { vi: "Bạn làm việc ở đây bao lâu rồi?", answers: ["你在这儿工作多长时间了？", "你在这里工作多长时间了？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "那本书是A写的。", a: true },
        { q: "A送给B一个杯子。", a: false },
        { q: "早上的电话是儿子接的。", a: true },
        { q: "妈妈知道电话是谁打的。", a: false },
        { q: "B十一岁的时候开始踢足球。", a: true },
        { q: "B已经踢了二十年足球了。", a: false },
        { q: "B是2011年来公司的。", a: true },
        { q: "B和谢先生是中学同学。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "生日快乐！",
        "这本书是我写的。",
        "电话是谁打的？",
        "我已经踢了十年了。",
        "这个工作是他帮我介绍的。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你的一个爱好：你是什么时候开始的？已经多长时间了？ (Kể về một sở thích: bắt đầu từ khi nào? Đã bao lâu rồi?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 4 (是……的, ……的时候, 已经).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["是", "的时候", "已经"],
      minGrammar: 2,
      sample: "我非常喜欢踢足球。我是八岁的时候开始踢足球的，已经踢了十二年了。我的第一个足球是爸爸送给我的。现在我每个星期六都和大学同学一起踢足球，我们都觉得非常快乐。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 是……的", points: 6,
      subtitle: "Chọn 是 hoặc 的 cho mỗi chỗ trống.",
      grammarWord: "是……的",
      options: ["是", "的"],
      items: [
        { q: "这本书___我买的。", answers: ["是"] },
        { q: "晚饭是妈妈做___。", answers: ["的"] },
        { q: "电话___谁打的？", answers: ["是"] },
        { q: "这个汉字不___大卫写的。", answers: ["是"] },
        { q: "苹果不是王方买___。", answers: ["的"] },
        { q: "你是什么时候开始踢足球___？", answers: ["的"] },
        { q: "我___2011年来的。", answers: ["是"] },
        { q: "这个工作是他帮我介绍___。", answers: ["的"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: ……的时候", points: 6,
      subtitle: "Điền cụm từ chỉ thời gian vào chỗ trống.",
      grammarWord: "的时候",
      items: [
        { q: "今天早上八点___我没在家。", answers: ["的时候"] },
        { q: "我十八岁___一个人来到北京。", answers: ["的时候"] },
        { q: "我十一岁___开始踢足球。", answers: ["的时候"] },
        { q: "我睡觉___，我妈妈在做饭。", answers: ["的时候"] },
        { q: "麦克到学校___下雨了。", answers: ["的时候"] },
        { q: "王老师工作___，她丈夫开车去医院了。", answers: ["的时候"] },
        { q: "我是二十岁___开始写书的。", answers: ["的时候"] },
        { q: "你吃饭___不要看电视。", answers: ["的时候"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 已经 / 非常", points: 5,
      subtitle: "Chọn 已经 hoặc 非常 cho mỗi chỗ trống.",
      grammarWord: "已经 / 非常",
      options: ["已经", "非常"],
      items: [
        { q: "王老师___回家了。", answers: ["已经"] },
        { q: "我的身体___好了。", answers: ["已经"] },
        { q: "你喜欢踢足球吗？——___喜欢。", answers: ["非常"] },
        { q: "我在这儿工作___两年多了。", answers: ["已经"] },
        { q: "这本书___有意思。", answers: ["非常"] },
        { q: "他___踢了十年足球了。", answers: ["已经"] },
        { q: "我是六岁开始打篮球的，我___喜欢打篮球。", answers: ["非常"] },
        { q: "今天天气___好。", answers: ["非常"] },
      ],
    },
  ],
};
