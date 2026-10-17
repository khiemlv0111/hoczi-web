import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第9课 她的汉语说得跟中国人一样好。 (Cô ấy nói tiếng Trung Quốc hay như người Trung Quốc vậy.)
// Nguồn: Giáo trình chuẩn HSK3, trang 88–96 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson09: Lesson = {
  level: "hsk3",
  no: 9,
  slug: "bai-9",
  zh: "她的汉语说得跟中国人一样好。",
  pinyin: "Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.",
  vi: "Cô ấy nói tiếng Trung Quốc hay như người Trung Quốc vậy.",
  en: "She speaks Chinese as well as a native speaker.",
  topic: "比较 · So sánh, học tập, sức khỏe",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 13 từ mới: 中文、班、一样、最后、放心、一定、担心、比较、了解、先、中间、参加、影响.",
    "Hiểu và dùng được 2 điểm ngữ pháp: cấu trúc 越A越B (càng… càng…), câu so sánh A 跟 B 一样 (+ tính từ).",
    "Đọc hiểu 4 đoạn hội thoại: khen tiếng Trung, ăn bánh kem, leo núi, chân đau không nghỉ ngơi được.",
    "So sánh hai người/vật giống hay khác nhau; nói về sự thay đổi theo mức độ với 越A越B.",
    "Chữ Hán: chữ hình thanh (形声字) kết cấu trái – phải; từ mới ghép từ chữ cũ: 课间、山路、参赛.",
  ],

  warmUp: [
    {
      zh: "看图片，根据提示词说说图片中的情况是不是一样：衣服、颜色、房子、天气、杯子、胖瘦",
      vi: "Xem hình và dựa vào từ gợi ý, cho biết người/vật trong hình có giống nhau không: quần áo, màu sắc, nhà, thời tiết, cốc, béo gầy.",
    },
    {
      zh: "根据实际情况回答问题：我现在吃得……、我汉语说得……、我觉得语法……、我做的饭……",
      vi: "Dựa vào bản thân để trả lời: tôi bây giờ ăn ngày càng nhiều, tôi nói tiếng Hán…, tôi thấy ngữ pháp…, cơm tôi nấu…",
    },
  ],

  vocab: [
    { id: 1, han: "中文", py: "Zhōngwén", pos: "dt.", meaning: "tiếng Trung Quốc", example: "马可，你的中文越说越好了！", exampleVi: "Marco, tiếng Trung của cậu càng nói càng giỏi!" },
    { id: 2, han: "班", py: "bān", pos: "dt.", meaning: "lớp", example: "我们班李静说得更好。", exampleVi: "Lý Tịnh lớp tớ nói còn giỏi hơn." },
    { id: 3, han: "一样", py: "yíyàng", pos: "tt.", meaning: "giống nhau, như nhau", example: "她的汉语说得跟中国人一样好。", exampleVi: "Cô ấy nói tiếng Hán giỏi như người Trung Quốc." },
    { id: 4, han: "最后", py: "zuìhòu", pos: "dt.", meaning: "(cái) cuối cùng", example: "这是最后一块。", exampleVi: "Đây là miếng cuối cùng." },
    { id: 5, han: "放心", py: "fàng xīn", pos: "đgt.", meaning: "yên tâm", example: "你放心，我一定不会变胖。", exampleVi: "Em yên tâm, anh nhất định không béo lên đâu." },
    { id: 6, han: "一定", py: "yídìng", pos: "p.", meaning: "nhất định, chắc chắn", example: "一定能参加，一点儿影响也没有。", exampleVi: "Nhất định tham gia được, chẳng ảnh hưởng gì cả." },
    { id: 7, han: "担心", py: "dān xīn", pos: "đgt.", meaning: "lo lắng", example: "不用担心，有我呢。", exampleVi: "Đừng lo, có anh đây rồi." },
    { id: 8, han: "比较", py: "bǐjiào", pos: "p.", meaning: "tương đối, khá", example: "我对这儿比较了解。", exampleVi: "Anh khá hiểu rõ chỗ này." },
    { id: 9, han: "了解", py: "liǎojiě", pos: "đgt.", meaning: "hiểu rõ", example: "我很了解她，她每天都在这儿吃饭。", exampleVi: "Tôi rất hiểu cô ấy, ngày nào cô ấy cũng ăn ở đây." },
    { id: 10, han: "先", py: "xiān", pos: "p.", meaning: "trước, trước hết", example: "那我们先休息一下，一会儿再爬。", exampleVi: "Vậy chúng ta nghỉ một chút trước, lát nữa leo tiếp." },
    { id: 11, han: "中间", py: "zhōngjiān", pos: "dt.", meaning: "giữa, chính giữa", example: "一会儿我们可以从中间这条路上去。", exampleVi: "Lát nữa chúng ta có thể đi lên bằng con đường ở giữa này." },
    { id: 12, han: "参加", py: "cānjiā", pos: "đgt.", meaning: "tham gia", example: "下个月的篮球比赛，你能参加吗？", exampleVi: "Trận bóng rổ tháng sau, cậu tham gia được không?" },
    { id: 13, han: "影响", py: "yǐngxiǎng", pos: "dt./đgt.", meaning: "ảnh hưởng", example: "少玩儿一会儿电子游戏吧，别影响了学习。", exampleVi: "Chơi điện tử ít đi một chút, đừng để ảnh hưởng học tập." },
    { id: 14, han: "大山", py: "Dàshān", pos: "dt.", meaning: "Đại Sơn (tên người)", example: "大山说马可的中文越说越好了。", exampleVi: "Đại Sơn nói tiếng Trung của Marco càng nói càng giỏi." },
    { id: 15, han: "李静", py: "Lǐ Jìng", pos: "dt.", meaning: "Lý Tịnh (tên người)", example: "李静是我们的汉语老师。", exampleVi: "Lý Tịnh là cô giáo tiếng Hán của chúng tôi." },
    { id: 16, han: "课间", py: "kèjiān", pos: "dt.", meaning: "giờ ra chơi giữa tiết (上课 + 中间)", example: "课间休息十分钟。", exampleVi: "Giữa giờ nghỉ mười phút.", group: "extended" },
    { id: 17, han: "山路", py: "shānlù", pos: "dt.", meaning: "đường núi (爬山 + 路上)", example: "山越高，山路越难走。", exampleVi: "Núi càng cao, đường núi càng khó đi.", group: "extended" },
    { id: 18, han: "参赛", py: "cānsài", pos: "đgt.", meaning: "dự thi, tham gia thi đấu (参加 + 比赛)", example: "这次比赛有一百多个人参赛。", exampleVi: "Cuộc thi lần này có hơn một trăm người dự thi.", group: "extended" },
  ],

  text: {
    title: "课文 她的汉语说得跟中国人一样好。",
    paragraphs: [
      {
        heading: "课文一 · 在教室 (Trong lớp học)",
        zh: "大山：马可，你的中文越说越好了！\n马可：哪里哪里，我们班李静说得更好。\n大山：怎么好？\n马可：她的汉语说得跟中国人一样好。\n大山：李静？我怎么没听说过这个名字？\n马可：她是我们的汉语老师。",
        vi: "Đại Sơn: Marco, tiếng Trung của cậu càng nói càng giỏi đấy!\nMarco: Đâu có đâu có, Lý Tịnh lớp tớ nói còn giỏi hơn.\nĐại Sơn: Giỏi thế nào?\nMarco: Cô ấy nói tiếng Hán giỏi như người Trung Quốc vậy.\nĐại Sơn: Lý Tịnh? Sao tớ chưa nghe cái tên này bao giờ nhỉ?\nMarco: Cô ấy là cô giáo tiếng Hán của bọn tớ.",
        questions: ["李静的汉语说得怎么样？为什么？", "李静是谁？"],
      },
      {
        heading: "课文二 · 在蛋糕店 (Ở cửa hàng bánh kem)",
        zh: "小丽：别吃了，你已经吃了三块蛋糕了。\n小刚：这是最后一块。\n小丽：你总是吃甜的东西，会越吃越胖。\n小刚：你放心，我一定不会变胖。\n小丽：为什么？\n小刚：我们家的人都很瘦，吃不胖。",
        vi: "Tiểu Lệ: Đừng ăn nữa, anh đã ăn ba miếng bánh rồi.\nTiểu Cương: Đây là miếng cuối cùng.\nTiểu Lệ: Anh lúc nào cũng ăn đồ ngọt, sẽ càng ăn càng béo đấy.\nTiểu Cương: Em yên tâm, anh nhất định không béo lên đâu.\nTiểu Lệ: Tại sao?\nTiểu Cương: Người nhà anh ai cũng gầy, ăn không béo được.",
        questions: ["小刚一共吃了几块蛋糕？", "小丽觉得小刚会越来越胖吗？为什么？"],
      },
      {
        heading: "课文三 · 在山上 (Ở trên núi)",
        zh: "小丽：我有点儿害怕。\n小刚：怎么了？\n小丽：山越高，路越难走。我也越爬越冷。\n小刚：不用担心，有我呢，我对这儿比较了解。\n小丽：那我们先休息一下，一会儿再爬。\n小刚：好，一会儿我们可以从中间这条路上去。",
        vi: "Tiểu Lệ: Em hơi sợ.\nTiểu Cương: Sao thế?\nTiểu Lệ: Núi càng cao, đường càng khó đi. Em cũng càng leo càng lạnh.\nTiểu Cương: Đừng lo, có anh đây, anh khá rành chỗ này.\nTiểu Lệ: Vậy chúng ta nghỉ một chút trước, lát nữa leo tiếp.\nTiểu Cương: Được, lát nữa chúng ta có thể đi lên bằng con đường ở giữa này.",
        questions: ["小丽为什么害怕了？", "小刚害怕吗？为什么？"],
      },
      {
        heading: "课文四 · 在小明家 (Tại nhà bạn Minh)",
        zh: "同学：小明，你的眼睛怎么跟大熊猫一样了？\n小明：我这几天脚疼，没休息好。\n同学：去医院了吗？医生说什么？\n小明：他让我多休息。休息得越多，好得越快。\n同学：下个月的篮球比赛，你能参加吗？\n小明：一定能参加，一点儿影响也没有。",
        vi: "Bạn học: Tiểu Minh, mắt cậu sao lại giống gấu trúc thế?\nTiểu Minh: Mấy hôm nay tớ đau chân, không nghỉ ngơi được.\nBạn học: Đi viện chưa? Bác sĩ nói gì?\nTiểu Minh: Bác sĩ bảo tớ nghỉ ngơi nhiều. Càng nghỉ nhiều, càng khỏi nhanh.\nBạn học: Trận bóng rổ tháng sau, cậu tham gia được không?\nTiểu Minh: Nhất định tham gia được, chẳng ảnh hưởng gì cả.",
        questions: ["小明怎么了？", "小明能参加篮球比赛吗？为什么？"],
      },
    ],
    notes: [
      "大山 (Dàshān): Đại Sơn; 李静 (Lǐ Jìng): Lý Tịnh.",
      "哪里哪里: đâu có đâu có (lời đáp khiêm tốn khi được khen).",
      "有我呢: có tôi đây rồi (trấn an người khác).",
      "Tục ngữ – 三人行，必有我师 (Sān rén xíng, bì yǒu wǒ shī): ba người cùng đi ắt có người là thầy ta; người khác có ưu điểm mà ta không có, ta nên học hỏi.",
      "Chữ Hán – 形声字 (chữ hình thanh): khoảng 70% chữ Hán hiện đại; phần hình gợi nghĩa, phần thanh gợi âm. 左形右声: 妈 (女 + 马), 住 (亻 + 主); 右形左声: 放 (方 + 攵), 邻 (令 + 阝).",
    ],
  },

  grammar: [
    {
      word: "越A越B",
      title: "Càng A càng B",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả B thay đổi theo sự biến đổi của A.",
          examples: ["雨越下越大。", "你的中文越说越好。", "越往南，天气越热。", "山越高，路越难走。"],
        },
      ],
      note: "Cùng chủ ngữ: 主语 + 越 + V + 越 + Adj (越吃越胖); khác chủ ngữ: 越 + A, 越 + B (休息得越多，好得越快).",
    },
    {
      word: "A 跟 B 一样 (+ 形容词)",
      title: "Câu so sánh (1): A giống B",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả A và B giống nhau. Muốn chỉ rõ khía cạnh so sánh thì thêm tính từ sau 一样 (一样大: kích cỡ như nhau). Phủ định: thêm 不 trước 一样.",
          examples: ["这本书跟那本书一样。", "儿子跟爸爸一样高。", "这辆车的颜色跟那辆车不一样。", "她的汉语说得跟中国人一样好。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "你在哪个___学习汉语？", options: ["参加", "班", "担心", "影响"], answer: "班" },
    { sentence: "别___，他马上就到家了。", options: ["担心", "比较", "班", "参加"], answer: "担心" },
    { sentence: "这件事___难，你再给我几天时间。", options: ["影响", "班", "比较", "担心"], answer: "比较" },
    { sentence: "你想不想去___爬山比赛？", options: ["参加", "比较", "影响", "班"], answer: "参加" },
    { sentence: "少玩儿一会儿电子游戏吧，别___了学习。", options: ["担心", "影响", "参加", "比较"], answer: "影响" },
    { sentence: "A：你怎么又迟到了？B：对不起，这是___一次，以后一定不迟到了。", options: ["放心", "最后", "先", "中间"], answer: "最后" },
    { sentence: "A：你吃这么多，会越来越胖。B：___，我每天都运动。", options: ["了解", "中间", "放心", "最后"], answer: "放心" },
    { sentence: "A：你怎么知道她会来？B：我很___她，她每天都在这儿吃饭。", options: ["了解", "放心", "先", "最后"], answer: "了解" },
    { sentence: "A：你想要哪本书？B：___的那本。", options: ["先", "了解", "中间", "放心"], answer: "中间" },
    { sentence: "A：下午你打算做什么？B：我想___去超市买点儿东西。", options: ["中间", "先", "最后", "了解"], answer: "先" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 3, distractors: [6, 13, 1] },
        { vocabId: 5, distractors: [7, 6, 10] },
        { vocabId: 6, distractors: [3, 5, 8] },
        { vocabId: 7, distractors: [5, 9, 12] },
        { vocabId: 8, distractors: [9, 12, 13] },
        { vocabId: 9, distractors: [8, 7, 4] },
        { vocabId: 12, distractors: [13, 8, 2] },
        { vocabId: 13, distractors: [12, 3, 9] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 3, 4, 7, 9, 11, 12, 13],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["她的汉语", "说得", "跟", "中国人", "一样", "好", "。"], answer: "她的汉语说得跟中国人一样好。", vi: "Cô ấy nói tiếng Hán giỏi như người Trung Quốc." },
        { tokens: ["你的中文", "越说", "越好", "了", "！"], answer: "你的中文越说越好了！", vi: "Tiếng Trung của bạn càng nói càng giỏi!" },
        { tokens: ["山", "越高", "，", "路", "越难走", "。"], answer: "山越高，路越难走。", vi: "Núi càng cao, đường càng khó đi." },
        { tokens: ["我", "对这儿", "比较", "了解", "。"], answer: "我对这儿比较了解。", vi: "Tôi khá hiểu rõ chỗ này." },
        { tokens: ["儿子", "跟", "爸爸", "一样", "高", "。"], answer: "儿子跟爸爸一样高。", vi: "Con trai cao bằng bố." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Trong lớp học", text: "大山：马可，你的{{c1}}越说{{c2}}好了！\n马可：哪里哪里，我们{{c3}}李静说得{{c4}}好。\n大山：怎么好？\n马可：她的汉语说得{{c5}}中国人{{c6}}好。" },
        { title: "Bài khóa 2 · Ở cửa hàng bánh kem", text: "小丽：别吃了，你已经吃了三块蛋糕了。\n小刚：这是{{c7}}一块。\n小丽：你总是吃甜的东西，会越吃越胖。\n小刚：你{{c8}}，我{{c9}}不会变胖。\n小丽：为什么？\n小刚：我们家的人都很瘦，吃不{{c10}}。" },
      ],
      answers: { c1: "中文", c2: "越", c3: "班", c4: "更", c5: "跟", c6: "一样", c7: "最后", c8: "放心", c9: "一定", c10: "胖" },
      bank: ["中文", "越", "班", "更", "跟", "一样", "最后", "放心", "一定", "胖", "担心", "瘦", "先"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Ở trên núi", text: "小丽：山越高，路越难走。我也越爬越冷。\n小刚：不用{{e1}}，有我呢，我对这儿{{e2}}{{e3}}。\n小丽：那我们{{e4}}休息一下，一会儿再爬。\n小刚：好，一会儿我们可以从{{e5}}这条路上去。" },
        { title: "Bài khóa 4 · Tại nhà bạn Minh", text: "同学：小明，你的眼睛怎么跟大熊猫{{e6}}了？\n小明：我这几天脚疼，没休息好。\n小明：他让我多休息。休息得{{e7}}多，好得越快。\n同学：下个月的篮球比赛，你能{{e8}}吗？\n小明：{{e9}}能参加，一点儿{{e10}}也没有。" },
      ],
      answers: { e1: "担心", e2: "比较", e3: "了解", e4: "先", e5: "中间", e6: "一样", e7: "越", e8: "参加", e9: "一定", e10: "影响" },
      bank: ["担心", "比较", "了解", "先", "中间", "一样", "越", "参加", "一定", "影响", "放心", "最后", "再"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "雨越下越大。", vi: "Mưa càng lúc càng to.", keywords: ["mưa", "to"] },
        { zh: "这辆车的颜色跟那辆车不一样。", vi: "Màu của chiếc xe này khác với chiếc xe kia.", keywords: ["màu", "xe", "khác"] },
        { zh: "你放心，我一定不会变胖。", vi: "Bạn yên tâm, tôi nhất định sẽ không béo lên.", keywords: ["yên tâm", "nhất định", "béo"] },
        { zh: "休息得越多，好得越快。", vi: "Nghỉ ngơi càng nhiều, khỏi càng nhanh.", keywords: ["nghỉ", "càng", "nhanh"] },
        { zh: "我们先休息一下，一会儿再爬。", vi: "Chúng ta nghỉ một chút trước, lát nữa leo tiếp.", keywords: ["nghỉ", "lát nữa", "leo"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Càng đi về phía nam, thời tiết càng nóng.", answers: ["越往南，天气越热。", "越往南走，天气越热。"] },
        { vi: "Quyển sách này giống quyển sách kia.", answers: ["这本书跟那本书一样。"] },
        { vi: "Con trai cao bằng bố.", answers: ["儿子跟爸爸一样高。"] },
        { vi: "Bộ phim này càng xem càng hay.", answers: ["这个电影越看越有意思。", "这部电影越看越有意思。", "这个电影越看越好看。"] },
        { vi: "Đừng lo, anh ấy sắp về đến nhà rồi.", answers: ["别担心，他马上就到家了。", "别担心，他快到家了。", "不用担心，他马上就到家了。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "李静是马可的同学。", a: false },
        { q: "李静的汉语说得跟中国人一样好。", a: true },
        { q: "小刚一共吃了四块蛋糕。", a: true },
        { q: "小刚觉得自己会越吃越胖。", a: false },
        { q: "小丽越爬越冷。", a: true },
        { q: "小刚对那座山一点儿也不了解。", a: false },
        { q: "小明这几天脚疼。", a: true },
        { q: "小明不能参加下个月的篮球比赛。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你的中文越说越好了！",
        "她的汉语说得跟中国人一样好。",
        "你放心，我一定不会变胖。",
        "我对这儿比较了解。",
        "一点儿影响也没有。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "说说你跟你的好朋友哪些地方一样，哪些地方不一样。 (Bạn và bạn thân của mình giống nhau ở điểm nào, khác nhau ở điểm nào?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 9 (越A越B, A跟B一样).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["越", "一样", "跟"],
      minGrammar: 2,
      sample: "我的好朋友叫大山，我们是一个班的同学。他跟我一样高，也跟我一样喜欢打篮球，我们常常一起参加比赛。但是我们也有不一样的地方：他每天早上六点起床，我八点起床。他的中文越说越好，我比较担心我的汉语。他说：“你放心，越练习越好。”我觉得他说得对。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 越A越B", points: 6,
      subtitle: "Điền từ còn thiếu để hoàn thành cấu trúc càng… càng….",
      grammarWord: "越",
      items: [
        { q: "雨越下___大。", answers: ["越"] },
        { q: "你的中文___说越好。", answers: ["越"] },
        { q: "越往南，天气___热。", answers: ["越"] },
        { q: "山越高，路___难走。", answers: ["越"] },
        { q: "你总是吃甜的东西，会越吃___胖。", answers: ["越"] },
        { q: "休息得___多，好得越快。", answers: ["越"] },
        { q: "这个电影___看越有意思。", answers: ["越"] },
        { q: "我们越聊___高兴。", answers: ["越"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: A 跟 B 一样", points: 6,
      subtitle: "Chọn 跟, 一样 hoặc 不 cho mỗi chỗ trống.",
      grammarWord: "跟……一样",
      options: ["跟", "一样", "不"],
      items: [
        { q: "这本书___那本书一样。", answers: ["跟"] },
        { q: "儿子跟爸爸___高。", answers: ["一样"] },
        { q: "这辆车的颜色跟那辆车___一样。", answers: ["不"] },
        { q: "她的汉语说得___中国人一样好。", answers: ["跟"] },
        { q: "你的眼睛怎么跟大熊猫___了？", answers: ["一样"] },
        { q: "我的杯子跟你的杯子___。", answers: ["一样"] },
        { q: "我跟他___一样，他七点起床，我八点起床。", answers: ["不"] },
        { q: "妹妹___姐姐一样聪明。", answers: ["跟"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 放心 / 担心 / 一定", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "放心 / 担心 / 一定",
      options: ["放心", "担心", "一定"],
      items: [
        { q: "你___，我一定不会变胖。", answers: ["放心"] },
        { q: "不用___，有我呢。", answers: ["担心"] },
        { q: "___能参加，一点儿影响也没有。", answers: ["一定"] },
        { q: "我很___这次的汉字考试。", answers: ["担心"] },
        { q: "这是最后一次，以后___不迟到了。", answers: ["一定"] },
        { q: "孩子还没回来，妈妈越来越___了。", answers: ["担心"] },
        { q: "你的汉字一直很好，这次考试___没问题。", answers: ["一定"] },
        { q: "我会照顾好自己，你___吧。", answers: ["放心"] },
      ],
    },
  ],
};
