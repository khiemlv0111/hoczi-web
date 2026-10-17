import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第3课 人生有选择，一切可改变 (Life Is Full of Choices and Everything Can Be Changed)
// Nguồn: slide bài 3 và bộ bài tập "HSK5 tiêu chuẩn bài 3" trong hsk5/docs.
export const lesson03: Lesson = {
  level: "hsk5",
  no: 3,
  slug: "bai-3",
  zh: "人生有选择，一切可改变",
  pinyin: "Rénshēng yǒu xuǎnzé, yíqiè kě gǎibiàn",
  vi: "Đời có lựa chọn, mọi thứ đều có thể thay đổi",
  en: "Life Is Full of Choices and Everything Can Be Changed",
  topic: "爱好与生活 · Sở thích và cuộc sống",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 待遇、疯、辞职、驾驶、舒适、随时、击、未来、时代…",
    "Nắm cách kết hợp của các từ: 轮流、盼望、稳定、平静、发愁、拥抱、撞、漏、顿、道.",
    "Hiểu và dùng được 各自、勿、包括、时刻; phân biệt 舒适 và 舒服.",
    "Đọc hiểu câu chuyện Địch Phong bỏ việc ổn định, tự học lái thuyền buồm đưa cả nhà ra biển.",
    "Thảo luận về quan hệ giữa sở thích với công việc, gia đình và viết đoạn văn theo chủ đề.",
    "Nắm các từ mở rộng chủ đề 天气 (thời tiết) và 生产 (sản xuất)."
  ],
  warmUp: [
    {
      zh: "下列图片都是什么天气？晴天、阴天、多云、雷阵雨、雨转晴……",
      vi: "Đây là những kiểu thời tiết gì? Trời nắng, trời âm u, nhiều mây, mưa rào có sấm, mưa chuyển nắng…"
    },
    {
      zh: "你知道哪些交通工具？",
      vi: "Bạn biết những phương tiện giao thông nào?"
    },
    {
      zh: "你有什么爱好？如果你的爱好影响了你的正常生活，你怎么办？",
      vi: "Bạn có sở thích gì? Nếu sở thích ảnh hưởng đến cuộc sống bình thường, bạn sẽ làm thế nào?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "稳定",
      py: "wěndìng",
      pos: "tt.",
      meaning: "ổn định",
      example: "现在大家都要考公务员，因为工作稳定。",
      exampleVi: "Bây giờ ai cũng muốn thi công chức, vì công việc ổn định."
    },
    {
      id: 2,
      han: "帆船",
      py: "fānchuán",
      pos: "dt.",
      meaning: "thuyền buồm",
      example: "通过电视，翟峰迷上了帆船。",
      exampleVi: "Qua tivi, Trạch Phong đã mê thuyền buồm."
    },
    {
      id: 3,
      han: "艘",
      py: "sōu",
      pos: "lt.",
      meaning: "chiếc (tàu, thuyền)",
      example: "只要有一艘船，就能航行在无边无际的海上。",
      exampleVi: "Chỉ cần có một chiếc thuyền, là có thể đi khắp đại dương bao la."
    },
    {
      id: 4,
      han: "航行",
      py: "hángxíng",
      pos: "đg.",
      meaning: "đi thuyền, hành trình trên biển",
      example: "就能航行在无边无际的海上。",
      exampleVi: "Là có thể đi khắp đại dương bao la."
    },
    {
      id: 5,
      han: "二手",
      py: "èrshǒu",
      pos: "tt.",
      meaning: "cũ, đã qua sử dụng",
      example: "他们卖房卖车，买下了一艘二手船。",
      exampleVi: "Họ bán nhà bán xe, mua một chiếc thuyền cũ."
    },
    {
      id: 6,
      han: "彩虹",
      py: "cǎihóng",
      pos: "dt.",
      meaning: "cầu vồng",
      example: "翟峰叫它“彩虹号”。",
      exampleVi: "Trạch Phong đặt tên nó là \"Cầu Vồng\"."
    },
    {
      id: 7,
      han: "舒适",
      py: "shūshì",
      pos: "tt.",
      meaning: "thoải mái (khách quan, văn viết)",
      example: "我们都需要一个轻松舒适的生活环境。",
      exampleVi: "Chúng ta đều cần một môi trường sống thoải mái, thư giãn."
    },
    {
      id: 8,
      han: "辞职",
      py: "cízhí",
      pos: "đg.",
      meaning: "từ chức, nghỉ việc",
      example: "你会因为什么辞职？",
      exampleVi: "Bạn sẽ vì điều gì mà nghỉ việc?"
    },
    {
      id: 9,
      han: "待遇",
      py: "dàiyù",
      pos: "dt.",
      meaning: "đãi ngộ, lương thưởng",
      example: "你更看重工作的待遇还是发展前景？",
      exampleVi: "Bạn coi trọng đãi ngộ công việc hơn hay triển vọng phát triển hơn?"
    },
    {
      id: 10,
      han: "发愁",
      py: "fāchóu",
      pos: "đg.",
      meaning: "lo lắng, lo âu",
      example: "他还在为工作上的事发愁。",
      exampleVi: "Anh ấy vẫn đang lo lắng về chuyện công việc."
    },
    {
      id: 11,
      han: "平静",
      py: "píngjìng",
      pos: "tt.",
      meaning: "yên tĩnh, bình lặng",
      example: "风雨过后，海面很平静。",
      exampleVi: "Sau mưa gió, mặt biển rất bình lặng."
    },
    {
      id: 12,
      han: "积蓄",
      py: "jīxù",
      pos: "dt./đg.",
      meaning: "tiền tiết kiệm; tiết kiệm",
      example: "他一直花钱大手大脚，没什么积蓄。",
      exampleVi: "Anh ấy tiêu tiền lúc nào cũng phóng khoáng, chẳng có tiền tiết kiệm gì."
    },
    {
      id: 13,
      han: "包括",
      py: "bāokuò",
      pos: "đg.",
      meaning: "bao gồm",
      example: "这个学习小组包括我在内，一共4人。",
      exampleVi: "Nhóm học này bao gồm cả tôi, tổng cộng 4 người."
    },
    {
      id: 14,
      han: "驾驶",
      py: "jiàshǐ",
      pos: "đg.",
      meaning: "lái (xe, tàu, thuyền)",
      example: "我学驾驶并且考到了驾驶执照。",
      exampleVi: "Tôi học lái xe và đã thi được bằng lái."
    },
    {
      id: 15,
      han: "撞",
      py: "zhuàng",
      pos: "đg.",
      meaning: "va, đâm",
      example: "他觉得帆船能带他撞开“世界之门”。",
      exampleVi: "Anh ấy cảm thấy thuyền buồm có thể đưa anh mở toang \"cánh cửa thế giới\"."
    },
    {
      id: 16,
      han: "疯",
      py: "fēng",
      pos: "đg.",
      meaning: "điên, khùng, phát cuồng",
      example: "所有人都觉得，翟峰“疯了”。",
      exampleVi: "Mọi người đều cho rằng Trạch Phong \"đã phát điên\"."
    },
    {
      id: 17,
      han: "钓",
      py: "diào",
      pos: "đg.",
      meaning: "câu (cá)",
      example: "下午海面平静时，他们就下海游泳或者钓鱼。",
      exampleVi: "Buổi chiều khi biển lặng, họ xuống biển bơi hoặc câu cá."
    },
    {
      id: 18,
      han: "漏",
      py: "lòu",
      pos: "đg.",
      meaning: "rò rỉ, dột",
      example: "航行的过程中，可能出现船身漏水的情况。",
      exampleVi: "Trong quá trình đi thuyền, có thể xảy ra tình trạng thân thuyền bị rò nước."
    },
    {
      id: 19,
      han: "勿",
      py: "wù",
      pos: "p.",
      meaning: "đừng, chớ (văn viết) ≈ 不要",
      example: "非工作人员，请勿入内。",
      exampleVi: "Người không có nhiệm vụ, xin đừng vào."
    },
    {
      id: 20,
      han: "击",
      py: "jī",
      pos: "đg.",
      meaning: "đánh, đấm, kích",
      example: "小船随时有可能被下一道闪电击到。",
      exampleVi: "Con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia sét tiếp theo đánh trúng."
    },
    {
      id: 21,
      han: "顿",
      py: "dùn",
      pos: "lt.",
      meaning: "bữa (ăn)",
      example: "妻子会给全家人做一顿美味的海鲜。",
      exampleVi: "Vợ sẽ nấu cho cả nhà một bữa hải sản ngon lành."
    },
    {
      id: 22,
      han: "时刻",
      py: "shíkè",
      pos: "dt./p.",
      meaning: "thời khắc; luôn luôn, mọi lúc",
      example: "美好的时刻过去后是一个个紧张的夜晚。",
      exampleVi: "Sau những thời khắc tươi đẹp là những đêm căng thẳng."
    },
    {
      id: 23,
      han: "各自",
      py: "gèzì",
      pos: "đại từ",
      meaning: "mỗi người, mỗi bên riêng",
      example: "以前陆地上的夜晚，他们在各自的房间。",
      exampleVi: "Trước đây những đêm ở trên đất liền, họ ở trong phòng riêng của mỗi người."
    },
    {
      id: 24,
      han: "盼望",
      py: "pànwàng",
      pos: "đg.",
      meaning: "mong mỏi, trông đợi",
      example: "这样的生活，是翟峰盼望已久的。",
      exampleVi: "Cuộc sống như vậy, là điều Trạch Phong mong mỏi từ lâu."
    },
    {
      id: 25,
      han: "轮流",
      py: "lúnliú",
      pos: "đg.",
      meaning: "luân phiên, thay phiên",
      example: "白天，翟峰和妻子轮流驾船。",
      exampleVi: "Ban ngày, Trạch Phong và vợ thay phiên nhau lái thuyền."
    },
    {
      id: 26,
      han: "海鲜",
      py: "hǎixiān",
      pos: "dt.",
      meaning: "hải sản",
      example: "妻子会给全家人做一顿美味的海鲜。",
      exampleVi: "Vợ sẽ nấu cho cả nhà một bữa hải sản ngon lành."
    },
    {
      id: 27,
      han: "傍晚",
      py: "bàngwǎn",
      pos: "dt.",
      meaning: "lúc chạng vạng, xẩm tối",
      example: "傍晚是一家人最舒适的时候。",
      exampleVi: "Buổi chiều tà là lúc thoải mái nhất của cả nhà."
    },
    {
      id: 28,
      han: "陆地",
      py: "lùdì",
      pos: "dt.",
      meaning: "đất liền",
      example: "以前陆地上的夜晚，他们在各自的房间。",
      exampleVi: "Trước đây những đêm ở trên đất liền, họ ở trong phòng riêng của mỗi người."
    },
    {
      id: 29,
      han: "着火",
      py: "zháohuǒ",
      pos: "đg.",
      meaning: "bốc cháy, cháy",
      example: "翟峰一家经历了船身着火、漏水等险情。",
      exampleVi: "Gia đình Trạch Phong đã trải qua các tình huống nguy hiểm như thân thuyền bốc cháy, rò nước."
    },
    {
      id: 30,
      han: "未来",
      py: "wèilái",
      pos: "dt.",
      meaning: "tương lai",
      example: "航海是他人生道路上一段长长的台阶，通向他想要的未来。",
      exampleVi: "Đi biển là một bậc thang dài trên con đường đời, dẫn đến tương lai anh mong muốn."
    },
    {
      id: 31,
      han: "随时",
      py: "suíshí",
      pos: "dt./p.",
      meaning: "bất cứ lúc nào",
      example: "小船随时有可能被下一道闪电击到。",
      exampleVi: "Con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia sét tiếp theo đánh trúng."
    },
    {
      id: 32,
      han: "人生",
      py: "rénshēng",
      pos: "dt.",
      meaning: "cuộc đời, nhân sinh",
      example: "人生有选择，一切可改变。",
      exampleVi: "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi."
    },
    {
      id: 33,
      han: "工人",
      py: "gōngrén",
      pos: "dt.",
      meaning: "công nhân",
      example: "翟峰和妻子都是铁路工人。",
      exampleVi: "Trạch Phong và vợ đều là công nhân đường sắt."
    },
    {
      id: 34,
      han: "太太",
      py: "tàitai",
      pos: "dt.",
      meaning: "vợ, bà (cách gọi phụ nữ đã kết hôn)",
      example: "我和太太想要看看这个时代、这个世界到底是什么样子。",
      exampleVi: "Tôi và vợ tôi muốn xem thời đại này, thế giới này rốt cuộc như thế nào."
    },
    {
      id: 35,
      han: "拥抱",
      py: "yōngbào",
      pos: "đg.",
      meaning: "ôm",
      example: "一家三口只能紧紧拥抱在一起。",
      exampleVi: "Ba người trong nhà chỉ có thể ôm chặt lấy nhau."
    },
    {
      id: 36,
      han: "干活儿",
      py: "gànhuór",
      pos: "đg.",
      meaning: "làm việc (khẩu ngữ)",
      example: "干完活儿，一家人坐在一起看看电影。",
      exampleVi: "Làm việc xong, cả nhà ngồi lại với nhau xem phim."
    },
    {
      id: 37,
      han: "闪电",
      py: "shǎndiàn",
      pos: "dt.",
      meaning: "tia chớp, sét",
      example: "小船随时有可能被下一道闪电击到。",
      exampleVi: "Con thuyền nhỏ bất cứ lúc nào cũng có thể bị tia sét tiếp theo đánh trúng."
    },
    {
      id: 38,
      han: "海里",
      py: "hǎilǐ",
      pos: "lt.",
      meaning: "hải lý",
      example: "翟峰一家航行了4000多海里。",
      exampleVi: "Gia đình Trạch Phong đã đi hơn 4000 hải lý."
    },
    {
      id: 39,
      han: "台阶",
      py: "táijiē",
      pos: "dt.",
      meaning: "bậc thềm, bậc thang",
      example: "航海就是他人生道路上一段长长的台阶。",
      exampleVi: "Đi biển chính là một bậc thang dài trên con đường đời của anh."
    },
    {
      id: 40,
      han: "时代",
      py: "shídài",
      pos: "dt.",
      meaning: "thời đại",
      example: "我和太太想要看看这个时代到底是什么样子。",
      exampleVi: "Tôi và vợ tôi muốn xem thời đại này rốt cuộc như thế nào."
    },
    {
      id: 41,
      han: "晴天",
      py: "qíngtiān",
      pos: "dt.",
      meaning: "trời nắng, trời quang",
      example: "明天是晴天，我们去公园玩儿吧。",
      exampleVi: "Ngày mai trời nắng, chúng ta đi công viên chơi nhé.",
      group: "extended"
    },
    {
      id: 42,
      han: "阴天",
      py: "yīntiān",
      pos: "dt.",
      meaning: "trời âm u",
      example: "阴天的时候，我总觉得心情不太好。",
      exampleVi: "Vào những ngày trời âm u, tôi luôn cảm thấy tâm trạng không tốt lắm.",
      group: "extended"
    },
    {
      id: 43,
      han: "多云",
      py: "duōyún",
      pos: "tt.",
      meaning: "nhiều mây",
      example: "今天多云，偶尔有阳光。",
      exampleVi: "Hôm nay nhiều mây, thỉnh thoảng có nắng.",
      group: "extended"
    },
    {
      id: 44,
      han: "雷阵雨",
      py: "léizhènyǔ",
      pos: "dt.",
      meaning: "mưa rào kèm sấm sét",
      example: "下午可能有雷阵雨，出门记得带伞。",
      exampleVi: "Buổi chiều có thể có mưa rào kèm sấm sét, ra ngoài nhớ mang ô.",
      group: "extended"
    },
    {
      id: 45,
      han: "雨转晴",
      py: "yǔ zhuǎn qíng",
      pos: "cụm từ",
      meaning: "mưa chuyển nắng",
      example: "天气预报说明天雨转晴。",
      exampleVi: "Dự báo thời tiết nói ngày mai mưa chuyển nắng.",
      group: "extended"
    },
    {
      id: 46,
      han: "地铁",
      py: "dìtiě",
      pos: "dt.",
      meaning: "tàu điện ngầm",
      example: "上班高峰期，地铁里人特别多。",
      exampleVi: "Giờ cao điểm đi làm, trong tàu điện ngầm rất đông người.",
      group: "extended"
    },
    {
      id: 47,
      han: "公交车",
      py: "gōngjiāochē",
      pos: "dt.",
      meaning: "xe buýt",
      example: "我每天坐公交车上班。",
      exampleVi: "Mỗi ngày tôi đi xe buýt đi làm.",
      group: "extended"
    },
    {
      id: 48,
      han: "摩托车",
      py: "mótuōchē",
      pos: "dt.",
      meaning: "xe máy",
      example: "他骑摩托车上班比较方便。",
      exampleVi: "Anh ấy đi xe máy đi làm khá tiện.",
      group: "extended"
    },
    {
      id: 49,
      han: "自行车",
      py: "zìxíngchē",
      pos: "dt.",
      meaning: "xe đạp",
      example: "周末我喜欢骑自行车去公园。",
      exampleVi: "Cuối tuần tôi thích đạp xe đạp đến công viên.",
      group: "extended"
    },
    {
      id: 50,
      han: "轮船",
      py: "lúnchuán",
      pos: "dt.",
      meaning: "tàu thủy",
      example: "我们坐轮船去了那个小岛。",
      exampleVi: "Chúng tôi đi tàu thủy đến hòn đảo nhỏ đó.",
      group: "extended"
    },
    {
      id: 51,
      han: "私家车",
      py: "sījiāchē",
      pos: "dt.",
      meaning: "xe riêng, xe cá nhân",
      example: "现在越来越多的人有了私家车。",
      exampleVi: "Hiện nay ngày càng nhiều người có xe riêng.",
      group: "extended"
    },
    {
      id: 52,
      han: "出租车",
      py: "chūzūchē",
      pos: "dt.",
      meaning: "taxi",
      example: "下雨了，我们打车出租车回家吧。",
      exampleVi: "Trời mưa rồi, chúng ta bắt taxi về nhà đi.",
      group: "extended"
    },
    {
      id: 53,
      han: "火车",
      py: "huǒchē",
      pos: "dt.",
      meaning: "tàu hỏa",
      example: "我们坐火车去北京旅游。",
      exampleVi: "Chúng tôi đi tàu hỏa đến Bắc Kinh du lịch.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 人生有选择，一切可改变",
    paragraphs: [
      {
        zh: "翟峰和妻子都是铁路工人，工作稳定，待遇不错。他们有房有车，从不为生活发愁。可翟峰却不想一辈子过这样平静的生活。通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。",
        vi: "Địch Phong và vợ đều là công nhân đường sắt, công việc ổn định, đãi ngộ khá tốt. Họ có nhà có xe, chưa bao giờ phải lo lắng chuyện sinh sống. Nhưng Địch Phong lại không muốn cả đời sống một cuộc sống bình lặng như vậy. Qua tivi, Địch Phong mê thuyền buồm, anh cảm thấy thuyền buồm có thể đưa anh phá tung “cánh cửa thế giới”: chỉ cần có một con thuyền là có thể đi trên biển cả mênh mông vô bờ, đến bất cứ nơi nào mình muốn.",
        questions: ["翟峰一家原来的生活怎么样？", "你觉得翟峰迷上了帆船的原因是什么？", "你觉得“撞开世界之门”是什么意思？"]
      },
      {
        zh: "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。出发前，翟峰自学了航海知识。然而，包括翟峰的父母，所有人都觉得，翟峰“疯了”。",
        vi: "Vì hai vợ chồng Địch Phong không có tiền tiết kiệm, nên họ bán nhà bán xe, mua một con thuyền cũ, Địch Phong đặt tên nó là “Cầu Vồng”. Trước khi xuất phát, Địch Phong tự học kiến thức hàng hải. Thế nhưng tất cả mọi người, kể cả cha mẹ Địch Phong, đều cho rằng Địch Phong “điên rồi”.",
        questions: ["为了驾驶帆船出海，翟峰做出了哪些决定和准备？"]
      },
      {
        zh: "2012年11月24日，辞了职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。白天，翟峰和妻子轮流驾船。女儿在船上看书、学习、画画儿。下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。该吃饭时，妻子会给全家人做一顿美味的海鲜。",
        vi: "Ngày 24 tháng 11 năm 2012, Địch Phong đã nghỉ việc cùng vợ đưa con gái đang tạm nghỉ học lần đầu tiên lái thuyền buồm ra biển. Ban ngày, hai vợ chồng thay phiên nhau lái thuyền. Con gái đọc sách, học bài, vẽ tranh trên thuyền. Buổi chiều khi mặt biển yên ả, Địch Phong cùng vợ xuống biển bơi hoặc câu cá. Đến giờ ăn, người vợ nấu cho cả nhà một bữa hải sản ngon lành.",
        questions: ["请用重点词语复述故事：辞职、轮流、平静、海鲜"]
      },
      {
        zh: "傍晚是一家人最舒适的时候。干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。这样的生活，是翟峰盼望已久的。以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。",
        vi: "Chiều tối là lúc cả nhà thoải mái nhất. Làm xong việc, cả nhà ngồi bên nhau, xem phim trên máy tính hoặc trò chuyện. Cuộc sống như vậy là điều Địch Phong mong đợi đã lâu. Trước đây, những buổi tối trên đất liền, mỗi người ở trong phòng riêng của mình, cả nhà không có nhiều sự giao lưu.",
        questions: ["航海时，什么事让翟峰一家人感到轻松、幸福？", "请用重点词语复述故事：舒适、盼望、各自"]
      },
      {
        zh: "中国有句老话，可上山，勿下海。美好的时刻过去后是一个个紧张的夜晚。一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。他们最怕雷电交加的时刻，因为小船随时有可能被下一道闪电击到，一家三口只能紧紧拥抱在一起，希望闪电快快过去。",
        vi: "Trung Quốc có câu nói xưa: có thể lên núi, chớ có xuống biển. Sau những thời khắc tươi đẹp là từng đêm căng thẳng. Suốt dọc đường, gia đình Địch Phong đã trải qua hơn mười lần gặp nguy lớn nhỏ như thân thuyền bốc cháy, rò nước. Họ sợ nhất là lúc sấm chớp đan xen, vì con thuyền nhỏ có thể bị tia chớp tiếp theo đánh trúng bất cứ lúc nào, cả nhà ba người chỉ có thể ôm chặt lấy nhau, mong tia chớp mau qua đi.",
        questions: ["他们害怕的是什么？", "你觉得“可上山，勿下海”是什么意思？"]
      },
      {
        zh: "在经历了八个月、航行了4000多海里之后，翟峰一家终于回到了家。翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。“我和太太想要看看这个时代、这个世界到底是什么样子。人生有选择，一切可改变。”下一站，他们想去澳洲和新西兰。等待今年11月的北风，北风南下之时，他们将再次出发。",
        vi: "Sau tám tháng, đi hơn 4000 hải lý, gia đình Địch Phong cuối cùng cũng về đến nhà. Địch Phong tin rằng mọi thứ chỉ mới bắt đầu, đi biển là một bậc thang dài trên con đường đời của anh, dẫn tới tương lai mà anh mong muốn. “Tôi và vợ muốn xem thời đại này, thế giới này rốt cuộc trông như thế nào. Đời có lựa chọn, mọi thứ đều có thể thay đổi.” Chặng tiếp theo, họ muốn đến Úc và New Zealand. Đợi gió bấc tháng 11 năm nay, khi gió bấc thổi về nam, họ sẽ lại lên đường.",
        questions: ["翟峰一家人下一站打算去哪儿？", "如果你是翟峰，会不会这样做呢？"]
      }
    ],
    notes: [
      "翟峰 (Zhái Fēng): Địch Phong – nhân vật chính. 彩虹号: thuyền “Cầu Vồng”.",
      "可上山，勿下海: thà lên núi chứ đừng ra biển – ý nói đi biển rất nguy hiểm.",
      "海里 (hǎilǐ): hải lý."
    ]
  },
  grammar: [
    {
      word: "舒适 / 舒服",
      title: "Phân biệt 舒适 / 舒服",
      usages: [
        {
          label: "舒适",
          explain: "Nhấn mạnh điều kiện khách quan mang lại (môi trường, thiết bị, tiện nghi...), thiên về văn viết.",
          examples: ["这家餐厅装修精美、环境舒适。"]
        },
        {
          label: "舒服",
          explain: "Nhấn mạnh cảm nhận chủ quan trực tiếp về thân thể/tinh thần, thiên về khẩu ngữ. Có thể láy AABB (舒舒服服) hoặc dùng như động từ láy ABAB (舒服舒服).",
          examples: ["他靠在沙发上舒舒服服地看电视。"]
        }
      ],
      note: "Cả hai đều diễn tả trạng thái dễ chịu, thoải mái. Nhưng 舒适 tả về điều kiện/môi trường bên ngoài, còn 舒服 tả cảm giác của chính người nói/chủ thể (kể cả tâm trạng: 心里不舒服)."
    },
    {
      word: "包括",
      title: "Động từ \"bao gồm\" (2 cách dùng)",
      usages: [
        {
          label: "(1) Động từ liệt kê các phần cấu thành",
          explain: "Bao gồm, bao hàm các thành phần",
          examples: ["汉语技能教学包括听、说、读、写四个方面。"]
        },
        {
          label: "(2) Nhấn mạnh một trường hợp cụ thể",
          explain: "Kể cả, ngay cả... cũng (bổ sung, giải thích)",
          examples: ["包括他的父母，所有人都觉得，他的决定是错的。"]
        }
      ],
      note: "Cách dùng (1) liệt kê đầy đủ các bộ phận tạo nên một tổng thể; cách dùng (2) nhấn mạnh một đối tượng cụ thể cũng nằm trong phạm vi được nói đến, thường mang sắc thái nhấn mạnh/ngạc nhiên."
    },
    {
      word: "平静 / 冷静",
      title: "Phân biệt 平静 / 冷静",
      usages: [
        {
          label: "平静",
          explain: "Nhấn mạnh trạng thái an ổn, không biến động - có thể chỉ môi trường, bầu không khí, cảm xúc.",
          examples: ["海面恢复平静。", "听完解释，她心里终于平静了。"]
        },
        {
          label: "冷静",
          explain: "Nhấn mạnh sự trấn tĩnh, lý trí, không hoảng loạn khi đối diện vấn đề - chỉ thái độ/hành vi con người.",
          examples: ["面对危机，他表现得非常冷静。"]
        }
      ],
      note: "平静 thiên về trạng thái cảm xúc/hoàn cảnh không có biến động (bình yên, thanh thản); 冷静 thiên về thái độ lý trí khi xử lý tình huống (bình tĩnh, tỉnh táo)."
    }
  ],
  wordChoice: [
    {
      sentence: "早晨收拾完房间后，妈妈喜欢___地坐在那把躺椅上休息一下。",
      options: ["舒服", "舒适"],
      answer: "舒服"
    },
    {
      sentence: "这家餐厅装修精美、环境___。",
      options: ["舒服", "舒适"],
      answer: "舒适"
    },
    {
      sentence: "我今天脖子有点儿不___，左右转动时有点儿疼。",
      options: ["舒服", "舒适"],
      answer: "舒服"
    },
    {
      sentence: "下午海面平静时，他们就下海游泳或者___鱼。",
      options: ["撞", "疯", "钓", "勿", "漏", "击", "顿"],
      answer: "钓"
    },
    {
      sentence: "航行的过程中，可能出现船身___水的情况。",
      options: ["撞", "疯", "钓", "勿", "漏", "击", "顿"],
      answer: "漏"
    },
    {
      sentence: "看，那里写着“请___吸烟”。",
      options: ["撞", "疯", "钓", "勿", "漏", "击", "顿"],
      answer: "勿"
    },
    {
      sentence: "第一次开车，他虽然很小心，但还是___到了一棵树。",
      options: ["撞", "疯", "钓", "勿", "漏", "击", "顿"],
      answer: "撞"
    },
    {
      sentence: "听到这个好消息后，我激动的心情久久不能___。",
      options: ["冷静", "平静"],
      answer: "平静"
    },
    {
      sentence: "现在，父母、妻子和孩子都___着他早日学成回国。",
      options: ["希望", "盼望"],
      answer: "盼望"
    },
    {
      sentence: "21世纪是一个信息___、互联网的时代。",
      options: ["时刻", "时代"],
      answer: "时代"
    },
    {
      sentence: "由于在个人___上没谈好，他最后拒绝了这家公司的邀请。",
      options: ["漏", "随时", "辞职", "待遇", "稳定", "发愁"],
      answer: "待遇"
    },
    {
      sentence: "现在，让许多工厂老板___的是有经验的技术工人很难找。",
      options: ["漏", "随时", "辞职", "待遇", "稳定", "发愁"],
      answer: "发愁"
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
          vocabId: 2,
          distractors: [50, 53, 3]
        },
        {
          vocabId: 3,
          distractors: [21, 38, 2]
        },
        {
          vocabId: 6,
          distractors: [41, 44, 45]
        },
        {
          vocabId: 8,
          distractors: [1, 9, 10]
        },
        {
          vocabId: 16,
          distractors: [18, 20, 29]
        },
        {
          vocabId: 35,
          distractors: [25, 36, 13]
        },
        {
          vocabId: 37,
          distractors: [44, 29, 20]
        },
        {
          vocabId: 39,
          distractors: [30, 32, 40]
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
      vocabIds: [1, 7, 9, 12, 14, 24, 28, 40]
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
          tokens: ["翟峰", "迷上了", "帆船", "。"],
          answer: "翟峰迷上了帆船。",
          vi: "Trạch Phong đã mê thuyền buồm."
        },
        {
          tokens: ["他们", "卖房卖车", "买下了", "一艘", "二手船", "。"],
          answer: "他们卖房卖车买下了一艘二手船。",
          vi: "Họ bán nhà bán xe, mua một chiếc thuyền cũ."
        },
        {
          tokens: ["翟峰", "和妻子", "轮流", "驾船", "。"],
          answer: "翟峰和妻子轮流驾船。",
          vi: "Trạch Phong và vợ thay phiên nhau lái thuyền."
        },
        {
          tokens: ["一家三口", "只能", "紧紧", "拥抱在一起", "。"],
          answer: "一家三口只能紧紧拥抱在一起。",
          vi: "Ba người trong nhà chỉ có thể ôm chặt lấy nhau."
        },
        {
          tokens: ["人生", "有选择", "一切", "可改变", "。"],
          answer: "人生有选择一切可改变。",
          vi: "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi."
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
          title: "课文 1 (đoạn 1) · Cuộc sống ổn định trước đây của Trạch Phong",
          text: "翟峰和妻子都是铁路工人，工作{{d1}}，{{d2}}不错。他们有房有车，从不为生活{{d3}}。可翟峰却不想一辈子过这样{{d4}}的生活。通过电视，翟峰迷上了{{d5}}，他觉得帆船能带他{{d6}}开“世界之门”：只要有一{{d7}}船，就能{{d8}}在无边无际的海上，到任何自己想去的地方。"
        },
        {
          title: "课文 1 (đoạn 2) · Quyết định bán nhà bán xe ra khơi",
          text: "由于翟峰和妻子没有{{d9}}，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。出发前，翟峰自学了航海知识。然而，包括翟峰的父母，所有人都觉得，翟峰“{{d10}}了”。"
        }
      ],
      answers: {
        d1: "稳定",
        d2: "待遇",
        d3: "发愁",
        d4: "平静",
        d5: "帆船",
        d6: "撞",
        d7: "艘",
        d8: "航行",
        d9: "积蓄",
        d10: "疯"
      },
      bank: ["稳定", "待遇", "发愁", "平静", "帆船", "撞", "艘", "航行", "积蓄", "疯", "二手", "包括", "彩虹"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể về hành trình đi thuyền buồm của Trạch Phong.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 3) · Cuộc sống hạnh phúc trên biển",
          text: "2012年11月24日，{{t1}}了的翟峰和妻子带着休学的女儿，第一次{{t2}}帆船出海了。白天，翟峰和妻子{{t3}}驾船。女儿在船上看书、学习、画画儿。下午海面平静时，翟峰会和妻子下海游泳或者{{t4}}鱼。该吃饭时，妻子会给全家人做一{{t5}}美味的海鲜。傍晚是一家人最{{t6}}的时候。干完活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。这样的生活，是翟峰{{t7}}已久的。以前陆地上的夜晚，他们在{{t8}}的房间，一家人没有更多的交流。"
        },
        {
          title: "课文 1 (đoạn 4) · Những hiểm nguy trên biển",
          text: "中国有句老话，可上山，勿下海。美好的时刻过去后是一个个紧张的夜晚。一路上，翟峰一家经历了船身{{t9}}、漏水等大大小小十多次险情。他们最怕雷电交加的时刻，因为小船{{t10}}有可能被下一道闪电击到，一家三口只能紧紧拥抱在一起，希望闪电快快过去。"
        }
      ],
      answers: {
        t1: "辞职",
        t2: "驾驶",
        t3: "轮流",
        t4: "钓",
        t5: "顿",
        t6: "舒适",
        t7: "盼望",
        t8: "各自",
        t9: "着火",
        t10: "随时"
      },
      bank: ["辞职", "驾驶", "轮流", "钓", "顿", "舒适", "盼望", "各自", "着火", "随时", "漏", "时刻", "拥抱"]
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
          zh: "翟峰觉得帆船能带他撞开“世界之门”。",
          vi: "Trạch Phong cảm thấy thuyền buồm có thể đưa anh mở toang \"cánh cửa thế giới\".",
          keywords: ["thuyền buồm", "mở toang", "cánh cửa", "thế giới"]
        },
        {
          zh: "一家三口只能紧紧拥抱在一起，希望闪电快快过去。",
          vi: "Ba người trong nhà chỉ có thể ôm chặt lấy nhau, mong tia sét nhanh chóng qua đi.",
          keywords: ["ôm chặt", "tia sét", "mong", "qua đi"]
        },
        {
          zh: "人生有选择，一切可改变。",
          vi: "Cuộc đời có lựa chọn, mọi thứ đều có thể thay đổi.",
          keywords: ["cuộc đời", "lựa chọn", "thay đổi"]
        },
        {
          zh: "傍晚是一家人最舒适的时候。",
          vi: "Buổi chiều tà là lúc thoải mái nhất của cả nhà.",
          keywords: ["chiều tà", "thoải mái", "cả nhà"]
        },
        {
          zh: "他们最怕雷电交加的时刻。",
          vi: "Họ sợ nhất là những thời khắc sấm chớp cùng lúc nổi lên.",
          keywords: ["sợ nhất", "sấm chớp", "thời khắc"]
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
          vi: "Anh ấy vì công việc không ổn định mà lo lắng.",
          answers: ["他因为工作不稳定而发愁。", "他因工作不稳定而发愁。"]
        },
        {
          vi: "Vợ chồng họ thay phiên nhau lái thuyền.",
          answers: ["他们夫妻俩轮流驾船。", "他们俩轮流驾船。"]
        },
        {
          vi: "Cô ấy vẫn luôn mong mỏi ngày trở về của con trai.",
          answers: ["她一直盼望着儿子回来的那一天。", "她一直盼望儿子回来。"]
        },
        {
          vi: "Mặt biển đã trở lại yên bình.",
          answers: ["海面已经恢复平静了。", "海面恢复平静了。"]
        },
        {
          vi: "Anh ấy đối mặt với nguy hiểm rất bình tĩnh.",
          answers: ["他面对危险表现得非常冷静。", "他面对危险非常冷静。"]
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
          q: "翟峰和妻子原来都是铁路工人。",
          a: true
        },
        {
          q: "翟峰夫妻俩是因为家里穷才决定去航海的。",
          a: false
        },
        {
          q: "翟峰自学了航海知识。",
          a: true
        },
        {
          q: "翟峰的父母都很支持他去航海。",
          a: false
        },
        {
          q: "傍晚是一家人最舒适的时候。",
          a: true
        },
        {
          q: "他们在海上从来没有遇到过危险。",
          a: false
        },
        {
          q: "翟峰一家人一共航行了4000多海里。",
          a: true
        },
        {
          q: "翟峰下一站计划去欧洲。",
          a: false
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
      items: ["人生有选择，一切可改变。", "翟峰迷上了帆船。", "一家三口只能紧紧拥抱在一起。", "傍晚是一家人最舒适的时候。", "他们最怕雷电交加的时刻。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“如果我是翟峰，我会/不会……”为题写一段话。 (Hãy viết một đoạn văn với chủ đề \"Nếu tôi là Trạch Phong, tôi sẽ/sẽ không...\".)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 3 (舒适/舒服, 包括, 平静/冷静).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["舒适", "舒服", "包括", "平静", "冷静"],
      minGrammar: 2,
      sample: "如果我是翟峰，我可能不会像他那样，直接辞职卖房卖车去航海。虽然稳定的工作和不错的待遇让人安心，但一辈子只过平静的生活，也会让人对未来发愁。我觉得可以先攒一些积蓄，再利用假期时刻去做自己盼望已久的事情，比如学开帆船、去看陆地以外的世界。这样既不用担心生活不稳定，也能包括工作和爱好在内，让人生更舒适、更精彩。当然，如果真的遇到像翟峰那样的机会，而且家人都支持，我想我也会勇敢地做出改变，因为人生有选择，一切可改变。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 舒适 / 舒服",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (舒适 so với 舒服).",
      kind: "grammar-fill",
      grammarWord: "舒适 / 舒服",
      options: ["舒服", "舒适"],
      items: [
        {
          q: "早晨收拾完房间后，妈妈喜欢___地坐在那把躺椅上休息一下。",
          answers: ["舒服"]
        },
        {
          q: "这家餐厅装修精美、环境___。",
          answers: ["舒适"]
        },
        {
          q: "我今天脖子有点儿不___，左右转动时有点儿疼。",
          answers: ["舒服"]
        },
        {
          q: "这艘客船就像高级宾馆一样，除了有___的客舱外，还有餐厅、电影院。",
          answers: ["舒适", "舒服"]
        },
        {
          q: "他靠在沙发上___地看电视。",
          answers: ["舒服"]
        },
        {
          q: "王奶奶自己锻炼身体好了，自己___，也不给儿女添麻烦。",
          answers: ["舒服"]
        },
        {
          q: "我们都需要一个轻松___的生活环境。",
          answers: ["舒适"]
        },
        {
          q: "听了他的话，我心里很不___。",
          answers: ["舒服"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 包括",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (包括 - động từ \"bao gồm\" (2 cách dùng)).",
      kind: "grammar-fill",
      grammarWord: "包括",
      items: [
        {
          q: "汉语技能教学___听、说、读、写四个方面。",
          answers: ["包括"]
        },
        {
          q: "世界上使用筷子的国家主要___中国、日本、韩国等。",
          answers: ["包括"]
        },
        {
          q: "这个学习小组___我在内，一共4人。",
          answers: ["包括"]
        },
        {
          q: "然而，___他的父母，所有人都觉得，他的决定是错的。",
          answers: ["包括"]
        },
        {
          q: "我们班所有人，___最不爱运动的刘方，也都参加了这次运动会。",
          answers: ["包括"]
        },
        {
          q: "这个节目全家人都喜欢，___爷爷奶奶，也很爱看。",
          answers: ["包括"]
        },
        {
          q: "“学习”，其实___“学”与“习”两层意思。",
          answers: ["包括"]
        },
        {
          q: "参加比赛的人数___教练一共有12人。",
          answers: ["包括"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 平静 / 冷静",
      points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (平静 so với 冷静).",
      kind: "grammar-fill",
      grammarWord: "平静 / 冷静",
      options: ["平静", "冷静"],
      items: [
        {
          q: "听到这个好消息后，我激动的心情久久不能___。",
          answers: ["平静"]
        },
        {
          q: "面对危机，他表现得非常___。",
          answers: ["冷静"]
        },
        {
          q: "海面恢复___了。",
          answers: ["平静"]
        },
        {
          q: "听完解释，她心里终于___了。",
          answers: ["平静"]
        },
        {
          q: "遇到问题时，我们应该保持___，不能慌乱。",
          answers: ["冷静"]
        },
        {
          q: "___的湖面，像一面镜子。",
          answers: ["冷静"]
        },
        {
          q: "他们俩___地吵了一架，谁也没有提高声音。",
          answers: ["平静"]
        },
        {
          q: "那位警察在处理事故时非常___，没有一点儿慌乱。",
          answers: ["冷静"]
        }
      ]
    }
  ]
};
