import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第11课 别忘了把空调关了。 (Đừng quên tắt máy điều hòa không khí nhé.)
// Nguồn: Giáo trình chuẩn HSK3, trang 106–113 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson11: Lesson = {
  level: "hsk3",
  no: 11,
  slug: "bai-11",
  zh: "别忘了把空调关了。",
  pinyin: "Bié wàngle bǎ kōngtiáo guān le.",
  vi: "Đừng quên tắt máy điều hòa không khí nhé.",
  en: "Don't forget to turn off the air conditioner.",
  topic: "日常生活 · Nhờ vả, nhắc việc, thói quen",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 19 từ mới: 图书馆、借、词典、还、灯、会议、结束、忘记、空调、关、地铁、双、筷子、啤酒、口、瓶子、笔记本(电脑)、电子邮件、习惯.",
    "Hiểu và dùng được 2 điểm ngữ pháp: câu chữ 把 (1) A 把 B + động từ + ……, cách diễn tả số ước lượng (2) với 左右.",
    "Đọc hiểu 3 đoạn hội thoại (mượn – trả sách, sau cuộc họp, sinh nhật bố) và 1 đoạn văn về thói quen dùng máy tính.",
    "Đưa ra đề nghị, mệnh lệnh, nhắc nhở bằng câu chữ 把; nói số lượng/thời gian ước chừng với 左右.",
    "Từ mới ghép từ chữ cũ: 字典、运动会、开会.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：词典、筷子、空调、地铁、灯、瓶子",
      vi: "Chọn hình tương ứng với các từ: 词典 (từ điển), 筷子 (đũa), 空调 (máy điều hòa), 地铁 (tàu điện ngầm), 灯 (đèn), 瓶子 (chai, lọ).",
    },
    {
      zh: "看图，说说他们在做什么：关空调、洗衣服、还书、关灯",
      vi: "Xem hình và cho biết họ đang làm gì: tắt điều hòa, giặt quần áo, trả sách, tắt đèn.",
    },
  ],

  vocab: [
    { id: 1, han: "图书馆", py: "túshūguǎn", pos: "dt.", meaning: "thư viện", example: "我去图书馆借本书。", exampleVi: "Tớ đến thư viện mượn quyển sách." },
    { id: 2, han: "借", py: "jiè", pos: "đgt.", meaning: "mượn, vay", example: "我去图书馆借本书。", exampleVi: "Tớ đến thư viện mượn quyển sách." },
    { id: 3, han: "词典", py: "cídiǎn", pos: "dt.", meaning: "từ điển", example: "帮我把这本词典还了吧。", exampleVi: "Trả giúp tớ quyển từ điển này nhé." },
    { id: 4, han: "还", py: "huán", pos: "đgt.", meaning: "trả", example: "你可以帮我把书还了吗？", exampleVi: "Bạn có thể trả sách giúp tôi không?" },
    { id: 5, han: "灯", py: "dēng", pos: "dt.", meaning: "đèn", example: "离开教室的时候，记得把灯关了。", exampleVi: "Lúc rời lớp nhớ tắt đèn nhé." },
    { id: 6, han: "会议", py: "huìyì", pos: "dt.", meaning: "hội nghị, cuộc họp", example: "今天的会议是几点的？", exampleVi: "Cuộc họp hôm nay lúc mấy giờ?" },
    { id: 7, han: "结束", py: "jiéshù", pos: "đgt.", meaning: "kết thúc, chấm dứt", example: "会议结束后，别忘记把空调关了。", exampleVi: "Họp xong đừng quên tắt điều hòa nhé." },
    { id: 8, han: "忘记", py: "wàngjì", pos: "đgt.", meaning: "quên", example: "别忘记把空调关了。", exampleVi: "Đừng quên tắt điều hòa." },
    { id: 9, han: "空调", py: "kōngtiáo", pos: "dt.", meaning: "máy điều hòa không khí", example: "你怎么没开空调？太热了！", exampleVi: "Sao bạn không bật điều hòa? Nóng quá!" },
    { id: 10, han: "关", py: "guān", pos: "đgt.", meaning: "tắt, đóng", example: "你把灯关了吧，我要睡觉了。", exampleVi: "Bạn tắt đèn đi, tôi muốn đi ngủ." },
    { id: 11, han: "地铁", py: "dìtiě", pos: "dt.", meaning: "tàu điện ngầm", example: "他正坐地铁来我们公司呢。", exampleVi: "Anh ấy đang đi tàu điện ngầm đến công ty mình." },
    { id: 12, han: "双", py: "shuāng", pos: "lượng.", meaning: "đôi", example: "还差一双筷子，你去拿一下。", exampleVi: "Còn thiếu một đôi đũa, con đi lấy đi." },
    { id: 13, han: "筷子", py: "kuàizi", pos: "dt.", meaning: "đũa", example: "拿两双筷子就可以了。", exampleVi: "Lấy hai đôi đũa là được rồi." },
    { id: 14, han: "啤酒", py: "píjiǔ", pos: "dt.", meaning: "bia, rượu bia", example: "那我们今天喝点儿啤酒吧。", exampleVi: "Vậy hôm nay chúng ta uống chút bia đi." },
    { id: 15, han: "口", py: "kǒu", pos: "lượng.", meaning: "miếng, ngụm, hớp", example: "医生说你爸爸一口酒都不能喝。", exampleVi: "Bác sĩ nói bố con một ngụm rượu cũng không được uống." },
    { id: 16, han: "瓶子", py: "píngzi", pos: "dt.", meaning: "lọ, bình, chai", example: "别让他看见酒瓶子。", exampleVi: "Đừng để bố nhìn thấy chai rượu." },
    { id: 17, han: "笔记本电脑", py: "bǐjìběn diànnǎo", pos: "dt.", meaning: "máy tính xách tay", example: "这个笔记本电脑我去年买的时候要五千块左右。", exampleVi: "Cái máy tính xách tay này năm ngoái tôi mua mất khoảng năm nghìn đồng." },
    { id: 18, han: "电子邮件", py: "diànzǐ yóujiàn", pos: "dt.", meaning: "email, thư điện tử", example: "我每天起床后的第一件事就是打开电脑，看电子邮件。", exampleVi: "Việc đầu tiên tôi làm sau khi thức dậy là mở máy tính, xem email." },
    { id: 19, han: "习惯", py: "xíguàn", pos: "đgt./dt.", meaning: "quen; thói quen", example: "我已经习惯用电脑来学习和工作了。", exampleVi: "Tôi đã quen dùng máy tính để học và làm việc rồi." },
    { id: 20, han: "字典", py: "zìdiǎn", pos: "dt.", meaning: "tự điển (字 + 词典)", example: "这个字我不认识，查查字典吧。", exampleVi: "Chữ này tôi không biết, tra tự điển xem.", group: "extended" },
    { id: 21, han: "运动会", py: "yùndònghuì", pos: "dt.", meaning: "đại hội thể thao (运动 + 会议)", example: "下个星期学校有运动会。", exampleVi: "Tuần sau trường có đại hội thể thao.", group: "extended" },
    { id: 22, han: "开会", py: "kāi huì", pos: "đgt.", meaning: "họp (开 + 会议)", example: "经理正在开会呢。", exampleVi: "Giám đốc đang họp.", group: "extended" },
  ],

  text: {
    title: "课文 别忘了把空调关了。",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "小明：我先走了。\n同学：你去哪儿？\n小明：我去图书馆借本书。\n同学：帮我把这本词典还了吧。\n小明：好，等一会儿你离开教室的时候，记得把灯关了。\n同学：好的，放心吧。",
        vi: "Tiểu Minh: Tớ đi trước đây.\nBạn học: Cậu đi đâu?\nTiểu Minh: Tớ đến thư viện mượn quyển sách.\nBạn học: Trả giúp tớ quyển từ điển này nhé.\nTiểu Minh: Được, lát nữa lúc cậu rời lớp nhớ tắt đèn nhé.\nBạn học: Ừ, yên tâm đi.",
        questions: ["小明要帮同学做什么？", "小明告诉同学做什么？"],
      },
      {
        heading: "课文二 · 在会议室 (Trong phòng họp)",
        zh: "周明：会议结束后，别忘记把空调关了。\n小丽：好的。王经理两点左右来了个电话。\n周明：他已经到北京了？\n小丽：是的，他正坐地铁来我们公司呢。\n周明：等他到了就告诉我。",
        vi: "Châu Minh: Họp xong đừng quên tắt điều hòa nhé.\nTiểu Lệ: Vâng ạ. Khoảng hai giờ giám đốc Vương có gọi điện đến.\nChâu Minh: Anh ấy đến Bắc Kinh rồi à?\nTiểu Lệ: Vâng, anh ấy đang đi tàu điện ngầm đến công ty mình.\nChâu Minh: Đợi anh ấy đến thì báo tôi nhé.",
        questions: ["王经理现在在哪儿？", "周明让小丽做什么？"],
      },
      {
        heading: "课文三 · 在客厅 (Trong phòng khách)",
        zh: "妈妈：还差一双筷子，你去拿一下。\n儿子：今天怎么做了这么多菜？\n妈妈：今天是你爸爸的生日。\n儿子：真的啊？我把爸爸的生日忘了。那我们今天喝点儿啤酒吧。\n妈妈：医生说你爸爸一口酒都不能喝，别让他看见酒瓶子。",
        vi: "Mẹ: Còn thiếu một đôi đũa, con đi lấy đi.\nCon trai: Sao hôm nay mẹ nấu nhiều món thế?\nMẹ: Hôm nay là sinh nhật bố con.\nCon trai: Thật ạ? Con quên mất sinh nhật bố. Vậy hôm nay chúng ta uống chút bia nhé.\nMẹ: Bác sĩ nói bố con một ngụm rượu cũng không được uống, đừng để bố nhìn thấy chai rượu.",
        questions: ["周太太今天为什么做了那么多的菜？", "爸爸能喝酒吗？为什么？"],
      },
      {
        heading: "课文四 · 笔记本电脑 (Máy tính xách tay)",
        zh: "这个笔记本电脑我去年买的时候要五千块左右，现在便宜多了。我想把这个电脑卖了，再买一个更好的。现在我每天起床后的第一件事就是打开电脑，看电子邮件。我已经很少写信，也很少用笔写字，已经习惯用电脑来学习和工作了。哪一天突然没有了电脑，我们怎么办呢？",
        vi: "Cái máy tính xách tay này năm ngoái tôi mua mất khoảng năm nghìn đồng, bây giờ rẻ hơn nhiều rồi. Tôi muốn bán cái máy này đi, mua một cái tốt hơn. Bây giờ việc đầu tiên mỗi ngày sau khi thức dậy của tôi là mở máy tính, xem email. Tôi đã rất ít viết thư, cũng rất ít dùng bút viết chữ, đã quen dùng máy tính để học và làm việc rồi. Nếu một ngày nào đó bỗng nhiên không còn máy tính, chúng ta sẽ làm thế nào đây?",
        questions: ["“我”的笔记本电脑去年买的时候多少钱？", "“我”现在每天用电脑做什么？"],
      },
    ],
    notes: [
      "王 (Wáng): họ Vương; 王经理: giám đốc Vương.",
      "还 có hai cách đọc: hái (còn, vẫn) và huán (trả) — 还书 huán shū: trả sách.",
      "Tục ngữ – 贵人多忘事 (Guìrén duō wàng shì): người sang thường hay quên; nay dùng trong giao tiếp để tỏ ý thông cảm khi ai đó quá bận mà quên việc nhỏ, đôi khi mang ý châm biếm.",
    ],
  },

  grammar: [
    {
      word: "A 把 B + 动词 + ……",
      title: "Câu chữ 把 (1)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ một hành động được thực hiện và tác động đến người/sự vật xác định, thường dùng để đưa ra đề nghị hay mệnh lệnh. A là chủ thể hành động; B là đối tượng chịu tác động, phải là người/vật cụ thể mà người nói và người nghe đều biết. Sau động từ phải có thành phần khác (了, bổ ngữ…).",
          examples: ["请你把衣服洗了。", "帮我把这本词典还了。", "你把灯关了吧。", "我把爸爸的生日忘了。"],
        },
        {
          label: "Phủ định / trợ động từ",
          explain: "Phó từ phủ định (没, 别, 不), động từ năng nguyện (能, 可以…) đặt trước 把.",
          examples: ["你没把书给我。", "你别把手机忘了。", "我不能把电脑给你。", "你可以把空调关了吗？"],
        },
      ],
    },
    {
      word: "……左右",
      title: "Cách diễn tả số ước lượng (2): 左右",
      usages: [
        {
          label: "Cách dùng",
          explain: "左右 đứng sau số từ để diễn tả số ước lượng: 三点左右 (khoảng ba giờ), 五个左右 (khoảng năm cái), 十年左右 (khoảng mười năm).",
          examples: ["周末我一般十点左右起床。", "我们公司有五百人左右。", "王经理两点左右来了个电话。", "这个笔记本电脑我去年买的时候要五千块左右。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "拿两___筷子就可以了，今天爸爸不回来吃晚饭。", options: ["瓶子", "空调", "词典", "双"], answer: "双" },
    { sentence: "这本___是我朋友的，不是我的。", options: ["词典", "口", "双", "瓶子"], answer: "词典" },
    { sentence: "这种咖啡特别好喝，你快来喝一___吧。", options: ["双", "口", "空调", "词典"], answer: "口" },
    { sentence: "桌子上有一个___，是谁的？", options: ["口", "双", "瓶子", "空调"], answer: "瓶子" },
    { sentence: "你怎么没开___？太热了！", options: ["空调", "瓶子", "词典", "口"], answer: "空调" },
    { sentence: "A：你把灯___了吧，我要睡觉了。B：好，我马上就去。", options: ["习惯", "结束", "关", "会议"], answer: "关" },
    { sentence: "A：你可以帮我把书___了吗？B：明天下午可以吗？", options: ["还", "关", "习惯", "会议"], answer: "还" },
    { sentence: "A：音乐会___以后，我们一起去饭馆吃饭吧。B：还是回家吃吧。", options: ["会议", "结束", "还", "关"], answer: "结束" },
    { sentence: "A：你下课以后常常做什么？B：我下了汉语课___去图书馆。", options: ["习惯", "会议", "关", "结束"], answer: "习惯" },
    { sentence: "A：今天的___是几点的？B：下午两点半。", options: ["还", "结束", "会议", "习惯"], answer: "会议" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [3, 11, 6] },
        { vocabId: 3, distractors: [1, 13, 16] },
        { vocabId: 6, distractors: [7, 19, 9] },
        { vocabId: 7, distractors: [8, 6, 10] },
        { vocabId: 9, distractors: [11, 5, 13] },
        { vocabId: 11, distractors: [9, 1, 14] },
        { vocabId: 13, distractors: [16, 14, 12] },
        { vocabId: 19, distractors: [8, 7, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 4, 5, 7, 9, 13, 14, 19],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["别", "忘了", "把", "空调", "关了", "。"], answer: "别忘了把空调关了。", vi: "Đừng quên tắt điều hòa." },
        { tokens: ["帮我", "把", "这本词典", "还了", "吧", "。"], answer: "帮我把这本词典还了吧。", vi: "Trả giúp tôi quyển từ điển này nhé." },
        { tokens: ["我", "把", "爸爸的生日", "忘了", "。"], answer: "我把爸爸的生日忘了。", vi: "Tôi quên mất sinh nhật bố." },
        { tokens: ["王经理", "两点", "左右", "来了个", "电话", "。"], answer: "王经理两点左右来了个电话。", vi: "Khoảng hai giờ giám đốc Vương có gọi điện đến." },
        { tokens: ["我", "已经", "习惯", "用电脑", "来学习和工作了", "。"], answer: "我已经习惯用电脑来学习和工作了。", vi: "Tôi đã quen dùng máy tính để học và làm việc rồi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Trong lớp học", text: "小明：我去{{c1}}{{c2}}本书。\n同学：帮我{{c3}}这本{{c4}}{{c5}}了吧。\n小明：好，等一会儿你离开教室的时候，记得把{{c6}}关了。" },
        { title: "Bài khóa 2 · Trong phòng họp", text: "周明：会议{{c7}}后，别{{c8}}把{{c9}}关了。\n小丽：好的。王经理两点左右来了个电话。\n周明：他已经到北京了？\n小丽：是的，他正坐{{c10}}来我们公司呢。" },
      ],
      answers: { c1: "图书馆", c2: "借", c3: "把", c4: "词典", c5: "还", c6: "灯", c7: "结束", c8: "忘记", c9: "空调", c10: "地铁" },
      bank: ["图书馆", "借", "把", "词典", "还", "灯", "结束", "忘记", "空调", "地铁", "关", "会议", "左右"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Sinh nhật bố", text: "妈妈：还差一{{e1}}{{e2}}，你去拿一下。\n儿子：真的啊？我把爸爸的生日忘了。那我们今天喝点儿{{e3}}吧。\n妈妈：医生说你爸爸一{{e4}}酒都不能喝，别让他看见酒{{e5}}。" },
        { title: "Bài khóa 4 · Máy tính xách tay", text: "这个{{e6}}电脑我去年买的时候要五千块{{e7}}，现在便宜多了。……现在我每天起床后的第一件事就是打开电脑，看{{e8}}。我已经很少写信，也很少用笔写字，已经{{e9}}用电脑来学习和工作了。哪一天{{e10}}没有了电脑，我们怎么办呢？" },
      ],
      answers: { e1: "双", e2: "筷子", e3: "啤酒", e4: "口", e5: "瓶子", e6: "笔记本", e7: "左右", e8: "电子邮件", e9: "习惯", e10: "突然" },
      bank: ["双", "筷子", "啤酒", "口", "瓶子", "笔记本", "左右", "电子邮件", "习惯", "突然", "把", "灯", "借"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "离开教室的时候，记得把灯关了。", vi: "Lúc rời lớp học, nhớ tắt đèn nhé.", keywords: ["lớp", "nhớ", "tắt đèn"] },
        { zh: "我们公司有五百人左右。", vi: "Công ty chúng tôi có khoảng năm trăm người.", keywords: ["công ty", "khoảng", "năm trăm"] },
        { zh: "你别把手机忘了。", vi: "Bạn đừng quên điện thoại nhé.", keywords: ["đừng quên", "điện thoại"] },
        { zh: "医生说你爸爸一口酒都不能喝。", vi: "Bác sĩ nói bố bạn một ngụm rượu cũng không được uống.", keywords: ["bác sĩ", "rượu", "không được uống"] },
        { zh: "我已经习惯用电脑来学习和工作了。", vi: "Tôi đã quen dùng máy tính để học và làm việc rồi.", keywords: ["quen", "máy tính", "học", "làm việc"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Mời bạn giặt quần áo đi.", answers: ["请你把衣服洗了。"] },
        { vi: "Bạn tắt đèn đi.", answers: ["你把灯关了吧。", "你把灯关了。"] },
        { vi: "Bạn có thể tắt điều hòa được không?", answers: ["你可以把空调关了吗？", "你能把空调关了吗？"] },
        { vi: "Cuối tuần tôi thường dậy khoảng mười giờ.", answers: ["周末我一般十点左右起床。", "我周末一般十点左右起床。"] },
        { vi: "Tôi không thể đưa máy tính cho bạn.", answers: ["我不能把电脑给你。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小明要去图书馆借书。", a: true },
        { q: "同学让小明帮他借一本词典。", a: false },
        { q: "王经理两点左右来了个电话。", a: true },
        { q: "王经理正坐出租车来公司。", a: false },
        { q: "今天是爸爸的生日。", a: true },
        { q: "医生说爸爸可以喝一点儿啤酒。", a: false },
        { q: "“我”的笔记本电脑现在比去年便宜多了。", a: true },
        { q: "“我”现在还常常用笔写信。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "别忘了把空调关了。",
        "我去图书馆借本书。",
        "还差一双筷子。",
        "我把爸爸的生日忘了。",
        "我每天都看电子邮件。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "用“把”字句说说你今天的计划：什么时候，在什么地方，要做什么。 (Dùng câu chữ 把 nói về kế hoạch hôm nay của bạn: khi nào, ở đâu, làm gì.)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 11 (câu chữ 把, 左右).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["把", "左右"],
      minGrammar: 2,
      sample: "今天我很忙。早上七点左右起床以后，我要先把衣服洗了，再看一下电子邮件。九点我去图书馆，把上个星期借的词典还了，再借两本书。下午两点有一个会议，会议结束后，我要把空调和灯关了再离开。晚上回家以前，别忘了买牛奶。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: câu chữ 把", points: 6,
      subtitle: "Chọn động từ thích hợp cho câu chữ 把.",
      grammarWord: "把",
      options: ["洗", "还", "关", "忘", "吃", "卖"],
      items: [
        { q: "请你把衣服___了。", answers: ["洗"] },
        { q: "帮我把这本词典___了。", answers: ["还"] },
        { q: "你把灯___了吧。", answers: ["关"] },
        { q: "我把爸爸的生日___了。", answers: ["忘"] },
        { q: "你发烧还没好，快把药___了。", answers: ["吃"] },
        { q: "我想把这个电脑___了，再买一个更好的。", answers: ["卖"] },
        { q: "房间里有点儿冷，你可以把门___了吗？", answers: ["关"] },
        { q: "吃饭以前别忘了把手___了。", answers: ["洗"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: vị trí của 把", points: 6,
      subtitle: "Chọn từ đặt trước 把 cho đúng (phó từ phủ định / trợ động từ).",
      grammarWord: "没 / 别 / 不能 / 可以",
      options: ["没", "别", "不能", "可以"],
      items: [
        { q: "你___把书给我。", answers: ["没"] },
        { q: "你___把手机忘了。", answers: ["别"] },
        { q: "我___把电脑给你。", answers: ["不能"] },
        { q: "你___把空调关了吗？", answers: ["可以"] },
        { q: "会议结束后，___忘记把空调关了。", answers: ["别"] },
        { q: "昨天我___把作业写完。", answers: ["没"] },
        { q: "这是朋友的词典，我___把它借给你。", answers: ["不能"] },
        { q: "你___帮我把这本书还了吗？", answers: ["可以"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: số ước lượng với 左右", points: 5,
      subtitle: "Điền từ chỉ số ước lượng đứng sau số từ.",
      grammarWord: "左右",
      items: [
        { q: "周末我一般十点___起床。", answers: ["左右"] },
        { q: "我们公司有五百人___。", answers: ["左右"] },
        { q: "王经理两点___来了个电话。", answers: ["左右"] },
        { q: "这个笔记本电脑我去年买的时候要五千块___。", answers: ["左右"] },
        { q: "我每天十一点___睡觉。", answers: ["左右"] },
        { q: "我学了一年___的汉语了。", answers: ["左右"] },
        { q: "从我家到学校坐车要二十分钟___。", answers: ["左右"] },
        { q: "在我们国家，一个手机2000块___。", answers: ["左右"] },
      ],
    },
  ],
};
