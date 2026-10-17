import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第3课 桌子上放着很多饮料。 (Trên bàn có rất nhiều thức uống.)
// Nguồn: Giáo trình chuẩn HSK3, trang 36–44 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson03: Lesson = {
  level: "hsk3",
  no: 3,
  slug: "bai-3",
  zh: "桌子上放着很多饮料。",
  pinyin: "Zhuōzi shang fàngzhe hěn duō yǐnliào.",
  vi: "Trên bàn có rất nhiều thức uống.",
  en: "There are lots of drinks on the table.",
  topic: "购物 · Mua sắm, đồ uống",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 17 từ mới: 还是、爬山、小心、条、裤子、记得、衬衫、元、新鲜、甜、只、放、饮料、或者、舒服、花、绿.",
    "Hiểu và dùng được 3 điểm ngữ pháp: phân biệt 还是 và 或者, câu tồn tại “nơi chốn + động từ + 着 + số lượng + danh từ”, trợ động từ 会 chỉ khả năng.",
    "Đọc hiểu 4 đoạn hội thoại về thời tiết – đi leo núi, mua quần áo, mua trái cây, chọn đồ uống trong phòng giải lao.",
    "Hỏi – đáp lựa chọn (A 还是 B？), mô tả trong phòng/trên bàn có những gì.",
    "Từ mới ghép từ chữ cũ: 鲜奶、冷饮、上面.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：饮料、花茶、绿茶、水果、衬衫、裤子",
      vi: "Chọn hình tương ứng với các từ: 饮料 (đồ uống), 花茶 (trà hoa), 绿茶 (trà xanh), 水果 (trái cây), 衬衫 (áo sơ mi), 裤子 (quần).",
    },
    {
      zh: "看图片，说说这些地方有什么：桌子上、车里、椅子下、椅子上",
      vi: "Xem hình và cho biết các nơi sau có gì: trên bàn, trong xe, dưới ghế, trên ghế.",
    },
  ],

  vocab: [
    { id: 1, han: "还是", py: "háishi", pos: "liên.", meaning: "hay (dùng trong câu hỏi lựa chọn)", example: "明天是晴天还是阴天？", exampleVi: "Ngày mai trời nắng hay trời râm?" },
    { id: 2, han: "爬山", py: "pá shān", pos: "đgt.", meaning: "leo núi", example: "我们明天要去爬山。", exampleVi: "Ngày mai chúng tôi sẽ đi leo núi." },
    { id: 3, han: "小心", py: "xiǎoxīn", pos: "tt.", meaning: "cẩn thận", example: "爬山的时候要小心点儿。", exampleVi: "Lúc leo núi phải cẩn thận một chút." },
    { id: 4, han: "条", py: "tiáo", pos: "lượng.", meaning: "cái, chiếc (lượng từ cho quần, váy, đường, cá…)", example: "你觉得这条裤子怎么样？", exampleVi: "Anh thấy cái quần này thế nào?" },
    { id: 5, han: "裤子", py: "kùzi", pos: "dt.", meaning: "quần", example: "我记得你已经有两条这样的裤子了。", exampleVi: "Anh nhớ là em đã có hai cái quần như thế này rồi." },
    { id: 6, han: "记得", py: "jìde", pos: "đgt.", meaning: "nhớ, còn nhớ", example: "你还记得我吗？", exampleVi: "Bạn còn nhớ tôi không?" },
    { id: 7, han: "衬衫", py: "chènshān", pos: "dt.", meaning: "áo sơ mi", example: "这件衬衫怎么样？", exampleVi: "Cái áo sơ mi này thế nào?" },
    { id: 8, han: "元", py: "yuán", pos: "lượng.", meaning: "đồng (đơn vị tiền tệ)", example: "这上面写着320元。", exampleVi: "Trên này ghi 320 đồng." },
    { id: 9, han: "新鲜", py: "xīnxiān", pos: "tt.", meaning: "tươi", example: "这些水果真新鲜。", exampleVi: "Chỗ trái cây này tươi thật." },
    { id: 10, han: "甜", py: "tián", pos: "tt.", meaning: "ngọt", example: "这上面写着“西瓜不甜不要钱”。", exampleVi: "Trên này ghi “Dưa không ngọt không lấy tiền”." },
    { id: 11, han: "只", py: "zhǐ", pos: "p.", meaning: "chỉ", example: "今天晚上只吃水果不吃饭！", exampleVi: "Tối nay chỉ ăn trái cây, không ăn cơm!" },
    { id: 12, han: "放", py: "fàng", pos: "đgt.", meaning: "đặt, để", example: "桌子上放着很多饮料。", exampleVi: "Trên bàn để rất nhiều đồ uống." },
    { id: 13, han: "饮料", py: "yǐnliào", pos: "dt.", meaning: "đồ uống, thức uống", example: "桌子上放着很多饮料，你喝什么？", exampleVi: "Trên bàn có rất nhiều đồ uống, anh uống gì?" },
    { id: 14, han: "或者", py: "huòzhě", pos: "liên.", meaning: "hoặc (dùng trong câu trần thuật)", example: "茶或者咖啡都可以。", exampleVi: "Trà hoặc cà phê đều được." },
    { id: 15, han: "舒服", py: "shūfu", pos: "tt.", meaning: "dễ chịu, thoải mái", example: "喝杯热茶会很舒服。", exampleVi: "Uống một cốc trà nóng sẽ rất dễ chịu." },
    { id: 16, han: "花", py: "huā", pos: "dt.", meaning: "hoa", example: "花茶、绿茶、红茶，我都喜欢。", exampleVi: "Trà hoa, trà xanh, hồng trà, em đều thích." },
    { id: 17, han: "绿", py: "lǜ", pos: "tt.", meaning: "có màu xanh lá cây", example: "我喜欢喝绿茶。", exampleVi: "Tôi thích uống trà xanh." },
    { id: 18, han: "鲜奶", py: "xiānnǎi", pos: "dt.", meaning: "sữa tươi (新鲜 + 牛奶)", example: "我每天早上喝一杯鲜奶。", exampleVi: "Sáng nào tôi cũng uống một cốc sữa tươi.", group: "extended" },
    { id: 19, han: "冷饮", py: "lěngyǐn", pos: "dt.", meaning: "đồ uống lạnh (冷 + 饮料)", example: "天太热了，我们去买点儿冷饮吧。", exampleVi: "Trời nóng quá, chúng ta đi mua chút đồ uống lạnh đi.", group: "extended" },
    { id: 20, han: "上面", py: "shàngmian", pos: "dt.", meaning: "phía trên, bên trên (上边 + 前面)", example: "这上面写着320元。", exampleVi: "Trên này ghi 320 đồng.", group: "extended" },
  ],

  text: {
    title: "课文 桌子上放着很多饮料。",
    paragraphs: [
      {
        heading: "课文一 · 在小丽家 (Ở nhà chị Lệ)",
        zh: "小刚：明天是晴天还是阴天？\n小丽：阴天，电视上说多云。怎么了？有事？\n小刚：没事，我们明天要去爬山。\n小丽：爬山的时候要小心点儿。\n小刚：好，你也去吗？\n小丽：我不去，我有事。",
        vi: "Tiểu Cương: Ngày mai trời nắng hay trời râm?\nTiểu Lệ: Trời râm, ti vi nói nhiều mây. Sao thế? Có việc gì à?\nTiểu Cương: Không có gì, ngày mai bọn anh sẽ đi leo núi.\nTiểu Lệ: Lúc leo núi phải cẩn thận một chút nhé.\nTiểu Cương: Ừ, em cũng đi chứ?\nTiểu Lệ: Em không đi, em có việc.",
        questions: ["明天小刚去做什么？", "小丽也去吗？"],
      },
      {
        heading: "课文二 · 在商场 (Ở cửa hàng bách hóa)",
        zh: "周太太：你觉得这条裤子怎么样？\n周明：我记得你已经有两条这样的裤子了。\n周太太：那我们再看看别的。\n周明：这件衬衫怎么样？\n周太太：还不错，多少钱？\n周明：这上面写着320元。\n周太太：买一件。",
        vi: "Bà Châu: Anh thấy cái quần này thế nào?\nChâu Minh: Anh nhớ là em đã có hai cái quần như thế này rồi.\nBà Châu: Vậy chúng ta xem cái khác nữa.\nChâu Minh: Cái áo sơ mi này thế nào?\nBà Châu: Cũng được, bao nhiêu tiền?\nChâu Minh: Trên này ghi 320 đồng.\nBà Châu: Mua một cái.",
        questions: ["周太太买裤子了吗？为什么？", "周太太买什么了？多少钱？"],
      },
      {
        heading: "课文三 · 在水果店 (Ở cửa hàng trái cây)",
        zh: "周太太：这些水果真新鲜，我们买西瓜还是苹果？\n周明：西瓜吧。你看，这上面写着“西瓜不甜不要钱”。\n周太太：那我们买一个大点儿的吧。\n周明：再买几个苹果。\n周太太：好啊，今天晚上只吃水果不吃饭！",
        vi: "Bà Châu: Chỗ trái cây này tươi thật, chúng ta mua dưa hấu hay táo?\nChâu Minh: Dưa hấu đi. Em xem, trên này ghi “Dưa không ngọt không lấy tiền”.\nBà Châu: Vậy chúng ta mua quả to một chút nhé.\nChâu Minh: Mua thêm mấy quả táo nữa.\nBà Châu: Được, tối nay chỉ ăn trái cây, không ăn cơm!",
        questions: ["周明和太太买了什么水果？", "他们为什么买西瓜？"],
      },
      {
        heading: "课文四 · 在休息室 (Trong phòng giải lao)",
        zh: "小丽：桌子上放着很多饮料，你喝什么？\n小刚：茶或者咖啡都可以。你呢？你喝什么？\n小丽：我喝茶，茶是我的最爱。天冷了或者工作累了的时候，喝杯热茶会很舒服。\n小刚：你喜欢喝什么茶？\n小丽：花茶、绿茶、红茶，我都喜欢。",
        vi: "Tiểu Lệ: Trên bàn có rất nhiều đồ uống, anh uống gì?\nTiểu Cương: Trà hoặc cà phê đều được. Còn em? Em uống gì?\nTiểu Lệ: Em uống trà, trà là thứ em thích nhất. Những lúc trời lạnh hoặc làm việc mệt, uống một cốc trà nóng sẽ rất dễ chịu.\nTiểu Cương: Em thích uống loại trà nào?\nTiểu Lệ: Trà hoa, trà xanh, hồng trà, em đều thích.",
        questions: ["小刚喜欢喝什么？", "小丽喜欢喝什么？为什么？"],
      },
    ],
    notes: [
      "最爱 (zuì ài): thứ yêu thích nhất (茶是我的最爱).",
      "红茶 (hóngchá): hồng trà (người Việt hay gọi là trà đen).",
      "Tục ngữ – 茶好客常来 (Chá hǎo kè cháng lái): trà ngon khách sẽ đến thường; ý nói hàng hóa tốt chắc chắn sẽ được khách hàng ưa chuộng.",
    ],
  },

  grammar: [
    {
      word: "还是 / 或者",
      title: "Phân biệt 还是 và 或者 (hay / hoặc)",
      usages: [
        {
          label: "Cách dùng",
          explain: "还是 và 或者 đều diễn tả sự lựa chọn. Thông thường 还是 dùng trong câu hỏi, 或者 dùng trong câu trần thuật.",
          examples: ["你要喝咖啡还是喝茶？", "明天是晴天还是阴天？", "今天晚上吃米饭或者面条都可以。", "天冷了或者工作累了的时候，喝杯热茶很舒服。"],
        },
        {
          label: "Mệnh đề mang hình thức nghi vấn",
          explain: "Câu có mệnh đề mang hình thức nghi vấn (dù cả câu là câu trần thuật) thì trong mệnh đề đó chỉ được dùng 还是.",
          examples: ["周太太40岁还是50岁，我们不知道。", "小丽还没想好周末去爬山还是去看电影。", "他的生日是10月还是11月，我不记得了。", "我不知道这个人是男的还是女的。"],
        },
      ],
    },
    {
      word: "处所词 + 动词 + 着 + 数量 + 名词",
      title: "Câu tồn tại: nơi chốn + động từ + 着 + cụm danh từ",
      usages: [
        {
          label: "Khẳng định",
          explain: "Diễn tả ở nơi nào đó có vật/người gì. Động từ thường dùng: 放、写、坐、住… Cụm danh từ thường là sự vật không xác định (一本书、几个人), không dùng sự vật xác định như 这本书、周经理.",
          examples: ["桌子上放着一杯咖啡。", "我家楼上住着一个老师。", "上面写着320元。", "桌子上放着很多饮料。"],
        },
        {
          label: "Phủ định",
          explain: "Dạng phủ định: nơi chốn + 没 + động từ + 着 + danh từ; trước danh từ không có lượng từ.",
          examples: ["桌子上没放着咖啡。", "我家楼上没住着老师。", "上面没写着多少钱。", "桌子上没放着饮料。"],
        },
      ],
    },
    {
      word: "会",
      title: "Trợ động từ 会 chỉ khả năng",
      usages: [
        {
          label: "Cách dùng",
          explain: "会 đứng trước động từ/tính từ, chỉ khả năng (sẽ), thường dùng cho những sự việc chưa xảy ra.",
          examples: ["你穿得那么少，会感冒的。", "别担心，我会照顾好自己。", "你不给他打电话吗，他会不高兴的。", "喝杯热茶会很舒服。"],
        },
      ],
      note: "Thường đi với 的 ở cuối câu để nhấn mạnh: 会感冒的、会不高兴的.",
    },
  ],

  wordChoice: [
    { sentence: "你想喝点儿什么？茶___咖啡？", options: ["舒服", "或者", "还是", "衬衫"], answer: "还是" },
    { sentence: "这条___一点儿也不贵，买吧。", options: ["裤子", "衬衫", "舒服", "还是"], answer: "裤子" },
    { sentence: "我每个周末都在家看电视___听音乐，不工作。", options: ["还是", "或者", "裤子", "舒服"], answer: "或者" },
    { sentence: "你穿昨天新买的那件___吧。", options: ["裤子", "或者", "衬衫", "舒服"], answer: "衬衫" },
    { sentence: "我不喜欢南方，太热了，不___。", options: ["舒服", "衬衫", "还是", "裤子"], answer: "舒服" },
    { sentence: "A：我们看过这个电影，你___是什么时候吗？B：去年8月。", options: ["小心", "记得", "放", "只"], answer: "记得" },
    { sentence: "A：你跟我一起出去走走吧。B：我现在___想睡觉。", options: ["只", "放", "爬山", "记得"], answer: "只" },
    { sentence: "A：饭菜做好了吗？B：做好了，已经___在饭桌上了。", options: ["记得", "放", "小心", "只"], answer: "放" },
    { sentence: "A：您慢走，路上___点儿。B：谢谢你，再见。", options: ["小心", "爬山", "记得", "放"], answer: "小心" },
    { sentence: "A：上个周末你去哪儿了？B：我跟朋友去___了。", options: ["只", "小心", "爬山", "放"], answer: "爬山" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [14, 6, 3] },
        { vocabId: 3, distractors: [15, 9, 2] },
        { vocabId: 5, distractors: [7, 13, 16] },
        { vocabId: 6, distractors: [3, 1, 12] },
        { vocabId: 9, distractors: [15, 10, 17] },
        { vocabId: 13, distractors: [16, 5, 7] },
        { vocabId: 14, distractors: [1, 11, 6] },
        { vocabId: 15, distractors: [9, 3, 10] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 4, 7, 9, 10, 12, 13, 17],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["桌子上", "放着", "很多", "饮料", "。"], answer: "桌子上放着很多饮料。", vi: "Trên bàn để rất nhiều đồ uống." },
        { tokens: ["明天", "是", "晴天", "还是", "阴天", "？"], answer: "明天是晴天还是阴天？", vi: "Ngày mai trời nắng hay trời râm?" },
        { tokens: ["我", "记得", "你", "已经有", "两条", "这样的裤子了", "。"], answer: "我记得你已经有两条这样的裤子了。", vi: "Tôi nhớ là bạn đã có hai cái quần như thế này rồi." },
        { tokens: ["今天晚上", "只", "吃水果", "不", "吃饭", "。"], answer: "今天晚上只吃水果不吃饭。", vi: "Tối nay chỉ ăn trái cây không ăn cơm." },
        { tokens: ["喝杯", "热茶", "会", "很", "舒服", "。"], answer: "喝杯热茶会很舒服。", vi: "Uống một cốc trà nóng sẽ rất dễ chịu." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ở nhà chị Lệ", text: "小刚：明天是晴天{{c1}}阴天？\n小丽：阴天，电视上说多云。怎么了？有事？\n小刚：没事，我们明天要去{{c2}}。\n小丽：爬山的时候要{{c3}}点儿。" },
        { title: "Bài khóa 2 · Ở cửa hàng bách hóa", text: "周太太：你觉得这{{c4}}{{c5}}怎么样？\n周明：我{{c6}}你已经有两条这样的裤子了。\n周太太：那我们再看看别的。\n周明：这件{{c7}}怎么样？\n周太太：还不错，多少钱？\n周明：这上面{{c8}}{{c9}}320{{c10}}。\n周太太：买一件。" },
      ],
      answers: { c1: "还是", c2: "爬山", c3: "小心", c4: "条", c5: "裤子", c6: "记得", c7: "衬衫", c8: "写", c9: "着", c10: "元" },
      bank: ["还是", "爬山", "小心", "条", "裤子", "记得", "衬衫", "写", "着", "元", "或者", "件", "放"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Ở cửa hàng trái cây", text: "周太太：这些水果真{{e1}}，我们买西瓜还是苹果？\n周明：西瓜吧。你看，这上面写着“西瓜不{{e2}}不要钱”。\n周太太：那我们买一个大点儿的吧。\n周明：再买几个苹果。\n周太太：好啊，今天晚上{{e3}}吃水果不吃饭！" },
        { title: "Bài khóa 4 · Trong phòng giải lao", text: "小丽：桌子上{{e4}}着很多{{e5}}，你喝什么？\n小刚：茶{{e6}}咖啡都可以。你呢？你喝什么？\n小丽：我喝茶，茶是我的最爱。天冷了或者工作累了的时候，喝杯热茶{{e7}}很{{e8}}。\n小刚：你喜欢喝什么茶？\n小丽：{{e9}}茶、{{e10}}茶、红茶，我都喜欢。" },
      ],
      answers: { e1: "新鲜", e2: "甜", e3: "只", e4: "放", e5: "饮料", e6: "或者", e7: "会", e8: "舒服", e9: "花", e10: "绿" },
      bank: ["新鲜", "甜", "只", "放", "饮料", "或者", "会", "舒服", "花", "绿", "还是", "记得", "条"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "爬山的时候要小心点儿。", vi: "Lúc leo núi phải cẩn thận một chút.", keywords: ["leo núi", "cẩn thận"] },
        { zh: "这些水果真新鲜。", vi: "Chỗ trái cây này tươi thật.", keywords: ["trái cây", "tươi"] },
        { zh: "我家楼上住着一个老师。", vi: "Tầng trên nhà tôi có một thầy giáo ở.", keywords: ["tầng trên", "thầy giáo"] },
        { zh: "你穿得那么少，会感冒的。", vi: "Bạn mặc ít như thế, sẽ bị cảm đấy.", keywords: ["mặc", "cảm"] },
        { zh: "他的生日是10月还是11月，我不记得了。", vi: "Sinh nhật anh ấy là tháng 10 hay tháng 11, tôi không nhớ nữa.", keywords: ["sinh nhật", "tháng", "không nhớ"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Bạn muốn uống cà phê hay uống trà?", answers: ["你要喝咖啡还是喝茶？", "你想喝咖啡还是喝茶？", "你要喝咖啡还是茶？", "你想喝咖啡还是茶？"] },
        { vi: "Tối nay ăn cơm hoặc mì đều được.", answers: ["今天晚上吃米饭或者面条都可以。", "今天晚上吃米饭或者面条都行。", "今晚吃米饭或者面条都可以。"] },
        { vi: "Trên bàn để một cốc cà phê.", answers: ["桌子上放着一杯咖啡。"] },
        { vi: "Đừng lo, tôi sẽ chăm sóc tốt cho bản thân.", answers: ["别担心，我会照顾好自己。", "别担心，我会照顾好自己的。"] },
        { vi: "Trên này ghi 320 đồng.", answers: ["这上面写着320元。", "上面写着320元。", "这上面写着三百二十元。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "电视上说明天是晴天。", a: false },
        { q: "小丽明天不去爬山，因为她有事。", a: true },
        { q: "周太太买了一条裤子。", a: false },
        { q: "那件衬衫320元。", a: true },
        { q: "周明和太太只买了西瓜。", a: false },
        { q: "他们今天晚上只吃水果不吃饭。", a: true },
        { q: "小刚只喝咖啡。", a: false },
        { q: "小丽觉得天冷的时候喝杯热茶会很舒服。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "桌子上放着很多饮料。",
        "爬山的时候要小心点儿。",
        "这些水果真新鲜。",
        "茶或者咖啡都可以。",
        "你喜欢喝什么茶？",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "介绍一下你的房间：房间里放着什么？你喜欢喝什么饮料？ (Giới thiệu căn phòng của bạn: trong phòng có những gì? Bạn thích uống đồ uống gì?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 3 (还是/或者, nơi chốn + động từ + 着, 会).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["还是", "或者", "放着", "写着", "住着", "坐着", "会"],
      minGrammar: 2,
      sample: "我的房间不大，但是很舒服。房间里放着一张桌子和一把椅子，桌子上放着一个电脑和很多书。椅子旁边放着几盆花。我喜欢喝茶，花茶或者绿茶我都喜欢。我觉得天冷的时候，喝杯热茶会很舒服。朋友来我家，我会问他们：“你们喝茶还是喝咖啡？”",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 还是 / 或者", points: 6,
      subtitle: "Chọn 还是 hoặc 或者 cho mỗi chỗ trống.",
      grammarWord: "还是 / 或者",
      options: ["还是", "或者"],
      items: [
        { q: "你要喝咖啡___喝茶？", answers: ["还是"] },
        { q: "今天晚上吃米饭___面条都可以。", answers: ["或者"] },
        { q: "周太太40岁___50岁，我们不知道。", answers: ["还是"] },
        { q: "天冷了___工作累了的时候，喝杯热茶很舒服。", answers: ["或者"] },
        { q: "你喜欢看书___玩儿电子游戏？", answers: ["还是"] },
        { q: "我们出去吧，买东西___看电影。", answers: ["或者"] },
        { q: "我还没想好穿红色的裤子___咖啡色的裤子。", answers: ["还是"] },
        { q: "我每个周末都在家看电视___听音乐。", answers: ["或者"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: câu tồn tại với 着", points: 6,
      subtitle: "Chọn động từ thích hợp (放 / 写 / 住 / 坐) cho câu tồn tại “… + động từ + 着 + …”.",
      grammarWord: "放着 / 写着 / 住着 / 坐着",
      options: ["放", "写", "住", "坐"],
      items: [
        { q: "桌子上___着一杯咖啡。", answers: ["放"] },
        { q: "我家楼上___着一个老师。", answers: ["住"] },
        { q: "这上面___着320元。", answers: ["写"] },
        { q: "公共汽车上___着很多人。", answers: ["坐"] },
        { q: "我的电脑旁边___着几本书。", answers: ["放"] },
        { q: "机票上___着12月4号。", answers: ["写"] },
        { q: "我的房间里___着一张桌子。", answers: ["放"] },
        { q: "这个楼里___着很多留学生。", answers: ["住"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: trợ động từ 会", points: 5,
      subtitle: "Điền trợ động từ chỉ khả năng vào chỗ trống.",
      grammarWord: "会",
      items: [
        { q: "你穿得那么少，___感冒的。", answers: ["会"] },
        { q: "别担心，我___照顾好自己。", answers: ["会"] },
        { q: "你不给他打电话吗，他___不高兴的。", answers: ["会"] },
        { q: "喝杯热茶___很舒服。", answers: ["会"] },
        { q: "快起床吧，你___迟到的。", answers: ["会"] },
        { q: "医生告诉我，不运动，___变胖的。", answers: ["会"] },
        { q: "水果或者面包都___对你的身体好。", answers: ["会"] },
        { q: "你怎么又没吃早饭，___生病的。", answers: ["会"] },
      ],
    },
  ],
};
