import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第7课 我跟她都认识五年了。 (Tôi và cô ấy quen nhau được năm năm rồi.)
// Nguồn: Giáo trình chuẩn HSK3, trang 71–79 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson07: Lesson = {
  level: "hsk3",
  no: 7,
  slug: "bai-7",
  zh: "我跟她都认识五年了。",
  pinyin: "Wǒ gēn tā dōu rènshi wǔ nián le.",
  vi: "Tôi và cô ấy quen nhau được năm năm rồi.",
  en: "She and I have known each other for five years.",
  topic: "时间 · Thời gian, sở thích, công việc",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 12 từ mới: 同事、以前、银行、久、感兴趣、结婚、欢迎、迟到、半、接、刻、差.",
    "Hiểu và dùng được 3 điểm ngữ pháp: cách diễn tả khoảng thời gian (bổ ngữ thời lượng), cách diễn tả sự hứng thú (对……感兴趣/有兴趣), nói giờ với 半、刻、差.",
    "Đọc hiểu 4 đoạn hội thoại về đồng nghiệp mới, đi hát – nghe hòa nhạc, tin kết hôn, đến muộn.",
    "Nói một việc đã/đang kéo dài bao lâu; nói về sở thích; nói giờ bằng 半/刻/差.",
    "Từ mới ghép từ chữ cũ: 以后、到时候、迎接.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：十点半、迟到、欢迎、结婚、银行、同事",
      vi: "Chọn hình tương ứng với các từ: 十点半 (mười giờ rưỡi), 迟到 (đến muộn), 欢迎 (chào mừng), 结婚 (kết hôn), 银行 (ngân hàng), 同事 (đồng nghiệp).",
    },
    {
      zh: "完成下面的表格，说说你做这些事用多长时间：做作业、锻炼、吃晚饭、看电视、上网、睡觉",
      vi: "Hoàn thành bảng: bạn làm những việc sau từ mấy giờ đến mấy giờ, mất bao lâu (vd. 做作业 9点到11点，两个小时).",
    },
  ],

  vocab: [
    { id: 1, han: "同事", py: "tóngshì", pos: "dt.", meaning: "đồng nghiệp", example: "那个漂亮的新同事是谁？", exampleVi: "Cô đồng nghiệp mới xinh đẹp kia là ai vậy?" },
    { id: 2, han: "以前", py: "yǐqián", pos: "dt.", meaning: "trước đây, trước kia", example: "以前她在哪儿工作？", exampleVi: "Trước đây cô ấy làm việc ở đâu?" },
    { id: 3, han: "银行", py: "yínháng", pos: "dt.", meaning: "ngân hàng", example: "她在银行工作了两年以后来的我们公司。", exampleVi: "Cô ấy làm ở ngân hàng hai năm rồi mới đến công ty mình." },
    { id: 4, han: "久", py: "jiǔ", pos: "tt.", meaning: "lâu, lâu dài", example: "你们唱了多久？", exampleVi: "Các cậu hát bao lâu?" },
    { id: 5, han: "感兴趣", py: "gǎn xìngqù", pos: "đgt.", meaning: "có hứng thú, thích", example: "她对音乐感兴趣，我对她更感兴趣。", exampleVi: "Cô ấy thích âm nhạc, còn tớ thì thích cô ấy hơn." },
    { id: 6, han: "结婚", py: "jié hūn", pos: "đgt.", meaning: "kết hôn, cưới", example: "我跟小丽下个月结婚。", exampleVi: "Tớ và Tiểu Lệ tháng sau cưới." },
    { id: 7, han: "欢迎", py: "huānyíng", pos: "đgt.", meaning: "hoan nghênh, chào mừng", example: "到时候欢迎你来。", exampleVi: "Đến lúc đó mời cậu đến dự nhé." },
    { id: 8, han: "迟到", py: "chídào", pos: "đgt.", meaning: "đến muộn", example: "你看看手表，怎么迟到了？", exampleVi: "Anh xem đồng hồ đi, sao lại đến muộn?" },
    { id: 9, han: "半", py: "bàn", pos: "số.", meaning: "một nửa, rưỡi", example: "你不是说七点半来接我吗？", exampleVi: "Chẳng phải anh nói bảy rưỡi đến đón em sao?" },
    { id: 10, han: "接", py: "jiē", pos: "đgt.", meaning: "đón", example: "我去机场接一个朋友。", exampleVi: "Tôi ra sân bay đón một người bạn." },
    { id: 11, han: "刻", py: "kè", pos: "lượng.", meaning: "mười lăm phút, khắc", example: "你迟到了一刻钟。", exampleVi: "Anh đến muộn mười lăm phút." },
    { id: 12, han: "差", py: "chà", pos: "đgt.", meaning: "kém, thiếu", example: "已经差一刻八点了！", exampleVi: "Đã tám giờ kém mười lăm rồi!" },
    { id: 13, han: "以后", py: "yǐhòu", pos: "dt.", meaning: "sau này, sau khi (以前 + 后边)", example: "她在银行工作了两年以后来的我们公司。", exampleVi: "Cô ấy làm ở ngân hàng hai năm sau đó mới đến công ty mình.", group: "extended" },
    { id: 14, han: "到时候", py: "dào shíhou", pos: "cụm từ", meaning: "đến lúc đó (到 + 时候)", example: "到时候欢迎你来。", exampleVi: "Đến lúc đó mời bạn đến nhé.", group: "extended" },
    { id: 15, han: "迎接", py: "yíngjiē", pos: "đgt.", meaning: "đón tiếp (欢迎 + 接)", example: "我们去机场迎接客人。", exampleVi: "Chúng tôi ra sân bay đón khách.", group: "extended" },
  ],

  text: {
    title: "课文 我跟她都认识五年了。",
    paragraphs: [
      {
        heading: "课文一 · 在办公室 (Trong văn phòng)",
        zh: "同事：那个漂亮的新同事是谁？\n小刚：那是小丽。\n同事：她刚来北京吗？\n小刚：不，她在北京工作三年了。\n同事：以前她在哪儿工作？\n小刚：她在银行工作了两年以后来的我们公司。",
        vi: "Đồng nghiệp: Cô đồng nghiệp mới xinh đẹp kia là ai vậy?\nTiểu Cương: Đó là Tiểu Lệ.\nĐồng nghiệp: Cô ấy mới đến Bắc Kinh à?\nTiểu Cương: Không, cô ấy làm việc ở Bắc Kinh ba năm rồi.\nĐồng nghiệp: Trước đây cô ấy làm ở đâu?\nTiểu Cương: Cô ấy làm ở ngân hàng hai năm rồi mới đến công ty chúng ta.",
        questions: ["小丽以前在哪儿工作？工作了多长时间？", "小丽在北京工作多长时间了？"],
      },
      {
        heading: "课文二 · 在休息室 (Trong phòng giải lao)",
        zh: "同事：周末你跟小丽去哪儿玩儿了？\n小刚：我们去唱歌了。\n同事：你们唱了多久？\n小刚：我们唱了两个小时歌，晚上还去听音乐会了。\n同事：你们都对音乐感兴趣吗？\n小刚：她对音乐感兴趣，我对她更感兴趣。",
        vi: "Đồng nghiệp: Cuối tuần cậu với Tiểu Lệ đi chơi đâu?\nTiểu Cương: Bọn tớ đi hát.\nĐồng nghiệp: Các cậu hát bao lâu?\nTiểu Cương: Bọn tớ hát hai tiếng, buổi tối còn đi nghe hòa nhạc nữa.\nĐồng nghiệp: Hai người đều thích âm nhạc à?\nTiểu Cương: Cô ấy thích âm nhạc, còn tớ thì thích cô ấy hơn.",
        questions: ["小刚和小丽周末做什么了？做了多长时间？", "小丽对什么很感兴趣？小刚呢？"],
      },
      {
        heading: "课文三 · 在休息室 (Trong phòng giải lao)",
        zh: "小刚：我跟小丽下个月结婚，到时候欢迎你来。\n同事：什么？结婚？\n小刚：对啊，突然吗？\n同事：你们不是刚认识吗？\n小刚：我跟她都认识五年了。\n同事：你跟她结婚，那我怎么办啊？",
        vi: "Tiểu Cương: Tớ và Tiểu Lệ tháng sau cưới, đến lúc đó mời cậu đến dự nhé.\nĐồng nghiệp: Cái gì? Cưới à?\nTiểu Cương: Đúng vậy, bất ngờ lắm à?\nĐồng nghiệp: Chẳng phải hai người mới quen nhau sao?\nTiểu Cương: Tớ với cô ấy quen nhau năm năm rồi.\nĐồng nghiệp: Cậu cưới cô ấy, thế tớ phải làm sao đây?",
        questions: ["小刚和小丽什么时候结婚？", "同事为什么觉得小刚结婚很突然？"],
      },
      {
        heading: "课文四 · 在公司门口 (Ở trước cửa công ty)",
        zh: "小丽：你看看手表，怎么迟到了？\n小刚：没迟到啊。\n小丽：你不是说七点半来接我吗？你迟到了一刻钟。\n小刚：现在不是七点半吗？\n小丽：已经差一刻八点了！我都在这儿坐了半个小时了。\n小刚：不是我迟到了，是你的表快了一刻钟。",
        vi: "Tiểu Lệ: Anh xem đồng hồ đi, sao lại đến muộn thế?\nTiểu Cương: Anh có muộn đâu.\nTiểu Lệ: Chẳng phải anh nói bảy rưỡi đến đón em sao? Anh đến muộn mười lăm phút rồi.\nTiểu Cương: Bây giờ chẳng phải bảy rưỡi sao?\nTiểu Lệ: Đã tám giờ kém mười lăm rồi! Em ngồi ở đây nửa tiếng rồi đấy.\nTiểu Cương: Không phải anh đến muộn, mà là đồng hồ của em nhanh mười lăm phút.",
        questions: ["小刚迟到了吗？为什么？", "小丽在那儿坐了多长时间了？"],
      },
    ],
    notes: [
      "都……了: đã… rồi (nhấn mạnh thời gian dài/muộn): 我跟她都认识五年了, 我都在这儿坐了半个小时了.",
      "Tục ngữ – 一步走错步步错 (Yí bù zǒucuò bùbù cuò): đi sai một bước, các bước kế tiếp đều sai; làm việc gì cũng phải thận trọng từng bước, nhất là lúc bắt đầu.",
    ],
  },

  grammar: [
    {
      word: "动词 + 了 + 时段",
      title: "Cách diễn tả khoảng thời gian",
      usages: [
        {
          label: "Chủ ngữ + động từ + 了 + khoảng thời gian + tân ngữ",
          explain: "Diễn tả hành động kéo dài trong khoảng thời gian bao lâu, dùng bổ ngữ thời lượng như 一刻钟 (15 phút), 半个小时 (nửa giờ), 两天, 三个月…",
          examples: ["她工作了三年。", "我们坐了一个小时公共汽车。", "你怎么晚到了一刻钟？", "我们唱了两个小时歌。"],
        },
        {
          label: "… + 了 + khoảng thời gian + tân ngữ + 了",
          explain: "Thêm 了 ở cuối câu: hành động đã kéo dài khoảng thời gian đó và hiện vẫn đang tiếp diễn. Vd. 看了一个小时书了: đã đọc sách được một tiếng và vẫn đang đọc.",
          examples: ["我学习了一年汉语了。", "她看了半个小时电视了。", "他们游了二十分钟泳了。", "我都在这儿坐了半个小时了。"],
        },
      ],
    },
    {
      word: "对……感兴趣 / 有兴趣",
      title: "Cách diễn tả sự hứng thú",
      usages: [
        {
          label: "Cách dùng",
          explain: "对……感兴趣 và 对……有兴趣 diễn tả sự hứng thú với điều gì. Phủ định: 对……不感兴趣, 对……没(有)兴趣. Phó từ chỉ mức độ đặt trước 感兴趣/有兴趣: 很感兴趣, 非常有兴趣.",
          examples: ["他们对电影感兴趣。", "我儿子对打篮球不感兴趣。", "同学们对汉语有兴趣。你们都对音乐感兴趣吗？", "我对她更感兴趣。"],
        },
      ],
    },
    {
      word: "半 / 刻 / 差",
      title: "Nói giờ với 半, 刻, 差",
      usages: [
        {
          label: "Cách dùng",
          explain: "半: rưỡi (30 phút); 刻: 15 phút (一刻 = 15 phút, 三刻 = 45 phút); 差: kém. Lưu ý: 一刻钟 là khoảng thời gian 15 phút (我等了你一刻钟: em đợi anh 15 phút rồi).",
          examples: ["一点半（1:30）", "十二点一刻（12:15）", "十二点三刻 / 差一刻一点（12:45）", "差五分十二点（11:55）", "已经差一刻八点了！"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "小明每天都听歌，对音乐有___。", options: ["以前", "同事", "兴趣", "欢迎"], answer: "兴趣" },
    { sentence: "我给你介绍一下，这是我的___小王。", options: ["同事", "兴趣", "差", "以前"], answer: "同事" },
    { sentence: "___你来我家玩儿。", options: ["差", "欢迎", "同事", "兴趣"], answer: "欢迎" },
    { sentence: "我是___十分八点到公司的。", options: ["以前", "欢迎", "差", "兴趣"], answer: "差" },
    { sentence: "来中国___，我学了一年汉语。", options: ["以前", "同事", "欢迎", "差"], answer: "以前" },
    { sentence: "A：你今天怎么___了？B：对不起，我起晚了。", options: ["银行", "结婚", "迟到", "接"], answer: "迟到" },
    { sentence: "A：你现在要去哪儿？B：我去机场___一个朋友。", options: ["接", "半", "银行", "迟到"], answer: "接" },
    { sentence: "A：比赛什么时候开始？B：十点___。", options: ["结婚", "半", "接", "银行"], answer: "半" },
    { sentence: "A：请问，哪儿有___？B：一直往前走，超市的旁边。", options: ["银行", "迟到", "半", "结婚"], answer: "银行" },
    { sentence: "A：下个月我们就要___了。B：什么？你们不是刚认识吗？", options: ["接", "银行", "结婚", "半"], answer: "结婚" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 3, 6] },
        { vocabId: 2, distractors: [13, 4, 1] },
        { vocabId: 3, distractors: [1, 7, 8] },
        { vocabId: 5, distractors: [7, 6, 4] },
        { vocabId: 6, distractors: [7, 8, 10] },
        { vocabId: 7, distractors: [15, 6, 5] },
        { vocabId: 8, distractors: [10, 12, 6] },
        { vocabId: 12, distractors: [11, 9, 4] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 4, 6, 8, 10, 11, 12],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "跟她", "都", "认识", "五年", "了", "。"], answer: "我跟她都认识五年了。", vi: "Tôi và cô ấy quen nhau năm năm rồi." },
        { tokens: ["她", "在北京", "工作", "三年", "了", "。"], answer: "她在北京工作三年了。", vi: "Cô ấy làm việc ở Bắc Kinh ba năm rồi." },
        { tokens: ["我们", "唱了", "两个小时", "歌", "。"], answer: "我们唱了两个小时歌。", vi: "Chúng tôi hát hai tiếng đồng hồ." },
        { tokens: ["她", "对", "音乐", "很", "感兴趣", "。"], answer: "她对音乐很感兴趣。", vi: "Cô ấy rất thích âm nhạc." },
        { tokens: ["你", "不是说", "七点半", "来接我", "吗", "？"], answer: "你不是说七点半来接我吗？", vi: "Chẳng phải bạn nói bảy rưỡi đến đón tôi sao?" },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Đồng nghiệp mới", text: "同事：那个漂亮的新{{c1}}是谁？\n小刚：那是小丽。\n同事：她{{c2}}来北京吗？\n小刚：不，她在北京工作三年{{c3}}。\n同事：{{c4}}她在哪儿工作？\n小刚：她在{{c5}}工作了两年以后来的我们公司。" },
        { title: "Bài khóa 2 · Đi hát", text: "同事：周末你跟小丽去哪儿玩儿了？\n小刚：我们去唱歌了。\n同事：你们唱了多{{c6}}？\n小刚：我们唱了两个{{c7}}歌，晚上还去听音乐会了。\n同事：你们都{{c8}}音乐{{c9}}吗？\n小刚：她对音乐感兴趣，我对她{{c10}}感兴趣。" },
      ],
      answers: { c1: "同事", c2: "刚", c3: "了", c4: "以前", c5: "银行", c6: "久", c7: "小时", c8: "对", c9: "感兴趣", c10: "更" },
      bank: ["同事", "刚", "了", "以前", "银行", "久", "小时", "对", "感兴趣", "更", "以后", "刻", "跟"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Tin kết hôn", text: "小刚：我跟小丽下个月{{e1}}，到时候{{e2}}你来。\n同事：什么？结婚？\n小刚：对啊，{{e3}}吗？\n同事：你们不是刚认识吗？\n小刚：我跟她{{e4}}认识五年了。" },
        { title: "Bài khóa 4 · Đến muộn", text: "小丽：你看看手表，怎么{{e5}}了？\n小刚：没迟到啊。\n小丽：你不是说七点{{e6}}来{{e7}}我吗？你迟到了一{{e8}}钟。\n小刚：现在不是七点半吗？\n小丽：已经{{e9}}一刻八点了！我都在这儿坐了{{e10}}个小时了。" },
      ],
      answers: { e1: "结婚", e2: "欢迎", e3: "突然", e4: "都", e5: "迟到", e6: "半", e7: "接", e8: "刻", e9: "差", e10: "半" },
      bank: ["结婚", "欢迎", "突然", "都", "迟到", "半", "接", "刻", "差", "半", "银行", "久"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "她在银行工作了两年。", vi: "Cô ấy làm việc ở ngân hàng hai năm.", keywords: ["ngân hàng", "hai năm"] },
        { zh: "我学习了一年汉语了。", vi: "Tôi đã học tiếng Hán được một năm rồi.", keywords: ["tiếng hán", "một năm"] },
        { zh: "我儿子对打篮球不感兴趣。", vi: "Con trai tôi không thích chơi bóng rổ.", keywords: ["con trai", "bóng rổ"] },
        { zh: "已经差一刻八点了！", vi: "Đã tám giờ kém mười lăm rồi!", keywords: ["tám giờ", "kém mười lăm"] },
        { zh: "你的表快了一刻钟。", vi: "Đồng hồ của bạn nhanh mười lăm phút.", keywords: ["đồng hồ", "nhanh", "mười lăm phút"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chúng tôi ngồi xe buýt một tiếng.", answers: ["我们坐了一个小时公共汽车。", "我们坐了一个小时的公共汽车。"] },
        { vi: "Cô ấy xem ti vi được nửa tiếng rồi.", answers: ["她看了半个小时电视了。", "她看了半个小时的电视了。"] },
        { vi: "Họ rất thích phim ảnh.", answers: ["他们对电影很感兴趣。", "他们对电影感兴趣。", "他们对电影很有兴趣。"] },
        { vi: "Bạn đến muộn mười lăm phút.", answers: ["你迟到了一刻钟。", "你晚到了一刻钟。"] },
        { vi: "Tôi ra sân bay đón một người bạn.", answers: ["我去机场接一个朋友。", "我去机场接朋友。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小丽刚来北京。", a: false },
        { q: "小丽以前在银行工作。", a: true },
        { q: "小刚和小丽唱了两个小时歌。", a: true },
        { q: "小刚对音乐更感兴趣。", a: false },
        { q: "小刚和小丽下个月结婚。", a: true },
        { q: "小刚和小丽刚认识。", a: false },
        { q: "小刚说好七点半来接小丽。", a: true },
        { q: "小丽在那儿等了一个小时。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我跟她都认识五年了。",
        "以前她在哪儿工作？",
        "你们都对音乐感兴趣吗？",
        "到时候欢迎你来。",
        "你迟到了一刻钟。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "介绍你的兴趣爱好：你对什么感兴趣？从什么时候开始的？到现在多长时间了？ (Giới thiệu sở thích của bạn: bạn thích gì? Bắt đầu từ khi nào? Đến nay được bao lâu rồi?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 7 (khoảng thời gian với 了, 对……感兴趣, 半/刻/差).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["感兴趣", "有兴趣", "半", "刻", "差", "了"],
      minGrammar: 2,
      sample: "我对音乐很感兴趣，我是八岁开始学唱歌的，到现在已经唱了十五年了。以前我每天下午四点半去学校学习唱歌，学一个半小时。现在我工作了，没有那么多时间，但是周末我常常跟同事去唱歌。我们一般唱两个小时歌，差一刻十点回家。我觉得唱歌让我很快乐。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: khoảng thời gian", points: 6,
      subtitle: "Chọn cụm thời lượng thích hợp cho mỗi chỗ trống.",
      grammarWord: "时段",
      options: ["三年", "一个小时", "一刻钟", "两个小时", "半个小时", "二十分钟"],
      items: [
        { q: "她在北京工作了___。", answers: ["三年"] },
        { q: "我们坐了___公共汽车。", answers: ["一个小时"] },
        { q: "你怎么晚到了___？", answers: ["一刻钟"] },
        { q: "我们唱了___歌，晚上还去听音乐会了。", answers: ["两个小时"] },
        { q: "我都在这儿坐了___了。", answers: ["半个小时"] },
        { q: "他们游了___泳了。", answers: ["二十分钟"] },
        { q: "她看了___电视了。", answers: ["半个小时", "一个小时", "两个小时"] },
        { q: "你的表快了___。", answers: ["一刻钟"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 对……感兴趣", points: 6,
      subtitle: "Điền giới từ thích hợp để hoàn thành cấu trúc ……感兴趣.",
      grammarWord: "对",
      items: [
        { q: "他们___电影感兴趣。", answers: ["对"] },
        { q: "我儿子___打篮球不感兴趣。", answers: ["对"] },
        { q: "同学们___汉语有兴趣。", answers: ["对"] },
        { q: "你们都___音乐感兴趣吗？", answers: ["对"] },
        { q: "我___她更感兴趣。", answers: ["对"] },
        { q: "你___什么运动感兴趣？", answers: ["对"] },
        { q: "我___游泳很感兴趣。", answers: ["对"] },
        { q: "爸爸___上网没有兴趣。", answers: ["对"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: nói giờ với 半 / 刻 / 差", points: 5,
      subtitle: "Chọn 半, 刻 hoặc 差 để nói đúng giờ trong ngoặc.",
      grammarWord: "半 / 刻 / 差",
      options: ["半", "刻", "差"],
      items: [
        { q: "（10:30）十点___", answers: ["半"] },
        { q: "（12:15）十二点一___", answers: ["刻"] },
        { q: "（7:45）___一刻八点", answers: ["差"] },
        { q: "（11:55）___五分十二点", answers: ["差"] },
        { q: "（12:45）十二点三___", answers: ["刻"] },
        { q: "（1:30）一点___", answers: ["半"] },
        { q: "（8:15）八点一___", answers: ["刻"] },
        { q: "（9:50）___十分十点", answers: ["差"] },
      ],
    },
  ],
};
