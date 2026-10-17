import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第4课 她总是笑着跟客人说话。 (Cô ấy luôn cười khi nói chuyện với khách hàng.)
// Nguồn: Giáo trình chuẩn HSK3, trang 45–52 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson04: Lesson = {
  level: "hsk3",
  no: 4,
  slug: "bai-4",
  zh: "她总是笑着跟客人说话。",
  pinyin: "Tā zǒngshì xiàozhe gēn kèrén shuōhuà.",
  vi: "Cô ấy luôn cười khi nói chuyện với khách hàng.",
  en: "She always smiles when talking to customers.",
  topic: "人物 · Miêu tả người",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 16 từ mới: 比赛、照片、年级、又、聪明、热情、努力、总是、回答、站、饿、超市、蛋糕、年轻、认真、客人.",
    "Hiểu và dùng được 2 điểm ngữ pháp: cấu trúc 又……又…… (vừa… vừa…), động từ 1 + 着 (+ tân ngữ 1) + động từ 2 (+ tân ngữ 2) diễn tả hành động đi kèm.",
    "Đọc hiểu 4 đoạn hội thoại: xem ảnh thi đấu, nói về bạn học, mua bánh ở siêu thị, khách tìm nhân viên phục vụ.",
    "Miêu tả đặc điểm, tính cách của một người; giới thiệu người trong ảnh bằng “động từ + 着”.",
    "Từ mới ghép từ chữ cũ: 女孩、做客、鲜花.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：服务员、客人、超市、比赛、照片、蛋糕",
      vi: "Chọn hình tương ứng với các từ: 服务员 (nhân viên phục vụ), 客人 (khách), 超市 (siêu thị), 比赛 (cuộc thi đấu), 照片 (bức ảnh), 蛋糕 (bánh kem).",
    },
    {
      zh: "看图片，写出他们在做什么：吃苹果 + 看书、笑 + ……、喝饮料 + ……、打电话 + ……",
      vi: "Xem hình và cho biết các nhân vật đang làm gì (hai việc cùng lúc): vừa ăn táo vừa đọc sách, cười + …, uống nước + …, gọi điện + …",
    },
  ],

  vocab: [
    { id: 1, han: "比赛", py: "bǐsài", pos: "dt.", meaning: "cuộc thi đấu", example: "这是你们比赛的照片吗？", exampleVi: "Đây là ảnh trận đấu của các bạn à?" },
    { id: 2, han: "照片", py: "zhàopiàn", pos: "dt.", meaning: "bức ảnh", example: "这张照片是什么时候的？", exampleVi: "Bức ảnh này chụp lúc nào vậy?" },
    { id: 3, han: "年级", py: "niánjí", pos: "dt.", meaning: "lớp, năm học (khối lớp)", example: "你们都是一个年级的吗？", exampleVi: "Các bạn đều cùng một khối lớp à?" },
    { id: 4, han: "又", py: "yòu", pos: "p.", meaning: "vừa (又……又…… vừa… vừa…)", example: "那个又高又漂亮的女孩儿是二年级的。", exampleVi: "Cô gái vừa cao vừa xinh kia học năm hai." },
    { id: 5, han: "聪明", py: "cōngming", pos: "tt.", meaning: "thông minh", example: "她又聪明又热情，也很努力。", exampleVi: "Cô ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ." },
    { id: 6, han: "热情", py: "rèqíng", pos: "tt.", meaning: "nhiệt tình", example: "她工作又认真又热情。", exampleVi: "Cô ấy làm việc vừa nghiêm túc vừa nhiệt tình." },
    { id: 7, han: "努力", py: "nǔlì", pos: "tt.", meaning: "hăng hái, tích cực làm việc, chăm chỉ", example: "你不努力学习，怎么能找到好工作呢？", exampleVi: "Bạn không chăm chỉ học tập thì sao tìm được việc làm tốt?" },
    { id: 8, han: "总是", py: "zǒngshì", pos: "p.", meaning: "luôn luôn", example: "她总是笑着跟客人说话。", exampleVi: "Cô ấy luôn cười khi nói chuyện với khách." },
    { id: 9, han: "回答", py: "huídá", pos: "đgt.", meaning: "trả lời", example: "她总是笑着回答老师的问题。", exampleVi: "Cô ấy luôn mỉm cười trả lời câu hỏi của thầy cô." },
    { id: 10, han: "站", py: "zhàn", pos: "đgt.", meaning: "đứng", example: "很多人拿着鲜花站在门口。", exampleVi: "Rất nhiều người cầm hoa tươi đứng ở cửa." },
    { id: 11, han: "饿", py: "è", pos: "tt.", meaning: "đói", example: "我有点儿饿了，我们进超市买点儿东西吧。", exampleVi: "Anh hơi đói rồi, chúng ta vào siêu thị mua chút đồ đi." },
    { id: 12, han: "超市", py: "chāoshì", pos: "dt.", meaning: "siêu thị", example: "这家超市的蛋糕又便宜又好吃。", exampleVi: "Bánh kem của siêu thị này vừa rẻ vừa ngon." },
    { id: 13, han: "蛋糕", py: "dàngāo", pos: "dt.", meaning: "bánh kem, bánh ngọt", example: "喝着咖啡吃蛋糕，太好了！", exampleVi: "Vừa uống cà phê vừa ăn bánh, tuyệt quá!" },
    { id: 14, han: "年轻", py: "niánqīng", pos: "tt.", meaning: "trẻ tuổi", example: "我们这儿年轻、漂亮的服务员有很多。", exampleVi: "Ở chỗ chúng tôi có rất nhiều nhân viên phục vụ trẻ đẹp." },
    { id: 15, han: "认真", py: "rènzhēn", pos: "tt.", meaning: "nghiêm túc, chăm chỉ", example: "这个孩子工作的时候很认真，大家都喜欢他。", exampleVi: "Đứa trẻ này lúc làm việc rất nghiêm túc, mọi người đều thích cậu ấy." },
    { id: 16, han: "客人", py: "kèrén", pos: "dt.", meaning: "khách, khách hàng", example: "客人快到了，快去洗水果。", exampleVi: "Khách sắp đến rồi, mau đi rửa trái cây đi." },
    { id: 17, han: "小明", py: "Xiǎomíng", pos: "dt.", meaning: "Tiểu Minh (tên người)", example: "小明问马可照片上的人是谁。", exampleVi: "Tiểu Minh hỏi Marco người trong ảnh là ai." },
    { id: 18, han: "马可", py: "Mǎkě", pos: "dt.", meaning: "Marco (tên người)", example: "旁边那个拿着书笑的人是马可。", exampleVi: "Người cầm sách cười bên cạnh là Marco." },
    { id: 19, han: "李小美", py: "Lǐ Xiǎoměi", pos: "dt.", meaning: "Lý Tiểu Mỹ (tên người)", example: "你说的是李小美吧？", exampleVi: "Anh nói Lý Tiểu Mỹ phải không?" },
    { id: 20, han: "女孩", py: "nǚhái", pos: "dt.", meaning: "cô gái, bé gái (女 + 孩子)", example: "那个女孩是我妹妹。", exampleVi: "Cô bé kia là em gái tôi.", group: "extended" },
    { id: 21, han: "做客", py: "zuò kè", pos: "đgt.", meaning: "làm khách, đến chơi nhà (做 + 客人)", example: "周末我去朋友家做客。", exampleVi: "Cuối tuần tôi đến nhà bạn chơi.", group: "extended" },
    { id: 22, han: "鲜花", py: "xiānhuā", pos: "dt.", meaning: "hoa tươi (新鲜 + 花)", example: "那些拿着鲜花站在门口的，都是等她的。", exampleVi: "Những người cầm hoa tươi đứng ở cửa kia đều đang đợi cô ấy.", group: "extended" },
  ],

  text: {
    title: "课文 她总是笑着跟客人说话。",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "小明：这是你们比赛的照片吗？\n马可：是，这是我们比赛后照的。\n小明：照得不错，你们都是一个年级的吗？\n马可：不是。那个又高又漂亮的女孩儿是二年级的。\n小明：旁边那个拿着书笑的人是谁？\n马可：那是我！",
        vi: "Tiểu Minh: Đây là ảnh trận đấu của các bạn à?\nMarco: Ừ, đây là ảnh chúng tớ chụp sau trận đấu.\nTiểu Minh: Chụp đẹp đấy, các bạn đều cùng một khối à?\nMarco: Không. Cô gái vừa cao vừa xinh kia học năm hai.\nTiểu Minh: Người cầm sách cười bên cạnh là ai thế?\nMarco: Là tớ đấy!",
        questions: ["那张照片是什么时候照的？", "照片里马可在做什么？"],
      },
      {
        heading: "课文二 · 在教室 (Trong lớp học)",
        zh: "小丽：你觉得小红怎么样？\n同学：她又聪明又热情，也很努力。\n小丽：我看她总是笑着回答老师的问题。\n同学：她对每个人都笑，也常常对我笑。\n小丽：你是不是喜欢她啊？\n同学：喜欢她的人太多了，你看那些拿着鲜花站在门口的，都是等她的。",
        vi: "Tiểu Lệ: Cậu thấy Tiểu Hồng thế nào?\nBạn học: Cô ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.\nTiểu Lệ: Tớ thấy cô ấy lúc nào cũng mỉm cười trả lời câu hỏi của thầy cô.\nBạn học: Cô ấy cười với mọi người, cũng hay cười với tớ.\nTiểu Lệ: Có phải cậu thích cô ấy không?\nBạn học: Người thích cô ấy nhiều lắm, cậu xem những người cầm hoa tươi đứng ở cửa kia, đều đang đợi cô ấy đấy.",
        questions: ["小红是个什么样的人？", "喜欢小红的人多不多？"],
      },
      {
        heading: "课文三 · 在超市门口 (Ở trước cửa siêu thị)",
        zh: "小刚：我有点儿饿了，我们进超市买点儿东西吧。\n小丽：好啊，这家超市的蛋糕又便宜又好吃，一块只要2.99元。\n小刚：我们买两块儿，回家吃着蛋糕看电视，怎么样？\n小丽：好啊，我再去买一些喝的。\n小刚：喝着咖啡吃蛋糕，太好了！",
        vi: "Tiểu Cương: Anh hơi đói rồi, chúng ta vào siêu thị mua chút đồ đi.\nTiểu Lệ: Được, bánh kem của siêu thị này vừa rẻ vừa ngon, một miếng chỉ có 2,99 đồng.\nTiểu Cương: Chúng ta mua hai miếng, về nhà vừa ăn bánh vừa xem ti vi, thế nào?\nTiểu Lệ: Được, em đi mua thêm ít đồ uống.\nTiểu Cương: Vừa uống cà phê vừa ăn bánh, tuyệt quá!",
        questions: ["小刚和小丽打算买什么？", "小刚和小丽回家后打算做什么？"],
      },
      {
        heading: "课文四 · 在饭馆儿 (Ở quán ăn)",
        zh: "经理：您好！您找谁？\n客人：你们这儿是不是有一个又年轻又漂亮的服务员？\n经理：我们这儿年轻、漂亮的服务员有很多。\n客人：她工作又认真又热情。\n经理：您能再说说吗？\n客人：她总是笑着跟客人说话。\n经理：啊，我知道了，你说的是李小美吧？",
        vi: "Quản lý: Chào anh! Anh tìm ai ạ?\nKhách: Ở đây có phải có một cô phục vụ vừa trẻ vừa xinh không?\nQuản lý: Nhân viên phục vụ trẻ đẹp ở chỗ chúng tôi nhiều lắm.\nKhách: Cô ấy làm việc vừa nghiêm túc vừa nhiệt tình.\nQuản lý: Anh có thể nói thêm được không?\nKhách: Cô ấy lúc nào cũng mỉm cười khi nói chuyện với khách.\nQuản lý: À, tôi biết rồi, anh nói Lý Tiểu Mỹ phải không?",
        questions: ["客人要找谁？", "她是个什么样的服务员？"],
      },
    ],
    notes: [
      "小明 (Xiǎomíng): Tiểu Minh; 马可 (Mǎkě): Marco; 李小美 (Lǐ Xiǎoměi): Lý Tiểu Mỹ.",
      "2.99元 có thể viết là “2元9角(jiǎo)9分(fēn)”; 1角 = 0,1元, 1分 = 0,01元.",
      "Tục ngữ – 五十步笑百步 (Wǔshí bù xiào bǎi bù): người chạy 50 bước cười người chạy 100 bước; tương tự “chó chê mèo lắm lông”, phê bình người có khuyết điểm giống người khác mà lại cười chê người khác.",
    ],
  },

  grammar: [
    {
      word: "又……又……",
      title: "Vừa… vừa…",
      usages: [
        {
          label: "又 + tính từ 1 + 又 + tính từ 2",
          explain: "Nói về hai đặc điểm cùng tồn tại ở một người hay sự vật, vd. 又高又漂亮: vừa cao vừa xinh.",
          examples: ["这个西瓜又大又甜。", "外边又黑又冷。", "服务员又年轻又漂亮。", "她工作又认真又热情。"],
        },
      ],
      note: "Hai tính từ thường cùng sắc thái (cùng tốt hoặc cùng xấu): 又便宜又好吃, 又黑又冷.",
    },
    {
      word: "动词1 + 着 (+ 宾语1) + 动词2 (+ 宾语2)",
      title: "Hành động đi kèm với 着",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả hai hành động xảy ra cùng lúc; hành động thứ nhất (có 着) là hành động đi kèm hoặc cho biết phương thức thực hiện hành động thứ hai. Vd. 他们站着聊天儿: họ nói chuyện trong lúc đứng chứ không phải ngồi.",
          examples: ["弟弟吃着苹果写作业。", "周先生和周太太坐着看电视。", "很多人拿着鲜花站在门口。", "她总是笑着跟客人说话。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "___快到了，快去洗水果。", options: ["比赛", "超市", "客人", "认真"], answer: "客人" },
    { sentence: "工作到下午三点的时候，我常常很___。", options: ["饿", "超市", "比赛", "客人"], answer: "饿" },
    { sentence: "这个孩子工作的时候很___，大家都喜欢他。", options: ["认真", "饿", "超市", "比赛"], answer: "认真" },
    { sentence: "这是什么___？你能给我介绍一下吗？", options: ["客人", "比赛", "饿", "认真"], answer: "比赛" },
    { sentence: "我下楼去___买点儿东西。", options: ["超市", "客人", "认真", "比赛"], answer: "超市" },
    { sentence: "A：你怎么还看电视？不___学习，怎么能找到好工作呢？B：我只看了半个小时。", options: ["年级", "努力", "照片", "蛋糕"], answer: "努力" },
    { sentence: "A：这张___是什么时候的？B：是我妈妈小时候的。", options: ["照片", "总是", "年级", "努力"], answer: "照片" },
    { sentence: "A：你怎么___想睡觉？B：我工作太累了，起得早，睡得晚。", options: ["蛋糕", "照片", "总是", "年级"], answer: "总是" },
    { sentence: "A：这位老人是谁？B：她是我一___时候的老师，现在已经70岁了。", options: ["年级", "努力", "总是", "蛋糕"], answer: "年级" },
    { sentence: "A：您来几块___？B：两块。", options: ["照片", "年级", "蛋糕", "努力"], answer: "蛋糕" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 3, 12] },
        { vocabId: 5, distractors: [6, 7, 15] },
        { vocabId: 6, distractors: [14, 5, 15] },
        { vocabId: 8, distractors: [9, 4, 10] },
        { vocabId: 9, distractors: [8, 16, 1] },
        { vocabId: 12, distractors: [13, 16, 2] },
        { vocabId: 14, distractors: [3, 6, 7] },
        { vocabId: 15, distractors: [7, 5, 14] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 3, 7, 10, 11, 13, 14, 16],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["她", "总是", "笑着", "跟客人", "说话", "。"], answer: "她总是笑着跟客人说话。", vi: "Cô ấy luôn cười khi nói chuyện với khách." },
        { tokens: ["那个", "又高", "又漂亮的", "女孩儿", "是二年级的", "。"], answer: "那个又高又漂亮的女孩儿是二年级的。", vi: "Cô gái vừa cao vừa xinh kia học năm hai." },
        { tokens: ["这家超市的", "蛋糕", "又便宜", "又好吃", "。"], answer: "这家超市的蛋糕又便宜又好吃。", vi: "Bánh kem của siêu thị này vừa rẻ vừa ngon." },
        { tokens: ["很多人", "拿着", "鲜花", "站在", "门口", "。"], answer: "很多人拿着鲜花站在门口。", vi: "Rất nhiều người cầm hoa tươi đứng ở cửa." },
        { tokens: ["弟弟", "吃着", "苹果", "写", "作业", "。"], answer: "弟弟吃着苹果写作业。", vi: "Em trai vừa ăn táo vừa làm bài tập." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Ảnh thi đấu", text: "小明：这是你们{{c1}}的{{c2}}吗？\n马可：是，这是我们比赛后照的。\n小明：照得不错，你们都是一个{{c3}}的吗？\n马可：不是。那个{{c4}}高又漂亮的女孩儿是二年级的。" },
        { title: "Bài khóa 2 · Tiểu Hồng", text: "小丽：你觉得小红怎么样？\n同学：她又{{c5}}又{{c6}}，也很{{c7}}。\n小丽：我看她{{c8}}笑着{{c9}}老师的问题。\n同学：……你看那些拿着鲜花{{c10}}在门口的，都是等她的。" },
      ],
      answers: { c1: "比赛", c2: "照片", c3: "年级", c4: "又", c5: "聪明", c6: "热情", c7: "努力", c8: "总是", c9: "回答", c10: "站" },
      bank: ["比赛", "照片", "年级", "又", "聪明", "热情", "努力", "总是", "回答", "站", "认真", "客人", "饿"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Trước cửa siêu thị", text: "小刚：我有点儿{{e1}}了，我们进{{e2}}买点儿东西吧。\n小丽：好啊，这家超市的{{e3}}又便宜又好吃，一块只要2.99元。\n小刚：我们买两块儿，回家吃{{e4}}蛋糕看电视，怎么样？" },
        { title: "Bài khóa 4 · Ở quán ăn", text: "客人：你们这儿是不是有一个又{{e5}}又漂亮的{{e6}}？\n经理：我们这儿年轻、漂亮的服务员有很多。\n客人：她工作又{{e7}}又热情。\n经理：您能再说说吗？\n客人：她{{e8}}笑着跟{{e9}}{{e10}}。" },
      ],
      answers: { e1: "饿", e2: "超市", e3: "蛋糕", e4: "着", e5: "年轻", e6: "服务员", e7: "认真", e8: "总是", e9: "客人", e10: "说话" },
      bank: ["饿", "超市", "蛋糕", "着", "年轻", "服务员", "认真", "总是", "客人", "说话", "聪明", "照片", "又"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "她又聪明又热情，也很努力。", vi: "Cô ấy vừa thông minh vừa nhiệt tình, cũng rất chăm chỉ.", keywords: ["thông minh", "nhiệt tình", "chăm chỉ"] },
        { zh: "这个西瓜又大又甜。", vi: "Quả dưa hấu này vừa to vừa ngọt.", keywords: ["dưa hấu", "to", "ngọt"] },
        { zh: "周先生和周太太坐着看电视。", vi: "Ông Châu và bà Châu ngồi xem ti vi.", keywords: ["ngồi", "ti vi"] },
        { zh: "我有点儿饿了，我们进超市买点儿东西吧。", vi: "Tôi hơi đói rồi, chúng ta vào siêu thị mua chút đồ đi.", keywords: ["đói", "siêu thị", "mua"] },
        { zh: "她总是笑着回答老师的问题。", vi: "Cô ấy luôn mỉm cười trả lời câu hỏi của thầy giáo.", keywords: ["luôn", "cười", "trả lời"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Bên ngoài vừa tối vừa lạnh.", answers: ["外边又黑又冷。", "外面又黑又冷。"] },
        { vi: "Cô ấy làm việc vừa nghiêm túc vừa nhiệt tình.", answers: ["她工作又认真又热情。"] },
        { vi: "Em trai vừa ăn táo vừa làm bài tập.", answers: ["弟弟吃着苹果写作业。"] },
        { vi: "Đây là ảnh trận đấu của các bạn à?", answers: ["这是你们比赛的照片吗？"] },
        { vi: "Khách sắp đến rồi.", answers: ["客人快到了。", "客人快来了。", "客人要到了。", "客人快要到了。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "那张照片是比赛以后照的。", a: true },
        { q: "照片里的人都是一个年级的。", a: false },
        { q: "照片里马可拿着书笑。", a: true },
        { q: "小红又聪明又热情。", a: true },
        { q: "喜欢小红的人不多。", a: false },
        { q: "这家超市的蛋糕又贵又好吃。", a: false },
        { q: "小刚和小丽打算回家吃着蛋糕看电视。", a: true },
        { q: "客人要找的服务员叫小红。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "她总是笑着跟客人说话。",
        "她又聪明又热情。",
        "我有点儿饿了。",
        "这家超市的蛋糕又便宜又好吃。",
        "她工作又认真又热情。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "你的好朋友是谁？他/她是什么样的人？ (Bạn thân của bạn là ai? Người đó là người như thế nào?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 4 (又……又……, động từ 1 + 着 + động từ 2).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["又", "着"],
      minGrammar: 2,
      sample: "我的好朋友叫小红，她是我的同学，我们是一个年级的。她又聪明又热情，学习也很努力。上课的时候，她总是认真地听老师说话，也总是笑着回答老师的问题。周末我们常常去超市买蛋糕，然后坐着喝咖啡聊天儿。我觉得有这样的朋友很幸福。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 又……又……", points: 6,
      subtitle: "Chọn tính từ thích hợp để hoàn thành cấu trúc 又……又…….",
      grammarWord: "又……又……",
      options: ["甜", "冷", "漂亮", "热情", "好吃", "认真"],
      items: [
        { q: "这个西瓜又大又___。", answers: ["甜"] },
        { q: "外边又黑又___。", answers: ["冷"] },
        { q: "服务员又年轻又___。", answers: ["漂亮"] },
        { q: "她又聪明又___，也很努力。", answers: ["热情"] },
        { q: "这家超市的蛋糕又便宜又___。", answers: ["好吃"] },
        { q: "她工作又___又热情。", answers: ["认真"] },
        { q: "那个又高又___的女孩儿是二年级的。", answers: ["漂亮"] },
        { q: "今天天气真不好，又刮风又___。", answers: ["冷"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: động từ 1 + 着 + động từ 2", points: 6,
      subtitle: "Chọn động từ đi kèm thích hợp (… + 着).",
      grammarWord: "动词 + 着",
      options: ["笑", "拿", "坐", "吃", "听", "站"],
      items: [
        { q: "她总是___着跟客人说话。", answers: ["笑"] },
        { q: "很多人___着鲜花站在门口。", answers: ["拿"] },
        { q: "周先生和周太太___着看电视。", answers: ["坐"] },
        { q: "弟弟___着苹果写作业。", answers: ["吃"] },
        { q: "我喜欢___着歌做作业。", answers: ["听"] },
        { q: "他们___着聊天儿，不是坐着。", answers: ["站"] },
        { q: "旁边那个___着书笑的人是我。", answers: ["拿"] },
        { q: "我们回家___着蛋糕看电视吧。", answers: ["吃"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 总是 / 又 / 着", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "总是 / 又 / 着",
      options: ["总是", "又", "着"],
      items: [
        { q: "她___笑着回答老师的问题。", answers: ["总是"] },
        { q: "她又聪明___热情。", answers: ["又"] },
        { q: "喝___咖啡吃蛋糕，太好了！", answers: ["着"] },
        { q: "你怎么___想睡觉？", answers: ["总是"] },
        { q: "我现在___累又饿，不想爬了。", answers: ["又"] },
        { q: "我们聊___天儿爬山，一点儿也不会累。", answers: ["着"] },
        { q: "这家饭馆儿的菜又便宜___好吃。", answers: ["又"] },
        { q: "她对每个人都笑，___对客人很热情。", answers: ["总是"] },
      ],
    },
  ],
};
