import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第1课 简单的爱情 (Tình yêu đơn giản)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 10–21 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson01: Lesson = {
  level: "hsk4",
  no: 1,
  slug: "bai-1",
  zh: "简单的爱情",
  pinyin: "Jiǎndān de àiqíng",
  vi: "Tình yêu đơn giản",
  en: "Simple Love",
  topic: "爱情 · Tình yêu",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 印象、熟悉、性格、开玩笑、共同、适合、幸福、浪漫、缺点、接受、羡慕、即使、感动、吸引、幽默、脾气…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 不仅……也/还/而且……, 从来, 刚 (phân biệt 刚 – 刚才), 即使……也……, (在)……上.",
    "Đọc hiểu 3 đoạn hội thoại về chuyện yêu đương, kết hôn và 2 bài đọc về tình yêu giản dị; thuật lại được nội dung.",
    "Hỏi – đáp về chuyện yêu đương của nhau và kể một câu chuyện tình yêu bằng tiếng Trung.",
    "Nắm các từ mở rộng cùng chữ 感: 感到、感动、感冒、感兴趣.",
  ],

  warmUp: [
    {
      zh: "给下列电影名字选择对应的图片：《西雅图夜未眠》《诺丁山》《当男人爱上女人》《罗马假日》《罗密欧与朱丽叶》《泰坦尼克号》",
      vi: "Chọn hình tương ứng với tên phim: Sleepless in Seattle (Không ngủ ở Seattle), Notting Hill, When a Man Loves a Woman, Roman Holiday (Kỳ nghỉ ở Rome), Romeo + Juliet, Titanic.",
    },
    {
      zh: "你理想中的男/女朋友是什么样的？为什么？",
      vi: "Bạn trai/bạn gái lý tưởng của bạn là người thế nào? Tại sao? (Gợi ý: 身高 chiều cao, 体重 cân nặng, 头发 tóc, 眼睛 mắt, 性格 tính cách, 爱好 sở thích.)",
    },
  ],

  vocab: [
    { id: 1, han: "法律", py: "fǎlǜ", pos: "dt.", meaning: "pháp luật, luật", example: "他学的是新闻，我学的是法律。", exampleVi: "Anh ấy học báo chí, tôi học luật." },
    { id: 2, han: "俩", py: "liǎ", pos: "sl.", meaning: "hai (người)", example: "那你们俩是怎么认识的？", exampleVi: "Vậy hai người quen nhau thế nào?" },
    { id: 3, han: "印象", py: "yìnxiàng", pos: "dt.", meaning: "ấn tượng", example: "他一个人踢进两个球，我对他印象很深。", exampleVi: "Một mình anh ấy đá vào hai quả, tôi có ấn tượng rất sâu sắc về anh ấy." },
    { id: 4, han: "深", py: "shēn", pos: "tt.", meaning: "sâu sắc", example: "我对他印象很深。", exampleVi: "Tôi có ấn tượng rất sâu sắc về anh ấy." },
    { id: 5, han: "熟悉", py: "shúxi", pos: "đgt.", meaning: "hiểu rõ, quen thuộc", example: "我们是在一次足球比赛中认识的，后来就慢慢熟悉了。", exampleVi: "Chúng tôi quen nhau trong một trận bóng đá, sau đó dần dần thân quen." },
    { id: 6, han: "不仅", py: "bùjǐn", pos: "liên.", meaning: "không những, chẳng những", example: "他不仅足球踢得好，性格也不错。", exampleVi: "Anh ấy không những đá bóng giỏi mà tính cách cũng tốt." },
    { id: 7, han: "性格", py: "xìnggé", pos: "dt.", meaning: "tính cách, tính nết", example: "两个人共同生活，更需要性格上互相吸引。", exampleVi: "Hai người chung sống càng cần thu hút nhau về tính cách." },
    { id: 8, han: "孙月", py: "Sūn Yuè", pos: "dt.", meaning: "Tôn Nguyệt (tên người)", example: "孙月和王静聊王静的男朋友。", exampleVi: "Tôn Nguyệt và Vương Tịnh trò chuyện về bạn trai của Vương Tịnh." },
    { id: 9, han: "王静", py: "Wáng Jìng", pos: "dt.", meaning: "Vương Tịnh (tên người)", example: "王静下个月5号就要结婚了。", exampleVi: "Ngày 5 tháng sau Vương Tịnh sẽ kết hôn." },
    { id: 10, han: "李进", py: "Lǐ Jìn", pos: "dt.", meaning: "Lý Tiến (tên người)", example: "听说你男朋友李进跟你是一个学校的。", exampleVi: "Nghe nói bạn trai Lý Tiến của cậu học cùng trường với cậu." },
    { id: 11, han: "开玩笑", py: "kāi wánxiào", pos: "đgt.", meaning: "nói đùa, đùa", example: "你是在开玩笑吧？", exampleVi: "Em đang nói đùa phải không?" },
    { id: 12, han: "从来", py: "cónglái", pos: "p.", meaning: "từ trước đến nay, từ trước đến giờ", example: "虽然我们认识的时间不长，但我从来没这么快乐过。", exampleVi: "Tuy chúng em quen nhau chưa lâu, nhưng em chưa bao giờ vui như thế này." },
    { id: 13, han: "最好", py: "zuìhǎo", pos: "p.", meaning: "tốt nhất", example: "两个人在一起，最好能有共同的兴趣和爱好。", exampleVi: "Hai người ở bên nhau, tốt nhất là có chung hứng thú và sở thích." },
    { id: 14, han: "共同", py: "gòngtóng", pos: "tt.", meaning: "chung, cùng", example: "我们有很多共同的爱好。", exampleVi: "Chúng em có rất nhiều sở thích chung." },
    { id: 15, han: "适合", py: "shìhé", pos: "đgt.", meaning: "phù hợp", example: "看来你真的找到适合你的人了。", exampleVi: "Xem ra em thật sự đã tìm được người phù hợp với mình rồi." },
    { id: 16, han: "幸福", py: "xìngfú", pos: "tt.", meaning: "hạnh phúc", example: "祝你们幸福！", exampleVi: "Chúc hai em hạnh phúc!" },
    { id: 17, han: "生活", py: "shēnghuó", pos: "dt./đgt.", meaning: "cuộc sống; sống", example: "这么多年，我们的生活一直挺幸福的。", exampleVi: "Bao nhiêu năm nay, cuộc sống của chúng tôi vẫn luôn khá hạnh phúc." },
    { id: 18, han: "刚", py: "gāng", pos: "p.", meaning: "vừa, vừa mới", example: "我和丈夫刚结婚的时候，每天都觉得很新鲜。", exampleVi: "Lúc tôi và chồng vừa mới cưới, ngày nào cũng thấy rất mới mẻ." },
    { id: 19, han: "浪漫", py: "làngmàn", pos: "tt.", meaning: "lãng mạn", example: "两个人共同生活，只有浪漫和新鲜感是不够的。", exampleVi: "Hai người chung sống, chỉ có lãng mạn và cảm giác mới mẻ thì không đủ." },
    { id: 20, han: "够", py: "gòu", pos: "đgt.", meaning: "đủ", example: "只有浪漫和新鲜感是不够的。", exampleVi: "Chỉ có lãng mạn và cảm giác mới mẻ thì không đủ." },
    { id: 21, han: "缺点", py: "quēdiǎn", pos: "dt.", meaning: "khuyết điểm, thiếu sót", example: "我现在每天看到的都是他的缺点。", exampleVi: "Bây giờ ngày nào tôi cũng chỉ thấy khuyết điểm của anh ấy." },
    { id: 22, han: "接受", py: "jiēshòu", pos: "đgt.", meaning: "chấp nhận", example: "只有接受了他的缺点，你们才能更好地一起生活。", exampleVi: "Chỉ khi chấp nhận khuyết điểm của anh ấy, hai người mới có thể sống với nhau tốt hơn." },
    { id: 23, han: "羡慕", py: "xiànmù", pos: "đgt.", meaning: "ước ao, ngưỡng mộ", example: "很多女孩子羡慕浪漫的爱情。", exampleVi: "Nhiều cô gái ao ước một tình yêu lãng mạn." },
    { id: 24, han: "爱情", py: "àiqíng", pos: "dt.", meaning: "tình yêu (giữa nam và nữ)", example: "爱情是结婚的重要原因。", exampleVi: "Tình yêu là lý do quan trọng của hôn nhân." },
    { id: 25, han: "星星", py: "xīngxing", pos: "dt.", meaning: "ngôi sao", example: "浪漫是她想要月亮时，你不会给她星星。", exampleVi: "Lãng mạn là khi cô ấy muốn mặt trăng, bạn sẽ không đưa cô ấy ngôi sao." },
    { id: 26, han: "即使", py: "jíshǐ", pos: "liên.", meaning: "cho dù", example: "大部分人每天晚上最少应该睡7个小时，但有些人即使只睡5个小时也没问题。", exampleVi: "Đa số người mỗi tối nên ngủ ít nhất 7 tiếng, nhưng có người dù chỉ ngủ 5 tiếng cũng không sao." },
    { id: 27, han: "加班", py: "jiā bān", pos: "đgt.", meaning: "tăng ca, làm thêm giờ", example: "浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯。", exampleVi: "Lãng mạn là dù tối tăng ca đến nửa đêm, về đến nhà vẫn thấy nhà mình còn sáng đèn." },
    { id: 28, han: "亮", py: "liàng", pos: "đgt.", meaning: "chiếu sáng, tỏa sáng", example: "到家时，自己家里也还亮着灯。", exampleVi: "Khi về đến nhà, nhà mình vẫn còn sáng đèn." },
    { id: 29, han: "感动", py: "gǎndòng", pos: "đgt.", meaning: "cảm động, làm xúc động", example: "其实，让我们感动的，就是生活中简单的爱情。", exampleVi: "Thật ra, điều làm chúng ta cảm động chính là tình yêu giản dị trong cuộc sống." },
    { id: 30, han: "自然", py: "zìrán", pos: "p.", meaning: "đương nhiên, hiển nhiên", example: "说到结婚，人们就会很自然地想起爱情。", exampleVi: "Nói đến kết hôn, người ta sẽ rất tự nhiên nghĩ đến tình yêu." },
    { id: 31, han: "原因", py: "yuányīn", pos: "dt.", meaning: "nguyên nhân", example: "爱情是结婚的重要原因。", exampleVi: "Tình yêu là nguyên nhân quan trọng của việc kết hôn." },
    { id: 32, han: "互相", py: "hùxiāng", pos: "p.", meaning: "lẫn nhau, qua lại", example: "两个人共同生活，更需要性格上互相吸引。", exampleVi: "Hai người chung sống càng cần thu hút lẫn nhau về tính cách." },
    { id: 33, han: "吸引", py: "xīyǐn", pos: "đgt.", meaning: "hấp dẫn, thu hút", example: "那个地方特别漂亮，每年都会吸引很多国内外的游客。", exampleVi: "Nơi đó rất đẹp, năm nào cũng thu hút nhiều du khách trong và ngoài nước." },
    { id: 34, han: "幽默", py: "yōumò", pos: "tt.", meaning: "hóm hỉnh, khôi hài", example: "我丈夫是个很幽默的人。", exampleVi: "Chồng tôi là một người rất hóm hỉnh." },
    { id: 35, han: "脾气", py: "píqi", pos: "dt.", meaning: "tính tình, tính khí", example: "而且他的脾气也不错。", exampleVi: "Hơn nữa tính tình anh ấy cũng tốt." },
    { id: 36, han: "感到", py: "gǎndào", pos: "đgt.", meaning: "cảm thấy", example: "他的话让我感到事情有点儿不对。", exampleVi: "Lời anh ấy làm tôi cảm thấy sự việc có gì đó không ổn.", group: "extended" },
    { id: 37, han: "感冒", py: "gǎnmào", pos: "đgt./dt.", meaning: "bị cảm; bệnh cảm", example: "有点儿发烧，还有点儿头疼，可能是感冒了。", exampleVi: "Hơi sốt, lại hơi đau đầu, có lẽ bị cảm rồi.", group: "extended" },
    { id: 38, han: "感兴趣", py: "gǎn xìngqù", pos: "đgt.", meaning: "cảm thấy hứng thú, quan tâm", example: "很多留学生到中国学习汉语，是因为他们对中国文化感兴趣。", exampleVi: "Nhiều du học sinh đến Trung Quốc học tiếng Hán vì họ có hứng thú với văn hóa Trung Quốc.", group: "extended" },
  ],

  text: {
    title: "课文 简单的爱情",
    paragraphs: [
      {
        heading: "课文一 · 孙月和王静聊王静的男朋友",
        zh: "孙月：听说你男朋友李进跟你是一个学校的，是你同学吗？\n王静：是的，他学的是新闻，我学的是法律，我和他不是一个班。\n孙月：那你们俩是怎么认识的？\n王静：我们是在一次足球比赛中认识的。我们班跟他们班比赛，他一个人踢进两个球，我对他印象很深，后来就慢慢熟悉了。\n孙月：你为什么喜欢他？\n王静：他不仅足球踢得好，性格也不错。",
        vi: "Tôn Nguyệt: Nghe nói bạn trai cậu là Lý Tiến học cùng trường với cậu, là bạn cùng lớp à?\nVương Tịnh: Đúng vậy, anh ấy học báo chí, tớ học luật, tớ và anh ấy không cùng lớp.\nTôn Nguyệt: Thế hai người quen nhau thế nào?\nVương Tịnh: Bọn tớ quen nhau trong một trận bóng đá. Lớp tớ đấu với lớp anh ấy, một mình anh ấy đá vào hai quả, tớ có ấn tượng rất sâu về anh ấy, sau đó dần dần thân nhau.\nTôn Nguyệt: Sao cậu lại thích anh ấy?\nVương Tịnh: Anh ấy không những đá bóng giỏi mà tính cách cũng tốt.",
        questions: ["王静跟李进是怎么认识的？", "王静为什么喜欢李进？"],
      },
      {
        heading: "课文二 · 王静跟李老师聊她要结婚的事情",
        zh: "王静：李老师，我下个月5号就要结婚了。\n李老师：你是在开玩笑吧？你们不是才认识一个月？\n王静：虽然我们认识的时间不长，但我从来没这么快乐过。\n李老师：两个人在一起，最好能有共同的兴趣和爱好。\n王静：我们有很多共同的爱好，经常一起打球、唱歌、做菜。\n李老师：看来你真的找到适合你的人了。祝你们幸福！",
        vi: "Vương Tịnh: Thầy Lý ơi, ngày 5 tháng sau em sẽ kết hôn.\nThầy Lý: Em đang đùa đấy à? Hai đứa chẳng phải mới quen nhau một tháng sao?\nVương Tịnh: Tuy chúng em quen nhau chưa lâu, nhưng em chưa bao giờ vui như thế này.\nThầy Lý: Hai người ở bên nhau, tốt nhất là có chung hứng thú và sở thích.\nVương Tịnh: Chúng em có rất nhiều sở thích chung, thường cùng nhau chơi bóng, hát, nấu ăn.\nThầy Lý: Xem ra em thật sự đã tìm được người hợp với mình rồi. Chúc hai em hạnh phúc!",
        questions: ["王静什么时候结婚？她跟李进认识多长时间了？", "王静和李进有哪些共同的爱好？"],
      },
      {
        heading: "课文三 · 高老师和李老师聊结婚后的生活",
        zh: "高老师：听说您跟妻子结婚快二十年了？\n李老师：到6月9号，我们就结婚二十年了。这么多年，我们的生活一直挺幸福的。\n高老师：我和丈夫刚结婚的时候，每天都觉得很新鲜，在一起有说不完的话。但是现在……\n李老师：两个人共同生活，只有浪漫和新鲜感是不够的。\n高老师：您说得对！我现在每天看到的都是他的缺点。\n李老师：两个人在一起时间长了，就会有很多问题。只有接受了他的缺点，你们才能更好地一起生活。",
        vi: "Cô Cao: Nghe nói thầy và vợ kết hôn sắp được hai mươi năm rồi?\nThầy Lý: Đến ngày 9 tháng 6 là chúng tôi cưới nhau tròn hai mươi năm. Bao nhiêu năm nay, cuộc sống của chúng tôi vẫn luôn khá hạnh phúc.\nCô Cao: Lúc tôi và chồng mới cưới, ngày nào cũng thấy rất mới mẻ, ở bên nhau nói mãi không hết chuyện. Nhưng bây giờ thì…\nThầy Lý: Hai người chung sống, chỉ có lãng mạn và cảm giác mới mẻ thôi thì không đủ.\nCô Cao: Thầy nói đúng! Bây giờ ngày nào tôi cũng chỉ thấy toàn khuyết điểm của anh ấy.\nThầy Lý: Hai người ở bên nhau lâu rồi thì sẽ có nhiều vấn đề. Chỉ khi chấp nhận khuyết điểm của anh ấy, hai người mới có thể sống với nhau tốt hơn.",
        questions: ["李老师和爱人的关系怎么样？高老师呢？", "丈夫和妻子两个人怎样才能很好地生活在一起？"],
      },
      {
        heading: "课文四 · 什么是浪漫",
        zh: "很多女孩子羡慕浪漫的爱情。那什么是浪漫呢？年轻人说：浪漫是她想要月亮时，你不会给她星星；中年人说：浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯；老年人说：浪漫其实就像歌中唱的那样，“我能想到最浪漫的事，就是和你一起慢慢变老。”其实，让我们感动的，就是生活中简单的爱情。有时候，简单就是最大的幸福。",
        vi: "Nhiều cô gái ao ước một tình yêu lãng mạn. Vậy lãng mạn là gì? Người trẻ nói: lãng mạn là khi cô ấy muốn mặt trăng, bạn sẽ không đưa cô ấy ngôi sao; người trung niên nói: lãng mạn là dù buổi tối tăng ca đến nửa đêm, khi về đến nhà, nhà mình vẫn còn sáng đèn; người già nói: lãng mạn thật ra giống như lời bài hát: “Điều lãng mạn nhất mà anh có thể nghĩ đến là cùng em từ từ già đi.” Thật ra, điều làm chúng ta cảm động chính là tình yêu giản dị trong cuộc sống. Có những lúc, giản dị chính là hạnh phúc lớn nhất.",
        questions: ["关于浪漫，年轻人、中年人、老年人有什么不同的看法？", "什么样的爱情让人感动？"],
      },
      {
        heading: "课文五 · 爱情与结婚",
        zh: "说到结婚，人们就会很自然地想起爱情。爱情是结婚的重要原因，但两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。\n我丈夫是个很幽默的人。即使是很普通的事情，从他嘴里说出来也会变得很有意思。在我难过的时候，他总是有办法让我高兴起来。而且他的脾气也不错，结婚快十年了，我们俩几乎没因为什么事红过脸，很多人都特别羡慕我们。",
        vi: "Nói đến kết hôn, người ta sẽ rất tự nhiên nghĩ đến tình yêu. Tình yêu là lý do quan trọng để kết hôn, nhưng hai người chung sống thì không chỉ cần một tình yêu lãng mạn, mà càng cần thu hút lẫn nhau về tính cách.\nChồng tôi là một người rất hóm hỉnh. Dù là chuyện rất bình thường, qua miệng anh ấy kể ra cũng trở nên rất thú vị. Những lúc tôi buồn, anh ấy luôn có cách làm tôi vui lên. Hơn nữa tính tình anh ấy cũng tốt, cưới nhau sắp mười năm rồi, hai vợ chồng tôi hầu như chưa từng to tiếng vì chuyện gì, rất nhiều người đặc biệt ngưỡng mộ chúng tôi.",
        questions: ["爱情跟结婚是什么关系？", "“我”的丈夫是个什么样的人？"],
      },
    ],
    notes: [
      "孙月 (Sūn Yuè): Tôn Nguyệt; 王静 (Wáng Jìng): Vương Tịnh; 李进 (Lǐ Jìn): Lý Tiến; 李 (Lǐ): họ Lý; 高 (Gāo): họ Cao.",
      "“我能想到最浪漫的事，就是和你一起慢慢变老。” là câu hát trong bài 《最浪漫的事》 (Điều lãng mạn nhất).",
      "红脸 (hóng liǎn): đỏ mặt; ở đây chỉ việc cãi nhau, to tiếng với nhau.",
      "Văn hóa – 七夕节 (Lễ Thất tịch, mùng 7 tháng 7 âm lịch): bắt nguồn từ câu chuyện tình yêu của Ngưu Lang và Chức Nữ, còn gọi là 乞巧节, 女儿节, được xem là “ngày lễ Tình nhân của Trung Quốc”.",
    ],
  },

  grammar: [
    {
      word: "不仅……也/还/而且……",
      title: "Không những… mà còn…",
      usages: [
        {
          label: "Cách dùng",
          explain: "Liên từ 不仅 dùng ở vế thứ nhất, vế thứ hai thường dùng 也/还/而且 để bổ sung thông tin tiến thêm một bước. Hai vế cùng chủ ngữ: 不仅 đứng sau chủ ngữ; khác chủ ngữ: 不仅 đứng trước chủ ngữ.",
          examples: [
            "他不仅足球踢得好，性格也不错。",
            "小时候，他经常生病，所以每天都去跑步锻炼身体。谁也没有想到，长大以后，他不仅身体健康，还成了一名长跑运动员。",
            "我打算去云南玩儿，听说那边不仅很美，而且人也非常热情。",
          ],
        },
      ],
      note: "Cùng chủ ngữ: 主语 + 不仅……; khác chủ ngữ: 不仅 + 主语1……，主语2 + 也/而且…… (vd. 不仅我会做中国菜，而且……).",
    },
    {
      word: "从来",
      title: "Phó từ “từ trước đến nay”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ chỉ sự việc từ quá khứ đến hiện tại luôn như vậy, thường dùng trong câu phủ định (从来不/从来没……过).",
          examples: [
            "老张这个人开会从来不迟到。今天到现在还没来，可能是有什么事情，你打个电话问问他吧。",
            "虽然我们认识的时间不长，但我从来没这么快乐过。",
            "这家面馆从来只卖一种东西：牛肉面。因为面做得很好吃，而且不贵。很多新客人变成了老客人，老客人又带来更多新客人。",
          ],
        },
      ],
      note: "从来不 + động từ: thói quen/tính chất luôn như vậy; 从来没 + động từ + 过: chưa từng xảy ra.",
    },
    {
      word: "刚",
      title: "Phó từ “vừa, vừa mới”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ hành động hay tình huống xảy ra cách đây không lâu, đứng sau chủ ngữ và trước động từ.",
          examples: [
            "我上午刚借的那本书，怎么找不到了？",
            "A：我刚从会议室过来，怎么一个人也没有？B：对不起，今天的会议改到明天上午了。",
            "我和丈夫刚结婚的时候，每天都觉得很新鲜，在一起有说不完的话。",
          ],
        },
        {
          label: "So sánh 刚 – 刚才",
          explain: "Giống nhau: đều chỉ việc vừa xảy ra, đều làm trạng ngữ. Khác nhau: 刚 là phó từ, chỉ đứng sau chủ ngữ, trước động từ; 刚才 là danh từ thời gian, đứng trước hoặc sau chủ ngữ.",
          examples: [
            "你叔叔刚/刚才打电话来说给你发了个电子邮件。",
            "我刚看了邮箱，没有新邮件。",
            "我刚才去洗手间了，你给我打电话了？",
            "刚才我去洗手间了，你给我打电话了？",
            "我上个月刚结婚，正准备和我先生一起出去旅游。",
            "他刚来一会儿。",
            "你为什么刚才不说，现在才说？",
          ],
        },
      ],
      note: "比一比 刚 – 刚才: (1) trước 刚 có thể có từ chỉ thời gian (上个月刚结婚), trước 刚才 thì không; (2) sau động từ trong câu có 刚 có thể có từ chỉ thời lượng (刚来一会儿), 刚才 thì không; (3) sau 刚才 có thể dùng từ phủ định (刚才不说), sau 刚 thì không.",
    },
    {
      word: "即使……也……",
      title: "Cho dù… cũng…",
      usages: [
        {
          label: "Cách dùng",
          explain: "Liên từ 即使 dùng ở vế thứ nhất, vế sau thường có 也, biểu thị quan hệ nhượng bộ có tính giả thiết; cũng có thể chỉ sự việc đã xảy ra hoặc đang tồn tại. 即使 có thể đứng trước hoặc sau chủ ngữ của vế thứ nhất.",
          examples: [
            "你应该多回家看看老人，即使只是跟他们吃吃饭、聊聊天，他们也会觉得很幸福。",
            "大部分人每天晚上最少应该睡7个小时，但有些人即使只睡5个小时也没问题。",
            "浪漫是即使晚上加班到零点，到家时，自己家里也还亮着灯。",
          ],
        },
      ],
    },
    {
      word: "(在)……上",
      title: "Về mặt…, trong phạm vi…",
      usages: [
        {
          label: "Cách dùng",
          explain: "上 là danh từ phương vị dùng sau danh từ khác; ngoài nghĩa “trên bề mặt”, còn chỉ “trong phạm vi nào đó” hoặc “xét về khía cạnh nào đó”.",
          examples: [
            "今天的作业是复习生词，明天课上听写。",
            "来北方好几年了吧？你觉得北方和南方在饮食上有什么不同？",
            "两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引。",
          ],
        },
      ],
      note: "Hay gặp: 在学习上、在工作上、在生活上、性格上、饮食上…",
    },
  ],

  wordChoice: [
    { sentence: "他们两个人___努力，终于完成了工作。", options: ["共同", "印象", "接受", "吸引"], answer: "共同" },
    { sentence: "那个地方特别漂亮，每年都会___很多国内外的游客。", options: ["熟悉", "吸引", "共同", "印象"], answer: "吸引" },
    { sentence: "在我的___中，他一直是个很幽默的人。", options: ["印象", "接受", "熟悉", "吸引"], answer: "印象" },
    { sentence: "我是一个南方人，很难___每天吃面条。", options: ["共同", "印象", "接受", "熟悉"], answer: "接受" },
    { sentence: "这个事你最好先问一下李老师，这方面他比我___。", options: ["熟悉", "吸引", "接受", "共同"], answer: "熟悉" },
    { sentence: "A：下个星期的游泳比赛你参加吗？B：你别跟我___了，我没学过游泳，怎么参加比赛啊？", options: ["开玩笑", "脾气", "感动", "羡慕"], answer: "开玩笑" },
    { sentence: "A：小李这个人怎么样？B：他虽然___很大，但工作很认真。", options: ["从来", "脾气", "开玩笑", "感动"], answer: "脾气" },
    { sentence: "A：真___你，找了个那么漂亮的女朋友！B：她不仅长得漂亮，也很聪明。", options: ["感动", "羡慕", "从来", "脾气"], answer: "羡慕" },
    { sentence: "A：都这么晚了，他怎么还没到？B：他以前___不迟到，今天是怎么了？", options: ["羡慕", "开玩笑", "从来", "感动"], answer: "从来" },
    { sentence: "这个电影讲了一个爱情故事，很浪漫，让人特别___。", options: ["感动", "脾气", "从来", "羡慕"], answer: "感动" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 3, distractors: [7, 31, 21] },
        { vocabId: 5, distractors: [15, 33, 22] },
        { vocabId: 6, distractors: [26, 12, 30] },
        { vocabId: 14, distractors: [32, 13, 16] },
        { vocabId: 19, distractors: [34, 24, 23] },
        { vocabId: 27, distractors: [11, 29, 20] },
        { vocabId: 35, distractors: [7, 21, 3] },
        { vocabId: 36, distractors: [29, 37, 38] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 5, 18, 23, 25, 33, 35],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我们是", "在一次足球比赛中", "认识的", "。"], answer: "我们是在一次足球比赛中认识的。", vi: "Chúng tôi quen nhau trong một trận bóng đá." },
        { tokens: ["他", "不仅", "足球踢得好", "，", "性格", "也不错", "。"], answer: "他不仅足球踢得好，性格也不错。", vi: "Anh ấy không những đá bóng giỏi mà tính cách cũng tốt." },
        { tokens: ["我", "从来", "没", "这么快乐", "过", "。"], answer: "我从来没这么快乐过。", vi: "Tôi chưa bao giờ vui như thế này." },
        { tokens: ["两个人在一起", "，", "最好", "能有", "共同的兴趣和爱好", "。"], answer: "两个人在一起，最好能有共同的兴趣和爱好。", vi: "Hai người ở bên nhau, tốt nhất là có chung hứng thú và sở thích." },
        { tokens: ["只有", "接受了", "他的缺点", "，", "你们", "才能", "更好地一起生活", "。"], answer: "只有接受了他的缺点，你们才能更好地一起生活。", vi: "Chỉ khi chấp nhận khuyết điểm của anh ấy, hai người mới có thể sống với nhau tốt hơn." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (đoạn 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Bạn trai của Vương Tịnh", text: "王静：是的，他学的是新闻，我学的是{{c1}}，我和他不是一个班。\n孙月：那你们{{c2}}是怎么认识的？\n王静：我们是在一次足球比赛中认识的。我们班跟他们班比赛，他一个人踢进两个球，我对他{{c3}}很深，后来就慢慢{{c4}}了。\n孙月：你为什么喜欢他？\n王静：他不仅足球踢得好，{{c5}}也不错。" },
        { title: "Bài khóa 2 · Vương Tịnh sắp kết hôn", text: "王静：李老师，我下个月5号就要结婚了。\n李老师：你是在{{c6}}吧？你们不是才认识一个月？\n王静：虽然我们认识的时间不长，但我{{c7}}没这么快乐过。\n李老师：两个人在一起，最好能有{{c8}}的兴趣和爱好。\n王静：我们有很多共同的爱好，经常一起打球、唱歌、做菜。\n李老师：看来你真的找到{{c9}}你的人了。祝你们幸福！" },
        { title: "Bài khóa 3 · Cuộc sống sau kết hôn", text: "李老师：两个人共同生活，只有浪漫和新鲜感是不够的。\n高老师：您说得对！我现在每天看到的都是他的{{c10}}。" },
      ],
      answers: { c1: "法律", c2: "俩", c3: "印象", c4: "熟悉", c5: "性格", c6: "开玩笑", c7: "从来", c8: "共同", c9: "适合", c10: "缺点" },
      bank: ["法律", "俩", "印象", "熟悉", "性格", "开玩笑", "从来", "共同", "适合", "缺点", "接受", "浪漫", "幸福"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (đoạn 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào hai bài đọc về tình yêu và hôn nhân.",
      passages: [
        { title: "Bài khóa 4 · Lãng mạn là gì", text: "很多女孩子{{e1}}浪漫的爱情。那什么是浪漫呢？年轻人说：浪漫是她想要月亮时，你不会给她{{e2}}；中年人说：浪漫是{{e3}}晚上{{e4}}到零点，到家时，自己家里也还{{e5}}着灯……其实，让我们{{e6}}的，就是生活中简单的爱情。" },
        { title: "Bài khóa 5 · Tình yêu và hôn nhân", text: "说到结婚，人们就会很{{e7}}地想起爱情。爱情是结婚的重要{{e8}}，但两个人共同生活，不仅需要浪漫的爱情，更需要性格上{{e9}}{{e10}}。" },
      ],
      answers: { e1: "羡慕", e2: "星星", e3: "即使", e4: "加班", e5: "亮", e6: "感动", e7: "自然", e8: "原因", e9: "互相", e10: "吸引" },
      bank: ["羡慕", "星星", "即使", "加班", "亮", "感动", "自然", "原因", "互相", "吸引", "幽默", "脾气", "浪漫"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "他不仅足球踢得好，性格也不错。", vi: "Anh ấy không những đá bóng giỏi mà tính cách cũng tốt.", keywords: ["không những", "đá bóng", "tính cách"] },
        { zh: "虽然我们认识的时间不长，但我从来没这么快乐过。", vi: "Tuy chúng tôi quen nhau chưa lâu, nhưng tôi chưa bao giờ vui như thế này.", keywords: ["quen", "chưa bao giờ", "vui"] },
        { zh: "两个人共同生活，只有浪漫和新鲜感是不够的。", vi: "Hai người chung sống, chỉ có lãng mạn và cảm giác mới mẻ thôi thì không đủ.", keywords: ["chung sống", "lãng mạn", "không đủ"] },
        { zh: "其实，让我们感动的，就是生活中简单的爱情。", vi: "Thật ra, điều làm chúng ta cảm động chính là tình yêu giản dị trong cuộc sống.", keywords: ["cảm động", "tình yêu", "cuộc sống"] },
        { zh: "我丈夫是个很幽默的人。", vi: "Chồng tôi là một người rất hài hước.", keywords: ["chồng", "hài hước"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi vừa mới chuyển đến một tuần.", answers: ["我刚搬来一个星期。", "我刚搬来一个星期了。"] },
        { vi: "Cô ấy không những xinh đẹp mà còn rất thông minh.", answers: ["她不仅长得漂亮，而且很聪明。", "她不仅长得漂亮，也很聪明。", "她不仅长得漂亮，还很聪明。", "她不仅很漂亮，而且很聪明。"] },
        { vi: "Ông Trương đi họp từ trước đến nay chưa bao giờ đến muộn.", answers: ["老张开会从来不迟到。"] },
        { vi: "Anh ấy cho dù chủ nhật cũng phải tăng ca.", answers: ["他即使星期天也要加班。", "即使星期天他也要加班。", "他即使星期天也得加班。"] },
        { vi: "Bạn thấy miền Bắc và miền Nam khác nhau gì về mặt ăn uống?", answers: ["你觉得北方和南方在饮食上有什么不同？"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "王静和李进是一个班的同学。", a: false },
        { q: "王静和李进是在一次足球比赛中认识的。", a: true },
        { q: "王静和李进已经认识快一年了。", a: false },
        { q: "王静和李进有很多共同的爱好。", a: true },
        { q: "到6月9号，李老师和妻子就结婚二十年了。", a: true },
        { q: "高老师现在每天看到的都是丈夫的优点。", a: false },
        { q: "老年人觉得，浪漫就是和你一起慢慢变老。", a: true },
        { q: "课文五中的“我”和丈夫经常因为小事红脸。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我对他印象很深。",
        "你是在开玩笑吧？",
        "两个人共同生活，只有浪漫是不够的。",
        "有时候，简单就是最大的幸福。",
        "我丈夫是个很幽默的人。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请写一个你知道的爱情故事，可以是自己的，也可以是电影或小说中的。 (Hãy viết về một câu chuyện tình yêu mà bạn biết – của chính bạn hoặc trong phim/tiểu thuyết.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 1 (不仅……也/而且, 从来, 刚, 即使……也, ……上).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["不仅", "从来", "刚", "即使", "而且"],
      minGrammar: 2,
      sample: "我想说说我父母的爱情故事。他们是在一次朋友聚会上认识的，那时候我妈妈刚大学毕业。我爸爸是个很幽默的人，我妈妈对他印象很深。他不仅性格好，而且很会做菜。结婚以后，即使工作很忙，爸爸也每天给妈妈做早饭。他们在生活上互相照顾，从来没因为什么事红过脸，很多人都羡慕他们。我觉得，简单的爱情就是最大的幸福。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 刚 / 刚才", points: 6,
      subtitle: "Chọn 刚 hoặc 刚才 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "刚 / 刚才",
      options: ["刚", "刚才"],
      items: [
        { q: "我___给妈妈打了一个电话。", answers: ["刚", "刚才"] },
        { q: "我昨天___到，有点儿累，想休息休息。", answers: ["刚"] },
        { q: "你___不在办公室，我把东西给你同事了。", answers: ["刚才"] },
        { q: "不好意思，___我太忙了，没时间跟你说话。", answers: ["刚才"] },
        { q: "我___搬来一个星期，对这儿的环境还不太熟悉。", answers: ["刚"] },
        { q: "我上个月___结婚，正准备和我先生一起出去旅游。", answers: ["刚"] },
        { q: "你为什么___不说，现在才说？", answers: ["刚才"] },
        { q: "他___来一会儿。", answers: ["刚"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 即使……也……", points: 6,
      subtitle: "Điền liên từ thích hợp vào chỗ trống (即使 – cho dù).",
      grammarWord: "即使",
      items: [
        { q: "你应该多回家看看老人，___只是跟他们吃吃饭、聊聊天，他们也会觉得很幸福。", answers: ["即使"] },
        { q: "有些人___只睡5个小时也没问题。", answers: ["即使"] },
        { q: "浪漫是___晚上加班到零点，到家时，自己家里也还亮着灯。", answers: ["即使"] },
        { q: "___是很普通的事情，从他嘴里说出来也会变得很有意思。", answers: ["即使"] },
        { q: "我丈夫工作真忙，他___星期天也要去公司。", answers: ["即使"] },
        { q: "___明天下雨，我们也要去踢足球。", answers: ["即使"] },
        { q: "___你们都不同意，我也要跟他结婚。", answers: ["即使"] },
        { q: "我们是好朋友，___很长时间不见面，也不会觉得陌生。", answers: ["即使"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 不仅……也/还/而且……", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (có câu nhiều đáp án đúng).",
      grammarWord: "不仅……也/还/而且……",
      options: ["不仅", "也", "还", "而且"],
      items: [
        { q: "他___足球踢得好，性格也不错。", answers: ["不仅"] },
        { q: "他不仅足球踢得好，性格___不错。", answers: ["也"] },
        { q: "长大以后，他不仅身体健康，___成了一名长跑运动员。", answers: ["还", "而且"] },
        { q: "听说那边不仅很美，___人也非常热情。", answers: ["而且"] },
        { q: "两个人共同生活，___需要浪漫的爱情，更需要性格上互相吸引。", answers: ["不仅"] },
        { q: "李老师不仅喜欢看电影，___喜欢听音乐。", answers: ["也", "还", "而且"] },
        { q: "___我会做中国菜，而且我妈妈也会做。", answers: ["不仅"] },
        { q: "她不仅长得漂亮，___很聪明。", answers: ["也", "还", "而且"] },
      ],
    },
  ],
};
