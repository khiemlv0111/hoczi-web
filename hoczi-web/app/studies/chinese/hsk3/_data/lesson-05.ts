import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第5课 我最近越来越胖了。 (Dạo này em ngày càng béo ra.)
// Nguồn: Giáo trình chuẩn HSK3, trang 53–61 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson05: Lesson = {
  level: "hsk3",
  no: 5,
  slug: "bai-5",
  zh: "我最近越来越胖了。",
  pinyin: "Wǒ zuìjìn yuè lái yuè pàng le.",
  vi: "Dạo này em ngày càng béo ra.",
  en: "I've been getting fatter and fatter lately.",
  topic: "健康 · Sức khỏe, mùa trong năm",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 13 từ mới: 发烧、为、照顾、用、感冒、季节、当然、春(天)、草、夏(天)、裙子、最近、越.",
    "Hiểu và dùng được 2 điểm ngữ pháp: trợ từ 了 chỉ sự thay đổi (tình huống mới), cấu trúc 越来越 + tính từ/động từ tâm lý.",
    "Đọc hiểu 4 đoạn hội thoại: thăm bạn bị ốm, hủy hẹn vì con bị cảm, nói về mùa yêu thích, chuyện ngày càng béo.",
    "Nói về sức khỏe, mùa yêu thích và những thay đổi của bản thân gần đây.",
    "Chữ Hán: chữ hội ý (会意字) 明、休、从、看; từ mới ghép từ chữ cũ: 听说、有点儿、草地.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：感冒、发烧、裙子、草、开花、夏天",
      vi: "Chọn hình tương ứng với các từ: 感冒 (bị cảm), 发烧 (sốt), 裙子 (váy), 草 (cỏ), 开花 (nở hoa), 夏天 (mùa hè).",
    },
    {
      zh: "看图片，用一个合适的形容词描述图片的内容：很漂亮、很好吃、很冷、很绿",
      vi: "Xem hình và mô tả bằng một tính từ phù hợp: rất đẹp, rất ngon, rất lạnh, rất xanh.",
    },
  ],

  vocab: [
    { id: 1, han: "发烧", py: "fā shāo", pos: "đgt.", meaning: "sốt", example: "前几天有点儿发烧，现在好多了。", exampleVi: "Mấy hôm trước hơi sốt, bây giờ đỡ nhiều rồi." },
    { id: 2, han: "为", py: "wèi", pos: "giới.", meaning: "cho, vì", example: "这是我为你买的绿茶，很不错。", exampleVi: "Đây là trà xanh mình mua cho cậu, ngon lắm." },
    { id: 3, han: "照顾", py: "zhàogù", pos: "đgt.", meaning: "chăm sóc", example: "我儿子生病了，我要在家照顾他。", exampleVi: "Con trai tôi bị ốm, tôi phải ở nhà chăm sóc nó." },
    { id: 4, han: "用", py: "yòng", pos: "đgt.", meaning: "cần (不用: không cần); dùng", example: "不用去医院，昨天吃了感冒药，现在好一些了。", exampleVi: "Không cần đi viện, hôm qua uống thuốc cảm rồi, bây giờ đỡ hơn rồi." },
    { id: 5, han: "感冒", py: "gǎnmào", pos: "đgt.", meaning: "bị cảm", example: "你穿得那么少，会感冒的。", exampleVi: "Bạn mặc ít như thế sẽ bị cảm đấy." },
    { id: 6, han: "季节", py: "jìjié", pos: "dt.", meaning: "mùa", example: "你最喜欢哪个季节？", exampleVi: "Bạn thích mùa nào nhất?" },
    { id: 7, han: "当然", py: "dāngrán", pos: "p.", meaning: "đương nhiên, dĩ nhiên", example: "当然是春天，天气不那么冷了。", exampleVi: "Đương nhiên là mùa xuân, thời tiết không lạnh như thế nữa." },
    { id: 8, han: "春天", py: "chūntiān", pos: "dt.", meaning: "mùa xuân", example: "春天不冷不热，草都是绿的。", exampleVi: "Mùa xuân không lạnh không nóng, cỏ đều xanh mướt." },
    { id: 9, han: "草", py: "cǎo", pos: "dt.", meaning: "cỏ", example: "草和树都绿了，花也开了。", exampleVi: "Cỏ và cây đều xanh rồi, hoa cũng nở rồi." },
    { id: 10, han: "夏天", py: "xiàtiān", pos: "dt.", meaning: "mùa hè", example: "我最喜欢夏天，因为我可以穿漂亮的裙子了。", exampleVi: "Em thích nhất mùa hè, vì em có thể mặc những chiếc váy đẹp." },
    { id: 11, han: "裙子", py: "qúnzi", pos: "dt.", meaning: "váy", example: "这条裙子是去年买的，今年就不能穿了。", exampleVi: "Chiếc váy này mua năm ngoái, năm nay đã không mặc vừa nữa." },
    { id: 12, han: "最近", py: "zuìjìn", pos: "p.", meaning: "gần đây, dạo này", example: "我最近越来越胖了。", exampleVi: "Dạo này em ngày càng béo ra." },
    { id: 13, han: "越", py: "yuè", pos: "p.", meaning: "càng (越来越: ngày càng)", example: "我认识的汉字越来越多。", exampleVi: "Chữ Hán tôi biết ngày càng nhiều." },
    { id: 14, han: "张", py: "Zhāng", pos: "dt.", meaning: "Trương (họ)", example: "张太太想和周太太出去玩儿。", exampleVi: "Bà Trương muốn đi chơi với bà Châu." },
    { id: 15, han: "听说", py: "tīngshuō", pos: "đgt.", meaning: "nghe nói (听 + 说)", example: "我听说你身体不舒服，怎么了？", exampleVi: "Mình nghe nói cậu không khỏe, sao thế?", group: "extended" },
    { id: 16, han: "有点儿", py: "yǒudiǎnr", pos: "p.", meaning: "hơi, có chút (有 + 一点儿)", example: "我有点儿饿了。", exampleVi: "Tôi hơi đói rồi.", group: "extended" },
    { id: 17, han: "草地", py: "cǎodì", pos: "dt.", meaning: "bãi cỏ (草 + 地方)", example: "孩子们在草地上玩儿。", exampleVi: "Bọn trẻ đang chơi trên bãi cỏ.", group: "extended" },
  ],

  text: {
    title: "课文 我最近越来越胖了。",
    paragraphs: [
      {
        heading: "课文一 · 在小丽家 (Tại nhà chị Lệ)",
        zh: "朋友：我听说你身体不舒服，怎么了？\n小丽：前几天有点儿发烧，现在好多了。\n朋友：喝杯茶吧，这是我为你买的绿茶，很不错。\n小丽：谢谢，我要吃药，不喝茶了。\n朋友：那喝杯水吧。\n小丽：好的。",
        vi: "Bạn: Mình nghe nói cậu không khỏe, sao thế?\nTiểu Lệ: Mấy hôm trước hơi sốt, bây giờ đỡ nhiều rồi.\nBạn: Uống cốc trà đi, đây là trà xanh mình mua cho cậu, ngon lắm.\nTiểu Lệ: Cảm ơn, mình phải uống thuốc, không uống trà nữa.\nBạn: Thế thì uống cốc nước nhé.\nTiểu Lệ: Được.",
        questions: ["小丽怎么不舒服了？", "现在小丽要做什么？"],
      },
      {
        heading: "课文二 · 在打电话 (Nói chuyện qua điện thoại)",
        zh: "周太太：对不起，我明天不能和你们出去玩儿了。\n张太太：为什么？怎么了？\n周太太：我儿子生病了，我要在家照顾他。\n张太太：他吃药了吗？要不要去医院？\n周太太：不用去医院，昨天吃了感冒药，现在好一些了。\n张太太：那我们下次再一起出去玩儿吧。",
        vi: "Bà Châu: Xin lỗi, ngày mai tôi không thể đi chơi với các chị được nữa.\nBà Trương: Tại sao? Có chuyện gì vậy?\nBà Châu: Con trai tôi bị ốm, tôi phải ở nhà chăm sóc nó.\nBà Trương: Cháu uống thuốc chưa? Có cần đi bệnh viện không?\nBà Châu: Không cần đi viện, hôm qua uống thuốc cảm rồi, bây giờ đỡ hơn rồi.\nBà Trương: Vậy lần sau chúng ta lại cùng đi chơi nhé.",
        questions: ["周太太能出去玩儿吗？为什么？", "周太太的儿子要去医院吗？"],
      },
      {
        heading: "课文三 · 在小刚家 (Tại nhà anh Cương)",
        zh: "小丽：你最喜欢哪个季节？\n小刚：当然是春天，天气不那么冷了，草和树都绿了，花也开了。\n小丽：我最喜欢夏天，因为我可以穿漂亮的裙子了。\n小刚：那我也喜欢夏天了。\n小丽：怎么？你也有漂亮的裙子？\n小刚：不，我喜欢看你穿漂亮的裙子。",
        vi: "Tiểu Lệ: Anh thích mùa nào nhất?\nTiểu Cương: Đương nhiên là mùa xuân, thời tiết không lạnh như thế nữa, cỏ và cây đều xanh rồi, hoa cũng nở rồi.\nTiểu Lệ: Em thích nhất mùa hè, vì em có thể mặc những chiếc váy đẹp.\nTiểu Cương: Vậy thì anh cũng thích mùa hè rồi.\nTiểu Lệ: Sao thế? Anh cũng có váy đẹp à?\nTiểu Cương: Không, anh thích ngắm em mặc váy đẹp.",
        questions: ["小丽喜欢哪个季节？为什么？", "小刚喜欢哪个季节？为什么？"],
      },
      {
        heading: "课文四 · 在小刚家 (Tại nhà anh Cương)",
        zh: "小丽：我最近越来越胖了。\n小刚：谁说的？我觉得你越来越漂亮了。\n小丽：你看，这条裙子是去年买的，今年就不能穿了。\n小刚：那是因为你吃得太多了，少吃点儿吧。\n小丽：我做的饭越来越好吃，我能少吃吗？",
        vi: "Tiểu Lệ: Dạo này em ngày càng béo ra.\nTiểu Cương: Ai nói thế? Anh thấy em ngày càng xinh đẹp.\nTiểu Lệ: Anh xem, chiếc váy này mua năm ngoái, năm nay đã không mặc vừa nữa rồi.\nTiểu Cương: Đó là vì em ăn nhiều quá, ăn ít đi một chút.\nTiểu Lệ: Cơm em nấu ngày càng ngon, sao em ăn ít được?",
        questions: ["小丽最近怎么了？为什么？", "小刚觉得小丽怎么样？"],
      },
    ],
    notes: [
      "张 (Zhāng): họ Trương; 张太太: bà Trương.",
      "不用 + động từ: không cần… (不用去医院、不用吃药).",
      "Tục ngữ – 药到病除 (Yàodào bìngchú): thuốc uống vào hết bệnh ngay; khen bác sĩ giỏi, dùng thuốc đúng bệnh; nay còn chỉ người tìm ra mấu chốt và giải quyết vấn đề nhanh chóng.",
      "Chữ Hán – 会意字 (chữ hội ý): ghép hai hay nhiều chữ đơn, nghĩa của chữ là tổng hợp nghĩa các thành phần: 明 (日 + 月, sáng), 休 (人 tựa vào 木, nghỉ ngơi), 从 (người đi theo người), 看 (tay che trên mắt nhìn xa).",
      "Văn hóa – Các môn thể thao truyền thống của Trung Quốc: 放风筝 (thả diều), 踢毽子 (đá cầu), 抖空竹 (chơi diabolo), 打太极拳 (tập thái cực quyền).",
    ],
  },

  grammar: [
    {
      word: "了",
      title: "Trợ từ 了 chỉ sự thay đổi",
      usages: [
        {
          label: "Cách dùng",
          explain: "Trợ từ ngữ khí 了 ở cuối câu trần thuật chỉ sự thay đổi của tình huống hoặc sự xuất hiện của tình huống mới. Vd. 我现在没钱了: trước đây có tiền, bây giờ không còn nữa.",
          examples: ["上个月很冷，现在天气不那么冷了。", "我前几天有点儿发烧，现在好多了。", "我现在喜欢夏天了。", "这条裙子是去年买的，今年就不能穿了。"],
        },
      ],
    },
    {
      word: "越来越 + 形容词/心理动词",
      title: "Ngày càng…",
      usages: [
        {
          label: "Cách dùng",
          explain: "越来越 + tính từ/động từ chỉ trạng thái tâm lý chỉ sự thay đổi về mức độ theo thời gian (越来越冷: ngày càng lạnh; 越来越喜欢: ngày càng thích). Không thêm phó từ chỉ mức độ vào trước tính từ/động từ: không nói *越来越很热, *越来越非常想.",
          examples: ["我认识的汉字越来越多。", "你越来越漂亮。", "我越来越喜欢运动。", "我做的饭越来越好吃。"],
        },
      ],
      note: "Cuối câu thường có 了: 我最近越来越胖了。",
    },
  ],

  wordChoice: [
    { sentence: "我是不是___了？怎么总是觉得冷？", options: ["草", "最近", "为", "发烧"], answer: "发烧" },
    { sentence: "春天不冷不热，___都是绿的。", options: ["草", "裙子", "发烧", "为"], answer: "草" },
    { sentence: "快来看一下，这是我___你买的衣服。", options: ["最近", "为", "草", "裙子"], answer: "为" },
    { sentence: "这条___真好看，是新买的吗？", options: ["发烧", "最近", "裙子", "草"], answer: "裙子" },
    { sentence: "小王在忙什么呢？你___见过他吗？", options: ["最近", "为", "裙子", "发烧"], answer: "最近" },
    { sentence: "A：来一个西瓜。B：这个___的西瓜又大又甜，多来几个吧。", options: ["当然", "季节", "照顾", "用"], answer: "季节" },
    { sentence: "A：今年___一点儿也不热。B：是吗？我怎么觉得快热死了！", options: ["夏天", "用", "当然", "照顾"], answer: "夏天" },
    { sentence: "A：明天考试，你现在就睡觉了？不再看看书了？B：不___看了，我已经复习好了。", options: ["季节", "用", "照顾", "夏天"], answer: "用" },
    { sentence: "A：明天阴天，你还去看比赛吗？B：我___要去，这是我最喜欢的比赛！", options: ["当然", "季节", "夏天", "用"], answer: "当然" },
    { sentence: "A：这是你家的小狗吗？真漂亮！谁___它？B：我妈妈。", options: ["照顾", "用", "当然", "季节"], answer: "照顾" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [5, 3, 4] },
        { vocabId: 3, distractors: [5, 7, 1] },
        { vocabId: 5, distractors: [1, 6, 12] },
        { vocabId: 6, distractors: [10, 8, 7] },
        { vocabId: 7, distractors: [12, 6, 3] },
        { vocabId: 8, distractors: [10, 9, 11] },
        { vocabId: 11, distractors: [9, 10, 8] },
        { vocabId: 12, distractors: [13, 7, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 5, 6, 7, 9, 11, 12],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "最近", "越来越", "胖", "了", "。"], answer: "我最近越来越胖了。", vi: "Dạo này tôi ngày càng béo ra." },
        { tokens: ["这是", "我", "为你", "买的", "绿茶", "。"], answer: "这是我为你买的绿茶。", vi: "Đây là trà xanh tôi mua cho bạn." },
        { tokens: ["我儿子", "生病了", "，", "我要", "在家", "照顾他", "。"], answer: "我儿子生病了，我要在家照顾他。", vi: "Con trai tôi bị ốm, tôi phải ở nhà chăm sóc nó." },
        { tokens: ["你", "最喜欢", "哪个", "季节", "？"], answer: "你最喜欢哪个季节？", vi: "Bạn thích mùa nào nhất?" },
        { tokens: ["草和树", "都", "绿了", "，", "花", "也", "开了", "。"], answer: "草和树都绿了，花也开了。", vi: "Cỏ và cây đều xanh rồi, hoa cũng nở rồi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Thăm bạn bị ốm", text: "朋友：我{{c1}}你身体不舒服，怎么了？\n小丽：前几天有点儿{{c2}}，现在好多了。\n朋友：喝杯茶吧，这是我{{c3}}你买的绿茶，很不错。\n小丽：谢谢，我要吃药，不喝茶{{c4}}。" },
        { title: "Bài khóa 2 · Nói chuyện qua điện thoại", text: "周太太：对不起，我明天不能和你们出去玩儿了。\n张太太：为什么？怎么了？\n周太太：我儿子{{c5}}了，我要在家{{c6}}他。\n张太太：他吃药了吗？要不要去{{c7}}？\n周太太：不{{c8}}去医院，昨天吃了{{c9}}药，现在好一些了。\n张太太：那我们{{c10}}再一起出去玩儿吧。" },
      ],
      answers: { c1: "听说", c2: "发烧", c3: "为", c4: "了", c5: "生病", c6: "照顾", c7: "医院", c8: "用", c9: "感冒", c10: "下次" },
      bank: ["听说", "发烧", "为", "了", "生病", "照顾", "医院", "用", "感冒", "下次", "当然", "季节", "最近"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Mùa yêu thích", text: "小丽：你最喜欢哪个{{e1}}？\n小刚：{{e2}}是{{e3}}，天气不那么冷了，{{e4}}和树都绿了，花也开了。\n小丽：我最喜欢{{e5}}，因为我可以穿漂亮的{{e6}}了。" },
        { title: "Bài khóa 4 · Ngày càng béo", text: "小丽：我{{e7}}越来越{{e8}}了。\n小刚：谁说的？我觉得你{{e9}}漂亮了。\n小丽：你看，这条裙子是去年买的，今年就不能穿了。\n小刚：那是因为你吃得太多了，少吃点儿吧。\n小丽：我做的饭越来越{{e10}}，我能少吃吗？" },
      ],
      answers: { e1: "季节", e2: "当然", e3: "春天", e4: "草", e5: "夏天", e6: "裙子", e7: "最近", e8: "胖", e9: "越来越", e10: "好吃" },
      bank: ["季节", "当然", "春天", "草", "夏天", "裙子", "最近", "胖", "越来越", "好吃", "瘦", "照顾", "发烧"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我前几天有点儿发烧，现在好多了。", vi: "Mấy hôm trước tôi hơi sốt, bây giờ đỡ nhiều rồi.", keywords: ["sốt", "đỡ"] },
        { zh: "不用去医院，昨天吃了感冒药。", vi: "Không cần đi bệnh viện, hôm qua đã uống thuốc cảm rồi.", keywords: ["không cần", "bệnh viện", "thuốc cảm"] },
        { zh: "我认识的汉字越来越多。", vi: "Chữ Hán tôi biết ngày càng nhiều.", keywords: ["chữ hán", "ngày càng"] },
        { zh: "我最喜欢夏天，因为我可以穿漂亮的裙子了。", vi: "Tôi thích nhất mùa hè, vì tôi có thể mặc những chiếc váy đẹp.", keywords: ["mùa hè", "váy"] },
        { zh: "上个月很冷，现在天气不那么冷了。", vi: "Tháng trước rất lạnh, bây giờ thời tiết không lạnh như thế nữa.", keywords: ["tháng trước", "lạnh", "thời tiết"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Dạo này tôi ngày càng béo.", answers: ["我最近越来越胖了。", "最近我越来越胖了。"] },
        { vi: "Tôi ngày càng thích vận động.", answers: ["我越来越喜欢运动了。", "我越来越喜欢运动。"] },
        { vi: "Bây giờ tôi thích mùa hè rồi.", answers: ["我现在喜欢夏天了。", "现在我喜欢夏天了。"] },
        { vi: "Bạn thích mùa nào nhất?", answers: ["你最喜欢哪个季节？"] },
        { vi: "Con trai tôi bị ốm, tôi phải ở nhà chăm sóc nó.", answers: ["我儿子生病了，我要在家照顾他。", "我儿子病了，我要在家照顾他。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小丽前几天有点儿发烧。", a: true },
        { q: "小丽喝了朋友买的绿茶。", a: false },
        { q: "周太太的儿子生病了。", a: true },
        { q: "周太太的儿子要去医院。", a: false },
        { q: "小刚最喜欢春天。", a: true },
        { q: "小丽最喜欢秋天。", a: false },
        { q: "小丽的裙子是今年买的。", a: false },
        { q: "小刚觉得小丽越来越漂亮了。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我最近越来越胖了。",
        "你最喜欢哪个季节？",
        "我要在家照顾他。",
        "草和树都绿了，花也开了。",
        "我做的饭越来越好吃。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你最近改变了哪些习惯。以前怎么样？现在怎么样？ (Gần đây bạn đã thay đổi những thói quen nào? Trước đây thế nào? Bây giờ thế nào?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 5 (了 chỉ sự thay đổi, 越来越).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["越来越", "了"],
      minGrammar: 2,
      sample: "以前我不喜欢运动，每天吃了饭就睡觉，所以越来越胖了。去年冬天我感冒了，还发烧了，医生说我应该多运动。最近我每天早上都去跑步，现在我越来越喜欢运动了，身体也越来越好了。春天到了，草和树都绿了，我觉得跑步越来越舒服了。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 越来越", points: 6,
      subtitle: "Điền cấu trúc chỉ sự thay đổi theo thời gian vào chỗ trống.",
      grammarWord: "越来越",
      items: [
        { q: "我认识的汉字___多。", answers: ["越来越"] },
        { q: "你___漂亮了。", answers: ["越来越"] },
        { q: "我___喜欢运动。", answers: ["越来越"] },
        { q: "我做的饭___好吃。", answers: ["越来越"] },
        { q: "冬天快到了，天气___冷了。", answers: ["越来越"] },
        { q: "她每天都运动，现在___瘦了。", answers: ["越来越"] },
        { q: "快要考试了，我___着急了。", answers: ["越来越"] },
        { q: "孩子还没有回来，妈妈___担心了。", answers: ["越来越"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 了 chỉ sự thay đổi", points: 6,
      subtitle: "Chọn từ thích hợp để hoàn thành câu diễn tả sự thay đổi.",
      grammarWord: "了",
      options: ["好多", "开", "不能穿", "坏", "不疼", "喜欢"],
      items: [
        { q: "我前几天有点儿发烧，现在___了。", answers: ["好多"] },
        { q: "上个月草和树还没绿，花还没开，现在花都___了。", answers: ["开"] },
        { q: "这条裙子是去年买的，今年就___了。", answers: ["不能穿"] },
        { q: "这些水果是我上个星期买的，现在都___了。", answers: ["坏"] },
        { q: "昨天腿有点儿疼，今天早上___了。", answers: ["不疼"] },
        { q: "我以前不喜欢夏天，现在___夏天了。", answers: ["喜欢"] },
        { q: "吃了药以后，他现在___了。", answers: ["好多"] },
        { q: "你看，我胖了，这件衣服___了。", answers: ["不能穿"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 为 / 用 / 当然", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "为 / 用 / 当然",
      options: ["为", "用", "当然"],
      items: [
        { q: "这是我___你买的绿茶。", answers: ["为"] },
        { q: "不___去医院，昨天吃了感冒药。", answers: ["用"] },
        { q: "你最喜欢哪个季节？——___是春天。", answers: ["当然"] },
        { q: "妈妈每天___孩子做饭。", answers: ["为"] },
        { q: "明天不___上课，我们去爬山吧。", answers: ["用"] },
        { q: "我___要去，这是我最喜欢的比赛！", answers: ["当然"] },
        { q: "我___朋友准备了生日礼物。", answers: ["为"] },
        { q: "你不___着急，他很快就回来。", answers: ["用"] },
      ],
    },
  ],
};
