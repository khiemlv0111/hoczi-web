import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第11课 读书好，读好书，好读书 (Đọc sách có rất nhiều lợi ích, đọc sách hay, thích đọc sách)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 10–22 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["著名", "有限", "复杂", "顺序", "增加"];
const W_EX2 = ["准确", "只好", "厉害", "词语", "内容"];

export const lesson11: Lesson = {
  level: "hsk4",
  no: 11,
  slug: "bai-11",
  zh: "读书好，读好书，好读书",
  pinyin: "Dú shū hǎo, dú hǎo shū, hào dú shū",
  vi: "Đọc sách có rất nhiều lợi ích, đọc sách hay, thích đọc sách",
  en: "Reading Is Good, Read Good Books, Love Reading",
  topic: "阅读与学习 · Đọc sách và học tập",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 流利、厉害、准确、词语、阅读、来得及、复杂、只好、猜、杂志、著名、增加、文章、内容、看法、相同、顺序、养成、精彩…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 连……也/都……, 否则, 无论……都/也……, 然而, 同时; phân biệt 无论 và 不管.",
    "Đọc hiểu 5 bài khóa về cách học tiếng Trung, kinh nghiệm làm bài thi, lợi ích của đọc sách và cách làm ghi chép đọc sách.",
    "Trao đổi về thói quen đọc báo, đọc sách tiếng Trung; giới thiệu tác giả, cuốn sách mình thích và viết đoạn văn về lợi ích của đọc sách.",
    "Nắm nhóm từ cùng chữ 同: 同意、共同、相同、同时.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：客厅、猜、复杂、阅读、杂志、笔记。", vi: "Chọn hình tương ứng với các từ 客厅 (phòng khách), 猜 (đoán), 复杂 (phức tạp), 阅读 (đọc), 杂志 (tạp chí), 笔记 (ghi chép) và nói một câu có từ đó để mô tả hình." },
    { zh: "读一读下面的句子，说一说这些句子有哪些特点：别着急，马克正开着车，他马上就到。/ 小朋友，我们一起数数字，学数数。/ 你帮我把那个没把儿的杯子拿过来。", vi: "Đọc các câu sau và cho biết chúng có đặc điểm gì (cùng một chữ nhưng đọc khác nhau, nghĩa khác nhau: 着 zhe/zháo, 数 shǔ/shù, 把 bǎ/bàr, 长 zhǎng/cháng…)." },
  ],

  vocab: [
    { id: 1, han: "流利", py: "liúlì", pos: "tt.", meaning: "lưu loát, trôi chảy", example: "你来中国才一年，汉语就说得这么流利，真厉害！", exampleVi: "Bạn đến Trung Quốc mới một năm mà đã nói tiếng Trung lưu loát thế này, giỏi thật!" },
    { id: 2, han: "厉害", py: "lìhai", pos: "tt.", meaning: "lợi hại", example: "你太厉害了！连中文报纸都看得懂。", exampleVi: "Bạn giỏi quá! Ngay cả báo tiếng Trung cũng đọc hiểu được." },
    { id: 3, han: "语法", py: "yǔfǎ", pos: "dt.", meaning: "ngữ pháp", example: "其实我的语法不太好。", exampleVi: "Thật ra ngữ pháp của tôi không tốt lắm." },
    { id: 4, han: "准确", py: "zhǔnquè", pos: "tt.", meaning: "chính xác, đúng", example: "很多句子说得都不太准确。", exampleVi: "Nhiều câu nói chưa được chính xác lắm." },
    { id: 5, han: "词语", py: "cíyǔ", pos: "dt.", meaning: "từ ngữ, cách diễn đạt", example: "坚持看中文报纸，这样能学到很多新词语。", exampleVi: "Kiên trì đọc báo tiếng Trung, như vậy có thể học được rất nhiều từ ngữ mới." },
    { id: 6, han: "连", py: "lián", pos: "gt.", meaning: "ngay cả", example: "如果连你自己都不喜欢自己，又怎么能让别人喜欢你呢？", exampleVi: "Nếu ngay cả bạn cũng không thích bản thân mình thì làm sao khiến người khác thích bạn được?" },
    { id: 7, han: "大卫", py: "Dàwèi", pos: "dt. riêng", meaning: "David (tên người)", example: "大卫觉得马克的汉语说得很流利。", exampleVi: "David thấy Mark nói tiếng Trung rất lưu loát." },
    { id: 8, han: "阅读", py: "yuèdú", pos: "đgt.", meaning: "đọc", example: "这次阅读考试的题太多了，我没做完。", exampleVi: "Bài thi đọc lần này nhiều câu quá, tôi làm không kịp xong." },
    { id: 9, han: "来得及", py: "láidejí", pos: "đgt.", meaning: "kịp, còn kịp", example: "两个小时的时间应该来得及吧？", exampleVi: "Hai tiếng chắc là đủ kịp chứ?" },
    { id: 10, han: "复杂", py: "fùzá", pos: "tt.", meaning: "phức tạp, rắc rối", example: "我先做了比较难、比较复杂的题。", exampleVi: "Tôi làm những câu khá khó, khá phức tạp trước." },
    { id: 11, han: "只好", py: "zhǐhǎo", pos: "p.", meaning: "đành phải, buộc phải", example: "时间来不及，最后只好放弃了。", exampleVi: "Không kịp thời gian, cuối cùng đành phải bỏ." },
    { id: 12, han: "填空", py: "tiánkòng", pos: "đgt.", meaning: "điền vào chỗ trống", example: "有几个填空题不会做。", exampleVi: "Có mấy câu điền vào chỗ trống không làm được." },
    { id: 13, han: "猜", py: "cāi", pos: "đgt.", meaning: "đoán", example: "我随便猜了一个答案，结果一个都没猜对。", exampleVi: "Tôi đoán bừa một đáp án, kết quả không đoán đúng câu nào." },
    { id: 14, han: "否则", py: "fǒuzé", pos: "liên.", meaning: "nếu không thì, bằng không", example: "他一定有重要的事找你，否则不会打这么多次电话来。", exampleVi: "Chắc chắn anh ấy có việc quan trọng tìm bạn, nếu không đã không gọi nhiều cuộc như vậy." },
    { id: 15, han: "客厅", py: "kètīng", pos: "dt.", meaning: "phòng khách", example: "你的客厅里怎么到处是书啊？", exampleVi: "Sao phòng khách nhà bạn chỗ nào cũng là sách vậy?" },
    { id: 16, han: "无论", py: "wúlùn", pos: "liên.", meaning: "bất kể", example: "无论做什么事都要注意方法。", exampleVi: "Bất kể làm việc gì cũng phải chú ý phương pháp." },
    { id: 17, han: "杂志", py: "zázhì", pos: "dt.", meaning: "tạp chí", example: "无论是普通杂志，还是著名小说，我都喜欢看。", exampleVi: "Bất kể là tạp chí bình thường hay tiểu thuyết nổi tiếng, tôi đều thích đọc." },
    { id: 18, han: "著名", py: "zhùmíng", pos: "tt.", meaning: "nổi tiếng", example: "她是著名的科学家。", exampleVi: "Bà ấy là nhà khoa học nổi tiếng." },
    { id: 19, han: "页", py: "yè", pos: "lượng.", meaning: "trang", example: "如果3分钟读一页书，半个小时就可以读10页。", exampleVi: "Nếu 3 phút đọc một trang sách thì nửa tiếng có thể đọc được 10 trang." },
    { id: 20, han: "增加", py: "zēngjiā", pos: "đgt.", meaning: "tăng thêm", example: "坚持阅读，除了能增加知识外，还能帮助我减轻压力。", exampleVi: "Kiên trì đọc sách, ngoài việc tăng thêm kiến thức, còn giúp tôi giảm bớt áp lực." },
    { id: 21, han: "文章", py: "wénzhāng", pos: "dt.", meaning: "bài văn, bài báo", example: "在看完一篇文章或一本书之后，还可以把它的主要内容写下来。", exampleVi: "Sau khi đọc xong một bài văn hay một cuốn sách, còn có thể viết lại nội dung chính của nó." },
    { id: 22, han: "之", py: "zhī", pos: "trợ.", meaning: "được dùng để nối từ bổ nghĩa và từ được bổ nghĩa", example: "在看完一本书之后，我会写读书笔记。", exampleVi: "Sau khi đọc xong một cuốn sách, tôi sẽ viết ghi chép đọc sách." },
    { id: 23, han: "内容", py: "nèiróng", pos: "dt.", meaning: "nội dung", example: "你不能完全相信书本上的内容。", exampleVi: "Bạn không thể hoàn toàn tin vào nội dung trong sách vở." },
    { id: 24, han: "然而", py: "rán'ér", pos: "liên.", meaning: "nhưng, song", example: "他虽然失败了很多次，然而一直没有放弃。", exampleVi: "Tuy anh ấy đã thất bại nhiều lần, nhưng chưa bao giờ bỏ cuộc." },
    { id: 25, han: "看法", py: "kànfǎ", pos: "dt.", meaning: "quan điểm, cách nhìn", example: "要有自己的看法和判断。", exampleVi: "Phải có quan điểm và phán đoán của riêng mình." },
    { id: 26, han: "相同", py: "xiāngtóng", pos: "tt.", meaning: "giống nhau, như nhau", example: "这句话只用了三个相同的汉字。", exampleVi: "Câu này chỉ dùng ba chữ Hán giống nhau." },
    { id: 27, han: "顺序", py: "shùnxù", pos: "dt.", meaning: "trật tự, thứ tự", example: "不同的顺序却表示了不同的意思。", exampleVi: "Thứ tự khác nhau lại biểu thị ý nghĩa khác nhau." },
    { id: 28, han: "表示", py: "biǎoshì", pos: "đgt.", meaning: "có ý nghĩa, biểu thị", example: "不同的顺序却表示了不同的意思。", exampleVi: "Thứ tự khác nhau lại biểu thị ý nghĩa khác nhau." },
    { id: 29, han: "养成", py: "yǎngchéng", pos: "đgt.", meaning: "hình thành, tạo (thói quen)", example: "“好读书”就是要养成阅读的习惯。", exampleVi: "“Thích đọc sách” chính là phải hình thành thói quen đọc." },
    { id: 30, han: "同时", py: "tóngshí", pos: "liên.", meaning: "đồng thời, hơn nữa", example: "在学习汉语的同时，我还了解了中国文化。", exampleVi: "Trong khi học tiếng Trung, tôi còn tìm hiểu được văn hóa Trung Quốc." },
    { id: 31, han: "精彩", py: "jīngcǎi", pos: "tt.", meaning: "tuyệt vời, xuất sắc", example: "阅读会丰富你的情感，使你的生活更精彩。", exampleVi: "Đọc sách sẽ làm phong phú tình cảm, khiến cuộc sống của bạn thêm tươi đẹp." },
    { id: 32, han: "同意", py: "tóngyì", pos: "đgt.", meaning: "đồng ý", example: "如果她再坚持一次请我帮忙，我就同意了，可是她没有。", exampleVi: "Nếu cô ấy kiên trì nhờ tôi giúp thêm một lần nữa thì tôi đã đồng ý rồi, nhưng cô ấy không làm vậy.", group: "extended" },
    { id: 33, han: "共同", py: "gòngtóng", pos: "tt.", meaning: "chung, cùng", example: "夫妻之间只有浪漫的爱情是不够的，共同的理想和爱好也很重要。", exampleVi: "Giữa vợ chồng chỉ có tình yêu lãng mạn là chưa đủ, lý tưởng và sở thích chung cũng rất quan trọng.", group: "extended" },
  ],

  text: {
    title: "课文 读书好，读好书，好读书",
    paragraphs: [
      {
        heading: "课文一 · 马克介绍自己学习汉语的方法",
        zh: "大卫：你来中国才一年，汉语就说得这么流利，真厉害！\n马克：谢谢！其实我的语法不太好，很多句子说得都不太准确。\n大卫：但是我看你跟中国人交流没什么问题，你是怎么做到的？\n马克：平时多交一些中国朋友，经常和他们聊天儿，听说能力自然就能得到很大的提高。另外，我建议你坚持看中文报纸，这样能学到很多新词语。\n大卫：你太厉害了！连中文报纸都看得懂。\n马克：刚开始肯定有困难，不过遇到不认识的词语，你可以查词典，然后写在本子上，有空儿就拿出来复习一下，慢慢地就会发现中文报纸也没那么难了。",
        vi: "David: Bạn đến Trung Quốc mới có một năm mà đã nói tiếng Trung lưu loát thế này, giỏi thật!\nMark: Cảm ơn! Thật ra ngữ pháp của tôi không tốt lắm, nhiều câu nói chưa được chính xác.\nDavid: Nhưng tôi thấy bạn giao tiếp với người Trung Quốc không có vấn đề gì, bạn làm thế nào vậy?\nMark: Bình thường kết bạn nhiều với người Trung Quốc, thường xuyên trò chuyện với họ, khả năng nghe nói tự nhiên sẽ được nâng cao rất nhiều. Ngoài ra, tôi khuyên bạn kiên trì đọc báo tiếng Trung, như vậy có thể học được rất nhiều từ ngữ mới.\nDavid: Bạn giỏi quá! Ngay cả báo tiếng Trung cũng đọc hiểu được.\nMark: Lúc mới bắt đầu chắc chắn sẽ khó khăn, nhưng gặp từ ngữ không biết thì bạn có thể tra từ điển, rồi ghi vào vở, lúc rảnh lấy ra ôn lại một chút, dần dần sẽ thấy báo tiếng Trung cũng không khó đến thế.",
        questions: ["马克为什么能顺利地跟中国人交流？他有哪些建议？", "大卫认为对学习汉语的外国人来说，做什么特别难？"],
      },
      {
        heading: "课文二 · 小夏和小雨聊考试的情况",
        zh: "小夏：考试结束了，你对自己的成绩满意吗？\n小雨：说真的，我不太满意。这次阅读考试的题太多了，我没做完。\n小夏：两个小时的时间应该来得及吧？\n小雨：这次主要是因为我先做了比较难、比较复杂的题，结果花了太多时间，后面简单的题我虽然会，可是时间来不及，最后只好放弃了。\n小夏：其实我考得也不怎么样。有几个填空题不会做，有几个选择题，实在想不出来该选哪个，就随便猜了一个答案，结果一个都没猜对。\n小雨：看来要想考好，不但要认真复习，还得注意考试的方法，否则，会做的题也没时间做了。",
        vi: "Tiểu Hạ: Thi xong rồi, bạn có hài lòng với kết quả của mình không?\nTiểu Vũ: Nói thật, tôi không hài lòng lắm. Bài thi đọc lần này nhiều câu quá, tôi làm không xong.\nTiểu Hạ: Thời gian hai tiếng chắc là kịp chứ?\nTiểu Vũ: Lần này chủ yếu là vì tôi làm những câu khá khó, khá phức tạp trước, kết quả tốn quá nhiều thời gian; những câu dễ phía sau tuy tôi biết làm nhưng không kịp thời gian, cuối cùng đành phải bỏ.\nTiểu Hạ: Thật ra tôi thi cũng chẳng ra sao. Có mấy câu điền vào chỗ trống không biết làm, có mấy câu trắc nghiệm thật sự nghĩ không ra nên chọn cái nào, đành đoán bừa một đáp án, kết quả không đoán đúng câu nào.\nTiểu Vũ: Xem ra muốn thi tốt thì không những phải ôn tập nghiêm túc mà còn phải chú ý phương pháp làm bài, nếu không thì ngay cả những câu biết làm cũng không có thời gian làm.",
        questions: ["你认为小雨下次考试可能会用什么答题方法？", "要想考好，应该注意哪些方面？为什么？"],
      },
      {
        heading: "课文三 · 小李告诉小林阅读的好处",
        zh: "小林：你的客厅里怎么到处是书啊？这些书你都喜欢看吗？\n小李：当然，我每天都要看书。无论是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多有意思的事情，有那么多不一样的生活。\n小林：想不到你工作那么忙，还能每天坚持阅读。\n小李：如果3分钟读一页书，半个小时就可以读10页。每天花半个小时来读书，一个月就可以读300页，差不多就是一本书了。\n小林：是啊，一个真正爱看书的人总能找出时间来阅读。\n小李：坚持阅读，除了能增加知识外，还能帮助我减轻压力，人也会变得轻松起来。",
        vi: "Tiểu Lâm: Sao phòng khách nhà bạn chỗ nào cũng là sách vậy? Những cuốn sách này bạn đều thích đọc à?\nTiểu Lý: Tất nhiên, ngày nào tôi cũng đọc sách. Bất kể là tạp chí bình thường hay tiểu thuyết nổi tiếng, chỉ cần mở chúng ra là sẽ thấy trên thế giới có biết bao điều thú vị, có biết bao cuộc sống khác nhau.\nTiểu Lâm: Không ngờ bạn bận rộn công việc như vậy mà vẫn kiên trì đọc sách mỗi ngày.\nTiểu Lý: Nếu 3 phút đọc một trang sách thì nửa tiếng có thể đọc được 10 trang. Mỗi ngày dành nửa tiếng để đọc sách thì một tháng có thể đọc được 300 trang, gần bằng một cuốn sách rồi.\nTiểu Lâm: Đúng vậy, một người thật sự yêu sách thì luôn tìm ra được thời gian để đọc.\nTiểu Lý: Kiên trì đọc sách, ngoài việc tăng thêm kiến thức, còn giúp tôi giảm bớt áp lực, con người cũng trở nên thoải mái hơn.",
        questions: ["小李家的客厅有什么特点？小李有什么好习惯？", "坚持阅读能给人带来哪些好处？"],
      },
      {
        heading: "课文四 · 做读书笔记",
        zh: "根据调查，阅读能力好的人，不但容易找到工作，而且工资也比较高。怎么才能有效提高自己的阅读能力呢？做读书笔记就是其中一种好方法。读书笔记有很多种，最简单的就是把自己喜欢或者觉得有用的词语和句子记下来。另外，在看完一篇文章或一本书之后，还可以把它的主要内容和自己的想法写下来。然而，你不能完全相信书本上的内容，要有自己的看法和判断。坚持做读书笔记，对提高阅读能力有很大帮助。",
        vi: "Theo điều tra, người có khả năng đọc tốt không những dễ tìm được việc làm mà lương cũng tương đối cao. Làm thế nào mới có thể nâng cao hiệu quả khả năng đọc của mình? Làm ghi chép đọc sách chính là một trong những phương pháp tốt. Ghi chép đọc sách có nhiều loại, đơn giản nhất là ghi lại những từ ngữ và câu mà mình thích hoặc thấy có ích. Ngoài ra, sau khi đọc xong một bài văn hay một cuốn sách, còn có thể viết lại nội dung chính của nó và suy nghĩ của mình. Tuy nhiên, bạn không thể hoàn toàn tin vào nội dung trong sách vở, phải có quan điểm và phán đoán của riêng mình. Kiên trì làm ghi chép đọc sách sẽ giúp ích rất nhiều cho việc nâng cao khả năng đọc.",
        questions: ["哪种方法可以提高阅读能力？请你再说一种有效的方法。", "“书里的知识都是正确的”，这句话对吗？为什么？"],
      },
      {
        heading: "课文五 · 读书好，读好书，好读书",
        zh: "“读书好，读好书，好读书”。虽然这句话只用了三个相同的汉字，但是不同的顺序却表示了不同的意思。首先，“读书好”说的是读书有很多好处；其次，每个人的时间都是有限的，不可能把世界上每一本书都读完，所以要读好的书；最后，“好读书”就是要养成阅读的习惯，使读书真正成为自己的兴趣爱好。阅读有许多好处，它能丰富你的知识，让你找到解决问题的办法；同时，它还会丰富你的情感，使你的生活更精彩。所以，让阅读成为你的习惯吧！",
        vi: "“Đọc sách có ích, đọc sách hay, thích đọc sách”. Tuy câu này chỉ dùng ba chữ Hán giống nhau nhưng thứ tự khác nhau lại biểu thị ý nghĩa khác nhau. Trước hết, “读书好” nói rằng đọc sách có rất nhiều lợi ích; thứ hai, thời gian của mỗi người đều có hạn, không thể đọc hết mọi cuốn sách trên thế giới, vì vậy phải đọc sách hay; cuối cùng, “好读书” chính là phải hình thành thói quen đọc, khiến việc đọc sách thật sự trở thành sở thích của mình. Đọc sách có rất nhiều lợi ích, nó có thể làm phong phú kiến thức của bạn, giúp bạn tìm ra cách giải quyết vấn đề; đồng thời, nó còn làm phong phú tình cảm, khiến cuộc sống của bạn thêm tươi đẹp. Vì vậy, hãy để việc đọc trở thành thói quen của bạn!",
        questions: ["我们应该选择读什么样的书？为什么？", "通过学习“读书好，读好书，好读书”这句话，说说汉语有哪些特点。"],
      },
    ],
    notes: [
      "Trong câu “读书好，读好书，好读书”: 好 thứ nhất và thứ hai đọc hǎo (tốt, hay), 好 thứ ba đọc hào (thích, ham).",
      "Văn hóa: 《西游记》(Tây du ký) – một trong những tiểu thuyết cổ điển nổi tiếng nhất Trung Quốc, viết vào giữa triều Minh (1368–1644), kể chuyện Đường Tăng cùng Tôn Ngộ Không, Trư Bát Giới, Sa Tăng đi Tây Thiên thỉnh kinh.",
    ],
  },

  grammar: [
    {
      word: "连……也/都……",
      title: "Giới từ 连 – “ngay cả… cũng…”",
      usages: [
        {
          label: "连 + chủ ngữ",
          explain: "Giới từ 连 dùng để nhấn mạnh, thường trong cấu trúc “连……也/都……”: người nói nhấn mạnh một ví dụ cực đoan để làm rõ một tình huống khác. Sau 连 có thể là chủ ngữ.",
          examples: [
            "如果连你自己都不喜欢自己，又怎么能让别人喜欢你呢？",
            "广告越来越多，几乎无处不在。不只是电视上有广告，公共汽车、地铁上也有很多广告，连我住的楼的电梯里都有三个广告。",
          ],
        },
        {
          label: "连 + tân ngữ đặt trước",
          explain: "Sau 连 cũng có thể là tân ngữ được đưa lên trước.",
          examples: ["你太厉害了！连中文报纸都看得懂。"],
        },
      ],
    },
    {
      word: "否则",
      title: "Liên từ “nếu không thì, bằng không”",
      usages: [
        {
          label: "Cách dùng",
          explain: "否则 có nghĩa là “如果不是这样” (nếu không thì). Câu sau 否则 chỉ kết quả được suy ra từ câu trước hoặc đưa ra một lựa chọn khác.",
          examples: [
            "他一定有重要的事找你，否则不会打这么多次电话来。",
            "你最好下午四点前去公司找她，否则就明天早上再去。",
            "看来要想考好，不但要认真复习，还得注意考试的方法，否则会做的题也没时间做了。",
          ],
        },
      ],
    },
    {
      word: "无论……都/也……",
      title: "Liên từ “bất kể… đều/cũng…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "无论 diễn tả kết quả, kết luận sẽ không thay đổi trong bất kỳ điều kiện nào, thường dùng trong cấu trúc “无论……都/也……”. Sau 无论 có thể là các thành phần thể hiện sự lựa chọn (A还是B) hoặc đại từ nghi vấn phiếm chỉ.",
          examples: [
            "无论是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多有意思的事情，有那么多不一样的生活。",
            "无论做什么事都要注意方法，正确的方法可以让我们做得更好。",
            "这次比赛他已经打出了自己最好的水平，无论结果怎么样，我们都应该为他高兴。",
          ],
        },
      ],
      note: "比一比 无论 — 不管. Giống: đều là liên từ, thường đi với 都/也, chỉ kết quả không đổi trong mọi điều kiện; sau đều có thể là đại từ nghi vấn phiếm chỉ hoặc thành phần lựa chọn (无论/不管干什么事情，最好都能提前做好计划。). Khác: (1) 不管 thường dùng trong văn nói, không đi với từ mang sắc thái văn ngôn như 如何、是否; 无论 thường dùng trong văn viết, đi được với 如何、是否 (无论如何，我都不会离开你。). (2) Sau 不管 dùng được hình thức khẳng định – phủ định (不管热不热，他总是穿这么多。); với 无论 thường phải thêm 还是/跟/与 vào giữa (无论/不管热还是不热，他总是穿这么多。).",
    },
    {
      word: "然而",
      title: "Liên từ “nhưng, song, tuy nhiên”",
      usages: [
        {
          label: "Cách dùng",
          explain: "然而 đặt ở đầu vế câu sau để chỉ sự chuyển ý, thường dùng trong văn viết. Sau 然而 có thể có dấu phẩy để ngắt.",
          examples: [
            "他虽然失败了很多次，然而一直没有放弃。",
            "很多人觉得自己的生活是幸福的，然而每个人对幸福的看法却不完全相同。",
            "另外，在看完一篇文章或一本书之后，还可以把它的主要内容和自己的想法写下来。然而，你不能完全相信书本上的内容，要有自己的看法和判断。",
          ],
        },
      ],
    },
    {
      word: "同时",
      title: "同时 – “đồng thời, hơn nữa” / “cùng lúc”",
      usages: [
        {
          label: "Liên từ",
          explain: "Liên từ 同时 có nghĩa là “hơn nữa”, mang ý tiến thêm một bước, thường kết hợp với 又/也/还.",
          examples: [
            "因为小孩子的想法没有那么复杂，所以他们总是很快乐。同时，小孩子也是最诚实的。",
            "阅读有许多好处，它能丰富你的知识，让你找到解决问题的办法；同时，它还会丰富你的情感，使你的生活更精彩。",
          ],
        },
        {
          label: "Danh từ: 在……（的）同时",
          explain: "Danh từ 同时 chỉ các hành động xảy ra cùng một lúc, thường dùng trong cấu trúc “在……（的）同时”.",
          examples: [
            "李教授讲的这个故事让人觉得好笑的同时，又让人觉得有些难过。",
            "在学习汉语的同时，我还了解了中国文化，认识了很多中国朋友。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "为了保证您和他人的安全，请您按照“先下后上”的___上下车。", options: W_EX1, answer: "顺序" },
    { sentence: "科学的发展确实给生活带来了许多方便，但也给我们___了不少烦恼。", options: W_EX1, answer: "增加" },
    { sentence: "虽然身高只有一米六零，但他却是世界上___的篮球运动员。", options: W_EX1, answer: "著名" },
    { sentence: "这个问题有点儿___，你耐心听我给你解释一下，好吗？", options: W_EX1, answer: "复杂" },
    { sentence: "一个人的知识是___的，所以人与人之间需要交流。", options: W_EX1, answer: "有限" },
    { sentence: "大夫，我的牙最近疼得___，不知道是怎么回事。", options: W_EX2, answer: "厉害" },
    { sentence: "会叫“爸爸”“妈妈”了，也能说一些简单的___。", options: W_EX2, answer: "词语" },
    { sentence: "时间可能来不及，不过___这样了，这些语法知识太难了。", options: W_EX2, answer: "只好" },
    { sentence: "听说公司明年要搬？这个消息___吗？我怎么不知道？", options: W_EX2, answer: "准确" },
    { sentence: "他的小说语言幽默，___丰富。", options: W_EX2, answer: "内容" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 4, 31] },
        { vocabId: 5, distractors: [3, 23, 21] },
        { vocabId: 8, distractors: [12, 13, 29] },
        { vocabId: 10, distractors: [4, 18, 26] },
        { vocabId: 14, distractors: [16, 24, 30] },
        { vocabId: 17, distractors: [21, 15, 19] },
        { vocabId: 25, distractors: [23, 3, 27] },
        { vocabId: 33, distractors: [26, 32, 30] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 9, 11, 13, 15, 20, 27, 29],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["你", "来中国", "才一年", "，", "汉语", "就说得这么流利", "。"], answer: "你来中国才一年，汉语就说得这么流利。", vi: "Bạn đến Trung Quốc mới một năm mà đã nói tiếng Trung lưu loát thế này." },
        { tokens: ["连", "中文报纸", "都", "看得懂", "。"], answer: "连中文报纸都看得懂。", vi: "Ngay cả báo tiếng Trung cũng đọc hiểu được." },
        { tokens: ["时间", "来不及", "，", "最后", "只好放弃了", "。"], answer: "时间来不及，最后只好放弃了。", vi: "Không kịp thời gian, cuối cùng đành phải bỏ." },
        { tokens: ["一个真正爱看书的人", "总能", "找出时间", "来阅读", "。"], answer: "一个真正爱看书的人总能找出时间来阅读。", vi: "Một người thật sự yêu sách luôn tìm ra được thời gian để đọc." },
        { tokens: ["“好读书”", "就是要", "养成", "阅读的习惯", "。"], answer: "“好读书”就是要养成阅读的习惯。", vi: "“Thích đọc sách” chính là phải hình thành thói quen đọc." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Cách học tiếng Trung của Mark", text: "大卫：你来中国才一年，汉语就说得这么{{a1}}，真厉害！\n马克：谢谢！其实我的{{a2}}不太好，很多句子说得都不太{{a3}}。\n大卫：你太厉害了！{{a4}}中文报纸都看得懂。" },
        { title: "Bài 2 · Chuyện thi cử", text: "小雨：这次{{a5}}考试的题太多了，我没做完。\n小夏：两个小时的时间应该{{a6}}吧？\n小雨：时间来不及，最后{{a7}}放弃了。\n小夏：我随便{{a8}}了一个答案，结果一个都没猜对。" },
        { title: "Bài 3 · Lợi ích của đọc sách", text: "小李：{{a9}}是普通杂志，还是著名小说，只要打开它们，就会发现，世界上有那么多有意思的事情。坚持阅读，除了能{{a10}}知识外，还能帮助我减轻压力。" },
      ],
      answers: { a1: "流利", a2: "语法", a3: "准确", a4: "连", a5: "阅读", a6: "来得及", a7: "只好", a8: "猜", a9: "无论", a10: "增加" },
      bank: ["流利", "语法", "准确", "连", "阅读", "来得及", "只好", "猜", "无论", "增加", "复杂", "否则", "著名"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về ghi chép đọc sách và câu “读书好，读好书，好读书”.",
      passages: [
        { title: "Bài 4 · Làm ghi chép đọc sách", text: "在看完一篇{{b1}}或一本书之后，还可以把它的主要{{b2}}和自己的想法写下来。{{b3}}，你不能完全相信书本上的内容，要有自己的{{b4}}和判断。" },
        { title: "Bài 5 · Đọc sách có ích, đọc sách hay, thích đọc sách", text: "虽然这句话只用了三个{{b5}}的汉字，但是不同的{{b6}}却{{b7}}了不同的意思。“好读书”就是要{{b8}}阅读的习惯。阅读能丰富你的知识；{{b9}}，它还会丰富你的情感，使你的生活更{{b10}}。" },
      ],
      answers: { b1: "文章", b2: "内容", b3: "然而", b4: "看法", b5: "相同", b6: "顺序", b7: "表示", b8: "养成", b9: "同时", b10: "精彩" },
      bank: ["文章", "内容", "然而", "看法", "相同", "顺序", "表示", "养成", "同时", "精彩", "杂志", "否则", "共同"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我建议你坚持看中文报纸，这样能学到很多新词语。", vi: "Tôi khuyên bạn kiên trì đọc báo tiếng Trung, như vậy có thể học được rất nhiều từ ngữ mới.", keywords: ["kiên trì", "báo", "từ ngữ"] },
        { zh: "要想考好，还得注意考试的方法。", vi: "Muốn thi tốt thì còn phải chú ý phương pháp làm bài thi.", keywords: ["thi", "chú ý", "phương pháp"] },
        { zh: "坚持阅读能帮助我减轻压力。", vi: "Kiên trì đọc sách có thể giúp tôi giảm bớt áp lực.", keywords: ["kiên trì", "đọc", "áp lực"] },
        { zh: "你不能完全相信书本上的内容。", vi: "Bạn không thể hoàn toàn tin vào nội dung trong sách vở.", keywords: ["hoàn toàn", "tin", "nội dung"] },
        { zh: "每个人的时间都是有限的。", vi: "Thời gian của mỗi người đều có hạn.", keywords: ["thời gian", "mỗi người", "có hạn"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Bạn giỏi quá! Ngay cả báo tiếng Trung cũng đọc hiểu được.", answers: ["你太厉害了！连中文报纸都看得懂。", "你太厉害了！连中文报纸也看得懂。"] },
        { vi: "Bất kể làm việc gì cũng phải chú ý phương pháp.", answers: ["无论做什么事都要注意方法。", "无论做什么事情都要注意方法。", "不管做什么事都要注意方法。"] },
        { vi: "Trong khi học tiếng Trung, tôi còn tìm hiểu được văn hóa Trung Quốc.", answers: ["在学习汉语的同时，我还了解了中国文化。", "在学汉语的同时，我还了解了中国文化。"] },
        { vi: "Không kịp thời gian, cuối cùng tôi đành phải bỏ.", answers: ["时间来不及，最后我只好放弃了。", "时间来不及，我最后只好放弃了。"] },
        { vi: "Hãy để việc đọc trở thành thói quen của bạn!", answers: ["让阅读成为你的习惯吧！"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "马克来中国已经三年了。", a: false },
        { q: "马克觉得自己的语法不太好。", a: true },
        { q: "小雨先做了简单的题，所以没做完。", a: false },
        { q: "小夏猜的选择题一个都没猜对。", a: true },
        { q: "小李工作很忙，所以很少看书。", a: false },
        { q: "每天读半个小时书，一个月差不多可以读一本书。", a: true },
        { q: "课文四说，我们应该完全相信书本上的内容。", a: false },
        { q: "“读书好，读好书，好读书”这句话只用了三个相同的汉字。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你的汉语说得真流利。",
        "两个小时的时间应该来得及吧？",
        "我每天都要看书。",
        "做读书笔记是一种好方法。",
        "让阅读成为你的习惯吧！",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请介绍一本你最喜欢的书或者一位你最喜欢的作家，并谈谈阅读给你带来了哪些好处。 (Hãy giới thiệu một cuốn sách hoặc một tác giả bạn thích nhất và nói về những lợi ích mà việc đọc mang lại cho bạn.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 11 (连, 否则, 无论, 然而, 同时).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["连", "否则", "无论", "然而", "同时"],
      minGrammar: 2,
      sample: "我最喜欢的书是《西游记》。这是一本很著名的小说，内容非常精彩。小时候我连一个汉字都不认识，只能看电视剧；现在我已经能阅读这本书了。无论工作多忙，我每天都坚持看半个小时书，在看书的同时，我还会做读书笔记，把有用的词语和句子记下来。阅读不但增加了我的知识，而且让我变得轻松起来。然而，书上的内容不一定都是对的，我们要有自己的看法。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 无论 / 不管", points: 6,
      subtitle: "Chọn 无论 hoặc 不管. Có câu dùng được cả hai – chọn từ nào đúng cũng được chấp nhận.",
      grammarWord: "无论 / 不管",
      options: ["无论", "不管"],
      items: [
        { q: "___别人说什么，我只相信自己眼睛看见的东西。", answers: ["无论", "不管"] },
        { q: "___去不去，最后都别忘了告诉我一声。", answers: ["不管"] },
        { q: "___是工作还是学习，“光说不练”都是不行的。", answers: ["无论", "不管"] },
        { q: "虽然压力很大，但是为了我们共同的理想，___如何一定不能放弃。", answers: ["无论"] },
        { q: "阳光、空气和水，___是对动植物，还是对人来说，这三样东西都是不可缺少的。", answers: ["无论", "不管"] },
        { q: "___热不热，他总是穿这么多。", answers: ["不管"] },
        { q: "___如何，我都不会离开你。", answers: ["无论"] },
        { q: "___结果怎么样，我们都应该为他高兴。", answers: ["无论", "不管"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 连……也/都……", points: 6,
      subtitle: "Điền từ thích hợp vào chỗ trống (连 – “ngay cả”).",
      grammarWord: "连",
      items: [
        { q: "你太厉害了！___中文报纸都看得懂。", answers: ["连"] },
        { q: "如果___你自己都不喜欢自己，又怎么能让别人喜欢你呢？", answers: ["连"] },
        { q: "___我住的楼的电梯里都有三个广告。", answers: ["连"] },
        { q: "这个箱子太重了，___大人都拿不动，小孩子更拿不动了。", answers: ["连"] },
        { q: "他忙得___吃饭的时间都没有。", answers: ["连"] },
        { q: "这个问题太难了，___老师也不知道答案。", answers: ["连"] },
        { q: "小时候我___一个汉字也不认识。", answers: ["连"] },
        { q: "安娜因为这件事很生气，___一句话都不想说。", answers: ["连"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 否则 / 然而 / 同时", points: 5,
      subtitle: "Chọn liên từ thích hợp: 否则 (nếu không thì), 然而 (nhưng, tuy nhiên), 同时 (đồng thời, hơn nữa).",
      grammarWord: "否则 / 然而 / 同时",
      options: ["否则", "然而", "同时"],
      items: [
        { q: "他一定有重要的事找你，___不会打这么多次电话来。", answers: ["否则"] },
        { q: "你最好下午四点前去公司找她，___就明天早上再去。", answers: ["否则"] },
        { q: "去美国留学前应该先学好英语，___会遇到很多困难。", answers: ["否则"] },
        { q: "他虽然失败了很多次，___一直没有放弃。", answers: ["然而"] },
        { q: "很多人觉得自己的生活是幸福的，___每个人对幸福的看法却不完全相同。", answers: ["然而"] },
        { q: "他从小就想成为一名警察，___他最后却成了一名医生。", answers: ["然而"] },
        { q: "阅读能丰富你的知识；___，它还会丰富你的情感。", answers: ["同时"] },
        { q: "在学习汉语的___，我还认识了很多中国朋友。", answers: ["同时"] },
      ],
    },
  ],
};
