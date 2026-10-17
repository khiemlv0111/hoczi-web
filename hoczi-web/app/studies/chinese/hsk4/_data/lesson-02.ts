import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第2课 真正的朋友 (Người bạn chân chính)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 22–33 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson02: Lesson = {
  level: "hsk4",
  no: 2,
  slug: "bai-2",
  zh: "真正的朋友",
  pinyin: "Zhēnzhèng de péngyou",
  vi: "Người bạn chân chính",
  en: "True Friends",
  topic: "友谊 · Tình bạn",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 适应、交、平时、短信、聚会、联系、专门、毕业、麻烦、好像、重新、真正、友谊、丰富、无聊、讨厌、周围、交流、理解、困难、及时、陪…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 正好, 差不多 (phân biệt 差不多 – 几乎), 尽管, 却, 而.",
    "Đọc hiểu 3 đoạn hội thoại về bạn bè, họp lớp và 2 bài đọc về cách kết bạn, thế nào là bạn thật sự; thuật lại được nội dung.",
    "Hỏi – đáp về chuyện kết bạn và giới thiệu người bạn thân nhất của mình bằng tiếng Trung.",
    "Nắm các từ mở rộng cùng chữ 系: 联系、关系、没关系.",
  ],

  warmUp: [
    {
      zh: "给下边的词语选择对应的图片：聚会、购物、运动、学习、聊天儿、旅行",
      vi: "Chọn hình tương ứng với các từ: 聚会 (họp mặt), 购物 (mua sắm), 运动 (vận động, thể thao), 学习 (học tập), 聊天儿 (trò chuyện), 旅行 (du lịch).",
    },
    {
      zh: "你跟朋友是怎么认识的？你们常常一起做什么？",
      vi: "Bạn quen biết bạn mình như thế nào? Các bạn thường cùng làm những việc gì? (Gợi ý: tên bạn, thời gian và địa điểm gặp lần đầu, việc thường làm cùng nhau.)",
    },
  ],

  vocab: [
    { id: 1, han: "适应", py: "shìyìng", pos: "đgt.", meaning: "thích nghi", example: "来中国快一年了，你适应这儿的生活了吗？", exampleVi: "Đến Trung Quốc gần một năm rồi, cậu đã thích nghi với cuộc sống ở đây chưa?" },
    { id: 2, han: "交", py: "jiāo", pos: "đgt.", meaning: "kết giao", example: "最近我还交了一个中国朋友。", exampleVi: "Gần đây tớ còn kết bạn với một người Trung Quốc." },
    { id: 3, han: "平时", py: "píngshí", pos: "dt.", meaning: "lúc thường, ngày thường", example: "平时我们常常一起看书、逛街、踢足球。", exampleVi: "Ngày thường bọn tớ hay cùng đọc sách, dạo phố, đá bóng." },
    { id: 4, han: "逛", py: "guàng", pos: "đgt.", meaning: "đi dạo", example: "周末我们常常一起去逛街。", exampleVi: "Cuối tuần chúng tôi thường cùng đi dạo phố." },
    { id: 5, han: "短信", py: "duǎnxìn", pos: "dt.", meaning: "tin nhắn", example: "有时候他还给我发一些幽默短信。", exampleVi: "Có lúc cậu ấy còn gửi cho tớ vài tin nhắn hài hước." },
    { id: 6, han: "正好", py: "zhènghǎo", pos: "p.", meaning: "đúng lúc, được dịp, gặp dịp", example: "我们下午要去踢足球，正好一起去吧。", exampleVi: "Chiều nay bọn tớ đi đá bóng, vừa hay cùng đi nhé." },
    { id: 7, han: "马克", py: "Mǎkè", pos: "dt.", meaning: "Mark (tên người)", example: "小夏和马克聊马克的中国朋友。", exampleVi: "Tiểu Hạ và Mark trò chuyện về người bạn Trung Quốc của Mark." },
    { id: 8, han: "聚会", py: "jùhuì", pos: "đgt./dt.", meaning: "gặp gỡ; cuộc họp mặt", example: "星期天同学聚会，你能来吗？", exampleVi: "Chủ nhật họp lớp, cậu đến được không?" },
    { id: 9, han: "联系", py: "liánxì", pos: "đgt.", meaning: "liên hệ", example: "班里同学你联系得怎么样了？", exampleVi: "Các bạn trong lớp cậu liên hệ đến đâu rồi?" },
    { id: 10, han: "差不多", py: "chàbuduō", pos: "p.", meaning: "gần như, hầu như", example: "差不多一半儿吧。", exampleVi: "Khoảng gần một nửa." },
    { id: 11, han: "专门", py: "zhuānmén", pos: "p.", meaning: "đặc biệt, riêng biệt", example: "张远还专门从国外飞回来呢。", exampleVi: "Trương Viễn còn đặc biệt bay từ nước ngoài về đấy." },
    { id: 12, han: "毕业", py: "bì yè", pos: "đgt.", meaning: "tốt nghiệp", example: "毕业都快十年了，真想大家啊！", exampleVi: "Tốt nghiệp đã gần mười năm rồi, nhớ mọi người quá!" },
    { id: 13, han: "麻烦", py: "máfan", pos: "đgt.", meaning: "làm phiền", example: "麻烦你跟她联系一下，请她一起来参加同学聚会。", exampleVi: "Phiền cậu liên hệ với cô ấy, mời cô ấy cùng đến dự họp lớp." },
    { id: 14, han: "张远", py: "Zhāng Yuǎn", pos: "dt.", meaning: "Trương Viễn (tên người)", example: "张远还专门从国外飞回来呢。", exampleVi: "Trương Viễn còn đặc biệt bay từ nước ngoài về đấy." },
    { id: 15, han: "上海", py: "Shànghǎi", pos: "dt.", meaning: "Thượng Hải (một thành phố của Trung Quốc)", example: "她毕业后就去上海工作了。", exampleVi: "Tốt nghiệp xong cô ấy đến Thượng Hải làm việc." },
    { id: 16, han: "好像", py: "hǎoxiàng", pos: "p.", meaning: "giống như, dường như", example: "一看到这张照片，我就想起过去那段快乐的日子，好像重新回到了校园。", exampleVi: "Vừa nhìn thấy tấm ảnh này, mình lại nhớ đến quãng ngày vui vẻ trước kia, như thể được trở lại sân trường." },
    { id: 17, han: "重新", py: "chóngxīn", pos: "p.", meaning: "lần nữa, lại một lần nữa", example: "好像重新回到了校园。", exampleVi: "Như thể được trở lại sân trường một lần nữa." },
    { id: 18, han: "尽管", py: "jǐnguǎn", pos: "liên.", meaning: "cho dù, mặc dù", example: "尽管已经毕业这么多年，我们还是经常联系的。", exampleVi: "Mặc dù đã tốt nghiệp nhiều năm như vậy, chúng mình vẫn thường xuyên liên lạc." },
    { id: 19, han: "真正", py: "zhēnzhèng", pos: "tt.", meaning: "chân chính, thật sự", example: "能有一个真正的朋友，是多么不容易！", exampleVi: "Có được một người bạn thật sự, không dễ dàng chút nào!" },
    { id: 20, han: "友谊", py: "yǒuyì", pos: "dt.", meaning: "tình bạn", example: "有一段真正的友谊，是多么不容易！", exampleVi: "Có được một tình bạn thật sự, không dễ dàng chút nào!" },
    { id: 21, han: "丰富", py: "fēngfù", pos: "đgt.", meaning: "làm phong phú", example: "每个人都需要朋友，朋友可以丰富我们的生活。", exampleVi: "Ai cũng cần bạn bè, bạn bè có thể làm phong phú cuộc sống của chúng ta." },
    { id: 22, han: "无聊", py: "wúliáo", pos: "tt.", meaning: "vô vị, nhàm chán", example: "离开朋友，我们的生活一定会非常无聊。", exampleVi: "Rời xa bạn bè, cuộc sống của chúng ta chắc chắn sẽ rất nhàm chán." },
    { id: 23, han: "讨厌", py: "tǎoyàn", pos: "đgt.", meaning: "ghét, không thích", example: "一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。", exampleVi: "Một người tính khí không tốt tuy chưa chắc bị người khác ghét, nhưng lại rất khó kết bạn." },
    { id: 24, han: "却", py: "què", pos: "p.", meaning: "lại, nhưng mà", example: "现在很多人虽然住在同一个楼里，但是却从来没说过话。", exampleVi: "Bây giờ nhiều người tuy sống cùng một tòa nhà nhưng lại chưa bao giờ nói chuyện với nhau." },
    { id: 25, han: "周围", py: "zhōuwéi", pos: "dt.", meaning: "xung quanh", example: "我们还要经常跟周围的人交流。", exampleVi: "Chúng ta còn phải thường xuyên giao lưu với những người xung quanh." },
    { id: 26, han: "交流", py: "jiāoliú", pos: "đgt.", meaning: "giao lưu, trao đổi", example: "交流能让人们互相了解。", exampleVi: "Giao lưu giúp mọi người hiểu nhau." },
    { id: 27, han: "理解", py: "lǐjiě", pos: "đgt.", meaning: "hiểu", example: "什么是真正的朋友？不同的人会有不同的理解。", exampleVi: "Thế nào là bạn thật sự? Mỗi người sẽ có cách hiểu khác nhau." },
    { id: 28, han: "镜子", py: "jìngzi", pos: "dt.", meaning: "gương, gương soi", example: "有些人觉得朋友应该像镜子，能帮自己看到缺点。", exampleVi: "Có người cho rằng bạn bè nên giống như tấm gương, giúp mình nhìn thấy khuyết điểm." },
    { id: 29, han: "而", py: "ér", pos: "liên.", meaning: "(chỉ sự tương phản) trong khi đó, mà", example: "“明”字，左边的“日”意思是太阳，而右边的“月”意思是月亮。", exampleVi: "Chữ “明”, chữ “日” bên trái nghĩa là mặt trời, còn chữ “月” bên phải nghĩa là mặt trăng." },
    { id: 30, han: "当", py: "dāng", pos: "gt.", meaning: "khi", example: "当你遇到困难的时候，真正的朋友会站出来。", exampleVi: "Khi bạn gặp khó khăn, người bạn thật sự sẽ đứng ra." },
    { id: 31, han: "困难", py: "kùnnan", pos: "dt.", meaning: "khó khăn", example: "当你遇到困难的时候，真正的朋友会及时给你帮助。", exampleVi: "Khi bạn gặp khó khăn, người bạn thật sự sẽ giúp đỡ bạn kịp thời." },
    { id: 32, han: "及时", py: "jíshí", pos: "p.", meaning: "đúng lúc, kịp thời", example: "真正的朋友会站出来，及时给你帮助。", exampleVi: "Người bạn thật sự sẽ đứng ra giúp đỡ bạn kịp thời." },
    { id: 33, han: "陪", py: "péi", pos: "đgt.", meaning: "đi cùng, ở bên cạnh", example: "当你无聊或者难过的时候，真正的朋友会陪在你身边。", exampleVi: "Khi bạn buồn chán hay đau lòng, người bạn thật sự sẽ ở bên cạnh bạn." },
    { id: 34, han: "关系", py: "guānxi", pos: "dt.", meaning: "quan hệ, mối quan hệ", example: "你和她关系那么好，能帮我介绍一下吗？", exampleVi: "Cậu và cô ấy thân như vậy, giới thiệu giúp tớ được không?", group: "extended" },
    { id: 35, han: "没关系", py: "méi guānxi", pos: "đgt.", meaning: "không sao, không có gì", example: "我可能有点儿发烧，没关系，休息一下就好了。", exampleVi: "Có lẽ tôi hơi sốt, không sao đâu, nghỉ một chút là khỏe.", group: "extended" },
  ],

  text: {
    title: "课文 真正的朋友",
    paragraphs: [
      {
        heading: "课文一 · 小夏和马克聊马克的中国朋友",
        zh: "小夏：来中国快一年了，你适应这儿的生活了吗？\n马克：开始有点儿不习惯，后来就慢慢适应了，最近我还交了一个中国朋友。\n小夏：那就好，快给我讲讲你新交的中国朋友。\n马克：我们是在图书馆认识的。平时我们常常一起看书、逛街、踢足球。有时候他还给我发一些幽默短信。\n小夏：你的这个朋友真不错！下次介绍我们认识认识，怎么样？\n马克：没问题！我们下午要去踢足球，正好一起去吧。",
        vi: "Tiểu Hạ: Đến Trung Quốc gần một năm rồi, cậu đã thích nghi với cuộc sống ở đây chưa?\nMark: Lúc đầu hơi không quen, sau đó dần dần thích nghi được, gần đây tớ còn kết bạn với một người Trung Quốc.\nTiểu Hạ: Thế thì tốt, mau kể cho tớ nghe về người bạn Trung Quốc mới quen của cậu đi.\nMark: Bọn tớ quen nhau ở thư viện. Ngày thường bọn tớ hay cùng đọc sách, dạo phố, đá bóng. Có lúc cậu ấy còn gửi cho tớ vài tin nhắn hài hước.\nTiểu Hạ: Người bạn này của cậu tốt thật! Lần sau giới thiệu cho bọn mình làm quen nhé, được không?\nMark: Không vấn đề gì! Chiều nay bọn tớ đi đá bóng, vừa hay cậu đi cùng luôn.",
        questions: ["马克刚来中国的时候适应这儿的生活吗？现在呢？", "马克新交的中国朋友怎么样？"],
      },
      {
        heading: "课文二 · 小李和小林聊同学聚会的事情",
        zh: "小李：星期天同学聚会，你能来吗？\n小林：能来。班里同学你联系得怎么样了？来多少人？\n小李：差不多一半儿吧，张远还专门从国外飞回来呢。\n小林：是吗？毕业都快十年了，真想大家啊！对了，今天早上，我在地铁站遇到了王静，她毕业后就去上海工作了，她这次是来旅游的。\n小李：那太好了！麻烦你跟她联系一下，请她一起来参加同学聚会。聚会就在学校门口那个饭店，六点半。别迟到啊！\n小林：放心吧。星期天六点半见！",
        vi: "Tiểu Lý: Chủ nhật họp lớp, cậu đến được không?\nTiểu Lâm: Được. Các bạn trong lớp cậu liên hệ đến đâu rồi? Bao nhiêu người đến?\nTiểu Lý: Khoảng gần một nửa, Trương Viễn còn đặc biệt bay từ nước ngoài về đấy.\nTiểu Lâm: Thế à? Tốt nghiệp đã gần mười năm rồi, nhớ mọi người quá! À phải, sáng nay tớ gặp Vương Tịnh ở ga tàu điện ngầm, tốt nghiệp xong cô ấy đến Thượng Hải làm việc, lần này cô ấy đến du lịch.\nTiểu Lý: Thế thì tốt quá! Phiền cậu liên hệ với cô ấy, mời cô ấy cùng đến dự họp lớp. Họp lớp ở nhà hàng trước cổng trường, sáu giờ rưỡi. Đừng đến muộn nhé!\nTiểu Lâm: Yên tâm đi. Sáu giờ rưỡi chủ nhật gặp nhé!",
        questions: ["小李为什么给小林打电话？", "他们什么时候聚会？在哪儿聚会？"],
      },
      {
        heading: "课文三 · 孙月和王静聊她们的朋友",
        zh: "孙月：这是什么时候的照片？你真年轻！\n王静：这是上大学时的照片。一看到这张照片，我就想起过去那段快乐的日子，好像重新回到了校园。\n孙月：旁边这个人一定是你的好朋友吧？你们现在还联系吗？\n王静：当然了，尽管已经毕业这么多年，我们还是经常联系的，每次都有说不完的话。\n孙月：真羡慕你！我上大学时最好的朋友去了南方工作，我们俩已经好久没联系了。我一会儿就给她打个电话。\n王静：对。要知道，能有一个真正的朋友，有一段真正的友谊，是多么不容易！",
        vi: "Tôn Nguyệt: Đây là ảnh chụp lúc nào thế? Cậu trẻ thật!\nVương Tịnh: Đây là ảnh hồi học đại học. Vừa nhìn thấy tấm ảnh này, tớ lại nhớ đến quãng ngày vui vẻ trước kia, như thể được trở lại sân trường lần nữa.\nTôn Nguyệt: Người bên cạnh chắc chắn là bạn thân của cậu nhỉ? Bây giờ hai người còn liên lạc không?\nVương Tịnh: Tất nhiên rồi, mặc dù đã tốt nghiệp nhiều năm như vậy, bọn tớ vẫn thường xuyên liên lạc, lần nào cũng nói mãi không hết chuyện.\nTôn Nguyệt: Ngưỡng mộ cậu thật! Người bạn thân nhất hồi đại học của tớ đã về miền Nam làm việc, hai đứa đã lâu lắm rồi không liên lạc. Lát nữa tớ sẽ gọi điện cho cô ấy.\nVương Tịnh: Đúng đấy. Phải biết rằng, có được một người bạn thật sự, một tình bạn thật sự, không dễ dàng chút nào!",
        questions: ["王静看到上大学时的照片会想起什么？", "毕业以后，孙月跟她上大学时最好的朋友还经常联系吗？"],
      },
      {
        heading: "课文四 · 怎样交到更多的朋友",
        zh: "每个人都需要朋友，朋友可以丰富我们的生活。离开朋友，我们的生活一定会非常无聊。那么，怎样才能交到更多的朋友呢？当然，要有好脾气。一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。因为没有人会喜欢跟一个总是容易生气的人在一起。我们还要经常跟周围的人交流。交流能让人们互相了解，如果有共同的兴趣、爱好或者习惯，就更容易成为朋友了。",
        vi: "Ai cũng cần bạn bè, bạn bè có thể làm phong phú cuộc sống của chúng ta. Rời xa bạn bè, cuộc sống của chúng ta chắc chắn sẽ vô cùng nhàm chán. Vậy làm thế nào mới kết được nhiều bạn hơn? Đương nhiên, phải có tính tình tốt. Một người tính khí không tốt tuy chưa chắc bị người khác ghét, nhưng lại rất khó kết bạn. Bởi vì chẳng ai thích ở cạnh một người lúc nào cũng dễ nổi nóng. Chúng ta còn phải thường xuyên giao lưu với những người xung quanh. Giao lưu giúp mọi người hiểu nhau, nếu có chung hứng thú, sở thích hoặc thói quen thì càng dễ trở thành bạn bè.",
        questions: ["如果没有朋友，我们的生活会怎么样？", "怎样才能交到更多的朋友？"],
      },
      {
        heading: "课文五 · 什么是真正的朋友",
        zh: "人的一生可以什么也没有，但不能没有朋友，而且必须要有自己真正的朋友。什么是真正的朋友？不同的人会有不同的理解。有些人觉得朋友就是能和自己一起快乐的人；有些人觉得朋友应该像镜子，能帮自己看到缺点。而我的理解是：当你遇到困难的时候，真正的朋友会站出来，及时给你帮助；当你无聊或者难过的时候，真正的朋友会陪在你身边，想办法让你感到幸福。",
        vi: "Cả đời người có thể không có gì cả, nhưng không thể không có bạn bè, hơn nữa nhất định phải có người bạn thật sự của riêng mình. Thế nào là bạn thật sự? Mỗi người sẽ có cách hiểu khác nhau. Có người cho rằng bạn bè là người có thể cùng mình vui vẻ; có người cho rằng bạn bè nên giống như tấm gương, giúp mình nhìn ra khuyết điểm. Còn theo tôi hiểu thì: khi bạn gặp khó khăn, người bạn thật sự sẽ đứng ra giúp đỡ bạn kịp thời; khi bạn buồn chán hay đau lòng, người bạn thật sự sẽ ở bên cạnh bạn, tìm cách khiến bạn cảm thấy hạnh phúc.",
        questions: ["什么是真正的朋友？", "关于朋友，你的理解是什么？"],
      },
    ],
    notes: [
      "小夏: Tiểu Hạ (夏 Xià – họ Hạ); 马克 (Mǎkè): Mark; 小林: Tiểu Lâm (林 Lín – họ Lâm); 张远 (Zhāng Yuǎn): Trương Viễn; 上海 (Shànghǎi): Thượng Hải.",
      "Văn hóa – 在家靠父母，出门靠朋友 (Ở nhà nhờ cha mẹ, ra ngoài nhờ bạn bè): quan niệm kết bạn của người Trung Quốc thể hiện qua tám chữ “有福同享，有难同当” (có phúc cùng hưởng, có họa cùng chia).",
    ],
  },

  grammar: [
    {
      word: "正好",
      title: "Vừa vặn; đúng lúc, vừa hay",
      usages: [
        {
          label: "Tính từ – vừa vặn",
          explain: "Chỉ (thời gian, vị trí, thể tích, số lượng, mức độ…) thỏa mãn vừa đúng một điều kiện nào đó (không sớm không muộn, không nhiều không ít…).",
          examples: ["苹果八块五，西瓜十一块五，正好二十块。", "你来得正好，我的钱包不见了，借我点儿钱吧。"],
        },
        {
          label: "Phó từ – đúng lúc, gặp dịp",
          explain: "Chỉ vừa khéo gặp đúng cơ hội để làm việc gì.",
          examples: ["我们下午要去踢足球，正好一起去吧。", "我妹妹出生那天，正好下雪，所以爸爸妈妈叫她“小雪”。"],
        },
      ],
    },
    {
      word: "差不多",
      title: "Xấp xỉ; gần như, khoảng",
      usages: [
        {
          label: "Tính từ – xấp xỉ",
          explain: "Chỉ gần giống nhau, khác biệt không lớn.",
          examples: ["这两个电子词典看上去差不多，左边这个怎么这么贵？", "他们俩是在国外旅游的时候认识的，性格差不多，所以很快就成了好朋友。"],
        },
        {
          label: "Phó từ – gần như, khoảng",
          explain: "Chỉ rất gần về mức độ, phạm vi, thời gian, khoảng cách, số lượng…",
          examples: ["A：班里同学你联系得怎么样了？来多少人？B：差不多一半儿吧。", "女儿上中学后，个子长得特别快，现在都快一米七了，差不多跟我一样高了。"],
        },
        {
          label: "So sánh 差不多 – 几乎",
          explain: "Giống nhau: đều là phó từ chỉ rất gần, xấp xỉ, đều làm trạng ngữ. Khác nhau: 差不多 đứng ngay trước tính từ đơn âm tiết được, 几乎 thì cần thêm từ khác; 差不多 đứng trước số lượng được, 几乎 thì không; 差不多 làm vị ngữ được, 几乎 thì không; 几乎 còn chỉ việc không mong muốn suýt xảy ra.",
          examples: [
            "他汉语说得很好，差不多/几乎跟中国人一样。",
            "他们俩差不多高。",
            "他们俩几乎一样高。",
            "李老师差不多六十岁了。",
            "姐妹俩性格差不多。",
            "这件事我几乎忘了告诉你了。",
          ],
        },
      ],
      note: "比一比 差不多 – 几乎: 差不多高 / 几乎一样高; 差不多六十岁 (không nói 几乎六十岁); 性格差不多 (làm vị ngữ); 几乎忘了 = suýt quên (差不多 không có cách dùng này).",
    },
    {
      word: "尽管",
      title: "Liên từ “mặc dù”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thường dùng ở vế thứ nhất của câu phức để nêu một sự thật; vế sau là kết quả trái với thông thường, hay kết hợp với 但是/可是/却/还是.",
          examples: [
            "尽管已经毕业这么多年，我们还是经常联系的。",
            "男朋友送给我的这份礼物尽管不贵，但却让我非常感动。",
            "叔叔最大的爱好就是打篮球，大学时他还多次参加校篮球比赛。尽管现在工作很忙，可到了周末他还是会跟朋友去打球。",
          ],
        },
      ],
    },
    {
      word: "却",
      title: "Phó từ “lại, nhưng mà”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Đứng sau chủ ngữ, trước động từ, biểu thị sự chuyển ý với ngữ khí tương đối nhẹ nhàng.",
          examples: [
            "有人觉得有房子和汽车就是幸福，有人却认为找到真正的爱情才是幸福。",
            "一个脾气不好的人虽然不一定让人讨厌，但是却很难跟人交朋友。",
            "现在很多人虽然住在同一个楼里，但是却从来没说过话。",
          ],
        },
      ],
      note: "却 là phó từ nên phải đứng sau chủ ngữ (他却……), không đứng trước chủ ngữ như 但是.",
    },
    {
      word: "而",
      title: "Liên từ “mà, còn, trong khi đó”",
      usages: [
        {
          label: "Quan hệ đồng đẳng (song song)",
          explain: "Nối hai vế câu trong câu phức, biểu thị quan hệ ngang hàng.",
          examples: ["“明”字，左边的“日”意思是太阳，而右边的“月”意思是月亮。", "结婚前，我们都要清楚自己想要的是什么，而不要被别人对幸福的看法影响。"],
        },
        {
          label: "Quan hệ chuyển ý (tương phản)",
          explain: "Biểu thị sự tương phản, chuyển ý giữa hai vế.",
          examples: ["在工作中遇到了问题，男人回到家不喜欢跟妻子说，而女人喜欢跟丈夫说。", "有些人觉得朋友就是能和自己一起快乐的人，而我的理解是：当你遇到困难的时候，真正的朋友会站出来，及时给你帮助。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "每个人对幸福都有不同的___。", options: ["周围", "理解", "无聊", "适应"], answer: "理解" },
    { sentence: "我喜欢现在住的地方，很方便。不像以前住的地方，___一个超市都没有。", options: ["周围", "镜子", "理解", "无聊"], answer: "周围" },
    { sentence: "生活就像___，你对它笑，它也对你笑；如果你对它哭，它也对你哭。", options: ["适应", "镜子", "周围", "理解"], answer: "镜子" },
    { sentence: "周末总是一个人在家太___了，你应该找朋友出去逛逛街、看看电影、吃吃饭。", options: ["无聊", "适应", "镜子", "周围"], answer: "无聊" },
    { sentence: "我刚来这儿的时候很不___，后来慢慢习惯了，也交到了很多朋友。", options: ["理解", "无聊", "适应", "镜子"], answer: "适应" },
    { sentence: "A：上车吧，我送你。B：不___你了，我坐出租车回去。", options: ["麻烦", "好像", "联系", "陪"], answer: "麻烦" },
    { sentence: "A：周末的同学聚会你参加吗？B：当然，有几个同学毕业后就没___了，正好借这个机会见见。", options: ["平时", "联系", "麻烦", "好像"], answer: "联系" },
    { sentence: "A：都九点了，你怎么还不起床？B：昨晚看足球比赛看到两点半，这不是周六吗？___哪能睡到九点？", options: ["陪", "好像", "平时", "联系"], answer: "平时" },
    { sentence: "A：小李，那个女孩儿是谁啊？你认识？B：应该不认识，但是___在哪儿见过。", options: ["好像", "麻烦", "陪", "平时"], answer: "好像" },
    { sentence: "A：经理，我丈夫生病了。我想请一天假，___他去医院看看。B：好，你先把家里照顾好，工作的事别担心。", options: ["联系", "陪", "好像", "麻烦"], answer: "陪" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [26, 27, 9] },
        { vocabId: 5, distractors: [8, 3, 28] },
        { vocabId: 6, distractors: [16, 10, 17] },
        { vocabId: 12, distractors: [13, 11, 4] },
        { vocabId: 18, distractors: [24, 29, 30] },
        { vocabId: 20, distractors: [19, 21, 31] },
        { vocabId: 22, distractors: [23, 25, 32] },
        { vocabId: 34, distractors: [35, 9, 33] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [3, 4, 10, 17, 18, 20, 23, 28],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["最近", "我", "还", "交了", "一个中国朋友", "。"], answer: "最近我还交了一个中国朋友。", vi: "Gần đây tôi còn kết bạn với một người Trung Quốc." },
        { tokens: ["我们", "是在", "图书馆", "认识的", "。"], answer: "我们是在图书馆认识的。", vi: "Chúng tôi quen nhau ở thư viện." },
        { tokens: ["麻烦你", "跟她", "联系", "一下", "。"], answer: "麻烦你跟她联系一下。", vi: "Phiền bạn liên hệ với cô ấy một chút." },
        { tokens: ["尽管", "已经毕业这么多年", "，", "我们", "还是", "经常联系的", "。"], answer: "尽管已经毕业这么多年，我们还是经常联系的。", vi: "Mặc dù đã tốt nghiệp nhiều năm như vậy, chúng tôi vẫn thường xuyên liên lạc." },
        { tokens: ["交流", "能让", "人们", "互相了解", "。"], answer: "交流能让人们互相了解。", vi: "Giao lưu giúp mọi người hiểu nhau." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (đoạn 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Người bạn Trung Quốc của Mark", text: "小夏：来中国快一年了，你{{c1}}这儿的生活了吗？\n马克：开始有点儿不习惯，后来就慢慢适应了，最近我还{{c2}}了一个中国朋友。\n马克：我们是在图书馆认识的。{{c3}}我们常常一起看书、{{c4}}街、踢足球。有时候他还给我发一些幽默{{c5}}。\n马克：没问题！我们下午要去踢足球，{{c6}}一起去吧。" },
        { title: "Bài khóa 2 · Họp lớp", text: "小林：能来。班里同学你联系得怎么样了？来多少人？\n小李：{{c7}}一半儿吧，张远还{{c8}}从国外飞回来呢。\n小林：是吗？{{c9}}都快十年了，真想大家啊！\n小李：那太好了！{{c10}}你跟她联系一下，请她一起来参加同学聚会。" },
      ],
      answers: { c1: "适应", c2: "交", c3: "平时", c4: "逛", c5: "短信", c6: "正好", c7: "差不多", c8: "专门", c9: "毕业", c10: "麻烦" },
      bank: ["适应", "交", "平时", "逛", "短信", "正好", "差不多", "专门", "毕业", "麻烦", "联系", "好像", "尽管"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (đoạn 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào hai bài đọc về cách kết bạn và thế nào là bạn thật sự.",
      passages: [
        { title: "Bài khóa 4 · Làm sao kết được nhiều bạn", text: "每个人都需要朋友，朋友可以{{e1}}我们的生活。离开朋友，我们的生活一定会非常{{e2}}。那么，怎样才能交到更多的朋友呢？当然，要有好脾气。一个脾气不好的人虽然不一定让人{{e3}}，但是{{e4}}很难跟人交朋友。……我们还要经常跟{{e5}}的人{{e6}}。" },
        { title: "Bài khóa 5 · Bạn thật sự", text: "什么是真正的朋友？不同的人会有不同的{{e7}}。有些人觉得朋友就是能和自己一起快乐的人；有些人觉得朋友应该像{{e8}}，能帮自己看到缺点。而我的理解是：当你遇到{{e9}}的时候，真正的朋友会站出来，{{e10}}给你帮助。" },
      ],
      answers: { e1: "丰富", e2: "无聊", e3: "讨厌", e4: "却", e5: "周围", e6: "交流", e7: "理解", e8: "镜子", e9: "困难", e10: "及时" },
      bank: ["丰富", "无聊", "讨厌", "却", "周围", "交流", "理解", "镜子", "困难", "及时", "陪", "而", "真正"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "来中国快一年了，你适应这儿的生活了吗？", vi: "Đến Trung Quốc gần một năm rồi, bạn đã thích nghi với cuộc sống ở đây chưa?", keywords: ["Trung Quốc", "một năm", "thích nghi", "cuộc sống"] },
        { zh: "毕业都快十年了，真想大家啊！", vi: "Tốt nghiệp đã gần mười năm rồi, thật nhớ mọi người quá!", keywords: ["tốt nghiệp", "mười năm", "nhớ"] },
        { zh: "能有一个真正的朋友，有一段真正的友谊，是多么不容易！", vi: "Có được một người bạn thật sự, một tình bạn thật sự, không dễ dàng chút nào!", keywords: ["bạn", "tình bạn", "không dễ"] },
        { zh: "离开朋友，我们的生活一定会非常无聊。", vi: "Rời xa bạn bè, cuộc sống của chúng ta chắc chắn sẽ vô cùng nhàm chán.", keywords: ["bạn bè", "cuộc sống", "nhàm chán"] },
        { zh: "当你遇到困难的时候，真正的朋友会及时给你帮助。", vi: "Khi bạn gặp khó khăn, người bạn thật sự sẽ giúp đỡ bạn kịp thời.", keywords: ["khó khăn", "bạn thật sự", "kịp thời", "giúp đỡ"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chiều nay chúng tôi đi đá bóng, vừa hay cùng đi nhé.", answers: ["我们下午要去踢足球，正好一起去吧。", "我们下午去踢足球，正好一起去吧。"] },
        { vi: "Hai người họ cao xấp xỉ nhau.", answers: ["他们俩差不多高。", "他们俩几乎一样高。", "他们俩差不多一样高。"] },
        { vi: "Mặc dù đã tốt nghiệp nhiều năm như vậy, chúng tôi vẫn thường xuyên liên lạc.", answers: ["尽管已经毕业这么多年，我们还是经常联系的。", "尽管已经毕业这么多年，我们还是经常联系。"] },
        { vi: "Anh ấy thích rèn luyện thân thể, em trai anh ấy lại không thích.", answers: ["他喜欢锻炼身体，他弟弟却不喜欢。", "他喜欢锻炼身体，弟弟却不喜欢。"] },
        { vi: "Phiền bạn liên hệ với cô ấy một chút.", answers: ["麻烦你跟她联系一下。", "麻烦你和她联系一下。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "马克刚来中国的时候有点儿不习惯。", a: true },
        { q: "马克和他的中国朋友是在足球场认识的。", a: false },
        { q: "张远专门从国外飞回来参加同学聚会。", a: true },
        { q: "王静毕业后就去北京工作了。", a: false },
        { q: "同学聚会在学校门口的饭店，六点半开始。", a: true },
        { q: "孙月和她上大学时最好的朋友经常联系。", a: false },
        { q: "一个脾气不好的人很容易交到朋友。", a: false },
        { q: "作者觉得，当你遇到困难的时候，真正的朋友会及时给你帮助。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "最近我还交了一个中国朋友。",
        "麻烦你跟她联系一下。",
        "我们俩已经好久没联系了。",
        "朋友可以丰富我们的生活。",
        "真正的朋友会陪在你身边。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请介绍一下你最好的朋友：你们是怎么认识的？他/她是一个什么样的人？你们常常一起做什么？ (Hãy giới thiệu người bạn thân nhất của bạn: quen nhau thế nào, bạn ấy là người ra sao, hai bạn thường cùng làm gì.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 2 (正好, 差不多, 尽管, 却, 而).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["正好", "差不多", "尽管", "却", "而"],
      minGrammar: 2,
      sample: "我最好的朋友叫小王，我们是上大学时认识的。那时候我刚来北京，还不太适应这儿的生活，正好她住在我旁边，平时常常陪我逛街、吃饭。我们俩个子差不多高，爱好却不太一样：她喜欢运动，而我喜欢看书。毕业以后，她去了上海工作，尽管我们见面的机会少了，但还是经常联系。每次我遇到困难的时候，她都会及时给我帮助。我觉得，有这样一个真正的朋友，是我最大的幸福。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 差不多 / 几乎", points: 6,
      subtitle: "Chọn 差不多 hoặc 几乎 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "差不多 / 几乎",
      options: ["差不多", "几乎"],
      items: [
        { q: "这件事我们班___人人都知道。", answers: ["差不多", "几乎"] },
        { q: "这次考试他们俩的成绩___。", answers: ["差不多"] },
        { q: "今天早上起床晚了，上课___迟到了。", answers: ["几乎"] },
        { q: "我的房间跟这个教室___大。", answers: ["差不多"] },
        { q: "要不是你给我打电话，我___忘了咱俩见面的事。", answers: ["几乎"] },
        { q: "李老师___六十岁了。", answers: ["差不多"] },
        { q: "姐妹俩性格___。", answers: ["差不多"] },
        { q: "他汉语说得很好，___跟中国人一样。", answers: ["差不多", "几乎"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 尽管", points: 6,
      subtitle: "Điền liên từ thích hợp vào chỗ trống (尽管 – mặc dù).",
      grammarWord: "尽管",
      items: [
        { q: "___已经毕业这么多年，我们还是经常联系的。", answers: ["尽管"] },
        { q: "男朋友送给我的这份礼物___不贵，但却让我非常感动。", answers: ["尽管"] },
        { q: "___现在工作很忙，可到了周末他还是会跟朋友去打球。", answers: ["尽管"] },
        { q: "___外面下着大雨，他们还是去踢足球了。", answers: ["尽管"] },
        { q: "___我们认识的时间不长，但已经成了好朋友。", answers: ["尽管"] },
        { q: "他___写得比较慢，但写得很认真。", answers: ["尽管"] },
        { q: "___来中国快一年了，他还是不太习惯这儿的天气。", answers: ["尽管"] },
        { q: "___我们已经好久没联系了，可她还是我最好的朋友。", answers: ["尽管"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 却", points: 5,
      subtitle: "Điền phó từ chỉ sự chuyển ý vào chỗ trống (却 – lại, nhưng mà; đứng sau chủ ngữ).",
      grammarWord: "却",
      items: [
        { q: "有人觉得有房子和汽车就是幸福，有人___认为找到真正的爱情才是幸福。", answers: ["却"] },
        { q: "一个脾气不好的人虽然不一定让人讨厌，但是___很难跟人交朋友。", answers: ["却"] },
        { q: "现在很多人虽然住在同一个楼里，但是___从来没说过话。", answers: ["却"] },
        { q: "他喜欢锻炼身体，他弟弟___不喜欢运动。", answers: ["却"] },
        { q: "虽然她俩是姐妹，性格___很不一样。", answers: ["却"] },
        { q: "这份礼物尽管不贵，但___让我非常感动。", answers: ["却"] },
        { q: "有的人吃得很多，___一点儿也不胖。", answers: ["却"] },
        { q: "我很想去参加同学聚会，___没有时间。", answers: ["却"] },
      ],
    },
  ],
};
