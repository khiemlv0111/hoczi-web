import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第14课 你看过那个电影吗？ (Cậu đã từng xem phim đó chưa?)
// Nguồn: Giáo trình chuẩn HSK2, trang 119–126 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson14: Lesson = {
  level: "hsk2",
  no: 14,
  slug: "bai-14",
  zh: "你看过那个电影吗？",
  pinyin: "Nǐ kànguo nàge diànyǐng ma?",
  vi: "Cậu đã từng xem phim đó chưa?",
  en: "Have you seen that movie?",
  topic: "经历 · Trải nghiệm, du lịch, mua sắm",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 7 từ mới: 有意思、但是、虽然、次、玩儿、晴、百.",
    "Hiểu và dùng được 3 điểm ngữ pháp: trợ từ động thái 过 (trải nghiệm), cấu trúc 虽然……，但是……, bổ ngữ chỉ tần suất 次.",
    "Đọc hiểu 4 đoạn hội thoại về rủ xem phim, đi Trung Quốc, thời tiết ngày mai, mua áo.",
    "Kể về trải nghiệm đã từng có và số lần (去过三次); nói ý đối lập (虽然……但是……).",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：电影院、等、晴、一百、打电话、玩儿",
      vi: "Chọn hình tương ứng với các từ: 电影院 (rạp chiếu phim), 等 (đợi), 晴 (nắng), 一百 (một trăm), 打电话 (gọi điện), 玩儿 (chơi).",
    },
    {
      zh: "看下面的图片，用汉语说出它们的名字：电视、电影、电话、电脑",
      vi: "Xem hình và nói tên các vật bằng tiếng Trung: ti vi, phim, điện thoại, máy tính.",
    },
  ],

  vocab: [
    { id: 1, han: "有意思", py: "yǒu yìsi", pos: "tt.", meaning: "thú vị", example: "没看过，听说很有意思。", exampleVi: "Chưa, nghe nói đây là bộ phim rất thú vị." },
    { id: 2, han: "但是", py: "dànshì", pos: "liên.", meaning: "nhưng", example: "可以，但是我女朋友也想去。", exampleVi: "Được, nhưng bạn gái của mình cũng muốn đi nữa." },
    { id: 3, han: "虽然", py: "suīrán", pos: "liên.", meaning: "mặc dù, tuy", example: "我虽然去过好几次，但是还想再去玩儿玩儿。", exampleVi: "Dù đã từng đi nhiều lần rồi nhưng em vẫn muốn đến đó chơi nữa." },
    { id: 4, han: "次", py: "cì", pos: "lượng.", meaning: "lần", example: "买过一次，这儿的东西还可以。", exampleVi: "Đã mua một lần rồi, đồ ở đây cũng được." },
    { id: 5, han: "玩儿", py: "wánr", pos: "đgt.", meaning: "chơi, chơi đùa", example: "我还想再去玩儿玩儿。", exampleVi: "Em vẫn muốn đến đó chơi nữa." },
    { id: 6, han: "晴", py: "qíng", pos: "tt.", meaning: "có nắng, nắng ráo", example: "虽然是晴天，但是很冷。", exampleVi: "Dù là ngày nắng ráo nhưng trời rất lạnh đấy." },
    { id: 7, han: "百", py: "bǎi", pos: "số.", meaning: "một trăm, trăm", example: "两百块还可以，喜欢就买吧。", exampleVi: "Hai trăm đồng cũng được mà, nếu em thích thì mua đi." },
  ],

  text: {
    title: "课文 你看过那个电影吗？",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "A：你看过那个电影没有？\nB：没看过，听说很有意思。\nA：那我们下个星期一起去看吧？\nB：可以，但是我女朋友也想去。",
        vi: "A: Cậu đã từng xem phim đó chưa?\nB: Chưa, nghe nói đây là bộ phim rất thú vị.\nA: Vậy tuần sau chúng ta cùng đi xem nhé?\nB: Được, nhưng bạn gái của mình cũng muốn đi nữa.",
        questions: ["他看过那个电影吗？"],
      },
      {
        heading: "课文二 · 在办公室 (Trong văn phòng)",
        zh: "A：听说你去过中国，还想去吗？\nB：我虽然去过好几次，但是还想再去玩儿玩儿。\nA：那我们一起去吧。\nB：好啊，到时候我给你打电话。",
        vi: "A: Nghe nói em đã từng đi Trung Quốc. Em có muốn đi nữa không?\nB: Dù đã từng đi nhiều lần rồi nhưng em vẫn muốn đến đó chơi nữa.\nA: Vậy chúng ta cùng đi nhé.\nB: Được rồi, đến lúc ấy em sẽ gọi điện cho anh.",
        questions: ["她去过中国吗？还想去吗？"],
      },
      {
        heading: "课文三 · 在房间 (Trong phòng)",
        zh: "A：明天天气怎么样？\nB：虽然是晴天，但是很冷。\nA：那还能去跑步吗？\nB：可以，但是你自己去吧，我还有很多事情要做。",
        vi: "A: Ngày mai thời tiết thế nào?\nB: Dù là ngày nắng ráo nhưng trời rất lạnh đấy.\nA: Vậy thì ra ngoài chạy bộ có được không?\nB: Được, nhưng anh đi một mình nhé, em còn rất nhiều việc phải làm.",
        questions: ["明天天气怎么样？", "她明天为什么不去跑步？"],
      },
      {
        heading: "课文四 · 在商店 (Ở cửa hàng)",
        zh: "A：你在这个商店买过东西没有？\nB：买过一次，这儿的东西还可以，就是不便宜。\nA：我喜欢这件衣服，但是觉得有点儿贵。\nB：两百块还可以，喜欢就买吧。",
        vi: "A: Anh đã từng mua đồ ở cửa hàng này chưa?\nB: Đã mua một lần rồi, đồ ở đây cũng được nhưng giá không rẻ đâu.\nA: Em thích chiếc áo này nhưng thấy nó hơi đắt.\nB: Hai trăm đồng cũng được mà, nếu em thích thì mua đi.",
        questions: ["他在这个商店买过几次东西？", "那件衣服多少钱？"],
      },
    ],
    notes: [
      "好几次: nhiều lần (好 + số từ + lượng từ nhấn mạnh số lượng nhiều).",
      "到时候: đến lúc đó.",
      "喜欢就买吧: thích thì mua đi.",
    ],
  },

  grammar: [
    {
      word: "动词 + 过",
      title: "Trợ từ động thái 过 (đã từng)",
      usages: [
        {
          label: "Khẳng định",
          explain: "“Động từ + 过” chỉ một trải nghiệm từng có hoặc hành động từng xảy ra trong quá khứ nhưng không kéo dài đến hiện tại.",
          examples: ["他们来过我家。", "我看过那个电影。", "我去过中国。"],
        },
        {
          label: "Phủ định: 没(有) + động từ + 过",
          explain: "Thêm 没(有) vào trước động từ.",
          examples: ["他们没（有）来过我家。", "我没（有）看过那个电影。", "我没（有）去过中国。"],
        },
        {
          label: "Nghi vấn: …… + 没有？",
          explain: "Thêm 没有 vào cuối câu.",
          examples: ["他们来过你家没有？", "你看过那个电影没有？", "你去过中国没有？"],
        },
      ],
    },
    {
      word: "虽然……，但是……",
      title: "Cấu trúc 虽然……，但是…… (tuy… nhưng…)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Nối hai mệnh đề để thể hiện quan hệ đối lập.",
          examples: ["虽然外面很冷，但是房间里很热。", "虽然汉字很难，但是我很喜欢写汉字。", "虽然是晴天，但是很冷。"],
        },
      ],
    },
    {
      word: "动词 + 过 + 数词 + 次",
      title: "Bổ ngữ chỉ tần suất 次",
      usages: [
        {
          label: "Cách dùng",
          explain: "次 đứng sau động từ để chỉ số lần xảy ra hay thực hiện hành động.",
          examples: ["我们看过三次电影。", "他们坐过一次飞机。", "我（在这个商店）买过一次（东西）。"],
        },
        {
          label: "Tân ngữ chỉ nơi chốn",
          explain: "Khi tân ngữ là danh từ chỉ nơi chốn, bổ ngữ tần suất có thể đứng trước hoặc sau tân ngữ.",
          examples: ["我们去过三次北京。", "我们去过北京三次。", "他们来过中国一次。", "我（上星期）去过一次医院。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "没看过，听说很___。", options: ["有意思", "但是", "虽然", "晴"], answer: "有意思" },
    { sentence: "可以，___我女朋友也想去。", options: ["但是", "虽然", "因为", "所以"], answer: "但是" },
    { sentence: "我___去过好几次，但是还想再去玩儿玩儿。", options: ["虽然", "但是", "所以", "可能"], answer: "虽然" },
    { sentence: "买过一___，这儿的东西还可以。", options: ["次", "个", "件", "本"], answer: "次" },
    { sentence: "我还想再去___玩儿。", options: ["玩儿", "晴", "次", "百"], answer: "玩儿" },
    { sentence: "虽然是___天，但是很冷。", options: ["晴", "雪", "次", "百"], answer: "晴" },
    { sentence: "两___块还可以，喜欢就买吧。", options: ["百", "次", "千", "米"], answer: "百" },
    { sentence: "你看___那个电影没有？", options: ["过", "着", "得", "的"], answer: "过" },
    { sentence: "我们去过北京三___。", options: ["次", "个", "年", "块"], answer: "次" },
    { sentence: "虽然外面很冷，___房间里很热。", options: ["但是", "虽然", "因为", "就"], answer: "但是" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 3, 5] },
        { vocabId: 2, distractors: [3, 1, 6] },
        { vocabId: 3, distractors: [2, 5, 7] },
        { vocabId: 4, distractors: [7, 6, 5] },
        { vocabId: 5, distractors: [1, 4, 6] },
        { vocabId: 6, distractors: [4, 7, 3] },
        { vocabId: 7, distractors: [4, 6, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["你", "看过", "那个电影", "没有", "？"], answer: "你看过那个电影没有？", vi: "Bạn đã xem bộ phim đó chưa?" },
        { tokens: ["虽然", "是晴天", "，", "但是", "很冷", "。"], answer: "虽然是晴天，但是很冷。", vi: "Tuy trời nắng nhưng rất lạnh." },
        { tokens: ["我", "去过", "好几次", "，", "还想", "再去玩儿玩儿", "。"], answer: "我去过好几次，还想再去玩儿玩儿。", vi: "Tôi đã đi mấy lần rồi, vẫn muốn đi chơi nữa." },
        { tokens: ["我们", "去过", "北京", "三次", "。"], answer: "我们去过北京三次。", vi: "Chúng tôi đã đến Bắc Kinh ba lần." },
        { tokens: ["我", "喜欢", "这件衣服", "，", "但是", "觉得", "有点儿贵", "。"], answer: "我喜欢这件衣服，但是觉得有点儿贵。", vi: "Tôi thích chiếc áo này nhưng thấy hơi đắt." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Rủ xem phim", text: "A：你看{{c1}}那个电影{{c2}}？\nB：没看过，听说很{{c3}}。\nA：那我们下个星期一起去看吧？\nB：可以，{{c4}}我女朋友也想去。" },
        { title: "Bài khóa 2 · Đi Trung Quốc", text: "A：听说你去{{c5}}中国，还想去吗？\nB：我{{c6}}去过好几{{c7}}，但是还想{{c8}}去{{c9}}。\nA：那我们一起去吧。\nB：好啊，{{c10}}我给你打电话。" },
      ],
      answers: { c1: "过", c2: "没有", c3: "有意思", c4: "但是", c5: "过", c6: "虽然", c7: "次", c8: "再", c9: "玩儿玩儿", c10: "到时候" },
      bank: ["过", "没有", "有意思", "但是", "过", "虽然", "次", "再", "玩儿玩儿", "到时候", "着", "所以"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Thời tiết", text: "A：明天天气怎么样？\nB：{{e1}}是{{e2}}天，{{e3}}很冷。\nA：那还能去{{e4}}吗？\nB：可以，但是你{{e5}}去吧，我还有很多{{e6}}要做。" },
        { title: "Bài khóa 4 · Mua áo", text: "A：你在这个商店买过东西没有？\nB：买过一{{e7}}，这儿的东西还可以，就是不{{e8}}。\nA：我喜欢这件衣服，但是觉得{{e9}}贵。\nB：两{{e10}}块还可以，喜欢就买吧。" },
      ],
      answers: { e1: "虽然", e2: "晴", e3: "但是", e4: "跑步", e5: "自己", e6: "事情", e7: "次", e8: "便宜", e9: "有点儿", e10: "百" },
      bank: ["虽然", "晴", "但是", "跑步", "自己", "事情", "次", "便宜", "有点儿", "百", "千", "雪", "过"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "他们来过我家。", vi: "Họ đã từng đến nhà tôi.", keywords: ["đã từng", "nhà tôi"] },
        { zh: "我没有看过那个电影。", vi: "Tôi chưa từng xem bộ phim đó.", keywords: ["chưa", "phim"] },
        { zh: "虽然汉字很难，但是我很喜欢写汉字。", vi: "Tuy chữ Hán rất khó nhưng tôi rất thích viết chữ Hán.", keywords: ["chữ hán", "khó", "thích"] },
        { zh: "他们坐过一次飞机。", vi: "Họ đã từng đi máy bay một lần.", keywords: ["máy bay", "một lần"] },
        { zh: "我上星期去过一次医院。", vi: "Tuần trước tôi đã đến bệnh viện một lần.", keywords: ["tuần trước", "bệnh viện", "một lần"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Bạn đã từng đến Trung Quốc chưa?", answers: ["你去过中国没有？", "你去过中国吗？"] },
        { vi: "Tôi chưa từng đến Bắc Kinh.", answers: ["我没去过北京。", "我没有去过北京。"] },
        { vi: "Tuy bên ngoài rất lạnh nhưng trong phòng rất nóng.", answers: ["虽然外面很冷，但是房间里很热。", "虽然外边很冷，但是房间里很热。"] },
        { vi: "Chúng tôi đã xem phim ba lần.", answers: ["我们看过三次电影。"] },
        { vi: "Nghe nói bộ phim đó rất thú vị.", answers: ["听说那个电影很有意思。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "B没看过那个电影。", a: true },
        { q: "B的女朋友不想去看电影。", a: false },
        { q: "B去过好几次中国。", a: true },
        { q: "B不想再去中国了。", a: false },
        { q: "明天是晴天，但是很冷。", a: true },
        { q: "B明天和A一起去跑步。", a: false },
        { q: "B在这个商店买过一次东西。", a: true },
        { q: "那件衣服三百块钱。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你看过那个电影吗？",
        "听说很有意思。",
        "虽然是晴天，但是很冷。",
        "买过一次。",
        "喜欢就买吧。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "你去过哪些地方？去过几次？觉得怎么样？ (Bạn đã từng đến những nơi nào? Mấy lần? Thấy thế nào?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 14 (过, 虽然……但是……, 次).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["过", "虽然", "但是", "次"],
      minGrammar: 2,
      sample: "我去过北京三次，也去过上海一次。北京虽然冬天很冷，但是很有意思，有很多好玩儿的地方。我还没去过南方，听说南方的夏天很热。明年我想和朋友一起去南方玩儿玩儿。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: trợ từ 过", points: 6,
      subtitle: "Chọn 过 (đã từng) hoặc 着 (đang, trạng thái).",
      grammarWord: "过 / 着",
      options: ["过", "着"],
      items: [
        { q: "我看___那个电影。", answers: ["过"] },
        { q: "他们来___我家。", answers: ["过"] },
        { q: "门开___呢，请进。", answers: ["着"] },
        { q: "你去___中国没有？", answers: ["过"] },
        { q: "她手里拿___铅笔。", answers: ["着"] },
        { q: "我在这个商店买___一次东西。", answers: ["过"] },
        { q: "他穿___红色的衣服。", answers: ["着"] },
        { q: "我没坐___飞机。", answers: ["过"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 虽然……，但是……", points: 6,
      subtitle: "Chọn 虽然 hoặc 但是 cho mỗi chỗ trống.",
      grammarWord: "虽然……但是……",
      options: ["虽然", "但是"],
      items: [
        { q: "___外面很冷，但是房间里很热。", answers: ["虽然"] },
        { q: "虽然汉字很难，___我很喜欢写汉字。", answers: ["但是"] },
        { q: "___是晴天，但是很冷。", answers: ["虽然"] },
        { q: "我虽然去过好几次，___还想再去玩儿玩儿。", answers: ["但是"] },
        { q: "这儿的东西___不便宜，但是很好。", answers: ["虽然"] },
        { q: "我喜欢这件衣服，___觉得有点儿贵。", answers: ["但是"] },
        { q: "___他很忙，但是每天都去跑步。", answers: ["虽然"] },
        { q: "虽然家离公司很远，___他每天都来得很早。", answers: ["但是"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: bổ ngữ tần suất 次", points: 5,
      subtitle: "Chọn số lần thích hợp.",
      grammarWord: "次",
      options: ["一次", "两次", "三次"],
      items: [
        { q: "我们看过___电影。（3）", answers: ["三次"] },
        { q: "他们坐过___飞机。（1）", answers: ["一次"] },
        { q: "我在这个商店买过___东西。（1）", answers: ["一次"] },
        { q: "我们去过北京___。（3）", answers: ["三次"] },
        { q: "他们来过中国___。（1）", answers: ["一次"] },
        { q: "我上星期去过___医院。（2）", answers: ["两次"] },
        { q: "这个电影我看过___。（2）", answers: ["两次"] },
        { q: "我去过___上海。（1）", answers: ["一次"] },
      ],
    },
  ],
};
