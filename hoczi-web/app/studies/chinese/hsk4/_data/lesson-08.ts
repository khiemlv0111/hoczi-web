import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第8课 生活中不缺少美 (Cuộc sống không thiếu cái đẹp)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 98–109 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["伤心", "放松", "只要", "积极", "证明"];
const W_EX2 = ["耐心", "愉快", "到处", "缺少", "发生"];

export const lesson08: Lesson = {
  level: "hsk4",
  no: 8,
  slug: "bai-8",
  zh: "生活中不缺少美",
  pinyin: "Shēnghuó zhōng bù quēshǎo měi",
  vi: "Cuộc sống không thiếu cái đẹp",
  en: "Life Is Never Short of Beauty",
  topic: "心情与态度 · Tâm trạng và thái độ sống",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 亲戚、伤心、心情、愉快、景色、放松、压力、回忆、发生、成为、堵车、距离、耐心、缺少、到处、态度、证明、积极、特点…",
    "Hiểu và dùng được 使, 只要……就……, 可不是, 因此, 往往 (phân biệt 往往 và 经常).",
    "Đọc hiểu năm bài khóa về sô-cô-la và tâm trạng, cách thư giãn sau thất bại, thái độ khi kẹt xe, cách nhìn cái đẹp trong cuộc sống, màu sắc và tính cách.",
    "Nói và viết về cách giúp bản thân vui vẻ hơn khi tâm trạng không tốt.",
    "Nắm các từ mở rộng có chữ 要: 重要、主要、只要、要是.",
  ],

  warmUp: [
    { zh: "给下边的词语选择对应的图片：大使馆、师傅、景色、生命、巧克力、堵车。", vi: "Chọn hình tương ứng với các từ: đại sứ quán, bác tài (sư phụ), phong cảnh, sự sống, sô-cô-la, kẹt xe." },
    { zh: "生活中的礼物：你什么时候送礼物？礼物的价格怎么样？收到礼物后什么时候看？你怎么送礼物？", vi: "Hãy nói về việc tặng quà trong cuộc sống của bạn: tặng khi nào (sinh nhật, kết hôn, về nước, bạn buồn), giá cả ra sao, mở quà khi nào, tặng trực tiếp hay gửi bưu điện…" },
  ],

  vocab: [
    { id: 1, han: "巧克力", py: "qiǎokèlì", pos: "dt.", meaning: "sô-cô-la", example: "这种巧克力味道不错，你在哪儿买的？", exampleVi: "Loại sô-cô-la này vị ngon đấy, bạn mua ở đâu vậy?" },
    { id: 2, han: "亲戚", py: "qīnqi", pos: "dt.", meaning: "họ hàng thân thích", example: "很多人出国后常常会买外国的巧克力，回来送给亲戚朋友。", exampleVi: "Nhiều người ra nước ngoài thường mua sô-cô-la ngoại về tặng họ hàng bạn bè." },
    { id: 3, han: "伤心", py: "shāng xīn", pos: "tt.", meaning: "đau lòng", example: "她听到这个消息后伤心地哭了。", exampleVi: "Nghe tin này xong cô ấy đau lòng bật khóc." },
    { id: 4, han: "使", py: "shǐ", pos: "đgt.", meaning: "khiến cho, làm cho", example: "在中国生活的三年使他在音乐方面有了很多新的想法。", exampleVi: "Ba năm sống ở Trung Quốc khiến anh ấy có nhiều ý tưởng mới về âm nhạc." },
    { id: 5, han: "心情", py: "xīnqíng", pos: "dt.", meaning: "tâm trạng", example: "怎么样，心情好些了吗？", exampleVi: "Thế nào, tâm trạng khá hơn chút nào chưa?" },
    { id: 6, han: "愉快", py: "yúkuài", pos: "tt.", meaning: "vui vẻ", example: "吃块儿巧克力，还能使人的心情变得愉快。", exampleVi: "Ăn một miếng sô-cô-la còn có thể khiến tâm trạng trở nên vui vẻ." },
    { id: 7, han: "景色", py: "jǐngsè", pos: "dt.", meaning: "phong cảnh, cảnh vật", example: "这里的景色真美，空气也好。", exampleVi: "Phong cảnh ở đây đẹp thật, không khí cũng trong lành." },
    { id: 8, han: "放松", py: "fàngsōng", pos: "đgt.", meaning: "thả lỏng, thư giãn", example: "上次足球比赛后，好久都没这么放松了。", exampleVi: "Từ sau trận bóng lần trước, lâu lắm rồi mới thư giãn như thế này." },
    { id: 9, han: "压力", py: "yālì", pos: "dt.", meaning: "áp lực", example: "你不要有压力，好好儿准备下次比赛就好了。", exampleVi: "Bạn đừng áp lực, chuẩn bị thật tốt cho trận sau là được." },
    { id: 10, han: "回忆", py: "huíyì", pos: "đgt.", meaning: "nhớ lại", example: "这段时间我总是一个人坐在房间里回忆那次比赛。", exampleVi: "Thời gian này tôi cứ ngồi một mình trong phòng nhớ lại trận đấu đó." },
    { id: 11, han: "发生", py: "fāshēng", pos: "đgt.", meaning: "xảy ra", example: "事情已经发生了，过去的就让它成为过去吧。", exampleVi: "Chuyện đã xảy ra rồi, cái gì qua thì cho nó qua đi." },
    { id: 12, han: "成为", py: "chéngwéi", pos: "đgt.", meaning: "trở thành", example: "他现在已经成为一个有名的律师。", exampleVi: "Bây giờ anh ấy đã trở thành một luật sư nổi tiếng." },
    { id: 13, han: "只要", py: "zhǐyào", pos: "liên.", meaning: "chỉ cần, miễn là", example: "只要这次你好好儿准备，一定能把比赛踢好。", exampleVi: "Chỉ cần lần này bạn chuẩn bị thật tốt, nhất định sẽ đá tốt trận đấu." },
    { id: 14, han: "师傅", py: "shīfu", pos: "dt.", meaning: "sư phụ, bác tài (cách gọi kính trọng dành cho người có tay nghề)", example: "师傅，我去大使馆，你是不是走错了？", exampleVi: "Bác tài ơi, tôi đến đại sứ quán, có phải bác đi nhầm đường không?" },
    { id: 15, han: "大使馆", py: "dàshǐguǎn", pos: "dt.", meaning: "đại sứ quán", example: "我明天要去大使馆办签证。", exampleVi: "Ngày mai tôi phải đến đại sứ quán làm visa." },
    { id: 16, han: "堵车", py: "dǔ chē", pos: "đgt.", meaning: "kẹt xe", example: "现在是上班时间，前面有点儿堵车。", exampleVi: "Bây giờ là giờ đi làm, phía trước hơi kẹt xe." },
    { id: 17, han: "距离", py: "jùlí", pos: "dt.", meaning: "khoảng cách", example: "我们走另外一条路，距离差不多。", exampleVi: "Chúng ta đi đường khác, khoảng cách cũng gần như nhau." },
    { id: 18, han: "耐心", py: "nàixīn", pos: "dt.", meaning: "lòng kiên nhẫn, sự nhẫn nại", example: "一遇到堵车，人们就容易变得没有耐心。", exampleVi: "Hễ gặp kẹt xe là người ta dễ trở nên mất kiên nhẫn." },
    { id: 19, han: "生命", py: "shēngmìng", pos: "dt.", meaning: "sự sống, tính mệnh", example: "草绿了，那是生命的颜色。", exampleVi: "Cỏ xanh rồi, đó là màu của sự sống." },
    { id: 20, han: "缺少", py: "quēshǎo", pos: "đgt.", meaning: "thiếu", example: "生活中不缺少美，缺少的是发现美的眼睛。", exampleVi: "Cuộc sống không thiếu cái đẹp, cái thiếu là đôi mắt biết phát hiện cái đẹp." },
    { id: 21, han: "到处", py: "dàochù", pos: "phó.", meaning: "khắp nơi, đâu đâu", example: "只要有心，生活中的美到处都是。", exampleVi: "Chỉ cần để tâm, cái đẹp trong cuộc sống ở đâu cũng có." },
    { id: 22, han: "态度", py: "tàidù", pos: "dt.", meaning: "thái độ", example: "生活的态度要自己选择。", exampleVi: "Thái độ sống phải do chính mình lựa chọn." },
    { id: 23, han: "因此", py: "yīncǐ", pos: "liên.", meaning: "do đó, vì vậy", example: "我认识他很多年，因此，很了解他的性格。", exampleVi: "Tôi quen anh ấy nhiều năm, vì vậy rất hiểu tính cách của anh ấy." },
    { id: 24, han: "科学", py: "kēxué", pos: "dt.", meaning: "khoa học", example: "科学研究证明，颜色会影响人的心情。", exampleVi: "Nghiên cứu khoa học chứng minh màu sắc ảnh hưởng đến tâm trạng con người." },
    { id: 25, han: "证明", py: "zhèngmíng", pos: "đgt.", meaning: "chứng minh", example: "他终于向所有人证明自己的选择是对的。", exampleVi: "Cuối cùng anh ấy đã chứng minh với mọi người rằng lựa chọn của mình là đúng." },
    { id: 26, han: "往往", py: "wǎngwǎng", pos: "phó.", meaning: "thường thường", example: "女孩子对衣服颜色的选择往往与她们的性格有关。", exampleVi: "Việc con gái chọn màu quần áo thường liên quan đến tính cách của họ." },
    { id: 27, han: "阳光", py: "yángguāng", pos: "tt.", meaning: "lạc quan, vui vẻ", example: "喜欢穿白色衣服的女孩子性格比较阳光。", exampleVi: "Những cô gái thích mặc đồ trắng thường có tính cách khá lạc quan." },
    { id: 28, han: "积极", py: "jījí", pos: "tt.", meaning: "tích cực", example: "这次招聘会提供了差不多1000个工作机会，请同学们积极参加。", exampleVi: "Hội chợ việc làm lần này có gần 1000 cơ hội việc làm, mời các bạn tích cực tham gia." },
    { id: 29, han: "特点", py: "tèdiǎn", pos: "dt.", meaning: "đặc điểm", example: "生活态度积极向上是她们的共同特点。", exampleVi: "Thái độ sống tích cực, cầu tiến là đặc điểm chung của họ." },
    { id: 30, han: "重要", py: "zhòngyào", pos: "tt.", meaning: "quan trọng", example: "年轻人最重要的是要对自己有信心。", exampleVi: "Với người trẻ, quan trọng nhất là phải tự tin vào bản thân.", group: "extended" },
    { id: 31, han: "主要", py: "zhǔyào", pos: "tt.", meaning: "chủ yếu", example: "这本书主要介绍了中国的文化和历史。", exampleVi: "Cuốn sách này chủ yếu giới thiệu văn hóa và lịch sử Trung Quốc.", group: "extended" },
    { id: 32, han: "要是", py: "yàoshi", pos: "liên.", meaning: "nếu như, nếu", example: "那个电视节目特别有意思，你要是有时间也看看吧。", exampleVi: "Chương trình TV đó rất thú vị, nếu có thời gian bạn cũng xem thử đi.", group: "extended" },
  ],

  text: {
    title: "课文 生活中不缺少美",
    paragraphs: [
      {
        heading: "课文一 · 李老师和高老师聊关于巧克力的事情",
        zh: "李老师：这种巧克力味道不错，你在哪儿买的？\n高老师：不是我买的，是我女儿给我从国外带回来的礼物。\n李老师：很多人出国后常常会买外国的巧克力，回来送给亲戚朋友。\n高老师：是啊，因为很多人都爱吃巧克力，尤其是女性。\n李老师：这是为什么呢？\n高老师：巧克力大多是甜的，而很多女性都喜欢吃甜的。而且，听说伤心难过的时候吃块儿巧克力，还能使人的心情变得愉快。",
        vi: "Cô Lý: Loại sô-cô-la này vị ngon đấy, chị mua ở đâu vậy?\nCô Cao: Không phải tôi mua, là quà con gái tôi mang từ nước ngoài về cho tôi.\nCô Lý: Nhiều người ra nước ngoài thường mua sô-cô-la ngoại về tặng họ hàng bạn bè.\nCô Cao: Đúng vậy, vì rất nhiều người thích ăn sô-cô-la, nhất là phụ nữ.\nCô Lý: Tại sao vậy nhỉ?\nCô Cao: Sô-cô-la phần lớn là ngọt, mà nhiều phụ nữ lại thích ăn đồ ngọt. Hơn nữa, nghe nói lúc đau lòng buồn bã ăn một miếng sô-cô-la còn có thể khiến tâm trạng trở nên vui vẻ.",
        questions: ["说一说为什么很多人在考试前喜欢吃巧克力。", "吃巧克力对人的心情有哪些影响？"],
      },
      {
        heading: "课文二 · 小夏和马克聊关于上次足球比赛的事情",
        zh: "小夏：这里的景色真美，空气也好。\n马克：怎么样，心情好些了吗？\n小夏：好多了，上次足球比赛后，好久都没这么放松了。\n马克：你不要有压力，好好儿准备下次比赛就好了。\n小夏：这段时间我总是一个人坐在房间里回忆那次比赛。如果我们能再努力一点儿，就一定会多进一个球。\n马克：事情已经发生了，过去的就让它成为过去吧。只要这次你好好儿准备，一定能把比赛踢好。",
        vi: "Tiểu Hạ: Phong cảnh ở đây đẹp thật, không khí cũng trong lành.\nMark: Thế nào, tâm trạng khá hơn chút nào chưa?\nTiểu Hạ: Khá hơn nhiều rồi, từ sau trận bóng lần trước, lâu lắm rồi mới được thư giãn như thế này.\nMark: Cậu đừng áp lực, chuẩn bị thật tốt cho trận sau là được.\nTiểu Hạ: Thời gian này mình cứ ngồi một mình trong phòng nhớ lại trận đấu đó. Nếu bọn mình cố gắng thêm chút nữa thì chắc chắn sẽ ghi thêm được một bàn.\nMark: Chuyện đã xảy ra rồi, cái gì đã qua thì cho nó qua đi. Chỉ cần lần này cậu chuẩn bị thật tốt, nhất định sẽ đá tốt trận đấu.",
        questions: ["马克可能因为什么原因带小夏去看那里的景色？", "小夏认为上次足球比赛他们踢得怎么样？"],
      },
      {
        heading: "课文三 · 马克和司机聊关于堵车的事情",
        zh: "马克：师傅，我去大使馆，你是不是走错了？\n师傅：现在是上班时间，前面有点儿堵车，我们走另外一条路，距离差不多。\n马克：那就好，堵车浪费时间，遇到堵车，心情也“堵”。\n师傅：可不是！上班堵车怕迟到，下班堵车怕回家晚。每天在马路上开车，要想不遇到堵车，还真难。\n马克：一遇到堵车，人们就容易变得没有耐心。长期这样，还会影响脾气甚至性格。但是您的心情为什么这么好呢？\n师傅：我们改变不了堵车，但是可以试着改变自己的心情。堵车时正好可以休息一下，还可以听听自己喜欢的音乐。",
        vi: "Mark: Bác tài ơi, tôi đến đại sứ quán, có phải bác đi nhầm đường không?\nBác tài: Bây giờ là giờ đi làm, phía trước hơi kẹt xe, chúng ta đi đường khác, khoảng cách cũng gần như nhau.\nMark: Vậy thì tốt, kẹt xe tốn thời gian, gặp kẹt xe thì tâm trạng cũng “tắc” theo.\nBác tài: Chứ còn gì nữa! Đi làm kẹt xe thì sợ muộn, tan làm kẹt xe thì sợ về nhà trễ. Ngày nào cũng lái xe ngoài đường mà muốn không gặp kẹt xe thì khó thật.\nMark: Hễ gặp kẹt xe là người ta dễ trở nên mất kiên nhẫn. Lâu dần như vậy còn ảnh hưởng đến tính khí, thậm chí cả tính cách. Nhưng sao tâm trạng của bác lại tốt thế?\nBác tài: Chúng ta không thay đổi được chuyện kẹt xe, nhưng có thể thử thay đổi tâm trạng của mình. Lúc kẹt xe vừa hay có thể nghỉ ngơi một chút, còn có thể nghe nhạc mình thích.",
        questions: ["出租车司机走错路了吗？为什么？", "堵车是一件很麻烦的事情，遇到堵车，你会做什么让自己心情变好？"],
      },
      {
        heading: "课文四 · 选对生活的态度",
        zh: "草绿了，那是生命的颜色；花开了，那是大自然的礼物。生活中不缺少美，缺少的是发现美的眼睛。只要有心，生活中的美到处都是。生活的态度要自己选择，因此，遇到烦恼时，你应该想一些办法让自己从不高兴的心情中走出来。窗外是什么样子，我们无法改变，但我们可以选择站在哪个窗户前。选择一个能够带给我们快乐的窗户，这样才能选对心情，选对生活的态度。",
        vi: "Cỏ xanh rồi, đó là màu của sự sống; hoa nở rồi, đó là món quà của thiên nhiên. Cuộc sống không thiếu cái đẹp, cái thiếu là đôi mắt biết phát hiện cái đẹp. Chỉ cần để tâm, cái đẹp trong cuộc sống ở đâu cũng có. Thái độ sống phải do chính mình lựa chọn, vì vậy, khi gặp phiền muộn, bạn nên nghĩ cách giúp bản thân thoát ra khỏi tâm trạng không vui. Bên ngoài cửa sổ trông như thế nào, chúng ta không thể thay đổi, nhưng chúng ta có thể chọn đứng trước ô cửa sổ nào. Hãy chọn một ô cửa sổ có thể mang lại niềm vui cho chúng ta, như vậy mới chọn đúng tâm trạng, chọn đúng thái độ sống.",
        questions: ["怎么理解“生活中的美到处都是”这句话？", "说一说“选择站在哪个窗户前”里的“窗户”指的是什么。"],
      },
      {
        heading: "课文五 · 颜色与性格",
        zh: "科学研究证明，女孩子对衣服颜色的选择往往与她们的性格有关。喜欢穿白色衣服的女孩子性格比较阳光，生活态度积极向上是她们的共同特点；而喜欢穿红色衣服的女孩子性格比较浪漫。颜色也会影响人的心情，不同的颜色会给我们带来不同的感情变化。红色让人变得热情；黄色和白色让人心情愉快；黑色却容易让人感到伤心；人们在看到蓝色时会觉得很舒服，变得安静下来；绿色让我们的眼睛得到休息。",
        vi: "Nghiên cứu khoa học chứng minh, việc con gái chọn màu quần áo thường liên quan đến tính cách của họ. Những cô gái thích mặc đồ trắng có tính cách khá lạc quan, thái độ sống tích cực, cầu tiến là đặc điểm chung của họ; còn những cô gái thích mặc đồ đỏ thì tính cách khá lãng mạn. Màu sắc cũng ảnh hưởng đến tâm trạng con người, các màu khác nhau mang lại cho chúng ta những biến đổi cảm xúc khác nhau. Màu đỏ khiến người ta trở nên nhiệt tình; màu vàng và màu trắng khiến tâm trạng vui vẻ; màu đen lại dễ khiến người ta cảm thấy buồn; khi nhìn thấy màu xanh lam, người ta cảm thấy dễ chịu và trở nên bình tĩnh lại; màu xanh lá giúp đôi mắt chúng ta được nghỉ ngơi.",
        questions: ["从课文可以知道，哪种方法可以让我们了解一个人的性格？", "如果你觉得紧张，眼睛一直跳，你可以做什么让自己放松一下？"],
      },
    ],
    notes: [
      "马克 (Mǎkè): Mark. 师傅 (shīfu): cách gọi lịch sự với tài xế, thợ… (dịch “bác tài”).",
      "Văn hóa: 中国人眼中的“红”与“白” – Màu đỏ tượng trưng cho may mắn, vui mừng, đám cưới gọi là “红事儿”; màu trắng ngoài nghĩa sạch sẽ, thuần khiết còn tượng trưng cho đau buồn, cái chết, nhà có tang gọi là “白事儿”.",
    ],
  },

  grammar: [
    {
      word: "使",
      title: "Động từ “khiến cho, làm cho”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Động từ 使 có nghĩa là khiến cho, làm cho (tương tự 让), thường được dùng trong văn viết. Cấu trúc: A + 使 + B + động từ/tính từ.",
          examples: [
            "她看都没看过我一眼，怎么样才能使她喜欢我呢？",
            "在中国生活的三年使他在音乐方面有了很多新的想法。",
            "听说伤心难过的时候吃块儿巧克力，还能使人的心情变得愉快。",
          ],
        },
      ],
      note: "使 mang sắc thái văn viết; trong khẩu ngữ thường dùng 让.",
    },
    {
      word: "只要……就……",
      title: "Liên từ “chỉ cần… thì…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Liên từ 只要 thường dùng trong cấu trúc “只要……就……”. Vế sau 只要 đưa ra một điều kiện cần thiết, vế sau 就 chỉ kết quả của điều kiện này.",
          examples: [
            "只要这次你好好儿准备，一定能把比赛踢好。",
            "只要你用心就会发现，身边有那么多有意思的事情，有那么多不一样的生活。",
            "每个人对幸福有不同的理解，对我来说，只要能做自己喜欢的事，就是幸福。",
          ],
        },
      ],
    },
    {
      word: "可不是",
      title: "Phó từ “chứ còn gì nữa, đúng vậy”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ 可不是 dùng để bày tỏ sự tán thành hoặc đồng cảm với điều người khác nói, thường đứng độc lập tạo thành một câu (cũng có thể nói 可不).",
          examples: [
            "A：没想到咱们毕业都已经十年了。B：可不是！时间过得太快了，真想大家。",
            "A：遇到堵车，心情也“堵”。B：可不是！上班堵车怕迟到，下班堵车怕回家晚。",
            "A：这家网球馆的服务不错，给我的印象很好。B：可不是！这儿不仅环境好，还免费提供吃的和水，打球打累的时候，可以吃点儿东西休息一下。",
          ],
        },
      ],
    },
    {
      word: "因此",
      title: "Liên từ “vì vậy, do đó”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Liên từ 因此 có nghĩa là vì vậy, gần nghĩa với 所以 nhưng không được dùng kết hợp với 因为.",
          examples: [
            "我认识他很多年，因此，很了解他的性格。",
            "每个学生的性格、能力不同，因此，老师要根据学生的特点，用不同的方法。",
            "生活的态度要自己选择，因此，遇到烦恼时，你应该想一些办法让自己从不高兴的心情中走出来。",
          ],
        },
      ],
      note: "Có thể nói 因为……所以……, nhưng không nói *因为……因此…….",
    },
    {
      word: "往往",
      title: "Phó từ “thường thường”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ 往往 chỉ tình huống nào đó thường xảy ra trong điều kiện nhất định (dựa theo kinh nghiệm quá khứ), dùng để nói về những sự việc có tính quy luật.",
          examples: [
            "女孩子对衣服颜色的选择往往与她们的性格有关。",
            "有经验的出租车司机往往对道路情况都非常熟悉，他们知道一天的每个时段什么地方可能堵车。",
            "除了正式的名字，中国人一般都有个小名。在家里，父母往往只叫孩子的小名。",
          ],
        },
      ],
      note: "比一比 往往 — 经常. Giống: đều là phó từ chỉ tình huống xuất hiện nhiều lần. Khác: (1) 往往 là tổng kết tình huống đến hiện tại, có tính quy luật, không mang ý chủ quan nên chỉ dùng cho việc đã xảy ra (吃完晚饭，他们一家往往去附近的公园散散步); 经常 chỉ hành động lặp lại, có thể dùng cho ý muốn chủ quan, việc chưa xảy ra (我们以后也经常去公园散散步吧). (2) Câu có 往往 thường nêu rõ tình huống, điều kiện hay kết quả liên quan; 经常 không bị hạn chế này (上大学时我很喜欢运动，经常打篮球、踢足球). (3) 经常 có thể rút gọn thành 常, 往往 không thể rút gọn thành 往.",
    },
  ],

  wordChoice: [
    { sentence: "有的人认为，心情___、身体健康才是真正的幸福。", options: W_EX1, answer: "放松" },
    { sentence: "她听到这个消息后___地哭了。", options: W_EX1, answer: "伤心" },
    { sentence: "这次招聘会提供了差不多1000个工作机会，请同学们___参加。", options: W_EX1, answer: "积极" },
    { sentence: "很多小孩子觉得所有东西___一哭就能得到。", options: W_EX1, answer: "只要" },
    { sentence: "他现在已经成为一个有名的律师，终于向所有人___自己的选择是对的。", options: W_EX1, answer: "证明" },
    { sentence: "A：终于爬上来了，这山太高了！B：看来你真的是___锻炼，以后每天跟我一块儿跑步吧。", options: W_EX2, answer: "缺少" },
    { sentence: "经理说会认真考虑一下，让我别着急，___等消息。", options: W_EX2, answer: "耐心" },
    { sentence: "不管遇到什么问题、___什么事情，都不要着急。", options: W_EX2, answer: "发生" },
    { sentence: "我喜欢那些比较慢、听着让人感觉很浪漫，心情___的歌。", options: W_EX2, answer: "愉快" },
    { sentence: "你的东西怎么___乱放呢？快去打扫一下！", options: W_EX2, answer: "到处" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [14, 15, 1] },
        { vocabId: 5, distractors: [3, 6, 18] },
        { vocabId: 7, distractors: [19, 29, 22] },
        { vocabId: 9, distractors: [8, 10, 17] },
        { vocabId: 11, distractors: [12, 25, 20] },
        { vocabId: 16, distractors: [17, 15, 21] },
        { vocabId: 22, distractors: [29, 24, 5] },
        { vocabId: 26, distractors: [21, 23, 13] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 6, 10, 17, 18, 20, 25, 27],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["这里的", "景色", "真美", "，", "空气也好", "。"], answer: "这里的景色真美，空气也好。", vi: "Phong cảnh ở đây đẹp thật, không khí cũng trong lành." },
        { tokens: ["吃块儿巧克力", "能使", "人的心情", "变得愉快", "。"], answer: "吃块儿巧克力能使人的心情变得愉快。", vi: "Ăn một miếng sô-cô-la có thể khiến tâm trạng trở nên vui vẻ." },
        { tokens: ["一遇到堵车", "，", "人们", "就容易", "变得没有耐心", "。"], answer: "一遇到堵车，人们就容易变得没有耐心。", vi: "Hễ gặp kẹt xe là người ta dễ trở nên mất kiên nhẫn." },
        { tokens: ["生活中", "不缺少美", "，", "缺少的是", "发现美的眼睛", "。"], answer: "生活中不缺少美，缺少的是发现美的眼睛。", vi: "Cuộc sống không thiếu cái đẹp, cái thiếu là đôi mắt biết phát hiện cái đẹp." },
        { tokens: ["绿色", "让", "我们的眼睛", "得到休息", "。"], answer: "绿色让我们的眼睛得到休息。", vi: "Màu xanh lá giúp đôi mắt chúng ta được nghỉ ngơi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Sô-cô-la", text: "高老师：很多人都爱吃巧克力。听说{{c1}}难过的时候吃块儿巧克力，还能{{c2}}人的{{c3}}变得{{c4}}。" },
        { title: "Bài 2 · Sau trận bóng", text: "小夏：上次足球比赛后，好久都没这么{{c5}}了。\n马克：你不要有{{c6}}，好好儿准备下次比赛就好了。\n马克：事情已经{{c7}}了，过去的就让它成为过去吧。" },
        { title: "Bài 3 · Kẹt xe", text: "师傅：前面有点儿{{c8}}，我们走另外一条路，{{c9}}差不多。\n马克：一遇到堵车，人们就容易变得没有{{c10}}。" },
      ],
      answers: { c1: "伤心", c2: "使", c3: "心情", c4: "愉快", c5: "放松", c6: "压力", c7: "发生", c8: "堵车", c9: "距离", c10: "耐心" },
      bank: ["伤心", "使", "心情", "愉快", "放松", "压力", "发生", "堵车", "距离", "耐心", "回忆", "成为", "景色"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về cái đẹp trong cuộc sống và màu sắc.",
      passages: [
        { title: "Bài 4 · Cái đẹp trong cuộc sống", text: "草绿了，那是{{e1}}的颜色。生活中不{{e2}}美，缺少的是发现美的眼睛。{{e3}}有心，生活中的美{{e4}}都是。生活的{{e5}}要自己选择，{{e6}}，遇到烦恼时，你应该想一些办法让自己从不高兴的心情中走出来。" },
        { title: "Bài 5 · Màu sắc và tính cách", text: "科学研究{{e7}}，女孩子对衣服颜色的选择{{e8}}与她们的性格有关。喜欢穿白色衣服的女孩子性格比较阳光，生活态度{{e9}}向上是她们的共同{{e10}}。" },
      ],
      answers: { e1: "生命", e2: "缺少", e3: "只要", e4: "到处", e5: "态度", e6: "因此", e7: "证明", e8: "往往", e9: "积极", e10: "特点" },
      bank: ["生命", "缺少", "只要", "到处", "态度", "因此", "证明", "往往", "积极", "特点", "经常", "科学", "阳光"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "很多人出国后常常会买外国的巧克力，回来送给亲戚朋友。", vi: "Nhiều người ra nước ngoài thường mua sô-cô-la ngoại về tặng họ hàng bạn bè.", keywords: ["nước ngoài", "sô-cô-la", "họ hàng", "bạn bè"] },
        { zh: "只要这次你好好儿准备，一定能把比赛踢好。", vi: "Chỉ cần lần này bạn chuẩn bị thật tốt, nhất định sẽ đá tốt trận đấu.", keywords: ["chỉ cần", "chuẩn bị", "nhất định", "trận đấu"] },
        { zh: "我们改变不了堵车，但是可以试着改变自己的心情。", vi: "Chúng ta không thay đổi được chuyện kẹt xe, nhưng có thể thử thay đổi tâm trạng của mình.", keywords: ["thay đổi", "kẹt xe", "thử", "tâm trạng"] },
        { zh: "窗外是什么样子，我们无法改变，但我们可以选择站在哪个窗户前。", vi: "Bên ngoài cửa sổ như thế nào, chúng ta không thể thay đổi, nhưng có thể chọn đứng trước ô cửa sổ nào.", keywords: ["cửa sổ", "thay đổi", "chọn", "đứng"] },
        { zh: "颜色也会影响人的心情。", vi: "Màu sắc cũng ảnh hưởng đến tâm trạng con người.", keywords: ["màu sắc", "ảnh hưởng", "tâm trạng"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Phong cảnh ở đây đẹp thật.", answers: ["这里的景色真美。", "这儿的景色真美。"] },
        { vi: "Bạn đừng áp lực.", answers: ["你不要有压力。", "你别有压力。"] },
        { vi: "Chuyện đã xảy ra rồi.", answers: ["事情已经发生了。"] },
        { vi: "Tôi quen anh ấy nhiều năm, vì vậy rất hiểu tính cách của anh ấy.", answers: ["我认识他很多年，因此，很了解他的性格。", "我认识他很多年，因此很了解他的性格。", "我认识他很多年了，因此很了解他的性格。"] },
        { vi: "Thái độ sống phải do chính mình lựa chọn.", answers: ["生活的态度要自己选择。", "生活态度要自己选择。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "高老师的巧克力是她自己从国外买回来的。", a: false },
        { q: "很多女性喜欢吃巧克力，因为巧克力大多是甜的。", a: true },
        { q: "上次足球比赛后，小夏一直很放松。", a: false },
        { q: "小夏觉得如果再努力一点儿，就会多进一个球。", a: true },
        { q: "师傅走错路了，所以要走另外一条路。", a: false },
        { q: "师傅觉得堵车时正好可以休息一下，听听音乐。", a: true },
        { q: "喜欢穿红色衣服的女孩子性格比较浪漫。", a: true },
        { q: "黑色让人心情愉快。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "这里的景色真美，空气也好。",
        "事情已经发生了。",
        "前面有点儿堵车。",
        "生活中不缺少美。",
        "颜色也会影响人的心情。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "每个人都有心情不好的时候。在你心情不好时，你有什么好方法让自己心情变好呢？ (Khi tâm trạng không tốt, bạn có cách gì hay để làm mình vui lên?)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 8 (使, 只要……就……, 可不是, 因此, 往往).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["使", "只要", "可不是", "因此", "往往"],
      minGrammar: 2,
      sample: "每个人都有心情不好的时候，我也一样。我心情不好时，往往会去附近的公园散散步，看看那里的景色。草绿了，花开了，这些都能使我放松下来。有时候我也会吃块儿巧克力，或者听听自己喜欢的音乐。我觉得事情已经发生了，就不要一直回忆它，因此，我会试着改变自己的心情。只要有积极的生活态度，就能发现生活中的美。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 往往 / 经常", points: 6,
      subtitle: "Chọn 往往 hoặc 经常 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "往往 / 经常",
      options: ["往往", "经常"],
      items: [
        { q: "中国人___会请重要的客人去饭店吃饭。", answers: ["往往", "经常"] },
        { q: "爷爷___告诉我不管做什么事情都应该认真。", answers: ["经常"] },
        { q: "那个饭馆的菜不仅好吃，而且价格不贵，以后咱们可以___去。", answers: ["经常"] },
        { q: "这个工作___要加班，几乎没时间陪孩子，这个让我受不了。", answers: ["经常"] },
        { q: "很多30岁左右的年轻人，平时工作紧张，他们___是饿了才吃饭，渴了才喝水。", answers: ["往往", "经常"] },
        { q: "女孩子对衣服颜色的选择___与她们的性格有关。", answers: ["往往"] },
        { q: "长时间对着电脑工作对身体不好，我们以后也___去公园散散步吧。", answers: ["经常"] },
        { q: "吃完晚饭，他们一家___去附近的公园散散步。", answers: ["往往", "经常"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 只要……就……", points: 6,
      subtitle: "Điền 只要 hoặc 就 vào chỗ trống.",
      grammarWord: "只要……就……",
      items: [
        { q: "___这次你好好儿准备，一定能把比赛踢好。", answers: ["只要"] },
        { q: "只要你用心___会发现，身边有那么多有意思的事情。", answers: ["就"] },
        { q: "对我来说，___能做自己喜欢的事，就是幸福。", answers: ["只要"] },
        { q: "___有心，生活中的美到处都是。", answers: ["只要"] },
        { q: "只要你努力学习，爸妈一定___会支持你。", answers: ["就"] },
        { q: "___你有时间，我就一定会参加。", answers: ["只要"] },
        { q: "只要能取得好的成绩，我们___去旅游。", answers: ["就"] },
        { q: "___打开电视，总能看到那么多的广告。", answers: ["只要"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 使", points: 5,
      subtitle: "Điền động từ 使 (khiến cho, làm cho) vào chỗ trống.",
      grammarWord: "使",
      items: [
        { q: "伤心的时候吃块儿巧克力，能___人的心情变得愉快。", answers: ["使", "让"] },
        { q: "在中国生活的三年___他在音乐方面有了很多新的想法。", answers: ["使", "让"] },
        { q: "她看都没看过我一眼，怎么样才能___她喜欢我呢？", answers: ["使", "让"] },
        { q: "房间里应该多放一些绿色植物，这样能___人感到舒服。", answers: ["使", "让"] },
        { q: "这件事___我很伤心。", answers: ["使", "让"] },
        { q: "红色___人变得热情。", answers: ["使", "让"] },
        { q: "长期堵车会___人变得没有耐心。", answers: ["使", "让"] },
        { q: "这次比赛___我明白了努力的重要。", answers: ["使", "让"] },
      ],
    },
  ],
};
