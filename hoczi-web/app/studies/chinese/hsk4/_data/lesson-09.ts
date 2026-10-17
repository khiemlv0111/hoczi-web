import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第9课 阳光总在风雨后 (Sau cơn mưa trời lại sáng)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 110–123 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và bài tập chọn từ lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson09: Lesson = {
  level: "hsk4",
  no: 9,
  slug: "bai-9",
  zh: "阳光总在风雨后",
  pinyin: "Yángguāng zǒng zài fēngyǔ hòu",
  vi: "Sau cơn mưa trời lại sáng",
  en: "There Is Always Sunshine After the Storm",
  topic: "成功 · Thành công",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 坚持、放弃、主意、轻松、随便、正确、理想、勇敢、结果、失败、过程、至少、总结、经历、区别、暂时、面对…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 难道 (câu hỏi tu từ), 通过 (phân biệt 通过 – 经过), 可是, 结果 (danh từ / liên từ), 上 + số lượng (上百、上千).",
    "Đọc hiểu ba đoạn hội thoại về giảm cân, luyện quần vợt, chọn nghề viết văn và hai bài đọc về thất bại – thành công.",
    "Trao đổi quan điểm về thành công, kể lại câu chuyện thành công của một người bằng các cấu trúc đã học.",
    "Nắm các từ mở rộng có chữ 果: 如果、结果、效果.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片：轻松、网球、作家、勇敢、饼干、爱迪生。", vi: "Chọn hình tương ứng với các từ: nhẹ nhàng, quần vợt, nhà văn, dũng cảm, bánh quy, Edison." },
    { zh: "什么是成功？你眼中成功的人是谁？你认为他/她成功的原因是什么？", vi: "Thành công là gì? Người thành công trong mắt bạn là ai (doanh nhân, nhân vật lịch sử, ngôi sao, người bên cạnh)? Theo bạn vì sao họ thành công (làm việc mình thích, rất nỗ lực, may mắn…)?" },
  ],

  vocab: [
    { id: 1, han: "饼干", py: "bǐnggān", pos: "dt.", meaning: "bánh quy", example: "怎么又买了这么多饼干和巧克力？", exampleVi: "Sao lại mua nhiều bánh quy và sô-cô-la thế này?" },
    { id: 2, han: "难道", py: "nándào", pos: "p.", meaning: "chẳng lẽ (dùng trong câu hỏi tu từ để nhấn mạnh)", example: "难道你不减肥了？", exampleVi: "Chẳng lẽ cậu không giảm cân nữa à?" },
    { id: 3, han: "得", py: "děi", pos: "đgt.", meaning: "phải (động từ năng nguyện)", example: "如果你想减肥，就得少吃东西，而且要多运动。", exampleVi: "Nếu cậu muốn giảm cân thì phải ăn ít đi, hơn nữa phải vận động nhiều." },
    { id: 4, han: "坚持", py: "jiānchí", pos: "đgt.", meaning: "kiên trì, khăng khăng giữ", example: "要想减肥成功，只能坚持，才会慢慢有效果。", exampleVi: "Muốn giảm cân thành công thì chỉ có kiên trì, mới dần dần có hiệu quả." },
    { id: 5, han: "放弃", py: "fàngqì", pos: "đgt.", meaning: "từ bỏ, bỏ", example: "我本来已经打算放弃了。", exampleVi: "Tớ vốn đã định bỏ cuộc rồi." },
    { id: 6, han: "主意", py: "zhǔyi", pos: "dt.", meaning: "ý định, ý kiến", example: "你刚才的话让我改变了主意。", exampleVi: "Lời cậu vừa nói đã khiến tớ đổi ý." },
    { id: 7, han: "网球", py: "wǎngqiú", pos: "dt.", meaning: "quần vợt", example: "你网球打得真好！", exampleVi: "Cậu chơi quần vợt giỏi thật!" },
    { id: 8, han: "国际", py: "guójì", pos: "dt.", meaning: "quốc tế", example: "他还得过那么多国际大奖。", exampleVi: "Anh ấy còn từng đoạt nhiều giải thưởng quốc tế lớn như vậy." },
    { id: 9, han: "轻松", py: "qīngsōng", pos: "tt.", meaning: "nhẹ nhàng, dễ dàng", example: "每次看你比赛，感觉你轻轻松松就赢了。", exampleVi: "Mỗi lần xem cậu thi đấu, cảm giác cậu thắng một cách nhẹ nhàng." },
    { id: 10, han: "赢", py: "yíng", pos: "đgt.", meaning: "thắng", example: "这场比赛我们赢了。", exampleVi: "Trận đấu này chúng tôi thắng rồi." },
    { id: 11, han: "随便", py: "suíbiàn", pos: "tt.", meaning: "tình cờ, tùy tiện", example: "没有人随随便便就能成功的。", exampleVi: "Không ai có thể thành công một cách dễ dàng tùy tiện cả." },
    { id: 12, han: "汗", py: "hàn", pos: "dt.", meaning: "mồ hôi", example: "我没注意到你成功前流下的汗水。", exampleVi: "Tớ không để ý đến mồ hôi cậu đã đổ ra trước khi thành công." },
    { id: 13, han: "通过", py: "tōngguò", pos: "gt.", meaning: "qua, nhờ vào", example: "任何成功都要通过努力才能得到。", exampleVi: "Bất kỳ thành công nào cũng phải qua nỗ lực mới có được." },
    { id: 14, han: "篇", py: "piān", pos: "lượng.", meaning: "bài, tờ (dùng cho bài văn, giấy…)", example: "我在报纸上看到一篇关于她的新闻。", exampleVi: "Tôi đọc được trên báo một bài tin tức về cô ấy." },
    { id: 15, han: "作家", py: "zuòjiā", pos: "dt.", meaning: "nhà văn", example: "她现在已经是一个有名的作家了。", exampleVi: "Bây giờ cô ấy đã là một nhà văn nổi tiếng rồi." },
    { id: 16, han: "当时", py: "dāngshí", pos: "dt.", meaning: "lúc đó", example: "当时她的父母和亲戚都不支持她。", exampleVi: "Lúc đó bố mẹ và họ hàng của cô ấy đều không ủng hộ cô ấy." },
    { id: 17, han: "可是", py: "kěshì", pos: "liên.", meaning: "nhưng", example: "虽然收入高，可是经常要加班。", exampleVi: "Tuy thu nhập cao nhưng thường xuyên phải tăng ca." },
    { id: 18, han: "正确", py: "zhèngquè", pos: "tt.", meaning: "đúng, chính xác", example: "她向所有人证明了她的选择是正确的。", exampleVi: "Cô ấy đã chứng minh với mọi người rằng lựa chọn của mình là đúng." },
    { id: 19, han: "理想", py: "lǐxiǎng", pos: "dt.", meaning: "lý tưởng", example: "为了自己的理想，放弃一些东西也是值得的。", exampleVi: "Vì lý tưởng của mình, từ bỏ vài thứ cũng đáng." },
    { id: 20, han: "王红", py: "Wáng Hóng", pos: "dt. riêng", meaning: "Vương Hồng (tên người)", example: "你还记得王红吗？", exampleVi: "Cậu còn nhớ Vương Hồng không?" },
    { id: 21, han: "勇敢", py: "yǒnggǎn", pos: "tt.", meaning: "dũng cảm, gan dạ", example: "如果你想做什么事情，那就勇敢地去做。", exampleVi: "Nếu bạn muốn làm việc gì thì hãy dũng cảm làm đi." },
    { id: 22, han: "结果", py: "jiéguǒ", pos: "dt.", meaning: "kết quả", example: "不要担心结果，不要考虑会不会失败。", exampleVi: "Đừng lo lắng về kết quả, đừng nghĩ xem có thất bại hay không." },
    { id: 23, han: "失败", py: "shībài", pos: "đgt.", meaning: "thất bại", example: "即使最后失败了也没有关系。", exampleVi: "Cho dù cuối cùng thất bại cũng không sao." },
    { id: 24, han: "过程", py: "guòchéng", pos: "dt.", meaning: "quá trình", example: "我们应该把注意力放在做事情的过程上。", exampleVi: "Chúng ta nên đặt sự chú ý vào quá trình làm việc." },
    { id: 25, han: "至少", py: "zhìshǎo", pos: "p.", meaning: "ít nhất", example: "至少你已经努力过。", exampleVi: "Ít nhất bạn đã nỗ lực rồi." },
    { id: 26, han: "总结", py: "zǒngjié", pos: "đgt.", meaning: "tổng kết", example: "我们还可以从失败中总结出有用的经验。", exampleVi: "Chúng ta còn có thể rút ra kinh nghiệm hữu ích từ thất bại." },
    { id: 27, han: "取", py: "qǔ", pos: "đgt.", meaning: "đạt được", example: "只有勇敢地面对困难，才能有希望取得成功。", exampleVi: "Chỉ có dũng cảm đối mặt với khó khăn mới có hy vọng đạt được thành công." },
    { id: 28, han: "经历", py: "jīnglì", pos: "đgt.", meaning: "trải qua", example: "取得成功的人往往都经历过许多失败。", exampleVi: "Người thành công thường đều đã trải qua nhiều thất bại." },
    { id: 29, han: "许多", py: "xǔduō", pos: "số.", meaning: "rất nhiều", example: "他经历过许多失败。", exampleVi: "Anh ấy đã trải qua rất nhiều thất bại." },
    { id: 30, han: "区别", py: "qūbié", pos: "dt.", meaning: "sự khác biệt", example: "他们和普通人的区别就是他们都坚持了下来。", exampleVi: "Điểm khác biệt giữa họ và người bình thường là họ đều kiên trì đến cùng." },
    { id: 31, han: "暂时", py: "zànshí", pos: "dt.", meaning: "tạm thời, nhất thời", example: "困难只是暂时的。", exampleVi: "Khó khăn chỉ là tạm thời." },
    { id: 32, han: "面对", py: "miànduì", pos: "đgt.", meaning: "đương đầu, đối mặt", example: "我们要勇敢地面对困难。", exampleVi: "Chúng ta phải dũng cảm đối mặt với khó khăn." },
    { id: 33, han: "爱迪生", py: "Àidíshēng", pos: "dt. riêng", meaning: "Thomas Alva Edison (1847–1931), nhà phát minh người Mỹ", example: "爱迪生就是在找了上千种材料后才找到了能点亮电灯的材料。", exampleVi: "Edison chính là sau khi tìm hơn một nghìn loại vật liệu mới tìm ra vật liệu có thể thắp sáng đèn điện." },
    { id: 34, han: "如果", py: "rúguǒ", pos: "liên.", meaning: "nếu", example: "如果同样的短信你收到了三四遍，再幽默的短信你也笑不出来了。", exampleVi: "Nếu cùng một tin nhắn bạn nhận ba bốn lần thì tin nhắn hài hước đến đâu bạn cũng chẳng cười nổi.", group: "extended" },
    { id: 35, han: "效果", py: "xiàoguǒ", pos: "dt.", meaning: "hiệu quả", example: "几个月下来，减肥的效果很不错。", exampleVi: "Sau mấy tháng, hiệu quả giảm cân rất tốt.", group: "extended" },
  ],

  text: {
    title: "课文 阳光总在风雨后",
    paragraphs: [
      {
        heading: "课文一 · 王静和孙月聊孙月减肥的事情",
        zh: "王静：怎么又买了这么多饼干和巧克力？难道你不减肥了？\n孙月：减了一个月都没瘦下来，我实在没有信心了。\n王静：如果你想减肥，就得少吃东西，而且要多运动。\n孙月：我就是这么做的，但这一个月下来，我只轻了一公斤。\n王静：一个月太短了。要想减肥成功，只能坚持，才会慢慢有效果。\n孙月：我本来已经打算放弃了，但是你刚才的话让我改变了主意。这些饼干和巧克力送给你了。",
        vi: "Vương Tĩnh: Sao cậu lại mua nhiều bánh quy và sô-cô-la thế này? Chẳng lẽ cậu không giảm cân nữa à?\nTôn Nguyệt: Giảm cả một tháng mà chẳng gầy đi chút nào, tớ thật sự mất hết tự tin rồi.\nVương Tĩnh: Nếu cậu muốn giảm cân thì phải ăn ít đi, hơn nữa phải vận động nhiều.\nTôn Nguyệt: Tớ làm đúng như thế đấy, nhưng suốt một tháng nay tớ chỉ nhẹ đi có một cân.\nVương Tĩnh: Một tháng ngắn quá. Muốn giảm cân thành công thì chỉ có kiên trì, mới dần dần có hiệu quả.\nTôn Nguyệt: Tớ vốn đã định bỏ cuộc rồi, nhưng lời cậu vừa nói đã khiến tớ đổi ý. Chỗ bánh quy và sô-cô-la này tặng cậu đấy.",
        questions: ["孙月买了些什么？她为什么不想减肥了？", "怎样减肥才能有效果？"],
      },
      {
        heading: "课文二 · 李进和张远聊张远的成功经历",
        zh: "李进：你网球打得真好，还得过那么多国际大奖！每次看你比赛，感觉你轻轻松松就赢了。\n张远：哪里啊！那是你没看到我辛苦练习的一面，没有人随随便便就能成功的。\n李进：我从小也对网球感兴趣，但是到现在还是打得不怎么样。\n张远：你知道吗？不管春夏秋冬，我练球从来没有休息过一天。\n李进：真是不容易啊！看来我只看到了你成功时获得的鲜花，却没注意到你成功前流下的汗水。\n张远：任何成功都要通过努力才能得到。只要你坚持练习，我相信你也会越打越好的。",
        vi: "Lý Tiến: Cậu chơi quần vợt giỏi thật, lại còn từng đoạt bao nhiêu giải thưởng quốc tế lớn! Mỗi lần xem cậu thi đấu, tớ cảm giác cậu thắng một cách thật nhẹ nhàng.\nTrương Viễn: Đâu có! Đó là vì cậu không thấy mặt luyện tập vất vả của tớ thôi, chẳng ai dễ dàng tùy tiện mà thành công được cả.\nLý Tiến: Từ nhỏ tớ cũng thích quần vợt, nhưng đến giờ vẫn chơi chẳng ra sao.\nTrương Viễn: Cậu biết không? Dù xuân hạ thu đông, tớ tập bóng chưa từng nghỉ ngày nào.\nLý Tiến: Thật không dễ dàng gì! Xem ra tớ chỉ thấy những bó hoa cậu nhận được khi thành công, mà không để ý đến mồ hôi cậu đổ ra trước khi thành công.\nTrương Viễn: Bất kỳ thành công nào cũng phải qua nỗ lực mới có được. Chỉ cần cậu kiên trì luyện tập, tớ tin cậu cũng sẽ càng chơi càng giỏi.",
        questions: ["张远的网球为什么打得那么好？", "为什么说没有人能随随便便成功？"],
      },
      {
        heading: "课文三 · 小林和小李谈王红的成功经历",
        zh: "小林：你还记得王红吗？我在报纸上看到一篇关于她的新闻，她现在已经是一个有名的作家了。\n小李：听说她毕业后放弃了律师的工作，开始专门写小说，没想到她竟然成功了。\n小林：当时她的父母和亲戚都不支持她，可是她坚持自己的选择，现在终于向所有人证明了她的选择是正确的。\n小李：看来为了自己的理想，放弃一些东西也是值得的。\n小林：一个人只有两只手，不可能得到所有想要的东西，所以有时候放弃是一种聪明的选择。\n小李：是啊，只有学会放弃，才能把自己的能力用到最该做的事情上，最后获得成功。",
        vi: "Tiểu Lâm: Cậu còn nhớ Vương Hồng không? Tớ đọc được trên báo một bài tin về cô ấy, bây giờ cô ấy đã là một nhà văn nổi tiếng rồi.\nTiểu Lý: Nghe nói sau khi tốt nghiệp cô ấy bỏ công việc luật sư, bắt đầu chuyên tâm viết tiểu thuyết, không ngờ cô ấy lại thành công thật.\nTiểu Lâm: Lúc đó bố mẹ và họ hàng của cô ấy đều không ủng hộ, nhưng cô ấy kiên trì với lựa chọn của mình, giờ cuối cùng đã chứng minh với mọi người rằng lựa chọn ấy là đúng.\nTiểu Lý: Xem ra vì lý tưởng của mình, từ bỏ một vài thứ cũng là đáng.\nTiểu Lâm: Mỗi người chỉ có hai bàn tay, không thể có được mọi thứ mình muốn, nên đôi khi từ bỏ là một lựa chọn thông minh.\nTiểu Lý: Đúng vậy, chỉ có học được cách từ bỏ mới có thể dồn năng lực của mình vào việc đáng làm nhất, cuối cùng giành được thành công.",
        questions: ["王红是干什么的？她是怎样获得成功的？", "为什么说有时候放弃是一种聪明的选择？"],
      },
      {
        heading: "课文四 · 不要担心结果",
        zh: "如果你想做什么事情，那就勇敢地去做，不要担心结果，不要考虑会不会失败。要是太看重结果，失败就会给人们带来很多烦恼。我们应该把注意力放在做事情的过程上，这样你会在做的过程中发现解决问题的快乐，这是其他任何东西都给不了的。即使最后失败了也没有关系，因为至少你已经努力过，而且我们还可以从失败中总结出有用的经验，有了这些积累，成功自然离我们越来越近。",
        vi: "Nếu bạn muốn làm việc gì thì hãy dũng cảm làm đi, đừng lo lắng về kết quả, đừng nghĩ xem có thất bại hay không. Nếu quá coi trọng kết quả, thất bại sẽ mang đến cho người ta rất nhiều phiền não. Chúng ta nên đặt sự chú ý vào quá trình làm việc, như vậy bạn sẽ tìm thấy niềm vui giải quyết vấn đề ngay trong quá trình làm, đó là điều mà bất cứ thứ gì khác cũng không mang lại được. Cho dù cuối cùng thất bại cũng không sao, vì ít nhất bạn đã nỗ lực, hơn nữa chúng ta còn có thể rút ra những kinh nghiệm hữu ích từ thất bại; có những tích lũy ấy, thành công tự nhiên sẽ ngày càng đến gần chúng ta hơn.",
        questions: ["过程和结果，哪个更重要？要是太看重结果会怎么样？", "为什么说失败了也没关系？"],
      },
      {
        heading: "课文五 · 阳光总在风雨后",
        zh: "每一个人都希望成功，可是很多时候，在成功之前会遇到很多困难。有些人遇到困难就放弃，而有些人遇到困难却想办法解决它。对困难的态度不同，结果也是不一样的。爱迪生就是在找了上千种材料后才找到了能点亮电灯的材料。取得成功的人往往都经历过许多失败，他们和普通人的区别就是他们都坚持了下来。所以就算只有1%的希望，我们也要做出100%的努力。困难只是暂时的，“阳光总在风雨后”，只有我们勇敢地面对困难，才能有希望取得成功。",
        vi: "Ai cũng mong thành công, nhưng rất nhiều khi, trước khi thành công sẽ gặp rất nhiều khó khăn. Có người gặp khó khăn liền bỏ cuộc, còn có người gặp khó khăn lại tìm cách giải quyết nó. Thái độ với khó khăn khác nhau thì kết quả cũng không giống nhau. Edison chính là sau khi tìm hơn một nghìn loại vật liệu mới tìm ra được vật liệu có thể thắp sáng đèn điện. Những người thành công thường đều đã trải qua rất nhiều thất bại, điểm khác biệt giữa họ và người bình thường là họ đều kiên trì đến cùng. Vì vậy dù chỉ có 1% hy vọng, chúng ta cũng phải bỏ ra 100% nỗ lực. Khó khăn chỉ là tạm thời, “sau cơn mưa trời lại sáng”, chỉ khi chúng ta dũng cảm đối mặt với khó khăn mới có hy vọng giành được thành công.",
        questions: ["人们对困难的态度有什么不同？在这一点上，取得成功的人和普通人的区别是什么？", "爱迪生是怎样成功发明电灯的？“阳光总在风雨后”是什么意思？"],
      },
    ],
    notes: [
      "王静 (Wáng Jìng), 孙月 (Sūn Yuè), 李进 (Lǐ Jìn), 张远 (Zhāng Yuǎn), 小林 (Xiǎo Lín), 小李 (Xiǎo Lǐ): tên nhân vật trong các hội thoại.",
      "Văn hóa – 成功的秘诀 (Bí quyết của sự thành công): tục ngữ “千里之行，始于足下” (Đường đi nghìn dặm bắt đầu từ bước đầu tiên) – muốn thành công phải làm từ việc nhỏ và biết kiên trì; thành công nằm ở sự kiên trì.",
    ],
  },

  grammar: [
    {
      word: "难道",
      title: "Phó từ “chẳng lẽ” – nhấn mạnh câu hỏi tu từ",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ 难道 nhấn mạnh ngữ khí của câu hỏi tu từ. Dùng trong câu hỏi tu từ khẳng định thì cả câu mang nghĩa phủ định và ngược lại, vd. 难道汉语真的这么难吗？ hàm ý người nói nhấn mạnh tiếng Trung không khó.",
          examples: [
            "怎么又买了这么多饼干和巧克力？难道你不减肥了？",
            "A：喂，都十点了，你怎么还不来？ B：难道你没看短信？我今天有事去不了了。",
            "A：你不是两点就出发了吗？难道路上花了两个多小时？ B：我那辆车出了点儿问题，刚才把车送去修了。",
          ],
        },
      ],
      note: "Cuối câu thường có 吗/不成; 难道 có thể đứng trước hoặc sau chủ ngữ.",
    },
    {
      word: "通过",
      title: "Giới từ / động từ “thông qua; đi qua; vượt qua”",
      usages: [
        {
          label: "Giới từ",
          explain: "Diễn tả ý đạt được mục đích nhất định nhờ người nào đó hay bằng phương tiện/cách thức nào đó.",
          examples: [
            "任何成功都要通过努力才能得到。",
            "这个节目我一直在看，它介绍了很多生活中的小知识。很多以前我没有注意到的问题，现在通过它了解了不少。",
          ],
        },
        {
          label: "Động từ – đi qua",
          explain: "Chỉ việc đi qua nơi nào đó từ đầu này/phía này đến đầu kia/phía kia.",
          examples: ["这条街只能步行通过。"],
        },
        {
          label: "Động từ – đạt yêu cầu",
          explain: "Phù hợp với một tiêu chuẩn nhất định hay đạt được yêu cầu nào đó.",
          examples: ["我通过那家公司的面试了。经理对我印象不错，他要我明天就正式去上班。"],
        },
      ],
      note: "比一比 通过 – 经过: Giống: đều diễn tả đạt mục đích nhờ phương tiện/cách thức (通过/经过大家的努力，公司的生意越做越大。). Khác: (1) với nghĩa này 通过 là giới từ, nhấn mạnh cách thức; 经过 là động từ, nhấn mạnh quá trình (希望通过这次活动引起大家的兴趣… / 经过一次次失败之后，他终于成功了。). (2) Làm động từ: 通过 = đi xuyên qua từ đầu này sang đầu kia; 经过 = đi ngang qua (这里正在修路，汽车无法通过。/ 我正好经过这儿，顺便过来看看你。). (3) 经过 còn làm danh từ chỉ diễn biến sự việc, 通过 không có cách dùng này (小王把事情的经过告诉我了…).",
    },
    {
      word: "可是",
      title: "Liên từ “nhưng” – chuyển ý",
      usages: [
        {
          label: "Cách dùng",
          explain: "Liên từ 可是 dùng ở vế sau của câu phức để chỉ sự chuyển ý; vế trước thường có 虽然 kết hợp.",
          examples: [
            "A：你怎么又想换工作了，这儿的收入不是挺高的吗？ B：虽然收入高，可是经常要加班，很少有时间和家人在一起。",
            "小时候，大家都说我像我妈，尤其是性格。可是长大后，他们说我更像爸爸。",
            "当时她的父母和亲戚都不支持她，可是她坚持自己的选择，现在终于向所有人证明了她的选择是正确的。",
          ],
        },
      ],
    },
    {
      word: "结果",
      title: "Danh từ “kết quả” / liên từ “kết quả là”",
      usages: [
        {
          label: "Danh từ",
          explain: "Chỉ trạng thái cuối cùng trong diễn biến của sự việc.",
          examples: [
            "小张，你这份计划书写得不错，就按照这个计划去做市场调查吧。下个月把调查结果交上来。",
            "如果你想做什么事情，那就勇敢地去做，不要担心结果，不要考虑会不会失败。",
          ],
        },
        {
          label: "Liên từ",
          explain: "Chỉ quan hệ nhân quả; dùng ở vế sau để diễn tả kết quả của tình huống được nói ở vế trước.",
          examples: [
            "我妻子想减肥，所以她每天早上都去骑马。结果马竟然在一个月之内瘦了二十斤。",
            "有些人爱说“差不多”。例如，每天的工作都是完成得差不多，结果，积累下来，就变成差很多了。",
          ],
        },
      ],
    },
    {
      word: "上",
      title: "Động từ “lên tới, đạt tới (số lượng)” – 上百、上千、上万",
      usages: [
        {
          label: "Cách dùng",
          explain: "Động từ 上 diễn tả ý đạt đến hoặc đủ (số lượng hay mức độ nhất định), theo sau thường là tân ngữ chỉ số lượng.",
          examples: [
            "这个城市的地铁已经有上百年的历史了。",
            "每年有成千上万的高中毕业生参加艺术考试。",
            "爱迪生就是在找了上千种材料后才找到了能点亮电灯的材料。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "我住的地方离地铁站有点儿远，走路___要三十分钟。", options: ["至少", "过程", "区别", "暂时"], answer: "至少" },
    { sentence: "所有的困难都是___的，要有信心，我相信你一定会成功。", options: ["暂时", "正确", "至少", "过程"], answer: "暂时" },
    { sentence: "“爱”和“喜欢”有什么___？我认为“爱”比“喜欢”的感情更深。", options: ["区别", "过程", "正确", "暂时"], answer: "区别" },
    { sentence: "不管最后是成功还是失败，在努力的___中，我们已经学到了很多东西。", options: ["过程", "区别", "至少", "正确"], answer: "过程" },
    { sentence: "减肥不只是为了瘦，更是为了健康。___的减肥方法是按时吃饭，多吃水果，多运动。", options: ["正确", "暂时", "区别", "至少"], answer: "正确" },
    { sentence: "A：师傅，麻烦您快点儿行吗？我___在九点之前到大使馆。", options: ["得", "取", "汗", "放弃"], answer: "得" },
    { sentence: "B：他还得去___行李，您别担心，我打个电话问问。", options: ["取", "得", "理想", "放弃"], answer: "取" },
    { sentence: "A：外面热吗？你怎么满头大___？ B：电梯坏了，我爬楼梯上来的。", options: ["汗", "取", "理想", "得"], answer: "汗" },
    { sentence: "A：你考虑清楚了？真的要___这次机会？ B：是的，我妈妈身体不太好，我决定留下来照顾她。", options: ["放弃", "取", "得", "汗"], answer: "放弃" },
    { sentence: "A：你研究生考试考得怎么样？ B：数学可能考得不太___。", options: ["理想", "放弃", "汗", "取"], answer: "理想" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 4, distractors: [5, 26, 32] },
        { vocabId: 7, distractors: [8, 1, 12] },
        { vocabId: 9, distractors: [11, 21, 18] },
        { vocabId: 15, distractors: [19, 14, 16] },
        { vocabId: 21, distractors: [9, 4, 32] },
        { vocabId: 23, distractors: [22, 24, 31] },
        { vocabId: 28, distractors: [29, 27, 30] },
        { vocabId: 30, distractors: [23, 31, 35] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 6, 10, 12, 18, 25, 31, 32],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["任何成功", "都要", "通过努力", "才能", "得到", "。"], answer: "任何成功都要通过努力才能得到。", vi: "Bất kỳ thành công nào cũng phải qua nỗ lực mới có được." },
        { tokens: ["你刚才的话", "让我", "改变了", "主意", "。"], answer: "你刚才的话让我改变了主意。", vi: "Lời cậu vừa nói đã khiến tớ đổi ý." },
        { tokens: ["她", "现在", "已经是", "一个有名的", "作家了", "。"], answer: "她现在已经是一个有名的作家了。", vi: "Bây giờ cô ấy đã là một nhà văn nổi tiếng rồi." },
        { tokens: ["我们", "可以", "从失败中", "总结出", "有用的经验", "。"], answer: "我们可以从失败中总结出有用的经验。", vi: "Chúng ta có thể rút ra kinh nghiệm hữu ích từ thất bại." },
        { tokens: ["困难", "只是", "暂时的", "。"], answer: "困难只是暂时的。", vi: "Khó khăn chỉ là tạm thời." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (课文 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "课文一 · Chuyện giảm cân", text: "王静：怎么又买了这么多{{c1}}和巧克力？{{c2}}你不减肥了？\n孙月：减了一个月都没瘦下来，我实在没有信心了。\n王静：如果你想减肥，就{{c3}}少吃东西，而且要多运动。……要想减肥成功，只能{{c4}}，才会慢慢有效果。\n孙月：我本来已经打算{{c5}}了，但是你刚才的话让我改变了{{c6}}。" },
        { title: "课文二 · Luyện quần vợt", text: "李进：你{{c7}}打得真好！每次看你比赛，感觉你轻轻松松就{{c8}}了。\n……\n李进：看来我只看到了你成功时获得的鲜花，却没注意到你成功前流下的{{c9}}水。" },
        { title: "课文三 · Vương Hồng", text: "小林：我在报纸上看到一篇关于她的新闻，她现在已经是一个有名的{{c10}}了。" },
      ],
      answers: { c1: "饼干", c2: "难道", c3: "得", c4: "坚持", c5: "放弃", c6: "主意", c7: "网球", c8: "赢", c9: "汗", c10: "作家" },
      bank: ["饼干", "难道", "得", "坚持", "放弃", "主意", "网球", "赢", "汗", "作家", "轻松", "理想", "正确"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (课文 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào hai bài đọc về thất bại và thành công.",
      passages: [
        { title: "课文四 · Đừng lo về kết quả", text: "如果你想做什么事情，那就{{e1}}地去做，不要担心{{e2}}，不要考虑会不会{{e3}}。我们应该把注意力放在做事情的{{e4}}上。即使最后失败了也没有关系，因为{{e5}}你已经努力过，而且我们还可以从失败中{{e6}}出有用的经验。" },
        { title: "课文五 · Sau cơn mưa trời lại sáng", text: "取得成功的人往往都{{e7}}过许多失败，他们和普通人的{{e8}}就是他们都坚持了下来。困难只是{{e9}}的，“阳光总在风雨后”，只有我们勇敢地{{e10}}困难，才能有希望取得成功。" },
      ],
      answers: { e1: "勇敢", e2: "结果", e3: "失败", e4: "过程", e5: "至少", e6: "总结", e7: "经历", e8: "区别", e9: "暂时", e10: "面对" },
      bank: ["勇敢", "结果", "失败", "过程", "至少", "总结", "经历", "区别", "暂时", "面对", "效果", "许多", "理想"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "要想减肥成功，只能坚持。", vi: "Muốn giảm cân thành công thì chỉ có kiên trì.", keywords: ["giảm cân", "thành công", "kiên trì"] },
        { zh: "没有人随随便便就能成功的。", vi: "Không ai có thể dễ dàng thành công một cách tùy tiện.", keywords: ["không ai", "thành công", "dễ dàng"] },
        { zh: "有时候放弃是一种聪明的选择。", vi: "Đôi khi từ bỏ là một lựa chọn thông minh.", keywords: ["từ bỏ", "lựa chọn", "thông minh"] },
        { zh: "我们应该把注意力放在做事情的过程上。", vi: "Chúng ta nên đặt sự chú ý vào quá trình làm việc.", keywords: ["chú ý", "quá trình", "làm việc"] },
        { zh: "就算只有1%的希望，我们也要做出100%的努力。", vi: "Dù chỉ có 1% hy vọng, chúng ta cũng phải bỏ ra 100% nỗ lực.", keywords: ["1%", "hy vọng", "100%", "nỗ lực"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chẳng lẽ cậu không giảm cân nữa à?", answers: ["难道你不减肥了？", "难道你不减肥了吗？"] },
        { vi: "Bất kỳ thành công nào cũng phải qua nỗ lực mới có được.", answers: ["任何成功都要通过努力才能得到。"] },
        { vi: "Khó khăn chỉ là tạm thời.", answers: ["困难只是暂时的。"] },
        { vi: "Ít nhất bạn đã nỗ lực rồi.", answers: ["至少你已经努力过了。", "至少你已经努力过。", "你至少已经努力过了。"] },
        { vi: "Chúng ta phải dũng cảm đối mặt với khó khăn.", answers: ["我们要勇敢地面对困难。", "我们应该勇敢地面对困难。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "孙月减了一个月，轻了五公斤。", a: false },
        { q: "王静的话让孙月改变了主意，她决定继续减肥。", a: true },
        { q: "张远不管春夏秋冬都坚持练球。", a: true },
        { q: "李进从小对网球不感兴趣。", a: false },
        { q: "王红毕业后一直当律师。", a: false },
        { q: "当时王红的父母和亲戚都不支持她写小说。", a: true },
        { q: "课文四认为结果比过程更重要。", a: false },
        { q: "爱迪生找了上千种材料才找到能点亮电灯的材料。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "难道你不减肥了？",
        "我本来已经打算放弃了。",
        "任何成功都要通过努力才能得到。",
        "她现在已经是一个有名的作家了。",
        "困难只是暂时的。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "“没有人能随随便便成功”，你同意吗？请介绍一个你认为成功的人，说说他/她是怎么取得成功的。 (“Không ai có thể dễ dàng thành công” – bạn có đồng ý không? Hãy giới thiệu một người bạn cho là thành công và kể họ đã thành công như thế nào.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 9 (难道, 通过, 可是, 结果, 上百/上千).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["难道", "通过", "可是", "结果", "上百", "上千"],
      minGrammar: 2,
      sample: "我同意这句话。我眼中成功的人是我的表姐。她从小就喜欢画画儿，理想是当一个画家。大学毕业后，她放弃了公司的工作，开始专门画画儿。当时很多亲戚都不支持她，可是她坚持自己的选择，每天都画上十几个小时。她经历过许多失败，参加比赛常常拿不到奖，但她从来没有放弃。通过几年的努力，她的画终于在国际比赛中获了奖。难道这不是成功吗？她让我明白，困难只是暂时的，只要勇敢地面对，就一定能取得成功。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 通过 / 经过", points: 6,
      subtitle: "Chọn 通过 hoặc 经过 cho mỗi chỗ trống.",
      grammarWord: "通过 / 经过",
      options: ["通过", "经过"],
      items: [
        { q: "___调查我们发现，客人住宾馆最关心的是干净不干净。", answers: ["通过", "经过"] },
        { q: "这是保修卡，遇到什么问题，您可以___上面的电话联系我们。", answers: ["通过"] },
        { q: "我不了解这件事情的___，你问问其他人吧。", answers: ["经过"] },
        { q: "___这段时间的学习，他的汉语水平提高了不少。", answers: ["经过", "通过"] },
        { q: "有些人___节食的方法来减肥，虽然有效，但是时间长了对身体没有好处。", answers: ["通过"] },
        { q: "这里正在修路，汽车无法___。", answers: ["通过"] },
        { q: "我正好___这儿，顺便过来看看你。", answers: ["经过"] },
        { q: "___一次次失败之后，他终于成功了。", answers: ["经过"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 难道", points: 6,
      subtitle: "Điền phó từ nhấn mạnh câu hỏi tu từ (难道 – chẳng lẽ) vào chỗ trống.",
      grammarWord: "难道",
      items: [
        { q: "怎么又买了这么多饼干和巧克力？___你不减肥了？", answers: ["难道"] },
        { q: "___你没看短信？我今天有事去不了了。", answers: ["难道"] },
        { q: "你不是两点就出发了吗？___路上花了两个多小时？", answers: ["难道"] },
        { q: "你别再喝这么多酒了！___你不要身体了？", answers: ["难道"] },
        { q: "都十点了，你怎么还不来教室？___你忘了今天有课？", answers: ["难道"] },
        { q: "你又咳嗽了？___感冒还没好？", answers: ["难道"] },
        { q: "这么简单的问题，___你也不会？", answers: ["难道"] },
        { q: "___汉语真的这么难吗？", answers: ["难道"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 结果", points: 5,
      subtitle: "Điền 结果 (danh từ “kết quả” hoặc liên từ “kết quả là”) vào chỗ trống.",
      grammarWord: "结果",
      items: [
        { q: "小张，下个月把调查___交上来。", answers: ["结果"] },
        { q: "如果你想做什么事情，那就勇敢地去做，不要担心___。", answers: ["结果"] },
        { q: "我妻子每天早上都去骑马，___马竟然在一个月之内瘦了二十斤。", answers: ["结果"] },
        { q: "每天的工作都是完成得差不多，___，积累下来，就变成差很多了。", answers: ["结果"] },
        { q: "要是太看重___，失败就会给人们带来很多烦恼。", answers: ["结果"] },
        { q: "对困难的态度不同，___也是不一样的。", answers: ["结果"] },
        { q: "昨天晚上我一直工作到很晚才睡，___今天早上起晚了。", answers: ["结果"] },
        { q: "他考试前没有好好复习，___没考好。", answers: ["结果"] },
      ],
    },
  ],
};
