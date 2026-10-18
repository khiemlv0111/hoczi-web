import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第11课 他比我大三岁。 (Anh ấy lớn hơn mình ba tuổi.)
// Nguồn: Giáo trình chuẩn HSK2, trang 95–102 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson11: Lesson = {
  level: "hsk2",
  no: 11,
  slug: "bai-11",
  zh: "他比我大三岁。",
  pinyin: "Tā bǐ wǒ dà sān suì.",
  vi: "Anh ấy lớn hơn mình ba tuổi.",
  en: "He is three years older than me.",
  topic: "比较 · So sánh tuổi tác, giá cả, người",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 11 từ mới: 唱歌、男、女、孩子、右边、比、便宜、说话、可能、去年、姓.",
    "Hiểu và dùng được 3 điểm ngữ pháp: động từ/cụm động từ làm định ngữ (……的 + danh từ), câu chữ 比 (1), trợ động từ 可能.",
    "Đọc hiểu 4 đoạn hội thoại về người hát karaoke cùng, anh trai, giá dưa hấu, cô giáo mới.",
    "So sánh tuổi, giá cả, đặc điểm (A比B……); phỏng đoán (可能).",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：跳舞、说话、女、孩子、唱歌、男",
      vi: "Chọn hình tương ứng với các từ: 跳舞 (múa), 说话 (nói chuyện), 女 (nữ), 孩子 (trẻ con), 唱歌 (hát), 男 (nam).",
    },
    {
      zh: "试着说说下面这些词语的反义词：贵—（便宜）、对—（错）、左—（右）、来—（去）、前—（后）、里—（外）",
      vi: "Nói từ trái nghĩa: đắt – rẻ, đúng – sai, trái – phải, đến – đi, trước – sau, trong – ngoài.",
    },
  ],

  vocab: [
    { id: 1, han: "唱歌", py: "chàng gē", pos: "đgt.", meaning: "hát", example: "王方，昨天和你一起唱歌的人是谁？", exampleVi: "Vương Phương, người hát cùng với cô ngày hôm qua là ai thế?" },
    { id: 2, han: "男", py: "nán", pos: "tt.", meaning: "thuộc về nam giới", example: "什么朋友？是不是男朋友？", exampleVi: "Bạn thế nào vậy? Có phải là bạn trai không?" },
    { id: 3, han: "女", py: "nǚ", pos: "tt.", meaning: "thuộc về nữ giới", example: "左边这个看报纸的女孩子是你姐姐吗？", exampleVi: "Cô gái bên tay trái đang đọc báo là chị của bạn phải không?" },
    { id: 4, han: "孩子", py: "háizi", pos: "dt.", meaning: "trẻ con, trẻ em", example: "左边这个看报纸的女孩子是你姐姐吗？", exampleVi: "Cô gái bên tay trái đang đọc báo là chị của bạn phải không?" },
    { id: 5, han: "右边", py: "yòubian", pos: "dt.", meaning: "bên phải", example: "右边写字的那个人是我哥哥。", exampleVi: "Người bên tay phải đang viết chữ là anh mình." },
    { id: 6, han: "比", py: "bǐ", pos: "giới.", meaning: "hơn (dùng trong cấu trúc so sánh)", example: "25岁，他比我大三岁。", exampleVi: "25 tuổi, anh ấy lớn hơn mình ba tuổi." },
    { id: 7, han: "便宜", py: "piányi", pos: "tt.", meaning: "rẻ", example: "苹果也比昨天便宜一些。", exampleVi: "Táo cũng rẻ hơn hôm qua một chút." },
    { id: 8, han: "说话", py: "shuō huà", pos: "đgt.", meaning: "nói chuyện", example: "前边说话的那个人就是我的汉语老师。", exampleVi: "Người đang nói chuyện ở phía trước chính là cô giáo dạy tôi tiếng Trung Quốc." },
    { id: 9, han: "可能", py: "kěnéng", pos: "trợ đgt.", meaning: "có thể, có lẽ", example: "你可能不认识她。", exampleVi: "Có lẽ anh không biết cô ấy." },
    { id: 10, han: "去年", py: "qùnián", pos: "dt.", meaning: "năm ngoái", example: "是去年来的，她姓王，28岁。", exampleVi: "Đến vào năm ngoái, cô ấy họ Vương, 28 tuổi." },
    { id: 11, han: "姓", py: "xìng", pos: "đgt.", meaning: "mang họ", example: "她姓王。", exampleVi: "Cô ấy họ Vương." },
    { id: 12, han: "王方", py: "Wáng Fāng", pos: "dt.", meaning: "Vương Phương (tên người)", example: "王方，昨天和你一起唱歌的人是谁？", exampleVi: "Vương Phương, người hát cùng cô hôm qua là ai?" },
  ],

  text: {
    title: "课文 他比我大三岁。",
    paragraphs: [
      {
        heading: "课文一 · 在歌厅 (Ở quán karaoke)",
        zh: "A：王方，昨天和你一起唱歌的人是谁？\nB：一个朋友。\nA：什么朋友？是不是男朋友？\nB：不是不是，我同学介绍的，昨天第一次见。",
        vi: "A: Vương Phương, người hát cùng với cô ngày hôm qua là ai thế?\nB: Một người bạn.\nA: Bạn thế nào vậy? Có phải là bạn trai không?\nB: Không, không phải đâu. Anh ấy là người mà bạn học tôi giới thiệu. Hôm qua là lần đầu tiên tôi gặp anh ấy đấy.",
        questions: ["昨天和王方一起唱歌的人是谁？"],
      },
      {
        heading: "课文二 · 在宿舍 (Ở ký túc xá)",
        zh: "A：左边这个看报纸的女孩子是你姐姐吗？\nB：是，右边写字的那个人是我哥哥。\nA：你哥哥多大？\nB：25岁，他比我大三岁。",
        vi: "A: Cô gái bên tay trái đang đọc báo là chị của bạn phải không?\nB: Đúng thế, còn người bên tay phải đang viết chữ là anh mình.\nA: Anh bạn bao nhiêu tuổi vậy?\nB: 25 tuổi, anh ấy lớn hơn mình ba tuổi.",
        questions: ["左边看报纸的女孩子是谁？", "她的哥哥25岁了，她多大了？"],
      },
      {
        heading: "课文三 · 在商店 (Ở cửa hàng)",
        zh: "A：今天的西瓜怎么卖？\nB：三块五一斤。\nA：比昨天便宜。\nB：是，苹果也比昨天便宜一些。您来点儿吧。",
        vi: "A: Dưa hấu hôm nay bán thế nào vậy?\nB: Ba đồng năm hào nửa kí lô.\nA: Vậy là rẻ hơn hôm qua.\nB: Phải, táo cũng rẻ hơn hôm qua một chút. Ông mua một ít đi.",
        questions: ["今天的西瓜多少钱一斤？", "昨天的西瓜可能卖多少钱？"],
      },
      {
        heading: "课文四 · 在学校 (Ở trường)",
        zh: "A：前边说话的那个人就是我的汉语老师。你可能不认识她。\nB：是新来的汉语老师吗？\nA：是去年来的，她姓王，28岁。\nB：她比我们老师小两岁。",
        vi: "A: Người đang nói chuyện ở phía trước chính là cô giáo dạy tôi tiếng Trung Quốc. Có lẽ anh không biết cô ấy.\nB: Có phải đó là cô giáo dạy tiếng Trung Quốc mới đến không?\nA: Đến vào năm ngoái, cô ấy họ Vương, 28 tuổi.\nB: Vậy là cô ấy nhỏ hơn cô giáo dạy chúng tôi hai tuổi.",
        questions: ["王老师是新老师吗？"],
      },
    ],
    notes: [
      "王方 (Wáng Fāng): Vương Phương.",
      "斤 (jīn): cân Trung Quốc = 500 g (nửa kí lô). 三块五: 3,5 đồng.",
      "……怎么卖？: … bán thế nào? (hỏi giá).",
    ],
  },

  grammar: [
    {
      word: "动词(短语) + 的 + 名词",
      title: "Động từ/cụm động từ làm định ngữ",
      usages: [
        {
          label: "Cách dùng",
          explain: "Khi động từ hay cụm động từ làm định ngữ, phải thêm 的 vào giữa định ngữ và trung tâm ngữ.",
          examples: ["新买的自行车", "我妈妈做的饭", "和你一起唱歌的人", "右边写字的那个人是我哥哥。"],
        },
      ],
    },
    {
      word: "A 比 B + 形容词 (+ 数量)",
      title: "Câu có từ 比 (1)",
      usages: [
        {
          label: "A 比 B + tính từ",
          explain: "比 dùng để so sánh; vị ngữ có thể là tính từ.",
          examples: ["哥哥比姐姐高。", "今天比昨天热。", "（今天的西瓜）比昨天便宜。"],
        },
        {
          label: "Phủ định: A 没有 B + tính từ",
          explain: "Dạng phủ định là A没有B…… (A không bằng B).",
          examples: ["哥哥没有姐姐高。", "今天没有昨天热。", "西瓜没有苹果便宜。"],
        },
        {
          label: "Mức chênh lệch",
          explain: "Dùng số lượng cụ thể để chỉ chênh lệch cụ thể; 一点儿/一些: chênh lệch không lớn; 多/得多: chênh lệch lớn.",
          examples: ["西瓜比苹果贵两块钱。", "我的学习比他好一点儿。", "今天比昨天热得多。", "她比我们老师小两岁。"],
        },
      ],
    },
    {
      word: "可能",
      title: "Trợ động từ 可能 (có thể, có lẽ)",
      usages: [
        {
          label: "Cách dùng",
          explain: "可能 đứng trước động từ hay trước chủ ngữ để diễn tả sự phỏng đoán.",
          examples: ["他可能早就知道这件事情了。", "可能我明天不来上课了。", "你可能不认识她。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "昨天和你一起___的人是谁？", options: ["唱歌", "说话", "姓", "比"], answer: "唱歌" },
    { sentence: "什么朋友？是不是___朋友？", options: ["男", "女", "右边", "去年"], answer: "男" },
    { sentence: "左边这个看报纸的___孩子是你姐姐吗？", options: ["女", "男", "比", "姓"], answer: "女" },
    { sentence: "___写字的那个人是我哥哥。", options: ["右边", "去年", "可能", "便宜"], answer: "右边" },
    { sentence: "25岁，他___我大三岁。", options: ["比", "跟", "对", "离"], answer: "比" },
    { sentence: "今天的西瓜比昨天___。", options: ["便宜", "可能", "说话", "去年"], answer: "便宜" },
    { sentence: "前边___的那个人就是我的汉语老师。", options: ["说话", "唱歌", "比", "姓"], answer: "说话" },
    { sentence: "你___不认识她。", options: ["可能", "便宜", "去年", "比"], answer: "可能" },
    { sentence: "她是___来的，不是今年来的。", options: ["去年", "可能", "右边", "便宜"], answer: "去年" },
    { sentence: "她___王，28岁。", options: ["姓", "叫", "是", "比"], answer: "姓" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [8, 4, 9] },
        { vocabId: 4, distractors: [5, 1, 10] },
        { vocabId: 5, distractors: [10, 4, 7] },
        { vocabId: 6, distractors: [11, 2, 3] },
        { vocabId: 7, distractors: [9, 10, 1] },
        { vocabId: 8, distractors: [1, 9, 7] },
        { vocabId: 9, distractors: [7, 8, 5] },
        { vocabId: 10, distractors: [5, 7, 9] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["他", "比", "我", "大", "三岁", "。"], answer: "他比我大三岁。", vi: "Anh ấy lớn hơn tôi ba tuổi." },
        { tokens: ["右边", "写字的", "那个人", "是", "我哥哥", "。"], answer: "右边写字的那个人是我哥哥。", vi: "Người đang viết chữ bên phải là anh tôi." },
        { tokens: ["苹果", "也", "比昨天", "便宜", "一些", "。"], answer: "苹果也比昨天便宜一些。", vi: "Táo cũng rẻ hơn hôm qua một chút." },
        { tokens: ["你", "可能", "不", "认识", "她", "。"], answer: "你可能不认识她。", vi: "Có lẽ bạn không quen cô ấy." },
        { tokens: ["她", "比", "我们老师", "小", "两岁", "。"], answer: "她比我们老师小两岁。", vi: "Cô ấy nhỏ hơn cô giáo chúng tôi hai tuổi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Quán karaoke", text: "A：王方，昨天和你一起{{c1}}{{c2}}人是谁？\nB：一个朋友。\nA：什么朋友？是不是{{c3}}朋友？\nB：不是不是，我同学{{c4}}的，昨天{{c5}}次见。" },
        { title: "Bài khóa 2 · Ký túc xá", text: "A：左边这个看报纸的{{c6}}{{c7}}是你姐姐吗？\nB：是，{{c8}}写字的那个人是我哥哥。\nA：你哥哥{{c9}}大？\nB：25岁，他{{c10}}我大三岁。" },
      ],
      answers: { c1: "唱歌", c2: "的", c3: "男", c4: "介绍", c5: "第一", c6: "女", c7: "孩子", c8: "右边", c9: "多", c10: "比" },
      bank: ["唱歌", "的", "男", "介绍", "第一", "女", "孩子", "右边", "多", "比", "左边", "几", "说话"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Cửa hàng", text: "A：今天的西瓜{{e1}}卖？\nB：三块五一斤。\nA：{{e2}}昨天{{e3}}。\nB：是，苹果也比昨天便宜{{e4}}。您来点儿吧。" },
        { title: "Bài khóa 4 · Cô giáo mới", text: "A：前边{{e5}}的那个人就是我的汉语老师。你{{e6}}不认识她。\nB：是新来的汉语老师吗？\nA：是{{e7}}来的，她{{e8}}王，28岁。\nB：她比我们老师{{e9}}两{{e10}}。" },
      ],
      answers: { e1: "怎么", e2: "比", e3: "便宜", e4: "一些", e5: "说话", e6: "可能", e7: "去年", e8: "姓", e9: "小", e10: "岁" },
      bank: ["怎么", "比", "便宜", "一些", "说话", "可能", "去年", "姓", "小", "岁", "大", "叫", "贵"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "哥哥比姐姐高。", vi: "Anh trai cao hơn chị gái.", keywords: ["anh trai", "cao hơn", "chị"] },
        { zh: "今天没有昨天热。", vi: "Hôm nay không nóng bằng hôm qua.", keywords: ["hôm nay", "nóng", "hôm qua"] },
        { zh: "西瓜比苹果贵两块钱。", vi: "Dưa hấu đắt hơn táo hai đồng.", keywords: ["dưa hấu", "táo", "hai đồng"] },
        { zh: "这是我妈妈做的饭。", vi: "Đây là cơm mẹ tôi nấu.", keywords: ["cơm", "mẹ", "nấu"] },
        { zh: "可能我明天不来上课了。", vi: "Có lẽ ngày mai tôi không đến lớp.", keywords: ["có lẽ", "ngày mai", "lớp"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Hôm nay nóng hơn hôm qua.", answers: ["今天比昨天热。"] },
        { vi: "Anh ấy lớn hơn tôi ba tuổi.", answers: ["他比我大三岁。"] },
        { vi: "Đây là chiếc xe đạp mới mua.", answers: ["这是新买的自行车。"] },
        { vi: "Có lẽ bạn không quen cô ấy.", answers: ["你可能不认识她。"] },
        { vi: "Dưa hấu hôm nay bán thế nào?", answers: ["今天的西瓜怎么卖？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "昨天和王方一起唱歌的人不是她的男朋友。", a: true },
        { q: "王方和那个人认识很长时间了。", a: false },
        { q: "左边看报纸的女孩子是B的姐姐。", a: true },
        { q: "B今年二十五岁。", a: false },
        { q: "今天的西瓜比昨天便宜。", a: true },
        { q: "今天的苹果比昨天贵。", a: false },
        { q: "王老师是去年来的。", a: true },
        { q: "王老师比B的老师大两岁。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "他比我大三岁。",
        "今天的西瓜怎么卖？",
        "比昨天便宜。",
        "你可能不认识她。",
        "她姓王，二十八岁。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "比较一下你和你的家人或朋友：谁大？谁高？ (So sánh bạn với người thân hoặc bạn bè: ai lớn tuổi hơn? Ai cao hơn?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 11 (định ngữ có 的, câu 比, 可能).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["比", "没有", "可能", "的"],
      minGrammar: 2,
      sample: "我有一个哥哥，他今年二十五岁，比我大三岁。哥哥比我高一点儿，但是没有我爸爸高。哥哥喜欢唱歌，我喜欢跳舞。昨天和哥哥一起唱歌的人是他的同学，你可能不认识他。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: câu chữ 比", points: 6,
      subtitle: "Chọn 比 hoặc 没有 cho mỗi chỗ trống.",
      grammarWord: "比 / 没有",
      options: ["比", "没有"],
      items: [
        { q: "哥哥___姐姐高。", answers: ["比"] },
        { q: "今天___昨天热，今天很凉快。", answers: ["没有"] },
        { q: "今天的西瓜___昨天便宜。", answers: ["比"] },
        { q: "西瓜___苹果便宜，西瓜很贵。", answers: ["没有"] },
        { q: "他___我大三岁。", answers: ["比"] },
        { q: "她___我们老师小两岁。", answers: ["比"] },
        { q: "我___哥哥高，哥哥一米八。", answers: ["没有"] },
        { q: "今天___昨天热得多。", answers: ["比"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: mức chênh lệch trong câu 比", points: 6,
      subtitle: "Chọn mức chênh lệch phù hợp (có câu nhiều đáp án).",
      grammarWord: "一点儿 / 一些 / 得多 / 两岁",
      options: ["一点儿", "一些", "得多", "两岁"],
      items: [
        { q: "我的学习比他好___。", answers: ["一点儿", "一些"] },
        { q: "苹果也比昨天便宜___。", answers: ["一些", "一点儿"] },
        { q: "今天比昨天热___。", answers: ["得多", "一点儿", "一些"] },
        { q: "她比我们老师小___。", answers: ["两岁"] },
        { q: "北京的冬天比这儿冷___。", answers: ["得多", "一点儿", "一些"] },
        { q: "哥哥比我大___，他二十三岁，我二十一岁。", answers: ["两岁"] },
        { q: "这件衣服比那件贵___。", answers: ["一点儿", "一些", "得多"] },
        { q: "坐飞机比坐火车快___。", answers: ["得多", "一点儿", "一些"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 可能", points: 5,
      subtitle: "Điền trợ động từ chỉ phỏng đoán vào chỗ trống.",
      grammarWord: "可能",
      items: [
        { q: "他___早就知道这件事情了。", answers: ["可能"] },
        { q: "___我明天不来上课了。", answers: ["可能"] },
        { q: "你___不认识她。", answers: ["可能"] },
        { q: "天这么黑，___要下雨了。", answers: ["可能"] },
        { q: "他今天没来，___生病了。", answers: ["可能"] },
        { q: "昨天的西瓜___四块钱一斤。", answers: ["可能"] },
        { q: "这么晚了，商店___关门了。", answers: ["可能"] },
        { q: "她___是新来的老师。", answers: ["可能"] },
      ],
    },
  ],
};
