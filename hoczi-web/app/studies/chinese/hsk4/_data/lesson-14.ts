import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第14课 保护地球母亲 (Bảo vệ Mẹ Trái đất)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 50–63 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["拒绝", "鼓励", "得意", "省", "重"];
const W_EX2 = ["扔", "丢", "行", "出差", "抱歉"];

export const lesson14: Lesson = {
  level: "hsk4",
  no: 14,
  slug: "bai-14",
  zh: "保护地球母亲",
  pinyin: "Bǎohù dìqiú mǔqīn",
  vi: "Bảo vệ Mẹ Trái đất",
  en: "Protect Mother Earth",
  topic: "环境保护 · Bảo vệ môi trường",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 出差、污染、抱歉、扔、速度、地球、目的、塑料袋、鼓励、拒绝、减少、温度、乘坐、垃圾桶…",
    "Hiểu và dùng được 够 (động từ / phó từ, 够……的), 以 (以……为……), 既然, 于是 (phân biệt 于是 – 因此) và 什么的.",
    "Đọc hiểu 3 đoạn hội thoại và 2 bài đọc về bảo vệ môi trường, “Giờ Trái Đất”, túi nilông; thuật lại bằng từ đã học.",
    "Hỏi – đáp về ô nhiễm môi trường; trình bày cách giảm ô nhiễm, bảo vệ môi trường.",
    "Nắm các từ cùng chữ 度: 速度、温度、态度.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：温度、地球、垃圾桶、速度、污染、塑料袋。", vi: "Chọn hình tương ứng với các từ 温度 (nhiệt độ), 地球 (trái đất), 垃圾桶 (thùng rác), 速度 (tốc độ), 污染 (ô nhiễm), 塑料袋 (túi nilông) và nói một câu mô tả hình." },
    { zh: "请填写环境污染调查问卷：你身边的环境污染情况怎么样？你经常使用一次性饭盒吗？你认为环境污染是由哪些原因造成的？", vi: "Hãy trả lời bảng khảo sát về ô nhiễm môi trường: Tình trạng ô nhiễm quanh bạn thế nào? Bạn có hay dùng hộp cơm dùng một lần không? Theo bạn ô nhiễm môi trường do những nguyên nhân nào gây ra?" },
  ],

  vocab: [
    { id: 1, han: "出差", py: "chū chāi", pos: "đgt.", meaning: "đi công tác", example: "这是明天你出差要带的毛巾、牙膏和牙刷。", exampleVi: "Đây là khăn mặt, kem đánh răng và bàn chải anh mang đi công tác ngày mai." },
    { id: 2, han: "毛巾", py: "máojīn", pos: "dt.", meaning: "khăn lau", example: "宾馆都会免费提供毛巾。", exampleVi: "Khách sạn đều cung cấp khăn miễn phí." },
    { id: 3, han: "牙膏", py: "yágāo", pos: "dt.", meaning: "kem đánh răng", example: "把毛巾、牙膏和牙刷放到箱子里吧。", exampleVi: "Hãy để khăn, kem đánh răng và bàn chải vào vali đi." },
    { id: 4, han: "重", py: "zhòng", pos: "tt.", meaning: "nặng", example: "再说，箱子已经够重的了！", exampleVi: "Hơn nữa, vali đã đủ nặng rồi!" },
    { id: 5, han: "行", py: "xíng", pos: "đgt.", meaning: "được, đồng ý", example: "行，没问题。", exampleVi: "Được, không vấn đề gì." },
    { id: 6, han: "省", py: "shěng", pos: "đgt.", meaning: "tiết kiệm", example: "这样不仅省油钱，而且还不会污染空气。", exampleVi: "Như vậy không chỉ tiết kiệm tiền xăng mà còn không làm ô nhiễm không khí." },
    { id: 7, han: "污染", py: "wūrǎn", pos: "đgt.", meaning: "làm ô nhiễm", example: "坐地铁不会污染空气。", exampleVi: "Đi tàu điện ngầm không làm ô nhiễm không khí." },
    { id: 8, han: "卫生间", py: "wèishēngjiān", pos: "dt.", meaning: "nhà vệ sinh", example: "小王，卫生间怎么那么脏啊？", exampleVi: "Tiểu Vương, nhà vệ sinh sao bẩn thế?" },
    { id: 9, han: "脏", py: "zāng", pos: "tt.", meaning: "bẩn, bẩn thỉu", example: "今天店里太忙了，卫生间很脏。", exampleVi: "Hôm nay quán bận quá, nhà vệ sinh rất bẩn." },
    { id: 10, han: "抱歉", py: "bàoqiàn", pos: "đgt.", meaning: "xin lỗi", example: "经理，实在抱歉。", exampleVi: "Thưa giám đốc, thật sự xin lỗi." },
    { id: 11, han: "空", py: "kōng", pos: "tt.", meaning: "trống, rỗng, không", example: "那张桌子下面还有一些空饮料瓶子和纸盒子。", exampleVi: "Dưới cái bàn kia còn một số chai nước rỗng và hộp giấy." },
    { id: 12, han: "盒子", py: "hézi", pos: "dt.", meaning: "hộp", example: "我马上就去把这些纸盒子扔掉。", exampleVi: "Tôi đi vứt mấy cái hộp giấy này ngay." },
    { id: 13, han: "扔", py: "rēng", pos: "đgt.", meaning: "vứt bỏ", example: "好的，我马上就去把它们扔掉。", exampleVi: "Vâng, tôi đi vứt chúng đi ngay." },
    { id: 14, han: "以", py: "yǐ", pos: "gt.", meaning: "dựa vào, bằng", example: "经理您放心，我一定以最快的速度完成。", exampleVi: "Giám đốc yên tâm, tôi nhất định hoàn thành với tốc độ nhanh nhất." },
    { id: 15, han: "速度", py: "sùdù", pos: "dt.", meaning: "tốc độ", example: "现在火车的速度非常快。", exampleVi: "Bây giờ tốc độ của tàu hỏa rất nhanh." },
    { id: 16, han: "地球", py: "dìqiú", pos: "dt.", meaning: "trái đất", example: "地球是我们共同的家。", exampleVi: "Trái đất là ngôi nhà chung của chúng ta." },
    { id: 17, han: "既然", py: "jìrán", pos: "liên.", meaning: "vì, đã... thì...", example: "既然明天晚上公司会关灯停电，那么我们肯定不用加班了。", exampleVi: "Đã tối mai công ty tắt đèn cắt điện thì chắc chắn chúng ta không phải tăng ca rồi." },
    { id: 18, han: "停", py: "tíng", pos: "đgt.", meaning: "ngừng, cúp, cắt", example: "明天晚上公司会关灯停电。", exampleVi: "Tối mai công ty sẽ tắt đèn cắt điện." },
    { id: 19, han: "得意", py: "déyì", pos: "tt.", meaning: "hể hả, đắc chí", example: "看你得意的样子！", exampleVi: "Nhìn cái vẻ hể hả của cậu kìa!" },
    { id: 20, han: "目的", py: "mùdì", pos: "dt.", meaning: "mục đích", example: "其实目的挺简单的，就是提醒人们节约用电。", exampleVi: "Thực ra mục đích khá đơn giản, chính là nhắc mọi người tiết kiệm điện." },
    { id: 21, han: "暖", py: "nuǎn", pos: "tt.", meaning: "ấm, ấm áp", example: "希望引起人们对气候变暖问题的关注。", exampleVi: "Mong thu hút sự quan tâm của mọi người đến vấn đề khí hậu nóng lên." },
    { id: 22, han: "塑料袋", py: "sùliàodài", pos: "dt.", meaning: "túi nilông, túi nhựa", example: "塑料袋给人们的生活带来方便。", exampleVi: "Túi nilông mang lại sự tiện lợi cho cuộc sống của con người." },
    { id: 23, han: "于是", py: "yúshì", pos: "liên.", meaning: "thế là", example: "于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋。", exampleVi: "Thế là một số nước quy định siêu thị, trung tâm thương mại không được cung cấp túi nilông miễn phí cho khách hàng." },
    { id: 24, han: "鼓励", py: "gǔlì", pos: "đgt.", meaning: "khuyến khích", example: "鼓励大家购买可以多次使用的购物袋。", exampleVi: "Khuyến khích mọi người mua túi mua sắm dùng được nhiều lần." },
    { id: 25, han: "拒绝", py: "jùjué", pos: "đgt.", meaning: "từ chối", example: "请大家购物时自备购物袋，甚至拒绝使用塑料袋。", exampleVi: "Mong mọi người khi mua sắm tự mang túi, thậm chí từ chối dùng túi nilông." },
    { id: 26, han: "减少", py: "jiǎnshǎo", pos: "đgt.", meaning: "giảm bớt", example: "这样做可以减少塑料袋的使用数量。", exampleVi: "Làm như vậy có thể giảm bớt số lượng túi nilông được sử dụng." },
    { id: 27, han: "数量", py: "shùliàng", pos: "dt.", meaning: "số lượng", example: "这样做可以减少塑料袋的使用数量。", exampleVi: "Làm như vậy có thể giảm số lượng túi nilông được sử dụng." },
    { id: 28, han: "温度", py: "wēndù", pos: "dt.", meaning: "nhiệt độ", example: "夏天把空调的温度开得高一些。", exampleVi: "Mùa hè để nhiệt độ điều hòa cao hơn một chút." },
    { id: 29, han: "乘坐", py: "chéngzuò", pos: "đgt.", meaning: "đi, đáp (xe buýt...)", example: "少开车，多骑车或者乘坐地铁和公共汽车。", exampleVi: "Lái xe ít đi, đạp xe hoặc đi tàu điện ngầm và xe buýt nhiều hơn." },
    { id: 30, han: "丢", py: "diū", pos: "đgt.", meaning: "ném, vứt", example: "还有养成把垃圾丢进垃圾桶的习惯什么的。", exampleVi: "Còn có tập thói quen vứt rác vào thùng rác, v.v." },
    { id: 31, han: "垃圾桶", py: "lājītǒng", pos: "dt.", meaning: "thùng rác", example: "垃圾桶又满了，你去扔一下垃圾吧。", exampleVi: "Thùng rác lại đầy rồi, anh đi đổ rác đi." },
    { id: 32, han: "美丽", py: "měilì", pos: "tt.", meaning: "đẹp", example: "只有大家共同努力，才能使我们的家变得更美丽。", exampleVi: "Chỉ khi mọi người cùng cố gắng mới có thể làm cho ngôi nhà của chúng ta đẹp hơn." },
    { id: 33, han: "态度", py: "tàidù", pos: "dt.", meaning: "thái độ", example: "当我们开始改变自己的态度时，这种变化就开始发生了。", exampleVi: "Khi chúng ta bắt đầu thay đổi thái độ của mình, sự thay đổi ấy liền bắt đầu xảy ra.", group: "extended" },
  ],

  text: {
    title: "课文 保护地球母亲",
    paragraphs: [
      {
        heading: "课文一 · 李进要出差，王静和李进在聊天儿",
        zh: "王静：这是明天你出差要带的毛巾、牙膏和牙刷，把它们放到箱子里吧。\n李进：不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！\n王静：我当然知道宾馆里有。你不是一直说要保护环境吗？现在就从身边的小事做起吧。\n李进：行，没问题。我明天上午10点的飞机，你能开车把我送到机场吗？\n王静：那个时间路上堵车多严重啊！你还是坐地铁去机场吧。这样不仅省油钱，而且还不会污染空气。\n李进：好，那就听你的。",
        vi: "Vương Tĩnh: Đây là khăn mặt, kem đánh răng và bàn chải đánh răng anh mang đi công tác ngày mai, anh để chúng vào vali đi.\nLý Tiến: Không cần mang mấy thứ này đâu, khách sạn đều cung cấp miễn phí mà. Hơn nữa, vali đã đủ nặng rồi!\nVương Tĩnh: Em đương nhiên biết khách sạn có. Chẳng phải anh luôn nói phải bảo vệ môi trường sao? Bây giờ hãy bắt đầu từ những việc nhỏ quanh mình đi.\nLý Tiến: Được, không vấn đề gì. Mai anh bay chuyến 10 giờ sáng, em lái xe đưa anh ra sân bay được không?\nVương Tĩnh: Giờ đó đường tắc nghiêm trọng lắm! Anh cứ đi tàu điện ngầm ra sân bay đi. Như vậy không chỉ tiết kiệm tiền xăng mà còn không làm ô nhiễm không khí.\nLý Tiến: Được, vậy nghe theo em.",
        questions: ["李进开始为什么不想带毛巾、牙膏和牙刷？后来为什么又带了？", "王静为什么建议李进坐地铁去机场？"],
      },
      {
        heading: "课文二 · 经理和服务员在谈工作",
        zh: "经理：小王，卫生间怎么那么脏啊？这会给客人留下不好的印象，快去打扫一下。\n服务员：经理，实在抱歉。今天店里太忙了，我还没来得及打扫。\n经理：那张桌子下面还有一些空饮料瓶子和纸盒子。\n服务员：好的，我马上就去把它们扔掉。\n经理：以后你一定得注意这个问题，不管客人多多，生意多忙，我们都要保证餐厅干净卫生。\n服务员：经理您放心，我一定以最快的速度完成。不过咱们真的应该再多招聘几个服务员了。",
        vi: "Giám đốc: Tiểu Vương, nhà vệ sinh sao bẩn thế? Điều này sẽ để lại ấn tượng không tốt cho khách, mau đi dọn dẹp đi.\nNhân viên: Thưa giám đốc, thật sự xin lỗi. Hôm nay quán bận quá, tôi chưa kịp dọn.\nGiám đốc: Dưới cái bàn kia còn một số chai nước rỗng và hộp giấy.\nNhân viên: Vâng, tôi đi vứt chúng đi ngay.\nGiám đốc: Sau này cậu nhất định phải chú ý vấn đề này, dù khách đông thế nào, buôn bán bận ra sao, chúng ta đều phải đảm bảo nhà hàng sạch sẽ, vệ sinh.\nNhân viên: Giám đốc yên tâm, tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất. Nhưng chúng ta thật sự nên tuyển thêm mấy nhân viên phục vụ nữa.",
        questions: ["经理希望小王做什么？店里哪些地方需要打扫？", "经理有什么要求？小王打算怎么做？"],
      },
      {
        heading: "课文三 · 孙月和王静在聊关于环保的事情",
        zh: "孙月：早上听新闻说明天有一个叫“地球一小时”的活动，你对这个活动了解吗？\n王静：这个活动年年都有，最早是从2007年开始的。明天晚上很多人都会关灯一小时，支持这个活动。你没看到门口的通知吗？我们公司也参加。\n孙月：真的吗？太好了！既然明天晚上公司会关灯停电，那么我们肯定不用加班了。\n王静：看你得意的样子！还以为你高兴是为了支持环保，原来是因为不用加班啊！\n孙月：环境保护我当然也支持了！对了，为什么会有这么一个活动啊？\n王静：其实目的挺简单的，就是提醒人们节约用电，希望引起人们对气候变暖问题的关注。",
        vi: "Tôn Nguyệt: Sáng nay nghe tin tức nói ngày mai có một hoạt động gọi là “Giờ Trái Đất”, cậu có biết về hoạt động này không?\nVương Tĩnh: Hoạt động này năm nào cũng có, bắt đầu sớm nhất từ năm 2007. Tối mai rất nhiều người sẽ tắt đèn một tiếng để ủng hộ hoạt động này. Cậu không thấy thông báo ở cửa à? Công ty mình cũng tham gia.\nTôn Nguyệt: Thật à? Tuyệt quá! Đã tối mai công ty tắt đèn cắt điện thì chắc chắn chúng mình không phải tăng ca rồi.\nVương Tĩnh: Nhìn cái vẻ hể hả của cậu kìa! Mình còn tưởng cậu vui là vì ủng hộ bảo vệ môi trường, hóa ra là vì không phải tăng ca!\nTôn Nguyệt: Bảo vệ môi trường thì mình đương nhiên cũng ủng hộ chứ! À đúng rồi, sao lại có một hoạt động như thế nhỉ?\nVương Tĩnh: Thực ra mục đích khá đơn giản, chính là nhắc nhở mọi người tiết kiệm điện, mong thu hút sự quan tâm của mọi người đến vấn đề khí hậu nóng lên.",
        questions: ["明天晚上孙月的公司会做什么？孙月为什么很高兴？", "“地球一小时”是个什么活动？这个活动的目的是什么？"],
      },
      {
        heading: "课文四 · 塑料袋",
        zh: "塑料袋给人们的生活带来方便，受到人们的普遍欢迎，可是，它的大量使用也带来了严重的环境污染问题。于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋，并且鼓励大家购买可以多次使用的购物袋。我们每个人都有责任保护环境，因此，请大家节约使用塑料袋，或者购物时自备购物袋，甚至拒绝使用塑料袋。虽然这是一件很小的事，但这样做可以减少塑料袋的使用数量，对环境保护有很大的作用。",
        vi: "Túi nilông mang lại sự tiện lợi cho cuộc sống của con người, được mọi người ưa chuộng rộng rãi, nhưng việc sử dụng với số lượng lớn cũng gây ra vấn đề ô nhiễm môi trường nghiêm trọng. Thế là, một số nước quy định siêu thị, trung tâm thương mại không được cung cấp túi nilông miễn phí cho khách hàng, đồng thời khuyến khích mọi người mua túi mua sắm dùng được nhiều lần. Mỗi người chúng ta đều có trách nhiệm bảo vệ môi trường, vì vậy, mong mọi người dùng túi nilông một cách tiết kiệm, hoặc tự mang theo túi khi mua sắm, thậm chí từ chối dùng túi nilông. Tuy đây là một việc rất nhỏ, nhưng làm như vậy có thể giảm số lượng túi nilông được sử dụng, có tác dụng rất lớn đối với việc bảo vệ môi trường.",
        questions: ["塑料袋有什么好处？有什么坏处？", "怎样解决使用塑料袋带来的污染问题？"],
      },
      {
        heading: "课文五 · 保护地球环境",
        zh: "保护地球环境，并不是一件离我们很远、很难做到的事情。实际上，我们只需注意一下身边的小事就可以。例如，夏天把空调的温度开得高一些，出门时记得关空调和电脑，这样可以节约用电；少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染；还有养成把垃圾丢进垃圾桶的习惯什么的。这些是我们每个人都能够做到的小事，但却有实实在在的效果。地球是我们共同的家，只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。",
        vi: "Bảo vệ môi trường trái đất không phải là việc gì xa vời hay khó làm với chúng ta. Thực ra, chúng ta chỉ cần chú ý một chút đến những việc nhỏ quanh mình là được. Ví dụ, mùa hè để nhiệt độ điều hòa cao hơn một chút, ra khỏi nhà nhớ tắt điều hòa và máy tính, như vậy có thể tiết kiệm điện; lái xe ít đi, đạp xe hoặc đi tàu điện ngầm và xe buýt nhiều hơn, như vậy có thể giảm ô nhiễm không khí; còn có tập thói quen vứt rác vào thùng rác, v.v. Đây là những việc nhỏ mà mỗi người chúng ta đều làm được, nhưng lại có hiệu quả thiết thực. Trái đất là ngôi nhà chung của chúng ta, chỉ khi mọi người cùng nhau cố gắng, giảm ô nhiễm, bảo vệ môi trường, thì mới có thể làm cho ngôi nhà của chúng ta trở nên đẹp hơn.",
        questions: ["我们需要注意哪些事情来保护地球环境？", "怎样才能使地球变得更美丽？"],
      },
    ],
    notes: [
      "地球一小时 (Dìqiú Yì Xiǎoshí): Giờ Trái Đất – hoạt động tắt đèn một giờ, bắt đầu từ năm 2007.",
      "Văn hóa: 天人合一 (thiên nhân hợp nhất) – quan điểm của triết học Trung Quốc về sự hòa hợp giữa con người và thiên nhiên, do Trang Tử đưa ra. Ngày 5 tháng 6 hằng năm là Ngày Môi trường Thế giới.",
    ],
  },

  grammar: [
    {
      word: "够",
      title: "Động từ / phó từ “đủ”",
      usages: [
        {
          label: "Động từ – đủ về số lượng",
          explain: "Chỉ số lượng đáp ứng được yêu cầu.",
          examples: [
            "客人来了，中国人一定要把家里最好吃的东西拿出来请客人吃，并且让客人吃够、吃饱。",
            "医生提醒我们，睡觉时间太长并不好，有时甚至会引起头疼，一般睡够八小时就可以了。",
          ],
        },
        {
          label: "Phó từ – đạt tới mức nhất định (够 + tính từ + 的)",
          explain: "Chỉ mức độ đã đạt tới một tiêu chuẩn nhất định. Dùng trong câu khẳng định thì sau tính từ thường có 的.",
          examples: [
            "不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！",
            "这不仅是因为他们不够勇敢，还因为他们对自己要求太高。",
          ],
        },
      ],
    },
    {
      word: "以",
      title: "Giới từ / liên từ “bằng, dựa vào; để”",
      usages: [
        {
          label: "Giới từ: 以…… + động từ",
          explain: "Có nghĩa “dựa vào, bằng, lấy” (tương đương 用、拿).",
          examples: [
            "经理您放心，我一定以最快的速度完成。",
            "只有以严格的标准来要求自己才会让自己变得更优秀。",
          ],
        },
        {
          label: "以……为……",
          explain: "Nghĩa là “xem… như…, xem… là…” (= 把……作为…… / 认为……是……).",
          examples: ["我们应该以那些敢说真话的人为镜子，这样才能及时发现自己的缺点。"],
        },
        {
          label: "Liên từ – chỉ mục đích",
          explain: "Nghĩa là “để, nhằm”; đứng đầu vế câu sau, chủ ngữ hai vế phải giống nhau.",
          examples: ["如果是十分重要的朋友，中国人往往会请他们去饭店或餐厅吃饭，以表示对客人的尊重和礼貌。"],
        },
      ],
    },
    {
      word: "既然",
      title: "Liên từ “đã… thì…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Dùng ở vế đầu, nghĩa là “vì sự thật đã là như vậy”; vế sau thường có 就、也、还 phối hợp, nêu kết luận rút ra từ tình huống trước đó.",
          examples: [
            "A：你既然不愿意打球，为什么还要打？B：我是不得不打啊，因为这些天我又胖了好几斤。",
            "A：真抱歉，明天我得出差，不能参加明天的会议了。B：既然这样，就只好安排在下周了。",
            "既然明天晚上公司会关灯停电，那么我们肯定不用加班了。",
          ],
        },
      ],
    },
    {
      word: "于是",
      title: "Liên từ “thế là, bèn”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Dùng ở vế câu sau, chỉ sự việc xảy ra ngay sau sự việc trước; thường hàm quan hệ tiếp nối.",
          examples: [
            "听爷爷奶奶说，我妹妹出生那天，正好下了一场大雪，于是我爸妈就给她取名叫夏雪。",
            "回国后，他用一年的时间整理材料，于是就有了这本关于亚洲美食的书。",
            "……可是，它的大量使用也带来了严重的环境污染问题。于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋。",
          ],
        },
      ],
      note: "比一比 于是 – 因此: đều là liên từ, dùng trong “A，于是/因此B” chỉ A dẫn đến B (小时候，他经常生病，于是/因此每天都去跑步锻炼身体). 于是 nhấn mạnh A xảy ra trước, B xảy ra sau (大家都同意寒假去旅行，于是，我们开始讨论去哪里旅行的问题); 因此 nhấn mạnh A là nguyên nhân, B là kết quả (他三岁就来到这儿……因此，他对这个地方感情很深).",
    },
    {
      word: "什么的",
      title: "Trợ từ “vân vân, …”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Dùng sau các sự vật được liệt kê, chỉ còn những thứ tương tự khác; thường dùng trong khẩu ngữ.",
          examples: [
            "既然你不喜欢新闻专业，那就考虑考虑其他专业吧，中文、国际关系什么的，我和你爸都不反对。",
            "A：我们去趟超市吧，明天出去玩儿得买点儿饼干和面包。B：好，还有矿泉水、果汁什么的。",
            "少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染；还有养成把垃圾丢进垃圾桶的习惯什么的。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "为了___大家少抽烟，人们将每年的4月7日定为“世界无烟日”。", options: W_EX1, answer: "鼓励" },
    { sentence: "有的人总是不好意思___朋友的要求，害怕这样会影响两个人的感情。", options: W_EX1, answer: "拒绝" },
    { sentence: "按照规定，您只能免费带20公斤的行李，超___的部分每公斤加收全部票价的1.5%。", options: W_EX1, answer: "重" },
    { sentence: "不要因一时的成功而___，也不要因一时的失败而伤心。", options: W_EX1, answer: "得意" },
    { sentence: "山东___烟台市是中国著名的“苹果之都”。", options: W_EX1, answer: "省" },
    { sentence: "A：打扰一下，请问李老师在吗？B：他___了。你找他有事吗？", options: W_EX2, answer: "出差" },
    { sentence: "喂，你还在逛街吗？我的钥匙___了，进不了门，你快回来吧。", options: W_EX2, answer: "丢" },
    { sentence: "实在___，我来晚了。今天路上有点儿堵。", options: W_EX2, answer: "抱歉" },
    { sentence: "垃圾桶又满了，你去___一下垃圾吧。", options: W_EX2, answer: "扔" },
    { sentence: "离学校远点儿没关系，只要离地铁或者公交车站近就___。", options: W_EX2, answer: "行" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [3, 12, 22] },
        { vocabId: 7, distractors: [26, 28, 15] },
        { vocabId: 9, distractors: [11, 4, 21] },
        { vocabId: 13, distractors: [30, 25, 24] },
        { vocabId: 16, distractors: [31, 20, 32] },
        { vocabId: 17, distractors: [23, 14, 6] },
        { vocabId: 24, distractors: [25, 1, 10] },
        { vocabId: 29, distractors: [18, 5, 8] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 10, 19, 22, 25, 28, 31],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["箱子", "已经", "够重", "的了", "！"], answer: "箱子已经够重的了！", vi: "Vali đã đủ nặng rồi!" },
        { tokens: ["我", "一定", "以最快的速度", "完成", "。"], answer: "我一定以最快的速度完成。", vi: "Tôi nhất định hoàn thành với tốc độ nhanh nhất." },
        { tokens: ["这样", "不仅", "省油钱，", "而且", "不会污染空气", "。"], answer: "这样不仅省油钱，而且不会污染空气。", vi: "Như vậy không chỉ tiết kiệm tiền xăng mà còn không làm ô nhiễm không khí." },
        { tokens: ["我们", "每个人", "都有", "责任", "保护环境", "。"], answer: "我们每个人都有责任保护环境。", vi: "Mỗi người chúng ta đều có trách nhiệm bảo vệ môi trường." },
        { tokens: ["地球", "是", "我们", "共同的", "家", "。"], answer: "地球是我们共同的家。", vi: "Trái đất là ngôi nhà chung của chúng ta." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (课文 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "课文一 · Chuẩn bị đi công tác", text: "王静：这是明天你{{c1}}要带的{{c2}}、牙膏和牙刷，把它们放到箱子里吧。\n李进：不用拿这些，宾馆都会免费提供的。再说，箱子已经够{{c3}}的了！\n王静：那个时间路上堵车多严重啊！你还是坐地铁去机场吧。这样不仅省油钱，而且还不会{{c4}}空气。" },
        { title: "课文二 · Dọn dẹp nhà hàng", text: "经理：小王，卫生间怎么那么{{c5}}啊？这会给客人留下不好的印象，快去打扫一下。\n服务员：经理，实在{{c6}}。今天店里太忙了，我还没来得及打扫。\n服务员：好的，我马上就去把它们{{c7}}掉。\n服务员：经理您放心，我一定以最快的{{c8}}完成。" },
        { title: "课文三 · Giờ Trái Đất", text: "孙月：真的吗？太好了！{{c9}}明天晚上公司会关灯停电，那么我们肯定不用加班了。\n王静：其实{{c10}}挺简单的，就是提醒人们节约用电，希望引起人们对气候变暖问题的关注。" },
      ],
      answers: { c1: "出差", c2: "毛巾", c3: "重", c4: "污染", c5: "脏", c6: "抱歉", c7: "扔", c8: "速度", c9: "既然", c10: "目的" },
      bank: ["出差", "毛巾", "重", "污染", "脏", "抱歉", "扔", "速度", "既然", "目的", "省", "空", "得意"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (课文 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào hai bài đọc về túi nilông và bảo vệ môi trường trái đất.",
      passages: [
        { title: "课文四 · Túi nilông", text: "{{e1}}给人们的生活带来方便，受到人们的普遍欢迎，可是，它的大量使用也带来了严重的环境污染问题。{{e2}}，一些国家规定，超市、商场不能为顾客提供免费塑料袋，并且{{e3}}大家购买可以多次使用的购物袋。请大家节约使用塑料袋，或者购物时自备购物袋，甚至{{e4}}使用塑料袋。这样做可以{{e5}}塑料袋的使用{{e6}}。" },
        { title: "课文五 · Bảo vệ môi trường trái đất", text: "例如，夏天把空调的{{e7}}开得高一些，出门时记得关空调和电脑；少开车，多骑车或者{{e8}}地铁和公共汽车；还有养成把垃圾丢进{{e9}}的习惯什么的。只有大家共同努力，减少污染、保护环境，才能使我们的家变得更{{e10}}。" },
      ],
      answers: { e1: "塑料袋", e2: "于是", e3: "鼓励", e4: "拒绝", e5: "减少", e6: "数量", e7: "温度", e8: "乘坐", e9: "垃圾桶", e10: "美丽" },
      bank: ["塑料袋", "于是", "鼓励", "拒绝", "减少", "数量", "温度", "乘坐", "垃圾桶", "美丽", "丢", "速度", "普遍"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "不用拿这些，宾馆都会免费提供的。", vi: "Không cần mang những thứ này, khách sạn đều cung cấp miễn phí.", keywords: ["không cần", "khách sạn", "miễn phí"] },
        { zh: "这会给客人留下不好的印象。", vi: "Điều này sẽ để lại ấn tượng không tốt cho khách.", keywords: ["ấn tượng", "không tốt", "khách"] },
        { zh: "明天晚上很多人都会关灯一小时。", vi: "Tối mai rất nhiều người sẽ tắt đèn một tiếng.", keywords: ["tối mai", "tắt đèn", "một tiếng"] },
        { zh: "我们每个人都有责任保护环境。", vi: "Mỗi người chúng ta đều có trách nhiệm bảo vệ môi trường.", keywords: ["trách nhiệm", "bảo vệ", "môi trường"] },
        { zh: "少开车，多骑车或者乘坐地铁，这样能降低空气污染。", vi: "Lái xe ít đi, đạp xe hoặc đi tàu điện ngầm nhiều hơn, như vậy có thể giảm ô nhiễm không khí.", keywords: ["lái xe", "tàu điện ngầm", "ô nhiễm không khí"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Đã vậy thì đành sắp xếp vào tuần sau thôi.", answers: ["既然这样，就只好安排在下周了。", "既然这样，只好安排在下周了。"] },
        { vi: "Thường ngủ đủ tám tiếng là được rồi.", answers: ["一般睡够八小时就可以了。", "一般睡够八个小时就可以了。", "睡够八小时就可以了。"] },
        { vi: "Tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất.", answers: ["我一定以最快的速度完成。", "我一定会以最快的速度完成。"] },
        { vi: "Túi nilông được mọi người ưa chuộng rộng rãi.", answers: ["塑料袋受到人们的普遍欢迎。", "塑料袋受到大家的普遍欢迎。"] },
        { vi: "Hãy vứt rác vào thùng rác.", answers: ["请把垃圾丢进垃圾桶。", "请把垃圾扔进垃圾桶。", "把垃圾丢进垃圾桶。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "李进明天要出差。", a: true },
        { q: "李进一开始就想带毛巾和牙膏去出差。", a: false },
        { q: "最后王静开车送李进去机场。", a: false },
        { q: "今天店里太忙了，服务员还没来得及打扫卫生间。", a: true },
        { q: "“地球一小时”活动最早是从2007年开始的。", a: true },
        { q: "孙月高兴是因为她特别支持环保。", a: false },
        { q: "一些国家规定，超市不能为顾客提供免费塑料袋。", a: true },
        { q: "保护地球环境是一件离我们很远、很难做到的事情。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "现在就从身边的小事做起吧。",
        "我一定以最快的速度完成。",
        "既然这样，就只好安排在下周了。",
        "我们每个人都有责任保护环境。",
        "地球是我们共同的家。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "现在的环境问题对我们的生活有哪些影响？你认为怎样才能减少污染、保护环境？ (Vấn đề môi trường hiện nay ảnh hưởng thế nào đến cuộc sống? Theo bạn làm thế nào để giảm ô nhiễm, bảo vệ môi trường?)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 14 (够, 以, 既然, 于是, 什么的).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["够", "以", "既然", "于是", "什么的"],
      minGrammar: 2,
      sample: "现在环境污染越来越严重，空气不好，夏天的温度也越来越高，这些问题已经影响到了我们的生活。既然地球是我们共同的家，我们每个人都有责任保护它。其实保护环境并不难，只需从身边的小事做起就可以。比如，少开车，多乘坐地铁和公共汽车；购物时自备购物袋，减少塑料袋的使用；把垃圾丢进垃圾桶什么的。我以前出门常常开车，后来发现这样会污染空气，于是我开始骑车上班。我相信只要大家共同努力，地球一定会变得更美丽。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 于是 / 因此", points: 6,
      subtitle: "Chọn 于是 hoặc 因此 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "于是 / 因此",
      options: ["于是", "因此"],
      items: [
        { q: "有些年轻人申请了信用卡，但在购物时却没有考虑自己的经济能力，最后不能按时还银行的钱，___出现严重的信用问题。", answers: ["于是", "因此"] },
        { q: "习惯是不容易改变的，___，在孩子小的时候，父母要帮他们养成好的生活、学习习惯。", answers: ["因此"] },
        { q: "不少人刚开始运动时，会感觉十分无聊，___很快就放弃了。", answers: ["于是", "因此"] },
        { q: "那是1994年的冬天，那场雪下得特别大。大家都很激动，___都跑到外面去玩儿雪了。", answers: ["于是"] },
        { q: "生活往往不会按照我们的计划来进行。___，光有计划还不行，还需要我们能及时地对原来的计划做出改变。", answers: ["因此"] },
        { q: "大家都同意寒假去旅行，___，我们开始讨论去哪里旅行的问题。", answers: ["于是"] },
        { q: "他三岁跟父亲母亲一起来到这儿，就再也没离开过这里。___，他对这个地方感情很深。", answers: ["因此"] },
        { q: "我妹妹出生那天，正好下了一场大雪，___我爸妈就给她取名叫夏雪。", answers: ["于是"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 既然", points: 6,
      subtitle: "Điền liên từ thích hợp vào chỗ trống (既然 – đã… thì…).",
      grammarWord: "既然",
      items: [
        { q: "你___不愿意打球，为什么还要打？", answers: ["既然"] },
        { q: "___这样，就只好安排在下周了。", answers: ["既然"] },
        { q: "___明天晚上公司会关灯停电，那么我们肯定不用加班了。", answers: ["既然"] },
        { q: "___你不喜欢新闻专业，那就考虑考虑其他专业吧。", answers: ["既然"] },
        { q: "___大家都同意，那我们就通过这个计划了。", answers: ["既然"] },
        { q: "___你已经决定了，我就不再说什么了。", answers: ["既然"] },
        { q: "___来了，就多玩儿几天吧。", answers: ["既然"] },
        { q: "___你身体不舒服，今天就早点儿休息吧。", answers: ["既然"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 够", points: 5,
      subtitle: "Điền từ vào chỗ trống (够 – đủ; 够 + tính từ + 的).",
      grammarWord: "够",
      items: [
        { q: "再说，箱子已经___重的了！", answers: ["够"] },
        { q: "一般睡___八小时就可以了。", answers: ["够"] },
        { q: "这不仅是因为他们不___勇敢，还因为他们对自己要求太高。", answers: ["够"] },
        { q: "中国人一定要让客人吃___、吃饱。", answers: ["够"] },
        { q: "我带的现金不___，还是刷卡吧。", answers: ["够"] },
        { q: "你来得___早的，正好8点。", answers: ["够"] },
        { q: "这些菜___多的了，咱们俩肯定吃不了。", answers: ["够"] },
        { q: "这个房间___大，住三个人没问题。", answers: ["够"] },
      ],
    },
  ],
};
