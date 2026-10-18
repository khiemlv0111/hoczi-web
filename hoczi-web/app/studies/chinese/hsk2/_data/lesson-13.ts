import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第13课 门开着呢。 (Cửa đang mở.)
// Nguồn: Giáo trình chuẩn HSK2, trang 111–118 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson13: Lesson = {
  level: "hsk2",
  no: 13,
  slug: "bai-13",
  zh: "门开着呢。",
  pinyin: "Mén kāi zhe ne.",
  vi: "Cửa đang mở.",
  en: "The door is open.",
  topic: "日常生活 · Miêu tả trạng thái, người, hỏi đường",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 11 từ mới: 着、手、拿、铅笔、班、长、笑、宾馆、一直、往、路口.",
    "Hiểu và dùng được 3 điểm ngữ pháp: trợ từ động thái 着 (sự kéo dài của trạng thái), câu hỏi tu từ 不是……吗？, giới từ 往.",
    "Đọc hiểu 4 đoạn hội thoại về tìm ông Trương, cô gái đang nói chuyện, bạn gái mới, hỏi đường đến khách sạn.",
    "Miêu tả trạng thái người/vật (开着、穿着、拿着); hỏi và chỉ đường (往前走、往右走).",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：铅笔、手、宾馆、拿、眼睛、路口",
      vi: "Chọn hình tương ứng với các từ: 铅笔 (bút chì), 手 (tay), 宾馆 (khách sạn), 拿 (cầm), 眼睛 (mắt), 路口 (giao lộ).",
    },
    {
      zh: "给下面的动词加上合适的宾语：下……、坐……、听……、上……、送……、拿……",
      vi: "Thêm tân ngữ phù hợp sau động từ: xuống…, ngồi…, nghe…, lên…, tặng/đưa…, cầm…",
    },
  ],

  vocab: [
    { id: 1, han: "着", py: "zhe", pos: "trợ.", meaning: "(trợ từ) chỉ trạng thái đang tiếp diễn", example: "门开着呢，请进。", exampleVi: "Cửa đang mở, mời vào." },
    { id: 2, han: "手", py: "shǒu", pos: "dt.", meaning: "tay", example: "那个手里拿着铅笔的呢？", exampleVi: "Còn cô gái đang cầm bút chì trong tay thì sao?" },
    { id: 3, han: "拿", py: "ná", pos: "đgt.", meaning: "cầm", example: "那个手里拿着铅笔的呢？", exampleVi: "Còn cô gái đang cầm bút chì trong tay thì sao?" },
    { id: 4, han: "铅笔", py: "qiānbǐ", pos: "dt.", meaning: "bút chì", example: "她手里拿着铅笔。", exampleVi: "Trong tay cô ấy cầm bút chì." },
    { id: 5, han: "班", py: "bān", pos: "dt.", meaning: "lớp học", example: "就是我们班那个长着两个大眼睛的女孩儿。", exampleVi: "Đó là cô gái có đôi mắt to ở lớp bọn mình đấy." },
    { id: 6, han: "长", py: "zhǎng", pos: "đgt.", meaning: "sinh ra, mọc, có (ngoại hình)", example: "她长着两个大眼睛。", exampleVi: "Cô ấy có đôi mắt to." },
    { id: 7, han: "笑", py: "xiào", pos: "đgt.", meaning: "cười", example: "她是一个非常爱笑的女孩儿。", exampleVi: "Cô ấy là cô gái rất hay cười." },
    { id: 8, han: "宾馆", py: "bīnguǎn", pos: "dt.", meaning: "khách sạn", example: "请问，这儿离新京宾馆远吗？", exampleVi: "Cho tôi hỏi khách sạn Tân Kinh có ở xa chỗ này không?" },
    { id: 9, han: "一直", py: "yìzhí", pos: "p.", meaning: "thẳng; suốt", example: "从这儿一直往前走。", exampleVi: "Từ đây đi thẳng về phía trước." },
    { id: 10, han: "往", py: "wǎng", pos: "giới.", meaning: "về phía", example: "到了前面的路口再往右走。", exampleVi: "Đến giao lộ phía trước thì rẽ phải." },
    { id: 11, han: "路口", py: "lùkǒu", pos: "dt.", meaning: "giao lộ, ngã tư", example: "到了前面的路口再往右走。", exampleVi: "Đến giao lộ phía trước thì rẽ phải." },
    { id: 12, han: "杨笑笑", py: "Yáng Xiàoxiao", pos: "dt.", meaning: "Dương Tiếu Tiếu (tên người)", example: "她姓杨，叫杨笑笑。", exampleVi: "Cô ấy họ Dương, tên là Dương Tiếu Tiếu." },
  ],

  text: {
    title: "课文 门开着呢。",
    paragraphs: [
      {
        heading: "课文一 · 在办公室 (Trong văn phòng)",
        zh: "A：门开着呢，请进。\nB：请问，张先生在吗？\nA：他出去了。你下午再来吧。\nB：好的，谢谢！",
        vi: "A: Cửa đang mở, mời vào.\nB: Cho tôi hỏi là ông Trương có ở đây không?\nA: Ông ấy ra ngoài rồi. Cô hãy quay lại vào buổi chiều nhé.\nB: Được, cám ơn cô!",
        questions: ["张先生去哪儿了？"],
      },
      {
        heading: "课文二 · 在办公室 (Trong văn phòng)",
        zh: "A：那个正在说话的女孩儿是谁？\nB：我知道她的名字，她姓杨，叫杨笑笑，她姐姐是我同学。\nA：那个手里拿着铅笔的呢？\nB：我不认识。",
        vi: "A: Cô gái đang nói chuyện là ai vậy?\nB: Mình biết tên cô ấy. Cô ấy họ Dương, tên là Dương Tiếu Tiếu. Chị cô ấy là bạn học của mình.\nA: Còn cô gái đang cầm bút chì trong tay thì sao?\nB: Mình không biết cô ấy.",
        questions: ["杨笑笑是谁？"],
      },
      {
        heading: "课文三 · 在运动场 (Ở sân vận động)",
        zh: "A：听说你有女朋友了？我认识她吗？\nB：就是我们班那个长着两个大眼睛，非常爱笑的女孩儿。\nA：她不是有男朋友吗？\nB：那个已经是她的前男友了。",
        vi: "A: Nghe nói cậu đã có bạn gái rồi, phải vậy không? Mình có biết cô ấy không nhỉ?\nB: Đó là cô gái có đôi mắt to và rất hay cười. Cô ấy học ở lớp bọn mình đấy.\nA: Chẳng phải cô ấy đã có bạn trai rồi sao?\nB: Người đó là bạn trai cũ rồi.",
        questions: ["他的女朋友是谁？", "“前男友”是什么意思？"],
      },
      {
        heading: "课文四 · 在路上 (Trên đường)",
        zh: "A：请问，这儿离新京宾馆远吗？\nB：不远，走路二十分钟就到。\nA：你能告诉我怎么走吗？\nB：从这儿一直往前走，到了前面的路口再往右走。",
        vi: "A: Cho tôi hỏi là khách sạn Tân Kinh có ở xa chỗ này không?\nB: Không xa đâu, đi bộ 20 phút là đến rồi.\nA: Anh có thể cho tôi biết đi thế nào không?\nB: Từ đây đi thẳng về phía trước, đến giao lộ thì rẽ phải.",
        questions: ["去新京宾馆怎么走？"],
      },
    ],
    notes: [
      "杨笑笑 (Yáng Xiàoxiao): Dương Tiếu Tiếu; 新京宾馆: khách sạn Tân Kinh.",
      "前男友: bạn trai cũ (前 = trước đây).",
      "爱笑: hay cười (爱 + động từ: hay, thích làm gì).",
    ],
  },

  grammar: [
    {
      word: "动词 + 着",
      title: "Trợ từ động thái 着",
      usages: [
        {
          label: "Khẳng định",
          explain: "Động từ kết hợp với 着 chỉ sự kéo dài của trạng thái nào đó.",
          examples: ["门开着。", "他们穿着红色的衣服。", "（她）拿着铅笔。"],
        },
        {
          label: "Phủ định: 没 + động từ + 着",
          explain: "Thêm 没 vào trước động từ.",
          examples: ["门没开着。", "他们没穿着红色的衣服。", "（她）没拿着铅笔。"],
        },
        {
          label: "Nghi vấn: …… + 没有？",
          explain: "Thêm 没有 vào cuối câu.",
          examples: ["门开着没有？", "他们穿着红色的衣服没有？", "她（手里）拿着铅笔没有？"],
        },
      ],
    },
    {
      word: "不是……吗？",
      title: "Câu hỏi tu từ 不是……吗？ (chẳng phải… sao?)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thường dùng để nhắc ai nhớ đến điều gì hoặc bày tỏ sự khó hiểu, thái độ không hài lòng.",
          examples: ["不是说今天有雨吗？怎么没下？", "你不是北京人吗？怎么不会说北京话？", "（她是你的女朋友？）她不是有男朋友了吗？"],
        },
      ],
    },
    {
      word: "往",
      title: "Giới từ 往 (về phía)",
      usages: [
        {
          label: "Cách dùng",
          explain: "往 thường dùng để chỉ phương hướng.",
          examples: ["从这儿往前走，就是我们学校。", "你看，往左走是医院，往右走是银行。", "从这儿一直往前走，到了前面的路口再往右走。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "门开___呢，请进。", options: ["着", "了", "过", "得"], answer: "着" },
    { sentence: "那个___里拿着铅笔的呢？", options: ["手", "班", "路口", "宾馆"], answer: "手" },
    { sentence: "她手里___着铅笔。", options: ["拿", "笑", "往", "长"], answer: "拿" },
    { sentence: "她手里拿着一支___。", options: ["铅笔", "宾馆", "路口", "班"], answer: "铅笔" },
    { sentence: "就是我们___那个爱笑的女孩儿。", options: ["班", "手", "路口", "宾馆"], answer: "班" },
    { sentence: "她___着两个大眼睛。", options: ["长", "拿", "笑", "往"], answer: "长" },
    { sentence: "她是一个非常爱___的女孩儿。", options: ["笑", "拿", "长", "往"], answer: "笑" },
    { sentence: "请问，这儿离新京___远吗？", options: ["宾馆", "路口", "铅笔", "手"], answer: "宾馆" },
    { sentence: "从这儿___往前走。", options: ["一直", "一起", "一下", "一共"], answer: "一直" },
    { sentence: "到了前面的___再往右走。", options: ["路口", "宾馆", "班", "铅笔"], answer: "路口" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [3, 5, 7] },
        { vocabId: 3, distractors: [2, 10, 6] },
        { vocabId: 4, distractors: [8, 11, 5] },
        { vocabId: 7, distractors: [6, 3, 1] },
        { vocabId: 8, distractors: [11, 4, 5] },
        { vocabId: 9, distractors: [10, 11, 7] },
        { vocabId: 10, distractors: [9, 3, 6] },
        { vocabId: 11, distractors: [8, 4, 9] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 3, 4, 7, 8, 9, 10, 11],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["门", "开", "着", "呢", "，", "请进", "。"], answer: "门开着呢，请进。", vi: "Cửa đang mở, mời vào." },
        { tokens: ["那个", "手里", "拿着", "铅笔", "的", "呢", "？"], answer: "那个手里拿着铅笔的呢？", vi: "Còn người đang cầm bút chì trong tay?" },
        { tokens: ["她", "不是", "有", "男朋友", "吗", "？"], answer: "她不是有男朋友吗？", vi: "Chẳng phải cô ấy có bạn trai rồi sao?" },
        { tokens: ["从这儿", "一直", "往", "前", "走", "。"], answer: "从这儿一直往前走。", vi: "Từ đây đi thẳng về phía trước." },
        { tokens: ["到了", "前面的路口", "再", "往右", "走", "。"], answer: "到了前面的路口再往右走。", vi: "Đến giao lộ phía trước thì rẽ phải." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Văn phòng", text: "A：门开{{c1}}{{c2}}，请进。\nB：请问，张先生在吗？\nA：他{{c3}}了。你下午{{c4}}来吧。\nB：好的，谢谢！" },
        { title: "Bài khóa 2 · Cô gái đang nói chuyện", text: "A：那个{{c5}}说话的女孩儿是谁？\nB：我知道她的名字，她{{c6}}杨，叫杨笑笑，她姐姐是我{{c7}}。\nA：那个{{c8}}里{{c9}}着{{c10}}的呢？\nB：我不认识。" },
      ],
      answers: { c1: "着", c2: "呢", c3: "出去", c4: "再", c5: "正在", c6: "姓", c7: "同学", c8: "手", c9: "拿", c10: "铅笔" },
      bank: ["着", "呢", "出去", "再", "正在", "姓", "同学", "手", "拿", "铅笔", "叫", "了", "笑"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Bạn gái mới", text: "A：听说你有女朋友了？我认识她吗？\nB：就是我们{{e1}}那个{{e2}}着两个大眼睛，非常爱{{e3}}的女孩儿。\nA：她{{e4}}有男朋友{{e5}}？\nB：那个已经是她的前男友了。" },
        { title: "Bài khóa 4 · Hỏi đường", text: "A：请问，这儿离新京{{e6}}远吗？\nB：不远，走路二十分钟就到。\nA：你能告诉我怎么走吗？\nB：从这儿{{e7}}{{e8}}前走，到了前面的{{e9}}再往{{e10}}走。" },
      ],
      answers: { e1: "班", e2: "长", e3: "笑", e4: "不是", e5: "吗", e6: "宾馆", e7: "一直", e8: "往", e9: "路口", e10: "右" },
      bank: ["班", "长", "笑", "不是", "吗", "宾馆", "一直", "往", "路口", "右", "呢", "拿", "离"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "他们穿着红色的衣服。", vi: "Họ đang mặc quần áo màu đỏ.", keywords: ["mặc", "màu đỏ"] },
        { zh: "不是说今天有雨吗？怎么没下？", vi: "Chẳng phải nói hôm nay có mưa sao? Sao không mưa?", keywords: ["chẳng phải", "mưa"] },
        { zh: "你看，往左走是医院，往右走是银行。", vi: "Bạn xem, đi về bên trái là bệnh viện, đi về bên phải là ngân hàng.", keywords: ["bên trái", "bệnh viện", "ngân hàng"] },
        { zh: "门没开着。", vi: "Cửa không mở.", keywords: ["cửa", "không mở"] },
        { zh: "从这儿往前走，就是我们学校。", vi: "Từ đây đi về phía trước là trường của chúng tôi.", keywords: ["phía trước", "trường"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Cửa đang mở, mời vào.", answers: ["门开着呢，请进。", "门开着，请进。"] },
        { vi: "Chẳng phải bạn là người Bắc Kinh sao?", answers: ["你不是北京人吗？"] },
        { vi: "Cô ấy đang cầm bút chì.", answers: ["她拿着铅笔。", "她手里拿着铅笔。"] },
        { vi: "Từ đây đi thẳng về phía trước.", answers: ["从这儿一直往前走。"] },
        { vi: "Bạn có thể cho tôi biết đi thế nào không?", answers: ["你能告诉我怎么走吗？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "张先生出去了。", a: true },
        { q: "A让B明天再来。", a: false },
        { q: "杨笑笑的姐姐是B的同学。", a: true },
        { q: "B认识那个手里拿着铅笔的女孩儿。", a: false },
        { q: "B的女朋友长着两个大眼睛。", a: true },
        { q: "B的女朋友现在还有男朋友。", a: false },
        { q: "走路去新京宾馆要二十分钟。", a: true },
        { q: "到了前面的路口要往左走。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "门开着呢，请进。",
        "那个正在说话的女孩儿是谁？",
        "她不是有男朋友吗？",
        "这儿离新京宾馆远吗？",
        "从这儿一直往前走。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "告诉朋友从你家到学校/公司怎么走，再描述一个你的同学。 (Chỉ đường cho bạn từ nhà bạn đến trường/công ty, rồi miêu tả một bạn học của bạn.)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 13 (着, 不是……吗, 往).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["着", "往", "不是"],
      minGrammar: 2,
      sample: "从我家出来，一直往前走，到了前面的路口再往右走，走十分钟就到学校了。我们班有一个女孩儿，她长着两个大眼睛，非常爱笑。上课的时候，她手里总是拿着一支铅笔。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: trợ từ 着", points: 6,
      subtitle: "Chọn động từ thích hợp đi với 着.",
      grammarWord: "动词 + 着",
      options: ["开", "穿", "拿", "长", "坐", "写"],
      items: [
        { q: "门___着呢，请进。", answers: ["开"] },
        { q: "他们___着红色的衣服。", answers: ["穿"] },
        { q: "那个手里___着铅笔的女孩儿是谁？", answers: ["拿"] },
        { q: "她___着两个大眼睛。", answers: ["长"] },
        { q: "妈妈___着看电视。", answers: ["坐"] },
        { q: "黑板上___着很多字。", answers: ["写"] },
        { q: "今天很冷，他___着一件黑色的衣服。", answers: ["穿"] },
        { q: "房间的门没___着。", answers: ["开"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 不是……吗？", points: 6,
      subtitle: "Chọn 不是 hoặc 吗 cho mỗi chỗ trống.",
      grammarWord: "不是……吗",
      options: ["不是", "吗"],
      items: [
        { q: "___说今天有雨吗？怎么没下？", answers: ["不是"] },
        { q: "你不是北京人___？怎么不会说北京话？", answers: ["吗"] },
        { q: "她___有男朋友吗？", answers: ["不是"] },
        { q: "你不是说今天去看电影___？", answers: ["吗"] },
        { q: "你___已经吃饭了吗？怎么又吃了？", answers: ["不是"] },
        { q: "他不是去北京了___？", answers: ["吗"] },
        { q: "今天___星期六吗？你怎么还上班？", answers: ["不是"] },
        { q: "你不是喜欢喝咖啡___？", answers: ["吗"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: giới từ 往", points: 5,
      subtitle: "Chọn hướng thích hợp sau 往.",
      grammarWord: "往",
      options: ["前", "左", "右"],
      items: [
        { q: "从这儿往___走，就是我们学校。", answers: ["前"] },
        { q: "往___走是医院，往右走是银行。", answers: ["左"] },
        { q: "往左走是医院，往___走是银行。", answers: ["右"] },
        { q: "从这儿一直往___走。", answers: ["前"] },
        { q: "到了前面的路口再往___走。", answers: ["右", "左"] },
        { q: "银行在右边，你往___走吧。", answers: ["右"] },
        { q: "医院在左边，往___走。", answers: ["左"] },
        { q: "宾馆就在前面，一直往___走。", answers: ["前"] },
      ],
    },
  ],
};
