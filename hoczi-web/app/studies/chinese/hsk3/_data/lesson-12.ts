import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第12课 把重要的东西放在我这儿吧。 (Hãy để những đồ quan trọng ở chỗ tôi đi.)
// Nguồn: Giáo trình chuẩn HSK3, trang 114–122 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson12: Lesson = {
  level: "hsk3",
  no: 12,
  slug: "bai-12",
  zh: "把重要的东西放在我这儿吧。",
  pinyin: "Bǎ zhòngyào de dōngxi fàng zài wǒ zhèr ba.",
  vi: "Hãy để những đồ quan trọng ở chỗ tôi đi.",
  en: "Leave your important things with me.",
  topic: "出差 · Đi công tác, đồ dùng, thói quen",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 14 từ mới: 太阳、西、生气、行李箱、自己、包、发现、护照、起飞、司机、教、画、需要、黑板.",
    "Hiểu và dùng được 2 điểm ngữ pháp: phân biệt 才 và 就 (sớm/nhanh – muộn/chậm), câu chữ 把 (2) A 把 B + động từ + 在/到/给…….",
    "Đọc hiểu 3 đoạn hội thoại (đi ngủ sớm, chuẩn bị đi công tác, quên hộ chiếu ở sân bay) và 1 đoạn văn của cô giáo dạy vẽ.",
    "Nói việc gì xảy ra sớm hay muộn bằng 就/才; nói đặt/đưa đồ vật ở đâu, cho ai bằng câu chữ 把.",
    "Từ mới ghép từ chữ cũ: 钱包、电子邮箱、箱子.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：护照、黑板、行李箱、太阳、画儿、包",
      vi: "Chọn hình tương ứng với các từ: 护照 (hộ chiếu), 黑板 (bảng đen), 行李箱 (vali), 太阳 (mặt trời), 画儿 (bức tranh), 包 (túi, cặp).",
    },
    {
      zh: "下边这些东西，你会放在什么地方？铅笔、衣服、照片、钱包、护照、笔记本电脑",
      vi: "Bạn sẽ đặt những đồ sau ở đâu? Bút chì (vd. trên bàn), quần áo, ảnh, ví tiền, hộ chiếu, máy tính xách tay.",
    },
  ],

  vocab: [
    { id: 1, han: "太阳", py: "tàiyáng", pos: "dt.", meaning: "mặt trời", example: "今天太阳从西边出来了吗？", exampleVi: "Hôm nay mặt trời mọc đằng tây à?" },
    { id: 2, han: "西", py: "xī", pos: "dt.", meaning: "phía tây, hướng tây", example: "太阳从西边出来了。", exampleVi: "Mặt trời mọc đằng tây rồi." },
    { id: 3, han: "生气", py: "shēng qì", pos: "đgt.", meaning: "giận, tức giận", example: "经理生气了，他告诉我，明天8点不到，以后就别来了。", exampleVi: "Giám đốc giận rồi, ông ấy bảo anh mai 8 giờ không đến thì sau này khỏi đến nữa." },
    { id: 4, han: "行李箱", py: "xínglixiāng", pos: "dt.", meaning: "hành lý, vali", example: "那我帮你把衣服放到行李箱里吧。", exampleVi: "Vậy em giúp anh xếp quần áo vào vali nhé." },
    { id: 5, han: "自己", py: "zìjǐ", pos: "đt.", meaning: "tự mình, bản thân", example: "你要自己照顾好自己。", exampleVi: "Em phải tự chăm sóc tốt cho bản thân." },
    { id: 6, han: "包", py: "bāo", pos: "dt.", meaning: "cặp, túi", example: "我已经把我的照片放在你的包里了。", exampleVi: "Em đã để ảnh của em vào túi của anh rồi." },
    { id: 7, han: "发现", py: "fāxiàn", pos: "đgt.", meaning: "phát hiện", example: "来机场的路上我才发现忘带护照了。", exampleVi: "Trên đường đến sân bay tôi mới phát hiện quên mang hộ chiếu." },
    { id: 8, han: "护照", py: "hùzhào", pos: "dt.", meaning: "hộ chiếu", example: "桌子上有一本护照，是谁的？", exampleVi: "Trên bàn có một quyển hộ chiếu, của ai vậy?" },
    { id: 9, han: "起飞", py: "qǐfēi", pos: "đgt.", meaning: "cất cánh (máy bay)", example: "快点吧，飞机就要起飞了。", exampleVi: "Nhanh lên, máy bay sắp cất cánh rồi." },
    { id: 10, han: "司机", py: "sījī", pos: "dt.", meaning: "tài xế", example: "司机把我送到机场的时候，我才发现忘记带钱包了。", exampleVi: "Lúc tài xế đưa tôi đến sân bay, tôi mới phát hiện quên mang ví." },
    { id: 11, han: "教", py: "jiāo", pos: "đgt.", meaning: "dạy", example: "我是一个中学老师，教学生画画儿。", exampleVi: "Tôi là một giáo viên trung học, dạy học sinh vẽ tranh." },
    { id: 12, han: "画", py: "huà", pos: "đgt./dt.", meaning: "vẽ; tranh", example: "这张画真漂亮！是你的吗？", exampleVi: "Bức tranh này đẹp quá! Của bạn à?" },
    { id: 13, han: "需要", py: "xūyào", pos: "đgt.", meaning: "cần", example: "我都会把下次学生需要带的东西写在黑板上。", exampleVi: "Lần nào tôi cũng viết lên bảng những đồ học sinh cần mang lần sau." },
    { id: 14, han: "黑板", py: "hēibǎn", pos: "dt.", meaning: "bảng đen", example: "教室后边的那块黑板上写着几个字，你看得见吗？", exampleVi: "Trên tấm bảng đen phía sau lớp có viết mấy chữ, bạn nhìn thấy không?" },
    { id: 15, han: "钱包", py: "qiánbāo", pos: "dt.", meaning: "ví tiền (钱 + 包)", example: "我才发现忘记带钱包了。", exampleVi: "Tôi mới phát hiện quên mang ví.", group: "extended" },
    { id: 16, han: "电子邮箱", py: "diànzǐ yóuxiāng", pos: "dt.", meaning: "hộp thư điện tử (电子邮件 + 行李箱)", example: "你的电子邮箱是多少？", exampleVi: "Địa chỉ email của bạn là gì?", group: "extended" },
    { id: 17, han: "箱子", py: "xiāngzi", pos: "dt.", meaning: "cái hòm, thùng, vali (行李箱 + 杯子)", example: "你把衣服放在我的箱子里吧，我的箱子大。", exampleVi: "Bạn để quần áo vào vali của tôi đi, vali của tôi to.", group: "extended" },
  ],

  text: {
    title: "课文 把重要的东西放在我这儿吧。",
    paragraphs: [
      {
        heading: "课文一 · 在家 (Ở nhà)",
        zh: "小丽：今天太阳从西边出来了吗？\n小刚：怎么了？\n小丽：你怎么这么早就要睡觉了？以前都要12点以后才睡觉。\n小刚：我明天8点就要到公司。\n小丽：有事吗？\n小刚：经理生气了，他告诉我，明天8点不到，以后就别来了。",
        vi: "Tiểu Lệ: Hôm nay mặt trời mọc đằng tây à?\nTiểu Cương: Sao thế?\nTiểu Lệ: Sao anh đi ngủ sớm thế? Trước đây toàn sau 12 giờ mới ngủ.\nTiểu Cương: Mai 8 giờ anh phải có mặt ở công ty rồi.\nTiểu Lệ: Có việc gì à?\nTiểu Cương: Giám đốc giận rồi, ông ấy bảo anh mai 8 giờ không đến thì sau này khỏi đến nữa.",
        questions: ["小刚平时几点睡觉？今天呢？", "小刚为什么明天8点就要到公司？"],
      },
      {
        heading: "课文二 · 在家 (Ở nhà)",
        zh: "小刚：我要跟周经理去外地办事，明天的飞机。\n小丽：那我帮你把衣服放到行李箱里吧。什么时候回来？\n小刚：一个星期就回来。\n小丽：啊？一个星期以后才回来？\n小刚：你要自己照顾好自己，我已经给你准备好吃的和喝的了。\n小丽：好吧。我已经把我的照片放在你的包里了。",
        vi: "Tiểu Cương: Anh phải đi công tác cùng giám đốc Châu, máy bay ngày mai.\nTiểu Lệ: Vậy em giúp anh xếp quần áo vào vali nhé. Khi nào anh về?\nTiểu Cương: Một tuần là về.\nTiểu Lệ: Hả? Một tuần sau mới về à?\nTiểu Cương: Em phải tự chăm sóc tốt cho mình nhé, anh đã chuẩn bị sẵn đồ ăn đồ uống cho em rồi.\nTiểu Lệ: Thôi được. Em đã để ảnh của em vào túi của anh rồi.",
        questions: ["小刚什么时候出差回来？", "小刚给小丽准备了什么？小丽呢？"],
      },
      {
        heading: "课文三 · 在机场 (Ở sân bay)",
        zh: "周明：你怎么才来？\n小刚：对不起，周经理，来机场的路上我才发现忘带护照了。\n周明：快点吧，飞机就要起飞了。\n小刚：您有钱吗？司机把我送到机场的时候，我才发现忘记带钱包了。\n周明：我看你还是把重要的东西放在我这儿吧。",
        vi: "Châu Minh: Sao bây giờ cậu mới đến?\nTiểu Cương: Xin lỗi giám đốc Châu, trên đường đến sân bay tôi mới phát hiện quên mang hộ chiếu.\nChâu Minh: Nhanh lên, máy bay sắp cất cánh rồi.\nTiểu Cương: Anh có tiền không? Lúc tài xế đưa tôi đến sân bay, tôi mới phát hiện quên mang ví.\nChâu Minh: Tôi thấy cậu tốt nhất cứ để những đồ quan trọng ở chỗ tôi đi.",
        questions: ["小刚今天忘带什么了？", "周经理让小刚做什么？"],
      },
      {
        heading: "课文四 · 我是一个中学老师 (Tôi là giáo viên trung học)",
        zh: "我是一个中学老师，教学生画画儿。每次下课前，我都会把下次学生需要带的东西写在黑板上，但是每次上课时，总会有学生忘了拿铅笔，所以我有点儿生气，不是因为他们没带铅笔，是因为他们没有好的学习习惯。",
        vi: "Tôi là một giáo viên trung học, dạy học sinh vẽ tranh. Lần nào trước khi tan học, tôi cũng viết lên bảng những đồ học sinh cần mang cho buổi sau, nhưng lần nào lên lớp cũng có học sinh quên mang bút chì, vì thế tôi hơi bực, không phải vì các em không mang bút chì, mà vì các em không có thói quen học tập tốt.",
        questions: ["每次下课以前，老师会做什么？", "老师为什么有点儿生气？"],
      },
    ],
    notes: [
      "太阳从西边出来了: mặt trời mọc đằng tây — câu nói đùa khi ai đó làm điều khác hẳn thường ngày.",
      "我这儿: chỗ tôi (đại từ nhân xưng + 这儿/那儿 chỉ nơi chốn).",
      "Tục ngữ – 习惯成自然 (Xíguàn chéng zìrán): việc đã quen làm trở thành tự nhiên; cần tập thói quen tốt, đừng nghĩ làm việc xấu một lần không sao.",
    ],
  },

  grammar: [
    {
      word: "才 / 就",
      title: "Phân biệt 才 và 就",
      usages: [
        {
          label: "就: sớm, nhanh, thuận lợi",
          explain: "Theo người nói, hành động xảy ra sớm hoặc được thực hiện nhanh chóng/thuận lợi.",
          examples: ["我早上五点就起床了。", "坐飞机一个小时就到了。", "我很容易就找到了他的家。", "你怎么这么早就要睡觉了？"],
        },
        {
          label: "才: muộn, chậm, không thuận lợi",
          explain: "Theo người nói, hành động xảy ra muộn hoặc được thực hiện chậm trễ/không thuận lợi.",
          examples: ["八点上课，他九点才起床。", "坐火车八个小时才能到。", "弟弟三个小时才做完作业。", "来机场的路上我才发现忘带护照了。"],
        },
      ],
      note: "就 thường đi với 了 ở cuối câu (五点就起床了); 才 thì không dùng 了 (九点才起床).",
    },
    {
      word: "A 把 B + 动词 + 在/到/给……",
      title: "Câu chữ 把 (2)",
      usages: [
        {
          label: "A 把 B + động từ + 在/到 + vị trí",
          explain: "Hành động tác động đến người/vật xác định, làm thay đổi vị trí của nó.",
          examples: ["我把照片放在你包里了。", "老师把作业放在桌子上了。", "我没把裤子放到椅子上。", "我帮你把衣服放到行李箱里吧。"],
        },
        {
          label: "A 把 B + động từ + 给 + người",
          explain: "Hành động làm thay đổi người sở hữu hay sử dụng một vật.",
          examples: ["我把鲜花送给老师了。", "我朋友把书借给我了。", "弟弟没把钱还给哥哥。", "你帮我把这本书带给小刚。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "这张___真漂亮！是你的吗？", options: ["黑板", "司机", "画", "护照"], answer: "画" },
    { sentence: "教室后边的那块___上写着几个字，你看得见吗？", options: ["黑板", "包", "司机", "画"], answer: "黑板" },
    { sentence: "你看，就是那位___找到了我的手机。", options: ["护照", "司机", "包", "黑板"], answer: "司机" },
    { sentence: "桌子上有一本___，是谁的？", options: ["画", "包", "护照", "司机"], answer: "护照" },
    { sentence: "请问，这个小___能带上飞机吗？", options: ["包", "黑板", "护照", "画"], answer: "包" },
    { sentence: "A：我现在能去一下洗手间吗？B：对不起，飞机就要___了，请您坐好。", options: ["发现", "生气", "自己", "起飞"], answer: "起飞" },
    { sentence: "A：你怎么了？B：今天我又迟到了，老师都___了。", options: ["生气", "起飞", "发现", "行李箱"], answer: "生气" },
    { sentence: "A：我___公司楼下那家店的蛋糕特别好吃。B：是吗？今天我也去买一块。", options: ["自己", "发现", "起飞", "生气"], answer: "发现" },
    { sentence: "A：我的衣服太多了！B：你把衣服放在我的___里吧，我的箱子大。", options: ["行李箱", "自己", "发现", "起飞"], answer: "行李箱" },
    { sentence: "A：我出国一个星期，你怎么办？B：不用担心，我可以照顾好___。", options: ["生气", "行李箱", "自己", "发现"], answer: "自己" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 9, 14] },
        { vocabId: 3, distractors: [7, 9, 13] },
        { vocabId: 4, distractors: [6, 8, 15] },
        { vocabId: 7, distractors: [3, 13, 9] },
        { vocabId: 8, distractors: [4, 10, 6] },
        { vocabId: 10, distractors: [8, 11, 14] },
        { vocabId: 13, distractors: [7, 5, 3] },
        { vocabId: 14, distractors: [12, 10, 1] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 5, 7, 8, 9, 11, 13],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["把", "重要的东西", "放在", "我这儿", "吧", "。"], answer: "把重要的东西放在我这儿吧。", vi: "Hãy để những đồ quan trọng ở chỗ tôi đi." },
        { tokens: ["我", "帮你", "把衣服", "放到", "行李箱里", "吧", "。"], answer: "我帮你把衣服放到行李箱里吧。", vi: "Tôi giúp bạn xếp quần áo vào vali nhé." },
        { tokens: ["来机场的路上", "我", "才", "发现", "忘带护照了", "。"], answer: "来机场的路上我才发现忘带护照了。", vi: "Trên đường đến sân bay tôi mới phát hiện quên mang hộ chiếu." },
        { tokens: ["我", "朋友", "把书", "借给", "我了", "。"], answer: "我朋友把书借给我了。", vi: "Bạn tôi cho tôi mượn sách rồi." },
        { tokens: ["坐飞机", "一个小时", "就", "到了", "。"], answer: "坐飞机一个小时就到了。", vi: "Đi máy bay một tiếng là đến rồi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ngủ sớm", text: "小丽：今天{{c1}}从{{c2}}边出来了吗？\n小刚：怎么了？\n小丽：你怎么这么早{{c3}}要睡觉了？以前都要12点以后{{c4}}睡觉。\n小刚：我明天8点就要到公司。\n小丽：有事吗？\n小刚：经理{{c5}}了，他告诉我，明天8点不到，以后就别来了。" },
        { title: "Bài khóa 2 · Chuẩn bị đi công tác", text: "小丽：那我帮你把衣服放{{c6}}{{c7}}里吧。什么时候回来？\n小刚：一个星期就回来。\n小刚：你要{{c8}}照顾好自己，我已经给你准备好吃的和喝的了。\n小丽：好吧。我已经{{c9}}我的照片放在你的{{c10}}里了。" },
      ],
      answers: { c1: "太阳", c2: "西", c3: "就", c4: "才", c5: "生气", c6: "到", c7: "行李箱", c8: "自己", c9: "把", c10: "包" },
      bank: ["太阳", "西", "就", "才", "生气", "到", "行李箱", "自己", "把", "包", "护照", "给", "东"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Ở sân bay", text: "周明：你怎么才来？\n小刚：对不起，周经理，来机场的路上我才{{e1}}忘带{{e2}}了。\n周明：快点吧，飞机就要{{e3}}了。\n小刚：您有钱吗？{{e4}}把我送{{e5}}机场的时候，我才发现忘记带钱包了。\n周明：我看你还是把{{e6}}的东西放在我这儿吧。" },
        { title: "Bài khóa 4 · Cô giáo dạy vẽ", text: "我是一个中学老师，{{e7}}学生{{e8}}画儿。每次下课前，我都会把下次学生{{e9}}带的东西写在{{e10}}上，但是每次上课时，总会有学生忘了拿铅笔……" },
      ],
      answers: { e1: "发现", e2: "护照", e3: "起飞", e4: "司机", e5: "到", e6: "重要", e7: "教", e8: "画", e9: "需要", e10: "黑板" },
      bank: ["发现", "护照", "起飞", "司机", "到", "重要", "教", "画", "需要", "黑板", "生气", "在", "包"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "八点上课，他九点才起床。", vi: "Tám giờ vào học, chín giờ anh ấy mới dậy.", keywords: ["tám giờ", "chín giờ", "mới dậy"] },
        { zh: "我早上五点就起床了。", vi: "Năm giờ sáng tôi đã dậy rồi.", keywords: ["năm giờ", "dậy"] },
        { zh: "老师把作业放在桌子上了。", vi: "Thầy giáo để bài tập trên bàn rồi.", keywords: ["bài tập", "trên bàn"] },
        { zh: "弟弟没把钱还给哥哥。", vi: "Em trai chưa trả tiền cho anh trai.", keywords: ["em trai", "trả tiền", "anh trai"] },
        { zh: "你要自己照顾好自己。", vi: "Bạn phải tự chăm sóc tốt cho bản thân.", keywords: ["chăm sóc", "bản thân"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi tặng hoa tươi cho cô giáo rồi.", answers: ["我把鲜花送给老师了。"] },
        { vi: "Tôi để ảnh vào túi của bạn rồi.", answers: ["我把照片放在你的包里了。", "我把照片放在你包里了。", "我把照片放到你的包里了。"] },
        { vi: "Đi tàu hỏa tám tiếng mới đến được.", answers: ["坐火车八个小时才能到。", "坐火车八个小时才到。"] },
        { vi: "Máy bay sắp cất cánh rồi.", answers: ["飞机就要起飞了。", "飞机快要起飞了。", "飞机要起飞了。"] },
        { vi: "Sao bạn đi ngủ sớm thế?", answers: ["你怎么这么早就要睡觉了？", "你怎么这么早就睡觉了？", "你怎么这么早就睡了？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小刚以前都是12点以后才睡觉。", a: true },
        { q: "经理让小刚明天9点到公司。", a: false },
        { q: "小刚要跟周经理去外地办事。", a: true },
        { q: "小刚三天以后就回来。", a: false },
        { q: "小丽把自己的照片放在小刚的包里了。", a: true },
        { q: "小刚今天忘带护照和钱包了。", a: true },
        { q: "老师是教学生数学的。", a: false },
        { q: "老师生气是因为学生没带铅笔。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "把重要的东西放在我这儿吧。",
        "你怎么才来？",
        "飞机就要起飞了。",
        "你要自己照顾好自己。",
        "我把照片放在你的包里了。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你的生活习惯：你几点起床？平时把常用的东西放在哪儿？ (Kể về thói quen sinh hoạt của bạn: mấy giờ dậy? Thường để đồ dùng hằng ngày ở đâu?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 12 (才/就, câu chữ 把 + 在/到/给).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["把", "就", "才", "放在", "放到", "给"],
      minGrammar: 2,
      sample: "我每天早上六点就起床了，我的朋友八点才起床。起床以后，我先把电脑放在桌子上，看看电子邮件。我习惯把钱包和护照放在包里，把衣服放到行李箱里。出门以前，我总会把重要的东西再看一下，所以我很少忘记带东西。我觉得自己的生活习惯还不错。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 才 / 就", points: 6,
      subtitle: "Chọn 才 hoặc 就 cho mỗi chỗ trống.",
      grammarWord: "才 / 就",
      options: ["才", "就"],
      items: [
        { q: "我早上五点___起床了。", answers: ["就"] },
        { q: "八点上课，他九点___起床。", answers: ["才"] },
        { q: "坐飞机一个小时___到了。", answers: ["就"] },
        { q: "坐火车八个小时___能到。", answers: ["才"] },
        { q: "我很容易___找到了他的家。", answers: ["就"] },
        { q: "弟弟三个小时___做完作业。", answers: ["才"] },
        { q: "你怎么这么早___要睡觉了？", answers: ["就"] },
        { q: "9点半了，你怎么___来？", answers: ["才"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 把 + động từ + 在/到/给", points: 6,
      subtitle: "Chọn 在, 到 hoặc 给 cho mỗi chỗ trống.",
      grammarWord: "在 / 到 / 给",
      options: ["在", "到", "给"],
      items: [
        { q: "我把照片放___你包里了。", answers: ["在", "到"] },
        { q: "我把鲜花送___老师了。", answers: ["给"] },
        { q: "我朋友把书借___我了。", answers: ["给"] },
        { q: "司机把我送___机场的时候，我才发现忘记带钱包了。", answers: ["到"] },
        { q: "我都会把需要带的东西写___黑板上。", answers: ["在"] },
        { q: "弟弟没把钱还___哥哥。", answers: ["给"] },
        { q: "我想把这些吃的送___朋友。", answers: ["给"] },
        { q: "你把衣服放___我的行李箱里吧。", answers: ["在", "到"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 发现 / 需要 / 自己", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "发现 / 需要 / 自己",
      options: ["发现", "需要", "自己"],
      items: [
        { q: "来机场的路上我才___忘带护照了。", answers: ["发现"] },
        { q: "我会把下次学生___带的东西写在黑板上。", answers: ["需要"] },
        { q: "你要___照顾好自己。", answers: ["自己"] },
        { q: "你累了，___休息休息。", answers: ["需要"] },
        { q: "这件事你___去做吧。", answers: ["自己"] },
        { q: "我___他越来越喜欢小丽了。", answers: ["发现"] },
        { q: "我不___你的帮助，我自己可以。", answers: ["需要"] },
        { q: "她总是___做饭，不去饭馆。", answers: ["自己"] },
      ],
    },
  ],
};
