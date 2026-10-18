import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第5课 就买这件吧。 (Mua chiếc áo này đi.)
// Nguồn: Giáo trình chuẩn HSK2, trang 47–54 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson05: Lesson = {
  level: "hsk2",
  no: 5,
  slug: "bai-5",
  zh: "就买这件吧。",
  pinyin: "Jiù mǎi zhè jiàn ba.",
  vi: "Mua chiếc áo này đi.",
  en: "Let's buy this one.",
  topic: "日常生活 · Ăn uống, mua sắm, thi cử",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 14 từ mới: 外面、准备、就、鱼、吧、件、还、可以、不错、考试、意思、咖啡、对、以后.",
    "Hiểu và dùng được 3 điểm ngữ pháp: phó từ 就 (đưa ra kết luận), phó từ ngữ khí 还 (1) (tạm được), phó từ chỉ mức độ 有点儿.",
    "Đọc hiểu 4 đoạn hội thoại về ăn tối ở nhà, mua áo, bài kiểm tra, uống cà phê.",
    "Đưa ra đề nghị, quyết định (就……吧); nhận xét “tạm được”, “hơi…”.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：鱼、咖啡、考试、衣服、打球、休息",
      vi: "Chọn hình tương ứng với các từ: 鱼 (cá), 咖啡 (cà phê), 考试 (thi), 衣服 (quần áo), 打球 (chơi bóng), 休息 (nghỉ ngơi).",
    },
    {
      zh: "看下面的图片，说说他们在什么地方做什么：在饭馆吃饭、在咖啡馆喝咖啡、在学校考试、在商店买衣服",
      vi: "Xem hình và cho biết họ làm gì ở đâu: ăn cơm ở quán, uống cà phê ở quán cà phê, thi ở trường, mua quần áo ở cửa hàng.",
    },
  ],

  vocab: [
    { id: 1, han: "外面", py: "wàimian", pos: "dt.", meaning: "bên ngoài", example: "我不想去外面吃，我想在家吃。", exampleVi: "Em không muốn ăn ngoài, em muốn ăn ở nhà." },
    { id: 2, han: "准备", py: "zhǔnbèi", pos: "đgt.", meaning: "định, dự định; chuẩn bị", example: "那你准备做什么呢？", exampleVi: "Vậy em định nấu món gì?" },
    { id: 3, han: "就", py: "jiù", pos: "p.", meaning: "(chỉ một kết luận hay sự kiên quyết) thì, cứ", example: "就做你爱吃的鱼吧。", exampleVi: "Thì nấu món cá mà anh thích ăn thôi." },
    { id: 4, han: "鱼", py: "yú", pos: "dt.", meaning: "cá, món cá", example: "就做你爱吃的鱼吧。", exampleVi: "Thì nấu món cá mà anh thích ăn thôi." },
    { id: 5, han: "吧", py: "ba", pos: "trợ.", meaning: "(cuối câu) chỉ thương lượng, đề nghị, thỉnh cầu, mệnh lệnh", example: "休息一下吧。", exampleVi: "Nghỉ một chút đi." },
    { id: 6, han: "件", py: "jiàn", pos: "lượng.", meaning: "cái, chiếc (cho áo)", example: "帮我看一下这件衣服怎么样。", exampleVi: "Xem giúp mình chiếc áo này thế nào." },
    { id: 7, han: "还", py: "hái", pos: "p.", meaning: "cũng, khá (tạm được)", example: "颜色还可以，就是有点儿大。", exampleVi: "Màu sắc cũng tạm được nhưng hơi rộng." },
    { id: 8, han: "可以", py: "kěyǐ", pos: "tt.", meaning: "không tệ, tạm được", example: "我觉得听和说还可以。", exampleVi: "Mình thấy nghe và nói cũng tạm được." },
    { id: 9, han: "不错", py: "búcuò", pos: "tt.", meaning: "tuyệt, khá tốt", example: "这件不错，就买这件吧。", exampleVi: "Khá đẹp đấy. Mua chiếc áo này đi." },
    { id: 10, han: "考试", py: "kǎoshì", pos: "dt.", meaning: "cuộc thi, bài kiểm tra", example: "是在想昨天的考试吗？", exampleVi: "Có phải đang nghĩ về bài kiểm tra hôm qua không?" },
    { id: 11, han: "意思", py: "yìsi", pos: "dt.", meaning: "nghĩa, ý nghĩa", example: "很多字我都不知道是什么意思。", exampleVi: "Có rất nhiều chữ mình không biết nghĩa." },
    { id: 12, han: "咖啡", py: "kāfēi", pos: "dt.", meaning: "cà phê", example: "休息一下吧，喝咖啡吗？", exampleVi: "Nghỉ một chút đi, anh uống cà phê không?" },
    { id: 13, han: "对", py: "duì", pos: "giới.", meaning: "đối với, cho", example: "咖啡喝多了对身体不好。", exampleVi: "Uống nhiều cà phê không tốt cho sức khỏe đâu." },
    { id: 14, han: "以后", py: "yǐhòu", pos: "dt.", meaning: "sau này", example: "以后我少喝一点儿，每天喝一杯。", exampleVi: "Sau này tôi sẽ uống ít một chút, mỗi ngày chỉ một ly thôi." },
  ],

  text: {
    title: "课文 就买这件吧。",
    paragraphs: [
      {
        heading: "课文一 · 在家里 (Ở nhà)",
        zh: "A：晚上我们去饭馆吃饭，怎么样？\nB：我不想去外面吃，我想在家吃。\nA：那你准备做什么呢？\nB：就做你爱吃的鱼吧。",
        vi: "A: Chúng ta đến quán ăn dùng cơm tối, được không em?\nB: Em không muốn ăn ngoài, em muốn ăn ở nhà.\nA: Vậy em định nấu món gì?\nB: Thì nấu món cá mà anh thích ăn thôi.",
        questions: ["今天晚上他们在哪儿吃饭？"],
      },
      {
        heading: "课文二 · 在商店 (Ở cửa hàng)",
        zh: "A：帮我看一下这件衣服怎么样。\nB：颜色还可以，就是有点儿大。\nA：这件小的怎么样？\nB：这件不错，就买这件吧。",
        vi: "A: Xem giúp mình chiếc áo này thế nào.\nB: Màu sắc cũng tạm được nhưng hơi rộng.\nA: Còn chiếc áo nhỏ này thì sao?\nB: Khá đẹp đấy. Mua chiếc áo này đi.",
        questions: ["她觉得那件衣服怎么样？"],
      },
      {
        heading: "课文三 · 在教室 (Trong lớp học)",
        zh: "A：今天去不去打球？\nB：这两天有点儿累，不去打球了。\nA：你在做什么呢？是在想昨天的考试吗？\nB：是啊，我觉得听和说还可以，读和写不好，很多字我都不知道是什么意思。",
        vi: "A: Hôm nay bạn đi chơi bóng không?\nB: Mình không đi đâu, mấy ngày nay mình hơi mệt.\nA: Bạn đang làm gì thế? Có phải đang nghĩ về bài kiểm tra hôm qua không?\nB: Đúng vậy, mình thấy rằng mình làm bài nghe và nói cũng tạm được, nhưng làm bài đọc và viết không được tốt, có rất nhiều chữ mình không biết nghĩa.",
        questions: ["她今天为什么不去打球了？", "她觉得昨天的考试怎么样？"],
      },
      {
        heading: "课文四 · 在公司 (Trong công ty)",
        zh: "A：休息一下吧，喝咖啡吗？\nB：不喝了，我已经喝两杯了。\nA：是啊，咖啡喝多了对身体不好。\nB：以后我少喝一点儿，每天喝一杯。",
        vi: "A: Nghỉ một chút đi, anh uống cà phê không?\nB: Không. Tôi đã uống hai ly rồi.\nA: Đúng đấy. Uống nhiều cà phê không tốt cho sức khỏe đâu.\nB: Sau này tôi sẽ uống ít một chút, mỗi ngày chỉ một ly thôi.",
        questions: ["他为什么以后每天就喝一杯咖啡？"],
      },
    ],
    notes: [
      "就是有点儿大: chỉ có điều hơi rộng (就是 ở đây chỉ sự nhượng bộ).",
      "Ngữ âm – trọng âm ngữ pháp của câu: đọc nhấn mạnh định ngữ (那是我妈妈做的中国菜; 我最喜欢红色的衣服).",
      "Văn hóa – Phép lịch sự trên bàn ăn của người Trung Quốc: thường ngồi bàn tròn; trong nhà hàng, khách quan trọng nhất ngồi bên phải chủ nhà, khách thứ hai ngồi bên trái; không mời khách ngồi chỗ đối diện chủ nhà (nơi phục vụ đưa món). Nếu có món cá, đầu cá hướng về vị khách quan trọng nhất để thể hiện sự tôn trọng.",
    ],
  },

  grammar: [
    {
      word: "就 + 动词",
      title: "Phó từ 就 (đưa ra kết luận, giải pháp)",
      usages: [
        {
          label: "Cách dùng",
          explain: "“就 + động từ” kết nối với nội dung trước đó và đưa ra kết luận hoặc giải pháp. Lưu ý: trong câu 颜色还可以，就是有点儿大, 就是 chỉ sự nhượng bộ (chỉ có điều).",
          examples: ["你不想去，就在家休息吧。", "这儿的咖啡不错，就喝咖啡吧。", "就做你爱吃的鱼吧。"],
        },
      ],
    },
    {
      word: "还 + 形容词",
      title: "Phó từ ngữ khí 还 (1): tạm được",
      usages: [
        {
          label: "Cách dùng",
          explain: "“还 + tính từ” diễn tả ý có thể chấp nhận được, tàm tạm.",
          examples: ["A：你身体怎么样？B：还好。", "A：这件衣服大吗？B：还行，不太大。", "A：昨天的考试怎么样？B：我觉得听和说还可以，读和写不好。"],
        },
      ],
    },
    {
      word: "有点儿 + 形容词/动词",
      title: "Phó từ chỉ mức độ 有点儿 (hơi)",
      usages: [
        {
          label: "Cách dùng",
          explain: "“有点儿 + tính từ/động từ” thường diễn tả cảm xúc tiêu cực hay thái độ không hài lòng của người nói.",
          examples: ["今天天气有点儿冷。", "我昨天有点儿累。", "（这件衣服）有点儿大。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "我不想去___吃，我想在家吃。", options: ["外面", "以后", "意思", "考试"], answer: "外面" },
    { sentence: "那你___做什么呢？", options: ["准备", "可以", "不错", "对"], answer: "准备" },
    { sentence: "___做你爱吃的鱼吧。", options: ["就", "还", "对", "有点儿"], answer: "就" },
    { sentence: "帮我看一下这___衣服怎么样。", options: ["件", "个", "本", "块"], answer: "件" },
    { sentence: "颜色___可以，就是有点儿大。", options: ["还", "就", "对", "最"], answer: "还" },
    { sentence: "这件___，就买这件吧。", options: ["不错", "外面", "意思", "以后"], answer: "不错" },
    { sentence: "你是在想昨天的___吗？", options: ["考试", "咖啡", "意思", "鱼"], answer: "考试" },
    { sentence: "很多字我都不知道是什么___。", options: ["意思", "考试", "外面", "以后"], answer: "意思" },
    { sentence: "咖啡喝多了___身体不好。", options: ["对", "就", "还", "吧"], answer: "对" },
    { sentence: "___我少喝一点儿，每天喝一杯。", options: ["以后", "外面", "意思", "考试"], answer: "以后" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [14, 11, 2] },
        { vocabId: 2, distractors: [10, 8, 9] },
        { vocabId: 4, distractors: [12, 6, 13] },
        { vocabId: 8, distractors: [9, 2, 7] },
        { vocabId: 9, distractors: [8, 10, 1] },
        { vocabId: 10, distractors: [11, 2, 12] },
        { vocabId: 11, distractors: [10, 14, 1] },
        { vocabId: 12, distractors: [4, 10, 11] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 4, 8, 9, 10, 12, 14],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["这件", "不错", "，", "就", "买", "这件吧", "。"], answer: "这件不错，就买这件吧。", vi: "Cái này đẹp đấy, mua cái này đi." },
        { tokens: ["颜色", "还可以", "，", "就是", "有点儿大", "。"], answer: "颜色还可以，就是有点儿大。", vi: "Màu tạm được, chỉ là hơi rộng." },
        { tokens: ["我", "不想", "去外面吃", "，", "我想", "在家吃", "。"], answer: "我不想去外面吃，我想在家吃。", vi: "Tôi không muốn ăn ngoài, tôi muốn ăn ở nhà." },
        { tokens: ["咖啡", "喝多了", "对", "身体", "不好", "。"], answer: "咖啡喝多了对身体不好。", vi: "Uống nhiều cà phê không tốt cho sức khỏe." },
        { tokens: ["这两天", "有点儿", "累", "，", "不去", "打球了", "。"], answer: "这两天有点儿累，不去打球了。", vi: "Mấy hôm nay hơi mệt, không đi chơi bóng nữa." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ăn tối ở nhà", text: "A：晚上我们去饭馆吃饭，怎么样？\nB：我不想去{{c1}}吃，我想在家吃。\nA：那你{{c2}}做什么呢？\nB：{{c3}}做你爱吃的{{c4}}{{c5}}。" },
        { title: "Bài khóa 2 · Mua áo", text: "A：帮我看一下这{{c6}}衣服怎么样。\nB：颜色{{c7}}{{c8}}，就是{{c9}}大。\nA：这件小的怎么样？\nB：这件{{c10}}，就买这件吧。" },
      ],
      answers: { c1: "外面", c2: "准备", c3: "就", c4: "鱼", c5: "吧", c6: "件", c7: "还", c8: "可以", c9: "有点儿", c10: "不错" },
      bank: ["外面", "准备", "就", "鱼", "吧", "件", "还", "可以", "有点儿", "不错", "对", "以后", "本"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Bài kiểm tra", text: "A：今天去不去打球？\nB：这两天{{e1}}累，不去打球了。\nA：你在做什么呢？是在想昨天的{{e2}}吗？\nB：是啊，我觉得听和说{{e3}}可以，读和写不好，很多字我都不知道是什么{{e4}}。" },
        { title: "Bài khóa 4 · Uống cà phê", text: "A：{{e5}}一下吧，喝{{e6}}吗？\nB：不喝了，我{{e7}}喝两杯了。\nA：是啊，咖啡喝多了{{e8}}身体不好。\nB：{{e9}}我少喝一点儿，{{e10}}天喝一杯。" },
      ],
      answers: { e1: "有点儿", e2: "考试", e3: "还", e4: "意思", e5: "休息", e6: "咖啡", e7: "已经", e8: "对", e9: "以后", e10: "每" },
      bank: ["有点儿", "考试", "还", "意思", "休息", "咖啡", "已经", "对", "以后", "每", "就", "外面", "最"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "你不想去，就在家休息吧。", vi: "Bạn không muốn đi thì ở nhà nghỉ ngơi đi.", keywords: ["không muốn", "ở nhà", "nghỉ"] },
        { zh: "今天天气有点儿冷。", vi: "Hôm nay trời hơi lạnh.", keywords: ["hôm nay", "hơi lạnh"] },
        { zh: "这儿的咖啡不错，就喝咖啡吧。", vi: "Cà phê ở đây khá ngon, uống cà phê đi.", keywords: ["cà phê", "uống"] },
        { zh: "很多字我都不知道是什么意思。", vi: "Rất nhiều chữ tôi không biết nghĩa là gì.", keywords: ["chữ", "không biết", "nghĩa"] },
        { zh: "以后我少喝一点儿。", vi: "Sau này tôi sẽ uống ít một chút.", keywords: ["sau này", "uống ít"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Hôm qua tôi hơi mệt.", answers: ["我昨天有点儿累。", "昨天我有点儿累。"] },
        { vi: "A: Sức khỏe bạn thế nào? B: Cũng ổn.", answers: ["A：你身体怎么样？B：还好。", "你身体怎么样？还好。"] },
        { vi: "Mua chiếc áo này đi.", answers: ["就买这件吧。", "买这件衣服吧。", "就买这件衣服吧。"] },
        { vi: "Uống nhiều cà phê không tốt cho sức khỏe.", answers: ["咖啡喝多了对身体不好。", "喝很多咖啡对身体不好。", "多喝咖啡对身体不好。"] },
        { vi: "Tối nay chúng ta đi ăn ở quán nhé, được không?", answers: ["今天晚上我们去饭馆吃饭，怎么样？", "晚上我们去饭馆吃饭，怎么样？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "B不想去外面吃饭。", a: true },
        { q: "今天晚上他们在饭馆吃饭。", a: false },
        { q: "第一件衣服有点儿大。", a: true },
        { q: "她们买了那件大的衣服。", a: false },
        { q: "B这两天有点儿累。", a: true },
        { q: "B觉得读和写还可以。", a: false },
        { q: "B今天已经喝了两杯咖啡。", a: true },
        { q: "B以后每天喝三杯咖啡。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "就买这件吧。",
        "就做你爱吃的鱼吧。",
        "颜色还可以，就是有点儿大。",
        "休息一下吧，喝咖啡吗？",
        "咖啡喝多了对身体不好。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你最近一次买东西：买了什么？觉得怎么样？ (Kể về lần mua sắm gần nhất: mua gì? Thấy thế nào?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 5 (就, 还 + tính từ, 有点儿).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["就", "还", "有点儿"],
      minGrammar: 2,
      sample: "昨天我和朋友去商店买衣服。我看了一件红色的衣服，颜色还可以，就是有点儿大。朋友说那件小的不错，我就买了那件小的。买完衣服以后，我们有点儿累，就去咖啡馆喝了一杯咖啡。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 就 / 还", points: 6,
      subtitle: "Chọn 就 (kết luận, đề nghị) hoặc 还 (tạm được).",
      grammarWord: "就 / 还",
      options: ["就", "还"],
      items: [
        { q: "你不想去，___在家休息吧。", answers: ["就"] },
        { q: "这儿的咖啡不错，___喝咖啡吧。", answers: ["就"] },
        { q: "A：你身体怎么样？B：___好。", answers: ["还"] },
        { q: "A：这件衣服大吗？B：___行，不太大。", answers: ["还"] },
        { q: "我觉得听和说___可以，读和写不好。", answers: ["还"] },
        { q: "___做你爱吃的鱼吧。", answers: ["就"] },
        { q: "这件不错，___买这件吧。", answers: ["就"] },
        { q: "这个饭馆的菜___可以。", answers: ["还"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 有点儿", points: 6,
      subtitle: "Chọn tính từ thích hợp sau 有点儿.",
      grammarWord: "有点儿",
      options: ["冷", "累", "大", "小", "贵", "忙"],
      items: [
        { q: "今天天气有点儿___。", answers: ["冷"] },
        { q: "我昨天有点儿___。", answers: ["累"] },
        { q: "这件衣服有点儿___，有小的吗？", answers: ["大"] },
        { q: "这件衣服不错，就是有点儿___，我穿不了。", answers: ["小"] },
        { q: "这块手表有点儿___，我不想买。", answers: ["贵"] },
        { q: "这两天我有点儿___，没有时间休息。", answers: ["忙"] },
        { q: "这两天有点儿___，不去打球了。", answers: ["累"] },
        { q: "外面有点儿___，多穿点儿衣服。", answers: ["冷"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 对 / 吧", points: 5,
      subtitle: "Chọn 对 hoặc 吧 cho mỗi chỗ trống.",
      grammarWord: "对 / 吧",
      options: ["对", "吧"],
      items: [
        { q: "咖啡喝多了___身体不好。", answers: ["对"] },
        { q: "休息一下___，喝咖啡吗？", answers: ["吧"] },
        { q: "就买这件___。", answers: ["吧"] },
        { q: "多运动___身体好。", answers: ["对"] },
        { q: "我们一起去踢足球___。", answers: ["吧"] },
        { q: "吃水果___身体很好。", answers: ["对"] },
        { q: "你累了，就在家休息___。", answers: ["吧"] },
        { q: "王老师___我们非常好。", answers: ["对"] },
      ],
    },
  ],
};
