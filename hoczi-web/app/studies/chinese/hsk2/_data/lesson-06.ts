import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第6课 你怎么不吃了？ (Sao anh không ăn nữa?)
// Nguồn: Giáo trình chuẩn HSK2, trang 55–62 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson06: Lesson = {
  level: "hsk2",
  no: 6,
  slug: "bai-6",
  zh: "你怎么不吃了？",
  pinyin: "Nǐ zěnme bù chī le?",
  vi: "Sao anh không ăn nữa?",
  en: "Why did you stop eating?",
  topic: "日常生活 · Ăn uống, thể thao, lý do",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 13 từ mới: 门、外、自行车、羊肉、好吃、面条、打篮球、因为、所以、游泳、经常、公斤、姐姐.",
    "Hiểu và dùng được 3 điểm ngữ pháp: đại từ nghi vấn 怎么 hỏi nguyên nhân, lượng từ lặp lại (个个、件件、天天), cấu trúc 因为……，所以…….",
    "Đọc hiểu 4 đoạn hội thoại về Tiểu Vương đến trường, món thịt cừu, đi bơi, Tiểu Trương đi Bắc Kinh.",
    "Hỏi nguyên nhân với vẻ ngạc nhiên (怎么……？) và giải thích lý do (因为……所以……).",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：喝牛奶、起床、跑步、看报纸、吃药、打篮球",
      vi: "Chọn hình tương ứng với các từ: uống sữa, thức dậy, chạy bộ, đọc báo, uống thuốc, chơi bóng rổ.",
    },
    {
      zh: "看下面的图片，用汉语说出它们的名字：自行车、足球、篮球、面条",
      vi: "Xem hình và nói tên các vật bằng tiếng Trung: xe đạp, bóng đá, bóng rổ, mì sợi.",
    },
  ],

  vocab: [
    { id: 1, han: "门", py: "mén", pos: "dt.", meaning: "cửa, cổng", example: "我在门外看见他的自行车了。", exampleVi: "Mình thấy xe đạp của cậu ấy ở ngoài cửa." },
    { id: 2, han: "外", py: "wài", pos: "dt.", meaning: "bên ngoài", example: "我在门外看见他的自行车了。", exampleVi: "Mình thấy xe đạp của cậu ấy ở ngoài cửa." },
    { id: 3, han: "自行车", py: "zìxíngchē", pos: "dt.", meaning: "xe đạp", example: "我在门外看见他的自行车了。", exampleVi: "Mình thấy xe đạp của cậu ấy ở ngoài cửa." },
    { id: 4, han: "羊肉", py: "yángròu", pos: "dt.", meaning: "thịt dê/cừu", example: "今天的羊肉很好吃。", exampleVi: "Món thịt cừu hôm nay rất ngon." },
    { id: 5, han: "好吃", py: "hǎochī", pos: "tt.", meaning: "ngon", example: "今天的羊肉很好吃，你怎么不吃了？", exampleVi: "Món thịt cừu hôm nay rất ngon, sao anh không ăn nữa?" },
    { id: 6, han: "面条", py: "miàntiáo", pos: "dt.", meaning: "mì sợi", example: "来一点儿面条吧。", exampleVi: "Cho tôi mì sợi đi." },
    { id: 7, han: "打篮球", py: "dǎ lánqiú", pos: "đgt.", meaning: "chơi bóng rổ", example: "昨天你们怎么都没去打篮球？", exampleVi: "Hôm qua sao các anh không đi chơi bóng rổ?" },
    { id: 8, han: "因为", py: "yīnwèi", pos: "liên.", meaning: "bởi vì", example: "因为昨天下雨，所以我们都没去。", exampleVi: "Chúng tôi không chơi vì hôm qua trời mưa." },
    { id: 9, han: "所以", py: "suǒyǐ", pos: "liên.", meaning: "cho nên", example: "因为他每天跑步，所以身体很好。", exampleVi: "Vì ngày nào anh ấy cũng chạy bộ nên sức khỏe rất tốt." },
    { id: 10, han: "游泳", py: "yóu yǒng", pos: "đgt.", meaning: "bơi", example: "我去游泳了。", exampleVi: "Nhưng tôi đi bơi." },
    { id: 11, han: "经常", py: "jīngcháng", pos: "p.", meaning: "thường xuyên", example: "你经常游泳吗？", exampleVi: "Anh có đi bơi thường xuyên không?" },
    { id: 12, han: "公斤", py: "gōngjīn", pos: "lượng.", meaning: "ki-lô-gam", example: "我现在七十公斤了。", exampleVi: "Hiện giờ tôi đã 70 kg rồi." },
    { id: 13, han: "姐姐", py: "jiějie", pos: "dt.", meaning: "chị gái", example: "听说是去看他姐姐。", exampleVi: "Nghe nói là đi thăm chị của anh ấy." },
  ],

  text: {
    title: "课文 你怎么不吃了？",
    paragraphs: [
      {
        heading: "课文一 · 在学校 (Ở trường)",
        zh: "A：你知道小王今天什么时候来学校吗？\nB：他已经来了。\nA：你怎么知道他来了？\nB：我在门外看见他的自行车了。",
        vi: "A: Bạn có biết hôm nay cậu Vương sẽ đến trường khi nào không?\nB: Cậu ấy đã đến rồi.\nA: Sao bạn biết cậu ấy đã đến?\nB: Mình thấy xe đạp của cậu ấy ở ngoài cửa.",
        questions: ["小王今天来学校了吗？", "他看见小王了没有？"],
      },
      {
        heading: "课文二 · 在饭馆 (Ở quán ăn)",
        zh: "A：今天的羊肉很好吃，你怎么不吃了？\nB：这个星期天天都吃羊肉，不想吃了。\nA：那你还想吃什么？\nB：来一点儿面条吧。",
        vi: "A: Món thịt cừu hôm nay rất ngon, sao anh không ăn nữa?\nB: Tuần này ngày nào tôi cũng ăn thịt cừu nên chẳng muốn ăn nữa.\nA: Vậy anh còn muốn ăn món gì?\nB: Cho tôi mì sợi đi.",
        questions: ["为什么他今天不想吃羊肉？"],
      },
      {
        heading: "课文三 · 在健身房 (Ở phòng tập thể dục)",
        zh: "A：昨天你们怎么都没去打篮球？\nB：因为昨天下雨，所以我们都没去。我去游泳了。\nA：你经常游泳吗？\nB：这个月我天天游泳，我现在七十公斤了。",
        vi: "A: Hôm qua sao các anh không đi chơi bóng rổ?\nB: Chúng tôi không chơi vì hôm qua trời mưa. Nhưng tôi đi bơi.\nA: Anh có đi bơi thường xuyên không?\nB: Tháng này ngày nào tôi cũng đi bơi, hiện giờ tôi đã 70 kg rồi.",
        questions: ["为什么昨天他们都没去打篮球？"],
      },
      {
        heading: "课文四 · 在办公室 (Trong văn phòng)",
        zh: "A：这两天怎么没看见小张？\nB：他去北京了。\nA：去北京了？是去旅游吗？\nB：不是，听说是去看他姐姐。",
        vi: "A: Mấy ngày nay sao tôi không thấy anh Trương?\nB: Anh ấy đi Bắc Kinh rồi.\nA: Đi Bắc Kinh à? Có phải đi du lịch không?\nB: Không phải, nghe nói là đi thăm chị của anh ấy.",
        questions: ["小张为什么去北京？"],
      },
    ],
    notes: [
      "小王 (Xiǎo Wáng): cậu Vương; 小张 (Xiǎo Zhāng): anh Trương — 小 + họ là cách gọi thân mật người trẻ tuổi.",
      "来一点儿……: cho (tôi) một ít… (cách gọi món).",
      "听说: nghe nói.",
    ],
  },

  grammar: [
    {
      word: "怎么 + 动词/形容词",
      title: "Đại từ nghi vấn 怎么 (sao, tại sao)",
      usages: [
        {
          label: "Cách dùng",
          explain: "“怎么 + động từ/tính từ” dùng để hỏi nguyên nhân của sự việc, thường diễn tả thái độ ngạc nhiên.",
          examples: ["你怎么不高兴？", "今天怎么这么热？", "昨天你们怎么都没去打篮球？", "你怎么不吃了？"],
        },
      ],
    },
    {
      word: "量词重叠",
      title: "Sự lặp lại lượng từ",
      usages: [
        {
          label: "Cách dùng",
          explain: "Lượng từ lặp lại mang nghĩa “mỗi/mọi”, nhấn mạnh mọi thành viên trong nhóm đều có điểm chung; sau đó thường dùng 都.",
          examples: ["同学们个个都很高兴。", "这个商店的衣服件件都很漂亮。", "这个星期（我）天天都吃羊肉。"],
        },
      ],
    },
    {
      word: "因为……，所以……",
      title: "Cấu trúc 因为……，所以…… (vì… nên…)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Nối hai mệnh đề quan hệ nhân quả: mệnh đề đầu chỉ nguyên nhân, mệnh đề sau chỉ kết quả. Có thể dùng cả hai liên từ hoặc chỉ một.",
          examples: ["因为她生病了，所以没去学校。", "因为他每天跑步，所以身体很好。", "因为昨天下雨，所以我们都没去（打篮球）。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "我在___外看见他的自行车了。", options: ["门", "面", "们", "问"], answer: "门" },
    { sentence: "我在门外看见他的___了。", options: ["自行车", "羊肉", "面条", "姐姐"], answer: "自行车" },
    { sentence: "今天的羊肉很___，你怎么不吃了？", options: ["好吃", "经常", "因为", "所以"], answer: "好吃" },
    { sentence: "这个星期天天都吃___，不想吃了。", options: ["羊肉", "自行车", "公斤", "门"], answer: "羊肉" },
    { sentence: "来一点儿___吧。", options: ["面条", "篮球", "自行车", "游泳"], answer: "面条" },
    { sentence: "___昨天下雨，所以我们都没去。", options: ["因为", "所以", "经常", "已经"], answer: "因为" },
    { sentence: "因为他每天跑步，___身体很好。", options: ["所以", "因为", "经常", "还"], answer: "所以" },
    { sentence: "你___游泳吗？", options: ["经常", "因为", "所以", "好吃"], answer: "经常" },
    { sentence: "这个月我天天游泳，我现在七十___了。", options: ["公斤", "米", "块", "岁"], answer: "公斤" },
    { sentence: "听说是去看他___。", options: ["姐姐", "羊肉", "面条", "门"], answer: "姐姐" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 3, distractors: [7, 6, 4] },
        { vocabId: 4, distractors: [6, 5, 13] },
        { vocabId: 5, distractors: [11, 4, 9] },
        { vocabId: 6, distractors: [4, 3, 10] },
        { vocabId: 8, distractors: [9, 11, 5] },
        { vocabId: 9, distractors: [8, 11, 12] },
        { vocabId: 10, distractors: [7, 11, 3] },
        { vocabId: 11, distractors: [8, 10, 5] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [3, 4, 5, 6, 8, 9, 10, 11],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["今天的羊肉", "很好吃", "，", "你", "怎么", "不吃了", "？"], answer: "今天的羊肉很好吃，你怎么不吃了？", vi: "Thịt cừu hôm nay rất ngon, sao bạn không ăn nữa?" },
        { tokens: ["我", "在门外", "看见", "他的自行车", "了", "。"], answer: "我在门外看见他的自行车了。", vi: "Tôi thấy xe đạp của cậu ấy ở ngoài cửa." },
        { tokens: ["因为", "昨天下雨", "，", "所以", "我们", "都没去", "。"], answer: "因为昨天下雨，所以我们都没去。", vi: "Vì hôm qua mưa nên chúng tôi đều không đi." },
        { tokens: ["这个星期", "天天", "都", "吃羊肉", "。"], answer: "这个星期天天都吃羊肉。", vi: "Tuần này ngày nào cũng ăn thịt cừu." },
        { tokens: ["这两天", "怎么", "没", "看见", "小张", "？"], answer: "这两天怎么没看见小张？", vi: "Mấy hôm nay sao không thấy Tiểu Trương?" },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ở trường", text: "A：你知道小王今天什么时候来学校吗？\nB：他{{c1}}来了。\nA：你{{c2}}知道他来了？\nB：我在{{c3}}{{c4}}看见他的{{c5}}了。" },
        { title: "Bài khóa 2 · Ở quán ăn", text: "A：今天的{{c6}}很{{c7}}，你怎么不吃了？\nB：这个星期{{c8}}都吃羊肉，不想吃了。\nA：那你{{c9}}想吃什么？\nB：来一点儿{{c10}}吧。" },
      ],
      answers: { c1: "已经", c2: "怎么", c3: "门", c4: "外", c5: "自行车", c6: "羊肉", c7: "好吃", c8: "天天", c9: "还", c10: "面条" },
      bank: ["已经", "怎么", "门", "外", "自行车", "羊肉", "好吃", "天天", "还", "面条", "因为", "经常", "什么"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Phòng tập", text: "A：昨天你们怎么都没去{{e1}}？\nB：{{e2}}昨天下雨，{{e3}}我们都没去。我去{{e4}}了。\nA：你{{e5}}游泳吗？\nB：这个月我天天游泳，我现在七十{{e6}}了。" },
        { title: "Bài khóa 4 · Văn phòng", text: "A：这两天{{e7}}没看见小张？\nB：他去北京了。\nA：去北京了？是去{{e8}}吗？\nB：不是，{{e9}}是去看他{{e10}}。" },
      ],
      answers: { e1: "打篮球", e2: "因为", e3: "所以", e4: "游泳", e5: "经常", e6: "公斤", e7: "怎么", e8: "旅游", e9: "听说", e10: "姐姐" },
      bank: ["打篮球", "因为", "所以", "游泳", "经常", "公斤", "怎么", "旅游", "听说", "姐姐", "米", "什么", "已经"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "你怎么不高兴？", vi: "Sao bạn không vui?", keywords: ["sao", "không vui"] },
        { zh: "今天怎么这么热？", vi: "Sao hôm nay nóng thế?", keywords: ["hôm nay", "nóng"] },
        { zh: "同学们个个都很高兴。", vi: "Các bạn học ai cũng rất vui.", keywords: ["bạn học", "vui"] },
        { zh: "因为她生病了，所以没去学校。", vi: "Vì cô ấy bị ốm nên không đi học.", keywords: ["vì", "ốm", "đi học"] },
        { zh: "这个商店的衣服件件都很漂亮。", vi: "Quần áo của cửa hàng này cái nào cũng đẹp.", keywords: ["cửa hàng", "quần áo", "đẹp"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Vì ngày nào anh ấy cũng chạy bộ nên sức khỏe rất tốt.", answers: ["因为他每天跑步，所以身体很好。", "因为他天天跑步，所以身体很好。"] },
        { vi: "Sao bạn không ăn nữa?", answers: ["你怎么不吃了？"] },
        { vi: "Bạn có thường xuyên đi bơi không?", answers: ["你经常游泳吗？", "你经常去游泳吗？"] },
        { vi: "Cho tôi một ít mì sợi.", answers: ["来一点儿面条吧。", "来一点儿面条。", "给我一点儿面条。"] },
        { vi: "Vì trời rất lạnh nên tôi không ra ngoài.", answers: ["因为天气很冷，所以我不出去。", "因为天气很冷，所以我没出去。", "因为很冷，所以我不出去。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小王今天已经来学校了。", a: true },
        { q: "B在教室里看见小王了。", a: false },
        { q: "B这个星期天天都吃羊肉。", a: true },
        { q: "B还想吃米饭。", a: false },
        { q: "昨天下雨，所以他们没去打篮球。", a: true },
        { q: "B这个月天天打篮球。", a: false },
        { q: "小张去北京了。", a: true },
        { q: "小张去北京旅游。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你怎么不吃了？",
        "今天的羊肉很好吃。",
        "来一点儿面条吧。",
        "因为昨天下雨，所以我们都没去。",
        "你经常游泳吗？",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你经常做的一项运动，为什么喜欢它？ (Kể về một môn thể thao bạn thường chơi, tại sao bạn thích nó?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 6 (怎么, lượng từ lặp lại, 因为……所以……).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["因为", "所以", "怎么", "天天", "个个", "件件"],
      minGrammar: 2,
      sample: "我经常游泳。因为游泳对身体很好，所以这个月我天天都去游泳。我的朋友问我：“你怎么不去打篮球了？”我说：“因为打篮球很累，我更喜欢游泳。”现在我六十五公斤了，身体也很好。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 因为……，所以……", points: 6,
      subtitle: "Chọn 因为 hoặc 所以 cho mỗi chỗ trống.",
      grammarWord: "因为……所以……",
      options: ["因为", "所以"],
      items: [
        { q: "___她生病了，所以没去学校。", answers: ["因为"] },
        { q: "因为他每天跑步，___身体很好。", answers: ["所以"] },
        { q: "___昨天下雨，所以我们都没去。", answers: ["因为"] },
        { q: "因为天气很冷，___我不想出去。", answers: ["所以"] },
        { q: "___下雨，所以我们在家吃晚饭。", answers: ["因为"] },
        { q: "因为我天天游泳，___瘦了。", answers: ["所以"] },
        { q: "我不吃羊肉，___这个星期天天都吃羊肉。", answers: ["因为"] },
        { q: "因为咖啡喝多了对身体不好，___我每天喝一杯。", answers: ["所以"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: lượng từ lặp lại", points: 6,
      subtitle: "Chọn dạng lặp lại thích hợp.",
      grammarWord: "个个 / 件件 / 天天",
      options: ["个个", "件件", "天天"],
      items: [
        { q: "同学们___都很高兴。", answers: ["个个"] },
        { q: "这个商店的衣服___都很漂亮。", answers: ["件件"] },
        { q: "这个星期我___都吃羊肉。", answers: ["天天"] },
        { q: "这个月我___游泳。", answers: ["天天"] },
        { q: "女孩儿们___都很漂亮。", answers: ["个个"] },
        { q: "这儿的衣服___都不贵。", answers: ["件件"] },
        { q: "他___早上都出去跑步。", answers: ["天天"] },
        { q: "我们班的学生___都喜欢打篮球。", answers: ["个个"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 怎么 hỏi nguyên nhân", points: 5,
      subtitle: "Điền đại từ nghi vấn hỏi nguyên nhân (với sự ngạc nhiên).",
      grammarWord: "怎么",
      items: [
        { q: "你___不高兴？", answers: ["怎么"] },
        { q: "今天___这么热？", answers: ["怎么"] },
        { q: "昨天你们___都没去打篮球？", answers: ["怎么"] },
        { q: "你___知道他来了？", answers: ["怎么"] },
        { q: "这两天___没看见小张？", answers: ["怎么"] },
        { q: "今天的羊肉很好吃，你___不吃了？", answers: ["怎么"] },
        { q: "你___又迟到了？", answers: ["怎么"] },
        { q: "他___还没来？", answers: ["怎么"] },
      ],
    },
  ],
};
