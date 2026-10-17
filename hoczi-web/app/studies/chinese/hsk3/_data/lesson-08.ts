import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第8课 你去哪儿我就去哪儿。 (Em đi đâu thì anh đi đến đó.)
// Nguồn: Giáo trình chuẩn HSK3, trang 80–87 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson08: Lesson = {
  level: "hsk3",
  no: 8,
  slug: "bai-8",
  zh: "你去哪儿我就去哪儿。",
  pinyin: "Nǐ qù nǎr wǒ jiù qù nǎr.",
  vi: "Em đi đâu thì anh đi đến đó.",
  en: "Wherever you go, I'll go.",
  topic: "生活 · Mua nhà, chia tay, hẹn hò, gặp lại bạn cũ",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 17 từ mới: 又、满意、电梯、层、害怕、熊猫、见面、安静、可乐、一会儿、马上、洗手间、老、几乎、变化、健康、重要.",
    "Hiểu và dùng được 2 điểm ngữ pháp: phân biệt 又 và 再 (lặp lại đã xảy ra / chưa xảy ra), đại từ nghi vấn dùng linh hoạt “疑问代词 + 就 + 疑问代词”.",
    "Đọc hiểu 4 đoạn hội thoại: xem nhà, chia tay bạn về nước, ở quán cà phê, gặp lại bạn học cũ.",
    "Nói về việc lặp lại; trả lời linh hoạt kiểu “哪儿好玩儿我就去哪儿”.",
    "Từ mới ghép từ chữ cũ: 面试、自学、离婚.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：熊猫、安静、见面、电梯、害怕、洗手间",
      vi: "Chọn hình tương ứng với các từ: 熊猫 (gấu trúc), 安静 (yên tĩnh), 见面 (gặp mặt), 电梯 (thang máy), 害怕 (sợ), 洗手间 (nhà vệ sinh).",
    },
    {
      zh: "写出你学过的疑问代词：谁、……",
      vi: "Viết ra các đại từ nghi vấn bạn đã học: 谁 (ai), 什么 (gì), 哪儿 (đâu), 什么时候 (khi nào), 怎么 (thế nào), 多少/几 (bao nhiêu)…",
    },
  ],

  vocab: [
    { id: 1, han: "又", py: "yòu", pos: "p.", meaning: "lại (lặp lại, đã xảy ra)", example: "昨天去看了看，今天又去看了看。", exampleVi: "Hôm qua đi xem, hôm nay lại đi xem." },
    { id: 2, han: "满意", py: "mǎnyì", pos: "đgt.", meaning: "hài lòng, vừa ý", example: "都不满意吗？", exampleVi: "Đều không vừa ý à?" },
    { id: 3, han: "电梯", py: "diàntī", pos: "dt.", meaning: "thang máy", example: "一个没有电梯，不方便。", exampleVi: "Một căn không có thang máy, không tiện." },
    { id: 4, han: "层", py: "céng", pos: "lượng.", meaning: "tầng", example: "一个有电梯，但是在二十层。", exampleVi: "Một căn có thang máy, nhưng ở tầng hai mươi." },
    { id: 5, han: "害怕", py: "hàipà", pos: "đgt.", meaning: "sợ", example: "太高了，往下看多害怕啊！", exampleVi: "Cao quá, nhìn xuống sợ lắm!" },
    { id: 6, han: "熊猫", py: "xióngmāo", pos: "dt.", meaning: "gấu trúc, panda", example: "这个小熊猫送给你。", exampleVi: "Con gấu trúc nhỏ này tặng cậu." },
    { id: 7, han: "见面", py: "jiàn miàn", pos: "đgt.", meaning: "gặp, gặp nhau", example: "希望以后能再见面。", exampleVi: "Hy vọng sau này có thể gặp lại." },
    { id: 8, han: "安静", py: "ānjìng", pos: "tt.", meaning: "yên tĩnh", example: "坐这儿吧，这儿安静。", exampleVi: "Ngồi đây đi, chỗ này yên tĩnh." },
    { id: 9, han: "可乐", py: "kělè", pos: "dt.", meaning: "coca-cola", example: "喝可乐吧。", exampleVi: "Uống coca đi." },
    { id: 10, han: "一会儿", py: "yíhuìr", pos: "dt.", meaning: "chốc lát, một lát", example: "你等我一会儿，我马上回来。", exampleVi: "Anh đợi em một lát, em quay lại ngay." },
    { id: 11, han: "马上", py: "mǎshàng", pos: "p.", meaning: "liền, ngay lập tức", example: "我马上回来。", exampleVi: "Em quay lại ngay." },
    { id: 12, han: "洗手间", py: "xǐshǒujiān", pos: "dt.", meaning: "nhà vệ sinh", example: "我去一下洗手间，马上回来。", exampleVi: "Tôi đi vệ sinh một chút, quay lại ngay." },
    { id: 13, han: "老", py: "lǎo", pos: "tt.", meaning: "già, cũ", example: "老同学，好久不见！", exampleVi: "Bạn học cũ, lâu lắm không gặp!" },
    { id: 14, han: "几乎", py: "jīhū", pos: "p.", meaning: "hầu như, gần như", example: "快五年了，你几乎没变化。", exampleVi: "Gần năm năm rồi, cậu hầu như không thay đổi." },
    { id: 15, han: "变化", py: "biànhuà", pos: "đgt.", meaning: "thay đổi", example: "你看你，这几年一点儿变化都没有。", exampleVi: "Cậu xem cậu kìa, mấy năm nay chẳng thay đổi chút nào." },
    { id: 16, han: "健康", py: "jiànkāng", pos: "tt.", meaning: "khỏe mạnh", example: "健康最重要，胖瘦没关系。", exampleVi: "Sức khỏe là quan trọng nhất, béo gầy không sao." },
    { id: 17, han: "重要", py: "zhòngyào", pos: "tt.", meaning: "quan trọng", example: "贵不贵不重要，你喜欢就行。", exampleVi: "Đắt hay không không quan trọng, em thích là được." },
    { id: 18, han: "面试", py: "miànshì", pos: "đgt.", meaning: "phỏng vấn (见面 + 考试)", example: "明天上午我要去公司面试。", exampleVi: "Sáng mai tôi phải đến công ty phỏng vấn.", group: "extended" },
    { id: 19, han: "自学", py: "zìxué", pos: "đgt.", meaning: "tự học (自己 + 学习)", example: "他的汉语是自学的。", exampleVi: "Tiếng Hán của anh ấy là tự học.", group: "extended" },
    { id: 20, han: "离婚", py: "lí hūn", pos: "đgt.", meaning: "ly hôn (离开 + 结婚)", example: "他们结婚两年就离婚了。", exampleVi: "Họ cưới nhau được hai năm thì ly hôn.", group: "extended" },
  ],

  text: {
    title: "课文 你去哪儿我就去哪儿。",
    paragraphs: [
      {
        heading: "课文一 · 在休息室 (Trong phòng giải lao)",
        zh: "同事：听说你最近打算买房子？\n小丽：是，昨天去看了看，今天又去看了看，明天还要再去看看。\n同事：都不满意吗？\n小丽：一个没有电梯，不方便。一个有电梯，但是在二十层。\n同事：二十层怎么了？\n小丽：太高了，往下看多害怕啊！",
        vi: "Đồng nghiệp: Nghe nói dạo này cậu định mua nhà à?\nTiểu Lệ: Ừ, hôm qua đi xem, hôm nay lại đi xem, ngày mai còn phải đi xem nữa.\nĐồng nghiệp: Đều không vừa ý à?\nTiểu Lệ: Một căn không có thang máy, không tiện. Một căn có thang máy, nhưng ở tầng hai mươi.\nĐồng nghiệp: Tầng hai mươi thì sao?\nTiểu Lệ: Cao quá, nhìn xuống sợ lắm!",
        questions: ["小丽最近在做什么？", "小丽为什么不满意？"],
      },
      {
        heading: "课文二 · 在学校 (Ở trường)",
        zh: "小明：听说你下个星期就要回国了？\n马可：是啊，真不想离开北京。\n小明：我下星期不在北京，不能去机场送你了。\n马可：没关系，你忙吧。\n小明：这个小熊猫送给你，欢迎你以后再到中国来。\n马可：谢谢。希望以后能再见面。",
        vi: "Tiểu Minh: Nghe nói tuần sau cậu về nước rồi à?\nMarco: Ừ, thật không muốn rời Bắc Kinh chút nào.\nTiểu Minh: Tuần sau tớ không ở Bắc Kinh, không ra sân bay tiễn cậu được.\nMarco: Không sao, cậu cứ bận việc của cậu đi.\nTiểu Minh: Con gấu trúc nhỏ này tặng cậu, chào đón cậu sau này lại đến Trung Quốc.\nMarco: Cảm ơn. Hy vọng sau này có thể gặp lại.",
        questions: ["小明送给了马可什么东西？", "他为什么送马可东西？"],
      },
      {
        heading: "课文三 · 在咖啡厅 (Ở quán cà phê)",
        zh: "小丽：小刚，我们坐哪儿？\n小刚：你坐哪儿我就坐哪儿。\n小丽：坐这儿吧，这儿安静。你想喝什么饮料？\n小刚：你喝什么我就喝什么。\n小丽：喝可乐吧。你等我一会儿，我马上回来。\n小刚：小丽，你去哪儿？你去哪儿我就去哪儿。\n小丽：我去洗手间。",
        vi: "Tiểu Lệ: Tiểu Cương, chúng ta ngồi đâu?\nTiểu Cương: Em ngồi đâu anh ngồi đó.\nTiểu Lệ: Ngồi đây đi, chỗ này yên tĩnh. Anh muốn uống gì?\nTiểu Cương: Em uống gì anh uống nấy.\nTiểu Lệ: Uống coca đi. Anh đợi em một lát, em quay lại ngay.\nTiểu Cương: Tiểu Lệ, em đi đâu? Em đi đâu anh đi đó.\nTiểu Lệ: Em đi vệ sinh.",
        questions: ["小丽和小刚在哪儿？做什么？", "小丽要去哪儿？小刚也去吗？"],
      },
      {
        heading: "课文四 · 在周明家 (Tại nhà Châu Minh)",
        zh: "老同学：快五年了，你几乎没变化。\n周太太：谁说的？我胖了，以前的衣服都不能穿了。\n老同学：健康最重要，胖瘦没关系。\n周太太：是呀，想吃什么就吃什么。\n老同学：你做饭还是周明做饭？\n周太太：我做，我想吃什么就做什么，想吃多少就做多少。",
        vi: "Bạn học cũ: Gần năm năm rồi, cậu hầu như không thay đổi.\nBà Châu: Ai nói thế? Tớ béo ra rồi, quần áo trước đây đều không mặc được nữa.\nBạn học cũ: Sức khỏe là quan trọng nhất, béo gầy không sao.\nBà Châu: Đúng thế, muốn ăn gì thì ăn nấy.\nBạn học cũ: Cậu nấu cơm hay Châu Minh nấu?\nBà Châu: Tớ nấu, tớ muốn ăn gì thì nấu nấy, muốn ăn bao nhiêu thì nấu bấy nhiêu.",
        questions: ["周太太为什么说自己胖了？", "老同学觉得什么最重要？"],
      },
    ],
    notes: [
      "多 + tính từ + 啊: diễn tả cảm thán (多害怕啊: sợ biết bao).",
      "送 + người: tiễn ai (去机场送你); 送给 + người: tặng ai (送给你).",
      "Tục ngữ – 站得高，看得远 (Zhàn de gāo, kàn de yuǎn): đứng càng cao, nhìn càng xa; khi xem xét vấn đề nên nhìn từ nhiều khía cạnh để hiểu toàn diện hơn.",
    ],
  },

  grammar: [
    {
      word: "又 / 再",
      title: "Phân biệt 又 và 再 (lại / nữa)",
      usages: [
        {
          label: "又 + động từ",
          explain: "Hành động/tình huống lặp lại đã xảy ra.",
          examples: ["上个星期我买了一条裤子，昨天又买了一条。", "你上午已经喝了一杯咖啡，下午怎么又喝了一杯？", "小刚，你前天迟到，昨天迟到，今天怎么又迟到了？", "我昨天看了一个电影，今天又看了一个。"],
        },
        {
          label: "再 + động từ",
          explain: "Hành động/tình huống lặp lại chưa xảy ra.",
          examples: ["你只吃了一点儿饭，再吃一点儿吧。", "家里只有一个面包了，我们再买一些吧。", "那个饭馆我昨天去了一次，明天还想再去一次。", "昨天去看了看，今天又去看了看，明天还要再去看看。"],
        },
      ],
    },
    {
      word: "疑问代词 + 就 + 疑问代词",
      title: "Đại từ nghi vấn dùng linh hoạt (1)",
      usages: [
        {
          label: "Cách dùng",
          explain: "就 đứng giữa hai đại từ nghi vấn giống nhau; khi đó chúng không dùng để hỏi mà chỉ cùng một đối tượng không xác định (người, sự vật, cách thức). Hai vế cùng chủ ngữ thì có thể lược chủ ngữ vế sau; khác chủ ngữ thì chủ ngữ thứ hai đặt trước 就.",
          examples: ["什么东西便宜我就买什么。", "你哪天有时间就哪天来我家吧。", "谁喜欢他他就喜欢谁。", "你坐哪儿我就坐哪儿。"],
        },
      ],
      note: "Tương đương tiếng Việt: “… đâu … đó”, “… gì … nấy”, “… bao nhiêu … bấy nhiêu”.",
    },
  ],

  wordChoice: [
    { sentence: "___里人太多了，我们走上去吧。", options: ["层", "几乎", "洗手间", "电梯"], answer: "电梯" },
    { sentence: "你家住几___？", options: ["层", "电梯", "害怕", "几乎"], answer: "层" },
    { sentence: "没事儿，我一点儿也不___。", options: ["洗手间", "害怕", "层", "电梯"], answer: "害怕" },
    { sentence: "我去一下___，马上回来。", options: ["几乎", "电梯", "洗手间", "害怕"], answer: "洗手间" },
    { sentence: "我现在___每天都要用电脑。", options: ["几乎", "层", "害怕", "洗手间"], answer: "几乎" },
    { sentence: "A：您对我们的服务___吗？B：不错，我玩儿得很高兴。", options: ["见面", "变化", "重要", "满意"], answer: "满意" },
    { sentence: "A：周末你做什么了？B：我去看___了。", options: ["熊猫", "满意", "见面", "重要"], answer: "熊猫" },
    { sentence: "A：我们几点___？B：三点半吧。", options: ["变化", "见面", "熊猫", "满意"], answer: "见面" },
    { sentence: "A：你看你，这几年一点儿___都没有。B：是啊，我每天都运动。", options: ["重要", "满意", "变化", "熊猫"], answer: "变化" },
    { sentence: "A：这件衣服太贵了，别买了。B：贵不贵不___，你喜欢就行。", options: ["见面", "重要", "变化", "熊猫"], answer: "重要" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [17, 15, 8] },
        { vocabId: 3, distractors: [12, 4, 6] },
        { vocabId: 5, distractors: [8, 2, 11] },
        { vocabId: 7, distractors: [10, 15, 11] },
        { vocabId: 8, distractors: [16, 5, 17] },
        { vocabId: 11, distractors: [10, 14, 1] },
        { vocabId: 14, distractors: [11, 15, 13] },
        { vocabId: 16, distractors: [17, 8, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 4, 6, 8, 12, 14, 15, 16],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["你", "去哪儿", "我", "就", "去哪儿", "。"], answer: "你去哪儿我就去哪儿。", vi: "Bạn đi đâu tôi đi đó." },
        { tokens: ["昨天", "去看了看", "，", "今天", "又", "去看了看", "。"], answer: "昨天去看了看，今天又去看了看。", vi: "Hôm qua đi xem, hôm nay lại đi xem." },
        { tokens: ["欢迎你", "以后", "再", "到中国来", "。"], answer: "欢迎你以后再到中国来。", vi: "Chào đón bạn sau này lại đến Trung Quốc." },
        { tokens: ["你", "等我", "一会儿", "，", "我", "马上", "回来", "。"], answer: "你等我一会儿，我马上回来。", vi: "Bạn đợi tôi một lát, tôi quay lại ngay." },
        { tokens: ["健康", "最重要", "，", "胖瘦", "没关系", "。"], answer: "健康最重要，胖瘦没关系。", vi: "Sức khỏe là quan trọng nhất, béo gầy không sao." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Xem nhà", text: "小丽：是，昨天去看了看，今天{{c1}}去看了看，明天还要{{c2}}去看看。\n同事：都不{{c3}}吗？\n小丽：一个没有{{c4}}，不方便。一个有电梯，但是在二十{{c5}}。\n同事：二十层怎么了？\n小丽：太高了，往下看多{{c6}}啊！" },
        { title: "Bài khóa 2 · Chia tay", text: "小明：听说你下个星期就要回国了？\n马可：是啊，真不想{{c7}}北京。\n小明：这个小{{c8}}送给你，{{c9}}你以后再到中国来。\n马可：谢谢。希望以后能再{{c10}}。" },
      ],
      answers: { c1: "又", c2: "再", c3: "满意", c4: "电梯", c5: "层", c6: "害怕", c7: "离开", c8: "熊猫", c9: "欢迎", c10: "见面" },
      bank: ["又", "再", "满意", "电梯", "层", "害怕", "离开", "熊猫", "欢迎", "见面", "安静", "变化", "重要"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Ở quán cà phê", text: "小丽：小刚，我们坐{{e1}}？\n小刚：你坐哪儿我{{e2}}坐哪儿。\n小丽：坐这儿吧，这儿{{e3}}。你想喝什么饮料？\n小刚：你喝什么我就喝什么。\n小丽：喝{{e4}}吧。你等我{{e5}}，我{{e6}}回来。\n小丽：我去{{e7}}。" },
        { title: "Bài khóa 4 · Gặp lại bạn cũ", text: "老同学：快五年了，你{{e8}}没{{e9}}。\n周太太：谁说的？我胖了，以前的衣服都不能穿了。\n老同学：{{e10}}最重要，胖瘦没关系。" },
      ],
      answers: { e1: "哪儿", e2: "就", e3: "安静", e4: "可乐", e5: "一会儿", e6: "马上", e7: "洗手间", e8: "几乎", e9: "变化", e10: "健康" },
      bank: ["哪儿", "就", "安静", "可乐", "一会儿", "马上", "洗手间", "几乎", "变化", "健康", "什么", "重要", "又"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "太高了，往下看多害怕啊！", vi: "Cao quá, nhìn xuống sợ lắm!", keywords: ["cao", "sợ"] },
        { zh: "希望以后能再见面。", vi: "Hy vọng sau này có thể gặp lại.", keywords: ["hy vọng", "gặp lại"] },
        { zh: "什么东西便宜我就买什么。", vi: "Thứ gì rẻ thì tôi mua thứ đó.", keywords: ["rẻ", "mua"] },
        { zh: "你几乎没变化。", vi: "Bạn hầu như không thay đổi.", keywords: ["hầu như", "thay đổi"] },
        { zh: "我想吃多少就做多少。", vi: "Tôi muốn ăn bao nhiêu thì nấu bấy nhiêu.", keywords: ["ăn", "bao nhiêu", "nấu"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Hôm qua tôi xem một bộ phim, hôm nay lại xem một bộ.", answers: ["我昨天看了一个电影，今天又看了一个。", "昨天我看了一个电影，今天又看了一个。"] },
        { vi: "Bạn chỉ ăn một chút cơm, ăn thêm chút nữa đi.", answers: ["你只吃了一点儿饭，再吃一点儿吧。"] },
        { vi: "Hôm nào bạn có thời gian thì hôm đó đến nhà tôi nhé.", answers: ["你哪天有时间就哪天来我家吧。"] },
        { vi: "Bạn uống gì tôi uống nấy.", answers: ["你喝什么我就喝什么。"] },
        { vi: "Sức khỏe là quan trọng nhất.", answers: ["健康最重要。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小丽最近打算买房子。", a: true },
        { q: "小丽对两个房子都很满意。", a: false },
        { q: "马可下个星期要回国。", a: true },
        { q: "小明会去机场送马可。", a: false },
        { q: "小丽觉得咖啡厅里那个地方很安静。", a: true },
        { q: "小刚想喝咖啡。", a: false },
        { q: "周太太觉得自己胖了。", a: true },
        { q: "在周太太家，周明做饭。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你去哪儿我就去哪儿。",
        "往下看多害怕啊！",
        "希望以后能再见面。",
        "你等我一会儿，我马上回来。",
        "健康最重要。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "介绍你的一次旅行经历：去过几次？做了什么？如果再去一次，你想做什么？ (Kể về một chuyến du lịch: bạn đã đến mấy lần? Đã làm gì? Nếu đi lần nữa bạn muốn làm gì?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 8 (又/再, 疑问代词 + 就 + 疑问代词).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["又", "再", "就"],
      minGrammar: 2,
      sample: "我去过两次北京。2018年去了一次，去年又去了一次。第一次去的时候，我去看了熊猫，熊猫特别可爱。第二次我跟朋友一起去的，朋友去哪儿我就去哪儿，想吃什么就吃什么，玩儿得很高兴。北京这几年变化很大。我希望以后能再去一次，再去看看长城。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 又 / 再", points: 6,
      subtitle: "Chọn 又 hoặc 再 cho mỗi chỗ trống.",
      grammarWord: "又 / 再",
      options: ["又", "再"],
      items: [
        { q: "上个星期我买了一条裤子，昨天___买了一条。", answers: ["又"] },
        { q: "你只吃了一点儿饭，___吃一点儿吧。", answers: ["再"] },
        { q: "小刚，你今天怎么___迟到了？", answers: ["又"] },
        { q: "家里只有一个面包了，我们___买一些吧。", answers: ["再"] },
        { q: "那个饭馆我昨天去了一次，明天还想___去一次。", answers: ["再"] },
        { q: "你怎么___买了一条裤子？不是已经有一条了吗？", answers: ["又"] },
        { q: "刚才我去找他，他没在办公室，我一会儿___去。", answers: ["再"] },
        { q: "我昨天看了一个电影，今天___看了一个。", answers: ["又"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 疑问代词 + 就 + 疑问代词", points: 6,
      subtitle: "Chọn đại từ nghi vấn thích hợp để hoàn thành câu.",
      grammarWord: "疑问代词活用",
      options: ["什么", "哪儿", "谁", "哪天", "多少", "怎么"],
      items: [
        { q: "什么东西便宜我就买___。", answers: ["什么"] },
        { q: "你哪天有时间就___来我家吧。", answers: ["哪天"] },
        { q: "谁喜欢他他就喜欢___。", answers: ["谁"] },
        { q: "你坐哪儿我就坐___。", answers: ["哪儿"] },
        { q: "我想吃多少就做___。", answers: ["多少"] },
        { q: "你想怎么去就___去。", answers: ["怎么"] },
        { q: "你喝什么我就喝___。", answers: ["什么"] },
        { q: "哪儿好玩儿我就去___。", answers: ["哪儿"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 一会儿 / 马上 / 几乎", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "一会儿 / 马上 / 几乎",
      options: ["一会儿", "马上", "几乎"],
      items: [
        { q: "你等我___，我马上回来。", answers: ["一会儿"] },
        { q: "我去一下洗手间，___回来。", answers: ["马上"] },
        { q: "快五年了，你___没变化。", answers: ["几乎"] },
        { q: "我现在___每天都要用电脑。", answers: ["几乎"] },
        { q: "玩儿___电脑就去睡觉吧。", answers: ["一会儿"] },
        { q: "电影___就要开始了，快进去吧。", answers: ["马上"] },
        { q: "他___每个周末都去爬山。", answers: ["几乎"] },
        { q: "我们休息___再走吧。", answers: ["一会儿"] },
      ],
    },
  ],
};
