import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第5课 只买对的，不买贵的 (Chỉ mua cái đúng, không mua cái đắt)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 60–73 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson05: Lesson = {
  level: "hsk4",
  no: 5,
  slug: "bai-5",
  zh: "只买对的，不买贵的",
  pinyin: "Zhǐ mǎi duì de, bù mǎi guì de",
  vi: "Chỉ mua cái đúng, không mua cái đắt",
  en: "Buy Only the Right, Not the Expensive",
  topic: "购物 · Mua sắm",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 家具、打折、价格、质量、肯定、流行、顺便、实在、效果、现金、邀请、广告、优点、实际、考虑、标准、浪费、购物、尤其、受到、任何…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 肯定 (phó từ/tính từ), 再说 (động từ/liên từ), 实际 / 实际上, 对……来说, 尤其; phân biệt 尤其 và 特别.",
    "Đọc hiểu 3 đoạn hội thoại mua sắm (sô pha, tủ lạnh, rượu vang) và 2 đoạn văn về tiêu chuẩn mua quần áo và mua sắm trên mạng.",
    "Hỏi – đáp về thói quen mua sắm; kể lại một trải nghiệm mua sắm khó quên bằng các cấu trúc đã học.",
    "Nắm các từ mở rộng có chung chữ 准: 准时、准备、标准.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片：葡萄酒、现金、打折、信用卡、沙发、广告。", vi: "Chọn hình tương ứng với các từ: rượu vang, tiền mặt, giảm giá, thẻ tín dụng, ghế sô pha, quảng cáo." },
    { zh: "你一般在网上买什么？这些东西怎么样？（质量、价格、评价）", vi: "Bạn thường mua gì trên mạng? Những thứ này thế nào (chất lượng, giá cả, đánh giá)?" },
  ],

  vocab: [
    { id: 1, han: "家具", py: "jiājù", pos: "dt.", meaning: "đồ dùng trong nhà", example: "小姐，您好！您想买什么家具？", exampleVi: "Chào chị! Chị muốn mua đồ nội thất gì ạ?" },
    { id: 2, han: "沙发", py: "shāfā", pos: "dt.", meaning: "ghế sô pha", example: "这种沙发是今年最流行的。", exampleVi: "Loại sô pha này là loại thịnh hành nhất năm nay." },
    { id: 3, han: "打折", py: "dǎ zhé", pos: "đgt.", meaning: "giảm giá", example: "现在正在打折，比平时便宜了一千块。", exampleVi: "Bây giờ đang giảm giá, rẻ hơn ngày thường một nghìn tệ." },
    { id: 4, han: "价格", py: "jiàgé", pos: "dt.", meaning: "giá cả", example: "价格还可以，就是不知道质量有没有保证。", exampleVi: "Giá cả cũng được, chỉ không biết chất lượng có bảo đảm không." },
    { id: 5, han: "质量", py: "zhìliàng", pos: "dt.", meaning: "chất lượng", example: "您放心，质量肯定不“打折”。", exampleVi: "Chị yên tâm, chất lượng chắc chắn không “giảm giá”." },
    { id: 6, han: "肯定", py: "kěndìng", pos: "p.", meaning: "chắc chắn, nhất định", example: "喝太多酒肯定对身体不好。", exampleVi: "Uống quá nhiều rượu chắc chắn không tốt cho sức khỏe." },
    { id: 7, han: "流行", py: "liúxíng", pos: "đgt.", meaning: "được nhiều người ưa chuộng, thịnh hành", example: "现在网上购物变得越来越流行了。", exampleVi: "Bây giờ mua sắm trên mạng ngày càng thịnh hành." },
    { id: 8, han: "顺便", py: "shùnbiàn", pos: "p.", meaning: "nhân tiện", example: "商场正好打折，我们顺便也买一台吧。", exampleVi: "Trung tâm thương mại đúng lúc giảm giá, mình nhân tiện mua luôn một chiếc đi." },
    { id: 9, han: "台", py: "tái", pos: "lượng.", meaning: "cái, chiếc (dùng cho máy móc)", example: "咱家的冰箱太旧了，我们买一台新的吧。", exampleVi: "Tủ lạnh nhà mình cũ quá rồi, mình mua một chiếc mới đi." },
    { id: 10, han: "光", py: "guāng", pos: "p.", meaning: "chỉ", example: "上个星期光买沙发就花了两千多。", exampleVi: "Tuần trước chỉ riêng mua sô pha đã tiêu hơn hai nghìn." },
    { id: 11, han: "实在", py: "shízài", pos: "p.", meaning: "kỳ thực, quả thực", example: "但是咱家的冰箱实在太旧了。", exampleVi: "Nhưng tủ lạnh nhà mình quả thực cũ quá rồi." },
    { id: 12, han: "制冷", py: "zhìlěng", pos: "đgt.", meaning: "làm lạnh, ướp lạnh", example: "这台冰箱的制冷效果也不太好了。", exampleVi: "Hiệu quả làm lạnh của chiếc tủ lạnh này cũng không tốt lắm nữa." },
    { id: 13, han: "效果", py: "xiàoguǒ", pos: "dt.", meaning: "hiệu quả", example: "如果方法对了，就会取得很好的效果。", exampleVi: "Nếu phương pháp đúng thì sẽ đạt hiệu quả rất tốt." },
    { id: 14, han: "现金", py: "xiànjīn", pos: "dt.", meaning: "tiền mặt", example: "我带的现金不够，用你的信用卡吧。", exampleVi: "Tiền mặt anh mang không đủ, dùng thẻ tín dụng của em nhé." },
    { id: 15, han: "邀请", py: "yāoqǐng", pos: "đgt.", meaning: "mời", example: "李老师邀请咱们去他家做客。", exampleVi: "Thầy Lý mời chúng ta đến nhà thầy chơi." },
    { id: 16, han: "葡萄", py: "pútao", pos: "dt.", meaning: "quả nho", example: "他很喜欢葡萄酒，我们就给他买两瓶葡萄酒吧。", exampleVi: "Thầy ấy rất thích rượu vang, mình mua tặng thầy hai chai rượu vang đi." },
    { id: 17, han: "艺术", py: "yìshù", pos: "dt./tt.", meaning: "nghệ thuật; có tính nghệ thuật", example: "你看它酒瓶做得都这么艺术。", exampleVi: "Em xem chai rượu của nó làm đẹp (nghệ thuật) thế này." },
    { id: 18, han: "广告", py: "guǎnggào", pos: "dt.", meaning: "quảng cáo", example: "电视上经常有它的广告。", exampleVi: "Trên tivi thường có quảng cáo của nó." },
    { id: 19, han: "味道", py: "wèidào", pos: "dt.", meaning: "mùi vị", example: "我想味道应该不错。", exampleVi: "Em nghĩ mùi vị chắc là không tệ." },
    { id: 20, han: "优点", py: "yōudiǎn", pos: "dt.", meaning: "ưu điểm", example: "广告只会介绍优点，却不会说它的缺点。", exampleVi: "Quảng cáo chỉ giới thiệu ưu điểm chứ không nói khuyết điểm của nó." },
    { id: 21, han: "实际", py: "shíjì", pos: "dt.", meaning: "thực tế", example: "你们做计划应该联系实际。", exampleVi: "Các bạn lập kế hoạch nên gắn với thực tế." },
    { id: 22, han: "考虑", py: "kǎolǜ", pos: "đgt.", meaning: "suy xét, cân nhắc", example: "买衣服只考虑价格当然不好。", exampleVi: "Mua quần áo chỉ cân nhắc giá cả thì đương nhiên không tốt." },
    { id: 23, han: "标准", py: "biāozhǔn", pos: "dt.", meaning: "tiêu chuẩn, chuẩn mực", example: "我买衣服的标准是“只买对的，不买贵的”。", exampleVi: "Tiêu chuẩn mua quần áo của tôi là “chỉ mua cái đúng, không mua cái đắt”." },
    { id: 24, han: "样子", py: "yàngzi", pos: "dt.", meaning: "kiểu dáng", example: "对我来说，衣服的样子流行不流行并不是很重要。", exampleVi: "Đối với tôi, kiểu dáng quần áo có hợp mốt hay không thật ra không quan trọng lắm." },
    { id: 25, han: "年龄", py: "niánlíng", pos: "dt.", meaning: "tuổi", example: "很多年龄大的人喜欢在打折的时候买便宜的衣服。", exampleVi: "Nhiều người lớn tuổi thích mua quần áo rẻ khi giảm giá." },
    { id: 26, han: "浪费", py: "làngfèi", pos: "đgt.", meaning: "lãng phí, hoang phí", example: "如果不适合自己，即使花钱很少，也是一种浪费。", exampleVi: "Nếu không hợp với mình thì dù tiêu ít tiền cũng là một sự lãng phí." },
    { id: 27, han: "购物", py: "gòu wù", pos: "đgt.", meaning: "mua sắm, mua hàng", example: "现在网上购物变得越来越流行了。", exampleVi: "Bây giờ mua sắm trên mạng ngày càng phổ biến." },
    { id: 28, han: "尤其", py: "yóuqí", pos: "p.", meaning: "đặc biệt là, nhất là", example: "年轻人尤其喜欢在网上买东西。", exampleVi: "Người trẻ đặc biệt thích mua đồ trên mạng." },
    { id: 29, han: "受到", py: "shòudào", pos: "đgt.", meaning: "nhận được", example: "网上购物能够受到人们的喜爱。", exampleVi: "Mua sắm trên mạng nhận được sự yêu thích của mọi người." },
    { id: 30, han: "任何", py: "rènhé", pos: "đt.", meaning: "bất cứ, bất kỳ", example: "人们可以在任何时间上网购买自己喜欢的东西。", exampleVi: "Mọi người có thể lên mạng mua thứ mình thích vào bất cứ lúc nào." },
    { id: 31, han: "寄", py: "jì", pos: "đgt.", meaning: "gửi", example: "卖家可以把你买的东西寄到你办公室或者家里。", exampleVi: "Người bán có thể gửi đồ bạn mua đến văn phòng hoặc nhà bạn." },
    { id: 32, han: "准时", py: "zhǔnshí", pos: "tt.", meaning: "đúng giờ", example: "放心吧，我一定准时到。", exampleVi: "Yên tâm đi, tôi nhất định đến đúng giờ.", group: "extended" },
    { id: 33, han: "准备", py: "zhǔnbèi", pos: "đgt.", meaning: "chuẩn bị", example: "同学们正在教室里学习，准备下星期的考试。", exampleVi: "Các bạn đang học trong lớp, chuẩn bị cho kỳ thi tuần sau.", group: "extended" },
  ],

  text: {
    title: "课文 只买对的，不买贵的",
    paragraphs: [
      {
        heading: "课文一 · 王静在家具店买沙发",
        zh: "售货员：小姐，您好！您想买什么家具？需要我为您介绍一下吗？\n王静：谢谢，我想买沙发。\n售货员：您看这个沙发怎么样？现在正在打折，比平时便宜了一千块。\n王静：价格还可以，就是不知道质量有没有保证。\n售货员：您放心，质量肯定不“打折”，这种沙发是今年最流行的。有很多种颜色可以选择，您可以看一下。\n王静：这个蓝色的看上去不错，就要这个吧。",
        vi: "Nhân viên bán hàng: Chào chị! Chị muốn mua đồ nội thất gì ạ? Có cần tôi giới thiệu cho chị không?\nVương Tĩnh: Cảm ơn, tôi muốn mua ghế sô pha.\nNhân viên bán hàng: Chị xem chiếc sô pha này thế nào? Bây giờ đang giảm giá, rẻ hơn ngày thường một nghìn tệ.\nVương Tĩnh: Giá cả cũng được, chỉ không biết chất lượng có được bảo đảm không.\nNhân viên bán hàng: Chị yên tâm, chất lượng chắc chắn không “giảm giá”, loại sô pha này là loại thịnh hành nhất năm nay. Có nhiều màu để lựa chọn, chị có thể xem thử.\nVương Tĩnh: Chiếc màu xanh này trông được đấy, lấy chiếc này nhé.",
        questions: ["沙发的价格和质量怎么样？", "王静决定买哪个沙发？为什么？"],
      },
      {
        heading: "课文二 · 王静和李进在商场买东西",
        zh: "王静：咱家的冰箱太旧了，商场正好打折，我们顺便也买一台吧。\n李进：今天买的东西太多了。再说，这个月家里已经花了五千多了。\n王静：这么多？你不会是记错了吧？\n李进：没错。上个星期光买沙发就花了两千多。\n王静：但是咱家的冰箱实在太旧了，制冷效果也不太好了，还是买个新的吧。\n李进：那好吧，我带的现金不够，用你的信用卡吧。",
        vi: "Vương Tĩnh: Tủ lạnh nhà mình cũ quá rồi, trung tâm thương mại đúng lúc đang giảm giá, mình nhân tiện mua luôn một chiếc đi.\nLý Tiến: Hôm nay mua nhiều đồ quá rồi. Hơn nữa, tháng này nhà mình đã tiêu hơn năm nghìn rồi.\nVương Tĩnh: Nhiều vậy sao? Không phải anh nhớ nhầm đấy chứ?\nLý Tiến: Không nhầm đâu. Tuần trước chỉ riêng mua sô pha đã tiêu hơn hai nghìn.\nVương Tĩnh: Nhưng tủ lạnh nhà mình quả thực cũ quá rồi, làm lạnh cũng không tốt nữa, vẫn nên mua cái mới đi.\nLý Tiến: Thôi được, tiền mặt anh mang không đủ, dùng thẻ tín dụng của em nhé.",
        questions: ["王静为什么想买冰箱？", "李进开始为什么不同意买冰箱？后来为什么又同意了？"],
      },
      {
        heading: "课文三 · 李进和王静在超市买礼物",
        zh: "李进：李老师邀请咱们去他家做客，给他带点儿什么礼物好呢？\n王静：他很喜欢葡萄酒，我们就给他买两瓶葡萄酒吧。\n李进：可是这里有这么多种，你知道哪种好吗？\n王静：我觉得这种不错，你看它酒瓶做得都这么艺术。而且电视上经常有它的广告，我想味道应该不错。\n李进：广告只会介绍优点，却不会说它的缺点。实际上，很多东西并不像广告上说的那么好，所以不能完全相信广告。\n王静：你说的也对。",
        vi: "Lý Tiến: Thầy Lý mời chúng ta đến nhà thầy chơi, mang quà gì cho thầy thì hay nhỉ?\nVương Tĩnh: Thầy rất thích rượu vang, mình mua tặng thầy hai chai rượu vang đi.\nLý Tiến: Nhưng ở đây có nhiều loại thế này, em biết loại nào ngon không?\nVương Tĩnh: Em thấy loại này được đấy, anh xem chai rượu của nó làm đẹp thế này. Hơn nữa trên tivi thường có quảng cáo của nó, em nghĩ mùi vị chắc là không tệ.\nLý Tiến: Quảng cáo chỉ giới thiệu ưu điểm chứ không nói khuyết điểm. Thực tế, nhiều thứ không hề tốt như quảng cáo nói, nên không thể hoàn toàn tin vào quảng cáo.\nVương Tĩnh: Anh nói cũng đúng.",
        questions: ["王静和李进打算给李老师买什么礼物？王静为什么觉得“这种”不错？", "为什么不能完全相信广告？"],
      },
      {
        heading: "课文四 · 买衣服的标准",
        zh: "买衣服只考虑价格当然不好，但是只考虑买好看的也不一定对。我买衣服的标准是“只买对的，不买贵的”。第一，自己穿着舒服；第二，衣服的质量要好，而且又不能太贵。对我来说，衣服的样子流行不流行并不是很重要。很多年龄大的人喜欢在打折的时候买便宜的衣服，但对那些衣服是不是适合自己却考虑得不多。这点是我理解不了的，因为如果不适合自己，即使花钱很少，也是一种浪费。",
        vi: "Mua quần áo mà chỉ cân nhắc giá cả thì đương nhiên không tốt, nhưng chỉ chọn mua đồ đẹp cũng chưa chắc đã đúng. Tiêu chuẩn mua quần áo của tôi là “chỉ mua cái đúng, không mua cái đắt”. Thứ nhất, bản thân mặc thấy thoải mái; thứ hai, chất lượng quần áo phải tốt mà lại không được quá đắt. Đối với tôi, kiểu dáng quần áo có hợp mốt hay không thật ra không quan trọng lắm. Nhiều người lớn tuổi thích mua quần áo rẻ vào lúc giảm giá, nhưng lại ít cân nhắc xem những bộ quần áo đó có hợp với mình hay không. Điều này tôi không hiểu nổi, bởi vì nếu không hợp với mình thì dù tiêu rất ít tiền cũng là một sự lãng phí.",
        questions: ["买衣服要考虑什么？“我”买衣服的标准是什么？", "“我”不能理解什么？"],
      },
      {
        heading: "课文五 · 网上购物",
        zh: "现在网上购物变得越来越流行了，年轻人尤其喜欢在网上买东西。在网上几乎什么都可以买到，你可以上网买书、买衣服、买包，还可以买家具、买手机。网上购物能够受到人们的喜爱，原因主要有两个：首先，网上的东西很多，而且比去商店买便宜，这是吸引人们购买的主要原因。其次，人们可以在任何时间上网购买自己喜欢的东西，卖家可以把你买的东西寄到你办公室或者家里，非常方便。",
        vi: "Bây giờ mua sắm trên mạng ngày càng thịnh hành, người trẻ đặc biệt thích mua đồ trên mạng. Trên mạng gần như cái gì cũng mua được, bạn có thể lên mạng mua sách, mua quần áo, mua túi, còn có thể mua đồ nội thất, mua điện thoại. Mua sắm trên mạng được mọi người yêu thích chủ yếu vì hai lý do: trước hết, hàng trên mạng rất nhiều, lại rẻ hơn mua ở cửa hàng, đây là lý do chính thu hút mọi người mua. Thứ hai, mọi người có thể lên mạng mua thứ mình thích vào bất cứ lúc nào, người bán có thể gửi đồ bạn mua đến văn phòng hoặc nhà bạn, vô cùng tiện lợi.",
        questions: ["在网上可以买哪些东西？", "人们为什么喜欢在网上购物？"],
      },
    ],
    notes: [
      "王静 (Wáng Jìng): Vương Tĩnh; 李进 (Lǐ Jìn): Lý Tiến — hai vợ chồng, nhân vật xuyên suốt giáo trình.",
      "咱家 (zán jiā): nhà mình (khẩu ngữ, bao gồm cả người nghe).",
      "质量肯定不“打折”: chơi chữ — giá giảm nhưng chất lượng không “giảm”.",
      "Văn hóa: 中国人的购物习惯 — trung tâm thương mại kết hợp mua sắm, giải trí, ăn uống; ở cửa hàng nhỏ có thể 砍价 (mặc cả); mua sắm qua mạng ngày càng phổ biến.",
    ],
  },

  grammar: [
    {
      word: "肯定",
      title: "Phó từ / tính từ “chắc chắn, khẳng định”",
      usages: [
        {
          label: "Phó từ",
          explain: "Biểu thị nhất định, không nghi ngờ, không có vấn đề gì.",
          examples: ["您放心，质量肯定不“打折”。", "每天喝一点儿葡萄酒，对身体是有好处的。但是不能喝太多，喝太多酒肯定对身体不好。"],
        },
        {
          label: "Tính từ – chắc chắn, rõ ràng",
          explain: "Biểu thị điều đã xác định, rõ ràng.",
          examples: ["不能肯定的事、没发生过的事，最好不要说。"],
        },
        {
          label: "Tính từ – thừa nhận, khẳng định",
          explain: "Biểu thị sự thừa nhận, mang tính tích cực/khẳng định.",
          examples: ["“你羡慕浪漫的爱情吗？”相信大部分人的回答都是肯定的。"],
        },
      ],
    },
    {
      word: "再说",
      title: "Động từ “để sau hẵng tính” / liên từ “hơn nữa”",
      usages: [
        {
          label: "Động từ",
          explain: "Biểu thị gác lại việc gì đó để sau mới giải quyết hoặc suy xét.",
          examples: ["现在的事，做了再说；以后的事，以后再说。", "A：你不是很喜欢那件大衣吗？怎么不买了呢？\nB：我真的很喜欢，不过没我的号了，下次再说吧。"],
        },
        {
          label: "Liên từ",
          explain: "Bổ sung thêm một lý do/tình huống nữa cho điều đã nói trước đó.",
          examples: ["今天买的东西太多了。再说，这个月家里已经花了五千多了。", "A：你飞机几点的？怎么还不准备？\nB：晚上八点的，不用急，再说，我就去几天，不用带多少东西。"],
        },
      ],
    },
    {
      word: "实际 / 实际上",
      title: "Danh từ, tính từ “thực tế” và phó từ “trên thực tế”",
      usages: [
        { label: "实际 – danh từ", explain: "Chỉ sự vật hay tình huống tồn tại khách quan.", examples: ["你们做计划应该联系实际。"] },
        {
          label: "实际 – tính từ",
          explain: "Mang nghĩa thực tế, cụ thể.",
          examples: ["A：听说你大学二年级的时候就开始在广告公司工作了。这样做不会影响你的学习吗？\nB：我认为不会，实际工作能让我更理解书本上的知识。"],
        },
        {
          label: "实际上 – phó từ",
          explain: "Nghĩa là “trong thực tế”, thường dùng để chuyển ý.",
          examples: ["要想别人对你好，你得先对别人好。实际上，我们很多人做不到这一点。", "广告只会介绍优点，却不会说它的缺点。实际上，很多东西并不像广告上说的那么好，所以不能完全相信广告。"],
        },
      ],
    },
    {
      word: "对……来说",
      title: "Cấu trúc “đối với… mà nói”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả việc nhìn nhận vấn đề từ một góc độ (của một người/sự vật) nào đó.",
          examples: [
            "对我来说，衣服的样子流行不流行并不是很重要。",
            "对一个女人来说，漂亮、聪明都很重要，但其实更重要的是快乐。",
            "一杯水，对一条小鱼来说，可能很有帮助，它可以在里面游得很好。但是，对一条大鱼来说，一杯水是没有什么帮助的，它需要的是一条河。",
          ],
        },
      ],
    },
    {
      word: "尤其",
      title: "Phó từ “đặc biệt là, nhất là”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ mức độ tăng thêm. Vế trước nêu tình huống chung, vế sau dùng 尤其 chỉ ra khía cạnh nổi bật nhất trong tình huống đó.",
          examples: [
            "您女儿真可爱，长得真像您，尤其是眼睛。",
            "现在网上购物变得越来越流行了，年轻人尤其喜欢在网上买东西。",
            "为了健康，我们应该每年都去医院做一次身体检查，尤其是那些四五十岁的人，这样可以早一些发现问题。",
          ],
        },
      ],
      note: "比一比 尤其—特别: Giống: đều là phó từ chỉ khía cạnh nổi bật nhất, thường đứng ở vế sau (我对音乐很感兴趣，尤其/特别是贝多芬的音乐). Khác: (1) với nghĩa này, sau 尤其 có thể có hoặc không có 是, sau 特别 thường có 是; (2) 特别 còn có nghĩa “vô cùng, rất” (让人特别感动), 尤其 không có; (3) 特别 làm tính từ nghĩa “khác thường” (特别要求), 尤其 không có.",
    },
  ],

  wordChoice: [
    { sentence: "___别人吃饭，最好提前几天联系。", options: ["邀请", "受到", "考虑", "任何"], answer: "邀请" },
    { sentence: "我还是更愿意去电影院看，因为我觉得电影院的___更好，那儿更吸引我。", options: ["效果", "邀请", "受到", "任何"], answer: "效果" },
    { sentence: "购买我们电脑的人中，有75%是因为___我们广告的影响。", options: ["受到", "考虑", "效果", "邀请"], answer: "受到" },
    { sentence: "以后遇到___问题，你都可以和我联系，我会想办法帮你解决。", options: ["任何", "效果", "受到", "考虑"], answer: "任何" },
    { sentence: "我认真___了一个晚上，最后还是决定不去那家公司了。", options: ["考虑", "邀请", "受到", "效果"], answer: "考虑" },
    { sentence: "A：这条红裙子你穿着挺好看的。B：不过今年不怎么___这个颜色。", options: ["流行", "打折", "顺便", "家具"], answer: "流行" },
    { sentence: "现在正是换季，好多商店都在___，这些东西都比平时便宜了一半还多。", options: ["打折", "流行", "顺便", "台"], answer: "打折" },
    { sentence: "我想换___笔记本电脑，你知道哪种好吗？", options: ["台", "家具", "顺便", "打折"], answer: "台" },
    { sentence: "他搬新家了，晚上请老同学们去家里吃饭，___看看他的新房子。", options: ["顺便", "流行", "打折", "台"], answer: "顺便" },
    { sentence: "咱们这些___都旧了，这次搬家，我们换新的。", options: ["家具", "台", "流行", "顺便"], answer: "家具" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 14, 24] },
        { vocabId: 3, distractors: [4, 5, 7] },
        { vocabId: 8, distractors: [10, 11, 28] },
        { vocabId: 13, distractors: [12, 19, 20] },
        { vocabId: 15, distractors: [16, 17, 18] },
        { vocabId: 22, distractors: [23, 26, 29] },
        { vocabId: 27, distractors: [30, 31, 25] },
        { vocabId: 21, distractors: [11, 23, 6] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [4, 5, 6, 14, 18, 22, 26, 28],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["现在", "正在打折", "，", "比平时", "便宜了", "一千块", "。"], answer: "现在正在打折，比平时便宜了一千块。", vi: "Bây giờ đang giảm giá, rẻ hơn ngày thường một nghìn tệ." },
        { tokens: ["这种沙发", "是", "今年", "最流行的", "。"], answer: "这种沙发是今年最流行的。", vi: "Loại sô pha này là loại thịnh hành nhất năm nay." },
        { tokens: ["上个星期", "光", "买沙发", "就花了", "两千多", "。"], answer: "上个星期光买沙发就花了两千多。", vi: "Tuần trước chỉ riêng mua sô pha đã tiêu hơn hai nghìn." },
        { tokens: ["对我来说", "，", "衣服的样子", "并不是", "很重要", "。"], answer: "对我来说，衣服的样子并不是很重要。", vi: "Đối với tôi, kiểu dáng quần áo không quan trọng lắm." },
        { tokens: ["年轻人", "尤其", "喜欢", "在网上", "买东西", "。"], answer: "年轻人尤其喜欢在网上买东西。", vi: "Người trẻ đặc biệt thích mua đồ trên mạng." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Mua sô pha", text: "售货员：小姐，您好！您想买什么{{c1}}？\n售货员：您看这个沙发怎么样？现在正在{{c2}}，比平时便宜了一千块。\n王静：{{c3}}还可以，就是不知道{{c4}}有没有保证。\n售货员：您放心，质量{{c5}}不“打折”，这种沙发是今年最{{c6}}的。" },
        { title: "Bài 2 · Mua tủ lạnh", text: "王静：咱家的冰箱太旧了，商场正好打折，我们{{c7}}也买一台吧。\n王静：但是咱家的冰箱{{c8}}太旧了，制冷{{c9}}也不太好了，还是买个新的吧。" },
        { title: "Bài 3 · Mua quà", text: "李进：李老师{{c10}}咱们去他家做客，给他带点儿什么礼物好呢？" },
      ],
      answers: { c1: "家具", c2: "打折", c3: "价格", c4: "质量", c5: "肯定", c6: "流行", c7: "顺便", c8: "实在", c9: "效果", c10: "邀请" },
      bank: ["家具", "打折", "价格", "质量", "肯定", "流行", "顺便", "实在", "效果", "邀请", "现金", "广告", "味道"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về tiêu chuẩn mua quần áo và mua sắm trên mạng.",
      passages: [
        { title: "Bài 4 · Tiêu chuẩn mua quần áo", text: "买衣服只{{e1}}价格当然不好。我买衣服的{{e2}}是“只买对的，不买贵的”。对我来说，衣服的{{e3}}流行不流行并不是很重要。很多{{e4}}大的人喜欢在打折的时候买便宜的衣服。如果不适合自己，即使花钱很少，也是一种{{e5}}。" },
        { title: "Bài 5 · Mua sắm trên mạng", text: "现在网上{{e6}}变得越来越流行了，年轻人{{e7}}喜欢在网上买东西。网上购物能够{{e8}}人们的喜爱。人们可以在{{e9}}时间上网购买自己喜欢的东西，卖家可以把你买的东西{{e10}}到你办公室或者家里。" },
      ],
      answers: { e1: "考虑", e2: "标准", e3: "样子", e4: "年龄", e5: "浪费", e6: "购物", e7: "尤其", e8: "受到", e9: "任何", e10: "寄" },
      bank: ["考虑", "标准", "样子", "年龄", "浪费", "购物", "尤其", "受到", "任何", "寄", "实际", "优点", "特别"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "价格还可以，就是不知道质量有没有保证。", vi: "Giá cả cũng được, chỉ không biết chất lượng có bảo đảm không.", keywords: ["giá", "chất lượng", "bảo đảm"] },
        { zh: "我带的现金不够，用你的信用卡吧。", vi: "Tiền mặt anh mang không đủ, dùng thẻ tín dụng của em nhé.", keywords: ["tiền mặt", "không đủ", "thẻ tín dụng"] },
        { zh: "广告只会介绍优点，却不会说它的缺点。", vi: "Quảng cáo chỉ giới thiệu ưu điểm chứ không nói khuyết điểm của nó.", keywords: ["quảng cáo", "ưu điểm", "khuyết điểm"] },
        { zh: "如果不适合自己，即使花钱很少，也是一种浪费。", vi: "Nếu không hợp với mình thì dù tiêu ít tiền cũng là một sự lãng phí.", keywords: ["không hợp", "tiền", "lãng phí"] },
        { zh: "人们可以在任何时间上网购买自己喜欢的东西。", vi: "Mọi người có thể lên mạng mua thứ mình thích vào bất cứ lúc nào.", keywords: ["lên mạng", "mua", "bất cứ"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chị yên tâm, chất lượng chắc chắn không có vấn đề.", answers: ["您放心，质量肯定没有问题。", "你放心，质量肯定没有问题。", "您放心，质量肯定没问题。", "你放心，质量肯定没问题。"] },
        { vi: "Đối với tôi, giá cả không quan trọng lắm.", answers: ["对我来说，价格不是很重要。", "对我来说，价格不太重要。", "对我来说，价格并不是很重要。"] },
        { vi: "Người trẻ đặc biệt thích mua đồ trên mạng.", answers: ["年轻人尤其喜欢在网上买东西。", "年轻人特别喜欢在网上买东西。"] },
        { vi: "Thầy Lý mời chúng tôi đến nhà thầy chơi.", answers: ["李老师邀请我们去他家做客。", "李老师邀请我们去他家玩儿。"] },
        { vi: "Thực tế, nhiều thứ không tốt như quảng cáo nói.", answers: ["实际上，很多东西并不像广告上说的那么好。", "实际上，很多东西不像广告上说的那么好。", "实际上，很多东西并不像广告说的那么好。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "家具店的沙发正在打折，比平时便宜了一千块。", a: true },
        { q: "王静最后买了一个红色的沙发。", a: false },
        { q: "这个月李进家里已经花了五千多了。", a: true },
        { q: "王静带的现金不够，所以用李进的信用卡。", a: false },
        { q: "王静觉得那种葡萄酒不错，因为电视上经常有它的广告。", a: true },
        { q: "李进认为可以完全相信广告。", a: false },
        { q: "“我”买衣服时觉得衣服的样子流行不流行很重要。", a: false },
        { q: "网上的东西一般比商店里的便宜。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "这种沙发是今年最流行的。",
        "我们顺便也买一台吧。",
        "我想味道应该不错。",
        "这点是我理解不了的。",
        "网上购物非常方便。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "请介绍你的一次难忘的购物经历。 (Hãy kể về một lần mua sắm khó quên của bạn.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 5 (肯定, 再说, 实际上, 对……来说, 尤其).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["肯定", "再说", "实际上", "对", "来说", "尤其"],
      minGrammar: 2,
      sample: "去年冬天，我在网上买了一件大衣。那时候商店正好打折，价格比平时便宜了一半，广告上说质量肯定没问题，样子也是今年最流行的。我想，再说我的旧大衣已经穿了三年了，就买了。没想到寄到家以后，我发现大衣的颜色跟照片上的不一样，穿着也不舒服。实际上，很多东西并不像广告上说的那么好。从那以后，对我来说，买东西最重要的不是便宜，而是适合自己，尤其是买衣服的时候。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 尤其 / 特别", points: 6,
      subtitle: "Chọn 尤其 hoặc 特别 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "尤其 / 特别",
      options: ["尤其", "特别"],
      items: [
        { q: "考试做题前首先要想清楚问题的意思，___是在做数学题的时候。", answers: ["尤其", "特别"] },
        { q: "她从来没有见过这么大的雪，___高兴，所以在外边玩儿了很长时间。", answers: ["特别"] },
        { q: "这家饭馆的面味道很___，在当地非常受欢迎。", answers: ["特别"] },
        { q: "她换上了新买的那双鞋，穿了一条裙子，看上去___好看。", answers: ["特别"] },
        { q: "现在对历史感兴趣的人越来越少了，所以我写了几本书，希望能引起人们的注意，___年轻人。", answers: ["尤其"] },
        { q: "那本小说讲了一个爱情故事，很浪漫，让人___感动。", answers: ["特别"] },
        { q: "如果您有什么___要求，请和我们联系。", answers: ["特别"] },
        { q: "您女儿真可爱，长得真像您，___是眼睛。", answers: ["尤其", "特别"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 实际 / 实际上", points: 6,
      subtitle: "Chọn 实际 hoặc 实际上 cho mỗi chỗ trống.",
      grammarWord: "实际 / 实际上",
      options: ["实际", "实际上"],
      items: [
        { q: "你们做计划应该联系___。", answers: ["实际"] },
        { q: "___工作能让我更理解书本上的知识。", answers: ["实际"] },
        { q: "广告只会介绍优点。___，很多东西并不像广告上说的那么好。", answers: ["实际上"] },
        { q: "要想别人对你好，你得先对别人好。___，我们很多人做不到这一点。", answers: ["实际上"] },
        { q: "这个办法不太___，很难做到。", answers: ["实际"] },
        { q: "他看起来很年轻，___已经四十多岁了。", answers: ["实际上"] },
        { q: "我们要根据___情况来决定。", answers: ["实际"] },
        { q: "大家都以为她很喜欢那件衣服，___她只是觉得便宜。", answers: ["实际上"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 再说", points: 5,
      subtitle: "Điền từ thích hợp vào chỗ trống (再说 – để sau hẵng tính / hơn nữa).",
      grammarWord: "再说",
      items: [
        { q: "今天买的东西太多了。___，这个月家里已经花了五千多了。", answers: ["再说"] },
        { q: "现在的事，做了再说；以后的事，以后___。", answers: ["再说"] },
        { q: "我真的很喜欢，不过没我的号了，下次___吧。", answers: ["再说"] },
        { q: "不用急，___，我就去几天，不用带多少东西。", answers: ["再说"] },
        { q: "你身体不好，___外边下雨了，你就别去了。", answers: ["再说"] },
        { q: "钱不够了，___我也不需要那么多衣服。", answers: ["再说"] },
        { q: "这件事我们明天___吧，今天太晚了。", answers: ["再说"] },
        { q: "我不想参加，因为我最近比较忙，___我对旅行也不太感兴趣。", answers: ["再说"] },
      ],
    },
  ],
};
