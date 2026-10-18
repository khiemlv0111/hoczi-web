import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第7课 你家离公司远吗？ (Nhà chị có ở xa công ty không?)
// Nguồn: Giáo trình chuẩn HSK2, trang 63–70 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson07: Lesson = {
  level: "hsk2",
  no: 7,
  slug: "bai-7",
  zh: "你家离公司远吗？",
  pinyin: "Nǐ jiā lí gōngsī yuǎn ma?",
  vi: "Nhà chị có ở xa công ty không?",
  en: "Is your home far from the office?",
  topic: "交通 · Đi lại, khoảng cách, thời gian",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 13 từ mới: 教室、机场、路、离、公司、远、公共汽车、小时、慢、快、过、走、到.",
    "Hiểu và dùng được 4 điểm ngữ pháp: phó từ ngữ khí 还 (2) (vẫn còn), phó từ chỉ thời gian 就, động từ 离, trợ từ ngữ khí 呢.",
    "Đọc hiểu 4 đoạn hội thoại về David học bài muộn, đón ở sân bay, đi làm bằng xe buýt, mừng sinh nhật sớm.",
    "Hỏi – đáp về khoảng cách (A离B远吗？), thời gian đi lại và phương tiện.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：考试、商店、机场、路、教室、时间",
      vi: "Chọn hình tương ứng với các từ: 考试 (thi), 商店 (cửa hàng), 机场 (sân bay), 路 (đường), 教室 (lớp học), 时间 (thời gian).",
    },
    {
      zh: "看下面的图片，用汉语说出它们的名字：自行车、公共汽车、出租车、飞机",
      vi: "Xem hình và nói tên các phương tiện bằng tiếng Trung: xe đạp, xe buýt, taxi, máy bay.",
    },
  ],

  vocab: [
    { id: 1, han: "教室", py: "jiàoshì", pos: "dt.", meaning: "lớp học", example: "他还在教室学习呢。", exampleVi: "Anh ấy còn đang học trong lớp." },
    { id: 2, han: "机场", py: "jīchǎng", pos: "dt.", meaning: "sân bay", example: "在去机场的路上。", exampleVi: "Đang trên đường ra sân bay." },
    { id: 3, han: "路", py: "lù", pos: "dt.", meaning: "đường, lối đi", example: "开车也不快，路上车太多了！", exampleVi: "Lái xe cũng chẳng nhanh được, trên đường có quá nhiều xe!" },
    { id: 4, han: "离", py: "lí", pos: "đgt.", meaning: "cách", example: "你家离公司远吗？", exampleVi: "Nhà chị có ở xa công ty không?" },
    { id: 5, han: "公司", py: "gōngsī", pos: "dt.", meaning: "công ty", example: "你家离公司远吗？", exampleVi: "Nhà chị có ở xa công ty không?" },
    { id: 6, han: "远", py: "yuǎn", pos: "tt.", meaning: "xa", example: "很远，坐公共汽车要一个多小时呢！", exampleVi: "Rất xa, đi xe buýt phải mất hơn một giờ đồng hồ!" },
    { id: 7, han: "公共汽车", py: "gōnggòng qìchē", pos: "dt.", meaning: "xe buýt", example: "坐公共汽车太慢了。", exampleVi: "Đi xe buýt thì chậm quá." },
    { id: 8, han: "小时", py: "xiǎoshí", pos: "dt.", meaning: "giờ (đồng hồ), tiếng", example: "坐公共汽车要一个多小时呢！", exampleVi: "Đi xe buýt phải mất hơn một tiếng!" },
    { id: 9, han: "慢", py: "màn", pos: "tt.", meaning: "chậm", example: "坐公共汽车太慢了，你怎么不开车？", exampleVi: "Đi xe buýt thì chậm quá, sao chị không lái xe?" },
    { id: 10, han: "快", py: "kuài", pos: "tt.", meaning: "nhanh", example: "开车也不快。", exampleVi: "Lái xe cũng chẳng nhanh." },
    { id: 11, han: "过", py: "guò", pos: "đgt.", meaning: "ăn (mừng), trải qua", example: "今天晚上我们一起吃饭吧，给你过生日。", exampleVi: "Tối nay chúng ta cùng đi ăn cơm nhé, mừng sinh nhật bạn đó." },
    { id: 12, han: "走", py: "zǒu", pos: "đgt.", meaning: "đi, đi bộ", example: "走几分钟就到了。", exampleVi: "Đi bộ vài phút là đến rồi." },
    { id: 13, han: "到", py: "dào", pos: "đgt.", meaning: "đến, tới", example: "你已经到了吗？", exampleVi: "Em đến chưa?" },
  ],

  text: {
    title: "课文 你家离公司远吗？",
    paragraphs: [
      {
        heading: "课文一 · 在家里 (Ở nhà)",
        zh: "A：大卫回来了吗？\nB：没有，他还在教室学习呢。\nA：已经9点多了，他怎么还在学习？\nB：明天有考试，他说今天要好好准备。",
        vi: "A: David về chưa vậy?\nB: Chưa, anh ấy còn đang học trong lớp.\nA: Đã hơn 9 giờ rồi, sao còn đang học?\nB: Ngày mai có bài kiểm tra, anh ấy nói hôm nay phải chuẩn bị thật tốt.",
        questions: ["大卫在哪儿学习呢？", "九点多了，大卫为什么还不休息？"],
      },
      {
        heading: "课文二 · 去机场的路上 (Trên đường ra sân bay)",
        zh: "A：你现在在哪儿呢？\nB：在去机场的路上。你已经到了吗？\nA：我下飞机了。你还有多长时间能到这儿？\nB：二十分钟就到。",
        vi: "A: Hiện giờ anh đang ở đâu vậy?\nB: Đang trên đường ra sân bay. Em đến chưa?\nA: Em xuống máy bay rồi. Còn bao lâu nữa anh mới đến đây?\nB: 20 phút nữa.",
        questions: ["他还有多长时间能到机场？"],
      },
      {
        heading: "课文三 · 在健身房 (Ở phòng tập thể dục)",
        zh: "A：你家离公司远吗？\nB：很远，坐公共汽车要一个多小时呢！\nA：坐公共汽车太慢了，你怎么不开车？\nB：开车也不快，路上车太多了！",
        vi: "A: Nhà chị có ở xa công ty không?\nB: Rất xa, đi xe buýt phải mất hơn một giờ đồng hồ!\nA: Đi xe buýt thì chậm quá, sao chị không lái xe?\nB: Lái xe cũng chẳng nhanh được, trên đường có quá nhiều xe!",
        questions: ["坐公共汽车一个小时能到公司吗？", "公司离家很远，她为什么不开车？"],
      },
      {
        heading: "课文四 · 在路上 (Trên đường)",
        zh: "A：今天晚上我们一起吃饭吧，给你过生日。\nB：今天？离我的生日还有一个多星期呢！\nA：下个星期我要去北京，今天过吧。\nB：好吧，离这儿不远有一个中国饭馆，走几分钟就到了。",
        vi: "A: Tối nay chúng ta cùng đi ăn cơm nhé, mừng sinh nhật bạn đó.\nB: Hôm nay à? Còn hơn một tuần nữa mới đến sinh nhật của mình mà!\nA: Tuần sau mình sẽ đi Bắc Kinh nên ăn mừng hôm nay đi.\nB: Được thôi, gần đây có một quán ăn Trung Quốc, đi bộ vài phút là đến rồi.",
        questions: ["今天不是她的生日，为什么她朋友要今天给她过生日？"],
      },
    ],
    notes: [
      "好好准备: chuẩn bị thật tốt (好好 + động từ: làm gì đó cẩn thận, chu đáo).",
      "给你过生日: tổ chức sinh nhật cho bạn.",
      "下飞机: xuống máy bay.",
    ],
  },

  grammar: [
    {
      word: "还",
      title: "Phó từ ngữ khí 还 (2): vẫn còn",
      usages: [
        {
          label: "Cách dùng",
          explain: "还 chỉ sự tiếp diễn của hành động hay trạng thái. Dạng phủ định là 还没.",
          examples: ["八点了，他还在睡觉。", "你怎么还没吃饭？", "他还在教室学习呢。"],
        },
      ],
    },
    {
      word: "就……了",
      title: "Phó từ chỉ thời gian 就 (sớm, nhanh)",
      usages: [
        {
          label: "Cách dùng",
          explain: "就 nhấn mạnh sự việc xảy ra sớm hay diễn ra nhanh và thuận lợi theo quan điểm của người nói.",
          examples: ["同学们七点半就来教室了。", "我坐飞机一个半小时就到北京了。", "（我）二十分钟就到。"],
        },
      ],
    },
    {
      word: "A 离 B……",
      title: "Động từ 离 (cách)",
      usages: [
        {
          label: "Cách dùng",
          explain: "离 chỉ khoảng cách trong mối tương quan với một địa điểm, mốc thời gian hay mục đích.",
          examples: ["我家离学校很远。", "学校离机场有20多公里。", "离我的生日还有一个多星期呢！"],
        },
      ],
    },
    {
      word: "呢",
      title: "Trợ từ ngữ khí 呢",
      usages: [
        {
          label: "Cách dùng",
          explain: "呢 ở cuối câu trần thuật (sau vị ngữ tính từ/động từ) để xác nhận sự việc, thuyết phục người khác, có ý cường điệu.",
          examples: ["八点上课，时间还早呢。", "医院离我们这儿还远呢。", "坐公共汽车要一个多小时呢！"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "他还在___学习呢。", options: ["教室", "机场", "公司", "路"], answer: "教室" },
    { sentence: "在去___的路上。你已经到了吗？", options: ["机场", "教室", "小时", "远"], answer: "机场" },
    { sentence: "开车也不快，___上车太多了！", options: ["路", "门", "外", "教室"], answer: "路" },
    { sentence: "你家___公司远吗？", options: ["离", "到", "走", "过"], answer: "离" },
    { sentence: "你家离公司___吗？——很远。", options: ["远", "慢", "快", "高"], answer: "远" },
    { sentence: "坐___要一个多小时呢！", options: ["公共汽车", "机场", "教室", "公司"], answer: "公共汽车" },
    { sentence: "坐公共汽车太___了，你怎么不开车？", options: ["慢", "远", "快", "好"], answer: "慢" },
    { sentence: "开车也不___，路上车太多了！", options: ["快", "慢", "远", "长"], answer: "快" },
    { sentence: "今天晚上我们一起吃饭吧，给你___生日。", options: ["过", "到", "走", "离"], answer: "过" },
    { sentence: "离这儿不远有一个中国饭馆，___几分钟就到了。", options: ["走", "过", "离", "开"], answer: "走" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 5, 8] },
        { vocabId: 2, distractors: [1, 5, 3] },
        { vocabId: 4, distractors: [13, 12, 11] },
        { vocabId: 5, distractors: [7, 1, 2] },
        { vocabId: 6, distractors: [9, 10, 4] },
        { vocabId: 8, distractors: [5, 1, 7] },
        { vocabId: 9, distractors: [10, 6, 12] },
        { vocabId: 10, distractors: [9, 6, 11] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 4, 5, 6, 8, 9, 10],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["你家", "离", "公司", "远", "吗", "？"], answer: "你家离公司远吗？", vi: "Nhà bạn có xa công ty không?" },
        { tokens: ["他", "还", "在", "教室", "学习", "呢", "。"], answer: "他还在教室学习呢。", vi: "Anh ấy vẫn đang học trong lớp." },
        { tokens: ["坐公共汽车", "要", "一个多小时", "呢", "！"], answer: "坐公共汽车要一个多小时呢！", vi: "Đi xe buýt mất hơn một tiếng đấy!" },
        { tokens: ["离", "我的生日", "还有", "一个多星期", "呢", "！"], answer: "离我的生日还有一个多星期呢！", vi: "Còn hơn một tuần nữa mới đến sinh nhật tôi!" },
        { tokens: ["走", "几分钟", "就", "到了", "。"], answer: "走几分钟就到了。", vi: "Đi bộ vài phút là đến." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ở nhà", text: "A：大卫回来了吗？\nB：没有，他{{c1}}在{{c2}}学习{{c3}}。\nA：已经9点多了，他怎么还在学习？\nB：明天有考试，他说今天要好好{{c4}}。" },
        { title: "Bài khóa 2 · Đường ra sân bay", text: "A：你现在在哪儿呢？\nB：在去{{c5}}的{{c6}}上。你已经{{c7}}了吗？\nA：我下飞机了。你还有多长{{c8}}能到这儿？\nB：二十分钟{{c9}}{{c10}}。" },
      ],
      answers: { c1: "还", c2: "教室", c3: "呢", c4: "准备", c5: "机场", c6: "路", c7: "到", c8: "时间", c9: "就", c10: "到" },
      bank: ["还", "教室", "呢", "准备", "机场", "路", "到", "时间", "就", "到", "离", "走", "吗"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Đi làm", text: "A：你家{{e1}}{{e2}}远吗？\nB：很{{e3}}，坐{{e4}}要一个多{{e5}}呢！\nA：坐公共汽车太{{e6}}了，你怎么不开车？\nB：开车也不{{e7}}，路上车太多了！" },
        { title: "Bài khóa 4 · Mừng sinh nhật", text: "A：今天晚上我们一起吃饭吧，给你{{e8}}生日。\nB：好吧，离这儿不远有一个中国饭馆，{{e9}}几分钟就{{e10}}了。" },
      ],
      answers: { e1: "离", e2: "公司", e3: "远", e4: "公共汽车", e5: "小时", e6: "慢", e7: "快", e8: "过", e9: "走", e10: "到" },
      bank: ["离", "公司", "远", "公共汽车", "小时", "慢", "快", "过", "走", "到", "近", "还", "机场"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "八点了，他还在睡觉。", vi: "Tám giờ rồi, anh ấy vẫn đang ngủ.", keywords: ["tám giờ", "vẫn", "ngủ"] },
        { zh: "学校离机场有20多公里。", vi: "Trường cách sân bay hơn 20 cây số.", keywords: ["trường", "sân bay", "20"] },
        { zh: "我坐飞机一个半小时就到北京了。", vi: "Tôi đi máy bay một tiếng rưỡi đã đến Bắc Kinh rồi.", keywords: ["máy bay", "tiếng rưỡi", "bắc kinh"] },
        { zh: "八点上课，时间还早呢。", vi: "Tám giờ mới vào học, vẫn còn sớm mà.", keywords: ["tám giờ", "còn sớm"] },
        { zh: "开车也不快，路上车太多了！", vi: "Lái xe cũng chẳng nhanh, trên đường quá nhiều xe!", keywords: ["lái xe", "nhanh", "nhiều xe"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Nhà tôi cách trường rất xa.", answers: ["我家离学校很远。"] },
        { vi: "Sao bạn vẫn chưa ăn cơm?", answers: ["你怎么还没吃饭？"] },
        { vi: "Bệnh viện cách chỗ chúng ta còn xa lắm.", answers: ["医院离我们这儿还远呢。", "医院离我们这儿很远。"] },
        { vi: "Hai mươi phút là đến.", answers: ["二十分钟就到。", "二十分钟就到了。"] },
        { vi: "Bạn còn bao lâu nữa mới đến được đây?", answers: ["你还有多长时间能到这儿？", "你还要多长时间能到这儿？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "大卫还在教室学习。", a: true },
        { q: "大卫明天要去旅游。", a: false },
        { q: "A已经下飞机了。", a: true },
        { q: "B还要一个小时才能到机场。", a: false },
        { q: "她家离公司很远。", a: true },
        { q: "她觉得开车很快。", a: false },
        { q: "离B的生日还有一个多星期。", a: true },
        { q: "那个中国饭馆离这儿很远。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你家离公司远吗？",
        "他还在教室学习呢。",
        "二十分钟就到。",
        "坐公共汽车太慢了。",
        "走几分钟就到了。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "你家离学校/公司远吗？你每天怎么去？要多长时间？ (Nhà bạn có xa trường/công ty không? Hằng ngày bạn đi bằng gì? Mất bao lâu?)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 7 (还, 就, 离, 呢).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["离", "就", "还", "呢"],
      minGrammar: 2,
      sample: "我家离公司很远，坐公共汽车要一个多小时呢！开车也不快，路上车太多了。所以我每天早上六点就起床了。我家离地铁站不远，走五分钟就到了，现在我每天坐地铁去公司，四十分钟就到。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 还 (vẫn còn) / 就 (sớm, nhanh)", points: 6,
      subtitle: "Chọn 还 hoặc 就 cho mỗi chỗ trống.",
      grammarWord: "还 / 就",
      options: ["还", "就"],
      items: [
        { q: "八点了，他___在睡觉。", answers: ["还"] },
        { q: "你怎么___没吃饭？", answers: ["还"] },
        { q: "同学们七点半___来教室了。", answers: ["就"] },
        { q: "我坐飞机一个半小时___到北京了。", answers: ["就"] },
        { q: "已经9点多了，他怎么___在学习？", answers: ["还"] },
        { q: "二十分钟___到。", answers: ["就"] },
        { q: "下课了，同学们___在教室学习。", answers: ["还"] },
        { q: "走几分钟___到了。", answers: ["就"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: động từ 离", points: 6,
      subtitle: "Điền động từ chỉ khoảng cách vào chỗ trống.",
      grammarWord: "离",
      items: [
        { q: "我家___学校很远。", answers: ["离"] },
        { q: "学校___机场有20多公里。", answers: ["离"] },
        { q: "___我的生日还有一个多星期呢！", answers: ["离"] },
        { q: "你家___公司远吗？", answers: ["离"] },
        { q: "___这儿不远有一个中国饭馆。", answers: ["离"] },
        { q: "医院___我们这儿还远呢。", answers: ["离"] },
        { q: "___考试还有三天。", answers: ["离"] },
        { q: "我家___学校不太远。", answers: ["离"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: trợ từ 呢 / 吗", points: 5,
      subtitle: "Chọn 呢 hoặc 吗 cho mỗi chỗ trống.",
      grammarWord: "呢 / 吗",
      options: ["呢", "吗"],
      items: [
        { q: "八点上课，时间还早___。", answers: ["呢"] },
        { q: "医院离我们这儿还远___。", answers: ["呢"] },
        { q: "坐公共汽车要一个多小时___！", answers: ["呢"] },
        { q: "你家离公司远___？", answers: ["吗"] },
        { q: "你已经到了___？", answers: ["吗"] },
        { q: "他还在教室学习___。", answers: ["呢"] },
        { q: "大卫回来了___？", answers: ["吗"] },
        { q: "离我的生日还有一个多星期___！", answers: ["呢"] },
      ],
    },
  ],
};
