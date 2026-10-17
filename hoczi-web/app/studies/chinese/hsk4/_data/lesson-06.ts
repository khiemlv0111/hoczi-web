import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第6课 一分钱一分货 (Tiền nào của nấy)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 74–85 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson06: Lesson = {
  level: "hsk4",
  no: 6,
  slug: "bai-6",
  zh: "一分钱一分货",
  pinyin: "Yì fēn qián yì fēn huò",
  vi: "Tiền nào của nấy",
  en: "You Get What You Pay For",
  topic: "购物 · Mua sắm",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 果汁、售货员、打扰、竟然、百分之、倍、好处、尝、方面、值得、活动、免费、修理、支持、举行、满、其中、所有、获得、情况、例如、举办、降低…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 竟然, 倍, 值得, 其中, (在)……下; phân biệt 值得 và 值.",
    "Đọc hiểu 3 đoạn hội thoại mua sắm (đi siêu thị, mua cà chua, mua vali), thông báo khuyến mãi của hiệu sách và đoạn văn về câu “一分钱一分货”.",
    "Hỏi – đáp và kể về thói quen mua sắm của bản thân hoặc bạn bè bằng các cấu trúc đã học.",
    "Nắm các từ mở rộng có chung chữ 其: 其次、其中、其实、其他、尤其.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片：裤子、果汁、西红柿、衬衫、袜子、行李箱。", vi: "Chọn hình tương ứng với các từ: quần, nước trái cây, cà chua, áo sơ mi, tất, vali." },
    { zh: "你一般在哪儿买衣服？你有哪些好的购物经验？（购物地点、质量、价格、评价）", vi: "Bạn thường mua quần áo ở đâu? Bạn có kinh nghiệm mua sắm hay nào không (nơi mua, chất lượng, giá cả, đánh giá)?" },
  ],

  vocab: [
    { id: 1, han: "果汁", py: "guǒzhī", pos: "dt.", meaning: "nước trái cây", example: "昨天妻子让我陪她去超市买果汁。", exampleVi: "Hôm qua vợ bảo tôi đi cùng cô ấy đến siêu thị mua nước trái cây." },
    { id: 2, han: "售货员", py: "shòuhuòyuán", pos: "dt.", meaning: "nhân viên bán hàng", example: "一进门，售货员就热情地为我们介绍这、介绍那。", exampleVi: "Vừa vào cửa, nhân viên bán hàng đã nhiệt tình giới thiệu đủ thứ cho chúng tôi." },
    { id: 3, han: "袜子", py: "wàzi", pos: "dt.", meaning: "tất, vớ", example: "她买了一条裤子、一件衬衫、两双袜子。", exampleVi: "Cô ấy mua một cái quần, một chiếc áo sơ mi, hai đôi tất." },
    { id: 4, han: "打扰", py: "dǎrǎo", pos: "đgt.", meaning: "quấy rầy, làm phiền", example: "买东西时我喜欢自己看、自己选，不希望被别人打扰。", exampleVi: "Khi mua đồ tôi thích tự xem, tự chọn, không muốn bị người khác làm phiền." },
    { id: 5, han: "竟然", py: "jìngrán", pos: "p.", meaning: "(diễn tả sự bất ngờ) không ngờ, mà, vậy mà", example: "回家以后，我才发现，竟然忘了去商场的超市买果汁！", exampleVi: "Về đến nhà tôi mới phát hiện, vậy mà lại quên vào siêu thị của trung tâm thương mại mua nước trái cây!" },
    { id: 6, han: "西红柿", py: "xīhóngshì", pos: "dt.", meaning: "cà chua", example: "西红柿新鲜吗？怎么卖？", exampleVi: "Cà chua có tươi không? Bán thế nào?" },
    { id: 7, han: "百分之", py: "bǎi fēn zhī", pos: "số.", meaning: "phần trăm", example: "您放心，保证百分之百新鲜。", exampleVi: "Chị yên tâm, bảo đảm tươi một trăm phần trăm." },
    { id: 8, han: "倍", py: "bèi", pos: "lượng.", meaning: "lần", example: "今天的价格是昨天的两倍。", exampleVi: "Giá hôm nay gấp đôi hôm qua." },
    { id: 9, han: "皮肤", py: "pífū", pos: "dt.", meaning: "da", example: "每天吃一两个这种新鲜的西红柿，对皮肤有好处。", exampleVi: "Mỗi ngày ăn một hai quả cà chua tươi loại này rất tốt cho da." },
    { id: 10, han: "好处", py: "hǎochù", pos: "dt.", meaning: "lợi ích, điều tốt", example: "每天喝一点儿葡萄酒，对身体是有好处的。", exampleVi: "Mỗi ngày uống một chút rượu vang có lợi cho sức khỏe." },
    { id: 11, han: "尝", py: "cháng", pos: "đgt.", meaning: "thưởng thức, nếm", example: "好，那我先买几个尝尝。", exampleVi: "Được, vậy tôi mua mấy quả ăn thử trước." },
    { id: 12, han: "轻", py: "qīng", pos: "tt.", meaning: "nhẹ", example: "我想买一个轻一点儿的。", exampleVi: "Tôi muốn mua một cái nhẹ hơn một chút." },
    { id: 13, han: "方面", py: "fāngmiàn", pos: "dt.", meaning: "khía cạnh, phương diện", example: "不管从价格方面看，还是从质量上看，都是值得考虑的。", exampleVi: "Dù xét về mặt giá cả hay chất lượng thì đều đáng để cân nhắc." },
    { id: 14, han: "值得", py: "zhídé", pos: "đgt.", meaning: "đáng", example: "这个沙发价钱不贵，质量又好，值得买。", exampleVi: "Chiếc sô pha này giá không đắt, chất lượng lại tốt, đáng mua." },
    { id: 15, han: "活动", py: "huódòng", pos: "dt.", meaning: "hoạt động", example: "现在我们商场正好有打折活动。", exampleVi: "Hiện giờ trung tâm thương mại chúng tôi đúng lúc có chương trình giảm giá." },
    { id: 16, han: "内", py: "nèi", pos: "dt.", meaning: "(bên) trong", example: "一年内我们都负责免费修理。", exampleVi: "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí." },
    { id: 17, han: "免费", py: "miǎn fèi", pos: "đgt.", meaning: "miễn phí", example: "如果购书满500元可免费办会员卡。", exampleVi: "Nếu mua sách đủ 500 tệ có thể làm thẻ hội viên miễn phí." },
    { id: 18, han: "修理", py: "xiūlǐ", pos: "đgt.", meaning: "sửa chữa", example: "我的自行车坏了，得拿去修理。", exampleVi: "Xe đạp của tôi hỏng rồi, phải mang đi sửa." },
    { id: 19, han: "支持", py: "zhīchí", pos: "đgt.", meaning: "ủng hộ", example: "为了感谢大家的支持，我们书店今天举行“购书送好礼”活动。", exampleVi: "Để cảm ơn sự ủng hộ của mọi người, hôm nay hiệu sách chúng tôi tổ chức chương trình “Mua sách tặng quà”." },
    { id: 20, han: "举行", py: "jǔxíng", pos: "đgt.", meaning: "tổ chức (hội họp, thi đấu…)", example: "我们书店今天举行“购书送好礼”活动。", exampleVi: "Hôm nay hiệu sách chúng tôi tổ chức chương trình “Mua sách tặng quà”." },
    { id: 21, han: "满", py: "mǎn", pos: "đgt.", meaning: "(đạt đến một chỉ tiêu hay giới hạn) đủ, đầy, tròn", example: "购书满100元送一个笔记本。", exampleVi: "Mua sách đủ 100 tệ tặng một cuốn sổ tay." },
    { id: 22, han: "其中", py: "qízhōng", pos: "dt.", meaning: "trong đó", example: "一些图书还有打折活动，其中，小说7.5折。", exampleVi: "Một số sách còn được giảm giá, trong đó tiểu thuyết giảm còn 75%." },
    { id: 23, han: "小说", py: "xiǎoshuō", pos: "dt.", meaning: "tiểu thuyết", example: "这本小说讲了一个爱情故事。", exampleVi: "Cuốn tiểu thuyết này kể một câu chuyện tình yêu." },
    { id: 24, han: "会员卡", py: "huìyuánkǎ", pos: "dt.", meaning: "thẻ hội viên", example: "办了会员卡以后，购书可打8折。", exampleVi: "Sau khi làm thẻ hội viên, mua sách được giảm 20%." },
    { id: 25, han: "所有", py: "suǒyǒu", pos: "tt.", meaning: "tất cả, toàn bộ", example: "今天过生日的朋友和所有的小朋友还可以获得一份小礼物。", exampleVi: "Các bạn có sinh nhật hôm nay và tất cả các em nhỏ còn được nhận một món quà nhỏ." },
    { id: 26, han: "获得", py: "huòdé", pos: "đgt.", meaning: "được, lấy được", example: "今天购物满四百元的顾客可以免费获得一份小礼物。", exampleVi: "Khách mua hàng đủ bốn trăm tệ hôm nay được nhận miễn phí một món quà nhỏ." },
    { id: 27, han: "情况", py: "qíngkuàng", pos: "dt.", meaning: "tình hình, tình huống", example: "一般情况下，你花的钱越多，买的东西也就越好。", exampleVi: "Thông thường, bạn tiêu càng nhiều tiền thì đồ mua được càng tốt." },
    { id: 28, han: "例如", py: "lìrú", pos: "đgt.", meaning: "lấy ví dụ", example: "例如，春天来了，冬天的衣服就会打折。", exampleVi: "Ví dụ, mùa xuân đến thì quần áo mùa đông sẽ giảm giá." },
    { id: 29, han: "举办", py: "jǔbàn", pos: "đgt.", meaning: "tổ chức, tiến hành", example: "一到节日，商场也会举办各种各样的活动。", exampleVi: "Hễ đến ngày lễ, trung tâm thương mại cũng tổ chức đủ loại hoạt động." },
    { id: 30, han: "各", py: "gè", pos: "đt.", meaning: "các, mọi", example: "计划书各方面都介绍得挺不错。", exampleVi: "Bản kế hoạch giới thiệu các mặt đều khá tốt." },
    { id: 31, han: "降低", py: "jiàngdī", pos: "đgt.", meaning: "giảm, hạ", example: "商场会举办各种各样的活动，降低价格。", exampleVi: "Trung tâm thương mại sẽ tổ chức nhiều hoạt động, hạ giá bán." },
    { id: 32, han: "其次", py: "qícì", pos: "đt.", meaning: "tiếp theo, thứ hai", example: "首先，我对这份工作很感兴趣，其次，我学的也是这个专业。", exampleVi: "Trước hết, tôi rất hứng thú với công việc này; thứ hai, tôi cũng học chuyên ngành này.", group: "extended" },
    { id: 33, han: "其实", py: "qíshí", pos: "p.", meaning: "thực ra, kỳ thực", example: "其实，各人有各人的生活，不用羡慕别人。", exampleVi: "Thực ra mỗi người có cuộc sống riêng, không cần ngưỡng mộ người khác.", group: "extended" },
    { id: 34, han: "其他", py: "qítā", pos: "đt.", meaning: "khác, cái khác", example: "我最近在忙另一件事，您还是考虑其他人吧。", exampleVi: "Dạo này tôi đang bận việc khác, anh vẫn nên cân nhắc người khác đi.", group: "extended" },
    { id: 35, han: "尤其", py: "yóuqí", pos: "p.", meaning: "đặc biệt là, nhất là", example: "不管做什么事情，都要注意方法，学习尤其是这样。", exampleVi: "Dù làm việc gì cũng phải chú ý phương pháp, học tập lại càng như vậy.", group: "extended" },
  ],

  text: {
    title: "课文 一分钱一分货",
    paragraphs: [
      {
        heading: "课文一 · 张远和李进聊李进昨晚的购物经历",
        zh: "张远：昨天晚上我给你打电话一直没人接，你忙什么呢？\n李进：昨天妻子让我陪她去超市买果汁。我把手机忘在家里了。\n张远：买这么点儿东西也用不了那么长时间啊！\n李进：我们先去逛了会儿商场。一进门，售货员就热情地为我们介绍这、介绍那，她买了一条裤子、一件衬衫、两双袜子，然后我们就高高兴兴地回家了。\n张远：买东西时我只看自己想买的，而且喜欢自己看、自己选，不希望被别人打扰。\n李进：是啊！回家以后，我才发现，竟然忘了去商场的超市买果汁！",
        vi: "Trương Viễn: Tối qua tôi gọi điện cho anh mãi không ai nghe, anh bận gì thế?\nLý Tiến: Hôm qua vợ bảo tôi đi cùng cô ấy đến siêu thị mua nước trái cây. Tôi để quên điện thoại ở nhà.\nTrương Viễn: Mua chút đồ như vậy cũng đâu mất nhiều thời gian thế!\nLý Tiến: Chúng tôi đi dạo trung tâm thương mại một lúc trước. Vừa vào cửa, nhân viên bán hàng đã nhiệt tình giới thiệu cái này cái kia, cô ấy mua một cái quần, một chiếc áo sơ mi, hai đôi tất, rồi chúng tôi vui vẻ về nhà.\nTrương Viễn: Khi mua đồ tôi chỉ xem thứ mình muốn mua, hơn nữa thích tự xem, tự chọn, không muốn bị người khác làm phiền.\nLý Tiến: Đúng vậy! Về đến nhà tôi mới phát hiện, vậy mà lại quên vào siêu thị của trung tâm thương mại mua nước trái cây!",
        questions: ["昨天晚上李进为什么没接张远的电话？", "李进夫妻俩都买什么了？"],
      },
      {
        heading: "课文二 · 王静在商店买西红柿",
        zh: "王静：西红柿新鲜吗？怎么卖？\n售货员：七块钱一斤，您放心，保证百分之百新鲜。\n王静：怎么这么贵啊！我记得昨天才三块五一斤，今天的价格是昨天的两倍。\n售货员：您问的这种是“绿色”的。一分钱一分货。每天吃一两个这种新鲜的西红柿，对皮肤有好处。\n王静：好，那我先买几个尝尝。\n售货员：好的，给您西红柿，一共两斤，十四块。",
        vi: "Vương Tĩnh: Cà chua có tươi không? Bán thế nào?\nNhân viên bán hàng: Bảy tệ một cân, chị yên tâm, bảo đảm tươi một trăm phần trăm.\nVương Tĩnh: Sao đắt thế! Tôi nhớ hôm qua mới ba tệ rưỡi một cân, giá hôm nay gấp đôi hôm qua.\nNhân viên bán hàng: Loại chị hỏi là loại “sạch” (thực phẩm xanh). Tiền nào của nấy. Mỗi ngày ăn một hai quả cà chua tươi loại này rất tốt cho da.\nVương Tĩnh: Được, vậy tôi mua mấy quả ăn thử trước.\nNhân viên bán hàng: Vâng, cà chua của chị đây, tất cả hai cân, mười bốn tệ.",
        questions: ["昨天西红柿多少钱一斤？今天呢？", "王静买的西红柿怎么样？"],
      },
      {
        heading: "课文三 · 李进在商场买行李箱",
        zh: "售货员：先生，我们店的行李箱都在这里，请问您要什么样的？\n李进：我想买一个轻一点儿的。\n售货员：您看看这个，不管从价格方面看，还是从质量上看，都是值得考虑的。\n李进：质量是不错。请问这个多少钱？\n售货员：现在我们商场正好有打折活动，打完折是999。另外，一年内我们都负责免费修理。\n李进：你们的服务不错，价格也可以，就买这个吧。",
        vi: "Nhân viên bán hàng: Thưa anh, vali của cửa hàng chúng tôi đều ở đây, xin hỏi anh muốn loại nào?\nLý Tiến: Tôi muốn mua một cái nhẹ hơn một chút.\nNhân viên bán hàng: Anh xem cái này, dù xét về mặt giá cả hay về chất lượng thì đều đáng để cân nhắc.\nLý Tiến: Chất lượng thì đúng là tốt. Xin hỏi cái này bao nhiêu tiền?\nNhân viên bán hàng: Hiện giờ trung tâm thương mại chúng tôi đúng lúc có chương trình giảm giá, giảm xong là 999. Ngoài ra, trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí.\nLý Tiến: Dịch vụ của các chị tốt, giá cả cũng được, lấy cái này nhé.",
        questions: ["李进想买什么样的行李箱？花了多少钱买的？", "这个店的售后服务怎么样？"],
      },
      {
        heading: "课文四 · 书店的“购书送好礼”活动",
        zh: "顾客朋友们，为了感谢大家的支持，我们书店今天举行“购书送好礼”活动，购书满100元送一个笔记本，满200元送一本词典。另外，一些图书还有打折活动，其中，小说7.5折，地图8折，留学考试用书6折。如果购书满500元可免费办会员卡，以后购书可打8折。今天过生日的朋友和所有的小朋友还可以获得一份小礼物。欢迎大家选购！",
        vi: "Kính thưa quý khách, để cảm ơn sự ủng hộ của mọi người, hôm nay hiệu sách chúng tôi tổ chức chương trình “Mua sách tặng quà”: mua sách đủ 100 tệ tặng một cuốn sổ tay, đủ 200 tệ tặng một cuốn từ điển. Ngoài ra, một số sách còn được giảm giá, trong đó tiểu thuyết bán 75% giá, bản đồ 80% giá, sách luyện thi du học 60% giá. Nếu mua sách đủ 500 tệ được làm thẻ hội viên miễn phí, sau này mua sách được giảm 20%. Các bạn có sinh nhật hôm nay và tất cả các em nhỏ còn được nhận một món quà nhỏ. Mời mọi người chọn mua!",
        questions: ["书店今天有什么活动？请介绍一下。", "怎么才能免费办会员卡？"],
      },
      {
        heading: "课文五 · 一分钱一分货",
        zh: "人们常说“一分钱一分货”，意思是东西的质量和价格有很大的关系，也可以说“便宜没好货，好货不便宜”，一般情况下，你花的钱越多，买的东西也就越好。其实也不一定都是这样的。有的时候，质量很好的东西也会很便宜。例如，春天来了，冬天的衣服就会打折，质量很好，还很便宜，花很少的钱就可以买到。一到节日，商场也会举办各种各样的活动，降低价格，这个时候我们也可以买到又便宜又好的东西。",
        vi: "Người ta thường nói “tiền nào của nấy”, nghĩa là chất lượng và giá cả của hàng hóa có quan hệ rất lớn với nhau, cũng có thể nói “của rẻ là của ôi, hàng tốt thì không rẻ”. Thông thường, bạn tiêu càng nhiều tiền thì đồ mua được càng tốt. Thực ra cũng không hẳn lúc nào cũng như vậy. Có những lúc, đồ chất lượng rất tốt cũng có thể rất rẻ. Ví dụ, mùa xuân đến thì quần áo mùa đông sẽ giảm giá, chất lượng rất tốt mà lại rẻ, tiêu rất ít tiền là mua được. Hễ đến ngày lễ, trung tâm thương mại cũng tổ chức đủ loại hoạt động, hạ giá bán, lúc này chúng ta cũng có thể mua được đồ vừa rẻ vừa tốt.",
        questions: ["“一分钱一分货”是什么意思？", "一般什么时候商场会降价？"],
      },
    ],
    notes: [
      "张远 (Zhāng Yuǎn): Trương Viễn; 李进 (Lǐ Jìn): Lý Tiến; 王静 (Wáng Jìng): Vương Tĩnh.",
      "打折: 7.5折 = bán 75% giá (giảm 25%), 8折 = bán 80% giá (giảm 20%), 6折 = bán 60% giá.",
      "斤 (jīn): cân Trung Quốc = 0,5 kg.",
      "Văn hóa: 绿色食品 (thực phẩm xanh) — thực phẩm không bị ô nhiễm trong toàn bộ quá trình sản xuất, an toàn khi ăn; lần đầu bán ra năm 1990 dịp Đại hội thể thao châu Á ở Bắc Kinh; giá thường cao hơn thực phẩm thường.",
    ],
  },

  grammar: [
    {
      word: "竟然",
      title: "Phó từ “vậy mà, không ngờ”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Dùng trước động từ hoặc tính từ để chỉ sự việc không ngờ tới, nằm ngoài dự đoán.",
          examples: [
            "这个歌特别好听，最近很流行，你竟然没听过？",
            "来这家饭馆吃饭的人竟然这么多，排队都排到门口外边去了！",
            "回家以后，我才发现，竟然忘了去商场的超市买果汁！",
          ],
        },
      ],
    },
    {
      word: "倍",
      title: "Lượng từ “lần, gấp”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Lượng từ chỉ số lần (bội số). Đây là lượng từ độc lập, thông thường theo sau 倍 không có danh từ.",
          examples: ["二的五倍是十。", "我的工资是每月5000块，他的工资是我的两倍。", "我记得昨天才三块五一斤，今天的价格是昨天的两倍。"],
        },
      ],
    },
    {
      word: "值得",
      title: "Động từ “đáng, đáng giá”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả việc gì đó đáng làm, có giá trị và sẽ mang lại kết quả tốt.",
          examples: [
            "您看看这个，不管从价格方面看，还是从质量上看，都是值得考虑的。",
            "你应该改改自己的脾气，别总是为一点儿小事生气，不值得。",
            "我们总是很容易看到一个人的缺点，但是别忘了，他身上的优点更值得我们去发现、去学习。",
          ],
        },
      ],
      note: "比一比 值得—值: Giống: đều có thể diễn tả việc gì đó có ý nghĩa, đáng làm (这个调查对今后的工作很有用，花再多时间也值得/值). Khác: (1) với nghĩa này, 值得 là động từ, sau nó có thể là động từ hay một vế câu (不值得为这么点儿小事生气); 值 là tính từ, sau nó thường không có thành phần khác (一点儿也不值). (2) Khi làm động từ: 值得 nghĩa là giá tiền hợp lý, sau là động từ/cụm động từ (值得买); 值 nghĩa là hàng hóa tương đương với giá tiền, sau là số tiền (这个手机值五千块).",
    },
    {
      word: "其中",
      title: "Danh từ “trong đó, trong số đó”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Mang nghĩa “trong cái đó, trong những cái đó”, dùng để chỉ phạm vi hay vị trí.",
          examples: [
            "我们不仅要会读书，还要会选择其中的好书来读。",
            "虽然妻子工作很忙，但是她忙在其中也乐在其中。",
            "一些图书还有打折活动，其中，小说7.5折，地图8折，留学考试用书6折。",
          ],
        },
      ],
    },
    {
      word: "（在）……下",
      title: "Cấu trúc chỉ điều kiện, tình huống “trong… / dưới…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thành phần giữa “(在)……下” thường là danh từ hoặc động từ hai âm tiết có định ngữ đứng trước, dùng để chỉ một điều kiện, tình huống.",
          examples: [
            "一般情况下，你花的钱越多，买的东西也就越好。",
            "在冬天比较冷的情况下，吃碗热面条会让人觉得很舒服。",
            "在老师和同学们的帮助下，他的汉语提高得非常快。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "喂，孙阿姨吗？我是小周。不好意思这么晚___您。", options: ["打扰", "支持", "皮肤", "售货员"], answer: "打扰" },
    { sentence: "谢谢大家这一年来对我的___和帮助，能和大家一起工作，我感到非常高兴。", options: ["支持", "打扰", "百分之", "皮肤"], answer: "支持" },
    { sentence: "王小姐从试衣间出来后，___说：“您穿这条裙子有点儿大。”", options: ["售货员", "皮肤", "支持", "百分之"], answer: "售货员" },
    { sentence: "我们调查的近七千名上班族中，有___六十四的人经常加班。", options: ["百分之", "售货员", "打扰", "支持"], answer: "百分之" },
    { sentence: "这种水不仅很好喝，用它来洗脸对___也很有好处。", options: ["皮肤", "百分之", "售货员", "打扰"], answer: "皮肤" },
    { sentence: "A：你___了吗？这次蛋糕做得怎么样？B：很好吃，没想到你水平提高了这么多。", options: ["尝", "轻", "内", "满"], answer: "尝" },
    { sentence: "A：计划书你看了没？B：看了，___方面都介绍得挺不错。", options: ["各", "满", "尝", "内"], answer: "各" },
    { sentence: "这个纸箱里面是酒，麻烦您搬的时候___一点儿。", options: ["轻", "各", "内", "尝"], answer: "轻" },
    { sentence: "A：现在买沙发，能免费送货上门吗？B：可以，我们三日___给您送到。", options: ["内", "满", "轻", "各"], answer: "内" },
    { sentence: "今天购物___四百元的顾客可以免费获得一份小礼物。", options: ["满", "内", "各", "尝"], answer: "满" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [3, 6, 9] },
        { vocabId: 4, distractors: [19, 18, 11] },
        { vocabId: 5, distractors: [22, 28, 27] },
        { vocabId: 10, distractors: [13, 15, 23] },
        { vocabId: 14, distractors: [17, 26, 21] },
        { vocabId: 20, distractors: [29, 19, 31] },
        { vocabId: 24, distractors: [2, 23, 1] },
        { vocabId: 25, distractors: [12, 16, 30] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 5, 6, 9, 14, 20, 27, 31],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "把手机", "忘在", "家里", "了", "。"], answer: "我把手机忘在家里了。", vi: "Tôi để quên điện thoại ở nhà rồi." },
        { tokens: ["今天的价格", "是", "昨天的", "两倍", "。"], answer: "今天的价格是昨天的两倍。", vi: "Giá hôm nay gấp đôi hôm qua." },
        { tokens: ["这种西红柿", "对", "皮肤", "有好处", "。"], answer: "这种西红柿对皮肤有好处。", vi: "Loại cà chua này tốt cho da." },
        { tokens: ["一年内", "我们", "都负责", "免费", "修理", "。"], answer: "一年内我们都负责免费修理。", vi: "Trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí." },
        { tokens: ["商场", "会举办", "各种各样的", "活动", "。"], answer: "商场会举办各种各样的活动。", vi: "Trung tâm thương mại sẽ tổ chức đủ loại hoạt động." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Đi mua nước trái cây", text: "李进：昨天妻子让我陪她去超市买{{c1}}。\n李进：一进门，{{c2}}就热情地为我们介绍这、介绍那。\n张远：买东西时我喜欢自己看、自己选，不希望被别人{{c3}}。\n李进：回家以后，我才发现，{{c4}}忘了去商场的超市买果汁！" },
        { title: "Bài 2 · Mua cà chua", text: "售货员：七块钱一斤，您放心，保证{{c5}}百新鲜。\n王静：今天的价格是昨天的两{{c6}}。\n售货员：每天吃一两个这种新鲜的西红柿，对{{c7}}有好处。" },
        { title: "Bài 3 · Mua vali", text: "李进：我想买一个{{c8}}一点儿的。\n售货员：不管从价格{{c9}}看，还是从质量上看，都是{{c10}}考虑的。" },
      ],
      answers: { c1: "果汁", c2: "售货员", c3: "打扰", c4: "竟然", c5: "百分之", c6: "倍", c7: "皮肤", c8: "轻", c9: "方面", c10: "值得" },
      bank: ["果汁", "售货员", "打扰", "竟然", "百分之", "倍", "皮肤", "轻", "方面", "值得", "好处", "值", "袜子"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào thông báo của hiệu sách và đoạn văn “一分钱一分货”.",
      passages: [
        { title: "Bài 4 · Mua sách tặng quà", text: "为了感谢大家的{{e1}}，我们书店今天{{e2}}“购书送好礼”活动，购书{{e3}}100元送一个笔记本。一些图书还有打折活动，{{e4}}，小说7.5折。今天过生日的朋友和{{e5}}的小朋友还可以{{e6}}一份小礼物。" },
        { title: "Bài 5 · Tiền nào của nấy", text: "一般{{e7}}下，你花的钱越多，买的东西也就越好。{{e8}}，春天来了，冬天的衣服就会打折。一到节日，商场也会{{e9}}各种各样的活动，{{e10}}价格。" },
      ],
      answers: { e1: "支持", e2: "举行", e3: "满", e4: "其中", e5: "所有", e6: "获得", e7: "情况", e8: "例如", e9: "举办", e10: "降低" },
      bank: ["支持", "举行", "满", "其中", "所有", "获得", "情况", "例如", "举办", "降低", "其实", "免费", "各"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "买东西时我不希望被别人打扰。", vi: "Khi mua đồ tôi không muốn bị người khác làm phiền.", keywords: ["mua", "không muốn", "làm phiền"] },
        { zh: "每天吃一两个这种新鲜的西红柿，对皮肤有好处。", vi: "Mỗi ngày ăn một hai quả cà chua tươi loại này rất tốt cho da.", keywords: ["cà chua", "tươi", "da"] },
        { zh: "另外，一年内我们都负责免费修理。", vi: "Ngoài ra, trong vòng một năm chúng tôi đều chịu trách nhiệm sửa chữa miễn phí.", keywords: ["một năm", "sửa chữa", "miễn phí"] },
        { zh: "如果购书满500元可免费办会员卡。", vi: "Nếu mua sách đủ 500 tệ có thể làm thẻ hội viên miễn phí.", keywords: ["mua sách", "500", "thẻ hội viên", "miễn phí"] },
        { zh: "有的时候，质量很好的东西也会很便宜。", vi: "Có những lúc, đồ chất lượng rất tốt cũng có thể rất rẻ.", keywords: ["chất lượng", "tốt", "rẻ"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Lương của anh ấy gấp đôi lương của tôi.", answers: ["他的工资是我的两倍。", "他的工资是我的工资的两倍。"] },
        { vi: "Bài hát này rất thịnh hành, vậy mà bạn chưa nghe qua?", answers: ["这个歌很流行，你竟然没听过？", "这首歌很流行，你竟然没听过？", "这个歌很流行，你竟然没听过吗？"] },
        { vi: "Cuốn sách này đáng đọc.", answers: ["这本书值得一看。", "这本书值得看。", "这本书值得读。"] },
        { vi: "Với sự giúp đỡ của thầy cô, tiếng Trung của anh ấy tiến bộ rất nhanh.", answers: ["在老师的帮助下，他的汉语提高得很快。", "在老师的帮助下，他的汉语提高得非常快。", "在老师们的帮助下，他的汉语提高得很快。"] },
        { vi: "Chiếc điện thoại này đáng giá năm nghìn tệ.", answers: ["这个手机值五千块。", "这部手机值五千块。", "这个手机值五千块钱。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "李进昨天没接电话，是因为他把手机忘在家里了。", a: true },
        { q: "李进和妻子最后买到了果汁。", a: false },
        { q: "张远喜欢售货员为他介绍东西。", a: false },
        { q: "今天的西红柿是七块钱一斤。", a: true },
        { q: "王静一共买了三斤西红柿。", a: false },
        { q: "李进买的行李箱打完折是999。", a: true },
        { q: "在书店购书满200元可以免费办会员卡。", a: false },
        { q: "到了节日，商场常常会降低价格。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "西红柿新鲜吗？怎么卖？",
        "那我先买几个尝尝。",
        "我想买一个轻一点儿的。",
        "欢迎大家选购！",
        "人们常说一分钱一分货。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请介绍一下你（或你朋友）的购物习惯。你相信“一分钱一分货”吗？ (Hãy giới thiệu thói quen mua sắm của bạn hoặc bạn bè. Bạn có tin “tiền nào của nấy” không?)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 6 (竟然, 倍, 值得, 其中, (在)……下).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["竟然", "倍", "值得", "其中", "情况下", "下"],
      minGrammar: 2,
      sample: "我买东西的时候喜欢自己看、自己选，不希望被售货员打扰。我觉得价格、服务和质量都很重要，其中质量最重要。一般情况下，我相信“一分钱一分货”，好东西的价格可能是普通东西的两倍，但是用的时间也长，所以值得买。不过，有一次我在网上买了一件打折的大衣，只花了两百块，质量竟然非常好。所以我觉得，在商场举办活动、降低价格的时候，也能买到又便宜又好的东西。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 值得 / 值", points: 6,
      subtitle: "Chọn 值得 hoặc 值 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "值得 / 值",
      options: ["值得", "值"],
      items: [
        { q: "花了两个小时看这么个没意思的电影，你说___吗？", answers: ["值得", "值"] },
        { q: "这本书___一看。", answers: ["值得"] },
        { q: "这瓶葡萄酒___一千块。", answers: ["值"] },
        { q: "这个问题___大家注意。", answers: ["值得"] },
        { q: "一件毛衣不___花两千块。", answers: ["值得"] },
        { q: "这个手机___五千块。", answers: ["值"] },
        { q: "这个沙发价钱不贵，质量又好，___买。", answers: ["值得"] },
        { q: "别生气了，咱们不___为这么点儿小事生气。", answers: ["值得"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 竟然", points: 6,
      subtitle: "Điền phó từ thích hợp vào chỗ trống (竟然 – vậy mà, không ngờ).",
      grammarWord: "竟然",
      items: [
        { q: "这个歌特别好听，最近很流行，你___没听过？", answers: ["竟然"] },
        { q: "来这家饭馆吃饭的人___这么多，排队都排到门口外边去了！", answers: ["竟然"] },
        { q: "回家以后，我才发现，___忘了去商场的超市买果汁！", answers: ["竟然"] },
        { q: "上海话和北京话几乎完全不同，我___一句也听不懂。", answers: ["竟然"] },
        { q: "真是没想到，你___长这么高了，我几乎没认出你来。", answers: ["竟然"] },
        { q: "这么远的路，你___是骑自行车来的？", answers: ["竟然"] },
        { q: "昨天才三块五一斤，今天___要七块。", answers: ["竟然"] },
        { q: "我只花了两百块，质量___这么好。", answers: ["竟然"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 倍", points: 5,
      subtitle: "Điền lượng từ chỉ số lần vào chỗ trống (倍).",
      grammarWord: "倍",
      items: [
        { q: "二的五___是十。", answers: ["倍"] },
        { q: "我的工资是每月5000块，他的工资是我的两___。", answers: ["倍"] },
        { q: "今天的价格是昨天的两___。", answers: ["倍"] },
        { q: "200是100的两___。", answers: ["倍"] },
        { q: "每年七八月，游客最多的时候是平时的三___。", answers: ["倍"] },
        { q: "今年咱们公司的收入是去年的一___多。", answers: ["倍"] },
        { q: "这个房间比那个大一___。", answers: ["倍"] },
        { q: "坐飞机的价格是坐火车的好几___。", answers: ["倍"] },
      ],
    },
  ],
};
