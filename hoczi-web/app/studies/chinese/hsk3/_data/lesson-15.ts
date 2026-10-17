import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第15课 其他都没什么问题。 (Những câu khác đều không có vấn đề gì.)
// Nguồn: Giáo trình chuẩn HSK3, trang 141–150 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson15: Lesson = {
  level: "hsk3",
  no: 15,
  slug: "bai-15",
  zh: "其他都没什么问题。",
  pinyin: "Qítā dōu méi shénme wèntí.",
  vi: "Những câu khác đều không có vấn đề gì.",
  en: "Everything else is fine.",
  topic: "学习与节日 · Học tập, lên mạng, lễ hội",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 21 từ mới: 留学、水平、提高、练习、完成、句子、其他、发、要求、注意、上网、除了、新闻、花、极(了)、节日、举行、世界、街道、各、文化.",
    "Hiểu và dùng được 3 điểm ngữ pháp: 除了……以外，都/还/也……; đại từ nghi vấn dùng linh hoạt (2) – 什么 chỉ sự vật không xác định; cách diễn tả mức độ cao nhất với 极了.",
    "Đọc hiểu 3 đoạn hội thoại (nhờ thầy sửa bài, trước giờ thi đấu, mua đồ trên mạng) và 1 đoạn văn giới thiệu lễ hội bia.",
    "Nói về phạm vi loại trừ/bổ sung; khen, chê ở mức độ cao; giới thiệu một ngày lễ.",
    "Từ mới ghép từ chữ cũ: 电影节、春节、文化节.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：节日、留学生、街道、世界、上网、新闻",
      vi: "Chọn hình tương ứng với các từ: 节日 (ngày lễ), 留学生 (du học sinh), 街道 (đường phố), 世界 (thế giới), 上网 (lên mạng), 新闻 (tin tức).",
    },
    {
      zh: "说说你喜欢什么，不喜欢什么：饮料、水果、肉类、颜色、运动、学习",
      vi: "Cho biết bạn thích và không thích gì: đồ uống, trái cây, các loại thịt, màu sắc, môn thể thao, môn học.",
    },
  ],

  vocab: [
    { id: 1, han: "留学", py: "liú xué", pos: "đgt.", meaning: "du học", example: "我来中国留学两年了。", exampleVi: "Em đến Trung Quốc du học hai năm rồi." },
    { id: 2, han: "水平", py: "shuǐpíng", pos: "dt.", meaning: "trình độ", example: "我的汉语水平提高得一点儿也不快啊。", exampleVi: "Trình độ tiếng Hán của em tiến bộ chẳng nhanh chút nào." },
    { id: 3, han: "提高", py: "tígāo", pos: "đgt.", meaning: "nâng cao, tiến bộ", example: "我在这里只学了三个月汉语，但是水平提高了不少。", exampleVi: "Tôi mới học tiếng Hán ở đây ba tháng nhưng trình độ đã tiến bộ không ít." },
    { id: 4, han: "练习", py: "liànxí", pos: "dt./đgt.", meaning: "bài tập; luyện tập", example: "你每天认真学习，做练习、完成作业。", exampleVi: "Em ngày nào cũng học chăm chỉ, làm bài tập, hoàn thành bài về nhà." },
    { id: 5, han: "完成", py: "wán chéng", pos: "đgt.", meaning: "hoàn thành", example: "已经夜里12点多了，但是今天的作业我还没完成。", exampleVi: "Đã hơn 12 giờ đêm rồi mà bài tập hôm nay tôi vẫn chưa làm xong." },
    { id: 6, han: "句子", py: "jùzi", pos: "dt.", meaning: "câu", example: "除了这个句子意思有些不清楚外，其他都没什么问题。", exampleVi: "Ngoài câu này ý hơi chưa rõ, những câu khác đều không có vấn đề gì." },
    { id: 7, han: "其他", py: "qítā", pos: "đt.", meaning: "cái khác, người khác", example: "老师，除了小云，其他人都来了。", exampleVi: "Thưa thầy, ngoài Tiểu Vân, những người khác đều đến rồi." },
    { id: 8, han: "发", py: "fā", pos: "đgt.", meaning: "gửi, gửi đi", example: "王经理，电子邮件我已经给您发过去了。", exampleVi: "Giám đốc Vương, email tôi đã gửi cho anh rồi." },
    { id: 9, han: "要求", py: "yāoqiú", pos: "dt.", meaning: "yêu cầu", example: "我先给大家讲讲这次比赛的要求。", exampleVi: "Thầy nói trước với cả lớp yêu cầu của cuộc thi lần này." },
    { id: 10, han: "注意", py: "zhù yì", pos: "đgt.", meaning: "chú ý", example: "我给大家讲讲一些需要注意的地方。", exampleVi: "Thầy nói với cả lớp vài điểm cần chú ý." },
    { id: 11, han: "上网", py: "shàng wǎng", pos: "đgt.", meaning: "lên mạng", example: "现在用电脑上网真方便啊！", exampleVi: "Bây giờ dùng máy tính lên mạng tiện thật!" },
    { id: 12, han: "除了", py: "chúle", pos: "giới.", meaning: "ngoài… ra", example: "除了看新闻，人们还可以在网上听歌、看电影、买东西。", exampleVi: "Ngoài xem tin tức, người ta còn có thể nghe nhạc, xem phim, mua sắm trên mạng." },
    { id: 13, han: "新闻", py: "xīnwén", pos: "dt.", meaning: "tin tức", example: "刚才电视上的那条新闻真有意思！", exampleVi: "Bản tin trên ti vi vừa rồi thú vị thật!" },
    { id: 14, han: "花", py: "huā", pos: "đgt.", meaning: "tốn, tiêu tốn (tiền, thời gian)", example: "这个月我的钱都花完了，不能再买新衣服了。", exampleVi: "Tháng này tôi tiêu hết tiền rồi, không mua quần áo mới được nữa." },
    { id: 15, han: "极了", py: "jí le", pos: "p.", meaning: "hết sức, cực kỳ", example: "不用花钱，还有新衣服穿，他满意极了。", exampleVi: "Không tốn tiền mà còn có quần áo mới mặc, cậu ấy hài lòng vô cùng." },
    { id: 16, han: "节日", py: "jiérì", pos: "dt.", meaning: "ngày lễ", example: "你们国家最重要的节日是什么？", exampleVi: "Ngày lễ quan trọng nhất của nước bạn là gì?" },
    { id: 17, han: "举行", py: "jǔxíng", pos: "đgt.", meaning: "tổ chức (hội họp, thi đấu…)", example: "这个地方每年夏天都要举行一次啤酒节。", exampleVi: "Nơi này mùa hè năm nào cũng tổ chức một lễ hội bia." },
    { id: 18, han: "世界", py: "shìjiè", pos: "dt.", meaning: "thế giới", example: "在啤酒节上，你可以喝到世界上不同地方的啤酒。", exampleVi: "Ở lễ hội bia, bạn có thể uống bia của nhiều nơi khác nhau trên thế giới." },
    { id: 19, han: "街道", py: "jiēdào", pos: "dt.", meaning: "đường, đường phố", example: "你还可以在街道两边看到世界上不同地方的歌舞。", exampleVi: "Bạn còn có thể xem ca múa của nhiều nơi trên thế giới ở hai bên đường." },
    { id: 20, han: "各", py: "gè", pos: "đt.", meaning: "mỗi, các", example: "你想不想了解世界各个地方的啤酒文化？", exampleVi: "Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không?" },
    { id: 21, han: "文化", py: "wénhuà", pos: "dt.", meaning: "văn hóa", example: "我对那儿的文化很感兴趣。", exampleVi: "Tôi rất có hứng thú với văn hóa ở đó." },
    { id: 22, han: "小云", py: "Xiǎoyún", pos: "dt.", meaning: "Tiểu Vân (tên người)", example: "小云在路上呢。", exampleVi: "Tiểu Vân đang trên đường." },
    { id: 23, han: "电影节", py: "diànyǐngjié", pos: "dt.", meaning: "liên hoan phim (电影 + 节日)", example: "这个城市每年都举行电影节。", exampleVi: "Thành phố này năm nào cũng tổ chức liên hoan phim.", group: "extended" },
    { id: 24, han: "春节", py: "Chūnjié", pos: "dt.", meaning: "Tết Nguyên đán (春天 + 节日)", example: "春节是中国最重要的节日。", exampleVi: "Tết Nguyên đán là ngày lễ quan trọng nhất của Trung Quốc.", group: "extended" },
    { id: 25, han: "文化节", py: "wénhuàjié", pos: "dt.", meaning: "lễ hội văn hóa (文化 + 节日)", example: "下个月学校有文化节。", exampleVi: "Tháng sau trường có lễ hội văn hóa.", group: "extended" },
  ],

  text: {
    title: "课文 其他都没什么问题。",
    paragraphs: [
      {
        heading: "课文一 · 在办公室 (Trong văn phòng)",
        zh: "大山：老师，我来中国留学两年了，但是我的汉语水平提高得一点儿也不快啊。\n老师：你每天认真学习，做练习、完成作业，一直不错啊。\n大山：这是我昨天的作业，您帮我看看对不对。\n老师：写得不错，除了这个句子意思有些不清楚外，其他都没什么问题。\n大山：谢谢老师！\n老师：以后有什么不明白的地方，可以给我打电话或者发电子邮件。",
        vi: "Đại Sơn: Thưa thầy, em đến Trung Quốc du học hai năm rồi, nhưng trình độ tiếng Hán của em tiến bộ chẳng nhanh chút nào.\nThầy giáo: Em ngày nào cũng học chăm chỉ, làm bài tập, hoàn thành bài về nhà, vẫn luôn tốt mà.\nĐại Sơn: Đây là bài tập hôm qua của em, thầy xem giúp em đúng không ạ.\nThầy giáo: Viết tốt đấy, ngoài câu này ý hơi chưa rõ, những câu khác đều không có vấn đề gì.\nĐại Sơn: Em cảm ơn thầy!\nThầy giáo: Sau này có chỗ nào không hiểu, em có thể gọi điện hoặc gửi email cho thầy.",
        questions: ["老师觉得大山的汉语怎么样？", "大山的作业有什么问题？"],
      },
      {
        heading: "课文二 · 在教室 (Trong lớp học)",
        zh: "学生：老师，除了小云，其他人都来了。\n老师：比赛马上就要开始了，小云怎么还没来？\n学生：刚才给她打电话了，她在路上呢。\n老师：不等她了，我先给大家讲讲这次比赛的要求和一些需要注意的地方。\n学生：老师，您放心，今天的比赛我们一定能拿第一。",
        vi: "Học sinh: Thưa thầy, ngoài Tiểu Vân, mọi người đều đến rồi.\nThầy giáo: Cuộc thi sắp bắt đầu rồi, sao Tiểu Vân vẫn chưa đến?\nHọc sinh: Vừa nãy gọi điện cho bạn ấy rồi, bạn ấy đang trên đường.\nThầy giáo: Không đợi nữa, thầy nói trước với cả lớp yêu cầu của cuộc thi lần này và vài điểm cần chú ý.\nHọc sinh: Thầy yên tâm, cuộc thi hôm nay chúng em nhất định giành giải nhất.",
        questions: ["大家都来参加比赛了吗？谁没来？", "老师现在在做什么？"],
      },
      {
        heading: "课文三 · 在休息室 (Trong phòng giải lao)",
        zh: "同事：现在用电脑上网真方便啊！\n小刚：是啊，除了看新闻，人们还可以在网上听歌、看电影、买东西。\n同事：对了，你从网上买的那件衣服呢？怎么没见你穿？\n小刚：那件衣服我穿着有点儿小，给我弟弟了。\n同事：他满意吗？\n小刚：不用花钱，还有新衣服穿，他满意极了。",
        vi: "Đồng nghiệp: Bây giờ dùng máy tính lên mạng tiện thật!\nTiểu Cương: Đúng vậy, ngoài xem tin tức, người ta còn có thể nghe nhạc, xem phim, mua sắm trên mạng.\nĐồng nghiệp: À phải rồi, cái áo cậu mua trên mạng đâu? Sao không thấy cậu mặc?\nTiểu Cương: Cái áo đó tớ mặc hơi chật, cho em trai rồi.\nĐồng nghiệp: Cậu ấy có hài lòng không?\nTiểu Cương: Không tốn tiền mà còn có áo mới mặc, nó hài lòng vô cùng.",
        questions: ["大家可以上网做什么？", "小刚从网上买的那件衣服怎么了？"],
      },
      {
        heading: "课文四 · 啤酒节 (Lễ hội bia)",
        zh: "除了春节、中秋节以外，啤酒节也是这里很重要的一个节日。这个地方每年夏天都要举行一次啤酒节。在啤酒节上，你可以喝到世界上不同地方的啤酒。除了喝啤酒，你还可以在街道两边看到世界上不同地方的歌舞。你想不想了解世界各个地方的啤酒文化？来这里的啤酒节看看吧。",
        vi: "Ngoài Tết Nguyên đán và Tết Trung thu, lễ hội bia cũng là một ngày lễ rất quan trọng ở đây. Nơi này mùa hè năm nào cũng tổ chức một lễ hội bia. Ở lễ hội bia, bạn có thể uống bia của nhiều nơi khác nhau trên thế giới. Ngoài uống bia, bạn còn có thể xem ca múa của nhiều nơi trên thế giới ở hai bên đường. Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không? Hãy đến lễ hội bia ở đây xem thử nhé.",
        questions: ["这个地方什么时候举行啤酒节？", "啤酒节上可以做什么？"],
      },
    ],
    notes: [
      "小云 (Xiǎoyún): Tiểu Vân.",
      "中秋节 (Zhōngqiū Jié): Tết Trung thu; 拿第一: giành giải nhất.",
      "Tục ngữ – 一是一，二是二 (Yī shì yī, èr shì èr): một là một, hai là hai; chỉ người nói năng, làm việc thành thật, không gian dối.",
      "Văn hóa – Món ăn ngày sinh nhật của người Trung Quốc: người phương Tây ăn bánh kem, người Trung Quốc có tục ăn mì sợi dài tượng trưng cho “trường thọ”, nên mì sinh nhật còn gọi là 长寿面 (mì trường thọ).",
    ],
  },

  grammar: [
    {
      word: "除了……以外，都/还/也……",
      title: "Ngoài… ra, …",
      usages: [
        {
          label: "除了……以外，都……",
          explain: "Loại trừ phần được nhắc đến, tất cả phần còn lại trong phạm vi đều giống nhau. 以外 có thể lược bỏ.",
          examples: ["除了这个汉字以外，别的汉字我都认识。", "除了我以外，大家都听懂了。", "除了这个句子意思有些不清楚外，其他都没什么问题。", "除了小云，其他人都来了。"],
        },
        {
          label: "除了……以外，还/也……",
          explain: "Ngoài phần được nhắc đến còn có phần khác bổ sung. Chủ ngữ đặt ở đầu câu hoặc trước 还/也.",
          examples: ["除了唱歌以外，他还喜欢跳舞。", "除了汉语以外，我还会说英语。", "上网除了看新闻，还可以听音乐。", "除了春节、中秋节以外，啤酒节也是这里很重要的一个节日。"],
        },
      ],
    },
    {
      word: "什么",
      title: "Đại từ nghi vấn dùng linh hoạt (2)",
      usages: [
        {
          label: "Cách dùng",
          explain: "什么 có thể dùng làm đại từ chỉ thị thay cho người/vật không xác định, giúp câu nói lịch sự, nhẹ nhàng hơn. Bỏ 什么 đi nghĩa câu không đổi.",
          examples: ["这个饭馆有没有什么特别好吃的菜？", "周末你有没有什么打算？", "你写得很好，没什么问题。", "以后有什么不明白的地方，可以给我打电话或者发电子邮件。"],
        },
      ],
    },
    {
      word: "形容词/心理动词 + 极了",
      title: "Cách diễn tả mức độ: 极了",
      usages: [
        {
          label: "Cách dùng",
          explain: "“Tính từ/động từ chỉ trạng thái tâm lý + 极了” diễn tả mức độ cao nhất (cực kỳ, vô cùng).",
          examples: ["我的小狗可爱极了。", "今天天气冷极了。", "那件衣服我喜欢极了。", "他满意极了。"],
        },
      ],
      note: "Không dùng 很/非常 cùng 极了: không nói *很冷极了.",
    },
  ],

  wordChoice: [
    { sentence: "王经理，电子邮件我已经给您___过去了。", options: ["花", "发", "练习", "提高"], answer: "发" },
    { sentence: "你每天跟谁___口语？", options: ["练习", "完成", "发", "花"], answer: "练习" },
    { sentence: "已经夜里12点多了，但是今天的作业我还没___。", options: ["提高", "完成", "花", "发"], answer: "完成" },
    { sentence: "这个月我的钱都___完了，不能再买新衣服了。", options: ["花", "练习", "提高", "完成"], answer: "花" },
    { sentence: "我在这里只学了三个月汉语，但是水平___了不少。", options: ["发", "花", "提高", "练习"], answer: "提高" },
    { sentence: "A：今天听写五个___，请大家准备好笔和纸。B：五个？老师，太多了！", options: ["文化", "句子", "新闻", "节日"], answer: "句子" },
    { sentence: "A：___上有多少个国家？你知道吗？B：这个……，我真不知道。", options: ["世界", "句子", "文化", "新闻"], answer: "世界" },
    { sentence: "A：你为什么想去那个地方旅游？B：我对那儿的___很感兴趣。", options: ["节日", "世界", "文化", "句子"], answer: "文化" },
    { sentence: "A：你们国家最重要的___是什么？B：当然是春节！", options: ["新闻", "节日", "句子", "世界"], answer: "节日" },
    { sentence: "A：刚才电视上的那条___真有意思！B：你快说说。", options: ["文化", "世界", "节日", "新闻"], answer: "新闻" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [11, 3, 2] },
        { vocabId: 2, distractors: [3, 9, 21] },
        { vocabId: 5, distractors: [4, 3, 10] },
        { vocabId: 9, distractors: [10, 5, 17] },
        { vocabId: 10, distractors: [9, 2, 4] },
        { vocabId: 13, distractors: [16, 21, 18] },
        { vocabId: 17, distractors: [18, 19, 16] },
        { vocabId: 18, distractors: [19, 21, 13] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 3, 6, 7, 12, 16, 19, 21],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["除了", "小云", "，", "其他人", "都", "来了", "。"], answer: "除了小云，其他人都来了。", vi: "Ngoài Tiểu Vân, những người khác đều đến rồi." },
        { tokens: ["除了", "汉语", "以外", "，", "我", "还", "会说英语", "。"], answer: "除了汉语以外，我还会说英语。", vi: "Ngoài tiếng Hán ra, tôi còn biết nói tiếng Anh." },
        { tokens: ["你", "写得很好", "，", "没", "什么", "问题", "。"], answer: "你写得很好，没什么问题。", vi: "Bạn viết rất tốt, không có vấn đề gì." },
        { tokens: ["不用花钱", "，", "他", "满意", "极了", "。"], answer: "不用花钱，他满意极了。", vi: "Không tốn tiền, cậu ấy hài lòng vô cùng." },
        { tokens: ["这个地方", "每年夏天", "都要", "举行", "一次", "啤酒节", "。"], answer: "这个地方每年夏天都要举行一次啤酒节。", vi: "Nơi này mùa hè năm nào cũng tổ chức một lễ hội bia." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Trong văn phòng", text: "大山：老师，我来中国{{c1}}两年了，但是我的汉语{{c2}}{{c3}}得一点儿也不快啊。\n老师：你每天认真学习，做{{c4}}、{{c5}}作业，一直不错啊。\n老师：写得不错，除了这个{{c6}}意思有些不清楚外，{{c7}}都没什么问题。" },
        { title: "Bài khóa 2 · Trước giờ thi đấu", text: "学生：老师，{{c8}}小云，其他人都来了。\n老师：不等她了，我先给大家讲讲这次比赛的{{c9}}和一些需要{{c10}}的地方。" },
      ],
      answers: { c1: "留学", c2: "水平", c3: "提高", c4: "练习", c5: "完成", c6: "句子", c7: "其他", c8: "除了", c9: "要求", c10: "注意" },
      bank: ["留学", "水平", "提高", "练习", "完成", "句子", "其他", "除了", "要求", "注意", "发", "文化", "新闻"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Mua đồ trên mạng", text: "同事：现在用电脑{{e1}}真方便啊！\n小刚：是啊，除了看{{e2}}，人们还可以在网上听歌、看电影、买东西。\n小刚：不用{{e3}}钱，还有新衣服穿，他满意{{e4}}。" },
        { title: "Bài khóa 4 · Lễ hội bia", text: "除了春节、中秋节以外，啤酒节{{e5}}是这里很重要的一个{{e6}}。这个地方每年夏天都要{{e7}}一次啤酒节。在啤酒节上，你可以喝到{{e8}}上不同地方的啤酒。除了喝啤酒，你还可以在{{e9}}两边看到世界上不同地方的歌舞。你想不想了解世界各个地方的啤酒{{e10}}？" },
      ],
      answers: { e1: "上网", e2: "新闻", e3: "花", e4: "极了", e5: "也", e6: "节日", e7: "举行", e8: "世界", e9: "街道", e10: "文化" },
      bank: ["上网", "新闻", "花", "极了", "也", "节日", "举行", "世界", "街道", "文化", "都", "发", "水平"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "除了我以外，大家都听懂了。", vi: "Ngoài tôi ra, mọi người đều nghe hiểu rồi.", keywords: ["ngoài tôi", "mọi người", "hiểu"] },
        { zh: "除了唱歌以外，他还喜欢跳舞。", vi: "Ngoài ca hát, anh ấy còn thích nhảy múa.", keywords: ["ngoài", "hát", "nhảy"] },
        { zh: "这个饭馆有没有什么特别好吃的菜？", vi: "Nhà hàng này có món gì đặc biệt ngon không?", keywords: ["nhà hàng", "món", "ngon"] },
        { zh: "今天天气冷极了。", vi: "Hôm nay trời lạnh vô cùng.", keywords: ["hôm nay", "lạnh"] },
        { zh: "我的汉语水平提高得一点儿也不快。", vi: "Trình độ tiếng Hán của tôi tiến bộ chẳng nhanh chút nào.", keywords: ["trình độ", "tiếng hán", "nhanh"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Ngoài chữ Hán này ra, những chữ khác tôi đều biết.", answers: ["除了这个汉字以外，别的汉字我都认识。", "除了这个汉字，别的汉字我都认识。", "除了这个汉字以外，其他汉字我都认识。"] },
        { vi: "Con chó nhỏ của tôi đáng yêu vô cùng.", answers: ["我的小狗可爱极了。"] },
        { vi: "Cái áo đó tôi thích vô cùng.", answers: ["那件衣服我喜欢极了。"] },
        { vi: "Cuối tuần bạn có dự định gì không?", answers: ["周末你有没有什么打算？", "周末你有什么打算？"] },
        { vi: "Trình độ tiếng Hán của tôi đã tiến bộ không ít.", answers: ["我的汉语水平提高了不少。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "大山来中国留学两年了。", a: true },
        { q: "老师觉得大山的作业问题很多。", a: false },
        { q: "比赛开始的时候，小云还没来。", a: true },
        { q: "老师要等小云来了再讲比赛的要求。", a: false },
        { q: "小刚从网上买的衣服有点儿小。", a: true },
        { q: "小刚把衣服给了他哥哥。", a: false },
        { q: "这个地方每年夏天举行啤酒节。", a: true },
        { q: "在啤酒节上只能喝到这个地方的啤酒。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "其他都没什么问题。",
        "除了小云，其他人都来了。",
        "现在用电脑上网真方便啊！",
        "他满意极了。",
        "我对那儿的文化很感兴趣。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "介绍你们国家的一个节日：什么时候？大家怎么过节、吃什么、做什么？ (Giới thiệu một ngày lễ của nước bạn: vào lúc nào? Mọi người đón lễ thế nào, ăn gì, làm gì?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 15 (除了……以外，都/还/也……, 什么 dùng linh hoạt, 极了).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["除了", "以外", "什么", "极了"],
      minGrammar: 2,
      sample: "春节是我们国家最重要的节日，一般在每年的1月或2月。过春节的时候，人们都要回家。除了一起吃饭以外，一家人还一起看电视节目、聊天儿。街道上有很多人，热闹极了。除了春节，中秋节也是很重要的节日。如果你对我们国家的文化感兴趣，有什么不明白的地方，可以问我。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 除了……以外，都/还/也", points: 6,
      subtitle: "Chọn 都, 还 hoặc 也 cho mỗi chỗ trống.",
      grammarWord: "除了……以外，都/还/也",
      options: ["都", "还", "也"],
      items: [
        { q: "除了这个汉字以外，别的汉字我___认识。", answers: ["都"] },
        { q: "除了我以外，大家___听懂了。", answers: ["都"] },
        { q: "除了唱歌以外，他___喜欢跳舞。", answers: ["还"] },
        { q: "除了汉语以外，我___会说英语。", answers: ["还"] },
        { q: "除了春节、中秋节以外，啤酒节___是这里很重要的一个节日。", answers: ["也"] },
        { q: "除了小云，其他人___来了。", answers: ["都"] },
        { q: "上网除了看新闻，___可以听音乐。", answers: ["还"] },
        { q: "除了西瓜，其他水果我___不想吃。", answers: ["都"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: mức độ với 极了", points: 6,
      subtitle: "Điền từ chỉ mức độ cao nhất vào chỗ trống.",
      grammarWord: "极了",
      items: [
        { q: "我的小狗可爱___。", answers: ["极了"] },
        { q: "今天天气冷___。", answers: ["极了"] },
        { q: "那件衣服我喜欢___。", answers: ["极了"] },
        { q: "不用花钱，还有新衣服穿，他满意___。", answers: ["极了"] },
        { q: "外边热___，我们别出去了。", answers: ["极了"] },
        { q: "我工作了一天，累___。", answers: ["极了"] },
        { q: "她唱歌好听___，大家都爱听。", answers: ["极了"] },
        { q: "这家饭馆的菜好吃___。", answers: ["极了"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 什么 dùng linh hoạt", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "什么",
      options: ["什么", "哪儿", "谁"],
      items: [
        { q: "这个饭馆有没有___特别好吃的菜？", answers: ["什么"] },
        { q: "周末你有没有___打算？", answers: ["什么"] },
        { q: "你写得很好，没___问题。", answers: ["什么"] },
        { q: "以后有___不明白的地方，可以给我打电话。", answers: ["什么"] },
        { q: "有___喝的吗？", answers: ["什么"] },
        { q: "哪儿好玩儿你就去___。", answers: ["哪儿"] },
        { q: "谁喜欢他他就喜欢___。", answers: ["谁"] },
        { q: "你还有___问题吗？", answers: ["什么"] },
      ],
    },
  ],
};
