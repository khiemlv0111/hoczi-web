import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第10课 争论的奇迹 (The Miracle of an Argument)
// Nguồn: slide bài 10 và bộ bài tập "HSK5 tiêu chuẩn bài 10" trong hsk5/docs.
export const lesson10: Lesson = {
  level: "hsk5",
  no: 10,
  slug: "bai-10",
  zh: "争论的奇迹",
  pinyin: "Zhēnglùn de qíjì",
  vi: "Kỳ tích từ một cuộc tranh luận",
  en: "The Miracle of an Argument",
  topic: "发明创造 · Phát minh sáng tạo",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 奇迹、啦、脖子、说服、摄影师、操场、洞、系、差距、兄弟、播放、纪念、导演、请求、重大…",
    "Nắm cách kết hợp của các từ: 拍、改进、艰苦、成熟、围绕、始终、插、拦、匹、争论、辩论.",
    "Hiểu và dùng được 毕竟、逐渐、或许; phân biệt 显示 và 显得.",
    "Đọc hiểu câu chuyện ra đời của điện ảnh – kỳ tích sinh ra từ một cuộc tranh luận.",
    "Thảo luận về những phát hiện lớn trong đời sống hằng ngày và viết đoạn văn theo chủ đề.",
    "Nắm 8 từ mở rộng chủ đề 服饰 (trang phục)."
  ],
  warmUp: [
    {
      zh: "请试着用本课的生词来描述一张马奔跑的照片。",
      vi: "Hãy thử dùng từ mới của bài để miêu tả bức ảnh một con ngựa đang phi."
    },
    {
      zh: "你知道哪些表示手部动作的动词？（拦、插、抱、拍、拉、系……）",
      vi: "Bạn biết những động từ chỉ động tác của tay nào? (chặn, cắm, ôm, vỗ, kéo, buộc…)"
    },
    {
      zh: "最早的电影是怎么来的？",
      vi: "Bộ phim đầu tiên ra đời như thế nào?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "争论",
      py: "zhēnglùn",
      pos: "đg.",
      meaning: "tranh luận, cãi nhau về vấn đề gì",
      example: "大卫和麦克争论了起来。",
      exampleVi: "David và Mike tranh luận với nhau."
    },
    {
      id: 2,
      han: "奇迹",
      py: "qíjì",
      pos: "dt.",
      meaning: "kỳ tích",
      example: "他活下来了，这真是一个奇迹。",
      exampleVi: "Anh ấy sống sót, đây quả thực là một kỳ tích."
    },
    {
      id: 3,
      han: "围绕",
      py: "wéirào",
      pos: "đg.",
      meaning: "xoay quanh",
      example: "请围绕这个题目写一篇200字的论文。",
      exampleVi: "Hãy viết một bài luận 200 chữ xoay quanh chủ đề này."
    },
    {
      id: 4,
      han: "奔跑",
      py: "bēnpǎo",
      pos: "đg.",
      meaning: "chạy, phi (ngựa)",
      example: "马奔跑的样子很好看。",
      exampleVi: "Dáng chạy của con ngựa rất đẹp."
    },
    {
      id: 5,
      han: "蹄（子）",
      py: "tí(zi)",
      pos: "dt.",
      meaning: "móng guốc",
      example: "马奔跑的时候蹄子着地吗？",
      exampleVi: "Khi ngựa chạy, móng guốc có chạm đất không?"
    },
    {
      id: 6,
      han: "辩论",
      py: "biànlùn",
      pos: "đg.",
      meaning: "biện luận, tranh biện",
      example: "大卫很喜欢和别人辩论一些科学问题。",
      exampleVi: "David rất thích tranh biện với người khác về các vấn đề khoa học."
    },
    {
      id: 7,
      han: "青蛙",
      py: "qīngwā",
      pos: "dt.",
      meaning: "con ếch",
      example: "青蛙是对人类有益的动物。",
      exampleVi: "Ếch là loài vật có ích cho con người."
    },
    {
      id: 8,
      han: "啦",
      py: "la",
      pos: "trợ từ",
      meaning: "(kết hợp âm 了+啊)",
      example: "终于放学啦！孩子们快乐地跑出校园。",
      exampleVi: "Cuối cùng cũng tan học rồi! Bọn trẻ vui vẻ chạy ra khỏi trường."
    },
    {
      id: 9,
      han: "始终",
      py: "shǐzhōng",
      pos: "p.",
      meaning: "từ đầu đến cuối, luôn luôn",
      example: "他始终不忘父母的养育之恩。",
      exampleVi: "Anh ấy luôn không quên công ơn nuôi dưỡng của cha mẹ."
    },
    {
      id: 10,
      han: "脖子",
      py: "bózi",
      pos: "dt.",
      meaning: "cổ",
      example: "争论得脸红脖子粗。",
      exampleVi: "Tranh luận đến mức đỏ mặt tía tai."
    },
    {
      id: 11,
      han: "说服",
      py: "shuōfú",
      pos: "đg.",
      meaning: "thuyết phục",
      example: "老师说服小明听爸爸妈妈的话。",
      exampleVi: "Cô giáo thuyết phục Tiểu Minh nghe lời bố mẹ."
    },
    {
      id: 12,
      han: "摄影师",
      py: "shèyǐngshī",
      pos: "dt.",
      meaning: "nhiếp ảnh gia",
      example: "这是一位摄影师拍的照片。",
      exampleVi: "Đây là bức ảnh do một nhiếp ảnh gia chụp."
    },
    {
      id: 13,
      han: "毕竟",
      py: "bìjìng",
      pos: "p.",
      meaning: "dù sao, rốt cuộc",
      example: "毕竟他还是一个孩子，你不要对他这么严格。",
      exampleVi: "Dù sao nó vẫn còn là một đứa trẻ, bạn đừng nghiêm khắc với nó như vậy."
    },
    {
      id: 14,
      han: "操场",
      py: "cāochǎng",
      pos: "dt.",
      meaning: "sân vận động",
      example: "每天晚上操场上有很多人在锻炼。",
      exampleVi: "Mỗi tối trên sân vận động có rất nhiều người tập thể dục."
    },
    {
      id: 15,
      han: "拍",
      py: "pāi",
      pos: "đg.",
      meaning: "chụp (ảnh), vỗ",
      example: "相机连续拍下了24张照片。",
      exampleVi: "Máy ảnh liên tục chụp được 24 tấm ảnh."
    },
    {
      id: 16,
      han: "匹",
      py: "pǐ",
      pos: "lt.",
      meaning: "(dùng cho ngựa, vải)",
      example: "一匹马。",
      exampleVi: "Một con ngựa."
    },
    {
      id: 17,
      han: "棍",
      py: "gùn",
      pos: "dt.",
      meaning: "gậy, que",
      example: "一根棍子。",
      exampleVi: "Một cây gậy."
    },
    {
      id: 18,
      han: "拦",
      py: "lán",
      pos: "đg.",
      meaning: "chặn, ngăn",
      example: "警察拦住违规行驶的电瓶车。",
      exampleVi: "Cảnh sát chặn chiếc xe điện đi sai luật."
    },
    {
      id: 19,
      han: "系",
      py: "jì",
      pos: "đg.",
      meaning: "buộc, thắt",
      example: "木棍上系着细线。",
      exampleVi: "Trên cây gậy buộc một sợi dây mảnh."
    },
    {
      id: 20,
      han: "插",
      py: "chā",
      pos: "đg.",
      meaning: "cắm, chèn vào",
      example: "分别插进24根木棍。",
      exampleVi: "Lần lượt cắm vào 24 cây gậy gỗ."
    },
    {
      id: 21,
      han: "改进",
      py: "gǎijìn",
      pos: "đg.",
      meaning: "cải tiến",
      example: "电影拍摄技术逐渐改进、成熟。",
      exampleVi: "Kỹ thuật quay phim dần dần được cải tiến, hoàn thiện."
    },
    {
      id: 22,
      han: "试验",
      py: "shìyàn",
      pos: "dt./đg.",
      meaning: "thử nghiệm",
      example: "科学家正在进行化学试验。",
      exampleVi: "Nhà khoa học đang tiến hành thử nghiệm hóa học."
    },
    {
      id: 23,
      han: "差距",
      py: "chājù",
      pos: "dt.",
      meaning: "khoảng cách, chênh lệch",
      example: "相邻两张相片的差距都很小。",
      exampleVi: "Sự chênh lệch giữa hai tấm ảnh liền kề đều rất nhỏ."
    },
    {
      id: 24,
      han: "意识",
      py: "yìshi",
      pos: "dt./đg.",
      meaning: "ý thức",
      example: "他意识到了自己的错误。",
      exampleVi: "Anh ấy ý thức được lỗi lầm của mình."
    },
    {
      id: 25,
      han: "逐渐",
      py: "zhújiàn",
      pos: "p.",
      meaning: "dần dần",
      example: "随着国家的发展，人民的生活水平逐渐提高。",
      exampleVi: "Cùng với sự phát triển của đất nước, đời sống người dân dần dần được nâng cao."
    },
    {
      id: 26,
      han: "艰苦",
      py: "jiānkǔ",
      pos: "tt.",
      meaning: "gian khổ",
      example: "曾经的人民生活条件艰苦。",
      exampleVi: "Trước đây điều kiện sống của người dân rất gian khổ."
    },
    {
      id: 27,
      han: "显示",
      py: "xiǎnshì",
      pos: "đg.",
      meaning: "hiển thị, biểu thị",
      example: "手机屏幕显示，现在是早上9:41。",
      exampleVi: "Màn hình điện thoại hiển thị, bây giờ là 9:41 sáng."
    },
    {
      id: 28,
      han: "成熟",
      py: "chéngshú",
      pos: "đg./tt.",
      meaning: "chín, trưởng thành",
      example: "夏天到了，许多水果都成熟了。",
      exampleVi: "Mùa hè đến, rất nhiều loại trái cây đã chín."
    },
    {
      id: 29,
      han: "兄弟",
      py: "xiōngdì",
      pos: "dt.",
      meaning: "anh em",
      example: "卢米埃尔兄弟在巴黎第一次向公众播放了短片。",
      exampleVi: "Anh em nhà Lumière lần đầu tiên chiếu phim ngắn cho công chúng tại Paris."
    },
    {
      id: 30,
      han: "播放",
      py: "bōfàng",
      pos: "đg.",
      meaning: "phát (nhạc, phim)",
      example: "电视上正在播放电影。",
      exampleVi: "Trên tivi đang phát một bộ phim."
    },
    {
      id: 31,
      han: "纪念",
      py: "jìniàn",
      pos: "đg.",
      meaning: "kỷ niệm",
      example: "这块奖杯用来纪念他们的胜利。",
      exampleVi: "Chiếc cúp này dùng để kỷ niệm chiến thắng của họ."
    },
    {
      id: 32,
      han: "导演",
      py: "dǎoyǎn",
      pos: "dt./đg.",
      meaning: "đạo diễn",
      example: "张艺谋是一位著名的导演。",
      exampleVi: "Trương Nghệ Mưu là một đạo diễn nổi tiếng."
    },
    {
      id: 33,
      han: "瞬间",
      py: "shùnjiān",
      pos: "dt.",
      meaning: "khoảnh khắc",
      example: "一瞬间，这只鲨鱼咬住了海面上的小鸟。",
      exampleVi: "Trong khoảnh khắc, con cá mập này đã cắn được con chim trên mặt biển."
    },
    {
      id: 34,
      han: "请求",
      py: "qǐngqiú",
      pos: "đg./dt.",
      meaning: "thỉnh cầu, yêu cầu",
      example: "学生们向老师提出休息的请求。",
      exampleVi: "Học sinh đưa ra yêu cầu nghỉ ngơi với giáo viên."
    },
    {
      id: 35,
      han: "或许",
      py: "huòxǔ",
      pos: "p.",
      meaning: "có lẽ, có thể",
      example: "压力太大容易生病，或许我们要学会放松。",
      exampleVi: "Áp lực quá lớn dễ sinh bệnh, có lẽ chúng ta cần học cách thư giãn."
    },
    {
      id: 36,
      han: "重大",
      py: "zhòngdà",
      pos: "tt.",
      meaning: "trọng đại, to lớn",
      example: "春节是中国的重大节日。",
      exampleVi: "Tết Nguyên Đán là ngày lễ trọng đại của Trung Quốc."
    },
    {
      id: 37,
      han: "领带",
      py: "lǐngdài",
      pos: "dt.",
      meaning: "cà vạt",
      example: "你今天系这条领带吧，比较正式。",
      exampleVi: "Hôm nay bạn thắt cà vạt này đi, trông trang trọng hơn.",
      group: "extended"
    },
    {
      id: 38,
      han: "裙子",
      py: "qúnzi",
      pos: "dt.",
      meaning: "váy",
      example: "这条裙子很漂亮。",
      exampleVi: "Chiếc váy này rất đẹp.",
      group: "extended"
    },
    {
      id: 39,
      han: "西装",
      py: "xīzhuāng",
      pos: "dt.",
      meaning: "âu phục, com-lê",
      example: "他今天穿了一身西装。",
      exampleVi: "Hôm nay anh ấy mặc một bộ com-lê.",
      group: "extended"
    },
    {
      id: 40,
      han: "衬衫",
      py: "chènshān",
      pos: "dt.",
      meaning: "áo sơ mi",
      example: "他穿着一件白色的衬衫。",
      exampleVi: "Anh ấy mặc một chiếc áo sơ mi trắng.",
      group: "extended"
    },
    {
      id: 41,
      han: "牛仔裤",
      py: "niúzǎikù",
      pos: "dt.",
      meaning: "quần jean",
      example: "她今天穿了一条牛仔裤。",
      exampleVi: "Hôm nay cô ấy mặc một chiếc quần jean.",
      group: "extended"
    },
    {
      id: 42,
      han: "袜子",
      py: "wàzi",
      pos: "dt.",
      meaning: "tất",
      example: "这双袜子很暖和。",
      exampleVi: "Đôi tất này rất ấm.",
      group: "extended"
    },
    {
      id: 43,
      han: "帽子",
      py: "màozi",
      pos: "dt.",
      meaning: "mũ",
      example: "他戴了一顶帽子。",
      exampleVi: "Anh ấy đội một chiếc mũ.",
      group: "extended"
    },
    {
      id: 44,
      han: "围巾",
      py: "wéijīn",
      pos: "dt.",
      meaning: "khăn quàng cổ",
      example: "冬天她喜欢围一条围巾。",
      exampleVi: "Mùa đông cô ấy thích quàng một chiếc khăn.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 争论的奇迹",
    paragraphs: [
      {
        zh: "1872年的一天，在美国加利福尼亚州的一个酒店里，斯坦福与科恩围绕“马奔跑时蹄子是否着地”进行了辩论。斯坦福认为，马奔跑得那么快，在跳起时四蹄应该都是不落地的；而科恩认为，马要是四蹄都不着地，那不是成了青蛙啦？应该是始终有一蹄着地。两人各执一词，争论得脸红脖子粗，谁也说服不了谁。于是他们就请英国摄影师麦布里奇来判断，可麦布里奇也弄不清楚。不过摄影师毕竟是摄影师，主意还是有的。",
        vi: "Một ngày năm 1872, trong một khách sạn ở bang California nước Mỹ, Stanford và Cohen tranh luận xoay quanh vấn đề “khi ngựa phi, móng có chạm đất hay không”. Stanford cho rằng ngựa phi nhanh như vậy, lúc bật lên thì cả bốn vó đều không chạm đất; còn Cohen cho rằng nếu cả bốn vó đều không chạm đất thì chẳng hóa ra thành con ếch à? Phải luôn có một vó chạm đất. Hai người mỗi người một ý, cãi nhau đến đỏ mặt tía tai, chẳng ai thuyết phục được ai. Thế là họ mời nhiếp ảnh gia người Anh Muybridge phân xử, nhưng Muybridge cũng không rõ. Tuy nhiên nhiếp ảnh gia dù sao vẫn là nhiếp ảnh gia, ý tưởng thì vẫn có.",
        questions: ["斯坦福与科恩围绕什么问题进行了辩论？他们分别有什么看法？", "你觉得“各执一词”“脸红脖子粗”是什么意思？"]
      },
      {
        zh: "他们一起来到一个操场，在一条跑道的一边等距离放上24个照相机，照相机对准跑道；在跑道另一边打上24个洞，分别插进24根木棍，木棍上系着细线，细线穿过跑道，接上相机快门。",
        vi: "Họ cùng đến một sân tập, đặt 24 chiếc máy ảnh cách đều nhau dọc một bên đường chạy, máy ảnh chĩa thẳng vào đường chạy; ở phía bên kia đường chạy đục 24 cái lỗ, cắm vào đó 24 cây gậy gỗ, trên gậy buộc sợi dây mảnh, dây mảnh vắt ngang qua đường chạy, nối với nút chụp của máy ảnh.",
        questions: ["他们用什么办法得出了结论？", "请用重点词语复述故事：插、系、操场"]
      },
      {
        zh: "一切都准备好了，麦布里奇让一匹马从跑道的一头飞奔到另一头，马一边跑，一边按顺序撞断拦路的24根细线，相机连续拍下了24张照片，相邻两张相片的差距都很小。相片显示：马奔跑时始终有一蹄着地，科恩赢了。",
        vi: "Mọi thứ đã sẵn sàng, Muybridge cho một con ngựa phi từ đầu này sang đầu kia đường chạy; ngựa vừa chạy vừa lần lượt làm đứt 24 sợi dây chắn đường, máy ảnh liên tục chụp được 24 tấm ảnh, chênh lệch giữa hai tấm liền nhau đều rất nhỏ. Ảnh cho thấy: khi ngựa phi luôn có một vó chạm đất, Cohen đã thắng.",
        questions: ["相片显示了什么？谁赢了？"]
      },
      {
        zh: "事后，有人无意识地快速拉动那一长串相片，“奇迹”出现了：各张相片中静止的马连成了一匹运动的马，相片“活”了。这就是电影最早的样子。",
        vi: "Sau đó, có người vô tình kéo nhanh chuỗi ảnh dài ấy, “kỳ tích” xuất hiện: con ngựa đứng yên trong từng tấm ảnh nối lại thành một con ngựa đang chuyển động, bức ảnh “sống” dậy. Đó chính là hình hài sớm nhất của điện ảnh.",
        questions: ["有人拉动那一长串相片后，出现了什么情况？", "你觉得“无意识”是什么意思？"]
      },
      {
        zh: "经过艰苦的试验，电影拍摄技术逐渐改进、成熟。1895年12月28日，法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》，这一天后来成为电影产生的纪念日，兄弟俩也成为历史上最早的电影导演。",
        vi: "Trải qua những thử nghiệm gian khổ, kỹ thuật quay phim dần được cải tiến và hoàn thiện. Ngày 28 tháng 12 năm 1895, anh em nhà Lumière người Pháp lần đầu tiên trình chiếu cho công chúng ở Paris bộ phim ngắn 《Tàu hỏa vào ga》, ngày này về sau trở thành ngày kỷ niệm điện ảnh ra đời, hai anh em cũng trở thành những đạo diễn điện ảnh đầu tiên trong lịch sử.",
        questions: ["电影产生的纪念日是哪一天？是为了纪念什么？", "请用重点词语复述故事：奇迹、逐渐、播放、纪念"]
      },
      {
        zh: "留心生活的每一瞬间，并为之争论，适时请求帮助、认真研究，或许重大发现就在你的眼前。",
        vi: "Hãy để tâm đến từng khoảnh khắc trong cuộc sống, dám tranh luận vì nó, đúng lúc nhờ giúp đỡ và nghiêm túc nghiên cứu – có lẽ phát hiện lớn đang ở ngay trước mắt bạn.",
        questions: ["文章想要说明什么道理？", "你觉得“留心生活”可以找到“重大发现”吗？"]
      }
    ],
    notes: [
      "斯坦福 (Stanford), 科恩 (Cohen), 麦布里奇 (Muybridge – nhiếp ảnh gia), 卢米埃尔兄弟 (anh em Lumière).",
      "各执一词: mỗi người giữ một ý. 脸红脖子粗: đỏ mặt tía tai (cãi nhau gay gắt)."
    ]
  },
  grammar: [
    {
      word: "显示 / 显得",
      title: "Phân biệt 显示 / 显得",
      usages: [
        {
          label: "显示",
          explain: "Biểu thị một thái độ/năng lực/tình huống nào đó, thường kết hợp với danh từ hoặc cụm từ/câu.",
          examples: ["相片显示：马奔跑时始终有一蹄着地。"]
        },
        {
          label: "显得",
          explain: "Biểu thị một đặc tính, dáng vẻ nào đó lộ ra, thường kết hợp với tính từ.",
          examples: ["几年不见，他显得成熟多了。"]
        }
      ],
      note: "显示 dùng khi có dữ liệu/kết quả cụ thể chứng minh điều gì (số liệu, ảnh, màn hình...); 显得 dùng khi diễn tả ấn tượng/vẻ ngoài chủ quan mà người nói cảm nhận được."
    },
    {
      word: "毕竟",
      title: "Phó từ đa nghĩa \"dù sao, rốt cuộc\"",
      usages: [
        {
          label: "Rốt cuộc, cuối cùng (nhấn mạnh kết quả sau cùng)",
          explain: "",
          examples: ["虽然我们遇到了很多困难，但毕竟完成了任务。"]
        },
        {
          label: "Dù sao thì... (nêu ra lý do/sự thật quan trọng nhất, biện minh cho một nhận định)",
          explain: "",
          examples: ["他不高兴是正常的，毕竟没有人能在摔得头破血流的时候，还高兴得起来。"]
        }
      ],
      note: "毕竟 luôn mang sắc thái nhấn mạnh một sự thật then chốt không thể phủ nhận, thường dùng để giải thích/biện minh cho một nhận định vừa nêu."
    },
    {
      word: "逐渐",
      title: "Phó từ \"dần dần\"",
      usages: [
        {
          label: "逐渐",
          explain: "Phó từ chỉ mức độ/số lượng tăng hoặc giảm từng chút một, quá trình diễn ra chậm rãi, liên tục.",
          examples: ["经过艰苦的试验，电影拍摄技术逐渐改进、成熟。"]
        }
      ],
      note: "逐渐 luôn đứng trước động từ/tính từ diễn tả một sự biến đổi diễn ra từ từ theo thời gian, không đột ngột. Thường dùng trong văn viết, mô tả xu hướng phát triển/thay đổi."
    }
  ],
  wordChoice: [
    {
      sentence: "___这个话题，他们已经争论了一个下午了。",
      options: ["围绕", "辩论", "青蛙", "蹄子"],
      answer: "围绕"
    },
    {
      sentence: "他最近怎么了？总是___不太高兴。",
      options: ["显示", "显得"],
      answer: "显得"
    },
    {
      sentence: "调查___，只有37%的人愿意回到没有手机的时代。",
      options: ["显示", "显得"],
      answer: "显示"
    },
    {
      sentence: "你今天___这条领带吧，比较正式。",
      options: ["插", "系", "拦", "拍", "说服", "围绕"],
      answer: "系"
    },
    {
      sentence: "如果不是他在中间___了一手，事情不会变成现在这样。",
      options: ["插", "系", "拦", "拍", "说服", "围绕"],
      answer: "插"
    },
    {
      sentence: "这位导演___过二十几部电影，得过好几项国际大奖。",
      options: ["插", "系", "拦", "拍", "说服", "围绕"],
      answer: "拍"
    },
    {
      sentence: "我始终没有办法___他接受这个结论。",
      options: ["插", "系", "拦", "拍", "说服", "围绕"],
      answer: "说服"
    },
    {
      sentence: "前面不知道发生了什么事，路被___住了。",
      options: ["插", "系", "拦", "拍", "说服", "围绕"],
      answer: "拦"
    },
    {
      sentence: "毕业二十年以来，我们___保持着联系。",
      options: ["终于", "始终"],
      answer: "始终"
    },
    {
      sentence: "在昨天举行的___赛上，他的表现得到了大家的好评。",
      options: ["辩论", "争论"],
      answer: "辩论"
    },
    {
      sentence: "我们之间还有很大的___，我要向他学习，更加努力。",
      options: ["距离", "差距"],
      answer: "差距"
    },
    {
      sentence: "吃中餐___西餐都可以，只是我不能吃太辣的。",
      options: ["或者", "或许"],
      answer: "或者"
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
          vocabId: 1,
          distractors: [6, 9, 11]
        },
        {
          vocabId: 2,
          distractors: [36, 26, 33]
        },
        {
          vocabId: 3,
          distractors: [4, 1, 25]
        },
        {
          vocabId: 6,
          distractors: [1, 34, 7]
        },
        {
          vocabId: 7,
          distractors: [4, 5, 17]
        },
        {
          vocabId: 12,
          distractors: [32, 29, 14]
        },
        {
          vocabId: 14,
          distractors: [12, 33, 36]
        },
        {
          vocabId: 32,
          distractors: [12, 29, 31]
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
      vocabIds: [9, 11, 13, 21, 22, 27, 28, 34]
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
          tokens: ["斯坦福", "与科恩", "围绕", "这个问题", "进行了", "辩论", "。"],
          answer: "斯坦福与科恩围绕这个问题进行了辩论。",
          vi: "Stanford và Cohen đã tranh biện xoay quanh vấn đề này."
        },
        {
          tokens: ["相片", "显示", "马奔跑时", "始终", "有一蹄", "着地", "。"],
          answer: "相片显示马奔跑时始终有一蹄着地。",
          vi: "Ảnh cho thấy khi ngựa chạy luôn có một móng guốc chạm đất."
        },
        {
          tokens: ["摄影师", "毕竟", "是", "摄影师", "。"],
          answer: "摄影师毕竟是摄影师。",
          vi: "Dù sao nhiếp ảnh gia vẫn là nhiếp ảnh gia."
        },
        {
          tokens: ["电影拍摄技术", "逐渐", "改进", "成熟", "。"],
          answer: "电影拍摄技术逐渐改进成熟。",
          vi: "Kỹ thuật quay phim dần dần được cải tiến và hoàn thiện."
        },
        {
          tokens: ["或许", "重大发现", "就在", "你的眼前", "。"],
          answer: "或许重大发现就在你的眼前。",
          vi: "Có lẽ phát hiện quan trọng đang ở ngay trước mắt bạn."
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
          title: "课文 1 (đoạn 1) · Cuộc tranh luận về móng ngựa",
          text: "1872年的一天，在美国加利福尼亚州的一个酒店里，斯坦福与科恩{{d1}}“马奔跑时蹄子是否着地”进行了{{d2}}。斯坦福认为，马{{d3}}得那么快，在跳起时四蹄应该都是不落地的；而科恩认为，马要是四蹄都不着地，那不是成了{{d4}}啦？应该是{{d5}}有一蹄着地。两人各执一词，{{d6}}得脸红{{d7}}粗，谁也{{d8}}不了谁。于是他们就请英国{{d9}}麦布里奇来判断，可麦布里奇也弄不清楚。不过摄影师{{d10}}是摄影师，主意还是有的。"
        }
      ],
      answers: {
        d1: "围绕",
        d2: "辩论",
        d3: "奔跑",
        d4: "青蛙",
        d5: "始终",
        d6: "争论",
        d7: "脖子",
        d8: "说服",
        d9: "摄影师",
        d10: "毕竟"
      },
      bank: ["围绕", "辩论", "奔跑", "青蛙", "始终", "争论", "脖子", "说服", "摄影师", "毕竟", "蹄子", "操场", "奇迹"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể về cuộc tranh luận giữa Stanford và Cohen.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 2) · Thí nghiệm với 24 chiếc máy ảnh",
          text: "他们一起来到一个{{t1}}，在一条跑道的一边等距离放上24个照相机，照相机对准跑道；在跑道另一边打上24个洞，分别{{t2}}进24根木棍，木棍上{{t3}}着细线，细线穿过跑道，接上相机快门。一切都准备好了，麦布里奇让一{{t4}}马从跑道的一头飞奔到另一头，马一边跑，一边按顺序撞断{{t5}}路的24根细线，相机连续{{t6}}下了24张照片，相邻两张相片的{{t7}}都很小。相片{{t8}}：马奔跑时始终有一蹄着地，科恩赢了。"
        },
        {
          title: "课文 1 (đoạn 3) · Sự ra đời của điện ảnh",
          text: "事后，有人无意识地快速拉动那一长串相片，“奇迹”出现了：各张相片中静止的马连成了一匹运动的马，相片“活”了。这就是电影最早的样子。经过{{t9}}的试验，电影拍摄技术{{t10}}改进、成熟，1895年12月28日，法国人卢米埃尔兄弟在巴黎第一次向公众播放了短片《火车到站》，这一天后来成为电影产生的纪念日，兄弟俩也成为历史上最早的电影导演。"
        }
      ],
      answers: {
        t1: "操场",
        t2: "插",
        t3: "系",
        t4: "匹",
        t5: "拦",
        t6: "拍",
        t7: "差距",
        t8: "显示",
        t9: "艰苦",
        t10: "逐渐"
      },
      bank: ["操场", "插", "系", "匹", "拦", "拍", "差距", "显示", "艰苦", "逐渐", "棍", "洞", "改进"]
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
          zh: "斯坦福与科恩围绕“马奔跑时蹄子是否着地”进行了辩论。",
          vi: "Stanford và Cohen đã tranh biện xoay quanh vấn đề \"khi ngựa chạy móng guốc có chạm đất hay không\".",
          keywords: ["tranh biện", "xoay quanh", "ngựa chạy", "móng guốc"]
        },
        {
          zh: "相片显示：马奔跑时始终有一蹄着地。",
          vi: "Ảnh cho thấy: khi ngựa chạy luôn có một móng guốc chạm đất.",
          keywords: ["ảnh cho thấy", "luôn có", "móng guốc", "chạm đất"]
        },
        {
          zh: "经过艰苦的试验，电影拍摄技术逐渐改进、成熟。",
          vi: "Qua thử nghiệm gian khổ, kỹ thuật quay phim dần dần được cải tiến, hoàn thiện.",
          keywords: ["thử nghiệm gian khổ", "dần dần", "cải tiến", "hoàn thiện"]
        },
        {
          zh: "这一天后来成为电影产生的纪念日。",
          vi: "Ngày này về sau trở thành ngày kỷ niệm ra đời của điện ảnh.",
          keywords: ["về sau", "kỷ niệm", "ra đời", "điện ảnh"]
        },
        {
          zh: "留心生活的每一瞬间，或许重大发现就在你的眼前。",
          vi: "Hãy để tâm đến từng khoảnh khắc của cuộc sống, có lẽ phát hiện quan trọng đang ở ngay trước mắt bạn.",
          keywords: ["để tâm", "khoảnh khắc", "có lẽ", "phát hiện quan trọng"]
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
          vi: "Họ tranh luận xoay quanh vấn đề này suốt cả buổi chiều.",
          answers: ["他们围绕这个问题争论了一个下午。"]
        },
        {
          vi: "Kết quả thử nghiệm cho thấy phương pháp này khả thi.",
          answers: ["试验结果显示这个方法是可行的。", "试验结果显示这个方法可行。"]
        },
        {
          vi: "Trình độ tiếng Trung của anh ấy đang dần dần tiến bộ.",
          answers: ["他的汉语水平正在逐渐进步。", "他的汉语水平逐渐在进步。"]
        },
        {
          vi: "Dù sao anh ấy cũng chỉ là một đứa trẻ.",
          answers: ["毕竟他还是一个孩子。", "他毕竟还是一个孩子。"]
        },
        {
          vi: "Có lẽ phát hiện quan trọng đang ở ngay trước mắt bạn.",
          answers: ["或许重大发现就在你的眼前。"]
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
          q: "斯坦福和科恩争论的问题是“马奔跑时蹄子是否着地”。",
          a: true
        },
        {
          q: "科恩认为马奔跑时四蹄都不着地。",
          a: false
        },
        {
          q: "他们请了一位英国摄影师来判断。",
          a: true
        },
        {
          q: "摄影师一共用了24个照相机来拍摄。",
          a: true
        },
        {
          q: "相片最终显示马奔跑时四蹄都不着地。",
          a: false
        },
        {
          q: "电影最早的样子是无意中被人发现的。",
          a: true
        },
        {
          q: "世界上第一部电影是卢米埃尔兄弟拍摄的《火车到站》。",
          a: true
        },
        {
          q: "电影产生的纪念日是为了纪念斯坦福和科恩的争论。",
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
      items: ["斯坦福与科恩围绕这个问题进行了辩论。", "相片显示马奔跑时始终有一蹄着地。", "摄影师毕竟是摄影师。", "电影拍摄技术逐渐改进成熟。", "或许重大发现就在你的眼前。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“日常生活中的大发现或发明”为题写一段话。 (Hãy viết một đoạn văn về một phát hiện hoặc phát minh lớn trong cuộc sống thường ngày.)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 10 (显示/显得, 毕竟, 逐渐).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["显示", "显得", "毕竟", "逐渐"],
      minGrammar: 2,
      sample: "生活中很多重大发明其实都来自一场争论或者一次意外。就像电影的诞生，最初只是斯坦福和科恩围绕“马奔跑时蹄子是否着地”进行的一场辩论，谁也说服不了谁，于是请摄影师用24台照相机做了一个试验。没想到，把这些照片快速拉动的时候，居然出现了“奇迹”——静止的照片连成了一匹会动的马，这就是电影最早的样子。经过艰苦的试验，这项技术逐渐改进、成熟，最终发展成了今天的电影产业。这个故事让我意识到，毕竟生活中处处都有值得留心的细节，或许下一个重大发现，就藏在我们每天习以为常的小事里。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 显示 / 显得",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (显示 so với 显得).",
      kind: "grammar-fill",
      grammarWord: "显示 / 显得",
      options: ["显得", "显示"],
      items: [
        {
          q: "他最近怎么了？总是___不太高兴。",
          answers: ["显得"]
        },
        {
          q: "调查___，只有37%的人愿意回到没有手机的时代。",
          answers: ["显示"]
        },
        {
          q: "节日的北京___更加美丽。",
          answers: ["显得"]
        },
        {
          q: "你得___出自己的本领，公司才会愿意用你。",
          answers: ["显示"]
        },
        {
          q: "相片___：马奔跑时始终有一蹄着地。",
          answers: ["显示"]
        },
        {
          q: "几年不见，他___成熟多了。",
          answers: ["显得"]
        },
        {
          q: "这次活动的组织___出了他的才能。",
          answers: ["显示"]
        },
        {
          q: "中秋节那天，月亮___格外明亮。",
          answers: ["显得"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 毕竟",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (毕竟 - phó từ đa nghĩa \"dù sao, rốt cuộc\").",
      kind: "grammar-fill",
      grammarWord: "毕竟",
      items: [
        {
          q: "虽然我们遇到了很多困难，但___完成了任务。",
          answers: ["毕竟"]
        },
        {
          q: "不过摄影师___是摄影师，主意还是有的。",
          answers: ["毕竟"]
        },
        {
          q: "生活中总有无法解决的问题，___不是所有的对错都能讲清楚。",
          answers: ["毕竟"]
        },
        {
          q: "他不高兴是正常的，___没有人能在摔得头破血流的时候还高兴得起来。",
          answers: ["毕竟"]
        },
        {
          q: "你们___是好朋友，应该互相理解。",
          answers: ["毕竟"]
        },
        {
          q: "这孩子真是太淘气了！——___他还是个孩子，你别太生气。",
          answers: ["毕竟"]
        },
        {
          q: "他最近脾气真是太差了——___最近工作压力太大了。",
          answers: ["毕竟"]
        },
        {
          q: "___他还是一个孩子，你不要对他这么严格。",
          answers: ["毕竟"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 逐渐",
      points: 5,
      subtitle: "Điền từ vào chỗ trống (逐渐 - phó từ \"dần dần\").",
      kind: "grammar-fill",
      grammarWord: "逐渐",
      items: [
        {
          q: "食物越来越少，老人不得不___限制猴子的食量。",
          answers: ["逐渐"]
        },
        {
          q: "这项运动首先在亚太地区流行，并___受到世界各地人们的欢迎。",
          answers: ["逐渐"]
        },
        {
          q: "经过艰苦的试验，电影拍摄技术___改进、成熟。",
          answers: ["逐渐"]
        },
        {
          q: "随着国家的发展，人民的生活水平___提高。",
          answers: ["逐渐"]
        },
        {
          q: "他长大后，___明白了学习的重要性。",
          answers: ["逐渐"]
        },
        {
          q: "茶首先在中国出现，后来___传到了世界各地。",
          answers: ["逐渐"]
        },
        {
          q: "我刚来北京的时候不太习惯，后来___适应了这里的生活。",
          answers: ["逐渐"]
        },
        {
          q: "随着科技的发展，人们的生活方式也在___改变。",
          answers: ["逐渐"]
        }
      ]
    }
  ]
};
