import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第3课 左边那个红色的是我的。 (Ly màu đỏ ở bên trái là của tôi.)
// Nguồn: Giáo trình chuẩn HSK2, trang 31–38 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson03: Lesson = {
  level: "hsk2",
  no: 3,
  slug: "bai-3",
  zh: "左边那个红色的是我的。",
  pinyin: "Zuǒbian nàge hóngsè de shì wǒ de.",
  vi: "Ly màu đỏ ở bên trái là của tôi.",
  en: "The red one on the left is mine.",
  topic: "物品与位置 · Đồ vật, màu sắc, vị trí",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 14 từ mới: 手表、千、报纸、送、一下、牛奶、房间、丈夫、旁边、真、粉色(粉)、颜色、左边、红色(红).",
    "Hiểu và dùng được 3 điểm ngữ pháp: cụm từ có 的 (我的、昨天买的), cách dùng 一下, phó từ ngữ khí 真.",
    "Đọc hiểu 4 đoạn hội thoại về đồng hồ của bố, báo và sữa buổi sáng, phòng của con gái, tìm cốc ở văn phòng.",
    "Hỏi – đáp đồ vật là của ai, ở vị trí nào, màu gì.",
    "Ngữ âm: trọng âm từ bốn âm tiết; chữ Hán: chữ 夫, bộ 木 và bộ 刂.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：手表、报纸、牛奶、房间、丈夫、红色",
      vi: "Chọn hình tương ứng với các từ: 手表 (đồng hồ đeo tay), 报纸 (báo), 牛奶 (sữa bò), 房间 (phòng), 丈夫 (chồng), 红色 (màu đỏ).",
    },
    {
      zh: "看下面的地图，说说这些地方的位置：前边、后边、左边、右边、中间、旁边",
      vi: "Xem bản đồ và cho biết vị trí các nơi: phía trước, phía sau, bên trái, bên phải, chính giữa, bên cạnh.",
    },
  ],

  vocab: [
    { id: 1, han: "手表", py: "shǒubiǎo", pos: "dt.", meaning: "đồng hồ đeo tay", example: "这块手表是你的吗？", exampleVi: "Chiếc đồng hồ đeo tay này là của anh phải không?" },
    { id: 2, han: "千", py: "qiān", pos: "số.", meaning: "nghìn", example: "三千多块。", exampleVi: "Hơn 3.000 đồng." },
    { id: 3, han: "报纸", py: "bàozhǐ", pos: "dt.", meaning: "báo", example: "这是今天早上的报纸吗？", exampleVi: "Đây là báo ra sáng nay phải không?" },
    { id: 4, han: "送", py: "sòng", pos: "đgt.", meaning: "giao, đưa; tặng", example: "你听，是不是送报纸的来了？", exampleVi: "Em nghe thử xem, có phải người giao báo đến không?" },
    { id: 5, han: "一下", py: "yíxià", pos: "sl.", meaning: "(sau động từ) một chút, một lát, thử", example: "我看一下。", exampleVi: "Để em xem nào." },
    { id: 6, han: "牛奶", py: "niúnǎi", pos: "dt.", meaning: "sữa bò", example: "不是，是送牛奶的。", exampleVi: "Không phải đâu, đó là người giao sữa bò." },
    { id: 7, han: "房间", py: "fángjiān", pos: "dt.", meaning: "phòng", example: "这是谁的房间？", exampleVi: "Đây là phòng của ai vậy?" },
    { id: 8, han: "丈夫", py: "zhàngfu", pos: "dt.", meaning: "chồng", example: "这是我和我丈夫的。", exampleVi: "Đó là phòng của vợ chồng tôi." },
    { id: 9, han: "旁边", py: "pángbiān", pos: "dt.", meaning: "bên cạnh", example: "旁边那个小的房间是我女儿的。", exampleVi: "Còn phòng nhỏ bên cạnh là của con gái tôi." },
    { id: 10, han: "真", py: "zhēn", pos: "p.", meaning: "thật, quả là", example: "你女儿的房间真漂亮！", exampleVi: "Phòng của con gái chị đẹp thật!" },
    { id: 11, han: "粉色", py: "fěnsè", pos: "dt.", meaning: "màu hồng (粉: có màu hồng)", example: "粉色是我女儿最喜欢的颜色。", exampleVi: "Con bé thích màu hồng nhất." },
    { id: 12, han: "颜色", py: "yánsè", pos: "dt.", meaning: "màu, màu sắc", example: "你最喜欢什么颜色？", exampleVi: "Bạn thích màu gì nhất?" },
    { id: 13, han: "左边", py: "zuǒbian", pos: "dt.", meaning: "bên trái", example: "左边那个红色的是我的。", exampleVi: "Ly màu đỏ ở bên trái là của tôi." },
    { id: 14, han: "红色", py: "hóngsè", pos: "dt.", meaning: "màu đỏ (红: có màu đỏ)", example: "这个红色的杯子是你的吗？", exampleVi: "Cái cốc màu đỏ này là của bạn à?" },
  ],

  text: {
    title: "课文 左边那个红色的是我的。",
    paragraphs: [
      {
        heading: "课文一 · 在房间 (Trong phòng)",
        zh: "A：这块手表是你的吗？\nB：不是我的。是我爸爸的。\nA：多少钱买的？\nB：三千多块。",
        vi: "A: Chiếc đồng hồ đeo tay này là của anh phải không?\nB: Không phải, đồng hồ đó là của cha tôi.\nA: Mua hết bao nhiêu tiền vậy?\nB: Hơn 3.000 đồng.",
        questions: ["爸爸的手表多少钱？"],
      },
      {
        heading: "课文二 · 在家里 (Ở nhà)",
        zh: "A：这是今天早上的报纸吗？\nB：不是，是昨天的。\nA：你听，是不是送报纸的来了？\nB：我看一下。不是，是送牛奶的。",
        vi: "A: Đây là báo ra sáng nay phải không?\nB: Không phải. Báo đó ra hôm qua.\nA: Em nghe thử xem, có phải người giao báo đến không?\nB: Để em xem nào. Không phải đâu, đó là người giao sữa bò.",
        questions: ["送报纸的来了吗？"],
      },
      {
        heading: "课文三 · 在家里 (Ở nhà)",
        zh: "A：这是谁的房间？\nB：这是我和我丈夫的，旁边那个小的房间是我女儿的。\nA：你女儿的房间真漂亮！都是粉色的。\nB：是啊，粉色是我女儿最喜欢的颜色。",
        vi: "A: Đây là phòng của ai vậy?\nB: Đó là phòng của vợ chồng tôi, còn phòng nhỏ bên cạnh là của con gái tôi.\nA: Phòng của con gái chị đẹp thật! Toàn là màu hồng.\nB: Đúng vậy, con bé thích màu hồng nhất.",
        questions: ["旁边那个小的房间是谁的？", "她女儿的房间怎么样？"],
      },
      {
        heading: "课文四 · 在办公室 (Trong văn phòng)",
        zh: "A：你看见我的杯子了吗？\nB：这里有几个杯子，哪个是你的？\nA：左边那个红色的是我的。\nB：给你。",
        vi: "A: Anh có thấy cái ly của tôi không?\nB: Chỗ này có mấy cái ly, cái nào là của cô vậy?\nA: Ly màu đỏ ở bên trái là của tôi.\nB: Ly của cô đây.",
        questions: ["哪个杯子是她的？"],
      },
    ],
    notes: [
      "块 (kuài): lượng từ cho đồng hồ, miếng…; cũng là đơn vị tiền (khẩu ngữ) = 元.",
      "送报纸的 / 送牛奶的: người giao báo / người giao sữa (cụm 的 chỉ người làm nghề).",
      "Ngữ âm – từ bốn âm tiết không có thanh nhẹ: trọng âm thường rơi vào âm tiết thứ tư (公共汽车、高速公路、名胜古迹、爱不释手).",
      "Chữ Hán – 夫: nghĩa gốc là chàng trai đã trưởng thành, nay chỉ người đàn ông trong gia đình, chồng. Bộ 木: liên quan đến thực vật (杯、椅); bộ 刂 (立刀旁): liên quan đến dao (别、到).",
    ],
  },

  grammar: [
    {
      word: "……的",
      title: "Cụm từ có 的",
      usages: [
        {
          label: "Cách dùng",
          explain: "Đại từ, tính từ hay động từ kết hợp với 的 tạo thành cụm có tính chất như danh từ, trong đó danh từ trung tâm được lược bỏ.",
          examples: ["这本书不是我的。（=我的书）", "这个杯子是昨天买的。（=昨天买的杯子）", "这块手表是你的吗？（=你的手表）", "左边那个红色的是我的。"],
        },
      ],
    },
    {
      word: "动词 + 一下",
      title: "Cách dùng 一下",
      usages: [
        {
          label: "Cách dùng",
          explain: "一下 đứng sau động từ diễn tả hành động xảy ra trong thời gian ngắn (hoặc thử làm), tương đương lặp lại động từ (xem bài 8). Có thể lược bỏ tân ngữ.",
          examples: ["我看一下。", "你休息一下吧。", "我问一下老师。"],
        },
      ],
    },
    {
      word: "真 + 形容词",
      title: "Phó từ ngữ khí 真",
      usages: [
        {
          label: "Cách dùng",
          explain: "“真 + tính từ” thể hiện cảm xúc, cảm thán; 真 có nghĩa là thật, quả là.",
          examples: ["你真好！", "今天天气真好！", "你女儿的房间真漂亮！"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "这块___是你的吗？", options: ["手表", "报纸", "牛奶", "房间"], answer: "手表" },
    { sentence: "三___多块。", options: ["千", "米", "块", "个"], answer: "千" },
    { sentence: "这是今天早上的___吗？", options: ["报纸", "手表", "颜色", "丈夫"], answer: "报纸" },
    { sentence: "你听，是不是___报纸的来了？", options: ["送", "看", "买", "听"], answer: "送" },
    { sentence: "我看___。不是，是送牛奶的。", options: ["一下", "一起", "一点儿", "真"], answer: "一下" },
    { sentence: "这是我和我___的房间。", options: ["丈夫", "旁边", "颜色", "报纸"], answer: "丈夫" },
    { sentence: "___那个小的房间是我女儿的。", options: ["旁边", "丈夫", "颜色", "手表"], answer: "旁边" },
    { sentence: "你女儿的房间___漂亮！", options: ["真", "一下", "最", "也"], answer: "真" },
    { sentence: "粉色是我女儿最喜欢的___。", options: ["颜色", "房间", "报纸", "旁边"], answer: "颜色" },
    { sentence: "___那个红色的是我的。", options: ["左边", "丈夫", "颜色", "牛奶"], answer: "左边" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [3, 6, 7] },
        { vocabId: 3, distractors: [1, 12, 9] },
        { vocabId: 6, distractors: [3, 14, 11] },
        { vocabId: 7, distractors: [9, 8, 13] },
        { vocabId: 8, distractors: [7, 9, 1] },
        { vocabId: 9, distractors: [13, 7, 12] },
        { vocabId: 12, distractors: [11, 14, 9] },
        { vocabId: 13, distractors: [9, 14, 12] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 6, 7, 8, 9, 12, 13],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["左边", "那个", "红色的", "是", "我的", "。"], answer: "左边那个红色的是我的。", vi: "Cái màu đỏ bên trái là của tôi." },
        { tokens: ["这块", "手表", "是", "你的", "吗", "？"], answer: "这块手表是你的吗？", vi: "Chiếc đồng hồ này là của bạn à?" },
        { tokens: ["这个杯子", "是", "昨天", "买的", "。"], answer: "这个杯子是昨天买的。", vi: "Cái cốc này mua hôm qua." },
        { tokens: ["你女儿的", "房间", "真", "漂亮", "！"], answer: "你女儿的房间真漂亮！", vi: "Phòng con gái bạn đẹp thật!" },
        { tokens: ["粉色", "是", "我女儿", "最喜欢的", "颜色", "。"], answer: "粉色是我女儿最喜欢的颜色。", vi: "Màu hồng là màu con gái tôi thích nhất." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Đồng hồ của bố", text: "A：这块{{c1}}是你{{c2}}吗？\nB：不是我的。是我爸爸的。\nA：{{c3}}钱买的？\nB：三{{c4}}多块。" },
        { title: "Bài khóa 2 · Báo và sữa", text: "A：这是今天{{c5}}的{{c6}}吗？\nB：不是，是{{c7}}的。\nA：你听，是不是{{c8}}报纸的来了？\nB：我看{{c9}}。不是，是送{{c10}}的。" },
      ],
      answers: { c1: "手表", c2: "的", c3: "多少", c4: "千", c5: "早上", c6: "报纸", c7: "昨天", c8: "送", c9: "一下", c10: "牛奶" },
      bank: ["手表", "的", "多少", "千", "早上", "报纸", "昨天", "送", "一下", "牛奶", "真", "几", "颜色"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Phòng con gái", text: "A：这是谁的{{e1}}？\nB：这是我和我{{e2}}的，{{e3}}那个小的房间是我女儿的。\nA：你女儿的房间{{e4}}漂亮！都是{{e5}}的。\nB：是啊，粉色是我女儿最喜欢的{{e6}}。" },
        { title: "Bài khóa 4 · Tìm cốc", text: "A：你{{e7}}我的杯子了吗？\nB：这里有几个杯子，{{e8}}是你的？\nA：{{e9}}那个{{e10}}的是我的。\nB：给你。" },
      ],
      answers: { e1: "房间", e2: "丈夫", e3: "旁边", e4: "真", e5: "粉色", e6: "颜色", e7: "看见", e8: "哪个", e9: "左边", e10: "红色" },
      bank: ["房间", "丈夫", "旁边", "真", "粉色", "颜色", "看见", "哪个", "左边", "红色", "一下", "手表", "右边"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "这本书不是我的。", vi: "Quyển sách này không phải của tôi.", keywords: ["quyển sách", "không phải"] },
        { zh: "你休息一下吧。", vi: "Bạn nghỉ ngơi một chút đi.", keywords: ["nghỉ", "một chút"] },
        { zh: "今天天气真好！", vi: "Hôm nay thời tiết đẹp thật!", keywords: ["hôm nay", "thời tiết", "thật"] },
        { zh: "我问一下老师。", vi: "Tôi hỏi thầy giáo một chút.", keywords: ["hỏi", "thầy"] },
        { zh: "这里有几个杯子，哪个是你的？", vi: "Ở đây có mấy cái cốc, cái nào là của bạn?", keywords: ["mấy", "cốc", "của bạn"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Bạn tốt thật!", answers: ["你真好！"] },
        { vi: "Cái cốc này là mua hôm qua.", answers: ["这个杯子是昨天买的。"] },
        { vi: "Chiếc đồng hồ này là của bố tôi.", answers: ["这块手表是我爸爸的。", "这块手表是我爸爸的手表。"] },
        { vi: "Để tôi xem một chút.", answers: ["我看一下。", "我看一下吧。", "让我看一下。"] },
        { vi: "Bạn thích màu gì nhất?", answers: ["你最喜欢什么颜色？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "那块手表是爸爸的。", a: true },
        { q: "那块手表三百多块。", a: false },
        { q: "那是昨天的报纸。", a: true },
        { q: "送报纸的来了。", a: false },
        { q: "旁边那个小的房间是她女儿的。", a: true },
        { q: "她女儿最喜欢红色。", a: false },
        { q: "左边那个红色的杯子是她的。", a: true },
        { q: "这里只有一个杯子。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "左边那个红色的是我的。",
        "这块手表是你的吗？",
        "我看一下。",
        "你女儿的房间真漂亮！",
        "你看见我的杯子了吗？",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "介绍一下你的房间：房间里有什么？是什么颜色的？ (Giới thiệu căn phòng của bạn: trong phòng có gì? Màu gì?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 3 (cụm 的, 一下, 真).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["的", "一下", "真"],
      minGrammar: 2,
      sample: "我来介绍一下我的房间。我的房间不大，但是真漂亮。房间里有一张桌子和两个椅子，左边的椅子是红色的，右边的是粉色的。桌子上有一个杯子和一块手表，手表是我爸爸送的。粉色是我最喜欢的颜色。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: cụm từ có 的", points: 6,
      subtitle: "Chọn cụm 的 thích hợp.",
      grammarWord: "……的",
      options: ["我的", "你的", "昨天买的", "红色的", "我女儿的", "送牛奶的"],
      items: [
        { q: "这本书不是___。", answers: ["我的", "你的"] },
        { q: "这个杯子是___。", answers: ["昨天买的"] },
        { q: "这块手表是___吗？", answers: ["你的"] },
        { q: "左边那个___是我的。", answers: ["红色的"] },
        { q: "旁边那个小的房间是___。", answers: ["我女儿的"] },
        { q: "不是送报纸的，是___。", answers: ["送牛奶的"] },
        { q: "A：这是谁的杯子？B：是___。", answers: ["我的", "你的", "我女儿的"] },
        { q: "我不喜欢白色的，我喜欢___。", answers: ["红色的"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 一下", points: 6,
      subtitle: "Chọn động từ thích hợp đi với 一下.",
      grammarWord: "动词 + 一下",
      options: ["看", "休息", "问", "介绍", "等", "听"],
      items: [
        { q: "我___一下。不是，是送牛奶的。", answers: ["看"] },
        { q: "你累了，___一下吧。", answers: ["休息"] },
        { q: "我___一下老师。", answers: ["问"] },
        { q: "我来___一下，这是我的朋友大卫。", answers: ["介绍"] },
        { q: "请你___一下，他马上就来。", answers: ["等"] },
        { q: "你___一下，是不是有人来了？", answers: ["听"] },
        { q: "这是我的房间，你___一下吧。", answers: ["看"] },
        { q: "我不知道，你去___一下王老师吧。", answers: ["问"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 真 / 最", points: 5,
      subtitle: "Chọn 真 (cảm thán) hoặc 最 (nhất).",
      grammarWord: "真 / 最",
      options: ["真", "最"],
      items: [
        { q: "你___好！", answers: ["真"] },
        { q: "今天天气___好！", answers: ["真"] },
        { q: "你女儿的房间___漂亮！", answers: ["真"] },
        { q: "粉色是我女儿___喜欢的颜色。", answers: ["最"] },
        { q: "我___喜欢踢足球。", answers: ["最"] },
        { q: "哇，这块手表___贵！", answers: ["真"] },
        { q: "我们班大卫的汉语___好。", answers: ["最"] },
        { q: "这个杯子___漂亮，在哪儿买的？", answers: ["真"] },
      ],
    },
  ],
};
