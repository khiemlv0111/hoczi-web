import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第17课 谁都有办法看好你的“病”。 (Ai cũng có cách chữa khỏi “bệnh” của em.)
// Nguồn: Giáo trình chuẩn HSK3, trang 159–166 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson17: Lesson = {
  level: "hsk3",
  no: 17,
  slug: "bai-17",
  zh: "谁都有办法看好你的“病”。",
  pinyin: "Shéi dōu yǒu bànfǎ kànhǎo nǐ de “bìng”.",
  vi: "Ai cũng có cách chữa khỏi “bệnh” của em.",
  en: "Anyone could cure your “illness”.",
  topic: "健康 · Sức khỏe, sở thích, vận động",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 16 từ mới: 请假、一共、邻居、后来、爱好、办法、饱、为了、决定、选择、冬(天)、必须、根据、情况、口、渴.",
    "Hiểu và dùng được 2 điểm ngữ pháp: động từ hai âm tiết lặp lại ABAB (休息休息、认识认识), đại từ nghi vấn dùng linh hoạt (3) – 谁/什么/怎么/哪儿 + 都/也 chỉ mọi đối tượng.",
    "Đọc hiểu 3 đoạn hội thoại (xin nghỉ phép, người đàn ông cao cao, “bệnh” của bà Châu) và 1 đoạn văn về cách vận động đúng.",
    "Nói nhẹ nhàng/thử làm gì bằng ABAB; khẳng định/phủ định toàn bộ với 谁都、什么都、哪儿都.",
    "Chữ Hán: chữ hình thanh kết cấu trong – ngoài (园、病、问、闻); từ mới ghép từ chữ cũ: 婚假、怎么办、喜爱.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：邻居、爱好、选择、饱、渴、冬天",
      vi: "Chọn hình tương ứng với các từ: 邻居 (hàng xóm), 爱好 (sở thích), 选择 (lựa chọn), 饱 (no), 渴 (khát), 冬天 (mùa đông).",
    },
    {
      zh: "给下面的动词加上合适的宾语：学习汉语、介绍……、打扫……、检查……、锻炼……、帮助……、复习……",
      vi: "Thêm tân ngữ phù hợp sau các động từ: học tiếng Hán, giới thiệu…, quét dọn…, kiểm tra…, rèn luyện…, giúp đỡ…, ôn tập…",
    },
  ],

  vocab: [
    { id: 1, han: "请假", py: "qǐng jià", pos: "đgt.", meaning: "xin nghỉ phép", example: "周经理，下个星期我可以请几天假吗？", exampleVi: "Giám đốc Châu, tuần sau em có thể xin nghỉ mấy hôm không ạ?" },
    { id: 2, han: "一共", py: "yígòng", pos: "p.", meaning: "tổng cộng", example: "你一共想请几天假？", exampleVi: "Em muốn xin nghỉ tổng cộng mấy ngày?" },
    { id: 3, han: "邻居", py: "línjū", pos: "dt.", meaning: "láng giềng, hàng xóm", example: "我们过去是邻居，后来是大学同学。", exampleVi: "Ngày trước bọn tớ là hàng xóm, sau đó là bạn đại học." },
    { id: 4, han: "后来", py: "hòulái", pos: "dt.", meaning: "sau này, sau đó", example: "我以前在美国学习，后来来中国留学。", exampleVi: "Trước đây tôi học ở Mỹ, sau đó sang Trung Quốc du học." },
    { id: 5, han: "爱好", py: "àihào", pos: "dt.", meaning: "sở thích", example: "他有很多爱好，唱歌、画画儿、踢足球，什么都会。", exampleVi: "Anh ấy có nhiều sở thích, hát, vẽ, đá bóng, cái gì cũng biết." },
    { id: 6, han: "办法", py: "bànfǎ", pos: "dt.", meaning: "cách, biện pháp", example: "谁都有办法看好你的“病”。", exampleVi: "Ai cũng có cách chữa khỏi “bệnh” của em." },
    { id: 7, han: "饱", py: "bǎo", pos: "tt.", meaning: "no", example: "但是你吃饱了就睡。", exampleVi: "Nhưng em ăn no xong là ngủ." },
    { id: 8, han: "为了", py: "wèile", pos: "giới.", meaning: "để, vì", example: "为了健康，我真应该多锻炼锻炼了。", exampleVi: "Vì sức khỏe, em thật sự nên rèn luyện nhiều hơn." },
    { id: 9, han: "决定", py: "juédìng", pos: "đgt.", meaning: "quyết định", example: "从明天起，我决定每天去长跑。", exampleVi: "Từ mai, em quyết định ngày nào cũng chạy bộ đường dài." },
    { id: 10, han: "选择", py: "xuǎnzé", pos: "đgt.", meaning: "lựa chọn", example: "第一，要选择“对”的时间。", exampleVi: "Thứ nhất, phải chọn thời gian “đúng”." },
    { id: 11, han: "冬天", py: "dōngtiān", pos: "dt.", meaning: "mùa đông", example: "一般来说，早上9点是最好的时间，冬天要再晚一些。", exampleVi: "Nói chung, 9 giờ sáng là thời điểm tốt nhất, mùa đông thì muộn hơn chút nữa." },
    { id: 12, han: "必须", py: "bìxū", pos: "p.", meaning: "cần phải, nhất thiết phải", example: "第三，必须要根据自己的健康情况运动。", exampleVi: "Thứ ba, nhất thiết phải vận động dựa theo tình trạng sức khỏe của mình." },
    { id: 13, han: "根据", py: "gēnjù", pos: "giới.", meaning: "căn cứ vào, dựa vào", example: "必须要根据自己的健康情况运动。", exampleVi: "Phải vận động dựa theo tình trạng sức khỏe của mình." },
    { id: 14, han: "情况", py: "qíngkuàng", pos: "dt.", meaning: "tình hình, tình trạng", example: "根据自己的健康情况运动。", exampleVi: "Vận động dựa theo tình trạng sức khỏe của mình." },
    { id: 15, han: "口", py: "kǒu", pos: "dt.", meaning: "miệng", example: "刚运动完口渴的时候，不要马上喝水。", exampleVi: "Lúc vừa vận động xong khát nước, đừng uống nước ngay." },
    { id: 16, han: "渴", py: "kě", pos: "tt.", meaning: "khát", example: "我口渴了，想喝点儿水。", exampleVi: "Tôi khát rồi, muốn uống chút nước." },
    { id: 17, han: "婚假", py: "hūnjià", pos: "dt.", meaning: "phép cưới (结婚 + 请假)", example: "他下个月结婚，请了十天婚假。", exampleVi: "Tháng sau anh ấy cưới, xin nghỉ phép cưới mười ngày.", group: "extended" },
    { id: 18, han: "怎么办", py: "zěnme bàn", pos: "cụm từ", meaning: "làm thế nào, làm sao (怎么 + 办法)", example: "下雨了！我没带伞，怎么办？", exampleVi: "Mưa rồi! Tôi không mang ô, làm sao bây giờ?", group: "extended" },
    { id: 19, han: "喜爱", py: "xǐ'ài", pos: "đgt.", meaning: "yêu thích (喜欢 + 爱好)", example: "这是孩子们最喜爱的节目。", exampleVi: "Đây là chương trình bọn trẻ yêu thích nhất.", group: "extended" },
  ],

  text: {
    title: "课文 谁都有办法看好你的“病”。",
    paragraphs: [
      {
        heading: "课文一 · 在公司 (Trong công ty)",
        zh: "小丽：周经理，下个星期我可以请几天假吗？\n周明：你有什么事？\n小丽：我的一个老朋友结婚，我跟他两年没见了。\n周明：你一共想请几天假？\n小丽：三天。",
        vi: "Tiểu Lệ: Giám đốc Châu, tuần sau em có thể xin nghỉ mấy hôm không ạ?\nChâu Minh: Em có việc gì?\nTiểu Lệ: Một người bạn cũ của em cưới, em với anh ấy hai năm không gặp rồi.\nChâu Minh: Em muốn xin nghỉ tổng cộng mấy ngày?\nTiểu Lệ: Ba ngày ạ.",
        questions: ["小丽为什么要请假？", "小丽请几天假？"],
      },
      {
        heading: "课文二 · 在公司 (Trong công ty)",
        zh: "同事：小丽，那个高高的男人是你们公司的吗？你对他了解吗？\n小丽：我们过去是邻居，后来是大学同学，关系一直很不错。\n同事：他一般喜欢做什么？\n小丽：他有很多爱好，唱歌、画画儿、踢足球，什么都会。\n同事：真的？那你介绍我们认识认识吧。\n小丽：不行，现在他是我丈夫。",
        vi: "Đồng nghiệp: Tiểu Lệ, người đàn ông cao cao kia là người công ty cậu à? Cậu có hiểu rõ anh ấy không?\nTiểu Lệ: Ngày trước bọn tớ là hàng xóm, sau đó là bạn đại học, quan hệ vẫn luôn rất tốt.\nĐồng nghiệp: Anh ấy thường thích làm gì?\nTiểu Lệ: Anh ấy có nhiều sở thích, hát, vẽ tranh, đá bóng, cái gì cũng biết.\nĐồng nghiệp: Thật à? Thế cậu giới thiệu cho bọn tớ làm quen đi.\nTiểu Lệ: Không được, bây giờ anh ấy là chồng tớ.",
        questions: ["小丽和那个男人是什么关系？", "那个男人有什么爱好？"],
      },
      {
        heading: "课文三 · 在家 (Ở nhà)",
        zh: "周太太：最近我觉得哪儿都不舒服，你带我去医院检查检查吧。\n周明：不用去医院，谁都有办法看好你的“病”。我问你，你多久没运动了？\n周太太：我三年没运动了。\n周明：谁都知道运动对身体好。但是你吃饱了就睡。\n周太太：为了健康，我真应该多锻炼锻炼了。从明天起，我决定每天去长跑。",
        vi: "Bà Châu: Dạo này em thấy chỗ nào cũng khó chịu, anh đưa em đi viện khám xem sao.\nChâu Minh: Không cần đi viện, ai cũng có cách chữa khỏi “bệnh” của em. Anh hỏi em, em bao lâu không vận động rồi?\nBà Châu: Em ba năm không vận động rồi.\nChâu Minh: Ai cũng biết vận động tốt cho sức khỏe. Nhưng em ăn no xong là ngủ.\nBà Châu: Vì sức khỏe, em thật sự nên rèn luyện nhiều hơn. Từ mai, em quyết định ngày nào cũng chạy bộ đường dài.",
        questions: ["周太太为什么不舒服？", "周太太有什么打算？"],
      },
      {
        heading: "课文四 · 怎么运动 (Vận động thế nào)",
        zh: "“运动很重要”这句话谁都懂。但是你知道怎么运动吗？第一，要选择“对”的时间。一般来说，早上9点是最好的时间，冬天要再晚一些。第二，要选择“对”的地点，公园、山上、游泳馆，这些地方都可以运动。第三，必须要根据自己的健康情况运动。如果你很久没爬山或者游泳了，运动一会儿就一定要休息休息。还要记得刚运动完口渴的时候，不要马上喝水。",
        vi: "Câu “vận động rất quan trọng” thì ai cũng hiểu. Nhưng bạn có biết vận động thế nào không? Thứ nhất, phải chọn thời gian “đúng”. Nói chung, 9 giờ sáng là thời điểm tốt nhất, mùa đông thì muộn hơn chút nữa. Thứ hai, phải chọn địa điểm “đúng”: công viên, trên núi, bể bơi, những nơi này đều có thể vận động. Thứ ba, nhất thiết phải vận động dựa theo tình trạng sức khỏe của mình. Nếu bạn đã lâu không leo núi hay bơi, vận động một lúc là nhất định phải nghỉ ngơi. Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.",
        questions: ["什么时间运动最好？", "运动的时候要注意什么问题？"],
      },
    ],
    notes: [
      "看好 (kànhǎo): chữa khỏi (bệnh); 看病: khám bệnh.",
      "一般来说: nói chung, thông thường mà nói. 从明天起: kể từ ngày mai.",
      "Tục ngữ – 早睡早起身体好 (Zǎo shuì zǎo qǐ shēntǐ hǎo): ngủ sớm dậy sớm tốt cho sức khỏe; nên tạo thói quen giờ giấc tốt.",
      "Chữ Hán – 形声字 kết cấu trong – ngoài: 外形内声: 园 (囗 + 元), 病 (疒 + 丙); 内形外声: 问 (门 + 口), 闻 (门 + 耳).",
    ],
  },

  grammar: [
    {
      word: "ABAB",
      title: "Động từ hai âm tiết lặp lại",
      usages: [
        {
          label: "Cách dùng",
          explain: "Động từ hai âm tiết lặp lại theo dạng ABAB (休息休息) để diễn tả hành động diễn ra trong thời gian ngắn, hoặc mang ý thử làm, nhẹ nhàng hóa đề nghị.",
          examples: ["他是谁？你介绍我们认识认识吧。", "他是新来的，有时间你帮助帮助他吧。", "这是本新书，你学习学习吧。", "我真应该多锻炼锻炼了。"],
        },
      ],
      note: "Động từ một âm tiết lặp lại dạng AA hoặc A一A: 看看, 看一看.",
    },
    {
      word: "谁/什么/怎么/哪儿 + 都/也",
      title: "Đại từ nghi vấn dùng linh hoạt (3)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Các đại từ nghi vấn 谁, 什么, 怎么, 哪儿 có thể thay thế mọi đối tượng trong một phạm vi, cho biết tất cả đều có đặc điểm giống nhau, không có ngoại lệ (thường đi với 都/也).",
          examples: ["谁都喜欢小丽。", "小刚什么都喜欢吃。", "我们怎么去公园都可以。", "最近我觉得哪儿都不舒服。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "老师，我不舒服，我想跟您___。", options: ["为了", "请假", "后来", "爱好"], answer: "请假" },
    { sentence: "___了解中国文化，我常常去旅行。", options: ["为了", "冬天", "请假", "后来"], answer: "为了" },
    { sentence: "我以前在美国学习，___来中国留学。", options: ["爱好", "后来", "冬天", "为了"], answer: "后来" },
    { sentence: "我最喜欢的季节是___。", options: ["冬天", "请假", "爱好", "后来"], answer: "冬天" },
    { sentence: "我的___跟你的不一样，我更喜欢游泳。", options: ["后来", "为了", "爱好", "冬天"], answer: "爱好" },
    { sentence: "A：你认识那个人吗？B：认识，他是我的新___。", options: ["一共", "饱", "邻居", "决定"], answer: "邻居" },
    { sentence: "A：这次HSK你考得怎么样？B：好极了，___考了280分。", options: ["一共", "办法", "饱", "邻居"], answer: "一共" },
    { sentence: "A：我的口语不太好，你帮我想想___吧。B：你最好多跟中国人聊聊天儿。", options: ["决定", "办法", "一共", "饱"], answer: "办法" },
    { sentence: "A：吃___了吗？B：当然了，你看我们点了这么多菜。", options: ["饱", "邻居", "办法", "决定"], answer: "饱" },
    { sentence: "A：明年你打算回国吗？B：我还没___呢。", options: ["一共", "决定", "饱", "邻居"], answer: "决定" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [9, 2, 6] },
        { vocabId: 3, distractors: [5, 4, 14] },
        { vocabId: 5, distractors: [6, 3, 10] },
        { vocabId: 8, distractors: [13, 9, 12] },
        { vocabId: 9, distractors: [10, 1, 8] },
        { vocabId: 10, distractors: [9, 5, 14] },
        { vocabId: 12, distractors: [13, 2, 8] },
        { vocabId: 14, distractors: [6, 13, 3] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 6, 7, 10, 12, 13, 16],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["谁", "都", "有办法", "看好", "你的“病”", "。"], answer: "谁都有办法看好你的“病”。", vi: "Ai cũng có cách chữa khỏi “bệnh” của bạn." },
        { tokens: ["最近", "我", "觉得", "哪儿", "都", "不舒服", "。"], answer: "最近我觉得哪儿都不舒服。", vi: "Dạo này tôi thấy chỗ nào cũng khó chịu." },
        { tokens: ["你", "介绍", "我们", "认识认识", "吧", "。"], answer: "你介绍我们认识认识吧。", vi: "Bạn giới thiệu cho chúng tôi làm quen đi." },
        { tokens: ["为了", "健康", "，", "我", "应该", "多锻炼锻炼", "。"], answer: "为了健康，我应该多锻炼锻炼。", vi: "Vì sức khỏe, tôi nên rèn luyện nhiều hơn." },
        { tokens: ["必须", "要", "根据", "自己的健康情况", "运动", "。"], answer: "必须要根据自己的健康情况运动。", vi: "Nhất thiết phải vận động dựa theo tình trạng sức khỏe của mình." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Xin nghỉ phép", text: "小丽：周经理，下个星期我可以{{c1}}几天假吗？\n周明：你有什么事？\n小丽：我的一个老朋友结婚，我跟他两年没见了。\n周明：你{{c2}}想请几天{{c3}}？\n小丽：三天。" },
        { title: "Bài khóa 2 · Người đàn ông cao cao", text: "同事：小丽，那个高高的男人是你们公司的吗？你对他{{c4}}吗？\n小丽：我们过去是{{c5}}，{{c6}}是大学同学，{{c7}}一直很不错。\n同事：他一般喜欢做什么？\n小丽：他有很多{{c8}}，唱歌、画画儿、踢足球，{{c9}}都会。\n同事：真的？那你介绍我们{{c10}}吧。" },
      ],
      answers: { c1: "请", c2: "一共", c3: "假", c4: "了解", c5: "邻居", c6: "后来", c7: "关系", c8: "爱好", c9: "什么", c10: "认识认识" },
      bank: ["请", "一共", "假", "了解", "邻居", "后来", "关系", "爱好", "什么", "认识认识", "谁", "办法", "决定"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · “Bệnh” của bà Châu", text: "周太太：最近我觉得{{e1}}都不舒服，你带我去医院检查检查吧。\n周明：不用去医院，谁都有{{e2}}看好你的“病”。\n周明：谁都知道运动对身体好。但是你吃{{e3}}了就睡。\n周太太：{{e4}}健康，我真应该多锻炼锻炼了。从明天起，我{{e5}}每天去长跑。" },
        { title: "Bài khóa 4 · Vận động thế nào", text: "第一，要{{e6}}“对”的时间。一般来说，早上9点是最好的时间，{{e7}}要再晚一些。……第三，{{e8}}要{{e9}}自己的健康{{e10}}运动。" },
      ],
      answers: { e1: "哪儿", e2: "办法", e3: "饱", e4: "为了", e5: "决定", e6: "选择", e7: "冬天", e8: "必须", e9: "根据", e10: "情况" },
      bank: ["哪儿", "办法", "饱", "为了", "决定", "选择", "冬天", "必须", "根据", "情况", "渴", "谁", "爱好"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "谁都喜欢小丽。", vi: "Ai cũng thích Tiểu Lệ.", keywords: ["ai cũng", "thích"] },
        { zh: "小刚什么都喜欢吃。", vi: "Tiểu Cương món gì cũng thích ăn.", keywords: ["gì cũng", "thích ăn"] },
        { zh: "他是新来的，有时间你帮助帮助他吧。", vi: "Anh ấy là người mới đến, có thời gian bạn giúp đỡ anh ấy nhé.", keywords: ["mới", "thời gian", "giúp"] },
        { zh: "从明天起，我决定每天去长跑。", vi: "Từ ngày mai, tôi quyết định ngày nào cũng chạy bộ.", keywords: ["ngày mai", "quyết định", "chạy"] },
        { zh: "刚运动完口渴的时候，不要马上喝水。", vi: "Lúc vừa vận động xong khát nước, đừng uống nước ngay.", keywords: ["vận động", "khát", "uống nước"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chúng ta đi công viên bằng cách nào cũng được.", answers: ["我们怎么去公园都可以。", "我们怎么去公园都行。"] },
        { vi: "Đây là sách mới, bạn học thử đi.", answers: ["这是本新书，你学习学习吧。", "这是一本新书，你学习学习吧。"] },
        { vi: "Tôi mới đến đây, chẳng quen ai cả.", answers: ["我刚到这里，谁都不认识。", "我刚来这里，谁都不认识。", "我刚到这儿，谁都不认识。"] },
        { vi: "Bạn muốn xin nghỉ tổng cộng mấy ngày?", answers: ["你一共想请几天假？"] },
        { vi: "Vì sức khỏe, tôi quyết định ngày nào cũng rèn luyện.", answers: ["为了健康，我决定每天锻炼。", "为了健康，我决定每天都锻炼。", "为了身体健康，我决定每天锻炼。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小丽想请三天假。", a: true },
        { q: "小丽请假是因为她要结婚。", a: false },
        { q: "那个高高的男人是小丽的丈夫。", a: true },
        { q: "小丽的丈夫只喜欢踢足球。", a: false },
        { q: "周太太已经三年没运动了。", a: true },
        { q: "周明带周太太去医院检查了。", a: false },
        { q: "一般来说，早上9点运动最好。", a: true },
        { q: "运动完口渴的时候，应该马上喝水。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "谁都有办法看好你的病。",
        "下个星期我可以请几天假吗？",
        "他有很多爱好。",
        "最近我觉得哪儿都不舒服。",
        "我真应该多锻炼锻炼了。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你的运动习惯：你喜欢什么运动？什么时候、在哪儿运动？要注意什么？ (Kể về thói quen vận động của bạn: thích môn gì? Tập khi nào, ở đâu? Cần chú ý gì?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 17 (ABAB, 谁/什么/哪儿 + 都).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["谁都", "什么都", "哪儿都", "怎么", "锻炼锻炼", "休息休息", "认识认识", "帮助帮助", "学习学习"],
      minGrammar: 2,
      sample: "我的爱好很多，跑步、游泳、打篮球，什么运动都喜欢。为了健康，我决定每天早上锻炼锻炼。一般来说，我早上七点去公园跑步，冬天就晚一些。运动的时候，必须根据自己的身体情况，累了就休息休息。还有，刚运动完口渴的时候，不要马上喝水。谁都知道运动对身体好，你也来试试吧。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: động từ lặp lại ABAB", points: 6,
      subtitle: "Chọn dạng lặp lại ABAB thích hợp.",
      grammarWord: "ABAB",
      options: ["认识认识", "帮助帮助", "学习学习", "锻炼锻炼", "休息休息", "打扫打扫"],
      items: [
        { q: "他是谁？你介绍我们___吧。", answers: ["认识认识"] },
        { q: "他是新来的，有时间你___他吧。", answers: ["帮助帮助"] },
        { q: "这是本新书，你___吧。", answers: ["学习学习"] },
        { q: "我真应该多___了。", answers: ["锻炼锻炼"] },
        { q: "太累了，我们___吧。", answers: ["休息休息"] },
        { q: "房间不太干净，我们___吧。", answers: ["打扫打扫"] },
        { q: "运动一会儿就一定要___。", answers: ["休息休息"] },
        { q: "客人要来了，我要___房间。", answers: ["打扫打扫"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 谁/什么/怎么/哪儿 + 都", points: 6,
      subtitle: "Chọn đại từ nghi vấn thích hợp.",
      grammarWord: "疑问代词 + 都",
      options: ["谁", "什么", "怎么", "哪儿"],
      items: [
        { q: "___都喜欢小丽。", answers: ["谁"] },
        { q: "小刚___都喜欢吃。", answers: ["什么"] },
        { q: "我们___去公园都可以。", answers: ["怎么"] },
        { q: "最近我觉得___都不舒服。", answers: ["哪儿"] },
        { q: "唱歌、画画儿、踢足球，他___都会。", answers: ["什么"] },
        { q: "“运动很重要”这句话___都懂。", answers: ["谁"] },
        { q: "我刚到这里，___都不认识。", answers: ["谁"] },
        { q: "星期天我们去___玩儿都行。", answers: ["哪儿"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 为了 / 根据 / 必须", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "为了 / 根据 / 必须",
      options: ["为了", "根据", "必须"],
      items: [
        { q: "___健康，我真应该多锻炼锻炼了。", answers: ["为了"] },
        { q: "要___自己的健康情况运动。", answers: ["根据"] },
        { q: "如果很久没运动了，运动一会儿就___休息休息。", answers: ["必须"] },
        { q: "___了解中国文化，我常常去旅行。", answers: ["为了"] },
        { q: "___天气情况，我们决定明天去爬山。", answers: ["根据"] },
        { q: "明天考试，你今天___好好儿复习。", answers: ["必须"] },
        { q: "___学好汉语，他每天跟中国人聊天儿。", answers: ["为了"] },
        { q: "老师___每个学生的情况，给他们不同的作业。", answers: ["根据"] },
      ],
    },
  ],
};
