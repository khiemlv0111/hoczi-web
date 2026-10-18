import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第1课 九月去北京旅游最好。 (Nếu đi Bắc Kinh để du lịch thì tốt nhất là đi vào tháng chín.)
// Nguồn: Giáo trình chuẩn HSK2, trang 15–22 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson01: Lesson = {
  level: "hsk2",
  no: 1,
  slug: "bai-1",
  zh: "九月去北京旅游最好。",
  pinyin: "Jiǔ yuè qù Běijīng lǚyóu zuì hǎo.",
  vi: "Nếu đi Bắc Kinh để du lịch thì tốt nhất là đi vào tháng chín.",
  en: "September is the best time to visit Beijing.",
  topic: "旅游与爱好 · Du lịch, sở thích",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 12 từ mới: 旅游、觉得、最、为什么、也、运动、踢足球、一起、要、新、它、眼睛.",
    "Hiểu và dùng được 3 điểm ngữ pháp: trợ động từ 要, phó từ chỉ mức độ 最, cách diễn tả số ước lượng với 几 và 多.",
    "Đọc hiểu 4 đoạn hội thoại ngắn về thời điểm du lịch Bắc Kinh, môn thể thao yêu thích, mua ghế mới, con mèo Hoa Hoa.",
    "Hỏi – đáp về sở thích (你最喜欢……？) và nơi muốn đi du lịch nhất.",
    "Ngữ âm: trọng âm của từ hai âm tiết; chữ Hán: nét ㇅ (横折提), ㇋ (横折折折钩), chữ 为、也, bộ 王 (玉) và bộ 足.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：旅游、运动、眼睛、足球、椅子、猫",
      vi: "Chọn hình tương ứng với các từ: 旅游 (du lịch), 运动 (thể thao), 眼睛 (mắt), 足球 (bóng đá), 椅子 (ghế), 猫 (mèo).",
    },
    {
      zh: "看下面的图片，说说来北京旅游最好的时间：三月、六月、九月、十二月",
      vi: "Xem hình và nói về thời gian phù hợp nhất để đi du lịch Bắc Kinh: tháng ba, tháng sáu, tháng chín, tháng mười hai.",
    },
  ],

  vocab: [
    { id: 1, han: "旅游", py: "lǚyóu", pos: "đgt.", meaning: "du lịch", example: "我要去北京旅游。", exampleVi: "Mình sẽ đi Bắc Kinh du lịch." },
    { id: 2, han: "觉得", py: "juéde", pos: "đgt.", meaning: "cho rằng, nghĩ rằng, thấy", example: "你觉得什么时候去最好？", exampleVi: "Bạn thấy đi lúc nào là tốt nhất?" },
    { id: 3, han: "最", py: "zuì", pos: "p.", meaning: "nhất", example: "九月去北京旅游最好。", exampleVi: "Tháng chín đi Bắc Kinh du lịch là tốt nhất." },
    { id: 4, han: "为什么", py: "wèi shénme", pos: "đt.", meaning: "tại sao", example: "为什么？", exampleVi: "Tại sao vậy?" },
    { id: 5, han: "也", py: "yě", pos: "p.", meaning: "cũng", example: "九月的北京天气不冷也不热。", exampleVi: "Tháng chín thời tiết Bắc Kinh không lạnh cũng không nóng." },
    { id: 6, han: "运动", py: "yùndòng", pos: "dt./đgt.", meaning: "môn thể thao; tập thể dục, thể thao", example: "你喜欢什么运动？", exampleVi: "Bạn thích môn thể thao nào?" },
    { id: 7, han: "踢足球", py: "tī zúqiú", pos: "đgt.", meaning: "đá bóng", example: "我最喜欢踢足球。", exampleVi: "Mình thích đá bóng nhất." },
    { id: 8, han: "一起", py: "yìqǐ", pos: "p.", meaning: "cùng", example: "下午我们一起去踢足球吧。", exampleVi: "Buổi chiều chúng ta cùng đi đá bóng nhé." },
    { id: 9, han: "要", py: "yào", pos: "trợ đgt.", meaning: "muốn, cần, sẽ", example: "我们要不要买几个新的椅子？", exampleVi: "Chúng ta có cần mua mấy chiếc ghế mới không?" },
    { id: 10, han: "新", py: "xīn", pos: "tt.", meaning: "mới", example: "我要去买几个新杯子。", exampleVi: "Tôi muốn đi mua mấy cái cốc mới." },
    { id: 11, han: "它", py: "tā", pos: "đt.", meaning: "nó (chỉ vật, con vật)", example: "那是我的猫，它叫花花。", exampleVi: "Đó là con mèo của mình, nó tên là Hoa Hoa." },
    { id: 12, han: "眼睛", py: "yǎnjing", pos: "dt.", meaning: "mắt", example: "我觉得它的眼睛最漂亮。", exampleVi: "Mình nghĩ đôi mắt của nó đẹp nhất." },
    { id: 13, han: "花花", py: "Huāhua", pos: "dt.", meaning: "Hoa Hoa (tên con mèo)", example: "花花六个多月了。", exampleVi: "Hoa Hoa hơn sáu tháng tuổi rồi." },
  ],

  text: {
    title: "课文 九月去北京旅游最好。",
    paragraphs: [
      {
        heading: "课文一 · 在学校 (Ở trường)",
        zh: "A：我要去北京旅游，你觉得什么时候去最好？\nB：九月去北京旅游最好。\nA：为什么？\nB：九月的北京天气不冷也不热。",
        vi: "A: Mình sẽ đi Bắc Kinh để du lịch, theo bạn thì đi vào lúc nào là tốt nhất?\nB: Nếu đi Bắc Kinh để du lịch thì tốt nhất là đi vào tháng chín.\nA: Tại sao vậy?\nB: Vì vào tháng chín, thời tiết ở Bắc Kinh không lạnh cũng không nóng.",
        questions: ["什么时候去北京旅游最好？为什么？"],
      },
      {
        heading: "课文二 · 看照片 (Xem ảnh)",
        zh: "A：你喜欢什么运动？\nB：我最喜欢踢足球。\nA：下午我们一起去踢足球吧。\nB：好啊！",
        vi: "A: Bạn thích môn thể thao nào?\nB: Mình thích đá bóng nhất.\nA: Vậy buổi chiều chúng ta cùng đi đá bóng nhé.\nB: Được đấy!",
        questions: ["他们下午要做什么？"],
      },
      {
        heading: "课文三 · 在家里 (Ở nhà)",
        zh: "A：我们要不要买几个新的椅子？\nB：好啊。什么时候去买？\nA：明天下午怎么样？你明天几点能回来？\nB：三点多。",
        vi: "A: Chúng ta có cần mua mấy chiếc ghế dựa mới không?\nB: Được thôi. Khi nào đi mua?\nA: Chiều mai được không? Ngày mai anh có thể về lúc mấy giờ?\nB: Hơn 3 giờ.",
        questions: ["他们想什么时候去买椅子？"],
      },
      {
        heading: "课文四 · 在家里 (Ở nhà)",
        zh: "A：桌子下面有个猫。\nB：那是我的猫，它叫花花。\nA：它很漂亮。\nB：是啊，我觉得它的眼睛最漂亮。\nA：它多大了？\nB：六个多月。",
        vi: "A: Ở dưới bàn có con mèo kìa.\nB: Đó là con mèo của mình, nó tên là Hoa Hoa.\nA: Con mèo này đẹp quá.\nB: Đúng vậy, mình nghĩ đôi mắt của nó đẹp nhất.\nA: Nó được bao nhiêu tuổi rồi?\nB: Hơn 6 tháng tuổi.",
        questions: ["花花在哪儿？", "花花多大了？"],
      },
    ],
    notes: [
      "花花 (Huāhua): Hoa Hoa, tên con mèo.",
      "Ngữ âm – trọng âm từ hai âm tiết: đa số theo kiểu “nhẹ vừa + nhấn mạnh” (冰箱、帮忙、旅游、考试…); một số theo kiểu “nhấn mạnh + đọc nhẹ” (东西、窗户、时候、你们、告诉、故事…).",
      "Chữ Hán – nét 横折提 (ngang gập hất: 话、说) và 横折折折钩 (ngang gập gập gập móc: 奶、场). Chữ 为 (phồn thể 爲) giống bàn tay dắt con voi làm việc, nghĩa gốc là “làm”; chữ 也 giống con rắn, nay là phó từ.",
      "Bộ 王 (玉): thường liên quan đến ngọc (现、球); bộ 足 (⻊): liên quan đến chân (跑、踢).",
    ],
  },

  grammar: [
    {
      word: "要",
      title: "Trợ động từ 要 (muốn, sẽ)",
      usages: [
        {
          label: "Cách dùng",
          explain: "要 đứng trước động từ, cho biết người nào đó có nguyện vọng thực hiện việc gì: chủ ngữ + 要 + vị ngữ.",
          examples: ["王方要学习英语。", "我要吃米饭。", "我们要不要买几个新的椅子？"],
        },
        {
          label: "Phủ định: 不想",
          explain: "Ở dạng phủ định, người ta thường dùng 不想 (không nói 不要 với nghĩa “không muốn”).",
          examples: ["小王要去，我不想去。", "A：你要吃米饭吗？B：我不想吃米饭。", "A：我要去商店买椅子，你去吗？B：我不去，我不想买椅子。"],
        },
      ],
    },
    {
      word: "最",
      title: "Phó từ chỉ mức độ 最 (nhất)",
      usages: [
        {
          label: "Cách dùng",
          explain: "最 chỉ vị trí hàng đầu trong các sự vật cùng loại hoặc xét về một khía cạnh nào đó.",
          examples: ["大卫的汉语最好。", "我最喜欢吃米饭。", "它的眼睛最漂亮。"],
        },
      ],
    },
    {
      word: "几 / 多",
      title: "Cách diễn tả số ước lượng: 几 và 多",
      usages: [
        {
          label: "几 + lượng từ + danh từ",
          explain: "几 chỉ con số không xác định nhỏ hơn 10, phía sau phải có lượng từ. 几 cũng dùng sau 十 (十几个人: mười mấy người) hoặc trước 十 (几十个人: mấy chục người).",
          examples: ["车上有几个人。", "我想买几本书。", "我们要不要买几个新的椅子？"],
        },
        {
          label: "Số < 10 + lượng từ + 多 (+ danh từ)",
          explain: "Khi số nhỏ hơn 10, 多 đặt sau lượng từ: 三个多星期, 五年多, 六个多月.",
          examples: ["三个多星期", "五年多", "它六个多月了。"],
        },
        {
          label: "Số chẵn chục + 多 + lượng từ (+ danh từ)",
          explain: "Khi là số hàng chục lớn hơn 10, 多 đặt trước lượng từ; lúc này 多 và 几 có thể thay thế cho nhau.",
          examples: ["十多个月", "二十多块钱", "八十多个人"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "我___去北京旅游。", options: ["要", "最", "也", "新"], answer: "要" },
    { sentence: "你___什么时候去最好？", options: ["觉得", "旅游", "运动", "一起"], answer: "觉得" },
    { sentence: "我___喜欢踢足球。", options: ["最", "也", "要", "它"], answer: "最" },
    { sentence: "九月的北京天气不冷___不热。", options: ["也", "最", "要", "新"], answer: "也" },
    { sentence: "A：九月去北京旅游最好。B：___？", options: ["为什么", "什么时候", "几点", "多大"], answer: "为什么" },
    { sentence: "下午我们___去踢足球吧。", options: ["一起", "觉得", "最", "新"], answer: "一起" },
    { sentence: "我们要不要买几个___的椅子？", options: ["新", "最", "也", "它"], answer: "新" },
    { sentence: "那是我的猫，___叫花花。", options: ["它", "他", "她", "我"], answer: "它" },
    { sentence: "我觉得它的___最漂亮。", options: ["眼睛", "运动", "旅游", "足球"], answer: "眼睛" },
    { sentence: "你喜欢什么___？——我最喜欢踢足球。", options: ["运动", "眼睛", "旅游", "椅子"], answer: "运动" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [6, 2, 8] },
        { vocabId: 2, distractors: [1, 4, 12] },
        { vocabId: 3, distractors: [5, 9, 10] },
        { vocabId: 4, distractors: [2, 11, 8] },
        { vocabId: 6, distractors: [1, 7, 8] },
        { vocabId: 8, distractors: [6, 9, 2] },
        { vocabId: 10, distractors: [3, 5, 11] },
        { vocabId: 12, distractors: [6, 1, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 6, 7, 8, 10, 12],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["九月", "去北京", "旅游", "最好", "。"], answer: "九月去北京旅游最好。", vi: "Tháng chín đi Bắc Kinh du lịch là tốt nhất." },
        { tokens: ["你", "觉得", "什么时候", "去", "最好", "？"], answer: "你觉得什么时候去最好？", vi: "Bạn thấy đi lúc nào là tốt nhất?" },
        { tokens: ["下午", "我们", "一起", "去踢足球", "吧", "。"], answer: "下午我们一起去踢足球吧。", vi: "Buổi chiều chúng ta cùng đi đá bóng nhé." },
        { tokens: ["我们", "要不要", "买", "几个", "新的椅子", "？"], answer: "我们要不要买几个新的椅子？", vi: "Chúng ta có cần mua mấy chiếc ghế mới không?" },
        { tokens: ["我", "觉得", "它的眼睛", "最", "漂亮", "。"], answer: "我觉得它的眼睛最漂亮。", vi: "Tôi nghĩ đôi mắt của nó đẹp nhất." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ở trường", text: "A：我{{c1}}去北京{{c2}}，你{{c3}}什么时候去{{c4}}好？\nB：九月去北京旅游最好。\nA：{{c5}}？\nB：九月的北京天气不冷{{c6}}不热。" },
        { title: "Bài khóa 2 · Xem ảnh", text: "A：你喜欢什么{{c7}}？\nB：我最喜欢{{c8}}。\nA：下午我们{{c9}}去踢足球{{c10}}。\nB：好啊！" },
      ],
      answers: { c1: "要", c2: "旅游", c3: "觉得", c4: "最", c5: "为什么", c6: "也", c7: "运动", c8: "踢足球", c9: "一起", c10: "吧" },
      bank: ["要", "旅游", "觉得", "最", "为什么", "也", "运动", "踢足球", "一起", "吧", "新", "它", "吗"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Mua ghế mới", text: "A：我们{{e1}}买{{e2}}个{{e3}}的椅子？\nB：好啊。什么时候去买？\nA：明天下午怎么样？你明天几点能回来？\nB：三点{{e4}}。" },
        { title: "Bài khóa 4 · Con mèo Hoa Hoa", text: "A：桌子{{e5}}有个猫。\nB：那是我的猫，{{e6}}叫花花。\nA：它很漂亮。\nB：是啊，我觉得它的{{e7}}最漂亮。\nA：它{{e8}}了？\nB：六个{{e9}}{{e10}}。" },
      ],
      answers: { e1: "要不要", e2: "几", e3: "新", e4: "多", e5: "下面", e6: "它", e7: "眼睛", e8: "多大", e9: "多", e10: "月" },
      bank: ["要不要", "几", "新", "多", "下面", "它", "眼睛", "多大", "多", "月", "最", "年", "上面"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "九月的北京天气不冷也不热。", vi: "Tháng chín thời tiết Bắc Kinh không lạnh cũng không nóng.", keywords: ["tháng chín", "lạnh", "nóng"] },
        { zh: "我最喜欢踢足球。", vi: "Tôi thích đá bóng nhất.", keywords: ["thích", "đá bóng"] },
        { zh: "小王要去，我不想去。", vi: "Tiểu Vương muốn đi, tôi không muốn đi.", keywords: ["muốn đi", "không muốn"] },
        { zh: "车上有几个人。", vi: "Trên xe có mấy người.", keywords: ["trên xe", "mấy người"] },
        { zh: "大卫的汉语最好。", vi: "Tiếng Hán của David giỏi nhất.", keywords: ["tiếng hán", "giỏi nhất"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi muốn ăn cơm.", answers: ["我要吃米饭。", "我想吃米饭。", "我要吃饭。"] },
        { vi: "Bạn thích môn thể thao nào?", answers: ["你喜欢什么运动？"] },
        { vi: "Tôi muốn mua mấy quyển sách.", answers: ["我想买几本书。", "我要买几本书。"] },
        { vi: "Con mèo của tôi hơn sáu tháng tuổi.", answers: ["我的猫六个多月了。", "我的猫六个多月。"] },
        { vi: "Chiều nay chúng ta cùng đi đá bóng nhé.", answers: ["今天下午我们一起去踢足球吧。", "下午我们一起去踢足球吧。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "九月去北京旅游最好。", a: true },
        { q: "九月的北京天气很热。", a: false },
        { q: "B最喜欢踢足球。", a: true },
        { q: "他们明天上午去踢足球。", a: false },
        { q: "他们想买几个新的椅子。", a: true },
        { q: "B明天十点多能回来。", a: false },
        { q: "花花是一只猫。", a: true },
        { q: "花花三岁了。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "九月去北京旅游最好。",
        "你喜欢什么运动？",
        "我最喜欢踢足球。",
        "它叫花花。",
        "它的眼睛最漂亮。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "你最想去什么地方旅游？为什么？你最喜欢什么运动？ (Bạn muốn đi du lịch ở đâu nhất? Tại sao? Bạn thích môn thể thao nào nhất?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 1 (要, 最, 几/多).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["要", "最", "几", "多"],
      minGrammar: 2,
      sample: "我最想去北京旅游。我觉得九月去北京最好，九月的北京天气不冷也不热。我要和几个朋友一起去，我们想吃中国菜。我最喜欢的运动是踢足球，每个星期我都和朋友一起去踢足球。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 要 / 不想", points: 6,
      subtitle: "Chọn 要 hoặc 不想 cho mỗi chỗ trống.",
      grammarWord: "要 / 不想",
      options: ["要", "不想"],
      items: [
        { q: "王方___学习英语。", answers: ["要"] },
        { q: "小王要去，我___去。", answers: ["不想"] },
        { q: "A：你要吃米饭吗？B：我___吃米饭。", answers: ["不想"] },
        { q: "我___去北京旅游。", answers: ["要"] },
        { q: "我们要不___买几个新的椅子？", answers: ["要"] },
        { q: "我不去，我___买椅子。", answers: ["不想"] },
        { q: "我___去买几个新杯子。", answers: ["要"] },
        { q: "今天太冷了，我___出去。", answers: ["不想"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: phó từ 最", points: 6,
      subtitle: "Điền phó từ chỉ mức độ cao nhất vào chỗ trống.",
      grammarWord: "最",
      items: [
        { q: "大卫的汉语___好。", answers: ["最"] },
        { q: "我___喜欢吃米饭。", answers: ["最"] },
        { q: "它的眼睛___漂亮。", answers: ["最"] },
        { q: "九月去北京旅游___好。", answers: ["最"] },
        { q: "我___喜欢踢足球。", answers: ["最"] },
        { q: "你___想去什么地方旅游？", answers: ["最"] },
        { q: "你觉得什么时候去___好？", answers: ["最"] },
        { q: "你___不喜欢吃什么？", answers: ["最"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: số ước lượng 几 / 多", points: 5,
      subtitle: "Chọn 几 hoặc 多 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "几 / 多",
      options: ["几", "多"],
      items: [
        { q: "车上有___个人。", answers: ["几"] },
        { q: "我想买___本书。", answers: ["几"] },
        { q: "它六个___月了。", answers: ["多"] },
        { q: "我在北京住了三个___星期。", answers: ["多"] },
        { q: "这个杯子二十___块钱。", answers: ["多", "几"] },
        { q: "我们班有十___个学生。", answers: ["几", "多"] },
        { q: "我明天三点___回来。", answers: ["多"] },
        { q: "我要去买___个新杯子。", answers: ["几"] },
      ],
    },
  ],
};
