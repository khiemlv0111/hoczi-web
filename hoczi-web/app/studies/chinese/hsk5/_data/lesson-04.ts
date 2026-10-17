import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第4课 子路背米 (Zilu Carrying Rice)
// Nguồn: slide bài 4 và bộ bài tập "HSK5 tiêu chuẩn bài 4" trong hsk5/docs.
export const lesson04: Lesson = {
  level: "hsk5",
  no: 4,
  slug: "bai-4",
  zh: "子路背米",
  pinyin: "Zǐlù bēi mǐ",
  vi: "Tử Lộ cõng gạo",
  en: "Zilu Carrying Rice",
  topic: "古代故事 · Truyện cổ – cha mẹ và con cái",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 从前、时期、农民、战争、惭愧、打听、结实、老实、物质、孝顺…",
    "Nắm cách kết hợp của các từ: 决心、占、诚恳、食物、委屈、勤奋、背、流传、扶.",
    "Hiểu và dùng được 至今、顶、……得不行、反而; phân biệt 满足 và 满意.",
    "Đọc hiểu câu chuyện Tử Lộ hiếu kính cha mẹ, kể lại bằng từ vựng đã học.",
    "Thảo luận về đạo hiếu (孝道) và viết đoạn văn 「从《子路背米》想到的」.",
    "Nắm 10 từ mở rộng chủ đề 社交称谓 (cách xưng hô xã giao)."
  ],
  warmUp: [
    {
      zh: "在你们国家，有没有流传很久的关于孝敬父母的故事？",
      vi: "Ở nước bạn có câu chuyện nào lưu truyền lâu đời về hiếu kính cha mẹ không?"
    },
    {
      zh: "你认为应该如何去关爱你的父母？",
      vi: "Theo bạn nên quan tâm, yêu thương cha mẹ như thế nào?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "孝敬",
      py: "xiàojìng",
      pos: "đg.",
      meaning: "hiếu kính, tỏ lòng hiếu thảo",
      example: "流传至今的“百里背米”讲的就是他孝敬父母的故事。",
      exampleVi: "Câu chuyện \"vác gạo trăm dặm\" lưu truyền đến nay kể về việc anh ấy hiếu kính cha mẹ."
    },
    {
      id: 2,
      han: "至今",
      py: "zhìjīn",
      pos: "p.",
      meaning: "đến nay, cho tới bây giờ",
      example: "我在北京出生、长大，至今还没离开过呢。",
      exampleVi: "Tôi sinh ra và lớn lên ở Bắc Kinh, đến nay vẫn chưa từng rời đi."
    },
    {
      id: 3,
      han: "从前",
      py: "cóngqián",
      pos: "dt.",
      meaning: "trước kia, ngày xưa",
      example: "从前，有一个人叫子路。",
      exampleVi: "Ngày xưa, có một người tên là Tử Lộ."
    },
    {
      id: 4,
      han: "时期",
      py: "shíqī",
      pos: "dt.",
      meaning: "thời kỳ",
      example: "子路大概是春秋时期的人。",
      exampleVi: "Tử Lộ có lẽ là người thời Xuân Thu."
    },
    {
      id: 5,
      han: "流传",
      py: "liúchuán",
      pos: "đg.",
      meaning: "lưu truyền",
      example: "许多故事都是从古代流传下来的。",
      exampleVi: "Rất nhiều câu chuyện được lưu truyền từ thời cổ đại."
    },
    {
      id: 6,
      han: "农民",
      py: "nóngmín",
      pos: "dt.",
      meaning: "nông dân",
      example: "子路的父母都是农民。",
      exampleVi: "Cha mẹ Tử Lộ đều là nông dân."
    },
    {
      id: 7,
      han: "决心",
      py: "juéxīn",
      pos: "đg./dt.",
      meaning: "quyết tâm",
      example: "他暗下决心，一定要让父母吃上米饭。",
      exampleVi: "Anh ấy thầm quyết tâm, nhất định phải để cha mẹ được ăn cơm."
    },
    {
      id: 8,
      han: "战争",
      py: "zhànzhēng",
      pos: "dt.",
      meaning: "chiến tranh",
      example: "由于连年的战争，家里生活非常困难。",
      exampleVi: "Do chiến tranh liên miên, cuộc sống gia đình vô cùng khó khăn."
    },
    {
      id: 9,
      han: "惭愧",
      py: "cánkuì",
      pos: "tt.",
      meaning: "hổ thẹn, xấu hổ",
      example: "听了父母的话，他心里觉得十分惭愧。",
      exampleVi: "Nghe lời cha mẹ nói, trong lòng anh ấy cảm thấy vô cùng hổ thẹn."
    },
    {
      id: 10,
      han: "委屈",
      py: "wěiqū",
      pos: "đg./tt.",
      meaning: "chịu ấm ức, oan ức",
      example: "我一定要让父母过上好日子，不能再委屈他们了！",
      exampleVi: "Tôi nhất định phải cho cha mẹ sống ngày tốt đẹp, không thể để họ chịu ấm ức nữa!"
    },
    {
      id: 11,
      han: "打听",
      py: "dǎtīng",
      pos: "đg.",
      meaning: "dò hỏi, hỏi thăm",
      example: "他打听到那个有钱人家需要干活儿的人。",
      exampleVi: "Anh ấy dò hỏi được rằng nhà người giàu đó cần người làm việc."
    },
    {
      id: 12,
      han: "勤奋",
      py: "qínfèn",
      pos: "tt.",
      meaning: "cần cù, siêng năng",
      example: "这个小伙子干起活来十分勤奋。",
      exampleVi: "Chàng trai này làm việc rất siêng năng."
    },
    {
      id: 13,
      han: "老实",
      py: "lǎoshi",
      pos: "tt.",
      meaning: "thật thà, trung thực",
      example: "他干活勤奋，人又老实，老板很满意。",
      exampleVi: "Anh ấy làm việc chăm chỉ, người lại thật thà, ông chủ rất hài lòng."
    },
    {
      id: 14,
      han: "满足",
      py: "mǎnzú",
      pos: "đg.",
      meaning: "thỏa mãn, thấy đủ (không đòi hỏi thêm)",
      example: "只要能饱饱地吃上一顿米饭，也就满足啦！",
      exampleVi: "Chỉ cần được ăn no một bữa cơm là đã thấy thỏa mãn rồi!"
    },
    {
      id: 15,
      han: "满意",
      py: "mǎnyì",
      pos: "đg.",
      meaning: "hài lòng, vừa ý",
      example: "老师说她对我这次的作业非常满意。",
      exampleVi: "Cô giáo nói cô ấy rất hài lòng về bài tập lần này của tôi."
    },
    {
      id: 16,
      han: "占",
      py: "zhàn",
      pos: "đg.",
      meaning: "chiếm, đứng ở vị trí",
      example: "孝顺父母是各种美德中占第一位的。",
      exampleVi: "Hiếu thảo với cha mẹ đứng vị trí số một trong các đức tính tốt đẹp."
    },
    {
      id: 17,
      han: "顶",
      py: "dǐng",
      pos: "dt./đg./lt.",
      meaning: "đỉnh; chọi/đội; cái (mũ, ô...)",
      example: "他顶着大雪往前走。",
      exampleVi: "Anh ấy đội tuyết lớn đi về phía trước."
    },
    {
      id: 18,
      han: "背",
      py: "bēi",
      pos: "đg.",
      meaning: "cõng, vác trên lưng",
      example: "他买了一袋米，背回了家。",
      exampleVi: "Anh ấy mua một bao gạo, vác về nhà."
    },
    {
      id: 19,
      han: "滑",
      py: "huá",
      pos: "tt./đg.",
      meaning: "trơn; trượt",
      example: "雪地很滑，子路不小心滑了一下。",
      exampleVi: "Mặt tuyết rất trơn, Tử Lộ không cẩn thận trượt chân một cái."
    },
    {
      id: 20,
      han: "甩",
      py: "shuǎi",
      pos: "đg.",
      meaning: "vung, quăng, đá (người yêu)",
      example: "背上的米袋差点儿被甩出去。",
      exampleVi: "Bao gạo trên lưng suýt chút nữa bị văng ra ngoài."
    },
    {
      id: 21,
      han: "扶",
      py: "fú",
      pos: "đg.",
      meaning: "đỡ, dìu",
      example: "扶着米袋的双手冻得不行。",
      exampleVi: "Đôi tay đỡ bao gạo lạnh cóng vô cùng."
    },
    {
      id: 22,
      han: "官",
      py: "guān",
      pos: "dt.",
      meaning: "quan chức",
      example: "国王很喜欢他，就留他做了官。",
      exampleVi: "Nhà vua rất thích anh ấy, liền giữ anh lại làm quan."
    },
    {
      id: 23,
      han: "反而",
      py: "fǎn'ér",
      pos: "p.",
      meaning: "ngược lại",
      example: "他并没有感到高兴，反而常常诚恳地说想念父母。",
      exampleVi: "Anh ấy không hề cảm thấy vui, ngược lại thường thành khẩn nói rằng nhớ cha mẹ."
    },
    {
      id: 24,
      han: "主人",
      py: "zhǔrén",
      pos: "dt.",
      meaning: "chủ nhà, chủ nhân",
      example: "那家主人见他身体结实，就留下了他。",
      exampleVi: "Ông chủ nhà đó thấy anh ta thân thể chắc khỏe, liền giữ anh lại."
    },
    {
      id: 25,
      han: "后背",
      py: "hòubèi",
      pos: "dt.",
      meaning: "lưng",
      example: "他把米袋背在后背上。",
      exampleVi: "Anh ấy vác bao gạo trên lưng."
    },
    {
      id: 26,
      han: "结实",
      py: "jiéshi",
      pos: "tt.",
      meaning: "chắc khỏe, cứng cáp",
      example: "那家主人见他身体结实，就留下了他。",
      exampleVi: "Ông chủ nhà đó thấy anh ta thân thể chắc khỏe, liền giữ anh lại."
    },
    {
      id: 27,
      han: "去世",
      py: "qùshì",
      pos: "đg.",
      meaning: "qua đời",
      example: "后来子路的父母去世了。",
      exampleVi: "Về sau cha mẹ Tử Lộ đã qua đời."
    },
    {
      id: 28,
      han: "本领",
      py: "běnlǐng",
      pos: "dt.",
      meaning: "tài năng, năng lực",
      example: "楚国国君觉得他很有本领，是个人才。",
      exampleVi: "Vua nước Sở thấy anh ấy rất có tài năng, là một nhân tài."
    },
    {
      id: 29,
      han: "人才",
      py: "réncái",
      pos: "dt.",
      meaning: "nhân tài",
      example: "楚国国君觉得他很有本领，是个人才。",
      exampleVi: "Vua nước Sở thấy anh ấy rất có tài năng, là một nhân tài."
    },
    {
      id: 30,
      han: "诚恳",
      py: "chéngkěn",
      pos: "tt.",
      meaning: "thành khẩn, chân thành",
      example: "他反而常常诚恳地说：多么希望父母能和我一起过好日子！",
      exampleVi: "Ngược lại anh ấy thường thành khẩn nói: giá mà cha mẹ có thể sống ngày tốt đẹp cùng tôi!"
    },
    {
      id: 31,
      han: "镇",
      py: "zhèn",
      pos: "dt.",
      meaning: "thị trấn",
      example: "路过镇上，他买了一袋米。",
      exampleVi: "Đi ngang qua thị trấn, anh ấy mua một bao gạo."
    },
    {
      id: 32,
      han: "不行",
      py: "bùxíng",
      pos: "tt.",
      meaning: "không được, không ổn; (…得不行: cực kỳ, vô cùng)",
      example: "扶着米袋的双手冻得不行。",
      exampleVi: "Đôi tay đỡ bao gạo lạnh cóng vô cùng."
    },
    {
      id: 33,
      han: "团圆",
      py: "tuányuán",
      pos: "đg.",
      meaning: "đoàn viên, sum họp",
      example: "一家人饱饱地吃了顿团圆饭。",
      exampleVi: "Cả nhà ăn no một bữa cơm đoàn viên."
    },
    {
      id: 34,
      han: "国君",
      py: "guójūn",
      pos: "dt.",
      meaning: "quốc quân, vua",
      example: "楚国国君觉得他很有本领。",
      exampleVi: "Vua nước Sở thấy anh ấy rất có tài năng."
    },
    {
      id: 35,
      han: "物质",
      py: "wùzhì",
      pos: "dt.",
      meaning: "vật chất",
      example: "他并没有因为物质条件好而感到欢喜。",
      exampleVi: "Anh ấy không hề vì điều kiện vật chất tốt mà cảm thấy vui mừng."
    },
    {
      id: 36,
      han: "古代",
      py: "gǔdài",
      pos: "dt.",
      meaning: "thời cổ đại",
      example: "中国古代有句话叫“百善孝为先”。",
      exampleVi: "Thời cổ đại Trung Quốc có câu \"trăm điều thiện, hiếu đứng đầu\"."
    },
    {
      id: 37,
      han: "孝顺",
      py: "xiàoshùn",
      pos: "đg./tt.",
      meaning: "hiếu thảo",
      example: "孩子要孝顺父母。",
      exampleVi: "Con cái phải hiếu thảo với cha mẹ."
    },
    {
      id: 38,
      han: "美德",
      py: "měidé",
      pos: "dt.",
      meaning: "đức tính tốt đẹp",
      example: "扶老奶奶过马路是一种美德。",
      exampleVi: "Dìu bà cụ qua đường là một đức tính tốt đẹp."
    },
    {
      id: 39,
      han: "食物",
      py: "shíwù",
      pos: "dt.",
      meaning: "thức ăn",
      example: "子路为了让父母吃到较好的食物，不怕辛苦。",
      exampleVi: "Tử Lộ vì để cha mẹ ăn được thức ăn ngon hơn, không ngại vất vả."
    },
    {
      id: 40,
      han: "成就",
      py: "chéngjiù",
      pos: "dt.",
      meaning: "thành tựu",
      example: "我现在有了一点儿成就，可他们已经不在了。",
      exampleVi: "Bây giờ tôi đã có một chút thành tựu, nhưng họ đã không còn nữa."
    },
    {
      id: 41,
      han: "先生",
      py: "xiānsheng",
      pos: "dt.",
      meaning: "quý ông, ngài (xưng hô lịch sự với nam giới)",
      example: "这位先生，请问您需要帮忙吗？",
      exampleVi: "Thưa ông, xin hỏi ông có cần giúp đỡ gì không?",
      group: "extended"
    },
    {
      id: 42,
      han: "小姐",
      py: "xiǎojiě",
      pos: "dt.",
      meaning: "quý cô (xưng hô lịch sự với nữ giới trẻ)",
      example: "这位小姐，您的咖啡好了。",
      exampleVi: "Thưa cô, cà phê của cô xong rồi.",
      group: "extended"
    },
    {
      id: 43,
      han: "同志",
      py: "tóngzhì",
      pos: "dt.",
      meaning: "đồng chí",
      example: "同志，请问车站怎么走？",
      exampleVi: "Đồng chí ơi, xin hỏi trạm xe đi thế nào?",
      group: "extended"
    },
    {
      id: 44,
      han: "师傅",
      py: "shīfu",
      pos: "dt.",
      meaning: "sư phụ, bác (cách gọi thợ, tài xế...)",
      example: "师傅，麻烦到火车站，谢谢。",
      exampleVi: "Bác tài ơi, làm ơn cho tôi đến ga tàu, cảm ơn.",
      group: "extended"
    },
    {
      id: 45,
      han: "老板",
      py: "lǎobǎn",
      pos: "dt.",
      meaning: "ông chủ, bà chủ",
      example: "老板，这件衣服多少钱？",
      exampleVi: "Ông chủ ơi, chiếc áo này bao nhiêu tiền?",
      group: "extended"
    },
    {
      id: 46,
      han: "阁下",
      py: "géxià",
      pos: "dt.",
      meaning: "ngài (kính ngữ trang trọng)",
      example: "尊敬的阁下，欢迎您的到来。",
      exampleVi: "Kính thưa ngài, hoan nghênh ngài đã đến.",
      group: "extended"
    },
    {
      id: 47,
      han: "各位",
      py: "gèwèi",
      pos: "đại từ",
      meaning: "quý vị, mọi người",
      example: "各位来宾，欢迎大家参加今天的活动。",
      exampleVi: "Kính thưa quý vị khách mời, hoan nghênh mọi người tham gia hoạt động hôm nay.",
      group: "extended"
    },
    {
      id: 48,
      han: "尊敬",
      py: "zūnjìng",
      pos: "đg./tt.",
      meaning: "kính trọng, tôn kính",
      example: "尊敬的各位老师，大家好。",
      exampleVi: "Kính thưa các thầy cô, xin chào mọi người.",
      group: "extended"
    },
    {
      id: 49,
      han: "贵宾",
      py: "guìbīn",
      pos: "dt.",
      meaning: "quý khách",
      example: "欢迎各位贵宾光临。",
      exampleVi: "Hoan nghênh quý khách quang lâm.",
      group: "extended"
    },
    {
      id: 50,
      han: "来宾",
      py: "láibīn",
      pos: "dt.",
      meaning: "khách mời",
      example: "各位来宾，请入座。",
      exampleVi: "Kính thưa quý khách mời, xin mời an tọa.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 子路背米",
    paragraphs: [
      {
        zh: "从前，大概在距今两千五百多年前的春秋时期，有一个人叫子路，他是孔子最年长的学生。流传至今的“百里背米”讲的就是他孝敬父母的故事。",
        vi: "Ngày xưa, khoảng thời Xuân Thu cách đây hơn 2500 năm, có một người tên là Tử Lộ, ông là học trò lớn tuổi nhất của Khổng Tử. Câu chuyện “cõng gạo trăm dặm” lưu truyền đến nay kể chính về việc ông hiếu kính cha mẹ.",
        questions: ["子路是什么时期的人？", "你觉得“最年长”是什么意思？"]
      },
      {
        zh: "子路的父母都是农民。由于连年的战争，家里生活非常困难。一天，子路从外面回来，听到父母在屋里说话：“活了大半辈子了，别说鱼肉，只要能饱饱地吃上一顿米饭，也就满足啦！”子路听了，心里觉得十分惭愧。他暗下决心：“一定要让父母吃上米饭，不能再委屈他们了！”",
        vi: "Cha mẹ Tử Lộ đều là nông dân. Do chiến tranh liên miên nhiều năm, cuộc sống gia đình vô cùng khó khăn. Một hôm, Tử Lộ từ ngoài về, nghe thấy cha mẹ nói chuyện trong nhà: “Sống hơn nửa đời người rồi, đừng nói cá thịt, chỉ cần được ăn no một bữa cơm gạo là mãn nguyện lắm rồi!” Tử Lộ nghe vậy, trong lòng thấy vô cùng hổ thẹn. Ông thầm quyết tâm: “Nhất định phải cho cha mẹ được ăn cơm gạo, không thể để cha mẹ chịu thiệt thòi nữa!”",
        questions: ["子路从外面回来的时候，听到父母说什么？他有什么想法？", "请用重点词语复述故事：满足、惭愧、暗下决心"]
      },
      {
        zh: "子路打听到百里之外有个有钱人，家里缺干活儿的人，决定去试一试。那家主人见他身体结实，就留下了他。子路干起活来十分勤奋，主人很喜欢这个小伙子。半年后，当子路要回家时，发现主人给的银子比他应该得到的多了许多，子路老老实实地告诉了主人。主人笑着说：“孩子，工钱没算错，你做事勤快，这是我给你加的奖金。”",
        vi: "Tử Lộ dò hỏi được rằng cách trăm dặm có một nhà giàu đang thiếu người làm, bèn quyết định đi thử. Chủ nhà thấy anh khỏe mạnh rắn rỏi liền giữ anh lại. Tử Lộ làm việc rất chăm chỉ, chủ nhà rất quý chàng trai này. Nửa năm sau, khi Tử Lộ sắp về nhà, anh phát hiện số bạc chủ nhà trả nhiều hơn số mình đáng được nhận rất nhiều, liền thật thà nói với chủ nhà. Chủ nhà cười nói: “Con à, tiền công không tính nhầm đâu, con làm việc siêng năng, đây là tiền thưởng ta thêm cho con.”",
        questions: ["子路干活儿的那家主人为什么多给他钱？", "请用重点词语复述故事：打听、主人、勤奋、老实"]
      },
      {
        zh: "谢过主人，子路高兴地上路了。路过镇上，他买了一袋米、一块肉、两条鱼，背在后背上。天气非常寒冷，雪地很滑，子路不小心滑了一下，背上的米袋差点儿被甩出去。他顶着大雪往前走，扶着米袋的双手冻得不行，就停下来暖暖，再继续赶路。终于到家了，见到父母，子路把给他们买的东西及剩下的工钱都交给了他们。一家人高高兴兴地生火做饭，饱饱地吃了顿团圆饭。",
        vi: "Cảm ơn chủ nhà xong, Tử Lộ vui vẻ lên đường. Đi qua thị trấn, anh mua một bao gạo, một miếng thịt, hai con cá, cõng trên lưng. Trời rét buốt, đường tuyết rất trơn, Tử Lộ không cẩn thận trượt một cái, bao gạo trên lưng suýt văng ra ngoài. Anh đội tuyết lớn tiến về phía trước, hai tay đỡ bao gạo lạnh cóng không chịu nổi, bèn dừng lại sưởi một chút rồi lại tiếp tục lên đường. Cuối cùng cũng về đến nhà, gặp cha mẹ, Tử Lộ trao hết đồ mua cho cha mẹ cùng số tiền công còn lại. Cả nhà vui vẻ nhóm lửa nấu cơm, ăn một bữa cơm đoàn viên no nê.",
        questions: ["子路回家的时候，买了什么东西？回家的路上发生了什么？", "请用重点词语复述故事：背、滑、顶、扶、……得不行"]
      },
      {
        zh: "后来子路的父母去世了，他也南下到了楚国。楚国国君觉得他很有本领，是个人才，就留他做了官，并给他很优厚的待遇。但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说：多么希望父母能和我一起过好日子！我现在有了一点儿成就，可他们已经不在了，即使再想背米百里去孝敬双亲，也不可能了。",
        vi: "Về sau cha mẹ Tử Lộ qua đời, ông cũng xuống phía nam đến nước Sở. Vua nước Sở thấy ông rất có bản lĩnh, là người tài, liền giữ ông lại làm quan và cho ông đãi ngộ rất hậu. Nhưng ông không hề vì điều kiện vật chất tốt mà thấy vui mừng, ngược lại thường thành khẩn nói: Ước gì cha mẹ được cùng ta sống những ngày tốt đẹp! Nay ta đã có chút thành tựu, nhưng cha mẹ đã không còn nữa, dù có muốn cõng gạo trăm dặm để hiếu kính song thân cũng không thể được nữa rồi.",
        questions: ["父母去世后，子路去哪儿了？去做什么？", "这时候他的经济情况怎么样？心情怎么样？"]
      },
      {
        zh: "中国古代有句话叫“百善孝为先”，意思是说，孝顺父母是各种美德中占第一位的。子路为了让父母吃到较好的食物，不怕辛苦，这种做法确实值得我们学习。",
        vi: "Trung Quốc xưa có câu “trăm điều thiện, hiếu đứng đầu”, ý nói hiếu thuận với cha mẹ chiếm vị trí số một trong mọi đức tính tốt. Tử Lộ vì muốn cha mẹ được ăn những món ngon hơn mà không ngại vất vả, cách làm ấy thật đáng để chúng ta học tập.",
        questions: ["在你的文化背景中有没有“百善孝为先”这样的说法？", "说一说你对“孝”的看法。"]
      }
    ],
    notes: [
      "子路 (Zǐlù): Tử Lộ, học trò của 孔子 (Khổng Tử). 春秋时期: thời Xuân Thu. 楚国: nước Sở.",
      "百善孝为先: trăm điều thiện, chữ hiếu đứng đầu."
    ]
  },
  grammar: [
    {
      word: "满足 / 满意",
      title: "Phân biệt 满足 / 满意",
      usages: [
        {
          label: "满足",
          explain: "Thấy đủ, không có yêu cầu gì thêm (về số lượng). Có thể đi với: 满足要求/条件/愿望/需要.",
          examples: ["只要能吃饱，我就满足了。"]
        },
        {
          label: "满意",
          explain: "Nhấn mạnh sự phù hợp với ý muốn (mãn nguyện, hài lòng). Có thể làm định ngữ: 满意的工作.",
          examples: ["爸妈对我的成绩非常满意。"]
        }
      ],
      note: "Cả hai đều là động từ diễn tả cảm thấy đầy đủ/nguyện vọng được thực hiện. Nhưng 满足 nhấn mạnh \"đủ rồi, không đòi hỏi thêm\"; 满意 nhấn mạnh \"đúng như ý, hài lòng với chất lượng\"."
    },
    {
      word: "反而",
      title: "Phó từ \"ngược lại\"",
      usages: [
        {
          label: "反而",
          explain: "Phó từ nối giữa hai vế câu, biểu thị kết quả ngược lại với dự đoán ban đầu.",
          examples: ["他并没有感到高兴，反而常常诚恳地说想念父母。"]
        }
      ],
      note: "反而 luôn xuất hiện ở vế câu thứ hai, sau một vế nêu điều kiện/kỳ vọng thông thường, để nhấn mạnh kết quả trái ngược hoàn toàn với những gì người nghe mong đợi."
    },
    {
      word: "…得+不行 / 得很 / 得不得了",
      title: "Biểu thị mức độ",
      usages: [
        {
          label: "…得+不行",
          explain: "",
          examples: ["扶着米袋的双手冻得不行。"]
        },
        {
          label: "…得+很",
          explain: "",
          examples: ["他心里烦得很。"]
        },
        {
          label: "…得+不得了",
          explain: "",
          examples: ["孩子们高兴得不得了！"]
        }
      ],
      note: "Cả ba cấu trúc gần như đồng nghĩa, dùng để nhấn mạnh mức độ cực điểm của một trạng thái/cảm xúc. Trong bài tập này, đáp án chấp nhận cả 3 dạng."
    }
  ],
  wordChoice: [
    {
      sentence: "国王很喜欢他，就留他做了___。",
      options: ["背", "滑", "甩", "顶", "扶", "占", "官"],
      answer: "官"
    },
    {
      sentence: "路上很多水，他不小心___了一下。",
      options: ["背", "滑", "甩", "顶", "扶", "占", "官"],
      answer: "滑"
    },
    {
      sentence: "老人___着墙慢慢地走着，看起来很不舒服。",
      options: ["背", "滑", "甩", "顶", "扶", "占", "官"],
      answer: "扶"
    },
    {
      sentence: "他的成绩在全公司___第一位。",
      options: ["背", "滑", "甩", "顶", "扶", "占", "官"],
      answer: "占"
    },
    {
      sentence: "他一个人___着风雪走回了家。",
      options: ["背", "滑", "甩", "顶", "扶", "占", "官"],
      answer: "顶"
    },
    {
      sentence: "路不好走，他滑了一下，背上的东西差点儿被___出去。",
      options: ["背", "滑", "甩", "顶", "扶", "占", "官"],
      answer: "甩"
    },
    {
      sentence: "我对新公司的工作条件感到很___。",
      options: ["满足", "满意"],
      answer: "满意"
    },
    {
      sentence: "父母总是会想办法___孩子的要求。",
      options: ["满足", "满意"],
      answer: "满足"
    },
    {
      sentence: "我跟爸爸妈妈说好了，会在10点___回家。",
      options: ["以前", "从前"],
      answer: "以前"
    },
    {
      sentence: "这是在警察局，你给我___点！别乱动！",
      options: ["诚实", "老实"],
      answer: "老实"
    },
    {
      sentence: "他没有接受那份优厚的待遇，___辞职了。",
      options: ["反而", "而且"],
      answer: "反而"
    },
    {
      sentence: "邻居家有一条___高强的小狗，能看门，能送报，还能买菜。",
      options: ["扶", "占", "从前", "本领", "决心", "委屈"],
      answer: "本领"
    }
  ],
  practice: [
    {
      id: "listen",
      icon: "🎧",
      title: "Phần 1 · Nghe - Nối âm với chữ Hán",
      points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      kind: "listen-pick",
      items: [
        {
          vocabId: 9,
          distractors: [10, 15, 30]
        },
        {
          vocabId: 11,
          distractors: [5, 2, 37]
        },
        {
          vocabId: 12,
          distractors: [13, 26, 9]
        },
        {
          vocabId: 13,
          distractors: [12, 26, 30]
        },
        {
          vocabId: 17,
          distractors: [18, 19, 20]
        },
        {
          vocabId: 20,
          distractors: [17, 19, 21]
        },
        {
          vocabId: 21,
          distractors: [17, 20, 18]
        },
        {
          vocabId: 30,
          distractors: [9, 15, 13]
        }
      ]
    },
    {
      id: "pinyin",
      icon: "✍️",
      title: "Phần 2 · Điền phiên âm (pinyin) cho chữ Hán",
      points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      kind: "pinyin",
      vocabIds: [2, 7, 10, 14, 23, 26, 35, 40]
    },
    {
      id: "order",
      icon: "🧩",
      title: "Phần 3 · Sắp xếp câu (chữ Hán)",
      points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      kind: "order",
      items: [
        {
          tokens: ["子路的父母", "都是", "农民", "。"],
          answer: "子路的父母都是农民。",
          vi: "Cha mẹ Tử Lộ đều là nông dân."
        },
        {
          tokens: ["子路", "听了", "心里", "觉得", "十分", "惭愧", "。"],
          answer: "子路听了心里觉得十分惭愧。",
          vi: "Tử Lộ nghe xong trong lòng cảm thấy vô cùng hổ thẹn."
        },
        {
          tokens: ["他", "顶着", "大雪", "往前走", "。"],
          answer: "他顶着大雪往前走。",
          vi: "Anh ấy đội tuyết lớn đi về phía trước."
        },
        {
          tokens: ["孝顺父母", "是", "各种美德中", "占", "第一位的", "。"],
          answer: "孝顺父母是各种美德中占第一位的。",
          vi: "Hiếu thảo với cha mẹ đứng vị trí số một trong các đức tính tốt đẹp."
        },
        {
          tokens: ["子路", "决心", "要", "让父母", "吃上", "米饭", "。"],
          answer: "子路决心要让父母吃上米饭。",
          vi: "Tử Lộ quyết tâm phải để cha mẹ được ăn cơm."
        }
      ]
    },
    {
      id: "fill-1",
      icon: "💬",
      title: "Phần 4 · Hoàn thành hội thoại",
      points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 1) · Hoàn cảnh nghèo khó của gia đình Tử Lộ",
          text: "从前，大概在距今两千五百多年前的春秋{{d1}}，有一个人叫子路，他是孔子最年长的学生。{{d2}}至今的“百里背米”讲的就是他{{d3}}父母的故事。子路的父母都是{{d4}}。由于连年的{{d5}}，家里生活非常困难。一天，子路从外面回来，听到父母在屋里说话：“活了大半辈子了，别说鱼肉，只要能饱饱地吃上一顿米饭，也就{{d6}}啦！”子路听了，心里觉得十分{{d7}}。他暗下{{d8}}：“一定要让父母吃上米饭，不能再{{d9}}他们了！”"
        },
        {
          title: "课文 1 (đoạn 2) · Tử Lộ đi làm thuê",
          text: "子路{{d10}}到百里之外有个有钱人，家里缺干活儿的人，决定去试一试。那家主人见他身体结实，就留下了他。子路干起活来十分勤奋，主人很喜欢这个小伙子。半年后，当子路要回家时，发现主人给的银子比他应该得到的多了许多，子路老老实实地告诉了主人。"
        }
      ],
      answers: {
        d1: "时期",
        d2: "流传",
        d3: "孝敬",
        d4: "农民",
        d5: "战争",
        d6: "满足",
        d7: "惭愧",
        d8: "决心",
        d9: "委屈",
        d10: "打听"
      },
      bank: ["时期", "流传", "孝敬", "农民", "战争", "满足", "惭愧", "决心", "委屈", "打听", "结实", "勤奋", "老实"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể về hoàn cảnh gia đình và quyết tâm của Tử Lộ.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 3) · Hành trình mang gạo về nhà",
          text: "谢过主人，子路高兴地上路了。路过{{t1}}上，他买了一袋米、一块肉、两条鱼，{{t2}}在后背上。天气非常寒冷，雪地很{{t3}}，子路不小心滑了一下，背上的米袋差点儿被{{t4}}出去。他{{t5}}着大雪往前走，{{t6}}着米袋的双手冻得不行，就停下来暖暖，再继续赶路。终于到家了，见到父母，子路把给他们买的东西及剩下的工钱都交给了他们。一家人高高兴兴地生活做饭，饱饱地吃了顿{{t7}}饭。"
        },
        {
          title: "课文 1 (đoạn 4) · Làm quan nhưng vẫn tiếc nuối",
          text: "后来子路的父母{{t8}}了，他也南下到了楚国。楚国国君觉得他很有{{t9}}，是个人才，就留他做了官，并给他很优厚的待遇。但他并没有因为物质条件好而感到欢喜，反而常常{{t10}}地说：多么希望父母能和我一起过好日子！我现在有了一点儿成就，可他们已经不在了，即使再想背米百里去孝敬双亲，也不可能了。"
        }
      ],
      answers: {
        t1: "镇",
        t2: "背",
        t3: "滑",
        t4: "甩",
        t5: "顶",
        t6: "扶",
        t7: "团圆",
        t8: "去世",
        t9: "本领",
        t10: "诚恳"
      },
      bank: ["镇", "背", "滑", "甩", "顶", "扶", "团圆", "去世", "本领", "诚恳", "占", "官", "人才"]
    },
    {
      id: "zh-vi",
      icon: "🇨🇳",
      title: "Phần 6 · Dịch Trung - Việt",
      points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      kind: "translate-zh-vi",
      items: [
        {
          zh: "子路听了，心里觉得十分惭愧。",
          vi: "Tử Lộ nghe xong, trong lòng cảm thấy vô cùng hổ thẹn.",
          keywords: ["nghe xong", "hổ thẹn", "trong lòng"]
        },
        {
          zh: "他顶着大雪往前走，扶着米袋的双手冻得不行。",
          vi: "Anh ấy đội tuyết lớn đi về phía trước, đôi tay đỡ bao gạo lạnh cóng vô cùng.",
          keywords: ["đội tuyết", "đi về phía trước", "đỡ", "lạnh cóng"]
        },
        {
          zh: "孝顺父母是各种美德中占第一位的。",
          vi: "Hiếu thảo với cha mẹ đứng vị trí số một trong các đức tính tốt đẹp.",
          keywords: ["hiếu thảo", "cha mẹ", "số một", "đức tính"]
        },
        {
          zh: "他并没有因为物质条件好而感到欢喜，反而常常诚恳地说。",
          vi: "Anh ấy không hề vì điều kiện vật chất tốt mà cảm thấy vui mừng, ngược lại thường thành khẩn nói.",
          keywords: ["vật chất", "vui mừng", "ngược lại", "thành khẩn"]
        },
        {
          zh: "多么希望父母能和我一起过好日子！",
          vi: "Giá mà cha mẹ có thể cùng tôi sống những ngày tốt đẹp!",
          keywords: ["giá mà", "cha mẹ", "ngày tốt đẹp"]
        }
      ]
    },
    {
      id: "vi-zh",
      icon: "🇻🇳",
      title: "Phần 7 · Dịch Việt - Trung",
      points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng - ngữ pháp đã học trong bài.",
      kind: "translate-vi-zh",
      items: [
        {
          vi: "Anh ấy thà chịu ấm ức cũng không muốn nói ra sự thật.",
          answers: ["他宁愿委屈自己也不愿意说出真相。", "他宁愿委屈自己也不想说出真相。"]
        },
        {
          vi: "Cha mẹ tôi đều là nông dân.",
          answers: ["我的父母都是农民。", "我父母都是农民。"]
        },
        {
          vi: "Cô ấy dò hỏi được rất nhiều tin tức hữu ích.",
          answers: ["她打听到了很多有用的消息。", "她打听到很多有用的消息。"]
        },
        {
          vi: "Anh ấy làm việc rất cần cù, lại thật thà.",
          answers: ["他干活很勤奋，人又老实。", "他工作很勤奋，人也很老实。"]
        },
        {
          vi: "Ngược lại, anh ấy càng thành khẩn hơn.",
          answers: ["他反而更诚恳了。"]
        }
      ]
    },
    {
      id: "true-false",
      icon: "✅",
      title: "Phần 8 · Đúng / Sai",
      points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      kind: "true-false",
      items: [
        {
          q: "子路是孔子最年长的学生。",
          a: true
        },
        {
          q: "子路的父母生活很富裕。",
          a: false
        },
        {
          q: "子路打听到百里之外有个有钱人需要干活儿的人。",
          a: true
        },
        {
          q: "主人给子路的银子比应得的少。",
          a: false
        },
        {
          q: "子路把主人多给的银子偷偷留下了。",
          a: false
        },
        {
          q: "子路回家路上，米袋差点儿被甩出去。",
          a: true
        },
        {
          q: "子路做官后过上了富裕的生活，感到非常满足开心。",
          a: false
        },
        {
          q: "“百善孝为先”的意思是孝顺父母是各种美德中最重要的。",
          a: true
        }
      ]
    },
    {
      id: "dictation",
      icon: "🎙️",
      title: "Phần 9 · Nghe - Viết (chính tả)",
      points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      kind: "dictation",
      items: ["子路听了，心里觉得十分惭愧。", "他顶着大雪往前走。", "孝顺父母是各种美德中占第一位的。", "多么希望父母能和我一起过好日子！", "一家人高高兴兴地吃了顿团圆饭。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“从《子路背米》想到的”为题写一段话。 (Hãy viết một đoạn văn về những gì bạn nghĩ đến sau khi đọc câu chuyện \"Tử Lộ vác gạo\".)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 4 (满足/满意, 反而, …得+不行).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["满足", "满意", "反而", "不行", "不得了"],
      minGrammar: 2,
      sample: "读完《子路背米》的故事，我心里久久不能平静。子路的父母只是农民，生活并不富裕，只要能吃上一顿米饭就已经满足了，可子路却觉得十分惭愧，暗下决心一定要让父母吃好穿好。这种孝顺让我很感动。后来子路做了官，有了不错的待遇，物质条件变好了，他反而更加怀念能孝敬父母的日子，因为父母已经去世，即使他现在多么诚恳地想尽孝，也来不及了。这个故事至今仍然流传，提醒我们：孝顺父母不能等，父母还在的时候，我们再忙再累也要抽时间陪伴他们，不要等到子欲养而亲不待的时候，才后悔得不行。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 满足 / 满意",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (满足 so với 满意).",
      kind: "grammar-fill",
      grammarWord: "满足 / 满意",
      options: ["满意", "满足"],
      items: [
        {
          q: "我对新公司的工作条件感到很___。",
          answers: ["满意"]
        },
        {
          q: "父母总是会想办法___孩子的要求。",
          answers: ["满足"]
        },
        {
          q: "听到这个消息，他___地笑了。",
          answers: ["满意"]
        },
        {
          q: "你不能仅仅通过考试就___了，要努力取得最好的成绩。",
          answers: ["满足", "满意"]
        },
        {
          q: "只要能吃饱，我就___了。",
          answers: ["满足"]
        },
        {
          q: "老师说她对我这次的作业非常___。",
          answers: ["满意"]
        },
        {
          q: "这个我不想要，它不能___我们的需要。",
          answers: ["满足"]
        },
        {
          q: "他找到了一份___的工作。",
          answers: ["满意"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 反而",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (反而 - phó từ \"ngược lại\").",
      kind: "grammar-fill",
      grammarWord: "反而",
      items: [
        {
          q: "他没有接受那份优厚的待遇，___辞职了。",
          answers: ["反而"]
        },
        {
          q: "这样不但不能提高他们的阅读能力，___有可能降低他们的阅读兴趣。",
          answers: ["反而"]
        },
        {
          q: "大城市的生活虽然很精彩，但一辈子生活在农村的父母___会不适应。",
          answers: ["反而"]
        },
        {
          q: "他并没有因为自己生活好了而感到高兴，___常常诚恳地说想念父母。",
          answers: ["反而"]
        },
        {
          q: "他不但不孝顺父母，___经常惹他们生气。",
          answers: ["反而"]
        },
        {
          q: "他是个很有本领的人，可是，___一直没有找到好工作。",
          answers: ["反而"]
        },
        {
          q: "吃了药以后，他的病___更严重了。",
          answers: ["反而"]
        },
        {
          q: "我原以为她会生气，没想到她___笑了。",
          answers: ["反而"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: …得+不行 / 得很 / 得不得了",
      points: 5,
      subtitle: "Điền từ vào chỗ trống (…得+不行 / 得很 / 得不得了 - biểu thị mức độ).",
      kind: "grammar-fill",
      grammarWord: "…得+不行 / 得很 / 得不得了",
      items: [
        {
          q: "扶着米袋的双手冻___。",
          answers: ["得不行", "得很", "得不得了"]
        },
        {
          q: "这个地方这么热闹，孩子们高兴___！",
          answers: ["得不得了", "得不行", "得很"]
        },
        {
          q: "他心里烦___，自言自语地抱怨。",
          answers: ["得很", "得不行", "得不得了"]
        },
        {
          q: "这几天作业太多了，我累___。",
          answers: ["得不行", "得不得了", "得很"]
        },
        {
          q: "今天天气热___，大家都不想出门。",
          answers: ["得不行", "得很", "得不得了"]
        },
        {
          q: "听到这个好消息，她激动___。",
          answers: ["得不行", "得不得了", "得很"]
        },
        {
          q: "这道题难___，没有人能做出来。",
          answers: ["得不行", "得很", "得不得了"]
        },
        {
          q: "房间里乱___，到处都是衣服和书。",
          answers: ["得不行", "得很", "得不得了"]
        }
      ]
    }
  ]
};
