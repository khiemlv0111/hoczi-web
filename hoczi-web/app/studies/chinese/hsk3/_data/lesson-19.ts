import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第19课 你没看出来吗？ (Anh không nhìn ra được à?)
// Nguồn: Giáo trình chuẩn HSK3, trang 175–183 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson19: Lesson = {
  level: "hsk3",
  no: 19,
  slug: "bai-19",
  zh: "你没看出来吗？",
  pinyin: "Nǐ méi kàn chulai ma?",
  vi: "Anh không nhìn ra được à?",
  en: "Couldn't you tell?",
  topic: "外貌与经历 · Ngoại hình, ảnh, du lịch",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 14 từ mới: 耳朵、脸、短、马、张、位、蓝、秋(天)、过、鸟、哭、黄河、船、经过.",
    "Hiểu và dùng được 2 điểm ngữ pháp: nghĩa mở rộng của bổ ngữ phương hướng (出来、下来、起来、看上去/看起来), 使/叫/让 (khiến cho).",
    "Đọc hiểu 3 đoạn hội thoại (con gái thay đổi, xem ảnh thi cưỡi ngựa, quà cho bé một tuổi) và 1 đoạn văn về chuyến đi sông Hoàng Hà.",
    "Nhận xét, đánh giá bằng 看上去/看起来; nói điều gì khiến ai đó vui, buồn, lo lắng.",
    "Từ mới ghép từ chữ cũ: 前年、路过、运动服.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的位置：眼睛、头发、鼻子、耳朵、嘴、脸",
      vi: "Chọn vị trí tương ứng trên khuôn mặt: 眼睛 (mắt), 头发 (tóc), 鼻子 (mũi), 耳朵 (tai), 嘴 (miệng), 脸 (mặt).",
    },
    {
      zh: "说说什么时候你会有下面的这些感觉：高兴、生气、难忘、害怕、担心、着急",
      vi: "Khi nào bạn có những cảm giác sau: vui (vd. đi công viên), giận, khó quên, sợ, lo lắng, sốt ruột.",
    },
  ],

  vocab: [
    { id: 1, han: "耳朵", py: "ěrduo", pos: "dt.", meaning: "tai", example: "女儿最近喜欢把头发放在耳朵后面。", exampleVi: "Gần đây con gái thích vén tóc ra sau tai." },
    { id: 2, han: "脸", py: "liǎn", pos: "dt.", meaning: "mặt, khuôn mặt", example: "这样可以使她的脸看上去漂亮一些。", exampleVi: "Như vậy có thể làm khuôn mặt nó trông xinh hơn." },
    { id: 3, han: "短", py: "duǎn", pos: "tt.", meaning: "ngắn", example: "她小时候喜欢短头发，像男孩子一样。", exampleVi: "Hồi nhỏ nó thích để tóc ngắn, như con trai vậy." },
    { id: 4, han: "马", py: "mǎ", pos: "dt.", meaning: "ngựa", example: "上次我们参加骑马比赛的照片，我选了几张洗出来了。", exampleVi: "Ảnh lần trước chúng ta thi cưỡi ngựa, tôi chọn mấy tấm rửa ra rồi." },
    { id: 5, han: "张", py: "zhāng", pos: "lượng.", meaning: "tờ, tấm (lượng từ cho vật phẳng như giấy, ảnh…)", example: "帮我把这几张照片洗出来吧。", exampleVi: "Rửa giúp tôi mấy tấm ảnh này nhé." },
    { id: 6, han: "位", py: "wèi", pos: "lượng.", meaning: "vị (lượng từ cho người, hàm ý kính trọng)", example: "骑得最快的这位是谁？", exampleVi: "Vị cưỡi nhanh nhất này là ai vậy?" },
    { id: 7, han: "蓝", py: "lán", pos: "tt.", meaning: "có màu xanh da trời, xanh lam", example: "他今天穿蓝西服，看上去像40多岁。", exampleVi: "Hôm nay anh ấy mặc vest xanh, trông như hơn 40 tuổi." },
    { id: 8, han: "秋天", py: "qiūtiān", pos: "dt.", meaning: "mùa thu", example: "秋天是北京最好的季节。", exampleVi: "Mùa thu là mùa đẹp nhất ở Bắc Kinh." },
    { id: 9, han: "过", py: "guò", pos: "đgt.", meaning: "ăn (mừng), trải qua", example: "她去年秋天出生的，刚过完一岁生日。", exampleVi: "Bé sinh mùa thu năm ngoái, vừa mừng sinh nhật một tuổi." },
    { id: 10, han: "鸟", py: "niǎo", pos: "dt.", meaning: "chim", example: "她就喜欢听她爸爸学鸟叫。", exampleVi: "Bé chỉ thích nghe bố bắt chước tiếng chim hót." },
    { id: 11, han: "哭", py: "kū", pos: "đgt.", meaning: "khóc", example: "哭的时候，只要他爸爸学小鸟叫，她马上就安静下来了。", exampleVi: "Lúc khóc, chỉ cần bố bé bắt chước tiếng chim là bé im ngay." },
    { id: 12, han: "黄河", py: "Huáng Hé", pos: "dt.", meaning: "Hoàng Hà (con sông lớn thứ hai ở Trung Quốc)", example: "黄河是中国有名的大河。", exampleVi: "Hoàng Hà là con sông lớn nổi tiếng của Trung Quốc." },
    { id: 13, han: "船", py: "chuán", pos: "dt.", meaning: "thuyền, tàu", example: "我坐在船上，一边看一边照相。", exampleVi: "Tôi ngồi trên thuyền, vừa ngắm vừa chụp ảnh." },
    { id: 14, han: "经过", py: "jīngguò", pos: "đgt.", meaning: "đi ngang qua", example: "一路上经过了很多地方，每个地方都不一样。", exampleVi: "Dọc đường đi qua rất nhiều nơi, mỗi nơi một khác." },
    { id: 15, han: "前年", py: "qiánnián", pos: "dt.", meaning: "năm kia (以前 + 年)", example: "我前年来的中国。", exampleVi: "Tôi đến Trung Quốc từ năm kia.", group: "extended" },
    { id: 16, han: "路过", py: "lùguò", pos: "đgt.", meaning: "đi ngang qua (走路 + 经过)", example: "我回家的时候路过一个超市。", exampleVi: "Lúc về nhà tôi đi ngang qua một siêu thị.", group: "extended" },
    { id: 17, han: "运动服", py: "yùndòngfú", pos: "dt.", meaning: "quần áo thể thao (运动 + 衣服)", example: "比赛的时候他穿的是运动服。", exampleVi: "Lúc thi đấu anh ấy mặc đồ thể thao.", group: "extended" },
  ],

  text: {
    title: "课文 你没看出来吗？",
    paragraphs: [
      {
        heading: "课文一 · 在家 (Ở nhà)",
        zh: "爸爸：女儿最近喜欢把头发放在耳朵后面，你知道为什么吗？\n妈妈：这样可以使她的脸看上去漂亮一些。\n爸爸：我最近觉得她和以前不太一样了。\n妈妈：女儿变化不小，她小时候喜欢短头发，像男孩子一样。\n爸爸：我也想起来了。她现在慢慢地开始像个女孩子了。",
        vi: "Bố: Gần đây con gái thích vén tóc ra sau tai, em có biết tại sao không?\nMẹ: Như vậy có thể làm khuôn mặt nó trông xinh hơn.\nBố: Dạo này anh thấy nó không giống trước nữa.\nMẹ: Con gái thay đổi không ít, hồi nhỏ nó thích để tóc ngắn, như con trai vậy.\nBố: Anh cũng nhớ ra rồi. Bây giờ nó dần dần bắt đầu ra dáng con gái rồi.",
        questions: ["女儿最近有什么变化？", "女儿小时候喜欢什么样的头发？"],
      },
      {
        heading: "课文二 · 在看照片 (Đang xem ảnh)",
        zh: "小丽：上次我们参加骑马比赛的照片，我选了几张洗出来了。\n同事：快给我看看。骑得最快的这位是谁？\n小丽：你没看出来吗？他是小刚啊。\n同事：怎么看上去跟现在不太一样？\n小丽：他上班穿西服、衬衫，比赛的时候穿的是运动服。\n同事：他今天穿蓝西服，看上去像40多岁，还是穿运动服让他更年轻。",
        vi: "Tiểu Lệ: Ảnh lần trước chúng ta thi cưỡi ngựa, tớ chọn mấy tấm rửa ra rồi.\nĐồng nghiệp: Mau cho tớ xem. Người cưỡi nhanh nhất này là ai thế?\nTiểu Lệ: Cậu không nhìn ra à? Là Tiểu Cương đấy.\nĐồng nghiệp: Sao trông không giống bây giờ lắm?\nTiểu Lệ: Anh ấy đi làm mặc vest, sơ mi, lúc thi đấu thì mặc đồ thể thao.\nĐồng nghiệp: Hôm nay anh ấy mặc vest xanh, trông như hơn 40 tuổi, mặc đồ thể thao vẫn làm anh ấy trẻ hơn.",
        questions: ["同事为什么没看出来照片里的小刚？", "小刚上班穿什么？看上去怎么样？"],
      },
      {
        heading: "课文三 · 在小丽家 (Tại nhà chị Lệ)",
        zh: "朋友：我们一年没见面了吧？\n小丽：听说你都有女儿了？她多大了？\n朋友：她去年秋天出生的，刚过完一岁生日。\n小丽：她喜欢什么？我送给她。\n朋友：她就喜欢听她爸爸学鸟叫。哭的时候，只要他爸爸学小鸟叫，她马上就安静下来了。\n小丽：啊？这个礼物我没办法送。",
        vi: "Bạn: Chúng ta một năm không gặp rồi nhỉ?\nTiểu Lệ: Nghe nói cậu có con gái rồi à? Bé bao nhiêu tuổi rồi?\nBạn: Bé sinh mùa thu năm ngoái, vừa mừng sinh nhật một tuổi.\nTiểu Lệ: Bé thích gì? Tớ tặng bé.\nBạn: Bé chỉ thích nghe bố bắt chước tiếng chim hót. Lúc khóc, chỉ cần bố bé bắt chước tiếng chim là bé im ngay.\nTiểu Lệ: Hả? Món quà này thì tớ chịu không tặng được.",
        questions: ["朋友的女儿多大了？", "小丽为什么说她不能送朋友女儿喜欢的礼物？"],
      },
      {
        heading: "课文四 · 难忘的旅游 (Chuyến du lịch khó quên)",
        zh: "这次旅游，我去了不少地方，每个地方都让我非常难忘。我先去看了黄河，黄河是中国有名的大河，我坐在船上，一边看一边照相。一路上经过了很多地方，每个地方都不一样。我想快点儿把照片发给大家，叫朋友们也高兴高兴。",
        vi: "Chuyến du lịch lần này, tôi đã đi không ít nơi, nơi nào cũng khiến tôi vô cùng khó quên. Đầu tiên tôi đi xem sông Hoàng Hà, Hoàng Hà là con sông lớn nổi tiếng của Trung Quốc, tôi ngồi trên thuyền vừa ngắm vừa chụp ảnh. Dọc đường đi qua rất nhiều nơi, mỗi nơi một khác. Tôi muốn nhanh chóng gửi ảnh cho mọi người, để bạn bè cũng vui lây.",
        questions: ["“我”觉得这次旅行怎么样？", "“我”想给大家看什么？为什么？"],
      },
    ],
    notes: [
      "黄河 (Huáng Hé): sông Hoàng Hà; 难忘 (nánwàng): khó quên.",
      "学鸟叫: bắt chước tiếng chim hót (学 ở đây = bắt chước).",
      "Tục ngữ – 百闻不如一见 (Bǎi wén bù rú yí jiàn): trăm nghe không bằng một thấy; điều tận mắt thấy luôn đáng tin hơn điều nghe người khác nói.",
    ],
  },

  grammar: [
    {
      word: "出来 / 下来 / 起来",
      title: "Nghĩa mở rộng của bổ ngữ phương hướng",
      usages: [
        {
          label: "Động từ + 出来: từ không thành có",
          explain: "出来 sau động từ chỉ sự xuất hiện của sự vật mới.",
          examples: ["这个字你能写出来吗？", "朋友想出来一个学汉语的好办法。", "你画得真快，一会儿就画出来了。", "照片我选了几张洗出来了。"],
        },
        {
          label: "Động từ + 出来: phân biệt, nhận ra",
          explain: "出来 còn diễn tả sự phân biệt, từ ẩn thành hiện (nhận ra).",
          examples: ["你听出来了吗？这是谁的声音？", "我看出来了，这是二年级的那个女孩子。", "我喝不出来这两杯咖啡有什么不一样。", "你没看出来吗？他是小刚啊。"],
        },
        {
          label: "… + 下来: từ động sang tĩnh, từ mạnh sang yếu, nhanh sang chậm",
          explain: "下来 sau một số tính từ/động từ chỉ sự thay đổi trạng thái theo hướng giảm dần, dừng lại.",
          examples: ["前边的车越开越慢，停下来了。", "天黑下来了，孩子们要回家了。", "我真希望时间能慢下来，不要过得那么快。", "只要他爸爸学小鸟叫，她马上就安静下来了。"],
        },
        {
          label: "Động từ + 起来: hồi tưởng có kết quả",
          explain: "起来 sau động từ diễn tả nhớ lại được điều gì hay không.",
          examples: ["你记起来我是谁了吗？", "你能想起来那是什么时候的事吗？", "对不起，我想不起来你的名字了。", "我想起来了，她小时候像个男孩子。"],
        },
        {
          label: "看起来 / 看上去: đánh giá, ước lượng",
          explain: "看起来 không mang nghĩa hồi tưởng mà là đánh giá, ước lượng qua quan sát; 看上去 có nghĩa tương tự.",
          examples: ["把头发放在耳朵后边，可以使脸看上去漂亮一些。", "他今天穿蓝西服，看上去像40多岁。", "这是你做的饭吗？看起来很好吃。", "他今天一句话也没说，看起来有点儿不高兴。"],
        },
      ],
    },
    {
      word: "使 / 叫 / 让",
      title: "Khiến cho, làm cho",
      usages: [
        {
          label: "Cách dùng",
          explain: "使, 叫, 让 kết hợp với kiêm ngữ đứng sau để diễn tả ý “khiến cho”. Ba từ cơ bản giống nhau; 使 thường dùng trong văn viết, 叫 thường dùng trong văn nói.",
          examples: ["读书使我快乐。", "考试让我很紧张。", "穿运动服让他更年轻。", "我想快点儿把照片发给大家，叫朋友们也高兴高兴。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "帮我把这几___照片洗出来吧。", options: ["秋天", "过", "鸟", "张"], answer: "张" },
    { sentence: "你还记得18岁生日是在哪儿___的吗？", options: ["过", "船", "张", "鸟"], answer: "过" },
    { sentence: "___是北京最好的季节。", options: ["秋天", "鸟", "船", "过"], answer: "秋天" },
    { sentence: "她真爱说话，像只小___一样。", options: ["张", "鸟", "秋天", "船"], answer: "鸟" },
    { sentence: "我希望能坐___去旅行一次。", options: ["过", "张", "船", "秋天"], answer: "船" },
    { sentence: "A：你怎么又___了？B：我想家了。", options: ["位", "经过", "马", "哭"], answer: "哭" },
    { sentence: "A：你一会儿___超市吗？帮我买瓶水吧。B：行，没问题。", options: ["经过", "哭", "耳朵", "位"], answer: "经过" },
    { sentence: "A：你怎么了？B：我___里边有点儿疼。", options: ["马", "耳朵", "经过", "哭"], answer: "耳朵" },
    { sentence: "A：您好，欢迎，请问您几___？B：您好，我们一共是五个人。", options: ["位", "马", "哭", "耳朵"], answer: "位" },
    { sentence: "A：你会骑___吗？B：不会，我从来没骑过。", options: ["耳朵", "位", "马", "经过"], answer: "马" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 10, 13] },
        { vocabId: 2, distractors: [1, 3, 7] },
        { vocabId: 3, distractors: [7, 11, 2] },
        { vocabId: 8, distractors: [12, 10, 13] },
        { vocabId: 10, distractors: [4, 13, 11] },
        { vocabId: 12, distractors: [13, 8, 14] },
        { vocabId: 13, distractors: [10, 4, 12] },
        { vocabId: 14, distractors: [9, 12, 6] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 7, 10, 11, 13, 14],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["你", "没", "看", "出来", "吗", "？"], answer: "你没看出来吗？", vi: "Bạn không nhìn ra à?" },
        { tokens: ["这样", "可以", "使", "她的脸", "看上去", "漂亮一些", "。"], answer: "这样可以使她的脸看上去漂亮一些。", vi: "Như vậy có thể làm khuôn mặt cô ấy trông xinh hơn." },
        { tokens: ["穿运动服", "让", "他", "更", "年轻", "。"], answer: "穿运动服让他更年轻。", vi: "Mặc đồ thể thao làm anh ấy trẻ hơn." },
        { tokens: ["她", "马上", "就", "安静", "下来了", "。"], answer: "她马上就安静下来了。", vi: "Bé im lặng ngay lập tức." },
        { tokens: ["对不起", "，", "我", "想不起来", "你的名字了", "。"], answer: "对不起，我想不起来你的名字了。", vi: "Xin lỗi, tôi không nhớ ra tên bạn nữa." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Con gái thay đổi", text: "爸爸：女儿最近喜欢把头发放在{{c1}}后面，你知道为什么吗？\n妈妈：这样可以{{c2}}她的{{c3}}看上去漂亮一些。\n妈妈：女儿变化不小，她小时候喜欢{{c4}}头发，像男孩子一样。\n爸爸：我也想{{c5}}了。" },
        { title: "Bài khóa 2 · Xem ảnh", text: "小丽：上次我们参加骑{{c6}}比赛的照片，我选了几{{c7}}洗出来了。\n同事：快给我看看。骑得最快的这{{c8}}是谁？\n小丽：你没看{{c9}}吗？他是小刚啊。\n同事：他今天穿{{c10}}西服，看上去像40多岁。" },
      ],
      answers: { c1: "耳朵", c2: "使", c3: "脸", c4: "短", c5: "起来", c6: "马", c7: "张", c8: "位", c9: "出来", c10: "蓝" },
      bank: ["耳朵", "使", "脸", "短", "起来", "马", "张", "位", "出来", "蓝", "下来", "鸟", "船"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Quà cho bé", text: "朋友：她去年{{e1}}出生的，刚{{e2}}完一岁生日。\n朋友：她就喜欢听她爸爸学{{e3}}叫。{{e4}}的时候，只要他爸爸学小鸟叫，她马上就安静{{e5}}了。" },
        { title: "Bài khóa 4 · Chuyến du lịch", text: "这次旅游，我去了不少地方，每个地方都{{e6}}我非常难忘。我先去看了{{e7}}，黄河是中国有名的大河，我坐在{{e8}}上，一边看一边照相。一路上{{e9}}了很多地方，每个地方都不一样。我想快点儿把照片发给大家，{{e10}}朋友们也高兴高兴。" },
      ],
      answers: { e1: "秋天", e2: "过", e3: "鸟", e4: "哭", e5: "下来", e6: "让", e7: "黄河", e8: "船", e9: "经过", e10: "叫" },
      bank: ["秋天", "过", "鸟", "哭", "下来", "让", "黄河", "船", "经过", "叫", "起来", "马", "张"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "你听出来了吗？这是谁的声音？", vi: "Bạn nghe ra chưa? Đây là giọng của ai?", keywords: ["nghe ra", "giọng", "ai"] },
        { zh: "天黑下来了，孩子们要回家了。", vi: "Trời tối dần rồi, bọn trẻ phải về nhà rồi.", keywords: ["trời tối", "bọn trẻ", "về nhà"] },
        { zh: "这是你做的饭吗？看起来很好吃。", vi: "Đây là cơm bạn nấu à? Trông rất ngon.", keywords: ["cơm", "trông", "ngon"] },
        { zh: "考试让我很紧张。", vi: "Thi cử khiến tôi rất căng thẳng.", keywords: ["thi", "căng thẳng"] },
        { zh: "黄河是中国有名的大河。", vi: "Hoàng Hà là con sông lớn nổi tiếng của Trung Quốc.", keywords: ["hoàng hà", "sông", "nổi tiếng"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chữ này bạn có viết ra được không?", answers: ["这个字你能写出来吗？", "这个字你写得出来吗？"] },
        { vi: "Bạn có nhớ ra tôi là ai không?", answers: ["你记起来我是谁了吗？", "你想起来我是谁了吗？"] },
        { vi: "Đọc sách khiến tôi vui vẻ.", answers: ["读书使我快乐。", "读书让我快乐。", "看书让我快乐。", "看书使我快乐。"] },
        { vi: "Hôm nay anh ấy mặc vest xanh, trông như hơn 40 tuổi.", answers: ["他今天穿蓝西服，看上去像40多岁。", "他今天穿蓝西服，看起来像40多岁。", "他今天穿蓝西服，看上去像四十多岁。"] },
        { vi: "Chiếc xe phía trước càng chạy càng chậm, dừng lại rồi.", answers: ["前边的车越开越慢，停下来了。", "前面的车越开越慢，停下来了。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "女儿小时候喜欢短头发。", a: true },
        { q: "爸爸觉得女儿和以前一样。", a: false },
        { q: "照片里骑马骑得最快的是小刚。", a: true },
        { q: "小刚上班的时候穿运动服。", a: false },
        { q: "朋友的女儿刚过完一岁生日。", a: true },
        { q: "朋友的女儿最喜欢听妈妈唱歌。", a: false },
        { q: "“我”坐在船上看黄河。", a: true },
        { q: "“我”觉得这次旅游没什么意思。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你没看出来吗？",
        "她小时候喜欢短头发。",
        "穿运动服让他更年轻。",
        "她马上就安静下来了。",
        "我坐在船上，一边看一边照相。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你最近经历过的一件事，这件事对你有什么影响。 (Kể về một việc bạn trải qua gần đây và ảnh hưởng của nó đối với bạn.)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 19 (出来/下来/起来, 看上去/看起来, 使/叫/让).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["出来", "下来", "起来", "看上去", "看起来", "使", "叫", "让"],
      minGrammar: 2,
      sample: "去年秋天，我跟朋友去看了黄河。我们坐在船上，一边看一边照相，一路上经过了很多地方。那次旅游让我非常难忘。回来以后，我选了几张照片洗出来，放在桌子上。朋友看了照片说：“你看上去比以前年轻多了！”每次看这些照片，我就会想起来那段快乐的时间，心里也安静下来了。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 出来 / 下来 / 起来", points: 6,
      subtitle: "Chọn bổ ngữ phương hướng mang nghĩa mở rộng thích hợp.",
      grammarWord: "出来 / 下来 / 起来",
      options: ["出来", "下来", "起来"],
      items: [
        { q: "这个字你能写___吗？", answers: ["出来"] },
        { q: "你听___了吗？这是谁的声音？", answers: ["出来"] },
        { q: "前边的车越开越慢，停___了。", answers: ["下来"] },
        { q: "天黑___了，孩子们要回家了。", answers: ["下来"] },
        { q: "你记___我是谁了吗？", answers: ["起来"] },
        { q: "对不起，我想不___你的名字了。", answers: ["起来"] },
        { q: "朋友想___一个学汉语的好办法。", answers: ["出来"] },
        { q: "雨下了三个小时，现在终于小___了。", answers: ["下来"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 使 / 叫 / 让", points: 6,
      subtitle: "Điền 使, 叫 hoặc 让 (có câu dùng được nhiều từ).",
      grammarWord: "使 / 叫 / 让",
      options: ["使", "叫", "让"],
      items: [
        { q: "读书___我快乐。", answers: ["使", "让", "叫"] },
        { q: "考试___我很紧张。", answers: ["让", "使", "叫"] },
        { q: "穿运动服___他更年轻。", answers: ["让", "使", "叫"] },
        { q: "我想快点儿把照片发给大家，___朋友们也高兴高兴。", answers: ["叫", "让", "使"] },
        { q: "这样可以___她的脸看上去漂亮一些。", answers: ["使", "让", "叫"] },
        { q: "他学习不努力，这___妈妈很生气。", answers: ["让", "使", "叫"] },
        { q: "这双皮鞋有点儿小，___他很不舒服。", answers: ["让", "使", "叫"] },
        { q: "每个地方都___我非常难忘。", answers: ["让", "使", "叫"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 看上去 / 看起来", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "看上去 / 看出来",
      options: ["看上去", "看出来"],
      items: [
        { q: "他今天穿蓝西服，___像40多岁。", answers: ["看上去"] },
        { q: "你没___吗？他是小刚啊。", answers: ["看出来"] },
        { q: "这是你做的饭吗？___很好吃。", answers: ["看上去"] },
        { q: "我___了，这是二年级的那个女孩子。", answers: ["看出来"] },
        { q: "怎么___跟现在不太一样？", answers: ["看上去"] },
        { q: "穿了这条裙子，你___只有18岁。", answers: ["看上去"] },
        { q: "你能___谁是哥哥，谁是弟弟吗？", answers: ["看出来"] },
        { q: "他今天一句话也没说，___有点儿不高兴。", answers: ["看上去"] },
      ],
    },
  ],
};
