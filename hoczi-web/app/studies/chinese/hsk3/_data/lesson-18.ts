import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第18课 我相信他们会同意的。 (Tôi tin họ sẽ đồng ý.)
// Nguồn: Giáo trình chuẩn HSK3, trang 167, 170–174 (bản scan, đọc từ ảnh trang).
// LƯU Ý: bản scan thiếu trang 168–169 (bài khóa, từ mới, phiên âm). Danh sách từ mới lấy theo mục lục;
// bốn bài khóa dưới đây được DỰNG LẠI theo đáp án phần “根据课文回答问题” và câu mẫu trong sách,
// không phải nguyên văn — cần giáo viên đối chiếu với sách giấy và sửa lại.
// Ngữ pháp, luyện nhanh lấy từ sách; phần luyện tập 100 điểm và bản dịch tiếng Việt được soạn thêm.

export const lesson18: Lesson = {
  level: "hsk3",
  no: 18,
  slug: "bai-18",
  zh: "我相信他们会同意的。",
  pinyin: "Wǒ xiāngxìn tāmen huì tóngyì de.",
  vi: "Tôi tin họ sẽ đồng ý.",
  en: "I believe they will agree.",
  topic: "生活与工作 · Vay tiền, nuôi thú cưng, xin việc, văn hóa",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 17 từ mới: 向、万、只、嘴、动物、段、不但……而且……、有名、同意、相信、关于、机会、国家、种、特点、奇怪、地.",
    "Hiểu và dùng được 2 điểm ngữ pháp: cấu trúc điều kiện 只要……，就……; giới từ 关于.",
    "Đọc hiểu 3 đoạn hội thoại (vay tiền mua nhà, muốn nuôi chó con, phỏng vấn xin việc) và 1 đoạn văn về văn hóa các nước.",
    "Nói điều kiện – kết quả; giới thiệu đối tượng được nói đến bằng 关于.",
    "Từ mới ghép từ chữ cũ: 动物园、人名、自信.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：动物、国家、同意、相信、奇怪、万",
      vi: "Chọn hình tương ứng với các từ: 动物 (động vật), 国家 (quốc gia), 同意 (đồng ý), 相信 (tin tưởng), 奇怪 (kỳ lạ), 万 (vạn, mười nghìn).",
    },
    {
      zh: "连线：把原因和结果连起来。穿得很少、起床太晚、不吃早饭、不复习、不来上课、不刷牙",
      vi: "Nối nguyên nhân với kết quả: mặc ít → bị cảm; dậy muộn → đến muộn; không ăn sáng → đói; không ôn bài → thi kém; không đến lớp → thầy giận; không đánh răng → đau răng.",
    },
  ],

  vocab: [
    { id: 1, han: "向", py: "xiàng", pos: "giới.", meaning: "hướng về, về phía; với (ai)", example: "坐火车的时候，我喜欢向外看。", exampleVi: "Lúc đi tàu, tôi thích nhìn ra ngoài." },
    { id: 2, han: "万", py: "wàn", pos: "số.", meaning: "vạn, mười nghìn", example: "我打算买房子，还差两万块钱。", exampleVi: "Tôi định mua nhà, còn thiếu hai vạn đồng." },
    { id: 3, han: "只", py: "zhī", pos: "lượng.", meaning: "con (lượng từ cho động vật)", example: "你看这只小狗，多可爱啊！", exampleVi: "Mẹ xem con chó nhỏ này, đáng yêu quá!" },
    { id: 4, han: "嘴", py: "zuǐ", pos: "dt.", meaning: "miệng", example: "这只小狗嘴小小的，眼睛大大的。", exampleVi: "Con chó nhỏ này miệng nhỏ nhỏ, mắt to to." },
    { id: 5, han: "动物", py: "dòngwù", pos: "dt.", meaning: "động vật", example: "动物和小孩儿一样，都需要人照顾。", exampleVi: "Động vật cũng như trẻ con, đều cần người chăm sóc." },
    { id: 6, han: "段", py: "duàn", pos: "lượng.", meaning: "đoạn, quãng (thời gian, đường)", example: "过一段时间以后再说吧。", exampleVi: "Qua một thời gian nữa rồi hãy nói." },
    { id: 7, han: "不但……而且……", py: "búdàn…érqiě…", pos: "liên.", meaning: "không những… mà còn…", example: "这家饭馆不但菜很好吃，而且环境很好。", exampleVi: "Nhà hàng này không những đồ ăn ngon mà môi trường còn rất tốt." },
    { id: 8, han: "有名", py: "yǒumíng", pos: "tt.", meaning: "nổi tiếng", example: "你们公司不但很有名，而且工作环境也很好。", exampleVi: "Công ty ông không những rất nổi tiếng mà môi trường làm việc cũng rất tốt." },
    { id: 9, han: "同意", py: "tóngyì", pos: "đgt.", meaning: "đồng ý", example: "我相信他们会同意的。", exampleVi: "Tôi tin họ sẽ đồng ý." },
    { id: 10, han: "相信", py: "xiāngxìn", pos: "đgt.", meaning: "tin, tin tưởng", example: "我相信我会慢慢习惯的。", exampleVi: "Tôi tin mình sẽ dần dần quen." },
    { id: 11, han: "关于", py: "guānyú", pos: "giới.", meaning: "về (việc gì)", example: "我最近看了一些关于中国文化的电影。", exampleVi: "Gần đây tôi xem một số phim về văn hóa Trung Quốc." },
    { id: 12, han: "机会", py: "jīhuì", pos: "dt.", meaning: "cơ hội", example: "谢谢您给我这个机会。", exampleVi: "Cảm ơn ông đã cho tôi cơ hội này." },
    { id: 13, han: "国家", py: "guójiā", pos: "dt.", meaning: "quốc gia, đất nước", example: "你是从哪个国家来的？", exampleVi: "Bạn đến từ nước nào?" },
    { id: 14, han: "种", py: "zhǒng", pos: "lượng.", meaning: "loại, kiểu", example: "每种文化都有自己的特点。", exampleVi: "Mỗi nền văn hóa đều có đặc điểm riêng." },
    { id: 15, han: "特点", py: "tèdiǎn", pos: "dt.", meaning: "đặc điểm", example: "每种文化都有自己的特点。", exampleVi: "Mỗi nền văn hóa đều có đặc điểm riêng." },
    { id: 16, han: "奇怪", py: "qíguài", pos: "tt.", meaning: "kỳ lạ, lạ", example: "真奇怪，桌子上的词典怎么不见了？", exampleVi: "Lạ thật, quyển từ điển trên bàn sao lại biến mất?" },
    { id: 17, han: "地", py: "de", pos: "trợ.", meaning: "trợ từ kết cấu (tính từ + 地 + động từ)", example: "只要经过一段时间，就会慢慢地习惯的。", exampleVi: "Chỉ cần qua một thời gian là sẽ dần dần quen thôi." },
    { id: 18, han: "动物园", py: "dòngwùyuán", pos: "dt.", meaning: "sở thú (动物 + 公园)", example: "周末我们带孩子去动物园看熊猫吧。", exampleVi: "Cuối tuần chúng ta đưa con đi sở thú xem gấu trúc nhé.", group: "extended" },
    { id: 19, han: "人名", py: "rénmíng", pos: "dt.", meaning: "tên người (人 + 名字)", example: "这个词是人名，不是地名。", exampleVi: "Từ này là tên người, không phải tên địa danh.", group: "extended" },
    { id: 20, han: "自信", py: "zìxìn", pos: "tt.", meaning: "tự tin (自己 + 相信)", example: "他回答问题的时候很自信。", exampleVi: "Lúc trả lời câu hỏi anh ấy rất tự tin.", group: "extended" },
  ],

  text: {
    title: "课文 我相信他们会同意的。(bản dựng lại)",
    paragraphs: [
      {
        heading: "课文一 · 周明和朋友 (Châu Minh và người bạn)",
        zh: "朋友：周明，我想向你借点儿钱。\n周明：你要借多少？做什么用？\n朋友：两万。我打算买房子，还差两万块钱。\n周明：没问题，你什么时候要？\n朋友：下个星期。谢谢你！",
        vi: "Bạn: Châu Minh, tôi muốn vay anh ít tiền.\nChâu Minh: Anh muốn vay bao nhiêu? Để làm gì?\nBạn: Hai vạn. Tôi định mua nhà, còn thiếu hai vạn đồng.\nChâu Minh: Không vấn đề gì, khi nào anh cần?\nBạn: Tuần sau. Cảm ơn anh!",
        questions: ["朋友为什么要跟周明借钱？", "朋友要借多少钱？"],
      },
      {
        heading: "课文二 · 小明和妈妈 (Tiểu Minh và mẹ)",
        zh: "小明：妈妈，你看这只小狗，嘴小小的，眼睛大大的，多可爱啊！我们把它买回家吧。\n妈妈：你喜欢动物？\n小明：我最喜欢小狗了。只要你给我买，我就能照顾好它。\n妈妈：动物和小孩儿一样，都需要人照顾。你现在学习这么忙，过一段时间再说吧。",
        vi: "Tiểu Minh: Mẹ ơi, mẹ xem con chó nhỏ này, miệng nhỏ nhỏ, mắt to to, đáng yêu quá! Chúng ta mua nó về nhà đi.\nMẹ: Con thích động vật à?\nTiểu Minh: Con thích chó con nhất. Chỉ cần mẹ mua cho con, con sẽ chăm sóc nó thật tốt.\nMẹ: Động vật cũng như trẻ con, đều cần người chăm sóc. Bây giờ con học bận như thế, qua một thời gian nữa rồi hãy tính.",
        questions: ["小明想买什么？为什么？", "小明的妈妈同意小明的要求了吗？"],
      },
      {
        heading: "课文三 · 在公司 (Ở công ty – phỏng vấn)",
        zh: "经理：你为什么想来我们公司工作？\n学生：你们公司不但很有名，而且工作环境也很好。\n经理：这个工作有点儿累，需要经常去外地。你家人同意吗？\n学生：我相信他们会同意的。谢谢您给我这个机会。",
        vi: "Giám đốc: Tại sao em muốn đến công ty chúng tôi làm việc?\nSinh viên: Công ty ông không những rất nổi tiếng mà môi trường làm việc cũng rất tốt.\nGiám đốc: Công việc này hơi mệt, phải thường xuyên đi công tác xa. Gia đình em có đồng ý không?\nSinh viên: Em tin họ sẽ đồng ý. Cảm ơn ông đã cho em cơ hội này.",
        questions: ["学生愿意来这个公司工作吗？为什么？", "经理觉得这个工作怎么样？"],
      },
      {
        heading: "课文四 · 不同的文化 (Những nền văn hóa khác nhau)",
        zh: "世界上有很多国家，不同的国家有不同的文化，每种文化都有自己的特点。所以有的人到了一个新环境，会觉得有些奇怪：那里的人吃的、穿的、说的都跟自己国家的不一样。关于这个问题，你不用担心，只要经过一段时间，就会慢慢地习惯的。",
        vi: "Trên thế giới có rất nhiều quốc gia, các nước khác nhau có nền văn hóa khác nhau, mỗi nền văn hóa đều có đặc điểm riêng. Vì thế có người đến một môi trường mới sẽ thấy hơi lạ: người ở đó ăn, mặc, nói đều khác với nước mình. Về vấn đề này, bạn không cần lo lắng, chỉ cần qua một thời gian là sẽ dần dần quen thôi.",
        questions: ["为什么有的人到了一个新环境会觉得有些奇怪？", "关于这个问题，应该怎么办？"],
      },
    ],
    notes: [
      "Bốn bài khóa của bài này được dựng lại vì bản scan thiếu trang 168–169; nội dung bám theo đáp án câu hỏi đọc hiểu của sách, giáo viên cần đối chiếu với sách giấy.",
      "向 + người + 借: vay/mượn của ai (我想向你借点儿钱).",
      "Tục ngữ – 见怪不怪 (Jiàn guài bú guài): thấy nhiều điều lạ nên không còn thấy lạ nữa; chứng kiến nhiều chuyện lạ thì trở nên quen.",
    ],
  },

  grammar: [
    {
      word: "只要……，就……",
      title: "Chỉ cần… thì…",
      usages: [
        {
          label: "Cách dùng",
          explain: "Nối hai mệnh đề của câu phức chỉ điều kiện: sau 只要 là điều kiện cần thiết, sau 就 là kết quả tương ứng. Chủ ngữ có thể đặt trước hoặc sau 只要; nếu có chủ ngữ thứ hai thì đặt trước 就.",
          examples: ["只要我有时间，就一定跟你去旅游。", "我只要喜欢，就一定会买。", "只要你想去，我就跟你去。", "只要你给我买，我就能照顾好它。"],
        },
      ],
    },
    {
      word: "关于",
      title: "Giới từ 关于 (về…)",
      usages: [
        {
          label: "Cách dùng",
          explain: "关于 đứng trước danh từ để giới thiệu đối tượng mà người nói muốn đề cập đến.",
          examples: ["我最近看了一些关于中国文化的电影。", "关于这件事，我们还没有决定呢。", "关于出国学习的事，妈妈已经同意了。", "关于这个工作，还有什么问题吗？"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "你是从哪个___来的？", options: ["动物", "国家", "地", "向"], answer: "国家" },
    { sentence: "坐火车的时候，我喜欢___外看。", options: ["向", "而且", "动物", "地"], answer: "向" },
    { sentence: "你最喜欢什么___？", options: ["国家", "地", "动物", "而且"], answer: "动物" },
    { sentence: "这家饭馆不但菜很好吃，___环境很好。", options: ["向", "而且", "国家", "地"], answer: "而且" },
    { sentence: "小孩子喜欢快乐___学习。", options: ["地", "向", "动物", "而且"], answer: "地" },
    { sentence: "A：你打算现在买房子吗？B：过一___时间以后再说吧。", options: ["机会", "同意", "段", "关于"], answer: "段" },
    { sentence: "A：你怎么要去北京了？B：那儿的工作___比较多。", options: ["段", "机会", "奇怪", "同意"], answer: "机会" },
    { sentence: "A：真___，桌子上的词典怎么不见了？B：刚才马可拿走了。", options: ["奇怪", "关于", "机会", "段"], answer: "奇怪" },
    { sentence: "A：你给我介绍几个___中国文化的电影吧。B：好，没问题。", options: ["同意", "段", "关于", "奇怪"], answer: "关于" },
    { sentence: "A：我觉得这儿的房子挺便宜的，我们在这儿买吧。B：我不___，虽然很便宜，但是离公司太远了。", options: ["机会", "同意", "奇怪", "关于"], answer: "同意" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 5, distractors: [13, 15, 12] },
        { vocabId: 8, distractors: [16, 9, 10] },
        { vocabId: 9, distractors: [10, 11, 8] },
        { vocabId: 10, distractors: [9, 15, 16] },
        { vocabId: 11, distractors: [12, 13, 9] },
        { vocabId: 12, distractors: [11, 15, 5] },
        { vocabId: 15, distractors: [12, 16, 8] },
        { vocabId: 16, distractors: [15, 8, 10] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 4, 5, 9, 10, 12, 13, 16],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "相信", "他们", "会", "同意", "的", "。"], answer: "我相信他们会同意的。", vi: "Tôi tin họ sẽ đồng ý." },
        { tokens: ["只要", "你给我买", "，", "我", "就", "能照顾好它", "。"], answer: "只要你给我买，我就能照顾好它。", vi: "Chỉ cần bạn mua cho tôi, tôi sẽ chăm sóc nó thật tốt." },
        { tokens: ["我", "最近", "看了", "一些", "关于中国文化的", "电影", "。"], answer: "我最近看了一些关于中国文化的电影。", vi: "Gần đây tôi xem một số phim về văn hóa Trung Quốc." },
        { tokens: ["这家饭馆", "不但", "菜很好吃", "，", "而且", "环境很好", "。"], answer: "这家饭馆不但菜很好吃，而且环境很好。", vi: "Nhà hàng này không những đồ ăn ngon mà môi trường còn rất tốt." },
        { tokens: ["每种", "文化", "都有", "自己的", "特点", "。"], answer: "每种文化都有自己的特点。", vi: "Mỗi nền văn hóa đều có đặc điểm riêng." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Vay tiền", text: "朋友：周明，我想{{c1}}你借点儿钱。\n周明：你要借多少？做什么用？\n朋友：两{{c2}}。我打算买房子，还差两万块钱。" },
        { title: "Bài khóa 2 · Chó con", text: "小明：妈妈，你看这{{c3}}小狗，{{c4}}小小的，眼睛大大的，多可爱啊！\n妈妈：你喜欢{{c5}}？\n小明：我最喜欢小狗了。{{c6}}你给我买，我{{c7}}能照顾好它。\n妈妈：动物和小孩儿一样，都{{c8}}人{{c9}}。你现在学习这么忙，过一{{c10}}时间再说吧。" },
      ],
      answers: { c1: "向", c2: "万", c3: "只", c4: "嘴", c5: "动物", c6: "只要", c7: "就", c8: "需要", c9: "照顾", c10: "段" },
      bank: ["向", "万", "只", "嘴", "动物", "只要", "就", "需要", "照顾", "段", "种", "千", "关于"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Phỏng vấn xin việc", text: "学生：你们公司{{e1}}很{{e2}}，{{e3}}工作环境也很好。\n经理：这个工作有点儿累，需要经常去外地。你家人{{e4}}吗？\n学生：我{{e5}}他们会同意的。谢谢您给我这个{{e6}}。" },
        { title: "Bài khóa 4 · Văn hóa khác nhau", text: "世界上有很多{{e7}}，不同的国家有不同的文化，每{{e8}}文化都有自己的特点。所以有的人到了一个新环境，会觉得有些{{e9}}……{{e10}}这个问题，你不用担心，只要经过一段时间，就会慢慢地习惯的。" },
      ],
      answers: { e1: "不但", e2: "有名", e3: "而且", e4: "同意", e5: "相信", e6: "机会", e7: "国家", e8: "种", e9: "奇怪", e10: "关于" },
      bank: ["不但", "有名", "而且", "同意", "相信", "机会", "国家", "种", "奇怪", "关于", "只", "特点", "地"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "只要我有时间，就一定跟你去旅游。", vi: "Chỉ cần tôi có thời gian, nhất định sẽ đi du lịch cùng bạn.", keywords: ["chỉ cần", "thời gian", "du lịch"] },
        { zh: "关于这件事，我们还没有决定呢。", vi: "Về việc này, chúng tôi vẫn chưa quyết định.", keywords: ["việc này", "quyết định"] },
        { zh: "动物和小孩儿一样，都需要人照顾。", vi: "Động vật cũng như trẻ con, đều cần người chăm sóc.", keywords: ["động vật", "trẻ con", "chăm sóc"] },
        { zh: "谢谢您给我这个机会。", vi: "Cảm ơn ông đã cho tôi cơ hội này.", keywords: ["cảm ơn", "cơ hội"] },
        { zh: "只要经过一段时间，就会慢慢地习惯的。", vi: "Chỉ cần qua một thời gian là sẽ dần dần quen.", keywords: ["chỉ cần", "thời gian", "quen"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chỉ cần bạn muốn đi, tôi sẽ đi cùng bạn.", answers: ["只要你想去，我就跟你去。", "只要你想去，我就和你去。", "只要你想去，我就跟你一起去。"] },
        { vi: "Về việc đi du học, mẹ đã đồng ý rồi.", answers: ["关于出国学习的事，妈妈已经同意了。", "关于留学的事，妈妈已经同意了。"] },
        { vi: "Tôi tin họ sẽ đồng ý.", answers: ["我相信他们会同意的。", "我相信他们会同意。"] },
        { vi: "Bạn đến từ nước nào?", answers: ["你是从哪个国家来的？", "你是哪个国家的人？", "你从哪个国家来？"] },
        { vi: "Công ty này không những nổi tiếng mà môi trường còn rất tốt.", answers: ["这个公司不但很有名，而且环境很好。", "这家公司不但很有名，而且环境很好。", "这个公司不但有名，而且环境很好。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "周明的朋友借钱是为了买房子。", a: true },
        { q: "周明不愿意借钱给朋友。", a: false },
        { q: "小明想买一只小狗。", a: true },
        { q: "妈妈马上同意给小明买小狗。", a: false },
        { q: "学生觉得这个公司很有名。", a: true },
        { q: "经理说这个工作一点儿也不累。", a: false },
        { q: "每种文化都有自己的特点。", a: true },
        { q: "到了新环境，过一段时间也不会习惯。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我相信他们会同意的。",
        "只要你想去，我就跟你去。",
        "你是从哪个国家来的？",
        "谢谢您给我这个机会。",
        "每种文化都有自己的特点。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你现在的一个烦恼，再用“只要……就……”给自己出个主意。 (Kể về một nỗi phiền muộn hiện tại của bạn, rồi dùng “只要……就……” tự đưa ra lời khuyên.)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 18 (只要……就……, 关于, 不但……而且……).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["只要", "就", "关于", "不但", "而且"],
      minGrammar: 2,
      sample: "我刚来中国的时候，觉得很多事情都很奇怪。这里不但天气跟我们国家不一样，而且吃的东西也很不一样。关于这个问题，我的老师说：“每种文化都有自己的特点，只要经过一段时间，你就会慢慢地习惯的。”我相信她说的话。现在我每天跟中国朋友聊天儿，我觉得只要多了解中国文化，我就会越来越喜欢这里。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 只要……就……", points: 6,
      subtitle: "Chọn 只要 hoặc 就 cho mỗi chỗ trống.",
      grammarWord: "只要……就……",
      options: ["只要", "就"],
      items: [
        { q: "___我有时间，就一定跟你去旅游。", answers: ["只要"] },
        { q: "我只要喜欢，___一定会买。", answers: ["就"] },
        { q: "___你想去，我就跟你去。", answers: ["只要"] },
        { q: "只要你给我买，我___能照顾好它。", answers: ["就"] },
        { q: "你___早起一点儿，就不会迟到。", answers: ["只要"] },
        { q: "只要是中国的，我___喜欢。", answers: ["就"] },
        { q: "___天气好，我们就去爬山。", answers: ["只要"] },
        { q: "只要你努力学习，___一定能考好。", answers: ["就"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: giới từ 关于", points: 6,
      subtitle: "Điền giới từ giới thiệu đối tượng được nói đến.",
      grammarWord: "关于",
      items: [
        { q: "我最近看了一些___中国文化的电影。", answers: ["关于"] },
        { q: "___这件事，我们还没有决定呢。", answers: ["关于"] },
        { q: "___出国学习的事，妈妈已经同意了。", answers: ["关于"] },
        { q: "___这个工作，还有什么问题吗？", answers: ["关于"] },
        { q: "我想去图书馆借一些___中国历史的书。", answers: ["关于"] },
        { q: "___中国历史，我了解得不多。", answers: ["关于"] },
        { q: "他能告诉你一些___运动的方法。", answers: ["关于"] },
        { q: "我家有很多___熊猫的电影光盘。", answers: ["关于"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 不但……而且…… / 地", points: 5,
      subtitle: "Chọn 不但, 而且 hoặc 地 cho mỗi chỗ trống.",
      grammarWord: "不但……而且…… / 地",
      options: ["不但", "而且", "地"],
      items: [
        { q: "这家饭馆___菜很好吃，而且环境很好。", answers: ["不但"] },
        { q: "你们公司不但很有名，___工作环境也很好。", answers: ["而且"] },
        { q: "小孩子喜欢快乐___学习。", answers: ["地"] },
        { q: "就会慢慢___习惯的。", answers: ["地"] },
        { q: "她不但聪明，___很努力。", answers: ["而且"] },
        { q: "他___会说汉语，而且会说英语。", answers: ["不但"] },
        { q: "她总是热情___回答客人的问题。", answers: ["地"] },
        { q: "他认真___学习，所以汉语水平提高得很快。", answers: ["地"] },
      ],
    },
  ],
};
