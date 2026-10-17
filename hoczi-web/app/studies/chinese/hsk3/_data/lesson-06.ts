import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第6课 怎么突然找不到了？ (Sao bỗng dưng lại không tìm thấy?)
// Nguồn: Giáo trình chuẩn HSK3, trang 62–70 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson06: Lesson = {
  level: "hsk3",
  no: 6,
  slug: "bai-6",
  zh: "怎么突然找不到了？",
  pinyin: "Zěnme tūrán zhǎo bu dào le?",
  vi: "Sao bỗng dưng lại không tìm thấy?",
  en: "Why can't I find it all of a sudden?",
  topic: "日常生活 · Tìm đồ, giúp đỡ, hẹn hò",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 15 từ mới: 眼镜、突然、离开、清楚、刚才、帮忙、特别、讲、明白、锻炼、音乐、公园、聊天(儿)、睡着、更.",
    "Hiểu và dùng được 3 điểm ngữ pháp: bổ ngữ chỉ khả năng (động từ + 得/不 + bổ ngữ), “danh từ + 呢” hỏi vị trí, phân biệt 刚 và 刚才.",
    "Đọc hiểu 4 đoạn hội thoại: tìm kính, nhờ bạn giảng bài, tìm chỗ hẹn hò, uống cà phê buổi tối.",
    "Hỏi đồ vật/người ở đâu; nói về khả năng làm được hay không (看得懂/听不懂/买不到…).",
    "Từ mới ghép từ chữ cũ: 校园、饭桌、花园.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：锻炼、去公园、听音乐会、讲题、帮忙、离开",
      vi: "Chọn hình tương ứng với các từ: 锻炼 (tập thể dục), 去公园 (đi công viên), 听音乐会 (nghe hòa nhạc), 讲题 (giảng bài), 帮忙 (giúp đỡ), 离开 (rời đi).",
    },
    {
      zh: "将下面的动词与补语相连，并朗读：买、看、讲、听、上、做 — 清楚、明白、到、去、完、见",
      vi: "Nối động từ với bổ ngữ và đọc to: 买到 (mua được), 看见/看清楚, 讲明白/讲清楚, 听见/听明白, 上去, 做完…",
    },
  ],

  vocab: [
    { id: 1, han: "眼镜", py: "yǎnjìng", pos: "dt.", meaning: "mắt kính", example: "我的眼镜呢？怎么突然找不到了？", exampleVi: "Kính của anh đâu rồi? Sao bỗng dưng lại không tìm thấy?" },
    { id: 2, han: "突然", py: "tūrán", pos: "p.", meaning: "bỗng nhiên, bỗng dưng", example: "刚才还是晴天，怎么现在突然就下雨了？", exampleVi: "Vừa nãy còn nắng, sao bây giờ bỗng dưng lại mưa?" },
    { id: 3, han: "离开", py: "líkāi", pos: "đgt.", meaning: "rời khỏi, tách khỏi", example: "我离不开眼镜，没有眼镜，我一个字也看不清楚。", exampleVi: "Anh không thể thiếu kính, không có kính anh chẳng nhìn rõ chữ nào." },
    { id: 4, han: "清楚", py: "qīngchu", pos: "tt.", meaning: "rõ ràng", example: "我看得清楚那个汉字。", exampleVi: "Tôi nhìn rõ được chữ Hán đó." },
    { id: 5, han: "刚才", py: "gāngcái", pos: "dt.", meaning: "lúc nãy, vừa nãy", example: "你去房间找找，是不是刚才放在桌子上了？", exampleVi: "Anh vào phòng tìm thử xem, có phải vừa nãy để trên bàn không?" },
    { id: 6, han: "帮忙", py: "bāng máng", pos: "đgt.", meaning: "giúp, giúp đỡ", example: "你快过来帮忙啊。", exampleVi: "Em mau qua đây giúp anh đi." },
    { id: 7, han: "特别", py: "tèbié", pos: "p.", meaning: "vô cùng, rất, đặc biệt", example: "今天这些题特别难。", exampleVi: "Mấy bài hôm nay khó vô cùng." },
    { id: 8, han: "讲", py: "jiǎng", pos: "đgt.", meaning: "giải thích, nói, giảng", example: "电话里讲不明白，你来我家吧，我给你讲讲。", exampleVi: "Qua điện thoại giảng không rõ được, cậu đến nhà tớ đi, tớ giảng cho." },
    { id: 9, han: "明白", py: "míngbai", pos: "tt.", meaning: "rõ ràng, dễ hiểu", example: "你的意思我已经听明白了。", exampleVi: "Ý của bạn tôi đã nghe hiểu rồi." },
    { id: 10, han: "锻炼", py: "duànliàn", pos: "đgt.", meaning: "tập thể dục, rèn luyện", example: "好啊，我锻炼完了就过去。", exampleVi: "Được, tớ tập thể dục xong là qua ngay." },
    { id: 11, han: "音乐", py: "yīnyuè", pos: "dt.", meaning: "âm nhạc", example: "那你请她听音乐会吧，她喜欢听音乐。", exampleVi: "Thế thì cậu mời cô ấy đi nghe hòa nhạc đi, cô ấy thích nghe nhạc." },
    { id: 12, han: "公园", py: "gōngyuán", pos: "dt.", meaning: "công viên", example: "那去公园走走，聊聊天儿吧。", exampleVi: "Vậy thì đi công viên dạo, tán gẫu đi." },
    { id: 13, han: "聊天儿", py: "liáo tiānr", pos: "đgt.", meaning: "tán gẫu, nói chuyện phiếm", example: "我最喜欢跟朋友聊天儿。", exampleVi: "Tôi thích nhất là tán gẫu với bạn bè." },
    { id: 14, han: "睡着", py: "shuì zháo", pos: "đgt.", meaning: "ngủ được, ngủ thiếp đi", example: "你不是说晚上睡不着觉吗？", exampleVi: "Chẳng phải anh nói tối không ngủ được sao?" },
    { id: 15, han: "更", py: "gèng", pos: "p.", meaning: "càng, hơn nữa", example: "你还是喝杯牛奶吧，可以睡得更好些。", exampleVi: "Anh vẫn nên uống cốc sữa đi, có thể ngủ ngon hơn." },
    { id: 16, han: "校园", py: "xiàoyuán", pos: "dt.", meaning: "khuôn viên trường (学校 + 公园)", example: "我们的校园很漂亮。", exampleVi: "Khuôn viên trường chúng tôi rất đẹp.", group: "extended" },
    { id: 17, han: "饭桌", py: "fànzhuō", pos: "dt.", meaning: "bàn ăn (吃饭 + 桌子)", example: "饭菜已经放在饭桌上了。", exampleVi: "Cơm canh đã bày trên bàn ăn rồi.", group: "extended" },
    { id: 18, han: "花园", py: "huāyuán", pos: "dt.", meaning: "vườn hoa (鲜花 + 公园)", example: "我家后边有一个小花园。", exampleVi: "Sau nhà tôi có một vườn hoa nhỏ.", group: "extended" },
  ],

  text: {
    title: "课文 怎么突然找不到了？",
    paragraphs: [
      {
        heading: "课文一 · 在客厅 (Trong phòng khách)",
        zh: "周明：我的眼镜呢？怎么突然找不到了？你看见了吗？\n周太太：我没看见啊。\n周明：我离不开眼镜，没有眼镜，我一个字也看不清楚。\n周太太：你去房间找找，是不是刚才放在桌子上了？\n周明：我怎么看得到啊？你快过来帮忙啊。\n周太太：好吧，我帮你去找找。",
        vi: "Châu Minh: Kính của anh đâu rồi? Sao bỗng dưng lại không tìm thấy? Em có thấy không?\nBà Châu: Em không thấy.\nChâu Minh: Anh không thể thiếu kính, không có kính anh chẳng nhìn rõ được chữ nào.\nBà Châu: Anh vào phòng tìm thử xem, có phải vừa nãy để trên bàn không?\nChâu Minh: Anh làm sao mà nhìn thấy được? Em mau qua đây giúp anh đi.\nBà Châu: Thôi được, em đi tìm giúp anh.",
        questions: ["周明要找什么？为什么？", "周太太觉得眼镜在哪儿？"],
      },
      {
        heading: "课文二 · 在打电话 (Nói chuyện qua điện thoại)",
        zh: "同学：今天的作业你做完了吗？\n儿子：刚做完，你呢？\n同学：今天这些题特别难，我看不懂，不会做，你能帮我吗？\n儿子：电话里讲不明白，你来我家吧，我给你讲讲。\n同学：好啊，我锻炼完了就过去。",
        vi: "Bạn học: Bài tập hôm nay cậu làm xong chưa?\nCon trai: Vừa làm xong, còn cậu?\nBạn học: Mấy bài hôm nay khó vô cùng, tớ đọc không hiểu, không biết làm, cậu giúp tớ được không?\nCon trai: Qua điện thoại giảng không rõ được, cậu đến nhà tớ đi, tớ giảng cho.\nBạn học: Được, tớ tập thể dục xong là qua ngay.",
        questions: ["周明的儿子做完作业了吗？", "周明儿子的同学一会儿要做什么？"],
      },
      {
        heading: "课文三 · 在休息室 (Trong phòng giải lao)",
        zh: "同事：你怎么有点儿不高兴？\n小刚：我想请小丽吃饭，但是找不到好饭馆儿。\n同事：那你请她听音乐会吧，她喜欢听音乐。\n小刚：音乐会人太多，买不到票。\n同事：那去公园走走，聊聊天儿吧。\n小刚：公园太大，多累啊。",
        vi: "Đồng nghiệp: Sao trông cậu có vẻ không vui thế?\nTiểu Cương: Tớ muốn mời Tiểu Lệ đi ăn, nhưng không tìm được nhà hàng nào tốt.\nĐồng nghiệp: Thế thì cậu mời cô ấy đi nghe hòa nhạc đi, cô ấy thích nghe nhạc.\nTiểu Cương: Buổi hòa nhạc đông người quá, không mua được vé.\nĐồng nghiệp: Vậy thì đi công viên dạo, tán gẫu đi.\nTiểu Cương: Công viên rộng quá, mệt lắm.",
        questions: ["小刚今天怎么了？为什么？", "同事给小刚出了什么主意？"],
      },
      {
        heading: "课文四 · 在客厅 (Trong phòng khách)",
        zh: "周太太：你怎么还喝咖啡？\n周明：怎么了？\n周太太：你不是说晚上睡不着觉吗？\n周明：没事，我只喝一杯。\n周太太：你还是喝杯牛奶吧，可以睡得更好些。\n周明：好吧，牛奶呢？\n周太太：还没买呢。",
        vi: "Bà Châu: Sao anh vẫn còn uống cà phê?\nChâu Minh: Sao thế?\nBà Châu: Chẳng phải anh nói tối không ngủ được sao?\nChâu Minh: Không sao, anh chỉ uống một cốc thôi.\nBà Châu: Anh vẫn nên uống cốc sữa đi, có thể ngủ ngon hơn.\nChâu Minh: Thôi được, sữa đâu?\nBà Châu: Vẫn chưa mua.",
        questions: ["周明在喝什么？", "周明喝牛奶了吗？为什么？"],
      },
    ],
    notes: [
      "多累啊: mệt biết bao (多 + tính từ + 啊 diễn tả cảm thán).",
      "还是……吧: vẫn nên… thì hơn (đưa ra lời khuyên): 你还是喝杯牛奶吧.",
      "Tục ngữ – 万事开头难 (Wàn shì kāitóu nán): vạn sự khởi đầu nan; gặp khó khăn lúc đầu là bình thường, đừng bỏ cuộc, kiên trì thì sẽ ngày càng dễ.",
    ],
  },

  grammar: [
    {
      word: "动词 + 得/不 + 补语",
      title: "Bổ ngữ chỉ khả năng",
      usages: [
        {
          label: "Cách dùng",
          explain: "“Động từ + 得 + bổ ngữ” (khẳng định) / “động từ + 不 + bổ ngữ” (phủ định) diễn tả có thể đạt được kết quả/mục đích hay không. Bổ ngữ thường là bổ ngữ kết quả, bổ ngữ phương hướng, một số tính từ hoặc động từ. Nghi vấn: “động từ + 得 + bổ ngữ + động từ + 不 + bổ ngữ” hoặc “động từ + 得 + bổ ngữ + 吗”.",
          examples: ["我看得清楚那个汉字。", "楼太高了，我上不去。", "老师说的话你听得见听不见？", "我找不到好饭馆。"],
        },
      ],
      note: "Hay gặp: 看得懂/看不懂, 听得见/听不见, 买得到/买不到, 睡不着, 离不开, 讲不明白.",
    },
    {
      word: "名词 + 呢？",
      title: "Hỏi vị trí: danh từ + 呢",
      usages: [
        {
          label: "Cách dùng",
          explain: "“Danh từ + 呢?” dùng để hỏi người hay sự vật ở đâu: 妈妈呢？(Mẹ đâu rồi?), 小狗呢？(Con chó đâu rồi?).",
          examples: ["A：你的书呢？放在哪儿了？B：就在桌子上啊。", "A：我的眼镜呢？你看见了吗？B：我没看见啊。"],
        },
      ],
    },
    {
      word: "刚 / 刚才",
      title: "Phân biệt 刚 và 刚才",
      usages: [
        {
          label: "Cách dùng",
          explain: "刚 là phó từ, 刚才 là danh từ; cả hai chỉ hành động xảy ra cách đây không lâu. 刚才 thường là vài phút trước; 刚 chỉ thời gian ngắn theo cảm nhận của người nói (vài phút, vài ngày, thậm chí vài tháng: 我刚来中国两个月). 刚 chỉ đứng trước động từ; 刚才 có thể đứng trước động từ hoặc ở đầu câu.",
          examples: ["爸爸刚出去。", "爸爸刚才出去了。", "我刚喝完一杯咖啡。", "刚才我喝了一杯咖啡。", "我刚放在桌子上，现在就没了。", "眼镜周明刚才放在桌子上了。", "儿子刚做完作业。", "刚才儿子在做作业。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "刚才还是晴天，怎么现在___就下雨了？", options: ["清楚", "讲", "突然", "特别"], answer: "突然" },
    { sentence: "你的意思我已经听___了。", options: ["明白", "讲", "突然", "特别"], answer: "明白" },
    { sentence: "今天的语法课我没去，你给我___一下吧。", options: ["清楚", "讲", "突然", "明白"], answer: "讲" },
    { sentence: "今天天气___好，我们去爬山吧。", options: ["清楚", "讲", "特别", "明白"], answer: "特别" },
    { sentence: "他说什么？你听___了吗？", options: ["清楚", "突然", "特别", "讲"], answer: "清楚" },
    { sentence: "A：今天晚上做什么？B：我跟小丽去听___。", options: ["刚才", "音乐会", "公园", "离开"], answer: "音乐会" },
    { sentence: "A：你什么时候___北京？B：明天的飞机。", options: ["离开", "刚才", "聊天儿", "公园"], answer: "离开" },
    { sentence: "A：请问，去___怎么走？B：一直往前走就是。", options: ["聊天儿", "公园", "离开", "刚才"], answer: "公园" },
    { sentence: "A：你最喜欢做什么？B：跟朋友___。", options: ["音乐会", "刚才", "聊天儿", "离开"], answer: "聊天儿" },
    { sentence: "A：你___做什么去了？B：我帮小丽买了个面包。", options: ["刚才", "公园", "音乐会", "离开"], answer: "刚才" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [3, 4, 9] },
        { vocabId: 2, distractors: [7, 5, 15] },
        { vocabId: 3, distractors: [10, 6, 14] },
        { vocabId: 4, distractors: [9, 2, 7] },
        { vocabId: 6, distractors: [8, 13, 10] },
        { vocabId: 10, distractors: [3, 11, 12] },
        { vocabId: 11, distractors: [12, 13, 1] },
        { vocabId: 14, distractors: [13, 6, 10] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 4, 5, 8, 10, 12, 15],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我的眼镜呢", "？", "怎么", "突然", "找不到了", "？"], answer: "我的眼镜呢？怎么突然找不到了？", vi: "Kính của tôi đâu rồi? Sao bỗng dưng lại không tìm thấy?" },
        { tokens: ["没有眼镜", "，", "我", "一个字", "也", "看不清楚", "。"], answer: "没有眼镜，我一个字也看不清楚。", vi: "Không có kính, tôi chẳng nhìn rõ được chữ nào." },
        { tokens: ["电话里", "讲不明白", "，", "你来我家吧", "。"], answer: "电话里讲不明白，你来我家吧。", vi: "Qua điện thoại giảng không rõ được, bạn đến nhà tôi đi." },
        { tokens: ["音乐会", "人太多", "，", "买不到", "票", "。"], answer: "音乐会人太多，买不到票。", vi: "Buổi hòa nhạc đông người quá, không mua được vé." },
        { tokens: ["你", "还是", "喝杯牛奶吧", "，", "可以", "睡得更好些", "。"], answer: "你还是喝杯牛奶吧，可以睡得更好些。", vi: "Bạn vẫn nên uống cốc sữa đi, có thể ngủ ngon hơn." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Tìm kính", text: "周明：我的{{c1}}呢？怎么{{c2}}找不到了？你看见了吗？\n周太太：我没看见啊。\n周明：我{{c3}}不开眼镜，没有眼镜，我一个字也看不{{c4}}。\n周太太：你去房间找找，是不是{{c5}}放在桌子上了？\n周明：我怎么看得到啊？你快过来{{c6}}啊。" },
        { title: "Bài khóa 2 · Nhờ giảng bài", text: "同学：今天这些题{{c7}}难，我看不懂，不会做，你能帮我吗？\n儿子：电话里{{c8}}不{{c9}}，你来我家吧，我给你讲讲。\n同学：好啊，我{{c10}}完了就过去。" },
      ],
      answers: { c1: "眼镜", c2: "突然", c3: "离", c4: "清楚", c5: "刚才", c6: "帮忙", c7: "特别", c8: "讲", c9: "明白", c10: "锻炼" },
      bank: ["眼镜", "突然", "离", "清楚", "刚才", "帮忙", "特别", "讲", "明白", "锻炼", "公园", "更", "刚"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Tìm chỗ hẹn hò", text: "小刚：我想请小丽吃饭，但是找不{{e1}}好饭馆儿。\n同事：那你请她听{{e2}}会吧，她喜欢听音乐。\n小刚：音乐会人太多，买{{e3}}到票。\n同事：那去{{e4}}走走，{{e5}}吧。\n小刚：公园太大，多累啊。" },
        { title: "Bài khóa 4 · Cà phê buổi tối", text: "周太太：你不是说晚上睡不{{e6}}觉吗？\n周明：没事，我{{e7}}喝一杯。\n周太太：你{{e8}}喝杯牛奶吧，可以睡得{{e9}}好些。\n周明：好吧，牛奶{{e10}}？\n周太太：还没买呢。" },
      ],
      answers: { e1: "到", e2: "音乐", e3: "不", e4: "公园", e5: "聊聊天儿", e6: "着", e7: "只", e8: "还是", e9: "更", e10: "呢" },
      bank: ["到", "音乐", "不", "公园", "聊聊天儿", "着", "只", "还是", "更", "呢", "得", "特别", "吗"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我离不开眼镜。", vi: "Tôi không thể thiếu kính.", keywords: ["không thể", "kính"] },
        { zh: "今天这些题特别难，我看不懂。", vi: "Mấy bài hôm nay khó vô cùng, tôi đọc không hiểu.", keywords: ["khó", "không hiểu"] },
        { zh: "楼太高了，我上不去。", vi: "Tòa nhà cao quá, tôi không lên được.", keywords: ["cao", "không lên được"] },
        { zh: "你不是说晚上睡不着觉吗？", vi: "Chẳng phải bạn nói buổi tối không ngủ được sao?", keywords: ["buổi tối", "không ngủ được"] },
        { zh: "我刚来中国两个月。", vi: "Tôi mới đến Trung Quốc được hai tháng.", keywords: ["trung quốc", "hai tháng"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi không tìm được nhà hàng tốt.", answers: ["我找不到好饭馆。", "我找不到好饭馆儿。"] },
        { vi: "Thầy giáo nói bạn có nghe thấy không?", answers: ["老师说的话你听得见听不见？", "老师说的话你听得见吗？"] },
        { vi: "Sách của bạn đâu? Để ở đâu rồi?", answers: ["你的书呢？放在哪儿了？"] },
        { vi: "Bố vừa đi ra ngoài.", answers: ["爸爸刚出去。", "爸爸刚才出去了。"] },
        { vi: "Tôi nhìn rõ chữ Hán đó.", answers: ["我看得清楚那个汉字。", "我看得清那个汉字。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "周明找不到眼镜了。", a: true },
        { q: "没有眼镜，周明也看得清楚。", a: false },
        { q: "周明的儿子刚做完作业。", a: true },
        { q: "同学在电话里就听明白了。", a: false },
        { q: "小刚想请小丽吃饭。", a: true },
        { q: "小刚已经买到了音乐会的票。", a: false },
        { q: "周明晚上睡不着觉。", a: true },
        { q: "周明最后喝了一杯牛奶。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "怎么突然找不到了？",
        "你快过来帮忙啊。",
        "今天这些题特别难。",
        "音乐会人太多，买不到票。",
        "你不是说晚上睡不着觉吗？",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "介绍一下你会做什么、不会做什么：你看得懂中国电影吗？听得懂汉语歌吗？ (Giới thiệu những việc bạn làm được và không làm được: bạn xem hiểu phim Trung Quốc không? Nghe hiểu bài hát tiếng Hán không?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 6 (bổ ngữ khả năng 得/不, 名词 + 呢, 刚/刚才).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["得懂", "不懂", "得到", "不到", "得清楚", "不清楚", "不着", "刚才", "刚", "呢"],
      minGrammar: 2,
      sample: "我学汉语刚一年，现在看得懂一些简单的汉字了。中国电影我还看不懂，说得太快了，我听不清楚。但是汉语歌我特别喜欢，慢一点儿的歌我听得明白。刚才我在公园锻炼的时候，听了一首汉语歌，我一边听一边唱。我觉得多听多练习，以后会学得更好。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: bổ ngữ khả năng 得 / 不", points: 6,
      subtitle: "Chọn 得 hoặc 不 cho mỗi chỗ trống.",
      grammarWord: "得 / 不",
      options: ["得", "不"],
      items: [
        { q: "我看___清楚那个汉字。", answers: ["得"] },
        { q: "楼太高了，我上___去。", answers: ["不"] },
        { q: "没有眼镜，我一个字也看___清楚。", answers: ["不"] },
        { q: "音乐会人太多，买___到票。", answers: ["不"] },
        { q: "今天的作业一点儿也不多，7点以前做___完。", answers: ["得"] },
        { q: "你说话说得太快了，我听___懂。", answers: ["不"] },
        { q: "电影票人不多，买___到。", answers: ["得"] },
        { q: "喝了咖啡，我晚上睡___着觉。", answers: ["不"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 刚 / 刚才", points: 6,
      subtitle: "Chọn 刚 hoặc 刚才 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "刚 / 刚才",
      options: ["刚", "刚才"],
      items: [
        { q: "___你去哪儿了？", answers: ["刚才"] },
        { q: "我___做完作业，真累啊！", answers: ["刚", "刚才"] },
        { q: "白先生___到北京，还没休息呢。", answers: ["刚"] },
        { q: "我___来中国两个月。", answers: ["刚"] },
        { q: "___我喝了一杯咖啡。", answers: ["刚才"] },
        { q: "我___放在桌子上，现在就没了。", answers: ["刚"] },
        { q: "___儿子在做作业。", answers: ["刚才"] },
        { q: "你___做什么去了？", answers: ["刚才"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: hỏi vị trí 名词 + 呢", points: 5,
      subtitle: "Chọn 呢 hoặc 吗 cho mỗi chỗ trống.",
      grammarWord: "呢 / 吗",
      options: ["呢", "吗"],
      items: [
        { q: "我的眼镜___？你看见了吗？", answers: ["呢"] },
        { q: "你的书___？放在哪儿了？", answers: ["呢"] },
        { q: "好吧，牛奶___？", answers: ["呢"] },
        { q: "你看见我的眼镜了___？", answers: ["吗"] },
        { q: "A：你的手机___？B：放在包里了。", answers: ["呢"] },
        { q: "A：周经理___？B：他刚才出去了。", answers: ["呢"] },
        { q: "今天的作业你做完了___？", answers: ["吗"] },
        { q: "你能帮我___？", answers: ["吗"] },
      ],
    },
  ],
};
