import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第13课 喝着茶看京剧 (Uống trà trong lúc xem Kinh kịch)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 36–49 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["演出", "演员", "表演", "普遍", "苦"];
const W_EX2 = ["稍微", "基础", "厚", "遍", "继续"];

export const lesson13: Lesson = {
  level: "hsk4",
  no: 13,
  slug: "bai-13",
  zh: "喝着茶看京剧",
  pinyin: "Hēzhe chá kàn jīngjù",
  vi: "Uống trà trong lúc xem Kinh kịch",
  en: "Watching Peking Opera While Drinking Tea",
  topic: "传统文化 · Văn hóa truyền thống",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 京剧、演员、观众、演出、表演、基础、申请、讨论、餐厅、互联网、进行、错误、普遍、稍微…",
    "Hiểu và dùng được 大概 (phân biệt 大概 – 也许), 偶尔, giới từ 由, động từ 进行 và giới từ 随着.",
    "Đọc hiểu 3 đoạn hội thoại về Kinh kịch, lễ hội văn hóa và 2 bài đọc về đũa, trà của Trung Quốc; thuật lại bằng từ đã học.",
    "Hỏi – đáp về cách nhìn đối với Kinh kịch; giới thiệu ngắn về Kinh kịch, đũa hoặc trà của Trung Quốc.",
    "Nắm các từ cùng chữ 量: 商量、数量、质量.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：吃惊、开心、观众、讨论、餐厅、互联网。", vi: "Chọn hình tương ứng với các từ 吃惊 (kinh ngạc), 开心 (vui vẻ), 观众 (khán giả), 讨论 (thảo luận), 餐厅 (nhà hàng), 互联网 (Internet) và nói một câu mô tả hình." },
    { zh: "你喜欢看京剧吗？你认为京剧怎么样？（衣服、动作、音乐、故事）", vi: "Bạn có thích xem Kinh kịch không? Bạn thấy Kinh kịch thế nào? (trang phục: rất đẹp / rất phức tạp / kiểu dáng đặc biệt; động tác: rất đặc sắc / chẳng thú vị / rất nguy hiểm; âm nhạc: rất hay / không hay / rất chậm; câu chuyện: thú vị / khó hiểu / xa rời cuộc sống hiện đại)" },
  ],

  vocab: [
    { id: 1, han: "京剧", py: "jīngjù", pos: "dt.", meaning: "Kinh kịch", example: "小夏，你爷爷京剧唱得真专业。", exampleVi: "Tiểu Hạ, ông cậu hát Kinh kịch thật chuyên nghiệp." },
    { id: 2, han: "演员", py: "yǎnyuán", pos: "dt.", meaning: "diễn viên", example: "我还以为他是京剧演员呢。", exampleVi: "Tôi còn tưởng ông ấy là diễn viên Kinh kịch cơ." },
    { id: 3, han: "观众", py: "guānzhòng", pos: "dt.", meaning: "khán giả", example: "他年轻时很有名，深受观众们的喜爱。", exampleVi: "Hồi trẻ ông ấy rất nổi tiếng, rất được khán giả yêu mến." },
    { id: 4, han: "厚", py: "hòu", pos: "tt.", meaning: "dày, sâu nặng", example: "你爷爷一定对京剧有着很深厚的感情。", exampleVi: "Ông cậu chắc chắn có tình cảm rất sâu nặng với Kinh kịch." },
    { id: 5, han: "演出", py: "yǎnchū", pos: "đgt.", meaning: "biểu diễn", example: "他8岁就开始上台演出。", exampleVi: "Ông ấy 8 tuổi đã bắt đầu lên sân khấu biểu diễn." },
    { id: 6, han: "大概", py: "dàgài", pos: "p.", meaning: "khoảng chừng, có lẽ", example: "到现在大概唱了60多年了。", exampleVi: "Đến nay đã hát khoảng hơn 60 năm rồi." },
    { id: 7, han: "来自", py: "láizì", pos: "đgt.", meaning: "đến từ", example: "真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。", exampleVi: "Thật không ngờ cậu, một du học sinh đến từ Mỹ, lại hát Kinh kịch hay như vậy." },
    { id: 8, han: "遍", py: "biàn", pos: "lượng.", meaning: "lần, lượt (chỉ một hành động từ lúc bắt đầu đến khi kết thúc)", example: "然后一遍一遍地练习。", exampleVi: "Sau đó luyện tập hết lần này đến lần khác." },
    { id: 9, han: "偶尔", py: "ǒu'ěr", pos: "p.", meaning: "thỉnh thoảng", example: "我偶尔跟中国人一起唱上几句。", exampleVi: "Thỉnh thoảng tôi hát vài câu cùng người Trung Quốc." },
    { id: 10, han: "吃惊", py: "chī jīng", pos: "đgt.", meaning: "kinh ngạc", example: "别吃惊，因为我以前学习过音乐。", exampleVi: "Đừng ngạc nhiên, vì trước đây tôi từng học âm nhạc." },
    { id: 11, han: "基础", py: "jīchǔ", pos: "dt.", meaning: "nền tảng, căn bản", example: "我有一些音乐基础。", exampleVi: "Tôi có chút nền tảng âm nhạc." },
    { id: 12, han: "表演", py: "biǎoyǎn", pos: "đgt.", meaning: "biểu diễn, trình diễn", example: "我对京剧这种表演艺术非常感兴趣。", exampleVi: "Tôi rất hứng thú với loại hình nghệ thuật biểu diễn như Kinh kịch." },
    { id: 13, han: "正常", py: "zhèngcháng", pos: "tt.", meaning: "bình thường, thông thường", example: "有时候会影响他们和中国人之间的正常交流。", exampleVi: "Đôi khi sẽ ảnh hưởng đến việc giao tiếp bình thường giữa họ và người Trung Quốc." },
    { id: 14, han: "申请", py: "shēnqǐng", pos: "đgt.", meaning: "xin", example: "我们想申请举办一次中国传统文化节活动。", exampleVi: "Chúng tôi muốn xin tổ chức một lễ hội văn hóa truyền thống Trung Quốc." },
    { id: 15, han: "有趣", py: "yǒuqù", pos: "tt.", meaning: "thú vị, lý thú", example: "上次的春游活动你们办得非常有趣。", exampleVi: "Chuyến du xuân lần trước các anh chị tổ chức rất thú vị." },
    { id: 16, han: "开心", py: "kāixīn", pos: "tt.", meaning: "vui vẻ", example: "大家都玩儿得很开心。", exampleVi: "Mọi người đều chơi rất vui." },
    { id: 17, han: "继续", py: "jìxù", pos: "đgt.", meaning: "tiếp tục", example: "这次活动继续由你负责。", exampleVi: "Hoạt động lần này tiếp tục do anh phụ trách." },
    { id: 18, han: "由", py: "yóu", pos: "gt.", meaning: "do", example: "按照规定，这件事情应该由王大夫负责。", exampleVi: "Theo quy định, việc này nên do bác sĩ Vương phụ trách." },
    { id: 19, han: "讨论", py: "tǎolùn", pos: "đgt.", meaning: "thảo luận, bàn bạc", example: "我们回去就开会讨论。", exampleVi: "Chúng tôi về sẽ họp thảo luận ngay." },
    { id: 20, han: "大约", py: "dàyuē", pos: "p.", meaning: "khoảng chừng, ước chừng", example: "筷子在中国大约已经有3000多年的历史了。", exampleVi: "Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm." },
    { id: 21, han: "餐厅", py: "cāntīng", pos: "dt.", meaning: "nhà hàng", example: "国外的一些中国餐厅会提供使用筷子的详细说明。", exampleVi: "Một số nhà hàng Trung Quốc ở nước ngoài có cung cấp hướng dẫn chi tiết cách dùng đũa." },
    { id: 22, han: "纸袋", py: "zhǐdài", pos: "dt.", meaning: "túi giấy", example: "在放筷子的纸袋上会提供使用筷子的详细说明。", exampleVi: "Trên túi giấy đựng đũa có in hướng dẫn chi tiết cách dùng đũa." },
    { id: 23, han: "袋子", py: "dàizi", pos: "dt.", meaning: "túi", example: "这个袋子里放的是筷子。", exampleVi: "Trong cái túi này đựng đũa." },
    { id: 24, han: "互联网", py: "hùliánwǎng", pos: "dt.", meaning: "mạng Internet", example: "有人在互联网上专门进行过调查。", exampleVi: "Có người đã chuyên làm một cuộc khảo sát trên Internet." },
    { id: 25, han: "进行", py: "jìnxíng", pos: "đgt.", meaning: "tiến hành, thực hiện", example: "现在休息十五分钟，十点半会议继续进行。", exampleVi: "Bây giờ nghỉ mười lăm phút, mười giờ rưỡi cuộc họp tiếp tục." },
    { id: 26, han: "错误", py: "cuòwù", pos: "tt.", meaning: "sai", example: "每六个中国人中就有一个使用筷子的方法是错误的。", exampleVi: "Cứ sáu người Trung Quốc thì có một người dùng đũa sai cách." },
    { id: 27, han: "随着", py: "suízhe", pos: "gt.", meaning: "cùng với", example: "随着社会的发展，京剧也在改变。", exampleVi: "Cùng với sự phát triển của xã hội, Kinh kịch cũng đang thay đổi." },
    { id: 28, han: "十分", py: "shífēn", pos: "p.", meaning: "rất, vô cùng", example: "在中国，喝茶是一种十分普遍的生活习惯。", exampleVi: "Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến." },
    { id: 29, han: "普遍", py: "pǔbiàn", pos: "tt.", meaning: "phổ biến", example: "这种情况现在越来越普遍。", exampleVi: "Tình trạng này hiện nay ngày càng phổ biến." },
    { id: 30, han: "部分", py: "bùfen", pos: "dt.", meaning: "phần, bộ phận", example: "喝茶已成为他们生活中不可缺少的一部分。", exampleVi: "Uống trà đã trở thành một phần không thể thiếu trong cuộc sống của họ." },
    { id: 31, han: "稍微", py: "shāowēi", pos: "p.", meaning: "hơi", example: "凉茶的味道稍微有点儿苦。", exampleVi: "Trà thảo mộc có vị hơi đắng một chút." },
    { id: 32, han: "苦", py: "kǔ", pos: "tt.", meaning: "đắng", example: "凉茶虽然味道苦，但对身体很有好处。", exampleVi: "Trà thảo mộc tuy vị đắng nhưng rất tốt cho sức khỏe." },
    { id: 33, han: "省", py: "shěng", pos: "dt.", meaning: "tỉnh", example: "广东是中国南方的一个省。", exampleVi: "Quảng Đông là một tỉnh ở miền nam Trung Quốc." },
    { id: 34, han: "广东省", py: "Guǎngdōng Shěng", pos: "dt. riêng", meaning: "tỉnh Quảng Đông (Trung Quốc)", example: "广东省的人爱喝“凉茶”。", exampleVi: "Người tỉnh Quảng Đông thích uống “trà thảo mộc”." },
    { id: 35, han: "商量", py: "shāngliang", pos: "đgt.", meaning: "bàn bạc, thương lượng", example: "我也打电话和父母商量过了。", exampleVi: "Tôi cũng đã gọi điện bàn bạc với bố mẹ rồi.", group: "extended" },
    { id: 36, han: "数量", py: "shùliàng", pos: "dt.", meaning: "số lượng", example: "广告数量太多也会让人觉得讨厌。", exampleVi: "Quảng cáo quá nhiều cũng khiến người ta thấy khó chịu.", group: "extended" },
    { id: 37, han: "质量", py: "zhìliàng", pos: "dt.", meaning: "chất lượng", example: "如果一个星期内发现有任何质量问题，我们都可以免费为您换货。", exampleVi: "Nếu trong một tuần phát hiện bất kỳ vấn đề chất lượng nào, chúng tôi đều đổi hàng miễn phí cho quý khách.", group: "extended" },
  ],

  text: {
    title: "课文 喝着茶看京剧",
    paragraphs: [
      {
        heading: "课文一 · 小雨和小夏在聊小夏的爷爷表演京剧的情况",
        zh: "小雨：小夏，你爷爷京剧唱得真专业，我还以为他是京剧演员呢。\n小夏：对啊，他本来就是京剧演员，年轻时在我们那儿很有名，深受观众们的喜爱。\n小雨：你爷爷一定对京剧有着很深厚的感情。\n小夏：是呀，他8岁就开始上台演出，到现在大概唱了60多年了，他对这门艺术的喜爱从来没有改变过。\n小雨：这么说你喜欢听京剧也是受了你爷爷的影响？\n小夏：我小时候经常去看他的演出。平时他还给我讲很多京剧里的历史故事，让我学到了很多知识。",
        vi: "Tiểu Vũ: Tiểu Hạ, ông cậu hát Kinh kịch chuyên nghiệp thật đấy, mình còn tưởng ông là diễn viên Kinh kịch cơ.\nTiểu Hạ: Đúng rồi, ông vốn là diễn viên Kinh kịch mà, hồi trẻ ở chỗ mình rất nổi tiếng, rất được khán giả yêu mến.\nTiểu Vũ: Ông cậu chắc chắn có tình cảm rất sâu nặng với Kinh kịch.\nTiểu Hạ: Đúng thế, ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đã hát khoảng hơn 60 năm rồi, tình yêu của ông với môn nghệ thuật này chưa bao giờ thay đổi.\nTiểu Vũ: Nói vậy là việc cậu thích nghe Kinh kịch cũng là do chịu ảnh hưởng của ông à?\nTiểu Hạ: Hồi nhỏ mình thường đi xem ông biểu diễn. Ngày thường ông còn kể cho mình nghe nhiều câu chuyện lịch sử trong Kinh kịch, giúp mình học được rất nhiều kiến thức.",
        questions: ["小夏的爷爷多大年纪了？京剧唱得怎么样？唱了多长时间了？", "小夏受了爷爷哪些影响？"],
      },
      {
        heading: "课文二 · 小雨和马克在聊京剧",
        zh: "小雨：真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。\n马克：我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。\n小雨：难道你从来没有接受过京剧方面的专门教育吗？\n马克：别吃惊，因为我以前学习过音乐，有一些音乐基础，又对京剧这种表演艺术非常感兴趣，所以能比较容易地学会它的唱法。\n小雨：你真厉害！竟然连很多中国人都听不懂的京剧也能学会。我还是比较喜欢听流行音乐。\n马克：那是你不了解京剧的唱法。在音乐方面，京剧给了我很多新的想法。我还把京剧的一些特点增加到了自己的音乐中，达到了很好的效果。",
        vi: "Tiểu Vũ: Thật không ngờ cậu, một du học sinh nước ngoài đến từ Mỹ, lại hát Kinh kịch hay như vậy.\nMark: Mình thường học hát Kinh kịch theo tivi, sau đó luyện đi luyện lại, thỉnh thoảng hát vài câu cùng người Trung Quốc.\nTiểu Vũ: Chẳng lẽ cậu chưa từng được đào tạo chuyên về Kinh kịch sao?\nMark: Đừng ngạc nhiên, vì trước đây mình từng học âm nhạc, có chút nền tảng âm nhạc, lại rất hứng thú với loại hình nghệ thuật biểu diễn như Kinh kịch, nên có thể học cách hát của nó khá dễ dàng.\nTiểu Vũ: Cậu giỏi thật! Đến Kinh kịch mà nhiều người Trung Quốc còn nghe không hiểu cậu cũng học được. Mình thì vẫn thích nghe nhạc thịnh hành hơn.\nMark: Đó là vì cậu không hiểu cách hát của Kinh kịch. Về mặt âm nhạc, Kinh kịch đã cho mình rất nhiều ý tưởng mới. Mình còn đưa một số đặc điểm của Kinh kịch vào âm nhạc của mình, đạt được hiệu quả rất tốt.",
        questions: ["马克学过京剧吗？他怎么学的？他为什么京剧唱得那么好？", "京剧给了马克哪些新的想法？"],
      },
      {
        heading: "课文三 · 李老师和校长在谈工作",
        zh: "李老师：校长，因为外国留学生不了解中国文化，有时候会影响他们和中国人之间的正常交流，甚至还可能引起误会，带来麻烦，所以我们想申请举办一次中国传统文化节活动。\n校长：你们的想法很好，举办文化节活动，一方面能让各国学生更好地了解中国，另一方面也能为学生们提供互相交流和学习的机会。\n李老师：谢谢您的支持！\n校长：上次的春游活动你们办得非常有趣，大家都玩儿得很开心，这次活动继续由你负责，相信也一定会很成功。\n李老师：我们回去就开会讨论，星期五之前把详细的计划书发给您。\n校长：好的，准备过程中有什么问题，你们可以直接来找我。",
        vi: "Thầy Lý: Thưa hiệu trưởng, vì du học sinh nước ngoài không hiểu văn hóa Trung Quốc, đôi khi sẽ ảnh hưởng đến việc giao tiếp bình thường giữa họ và người Trung Quốc, thậm chí còn có thể gây hiểu lầm, rắc rối, nên chúng tôi muốn xin tổ chức một lễ hội văn hóa truyền thống Trung Quốc.\nHiệu trưởng: Ý tưởng của các anh chị rất hay. Tổ chức lễ hội văn hóa, một mặt có thể giúp sinh viên các nước hiểu Trung Quốc hơn, mặt khác cũng có thể mang lại cho sinh viên cơ hội giao lưu và học tập lẫn nhau.\nThầy Lý: Cảm ơn thầy đã ủng hộ!\nHiệu trưởng: Chuyến du xuân lần trước các anh chị tổ chức rất thú vị, mọi người đều chơi rất vui. Hoạt động lần này tiếp tục do anh phụ trách, tôi tin chắc cũng sẽ rất thành công.\nThầy Lý: Chúng tôi về sẽ họp thảo luận ngay, trước thứ Sáu sẽ gửi bản kế hoạch chi tiết cho thầy.\nHiệu trưởng: Được, trong quá trình chuẩn bị có vấn đề gì, các anh chị có thể đến tìm tôi trực tiếp.",
        questions: ["为什么李老师想申请举办中国传统文化节活动？", "为什么校长决定这次活动继续由李老师负责？"],
      },
      {
        heading: "课文四 · 筷子",
        zh: "筷子在中国大约已经有3000多年的历史了。对外国人来说，使用筷子吃饭并不容易，所以，国外的一些中国餐厅在放筷子的纸袋上会提供使用筷子的详细说明。不过，如果你认为每个中国人都会正确使用筷子，那就错了。有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。如果你想正确使用筷子，那就好好练习吧。",
        vi: "Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm. Đối với người nước ngoài, dùng đũa ăn cơm không hề dễ, vì vậy một số nhà hàng Trung Quốc ở nước ngoài in hướng dẫn chi tiết cách dùng đũa lên túi giấy đựng đũa. Tuy nhiên, nếu bạn cho rằng người Trung Quốc nào cũng biết dùng đũa đúng cách thì bạn đã nhầm. Có người đã chuyên làm một cuộc khảo sát trên Internet, kết quả phát hiện cứ sáu người Trung Quốc thì có một người dùng đũa sai cách. Nếu bạn muốn dùng đũa cho đúng, vậy thì hãy chăm chỉ luyện tập nhé.",
        questions: ["为什么国外的中国餐厅会提供使用筷子的详细说明？", "关于中国人使用筷子的调查结果是什么？"],
      },
      {
        heading: "课文五 · 中国的茶",
        zh: "茶在中国有几千年的历史，是中国最常见的饮料。最早的时候，茶只是被当作一种药，而不是饮料。后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料，这才慢慢有了中国的茶文化。在中国，喝茶是一种十分普遍的生活习惯。对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。但是有的饮料虽然名字叫“茶”，却并不是真正的茶。比如广东省的人爱喝的“凉茶”，它的味道稍微有点儿苦，其实是一种用中药做成的饮料。",
        vi: "Trà ở Trung Quốc có lịch sử mấy nghìn năm, là đồ uống phổ biến nhất ở Trung Quốc. Thời kỳ đầu, trà chỉ được coi là một loại thuốc chứ không phải đồ uống. Về sau, cùng với việc con người hiểu biết về trà ngày càng sâu hơn, dần dần người ta bắt đầu coi nó là đồ uống giải khát, từ đó mới dần hình thành văn hóa trà của Trung Quốc. Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến. Đối với nhiều người Trung Quốc, uống trà đã trở thành một phần không thể thiếu trong cuộc sống. Nhưng có những loại đồ uống tuy tên gọi là “trà” mà lại không phải là trà thật. Ví dụ như “trà thảo mộc” (凉茶) mà người tỉnh Quảng Đông thích uống, vị của nó hơi đắng một chút, thực ra là một loại đồ uống làm từ thuốc bắc.",
        questions: ["茶开始时被用来做什么？后来呢？", "广东人爱喝的凉茶是一种什么样的饮料？"],
      },
    ],
    notes: [
      "京剧 (jīngjù): Kinh kịch – loại hình kịch hát truyền thống tiêu biểu của Trung Quốc.",
      "凉茶 (liángchá): trà thảo mộc của Quảng Đông, nấu từ các vị thuốc bắc.",
      "Văn hóa: 中国的筷子文化 – đũa phải dùng thành đôi, thẳng và đều nhau; không ngậm đũa, không gõ đũa vào bát đĩa, không chĩa đũa vào người khác, không cắm đũa vào bát cơm.",
    ],
  },

  grammar: [
    {
      word: "大概",
      title: "Phó từ / tính từ “khoảng chừng, có lẽ; đại khái”",
      usages: [
        {
          label: "Phó từ – ước lượng, suy đoán",
          explain: "Chỉ sự phỏng đoán gần đúng về số lượng, thời gian, hoặc suy đoán tình huống với khả năng xảy ra cao.",
          examples: [
            "他8岁就开始上台演出，到现在大概唱了60多年了，他对这门艺术的喜爱从来没有改变过。",
            "你的这个关于举办传统文化节活动的计划，我想校长大概会同意。",
          ],
        },
        {
          label: "Tính từ – không chính xác lắm, chung chung",
          explain: "Làm định ngữ, nghĩa là không thật chính xác, không thật chi tiết.",
          examples: ["现在即使不用翻译也能理解大概的意思了。", "不用安排得特别详细，但必须有一个大概的想法。"],
        },
      ],
      note: "比一比 大概 – 也许: đều là phó từ chỉ suy đoán. 大概 mức phán đoán mạnh, khẳng định hơn; 也许 chỉ phỏng đoán, khả năng thấp hơn. 大概 dùng ước lượng số lượng (大概有三分之二的人反对这样做), 也许 không dùng. 也许 diễn tả sự không chắc chắn về dự định tương lai của người nói (也许以后我会成为一名记者), 大概 không dùng. 大概 còn là tính từ (一个大概的想法), 也许 thì không.",
    },
    {
      word: "偶尔",
      title: "Phó từ “thỉnh thoảng”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ tình huống xảy ra với tần suất rất thấp.",
          examples: [
            "我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。",
            "我们调查的近7000名上班族中，有64%的人经常加班，28%偶尔加班。",
            "三叶草的叶子一般为三个，但偶尔也会出现四个叶子的。",
          ],
        },
      ],
    },
    {
      word: "由",
      title: "Giới từ “do”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Cho biết người đảm nhận, chịu trách nhiệm làm một việc nào đó.",
          examples: [
            "按照规定，这件事情应该由王大夫负责。",
            "“幽默”这个词最早是由林语堂先生翻译过来的。",
            "上次的春游活动你们办得非常有趣，大家都玩儿得很开心，这次活动继续由你负责，相信也一定会很成功。",
          ],
        },
      ],
    },
    {
      word: "进行",
      title: "Động từ “tiến hành, thực hiện”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ thực hiện một hoạt động, công việc. Thường đứng trước động từ hai âm tiết chỉ hành động chính thức, nghiêm túc; hành động tạm thời hoặc sinh hoạt hằng ngày thường không dùng 进行.",
          examples: [
            "大家请注意，现在休息十五分钟，十点半会议继续进行。",
            "有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。",
            "他们会主动与他人进行交流，并且请别人帮助他们改错。",
          ],
        },
      ],
    },
    {
      word: "随着",
      title: "Giới từ “cùng với, theo”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ một sự việc là điều kiện để sự việc khác xảy ra; sau 随着 thường là động từ hai âm tiết có từ bổ nghĩa.",
          examples: [
            "随着社会的发展，京剧也在改变，以适应不同年龄观众的需要。",
            "但是，随着年龄的增长，他们会发现生活总是在不停地变化。",
            "后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料，这才慢慢有了中国的茶文化。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "今天的晚会太精彩了，特别是那些外国留学生___的中国功夫，动作既标准又好看。", options: W_EX1, answer: "表演" },
    { sentence: "这次___举办得非常成功，吸引了不少当地的观众。", options: W_EX1, answer: "演出" },
    { sentence: "凉茶虽然味道___，但对身体很有好处。", options: W_EX1, answer: "苦" },
    { sentence: "他们很喜欢唱京剧，虽然不是专业的___，不过，他们唱得不错。", options: W_EX1, answer: "演员" },
    { sentence: "毕业后选择的第一个职业和自己的专业没什么关系，这种情况现在越来越___。", options: W_EX1, answer: "普遍" },
    { sentence: "这本小说这么___，什么时候才能看完啊？", options: W_EX2, answer: "厚" },
    { sentence: "我小时候学过两年的舞，有点儿___。", options: W_EX2, answer: "基础" },
    { sentence: "差不多了，我再检查一___就给您送过去。", options: W_EX2, answer: "遍" },
    { sentence: "你想好了没？是___读书还是参加工作？", options: W_EX2, answer: "继续" },
    { sentence: "大家先回房间___休息一下，半个小时后我们楼下集合。", options: W_EX2, answer: "稍微" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [3, 12, 5] },
        { vocabId: 10, distractors: [16, 15, 13] },
        { vocabId: 11, distractors: [30, 29, 26] },
        { vocabId: 14, distractors: [19, 17, 25] },
        { vocabId: 21, distractors: [24, 22, 33] },
        { vocabId: 27, distractors: [20, 28, 6] },
        { vocabId: 31, distractors: [9, 32, 4] },
        { vocabId: 36, distractors: [37, 35, 30] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [3, 9, 11, 14, 24, 26, 29, 31],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["他", "8岁", "就开始", "上台", "演出", "。"], answer: "他8岁就开始上台演出。", vi: "Ông ấy 8 tuổi đã bắt đầu lên sân khấu biểu diễn." },
        { tokens: ["我", "常常", "跟着电视", "学唱京剧", "。"], answer: "我常常跟着电视学唱京剧。", vi: "Tôi thường học hát Kinh kịch theo tivi." },
        { tokens: ["这次活动", "继续", "由你", "负责", "。"], answer: "这次活动继续由你负责。", vi: "Hoạt động lần này tiếp tục do anh phụ trách." },
        { tokens: ["筷子在中国", "大约", "已经有", "3000多年的", "历史了", "。"], answer: "筷子在中国大约已经有3000多年的历史了。", vi: "Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm." },
        { tokens: ["在中国，", "喝茶", "是一种", "十分普遍的", "生活习惯", "。"], answer: "在中国，喝茶是一种十分普遍的生活习惯。", vi: "Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (课文 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "课文一 · Ông của Tiểu Hạ", text: "小雨：小夏，你爷爷京剧唱得真专业，我还以为他是京剧{{c1}}呢。\n小夏：对啊，他本来就是京剧演员，年轻时在我们那儿很有名，深受{{c2}}们的喜爱。\n小雨：你爷爷一定对京剧有着很深{{c3}}的感情。\n小夏：是呀，他8岁就开始上台{{c4}}，到现在{{c5}}唱了60多年了。" },
        { title: "课文二 · Mark học hát Kinh kịch", text: "小雨：真没想到你一个{{c6}}美国的外国留学生，能把京剧唱得这么好。\n马克：我常常跟着电视学唱京剧，然后一遍一遍地练习，{{c7}}跟中国人一起唱上几句。\n马克：别吃惊，因为我以前学习过音乐，有一些音乐{{c8}}，又对京剧这种表演艺术非常感兴趣。" },
        { title: "课文三 · Lễ hội văn hóa", text: "李老师：……所以我们想{{c9}}举办一次中国传统文化节活动。\n校长：上次的春游活动你们办得非常有趣，大家都玩儿得很开心，这次活动继续{{c10}}你负责，相信也一定会很成功。" },
      ],
      answers: { c1: "演员", c2: "观众", c3: "厚", c4: "演出", c5: "大概", c6: "来自", c7: "偶尔", c8: "基础", c9: "申请", c10: "由" },
      bank: ["演员", "观众", "厚", "演出", "大概", "来自", "偶尔", "基础", "申请", "由", "表演", "继续", "吃惊"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (课文 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào hai bài đọc về đũa và trà của Trung Quốc.",
      passages: [
        { title: "课文四 · Đũa", text: "筷子在中国{{e1}}已经有3000多年的历史了。对外国人来说，使用筷子吃饭并不容易，所以，国外的一些中国{{e2}}在放筷子的{{e3}}上会提供使用筷子的详细说明。有人在{{e4}}上专门{{e5}}过调查，结果发现每六个中国人中就有一个使用筷子的方法是{{e6}}的。" },
        { title: "课文五 · Trà", text: "后来，{{e7}}人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。在中国，喝茶是一种{{e8}}普遍的生活习惯。对很多中国人来说，喝茶已成为他们生活中不可缺少的一{{e9}}。比如广东省的人爱喝的“凉茶”，它的味道{{e10}}有点儿苦。" },
      ],
      answers: { e1: "大约", e2: "餐厅", e3: "纸袋", e4: "互联网", e5: "进行", e6: "错误", e7: "随着", e8: "十分", e9: "部分", e10: "稍微" },
      bank: ["大约", "餐厅", "纸袋", "互联网", "进行", "错误", "随着", "十分", "部分", "稍微", "大概", "普遍", "苦"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我还以为他是京剧演员呢。", vi: "Tôi còn tưởng ông ấy là diễn viên Kinh kịch cơ.", keywords: ["tưởng", "diễn viên", "Kinh kịch"] },
        { zh: "我常常跟着电视学唱京剧。", vi: "Tôi thường học hát Kinh kịch theo tivi.", keywords: ["thường", "học hát", "tivi"] },
        { zh: "举办文化节活动能为学生们提供互相交流和学习的机会。", vi: "Tổ chức lễ hội văn hóa có thể mang lại cho sinh viên cơ hội giao lưu và học tập lẫn nhau.", keywords: ["lễ hội văn hóa", "cơ hội", "giao lưu", "học tập"] },
        { zh: "每六个中国人中就有一个使用筷子的方法是错误的。", vi: "Cứ sáu người Trung Quốc thì có một người dùng đũa sai cách.", keywords: ["sáu", "đũa", "sai"] },
        { zh: "喝茶已成为他们生活中不可缺少的一部分。", vi: "Uống trà đã trở thành một phần không thể thiếu trong cuộc sống của họ.", keywords: ["uống trà", "không thể thiếu", "cuộc sống"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Ông ấy đã hát Kinh kịch khoảng hơn 60 năm rồi.", answers: ["他大概唱了60多年京剧了。", "他唱京剧大概唱了60多年了。", "他大概唱了六十多年京剧了。"] },
        { vi: "Thỉnh thoảng tôi hát vài câu cùng người Trung Quốc.", answers: ["我偶尔跟中国人一起唱几句。", "我偶尔和中国人一起唱几句。", "我偶尔跟中国人一起唱上几句。"] },
        { vi: "Theo quy định, việc này nên do bác sĩ Vương phụ trách.", answers: ["按照规定，这件事情应该由王大夫负责。", "按照规定，这件事应该由王大夫负责。"] },
        { vi: "Cùng với sự phát triển của xã hội, Kinh kịch cũng đang thay đổi.", answers: ["随着社会的发展，京剧也在改变。", "随着社会的发展，京剧也在变化。"] },
        { vi: "Bây giờ nghỉ mười lăm phút, mười giờ rưỡi cuộc họp tiếp tục.", answers: ["现在休息十五分钟，十点半会议继续进行。", "现在休息十五分钟，十点半会议继续。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小夏的爷爷以前是京剧演员。", a: true },
        { q: "小夏的爷爷10岁才开始上台演出。", a: false },
        { q: "马克在学校接受过京剧方面的专门教育。", a: false },
        { q: "小雨比较喜欢听流行音乐。", a: true },
        { q: "上次的春游活动是李老师负责的。", a: true },
        { q: "李老师下个月才把计划书发给校长。", a: false },
        { q: "每个中国人都会正确使用筷子。", a: false },
        { q: "最早的时候，茶被当作一种药。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "他对这门艺术的喜爱从来没有改变过。",
        "别吃惊，我以前学习过音乐。",
        "这次活动继续由你负责。",
        "如果你想正确使用筷子，那就好好练习吧。",
        "茶是中国最常见的饮料。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "京剧、筷子和茶都是中国传统文化的重要组成部分，请简单介绍一下其中的一种。 (Kinh kịch, đũa và trà đều là thành phần quan trọng của văn hóa truyền thống Trung Quốc. Hãy giới thiệu ngắn gọn về một trong số đó.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 13 (大概, 偶尔, 由, 进行, 随着).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["大概", "偶尔", "由", "进行", "随着"],
      minGrammar: 2,
      sample: "我想介绍一下中国的茶。茶在中国大概有几千年的历史，是中国最常见的饮料。最早的时候，茶只是被当作一种药。后来，随着人们对茶的认识的加深，喝茶慢慢成了一种十分普遍的生活习惯。我的中国朋友每天都喝茶，他说喝茶已经是他生活中不可缺少的一部分。我以前不太喜欢喝茶，觉得茶的味道有点儿苦，现在我也偶尔跟朋友一起去茶馆喝茶，还学到了很多关于茶的知识。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 大概 / 也许", points: 6,
      subtitle: "Chọn 大概 hoặc 也许 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "大概 / 也许",
      options: ["大概", "也许"],
      items: [
        { q: "为什么会出现这种情况？___是因为父亲平时陪孩子玩儿的时间太少。", answers: ["大概", "也许"] },
        { q: "穷人的孩子早当家，他们___没有很多钱，却可能比富人家的孩子经历得更多。", answers: ["也许"] },
        { q: "师傅，我去机场。___要多长时间？半小时能到吗？", answers: ["大概"] },
        { q: "您最近在拍哪部电影？能谈谈电影的___内容吗？", answers: ["大概"] },
        { q: "___有三分之二的人反对这样做。", answers: ["大概"] },
        { q: "我发现自己对新闻更感兴趣，___以后我会成为一名记者。", answers: ["也许"] },
        { q: "不用安排得特别详细，但必须有一个___的想法。", answers: ["大概"] },
        { q: "他8岁就开始上台演出，到现在___唱了60多年了。", answers: ["大概"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 随着", points: 6,
      subtitle: "Điền giới từ thích hợp vào chỗ trống (随着 – cùng với, theo).",
      grammarWord: "随着",
      items: [
        { q: "___社会的发展，京剧也在改变，以适应不同年龄观众的需要。", answers: ["随着"] },
        { q: "但是，___年龄的增长，他们会发现生活总是在不停地变化。", answers: ["随着"] },
        { q: "后来，___人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。", answers: ["随着"] },
        { q: "___互联网的发展，越来越多的人喜欢在网上写日记。", answers: ["随着"] },
        { q: "___时间的变化，美的标准一直在变。", answers: ["随着"] },
        { q: "___经济的发展，人们的生活越来越好了。", answers: ["随着"] },
        { q: "___天气变冷，来公园的人越来越少了。", answers: ["随着"] },
        { q: "___汉语水平的提高，他能看懂的中文书越来越多了。", answers: ["随着"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 由", points: 5,
      subtitle: "Điền giới từ thích hợp vào chỗ trống (由 – do ai phụ trách / làm).",
      grammarWord: "由",
      items: [
        { q: "按照规定，这件事情应该___王大夫负责。", answers: ["由"] },
        { q: "“幽默”这个词最早是___林语堂先生翻译过来的。", answers: ["由"] },
        { q: "这次活动继续___你负责，相信也一定会很成功。", answers: ["由"] },
        { q: "马经理已经离开公司了，现在这件事___小李负责。", answers: ["由"] },
        { q: "今天的晚饭___我来做吧。", answers: ["由"] },
        { q: "这个问题___大家一起讨论决定。", answers: ["由"] },
        { q: "会议的时间___经理来安排。", answers: ["由"] },
        { q: "上次的秋游活动是___小夏组织的。", answers: ["由"] },
      ],
    },
  ],
};
