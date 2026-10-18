import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第15课 新年就要到了。 (Năm mới sắp đến rồi.)
// Nguồn: Giáo trình chuẩn HSK2, trang 127–134 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson15: Lesson = {
  level: "hsk2",
  no: 15,
  slug: "bai-15",
  zh: "新年就要到了。",
  pinyin: "Xīnnián jiù yào dào le.",
  vi: "Năm mới sắp đến rồi.",
  en: "The New Year is coming soon.",
  topic: "节日 · Năm mới, đợi người, thời tiết",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 8 từ mới: 日、新年、票、火车站、大家、更、妹妹、阴.",
    "Hiểu và dùng được 2 điểm ngữ pháp: cấu trúc 快要/快/就要/要……了 (sắp… rồi), cấu trúc 都……了 (đã… rồi).",
    "Đọc hiểu 4 đoạn hội thoại về kế hoạch năm mới, tiệc cuối năm ở công ty, đợi em gái, trời âm u.",
    "Nói việc sắp xảy ra; nhấn mạnh/phàn nàn về thời gian đã muộn, đã lâu.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：新年、票、旅游、帮助、阴、火车站",
      vi: "Chọn hình tương ứng với các từ: 新年 (năm mới), 票 (vé), 旅游 (du lịch), 帮助 (giúp đỡ), 阴 (âm u), 火车站 (ga tàu hỏa).",
    },
    {
      zh: "看下面的图片，用汉语说出它们的名字：公共汽车、出租车、火车、自行车",
      vi: "Xem hình và nói tên các phương tiện bằng tiếng Trung: xe buýt, taxi, tàu hỏa, xe đạp.",
    },
  ],

  vocab: [
    { id: 1, han: "日", py: "rì", pos: "dt.", meaning: "ngày", example: "今天是12月20日，新年就要到了。", exampleVi: "Hôm nay là ngày 20 tháng 12, năm mới sắp đến rồi." },
    { id: 2, han: "新年", py: "xīnnián", pos: "dt.", meaning: "năm mới, Tết", example: "新年你准备做什么？", exampleVi: "Bạn định làm gì vào năm mới vậy?" },
    { id: 3, han: "票", py: "piào", pos: "dt.", meaning: "vé", example: "你买票了吗？", exampleVi: "Bạn đã mua vé chưa?" },
    { id: 4, han: "火车站", py: "huǒchēzhàn", pos: "dt.", meaning: "ga tàu hỏa", example: "明天就去火车站买票。", exampleVi: "Ngày mai mình sẽ đến ga tàu hỏa để mua." },
    { id: 5, han: "大家", py: "dàjiā", pos: "đt.", meaning: "mọi người", example: "谢谢大家这一年对我的帮助！", exampleVi: "Cám ơn mọi người vì đã giúp đỡ tôi trong suốt năm nay!" },
    { id: 6, han: "更", py: "gèng", pos: "p.", meaning: "càng, hơn nữa", example: "希望我们的公司明年更好！", exampleVi: "Hy vọng sang năm công ty của chúng ta sẽ phát triển hơn nữa!" },
    { id: 7, han: "妹妹", py: "mèimei", pos: "dt.", meaning: "em gái", example: "你妹妹怎么还没来？", exampleVi: "Em gái của em sao vẫn chưa đến vậy?" },
    { id: 8, han: "阴", py: "yīn", pos: "tt.", meaning: "u ám, nhiều mây", example: "天阴了，我要回去了。", exampleVi: "Trời u ám rồi, anh phải về đây." },
  ],

  text: {
    title: "课文 新年就要到了。",
    paragraphs: [
      {
        heading: "课文一 · 在朋友家 (Ở nhà bạn)",
        zh: "A：今天是12月20日，新年就要到了。\nB：新年你准备做什么？\nA：我想去北京旅游，北京很不错，我去过一次。\nB：你买票了吗？\nA：还没有呢，明天就去火车站买票。",
        vi: "A: Hôm nay là ngày 20 tháng 12, năm mới sắp đến rồi.\nB: Bạn định làm gì vào năm mới vậy?\nA: Mình muốn đi du lịch ở Bắc Kinh. Bắc Kinh rất tuyệt, mình từng đến đó một lần.\nB: Bạn đã mua vé chưa?\nA: Chưa, ngày mai mình sẽ đến ga tàu hỏa để mua.",
        questions: ["新年的时候他准备做什么？", "明天他有什么事要做？"],
      },
      {
        heading: "课文二 · 在公司 (Trong công ty)",
        zh: "A：时间过得真快，新的一年快要到了！\nB：是啊，谢谢大家这一年对我的帮助！\nC：希望我们的公司明年更好！",
        vi: "A: Thời gian trôi qua nhanh thật, năm mới sắp đến rồi!\nB: Đúng vậy, cám ơn mọi người vì đã giúp đỡ tôi trong suốt năm nay!\nC: Hy vọng sang năm công ty của chúng ta sẽ phát triển hơn nữa!",
        questions: ["他们希望公司明年怎么样？"],
      },
      {
        heading: "课文三 · 在车站 (Ở bến xe)",
        zh: "A：你妹妹怎么还没来？都八点四十了！\nB：我们再等她几分钟吧。\nA：都等她半个小时了！\nB：她来了，我听见她说话了。",
        vi: "A: Em gái của em sao vẫn chưa đến vậy? Đã 8 giờ 40 phút rồi!\nB: Chúng ta đợi em ấy vài phút nữa đi.\nA: Đã đợi nửa giờ đồng hồ rồi!\nB: Em ấy đến rồi, em nghe thấy tiếng nó rồi.",
        questions: ["他们两个人在等谁呢？", "他们等的人来了没有？"],
      },
      {
        heading: "课文四 · 在咖啡馆门口 (Ở trước quán cà phê)",
        zh: "A：天阴了，我要回去了。\nB：好的。快要下雨了，你路上慢点儿。\nA：没关系，我坐公共汽车。\nB：好的。再见。",
        vi: "A: Trời u ám rồi, anh phải về đây.\nB: Vâng. Trời sắp mưa rồi đó. Trên đường, anh đi chậm thôi nhé.\nA: Không sao đâu, anh sẽ đi xe buýt.\nB: Vậy thì tốt. Tạm biệt.",
        questions: ["外面的天气怎么样？"],
      },
    ],
    notes: [
      "路上慢点儿: đi đường cẩn thận/chậm thôi (lời dặn khi tiễn).",
      "听见她说话了: nghe thấy tiếng cô ấy nói rồi (见 là bổ ngữ kết quả).",
      "Văn hóa – Tết âm lịch (春节) là “năm mới” của người Trung Quốc, ngày lễ truyền thống quan trọng nhất và là dịp đoàn tụ gia đình. Mọi người dán câu đối (贴对联), đốt pháo (放鞭炮), ăn sủi cảo (吃饺子), xem Đêm hội liên hoan Tết (春节联欢晚会); trẻ em được nhận tiền mừng tuổi (压岁钱). Một số nơi có múa lân (舞狮子), múa rồng (耍龙灯), đi lễ hội chùa (逛庙会).",
    ],
  },

  grammar: [
    {
      word: "快要/快/就要/要……了",
      title: "Cấu trúc diễn tả hành động sắp xảy ra",
      usages: [
        {
          label: "Cách dùng",
          explain: "快要/快/就要/要 + động từ (+ tân ngữ) + 了 chỉ sự việc sắp xảy ra.",
          examples: ["火车快要来了。", "要下雨了。", "新的一年快要到了。"],
        },
        {
          label: "Có trạng ngữ chỉ thời gian: chỉ dùng 就要……了",
          explain: "Nếu câu có trạng ngữ chỉ thời gian thì chỉ dùng 就要……了 (không dùng 快要).",
          examples: ["下个月我们就要回国了。", "明天姐姐就要走了。", "下个星期我们就要考试了。"],
        },
      ],
    },
    {
      word: "都……了",
      title: "Cấu trúc 都……了 (đã… rồi)",
      usages: [
        {
          label: "Cách dùng",
          explain: "都……了 có nghĩa là “đã”, thường dùng để nhấn mạnh hoặc diễn tả thái độ không hài lòng.",
          examples: ["都8点了，快点儿起床吧。", "你都十岁了，可以自己洗衣服了。", "都等她半个小时了。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "今天是12月20___，新年就要到了。", options: ["日", "年", "票", "阴"], answer: "日" },
    { sentence: "___你准备做什么？", options: ["新年", "大家", "妹妹", "火车站"], answer: "新年" },
    { sentence: "你买___了吗？", options: ["票", "日", "更", "阴"], answer: "票" },
    { sentence: "明天就去___买票。", options: ["火车站", "新年", "大家", "妹妹"], answer: "火车站" },
    { sentence: "谢谢___这一年对我的帮助！", options: ["大家", "妹妹", "新年", "火车站"], answer: "大家" },
    { sentence: "希望我们的公司明年___好！", options: ["更", "都", "就", "快"], answer: "更" },
    { sentence: "你___怎么还没来？", options: ["妹妹", "大家", "新年", "票"], answer: "妹妹" },
    { sentence: "天___了，我要回去了。", options: ["阴", "晴", "更", "日"], answer: "阴" },
    { sentence: "___要下雨了，你路上慢点儿。", options: ["快", "都", "更", "就是"], answer: "快" },
    { sentence: "___八点四十了！她怎么还没来？", options: ["都", "快", "更", "就"], answer: "都" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [8, 3, 6] },
        { vocabId: 2, distractors: [5, 7, 4] },
        { vocabId: 3, distractors: [1, 6, 8] },
        { vocabId: 4, distractors: [2, 5, 7] },
        { vocabId: 5, distractors: [7, 2, 4] },
        { vocabId: 6, distractors: [8, 1, 3] },
        { vocabId: 7, distractors: [5, 2, 4] },
        { vocabId: 8, distractors: [6, 3, 1] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["新年", "就要", "到", "了", "。"], answer: "新年就要到了。", vi: "Năm mới sắp đến rồi." },
        { tokens: ["明天", "就", "去", "火车站", "买票", "。"], answer: "明天就去火车站买票。", vi: "Ngày mai sẽ đến ga tàu mua vé." },
        { tokens: ["谢谢", "大家", "这一年", "对我的", "帮助", "！"], answer: "谢谢大家这一年对我的帮助！", vi: "Cảm ơn mọi người đã giúp đỡ tôi trong năm nay!" },
        { tokens: ["都", "等她", "半个小时", "了", "！"], answer: "都等她半个小时了！", vi: "Đã đợi cô ấy nửa tiếng rồi!" },
        { tokens: ["快要", "下雨", "了", "，", "你", "路上", "慢点儿", "。"], answer: "快要下雨了，你路上慢点儿。", vi: "Sắp mưa rồi, bạn đi đường cẩn thận." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Kế hoạch năm mới", text: "A：今天是12月20{{c1}}，{{c2}}就要到了。\nB：新年你{{c3}}做什么？\nA：我想去北京旅游，北京很不错，我去{{c4}}一次。\nB：你买{{c5}}了吗？\nA：还没有呢，明天就去{{c6}}买票。" },
        { title: "Bài khóa 2 · Cuối năm ở công ty", text: "A：时间过得真快，新的一年{{c7}}到了！\nB：是啊，谢谢{{c8}}这一年对我的{{c9}}！\nC：希望我们的公司明年{{c10}}好！" },
      ],
      answers: { c1: "日", c2: "新年", c3: "准备", c4: "过", c5: "票", c6: "火车站", c7: "快要", c8: "大家", c9: "帮助", c10: "更" },
      bank: ["日", "新年", "准备", "过", "票", "火车站", "快要", "大家", "帮助", "更", "都", "着", "最"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Đợi em gái", text: "A：你{{e1}}怎么{{e2}}没来？{{e3}}八点四十了！\nB：我们{{e4}}等她几分钟吧。\nA：都等她半个小时了！\nB：她来了，我听{{e5}}她说话了。" },
        { title: "Bài khóa 4 · Trời âm u", text: "A：天{{e6}}了，我要回去了。\nB：好的。快要{{e7}}了，你路上{{e8}}点儿。\nA：没关系，我坐{{e9}}。\nB：好的。{{e10}}。" },
      ],
      answers: { e1: "妹妹", e2: "还", e3: "都", e4: "再", e5: "见", e6: "阴", e7: "下雨", e8: "慢", e9: "公共汽车", e10: "再见" },
      bank: ["妹妹", "还", "都", "再", "见", "阴", "下雨", "慢", "公共汽车", "再见", "晴", "快", "更"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "火车快要来了。", vi: "Tàu hỏa sắp đến rồi.", keywords: ["tàu", "sắp đến"] },
        { zh: "下个月我们就要回国了。", vi: "Tháng sau chúng tôi sắp về nước rồi.", keywords: ["tháng sau", "về nước"] },
        { zh: "都8点了，快点儿起床吧。", vi: "Đã 8 giờ rồi, mau dậy đi.", keywords: ["8 giờ", "dậy"] },
        { zh: "你都十岁了，可以自己洗衣服了。", vi: "Con đã mười tuổi rồi, có thể tự giặt quần áo được rồi.", keywords: ["mười tuổi", "giặt quần áo"] },
        { zh: "时间过得真快。", vi: "Thời gian trôi nhanh thật.", keywords: ["thời gian", "nhanh"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Sắp mưa rồi.", answers: ["要下雨了。", "快要下雨了。", "快下雨了。", "就要下雨了。"] },
        { vi: "Ngày mai chị gái sắp đi rồi.", answers: ["明天姐姐就要走了。", "姐姐明天就要走了。"] },
        { vi: "Tuần sau chúng tôi sắp thi rồi.", answers: ["下个星期我们就要考试了。", "我们下个星期就要考试了。"] },
        { vi: "Đã đợi cô ấy nửa tiếng rồi!", answers: ["都等她半个小时了！", "都等她半个小时了。"] },
        { vi: "Bạn đã mua vé chưa?", answers: ["你买票了吗？", "你买票了没有？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "今天是12月20日。", a: true },
        { q: "A已经买好去北京的票了。", a: false },
        { q: "A去过一次北京。", a: true },
        { q: "C希望公司明年更好。", a: true },
        { q: "他们在等B的姐姐。", a: false },
        { q: "他们已经等了半个小时了。", a: true },
        { q: "今天是晴天。", a: false },
        { q: "A坐出租车回去。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "新年就要到了。",
        "你买票了吗？",
        "时间过得真快。",
        "都等她半个小时了！",
        "天阴了，我要回去了。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "新年快要到了，你有什么打算？你们国家怎么过新年？ (Năm mới sắp đến, bạn có dự định gì? Nước bạn đón năm mới thế nào?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 15 (快要/就要……了, 都……了).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["快要", "就要", "快", "要", "都", "了"],
      minGrammar: 2,
      sample: "时间过得真快，新年快要到了！我在中国都住了一年了。下个星期我就要回国了，票我已经买好了。过新年的时候，大家都回家和家人一起吃饭。我希望新的一年大家身体更好，工作更好。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 快要 / 就要", points: 6,
      subtitle: "Chọn 快要 hoặc 就要 (câu có trạng ngữ thời gian chỉ dùng 就要).",
      grammarWord: "快要 / 就要",
      options: ["快要", "就要"],
      items: [
        { q: "火车___来了。", answers: ["快要", "就要"] },
        { q: "下个月我们___回国了。", answers: ["就要"] },
        { q: "明天姐姐___走了。", answers: ["就要"] },
        { q: "新的一年___到了！", answers: ["快要", "就要"] },
        { q: "下个星期我们___考试了。", answers: ["就要"] },
        { q: "天阴了，___下雨了。", answers: ["快要", "就要"] },
        { q: "今天是12月20日，新年___到了。", answers: ["就要", "快要"] },
        { q: "后天我们___去北京旅游了。", answers: ["就要"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 都……了", points: 6,
      subtitle: "Điền từ nhấn mạnh “đã… rồi” vào chỗ trống.",
      grammarWord: "都……了",
      items: [
        { q: "___8点了，快点儿起床吧。", answers: ["都"] },
        { q: "你___十岁了，可以自己洗衣服了。", answers: ["都"] },
        { q: "___等她半个小时了。", answers: ["都"] },
        { q: "你妹妹怎么还没来？___八点四十了！", answers: ["都"] },
        { q: "___十二点了，商店关门了。", answers: ["都"] },
        { q: "弟弟___六岁了，可以自己吃饭了。", answers: ["都"] },
        { q: "我___等你一个小时了，你怎么才来？", answers: ["都"] },
        { q: "___七点五十分了，我们快走吧。", answers: ["都"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 更 / 还 / 再", points: 5,
      subtitle: "Chọn 更, 还 hoặc 再 cho mỗi chỗ trống.",
      grammarWord: "更 / 还 / 再",
      options: ["更", "还", "再"],
      items: [
        { q: "希望我们的公司明年___好！", answers: ["更"] },
        { q: "你妹妹怎么___没来？", answers: ["还"] },
        { q: "我们___等她几分钟吧。", answers: ["再"] },
        { q: "你买票了吗？——___没有呢。", answers: ["还"] },
        { q: "坐飞机比坐火车___快。", answers: ["更"] },
        { q: "我去过一次北京，还想___去一次。", answers: ["再"] },
        { q: "我喜欢春天，___喜欢夏天。", answers: ["更"] },
        { q: "八点了，他___在睡觉。", answers: ["还"] },
      ],
    },
  ],
};
