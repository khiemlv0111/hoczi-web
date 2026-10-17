import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第10课 数学比历史难多了。 (Môn Toán khó hơn môn Lịch Sử nhiều.)
// Nguồn: Giáo trình chuẩn HSK3, trang 97–105 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson10: Lesson = {
  level: "hsk3",
  no: 10,
  slug: "bai-10",
  zh: "数学比历史难多了。",
  pinyin: "Shùxué bǐ lìshǐ nán duō le.",
  vi: "Môn Toán khó hơn môn Lịch Sử nhiều.",
  en: "Math is much harder than history.",
  topic: "比较 · So sánh, môn học, nhà ở",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 15 từ mới: 个子、矮、历史、体育、数学、方便、自行车、骑、旧、换、地方、中介、主要、环境、附近.",
    "Hiểu và dùng được 2 điểm ngữ pháp: câu so sánh A 比 B + tính từ + 一点儿/一些/得多/多了 (phủ định A 没有 B (这么/那么) + tính từ), cách diễn tả số ước lượng bằng hai số liền nhau (一两、三四、七八…).",
    "Đọc hiểu 4 đoạn hội thoại: so sánh chiều cao – tuổi, môn học yêu thích, chuyển nhà – mua xe đạp, xem nhà với môi giới.",
    "So sánh người, vật về nhiều mặt; nói số lượng ước chừng.",
    "Từ mới ghép từ chữ cũ: 换季、地面、主菜.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：历史、体育、个子、车站、数学、自行车",
      vi: "Chọn hình tương ứng với các từ: 历史 (lịch sử), 体育 (thể dục), 个子 (vóc dáng), 车站 (bến xe), 数学 (toán), 自行车 (xe đạp).",
    },
    {
      zh: "写出下列词语的反义词：大—小、新—、高—、难—、远—、贵—、胖—",
      vi: "Viết từ trái nghĩa: 大–小; 新 (mới) – 旧; 高 (cao) – 矮; 难 (khó) – 容易; 远 (xa) – 近; 贵 (đắt) – 便宜; 胖 (béo) – 瘦.",
    },
  ],

  vocab: [
    { id: 1, han: "个子", py: "gèzi", pos: "dt.", meaning: "vóc dáng, thân hình (chiều cao)", example: "大山，你和马可谁个子高？", exampleVi: "Đại Sơn, cậu với Marco ai cao hơn?" },
    { id: 2, han: "矮", py: "ǎi", pos: "tt.", meaning: "thấp", example: "我比马可矮一点儿。", exampleVi: "Tớ thấp hơn Marco một chút." },
    { id: 3, han: "历史", py: "lìshǐ", pos: "dt.", meaning: "môn Lịch sử, lịch sử", example: "我喜欢历史课、体育课，不喜欢数学课。", exampleVi: "Tớ thích giờ Lịch sử, giờ Thể dục, không thích giờ Toán." },
    { id: 4, han: "体育", py: "tǐyù", pos: "dt.", meaning: "môn Thể dục, thể thao", example: "我最喜欢体育课，多有意思啊。", exampleVi: "Tôi thích nhất giờ Thể dục, thú vị lắm." },
    { id: 5, han: "数学", py: "shùxué", pos: "dt.", meaning: "môn Toán", example: "我觉得数学比历史难多了。", exampleVi: "Tớ thấy Toán khó hơn Lịch sử nhiều." },
    { id: 6, han: "方便", py: "fāngbiàn", pos: "tt.", meaning: "thuận tiện", example: "学校里边比学校外边方便。", exampleVi: "Trong trường thuận tiện hơn ngoài trường." },
    { id: 7, han: "自行车", py: "zìxíngchē", pos: "dt.", meaning: "xe đạp", example: "我还打算买辆自行车。", exampleVi: "Tớ còn định mua một chiếc xe đạp." },
    { id: 8, han: "骑", py: "qí", pos: "đgt.", meaning: "cưỡi, đi (xe đạp, ngựa…)", example: "骑车七八分钟就能到。", exampleVi: "Đạp xe bảy tám phút là đến." },
    { id: 9, han: "旧", py: "jiù", pos: "tt.", meaning: "cũ", example: "那辆太旧了，要换一辆。", exampleVi: "Chiếc đó cũ quá rồi, phải đổi chiếc khác." },
    { id: 10, han: "换", py: "huàn", pos: "đgt.", meaning: "đổi, thay thế", example: "你想要这个吗？没问题，我跟你换。", exampleVi: "Bạn muốn cái này à? Không vấn đề gì, tôi đổi với bạn." },
    { id: 11, han: "地方", py: "dìfang", pos: "dt.", meaning: "chỗ, nơi", example: "这两个地方的房子一样吗？", exampleVi: "Nhà ở hai chỗ này có giống nhau không?" },
    { id: 12, han: "中介", py: "zhōngjiè", pos: "dt.", meaning: "môi giới", example: "中介说学校外边的房子大一些。", exampleVi: "Môi giới nói nhà ngoài trường rộng hơn một chút." },
    { id: 13, han: "主要", py: "zhǔyào", pos: "tt.", meaning: "chủ yếu", example: "大小没关系，主要是环境。", exampleVi: "To nhỏ không sao, chủ yếu là môi trường." },
    { id: 14, han: "环境", py: "huánjìng", pos: "dt.", meaning: "môi trường", example: "哪个环境更安静？", exampleVi: "Chỗ nào môi trường yên tĩnh hơn?" },
    { id: 15, han: "附近", py: "fùjìn", pos: "dt.", meaning: "vùng lân cận, gần đây", example: "附近有三四个车站。", exampleVi: "Gần đó có ba bốn bến xe." },
    { id: 16, han: "换季", py: "huàn jì", pos: "đgt.", meaning: "chuyển mùa (换 + 季节)", example: "换季的时候容易感冒。", exampleVi: "Lúc chuyển mùa dễ bị cảm.", group: "extended" },
    { id: 17, han: "地面", py: "dìmiàn", pos: "dt.", meaning: "mặt đất, mặt sàn (地方 + 上面)", example: "下雨了，地面很滑，小心点儿。", exampleVi: "Mưa rồi, mặt đất trơn lắm, cẩn thận một chút.", group: "extended" },
    { id: 18, han: "主菜", py: "zhǔcài", pos: "dt.", meaning: "món chính (主要 + 菜)", example: "今天的主菜是鱼。", exampleVi: "Món chính hôm nay là cá.", group: "extended" },
  ],

  text: {
    title: "课文 数学比历史难多了。",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "朋友：大山，你和马可谁个子高？\n大山：马可比我高，我比马可矮一点儿。\n朋友：那你们谁大？\n大山：我比马可大两岁。\n朋友：你们谁的汉语说得更好？\n大山：马可比我说得好一些，我的汉语没有他好。",
        vi: "Bạn: Đại Sơn, cậu với Marco ai cao hơn?\nĐại Sơn: Marco cao hơn tớ, tớ thấp hơn Marco một chút.\nBạn: Thế ai lớn tuổi hơn?\nĐại Sơn: Tớ lớn hơn Marco hai tuổi.\nBạn: Ai nói tiếng Hán giỏi hơn?\nĐại Sơn: Marco nói giỏi hơn tớ một chút, tiếng Hán của tớ không giỏi bằng cậu ấy.",
        questions: ["马可和大山谁高？谁年龄大？", "谁的汉语说得好？"],
      },
      {
        heading: "课文二 · 在教室 (Trong lớp học)",
        zh: "小明：我喜欢历史课、体育课，不喜欢数学课。\n同学：为什么？数学也很有意思啊。\n小明：我觉得数学比历史难多了，我听不懂。\n同学：别担心，我可以帮你。\n小明：好啊，我们每天学多长时间？\n同学：一两个小时吧。",
        vi: "Tiểu Minh: Tớ thích giờ Lịch sử, giờ Thể dục, không thích giờ Toán.\nBạn học: Tại sao? Toán cũng rất thú vị mà.\nTiểu Minh: Tớ thấy Toán khó hơn Lịch sử nhiều, tớ nghe không hiểu.\nBạn học: Đừng lo, tớ có thể giúp cậu.\nTiểu Minh: Được thôi, mỗi ngày chúng ta học bao lâu?\nBạn học: Khoảng một hai tiếng.",
        questions: ["小明为什么不喜欢数学课？", "小明和同学打算每天一起做什么？做多长时间？"],
      },
      {
        heading: "课文三 · 在休息室 (Trong phòng giải lao)",
        zh: "同事：你最近比以前来得早多了，搬家了？\n小丽：是啊，你不知道？我上个月就搬家了，走路二十分钟就到。\n同事：那很方便啊。\n小丽：我还打算买辆自行车，骑车七八分钟就能到。\n同事：你不是有一辆吗？\n小丽：那辆太旧了，要换一辆，很便宜，两三百块钱。",
        vi: "Đồng nghiệp: Dạo này cậu đến sớm hơn trước nhiều, chuyển nhà rồi à?\nTiểu Lệ: Ừ, cậu không biết à? Tháng trước tớ đã chuyển nhà rồi, đi bộ hai mươi phút là đến.\nĐồng nghiệp: Thế thì tiện quá.\nTiểu Lệ: Tớ còn định mua một chiếc xe đạp, đạp xe bảy tám phút là đến.\nĐồng nghiệp: Chẳng phải cậu có một chiếc rồi sao?\nTiểu Lệ: Chiếc đó cũ quá rồi, phải đổi chiếc khác, rẻ lắm, hai ba trăm đồng thôi.",
        questions: ["小丽为什么比以前来得早了？", "小丽为什么要买自行车？"],
      },
      {
        heading: "课文四 · 在看房子 (Đang xem nhà)",
        zh: "大山：这两个地方的房子一样吗？\n中介：不一样。您看，学校外边的房子比学校里边的大一些。\n大山：大小没关系，主要是环境，哪个更安静？\n中介：学校里边的没有学校外边的那么安静。\n大山：哪个方便一些呢？\n中介：学校里边比学校外边方便，附近有三四个车站。",
        vi: "Đại Sơn: Nhà ở hai chỗ này có giống nhau không?\nMôi giới: Không giống. Anh xem, nhà ngoài trường rộng hơn nhà trong trường một chút.\nĐại Sơn: To nhỏ không sao, chủ yếu là môi trường, chỗ nào yên tĩnh hơn?\nMôi giới: Nhà trong trường không yên tĩnh bằng nhà ngoài trường.\nĐại Sơn: Chỗ nào thuận tiện hơn?\nMôi giới: Trong trường thuận tiện hơn ngoài trường, gần đó có ba bốn bến xe.",
        questions: ["住在学校里边和学校外边有什么不一样？", "大山觉得找房子主要看什么？"],
      },
    ],
    notes: [
      "两三百块钱: khoảng hai ba trăm đồng (số ước lượng).",
      "Tục ngữ – 不可同日而语 (Bù kě tóngrì'éryǔ): không thể so sánh với nhau (khác biệt quá lớn), vd. 通信技术进步太快了，过去跟现在不可同日而语.",
      "Văn hóa – Trang phục cưới của người Trung Quốc: trước kia cô dâu mặc 旗袍 (sườn xám) đỏ truyền thống; nay mặc cả sườn xám đỏ và váy cưới trắng (婚纱), thể hiện sự kết hợp văn hóa Trung – Tây.",
    ],
  },

  grammar: [
    {
      word: "A 比 B + 形容词 + 一点儿/一些/得多/多了",
      title: "Câu so sánh (2): A hơn B",
      usages: [
        {
          label: "Khẳng định",
          explain: "一点儿, 一些 đặt sau tính từ trong câu 比 chỉ mức chênh lệch không lớn; 得多, 多了 chỉ mức chênh lệch rất lớn.",
          examples: ["大山比大卫矮一点儿。", "我今天起得比昨天晚一些。", "今天的作业比昨天多得多。", "数学比历史难多了。"],
        },
        {
          label: "Phủ định: A 没有 B (这么/那么) + tính từ",
          explain: "A không bằng B.",
          examples: ["咖啡没有茶好喝。", "他没有我这么高。", "这个电影没有那个电影那么有意思。", "学校里边的（房子）没有学校外边的那么安静。"],
        },
      ],
      note: "Không dùng 很/非常/太 trước tính từ trong câu 比: không nói *数学比历史很难.",
    },
    {
      word: "一两 / 三四 / 七八……",
      title: "Cách diễn tả số ước lượng (1)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Hai số đếm liên tiếp đặt cạnh nhau để diễn tả số ước lượng: 一两 (một hai), 两三 (hai ba), 三四 (ba bốn), 五六, 七八, 八九.",
          examples: ["我每天学习一两个小时汉语。", "你都喝了三四杯咖啡了，别再喝了！", "从小丽家到公司骑车七八分钟就能到。", "学校里边比学校外边方便，附近有三四个车站。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "我___比他高一点儿。", options: ["安静", "体育", "个子", "旧"], answer: "个子" },
    { sentence: "我每天___车来学校。", options: ["骑", "旧", "个子", "安静"], answer: "骑" },
    { sentence: "我最喜欢___课，多有意思啊。", options: ["个子", "体育", "骑", "旧"], answer: "体育" },
    { sentence: "我喜欢住在这儿，主要是觉得这儿很___。", options: ["安静", "个子", "体育", "骑"], answer: "安静" },
    { sentence: "这条裤子太___了，再买一条吧。", options: ["体育", "骑", "旧", "个子"], answer: "旧" },
    { sentence: "A：我觉得你的比我的好。B：你想要这个吗？没问题，我跟你___。", options: ["方便", "数学", "换", "附近"], answer: "换" },
    { sentence: "A：你哪天比较___，我们见面聊聊天儿？B：周末吧，来我家吃饭。", options: ["方便", "换", "地方", "附近"], answer: "方便" },
    { sentence: "A：这个___的天气怎么样？B：非常好，夏天一点儿也不热。", options: ["数学", "地方", "方便", "换"], answer: "地方" },
    { sentence: "A：请问，这儿___有超市吗？B：有，一直往前走就是。", options: ["附近", "地方", "数学", "方便"], answer: "附近" },
    { sentence: "A：你怎么不太高兴？B：我___考得不好。", options: ["换", "附近", "数学", "地方"], answer: "数学" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 11, 7] },
        { vocabId: 3, distractors: [5, 4, 14] },
        { vocabId: 4, distractors: [3, 5, 1] },
        { vocabId: 6, distractors: [11, 15, 13] },
        { vocabId: 7, distractors: [8, 9, 10] },
        { vocabId: 13, distractors: [14, 12, 6] },
        { vocabId: 14, distractors: [13, 15, 10] },
        { vocabId: 15, distractors: [6, 11, 12] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 3, 5, 7, 9, 10, 14, 15],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["数学", "比", "历史", "难", "多了", "。"], answer: "数学比历史难多了。", vi: "Toán khó hơn Lịch sử nhiều." },
        { tokens: ["我", "比", "马可", "矮", "一点儿", "。"], answer: "我比马可矮一点儿。", vi: "Tôi thấp hơn Marco một chút." },
        { tokens: ["我的汉语", "没有", "他", "好", "。"], answer: "我的汉语没有他好。", vi: "Tiếng Hán của tôi không giỏi bằng anh ấy." },
        { tokens: ["骑车", "七八分钟", "就", "能到", "。"], answer: "骑车七八分钟就能到。", vi: "Đạp xe bảy tám phút là đến." },
        { tokens: ["学校里边", "比", "学校外边", "方便", "。"], answer: "学校里边比学校外边方便。", vi: "Trong trường thuận tiện hơn ngoài trường." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ai cao hơn", text: "朋友：大山，你和马可谁{{c1}}高？\n大山：马可{{c2}}我高，我比马可{{c3}}一点儿。\n朋友：那你们谁大？\n大山：我比马可大两岁。\n朋友：你们谁的汉语说得更好？\n大山：马可比我说得好{{c4}}，我的汉语{{c5}}他好。" },
        { title: "Bài khóa 2 · Môn học", text: "小明：我喜欢{{c6}}课、{{c7}}课，不喜欢{{c8}}课。\n同学：为什么？数学也很有意思啊。\n小明：我觉得数学比历史难{{c9}}，我听不懂。\n同学：别担心，我可以帮你。\n小明：好啊，我们每天学多长时间？\n同学：{{c10}}个小时吧。" },
      ],
      answers: { c1: "个子", c2: "比", c3: "矮", c4: "一些", c5: "没有", c6: "历史", c7: "体育", c8: "数学", c9: "多了", c10: "一两" },
      bank: ["个子", "比", "矮", "一些", "没有", "历史", "体育", "数学", "多了", "一两", "很", "跟", "旧"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Chuyển nhà", text: "同事：那很{{e1}}啊。\n小丽：我还打算买辆{{e2}}，{{e3}}车七八分钟就能到。\n同事：你不是有一辆吗？\n小丽：那辆太{{e4}}了，要{{e5}}一辆，很便宜，两三百块钱。" },
        { title: "Bài khóa 4 · Xem nhà", text: "大山：这两个{{e6}}的房子一样吗？\n中介：不一样。您看，学校外边的房子比学校里边的大一些。\n大山：大小没关系，{{e7}}是{{e8}}，哪个更安静？\n中介：学校里边的没有学校外边的{{e9}}安静。\n大山：哪个方便一些呢？\n中介：学校里边比学校外边方便，{{e10}}有三四个车站。" },
      ],
      answers: { e1: "方便", e2: "自行车", e3: "骑", e4: "旧", e5: "换", e6: "地方", e7: "主要", e8: "环境", e9: "那么", e10: "附近" },
      bank: ["方便", "自行车", "骑", "旧", "换", "地方", "主要", "环境", "那么", "附近", "中介", "个子", "得多"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我比马可大两岁。", vi: "Tôi lớn hơn Marco hai tuổi.", keywords: ["lớn hơn", "hai tuổi"] },
        { zh: "今天的作业比昨天多得多。", vi: "Bài tập hôm nay nhiều hơn hôm qua nhiều.", keywords: ["bài tập", "hôm qua", "nhiều"] },
        { zh: "咖啡没有茶好喝。", vi: "Cà phê không ngon bằng trà.", keywords: ["cà phê", "trà", "không"] },
        { zh: "你都喝了三四杯咖啡了，别再喝了！", vi: "Bạn uống ba bốn cốc cà phê rồi, đừng uống nữa!", keywords: ["ba bốn", "cà phê", "đừng"] },
        { zh: "大小没关系，主要是环境。", vi: "To nhỏ không sao, chủ yếu là môi trường.", keywords: ["không sao", "chủ yếu", "môi trường"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Hôm nay tôi dậy muộn hơn hôm qua một chút.", answers: ["我今天起得比昨天晚一些。", "我今天起得比昨天晚一点儿。", "今天我起得比昨天晚一点儿。", "今天我起得比昨天晚一些。"] },
        { vi: "Anh ấy không cao bằng tôi.", answers: ["他没有我高。", "他没有我这么高。"] },
        { vi: "Mỗi ngày tôi học tiếng Hán một hai tiếng.", answers: ["我每天学习一两个小时汉语。", "我每天学一两个小时汉语。", "我每天学习汉语一两个小时。"] },
        { vi: "Chiếc xe đạp này cũ quá, phải đổi chiếc khác.", answers: ["这辆自行车太旧了，要换一辆。", "这辆自行车太旧了，要换一辆新的。"] },
        { vi: "Gần đây có siêu thị không?", answers: ["附近有超市吗？", "这儿附近有超市吗？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "马可比大山高。", a: true },
        { q: "马可比大山大两岁。", a: false },
        { q: "小明觉得数学比历史难多了。", a: true },
        { q: "同学不想帮小明学数学。", a: false },
        { q: "小丽上个月搬家了。", a: true },
        { q: "小丽买自行车要两三千块钱。", a: false },
        { q: "学校外边的房子比学校里边的大一些。", a: true },
        { q: "学校里边比学校外边安静。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "数学比历史难多了。",
        "我的汉语没有他好。",
        "我还打算买辆自行车。",
        "那辆太旧了，要换一辆。",
        "附近有三四个车站。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "比较一下你现在住的地方和以前住的地方。 (So sánh nơi bạn đang ở bây giờ với nơi bạn ở trước đây.)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 10 (A比B + tính từ + 一点儿/得多/多了, A没有B……, số ước lượng).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["比", "没有", "一点儿", "一些", "得多", "多了", "一两", "两三", "三四", "七八"],
      minGrammar: 2,
      sample: "上个月我搬家了。现在住的地方比以前的大一些，环境也比以前安静多了。以前住的地方离公司很远，要坐一个多小时公共汽车；现在骑自行车七八分钟就能到，方便多了。附近有两三个超市，买东西也很方便。但是现在的房子没有以前的那么便宜。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: A 比 B + tính từ + mức độ", points: 6,
      subtitle: "Chọn từ chỉ mức độ chênh lệch phù hợp (có câu nhiều đáp án).",
      grammarWord: "一点儿 / 一些 / 得多 / 多了",
      options: ["一点儿", "一些", "得多", "多了"],
      items: [
        { q: "大山比大卫矮___。", answers: ["一点儿", "一些"] },
        { q: "我今天起得比昨天晚___。", answers: ["一些", "一点儿"] },
        { q: "今天的作业比昨天多___。", answers: ["得多", "多了"] },
        { q: "数学比历史难___。", answers: ["多了", "得多"] },
        { q: "你最近比以前来得早___，搬家了？", answers: ["多了", "得多"] },
        { q: "学校外边的房子比学校里边的大___。", answers: ["一些", "一点儿"] },
        { q: "马可比我说得好___，我的汉语没有他好。", answers: ["一些", "一点儿"] },
        { q: "骑车比走路快___。", answers: ["多了", "得多", "一点儿", "一些"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 比 / 没有 / 那么", points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "比 / 没有 / 那么",
      options: ["比", "没有", "那么"],
      items: [
        { q: "马可___我高。", answers: ["比"] },
        { q: "咖啡___茶好喝。", answers: ["没有"] },
        { q: "这个电影没有那个电影___有意思。", answers: ["那么"] },
        { q: "我的汉语___他好。", answers: ["没有"] },
        { q: "学校里边___学校外边方便。", answers: ["比"] },
        { q: "学校里边的没有学校外边的___安静。", answers: ["那么"] },
        { q: "今天的天气___昨天冷多了。", answers: ["比"] },
        { q: "我做的饭___妈妈做的好吃。", answers: ["没有"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: số ước lượng", points: 5,
      subtitle: "Chọn số ước lượng thích hợp.",
      grammarWord: "概数",
      options: ["一两", "两三", "三四", "七八"],
      items: [
        { q: "我每天学习___个小时汉语。", answers: ["一两", "两三", "三四"] },
        { q: "你都喝了___杯咖啡了，别再喝了！", answers: ["三四", "两三"] },
        { q: "从小丽家到公司骑车___分钟就能到。", answers: ["七八"] },
        { q: "附近有___个车站。", answers: ["三四", "两三", "一两"] },
        { q: "那辆自行车很便宜，___百块钱。", answers: ["两三", "三四", "七八"] },
        { q: "我们每天学___个小时吧。", answers: ["一两", "两三"] },
        { q: "今年我爬过___次山。", answers: ["两三", "三四", "一两", "七八"] },
        { q: "坐公共汽车___分钟就到了。", answers: ["七八"] },
      ],
    },
  ],
};
