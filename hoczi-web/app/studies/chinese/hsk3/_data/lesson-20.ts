import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第20课 我被他影响了。 (Mình chịu ảnh hưởng từ anh ấy.)
// Nguồn: Giáo trình chuẩn HSK3, trang 184–193 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson20: Lesson = {
  level: "hsk3",
  no: 20,
  slug: "bai-20",
  zh: "我被他影响了。",
  pinyin: "Wǒ bèi tā yǐngxiǎng le.",
  vi: "Mình chịu ảnh hưởng từ anh ấy.",
  en: "I've been influenced by him.",
  topic: "生活 · Mất đồ, ảnh hưởng, giải quyết vấn đề",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 14 từ mới: 照相机、被、难过、东、信用卡、关心、只有……才……、成绩、碗、分、解决、试、真正、多么.",
    "Hiểu và dùng được 2 điểm ngữ pháp: câu chữ 被 (chủ ngữ + 被/叫/让 + tân ngữ + động từ + thành phần khác); cấu trúc điều kiện duy nhất 只有……，才…….",
    "Đọc hiểu 3 đoạn hội thoại (mất máy ảnh, quan tâm bóng đá vì bạn trai, hai anh em sinh đôi) và 1 đoạn văn về cách giải quyết khó khăn.",
    "Diễn đạt câu bị động; nêu điều kiện duy nhất để đạt kết quả.",
    "Từ mới ghép từ chữ cũ: 碗筷、房卡、东北.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：难过、成绩、照相机、信用卡、碗、东",
      vi: "Chọn hình tương ứng với các từ: 难过 (buồn), 成绩 (thành tích, điểm số), 照相机 (máy ảnh), 信用卡 (thẻ tín dụng), 碗 (bát), 东 (phía đông).",
    },
    {
      zh: "连线：把动词和宾语连起来。解决、影响、开走、花完、骑走、用坏 — 朋友、钱、问题、自行车、照相机、汽车",
      vi: "Nối động từ với tân ngữ: 解决问题 (giải quyết vấn đề), 影响朋友, 开走汽车, 花完钱, 骑走自行车, 用坏照相机.",
    },
  ],

  vocab: [
    { id: 1, han: "照相机", py: "zhàoxiàngjī", pos: "dt.", meaning: "máy chụp ảnh", example: "我的照相机被谁拿走了？", exampleVi: "Máy ảnh của mình bị ai lấy mất rồi?" },
    { id: 2, han: "被", py: "bèi", pos: "giới.", meaning: "bị, được (dùng để chỉ thể bị động)", example: "我被他影响了。", exampleVi: "Mình chịu ảnh hưởng từ anh ấy." },
    { id: 3, han: "难过", py: "nánguò", pos: "tt.", meaning: "buồn", example: "别难过，再买一个吧。", exampleVi: "Đừng buồn, mua cái khác đi." },
    { id: 4, han: "东", py: "dōng", pos: "dt.", meaning: "phía đông", example: "公司东门外不就有一个大商场吗？", exampleVi: "Ngoài cổng đông công ty chẳng phải có một trung tâm thương mại lớn sao?" },
    { id: 5, han: "信用卡", py: "xìnyòngkǎ", pos: "dt.", meaning: "thẻ tín dụng", example: "我这个月信用卡里的钱已经花得差不多了。", exampleVi: "Tiền trong thẻ tín dụng tháng này của mình đã tiêu gần hết rồi." },
    { id: 6, han: "关心", py: "guānxīn", pos: "đgt.", meaning: "quan tâm, chú ý", example: "你怎么突然关心起体育来了？", exampleVi: "Sao cậu bỗng dưng quan tâm đến thể thao thế?" },
    { id: 7, han: "只有……才……", py: "zhǐyǒu…cái…", pos: "liên.", meaning: "chỉ có… (thì) mới…", example: "看来只有爱，才能让人有变化。", exampleVi: "Xem ra chỉ có tình yêu mới khiến con người thay đổi." },
    { id: 8, han: "成绩", py: "chéngjì", pos: "dt.", meaning: "thành tích, kết quả (công tác, học tập)", example: "我什么时候能知道这次考试的成绩？", exampleVi: "Khi nào tôi biết được kết quả kỳ thi này?" },
    { id: 9, han: "碗", py: "wǎn", pos: "dt.", meaning: "bát", example: "那个拿着碗吃饭的人是你哥哥吗？", exampleVi: "Người cầm bát ăn cơm kia là anh trai cậu à?" },
    { id: 10, han: "分", py: "fēn", pos: "đgt.", meaning: "phân biệt, chia", example: "只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。", exampleVi: "Chắc chỉ có bố mẹ các cậu mới phân biệt được ai là anh, ai là em." },
    { id: 11, han: "解决", py: "jiějué", pos: "đgt.", meaning: "giải quyết", example: "不同的问题有不同的解决办法。", exampleVi: "Vấn đề khác nhau có cách giải quyết khác nhau." },
    { id: 12, han: "试", py: "shì", pos: "đgt.", meaning: "thử", example: "有些问题看上去很难，但是做起来非常简单，所以得试着做做。", exampleVi: "Có những vấn đề trông thì khó nhưng làm thì rất đơn giản, nên phải thử làm." },
    { id: 13, han: "真正", py: "zhēnzhèng", pos: "p.", meaning: "thật sự", example: "只有真正做事情的时候，才能了解有多难。", exampleVi: "Chỉ khi thật sự bắt tay làm việc mới hiểu được khó thế nào." },
    { id: 14, han: "多么", py: "duōme", pos: "p.", meaning: "biết bao, dù… thế nào (mức độ tương đối cao)", example: "多么难的问题，都会被解决的。", exampleVi: "Vấn đề khó đến đâu cũng sẽ được giải quyết." },
    { id: 15, han: "大卫", py: "Dàwèi", pos: "dt.", meaning: "David (tên người)", example: "大卫和他哥哥长得真像。", exampleVi: "David và anh trai giống nhau thật." },
    { id: 16, han: "碗筷", py: "wǎnkuài", pos: "dt.", meaning: "bát đũa (碗 + 筷子)", example: "吃完饭，我来洗碗筷。", exampleVi: "Ăn xong, để tôi rửa bát đũa.", group: "extended" },
    { id: 17, han: "房卡", py: "fángkǎ", pos: "dt.", meaning: "thẻ phòng (房间 + 信用卡)", example: "请拿好您的房卡。", exampleVi: "Xin cầm thẻ phòng của quý khách.", group: "extended" },
    { id: 18, han: "东北", py: "dōngběi", pos: "dt.", meaning: "phía đông bắc (东 + 北方)", example: "冬天中国东北特别冷。", exampleVi: "Mùa đông vùng Đông Bắc Trung Quốc rất lạnh.", group: "extended" },
  ],

  text: {
    title: "课文 我被他影响了。",
    paragraphs: [
      {
        heading: "课文一 · 在休息室 (Trong phòng giải lao)",
        zh: "小丽：我的照相机被谁拿走了？怎么找不到了？\n同事：你再找找。是不是没带来？\n小丽：我找了，没找到啊。\n同事：别难过，再买一个吧，公司东门外不就有一个大商场吗？\n小丽：但是我这个月信用卡里的钱已经花得差不多了。",
        vi: "Tiểu Lệ: Máy ảnh của mình bị ai lấy mất rồi? Sao không tìm thấy nữa?\nĐồng nghiệp: Cậu tìm lại xem. Có phải không mang đến không?\nTiểu Lệ: Mình tìm rồi, không thấy.\nĐồng nghiệp: Đừng buồn, mua cái khác đi, ngoài cổng đông công ty chẳng phải có một trung tâm thương mại lớn sao?\nTiểu Lệ: Nhưng tháng này tiền trong thẻ tín dụng của mình đã tiêu gần hết rồi.",
        questions: ["小丽找不到什么了？", "小丽现在能买一个新的吗？为什么？"],
      },
      {
        heading: "课文二 · 在教室 (Trong lớp học)",
        zh: "小明：你怎么突然关心起体育来了？\n朋友：我的男朋友喜欢看足球比赛，我被他影响的。\n小明：看来只有爱，才能让人有变化。\n朋友：是啊，为了和他的爱好一样，我天天看球赛。\n小明：除了足球，他还影响你什么了？\n朋友：我最近天天上网玩儿游戏，我的成绩差极了。",
        vi: "Tiểu Minh: Sao cậu bỗng dưng quan tâm đến thể thao thế?\nBạn: Bạn trai mình thích xem bóng đá, mình bị anh ấy ảnh hưởng.\nTiểu Minh: Xem ra chỉ có tình yêu mới khiến con người thay đổi.\nBạn: Đúng vậy, để có sở thích giống anh ấy, ngày nào mình cũng xem bóng đá.\nTiểu Minh: Ngoài bóng đá, anh ấy còn ảnh hưởng gì đến cậu nữa?\nBạn: Dạo này ngày nào mình cũng lên mạng chơi game, điểm của mình tệ vô cùng.",
        questions: ["朋友为什么突然关心起体育来了？", "小明朋友的成绩为什么很差？"],
      },
      {
        heading: "课文三 · 在饭馆儿 (Ở quán ăn)",
        zh: "朋友：那个拿着碗吃饭的人是你哥哥吗？他和你长得真像。\n大卫：我们经常被别人认错。\n朋友：只有你们的爸爸妈妈才能分出来哪个是哥哥，哪个是弟弟吧。\n大卫：除了父母以外，还有我们自己也能啊。\n朋友：你们两个除了长得像，还有什么相同的地方？\n大卫：我们住在同一个楼、同一个房间……",
        vi: "Bạn: Người cầm bát ăn cơm kia là anh trai cậu à? Anh ấy với cậu giống nhau thật.\nDavid: Bọn mình thường bị người khác nhận nhầm.\nBạn: Chắc chỉ có bố mẹ các cậu mới phân biệt được ai là anh, ai là em nhỉ.\nDavid: Ngoài bố mẹ ra, còn có chính bọn mình cũng phân biệt được chứ.\nBạn: Hai cậu ngoài giống nhau về ngoại hình, còn điểm gì giống nhau nữa?\nDavid: Bọn mình ở cùng một tòa nhà, cùng một phòng…",
        questions: ["谁能分出来哪个是哥哥，哪个是弟弟？", "大卫和他哥哥有什么相同的地方？"],
      },
      {
        heading: "课文四 · 解决问题 (Giải quyết vấn đề)",
        zh: "年轻人遇到难题，常常很着急，不知道怎么办。其实，不同的问题有不同的解决办法。有些问题看上去很难，但是做起来非常简单，所以得试着做做。有些问题看上去虽然简单，但是解决起来难极了。所以只有真正做事情的时候，才能了解有多难。不过，我们一定要相信：多么难的问题，都会被解决的。",
        vi: "Người trẻ gặp chuyện khó thường rất sốt ruột, không biết làm thế nào. Thật ra, vấn đề khác nhau có cách giải quyết khác nhau. Có những vấn đề trông thì rất khó nhưng làm thì vô cùng đơn giản, nên phải thử làm. Có những vấn đề trông thì đơn giản nhưng giải quyết thì khó vô cùng. Vì thế chỉ khi thật sự bắt tay làm việc mới hiểu được nó khó đến đâu. Tuy nhiên, chúng ta nhất định phải tin rằng: vấn đề khó đến đâu cũng sẽ được giải quyết.",
        questions: ["年轻人遇到难题时应该怎么办？", "我们在解决问题时要相信什么？"],
      },
    ],
    notes: [
      "大卫 (Dàwèi): David.",
      "关心起体育来: bắt đầu quan tâm đến thể thao (động từ + 起 + tân ngữ + 来 chỉ hành động bắt đầu).",
      "Tục ngữ – 车到山前必有路 (Chē dào shān qián bì yǒu lù): xe đến trước núi ắt có đường; gặp khó khăn đừng hoảng sợ, vấn đề nào cũng có cách giải quyết.",
      "Văn hóa – Những đồ không nên tặng ở Trung Quốc: 伞 (ô, đồng âm gần với 散 – chia lìa), 鞋 (giày, đồng âm với 邪 – xui xẻo), 钟 (đồng hồ, 送钟 đồng âm với 送终 – tiễn người qua đời).",
    ],
  },

  grammar: [
    {
      word: "主语 + 被/叫/让 + 宾语 + 动词 + 其他",
      title: "Câu chữ 被 (câu bị động)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Câu có 被 diễn tả nghĩa bị động: chủ ngữ là đối tượng chịu tác động, tân ngữ là chủ thể của hành động. Tân ngữ sau 被 có thể lược bỏ, nhưng sau 叫 hay 让 thì không được lược. Sau động từ thường có thành phần khác (了, bổ ngữ…).",
          examples: ["我被男朋友影响了。", "帽子被风刮跑了。", "蛋糕让弟弟吃完了。", "我的照相机被谁拿走了？"],
        },
        {
          label: "Phủ định / trợ động từ",
          explain: "Phó từ phủ định, động từ năng nguyện… phải đặt trước 被.",
          examples: ["问题还没有被解决呢。", "病人还没被送到医院呢。", "下个月她会被妈妈送到美国。", "我们经常被别人认错。"],
        },
      ],
    },
    {
      word: "只有……，才……",
      title: "Chỉ có… mới…",
      usages: [
        {
          label: "Cách dùng",
          explain: "Nối hai thành phần của câu phức chỉ điều kiện: sau 只有 là điều kiện duy nhất, sau 才 là kết quả chỉ xuất hiện trong điều kiện này.",
          examples: ["只有写完作业，才能看电视。", "只有妈妈做的饭，她才爱吃。", "只有爸爸、妈妈才能分出来。", "看来只有爱，才能让人有变化。"],
        },
      ],
      note: "So sánh: 只要……就…… (bài 18) – điều kiện đủ; 只有……才…… – điều kiện duy nhất, bắt buộc.",
    },
  ],

  wordChoice: [
    { sentence: "你每个月花多少钱？你有几张___？", options: ["成绩", "多么", "照相机", "信用卡"], answer: "信用卡" },
    { sentence: "这个地方真漂亮，你带___了吗？", options: ["照相机", "信用卡", "难过", "成绩"], answer: "照相机" },
    { sentence: "别___了，手机坏了就再买一个吧。", options: ["多么", "难过", "成绩", "照相机"], answer: "难过" },
    { sentence: "我什么时候能知道这次考试的___？", options: ["成绩", "难过", "信用卡", "多么"], answer: "成绩" },
    { sentence: "今天的天气___好啊！", options: ["难过", "多么", "成绩", "照相机"], answer: "多么" },
    { sentence: "A：你想要什么结婚礼物？B：你送给我几个漂亮的___吧。", options: ["试", "只有", "碗", "东"], answer: "碗" },
    { sentence: "A：他怎么又看篮球比赛了？B：___看球赛，才能让他变得高兴。", options: ["只有", "关心", "试", "碗"], answer: "只有" },
    { sentence: "A：我的电脑又坏了。B：我___一下，看看有什么问题。", options: ["东", "试", "只有", "关心"], answer: "试" },
    { sentence: "A：你觉得周经理怎么样？B：非常好，很___我们。", options: ["关心", "碗", "东", "试"], answer: "关心" },
    { sentence: "A：请问，去中国银行怎么走？B：一直往___走。", options: ["只有", "关心", "东", "碗"], answer: "东" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [5, 8, 9] },
        { vocabId: 3, distractors: [6, 11, 12] },
        { vocabId: 5, distractors: [1, 8, 4] },
        { vocabId: 6, distractors: [3, 11, 13] },
        { vocabId: 8, distractors: [11, 5, 14] },
        { vocabId: 11, distractors: [6, 8, 12] },
        { vocabId: 13, distractors: [14, 6, 3] },
        { vocabId: 14, distractors: [13, 12, 3] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 5, 6, 8, 9, 11, 14],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我的照相机", "被", "谁", "拿走", "了", "？"], answer: "我的照相机被谁拿走了？", vi: "Máy ảnh của tôi bị ai lấy mất rồi?" },
        { tokens: ["我们", "经常", "被", "别人", "认错", "。"], answer: "我们经常被别人认错。", vi: "Chúng tôi thường bị người khác nhận nhầm." },
        { tokens: ["只有", "写完作业", "，", "才", "能看电视", "。"], answer: "只有写完作业，才能看电视。", vi: "Chỉ có làm xong bài tập mới được xem ti vi." },
        { tokens: ["问题", "还", "没有", "被", "解决", "呢", "。"], answer: "问题还没有被解决呢。", vi: "Vấn đề vẫn chưa được giải quyết." },
        { tokens: ["多么", "难的问题", "，", "都", "会被解决的", "。"], answer: "多么难的问题，都会被解决的。", vi: "Vấn đề khó đến đâu cũng sẽ được giải quyết." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Mất máy ảnh", text: "小丽：我的{{c1}}{{c2}}谁拿走了？怎么找不到了？\n同事：别{{c3}}，再买一个吧，公司{{c4}}门外不就有一个大商场吗？\n小丽：但是我这个月{{c5}}里的钱已经花得差不多了。" },
        { title: "Bài khóa 2 · Bị ảnh hưởng", text: "小明：你怎么突然{{c6}}起体育来了？\n朋友：我的男朋友喜欢看足球比赛，我被他{{c7}}的。\n小明：看来{{c8}}爱，{{c9}}能让人有变化。\n朋友：我最近天天上网玩儿游戏，我的{{c10}}差极了。" },
      ],
      answers: { c1: "照相机", c2: "被", c3: "难过", c4: "东", c5: "信用卡", c6: "关心", c7: "影响", c8: "只有", c9: "才", c10: "成绩" },
      bank: ["照相机", "被", "难过", "东", "信用卡", "关心", "影响", "只有", "才", "成绩", "就", "只要", "西"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Anh em sinh đôi", text: "朋友：那个拿着{{e1}}吃饭的人是你哥哥吗？他和你长得真像。\n大卫：我们经常{{e2}}别人认错。\n朋友：只有你们的爸爸妈妈才能{{e3}}出来哪个是哥哥，哪个是弟弟吧。" },
        { title: "Bài khóa 4 · Giải quyết vấn đề", text: "年轻人{{e4}}难题，常常很着急，不知道怎么办。其实，不同的问题有不同的{{e5}}办法。有些问题看上去很难，但是做起来非常简单，所以得{{e6}}着做做。……所以只有{{e7}}做事情的时候，{{e8}}能了解有多难。不过，我们一定要{{e9}}：{{e10}}难的问题，都会被解决的。" },
      ],
      answers: { e1: "碗", e2: "被", e3: "分", e4: "遇到", e5: "解决", e6: "试", e7: "真正", e8: "才", e9: "相信", e10: "多么" },
      bank: ["碗", "被", "分", "遇到", "解决", "试", "真正", "才", "相信", "多么", "就", "关心", "把"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "帽子被风刮跑了。", vi: "Mũ bị gió thổi bay mất rồi.", keywords: ["mũ", "gió"] },
        { zh: "蛋糕让弟弟吃完了。", vi: "Bánh kem bị em trai ăn hết rồi.", keywords: ["bánh", "em trai", "ăn hết"] },
        { zh: "只有妈妈做的饭，她才爱吃。", vi: "Chỉ có cơm mẹ nấu cô ấy mới thích ăn.", keywords: ["chỉ có", "mẹ", "thích ăn"] },
        { zh: "病人还没被送到医院呢。", vi: "Bệnh nhân vẫn chưa được đưa đến bệnh viện.", keywords: ["bệnh nhân", "bệnh viện"] },
        { zh: "不同的问题有不同的解决办法。", vi: "Vấn đề khác nhau có cách giải quyết khác nhau.", keywords: ["vấn đề", "giải quyết", "khác nhau"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi chịu ảnh hưởng từ bạn trai.", answers: ["我被男朋友影响了。", "我被我男朋友影响了。", "我被我的男朋友影响了。"] },
        { vi: "Xe đạp của tôi bị bạn mượn đi rồi.", answers: ["我的自行车被朋友借走了。", "我的自行车被朋友骑走了。", "我的自行车让朋友借走了。"] },
        { vi: "Tháng sau cô ấy sẽ được mẹ đưa sang Mỹ.", answers: ["下个月她会被妈妈送到美国。", "她下个月会被妈妈送到美国。"] },
        { vi: "Chỉ có bố mẹ mới phân biệt được.", answers: ["只有爸爸、妈妈才能分出来。", "只有爸爸妈妈才能分出来。", "只有父母才能分出来。"] },
        { vi: "Đừng buồn, mua cái khác đi.", answers: ["别难过，再买一个吧。", "别难过了，再买一个吧。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小丽找不到她的照相机了。", a: true },
        { q: "小丽信用卡里还有很多钱。", a: false },
        { q: "朋友的男朋友喜欢看足球比赛。", a: true },
        { q: "朋友最近的成绩越来越好。", a: false },
        { q: "大卫和他哥哥长得很像。", a: true },
        { q: "大卫和哥哥住在不同的楼里。", a: false },
        { q: "有些问题看上去很难，但是做起来很简单。", a: true },
        { q: "课文四说，有些很难的问题是不能被解决的。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我被他影响了。",
        "我的照相机被谁拿走了？",
        "看来只有爱，才能让人有变化。",
        "我们经常被别人认错。",
        "多么难的问题，都会被解决的。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你最“倒霉”(dǎoméi, không may)的一天。 (Kể về ngày xui xẻo nhất của bạn.)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 20 (câu chữ 被, 只有……才……).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["被", "叫", "让", "只有", "才"],
      minGrammar: 2,
      sample: "上个星期五是我最倒霉的一天。早上我起晚了，自行车又被弟弟骑走了，只好走路去学校，迟到了半个小时。中午我的照相机被谁拿走了，我找了很久也没找到。下午考试的成绩也不好，我难过极了。晚上妈妈对我说：“别难过，只有遇到问题，才能学会怎么解决问题。”我觉得她说得对。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: câu chữ 被", points: 6,
      subtitle: "Chọn từ thích hợp để hoàn thành câu bị động (có câu nhiều đáp án).",
      grammarWord: "被 / 叫 / 让",
      options: ["被", "叫", "让"],
      items: [
        { q: "我___男朋友影响了。", answers: ["被", "叫", "让"] },
        { q: "帽子___风刮跑了。", answers: ["被", "叫", "让"] },
        { q: "我的照相机___拿走了，不知道是谁拿的。", answers: ["被"] },
        { q: "问题还没有___解决呢。", answers: ["被"] },
        { q: "我们经常___别人认错。", answers: ["被", "叫", "让"] },
        { q: "多么难的问题，都会___解决的。", answers: ["被"] },
        { q: "蛋糕___弟弟吃完了。", answers: ["让", "被", "叫"] },
        { q: "病人还没___送到医院呢。", answers: ["被"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 只有……才……", points: 6,
      subtitle: "Chọn 只有 hoặc 才 cho mỗi chỗ trống.",
      grammarWord: "只有……才……",
      options: ["只有", "才"],
      items: [
        { q: "___写完作业，才能看电视。", answers: ["只有"] },
        { q: "只有妈妈做的饭，她___爱吃。", answers: ["才"] },
        { q: "___爸爸、妈妈才能分出来。", answers: ["只有"] },
        { q: "看来只有爱，___能让人有变化。", answers: ["才"] },
        { q: "___真正做事情的时候，才能了解有多难。", answers: ["只有"] },
        { q: "妈妈说，只有学得好，___能找到好工作。", answers: ["才"] },
        { q: "___常常锻炼，身体才会好。", answers: ["只有"] },
        { q: "只有买到飞机票，我___能回家过春节。", answers: ["才"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 只要……就…… / 只有……才……", points: 5,
      subtitle: "Chọn 就 hoặc 才 cho phù hợp với 只要 / 只有.",
      grammarWord: "就 / 才",
      options: ["就", "才"],
      items: [
        { q: "只要你想去，我___跟你去。", answers: ["就"] },
        { q: "只有写完作业，___能看电视。", answers: ["才"] },
        { q: "只要天气好，我们___去爬山。", answers: ["就"] },
        { q: "只有你们的爸爸妈妈___能分出来。", answers: ["才"] },
        { q: "只要早起一点儿，___不会迟到。", answers: ["就"] },
        { q: "只有真正做事情的时候，___能了解有多难。", answers: ["才"] },
        { q: "只要你给我买，我___能照顾好它。", answers: ["就"] },
        { q: "只有多练习，汉语水平___能提高。", answers: ["才"] },
      ],
    },
  ],
};
