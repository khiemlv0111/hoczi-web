import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第20课 路上的风景 (Quang cảnh dọc đường)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 135–148 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson20: Lesson = {
  level: "hsk4",
  no: 20,
  slug: "bai-20",
  zh: "路上的风景",
  pinyin: "Lù shang de fēngjǐng",
  vi: "Quang cảnh dọc đường",
  en: "Scenery Along the Way",
  topic: "旅行见闻 · Du lịch và trải nghiệm",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 加油站、航班、推迟、高速公路、登机牌、旅行、可怜、对面、祝贺、合格、干杯、民族、打扮、笑话、钥匙、究竟、对话、普通话、小吃、收拾、出发…",
    "Hiểu và dùng được cấu trúc “động từ + 着 + động từ + 着” và “一……就……”.",
    "Dùng được phó từ 究竟; phân biệt 究竟 và 到底.",
    "Dùng được bổ ngữ 起来 (hướng, bắt đầu – tiếp diễn, đánh giá) và cấu trúc “động từ + 起” (说起、聊起、问起…).",
    "Đọc hiểu các bài khóa về đi sân bay, kế hoạch du lịch, chuyến đi Lệ Giang, khác biệt Nam – Bắc Trung Quốc và ẩm thực Hồ Nam; kể về chuyến du lịch khó quên nhất.",
    "Nắm các từ mở rộng có chữ 格: 性格、价格、表格、合格、严格.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：收拾、小吃、烤鸭、加油站、高速公路、干杯。", vi: "Chọn hình tương ứng với các từ (thu dọn, món ăn vặt, vịt quay, trạm xăng, đường cao tốc, cạn ly) và nói một câu có từ đó để mô tả hình." },
    { zh: "你认为理想的旅行方式是什么样的？为什么？（跟谁一起、旅行方式、出发时间、旅行内容、多长时间）", vi: "Theo bạn, cách du lịch lý tưởng là như thế nào? Vì sao? (Đi cùng ai, phương tiện, thời điểm xuất phát, nội dung chuyến đi, đi bao lâu.)" },
  ],

  vocab: [
    { id: 1, han: "加油站", py: "jiāyóuzhàn", pos: "dt.", meaning: "trạm xăng dầu", example: "该加油了，去机场的路上有加油站吗？", exampleVi: "Phải đổ xăng rồi, trên đường ra sân bay có trạm xăng không?" },
    { id: 2, han: "航班", py: "hángbān", pos: "dt.", meaning: "chuyến bay", example: "你去北京的航班是几点的？", exampleVi: "Chuyến bay đi Bắc Kinh của cậu mấy giờ?" },
    { id: 3, han: "推迟", py: "tuīchí", pos: "đgt.", meaning: "hoãn lại", example: "机场网站上通知推迟了一个小时。", exampleVi: "Trang web sân bay thông báo hoãn lại một tiếng." },
    { id: 4, han: "高速公路", py: "gāosù gōnglù", pos: "dt.", meaning: "đường cao tốc", example: "往西走五百米就能上高速公路。", exampleVi: "Đi về phía tây năm trăm mét là lên được đường cao tốc." },
    { id: 5, han: "登机牌", py: "dēngjīpái", pos: "dt.", meaning: "thẻ lên máy bay", example: "一会儿我自己进去换登机牌。", exampleVi: "Lát nữa tôi tự vào đổi thẻ lên máy bay." },
    { id: 6, han: "首都", py: "shǒudū", pos: "dt.", meaning: "thủ đô", example: "北京是中国的首都。", exampleVi: "Bắc Kinh là thủ đô của Trung Quốc." },
    { id: 7, han: "长江", py: "Chángjiāng", pos: "dt. riêng", meaning: "sông Trường Giang (sông dài nhất ở Trung Quốc)", example: "长江是中国最长的河。", exampleVi: "Trường Giang là con sông dài nhất Trung Quốc." },
    { id: 8, han: "长江大桥", py: "Chángjiāng Dàqiáo", pos: "dt. riêng", meaning: "cầu Trường Giang (ở Nam Kinh)", example: "我记得过了长江大桥往右一拐就有一个。", exampleVi: "Tôi nhớ qua cầu Trường Giang rẽ phải là có một cái." },
    { id: 9, han: "首都机场", py: "Shǒudū Jīchǎng", pos: "dt. riêng", meaning: "sân bay Thủ Đô", example: "等我到了首都机场再给你发短信。", exampleVi: "Đợi tôi đến sân bay Thủ Đô sẽ nhắn tin cho cậu." },
    { id: 10, han: "旅行", py: "lǚxíng", pos: "đgt.", meaning: "du lịch", example: "平时女儿那么多课，总是说想去旅行。", exampleVi: "Ngày thường con gái học nhiều thế, lúc nào cũng nói muốn đi du lịch." },
    { id: 11, han: "怪", py: "guài", pos: "p.", meaning: "rất, vô cùng", example: "但是没时间，怪可怜的。", exampleVi: "Nhưng không có thời gian, thật tội nghiệp." },
    { id: 12, han: "可怜", py: "kělián", pos: "tt.", meaning: "đáng thương, tội nghiệp", example: "我突然发现商店门口有一只可怜的小狗。", exampleVi: "Tôi bỗng thấy trước cửa hàng có một chú chó nhỏ đáng thương." },
    { id: 13, han: "对面", py: "duìmiàn", pos: "dt.", meaning: "đối diện, trước mặt", example: "中午我们不是要去对面的饭店吃烤鸭吗？", exampleVi: "Chẳng phải trưa nay chúng ta định sang nhà hàng đối diện ăn vịt quay sao?" },
    { id: 14, han: "烤鸭", py: "kǎoyā", pos: "dt.", meaning: "vịt quay", example: "中午我们去对面的饭店吃烤鸭。", exampleVi: "Trưa nay chúng ta sang nhà hàng đối diện ăn vịt quay." },
    { id: 15, han: "祝贺", py: "zhùhè", pos: "đgt.", meaning: "chúc mừng", example: "我们去吃烤鸭，祝贺她考试成绩都合格。", exampleVi: "Chúng ta đi ăn vịt quay, chúc mừng con bé thi đều đạt yêu cầu." },
    { id: 16, han: "合格", py: "hégé", pos: "tt.", meaning: "đạt tiêu chuẩn, đạt yêu cầu", example: "只要他这次考试的成绩都合格，就可以进入高级班学习。", exampleVi: "Chỉ cần lần thi này điểm của cậu ấy đều đạt yêu cầu là có thể vào lớp cao cấp." },
    { id: 17, han: "干杯", py: "gān bēi", pos: "đgt.", meaning: "cạn ly", example: "辛苦了，祝贺你们！来，干一杯！", exampleVi: "Vất vả rồi, chúc mừng các bạn! Nào, cạn một ly!" },
    { id: 18, han: "民族", py: "mínzú", pos: "dt.", meaning: "dân tộc", example: "这张照片上和你干杯的那个人是少数民族吗？", exampleVi: "Người cạn ly với cậu trong bức ảnh này là người dân tộc thiểu số à?" },
    { id: 19, han: "打扮", py: "dǎban", pos: "đgt.", meaning: "trang điểm", example: "她打扮得真漂亮。", exampleVi: "Cô ấy trang điểm thật đẹp." },
    { id: 20, han: "笑话", py: "xiàohua", pos: "dt.", meaning: "truyện cười", example: "一路上她给我们讲了很多有趣的笑话。", exampleVi: "Suốt dọc đường cô ấy kể cho chúng tôi rất nhiều chuyện cười thú vị." },
    { id: 21, han: "存", py: "cún", pos: "đgt.", meaning: "gửi", example: "有一次我把存包的钥匙丢了。", exampleVi: "Có lần tôi làm mất chìa khóa tủ gửi đồ." },
    { id: 22, han: "钥匙", py: "yàoshi", pos: "dt.", meaning: "chìa khóa", example: "这张照片就是找到钥匙后，我们一起照的。", exampleVi: "Bức ảnh này chính là chụp chung sau khi tìm được chìa khóa." },
    { id: 23, han: "究竟", py: "jiūjìng", pos: "p.", meaning: "(dùng trong câu hỏi để nhấn mạnh) rốt cuộc", example: "究竟哪个季节去丽江旅游比较好呢？", exampleVi: "Rốt cuộc mùa nào đi Lệ Giang du lịch thì tốt hơn?" },
    { id: 24, han: "棵", py: "kē", pos: "lượng.", meaning: "cây, ngọn (dùng cho thực vật)", example: "窗外的树一棵一棵地变绿。", exampleVi: "Cây ngoài cửa sổ lần lượt từng cây chuyển xanh." },
    { id: 25, han: "汤", py: "tāng", pos: "dt.", meaning: "canh, súp", example: "南方菜很有特点，特别是汤，味道鲜美。", exampleVi: "Món ăn miền Nam rất có đặc trưng, nhất là canh, vị rất ngon ngọt." },
    { id: 26, han: "对话", py: "duìhuà", pos: "đgt.", meaning: "đối thoại, tiếp xúc", example: "你跟上海人对话时，会发现上海话听起来就像外语一样。", exampleVi: "Khi bạn nói chuyện với người Thượng Hải, sẽ thấy tiếng Thượng Hải nghe như tiếng nước ngoài." },
    { id: 27, han: "普通话", py: "pǔtōnghuà", pos: "dt.", meaning: "tiếng phổ thông, tiếng Quan thoại", example: "虽然上海人也会讲普通话，可是仔细听，还是有上海味儿。", exampleVi: "Tuy người Thượng Hải cũng nói tiếng phổ thông, nhưng nghe kỹ vẫn có giọng Thượng Hải." },
    { id: 28, han: "小吃", py: "xiǎochī", pos: "dt.", meaning: "món ăn vặt", example: "旅行能让我有机会尝到各地有名的小吃。", exampleVi: "Du lịch cho tôi cơ hội nếm các món ăn vặt nổi tiếng ở các nơi." },
    { id: 29, han: "收拾", py: "shōushi", pos: "đgt.", meaning: "thu dọn, thu xếp", example: "放假的时候，我会收拾好行李。", exampleVi: "Khi được nghỉ, tôi sẽ thu xếp hành lý." },
    { id: 30, han: "出发", py: "chūfā", pos: "đgt.", meaning: "xuất phát, khởi hành", example: "买张火车票，向目的地出发。", exampleVi: "Mua một vé tàu, khởi hành tới nơi cần đến." },
    { id: 31, han: "辣", py: "là", pos: "tt.", meaning: "cay", example: "湖南菜的特点就是辣。", exampleVi: "Đặc điểm của món ăn Hồ Nam chính là cay." },
    { id: 32, han: "香", py: "xiāng", pos: "tt.", meaning: "thơm", example: "湖南菜的辣主要是咸辣、香辣和酸辣。", exampleVi: "Vị cay của món Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua." },
    { id: 33, han: "酸", py: "suān", pos: "tt.", meaning: "chua", example: "湖南菜的辣主要是咸辣、香辣和酸辣。", exampleVi: "Vị cay của món Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua." },
    { id: 34, han: "性格", py: "xìnggé", pos: "dt.", meaning: "tính cách", example: "我的性格很像我父亲。", exampleVi: "Tính cách của tôi rất giống bố tôi.", group: "extended" },
    { id: 35, han: "价格", py: "jiàgé", pos: "dt.", meaning: "giá cả", example: "当然，价格也要合适。", exampleVi: "Đương nhiên, giá cả cũng phải hợp lý.", group: "extended" },
    { id: 36, han: "表格", py: "biǎogé", pos: "dt.", meaning: "bảng biểu, mẫu đơn", example: "如果您想办信用卡的话，得先填一下这张表格。", exampleVi: "Nếu ông muốn làm thẻ tín dụng thì phải điền tờ đơn này trước.", group: "extended" },
    { id: 37, han: "严格", py: "yángé", pos: "tt.", meaning: "nghiêm khắc, chặt chẽ", example: "他平时就对自己要求很严格。", exampleVi: "Bình thường anh ấy đã rất nghiêm khắc với bản thân.", group: "extended" },
  ],

  text: {
    title: "课文 路上的风景",
    paragraphs: [
      {
        heading: "课文一 · 小张去北京，朋友送小张去机场",
        zh: "朋友：该加油了，去机场的路上有加油站吗？\n小张：我记得过了长江大桥往右一拐就有一个，大概有四五公里远。\n朋友：好，那我就放心了，别开着开着没油了。你去北京的航班是几点的？时间来得及吗？\n小张：航班本来是十点的，后来机场网站上通知推迟了一个小时，所以九点半以前到就应该没问题。\n朋友：刚才我还有点儿担心来不及呢。一会儿加完油，往西走五百米就能上高速公路。走高速公路大约半个小时就到了。\n小张：一会儿我自己进去换登机牌，你就不用送我了，等我到了首都机场再给你发短信。",
        vi: "Bạn: Phải đổ xăng rồi, trên đường ra sân bay có trạm xăng không?\nTiểu Trương: Tớ nhớ là qua cầu Trường Giang rẽ phải là có một trạm, cách chừng bốn năm cây số.\nBạn: Được, vậy tớ yên tâm rồi, kẻo đang lái thì hết xăng. Chuyến bay đi Bắc Kinh của cậu mấy giờ? Có kịp giờ không?\nTiểu Trương: Chuyến bay vốn là mười giờ, sau đó trang web sân bay thông báo hoãn một tiếng, nên đến trước chín rưỡi là chắc không vấn đề gì.\nBạn: Lúc nãy tớ còn hơi lo không kịp. Lát nữa đổ xăng xong, đi về phía tây năm trăm mét là lên được đường cao tốc. Đi đường cao tốc khoảng nửa tiếng là tới.\nTiểu Trương: Lát nữa tớ tự vào đổi thẻ lên máy bay, cậu không cần tiễn tớ đâu, đợi tớ đến sân bay Thủ Đô sẽ nhắn tin cho cậu.",
        questions: ["朋友因为什么事情担心？他和小张是怎么解决的？", "小张坐的航班时间发生了什么变化？她和朋友大约多长时间能到达机场？"],
      },
      {
        heading: "课文二 · 孙月和丈夫计划放寒假带女儿去旅行",
        zh: "孙月：女儿下个星期就要放寒假了，到时候咱们带她去旅游，放松放松，怎么样？\n丈夫：平时女儿那么多课，总是说想去旅行，但是没时间，怪可怜的。这次放假咱们带她去哪儿玩儿比较好呢？\n孙月：去年我同事带她儿子去广西玩儿了一趟，听说很不错，我们就去广西吧。\n丈夫：好啊，那里的气候和北方很不同，即使是冬天，也非常暖和，还能吃到许多新鲜的水果。等女儿一回来我就告诉她这个好消息。\n孙月：先别着急说。中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？那时候再告诉她，不是更好？\n丈夫：好主意，到时她知道了肯定特别开心。",
        vi: "Tôn Nguyệt: Tuần sau con gái được nghỉ đông rồi, đến lúc đó mình đưa con đi du lịch, thư giãn một chút, anh thấy sao?\nChồng: Ngày thường con học nhiều thế, lúc nào cũng nói muốn đi du lịch mà không có thời gian, thật tội nghiệp. Kỳ nghỉ này mình đưa con đi đâu chơi thì hay nhỉ?\nTôn Nguyệt: Năm ngoái đồng nghiệp em đưa con trai đi Quảng Tây một chuyến, nghe nói rất tuyệt, mình đi Quảng Tây đi.\nChồng: Được đấy, khí hậu ở đó rất khác miền Bắc, dù là mùa đông cũng rất ấm áp, lại còn được ăn nhiều hoa quả tươi. Con vừa về là anh báo ngay tin vui này.\nTôn Nguyệt: Đừng vội nói. Chẳng phải trưa nay mình định sang nhà hàng đối diện ăn vịt quay, chúc mừng con thi đều đạt yêu cầu sao? Lúc đó hẵng nói với con, chẳng phải hay hơn à?\nChồng: Ý hay, đến lúc đó con biết chắc chắn sẽ vui lắm.",
        questions: ["孙月和丈夫为什么想带女儿去旅行？他们准备去哪儿旅行？", "他们想在什么时候告诉女儿去旅行这个消息？为什么？"],
      },
      {
        heading: "课文三 · 安娜向马克介绍去丽江旅行的经验",
        zh: "马克：这么多照片，都是你这次去丽江旅行时照的？那里的自然风景可真美！\n安娜：是啊，小城四季的风景都很美，而且环境保护得也很好，因此每年都吸引着成千上万的游客去那儿旅游。\n马克：这张照片上和你干杯的那个人是少数民族吗？她打扮得真漂亮。\n安娜：她是我们的导游，不是少数民族。一路上她给我们讲了很多有趣的笑话。有一次我把存包的钥匙丢了，最后还是她帮我找到的。这张照片就是找到钥匙后，我们一起照的。\n马克：明年我有机会也去那儿看看，到时把你的导游介绍给我吧。究竟哪个季节去丽江旅游比较好呢？\n安娜：那儿最美的季节是春天和秋天，不过那时候人比较多。稍微好一点儿的时间是每年12月到第二年3月。这段时间去丽江的话，无论交通还是吃、住都很便宜。",
        vi: "Mark: Nhiều ảnh thế này, đều là cậu chụp trong chuyến đi Lệ Giang lần này à? Phong cảnh thiên nhiên ở đó đẹp thật!\nAnna: Đúng vậy, phong cảnh bốn mùa của thị trấn nhỏ ấy đều rất đẹp, hơn nữa môi trường cũng được bảo vệ rất tốt, vì thế năm nào cũng thu hút hàng nghìn hàng vạn du khách đến đó du lịch.\nMark: Người cạn ly với cậu trong bức ảnh này là người dân tộc thiểu số à? Cô ấy trang điểm đẹp thật.\nAnna: Cô ấy là hướng dẫn viên của bọn tớ, không phải người dân tộc thiểu số. Suốt dọc đường cô ấy kể cho bọn tớ rất nhiều chuyện cười thú vị. Có lần tớ làm mất chìa khóa tủ gửi đồ, cuối cùng cũng là cô ấy giúp tớ tìm được. Bức ảnh này chính là chụp chung sau khi tìm được chìa khóa.\nMark: Sang năm có dịp tớ cũng đến đó xem, lúc đó giới thiệu hướng dẫn viên của cậu cho tớ nhé. Rốt cuộc mùa nào đi Lệ Giang du lịch thì tốt hơn?\nAnna: Mùa đẹp nhất ở đó là mùa xuân và mùa thu, nhưng lúc đó khá đông người. Thời gian tương đối tốt hơn là từ tháng 12 đến tháng 3 năm sau. Đi Lệ Giang vào khoảng thời gian này thì dù đi lại hay ăn ở đều rất rẻ.",
        questions: ["安娜这次去丽江找的那个导游怎么样？", "为什么丽江值得去旅游？什么时候去那里旅游最好？"],
      },
      {
        heading: "课文四 · 中国的南方和北方",
        zh: "中国南北距离约5500公里，因此南北气候有很大区别。每年三四月份的时候，如果从北方坐火车到南方去旅游，一路上你会发现，不同的地方有不同的风景：窗外的树一棵一棵地变绿，北方也许还下着雪，南方却已经到处都是绿色了。南方菜很有特点，特别是汤，味道鲜美，很多北方人都喜欢喝。另外，南方和北方的语言也有很大不同。比如你跟上海人对话时，会发现上海话听起来就像外语一样。虽然上海人也会讲普通话，可是仔细听，还是有上海味儿。",
        vi: "Khoảng cách Nam – Bắc của Trung Quốc chừng 5500 km, vì thế khí hậu hai miền khác nhau rất lớn. Vào khoảng tháng ba, tháng tư hằng năm, nếu từ miền Bắc đi tàu hỏa xuống miền Nam du lịch, dọc đường bạn sẽ thấy mỗi nơi một cảnh: cây ngoài cửa sổ lần lượt từng cây chuyển xanh, miền Bắc có khi vẫn đang có tuyết rơi, còn miền Nam thì đã xanh mướt khắp nơi. Món ăn miền Nam rất có đặc trưng, nhất là canh, vị ngon ngọt, nhiều người miền Bắc đều thích uống. Ngoài ra, ngôn ngữ của miền Nam và miền Bắc cũng rất khác nhau. Ví dụ khi bạn nói chuyện với người Thượng Hải, sẽ thấy tiếng Thượng Hải nghe cứ như tiếng nước ngoài. Tuy người Thượng Hải cũng nói tiếng phổ thông, nhưng nghe kỹ vẫn có giọng Thượng Hải.",
        questions: ["要是你三四月份从北方坐火车到南方旅行，路上的风景会有哪些变化？为什么？", "一个北方人跟上海人对话时，可能会遇到什么问题？"],
      },
      {
        heading: "课文五 · 旅行和小吃",
        zh: "一个人有时间一定要去旅行，旅行不仅能丰富一个人的经历，而且是很好的减压方法。但对我来说，最重要的是旅行能让我有机会尝到各地有名的小吃。放假的时候，我会收拾好行李，带上地图，买张火车票，向目的地出发。说起吃的东西，给我印象最深的是湖南菜。湖南菜的特点就是辣，与其他地方的辣不同，湖南菜的辣主要是咸辣、香辣和酸辣。虽然全国各地都有湖南饭馆儿，但最好还是直接去那里尝一尝。每次旅行结束后，我都会精神百倍地开始我的工作。",
        vi: "Có thời gian thì nhất định phải đi du lịch, du lịch không chỉ làm phong phú trải nghiệm của một người mà còn là cách giảm căng thẳng rất tốt. Nhưng với tôi, điều quan trọng nhất là du lịch cho tôi cơ hội nếm thử các món ăn vặt nổi tiếng ở các nơi. Khi được nghỉ, tôi sẽ thu xếp hành lý, mang theo bản đồ, mua một vé tàu rồi khởi hành tới nơi cần đến. Nói đến đồ ăn, thứ để lại ấn tượng sâu sắc nhất với tôi là món ăn Hồ Nam. Đặc điểm của món Hồ Nam chính là cay, khác với cái cay của những nơi khác, cái cay của món Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua. Tuy khắp cả nước đều có quán ăn Hồ Nam, nhưng tốt nhất vẫn là đến tận nơi nếm thử. Mỗi lần du lịch xong, tôi đều bắt tay vào công việc với tinh thần phấn chấn gấp trăm lần.",
        questions: ["对“我”来说，旅行有哪些好处？", "旅行中什么东西给“我”的印象最深？它有哪些特点？"],
      },
    ],
    notes: [
      "小张 (Xiǎo Zhāng): Tiểu Trương. 孙月 (Sūn Yuè): Tôn Nguyệt. 广西 (Guǎngxī): Quảng Tây. 丽江 (Lìjiāng): Lệ Giang. 湖南 (Húnán): Hồ Nam.",
      "Văn hóa: 中国的少数民族 – Trung Quốc có 56 dân tộc, dân tộc Hán chiếm hơn 90% dân số; 55 dân tộc còn lại gọi là dân tộc thiểu số. Hiện có hơn 80 ngôn ngữ được sử dụng; bốn loại chữ của dân tộc thiểu số được dùng nhiều nhất (tiếng Choang, Duy Ngô Nhĩ, Mông Cổ, Tạng) được in trên tờ nhân dân tệ.",
    ],
  },

  grammar: [
    {
      word: "动词+着+动词+着",
      title: "Cấu trúc “động từ + 着 + động từ + 着”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Lặp lại cùng một động từ (thường là động từ một âm tiết) với 着; sau cấu trúc thường có một động từ khác, chỉ trong lúc hành động trước đang diễn ra thì xảy ra hành động khác.",
          examples: [
            "好，那我就放心了，别开着开着没油了。",
            "她讲着讲着自己就先笑了，而大家却不明白她到底为什么笑。",
            "晚上躺在草地上看星星的感觉非常棒，有时候躺着躺着就安静地睡着了。",
          ],
        },
      ],
    },
    {
      word: "一……就……",
      title: "Cấu trúc “vừa… thì/đã…”, “hễ… là…”",
      usages: [
        {
          label: "Hai việc nối tiếp nhau",
          explain: "Chỉ hai sự việc xảy ra nối tiếp ngay nhau; chủ ngữ của hai sự việc có thể giống hoặc khác nhau.",
          examples: ["100年前，塑料一出现就受到人们的普遍欢迎。", "等女儿一回来我就告诉她这个好消息。"],
        },
        {
          label: "Điều kiện – kết quả",
          explain: "Mang nghĩa “要是……就……”: sau 一 là điều kiện, sau 就 là tình huống xảy ra trong điều kiện đó.",
          examples: [
            "儿子小时候一说话就脸红，回答老师问题的时候声音也很小，我当时很为他担心。",
            "父母必须让孩子从小就知道，不是所有的东西一哭就能得到。",
            "妈妈一进房间，他就把手机装了起来。",
          ],
        },
      ],
    },
    {
      word: "究竟",
      title: "Phó từ “rốt cuộc”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Dùng trong câu hỏi hoặc câu có đại từ nghi vấn để truy vấn, làm mạnh ngữ khí nghi vấn; thường dùng trong văn viết. Nếu chủ ngữ là đại từ nghi vấn thì 究竟 chỉ đặt trước chủ ngữ.",
          examples: [
            "究竟哪个季节去丽江旅游比较好呢？",
            "随着科学技术的发展，很多问题已经得到解决。但有些问题我们仍然无法回答，例如，生命究竟从哪里来？",
            "学习时，不仅要知道答案是什么，还要弄清楚答案究竟是怎么得来的。",
          ],
        },
      ],
      note: "比一比 究竟—到底: Giống: đều là phó từ dùng trong câu hỏi để nhấn mạnh (只有试过才知道究竟/到底能不能成功). Khác: 到底 còn làm động từ nghĩa “đến cùng, đến điểm cuối” (这个电影得看到底；把这个计划坚持到底), 究竟 không có cách dùng này.",
    },
    {
      word: "起来",
      title: "Bổ ngữ xu hướng 起来",
      usages: [
        { label: "Hướng từ dưới lên", explain: "Đặt sau động từ chỉ hướng của hành động từ dưới lên trên.", examples: ["你先把桌子上的东西拿起来，我擦完之后你再放下来。"] },
        { label: "Bắt đầu và tiếp diễn", explain: "Nghĩa mở rộng: hành động bắt đầu và tiếp tục.", examples: ["邻居小王最近一定遇到了很多开心的事，你听，他又唱起来了。"] },
        { label: "Đánh giá", explain: "Người nói đánh giá người/sự vật từ một phương diện nào đó.", examples: ["比如你跟上海人对话时，会发现上海话听起来就像外语一样。"] },
      ],
    },
    {
      word: "动词+起",
      title: "Cấu trúc “động từ + 起” (说起、聊起、问起…)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ hành động liên quan đến một sự vật nào đó; động từ thường là số ít động từ cập vật như 说、谈、讲、问、提、聊、回忆…; sau cấu trúc thường là danh từ.",
          examples: [
            "说起吃的东西，给我印象最深的是湖南菜。",
            "聊起那场网球比赛，他们俩就兴奋得停不下来了。",
            "要是有人问起那件事，你就告诉他你还没接到通知，也不清楚怎么回事。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "由于天气原因，您乘坐的CA1864___推迟起飞。", options: ["航班", "合格", "对话", "旅行"], answer: "航班" },
    { sentence: "我走在回家的路上，突然发现商店门口有一只___的小狗，我心里一软，就把它抱回了家。", options: ["可怜", "航班", "合格", "旅行"], answer: "可怜" },
    { sentence: "欢迎大家来到美丽的海南，___中有任何事您都可以找我商量。", options: ["旅行", "对话", "可怜", "航班"], answer: "旅行" },
    { sentence: "努力获得新的知识，才能适应社会的发展速度，做一个___的现代人。", options: ["合格", "可怜", "对话", "旅行"], answer: "合格" },
    { sentence: "通过面试时和他的___，感觉他的性格也不错，我觉得他挺适合这份工作的。", options: ["对话", "合格", "航班", "可怜"], answer: "对话" },
    { sentence: "A：你的___水平考试考得怎么样？B：我这次没考，因为我错过了报名时间。", options: ["普通话", "笑话", "打扮", "推迟"], answer: "普通话" },
    { sentence: "很漂亮，不过我觉得这种___参加正式的舞会可能还是不太合适。", options: ["打扮", "祝贺", "普通话", "笑话"], answer: "打扮" },
    { sentence: "A：小高，听说你出国的时间___了？B：是的，我的签证还没有办好。", options: ["推迟", "打扮", "祝贺", "笑话"], answer: "推迟" },
    { sentence: "辛苦了，___你们！来，干一杯！", options: ["祝贺", "推迟", "笑话", "普通话"], answer: "祝贺" },
    { sentence: "你这一肚子的___，都是从哪儿听来的？", options: ["笑话", "祝贺", "打扮", "推迟"], answer: "笑话" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [1, 5, 4] },
        { vocabId: 3, distractors: [29, 30, 15] },
        { vocabId: 12, distractors: [16, 11, 13] },
        { vocabId: 14, distractors: [28, 25, 17] },
        { vocabId: 19, distractors: [21, 20, 18] },
        { vocabId: 22, distractors: [5, 1, 24] },
        { vocabId: 27, distractors: [26, 20, 18] },
        { vocabId: 31, distractors: [33, 32, 16] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [3, 5, 12, 15, 19, 22, 23, 29],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["航班", "推迟了", "一个", "小时", "。"], answer: "航班推迟了一个小时。", vi: "Chuyến bay bị hoãn một tiếng." },
        { tokens: ["等女儿", "一回来", "我就", "告诉她", "这个好消息", "。"], answer: "等女儿一回来我就告诉她这个好消息。", vi: "Con gái vừa về là anh báo ngay tin vui này." },
        { tokens: ["她", "打扮", "得", "真漂亮", "。"], answer: "她打扮得真漂亮。", vi: "Cô ấy trang điểm thật đẹp." },
        { tokens: ["上海话", "听起来", "就像", "外语", "一样", "。"], answer: "上海话听起来就像外语一样。", vi: "Tiếng Thượng Hải nghe như tiếng nước ngoài vậy." },
        { tokens: ["说起", "吃的东西", "，", "给我印象最深的", "是湖南菜", "。"], answer: "说起吃的东西，给我印象最深的是湖南菜。", vi: "Nói đến đồ ăn, ấn tượng sâu sắc nhất với tôi là món ăn Hồ Nam." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Đi sân bay", text: "朋友：该加油了，去机场的路上有{{c1}}吗？\n小张：航班本来是十点的，后来机场网站上通知{{c2}}了一个小时，所以九点半以前到就应该没问题。\n朋友：一会儿加完油，往西走五百米就能上{{c3}}。\n小张：一会儿我自己进去换{{c4}}，你就不用送我了。" },
        { title: "Bài 2 · Kế hoạch nghỉ đông", text: "丈夫：平时女儿那么多课，总是说想去旅行，但是没时间，怪{{c5}}的。\n孙月：中午我们不是要去{{c6}}的饭店吃{{c7}}，{{c8}}她考试成绩都{{c9}}吗？" },
        { title: "Bài 3 · Chuyến đi Lệ Giang", text: "马克：这张照片上和你{{c10}}的那个人是少数民族吗？她打扮得真漂亮。" },
      ],
      answers: { c1: "加油站", c2: "推迟", c3: "高速公路", c4: "登机牌", c5: "可怜", c6: "对面", c7: "烤鸭", c8: "祝贺", c9: "合格", c10: "干杯" },
      bank: ["加油站", "推迟", "高速公路", "登机牌", "可怜", "对面", "烤鸭", "祝贺", "合格", "干杯", "航班", "打扮", "笑话"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về miền Nam – miền Bắc và món ăn Hồ Nam.",
      passages: [
        { title: "Bài 4 · Nam và Bắc", text: "南方菜很有特点，特别是{{e1}}，味道鲜美，很多北方人都喜欢喝。另外，南方和北方的语言也有很大不同。比如你跟上海人{{e2}}时，会发现上海话听{{e3}}就像外语一样。虽然上海人也会讲{{e4}}，可是仔细听，还是有上海味儿。" },
        { title: "Bài 5 · Du lịch và ăn vặt", text: "但对我来说，最重要的是旅行能让我有机会尝到各地有名的{{e5}}。放假的时候，我会{{e6}}好行李，带上地图，买张火车票，向目的地{{e7}}。说起吃的东西，给我印象最深的是湖南菜。湖南菜的特点就是{{e8}}，湖南菜的辣主要是咸辣、{{e9}}辣和{{e10}}辣。" },
      ],
      answers: { e1: "汤", e2: "对话", e3: "起来", e4: "普通话", e5: "小吃", e6: "收拾", e7: "出发", e8: "辣", e9: "香", e10: "酸" },
      bank: ["汤", "对话", "起来", "普通话", "小吃", "收拾", "出发", "辣", "香", "酸", "出来", "棵", "民族"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "别开着开着没油了。", vi: "Đừng để đang lái thì hết xăng.", keywords: ["đang lái", "hết xăng"] },
        { zh: "航班推迟了一个小时。", vi: "Chuyến bay bị hoãn một tiếng.", keywords: ["chuyến bay", "hoãn", "một tiếng"] },
        { zh: "究竟哪个季节去丽江旅游比较好呢？", vi: "Rốt cuộc mùa nào đi Lệ Giang du lịch thì tốt hơn?", keywords: ["rốt cuộc", "mùa nào", "Lệ Giang", "du lịch"] },
        { zh: "上海话听起来就像外语一样。", vi: "Tiếng Thượng Hải nghe như tiếng nước ngoài vậy.", keywords: ["tiếng Thượng Hải", "nghe", "tiếng nước ngoài"] },
        { zh: "说起吃的东西，给我印象最深的是湖南菜。", vi: "Nói đến đồ ăn, thứ để lại ấn tượng sâu sắc nhất với tôi là món ăn Hồ Nam.", keywords: ["nói đến", "ấn tượng", "sâu sắc nhất", "Hồ Nam"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chuyến bay của bạn mấy giờ?", answers: ["你的航班是几点的？", "你的航班几点？"] },
        { vi: "Mẹ vừa vào phòng, nó liền cất điện thoại đi.", answers: ["妈妈一进房间，他就把手机装了起来。", "妈妈一进房间，他就把手机收了起来。"] },
        { vi: "Cô ấy kể kể rồi tự mình bật cười trước.", answers: ["她讲着讲着自己就先笑了。", "她讲着讲着就笑了。"] },
        { vi: "Chúc mừng kết quả thi của bạn đều đạt yêu cầu.", answers: ["祝贺你考试成绩都合格。", "祝贺你考试成绩都合格了。"] },
        { vi: "Món ăn Hồ Nam rất cay.", answers: ["湖南菜很辣。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小张的航班推迟了一个小时。", a: true },
        { q: "过了长江大桥往左一拐就有加油站。", a: false },
        { q: "孙月和丈夫打算带女儿去广西旅游。", a: true },
        { q: "广西的冬天非常冷。", a: false },
        { q: "照片上和安娜干杯的人是少数民族。", a: false },
        { q: "安娜存包的钥匙丢了，最后是导游帮她找到的。", a: true },
        { q: "每年三四月份，北方也许还下着雪，南方却已经到处都是绿色了。", a: true },
        { q: "湖南菜的特点是甜。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "航班推迟了一个小时。",
        "等女儿一回来我就告诉她这个好消息。",
        "那里的自然风景可真美！",
        "上海话听起来就像外语一样。",
        "放假的时候，我会收拾好行李。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "旅行不仅能增长知识、丰富经验，而且还是一种放松心情的好方式。请介绍一下哪次旅行是你最难忘的。 (Hãy kể về chuyến du lịch khó quên nhất của bạn.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 20 (V着V着, 一……就……, 究竟, 起来, động từ + 起).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["究竟", "起来", "说起", "聊起", "问起", "提起", "走着走着", "看着看着", "一放假", "一到", "一回"],
      minGrammar: 2,
      sample: "我最难忘的一次旅行是去年冬天去云南。一放寒假我就收拾好行李，向目的地出发了。云南四季的风景都很美，空气也特别新鲜。说起云南，给我印象最深的是那里的小吃，又香又辣，我每天都吃得很开心。有一天，我们在山上走着走着就找不到路了，最后是一个少数民族的老人帮我们找到了路。现在想起来，那次旅行虽然有点儿累，但真的很难忘。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 究竟 / 到底", points: 6,
      subtitle: "Chọn 究竟 hoặc 到底 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "究竟 / 到底",
      options: ["究竟", "到底"],
      items: [
        { q: "这场比赛太精彩了，你猜___谁能先进球？", answers: ["究竟", "到底"] },
        { q: "她决心一定要将减肥进行___。", answers: ["到底"] },
        { q: "这个题我做了三遍，可每次算出来的答案都不一样，真奇怪，___是哪儿出问题了？", answers: ["究竟", "到底"] },
        { q: "无论做什么事情都不会很容易就成功，只有坚持___，才会有希望。", answers: ["到底"] },
        { q: "当你觉得自己要生气的时候，最好先弄清楚___是怎么回事。", answers: ["究竟", "到底"] },
        { q: "你耐心点儿！这个电影得看到___，才能知道那件事情的原因。", answers: ["到底"] },
        { q: "我们已经做了这么多努力了，一定要把这个计划坚持___。", answers: ["到底"] },
        { q: "人的一生中，___什么是最重要的？", answers: ["究竟", "到底"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 一……就……", points: 6,
      subtitle: "Điền từ thích hợp vào chỗ trống để hoàn thành cấu trúc 一……就…….",
      grammarWord: "一……就……",
      items: [
        { q: "100年前，塑料一出现___受到人们的普遍欢迎。", answers: ["就"] },
        { q: "等女儿一回来我___告诉她这个好消息。", answers: ["就"] },
        { q: "儿子小时候一说话___脸红。", answers: ["就"] },
        { q: "不是所有的东西一哭___能得到。", answers: ["就"] },
        { q: "妈妈一进房间，他___把手机装了起来。", answers: ["就"] },
        { q: "很多人一到周末___会到体育馆打几场球。", answers: ["就"] },
        { q: "我一放假___收拾好行李去旅行。", answers: ["就"] },
        { q: "他一喝酒___脸红。", answers: ["就"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 起来", points: 5,
      subtitle: "Điền bổ ngữ xu hướng 起来 vào chỗ trống.",
      grammarWord: "起来",
      items: [
        { q: "你先把桌子上的东西拿___，我擦完之后你再放下来。", answers: ["起来"] },
        { q: "邻居小王最近一定遇到了很多开心的事，你听，他又唱___了。", answers: ["起来"] },
        { q: "比如你跟上海人对话时，会发现上海话听___就像外语一样。", answers: ["起来"] },
        { q: "我本来以为做生意很简单，做___才知道很难。", answers: ["起来"] },
        { q: "这件衣服看___很便宜，其实很贵。", answers: ["起来"] },
        { q: "公园里每天都有很多老人唱京剧，听___很热闹。", answers: ["起来"] },
        { q: "听了这个笑话，大家都笑了___。", answers: ["起来"] },
        { q: "天气慢慢热___了。", answers: ["起来"] },
      ],
    },
  ],
};
