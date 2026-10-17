import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第18课 科技与世界 (Khoa học công nghệ và thế giới)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 108–121 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["收", "座", "安全", "危险", "降落"];
const W_EX2 = ["地点", "地址", "技术", "迷路", "咸"];
const W_EXT = ["地点", "特点", "优点", "缺点", "重点"];

export const lesson18: Lesson = {
  level: "hsk4",
  no: 18,
  slug: "bai-18",
  zh: "科技与世界",
  pinyin: "Kējì yǔ shìjiè",
  vi: "Khoa học công nghệ và thế giới",
  en: "Technology and the World",
  topic: "科技生活 · Khoa học công nghệ và cuộc sống",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 降落、火、技术、是否、方式、受不了、安全、密码、允许、危险、接着、付款、迷路、地址、地点、世纪、信息…",
    "Hiểu và dùng được 5 điểm ngữ pháp: phó từ 是否, 受不了, phó từ 接着 (phân biệt 接着 – 然后), 除此以外, cấu trúc 把……叫作…….",
    "Đọc hiểu các bài khóa về sách khoa học thiếu nhi, máy tính – Internet, giấc mơ, điện thoại di động và “ngôi làng toàn cầu”.",
    "Trao đổi và viết đoạn văn về ảnh hưởng của sự phát triển khoa học công nghệ đến cuộc sống.",
    "Nắm các từ mở rộng cùng chữ 点: 地点、特点、优点、缺点、重点.",
  ],

  warmUp: [
    { zh: "给下边的词语选择对应的图片，并用这个词语根据图片说一个句子：密码、信息、举、危险、交通、付款。", vi: "Chọn hình tương ứng với các từ 密码 (mật mã), 信息 (thông tin), 举 (giơ, nâng), 危险 (nguy hiểm), 交通 (giao thông), 付款 (trả tiền) và nói một câu có từ đó để mô tả hình." },
    { zh: "请填写关于手机使用情况的调查问卷：你一般用手机做什么？每个月的手机话费是多少？选择手机最看重什么？", vi: "Điền bảng khảo sát về việc dùng điện thoại: bạn thường dùng điện thoại để làm gì, cước mỗi tháng bao nhiêu, khi chọn điện thoại coi trọng điều gì nhất (kiểu dáng, giá, chức năng, dịch vụ sau bán hàng…)?" },
  ],

  vocab: [
    { id: 1, han: "降落", py: "jiàngluò", pos: "đgt.", meaning: "đáp xuống, hạ cánh", example: "上次女儿问我飞机是怎么起飞和降落的。", exampleVi: "Lần trước con gái hỏi tôi máy bay cất cánh và hạ cánh như thế nào." },
    { id: 2, han: "火", py: "huǒ", pos: "tt.", meaning: "chạy, đắt hàng, được nhiều người ưa chuộng", example: "有一本书叫《新十万个为什么》，现在卖得非常火。", exampleVi: "Có cuốn sách tên là “Mười vạn câu hỏi vì sao mới”, hiện đang bán rất chạy." },
    { id: 3, han: "作者", py: "zuòzhě", pos: "dt.", meaning: "tác giả", example: "作者的名字我没记住。", exampleVi: "Tên tác giả thì mình không nhớ." },
    { id: 4, han: "交通", py: "jiāotōng", pos: "dt.", meaning: "giao thông, thông tin liên lạc", example: "书里包括地球、动物、植物、交通等很多方面的知识。", exampleVi: "Trong sách có kiến thức về nhiều mặt như Trái Đất, động vật, thực vật, giao thông." },
    { id: 5, han: "技术", py: "jìshù", pos: "dt.", meaning: "kỹ thuật, công nghệ", example: "电脑和互联网技术的发展使学生们的学习方式发生了很多变化。", exampleVi: "Sự phát triển của máy tính và công nghệ Internet đã làm cách học của sinh viên thay đổi nhiều." },
    { id: 6, han: "是否", py: "shìfǒu", pos: "p.", meaning: "hay không, có… không", example: "不过她这么小，我不知道她是否能读懂。", exampleVi: "Nhưng con bé còn nhỏ thế, tôi không biết nó có đọc hiểu được không." },
    { id: 7, han: "秒", py: "miǎo", pos: "lượng.", meaning: "giây", example: "几秒钟就把问题解决了。", exampleVi: "Chỉ mấy giây là giải quyết xong vấn đề." },
    { id: 8, han: "方式", py: "fāngshì", pos: "dt.", meaning: "phương thức, cách thức", example: "不仅是学习方式，而且连生活方式也发生了很大改变。", exampleVi: "Không chỉ cách học mà cả lối sống cũng đã thay đổi rất nhiều." },
    { id: 9, han: "受不了", py: "shòubuliǎo", pos: "cụm đgt.", meaning: "chịu không nổi, chịu không được", example: "不过天天对着电脑看，眼睛实在受不了。", exampleVi: "Nhưng ngày nào cũng nhìn máy tính, mắt thật sự chịu không nổi." },
    { id: 10, han: "日记", py: "rìjì", pos: "dt.", meaning: "nhật ký", example: "现在越来越多的学生喜欢在网上写日记。", exampleVi: "Bây giờ ngày càng nhiều học sinh thích viết nhật ký trên mạng." },
    { id: 11, han: "安全", py: "ānquán", pos: "tt.", meaning: "an toàn", example: "如果别人都能看到我的日记的话，多不安全啊！", exampleVi: "Nếu người khác đều đọc được nhật ký của tôi thì thật là không an toàn!" },
    { id: 12, han: "密码", py: "mìmǎ", pos: "dt.", meaning: "mật mã, mật khẩu", example: "可以给网上的日记加密码。", exampleVi: "Có thể đặt mật khẩu cho nhật ký trên mạng." },
    { id: 13, han: "允许", py: "yǔnxǔ", pos: "đgt.", meaning: "cho phép", example: "那样只有得到了允许，别人才能看到。", exampleVi: "Như vậy chỉ khi được cho phép thì người khác mới xem được." },
    { id: 14, han: "座", py: "zuò", pos: "lượng.", meaning: "tòa, hòn, cây (dùng cho cầu, núi, cao ốc…)", example: "梦到自己正在一座桥上走。", exampleVi: "Mơ thấy mình đang đi trên một cây cầu." },
    { id: 15, han: "桥", py: "qiáo", pos: "dt.", meaning: "cầu", example: "这座桥是去年修好的。", exampleVi: "Cây cầu này được xây xong vào năm ngoái." },
    { id: 16, han: "危险", py: "wēixiǎn", pos: "tt.", meaning: "nguy hiểm", example: "突然开过来一辆车，非常危险。", exampleVi: "Đột nhiên có một chiếc xe lao tới, vô cùng nguy hiểm." },
    { id: 17, han: "接着", py: "jiēzhe", pos: "p.", meaning: "ngay sau đó, tiếp theo", example: "接着又梦见我跳到车上，跟警察一起抓住了一个坏人。", exampleVi: "Tiếp đó lại mơ thấy tôi nhảy lên xe, cùng cảnh sát bắt được một kẻ xấu." },
    { id: 18, han: "警察", py: "jǐngchá", pos: "dt.", meaning: "cảnh sát", example: "警察抓住了一个坏人。", exampleVi: "Cảnh sát đã bắt được một kẻ xấu." },
    { id: 19, han: "抓", py: "zhuā", pos: "đgt.", meaning: "bắt, túm", example: "我跟警察一起抓住了一个坏人。", exampleVi: "Tôi cùng cảnh sát bắt được một kẻ xấu." },
    { id: 20, han: "咸", py: "xián", pos: "tt.", meaning: "mặn", example: "记得有一次，我晚饭吃得太咸。", exampleVi: "Nhớ có một lần, bữa tối tôi ăn mặn quá." },
    { id: 21, han: "矿泉水", py: "kuàngquánshuǐ", pos: "dt.", meaning: "nước suối, nước khoáng", example: "那天晚上就梦见自己到处找商店买矿泉水。", exampleVi: "Tối hôm đó liền mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối." },
    { id: 22, han: "付款", py: "fù kuǎn", pos: "đgt.", meaning: "trả tiền", example: "你还可以用手机付款购物。", exampleVi: "Bạn còn có thể dùng điện thoại để trả tiền mua sắm." },
    { id: 23, han: "举", py: "jǔ", pos: "đgt.", meaning: "nêu, đưa ra", example: "举一个例子，迷路时，只要用手机地图查一下地址。", exampleVi: "Lấy một ví dụ, khi lạc đường chỉ cần dùng bản đồ trên điện thoại tra địa chỉ." },
    { id: 24, han: "迷路", py: "mí lù", pos: "đgt.", meaning: "lạc đường", example: "我怎么觉得咱们好像迷路了？", exampleVi: "Sao mình thấy hình như chúng ta lạc đường rồi?" },
    { id: 25, han: "地址", py: "dìzhǐ", pos: "dt.", meaning: "địa chỉ", example: "把你的邮箱地址告诉我。", exampleVi: "Cho tôi biết địa chỉ email của bạn." },
    { id: 26, han: "地点", py: "dìdiǎn", pos: "dt.", meaning: "địa điểm, nơi", example: "马上就能知道怎么去那个地点。", exampleVi: "Lập tức biết được cách đến địa điểm đó." },
    { id: 27, han: "世纪", py: "shìjì", pos: "dt.", meaning: "thế kỷ", example: "21世纪，我们的生活发生了巨大变化。", exampleVi: "Thế kỷ 21, cuộc sống của chúng ta đã thay đổi to lớn." },
    { id: 28, han: "邮局", py: "yóujú", pos: "dt.", meaning: "bưu điện", example: "现在连邮局都不用去。", exampleVi: "Bây giờ đến bưu điện cũng không cần đi." },
    { id: 29, han: "收", py: "shōu", pos: "đgt.", meaning: "nhận", example: "用不了一分钟，远处的朋友就能收到。", exampleVi: "Chưa đến một phút, bạn bè ở xa đã nhận được." },
    { id: 30, han: "信封", py: "xìnfēng", pos: "dt.", meaning: "phong thư, bì thư", example: "比写信封用的时间都短。", exampleVi: "Còn nhanh hơn cả thời gian viết bì thư." },
    { id: 31, han: "网站", py: "wǎngzhàn", pos: "dt.", meaning: "trang web", example: "现在只要打开网站，任何信息都可以在第一时间获得。", exampleVi: "Bây giờ chỉ cần mở trang web là có thể nhận được mọi thông tin ngay lập tức." },
    { id: 32, han: "信息", py: "xìnxī", pos: "dt.", meaning: "tin tức, thông tin", example: "任何信息都可以在第一时间获得。", exampleVi: "Mọi thông tin đều có thể nhận được ngay lập tức." },
    { id: 33, han: "特点", py: "tèdiǎn", pos: "dt.", meaning: "đặc điểm", example: "我知道中国功夫很厉害，京剧也很有特点。", exampleVi: "Tôi biết võ thuật Trung Quốc rất giỏi, Kinh kịch cũng rất có nét đặc sắc.", group: "extended" },
    { id: 34, han: "优点", py: "yōudiǎn", pos: "dt.", meaning: "ưu điểm", example: "不仅要看到自己的优点，也要了解自己的缺点。", exampleVi: "Không chỉ phải thấy ưu điểm của mình mà còn phải hiểu khuyết điểm của mình.", group: "extended" },
    { id: 35, han: "缺点", py: "quēdiǎn", pos: "dt.", meaning: "khuyết điểm", example: "要努力改掉缺点。", exampleVi: "Phải cố gắng sửa bỏ khuyết điểm.", group: "extended" },
    { id: 36, han: "重点", py: "zhòngdiǎn", pos: "dt.", meaning: "trọng điểm", example: "复习要注意方法，复习重点内容应该来得及。", exampleVi: "Ôn tập phải chú ý phương pháp, ôn nội dung trọng điểm thì chắc kịp.", group: "extended" },
  ],

  text: {
    title: "课文 科技与世界",
    paragraphs: [
      {
        heading: "课文一 · 王静给孙月推荐一本书",
        zh: "孙月：上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她，她现在总是有各种各样的“为什么”。\n王静：孩子眼中的世界是美丽和奇特的。有一本书叫《新十万个为什么》，现在卖得非常火。书里的内容都是儿童想知道的科学知识，相信你女儿一定喜欢读。\n孙月：难道它和我们小时候看的《十万个为什么》不一样吗？作者是谁啊？\n王静：作者的名字我没记住。《新十万个为什么》的内容更新，介绍了各种科学知识，包括地球、动物、植物、交通、科学技术、社会和文化等很多方面。\n孙月：太好了！不过她这么小，我不知道她是否能读懂。\n王静：放心吧，这本书的语言简单易懂，一定能增长孩子的科学知识。",
        vi: "Tôn Nguyệt: Lần trước con gái hỏi mình máy bay cất cánh và hạ cánh thế nào, mình thật không biết phải trả lời con ra sao, bây giờ lúc nào con bé cũng có đủ thứ câu hỏi “vì sao”.\nVương Tĩnh: Thế giới trong mắt trẻ con thật đẹp và kỳ lạ. Có một cuốn sách tên là “Mười vạn câu hỏi vì sao mới”, bây giờ đang bán rất chạy. Nội dung trong sách đều là kiến thức khoa học mà trẻ em muốn biết, mình tin con gái cậu nhất định sẽ thích đọc.\nTôn Nguyệt: Chẳng lẽ nó khác với cuốn “Mười vạn câu hỏi vì sao” chúng mình đọc hồi nhỏ à? Tác giả là ai vậy?\nVương Tĩnh: Tên tác giả thì mình không nhớ. Nội dung cuốn “Mười vạn câu hỏi vì sao mới” mới hơn, giới thiệu đủ loại kiến thức khoa học, bao gồm rất nhiều mặt như Trái Đất, động vật, thực vật, giao thông, khoa học kỹ thuật, xã hội và văn hóa.\nTôn Nguyệt: Hay quá! Nhưng con bé còn nhỏ thế, mình không biết nó có đọc hiểu được không.\nVương Tĩnh: Yên tâm đi, ngôn ngữ của cuốn sách này đơn giản dễ hiểu, chắc chắn sẽ giúp tăng thêm kiến thức khoa học cho bé.",
        questions: ["王静给孙月推荐了一本什么书？为什么给她推荐这本书？", "这本书都有哪些内容？孙月担心什么？王静觉得这本书怎么样？"],
      },
      {
        heading: "课文二 · 李老师和高老师在聊电脑和互联网技术的发展",
        zh: "李老师：现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了，这比我们上学的时候方便多了。\n高老师：现在的人们，尤其是大学生开始普遍使用电脑，他们的生活已经离不开电脑。据调查，70%的人遇到问题时，首先想到的就是上网找答案。\n李老师：电脑和互联网技术的发展使学生们的学习方式发生了很多变化，不过天天对着电脑看，眼睛实在受不了。\n高老师：不仅是学习方式，而且连生活方式也发生了很大改变。现在越来越多的学生喜欢在网上写日记，他们说这样可以让朋友及时了解自己的生活。\n李老师：这个办法不错，既能方便大家的交流，还能节约用纸，保护环境。但是如果别人都能看到我的日记的话，多不安全啊！\n高老师：放心吧，可以给网上的日记加密码，那样只有得到了允许，别人才能看到。",
        vi: "Thầy Lý: Sinh viên bây giờ hễ gặp vấn đề không hiểu là có thể lập tức lên mạng tìm câu trả lời, chỉ mấy giây là giải quyết xong, tiện hơn nhiều so với hồi chúng ta đi học.\nThầy Cao: Mọi người bây giờ, nhất là sinh viên, đã bắt đầu dùng máy tính phổ biến, cuộc sống của họ đã không thể rời xa máy tính. Theo điều tra, 70% người khi gặp vấn đề thì điều đầu tiên nghĩ tới là lên mạng tìm câu trả lời.\nThầy Lý: Sự phát triển của máy tính và công nghệ Internet đã làm cách học của sinh viên thay đổi nhiều, có điều ngày nào cũng nhìn vào máy tính thì mắt thật sự chịu không nổi.\nThầy Cao: Không chỉ cách học mà ngay cả lối sống cũng thay đổi rất lớn. Bây giờ ngày càng nhiều sinh viên thích viết nhật ký trên mạng, họ nói như vậy có thể giúp bạn bè kịp thời biết về cuộc sống của mình.\nThầy Lý: Cách này hay đấy, vừa tiện cho mọi người giao lưu, lại vừa tiết kiệm giấy, bảo vệ môi trường. Nhưng nếu người khác đều đọc được nhật ký của tôi thì thật không an toàn chút nào!\nThầy Cao: Yên tâm đi, có thể đặt mật khẩu cho nhật ký trên mạng, như vậy chỉ khi được cho phép thì người khác mới xem được.",
        questions: ["现在的大学生遇到不明白的问题怎么办？调查结果是什么？", "电脑和互联网技术的发展带来了哪些变化？网上写日记有哪些好处？"],
      },
      {
        heading: "课文三 · 王静和孙月在聊关于梦的情况",
        zh: "王静：我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险，接着又梦见我跳到车上，跟警察一起抓住了一个坏人。\n孙月：奇怪，你怎么总能记住自己做了什么梦？我好像从来没做过梦。\n王静：每个人都会做梦，区别只是有多有少。有的人睡醒之后还记得梦里的事情，有的人却记不清楚了。你之所以觉得从来没做过梦，只不过是忘记了。\n孙月：你说的有道理，我一般都是一觉睡到天亮。很多人认为做梦是上天要告诉他们将来会发生的一些事情，可能上天不想让我知道吧。\n王静：一般晚上睡觉时，身体感觉到什么，人就容易梦到什么内容。记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。\n孙月：很多人都试着对梦进行解释，有些人甚至专门写过这方面的书，可惜到现在仍然没有一个科学的说法。",
        vi: "Vương Tĩnh: Tối qua mình nằm một giấc mơ rất kỳ lạ, mơ thấy mình đang đi trên một cây cầu, đi mãi đi mãi, đột nhiên có một chiếc xe lao tới, vô cùng nguy hiểm, tiếp đó lại mơ thấy mình nhảy lên xe, cùng cảnh sát bắt được một kẻ xấu.\nTôn Nguyệt: Lạ thật, sao lúc nào cậu cũng nhớ được mình đã mơ thấy gì? Mình hình như chưa bao giờ nằm mơ cả.\nVương Tĩnh: Ai cũng nằm mơ, khác nhau chỉ là nhiều hay ít. Có người ngủ dậy rồi vẫn nhớ chuyện trong mơ, có người lại không nhớ rõ nữa. Cậu sở dĩ cảm thấy mình chưa bao giờ nằm mơ, chẳng qua là đã quên mất thôi.\nTôn Nguyệt: Cậu nói có lý, mình thường ngủ một mạch đến sáng. Nhiều người cho rằng nằm mơ là ông trời muốn báo cho họ biết một số chuyện sẽ xảy ra trong tương lai, có lẽ ông trời không muốn cho mình biết chăng.\nVương Tĩnh: Thường thì khi ngủ buổi tối, cơ thể cảm thấy gì thì người ta dễ mơ thấy nội dung đó. Nhớ có một lần, bữa tối mình ăn mặn quá, tối hôm đó liền mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối.\nTôn Nguyệt: Rất nhiều người đã thử giải thích giấc mơ, có người thậm chí còn viết hẳn sách về vấn đề này, tiếc là đến nay vẫn chưa có một cách giải thích khoa học nào.",
        questions: ["王静昨天晚上做了个什么样的梦？会有人从来没做过梦吗？", "人们对梦进行过哪些解释？目前的研究结果是什么？"],
      },
      {
        heading: "课文四 · 离不开的手机",
        zh: "现在手机不但价格降低了，而且作用也越来越大，打电话、发短信已经成了人们普遍使用的联系方法。除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的生活。举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。现在的手机更像是一部可以拿在手中的电脑，现代人的生活已经越来越离不开手机了。",
        vi: "Bây giờ điện thoại di động không những giá đã giảm mà công dụng cũng ngày càng lớn, gọi điện, nhắn tin đã trở thành cách liên lạc mà mọi người dùng phổ biến. Ngoài ra, bạn còn có thể dùng nó để nghe nhạc, xem phim, đọc sách, chơi game, trả tiền mua sắm…, điều này giúp cuộc sống của mọi người tiện lợi hơn rất nhiều. Lấy một ví dụ, khi lạc đường, chỉ cần dùng bản đồ trên điện thoại tra địa chỉ là lập tức biết cách đến địa điểm đó. Điện thoại bây giờ càng giống một chiếc máy tính có thể cầm trong tay, cuộc sống của con người hiện đại ngày càng không thể rời xa điện thoại.",
        questions: ["手机都有哪些作用？迷路时怎么用手机帮忙？", "为什么说现代人的生活越来越离不开手机了？"],
      },
      {
        heading: "课文五 · 地球村",
        zh: "21世纪，我们的生活发生了巨大变化。几千公里以外的国家，以前坐船需要几个月，现在乘坐飞机不过十几个小时。原来寄信需要好几天，现在连邮局都不用去，只要在家里上网发个电子邮件，用不了一分钟，远处的朋友就能收到，比写信封用的时间都短。以前外地的新闻要几天后才能知道，现在只要打开网站，任何信息都可以在第一时间获得。现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球村”。",
        vi: "Thế kỷ 21, cuộc sống của chúng ta đã có những thay đổi to lớn. Một đất nước cách xa mấy nghìn ki-lô-mét, trước kia đi thuyền phải mất mấy tháng, bây giờ đi máy bay chỉ mất hơn chục tiếng. Trước đây gửi thư phải mất mấy ngày, bây giờ đến bưu điện cũng không cần đi, chỉ cần ở nhà lên mạng gửi một email, chưa đến một phút bạn bè ở xa đã nhận được, còn nhanh hơn cả thời gian viết bì thư. Trước kia tin tức ở nơi khác phải mấy ngày sau mới biết, bây giờ chỉ cần mở trang web là mọi thông tin đều có thể nhận được ngay lập tức. Sự phát triển của khoa học kỹ thuật hiện đại khiến thế giới ngày càng nhỏ lại, vì vậy bây giờ mọi người gọi Trái Đất là “ngôi làng toàn cầu”.",
        questions: ["我们的生活发生了哪些变化？请举例说明。", "为什么人们把地球叫作“地球村”？"],
      },
    ],
    notes: [
      "《十万个为什么》 (Shíwàn Ge Wèi Shénme): “Mười vạn câu hỏi vì sao”, bộ sách phổ biến khoa học nổi tiếng cho thiếu nhi Trung Quốc.",
      "Văn hóa: 微博与微信 – Weibo (微博, mạng xã hội chia sẻ thông tin ngắn khoảng 140 chữ, Sina ra mắt dịch vụ từ tháng 8/2009) và WeChat (微信, phần mềm nhắn tin tức thời do Tencent tung ra năm 2011).",
    ],
  },

  grammar: [
    {
      word: "是否",
      title: "Phó từ “có… hay không”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ, nghĩa là “có phải… không / có… hay không”, thường dùng trong văn viết.",
          examples: [
            "不过她这么小，这本书我不知道她是否能读懂。",
            "有人认为有“夫妻相”的夫妻家庭生活幸福，实际上，婚姻是否幸福跟这个没有关系。",
            "现在，如果要问人们选择职业时主要考虑的是什么，不少人会以收入多少作为标准。当然，也有人主要看自己是否喜欢这份工作。",
          ],
        },
      ],
      note: "是否 = 是不是 (văn viết); đứng trước động từ/tính từ: 是否能、是否喜欢、是否幸福.",
    },
    {
      word: "受不了",
      title: "“Chịu không nổi”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chịu không nổi (sự đau đớn, nỗi đau khổ, áp lực, điều bất hạnh, thái độ, tính khí…), thường dùng trước danh từ hay cụm danh từ, cũng có thể đứng cuối câu.",
          examples: [
            "A：我们再去对面的商店看看吧。B：我真的受不了你了，你到底还要逛多久？",
            "不过天天对着电脑看，眼睛实在受不了。",
            "A：真受不了这样的老师！一个简单的动作让我们练二三十遍。B：他对你们严格些好，这样可以让你们打好基础。",
          ],
        },
      ],
      note: "Hình thức khẳng định là 受得了 (chịu được).",
    },
    {
      word: "接着",
      title: "Phó từ “ngay sau đó, tiếp theo”",
      usages: [
        {
          label: "Cách dùng",
          explain: "(Về thời gian) theo sát ngay sau, chỉ tình huống khác xảy ra ngay sau tình huống được đề cập trước đó.",
          examples: [
            "这本书的内容非常有趣，你看完以后先不要还，我接着看。",
            "我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险，接着又梦见我跳到车上，跟警察一起抓住了一个坏人。",
            "妻子问：“老公，怎么不见你和老王打网球了呢？”丈夫说：“你愿意和一个赢了就得意，输了就不高兴的人打球吗？”“当然不愿意。我明白了，”妻子接着说，“老王也不愿意跟这样的人打。”",
          ],
        },
        {
          label: "Điểm giống 接着 – 然后",
          explain: "Đều chỉ tình huống khác xảy ra ngay sau tình huống trước.",
          examples: ["他毕业后在老家工作了一年，接着/然后又考上了北京大学，读研究生。"],
        },
        {
          label: "Điểm khác 接着 – 然后",
          explain: "接着 là phó từ, nhấn mạnh sự nối tiếp ngay về thời gian; 然后 là liên từ, thường dùng trong cấu trúc “先……然后（再）……”. Chủ ngữ của 接着 có thể giống hoặc khác vế trước; chủ ngữ của 然后 thường giống.",
          examples: ["大学毕业后，他接着又考上了研究生。", "咱们先去吃晚饭，然后看电影，好不好？", "这本书你看完了我接着看吧。", "遇到不认识的词语，我会马上查词典，然后写在本子上。"],
        },
      ],
      note: "比一比 接着 – 然后: 我说完了，你接着说吧 (chỉ 接着); 你先上网看看吧，然后再做决定 (然后).",
    },
    {
      word: "除此以外",
      title: "“Ngoài điều này ra”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Tương đương 除了这个（chỉ nội dung nói trước đó）以外, thường dùng trong văn viết.",
          examples: [
            "他和弟弟同一天出生，兄弟俩长得很像，但除此以外几乎再找不到其他共同点。",
            "北方人过年时爱吃饺子，是因为饺子味道鲜美，除此以外，还因为人们忙了一年，过年时全家人坐在一起包饺子，是很好的交流机会。",
            "……打电话、发短信已经成了人们普遍使用的联系方法。除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的生活。",
          ],
        },
      ],
      note: "Thường đi với 还/也 ở vế sau: 除此以外，还…….",
    },
    {
      word: "把……叫作……",
      title: "Cấu trúc “gọi… là…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thành phần đứng sau 叫作 là tên gọi của thành phần đứng trước. Sau 把 thường là danh từ, đại từ hoặc cụm danh từ.",
          examples: [
            "现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作“地球村”。",
            "黄河是中国第二大河，从中国西部流向东部，全长5464公里，人们把它叫作“母亲河”。",
            "中国人搬了新家后，一般都会邀请亲戚朋友到家里来吃顿饭，热闹一下。人们把这个习惯叫作“暖房”。",
          ],
        },
      ],
      note: "Chủ ngữ (人们…) + 把 + A + 叫作 + “B”.",
    },
  ],

  wordChoice: [
    { sentence: "北京有一___山，叫香山，非常有名。", options: W_EX1, answer: "座" },
    { sentence: "有些人直接拿自己的生日做银行卡或信用卡的密码。其实，这样做很不___。", options: W_EX1, answer: "安全" },
    { sentence: "无论对自己还是对其他人来说，喝完酒开车都是极其___的。", options: W_EX1, answer: "危险" },
    { sentence: "说出去的话很难___回。因此，生气时不要随便说话。", options: W_EX1, answer: "收" },
    { sentence: "我们的飞机将于20分钟后___在北京首都国际机场。", options: W_EX1, answer: "降落" },
    { sentence: "A：饺子很香，不过鸡蛋汤稍微有点儿___。", options: W_EX2, answer: "咸" },
    { sentence: "A：对面那条街上新开了一家理发店，听说那儿的理发师___还不错。", options: W_EX2, answer: "技术" },
    { sentence: "A：我怎么觉得咱们好像___了？", options: W_EX2, answer: "迷路" },
    { sentence: "B：没问题，把你的邮箱___告诉我，我整理好了就发给你。", options: W_EX2, answer: "地址" },
    { sentence: "B：时间不变，___改在西门了。", options: W_EX2, answer: "地点" },
    { sentence: "教育学生时，要根据学生的___选择不同的方法。", options: W_EXT, answer: "特点" },
    { sentence: "由于时间限制，这份材料我只对其中的___简单说明一下。", options: W_EXT, answer: "重点" },
    { sentence: "他的___是有礼貌，诚实，能吃苦，缺点是太马虎、太粗心了。", options: W_EXT, answer: "优点" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [13, 16, 17] },
        { vocabId: 5, distractors: [4, 8, 3] },
        { vocabId: 11, distractors: [16, 12, 10] },
        { vocabId: 18, distractors: [19, 15, 14] },
        { vocabId: 21, distractors: [20, 30, 28] },
        { vocabId: 24, distractors: [25, 26, 23] },
        { vocabId: 27, distractors: [31, 32, 7] },
        { vocabId: 34, distractors: [35, 36, 33] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 6, 12, 13, 16, 18, 25, 32],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "不知道", "她", "是否", "能读懂", "。"], answer: "我不知道她是否能读懂。", vi: "Tôi không biết con bé có đọc hiểu được không." },
        { tokens: ["天天", "对着电脑看，", "眼睛", "实在", "受不了", "。"], answer: "天天对着电脑看，眼睛实在受不了。", vi: "Ngày nào cũng nhìn máy tính, mắt thật sự chịu không nổi." },
        { tokens: ["可以", "给网上的日记", "加", "密码", "。"], answer: "可以给网上的日记加密码。", vi: "Có thể đặt mật khẩu cho nhật ký trên mạng." },
        { tokens: ["迷路时，", "只要", "用手机地图", "查一下", "地址", "。"], answer: "迷路时，只要用手机地图查一下地址。", vi: "Khi lạc đường, chỉ cần dùng bản đồ trên điện thoại tra địa chỉ." },
        { tokens: ["现在", "人们", "都把", "地球", "叫作", "“地球村”", "。"], answer: "现在人们都把地球叫作“地球村”。", vi: "Bây giờ mọi người đều gọi Trái Đất là “ngôi làng toàn cầu”." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1–2 · Sách khoa học và máy tính", text: "孙月：上次女儿问我飞机是怎么起飞和{{c1}}的。\n王静：有一本书叫《新十万个为什么》，现在卖得非常{{c2}}。\n孙月：{{c3}}是谁啊？不过她这么小，我不知道她{{c4}}能读懂。\n李老师：电脑和互联网{{c5}}的发展使学生们的学习{{c6}}发生了很多变化。\n高老师：可以给网上的日记加{{c7}}，那样只有得到了{{c8}}，别人才能看到。" },
        { title: "Bài 3 · Giấc mơ", text: "王静：我梦到自己正在一座{{c9}}上走，突然开过来一辆车，非常{{c10}}。" },
      ],
      answers: { c1: "降落", c2: "火", c3: "作者", c4: "是否", c5: "技术", c6: "方式", c7: "密码", c8: "允许", c9: "桥", c10: "危险" },
      bank: ["降落", "火", "作者", "是否", "技术", "方式", "密码", "允许", "桥", "危险", "安全", "交通", "日记"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về điện thoại di động và “ngôi làng toàn cầu”.",
      passages: [
        { title: "Bài 4 · Điện thoại di động", text: "除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、{{e1}}购物等。{{e2}}一个例子，{{e3}}时，只要用手机地图查一下{{e4}}，马上就能知道怎么去那个{{e5}}。" },
        { title: "Bài 5 · Ngôi làng toàn cầu", text: "21{{e6}}，我们的生活发生了巨大变化。现在连{{e7}}都不用去，只要在家里上网发个电子邮件，远处的朋友就能{{e8}}到。现在只要打开{{e9}}，任何{{e10}}都可以在第一时间获得。" },
      ],
      answers: { e1: "付款", e2: "举", e3: "迷路", e4: "地址", e5: "地点", e6: "世纪", e7: "邮局", e8: "收", e9: "网站", e10: "信息" },
      bank: ["付款", "举", "迷路", "地址", "地点", "世纪", "邮局", "收", "网站", "信息", "信封", "特点", "交通"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "这本书的语言简单易懂，一定能增长孩子的科学知识。", vi: "Ngôn ngữ của cuốn sách này đơn giản dễ hiểu, chắc chắn sẽ tăng thêm kiến thức khoa học cho trẻ.", keywords: ["sách", "dễ hiểu", "kiến thức khoa học"] },
        { zh: "现在越来越多的学生喜欢在网上写日记。", vi: "Bây giờ ngày càng nhiều học sinh thích viết nhật ký trên mạng.", keywords: ["ngày càng", "nhật ký", "trên mạng"] },
        { zh: "我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。", vi: "Bữa tối tôi ăn mặn quá, tối hôm đó liền mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối.", keywords: ["mặn", "mơ", "nước suối"] },
        { zh: "现代人的生活已经越来越离不开手机了。", vi: "Cuộc sống của con người hiện đại ngày càng không thể rời xa điện thoại.", keywords: ["hiện đại", "không thể rời", "điện thoại"] },
        { zh: "现代科学技术的发展让世界变得越来越小。", vi: "Sự phát triển của khoa học kỹ thuật hiện đại khiến thế giới ngày càng nhỏ lại.", keywords: ["phát triển", "khoa học", "thế giới", "nhỏ"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi không biết anh ấy có đồng ý hay không.", answers: ["我不知道他是否同意。"] },
        { vi: "Tôi thật sự chịu không nổi anh nữa rồi.", answers: ["我真的受不了你了。", "我实在受不了你了。"] },
        { vi: "Cuốn sách này bạn đọc xong thì tôi đọc tiếp nhé.", answers: ["这本书你看完了我接着看吧。", "这本书你看完以后我接着看吧。"] },
        { vi: "Mọi người gọi sông Hoàng Hà là “sông Mẹ”.", answers: ["人们把黄河叫作“母亲河”。", "人们把黄河叫作母亲河。"] },
        { vi: "Mấy giây là giải quyết xong vấn đề.", answers: ["几秒钟就把问题解决了。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "王静记得《新十万个为什么》作者的名字。", a: false },
        { q: "《新十万个为什么》的语言简单易懂。", a: true },
        { q: "据调查，70%的人遇到问题时，首先想到的是上网找答案。", a: true },
        { q: "李老师觉得在网上写日记很浪费纸。", a: false },
        { q: "孙月说她每天晚上都做很多梦。", a: false },
        { q: "到现在仍然没有一个关于梦的科学的说法。", a: true },
        { q: "现在的手机价格越来越贵了。", a: false },
        { q: "现在发电子邮件比写信封用的时间都短。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "这本书现在卖得非常火。",
        "天天对着电脑看，眼睛实在受不了。",
        "每个人都会做梦，区别只是有多有少。",
        "迷路时，只要用手机地图查一下地址。",
        "现在人们都把地球叫作“地球村”。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请介绍一下科技的发展对我们生活的影响。 (Hãy giới thiệu ảnh hưởng của sự phát triển khoa học công nghệ đến cuộc sống của chúng ta: máy tính, Internet, điện thoại di động…)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 18 (是否, 受不了, 接着, 除此以外, 把……叫作……).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["是否", "受不了", "接着", "除此以外", "叫作"],
      minGrammar: 2,
      sample: "21世纪，科学技术的发展让我们的生活发生了巨大变化。以前寄信要去邮局，现在发个电子邮件，几秒钟朋友就能收到。手机的作用也越来越大，打电话、发短信都很方便。除此以外，我们还可以用手机付款购物、看新闻、查地址，迷路时也不用担心。不过，天天对着手机和电脑，眼睛实在受不了。另外，网上的信息很多，我们也要想一想它们是否真实，还要注意密码安全。总的来说，科技让世界变得越来越小，难怪人们把地球叫作“地球村”。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 接着 / 然后", points: 6,
      subtitle: "Chọn 接着 hoặc 然后 cho mỗi chỗ trống.",
      grammarWord: "接着 / 然后",
      options: ["接着", "然后"],
      items: [
        { q: "我说完了，你___说吧。", answers: ["接着"] },
        { q: "你先上网看看吧，多比较比较，___再做决定。", answers: ["然后"] },
        { q: "进了商店，妻子先买了一件衬衫，___又买了一条裤子。", answers: ["然后", "接着"] },
        { q: "今天的课就到这儿，下节课___讲这个问题。", answers: ["接着"] },
        { q: "他已经学了一年汉语了，明年还要___学。", answers: ["接着"] },
        { q: "这本书你看完了我___看吧。", answers: ["接着"] },
        { q: "咱们先去吃晚饭，___看电影，好不好？", answers: ["然后"] },
        { q: "遇到不认识的词语，我会马上查词典，___写在本子上。", answers: ["然后"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 是否", points: 6,
      subtitle: "Điền phó từ thích hợp vào chỗ trống (是否 – có… hay không).",
      grammarWord: "是否",
      items: [
        { q: "不过她这么小，我不知道她___能读懂。", answers: ["是否"] },
        { q: "实际上，婚姻___幸福跟这个没有关系。", answers: ["是否"] },
        { q: "也有人主要看自己___喜欢这份工作。", answers: ["是否"] },
        { q: "您稍等，我查一下后天的航班___还有座位。", answers: ["是否"] },
        { q: "我们应该冷静地想想他们提出的意见___正确。", answers: ["是否"] },
        { q: "一个人___努力，对于他离成功的远近有着重要的影响。", answers: ["是否"] },
        { q: "请问这个房间___允许抽烟？", answers: ["是否"] },
        { q: "我还不知道他___同意我们的计划。", answers: ["是否"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 把……叫作……", points: 5,
      subtitle: "Điền 把 hoặc 叫作 vào chỗ trống để hoàn thành cấu trúc 把……叫作…….",
      grammarWord: "把……叫作……",
      items: [
        { q: "现在人们都把地球___“地球村”。", answers: ["叫作"] },
        { q: "黄河是中国第二大河，人们把它___“母亲河”。", answers: ["叫作"] },
        { q: "人们把这个习惯___“暖房”。", answers: ["叫作"] },
        { q: "人们___汉族以外的55个民族叫作“少数民族”。", answers: ["把"] },
        { q: "在汉语里，人们把“海”“河”左边的部分___“三点水”。", answers: ["叫作"] },
        { q: "人们___大熊猫叫作“活化石”。", answers: ["把"] },
        { q: "大家都___他叫作“小老虎”，因为他特别活泼。", answers: ["把"] },
        { q: "很多人把熊猫___“中国国宝”。", answers: ["叫作"] },
      ],
    },
  ],
};
