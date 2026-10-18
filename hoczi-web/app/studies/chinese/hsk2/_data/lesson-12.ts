import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第12课 你穿得太少了。 (Anh mặc ít quần áo quá.)
// Nguồn: Giáo trình chuẩn HSK2, trang 103–110 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson12: Lesson = {
  level: "hsk2",
  no: 12,
  slug: "bai-12",
  zh: "你穿得太少了。",
  pinyin: "Nǐ chuān de tài shǎo le.",
  vi: "Anh mặc ít quần áo quá.",
  en: "You're not wearing enough.",
  topic: "生活 · Giờ giấc, thời tiết, nhà ở",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 9 từ mới: 得、妻子、雪、零、度、穿、进、弟弟、近.",
    "Hiểu và dùng được 2 điểm ngữ pháp: bổ ngữ chỉ trạng thái (động từ + 得 + tính từ), câu chữ 比 (2) với bổ ngữ trạng thái.",
    "Đọc hiểu 4 đoạn hội thoại về dậy sớm, ăn cơm ở nhà bạn, tuyết rơi, tìm nhà cho em trai.",
    "Nhận xét, đánh giá cách làm một việc (说得很好、起得很早); so sánh cách làm việc của hai người.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：妻子、睡觉、房间、下雪、起床、房子",
      vi: "Chọn hình tương ứng với các từ: 妻子 (vợ), 睡觉 (ngủ), 房间 (phòng), 下雪 (tuyết rơi), 起床 (thức dậy), 房子 (ngôi nhà).",
    },
    {
      zh: "给下面的动词加上合适的宾语：说……、开……、准备……、读……、找……、学习……",
      vi: "Thêm tân ngữ phù hợp sau động từ: nói…, mở/lái…, chuẩn bị…, đọc…, tìm…, học…",
    },
  ],

  vocab: [
    { id: 1, han: "得", py: "de", pos: "trợ.", meaning: "trợ từ dùng sau động từ/tính từ, theo sau là bổ ngữ chỉ kết quả hay mức độ", example: "我睡得也早。", exampleVi: "Mình đi ngủ cũng sớm." },
    { id: 2, han: "妻子", py: "qīzi", pos: "dt.", meaning: "vợ", example: "我妻子比我做得好。", exampleVi: "Vợ tôi nấu ngon hơn tôi." },
    { id: 3, han: "雪", py: "xuě", pos: "dt.", meaning: "tuyết", example: "下雪了，今天真冷。", exampleVi: "Tuyết rơi rồi, hôm nay lạnh thật." },
    { id: 4, han: "零", py: "líng", pos: "số.", meaning: "số không", example: "有零下10度吧？", exampleVi: "Chắc là tới âm 10 độ phải không?" },
    { id: 5, han: "度", py: "dù", pos: "dt.", meaning: "độ (đơn vị đo nhiệt độ)", example: "有零下10度吧？", exampleVi: "Chắc là tới âm 10 độ phải không?" },
    { id: 6, han: "穿", py: "chuān", pos: "đgt.", meaning: "mặc, mang", example: "你穿得太少了，我们进房间吧。", exampleVi: "Anh mặc ít quần áo quá, chúng ta vào nhà đi." },
    { id: 7, han: "进", py: "jìn", pos: "đgt.", meaning: "vào", example: "我们进房间吧。", exampleVi: "Chúng ta vào nhà đi." },
    { id: 8, han: "弟弟", py: "dìdi", pos: "dt.", meaning: "em trai", example: "我弟弟让我帮他找个房子。", exampleVi: "Cậu em trai nhờ mình tìm giúp một căn nhà." },
    { id: 9, han: "近", py: "jìn", pos: "tt.", meaning: "gần", example: "他也希望能住得近一点儿。", exampleVi: "Nó cũng mong có thể ở gần hơn một chút." },
  ],

  text: {
    title: "课文 你穿得太少了。",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "A：你每天早上几点起床？\nB：六点多。\nA：你比我早起一个小时。\nB：我睡得也早，我每天晚上十点就睡觉。早睡早起身体好。",
        vi: "A: Mỗi sáng bạn thức dậy lúc mấy giờ vậy?\nB: Hơn 6 giờ.\nA: Bạn dậy sớm hơn mình một giờ rồi.\nB: Mình đi ngủ cũng sớm, vào lúc 10 giờ mỗi tối. Ngủ sớm dậy sớm tốt cho sức khỏe mà.",
        questions: ["她每天早上几点起床？晚上几点睡觉？"],
      },
      {
        heading: "课文二 · 在朋友家 (Ở nhà bạn)",
        zh: "A：再来点儿米饭吧，你吃得太少了。\nB：不少了，今天吃得很好，太谢谢你了。\nA：你做饭做得怎么样？\nB：不怎么样，我妻子比我做得好。",
        vi: "A: Ăn thêm chút cơm đi, anh ăn ít quá.\nB: Không ít đâu, hôm nay tôi ăn rất ngon miệng, cám ơn chị rất nhiều.\nA: Anh nấu ăn thế nào?\nB: Chẳng ra làm sao, vợ tôi nấu ngon hơn tôi.",
        questions: ["他做饭做得怎么样？"],
      },
      {
        heading: "课文三 · 在家门口 (Ở trước cửa nhà)",
        zh: "A：下雪了，今天真冷。\nB：有零下10度吧？\nA：是啊，你穿得太少了，我们进房间吧。\nB：好吧。",
        vi: "A: Tuyết rơi rồi, hôm nay lạnh thật.\nB: Chắc là tới âm 10 độ phải không?\nA: Đúng vậy, anh mặc ít quần áo quá, chúng ta vào nhà đi.\nB: Được thôi.",
        questions: ["今天天气怎么样？"],
      },
      {
        heading: "课文四 · 在家里 (Ở nhà)",
        zh: "A：你在忙什么呢？\nB：我弟弟让我帮他找个房子，现在他家离公司有点儿远。\nA：住得远真的很累！\nB：是啊，他也希望能住得近一点儿。",
        vi: "A: Bạn đang bận việc gì vậy?\nB: Cậu em trai nhờ mình tìm giúp một căn nhà, hiện giờ nhà nó hơi xa công ty.\nA: Ở xa quả là rất mệt!\nB: Đúng vậy, nó cũng mong có thể ở gần hơn một chút.",
        questions: ["她在忙什么？", "她弟弟为什么要找房子？"],
      },
    ],
    notes: [
      "零下10度: âm 10 độ.",
      "不怎么样: chẳng ra sao, không tốt lắm.",
      "早睡早起身体好: ngủ sớm dậy sớm tốt cho sức khỏe.",
    ],
  },

  grammar: [
    {
      word: "动词 + 得 + 形容词",
      title: "Bổ ngữ chỉ trạng thái",
      usages: [
        {
          label: "Khẳng định",
          explain: "Bổ ngữ chỉ trạng thái mô tả hay đánh giá kết quả, mức độ hoặc trạng thái của hành động; giữa động từ và bổ ngữ có trợ từ 得.",
          examples: ["他说得很好。", "我起得很早。", "我睡得也早。"],
        },
        {
          label: "Có tân ngữ",
          explain: "Nếu động từ có tân ngữ, phải đặt tân ngữ trước động từ hoặc lặp lại động từ: (động từ +) tân ngữ + động từ + 得 + tính từ.",
          examples: ["他（说）汉语说得很好。", "我（写）汉字写得很好。", "姐姐（唱）歌唱得不错。"],
        },
        {
          label: "Phủ định và nghi vấn",
          explain: "Phủ định: đặt 不 sau 得 (说得不好). Nghi vấn: dùng “tính từ + 不 + tính từ” sau 得 (说得好不好？).",
          examples: ["他说得不好。", "我住得不远。", "他说得好不好？", "你住得远不远？"],
        },
      ],
    },
    {
      word: "A 比 B + 动词 + 得 + 形容词",
      title: "Câu có từ 比 (2)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Khi động từ có bổ ngữ trạng thái, có thể đặt 比 trước động từ (A比B + động từ + 得 + tính từ) hoặc trước bổ ngữ (A + động từ + 得 + 比B + tính từ).",
          examples: ["他比我学得好。", "姐姐比我跑得快。", "我妻子比我做得好。", "他学得比我好。", "姐姐跑得比我快。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "我睡___也早，我每天晚上十点就睡觉。", options: ["得", "的", "地", "了"], answer: "得" },
    { sentence: "我做饭不怎么样，我___比我做得好。", options: ["妻子", "弟弟", "雪", "度"], answer: "妻子" },
    { sentence: "下___了，今天真冷。", options: ["雪", "度", "零", "近"], answer: "雪" },
    { sentence: "有___下10度吧？", options: ["零", "雪", "度", "近"], answer: "零" },
    { sentence: "今天三十五___，太热了。", options: ["度", "零", "雪", "米"], answer: "度" },
    { sentence: "你___得太少了，我们进房间吧。", options: ["穿", "进", "近", "吃"], answer: "穿" },
    { sentence: "外边太冷了，我们___房间吧。", options: ["进", "穿", "近", "出"], answer: "进" },
    { sentence: "我___让我帮他找个房子。", options: ["弟弟", "妻子", "雪", "度"], answer: "弟弟" },
    { sentence: "他也希望能住得___一点儿。", options: ["近", "进", "远", "穿"], answer: "近" },
    { sentence: "你吃___太少了，再来点儿米饭吧。", options: ["得", "的", "地", "着"], answer: "得" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [8, 3, 6] },
        { vocabId: 3, distractors: [5, 4, 9] },
        { vocabId: 4, distractors: [5, 3, 9] },
        { vocabId: 5, distractors: [4, 6, 3] },
        { vocabId: 6, distractors: [7, 9, 2] },
        { vocabId: 7, distractors: [9, 6, 5] },
        { vocabId: 8, distractors: [2, 6, 3] },
        { vocabId: 9, distractors: [7, 4, 8] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["你", "穿", "得", "太少", "了", "。"], answer: "你穿得太少了。", vi: "Bạn mặc ít quá." },
        { tokens: ["你", "比我", "早起", "一个小时", "。"], answer: "你比我早起一个小时。", vi: "Bạn dậy sớm hơn tôi một tiếng." },
        { tokens: ["我妻子", "比我", "做", "得", "好", "。"], answer: "我妻子比我做得好。", vi: "Vợ tôi nấu ngon hơn tôi." },
        { tokens: ["他", "汉语", "说", "得", "很好", "。"], answer: "他汉语说得很好。", vi: "Anh ấy nói tiếng Hán rất giỏi." },
        { tokens: ["他", "也", "希望", "能", "住得近一点儿", "。"], answer: "他也希望能住得近一点儿。", vi: "Anh ấy cũng mong có thể ở gần hơn một chút." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Dậy sớm", text: "A：你每天早上几点{{c1}}？\nB：六点多。\nA：你{{c2}}我早起一个小时。\nB：我睡{{c3}}也早，我每天晚上十点{{c4}}睡觉。早睡早起{{c5}}好。" },
        { title: "Bài khóa 2 · Ở nhà bạn", text: "A：再来点儿米饭吧，你吃得太{{c6}}了。\nB：不少了，今天吃得很{{c7}}，太谢谢你了。\nA：你做饭做{{c8}}怎么样？\nB：不怎么样，我{{c9}}比我做得{{c10}}。" },
      ],
      answers: { c1: "起床", c2: "比", c3: "得", c4: "就", c5: "身体", c6: "少", c7: "好", c8: "得", c9: "妻子", c10: "好" },
      bank: ["起床", "比", "得", "就", "身体", "少", "好", "得", "妻子", "好", "多", "的", "弟弟"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Trước cửa nhà", text: "A：下{{e1}}了，今天真冷。\nB：有{{e2}}下10{{e3}}吧？\nA：是啊，你{{e4}}得太少了，我们{{e5}}房间吧。\nB：好吧。" },
        { title: "Bài khóa 4 · Tìm nhà", text: "A：你在忙什么呢？\nB：我{{e6}}让我帮他找个房子，现在他家{{e7}}公司有点儿远。\nA：住得远真的很{{e8}}！\nB：是啊，他也{{e9}}能住得{{e10}}一点儿。" },
      ],
      answers: { e1: "雪", e2: "零", e3: "度", e4: "穿", e5: "进", e6: "弟弟", e7: "离", e8: "累", e9: "希望", e10: "近" },
      bank: ["雪", "零", "度", "穿", "进", "弟弟", "离", "累", "希望", "近", "远", "妻子", "雨"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "他汉语说得很好。", vi: "Anh ấy nói tiếng Hán rất giỏi.", keywords: ["tiếng hán", "giỏi"] },
        { zh: "姐姐比我跑得快。", vi: "Chị gái chạy nhanh hơn tôi.", keywords: ["chị", "chạy", "nhanh hơn"] },
        { zh: "早睡早起身体好。", vi: "Ngủ sớm dậy sớm tốt cho sức khỏe.", keywords: ["ngủ sớm", "dậy sớm", "sức khỏe"] },
        { zh: "我住得不远。", vi: "Tôi ở không xa.", keywords: ["ở", "không xa"] },
        { zh: "下雪了，今天真冷。", vi: "Tuyết rơi rồi, hôm nay lạnh thật.", keywords: ["tuyết", "lạnh"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi dậy rất sớm.", answers: ["我起得很早。"] },
        { vi: "Chị gái hát hay.", answers: ["姐姐唱歌唱得不错。", "姐姐歌唱得不错。", "姐姐唱得很好。", "姐姐唱歌唱得很好。", "姐姐唱得不错。"] },
        { vi: "Anh ấy học giỏi hơn tôi.", answers: ["他比我学得好。", "他学得比我好。"] },
        { vi: "Bạn ở có xa không?", answers: ["你住得远不远？", "你住得远吗？"] },
        { vi: "Bạn mặc ít quá.", answers: ["你穿得太少了。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "B每天早上六点多起床。", a: true },
        { q: "B每天晚上十二点睡觉。", a: false },
        { q: "B觉得自己做饭做得不怎么样。", a: true },
        { q: "B比他妻子做饭做得好。", a: false },
        { q: "今天下雪了。", a: true },
        { q: "今天零上10度。", a: false },
        { q: "B的弟弟家离公司有点儿远。", a: true },
        { q: "B的弟弟希望住得远一点儿。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你穿得太少了。",
        "我睡得也早。",
        "我妻子比我做得好。",
        "下雪了，今天真冷。",
        "他也希望能住得近一点儿。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "比较一下你和你的朋友：谁起得早？谁跑得快？谁汉语说得好？ (So sánh bạn và bạn của bạn: ai dậy sớm hơn? Ai chạy nhanh hơn? Ai nói tiếng Hán giỏi hơn?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 12 (bổ ngữ trạng thái với 得, câu 比 với 得).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["得", "比"],
      minGrammar: 2,
      sample: "我的朋友大卫每天六点就起床，他比我起得早。他睡得也早，每天晚上十点就睡觉。大卫跑步跑得很快，他比我跑得快多了。但是我汉语说得比他好，他汉字写得不太好。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 得 / 的", points: 6,
      subtitle: "Chọn 得 (bổ ngữ trạng thái) hoặc 的 (định ngữ).",
      grammarWord: "得 / 的",
      options: ["得", "的"],
      items: [
        { q: "他说___很好。", answers: ["得"] },
        { q: "这是我妈妈做___饭。", answers: ["的"] },
        { q: "我起___很早。", answers: ["得"] },
        { q: "你吃___太少了。", answers: ["得"] },
        { q: "新买___自行车很漂亮。", answers: ["的"] },
        { q: "姐姐唱歌唱___不错。", answers: ["得"] },
        { q: "左边那个红色___是我的。", answers: ["的"] },
        { q: "你住___远不远？", answers: ["得"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: bổ ngữ trạng thái", points: 6,
      subtitle: "Chọn từ thích hợp để hoàn thành bổ ngữ trạng thái.",
      grammarWord: "动词 + 得 + 形容词",
      options: ["很好", "很早", "太少", "不远", "很快", "不错"],
      items: [
        { q: "他汉语说得___。", answers: ["很好", "不错"] },
        { q: "我每天六点起床，我起得___。", answers: ["很早"] },
        { q: "再来点儿米饭吧，你吃得___了。", answers: ["太少"] },
        { q: "我家离学校走五分钟，我住得___。", answers: ["不远"] },
        { q: "姐姐跑步跑得___。", answers: ["很快"] },
        { q: "下雪了，你穿得___了。", answers: ["太少"] },
        { q: "她唱歌唱得___，大家都喜欢听。", answers: ["不错", "很好"] },
        { q: "他每天五点就起床，起得___。", answers: ["很早"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: câu 比 với bổ ngữ trạng thái", points: 5,
      subtitle: "Điền từ còn thiếu để hoàn thành câu so sánh.",
      grammarWord: "比……得……",
      options: ["比", "得"],
      items: [
        { q: "他___我学得好。", answers: ["比"] },
        { q: "姐姐跑___比我快。", answers: ["得"] },
        { q: "我妻子___我做得好。", answers: ["比"] },
        { q: "他学___比我好。", answers: ["得"] },
        { q: "你___我早起一个小时。", answers: ["比"] },
        { q: "妹妹唱歌唱___比我好。", answers: ["得"] },
        { q: "大卫___我写得快。", answers: ["比"] },
        { q: "今天我起___比你早。", answers: ["得"] },
      ],
    },
  ],
};
