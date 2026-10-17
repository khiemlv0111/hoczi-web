import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第16课 我现在累得下了班就想睡觉。 (Bây giờ tôi mệt đến nỗi chỉ muốn đi ngủ sau khi hết giờ làm việc.)
// Nguồn: Giáo trình chuẩn HSK3, trang 151–158 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson16: Lesson = {
  level: "hsk3",
  no: 16,
  slug: "bai-16",
  zh: "我现在累得下了班就想睡觉。",
  pinyin: "Wǒ xiànzài lèi de xiàle bān jiù xiǎng shuì jiào.",
  vi: "Bây giờ tôi mệt đến nỗi chỉ muốn đi ngủ sau khi hết giờ làm việc.",
  en: "I'm so tired now that I just want to sleep after work.",
  topic: "生活 · Cuộc sống, ngoại hình, các mối quan hệ",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 16 từ mới: 城市、如果、认为、皮鞋、帽子、长、可爱、米、公斤、鼻子、头发、检查、刷牙、关系、别人、词语.",
    "Hiểu và dùng được 3 điểm ngữ pháp: 如果……(的话)，(主语)就……; bổ ngữ chỉ trạng thái phức tạp với 得 (累得下了班就想睡觉); tính từ một âm tiết lặp lại “AA的”.",
    "Đọc hiểu 3 đoạn hội thoại (muốn đi thành phố khác, thăm con của đồng nghiệp, đau răng) và 1 đoạn văn về quan hệ giữa người với người.",
    "Nói giả thiết – kết quả; miêu tả ngoại hình bằng “AA的”; diễn tả mức độ của trạng thái.",
    "Từ mới ghép từ chữ cũ: 运动鞋、体检.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：皮鞋、城市、帽子、鼻子、刷牙、头发",
      vi: "Chọn hình tương ứng với các từ: 皮鞋 (giày da), 城市 (thành phố), 帽子 (mũ), 鼻子 (mũi), 刷牙 (đánh răng), 头发 (tóc).",
    },
    {
      zh: "说说下列情况下，你想做什么或不想做什么：累的时候、高兴的时候、忙的时候、冷的时候、牙疼的时候、热的时候",
      vi: "Cho biết bạn muốn hoặc không muốn làm gì trong các tình huống: lúc mệt (vd. không muốn nói chuyện), lúc vui, lúc bận, lúc lạnh, lúc đau răng, lúc nóng.",
    },
  ],

  vocab: [
    { id: 1, han: "城市", py: "chéngshì", pos: "dt.", meaning: "thành phố", example: "我不喜欢一直住在同一个城市，想去其他城市看一看。", exampleVi: "Tôi không thích sống mãi ở một thành phố, muốn đi xem các thành phố khác." },
    { id: 2, han: "如果", py: "rúguǒ", pos: "liên.", meaning: "nếu", example: "如果有钱，就去了。", exampleVi: "Nếu có tiền thì đã đi rồi." },
    { id: 3, han: "认为", py: "rènwéi", pos: "đgt.", meaning: "cho rằng", example: "我认为现在您有时间也不会出去玩儿。", exampleVi: "Tôi cho rằng bây giờ anh có thời gian cũng sẽ không đi chơi đâu." },
    { id: 4, han: "皮鞋", py: "píxié", pos: "dt.", meaning: "giày da", example: "你送的小皮鞋和小帽子真漂亮！", exampleVi: "Đôi giày da nhỏ và chiếc mũ nhỏ bạn tặng đẹp quá!" },
    { id: 5, han: "帽子", py: "màozi", pos: "dt.", meaning: "mũ, nón", example: "你送的小帽子真漂亮！", exampleVi: "Chiếc mũ nhỏ bạn tặng đẹp quá!" },
    { id: 6, han: "长", py: "zhǎng", pos: "đgt.", meaning: "trưởng thành, lớn lên; trông (长得…)", example: "你女儿长得白白的、胖胖的，真可爱！", exampleVi: "Con gái chị trắng trẻo, mũm mĩm, đáng yêu quá!" },
    { id: 7, han: "可爱", py: "kě'ài", pos: "tt.", meaning: "đáng yêu, dễ thương", example: "那个小狗真可爱，我们把它带回家吧。", exampleVi: "Con chó nhỏ đó đáng yêu quá, chúng ta mang nó về nhà đi." },
    { id: 8, han: "米", py: "mǐ", pos: "lượng.", meaning: "mét", example: "现在多高了？——快1米了。", exampleVi: "Bây giờ cao bao nhiêu rồi? — Gần 1 mét rồi." },
    { id: 9, han: "公斤", py: "gōngjīn", pos: "lượng.", meaning: "ki-lô-gam", example: "快1米了，25公斤。", exampleVi: "Gần 1 mét, 25 cân." },
    { id: 10, han: "鼻子", py: "bízi", pos: "dt.", meaning: "mũi", example: "你看她鼻子小小的，头发黑黑的，长得像谁？", exampleVi: "Chị xem mũi nhỏ nhỏ, tóc đen đen, bé giống ai?" },
    { id: 11, han: "头发", py: "tóufa", pos: "dt.", meaning: "tóc", example: "他的女朋友头发长长的。", exampleVi: "Bạn gái anh ấy tóc dài dài." },
    { id: 12, han: "检查", py: "jiǎnchá", pos: "đgt.", meaning: "kiểm tra, khám", example: "如果不舒服，就去医院检查一下吧。", exampleVi: "Nếu không khỏe thì đến bệnh viện khám thử đi." },
    { id: 13, han: "刷牙", py: "shuā yá", pos: "đgt.", meaning: "chải răng, đánh răng", example: "每次医生都告诉我，回家好好儿刷牙。", exampleVi: "Lần nào bác sĩ cũng dặn tôi về nhà đánh răng cho cẩn thận." },
    { id: 14, han: "关系", py: "guānxì", pos: "dt.", meaning: "quan hệ", example: "很多人都觉得现在人和人的关系冷冷的。", exampleVi: "Nhiều người cảm thấy quan hệ giữa người với người bây giờ lạnh nhạt." },
    { id: 15, han: "别人", py: "biérén", pos: "đt.", meaning: "người khác", example: "我们应该多对别人笑笑。", exampleVi: "Chúng ta nên cười với người khác nhiều hơn." },
    { id: 16, han: "词语", py: "cíyǔ", pos: "dt.", meaning: "từ ngữ", example: "说话时如果能多用一些“您好”“谢谢”这样的词语，关系就会变得更好。", exampleVi: "Khi nói chuyện nếu dùng nhiều những từ như “chào ông/bà”, “cảm ơn” thì quan hệ sẽ tốt hơn." },
    { id: 17, han: "运动鞋", py: "yùndòngxié", pos: "dt.", meaning: "giày thể thao (运动 + 皮鞋)", example: "去爬山要穿运动鞋。", exampleVi: "Đi leo núi phải mang giày thể thao.", group: "extended" },
    { id: 18, han: "体检", py: "tǐjiǎn", pos: "đgt.", meaning: "khám sức khỏe (身体 + 检查)", example: "公司每年都让我们去医院体检。", exampleVi: "Công ty năm nào cũng cho chúng tôi đi bệnh viện khám sức khỏe.", group: "extended" },
  ],

  text: {
    title: "课文 我现在累得下了班就想睡觉。",
    paragraphs: [
      {
        heading: "课文一 · 在公司 (Trong công ty)",
        zh: "小丽：我不喜欢一直住在同一个城市，想去其他城市看一看。\n周明：我年轻的时候也这么想，但是那时候没有钱，如果有钱，就去了。\n小丽：那您现在为什么不去？\n周明：现在钱不是问题了，主要是没有时间。\n小丽：我认为现在您有时间也不会出去玩儿。\n周明：你说得对，我现在累得下了班就想睡觉。",
        vi: "Tiểu Lệ: Em không thích sống mãi ở một thành phố, muốn đi xem các thành phố khác.\nChâu Minh: Hồi trẻ tôi cũng nghĩ vậy, nhưng lúc đó không có tiền, nếu có tiền thì đã đi rồi.\nTiểu Lệ: Thế bây giờ sao anh không đi?\nChâu Minh: Bây giờ tiền không phải vấn đề nữa, chủ yếu là không có thời gian.\nTiểu Lệ: Em cho rằng bây giờ anh có thời gian cũng sẽ không đi chơi đâu.\nChâu Minh: Em nói đúng, bây giờ tôi mệt đến nỗi hết giờ làm là chỉ muốn đi ngủ.",
        questions: ["周明年轻的时候为什么没去旅行？", "现在周明为什么不能去旅行？"],
      },
      {
        heading: "课文二 · 在同事家 (Tại nhà đồng nghiệp)",
        zh: "同事：谢谢你们来看我女儿。你送的小皮鞋和小帽子真漂亮！\n小丽：别客气，你女儿长得白白的、胖胖的，真可爱！现在多高了？\n同事：快1米了，25公斤。\n小丽：你看她鼻子小小的，头发黑黑的，长得像谁？\n同事：像她爸爸，刚出生时她爸爸高兴得一个晚上都没睡着。",
        vi: "Đồng nghiệp: Cảm ơn các bạn đến thăm con gái tôi. Đôi giày da nhỏ và chiếc mũ nhỏ bạn tặng đẹp quá!\nTiểu Lệ: Đừng khách sáo, con gái chị trắng trẻo, mũm mĩm, đáng yêu quá! Bây giờ cao bao nhiêu rồi?\nĐồng nghiệp: Gần 1 mét rồi, 25 cân.\nTiểu Lệ: Chị xem mũi nhỏ nhỏ, tóc đen đen, bé giống ai thế?\nĐồng nghiệp: Giống bố nó, lúc bé mới sinh bố nó vui đến mức cả đêm không ngủ được.",
        questions: ["同事的女儿长得怎么样？", "同事的女儿长得像谁？"],
      },
      {
        heading: "课文三 · 在公司 (Trong công ty)",
        zh: "小刚：我的牙还是很疼。\n同事：如果不舒服，就去医院检查一下吧。\n小刚：检查好几次了，但是没什么用。\n同事：大夫怎么说的？\n小刚：每次医生都告诉我，回家好好儿刷牙。",
        vi: "Tiểu Cương: Răng tớ vẫn đau lắm.\nĐồng nghiệp: Nếu không khỏe thì đến bệnh viện khám thử đi.\nTiểu Cương: Khám mấy lần rồi, nhưng chẳng ăn thua gì.\nĐồng nghiệp: Bác sĩ nói thế nào?\nTiểu Cương: Lần nào bác sĩ cũng bảo tớ về nhà đánh răng cho cẩn thận.",
        questions: ["小刚怎么了？", "小刚为什么牙疼？"],
      },
      {
        heading: "课文四 · 人和人的关系 (Quan hệ giữa người với người)",
        zh: "很多人都觉得现在人和人的关系冷冷的，这可能是因为工作太忙，忙得没时间跟别人见面，累得不愿意和别人多说话。其实，我们应该多对别人笑笑，说话时如果能多用一些“您好”“谢谢”这样的词语，和别人的关系就会变得更好。",
        vi: "Nhiều người cảm thấy quan hệ giữa người với người bây giờ lạnh nhạt, có thể là vì công việc quá bận, bận đến mức không có thời gian gặp người khác, mệt đến mức không muốn nói chuyện nhiều với ai. Thật ra, chúng ta nên cười với người khác nhiều hơn, khi nói chuyện nếu dùng nhiều những từ như “chào ông/bà”, “cảm ơn”, quan hệ với người khác sẽ trở nên tốt hơn.",
        questions: ["为什么现在人和人之间的关系冷冷的？", "我们怎么做才能让关系变得更好？"],
      },
    ],
    notes: [
      "大夫 (dàifu): bác sĩ (khẩu ngữ, = 医生).",
      "好好儿 (hǎohāor): cẩn thận, chăm chỉ, đàng hoàng (好好儿刷牙).",
      "Tục ngữ – 钱不是万能的 (Qián bú shì wànnéng de): tiền không phải là vạn năng; tiền quan trọng nhưng không giải quyết được mọi vấn đề.",
    ],
  },

  grammar: [
    {
      word: "如果……(的话)，(主语)就……",
      title: "Nếu… thì…",
      usages: [
        {
          label: "Cách dùng",
          explain: "Mệnh đề sau 如果 là giả thiết, mệnh đề sau 就 là kết quả dựa trên giả thiết đó. Chủ ngữ của mệnh đề thứ hai phải đặt trước 就.",
          examples: ["如果你太累了，就休息一会儿。", "如果你喜欢，我就给你买。", "如果有钱的话，我就去旅游。", "如果不舒服，就去医院检查一下吧。"],
        },
      ],
    },
    {
      word: "形容词/动词 + 得 + 动词词组",
      title: "Bổ ngữ chỉ trạng thái phức tạp",
      usages: [
        {
          label: "Cách dùng",
          explain: "得 tạo thành bổ ngữ chỉ trạng thái nhằm miêu tả mức độ của trạng thái; trước 得 thường là tính từ hoặc động từ, sau 得 là cụm động từ (… đến nỗi …).",
          examples: ["孩子们玩儿得不想回家。", "弟弟高兴得跳了起来。", "儿子累得下了班就睡觉了。", "人们忙得没时间跟别人见面。"],
        },
      ],
    },
    {
      word: "AA的",
      title: "Tính từ một âm tiết lặp lại",
      usages: [
        {
          label: "Cách dùng",
          explain: "Tính từ một âm tiết lặp lại theo dạng “AA的” để miêu tả đặc trưng của người hay sự vật với mức độ tăng thêm.",
          examples: ["你送的花红红的，我很喜欢。", "这些草绿绿的，真漂亮。", "他鼻子小小的，长得像谁？", "你女儿长得白白的、胖胖的，真可爱！"],
        },
      ],
      note: "Đã lặp lại thì không dùng thêm 很/非常: không nói *很红红的.",
    },
  ],

  wordChoice: [
    { sentence: "___我的丈夫能少一些会议，他就会多跟我和孩子在一起了。", options: ["关系", "可爱", "城市", "如果"], answer: "如果" },
    { sentence: "你觉得哪个___最好玩儿？", options: ["城市", "鼻子", "关系", "可爱"], answer: "城市" },
    { sentence: "我和同屋的___不太好，怎么办？", options: ["如果", "关系", "鼻子", "城市"], answer: "关系" },
    { sentence: "我女朋友___高高的、头发长长的，非常好看。", options: ["鼻子", "可爱", "如果", "关系"], answer: "鼻子" },
    { sentence: "那个小狗真___，我们把它带回家吧。", options: ["城市", "如果", "可爱", "鼻子"], answer: "可爱" },
    { sentence: "A：今天下午你去哪儿了？B：我的车总是有问题，我去___了一下。", options: ["检查", "米", "公斤", "认为"], answer: "检查" },
    { sentence: "A：你想买点儿什么？B：给我来一___苹果。", options: ["米", "公斤", "刷牙", "检查"], answer: "公斤" },
    { sentence: "A：你有多高？B：1___75。", options: ["公斤", "认为", "米", "刷牙"], answer: "米" },
    { sentence: "A：你怎么刚吃饭？B：今天起晚了，___以后就来上课了。", options: ["刷牙", "检查", "米", "认为"], answer: "刷牙" },
    { sentence: "A：咱们去南方玩儿玩儿吧。B：我___，还是北方更好玩儿一些。", options: ["公斤", "认为", "刷牙", "检查"], answer: "认为" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [14, 2, 3] },
        { vocabId: 3, distractors: [2, 15, 16] },
        { vocabId: 4, distractors: [5, 10, 11] },
        { vocabId: 7, distractors: [6, 9, 8] },
        { vocabId: 10, distractors: [11, 4, 5] },
        { vocabId: 12, distractors: [13, 14, 3] },
        { vocabId: 14, distractors: [15, 1, 16] },
        { vocabId: 16, distractors: [14, 15, 12] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 4, 9, 11, 12, 13, 14],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "现在", "累得", "下了班", "就", "想睡觉", "。"], answer: "我现在累得下了班就想睡觉。", vi: "Bây giờ tôi mệt đến nỗi hết giờ làm là chỉ muốn ngủ." },
        { tokens: ["如果", "不舒服", "，", "就", "去医院", "检查一下吧", "。"], answer: "如果不舒服，就去医院检查一下吧。", vi: "Nếu không khỏe thì đến bệnh viện khám thử đi." },
        { tokens: ["你女儿", "长得", "白白的", "、", "胖胖的", "。"], answer: "你女儿长得白白的、胖胖的。", vi: "Con gái bạn trắng trẻo, mũm mĩm." },
        { tokens: ["弟弟", "高兴得", "跳了", "起来", "。"], answer: "弟弟高兴得跳了起来。", vi: "Em trai vui đến mức nhảy cẫng lên." },
        { tokens: ["我", "认为", "现在", "您有时间", "也不会", "出去玩儿", "。"], answer: "我认为现在您有时间也不会出去玩儿。", vi: "Tôi cho rằng bây giờ anh có thời gian cũng sẽ không đi chơi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Trong công ty", text: "小丽：我不喜欢一直住在同一个{{c1}}，想去其他城市看一看。\n周明：我年轻的时候也这么想，但是那时候没有钱，{{c2}}有钱，就去了。\n小丽：我{{c3}}现在您有时间也不会出去玩儿。\n周明：你说得对，我现在累{{c4}}下了班就想睡觉。" },
        { title: "Bài khóa 2 · Thăm con đồng nghiệp", text: "同事：你送的小{{c5}}和小{{c6}}真漂亮！\n小丽：别客气，你女儿{{c7}}得白白的、胖胖的，真{{c8}}！现在多高了？\n同事：快1米了，25公斤。\n小丽：你看她{{c9}}小小的，{{c10}}黑黑的，长得像谁？" },
      ],
      answers: { c1: "城市", c2: "如果", c3: "认为", c4: "得", c5: "皮鞋", c6: "帽子", c7: "长", c8: "可爱", c9: "鼻子", c10: "头发" },
      bank: ["城市", "如果", "认为", "得", "皮鞋", "帽子", "长", "可爱", "鼻子", "头发", "关系", "就", "米"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Đau răng", text: "小刚：我的牙还是很疼。\n同事：如果不舒服，{{e1}}去医院{{e2}}一下吧。\n小刚：检查好几次了，但是没什么用。\n小刚：每次医生都告诉我，回家好好儿{{e3}}。" },
        { title: "Bài khóa 4 · Quan hệ giữa người với người", text: "很多人都觉得现在人和人的{{e4}}{{e5}}的，这可能是因为工作太忙，忙{{e6}}没时间跟{{e7}}见面，累得不{{e8}}和别人多说话。其实，我们应该多对别人笑笑，说话时如果能多用一些“您好”“谢谢”这样的{{e9}}，和别人的关系就会变得{{e10}}。" },
      ],
      answers: { e1: "就", e2: "检查", e3: "刷牙", e4: "关系", e5: "冷冷", e6: "得", e7: "别人", e8: "愿意", e9: "词语", e10: "更好" },
      bank: ["就", "检查", "刷牙", "关系", "冷冷", "得", "别人", "愿意", "词语", "更好", "如果", "可爱", "城市"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "如果有钱的话，我就去旅游。", vi: "Nếu có tiền thì tôi sẽ đi du lịch.", keywords: ["nếu", "tiền", "du lịch"] },
        { zh: "孩子们玩儿得不想回家。", vi: "Bọn trẻ chơi vui đến mức không muốn về nhà.", keywords: ["bọn trẻ", "chơi", "không muốn về"] },
        { zh: "你送的花红红的，我很喜欢。", vi: "Hoa bạn tặng đỏ thắm, tôi rất thích.", keywords: ["hoa", "đỏ", "thích"] },
        { zh: "刚出生时她爸爸高兴得一个晚上都没睡着。", vi: "Lúc bé mới sinh, bố bé vui đến mức cả đêm không ngủ được.", keywords: ["mới sinh", "vui", "không ngủ"] },
        { zh: "我们应该多对别人笑笑。", vi: "Chúng ta nên cười với người khác nhiều hơn.", keywords: ["nên", "cười", "người khác"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Nếu bạn mệt quá thì nghỉ một lát đi.", answers: ["如果你太累了，就休息一会儿。", "如果你太累了，就休息一会儿吧。", "如果你很累，就休息一会儿吧。"] },
        { vi: "Nếu bạn thích, tôi sẽ mua cho bạn.", answers: ["如果你喜欢，我就给你买。", "如果你喜欢的话，我就给你买。"] },
        { vi: "Em trai vui đến mức nhảy cẫng lên.", answers: ["弟弟高兴得跳了起来。", "弟弟高兴得跳起来了。"] },
        { vi: "Cỏ này xanh mướt, đẹp thật.", answers: ["这些草绿绿的，真漂亮。", "这些草绿绿的，真好看。"] },
        { vi: "Mọi người bận đến mức không có thời gian gặp người khác.", answers: ["人们忙得没时间跟别人见面。", "大家忙得没时间跟别人见面。", "人们忙得没有时间跟别人见面。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小丽想去其他城市看一看。", a: true },
        { q: "周明年轻的时候很有钱。", a: false },
        { q: "周明现在没有时间去旅行。", a: true },
        { q: "小丽送了同事的女儿一件衣服。", a: false },
        { q: "同事的女儿长得像她爸爸。", a: true },
        { q: "小刚的牙已经不疼了。", a: false },
        { q: "医生让小刚回家好好儿刷牙。", a: true },
        { q: "课文四说，我们应该少对别人笑。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我现在累得下了班就想睡觉。",
        "你女儿真可爱！",
        "如果不舒服，就去医院检查一下吧。",
        "她鼻子小小的，头发黑黑的。",
        "和别人的关系就会变得更好。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "用“AA的”描述你的一个朋友或家人，再说说如果有很多钱，你会做什么。 (Dùng “AA的” miêu tả một người bạn hoặc người thân, rồi nói nếu có nhiều tiền bạn sẽ làm gì.)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 16 (如果……就……, bổ ngữ trạng thái với 得, AA的).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["如果", "就", "得", "的话"],
      minGrammar: 2,
      sample: "我妹妹今年五岁，她长得白白的、胖胖的，鼻子小小的，头发长长的，可爱极了。她特别喜欢帽子，每次看见漂亮的帽子，就高兴得跳起来。如果我有很多钱的话，我就带妹妹去其他城市旅游，给她买很多帽子和小皮鞋。我认为跟家人在一起的时候最快乐。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 如果……就……", points: 6,
      subtitle: "Chọn 如果 hoặc 就 cho mỗi chỗ trống.",
      grammarWord: "如果……就……",
      options: ["如果", "就"],
      items: [
        { q: "___你太累了，就休息一会儿。", answers: ["如果"] },
        { q: "如果你喜欢，我___给你买。", answers: ["就"] },
        { q: "___有钱的话，我就去旅游。", answers: ["如果"] },
        { q: "如果不舒服，___去医院检查一下吧。", answers: ["就"] },
        { q: "___明天下雨的话，我们就不去爬山了。", answers: ["如果"] },
        { q: "如果考试考得很好的话，妈妈___给我买新手机。", answers: ["就"] },
        { q: "你___喜欢她的话，就告诉她吧。", answers: ["如果"] },
        { q: "如果有时间，我___跟朋友去踢足球。", answers: ["就"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: bổ ngữ trạng thái với 得", points: 6,
      subtitle: "Chọn cụm từ thích hợp sau 得.",
      grammarWord: "得",
      options: ["不想回家", "跳了起来", "下了班就睡觉了", "没时间跟别人见面", "一个晚上都没睡着", "说不出话来"],
      items: [
        { q: "孩子们玩儿得___。", answers: ["不想回家"] },
        { q: "弟弟高兴得___。", answers: ["跳了起来"] },
        { q: "儿子累得___。", answers: ["下了班就睡觉了"] },
        { q: "人们忙得___。", answers: ["没时间跟别人见面"] },
        { q: "刚出生时她爸爸高兴得___。", answers: ["一个晚上都没睡着"] },
        { q: "我牙疼得___。", answers: ["说不出话来"] },
        { q: "他忙得___，一个朋友也没有。", answers: ["没时间跟别人见面"] },
        { q: "看了那个电影，她高兴得___。", answers: ["跳了起来", "说不出话来", "一个晚上都没睡着"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: tính từ lặp lại AA的", points: 5,
      subtitle: "Chọn dạng lặp lại thích hợp.",
      grammarWord: "AA的",
      options: ["红红的", "绿绿的", "小小的", "白白的", "长长的", "高高的"],
      items: [
        { q: "你送的花___，我很喜欢。", answers: ["红红的"] },
        { q: "这些草___，真漂亮。", answers: ["绿绿的"] },
        { q: "他鼻子___，长得像谁？", answers: ["小小的"] },
        { q: "你女儿长得___、胖胖的，真可爱！", answers: ["白白的"] },
        { q: "他的女朋友头发___。", answers: ["长长的"] },
        { q: "她的男朋友个子___。", answers: ["高高的"] },
        { q: "春天到了，树都___。", answers: ["绿绿的"] },
        { q: "那个女孩个子___，头发长长的。", answers: ["高高的", "小小的"] },
      ],
    },
  ],
};
