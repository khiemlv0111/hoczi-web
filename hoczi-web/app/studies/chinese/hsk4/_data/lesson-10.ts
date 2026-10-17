import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第10课 幸福的标准 (Tiêu chuẩn của hạnh phúc)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 124–136 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và bài tập chọn từ lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson10: Lesson = {
  level: "hsk4",
  no: 10,
  slug: "bai-10",
  zh: "幸福的标准",
  pinyin: "Xìngfú de biāozhǔn",
  vi: "Tiêu chuẩn của hạnh phúc",
  en: "The Standard of Happiness",
  topic: "幸福 · Hạnh phúc",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 空儿、母亲、永远、方向、优秀、硕士、翻译、确实、兴奋、建议、职业、关键、将来、发展、经济、条件、富、穷、由于、比如、答案…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 不过 (phân biệt 不过 – 但是), 确实, 在……看来, 由于, 比如.",
    "Đọc hiểu ba đoạn hội thoại về cuộc sống gia đình, sự ngưỡng mộ người khác, chọn nghề và hai bài đọc về tiền bạc và hạnh phúc.",
    "Trình bày quan niệm của bản thân về hạnh phúc, kể về một người hoặc một việc khiến mình thấy hạnh phúc.",
    "Nắm các từ mở rộng có chữ 经: 经济、经验、经历.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片：兴奋、硕士、困、翻译、拉、躺。", vi: "Chọn hình tương ứng với các từ: phấn khởi, thạc sĩ, buồn ngủ, phiên dịch, kéo, nằm." },
    { zh: "什么是幸福？现在你感到幸福吗？什么会影响你的幸福感？", vi: "Hạnh phúc là gì (công việc tốt, thu nhập cao, nhiều bạn bè, gia đình quan tâm nhau…)? Hiện giờ bạn có thấy hạnh phúc không? Điều gì ảnh hưởng đến cảm giác hạnh phúc của bạn (sức khỏe, công việc, gia đình…)?" },
  ],

  vocab: [
    { id: 1, han: "礼拜天", py: "lǐbàitiān", pos: "dt.", meaning: "chủ nhật", example: "礼拜天有空儿吗？陪我去逛街怎么样？", exampleVi: "Chủ nhật cậu có rảnh không? Đi dạo phố với tớ nhé?" },
    { id: 2, han: "空儿", py: "kòngr", pos: "dt.", meaning: "thời gian rỗi", example: "你最近忙吗？哪天有空儿？", exampleVi: "Dạo này cậu bận không? Hôm nào rảnh?" },
    { id: 3, han: "母亲", py: "mǔqīn", pos: "dt.", meaning: "mẹ", example: "家里还有母亲和儿子需要照顾。", exampleVi: "Ở nhà còn có mẹ và con trai cần chăm sóc." },
    { id: 4, han: "不过", py: "búguò", pos: "liên.", meaning: "nhưng, song", example: "不过现在我很幸福。", exampleVi: "Nhưng bây giờ tớ rất hạnh phúc." },
    { id: 5, han: "永远", py: "yǒngyuǎn", pos: "p.", meaning: "vĩnh viễn, mãi mãi", example: "在母亲面前我可以做一个永远长不大的孩子。", exampleVi: "Trước mặt mẹ, tớ có thể làm một đứa trẻ mãi mãi không lớn." },
    { id: 6, han: "方向", py: "fāngxiàng", pos: "dt.", meaning: "phương hướng, sự định hướng", example: "这让我有了努力的方向。", exampleVi: "Điều này khiến tớ có phương hướng để nỗ lực." },
    { id: 7, han: "优秀", py: "yōuxiù", pos: "tt.", meaning: "xuất sắc, ưu tú", example: "你有一个漂亮的女儿，还那么优秀。", exampleVi: "Anh có một cô con gái xinh đẹp, lại xuất sắc như vậy." },
    { id: 8, han: "硕士", py: "shuòshì", pos: "dt.", meaning: "thạc sĩ", example: "她硕士毕业后就当了翻译。", exampleVi: "Cô ấy tốt nghiệp thạc sĩ xong là làm phiên dịch." },
    { id: 9, han: "翻译", py: "fānyì", pos: "dt.", meaning: "phiên dịch viên", example: "我女儿是一名翻译。", exampleVi: "Con gái tôi là một phiên dịch viên." },
    { id: 10, han: "确实", py: "quèshí", pos: "p.", meaning: "thực sự", example: "我女儿确实不错。", exampleVi: "Con gái tôi thực sự rất khá." },
    { id: 11, han: "兴奋", py: "xīngfèn", pos: "tt.", meaning: "hăng hái, phấn khởi", example: "她兴奋地拉着我和她爸俩去商场。", exampleVi: "Con bé phấn khởi kéo tôi và bố nó đi trung tâm thương mại." },
    { id: 12, han: "拉", py: "lā", pos: "đgt.", meaning: "kéo, lôi, dắt", example: "她拉着我去商场给我买礼物。", exampleVi: "Con bé kéo tôi đi trung tâm thương mại mua quà cho tôi." },
    { id: 13, han: "建议", py: "jiànyì", pos: "dt.", meaning: "kiến nghị, sự đề nghị", example: "我还没想好呢，正想听听你的建议。", exampleVi: "Tớ còn chưa nghĩ kỹ, đang muốn nghe góp ý của cậu đây." },
    { id: 14, han: "职业", py: "zhíyè", pos: "dt.", meaning: "nghề nghiệp", example: "你觉得在选择职业时，收入重要吗？", exampleVi: "Cậu thấy khi chọn nghề, thu nhập có quan trọng không?" },
    { id: 15, han: "关键", py: "guānjiàn", pos: "dt.", meaning: "điều quan trọng, điểm mấu chốt", example: "赚钱多少不是最重要的，兴趣才是关键。", exampleVi: "Kiếm nhiều hay ít tiền không phải quan trọng nhất, sở thích mới là mấu chốt." },
    { id: 16, han: "将来", py: "jiānglái", pos: "dt.", meaning: "tương lai", example: "只有做自己喜欢的事，将来也会有更好的发展。", exampleVi: "Chỉ có làm việc mình thích thì tương lai mới phát triển tốt hơn." },
    { id: 17, han: "发展", py: "fāzhǎn", pos: "đgt.", meaning: "phát triển", example: "我们只有了解了自己的兴趣爱好后，才能更好地发展自己。", exampleVi: "Chỉ khi hiểu rõ sở thích của mình, chúng ta mới có thể phát triển bản thân tốt hơn." },
    { id: 18, han: "躺", py: "tǎng", pos: "đgt.", meaning: "nằm", example: "然后躺在床上看看书、听听音乐。", exampleVi: "Sau đó nằm trên giường đọc sách, nghe nhạc." },
    { id: 19, han: "困", py: "kùn", pos: "tt.", meaning: "buồn ngủ", example: "困了睡睡觉，就很幸福。", exampleVi: "Buồn ngủ thì ngủ một giấc, thế là rất hạnh phúc." },
    { id: 20, han: "经济", py: "jīngjì", pos: "dt.", meaning: "kinh tế", example: "有的人认为经济条件越好人就越幸福。", exampleVi: "Có người cho rằng điều kiện kinh tế càng tốt thì con người càng hạnh phúc." },
    { id: 21, han: "条件", py: "tiáojiàn", pos: "dt.", meaning: "điều kiện", example: "我觉得你的条件挺适合的，可以去试试。", exampleVi: "Tôi thấy điều kiện của cậu khá phù hợp, có thể đi thử xem." },
    { id: 22, han: "富", py: "fù", pos: "tt.", meaning: "giàu", example: "其实有很多富人过得并不愉快。", exampleVi: "Thực ra có rất nhiều người giàu sống không hề vui vẻ." },
    { id: 23, han: "穷", py: "qióng", pos: "tt.", meaning: "nghèo", example: "有些穷人却过得很快乐。", exampleVi: "Có những người nghèo lại sống rất vui vẻ." },
    { id: 24, han: "等", py: "děng", pos: "trợ.", meaning: "vân vân", example: "很多东西都是不能用钱买到的，例如时间、感情、生活经历等。", exampleVi: "Rất nhiều thứ không thể dùng tiền mua được, ví dụ thời gian, tình cảm, trải nghiệm sống v.v." },
    { id: 25, han: "由于", py: "yóuyú", pos: "liên.", meaning: "vì, bởi vì", example: "如果由于缺钱而不能及时去看医生，你的健康都很难得到保证。", exampleVi: "Nếu vì thiếu tiền mà không thể đi khám bác sĩ kịp thời thì sức khỏe của bạn cũng khó được bảo đảm." },
    { id: 26, han: "比如", py: "bǐrú", pos: "đgt.", meaning: "ví dụ, chẳng hạn", example: "小时候幸福是一件东西，比如一块橡皮、一块糖。", exampleVi: "Hồi nhỏ, hạnh phúc là một món đồ, chẳng hạn một cục tẩy, một viên kẹo." },
    { id: 27, han: "橡皮", py: "xiàngpí", pos: "dt.", meaning: "(cục) gôm, tẩy", example: "我能用一下你的橡皮吗？", exampleVi: "Tớ dùng cục tẩy của cậu một chút được không?" },
    { id: 28, han: "糖", py: "táng", pos: "dt.", meaning: "kẹo", example: "小时候得到一块糖就很幸福。", exampleVi: "Hồi nhỏ được một viên kẹo là đã rất hạnh phúc." },
    { id: 29, han: "低", py: "dī", pos: "tt.", meaning: "thấp", example: "生活的态度决定了我们幸福感的高低。", exampleVi: "Thái độ sống quyết định mức độ cảm nhận hạnh phúc cao hay thấp của chúng ta." },
    { id: 30, han: "答案", py: "dá'àn", pos: "dt.", meaning: "đáp án, câu trả lời, lời giải", example: "幸福并没有一个标准答案。", exampleVi: "Hạnh phúc không hề có một đáp án chuẩn." },
    { id: 31, han: "经验", py: "jīngyàn", pos: "dt.", meaning: "kinh nghiệm", example: "要求是艺术专业毕业，有两年以上工作经验。", exampleVi: "Yêu cầu tốt nghiệp chuyên ngành nghệ thuật, có trên hai năm kinh nghiệm làm việc.", group: "extended" },
    { id: 32, han: "经历", py: "jīnglì", pos: "đgt./dt.", meaning: "trải qua; trải nghiệm", example: "人一生中会遇到很多事情，都只能由自己去经历。", exampleVi: "Đời người sẽ gặp rất nhiều chuyện, đều chỉ có thể tự mình trải qua.", group: "extended" },
  ],

  text: {
    title: "课文 幸福的标准",
    paragraphs: [
      {
        heading: "课文一 · 孙月和王静聊王静的生活情况",
        zh: "孙月：礼拜天有空儿吗？陪我去逛街怎么样？我想去给丈夫买个生日礼物。\n王静：我可能去不了，最近事情多。\n孙月：你最近是不是工作特别忙？\n王静：我现在上有老、下有小。除了工作以外，家里还有母亲和儿子需要照顾。\n孙月：真是辛苦啊！你最近脸色不太好，是不是哪儿不舒服？要注意身体啊。\n王静：没事儿，谢谢！不过现在我很幸福，因为在母亲面前我可以做一个永远长不大的孩子；在孩子面前我又是个能照顾他的母亲，这让我有了努力的方向。",
        vi: "Tôn Nguyệt: Chủ nhật cậu có rảnh không? Đi dạo phố với tớ nhé? Tớ muốn đi mua quà sinh nhật cho chồng.\nVương Tĩnh: Chắc tớ không đi được rồi, dạo này nhiều việc quá.\nTôn Nguyệt: Có phải dạo này cậu bận việc lắm không?\nVương Tĩnh: Bây giờ tớ trên có già, dưới có trẻ. Ngoài công việc ra, ở nhà còn có mẹ và con trai cần chăm sóc.\nTôn Nguyệt: Vất vả thật đấy! Dạo này sắc mặt cậu không được tốt lắm, có phải chỗ nào không khỏe không? Phải chú ý sức khỏe đấy.\nVương Tĩnh: Không sao, cảm ơn cậu! Nhưng bây giờ tớ rất hạnh phúc, vì trước mặt mẹ, tớ có thể làm một đứa trẻ mãi mãi không lớn; còn trước mặt con, tớ lại là người mẹ có thể chăm sóc nó, điều đó khiến tớ có phương hướng để nỗ lực.",
        questions: ["孙月让王静陪她去做什么？王静为什么去不了？", "王静为什么很辛苦？她为什么也觉得很幸福？"],
      },
      {
        heading: "课文二 · 高老师和李老师在谈幸福",
        zh: "高老师：你看人家王老师，刚来这儿工作三年就当了教授，还有个好妻子，真让人羡慕！\n李老师：其实，你在别人眼中也是很幸福的，只是你自己没有发现。\n高老师：是吗？我哪能跟王老师比啊？\n李老师：你有一个漂亮的女儿，还那么优秀，硕士毕业后就当了翻译。\n高老师：我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场，给我们买礼物，那时我和她爸心里别提多美了！\n李老师：所以说每个人有每个人的生活，不用羡慕别人。你羡慕别人的时候，他们可能也正在羡慕你呢。",
        vi: "Cô Cao: Chị xem thầy Vương kìa, mới đến đây làm việc ba năm đã lên giáo sư, lại có người vợ tốt, thật khiến người ta ngưỡng mộ!\nCô Lý: Thật ra trong mắt người khác chị cũng rất hạnh phúc đấy, chỉ là chị không tự nhận ra thôi.\nCô Cao: Vậy sao? Tôi sao mà so được với thầy Vương chứ?\nCô Lý: Chị có cô con gái xinh đẹp, lại xuất sắc như vậy, tốt nghiệp thạc sĩ xong là làm phiên dịch.\nCô Cao: Con gái tôi đúng là rất được, tôi nhớ lúc nó vừa nhận tháng lương đầu tiên, nó phấn khởi kéo cả tôi và bố nó đi trung tâm thương mại mua quà cho chúng tôi, lúc ấy trong lòng tôi và bố nó sướng không kể xiết!\nCô Lý: Thế nên mới nói mỗi người có cuộc sống của riêng mình, không cần ngưỡng mộ người khác. Khi chị ngưỡng mộ người khác, có khi họ cũng đang ngưỡng mộ chị đấy.",
        questions: ["高老师为什么羡慕王老师？", "为什么说高老师在别人眼中也是很幸福的？"],
      },
      {
        heading: "课文三 · 小雨和小夏聊找工作的事情",
        zh: "小雨：时间过得真快，马上就要毕业了。毕业后你打算做什么？\n小夏：我还没想好呢，正想听听你的建议。你觉得在选择职业时，收入重要吗？\n小雨：在我看来，赚钱多少不是最重要的，兴趣才是关键。只有做自己喜欢的事，才会觉得幸福，将来也会有更好的发展。\n小夏：我也这么想。如果我带着热情去做自己喜欢的工作，就不会感到累。不过，现在什么东西都那么贵，生活压力太大了，没有钱也不会过得幸福啊！\n小雨：幸福其实很简单，它不是只要有钱就能买到的。我觉得工作结束回家后，洗个热水澡，然后躺在床上看看书、听听音乐，困了睡睡觉，就很幸福。\n小夏：你说的也对。如果能找到一份自己既感兴趣，收入又不错的工作，那就最好了。",
        vi: "Tiểu Vũ: Thời gian trôi nhanh thật, sắp tốt nghiệp rồi. Tốt nghiệp xong cậu định làm gì?\nTiểu Hạ: Tớ còn chưa nghĩ kỹ, đang muốn nghe góp ý của cậu đây. Cậu thấy khi chọn nghề, thu nhập có quan trọng không?\nTiểu Vũ: Theo tớ, kiếm nhiều hay ít tiền không phải điều quan trọng nhất, sở thích mới là mấu chốt. Chỉ có làm việc mình thích mới thấy hạnh phúc, tương lai cũng sẽ phát triển tốt hơn.\nTiểu Hạ: Tớ cũng nghĩ vậy. Nếu tớ làm công việc mình thích với lòng nhiệt tình thì sẽ không thấy mệt. Nhưng bây giờ cái gì cũng đắt thế, áp lực cuộc sống quá lớn, không có tiền thì cũng chẳng sống hạnh phúc được!\nTiểu Vũ: Hạnh phúc thật ra rất đơn giản, nó không phải cứ có tiền là mua được. Tớ thấy sau khi tan làm về nhà, tắm nước nóng, rồi nằm trên giường đọc sách, nghe nhạc, buồn ngủ thì ngủ một giấc, thế là rất hạnh phúc rồi.\nTiểu Hạ: Cậu nói cũng đúng. Nếu tìm được một công việc mình vừa thích, thu nhập lại khá thì tốt nhất.",
        questions: ["小雨对选择职业有什么建议？", "在小雨看来，什么是幸福？小夏呢？"],
      },
      {
        heading: "课文四 · 有钱不一定幸福",
        zh: "有的人希望穿得再好一些，房子再大一些，认为经济条件越好人就越幸福。其实有很多富人过得并不愉快，而有些穷人却过得很快乐。有钱不一定幸福，因为很多东西都是不能用钱买到的，例如时间、感情、生活经历等。但是，从另外一个方面看，如果没钱，也很难过得幸福。当你生病了，如果由于缺钱而不能及时去看医生，你的健康都很难得到保证，就更别说幸福了。",
        vi: "Có người mong được ăn mặc đẹp hơn một chút, nhà rộng hơn một chút, cho rằng điều kiện kinh tế càng tốt thì con người càng hạnh phúc. Thật ra có rất nhiều người giàu sống không hề vui vẻ, trong khi có những người nghèo lại sống rất vui. Có tiền chưa chắc đã hạnh phúc, vì rất nhiều thứ không thể dùng tiền mua được, ví dụ như thời gian, tình cảm, trải nghiệm sống v.v. Nhưng nhìn từ một phương diện khác, nếu không có tiền thì cũng khó sống hạnh phúc. Khi bạn bị ốm, nếu vì thiếu tiền mà không thể đi khám bác sĩ kịp thời thì ngay cả sức khỏe của bạn cũng khó được bảo đảm, càng khỏi nói đến hạnh phúc.",
        questions: ["为什么说有钱不一定幸福？哪些东西是不能用钱买到的？", "为什么说没钱也很难过得幸福？"],
      },
      {
        heading: "课文五 · 什么是幸福",
        zh: "什么是幸福？有的人认为，工资高、能赚钱就是幸福；有的人认为，心情放松、身体健康才是幸福；也有人认为，能帮助别人就是一种幸福。还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福；长大后幸福是一种态度，生活的态度决定了我们幸福感的高低。那怎样才算是真正的幸福？其实，幸福并没有一个标准答案，每个人对幸福都有不同的理解。不管你认为幸福是什么，只要你用心去找，就一定能发现它。",
        vi: "Hạnh phúc là gì? Có người cho rằng lương cao, kiếm được tiền là hạnh phúc; có người cho rằng tâm trạng thoải mái, cơ thể khỏe mạnh mới là hạnh phúc; cũng có người cho rằng giúp được người khác là một niềm hạnh phúc. Lại có người nói, hồi nhỏ hạnh phúc là một món đồ, chẳng hạn một cục tẩy, một viên kẹo, có được là rất hạnh phúc; lớn lên rồi, hạnh phúc là một thái độ, thái độ sống quyết định cảm nhận hạnh phúc của chúng ta cao hay thấp. Vậy thế nào mới là hạnh phúc thật sự? Thật ra hạnh phúc không hề có một đáp án chuẩn, mỗi người đều có cách hiểu khác nhau về hạnh phúc. Dù bạn cho rằng hạnh phúc là gì, chỉ cần bạn dụng tâm đi tìm thì nhất định sẽ tìm thấy nó.",
        questions: ["关于幸福，人们有哪些不同的看法？", "怎样才算是真正的幸福？"],
      },
    ],
    notes: [
      "孙月 (Sūn Yuè), 王静 (Wáng Jìng), 高老师 (Gāo lǎoshī), 李老师 (Lǐ lǎoshī), 小雨 (Xiǎoyǔ), 小夏 (Xiǎo Xià): tên nhân vật trong các hội thoại.",
      "上有老、下有小: trên có cha mẹ già, dưới có con nhỏ (gánh nặng gia đình của người trung niên). 别提多美了: vui sướng không kể xiết.",
      "Văn hóa – 知足常乐 (Tri túc thường lạc): biết đủ thì luôn vui; tiền bạc không phải mục tiêu duy nhất, sức khỏe, người yêu thương, gia đình hạnh phúc, công việc yêu thích đều không mua được bằng tiền.",
    ],
  },

  grammar: [
    {
      word: "不过",
      title: "Liên từ “nhưng, song” / phó từ “chỉ”",
      usages: [
        {
          label: "Liên từ",
          explain: "Đặt ở đầu vế câu sau để chỉ sự chuyển ý, bổ sung và điều chỉnh ý của vế câu trước.",
          examples: [
            "我现在上有老，下有小。除了工作以外，家里还有母亲和儿子需要照顾。不过现在我很幸福。",
            "你再早来一会儿就好了，那辆车刚开走，你只能等下一辆了。不过也不用多长时间，估计十几分钟就来了。",
          ],
        },
        {
          label: "Phó từ",
          explain: "Mang nghĩa là “chỉ” (仅仅) để nhấn mạnh số lượng hay phạm vi nhỏ.",
          examples: [
            "我们不过谈了点儿工作方面的问题，别的都没谈。",
            "A：没有你的帮助，我们肯定不能按时完成任务，真是太谢谢你了。 B：你太客气了，我不过是给了些建议，这一切都是你们辛苦努力的结果。",
          ],
        },
      ],
      note: "比一比 不过 – 但是: Giống: đều dùng ở đầu vế sau chỉ sự chuyển ý (我本来想当律师，不过/但是后来我发现自己对新闻更感兴趣。). Khác: (1) 不过 thường dùng trong văn nói để đưa ra ý kiến hay lời từ chối nhẹ nhàng, lịch sự; 但是 có ngữ khí mạnh hơn (对不起，先生，那种蛋糕已经卖完了，不过，您可以尝一下这种饼干…/ 别人的方法也许很有效，但是并不一定适合你。). (2) 不过 còn làm phó từ nghĩa “chỉ”, sau thường là con số; 但是 không có cách dùng này (去年我不过50公斤，今年怎么这么胖了？).",
    },
    {
      word: "确实",
      title: "Phó từ “quả thật, thực sự”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ 确实 được dùng để khẳng định tính xác thực của một tình huống khách quan.",
          examples: [
            "爱情确实是结婚的重要原因，但仅有爱情是不够的。",
            "A：好几年没见，你还是这么爱开玩笑，我哪儿有你说的那么年轻。 B：我说的是真的，你确实比以前更年轻、更漂亮了。",
            "我女儿确实不错，记得她刚拿到第一个月工资时，就兴奋地拉着我和她爸俩去商场，给我们买礼物，那时我和她爸心里别提多美了！",
          ],
        },
      ],
    },
    {
      word: "在……看来",
      title: "Thành phần chêm “theo (ai) thấy, theo quan điểm của…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "在……看来 là thành phần chêm, chỉ ra rằng nội dung tiếp theo là lời phát biểu ý kiến hay quan điểm.",
          examples: [
            "在很多人看来，听流行音乐仅仅是年轻人的爱好，其实现在不少中老年人对流行歌曲也很感兴趣。",
            "在我看来，比赛结果并不是最重要的，在参加比赛的过程中使自己获得提高更重要。",
            "A：你觉得在选择职业时，收入重要吗？ B：在我看来，赚钱多少不是最重要的，兴趣才是关键。",
          ],
        },
      ],
    },
    {
      word: "由于",
      title: "Liên từ / giới từ “do, vì, bởi vì”",
      usages: [
        {
          label: "Liên từ",
          explain: "Chỉ nguyên nhân, theo sau là một câu; 由于 thường đặt ở đầu vế câu trước.",
          examples: [
            "今年春节他们本来打算出国去逛逛，但是由于家里的老人突然生病了，所以他们只好放弃了这个计划。",
            "当你生病了，如果由于缺钱而不能及时去看医生，你的健康都很难得到保证，就更别说幸福了。",
          ],
        },
        {
          label: "Giới từ",
          explain: "Cũng chỉ nguyên nhân, theo sau là cụm danh từ.",
          examples: [
            "由于种种原因，我们不得不改变原来的计划。",
            "由于工作的需要，我去年十月去了趟上海，跟一家公司去谈生意。",
          ],
        },
      ],
    },
    {
      word: "比如",
      title: "Động từ “ví dụ, chẳng hạn”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Động từ 比如 dẫn ra các ví dụ để giải thích sự vật hay tình huống nào đó.",
          examples: [
            "还有人说，小时候幸福是一件东西，比如一块橡皮、一块糖，得到了就很幸福。",
            "每个人都有自己特别感兴趣的东西，比如，作家爱写小说，画家爱画画儿。我们只有了解了自己的兴趣爱好后，才能更好地发展自己。",
            "旅游前最好做个计划，比如要去几个地方，怎么坐车，带哪些东西，一共要玩儿多少天等。把这些都提前想好，旅游时才会更轻松。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "一个不知道自己缺点的人，___都不会想要去改变。", options: ["永远", "低", "建议", "拉"], answer: "永远" },
    { sentence: "他们两个人打球的水平差不多，很难分出高___。", options: ["低", "困", "拉", "永远"], answer: "低" },
    { sentence: "我刚学会开车，水平一般，还经常走错路。朋友___我平时多开车出去走走，熟悉一下道路情况。", options: ["建议", "拉", "困", "低"], answer: "建议" },
    { sentence: "在交流过程中，一方面，丰富了知识，提高了能力，另一方面，又___近了人们之间的距离。", options: ["拉", "建议", "永远", "困"], answer: "拉" },
    { sentence: "拿狮子来说，它们___的时候才睡觉，饿的时候才吃东西。", options: ["困", "低", "拉", "建议"], answer: "困" },
    { sentence: "A：你最近忙吗？哪天有___？ B：干什么？又想让我陪你去逛街呀？", options: ["空儿", "答案", "关键", "躺"], answer: "空儿" },
    { sentence: "A：___我们去学校的体育馆打网球吧？ B：好啊，不过周末人会不会很多？", options: ["礼拜天", "空儿", "答案", "关键"], answer: "礼拜天" },
    { sentence: "A：房间里这么暗，怎么不开灯呀？ B：没有，我本来___在沙发上看书，结果睡着了。", options: ["躺", "关键", "空儿", "礼拜天"], answer: "躺" },
    { sentence: "B：高矮没太大关系，___是我得喜欢他、爱他。", options: ["关键", "答案", "躺", "空儿"], answer: "关键" },
    { sentence: "B：别提了，今天考试写___写到最后，发现少了一个，又来不及改了。", options: ["答案", "关键", "礼拜天", "躺"], answer: "答案" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 3, distractors: [1, 2, 6] },
        { vocabId: 7, distractors: [11, 8, 9] },
        { vocabId: 13, distractors: [14, 15, 16] },
        { vocabId: 17, distractors: [16, 20, 21] },
        { vocabId: 22, distractors: [23, 29, 19] },
        { vocabId: 27, distractors: [28, 30, 12] },
        { vocabId: 18, distractors: [19, 12, 22] },
        { vocabId: 31, distractors: [32, 20, 21] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 5, 8, 10, 14, 19, 23, 30],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["这", "让我", "有了", "努力的", "方向", "。"], answer: "这让我有了努力的方向。", vi: "Điều này khiến tôi có phương hướng để nỗ lực." },
        { tokens: ["她", "硕士毕业后", "就", "当了", "翻译", "。"], answer: "她硕士毕业后就当了翻译。", vi: "Cô ấy tốt nghiệp thạc sĩ xong là làm phiên dịch." },
        { tokens: ["在我看来，", "兴趣", "才是", "关键", "。"], answer: "在我看来，兴趣才是关键。", vi: "Theo tôi, sở thích mới là mấu chốt." },
        { tokens: ["有钱", "不一定", "幸福", "。"], answer: "有钱不一定幸福。", vi: "Có tiền chưa chắc đã hạnh phúc." },
        { tokens: ["幸福", "并没有", "一个", "标准", "答案", "。"], answer: "幸福并没有一个标准答案。", vi: "Hạnh phúc không hề có một đáp án chuẩn." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (课文 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "课文一 · Cuộc sống của Vương Tĩnh", text: "孙月：{{c1}}有空儿吗？陪我去逛街怎么样？\n王静：……除了工作以外，家里还有{{c2}}和儿子需要照顾。……不过现在我很幸福，因为在母亲面前我可以做一个{{c3}}长不大的孩子；在孩子面前我又是个能照顾他的母亲，这让我有了努力的{{c4}}。" },
        { title: "课文二 · Ngưỡng mộ người khác", text: "李老师：你有一个漂亮的女儿，还那么{{c5}}，{{c6}}毕业后就当了翻译。\n高老师：我女儿{{c7}}不错，记得她刚拿到第一个月工资时，就{{c8}}地拉着我和她爸俩去商场，给我们买礼物。" },
        { title: "课文三 · Chọn nghề", text: "小雨：在我看来，赚钱多少不是最重要的，兴趣才是{{c9}}。……我觉得工作结束回家后，洗个热水澡，然后{{c10}}在床上看看书、听听音乐，困了睡睡觉，就很幸福。" },
      ],
      answers: { c1: "礼拜天", c2: "母亲", c3: "永远", c4: "方向", c5: "优秀", c6: "硕士", c7: "确实", c8: "兴奋", c9: "关键", c10: "躺" },
      bank: ["礼拜天", "母亲", "永远", "方向", "优秀", "硕士", "确实", "兴奋", "关键", "躺", "建议", "将来", "拉"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (课文 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào hai bài đọc về tiền bạc và hạnh phúc.",
      passages: [
        { title: "课文四 · Có tiền chưa chắc hạnh phúc", text: "有的人认为{{e1}}条件越好人就越幸福。其实有很多{{e2}}人过得并不愉快，而有些{{e3}}人却过得很快乐。很多东西都是不能用钱买到的，例如时间、感情、生活经历{{e4}}。当你生病了，如果{{e5}}缺钱而不能及时去看医生，你的健康都很难得到保证。" },
        { title: "课文五 · Hạnh phúc là gì", text: "小时候幸福是一件东西，{{e6}}一块{{e7}}、一块{{e8}}，得到了就很幸福；长大后幸福是一种态度，生活的态度决定了我们幸福感的高{{e9}}。其实，幸福并没有一个标准{{e10}}。" },
      ],
      answers: { e1: "经济", e2: "富", e3: "穷", e4: "等", e5: "由于", e6: "比如", e7: "橡皮", e8: "糖", e9: "低", e10: "答案" },
      bank: ["经济", "富", "穷", "等", "由于", "比如", "橡皮", "糖", "低", "答案", "条件", "经验", "关键"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我现在上有老、下有小。", vi: "Bây giờ tôi trên có già, dưới có trẻ.", keywords: ["trên có", "dưới có"] },
        { zh: "你羡慕别人的时候，他们可能也正在羡慕你呢。", vi: "Khi bạn ngưỡng mộ người khác, có thể họ cũng đang ngưỡng mộ bạn.", keywords: ["ngưỡng mộ", "người khác"] },
        { zh: "在我看来，赚钱多少不是最重要的，兴趣才是关键。", vi: "Theo tôi, kiếm nhiều hay ít tiền không phải quan trọng nhất, sở thích mới là mấu chốt.", keywords: ["theo tôi", "tiền", "sở thích", "mấu chốt"] },
        { zh: "有钱不一定幸福，因为很多东西都是不能用钱买到的。", vi: "Có tiền chưa chắc đã hạnh phúc, vì rất nhiều thứ không thể dùng tiền mua được.", keywords: ["có tiền", "hạnh phúc", "mua"] },
        { zh: "只要你用心去找，就一定能发现它。", vi: "Chỉ cần bạn dụng tâm đi tìm thì nhất định sẽ tìm thấy nó.", keywords: ["chỉ cần", "tìm", "nhất định"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chủ nhật cậu có rảnh không?", answers: ["礼拜天你有空儿吗？", "你礼拜天有空儿吗？", "礼拜天有空儿吗？"] },
        { vi: "Con gái tôi thực sự rất xuất sắc.", answers: ["我女儿确实很优秀。", "我的女儿确实很优秀。"] },
        { vi: "Theo tôi, sở thích mới là mấu chốt.", answers: ["在我看来，兴趣才是关键。"] },
        { vi: "Do nhiều nguyên nhân, chúng tôi buộc phải thay đổi kế hoạch ban đầu.", answers: ["由于种种原因，我们不得不改变原来的计划。", "由于很多原因，我们不得不改变原来的计划。"] },
        { vi: "Hạnh phúc không hề có một đáp án chuẩn.", answers: ["幸福并没有一个标准答案。", "幸福没有一个标准答案。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "孙月想给丈夫买生日礼物。", a: true },
        { q: "王静礼拜天可以陪孙月去逛街。", a: false },
        { q: "王老师来这儿工作三年就当了教授。", a: true },
        { q: "高老师的女儿硕士毕业后当了老师。", a: false },
        { q: "小雨认为选择职业时，收入是最重要的。", a: false },
        { q: "小夏认为没有钱也不会过得幸福。", a: true },
        { q: "课文四说，经济条件越好，人一定越幸福。", a: false },
        { q: "课文五认为每个人对幸福都有不同的理解。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "礼拜天有空儿吗？",
        "这让我有了努力的方向。",
        "我女儿确实不错。",
        "有钱不一定幸福。",
        "幸福并没有一个标准答案。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "幸福是一种感觉，每个人对幸福都有不同的理解。请介绍一个你认为幸福的人或者一件让你感到幸福的事。 (Hạnh phúc là một cảm giác, mỗi người hiểu về hạnh phúc khác nhau. Hãy giới thiệu một người mà bạn cho là hạnh phúc hoặc một việc làm bạn cảm thấy hạnh phúc.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 10 (不过, 确实, 在……看来, 由于, 比如).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["不过", "确实", "看来", "由于", "比如"],
      minGrammar: 2,
      sample: "在我看来，幸福其实很简单。我的母亲是一个很幸福的人。她不是富人，家里的经济条件也一般，不过她每天都很快乐。由于工作忙，她礼拜天才有空儿，可是她总是带着我们去公园散步，或者在家做好吃的菜。她常说，有钱不一定幸福，很多东西是用钱买不到的，比如家人的健康和快乐。我觉得她说得确实有道理。每次看到全家人在一起吃饭、聊天，我就觉得自己永远是最幸福的孩子。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 不过 / 但是", points: 6,
      subtitle: "Chọn 不过 hoặc 但是 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "不过 / 但是",
      options: ["不过", "但是"],
      items: [
        { q: "每天喝一点儿葡萄酒，对身体是有好处的。___不能喝太多。", answers: ["不过", "但是"] },
        { q: "他结婚的时候___20岁。", answers: ["不过"] },
        { q: "大部分人每天晚上至少应该睡7个小时，___这个标准并不适合每一个人。", answers: ["不过", "但是"] },
        { q: "这次亲戚来北京___住两三天，就让他来家里住吧，不用住宾馆了。", answers: ["不过"] },
        { q: "去年我___50公斤，今年怎么这么胖了？", answers: ["不过"] },
        { q: "我本来想当律师，___后来我发现自己对新闻更感兴趣。", answers: ["不过", "但是"] },
        { q: "那辆车刚开走，你只能等下一辆了。___也不用多长时间，估计十几分钟就来了。", answers: ["不过", "但是"] },
        { q: "我们___谈了点儿工作方面的问题，别的都没谈。", answers: ["不过"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 由于", points: 6,
      subtitle: "Điền từ chỉ nguyên nhân (由于 – do, vì) vào chỗ trống.",
      grammarWord: "由于",
      items: [
        { q: "___家里的老人突然生病了，他们只好放弃了出国的计划。", answers: ["由于"] },
        { q: "如果___缺钱而不能及时去看医生，你的健康都很难得到保证。", answers: ["由于"] },
        { q: "___种种原因，我们不得不改变原来的计划。", answers: ["由于"] },
        { q: "___工作的需要，我去年十月去了趟上海。", answers: ["由于"] },
        { q: "___天气不好，飞机还没起飞。", answers: ["由于"] },
        { q: "___没有好好复习，他今天考得不怎么样。", answers: ["由于"] },
        { q: "___下大雨，这次活动的举办时间不得不改到下周。", answers: ["由于"] },
        { q: "___他工作很努力，经理对他印象不错。", answers: ["由于"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 确实", points: 5,
      subtitle: "Điền phó từ khẳng định (确实 – quả thật, thực sự) vào chỗ trống.",
      grammarWord: "确实",
      items: [
        { q: "爱情___是结婚的重要原因，但仅有爱情是不够的。", answers: ["确实"] },
        { q: "我说的是真的，你___比以前更年轻、更漂亮了。", answers: ["确实"] },
        { q: "我女儿___不错，硕士毕业后就当了翻译。", answers: ["确实"] },
        { q: "这山___太高了，我也累死了。", answers: ["确实"] },
        { q: "教室里___太热了，我去把窗户打开。", answers: ["确实"] },
        { q: "你说得___有道理。", answers: ["确实"] },
        { q: "有钱___很好，但有钱不一定幸福。", answers: ["确实"] },
        { q: "世界那么大，两个人相识___不容易。", answers: ["确实"] },
      ],
    },
  ],
};
