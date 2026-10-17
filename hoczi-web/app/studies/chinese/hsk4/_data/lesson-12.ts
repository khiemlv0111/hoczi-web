import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第12课 用心发现世界 (Khám phá thế giới bằng trái tim)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 23–35 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["引起", "也许", "仔细", "作用", "可惜"];
const W_EX2 = ["详细", "解释", "商量", "力气", "直接"];

export const lesson12: Lesson = {
  level: "hsk4",
  no: 12,
  slug: "bai-12",
  zh: "用心发现世界",
  pinyin: "Yòng xīn fāxiàn shìjiè",
  vi: "Khám phá thế giới bằng trái tim",
  en: "Discover the World with Your Heart",
  topic: "生活与方法 · Cuộc sống và phương pháp",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 规定、可惜、全部、也许、商量、保护、作用、无法、详细、解释、教育、使用、语言、直接、引起、误会、友好、节约、力气、任务、意见、仔细、达到…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 并且, 再……也……, 对于, lặp lại danh từ/lượng từ (人人、天天、件件…), 相反; phân biệt 对于 và 关于.",
    "Đọc hiểu 5 bài khóa về cách giải quyết khó khăn, mẹo giặt quần áo, phương pháp giáo dục, nghệ thuật nói chuyện và phương pháp học tập.",
    "Trao đổi về cách nói chuyện của bản thân; giới thiệu những phương pháp “事半功倍” mình từng dùng và viết đoạn văn theo chủ đề.",
    "Nắm nhóm từ cùng chữ 用: 信用卡、作用、使用.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：盐、友好、相反、叶子、教育、商量。", vi: "Chọn hình tương ứng với các từ 盐 (muối), 友好 (thân thiện), 相反 (ngược lại), 叶子 (lá cây), 教育 (giáo dục), 商量 (bàn bạc) và nói một câu có từ đó để mô tả hình." },
    { zh: "下面的东西分别是用什么做的？想一想生活中还有哪些不用的东西有别的用处。", vi: "Những đồ vật trong hình (nến làm từ vỏ cam, hộp bút từ chai nhựa, ghế từ lõi giấy) được làm từ gì? Hãy nghĩ xem trong cuộc sống còn những đồ không dùng nữa nào có thể dùng vào mục đích khác." },
  ],

  vocab: [
    { id: 1, han: "规定", py: "guīdìng", pos: "dt.", meaning: "quy định", example: "有句话叫“规定和经验是死的，人是活的”。", exampleVi: "Có câu nói “quy định và kinh nghiệm là chết, con người là sống”." },
    { id: 2, han: "死", py: "sǐ", pos: "tt.", meaning: "cố định, cứng nhắc", example: "规定和经验是死的，人是活的。", exampleVi: "Quy định và kinh nghiệm là cứng nhắc, con người thì linh hoạt." },
    { id: 3, han: "可惜", py: "kěxī", pos: "tt.", meaning: "đáng tiếc", example: "可惜，经验不是全部都是对的。", exampleVi: "Đáng tiếc là kinh nghiệm không phải tất cả đều đúng." },
    { id: 4, han: "全部", py: "quánbù", pos: "dt.", meaning: "toàn bộ, tất cả", example: "经验不是全部都是对的。", exampleVi: "Kinh nghiệm không phải tất cả đều đúng." },
    { id: 5, han: "也许", py: "yěxǔ", pos: "p.", meaning: "có lẽ, may ra", example: "也许这样就能找到解决问题的方法了。", exampleVi: "Có lẽ như vậy sẽ tìm ra được cách giải quyết vấn đề." },
    { id: 6, han: "商量", py: "shāngliang", pos: "đgt.", meaning: "thương lượng, bàn bạc", example: "好，我再跟同事商量商量。", exampleVi: "Được, tôi sẽ bàn bạc thêm với đồng nghiệp." },
    { id: 7, han: "并且", py: "bìngqiě", pos: "liên.", meaning: "đồng thời, và", example: "希望能及时发现问题，并且准确地找到解决问题的方法。", exampleVi: "Hy vọng có thể kịp thời phát hiện vấn đề, đồng thời tìm ra chính xác cách giải quyết." },
    { id: 8, han: "盐", py: "yán", pos: "dt.", meaning: "muối", example: "你洗的时候在水里加点儿盐就不会这样了。", exampleVi: "Lúc giặt con cho một chút muối vào nước thì sẽ không bị như vậy nữa." },
    { id: 9, han: "勺", py: "sháo", pos: "dt.", meaning: "cái muôi, cái thìa (勺子)", example: "在水里加勺盐再洗是最简单的方法。", exampleVi: "Cho một thìa muối vào nước rồi mới giặt là cách đơn giản nhất." },
    { id: 10, han: "保护", py: "bǎohù", pos: "đgt.", meaning: "bảo vệ", example: "我第一次听说盐有保护衣服颜色的作用。", exampleVi: "Lần đầu tiên con nghe nói muối có tác dụng giữ màu quần áo." },
    { id: 11, han: "作用", py: "zuòyòng", pos: "dt.", meaning: "tác dụng", example: "有些故事还有教育的作用。", exampleVi: "Có những câu chuyện còn có tác dụng giáo dục." },
    { id: 12, han: "无法", py: "wúfǎ", pos: "đgt.", meaning: "không thể, không có cách gì", example: "生活中还真有不少课本上无法学到的知识。", exampleVi: "Trong cuộc sống thật sự có không ít kiến thức không thể học được từ sách vở." },
    { id: 13, han: "无", py: "wú", pos: "đgt.", meaning: "không có, không", example: "“关于”可以出现在书的名字中，而“对于”无此用法。", exampleVi: "“关于” có thể xuất hiện trong tên sách, còn “对于” không có cách dùng này." },
    { id: 14, han: "节", py: "jié", pos: "lượng.", meaning: "tiết (học)", example: "今天听完您的这节课，我终于明白了。", exampleVi: "Hôm nay nghe xong tiết học này của thầy, cuối cùng tôi đã hiểu ra." },
    { id: 15, han: "详细", py: "xiángxì", pos: "tt.", meaning: "chi tiết, tỉ mỉ", example: "您能详细谈谈对我的课的看法吗？", exampleVi: "Cô có thể nói chi tiết nhận xét của cô về tiết học của tôi không?" },
    { id: 16, han: "解释", py: "jiěshì", pos: "đgt.", meaning: "giải thích", example: "您总是能用最简单的方法把复杂的问题解释清楚。", exampleVi: "Thầy luôn có thể dùng cách đơn giản nhất để giải thích rõ ràng những vấn đề phức tạp." },
    { id: 17, han: "对于", py: "duìyú", pos: "gt.", meaning: "đối với", example: "对于这件事，我跟大家的看法不同。", exampleVi: "Đối với việc này, quan điểm của tôi khác mọi người." },
    { id: 18, han: "叶子", py: "yèzi", pos: "dt.", meaning: "lá cây", example: "世界上没有完全相同的叶子。", exampleVi: "Trên thế giới không có hai chiếc lá hoàn toàn giống nhau." },
    { id: 19, han: "教育", py: "jiàoyù", pos: "đgt.", meaning: "giáo dục, dạy dỗ", example: "在教育学生时，要根据学生的特点选择不同的方法。", exampleVi: "Khi giáo dục học sinh, phải dựa vào đặc điểm của học sinh để chọn phương pháp khác nhau." },
    { id: 20, han: "使用", py: "shǐyòng", pos: "đgt.", meaning: "sử dụng", example: "人人都会使用语言。", exampleVi: "Ai cũng biết sử dụng ngôn ngữ." },
    { id: 21, han: "语言", py: "yǔyán", pos: "dt.", meaning: "ngôn ngữ", example: "怎么用语言把话说好却是一门艺术。", exampleVi: "Nhưng làm sao dùng ngôn ngữ để nói cho hay lại là một nghệ thuật." },
    { id: 22, han: "直接", py: "zhíjiē", pos: "tt.", meaning: "trực tiếp, thẳng", example: "即使是别人的缺点，他也会直接说出来。", exampleVi: "Cho dù là khuyết điểm của người khác, anh ta cũng nói thẳng ra." },
    { id: 23, han: "引起", py: "yǐnqǐ", pos: "đgt.", meaning: "gây ra, dẫn đến", example: "这样的人可能会引起别人的误会。", exampleVi: "Người như vậy có thể gây ra hiểu lầm cho người khác." },
    { id: 24, han: "误会", py: "wùhuì", pos: "dt.", meaning: "sự hiểu lầm", example: "这样的人虽然很诚实，但是可能会引起别人的误会。", exampleVi: "Người như vậy tuy rất thật thà nhưng có thể gây ra hiểu lầm cho người khác." },
    { id: 25, han: "友好", py: "yǒuhǎo", pos: "tt.", meaning: "thân thiện", example: "这样的人会让人觉得更友好。", exampleVi: "Người như vậy khiến người khác cảm thấy thân thiện hơn." },
    { id: 26, han: "事半功倍", py: "shì bàn gōng bèi", pos: "thành ngữ", meaning: "làm chơi ăn thật (tốn ít công mà hiệu quả gấp bội)", example: "使用正确的方法，我们做起事来能“事半功倍”。", exampleVi: "Dùng phương pháp đúng, chúng ta làm việc sẽ “làm chơi ăn thật”." },
    { id: 27, han: "节约", py: "jiéyuē", pos: "đgt.", meaning: "tiết kiệm", example: "使用正确的方法，能节约时间。", exampleVi: "Dùng phương pháp đúng có thể tiết kiệm thời gian." },
    { id: 28, han: "力气", py: "lìqi", pos: "dt.", meaning: "sức lực, hơi sức", example: "用较少的力气，取得更好的效果。", exampleVi: "Dùng ít sức hơn mà đạt được hiệu quả tốt hơn." },
    { id: 29, han: "相反", py: "xiāngfǎn", pos: "liên.", meaning: "trái lại, ngược lại", example: "相反，如果方法不对，可能花五倍甚至十倍的时间都不能完成任务。", exampleVi: "Ngược lại, nếu phương pháp không đúng, có thể tốn gấp năm thậm chí gấp mười lần thời gian mà vẫn không hoàn thành nhiệm vụ." },
    { id: 30, han: "任务", py: "rènwu", pos: "dt.", meaning: "nhiệm vụ", example: "我本来以为任务能顺利完成。", exampleVi: "Tôi vốn tưởng nhiệm vụ có thể hoàn thành thuận lợi." },
    { id: 31, han: "意见", py: "yìjiàn", pos: "dt.", meaning: "ý kiến", example: "我们应该在听取别人意见的同时，仔细考虑一下。", exampleVi: "Chúng ta nên vừa lắng nghe ý kiến người khác vừa suy nghĩ kỹ lưỡng." },
    { id: 32, han: "仔细", py: "zǐxì", pos: "tt.", meaning: "thận trọng, kỹ lưỡng", example: "做决定之前最好仔细考虑一下。", exampleVi: "Trước khi quyết định tốt nhất nên suy nghĩ kỹ một chút." },
    { id: 33, han: "达到", py: "dádào", pos: "đgt.", meaning: "đạt được", example: "这样才能达到最好的效果。", exampleVi: "Như vậy mới có thể đạt được hiệu quả tốt nhất." },
    { id: 34, han: "信用卡", py: "xìnyòngkǎ", pos: "dt.", meaning: "thẻ tín dụng", example: "有些年轻人申请了信用卡，但在购物时却没有考虑自己的经济能力。", exampleVi: "Có những người trẻ đăng ký thẻ tín dụng nhưng khi mua sắm lại không cân nhắc khả năng tài chính của mình.", group: "extended" },
  ],

  text: {
    title: "课文 用心发现世界",
    paragraphs: [
      {
        heading: "课文一 · 王经理做生意遇到了困难",
        zh: "王经理：听说这次生意你到现在还没谈成。\n马经理：按我以前的经验，早应该谈成了，这次我也不知道哪儿出了问题。\n王经理：有句话叫“规定和经验是死的，人是活的”。当“规定”和“经验”不能解决问题时，建议你改变一下自己的态度和想法。\n马经理：很多时候，我都习惯根据过去的经验做事，可惜，经验不是全部都是对的。\n王经理：遇到不能解决的问题时，我们应该试着走走以前从来没走过的路，也许这样就能找到解决问题的方法了。\n马经理：好，我再跟同事商量商量，希望能及时发现问题，并且准确地找到解决问题的方法。",
        vi: "Giám đốc Vương: Nghe nói vụ làm ăn lần này đến giờ anh vẫn chưa đàm phán xong.\nGiám đốc Mã: Theo kinh nghiệm trước đây của tôi thì lẽ ra đã xong từ lâu rồi, lần này tôi cũng không biết trục trặc ở đâu.\nGiám đốc Vương: Có câu nói “quy định và kinh nghiệm là cứng nhắc, con người thì linh hoạt”. Khi “quy định” và “kinh nghiệm” không giải quyết được vấn đề, tôi khuyên anh nên thay đổi thái độ và suy nghĩ của mình một chút.\nGiám đốc Mã: Rất nhiều lúc tôi quen làm việc dựa theo kinh nghiệm trước kia, đáng tiếc là kinh nghiệm không phải tất cả đều đúng.\nGiám đốc Vương: Khi gặp vấn đề không giải quyết được, chúng ta nên thử đi những con đường trước đây chưa từng đi, có lẽ như vậy sẽ tìm ra cách giải quyết vấn đề.\nGiám đốc Mã: Được, tôi sẽ bàn bạc thêm với đồng nghiệp, hy vọng có thể kịp thời phát hiện vấn đề, đồng thời tìm ra chính xác cách giải quyết.",
        questions: ["说说你认为经验有没有用，为什么。", "要是工作或学习遇到困难，你可能用什么方法去解决？"],
      },
      {
        heading: "课文二 · 高老师告诉女儿洗衣服的方法",
        zh: "女儿：妈，您看我刚买的裤子，洗完以后颜色怎么变得这么难看呢？\n高老师：看来是掉颜色了，你洗的时候在水里加点儿盐就不会这样了。\n女儿：放盐？！盐不是用来做饭的吗？难道它还能让衣服不掉颜色？\n高老师：当然。有些衣服第一次洗的时候会掉颜色，其实，有很多方法可以解决这个问题。在水里加勺盐再洗是最简单的方法。用盐水来洗新衣服，这样穿得再久、洗的次数再多，衣服也不容易掉颜色。\n女儿：我第一次听说盐有保护衣服颜色的作用，生活中还真有不少课本上无法学到的知识。\n高老师：实际上，很多问题的答案都可以从生活中找到。但这需要你用眼睛去发现，用心去总结。",
        vi: "Con gái: Mẹ ơi, mẹ xem cái quần con mới mua này, giặt xong sao màu lại xấu thế này?\nCô Cao: Xem ra là bị phai màu rồi, lúc giặt con cho một chút muối vào nước thì sẽ không bị như vậy nữa.\nCon gái: Cho muối á?! Muối chẳng phải dùng để nấu ăn sao? Lẽ nào nó còn làm quần áo không phai màu được?\nCô Cao: Tất nhiên. Có những bộ quần áo lần đầu giặt sẽ bị phai màu, thật ra có rất nhiều cách giải quyết vấn đề này. Cho một thìa muối vào nước rồi mới giặt là cách đơn giản nhất. Dùng nước muối để giặt quần áo mới, như vậy dù mặc lâu đến đâu, giặt bao nhiêu lần, quần áo cũng không dễ phai màu.\nCon gái: Lần đầu tiên con nghe nói muối có tác dụng giữ màu quần áo, trong cuộc sống thật sự có không ít kiến thức không thể học được từ sách vở.\nCô Cao: Thực tế, đáp án của rất nhiều vấn đề đều có thể tìm thấy trong cuộc sống. Nhưng điều đó đòi hỏi con phải dùng mắt để phát hiện, dùng tâm để đúc kết.",
        questions: ["哪种方法可以保护衣服不掉颜色？说说你知道的别的方法。", "举例说明你从生活中还学到了哪些课本上学不到的知识。"],
      },
      {
        heading: "课文三 · 高老师学习王教授的教育方法",
        zh: "高老师：王教授，今天听完您的这节课，我终于明白为什么您的课那么受学生欢迎了。\n王教授：谢谢！您能详细谈谈对我的课的看法吗？\n高老师：我发现您对学生特别了解，而且总是能用最简单的方法把复杂的问题解释清楚，让每个学生都能听懂，这一点真是值得我们好好儿学习。\n王教授：哪里哪里，这只是因为我对每个学生的能力水平比较了解。\n高老师：那您认为对于老师来说，什么是最难做到的？\n王教授：世界上没有完全相同的叶子，同样地，世界上也没有完全一样的人。所以，在教育学生时，要根据学生的特点选择不同的方法，我想这应该是最不容易做到的。",
        vi: "Cô Cao: Thưa giáo sư Vương, hôm nay nghe xong tiết học này của thầy, cuối cùng tôi đã hiểu vì sao giờ học của thầy được sinh viên yêu thích đến vậy.\nGiáo sư Vương: Cảm ơn cô! Cô có thể nói chi tiết nhận xét của cô về tiết học của tôi không?\nCô Cao: Tôi thấy thầy đặc biệt hiểu sinh viên, hơn nữa luôn dùng cách đơn giản nhất để giải thích rõ ràng những vấn đề phức tạp, giúp sinh viên nào cũng hiểu được, điểm này thật đáng để chúng tôi học tập.\nGiáo sư Vương: Đâu có, đâu có, chỉ là vì tôi tương đối hiểu năng lực, trình độ của từng sinh viên thôi.\nCô Cao: Vậy thầy cho rằng đối với giáo viên, điều gì là khó làm được nhất?\nGiáo sư Vương: Trên thế giới không có hai chiếc lá hoàn toàn giống nhau, cũng như vậy, trên thế giới cũng không có hai người hoàn toàn giống nhau. Vì vậy, khi giáo dục học sinh, phải dựa vào đặc điểm của học sinh để chọn phương pháp khác nhau, tôi nghĩ đây hẳn là điều khó làm được nhất.",
        questions: ["高老师认为王教授上课成功有哪些方面的原因？", "从“世界上没有完全相同的叶子”这句话，你可以学到什么？"],
      },
      {
        heading: "课文四 · 说话的艺术",
        zh: "人人都会使用语言，但是怎么用语言把话说好却是一门艺术。看一个人怎么说话，往往可以比较准确地判断出他是一个什么样的人。有的人心里怎么想，嘴上就怎么说，即使是别人的缺点，他也会直接说出来，这样的人虽然很诚实，但是可能会引起别人的误会；有的人虽然也看到了别人的缺点，但却不会直接指出来，而是通过别的方法来提醒，让他认识到自己的缺点，这样的人会让人觉得更友好。",
        vi: "Ai cũng biết sử dụng ngôn ngữ, nhưng làm sao dùng ngôn ngữ để nói cho hay lại là một nghệ thuật. Xem một người nói chuyện thế nào, thường có thể phán đoán tương đối chính xác người đó là người như thế nào. Có người trong lòng nghĩ sao thì miệng nói vậy, cho dù là khuyết điểm của người khác, họ cũng nói thẳng ra; người như vậy tuy rất thật thà nhưng có thể gây ra hiểu lầm cho người khác. Có người tuy cũng nhìn thấy khuyết điểm của người khác nhưng không chỉ thẳng ra, mà nhắc nhở bằng cách khác, giúp người đó nhận ra khuyết điểm của mình; người như vậy khiến người khác cảm thấy thân thiện hơn.",
        questions: ["课文中提到了几种说话方式？你喜欢哪一种？为什么？", "根据课文，你可以知道人们的说话方式可能和什么有关系？"],
      },
      {
        heading: "课文五 · 事半功倍",
        zh: "无论做什么事情，都要注意方法，学习尤其是这样。使用正确的方法，我们做起事来能“事半功倍”，也就是说，能节约时间，用较少的力气，取得更好的效果。相反，如果方法不对，可能花五倍甚至十倍的时间都不能完成任务，结果变成了“事倍功半”。有一点需要提醒大家，别人的方法也许很有效，但是并不一定适合自己。因此，我们应该在听取别人意见的同时，仔细考虑一下，再根据不同的情况选择不同的方法，这样才能达到最好的效果。",
        vi: "Bất kể làm việc gì cũng phải chú ý phương pháp, việc học lại càng như vậy. Dùng phương pháp đúng, chúng ta làm việc sẽ “làm chơi ăn thật”, nghĩa là có thể tiết kiệm thời gian, dùng ít sức hơn mà đạt được hiệu quả tốt hơn. Ngược lại, nếu phương pháp không đúng, có thể tốn gấp năm thậm chí gấp mười lần thời gian mà vẫn không hoàn thành nhiệm vụ, kết quả trở thành “làm nhiều mà hiệu quả ít”. Có một điểm cần nhắc mọi người: phương pháp của người khác có thể rất hiệu quả nhưng chưa chắc đã phù hợp với mình. Vì vậy, chúng ta nên vừa lắng nghe ý kiến người khác vừa suy nghĩ kỹ lưỡng, rồi dựa vào tình hình khác nhau để chọn phương pháp khác nhau, như vậy mới đạt được hiệu quả tốt nhất.",
        questions: ["你认为你的学习方法是“事半功倍”还是“事倍功半”？", "对于别人的意见，什么态度是正确的？"],
      },
    ],
    notes: [
      "事半功倍 (làm ít công mà hiệu quả gấp bội) ↔ 事倍功半 (làm gấp bội công mà hiệu quả chỉ một nửa).",
      "Văn hóa: 孔子“因材施教” – phương pháp “dạy theo năng khiếu” của Khổng Tử: giáo viên nên dựa vào đặc điểm và khả năng của từng học sinh để chọn phương pháp giáo dục khác nhau.",
    ],
  },

  grammar: [
    {
      word: "并且",
      title: "Liên từ “đồng thời, và, hơn nữa”",
      usages: [
        {
          label: "Nối động từ, tính từ",
          explain: "并且 có thể nối các động từ, tính từ ngang hàng để diễn tả vài hành động được thực hiện cùng lúc hoặc một số tính chất tồn tại cùng lúc.",
          examples: [
            "他做事很认真，并且有丰富的经验，让他负责很合适。",
            "这种植物开的花比普通的花大很多，并且特别漂亮。",
          ],
        },
        {
          label: "Nối câu",
          explain: "并且 cũng dùng để nối các câu, diễn tả ý tiến thêm một bước (hơn nữa).",
          examples: [
            "这房子家具全，电视、空调、冰箱都很新，并且价格也便宜，真的很值得考虑。",
            "好，我再跟同事商量商量，希望能及时发现问题，并且准确地找到解决问题的方法。",
          ],
        },
      ],
    },
    {
      word: "再……也……",
      title: "Cấu trúc nhượng bộ “dù… đến đâu cũng…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Cấu trúc “再……也……” thường dùng trong câu giả thiết để chỉ sự nhượng bộ. 再 mang nghĩa “即使、无论怎么” (cho dù, dù thế nào đi nữa); sau 再 có thể là động từ, tính từ, câu…",
          examples: [
            "事情已经发生了，你再后悔也无法改变，别伤心了。",
            "用盐水来洗新衣服，这样穿得再久、洗的次数再多，衣服也不容易掉颜色。",
            "如果我们有什么看法或者意见，不管别人再怎么不同意、不支持，也应该说出来，让别人知道我们的想法和态度。",
          ],
        },
      ],
    },
    {
      word: "对于",
      title: "Giới từ “đối với”",
      usages: [
        {
          label: "Cách dùng",
          explain: "对于 cho biết đối tượng được đề cập đến trong một thái độ hay tình huống nào đó. Cụm “对于……” có thể đứng trước hoặc sau chủ ngữ.",
          examples: [
            "对于这件事，我跟大家的看法不同。",
            "对于中国人来说，春节是一年之中最重要的节日，春节的时候人们会举行各种各样的迎新年活动。",
            "那您认为对于老师来说，什么是最难做到的？",
          ],
        },
      ],
      note: "比一比 对于 — 关于. (1) Cả hai đều là giới từ nhưng nghĩa khác: 对于 nêu rõ đối tượng (thường chịu tác động của hành động hoặc sự vật được đề cập); 关于 nêu phạm vi, sự vật được nói đến: 对于这次调查计划，经理特别满意。/ 关于这次调查计划，经理说有很多不清楚的地方。 (2) 对于 đứng trước hoặc sau chủ ngữ được; 关于 chỉ đứng trước chủ ngữ: 对于每个需要帮助的人，他都会热情、耐心地提供帮助。/ 他对于每个需要帮助的人都会热情、耐心地提供帮助。/ 关于什么是幸福，每个人都有自己不同的看法。 (3) “关于……” có thể xuất hiện trong tên sách, bài báo, 对于 thì không: 《关于中国经济的几个问题》.",
    },
    {
      word: "名量词重叠 (AA)",
      title: "Lặp lại danh từ / lượng từ – nghĩa “mỗi, mọi”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Danh từ/lượng từ lặp lại thường có dạng “AA”, có nghĩa là “每” (mỗi). Dạng lặp này có thể làm chủ ngữ, định ngữ của chủ ngữ và trạng ngữ, nhưng không làm tân ngữ hay định ngữ của tân ngữ.",
          examples: [
            "人人都会使用语言，但是怎么用语言把话说好却是一门艺术。",
            "白先生天天都去那家咖啡馆坐一会儿，因为他觉得，工作了一天，只有安静的地方才能让他得到放松。",
            "做好小事是完成大事的第一步，因此，件件小事都应该被看成是一次学习的机会。",
          ],
        },
      ],
    },
    {
      word: "相反",
      title: "相反 – “ngược lại, trái lại”",
      usages: [
        {
          label: "Liên từ",
          explain: "Liên từ 相反 dùng ở đầu hoặc giữa vế câu sau để chỉ sự chuyển ý hoặc diễn tả sự tăng tiến.",
          examples: [
            "如果还是使用以前的办法，不但不能解决任何问题，相反，会使问题变得更复杂。",
            "使用正确的方法，我们做起事来能“事半功倍”……相反，如果方法不对，可能花五倍甚至十倍的时间都不能完成任务，结果变成了“事倍功半”。",
          ],
        },
        {
          label: "Tính từ",
          explain: "Tính từ 相反 diễn tả hai mặt của sự vật đối lập hay mâu thuẫn với nhau, có thể làm vị ngữ hoặc bổ nghĩa cho danh từ; khi bổ nghĩa cho danh từ, phía sau phải có 的.",
          examples: [
            "调查结果和他们想的几乎完全相反，他们不得不改变原来的计划。",
            "我本来以为任务能顺利完成，没想到事情正好向相反的方向发展。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "她表示要放弃这个去国外留学的机会，同学们都觉得很___。", options: W_EX1, answer: "可惜" },
    { sentence: "如果你觉得心烦，可以吃点儿蛋糕或者巧克力，这些甜的东西___会给你带来好心情。", options: W_EX1, answer: "也许" },
    { sentence: "现在网上银行的___越来越大。有了它，网上购物就方便多了。", options: W_EX1, answer: "作用" },
    { sentence: "你现在做出的每一个决定都有可能影响到你的将来。所以，做决定之前最好___考虑一下。", options: W_EX1, answer: "仔细" },
    { sentence: "事情的原因和结果往往是互相联系的。一定的原因会___一定的结果。", options: W_EX1, answer: "引起" },
    { sentence: "咱们在这儿休息一会儿吧，我没___爬了。", options: W_EX2, answer: "力气" },
    { sentence: "大家在教室___晚会节目的事情呢，就差你了。", options: W_EX2, answer: "商量" },
    { sentence: "经理，新的计划内容太简单，不够___，明天我们得再开会商量商量。", options: W_EX2, answer: "详细" },
    { sentence: "我把李律师的电话号码发到你手机上，你___跟他联系就行。", options: W_EX2, answer: "直接" },
    { sentence: "我向那位顾客___了这次不能及时送货的原因，她表示可以理解。", options: W_EX2, answer: "解释" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [4, 31, 30] },
        { vocabId: 3, distractors: [5, 12, 32] },
        { vocabId: 6, distractors: [16, 19, 27] },
        { vocabId: 10, distractors: [11, 20, 33] },
        { vocabId: 15, distractors: [32, 22, 25] },
        { vocabId: 21, distractors: [20, 31, 24] },
        { vocabId: 23, distractors: [24, 33, 16] },
        { vocabId: 27, distractors: [28, 30, 29] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 7, 8, 17, 18, 24, 29, 32],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["经验", "不是", "全部", "都是", "对的", "。"], answer: "经验不是全部都是对的。", vi: "Kinh nghiệm không phải tất cả đều đúng." },
        { tokens: ["我", "再跟同事", "商量商量", "。"], answer: "我再跟同事商量商量。", vi: "Tôi sẽ bàn bạc thêm với đồng nghiệp." },
        { tokens: ["盐", "有", "保护衣服颜色的", "作用", "。"], answer: "盐有保护衣服颜色的作用。", vi: "Muối có tác dụng giữ màu quần áo." },
        { tokens: ["世界上", "没有", "完全相同的", "叶子", "。"], answer: "世界上没有完全相同的叶子。", vi: "Trên thế giới không có hai chiếc lá hoàn toàn giống nhau." },
        { tokens: ["这样的人", "可能会", "引起", "别人的误会", "。"], answer: "这样的人可能会引起别人的误会。", vi: "Người như vậy có thể gây ra hiểu lầm cho người khác." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Làm ăn gặp khó khăn", text: "王经理：有句话叫“{{a1}}和经验是死的，人是活的”。\n马经理：很多时候，我都习惯根据过去的经验做事，{{a2}}，经验不是全部都是对的。\n王经理：我们应该试着走走以前从来没走过的路，{{a3}}这样就能找到解决问题的方法了。\n马经理：好，我再跟同事{{a4}}商量，希望能及时发现问题，{{a5}}准确地找到解决问题的方法。" },
        { title: "Bài 2 · Mẹo giặt quần áo", text: "女儿：我第一次听说盐有{{a6}}衣服颜色的{{a7}}，生活中还真有不少课本上{{a8}}学到的知识。" },
        { title: "Bài 3 · Phương pháp giáo dục", text: "高老师：您总是能用最简单的方法把复杂的问题{{a9}}清楚。\n王教授：在{{a10}}学生时，要根据学生的特点选择不同的方法。" },
      ],
      answers: { a1: "规定", a2: "可惜", a3: "也许", a4: "商量", a5: "并且", a6: "保护", a7: "作用", a8: "无法", a9: "解释", a10: "教育" },
      bank: ["规定", "可惜", "也许", "商量", "并且", "保护", "作用", "无法", "解释", "教育", "详细", "对于", "全部"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về nghệ thuật nói chuyện và phương pháp học tập.",
      passages: [
        { title: "Bài 4 · Nghệ thuật nói chuyện", text: "人人都会{{b1}}语言，但是怎么用{{b2}}把话说好却是一门艺术。有的人即使是别人的缺点，他也会{{b3}}说出来，这样的人虽然很诚实，但是可能会{{b4}}别人的{{b5}}。" },
        { title: "Bài 5 · Làm chơi ăn thật", text: "使用正确的方法，能{{b6}}时间，用较少的{{b7}}，取得更好的效果。{{b8}}，如果方法不对，可能花五倍甚至十倍的时间都不能完成{{b9}}。我们应该在听取别人意见的同时，仔细考虑一下，这样才能{{b10}}最好的效果。" },
      ],
      answers: { b1: "使用", b2: "语言", b3: "直接", b4: "引起", b5: "误会", b6: "节约", b7: "力气", b8: "相反", b9: "任务", b10: "达到" },
      bank: ["使用", "语言", "直接", "引起", "误会", "节约", "力气", "相反", "任务", "达到", "友好", "意见", "仔细"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "规定和经验是死的，人是活的。", vi: "Quy định và kinh nghiệm là cứng nhắc, con người thì linh hoạt.", keywords: ["quy định", "kinh nghiệm", "con người"] },
        { zh: "很多问题的答案都可以从生活中找到。", vi: "Đáp án của rất nhiều vấn đề đều có thể tìm thấy trong cuộc sống.", keywords: ["đáp án", "vấn đề", "cuộc sống"] },
        { zh: "世界上没有完全一样的人。", vi: "Trên thế giới không có hai người hoàn toàn giống nhau.", keywords: ["thế giới", "hoàn toàn", "giống nhau"] },
        { zh: "这样的人会让人觉得更友好。", vi: "Người như vậy khiến người khác cảm thấy thân thiện hơn.", keywords: ["người", "cảm thấy", "thân thiện"] },
        { zh: "别人的方法也许很有效，但是并不一定适合自己。", vi: "Phương pháp của người khác có thể rất hiệu quả nhưng chưa chắc đã phù hợp với mình.", keywords: ["phương pháp", "hiệu quả", "phù hợp"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Đối với việc này, quan điểm của tôi khác mọi người.", answers: ["对于这件事，我跟大家的看法不同。", "对于这件事，我和大家的看法不同。"] },
        { vi: "Chuyện đã xảy ra rồi, bạn có hối hận đến đâu cũng không thay đổi được.", answers: ["事情已经发生了，你再后悔也无法改变。", "事情已经发生了，你再后悔也不能改变。"] },
        { vi: "Ai cũng biết sử dụng ngôn ngữ.", answers: ["人人都会使用语言。"] },
        { vi: "Trước khi quyết định tốt nhất nên suy nghĩ kỹ một chút.", answers: ["做决定之前最好仔细考虑一下。", "做决定前最好仔细考虑一下。"] },
        { vi: "Dùng phương pháp đúng có thể tiết kiệm thời gian.", answers: ["使用正确的方法能节约时间。", "使用正确的方法，能节约时间。", "用正确的方法能节约时间。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "马经理这次的生意已经谈成了。", a: false },
        { q: "王经理建议马经理改变一下自己的态度和想法。", a: true },
        { q: "高老师告诉女儿，洗衣服时在水里加点儿糖就不会掉颜色。", a: false },
        { q: "女儿以前就知道盐有保护衣服颜色的作用。", a: false },
        { q: "王教授对每个学生的能力水平比较了解。", a: true },
        { q: "王教授认为，根据学生的特点选择不同的方法是最不容易做到的。", a: true },
        { q: "课文四说，直接说出别人缺点的人可能会引起别人的误会。", a: true },
        { q: "课文五说，别人有效的方法一定适合自己。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我再跟同事商量商量。",
        "在水里加点儿盐就不会掉颜色了。",
        "您能详细谈谈对我的课的看法吗？",
        "人人都会使用语言。",
        "这样才能达到最好的效果。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "在工作和学习过程中，每个人都有自己解决困难、完成工作的好方法。请介绍一下你用过哪些“事半功倍”的好方法。 (Hãy giới thiệu những phương pháp “làm chơi ăn thật” mà bạn từng dùng trong học tập hoặc công việc.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 12 (并且, 再……也……, 对于, 人人/天天…, 相反).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["并且", "再", "对于", "相反", "人人", "天天"],
      minGrammar: 2,
      sample: "对于学习汉语来说，方法非常重要。以前我天天背生词，花了很多力气，可是效果不好，很多词语再怎么背也记不住。后来老师建议我把生词放在句子里记，并且每天用新学的词语写几句话。这个方法真的能事半功倍，不但节约了时间，而且我说汉语也更准确了。相反，如果只是死记硬背，就会事倍功半。当然，别人的方法也许不一定适合你，我们应该仔细考虑，选择适合自己的方法。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 对于 / 关于", points: 6,
      subtitle: "Chọn 对于 hoặc 关于. Có câu dùng được cả hai – chọn từ nào đúng cũng được chấp nhận.",
      grammarWord: "对于 / 关于",
      options: ["对于", "关于"],
      items: [
        { q: "___这个问题，你应该再认真地考虑一下。", answers: ["对于", "关于"] },
        { q: "___这方面的情况，大家最好上网去查一查。", answers: ["关于"] },
        { q: "现在人们___自然环境越来越注意保护了。", answers: ["对于"] },
        { q: "昨天在报纸上看到一篇___这位明星的新闻，才知道她竟然还只是一位在校大学生。", answers: ["关于"] },
        { q: "他___每个需要帮助的人都会热情、耐心地提供帮助。", answers: ["对于"] },
        { q: "___这次调查计划，经理特别满意。", answers: ["对于"] },
        { q: "我最近在看一本书，名字叫《___中国经济的几个问题》。", answers: ["关于"] },
        { q: "___中国人来说，春节是一年之中最重要的节日。", answers: ["对于"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 再……也……", points: 6,
      subtitle: "Chọn 再 hoặc 也 để hoàn thành cấu trúc nhượng bộ “再……也……”.",
      grammarWord: "再……也……",
      options: ["再", "也"],
      items: [
        { q: "事情已经发生了，你___后悔也无法改变，别伤心了。", answers: ["再"] },
        { q: "用盐水来洗新衣服，穿得再久，衣服___不容易掉颜色。", answers: ["也"] },
        { q: "不管别人再怎么不同意，___应该说出来。", answers: ["也"] },
        { q: "如果一个人不积极、不努力，机会___多也没有用。", answers: ["再"] },
        { q: "同学们只要平时认真学习，考试再难___不用担心。", answers: ["也"] },
        { q: "这件衣服太贵了，___漂亮我也不买。", answers: ["再"] },
        { q: "有些事情过去了就过去了，再后悔___没有用。", answers: ["也"] },
        { q: "工作___忙，也要注意休息。", answers: ["再"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: lặp lại danh từ/lượng từ (AA)", points: 5,
      subtitle: "Gõ dạng lặp AA thích hợp (vd. 人人、天天、件件、本本、年年…) – nghĩa “mỗi, mọi”.",
      grammarWord: "名量词重叠",
      items: [
        { q: "___都会使用语言，但是怎么用语言把话说好却是一门艺术。", answers: ["人人"] },
        { q: "白先生___都去那家咖啡馆坐一会儿。", answers: ["天天"] },
        { q: "做好小事是完成大事的第一步，因此，___小事都应该被看成是一次学习的机会。", answers: ["件件"] },
        { q: "这个作家的语言很幽默，他写的书___都很受欢迎。", answers: ["本本"] },
        { q: "这家公司___都招聘很多新员工，这为找工作的毕业生提供了很多机会。", answers: ["年年"] },
        { q: "只要努力，___都可以变得越来越优秀。", answers: ["人人"] },
        { q: "春节的时候，___户户都很热闹。", answers: ["家家"] },
        { q: "我们班的同学___都很努力。", answers: ["个个"] },
      ],
    },
  ],
};
