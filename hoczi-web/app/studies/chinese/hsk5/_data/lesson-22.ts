import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第22课 阅读与思考 (Đọc và suy nghĩ)
// Nguồn: Giáo trình chuẩn HSK5 tập 2, trang 40–46 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["承认", "过分", "价值", "客观", "理由", "主张"];
const W_EXT = ["目录", "论文", "标点", "废话"];

export const lesson22: Lesson = {
  level: "hsk5",
  no: 22,
  slug: "bai-22",
  zh: "阅读与思考",
  pinyin: "Yuèdú yǔ sīkǎo",
  vi: "Đọc và suy nghĩ",
  en: "Reading and Thinking",
  topic: "体会教育 · Hiểu về giáo dục",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 过分、强调、作文、观点、客观、全面、转变、观念、一旦、王子、属于、对待、交换、拥有、巨大、承认、完美、难免、疼爱、平等、自私、理由、道德、自从、价值、单纯、主张…",
    "Nắm cách kết hợp: 承认 + 事实/错误; 转变 + 方法/观念/态度; 交换 + 物品/意见; 完美的 + 人/生活; 平等的 + 地位/权利; 自私的 + 人/行为; 全面地 + 了解/思考; 公平地 + 对待…",
    "Hiểu và dùng được 一旦、难免、自从; phân biệt 平等 và 公平.",
    "Đọc hiểu bài khóa về cách thầy giáo Mỹ cùng học sinh thảo luận truyện cổ tích, kể lại bằng từ vựng đã học.",
    "Thảo luận “Lọ Lem nên làm gì?”, viết đoạn văn 「假如我是灰姑娘」.",
    "Nắm 10 từ mở rộng chủ đề 写作表达 (viết và diễn đạt).",
  ],

  warmUp: [
    { zh: "请看下面的图片并说说你知道的颜色。（颜色：红、灰……）", vi: "Nhìn hình và nói những màu bạn biết (màu: đỏ, xám…)." },
    { zh: "你喜欢写作文吗？你觉得有哪些提高写作水平的好方法？请给老师和同学们介绍一下。", vi: "Bạn có thích viết văn không? Bạn thấy có những cách hay nào để nâng cao trình độ viết? Hãy giới thiệu cho thầy cô và các bạn." },
  ],

  vocab: [
    { id: 1, han: "过分", py: "guòfèn", pos: "tt.", meaning: "quá đáng, quá mức", example: "你这种做法太过分了，我不能接受！", exampleVi: "Cách làm này của bạn quá đáng lắm, tôi không chấp nhận được!" },
    { id: 2, han: "强调", py: "qiángdiào", pos: "đgt.", meaning: "nhấn mạnh", example: "很多家长可能过分强调阅读的作用。", exampleVi: "Nhiều phụ huynh có lẽ quá nhấn mạnh tác dụng của việc đọc." },
    { id: 3, han: "作文", py: "zuòwén", pos: "dt.", meaning: "bài làm văn", example: "觉得多读书就能够把作文写得特别好。", exampleVi: "Cho rằng đọc nhiều sách là có thể viết văn đặc biệt hay." },
    { id: 4, han: "观点", py: "guāndiǎn", pos: "dt.", meaning: "quan điểm", example: "我不同意你的观点，我觉得这部电影很不错。", exampleVi: "Tôi không đồng ý với quan điểm của bạn, tôi thấy bộ phim này rất hay." },
    { id: 5, han: "客观", py: "kèguān", pos: "tt.", meaning: "khách quan", example: "人都是有感情甚至自私的，很难做到任何时候都很客观。", exampleVi: "Con người đều có tình cảm, thậm chí ích kỷ, rất khó lúc nào cũng khách quan." },
    { id: 6, han: "全面", py: "quánmiàn", pos: "tt.", meaning: "toàn diện, mọi mặt", example: "这个观点是不客观、不全面的。", exampleVi: "Quan điểm này không khách quan, không toàn diện." },
    { id: 7, han: "转变", py: "zhuǎnbiàn", pos: "đgt.", meaning: "thay đổi", example: "你可以试着转变一下思路，可能会快一点解决问题。", exampleVi: "Bạn có thể thử thay đổi hướng suy nghĩ, có lẽ sẽ giải quyết vấn đề nhanh hơn." },
    { id: 8, han: "观念", py: "guānniàn", pos: "dt.", meaning: "quan niệm, tư tưởng", example: "我们需要转变自己的观念。", exampleVi: "Chúng ta cần thay đổi quan niệm của mình." },
    { id: 9, han: "火柴", py: "huǒchái", pos: "dt.", meaning: "diêm quẹt", example: "他们讨论过《卖火柴的小女孩儿》是写给谁看的。", exampleVi: "Họ từng thảo luận 《Cô bé bán diêm》 được viết cho ai đọc." },
    { id: 10, han: "灰", py: "huī", pos: "dt./tt.", meaning: "tro; xám", example: "他穿着一件灰色的衬衫。", exampleVi: "Anh ấy mặc một chiếc áo sơ mi màu xám." },
    { id: 11, han: "一旦", py: "yídàn", pos: "phó.", meaning: "một khi", example: "长大后，我终于明白了这个道理：女人一旦做了母亲，就变得矛盾了。", exampleVi: "Lớn lên rồi tôi mới hiểu đạo lý này: phụ nữ một khi làm mẹ thì trở nên mâu thuẫn." },
    { id: 12, han: "王宫", py: "wánggōng", pos: "dt.", meaning: "hoàng cung", example: "灰姑娘一旦进了这个王宫，成为王子的心上人……", exampleVi: "Lọ Lem một khi vào hoàng cung, trở thành người trong lòng hoàng tử…" },
    { id: 13, han: "王子", py: "wángzǐ", pos: "dt.", meaning: "hoàng tử", example: "王子爱上了灰姑娘。", exampleVi: "Hoàng tử đã yêu Lọ Lem." },
    { id: 14, han: "属于", py: "shǔyú", pos: "đgt.", meaning: "thuộc về", example: "她的梦想实现了，一切幸福都属于她。", exampleVi: "Ước mơ của cô đã thành hiện thực, mọi hạnh phúc đều thuộc về cô." },
    { id: 15, han: "对待", py: "duìdài", pos: "đgt.", meaning: "đối xử", example: "这时她应该怎样对待她的继母？", exampleVi: "Lúc này cô nên đối xử với mẹ kế thế nào?" },
    { id: 16, han: "交换", py: "jiāohuàn", pos: "đgt.", meaning: "trao đổi", example: "为什么要讨论这个问题呢？因为这是一种情感交换。", exampleVi: "Vì sao phải thảo luận vấn đề này? Vì đây là một sự trao đổi tình cảm." },
    { id: 17, han: "拥有", py: "yōngyǒu", pos: "đgt.", meaning: "có", example: "一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。", exampleVi: "Một người đã có được hạnh phúc to lớn nên tha thứ và thấu hiểu những người từng làm tổn thương mình." },
    { id: 18, han: "巨大", py: "jùdà", pos: "tt.", meaning: "to lớn", example: "这次改革取得了巨大的成功。", exampleVi: "Cuộc cải cách lần này đã giành được thành công to lớn." },
    { id: 19, han: "承认", py: "chéngrèn", pos: "đgt.", meaning: "thừa nhận, chấp nhận", example: "虽然这次的错误有点儿严重，但你应该勇敢地承认。", exampleVi: "Tuy lỗi lần này hơi nghiêm trọng, nhưng bạn nên dũng cảm thừa nhận." },
    { id: 20, han: "人性", py: "rénxìng", pos: "dt.", meaning: "bản tính của con người", example: "还要承认人性中一些先天的不完美。", exampleVi: "Còn phải thừa nhận một số sự không hoàn hảo bẩm sinh trong bản tính con người." },
    { id: 21, han: "完美", py: "wánměi", pos: "tt.", meaning: "hoàn hảo, hoàn mỹ", example: "世界上没有完美的人。", exampleVi: "Trên đời không có người hoàn hảo." },
    { id: 22, han: "难免", py: "nánmiǎn", pos: "tt.", meaning: "khó tránh", example: "刚开始工作，这样的错误是难免的。", exampleVi: "Mới bắt đầu đi làm, sai sót như vậy là khó tránh." },
    { id: 23, han: "疼爱", py: "téng'ài", pos: "đgt.", meaning: "thương yêu", example: "难免会更疼爱自己亲生的女儿。", exampleVi: "Khó tránh khỏi việc thương con gái ruột của mình hơn." },
    { id: 24, han: "平等", py: "píngděng", pos: "tt.", meaning: "bình đẳng, công bằng", example: "法律面前人人平等。", exampleVi: "Trước pháp luật mọi người đều bình đẳng." },
    { id: 25, han: "自私", py: "zìsī", pos: "tt.", meaning: "ích kỷ", example: "可能你觉得继母很自私。", exampleVi: "Có lẽ bạn thấy mẹ kế rất ích kỷ." },
    { id: 26, han: "倾向", py: "qīngxiàng", pos: "đgt./dt.", meaning: "nghiêng về; khuynh hướng", example: "这种行为有自然倾向的理由。", exampleVi: "Hành vi này có lý do từ khuynh hướng tự nhiên." },
    { id: 27, han: "理由", py: "lǐyóu", pos: "dt.", meaning: "lý do", example: "希望你能给我一个好的理由，解释清楚你为什么这么做。", exampleVi: "Mong bạn cho tôi một lý do hợp lý, giải thích rõ vì sao bạn làm vậy." },
    { id: 28, han: "道德", py: "dàodé", pos: "dt.", meaning: "đạo đức", example: "这种行为与道德没有必然的关系。", exampleVi: "Hành vi này không có quan hệ tất yếu với đạo đức." },
    { id: 29, han: "自从", py: "zìcóng", pos: "giới.", meaning: "từ lúc", example: "自从城市出现后，它就成为人类生活的中心。", exampleVi: "Từ khi thành phố xuất hiện, nó đã trở thành trung tâm cuộc sống loài người." },
    { id: 30, han: "童话", py: "tónghuà", pos: "dt.", meaning: "truyện hư cấu, truyện cổ tích", example: "这个老师在讲童话的时候，已经在有意识地把这种情感影响给了孩子们。", exampleVi: "Người thầy này khi kể chuyện cổ tích đã có ý thức truyền sự ảnh hưởng tình cảm ấy cho trẻ." },
    { id: 31, han: "价值", py: "jiàzhí", pos: "dt.", meaning: "giá trị", example: "你的这个建议很有价值，我马上告诉总裁。", exampleVi: "Đề xuất này của bạn rất có giá trị, tôi báo ngay cho chủ tịch." },
    { id: 32, han: "单纯", py: "dānchún", pos: "tt.", meaning: "đơn thuần, đơn giản, chỉ", example: "他太单纯了，这样很容易被人骗。", exampleVi: "Anh ấy ngây thơ quá, như vậy rất dễ bị lừa." },
    { id: 33, han: "主张", py: "zhǔzhāng", pos: "đgt./dt.", meaning: "cho là, tán thành; chủ trương", example: "他主张将会议地点改在上海。", exampleVi: "Anh ấy chủ trương đổi địa điểm họp sang Thượng Hải." },
    { id: 34, han: "知感", py: "zhīgǎn", pos: "dt.", meaning: "tri giác", example: "所谓“知感”就是别人告诉你、要求你记住的那一部分。", exampleVi: "Cái gọi là “tri cảm” là phần người khác nói cho bạn, yêu cầu bạn ghi nhớ." },
    { id: 36, han: "论文", py: "lùnwén", pos: "dt.", meaning: "luận văn", example: "这不是一篇研究型的文章，算不上是一篇论文。", exampleVi: "Đây không phải bài nghiên cứu, không tính là một bài luận văn.", group: "extended" },
    { id: 37, han: "主题", py: "zhǔtí", pos: "dt.", meaning: "chủ đề", example: "这次演讲比赛的主题是“我的梦想”。", exampleVi: "Chủ đề cuộc thi hùng biện lần này là “Ước mơ của tôi”.", group: "extended" },
    { id: 38, han: "题目", py: "tímù", pos: "dt.", meaning: "đề bài, tiêu đề", example: "这篇文章的题目很有意思。", exampleVi: "Tiêu đề bài viết này rất thú vị.", group: "extended" },
    { id: 39, han: "话题", py: "huàtí", pos: "dt.", meaning: "chủ đề (câu chuyện)", example: "我们换个话题吧。", exampleVi: "Chúng ta đổi chủ đề đi.", group: "extended" },
    { id: 40, han: "目录", py: "mùlù", pos: "dt.", meaning: "mục lục", example: "买书的时候我一般会先看看前面的目录，这样可以了解书的大概内容。", exampleVi: "Khi mua sách tôi thường xem mục lục trước để nắm nội dung chính.", group: "extended" },
    { id: 41, han: "提纲", py: "tígāng", pos: "dt.", meaning: "dàn ý", example: "写作文以前最好先写个提纲。", exampleVi: "Trước khi viết văn tốt nhất nên lập dàn ý.", group: "extended" },
    { id: 42, han: "标点", py: "biāodiǎn", pos: "dt.", meaning: "dấu câu", example: "这个地方的标点用错了，这是书的名字，应该用书名号。", exampleVi: "Dấu câu ở chỗ này dùng sai rồi, đây là tên sách, phải dùng dấu ngoặc tên sách.", group: "extended" },
    { id: 43, han: "废话", py: "fèihuà", pos: "dt.", meaning: "lời vô ích, nói nhảm", example: "你现在完全是在说废话，解决不了问题！", exampleVi: "Bạn bây giờ toàn nói lời vô ích, không giải quyết được vấn đề!", group: "extended" },
    { id: 44, han: "胡说", py: "húshuō", pos: "đgt.", meaning: "nói bậy, nói càn", example: "你别胡说，这件事不是他做的。", exampleVi: "Bạn đừng nói bậy, chuyện này không phải anh ấy làm.", group: "extended" },
  ],

  text: {
    title: "课文 阅读与思考",
    paragraphs: [
      {
        zh: "很多家长可能过分强调阅读的作用，觉得多读书就能够把作文写得特别好。这个观点是不客观、不全面的，我们需要转变自己的观念。",
        vi: "Nhiều phụ huynh có lẽ quá nhấn mạnh tác dụng của việc đọc, cho rằng đọc nhiều sách là có thể viết văn đặc biệt hay. Quan điểm này không khách quan, không toàn diện; chúng ta cần thay đổi quan niệm của mình.",
        questions: ["很多家长对阅读有什么看法？", "请用重点词语复述：过分、作文、客观、转变"],
      },
      {
        zh: "我曾经听一位美国的小学老师说，他们十分重视和学生一起讨论问题。比如，他们讨论过《卖火柴的小女孩儿》是写给谁看的，还讨论过灰姑娘的故事。老师讲完故事之后，问同学们：灰姑娘一旦进了这个王宫，成为王子的心上人，她的梦想实现了，一切幸福都属于她之后，这时她应该怎样对待她的继母，应该怎样对待她的两个姐姐？",
        vi: "Tôi từng nghe một thầy giáo tiểu học người Mỹ nói rằng họ rất coi trọng việc cùng học sinh thảo luận vấn đề. Chẳng hạn, họ từng thảo luận 《Cô bé bán diêm》 được viết cho ai đọc, còn thảo luận cả câu chuyện Lọ Lem. Kể xong câu chuyện, thầy hỏi các em: một khi Lọ Lem vào hoàng cung, trở thành người trong lòng hoàng tử, ước mơ của cô thành hiện thực, mọi hạnh phúc đều thuộc về cô, thì lúc ấy cô nên đối xử với mẹ kế thế nào, nên đối xử với hai người chị thế nào?",
        questions: ["那位美国老师和学生讨论过哪些问题？", "请用重点词语复述：一旦、属于、对待"],
      },
      {
        zh: "为什么要讨论这个问题呢？因为这是一种情感交换。老师和学生通过讨论得出的结论是：一个已经拥有巨大幸福的人，应该原谅和理解那些伤害过自己的人。另外还要承认人性中一些先天的不完美，就是说作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更疼爱自己亲生的女儿，很难完全平等地对待她们。可能你觉得继母很自私，但这种行为有自然倾向的理由，与道德没有必然的关系。",
        vi: "Vì sao phải thảo luận vấn đề này? Vì đây là một sự trao đổi tình cảm. Kết luận mà thầy trò rút ra qua thảo luận là: một người đã có được hạnh phúc to lớn nên tha thứ và thấu hiểu những người từng làm tổn thương mình. Ngoài ra còn phải thừa nhận một số sự không hoàn hảo bẩm sinh trong bản tính con người, nghĩa là là một người mẹ, giữa con gái ruột và Lọ Lem không phải con đẻ, khó tránh khỏi thương con ruột hơn, rất khó đối xử hoàn toàn bình đẳng. Có thể bạn thấy mẹ kế rất ích kỷ, nhưng hành vi này có lý do từ khuynh hướng tự nhiên, không có quan hệ tất yếu với đạo đức.",
        questions: ["老师和学生通过讨论得出了什么结论？", "请用重点词语复述：交换、承认、难免、平等、理由"],
      },
      {
        zh: "自从我听说了这件事，就开始思考应该如何阅读，除了阅读还应该做什么。你看这个老师在讲童话的时候，已经在有意识地把这种情感影响，甚至把人性的价值判断，都给了孩子们。如果只是单纯地主张阅读而不强调思考，那是片面的。\n“知识”两个字我始终认为它是要分开来谈的，“知”就是知感，“识”就是认识。所谓“知感”就是别人告诉你、说给你听、要求你记住的那一部分。但只有这一部分是不够的，还要有认识、思考。",
        vi: "Từ khi nghe chuyện này, tôi bắt đầu suy nghĩ nên đọc như thế nào, ngoài đọc ra còn nên làm gì. Bạn xem, người thầy ấy khi kể chuyện cổ tích đã có ý thức truyền cho trẻ sự ảnh hưởng tình cảm ấy, thậm chí cả sự phán đoán giá trị về nhân tính. Nếu chỉ đơn thuần chủ trương đọc mà không nhấn mạnh suy nghĩ thì đó là phiến diện.\nHai chữ “tri thức”, tôi luôn cho rằng phải tách ra mà bàn: “tri” là tri cảm, “thức” là nhận thức. Cái gọi là “tri cảm” là phần người khác nói cho bạn, kể cho bạn nghe, yêu cầu bạn ghi nhớ. Nhưng chỉ có phần này thì chưa đủ, còn phải có nhận thức, suy nghĩ.",
        questions: ["作者从这件事中得到了什么启发？", "作者认为“知识”应该怎样理解？", "请用重点词语复述：自从、价值、单纯"],
      },
    ],
    notes: [
      "《卖火柴的小女孩儿》(Mài Huǒchái de Xiǎo Nǚháir): Cô bé bán diêm. 灰姑娘 (Huīgūniang): Cô bé Lọ Lem.",
      "心上人: người trong lòng, người yêu. 继母: mẹ kế. 亲生: ruột, đẻ ra.",
      "Bài khóa cải biên từ 《北京青年报》, tác giả 梁晓声.",
    ],
  },

  grammar: [
    {
      word: "一旦",
      title: "Phó từ “một khi”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ, biểu thị một ngày không xác định, đột nhiên đến, hoặc giả sử có một ngày như vậy.",
          examples: [
            "长大后，我终于明白了这个道理：女人一旦做了母亲，就变得矛盾了。",
            "灰姑娘一旦进了这个王宫，……应该怎样对待她的继母，应该怎样对待她的两个姐姐？",
            "所谓私人空间，是指我们身体周围的一定的空间，一旦有人闯入这个空间，我们就会感觉不舒服、不自在。",
          ],
        },
      ],
      note: "Thường đi với 就: 一旦……，就……",
    },
    {
      word: "难免",
      title: "Tính từ “khó tránh”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Tính từ, nghĩa là không dễ tránh, không tránh khỏi.",
          examples: [
            "刚开始工作，这样的错误是难免的。",
            "朋友间难免会产生矛盾、误会甚至是伤害。",
            "……作为一个母亲，在自己的亲生女儿和不是亲生的灰姑娘之间，难免会更疼爱自己亲生的女儿，……",
          ],
        },
      ],
      note: "Hay dùng: ……是难免的；难免会……",
    },
    {
      word: "自从",
      title: "Giới từ “từ lúc, từ khi”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Giới từ, biểu thị bắt đầu từ một thời điểm nào đó trong quá khứ.",
          examples: [
            "自从城市出现后，它就成为人类生活的中心。",
            "自从有了长大后成为作家这个理想之后，他每天都坚持写作。",
            "自从我听说了这件事，就开始思考应该如何阅读，除了阅读还应该做什么。",
          ],
        },
      ],
      note: "Mẫu: 自从……（以后/之后），……就……",
    },
    {
      word: "平等 / 公平",
      title: "Phân biệt 平等 và 公平",
      usages: [
        { label: "Điểm giống", explain: "Đều là tính từ, nghĩa gần nhau, có lúc thay được cho nhau.", examples: ["作为一个母亲，……难免会更疼爱自己亲生的女儿，很难完全平等/公平地对待她们。"] },
        { label: "平等", explain: "Nhấn mạnh quyền lợi hoặc đãi ngộ giữa người với người trong xã hội như nhau; thường dùng cho tình huống phổ biến, chung.", examples: ["法律面前人人平等。", "现实社会中，女人与男人有时并不平等。"] },
        { label: "公平", explain: "Nhấn mạnh xử lý việc hợp tình hợp lý, không thiên vị bên nào; có thể dùng cho người hoặc việc cụ thể.", examples: ["我们应当公平竞争。", "我认为公司对这次事情的处理不够公平。"] },
      ],
    },
  ],

  wordChoice: [
    { sentence: "虽然这次的错误有点儿严重，但你应该勇敢地___。", options: W_EX1, answer: "承认" },
    { sentence: "人都是有感情甚至自私的，很难做到任何时候都很___。", options: W_EX1, answer: "客观" },
    { sentence: "你的这个建议很有___，我马上告诉总裁。", options: W_EX1, answer: "价值" },
    { sentence: "他___将会议地点改在上海，因为这次的合作伙伴对我们来说非常重要。", options: W_EX1, answer: "主张" },
    { sentence: "你这种做法太___了，我不能接受！", options: W_EX1, answer: "过分" },
    { sentence: "希望你能给我一个好的___，解释清楚你为什么这么做。", options: W_EX1, answer: "理由" },
    { sentence: "你可以试着___一下思路，可能会快一点解决问题。", options: ["变化", "转变"], answer: "转变" },
    { sentence: "我不同意你的___，我觉得这部电影很不错。", options: ["观点", "观念"], answer: "观点" },
    { sentence: "这次新产品销售得不好的___是宣传推广做得不够。", options: ["原因", "理由"], answer: "原因" },
    { sentence: "他太___了，这样很容易被人骗。", options: ["单调", "单纯"], answer: "单纯" },
    { sentence: "机会对每个人来说都是___的。", options: ["平等", "公平"], answer: "平等" },
    { sentence: "这次比赛很___，没有什么问题。", options: ["平等", "公平"], answer: "公平" },
    { sentence: "作为法官，你做事应该___。", options: ["平等", "公平"], answer: "公平" },
    { sentence: "人生来是___的，人人都有权追求自由和幸福。", options: ["平等", "公平"], answer: "平等" },
    { sentence: "买书的时候我一般会先看看前面的___，这样可以了解书的大概内容。", options: W_EXT, answer: "目录" },
    { sentence: "这不是一篇研究型的文章，算不上是一篇___。", options: W_EXT, answer: "论文" },
    { sentence: "这个地方的___用错了，这是书的名字，应该用书名号。", options: W_EXT, answer: "标点" },
    { sentence: "你现在完全是在说___，解决不了问题！", options: W_EXT, answer: "废话" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [7, 3, 1] },
        { vocabId: 5, distractors: [6, 4, 8] },
        { vocabId: 15, distractors: [14, 16, 17] },
        { vocabId: 19, distractors: [18, 20, 21] },
        { vocabId: 22, distractors: [23, 24, 25] },
        { vocabId: 27, distractors: [28, 26, 29] },
        { vocabId: 31, distractors: [32, 33, 30] },
        { vocabId: 11, distractors: [12, 13, 9] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [4, 8, 14, 17, 23, 25, 28, 32],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我们", "需要", "转变", "自己的", "观念", "。"], answer: "我们需要转变自己的观念。", vi: "Chúng ta cần thay đổi quan niệm của mình." },
        { tokens: ["他们", "十分重视", "和学生", "一起", "讨论问题", "。"], answer: "他们十分重视和学生一起讨论问题。", vi: "Họ rất coi trọng việc cùng học sinh thảo luận vấn đề." },
        { tokens: ["刚开始工作，", "这样的错误", "是", "难免的", "。"], answer: "刚开始工作，这样的错误是难免的。", vi: "Mới bắt đầu đi làm, sai sót như vậy là khó tránh." },
        { tokens: ["这种行为", "与道德", "没有", "必然的", "关系", "。"], answer: "这种行为与道德没有必然的关系。", vi: "Hành vi này không có quan hệ tất yếu với đạo đức." },
        { tokens: ["只有", "这一部分", "是", "不够的", "。"], answer: "只有这一部分是不够的。", vi: "Chỉ có phần này thì chưa đủ." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (đoạn 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Đoạn 1–2 · Quan niệm của phụ huynh và câu chuyện Lọ Lem", text: "很多家长可能{{c1}}{{c2}}阅读的作用，觉得多读书就能够把{{c3}}写得特别好。这个{{c4}}是不{{c5}}、不{{c6}}的，我们需要转变自己的{{c7}}。老师问同学们：灰姑娘{{c8}}进了这个王宫，一切幸福都{{c9}}她之后，这时她应该怎样{{c10}}她的继母？" },
      ],
      answers: { c1: "过分", c2: "强调", c3: "作文", c4: "观点", c5: "客观", c6: "全面", c7: "观念", c8: "一旦", c9: "属于", c10: "对待" },
      bank: ["过分", "强调", "作文", "观点", "客观", "全面", "观念", "一旦", "属于", "对待", "转变", "交换", "自从"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (đoạn 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về kết luận của thảo luận và suy nghĩ của tác giả.",
      passages: [
        { title: "Đoạn 3–4 · Kết luận và suy nghĩ", text: "因为这是一种情感{{e1}}。一个已经拥有{{e2}}幸福的人，应该原谅和理解那些伤害过自己的人。另外还要{{e3}}人性中一些先天的不{{e4}}，作为一个母亲，{{e5}}会更{{e6}}自己亲生的女儿，很难完全{{e7}}地对待她们。{{e8}}我听说了这件事，就开始思考应该如何阅读。老师甚至把人性的{{e9}}判断，都给了孩子们。如果只是{{e10}}地主张阅读而不强调思考，那是片面的。" },
      ],
      answers: { e1: "交换", e2: "巨大", e3: "承认", e4: "完美", e5: "难免", e6: "疼爱", e7: "平等", e8: "自从", e9: "价值", e10: "单纯" },
      bank: ["交换", "巨大", "承认", "完美", "难免", "疼爱", "平等", "自从", "价值", "单纯", "公平", "单调", "理由"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "这个观点是不客观、不全面的。", vi: "Quan điểm này không khách quan, không toàn diện.", keywords: ["quan điểm", "khách quan", "toàn diện"] },
        { zh: "朋友间难免会产生矛盾。", vi: "Giữa bạn bè khó tránh khỏi nảy sinh mâu thuẫn.", keywords: ["bạn bè", "khó tránh", "mâu thuẫn"] },
        { zh: "法律面前人人平等。", vi: "Trước pháp luật mọi người đều bình đẳng.", keywords: ["pháp luật", "bình đẳng"] },
        { zh: "自从有了这个理想，他每天都坚持写作。", vi: "Từ khi có lý tưởng này, ngày nào anh ấy cũng kiên trì viết.", keywords: ["từ khi", "lý tưởng", "kiên trì", "viết"] },
        { zh: "如果只是单纯地主张阅读而不强调思考，那是片面的。", vi: "Nếu chỉ đơn thuần chủ trương đọc mà không nhấn mạnh suy nghĩ thì đó là phiến diện.", keywords: ["đơn thuần", "đọc", "suy nghĩ", "phiến diện"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Mới bắt đầu đi làm, sai sót như vậy là khó tránh.", answers: ["刚开始工作，这样的错误是难免的。"] },
        { vi: "Bạn nên dũng cảm thừa nhận sai lầm.", answers: ["你应该勇敢地承认错误。"] },
        { vi: "Chúng ta nên cạnh tranh công bằng.", answers: ["我们应当公平竞争。", "我们应该公平竞争。"] },
        { vi: "Tôi không đồng ý với quan điểm của bạn.", answers: ["我不同意你的观点。"] },
        { vi: "Đề xuất này của bạn rất có giá trị.", answers: ["你的这个建议很有价值。", "你这个建议很有价值。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "作者认为多读书就一定能把作文写好。", a: false },
        { q: "那位美国老师十分重视和学生一起讨论问题。", a: true },
        { q: "他们讨论过灰姑娘的故事。", a: true },
        { q: "讨论的结论是，灰姑娘应该报复伤害过她的人。", a: false },
        { q: "作者认为继母更疼爱自己亲生的女儿是难免的。", a: true },
        { q: "作者认为继母的行为和道德有必然的关系。", a: false },
        { q: "作者认为只主张阅读而不强调思考是片面的。", a: true },
        { q: "作者认为“知识”只要有“知感”就够了。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我们需要转变自己的观念。",
        "这样的错误是难免的。",
        "法律面前人人平等。",
        "你应该勇敢地承认错误。",
        "这个建议很有价值。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请以“假如我是灰姑娘”为题，谈一谈你的看法。 (Hãy viết về chủ đề “Nếu tôi là Lọ Lem”.)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 22 (一旦, 难免, 自从, 平等/公平).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["一旦", "难免", "自从", "平等", "公平"],
      minGrammar: 2,
      sample: "假如我是灰姑娘，一旦进了王宫，拥有了巨大的幸福，我会原谅继母和两个姐姐。自从我的母亲去世以后，继母对我很不好，让我做很多家务，我心里难免有些难过。可是我现在明白了，人性本来就不是完美的，一个母亲更疼爱自己亲生的女儿，也是有理由的。虽然她没有平等地对待我，但我不想过分地责备她。我会邀请她们来王宫做客，和她们交换想法，努力转变我们之间的关系。我相信，理解和原谅比报复更有价值。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 平等 / 公平", points: 6,
      subtitle: "Chọn 平等 hoặc 公平 cho mỗi chỗ trống.",
      grammarWord: "平等 / 公平",
      options: ["平等", "公平"],
      items: [
        { q: "机会对每个人来说都是___的。", answers: ["平等"] },
        { q: "这次比赛很___，没有什么问题。", answers: ["公平"] },
        { q: "作为法官，你做事应该___。", answers: ["公平"] },
        { q: "人生来是___的，人人都有权追求自由和幸福。", answers: ["平等"] },
        { q: "法律面前人人___。", answers: ["平等"] },
        { q: "我们应当___竞争。", answers: ["公平"] },
        { q: "现实社会中，女人与男人有时并不___。", answers: ["平等"] },
        { q: "我认为公司对这次事情的处理不够___。", answers: ["公平"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 一旦 / 自从", points: 6,
      subtitle: "Chọn 一旦 hoặc 自从 cho mỗi chỗ trống.",
      grammarWord: "一旦 / 自从",
      options: ["一旦", "自从"],
      items: [
        { q: "女人___做了母亲，就变得矛盾了。", answers: ["一旦"] },
        { q: "___城市出现后，它就成为人类生活的中心。", answers: ["自从"] },
        { q: "___有人闯入这个空间，我们就会感觉不舒服。", answers: ["一旦"] },
        { q: "___有了这个理想之后，他每天都坚持写作。", answers: ["自从"] },
        { q: "___我听说了这件事，就开始思考应该如何阅读。", answers: ["自从"] },
        { q: "天冷了，多穿点儿，___感冒就麻烦了。", answers: ["一旦"] },
        { q: "___我来中国以后，我的汉语水平提高了很多。", answers: ["自从"] },
        { q: "这个秘密___被别人知道，后果会很严重。", answers: ["一旦"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 难免", points: 5,
      subtitle: "Điền từ vào chỗ trống (难免 – khó tránh).",
      grammarWord: "难免",
      items: [
        { q: "刚开始工作，这样的错误是___的。", answers: ["难免"] },
        { q: "朋友间___会产生矛盾、误会甚至是伤害。", answers: ["难免"] },
        { q: "作为一个母亲，___会更疼爱自己亲生的女儿。", answers: ["难免"] },
        { q: "小孩子___淘气，你别太生气了。", answers: ["难免"] },
        { q: "刚刚退休的老人___会觉得有些不习惯。", answers: ["难免"] },
        { q: "马上就要考试了，紧张是___的。", answers: ["难免"] },
        { q: "第一次做饭，做得不好也是___的。", answers: ["难免"] },
        { q: "人在国外生活，___会想家。", answers: ["难免"] },
      ],
    },
  ],
};
