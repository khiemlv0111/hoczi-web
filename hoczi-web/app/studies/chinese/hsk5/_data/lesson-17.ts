import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第17课 在最美好的时刻离开 (Rời khỏi vào thời khắc tốt đẹp nhất)
// Nguồn: Giáo trình chuẩn HSK5 tập 1, trang 154–161 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["度过", "集中", "体会", "推荐", "运用", "争取"];
const W_EXT = ["诊断", "病毒", "传染", "寿命"];

export const lesson17: Lesson = {
  level: "hsk5",
  no: 17,
  slug: "bai-17",
  zh: "在最美好的时刻离开",
  pinyin: "Zài zuì měihǎo de shíkè líkāi",
  vi: "Rời khỏi vào thời khắc tốt đẹp nhất",
  en: "Leave at the Best Moment",
  topic: "修身养性 · Tu thân dưỡng tính",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 事物、迅速、深刻、戏剧、投入、服装、美术、以、良好、争取、忽视、魅力、糟糕、婚礼、等于、度过、告别、平常、依然、推荐、评价、主持、运用、宁可、集中、体会…",
    "Nắm cách kết hợp: 争取 + 时间/机会/胜利; 主持 + 会议/工作; 深刻的 + 印象/记忆/道理; 迅速（地）+ 提高/产生/做出反应; 灵活地/正确地 + 运用; 集中在/到……",
    "Hiểu và dùng được 以 (giới từ, liên từ)、平常、宁可; phân biệt 忽视 và 轻视.",
    "Đọc hiểu bài khóa về “quy luật đỉnh – kết” (峰终定律), kể lại bằng từ vựng đã học.",
    "Thảo luận về hôn lễ, viết đoạn văn 「婚礼」.",
    "Nắm 10 từ mở rộng chủ đề 医务 (y tế 2).",
  ],

  warmUp: [
    { zh: "请看下面的图片，试着找出本课生词中跟它们有关的词语。（生词：戏剧、服装、化妆、开幕式……）", vi: "Nhìn hình (diễn viên kinh kịch, lễ khai mạc đại hội), thử tìm trong bài các từ mới liên quan (kịch, trang phục, hóa trang, lễ khai mạc…)." },
    { zh: "在你小时候，长辈们说过什么让你印象最深刻的话？请给老师和同学们讲一讲。", vi: "Khi bạn còn nhỏ, người lớn đã từng nói câu gì khiến bạn ấn tượng sâu sắc nhất? Hãy kể cho thầy cô và các bạn nghe." },
  ],

  vocab: [
    { id: 1, han: "事物", py: "shìwù", pos: "dt.", meaning: "sự vật", example: "我们对事物的记忆仅在高峰和结尾。", exampleVi: "Ký ức của chúng ta về sự vật chỉ nằm ở đỉnh điểm và phần kết." },
    { id: 2, han: "高峰", py: "gāofēng", pos: "dt.", meaning: "đỉnh cao, cao điểm", example: "上下班高峰的时候，地铁里人特别多。", exampleVi: "Giờ cao điểm đi làm và tan ca, tàu điện ngầm rất đông người." },
    { id: 3, han: "终点", py: "zhōngdiǎn", pos: "dt.", meaning: "điểm cuối cùng, điểm kết thúc", example: "高峰之后，终点出现得越迅速，这件事留给我们的印象就越深刻。", exampleVi: "Sau đỉnh điểm, điểm kết thúc xuất hiện càng nhanh thì sự việc để lại ấn tượng càng sâu sắc." },
    { id: 4, han: "迅速", py: "xùnsù", pos: "tt.", meaning: "nhanh chóng", example: "事情发生后，领导迅速采取了措施。", exampleVi: "Sau khi sự việc xảy ra, lãnh đạo nhanh chóng áp dụng biện pháp." },
    { id: 5, han: "深刻", py: "shēnkè", pos: "tt.", meaning: "sâu sắc", example: "这次旅行给我留下了深刻的印象。", exampleVi: "Chuyến du lịch này để lại cho tôi ấn tượng sâu sắc." },
    { id: 6, han: "戏剧", py: "xìjù", pos: "dt.", meaning: "kịch, vở tuồng", example: "为了一场戏剧演出，我们会投入很多时间。", exampleVi: "Vì một buổi diễn kịch, chúng ta sẽ bỏ ra rất nhiều thời gian." },
    { id: 7, han: "投入", py: "tóurù", pos: "đgt./dt./tt.", meaning: "đưa vào, bỏ vốn; kinh phí đầu tư; xuất thần", example: "他工作非常投入。", exampleVi: "Anh ấy làm việc rất say mê." },
    { id: 8, han: "服装", py: "fúzhuāng", pos: "dt.", meaning: "trang phục", example: "演出前要准备服装、化妆、道具。", exampleVi: "Trước buổi diễn phải chuẩn bị trang phục, hóa trang, đạo cụ." },
    { id: 9, han: "化妆", py: "huà zhuāng", pos: "đgt.", meaning: "trang điểm", example: "她化妆化了一个小时。", exampleVi: "Cô ấy trang điểm mất một tiếng." },
    { id: 10, han: "道具", py: "dàojù", pos: "dt.", meaning: "đạo cụ", example: "这些道具都是演员自己做的。", exampleVi: "Những đạo cụ này đều do diễn viên tự làm." },
    { id: 11, han: "美术", py: "měishù", pos: "dt.", meaning: "nghệ thuật tạo hình, mỹ thuật", example: "舞台美术对演出效果很重要。", exampleVi: "Mỹ thuật sân khấu rất quan trọng với hiệu quả buổi diễn." },
    { id: 12, han: "以", py: "yǐ", pos: "liên./giới.", meaning: "để, nhằm; dùng, bằng", example: "虽然我们已经老了，但还要坚持学习，以适应社会的发展。", exampleVi: "Tuy chúng ta đã già, nhưng vẫn phải kiên trì học tập để thích ứng với sự phát triển của xã hội." },
    { id: 13, han: "良好", py: "liánghǎo", pos: "tt.", meaning: "tốt đẹp, tốt", example: "我们要创造良好的效果。", exampleVi: "Chúng ta phải tạo ra hiệu quả tốt." },
    { id: 14, han: "争取", py: "zhēngqǔ", pos: "đgt.", meaning: "cố gắng, tranh thủ, giành", example: "机会要靠自己去争取。", exampleVi: "Cơ hội phải tự mình đi giành lấy." },
    { id: 15, han: "忽视", py: "hūshì", pos: "đgt.", meaning: "xem nhẹ, không chú ý", example: "我们常常忽视结束退场时的准备。", exampleVi: "Chúng ta thường xem nhẹ việc chuẩn bị lúc kết thúc rời sân khấu." },
    { id: 16, han: "魅力", py: "mèilì", pos: "dt.", meaning: "sức hấp dẫn", example: "演出开始时人们认为很有魅力。", exampleVi: "Lúc buổi diễn bắt đầu, mọi người thấy rất hấp dẫn." },
    { id: 17, han: "糟糕", py: "zāogāo", pos: "tt.", meaning: "tồi tệ, hỏng bét", example: "糟糕的结局会给人留下难以忘记的坏印象。", exampleVi: "Một kết cục tồi tệ sẽ để lại ấn tượng xấu khó quên." },
    { id: 18, han: "婚礼", py: "hūnlǐ", pos: "dt.", meaning: "lễ cưới", example: "有一次，我去参加一个婚礼。", exampleVi: "Có một lần tôi đi dự một đám cưới." },
    { id: 19, han: "等于", py: "děngyú", pos: "đgt.", meaning: "bằng", example: "三个小时快乐减一个小时无聊等于两个小时快乐。", exampleVi: "Ba giờ vui vẻ trừ một giờ nhàm chán bằng hai giờ vui vẻ." },
    { id: 20, han: "度过", py: "dùguò", pos: "đgt.", meaning: "trải qua", example: "我在外公外婆身边度过了美好的童年。", exampleVi: "Tôi đã trải qua tuổi thơ tươi đẹp bên ông bà ngoại." },
    { id: 21, han: "告别", py: "gàobié", pos: "đgt.", meaning: "tạm biệt, từ biệt", example: "我只在那里待一个小时，早早地告别。", exampleVi: "Tôi chỉ ở đó một tiếng rồi sớm chào tạm biệt." },
    { id: 22, han: "平常", py: "píngcháng", pos: "tt./dt.", meaning: "bình thường; ngày thường", example: "他平常总是来得很早，今天却迟到了。", exampleVi: "Ngày thường anh ấy luôn đến rất sớm, hôm nay lại đến muộn." },
    { id: 23, han: "依然", py: "yīrán", pos: "phó.", meaning: "vẫn, vẫn như cũ", example: "十几年过去了，她依然那么美丽。", exampleVi: "Mười mấy năm trôi qua, cô ấy vẫn đẹp như vậy." },
    { id: 24, han: "推荐", py: "tuījiàn", pos: "đgt.", meaning: "giới thiệu, tiến cử", example: "一些现代营养学专家常常向大家推荐“餐餐有蔬菜，每天有水果”。", exampleVi: "Một số chuyên gia dinh dưỡng hiện đại thường khuyên mọi người “bữa nào cũng có rau, ngày nào cũng có trái cây”." },
    { id: 25, han: "淋漓尽致", py: "línlí jìnzhì", pos: "tt.", meaning: "tinh tế, triệt để", example: "在前半个小时就把剧情的创造力表现得淋漓尽致。", exampleVi: "Ngay nửa tiếng đầu đã thể hiện trọn vẹn sức sáng tạo của tình tiết." },
    { id: 26, han: "评价", py: "píngjià", pos: "đgt./dt.", meaning: "đánh giá; sự đánh giá", example: "观众对这部电影的评价肯定不好。", exampleVi: "Đánh giá của khán giả về bộ phim này chắc chắn không tốt." },
    { id: 27, han: "烂", py: "làn", pos: "tt.", meaning: "dở, tệ, thối rữa, rách nát", example: "甚至会说这是一部“烂片”。", exampleVi: "Thậm chí còn nói đây là một “phim dở”." },
    { id: 28, han: "主持", py: "zhǔchí", pos: "đgt./dt.", meaning: "chủ trì; người chủ trì", example: "今天的会议由王经理主持。", exampleVi: "Cuộc họp hôm nay do giám đốc Vương chủ trì." },
    { id: 29, han: "运用", py: "yùnyòng", pos: "đgt.", meaning: "vận dụng, áp dụng", example: "学知识不能死记硬背，要懂得灵活地运用。", exampleVi: "Học kiến thức không được học vẹt, phải biết vận dụng linh hoạt." },
    { id: 30, han: "开幕式", py: "kāimùshì", pos: "dt.", meaning: "lễ khai mạc", example: "奥运会的开幕式非常精彩。", exampleVi: "Lễ khai mạc Thế vận hội vô cùng đặc sắc." },
    { id: 31, han: "宁可", py: "nìngkě", pos: "phó.", meaning: "thà rằng, thà", example: "作为母亲，她宁可自己累一点儿，也不想委屈了孩子。", exampleVi: "Là mẹ, bà thà mình mệt một chút chứ không muốn con chịu thiệt." },
    { id: 32, han: "集中", py: "jízhōng", pos: "đgt./tt.", meaning: "tập trung; chăm chú", example: "你复习时要集中注意力，效果才会好。", exampleVi: "Khi ôn bài bạn phải tập trung chú ý thì hiệu quả mới tốt." },
    { id: 33, han: "体会", py: "tǐhuì", pos: "đgt./dt.", meaning: "hiểu rõ, nhận thức rõ; nhận thức", example: "我刚开始学滑雪的时候，最大的体会就是要放松。", exampleVi: "Lúc mới học trượt tuyết, điều tôi thấm thía nhất là phải thả lỏng." },
    { id: 34, han: "诊断", py: "zhěnduàn", pos: "đgt.", meaning: "chẩn đoán", example: "医生还在为他诊断病情，请耐心地等待。", exampleVi: "Bác sĩ vẫn đang chẩn đoán bệnh cho anh ấy, xin kiên nhẫn chờ đợi.", group: "extended" },
    { id: 35, han: "手术", py: "shǒushù", pos: "dt.", meaning: "phẫu thuật", example: "他的手术很成功。", exampleVi: "Ca phẫu thuật của anh ấy rất thành công.", group: "extended" },
    { id: 36, han: "血", py: "xiě/xuè", pos: "dt.", meaning: "máu", example: "他的手流血了。", exampleVi: "Tay anh ấy chảy máu rồi.", group: "extended" },
    { id: 37, han: "肌肉", py: "jīròu", pos: "dt.", meaning: "cơ bắp", example: "经常运动的人肌肉很发达。", exampleVi: "Người thường xuyên vận động có cơ bắp rất phát triển.", group: "extended" },
    { id: 38, han: "骨头", py: "gǔtou", pos: "dt.", meaning: "xương", example: "他摔了一跤，骨头断了。", exampleVi: "Anh ấy ngã một cú, gãy xương rồi.", group: "extended" },
    { id: 39, han: "胃", py: "wèi", pos: "dt.", meaning: "dạ dày", example: "我胃不舒服，不想吃东西。", exampleVi: "Tôi khó chịu dạ dày, không muốn ăn gì.", group: "extended" },
    { id: 40, han: "心脏", py: "xīnzàng", pos: "dt.", meaning: "tim", example: "爷爷的心脏不太好。", exampleVi: "Tim của ông nội không được tốt lắm.", group: "extended" },
    { id: 41, han: "病毒", py: "bìngdú", pos: "dt.", meaning: "vi-rút", example: "我的电脑速度越来越慢了，是不是中了病毒？", exampleVi: "Máy tính của tôi ngày càng chậm, có phải bị nhiễm vi-rút không?", group: "extended" },
    { id: 42, han: "传染", py: "chuánrǎn", pos: "đgt.", meaning: "lây nhiễm, truyền nhiễm", example: "这是一种新型的传染病，可能会在人和动物之间传播。", exampleVi: "Đây là một bệnh truyền nhiễm kiểu mới, có thể lây lan giữa người và động vật.", group: "extended" },
    { id: 43, han: "寿命", py: "shòumìng", pos: "dt.", meaning: "tuổi thọ", example: "海龟的寿命最长可达150多年。", exampleVi: "Tuổi thọ của rùa biển dài nhất có thể hơn 150 năm.", group: "extended" },
  ],

  text: {
    title: "课文 在最美好的时刻离开",
    paragraphs: [
      {
        zh: "我奶奶说过：“人们应该在最美好的时候离开。”因为这个认知而获得诺贝尔奖的，不是我奶奶，而是心理学家丹尼尔·卡内曼。他将这一现象命名为“峰终定律”：我们对事物的记忆仅在高峰和结尾，而事情的经过对记忆几乎没有影响。高峰之后，终点出现得越迅速，这件事留给我们的印象就越深刻。",
        vi: "Bà tôi từng nói: “Người ta nên rời đi vào lúc tốt đẹp nhất.” Người nhận giải Nobel nhờ nhận thức này không phải bà tôi mà là nhà tâm lý học Daniel Kahneman. Ông đặt tên hiện tượng này là “quy luật đỉnh – kết”: ký ức của chúng ta về sự vật chỉ nằm ở đỉnh điểm và phần kết, còn diễn biến sự việc hầu như không ảnh hưởng đến ký ức. Sau đỉnh điểm, điểm kết thúc đến càng nhanh thì sự việc để lại cho chúng ta ấn tượng càng sâu sắc.",
        questions: ["什么是“峰终定律”？", "请用重点词语复述：事物、迅速、深刻"],
      },
      {
        zh: "大部分人不理解这一定律。比如说为了一场戏剧演出，我们会投入很多时间，准备服装、化妆、道具、舞台美术，以创造良好的效果，争取给观众留下一个好的印象，却常常忽视结束退场时的准备。演出开始时人们认为很有魅力，但是糟糕的结局会给人留下难以忘记的坏印象。",
        vi: "Phần lớn mọi người không hiểu quy luật này. Chẳng hạn vì một buổi diễn kịch, chúng ta bỏ ra rất nhiều thời gian chuẩn bị trang phục, hóa trang, đạo cụ, mỹ thuật sân khấu để tạo hiệu quả tốt, cố gắng để lại ấn tượng đẹp cho khán giả, nhưng lại thường xem nhẹ việc chuẩn bị khi kết thúc rời sân khấu. Lúc buổi diễn mở màn, người ta thấy rất hấp dẫn, nhưng một kết cục tồi tệ sẽ để lại ấn tượng xấu khó quên.",
        questions: ["准备一场戏剧演出时，人们常常忽视什么？", "请用重点词语复述：戏剧、以、争取、忽视、糟糕"],
      },
      {
        zh: "有一次，我去参加一个婚礼，前三个小时感觉都很好，只在最后一个小时感到无聊。三个小时快乐减一个小时无聊等于两个小时快乐，也就是说，我愉快地度过了两个小时。但是，我的记忆并不是这样计算的。如果我参加另外一次活动，只在那里待一个小时，早早地告别，我却享受了满满60分钟的快乐。与第一次相比，第二次的聚会留给我的印象更为美好。",
        vi: "Có lần tôi đi dự một đám cưới, ba tiếng đầu đều thấy rất vui, chỉ tiếng cuối cùng là thấy chán. Ba tiếng vui trừ một tiếng chán bằng hai tiếng vui, nghĩa là tôi đã trải qua hai tiếng vui vẻ. Nhưng ký ức của tôi không tính như vậy. Nếu tôi dự một hoạt động khác, chỉ ở đó một tiếng rồi sớm chào ra về, tôi lại được tận hưởng trọn 60 phút vui vẻ. So với lần đầu, buổi gặp mặt thứ hai để lại cho tôi ấn tượng tốt đẹp hơn.",
        questions: ["作者参加婚礼的感受怎么样？", "为什么第二次的聚会留给作者的印象更美好？", "请用重点词语复述：婚礼、等于、度过、告别"],
      },
      {
        zh: "看电影也是如此。一部电影，开始虽然剧情平平常常，如果最后半个小时能使我们感动，我们依然会向别人推荐它。相反，如果在前半个小时就把剧情的创造力表现得淋漓尽致，结尾却非常普通，那么，观众对这部电影的评价就肯定不好，甚至会说这是一部“烂片”。",
        vi: "Xem phim cũng vậy. Một bộ phim, tuy mở đầu tình tiết bình thường, nhưng nếu nửa tiếng cuối làm chúng ta cảm động thì chúng ta vẫn sẽ giới thiệu nó cho người khác. Ngược lại, nếu ngay nửa tiếng đầu đã thể hiện trọn vẹn sức sáng tạo của tình tiết mà phần kết lại rất bình thường, thì đánh giá của khán giả về bộ phim chắc chắn không tốt, thậm chí còn bảo đó là một “phim dở”.",
        questions: ["什么样的电影我们依然会向别人推荐？", "请用重点词语复述：平常、依然、评价"],
      },
      {
        zh: "作为电视节目主持人，我在工作中常常会运用“峰终定律”。例如，做节目时，与开幕式相比，我们宁可把更多的精力集中在闭幕式上，这样可以加强观众对节目的印象。虽然很多人并不了解“峰终定律”，但是，他们能从经验中体会这种做法的重要性。",
        vi: "Là người dẫn chương trình truyền hình, trong công việc tôi thường vận dụng “quy luật đỉnh – kết”. Ví dụ, khi làm chương trình, so với lễ khai mạc, chúng tôi thà dồn nhiều tâm sức hơn vào lễ bế mạc, như vậy có thể tăng cường ấn tượng của khán giả về chương trình. Tuy nhiều người không hiểu “quy luật đỉnh – kết”, nhưng họ có thể từ kinh nghiệm mà nhận ra tầm quan trọng của cách làm này.",
        questions: ["作者在工作中怎样运用“峰终定律”？", "请用重点词语复述：主持、运用、宁可、体会"],
      },
    ],
    notes: [
      "诺贝尔奖 (Nuòbèi'ěr Jiǎng): giải Nobel. 丹尼尔·卡内曼 (Dānní'ěr · Kǎnèimàn): Daniel Kahneman.",
      "峰终定律 (Fēngzhōng Dìnglǜ): Quy luật cao điểm – điểm cuối cùng (Peak–End rule).",
      "Bài khóa cải biên từ 《广州日报》, tác giả 埃卡特·冯·希施豪森, 陈晓川 dịch.",
    ],
  },

  grammar: [
    {
      word: "以",
      title: "Giới từ và liên từ “以”",
      usages: [
        {
          label: "Giới từ – “用、拿、凭借”",
          explain: "Thường dùng trong văn viết, nghĩa là dùng, lấy, dựa vào.",
          examples: [
            "同年4月，（微信）以英文名WeChat正式进入国际市场。",
            "……学生分为甲乙两队，以足球为比赛工具向篮内投，按得分多少决定输赢。",
          ],
        },
        {
          label: "Liên từ – chỉ mục đích",
          explain: "Thường dùng trong văn viết, biểu thị mục đích (để, nhằm).",
          examples: [
            "虽然我们已经老了，但还要坚持学习，以适应社会的发展。",
            "比如说为了一场戏剧演出，我们会投入很多时间，准备服装、化妆、道具、舞台美术，以创造良好的效果，……",
          ],
        },
      ],
    },
    {
      word: "平常",
      title: "Tính từ / danh từ “平常”",
      usages: [
        { label: "Tính từ", explain: "Biểu thị bình thường, không có gì đặc biệt.", examples: ["对小王来说，今天是一个不平常的日子，因为他今天第一天上班。", "一部电影，开始虽然剧情平平常常，如果最后半个小时能使我们感动，我们依然会向别人推荐它。"] },
        { label: "Danh từ – “平时”", explain: "Nghĩa là ngày thường, lúc bình thường.", examples: ["他平常总是来得很早，今天却迟到了。", "校长又告诉老师们，对待这些孩子，要像平常一样，不要让孩子或家长知道他们是被选出来的。"] },
      ],
    },
    {
      word: "宁可",
      title: "Phó từ “thà rằng”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Biểu thị sau khi so sánh, chọn phương án tương đối có lợi hơn.",
          examples: [
            "作为母亲，她宁可自己累一点儿，也不想委屈了孩子。",
            "为什么大家宁可挤成一团，也不去没人的那边？",
            "……做节目时，与开幕式相比，我们宁可把更多的精力集中在闭幕式上，……",
          ],
        },
      ],
      note: "Mẫu thường gặp: 宁可……，也不/也要……",
    },
    {
      word: "忽视 / 轻视",
      title: "Phân biệt 忽视 và 轻视",
      usages: [
        { label: "Điểm giống", explain: "Đều biểu thị không chú ý, không coi trọng; có câu thay được cho nhau nhưng ý nhấn mạnh khác.", examples: ["他只注重理论，忽视/轻视实践，所以失败了。"] },
        { label: "忽视", explain: "Nhấn mạnh không nghĩ tới, không để ý; thái độ có thể vô ý cũng có thể cố ý.", examples: ["他忙得忽视了去医院看病。", "我们常常忽视结束退场时的准备，……"] },
        { label: "轻视", explain: "Nhấn mạnh coi thường, xem nhẹ; thái độ thường là cố ý hoặc có chọn lọc.", examples: ["你可别轻视他，他看起来很平常，其实很能干。", "虽然这是一次小考，你也不能轻视，要好好复习。"] },
      ],
    },
  ],

  wordChoice: [
    { sentence: "我刚开始学滑雪的时候，最大的___就是要放松，越紧张越容易摔倒。", options: W_EX1, answer: "体会" },
    { sentence: "学知识不能死记硬背，要懂得灵活地___。", options: W_EX1, answer: "运用" },
    { sentence: "你复习时要___注意力，效果才会好。", options: W_EX1, answer: "集中" },
    { sentence: "一些现代营养学专家常常向大家___“餐餐有蔬菜，每天有水果”。", options: W_EX1, answer: "推荐" },
    { sentence: "我在外公外婆身边___了美好的童年。", options: W_EX1, answer: "度过" },
    { sentence: "机会要靠自己去___。", options: W_EX1, answer: "争取" },
    { sentence: "大家要迅速地熟悉新产品，___更好地向顾客推广。", options: ["用", "以"], answer: "以" },
    { sentence: "这次旅行给我留下了___的印象。", options: ["深", "深刻"], answer: "深刻" },
    { sentence: "这部电影很___，我觉得没必要去看。", options: ["平常", "平时"], answer: "平常" },
    { sentence: "他被___为本校今年的十大“优秀毕业生”之一。", options: ["评价", "评"], answer: "评" },
    { sentence: "以前我们___了教育问题，现在要赶上去。", options: ["忽视", "轻视"], answer: "忽视" },
    { sentence: "我们过多地看电视、玩手机，___了家人之间的交流。", options: ["忽视", "轻视"], answer: "忽视" },
    { sentence: "虽然这是一份平常的工作，你也不能___，要认真做好。", options: ["忽视", "轻视"], answer: "轻视" },
    { sentence: "你不要因为他是小孩子就___他。", options: ["忽视", "轻视"], answer: "轻视" },
    { sentence: "医生还在为他___病情，请耐心地等待。", options: W_EXT, answer: "诊断" },
    { sentence: "我的电脑速度越来越慢了，是不是中了___？", options: W_EXT, answer: "病毒" },
    { sentence: "这是一种新型的___病，可能会在人和动物之间传播。", options: W_EXT, answer: "传染" },
    { sentence: "海龟的___最长可达150多年，是动物中当之无愧的老寿星。", options: W_EXT, answer: "寿命" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 4, distractors: [5, 3, 2] },
        { vocabId: 8, distractors: [9, 10, 11] },
        { vocabId: 14, distractors: [13, 15, 16] },
        { vocabId: 17, distractors: [27, 22, 23] },
        { vocabId: 20, distractors: [21, 19, 18] },
        { vocabId: 24, distractors: [26, 28, 29] },
        { vocabId: 31, distractors: [32, 33, 30] },
        { vocabId: 41, distractors: [42, 43, 34] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 6, 7, 16, 18, 23, 28, 30],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我们对事物的记忆", "仅", "在", "高峰和结尾", "。"], answer: "我们对事物的记忆仅在高峰和结尾。", vi: "Ký ức của chúng ta về sự vật chỉ nằm ở đỉnh điểm và phần kết." },
        { tokens: ["我们", "常常", "忽视", "结束退场时的准备", "。"], answer: "我们常常忽视结束退场时的准备。", vi: "Chúng ta thường xem nhẹ việc chuẩn bị khi kết thúc rời sân khấu." },
        { tokens: ["糟糕的结局", "会给人", "留下", "难以忘记的坏印象", "。"], answer: "糟糕的结局会给人留下难以忘记的坏印象。", vi: "Kết cục tồi tệ sẽ để lại ấn tượng xấu khó quên." },
        { tokens: ["我们", "依然", "会", "向别人", "推荐它", "。"], answer: "我们依然会向别人推荐它。", vi: "Chúng ta vẫn sẽ giới thiệu nó cho người khác." },
        { tokens: ["我们", "宁可", "把更多的精力", "集中在", "闭幕式上", "。"], answer: "我们宁可把更多的精力集中在闭幕式上。", vi: "Chúng tôi thà dồn nhiều tâm sức hơn vào lễ bế mạc." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (đoạn 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Đoạn 1–2 · Quy luật đỉnh – kết", text: "我们对{{c1}}的记忆仅在高峰和结尾。高峰之后，终点出现得越{{c2}}，这件事留给我们的印象就越{{c3}}。比如说为了一场{{c4}}演出，我们会{{c5}}很多时间，准备{{c6}}、化妆、道具、舞台美术，{{c7}}创造良好的效果，{{c8}}给观众留下一个好的印象，却常常{{c9}}结束退场时的准备。{{c10}}的结局会给人留下难以忘记的坏印象。" },
      ],
      answers: { c1: "事物", c2: "迅速", c3: "深刻", c4: "戏剧", c5: "投入", c6: "服装", c7: "以", c8: "争取", c9: "忽视", c10: "糟糕" },
      bank: ["事物", "迅速", "深刻", "戏剧", "投入", "服装", "以", "争取", "忽视", "糟糕", "轻视", "魅力", "良好"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (đoạn 3–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về đám cưới, xem phim và làm chương trình.",
      passages: [
        { title: "Đoạn 3–5 · Đám cưới, xem phim, làm chương trình", text: "有一次，我去参加一个{{e1}}。三个小时快乐减一个小时无聊{{e2}}两个小时快乐，也就是说，我愉快地{{e3}}了两个小时。如果我只在那里待一个小时，早早地{{e4}}，我却享受了满满60分钟的快乐。一部电影，开始虽然剧情{{e5}}，如果最后半个小时能使我们感动，我们{{e6}}会向别人推荐它。作为电视节目{{e7}}人，我在工作中常常会{{e8}}“峰终定律”。与开幕式相比，我们{{e9}}把更多的精力集中在闭幕式上。他们能从经验中{{e10}}这种做法的重要性。" },
      ],
      answers: { e1: "婚礼", e2: "等于", e3: "度过", e4: "告别", e5: "平常", e6: "依然", e7: "主持", e8: "运用", e9: "宁可", e10: "体会" },
      bank: ["婚礼", "等于", "度过", "告别", "平常", "依然", "主持", "运用", "宁可", "体会", "评价", "推荐", "集中"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "人们应该在最美好的时候离开。", vi: "Người ta nên rời đi vào lúc tốt đẹp nhất.", keywords: ["rời đi", "tốt đẹp nhất"] },
        { zh: "这次旅行给我留下了深刻的印象。", vi: "Chuyến du lịch này để lại cho tôi ấn tượng sâu sắc.", keywords: ["du lịch", "ấn tượng", "sâu sắc"] },
        { zh: "机会要靠自己去争取。", vi: "Cơ hội phải tự mình đi giành lấy.", keywords: ["cơ hội", "tự mình", "giành"] },
        { zh: "十几年过去了，她依然那么美丽。", vi: "Mười mấy năm trôi qua, cô ấy vẫn đẹp như vậy.", keywords: ["năm", "vẫn", "đẹp"] },
        { zh: "作为母亲，她宁可自己累一点儿，也不想委屈了孩子。", vi: "Là mẹ, bà thà mình mệt một chút chứ không muốn con chịu thiệt.", keywords: ["mẹ", "thà", "mệt", "con"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Ngày thường anh ấy luôn đến rất sớm, hôm nay lại đến muộn.", answers: ["他平常总是来得很早，今天却迟到了。"] },
        { vi: "Khi ôn bài bạn phải tập trung chú ý.", answers: ["你复习时要集中注意力。", "复习的时候你要集中注意力。", "你复习的时候要集中注意力。"] },
        { vi: "Ba cộng năm có bằng tám không?", answers: ["三加五等于八吗？"] },
        { vi: "Bạn đừng xem thường anh ấy.", answers: ["你别轻视他。", "你可别轻视他。", "你不要轻视他。"] },
        { vi: "Tôi đã trải qua tuổi thơ tươi đẹp bên ông bà ngoại.", answers: ["我在外公外婆身边度过了美好的童年。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "作者的奶奶因为“峰终定律”获得了诺贝尔奖。", a: false },
        { q: "根据“峰终定律”，事情的经过对记忆几乎没有影响。", a: true },
        { q: "准备戏剧演出时，人们常常忽视结束退场时的准备。", a: true },
        { q: "作者觉得参加婚礼的四个小时都很快乐。", a: false },
        { q: "只待一个小时的聚会留给作者的印象更为美好。", a: true },
        { q: "如果电影开头很精彩，结尾很普通，观众的评价也会很好。", a: false },
        { q: "作者是一名电视节目主持人。", a: true },
        { q: "做节目时，作者更重视开幕式。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "这次旅行给我留下了深刻的印象。",
        "机会要靠自己去争取。",
        "他平常总是来得很早。",
        "你复习时要集中注意力。",
        "她依然那么美丽。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请以“婚礼”为题，谈一谈你参加过的婚礼，或你们国家婚礼的特点，比较一下和中国婚礼有什么相同和不同之处。 (Hãy viết về chủ đề “Hôn lễ”.)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 17 (以, 平常, 宁可, 忽视/轻视).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["以", "平常", "宁可", "忽视", "轻视"],
      minGrammar: 2,
      sample: "去年我参加了一个中国朋友的婚礼，给我留下了深刻的印象。婚礼那天，新娘穿着红色的服装，化了很漂亮的妆。主持人非常幽默，气氛很热闹。平常很安静的新郎在婚礼上唱了一首歌，大家都被感动了。在我们国家，婚礼一般在教堂举行，以白色为主，而中国的婚礼喜欢用红色，以表示吉祥。不过，婚礼的最后一个小时有点儿长，有些客人早早地告别了。我觉得婚礼不要太长，宁可短一点儿，也要在最美好的时刻结束，这样大家的记忆才会更美好。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 忽视 / 轻视", points: 6,
      subtitle: "Chọn 忽视 hoặc 轻视 cho mỗi chỗ trống.",
      grammarWord: "忽视 / 轻视",
      options: ["忽视", "轻视"],
      items: [
        { q: "以前我们___了教育问题，现在要赶上去。", answers: ["忽视"] },
        { q: "我们过多地看电视、玩手机，___了家人之间的交流。", answers: ["忽视"] },
        { q: "虽然这是一份平常的工作，你也不能___，要认真做好。", answers: ["轻视"] },
        { q: "你不要因为他是小孩子就___他。", answers: ["轻视"] },
        { q: "他忙得___了去医院看病。", answers: ["忽视"] },
        { q: "你可别___他，他看起来很平常，其实很能干。", answers: ["轻视"] },
        { q: "我们常常___结束退场时的准备。", answers: ["忽视"] },
        { q: "虽然这是一次小考，你也不能___，要好好复习。", answers: ["轻视"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 宁可", points: 6,
      subtitle: "Điền từ vào chỗ trống (宁可 – thà rằng).",
      grammarWord: "宁可",
      items: [
        { q: "作为母亲，她___自己累一点儿，也不想委屈了孩子。", answers: ["宁可"] },
        { q: "为什么大家___挤成一团，也不去没人的那边？", answers: ["宁可"] },
        { q: "与开幕式相比，我们___把更多的精力集中在闭幕式上。", answers: ["宁可"] },
        { q: "我___多花点儿钱，也要买一个质量好点儿的。", answers: ["宁可"] },
        { q: "我___花钱去餐厅吃，也不想自己做饭。", answers: ["宁可"] },
        { q: "为了把这篇文章写好，他___晚上不睡觉。", answers: ["宁可"] },
        { q: "我___坐火车，也不坐飞机，因为可以看看路上的风景。", answers: ["宁可"] },
        { q: "他___自己吃亏，也不愿意让朋友为难。", answers: ["宁可"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 以 / 平常", points: 5,
      subtitle: "Chọn 以 hoặc 平常 cho mỗi chỗ trống.",
      grammarWord: "以 / 平常",
      options: ["以", "平常"],
      items: [
        { q: "同年4月，微信___英文名WeChat正式进入国际市场。", answers: ["以"] },
        { q: "虽然我们已经老了，但还要坚持学习，___适应社会的发展。", answers: ["以"] },
        { q: "对小王来说，今天是一个不___的日子。", answers: ["平常"] },
        { q: "他___总是来得很早，今天却迟到了。", answers: ["平常"] },
        { q: "大家要迅速地熟悉新产品，___更好地向顾客推广。", answers: ["以"] },
        { q: "___多练习，考试前就不用这么紧张了。", answers: ["平常"] },
        { q: "学生分为甲乙两队，___足球为比赛工具。", answers: ["以"] },
        { q: "这部电影很___，我觉得没必要去看。", answers: ["平常"] },
      ],
    },
  ],
};
