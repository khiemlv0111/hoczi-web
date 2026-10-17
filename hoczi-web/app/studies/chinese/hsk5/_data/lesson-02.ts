import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第2课 留串钥匙给父母 (Leave a Bunch of Keys to Parents)
// Nguồn: slide bài 2 và bộ bài tập "HSK5 tiêu chuẩn bài 2" trong hsk5/docs.
export const lesson02: Lesson = {
  level: "hsk5",
  no: 2,
  slug: "bai-2",
  zh: "留串钥匙给父母",
  pinyin: "Liú chuàn yàoshi gěi fùmǔ",
  vi: "Để lại chùm chìa khóa cho cha mẹ",
  en: "Leave a Bunch of Keys to Parents",
  topic: "父母与子女关系 · Cha mẹ và con cái",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 农村、屋子、姥姥、舅舅、姑姑、打工、挣、装修、醉、锁、想象…",
    "Nắm cách kết hợp của các từ: 断、晒、强烈、长途、一辈子、坚决、不得了、套、阵.",
    "Hiểu và dùng được 以来、临、立刻; phân biệt 悄悄 và 偷偷.",
    "Đọc hiểu câu chuyện tình cảm giữa tác giả và cha mẹ, kể lại bằng từ vựng đã học.",
    "Thảo luận về tình yêu của cha mẹ dành cho con cái và viết đoạn văn 「最深的爱」.",
    "Nắm các từ mở rộng chủ đề 亲属 (họ hàng) và 交往 (giao tiếp)."
  ],
  warmUp: [
    {
      zh: "你了解汉语中表示亲戚关系的词语吗？",
      vi: "Bạn có biết những từ chỉ quan hệ họ hàng trong tiếng Trung không? (外公、姥姥、叔叔、舅舅、姑姑…)"
    },
    {
      zh: "在你们国家，一般怎么称呼家人和亲戚？",
      vi: "Ở nước bạn thường xưng hô với người nhà và họ hàng như thế nào?"
    },
    {
      zh: "你认为父母的爱都体现在哪些方面？",
      vi: "Theo bạn, tình yêu của cha mẹ thể hiện ở những phương diện nào?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "串",
      py: "chuàn",
      pos: "lt.",
      meaning: "chuỗi, xâu, chùm",
      example: "虽然离开老家很多年了，但我还留着一串老家的钥匙。",
      exampleVi: "Dù đã rời quê nhiều năm nhưng tôi vẫn giữ một chùm chìa khóa của quê nhà."
    },
    {
      id: 2,
      han: "姥姥",
      py: "lǎolao",
      pos: "dt.",
      meaning: "bà ngoại",
      example: "姥姥今年八十岁了，身体很好。",
      exampleVi: "Bà ngoại năm nay 80 tuổi rồi, sức khỏe rất tốt."
    },
    {
      id: 3,
      han: "舅舅",
      py: "jiùjiu",
      pos: "dt.",
      meaning: "cậu (anh/em trai của mẹ)",
      example: "舅舅在北京工作。",
      exampleVi: "Cậu làm việc ở Bắc Kinh."
    },
    {
      id: 4,
      han: "姑姑",
      py: "gūgu",
      pos: "dt.",
      meaning: "cô (chị/em gái của bố)",
      example: "姑姑经常来我家做客。",
      exampleVi: "Cô thường đến nhà tôi chơi."
    },
    {
      id: 5,
      han: "农村",
      py: "nóngcūn",
      pos: "dt.",
      meaning: "nông thôn",
      example: "父母一辈子住在农村老家。",
      exampleVi: "Bố mẹ cả đời sống ở quê nhà nông thôn."
    },
    {
      id: 6,
      han: "屋（子）",
      py: "wū(zi)",
      pos: "dt.",
      meaning: "nhà, căn phòng",
      example: "这间屋子很干净。",
      exampleVi: "Căn phòng này rất sạch sẽ."
    },
    {
      id: 7,
      han: "一辈子",
      py: "yíbèizi",
      pos: "dt.",
      meaning: "cả đời",
      example: "父母一辈子住在农村老家。",
      exampleVi: "Bố mẹ cả đời sống ở quê nhà nông thôn."
    },
    {
      id: 8,
      han: "以来",
      py: "yǐlái",
      pos: "dt.",
      meaning: "từ ... đến nay",
      example: "因此长年以来，父母很少离开老屋。",
      exampleVi: "Vì vậy từ nhiều năm nay, bố mẹ ít khi rời khỏi ngôi nhà cũ."
    },
    {
      id: 9,
      han: "打工",
      py: "dǎgōng",
      pos: "đg.",
      meaning: "đi làm thuê",
      example: "现在有很多人离开农村去大城市打工。",
      exampleVi: "Hiện nay có rất nhiều người rời nông thôn lên thành phố lớn làm thuê."
    },
    {
      id: 10,
      han: "挣",
      py: "zhèng",
      pos: "đg.",
      meaning: "kiếm (tiền)",
      example: "夫妻俩在上海打工，挣了一些钱。",
      exampleVi: "Hai vợ chồng đi làm thuê ở Thượng Hải, kiếm được một ít tiền."
    },
    {
      id: 11,
      han: "县",
      py: "xiàn",
      pos: "dt.",
      meaning: "huyện",
      example: "这是我们县最古老的房子。",
      exampleVi: "Đây là ngôi nhà cổ nhất huyện chúng tôi."
    },
    {
      id: 12,
      han: "套",
      py: "tào",
      pos: "lt.",
      meaning: "căn, bộ",
      example: "他们在县里买了一套房子。",
      exampleVi: "Họ đã mua một căn nhà ở huyện."
    },
    {
      id: 13,
      han: "装修",
      py: "zhuāngxiū",
      pos: "đg.",
      meaning: "trang trí, sửa sang (nhà)",
      example: "房子装修好了，过两个月就可以搬进去住了。",
      exampleVi: "Nhà đã sửa sang xong, hai tháng nữa là có thể dọn vào ở."
    },
    {
      id: 14,
      han: "不得了",
      py: "bùdéliǎo",
      pos: "tt.",
      meaning: "cực kỳ, vô cùng",
      example: "哥哥买了一套新房子，父母高兴得不得了。",
      exampleVi: "Anh trai mua được một căn nhà mới, bố mẹ vui mừng vô cùng."
    },
    {
      id: 15,
      han: "悄悄",
      py: "qiāoqiāo",
      pos: "p.",
      meaning: "âm thầm, lặng lẽ",
      example: "父亲悄悄把我拉到一边说话。",
      exampleVi: "Bố lặng lẽ kéo tôi ra một bên nói chuyện."
    },
    {
      id: 16,
      han: "偷偷",
      py: "tōutōu",
      pos: "p.",
      meaning: "lén lút, vụng trộm",
      example: "他谁也没告诉，偷偷去旅行了。",
      exampleVi: "Anh ấy không nói với ai, lén lút đi du lịch."
    },
    {
      id: 17,
      han: "断",
      py: "duàn",
      pos: "đg.",
      meaning: "cắt đứt, ngừng",
      example: "对老屋的感情，就像没断奶的孩子对母亲一样。",
      exampleVi: "Tình cảm với ngôi nhà cũ, giống như đứa trẻ chưa cai sữa đối với mẹ vậy."
    },
    {
      id: 18,
      han: "立刻",
      py: "lìkè",
      pos: "p.",
      meaning: "lập tức",
      example: "温暖的气息立刻扑面而来。",
      exampleVi: "Luồng khí ấm áp lập tức ập vào mặt."
    },
    {
      id: 19,
      han: "微笑",
      py: "wēixiào",
      pos: "đg./dt.",
      meaning: "mỉm cười",
      example: "开门的竟是微笑着的父母。",
      exampleVi: "Người mở cửa lại chính là bố mẹ đang mỉm cười."
    },
    {
      id: 20,
      han: "强烈",
      py: "qiángliè",
      pos: "tt.",
      meaning: "mạnh mẽ, mãnh liệt",
      example: "我和妻子强烈留父母在新房住一夜。",
      exampleVi: "Tôi và vợ hết sức nài nỉ bố mẹ ở lại nhà mới một đêm."
    },
    {
      id: 21,
      han: "长途",
      py: "zhǎngtú",
      pos: "tt.",
      meaning: "đường dài",
      example: "下了长途车，儿子被冻得大哭。",
      exampleVi: "Xuống khỏi xe đường dài, con trai bị lạnh khóc ầm lên."
    },
    {
      id: 22,
      han: "想象",
      py: "xiǎngxiàng",
      pos: "đg.",
      meaning: "tưởng tượng",
      example: "我和妻子想象着打开家门满是灰尘的景象。",
      exampleVi: "Tôi và vợ tưởng tượng cảnh mở cửa nhà ra thấy đầy bụi bặm."
    },
    {
      id: 23,
      han: "温暖",
      py: "wēnnuǎn",
      pos: "tt./đg.",
      meaning: "ấm áp",
      example: "温暖的气息立刻扑面而来。",
      exampleVi: "Luồng khí ấm áp lập tức ập vào mặt."
    },
    {
      id: 24,
      han: "阵",
      py: "zhèn",
      pos: "lt.",
      meaning: "trận, cơn",
      example: "厨房里飘来阵阵饭菜香。",
      exampleVi: "Từ bếp thoảng đến từng cơn hương thơm của thức ăn."
    },
    {
      id: 25,
      han: "临",
      py: "lín",
      pos: "đg./gt.",
      meaning: "gần, cạnh; sắp (thời điểm)",
      example: "临走那天，父亲从老家赶来送我们。",
      exampleVi: "Vào ngày sắp đi, bố từ quê vội đến tiễn chúng tôi."
    },
    {
      id: 26,
      han: "醉",
      py: "zuì",
      pos: "đg.",
      meaning: "say (rượu)",
      example: "父亲喝醉了，等他醒时，天色已晚。",
      exampleVi: "Bố uống say rồi, đợi ông tỉnh dậy thì trời đã tối."
    },
    {
      id: 27,
      han: "锁",
      py: "suǒ",
      pos: "dt./đg.",
      meaning: "khóa",
      example: "新房只能上锁空着。",
      exampleVi: "Nhà mới đành phải khóa lại để trống."
    },
    {
      id: 28,
      han: "晒",
      py: "shài",
      pos: "đg.",
      meaning: "phơi nắng",
      example: "顺便给你们晒晒被子。",
      exampleVi: "Tiện thể phơi giúp các con cái chăn."
    },
    {
      id: 29,
      han: "亮",
      py: "liàng",
      pos: "tt./đg.",
      meaning: "sáng",
      example: "抬头一看，却发现自家亮着灯光。",
      exampleVi: "Ngẩng đầu lên nhìn, lại phát hiện nhà mình đang sáng đèn."
    },
    {
      id: 30,
      han: "扑",
      py: "pū",
      pos: "đg.",
      meaning: "lao tới, ập vào",
      example: "温暖的气息立刻扑面而来。",
      exampleVi: "Luồng khí ấm áp lập tức ập vào mặt."
    },
    {
      id: 31,
      han: "冻",
      py: "dòng",
      pos: "đg.",
      meaning: "đông lạnh, cóng",
      example: "下了长途车，儿子被冻得大哭。",
      exampleVi: "Xuống khỏi xe đường dài, con trai bị lạnh cóng khóc ầm lên."
    },
    {
      id: 32,
      han: "流泪",
      py: "liúlèi",
      pos: "đg.",
      meaning: "rơi lệ",
      example: "我鼻子一酸，流下了热泪。",
      exampleVi: "Tôi thấy mũi cay xè, rơi những giọt nước mắt nóng hổi."
    },
    {
      id: 33,
      han: "飘",
      py: "piāo",
      pos: "đg.",
      meaning: "phất phơ, bay trong không khí",
      example: "厨房里飘来阵阵饭菜香。",
      exampleVi: "Từ bếp thoảng đến từng cơn hương thơm của thức ăn."
    },
    {
      id: 34,
      han: "卧室",
      py: "wòshì",
      pos: "dt.",
      meaning: "phòng ngủ",
      example: "卧室床上的被子已铺好。",
      exampleVi: "Chăn trên giường phòng ngủ đã được trải sẵn."
    },
    {
      id: 35,
      han: "坚决",
      py: "jiānjué",
      pos: "tt.",
      meaning: "kiên quyết",
      example: "父母也坚决不在城里住。",
      exampleVi: "Bố mẹ cũng kiên quyết không ở thành phố."
    },
    {
      id: 36,
      han: "被子",
      py: "bèizi",
      pos: "dt.",
      meaning: "chăn, mền",
      example: "卧室床上的被子已铺好。",
      exampleVi: "Chăn trên giường phòng ngủ đã được trải sẵn."
    },
    {
      id: 37,
      han: "灰尘",
      py: "huīchén",
      pos: "dt.",
      meaning: "bụi",
      example: "我和妻子想象着打开家门满是灰尘的景象。",
      exampleVi: "Tôi và vợ tưởng tượng cảnh mở cửa nhà ra thấy đầy bụi bặm."
    },
    {
      id: 38,
      han: "铺",
      py: "pū",
      pos: "đg.",
      meaning: "trải, lót",
      example: "卧室床上的被子已铺好。",
      exampleVi: "Chăn trên giường phòng ngủ đã được trải sẵn."
    },
    {
      id: 39,
      han: "感受",
      py: "gǎnshòu",
      pos: "đg./dt.",
      meaning: "cảm nhận",
      example: "能立刻感受到家的温暖。",
      exampleVi: "Có thể lập tức cảm nhận được sự ấm áp của gia đình."
    },
    {
      id: 40,
      han: "叔叔",
      py: "shūshu",
      pos: "dt.",
      meaning: "chú (em trai của bố)",
      example: "叔叔对我很好。",
      exampleVi: "Chú đối xử với tôi rất tốt.",
      group: "extended"
    },
    {
      id: 41,
      han: "外公",
      py: "wàigōng",
      pos: "dt.",
      meaning: "ông ngoại",
      example: "外公喜欢种花。",
      exampleVi: "Ông ngoại thích trồng hoa.",
      group: "extended"
    },
    {
      id: 42,
      han: "外婆",
      py: "wàipó",
      pos: "dt.",
      meaning: "bà ngoại",
      example: "外婆做的饭很好吃。",
      exampleVi: "Cơm bà ngoại nấu rất ngon.",
      group: "extended"
    },
    {
      id: 43,
      han: "表姐",
      py: "biǎojiě",
      pos: "dt.",
      meaning: "chị họ",
      example: "表姐比我大两岁。",
      exampleVi: "Chị họ lớn hơn tôi hai tuổi.",
      group: "extended"
    },
    {
      id: 44,
      han: "表弟",
      py: "biǎodì",
      pos: "dt.",
      meaning: "em họ (trai)",
      example: "表弟很调皮。",
      exampleVi: "Em họ rất nghịch ngợm.",
      group: "extended"
    },
    {
      id: 45,
      han: "舅妈",
      py: "jiùmā",
      pos: "dt.",
      meaning: "mợ (vợ của cậu)",
      example: "舅妈对我们很热情。",
      exampleVi: "Mợ đối xử với chúng tôi rất nhiệt tình.",
      group: "extended"
    },
    {
      id: 46,
      han: "阿姨",
      py: "āyí",
      pos: "dt.",
      meaning: "dì, cô (gọi phụ nữ lớn tuổi)",
      example: "阿姨在超市工作。",
      exampleVi: "Dì làm việc ở siêu thị.",
      group: "extended"
    },
    {
      id: 47,
      han: "坦率",
      py: "tǎnshuài",
      pos: "tt.",
      meaning: "thẳng thắn",
      example: "他说话很坦率。",
      exampleVi: "Anh ấy nói chuyện rất thẳng thắn.",
      group: "extended"
    },
    {
      id: 48,
      han: "小气",
      py: "xiǎoqi",
      pos: "tt.",
      meaning: "keo kiệt",
      example: "他对朋友很小气。",
      exampleVi: "Anh ấy rất keo kiệt với bạn bè.",
      group: "extended"
    },
    {
      id: 49,
      han: "周到",
      py: "zhōudào",
      pos: "tt.",
      meaning: "chu đáo",
      example: "她做事很周到。",
      exampleVi: "Cô ấy làm việc rất chu đáo.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 留串钥匙给父母",
    paragraphs: [
      {
        zh: "父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。因此长年以来，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也坚决不在城里住。",
        vi: "Cha mẹ tôi cả đời sống ở quê, tình cảm với căn nhà cũ giống như đứa trẻ chưa dứt sữa đối với mẹ. Vì vậy bao năm nay, cha mẹ rất ít khi rời khỏi nhà cũ; dù bà ngoại, cậu và cô đều ở thành phố, cha mẹ vẫn kiên quyết không sống ở thành phố.",
        questions: ["父母以前住在哪儿？他们有什么样的习惯？", "你觉得“没断奶的孩子”是什么意思？", "请用重点词语复述故事：一辈子、以来、坚决"]
      },
      {
        zh: "去年，在我和妻子的努力下，我们终于用打工挣的钱，在县里买了一套新房。新房装修完，父母第一次走进新房时，高兴得不得了。妻子提出留一串钥匙给父母，可他们拒绝了。那天，父亲喝醉了，等他醒时，天色已晚。我和妻子强烈留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。",
        vi: "Năm ngoái, nhờ sự cố gắng của tôi và vợ, cuối cùng chúng tôi đã dùng tiền đi làm thuê kiếm được mua một căn nhà mới trên huyện. Nhà mới sửa sang xong, lần đầu cha mẹ bước vào đã vui mừng khôn xiết. Vợ tôi đề nghị để lại một chùm chìa khóa cho cha mẹ, nhưng họ từ chối. Hôm đó cha tôi uống say, khi ông tỉnh dậy thì trời đã tối. Vợ chồng tôi cố hết sức giữ cha mẹ ở lại nhà mới một đêm, hôm sau hẵng về, nhưng họ vẫn nhất quyết lên chuyến xe cuối cùng về quê.",
        questions: ["“我”和妻子什么时候在县里买了新房？这时候父母的心情如何？", "请用重点词语复述故事：打工、装修、不得了、醉、强烈"]
      },
      {
        zh: "一段时间后，我和妻子又准备去外地打工，新房只能上锁空着。临走那天，父亲从老家赶来送我们。父亲悄悄把我拉到一边说：“你妈说了，你还是留一串新房的钥匙给我们，要是我和你妈什么时候想来了，就来住上几天，顺便给你们晒晒被子，打扫打扫卫生。”父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。",
        vi: "Một thời gian sau, vợ chồng tôi lại chuẩn bị đi nơi khác làm thuê, nhà mới đành khóa cửa để trống. Hôm sắp đi, cha từ quê vội lên tiễn chúng tôi. Cha lặng lẽ kéo tôi sang một bên nói: “Mẹ con bảo, con cứ để lại một chùm chìa khóa nhà mới cho cha mẹ, lúc nào cha mẹ muốn lên thì lên ở vài hôm, tiện thể phơi chăn, dọn dẹp cho các con.” Khi nói câu ấy, cha nói khẽ khàng, mặt còn đỏ lên, như một đứa trẻ hay ngượng.",
        questions: ["我们去外地打工的时候，父母提出了什么要求？", "你觉得“轻声细语”是什么意思？", "请用重点词语复述故事：锁、临、悄悄、被子"]
      },
      {
        zh: "转眼又是半年，我们回家时是一个深冬的夜里。下了长途车，儿子被冻得大哭。我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。来到楼下，抬头一看，却发现自家亮着灯光。上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来：室内打扫得干干净净，暖气开着，水已温热，卧室床上的被子已铺好，厨房里飘来阵阵饭菜香……",
        vi: "Chớp mắt lại nửa năm, chúng tôi về nhà vào một đêm giữa mùa đông. Xuống xe đường dài, con trai bị lạnh đến khóc òa. Vợ chồng tôi tưởng tượng cảnh mở cửa ra là bụi bặm, lạnh lẽo vắng vẻ, trong lòng thấy ớn lạnh. Đến dưới tòa nhà, ngẩng đầu nhìn lên, lại thấy nhà mình đang sáng đèn. Lên lầu, người mở cửa lại là cha mẹ đang mỉm cười, hơi ấm lập tức ùa vào mặt: trong nhà quét dọn sạch sẽ, lò sưởi đã bật, nước đã ấm, chăn trên giường phòng ngủ đã trải sẵn, từ bếp bay ra từng đợt mùi cơm canh thơm phức…",
        questions: ["回来的时候，“我”想象的情况是什么样的？实际的情况是什么样的？", "你觉得“扑面而来”是什么意思？"]
      },
      {
        zh: "父亲说：“你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。”原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！我鼻子一酸，流下了热泪……",
        vi: "Cha nói: “Hôm qua mẹ con nhận được điện thoại, biết tối nay các con về, hôm nay lên nhà mới bận rộn cả ngày rồi.” Thì ra cha mẹ muốn tôi để lại chùm chìa khóa, chỉ là để khi chúng tôi trở về có thể lập tức cảm nhận được hơi ấm gia đình! Sống mũi tôi cay cay, nước mắt nóng hổi trào ra…",
        questions: ["父母为什么要我们留下一串钥匙？", "在这里，“鼻子一酸”是什么意思？", "在你的文化里，父母会不会这样做呢？"]
      }
    ],
    notes: [
      "没断奶的孩子: đứa trẻ chưa dứt sữa – ví sự gắn bó không thể rời xa.",
      "轻声细语: nói nhỏ nhẹ, khẽ khàng. 扑面而来: ùa thẳng vào mặt. 鼻子一酸: sống mũi cay cay (sắp khóc)."
    ]
  },
  grammar: [
    {
      word: "悄悄 / 偷偷",
      title: "Phân biệt 悄悄 / 偷偷",
      usages: [
        {
          label: "悄悄",
          explain: "Phó từ \"âm thầm, nhẹ nhàng, không gây chú ý\" - trung tính, không nhất thiết mang ý lén lút/xấu.",
          examples: ["父亲悄悄把我拉到一边说话。"]
        },
        {
          label: "偷偷",
          explain: "Phó từ \"lén lút, vụng trộm\" - thiên về làm việc gì đó không muốn/không được phép cho người khác biết, đôi khi mang sắc thái tiêu cực.",
          examples: ["他谁也没告诉，偷偷去旅行了。"]
        }
      ],
      note: "Trong nhiều trường hợp trung tính (nói nhỏ, đi nhẹ, làm gì đó không muốn gây chú ý) hai từ có thể thay thế cho nhau. Nhưng khi hàm ý \"giấu giếm, không được phép, có phần xấu hổ hoặc vi phạm\", chỉ dùng được 偷偷."
    },
    {
      word: "临",
      title: "Động từ (gần, cạnh) & giới từ (sắp...)",
      usages: [
        {
          label: "Gần, cạnh, đối diện",
          explain: "Động từ: 临街/临江/临海",
          examples: ["我想买一套不临街的房子。"]
        },
        {
          label: "Sắp, gần đến (thời điểm)",
          explain: "Giới từ: 临 + động từ",
          examples: ["临走那天，父亲从老家赶来送我们。"]
        }
      ],
      note: "Nghĩa (1) chỉ vị trí không gian gần một địa điểm cụ thể; nghĩa (2) chỉ thời điểm ngay trước khi một hành động xảy ra, thường đi với một động từ phía sau (临走、临离开、临下班...)."
    },
    {
      word: "立刻 / 马上",
      title: "Phân biệt 立刻 / 马上",
      usages: [
        {
          label: "立刻",
          explain: "Phó từ nhấn mạnh khoảng thời gian cực ngắn, hành động nối tiếp ngay lập tức sau hành động/sự việc trước.",
          examples: ["温暖的气息立刻扑面而来。"]
        },
        {
          label: "马上",
          explain: "Cũng biểu thị nhanh chóng, gấp rút nhưng hành động có thể có một độ trễ nhỏ trước khi thực hiện, sắc thái khẩu ngữ hơn.",
          examples: ["春节马上就要到了。"]
        }
      ],
      note: "Cả hai đều biểu thị \"thời gian gấp rút, hành động nhanh chóng\" và phần lớn có thể thay thế cho nhau. Tuy nhiên trong văn cảnh diễn tả một phản ứng/kết quả xảy ra ngay tức khắc, ngay sau một tác nhân (như trong bài khóa), 立刻 tự nhiên hơn."
    }
  ],
  wordChoice: [
    {
      sentence: "父亲喝___了，等他醒时，天色已晚。",
      options: ["醉", "锁", "晒", "冻", "亮", "扑", "临"],
      answer: "醉"
    },
    {
      sentence: "孩子一看到我就高兴地向我___了过来，要我抱他。",
      options: ["醉", "锁", "晒", "冻", "亮", "扑", "临"],
      answer: "扑"
    },
    {
      sentence: "天气好的时候，要把被子拿出来___一下。",
      options: ["醉", "锁", "晒", "冻", "亮", "扑", "临"],
      answer: "晒"
    },
    {
      sentence: "加班到半夜，回家时看到家里的灯还___着，心里暖暖的。",
      options: ["醉", "锁", "晒", "冻", "亮", "扑", "临"],
      answer: "亮"
    },
    {
      sentence: "老家的房子没人住，只好上___空着。",
      options: ["醉", "锁", "晒", "冻", "亮", "扑", "临"],
      answer: "锁"
    },
    {
      sentence: "你觉得我穿这___西服去电视台参加节目怎么样？",
      options: ["断", "套", "锁", "挣", "长途", "打工", "强烈", "想象"],
      answer: "套"
    },
    {
      sentence: "国际___电话很贵，现在我们一般上网聊天儿。",
      options: ["断", "套", "锁", "挣", "长途", "打工", "强烈", "想象"],
      answer: "长途"
    },
    {
      sentence: "因为同学们___要求，我们决定这个周末出去活动。",
      options: ["断", "套", "锁", "挣", "长途", "打工", "强烈", "想象"],
      answer: "强烈"
    },
    {
      sentence: "孩子睡着了，爸爸在妈妈耳边___说了几句话。",
      options: ["悄悄", "偷偷"],
      answer: "悄悄"
    },
    {
      sentence: "他的态度很___，恐怕不会改变主意了。",
      options: ["坚持", "坚决"],
      answer: "坚决"
    },
    {
      sentence: "只有一个星期了，春节___就要到了。",
      options: ["马上", "立刻"],
      answer: "马上"
    },
    {
      sentence: "女服务员给了我一个___的微笑。",
      options: ["温暖", "缓和"],
      answer: "温暖"
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
          distractors: [12, 24, 6]
        },
        {
          vocabId: 2,
          distractors: [3, 4, 41]
        },
        {
          vocabId: 3,
          distractors: [2, 4, 45]
        },
        {
          vocabId: 4,
          distractors: [2, 3, 40]
        },
        {
          vocabId: 5,
          distractors: [11, 6, 21]
        },
        {
          vocabId: 13,
          distractors: [9, 10, 26]
        },
        {
          vocabId: 26,
          distractors: [31, 17, 30]
        },
        {
          vocabId: 32,
          distractors: [19, 39, 23]
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
      vocabIds: [8, 14, 20, 22, 23, 35, 39, 37]
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
          tokens: ["父母", "一辈子", "住在", "农村老家", "。"],
          answer: "父母一辈子住在农村老家。",
          vi: "Bố mẹ cả đời sống ở quê nhà nông thôn."
        },
        {
          tokens: ["父亲", "悄悄", "把我", "拉到一边", "说话", "。"],
          answer: "父亲悄悄把我拉到一边说话。",
          vi: "Bố lặng lẽ kéo tôi ra một bên nói chuyện."
        },
        {
          tokens: ["温暖的气息", "立刻", "扑面而来", "。"],
          answer: "温暖的气息立刻扑面而来。",
          vi: "Luồng khí ấm áp lập tức ập vào mặt."
        },
        {
          tokens: ["我们", "又", "准备", "去外地", "打工", "。"],
          answer: "我们又准备去外地打工。",
          vi: "Chúng tôi lại chuẩn bị đi nơi khác làm thuê."
        },
        {
          tokens: ["新房", "只能", "上锁", "空着", "。"],
          answer: "新房只能上锁空着。",
          vi: "Nhà mới đành phải khóa lại để trống."
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
          title: "课文 1 (đoạn 3) · Bố lặng lẽ dặn dò trước lúc chia tay",
          text: "一段时间后，我和妻子又准备去外地{{d1}}，新房只能上{{d2}}空着。{{d3}}走那天，父亲从老家赶来送我们。父亲{{d4}}把我拉到一边说：“你妈说了，你还是留一{{d5}}新房的钥匙给我们，要是我和你妈什么时候想来了，就来住上几天，顺便帮你们{{d6}}一下被子，打扫打扫卫生。”父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。"
        },
        {
          title: "课文 1 (đoạn kết) · Sự thật phía sau chùm chìa khóa",
          text: "父亲说：“你妈昨天接到电话，知道你们今晚回来，今天来新房忙了一天了。”原来父母要我留下串钥匙，只是为了让我们回来时，能{{d9}}{{d7}}到家的{{d8}}！我鼻子一酸，{{d10}}了……"
        }
      ],
      answers: {
        d1: "打工",
        d2: "锁",
        d3: "临",
        d4: "悄悄",
        d5: "串",
        d6: "晒",
        d7: "感受",
        d8: "温暖",
        d9: "立刻",
        d10: "流泪"
      },
      bank: ["打工", "锁", "临", "悄悄", "串", "晒", "感受", "温暖", "立刻", "流泪", "装修", "冻", "偷偷"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể về bố mẹ và ngôi nhà cũ.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 1) · Ngôi nhà cũ ở quê",
          text: "父母{{t1}}住在农村老家，对老屋的感情，就像没{{t2}}奶的孩子对母亲一样。因此长年{{t3}}，父母很少离开老屋，尽管姥姥、舅舅和姑姑都在城里，父母也{{t4}}不在城里住。"
        },
        {
          title: "课文 1 (đoạn 2) · Ngôi nhà mới trong huyện",
          text: "去年，在我和妻子的努力下，我们终于用打工{{t5}}的钱，在县里买了一套新房。新房{{t6}}完，父母第一次走进新房时，高兴得{{t7}}。妻子提出留一串钥匙给父母，可他们拒绝了。那天，父亲喝{{t8}}了，等他醒时，天色已晚。我和妻子{{t9}}留父母在新房住一夜，第二天再回，但他们仍坚持坐上了最后一趟回老家的车。"
        },
        {
          title: "课文 1 (đoạn 4) · Ngày trở về giữa mùa đông",
          text: "转眼又是半年，我们回家时是一个深冬的夜里。下了{{t10}}车，儿子被冻得大哭。我和妻子想象着打开家门满是灰尘、冷冷清清的景象，觉得心里发寒。来到楼下，抬头一看，却发现自家亮着灯光。上了楼，开门的竟是微笑着的父母，温暖的气息立刻扑面而来……"
        }
      ],
      answers: {
        t1: "一辈子",
        t2: "断",
        t3: "以来",
        t4: "坚决",
        t5: "挣",
        t6: "装修",
        t7: "不得了",
        t8: "醉",
        t9: "强烈",
        t10: "长途"
      },
      bank: ["一辈子", "断", "以来", "坚决", "挣", "装修", "不得了", "醉", "强烈", "长途", "冻", "想象", "灰尘"]
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
          zh: "父母一辈子住在农村老家，对老屋的感情，就像没断奶的孩子对母亲一样。",
          vi: "Bố mẹ cả đời sống ở quê nhà nông thôn, tình cảm với ngôi nhà cũ giống như đứa trẻ chưa cai sữa đối với mẹ vậy.",
          keywords: ["cả đời", "nông thôn", "tình cảm", "chưa cai sữa"]
        },
        {
          zh: "温暖的气息立刻扑面而来。",
          vi: "Luồng khí ấm áp lập tức ập vào mặt.",
          keywords: ["ấm áp", "lập tức", "ập vào mặt"]
        },
        {
          zh: "原来父母要我留下串钥匙，只是为了让我们回来时，能立刻感受到家的温暖！",
          vi: "Hóa ra bố mẹ bảo tôi để lại chùm chìa khóa, chỉ là để khi chúng tôi trở về có thể lập tức cảm nhận được sự ấm áp của gia đình!",
          keywords: ["hóa ra", "chùm chìa khóa", "cảm nhận", "ấm áp"]
        },
        {
          zh: "我鼻子一酸，流下了热泪。",
          vi: "Tôi thấy mũi cay xè, rơi những giọt nước mắt nóng hổi.",
          keywords: ["mũi cay", "nước mắt", "rơi"]
        },
        {
          zh: "父亲说这话时，轻声细语，还红着脸，像个害羞的孩子。",
          vi: "Khi bố nói câu này, giọng nhẹ nhàng, mặt đỏ lên, giống như một đứa trẻ ngại ngùng.",
          keywords: ["giọng nhẹ nhàng", "mặt đỏ", "đứa trẻ", "ngại ngùng"]
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
          vi: "Bố mẹ kiên quyết không chịu ở thành phố.",
          answers: ["父母坚决不在城里住。", "父母坚决不愿意在城里住。"]
        },
        {
          vi: "Anh ấy lặng lẽ kéo tôi ra một bên nói chuyện.",
          answers: ["他悄悄把我拉到一边说话。"]
        },
        {
          vi: "Vừa xuống xe đường dài, đứa trẻ đã lạnh cóng khóc ầm lên.",
          answers: ["一下长途车，孩子就被冻得大哭起来。", "下了长途车，孩子就被冻得大哭起来。"]
        },
        {
          vi: "Ngôi nhà mới đã trang trí xong rồi.",
          answers: ["新房已经装修好了。"]
        },
        {
          vi: "Tôi lập tức cảm nhận được sự ấm áp của gia đình.",
          answers: ["我立刻感受到了家的温暖。"]
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
          q: "父母一辈子都住在农村老家。",
          a: true
        },
        {
          q: "姥姥、舅舅和姑姑都住在农村。",
          a: false
        },
        {
          q: "妻子提出留钥匙给父母，父母一开始就同意了。",
          a: false
        },
        {
          q: "父亲喝醉了以后，天很晚才醒。",
          a: true
        },
        {
          q: "父母最后坐上了最后一趟车回了老家。",
          a: true
        },
        {
          q: "临走那天，是母亲把“我”拉到一边说悄悄话。",
          a: false
        },
        {
          q: "“我们”回家那天，家里又冷又脏。",
          a: false
        },
        {
          q: "父母留钥匙的真正原因是想让“我们”回来能感受到家的温暖。",
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
      items: ["父亲悄悄把我拉到一边说话。", "温暖的气息立刻扑面而来。", "我鼻子一酸，流下了热泪。", "新房只能上锁空着。", "厨房里飘来阵阵饭菜香。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“最深的爱”为题写一段话。 (Hãy viết một đoạn văn với chủ đề \"Tình yêu sâu đậm nhất\".)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 2 (悄悄/偷偷, 临, 立刻).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["悄悄", "偷偷", "临", "立刻", "马上"],
      minGrammar: 2,
      sample: "说起最深的爱，我总会想起父母。虽然我们在县里买了新房，还给他们装修得很好，可他们一辈子都习惯了农村的老屋，坚决不愿意搬来同住。临走那天，父亲悄悄把我拉到一边，说想留一串新房的钥匙，好在想我们的时候能来住几天，顺便帮我们晒晒被子。后来我们下了长途车回到家，才发现父母早已悄悄来把家里收拾得干干净净，暖气开着，还飘着阵阵饭菜香。那一刻，温暖的感觉立刻涌上心头，我鼻子一酸，流下了眼泪。原来最深的爱，从来不需要多说，它就藏在这些悄悄的细节里。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 悄悄 / 偷偷",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (悄悄 so với 偷偷).",
      kind: "grammar-fill",
      grammarWord: "悄悄 / 偷偷",
      options: ["悄悄", "偷偷"],
      items: [
        {
          q: "晚饭前姑姑就一个人___地走了。",
          answers: ["悄悄", "偷偷"]
        },
        {
          q: "考试已经开始了，他才___走进来。",
          answers: ["悄悄", "偷偷"]
        },
        {
          q: "孩子睡着了，爸爸在妈妈耳边___说了几句话。",
          answers: ["悄悄"]
        },
        {
          q: "别人都不知道，她只是___地把这件事告诉了我。",
          answers: ["偷偷"]
        },
        {
          q: "他没告诉任何人，___一个人去了外地。",
          answers: ["偷偷"]
        },
        {
          q: "父亲___把我拉到一边说话。",
          answers: ["悄悄"]
        },
        {
          q: "弟弟___地拿走了我的手机，还不承认。",
          answers: ["偷偷"]
        },
        {
          q: "她___地走进房间，怕吵醒孩子。",
          answers: ["悄悄"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 临",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (临 - động từ (gần, cạnh) & giới từ (sắp...)).",
      kind: "grammar-fill",
      grammarWord: "临",
      items: [
        {
          q: "我想买一套不___街的房子，这样不会太吵。",
          answers: ["临"]
        },
        {
          q: "___江新修了一条路，晚饭后很多人都去那儿散步。",
          answers: ["临"]
        },
        {
          q: "这是我___离开北京的时候买的。",
          answers: ["临"]
        },
        {
          q: "___走那天，父亲从老家赶来送我们。",
          answers: ["临"]
        },
        {
          q: "他家的房子是___海的，风景很美。",
          answers: ["临"]
        },
        {
          q: "她说这是___时决定的，之前完全没想到。",
          answers: ["临"]
        },
        {
          q: "我们公司___街，交通很方便。",
          answers: ["临"]
        },
        {
          q: "___下班前，经理突然通知开会。",
          answers: ["临"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 立刻 / 马上",
      points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (立刻 so với 马上).",
      kind: "grammar-fill",
      grammarWord: "立刻 / 马上",
      options: ["马上", "立刻"],
      items: [
        {
          q: "只有一个星期了，春节___就要到了。",
          answers: ["马上", "立刻"]
        },
        {
          q: "温暖的气息___扑面而来。",
          answers: ["立刻"]
        },
        {
          q: "那两只羊一见到青草，就___去吃草了。",
          answers: ["立刻"]
        },
        {
          q: "你先等一下，我___就来。",
          answers: ["马上", "立刻"]
        },
        {
          q: "一下课，我们___去吃午饭。",
          answers: ["立刻", "马上"]
        },
        {
          q: "听到这个消息，他___哭了起来。",
          answers: ["立刻"]
        },
        {
          q: "别着急，他___回来。",
          answers: ["马上"]
        },
        {
          q: "医生说了，他___需要住院治疗。",
          answers: ["立刻", "马上"]
        }
      ]
    }
  ]
};
