import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第8课 让我想想再告诉你。 (Để mình suy nghĩ rồi sẽ nói cho bạn biết.)
// Nguồn: Giáo trình chuẩn HSK2, trang 71–78 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson08: Lesson = {
  level: "hsk2",
  no: 8,
  slug: "bai-8",
  zh: "让我想想再告诉你。",
  pinyin: "Ràng wǒ xiǎngxiang zài gàosu nǐ.",
  vi: "Để mình suy nghĩ rồi sẽ nói cho bạn biết.",
  en: "Let me think about it and then tell you.",
  topic: "日常生活 · Hẹn hò, nhờ vả, khách sạn, mua sắm",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 10 từ mới: 再、让、告诉、等、找、事情、服务员、白、黑、贵.",
    "Hiểu và dùng được 4 điểm ngữ pháp: câu hỏi ……，好吗？, phó từ 再, câu kiêm ngữ (请/让/叫), lặp lại động từ (看看、想一想、学习学习).",
    "Đọc hiểu 4 đoạn hội thoại về rủ đi xem phim, gọi điện cho David, cửa phòng khách sạn, chọn váy.",
    "Đưa ra lời rủ, hỏi ý kiến (……，好吗？); nhờ/bảo người khác làm gì.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：黑、天气、运动、服务员、等、白",
      vi: "Chọn hình tương ứng với các từ: 黑 (màu đen), 天气 (thời tiết), 运动 (vận động), 服务员 (nhân viên phục vụ), 等 (đợi), 白 (màu trắng).",
    },
    {
      zh: "试着说说下列词语的反义词：大—（小）、多—（少）、快—（慢）、冷—（热）、上—（下）、黑—（白）",
      vi: "Nói từ trái nghĩa: to – nhỏ, nhiều – ít, nhanh – chậm, lạnh – nóng, trên – dưới, đen – trắng.",
    },
  ],

  vocab: [
    { id: 1, han: "再", py: "zài", pos: "p.", meaning: "lại, lần nữa, hẵng, hãy, sẽ", example: "今天下午我没有时间，明天下午再去吧。", exampleVi: "Chiều nay mình không rảnh rồi, chiều mai hãy đi vậy!" },
    { id: 2, han: "让", py: "ràng", pos: "đgt.", meaning: "để, bảo", example: "让我想想再告诉你。", exampleVi: "Để mình suy nghĩ rồi sẽ nói cho bạn biết." },
    { id: 3, han: "告诉", py: "gàosu", pos: "đgt.", meaning: "nói cho biết", example: "让我想想再告诉你。", exampleVi: "Để mình suy nghĩ rồi sẽ nói cho bạn biết." },
    { id: 4, han: "等", py: "děng", pos: "đgt.", meaning: "đợi", example: "你等等我，好吗？", exampleVi: "Cậu đợi mình một lát được không?" },
    { id: 5, han: "找", py: "zhǎo", pos: "đgt.", meaning: "tìm", example: "找大卫有什么事情吗？", exampleVi: "Cậu tìm David có chuyện gì không?" },
    { id: 6, han: "事情", py: "shìqing", pos: "dt.", meaning: "sự việc, chuyện", example: "找大卫有什么事情吗？", exampleVi: "Cậu tìm David có chuyện gì không?" },
    { id: 7, han: "服务员", py: "fúwùyuán", pos: "dt.", meaning: "nhân viên phục vụ", example: "服务员，我房间的门打不开了。", exampleVi: "Anh phục vụ ơi, ở phòng tôi cửa không mở được." },
    { id: 8, han: "白", py: "bái", pos: "tt.", meaning: "có màu trắng", example: "这件白的有点儿长。", exampleVi: "Cái màu trắng này hơi dài." },
    { id: 9, han: "黑", py: "hēi", pos: "tt.", meaning: "có màu đen", example: "那件黑的有点儿贵。", exampleVi: "Cái màu đen kia hơi đắt." },
    { id: 10, han: "贵", py: "guì", pos: "tt.", meaning: "đắt", example: "那件黑的有点儿贵。", exampleVi: "Cái màu đen kia hơi đắt." },
  ],

  text: {
    title: "课文 让我想想再告诉你。",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "A：我们下午去看电影，好吗？\nB：今天下午我没有时间，明天下午再去吧。\nA：你想看什么电影？\nB：让我想想再告诉你。",
        vi: "A: Buổi chiều chúng ta đi xem phim được không?\nB: Chiều nay mình không rảnh rồi, chiều mai hãy đi vậy!\nA: Bạn muốn xem phim gì?\nB: Để mình suy nghĩ rồi sẽ nói cho bạn biết.",
        questions: ["他们为什么今天下午不去看电影？"],
      },
      {
        heading: "课文二 · 在宿舍 (Ở ký túc xá)",
        zh: "A：外边天气很好，我们出去运动运动吧！\nB：你等等我，好吗？王老师让我给大卫打个电话。\nA：回来再打吧。找大卫有什么事情吗？\nB：听说大卫病了，我想找时间去看看他。",
        vi: "A: Bên ngoài trời rất đẹp, chúng ta ra ngoài tập thể dục một chút đi!\nB: Cậu đợi mình một lát được không? Cô Vương bảo mình gọi điện cho David.\nA: Khi nào quay về hãy gọi. Cậu tìm David có chuyện gì không?\nB: Nghe nói David bị bệnh rồi. Mình định lúc nào rảnh sẽ đi thăm.",
        questions: ["王老师为什么让他给大卫打电话？", "大卫怎么了？"],
      },
      {
        heading: "课文三 · 在宾馆的前台 (Tại quầy lễ tân của khách sạn)",
        zh: "A：服务员，我房间的门打不开了。\nB：您住哪个房间？\nA：317。\nB：好的，我叫人去看看。",
        vi: "A: Anh phục vụ ơi, ở phòng tôi cửa không mở được.\nB: Chị ở phòng nào ạ?\nA: 317.\nB: Dạ được, tôi sẽ gọi người đến xem.",
        questions: ["她为什么去找服务员？"],
      },
      {
        heading: "课文四 · 在商店 (Ở cửa hàng)",
        zh: "A：你看看这几件衣服怎么样。\nB：这件白的有点儿长，那件黑的有点儿贵。\nA：这件红的呢？这是今天新来的。\nB：让我再看看。",
        vi: "A: Cô xem xem mấy cái đầm này thế nào.\nB: Cái màu trắng này hơi dài còn cái màu đen kia hơi đắt.\nA: Vậy cái màu đỏ này thì sao? Đây là hàng mới về hôm nay đấy.\nB: Để tôi xem đã.",
        questions: ["她为什么不喜欢那件黑的？"],
      },
    ],
    notes: [
      "打不开: không mở được (bổ ngữ khả năng, sẽ học kỹ ở HSK3).",
      "317 đọc là 三一七 (sān yāo qī): trong số phòng, số điện thoại, 一 thường đọc là yāo.",
      "新来的: hàng mới về.",
    ],
  },

  grammar: [
    {
      word: "……，好吗？",
      title: "Câu hỏi có cấu trúc: ……，好吗？",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thường dùng để hỏi ý kiến, quan điểm của người khác (… được không?).",
          examples: ["我们一起去吃饭，好吗？", "你明天下午给我打电话，好吗？", "我们下午去看电影，好吗？"],
        },
      ],
    },
    {
      word: "再",
      title: "Phó từ 再",
      usages: [
        {
          label: "Cách dùng",
          explain: "再 diễn tả hành động/trạng thái được lặp lại hay tiếp tục; cũng chỉ hành động sẽ xảy ra trong tình huống nào đó (rồi hãy…, … rồi sẽ…).",
          examples: ["你再看看这本书吧。", "你（明天）再给我打电话吧。", "（你）（让我想想）再告诉你。"],
        },
      ],
    },
    {
      word: "请/让/叫 + 人 + 动词",
      title: "Câu kiêm ngữ",
      usages: [
        {
          label: "Cách dùng",
          explain: "Vị ngữ gồm hai cụm động từ; tân ngữ của động từ thứ nhất là chủ ngữ của động từ thứ hai. Động từ thứ nhất thường là 请 (mời), 让 (để, bảo), 叫 (gọi, bảo).",
          examples: ["我请你吃饭。", "你让我再想想。", "我叫人去看看。"],
        },
      ],
    },
    {
      word: "动词重叠",
      title: "Sự lặp lại động từ",
      usages: [
        {
          label: "Động từ một âm tiết: AA / A一A",
          explain: "Lặp lại động từ diễn tả thời gian ngắn, số lượng ít, mức độ nhẹ hay làm thử, sắc thái nhẹ nhàng, thoải mái, thường dùng trong văn nói.",
          examples: ["说说 / 说一说", "听听 / 听一听", "看看 / 看一看"],
        },
        {
          label: "Động từ hai âm tiết: ABAB",
          explain: "Động từ hai âm tiết lặp lại theo dạng ABAB.",
          examples: ["学习学习", "准备准备", "我们出去运动运动吧！"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "今天下午我没有时间，明天下午___去吧。", options: ["再", "还", "就", "也"], answer: "再" },
    { sentence: "___我想想再告诉你。", options: ["让", "等", "找", "告诉"], answer: "让" },
    { sentence: "让我想想再___你。", options: ["告诉", "找", "等", "让"], answer: "告诉" },
    { sentence: "你___等我，好吗？", options: ["等", "找", "让", "再"], answer: "等" },
    { sentence: "___大卫有什么事情吗？", options: ["找", "等", "让", "告诉"], answer: "找" },
    { sentence: "找大卫有什么___吗？", options: ["事情", "服务员", "时间", "电影"], answer: "事情" },
    { sentence: "___，我房间的门打不开了。", options: ["服务员", "事情", "同学", "医生"], answer: "服务员" },
    { sentence: "这件___的有点儿长。", options: ["白", "贵", "长", "快"], answer: "白" },
    { sentence: "那件___的有点儿贵。", options: ["黑", "贵", "远", "慢"], answer: "黑" },
    { sentence: "那件黑的有点儿___，我不买了。", options: ["贵", "白", "黑", "远"], answer: "贵" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 4, 5] },
        { vocabId: 2, distractors: [1, 3, 10] },
        { vocabId: 3, distractors: [6, 2, 5] },
        { vocabId: 4, distractors: [5, 1, 9] },
        { vocabId: 5, distractors: [4, 3, 8] },
        { vocabId: 6, distractors: [7, 3, 1] },
        { vocabId: 7, distractors: [6, 3, 10] },
        { vocabId: 10, distractors: [8, 9, 1] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 4, 5, 6, 7, 10],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["让", "我", "想想", "再", "告诉你", "。"], answer: "让我想想再告诉你。", vi: "Để tôi nghĩ rồi sẽ nói cho bạn biết." },
        { tokens: ["我们", "下午", "去看电影", "，", "好吗", "？"], answer: "我们下午去看电影，好吗？", vi: "Chiều nay chúng ta đi xem phim được không?" },
        { tokens: ["王老师", "让", "我", "给大卫", "打个电话", "。"], answer: "王老师让我给大卫打个电话。", vi: "Cô Vương bảo tôi gọi điện cho David." },
        { tokens: ["我们", "出去", "运动运动", "吧", "！"], answer: "我们出去运动运动吧！", vi: "Chúng ta ra ngoài vận động một chút đi!" },
        { tokens: ["好的", "，", "我", "叫", "人", "去看看", "。"], answer: "好的，我叫人去看看。", vi: "Được, tôi gọi người đến xem." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Đi xem phim", text: "A：我们下午去看电影，{{c1}}？\nB：今天下午我没有时间，明天下午{{c2}}去吧。\nA：你想看什么电影？\nB：{{c3}}我{{c4}}再{{c5}}你。" },
        { title: "Bài khóa 2 · Ở ký túc xá", text: "A：外边天气很好，我们出去{{c6}}吧！\nB：你{{c7}}我，好吗？王老师让我给大卫打个电话。\nA：回来再打吧。{{c8}}大卫有什么{{c9}}吗？\nB：{{c10}}大卫病了，我想找时间去看看他。" },
      ],
      answers: { c1: "好吗", c2: "再", c3: "让", c4: "想想", c5: "告诉", c6: "运动运动", c7: "等等", c8: "找", c9: "事情", c10: "听说" },
      bank: ["好吗", "再", "让", "想想", "告诉", "运动运动", "等等", "找", "事情", "听说", "叫", "还", "看看"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Quầy lễ tân", text: "A：{{e1}}，我房间的门打不开了。\nB：您{{e2}}哪个房间？\nA：317。\nB：好的，我{{e3}}人去{{e4}}。" },
        { title: "Bài khóa 4 · Ở cửa hàng", text: "A：你看看这几件衣服怎么样。\nB：这件{{e5}}的{{e6}}长，那件{{e7}}的有点儿{{e8}}。\nA：这件红的呢？这是今天{{e9}}来的。\nB：让我{{e10}}看看。" },
      ],
      answers: { e1: "服务员", e2: "住", e3: "叫", e4: "看看", e5: "白", e6: "有点儿", e7: "黑", e8: "贵", e9: "新", e10: "再" },
      bank: ["服务员", "住", "叫", "看看", "白", "有点儿", "黑", "贵", "新", "再", "还", "找", "让"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我们一起去吃饭，好吗？", vi: "Chúng ta cùng đi ăn cơm, được không?", keywords: ["cùng", "ăn cơm", "được không"] },
        { zh: "我请你吃饭。", vi: "Tôi mời bạn ăn cơm.", keywords: ["mời", "ăn cơm"] },
        { zh: "你明天再给我打电话吧。", vi: "Ngày mai bạn hãy gọi điện cho tôi.", keywords: ["ngày mai", "gọi điện"] },
        { zh: "这件白的有点儿长。", vi: "Cái màu trắng này hơi dài.", keywords: ["màu trắng", "hơi dài"] },
        { zh: "我房间的门打不开了。", vi: "Cửa phòng tôi không mở được.", keywords: ["cửa", "phòng", "không mở được"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Bạn đợi tôi một chút, được không?", answers: ["你等等我，好吗？", "你等一下我，好吗？", "你等我一下，好吗？"] },
        { vi: "Để tôi xem lại.", answers: ["让我再看看。"] },
        { vi: "Bạn tìm David có chuyện gì không?", answers: ["你找大卫有什么事情吗？", "找大卫有什么事情吗？", "你找大卫有什么事吗？"] },
        { vi: "Ngày mai bạn gọi điện cho tôi, được không?", answers: ["你明天给我打电话，好吗？", "明天你给我打电话，好吗？"] },
        { vi: "Cái màu đen kia hơi đắt.", answers: ["那件黑的有点儿贵。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "B今天下午没有时间去看电影。", a: true },
        { q: "B已经想好看什么电影了。", a: false },
        { q: "王老师让B给大卫打电话。", a: true },
        { q: "大卫去旅游了。", a: false },
        { q: "A住317房间。", a: true },
        { q: "服务员说自己去看看。", a: false },
        { q: "那件黑的衣服有点儿贵。", a: true },
        { q: "那件红的衣服是去年的。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "让我想想再告诉你。",
        "你等等我，好吗？",
        "找大卫有什么事情吗？",
        "您住哪个房间？",
        "那件黑的有点儿贵。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "写一段对话：你想请朋友周末一起去做什么，朋友怎么回答？ (Viết một đoạn hội thoại: bạn muốn mời bạn bè cuối tuần cùng đi làm gì, bạn ấy trả lời thế nào?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 8 (……，好吗？, 再, 请/让/叫, lặp lại động từ).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["好吗", "再", "请", "让", "叫", "看看", "想想", "等等"],
      minGrammar: 2,
      sample: "A：周末我请你去看电影，好吗？B：这个周末我没有时间，妈妈让我在家学习。下个周末再去吧。A：好吧，你想看什么电影？B：让我想想再告诉你。A：你等等，我去看看有什么新电影。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: câu kiêm ngữ 请 / 让 / 叫", points: 6,
      subtitle: "Chọn động từ thứ nhất của câu kiêm ngữ (có câu dùng được nhiều từ).",
      grammarWord: "请 / 让 / 叫",
      options: ["请", "让", "叫"],
      items: [
        { q: "我___你吃饭。", answers: ["请"] },
        { q: "你___我再想想。", answers: ["让"] },
        { q: "我___人去看看。", answers: ["叫", "让"] },
        { q: "王老师___我给大卫打个电话。", answers: ["让", "叫"] },
        { q: "___我想想再告诉你。", answers: ["让"] },
        { q: "今天是我的生日，我___你们喝咖啡。", answers: ["请"] },
        { q: "妈妈___我早点儿回家。", answers: ["让", "叫"] },
        { q: "医生___他多休息。", answers: ["让", "叫"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: lặp lại động từ", points: 6,
      subtitle: "Chọn dạng lặp lại thích hợp.",
      grammarWord: "动词重叠",
      options: ["想想", "等等", "看看", "运动运动", "学习学习", "准备准备"],
      items: [
        { q: "让我___再告诉你。", answers: ["想想"] },
        { q: "你___我，好吗？", answers: ["等等"] },
        { q: "你___这几件衣服怎么样。", answers: ["看看"] },
        { q: "外边天气很好，我们出去___吧！", answers: ["运动运动"] },
        { q: "明天有考试，我要好好___。", answers: ["准备准备", "学习学习"] },
        { q: "这是本新书，你___吧。", answers: ["看看", "学习学习"] },
        { q: "我想找时间去___他。", answers: ["看看"] },
        { q: "我叫人去___。", answers: ["看看"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 再 / 好吗", points: 5,
      subtitle: "Chọn 再 hoặc 好吗 cho mỗi chỗ trống.",
      grammarWord: "再 / 好吗",
      options: ["再", "好吗"],
      items: [
        { q: "我们下午去看电影，___？", answers: ["好吗"] },
        { q: "明天下午___去吧。", answers: ["再"] },
        { q: "回来___打吧。", answers: ["再"] },
        { q: "你等等我，___？", answers: ["好吗"] },
        { q: "让我___看看。", answers: ["再"] },
        { q: "我们一起去吃饭，___？", answers: ["好吗"] },
        { q: "你___看看这本书吧。", answers: ["再"] },
        { q: "你明天下午给我打电话，___？", answers: ["好吗"] },
      ],
    },
  ],
};
