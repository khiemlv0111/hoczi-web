import type { Lesson } from "../../_lesson/types";

// HSK标准教程2 · 第10课 别找了，手机在桌子上呢。 (Đừng tìm nữa, điện thoại di động ở trên bàn kìa.)
// Nguồn: Giáo trình chuẩn HSK2, trang 87–94 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, bản dịch bài khóa và ngữ pháp lấy từ sách. Sách HSK2 không có bài “选词填空”,
// nên phần luyện nhanh và phần luyện tập 100 điểm được soạn thêm (cần giáo viên duyệt lại).

export const lesson10: Lesson = {
  level: "hsk2",
  no: 10,
  slug: "bai-10",
  zh: "别找了，手机在桌子上呢。",
  pinyin: "Bié zhǎo le, shǒujī zài zhuōzi shang ne.",
  vi: "Đừng tìm nữa, điện thoại di động ở trên bàn kìa.",
  en: "Stop looking, your phone is on the table.",
  topic: "家庭生活 · Gia đình, khuyên nhủ, đồ dùng",
  durationMinutes: 40,

  goals: [
    "Nắm nghĩa và cách dùng 9 từ mới: 课、帮助、别、哥哥、鸡蛋、西瓜、正在、手机、洗.",
    "Hiểu và dùng được 2 điểm ngữ pháp: câu cầu khiến 不要……了 / 别……了, giới từ 对 (对……有帮助/很好).",
    "Đọc hiểu 4 đoạn hội thoại về xem ti vi, nghe lời bác sĩ, mua đồ cho bữa trưa, tìm điện thoại.",
    "Khuyên can, ngăn cản ai làm gì; nói việc gì có ích/tốt cho ai.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：西瓜、鸡蛋、休息、吃药、手机、准备午饭",
      vi: "Chọn hình tương ứng với các từ: 西瓜 (dưa hấu), 鸡蛋 (trứng gà), 休息 (nghỉ ngơi), 吃药 (uống thuốc), 手机 (điện thoại di động), 准备午饭 (chuẩn bị bữa trưa).",
    },
    {
      zh: "给下面的动词加上合适的宾语：听……、踢……、玩儿……、写……、下……、开……",
      vi: "Thêm tân ngữ phù hợp sau động từ: nghe…, đá…, chơi…, viết…, xuống…, lái/mở…",
    },
  ],

  vocab: [
    { id: 1, han: "课", py: "kè", pos: "dt.", meaning: "giờ học, môn, bài", example: "明天上午还有汉语课呢。", exampleVi: "Sáng mai các con còn có giờ học tiếng Trung Quốc đấy." },
    { id: 2, han: "帮助", py: "bāngzhù", pos: "đgt.", meaning: "giúp ích, giúp đỡ", example: "看电视对学汉语有帮助。", exampleVi: "Xem ti vi cũng có ích cho việc học tiếng Trung Quốc mà." },
    { id: 3, han: "别", py: "bié", pos: "p.", meaning: "đừng", example: "别看报纸了，医生说你要多休息。", exampleVi: "Đừng đọc báo nữa, bác sĩ nói anh cần nghỉ ngơi nhiều hơn." },
    { id: 4, han: "哥哥", py: "gēge", pos: "dt.", meaning: "anh trai", example: "哥哥今天中午回来吃饭。", exampleVi: "Trưa nay anh trai về ăn cơm." },
    { id: 5, han: "鸡蛋", py: "jīdàn", pos: "dt.", meaning: "trứng gà", example: "羊肉、鸡蛋、面条、西瓜……真不少！", exampleVi: "Thịt cừu, trứng gà, mì sợi, dưa hấu… nhiều thật!" },
    { id: 6, han: "西瓜", py: "xīguā", pos: "dt.", meaning: "dưa hấu", example: "羊肉、鸡蛋、面条、西瓜……真不少！", exampleVi: "Thịt cừu, trứng gà, mì sợi, dưa hấu… nhiều thật!" },
    { id: 7, han: "正在", py: "zhèngzài", pos: "p.", meaning: "đang", example: "正在准备午饭呢！", exampleVi: "Mẹ đang chuẩn bị bữa trưa!" },
    { id: 8, han: "手机", py: "shǒujī", pos: "dt.", meaning: "điện thoại di động", example: "别找了，手机在桌子上呢。", exampleVi: "Đừng tìm nữa, điện thoại ở trên bàn kìa." },
    { id: 9, han: "洗", py: "xǐ", pos: "đgt.", meaning: "giặt, rửa", example: "那件衣服我帮你洗了，在外边呢。", exampleVi: "Em đã giặt giúp anh rồi, đang để bên ngoài." },
  ],

  text: {
    title: "课文 别找了，手机在桌子上呢。",
    paragraphs: [
      {
        heading: "课文一 · 在家里 (Ở nhà)",
        zh: "A：不要看电视了，明天上午还有汉语课呢。\nB：看电视对学汉语有帮助。\nA：明天的课你都准备好了吗？\nB：都准备好了。",
        vi: "A: Đừng xem tivi nữa, sáng mai các con còn có giờ học tiếng Trung Quốc đấy.\nB: Xem tivi cũng có ích cho việc học tiếng Trung Quốc mà.\nA: Các con đã chuẩn bị xong bài ngày mai chưa?\nB: Xong rồi ạ.",
        questions: ["孩子们正在做什么？", "妈妈为什么不让他们看电视了？"],
      },
      {
        heading: "课文二 · 在医院 (Trong bệnh viện)",
        zh: "A：别看报纸了，医生说你要多休息。\nB：好，不看了。给我一杯茶吧。\nA：医生说吃药后两个小时不要喝茶。\nB：医生还说什么了？\nA：医生让你听我的。",
        vi: "A: Đừng đọc báo nữa, bác sĩ nói anh cần nghỉ ngơi nhiều hơn.\nB: Được rồi, anh không đọc nữa. Cho anh một ly trà đi.\nA: Bác sĩ nói anh không được uống trà trong vòng hai giờ sau khi uống thuốc.\nB: Bác sĩ còn dặn gì nữa không?\nA: Bác sĩ bảo anh nghe lời em.",
        questions: ["医生说吃药后什么时候能喝茶？"],
      },
      {
        heading: "课文三 · 在家里 (Ở nhà)",
        zh: "A：你怎么买了这么多东西啊？\nB：哥哥今天中午回来吃饭。\nA：我看看买什么了。羊肉、鸡蛋、面条、西瓜……真不少！妈妈呢？\nB：正在准备午饭呢！",
        vi: "A: Sao anh mua nhiều thứ vậy?\nB: Trưa nay anh trai về ăn cơm.\nA: Để em xem anh mua gì nào. Thịt cừu, trứng gà, mì sợi, dưa hấu… Nhiều thật! Mẹ đâu rồi?\nB: Mẹ đang chuẩn bị bữa trưa!",
        questions: ["他为什么买了这么多东西？", "妈妈在做什么？"],
      },
      {
        heading: "课文四 · 在家里 (Ở nhà)",
        zh: "A：你在找什么？\nB：你看见我的手机了吗？白色的。\nA：别找了，手机在桌子上呢，电脑旁边。\nB：你看见我的衣服了吗？红色的那件。\nA：那件衣服我帮你洗了，在外边呢。",
        vi: "A: Anh đang tìm gì vậy?\nB: Em có thấy điện thoại di động của anh không? Điện thoại màu trắng đó.\nA: Đừng tìm nữa, nó ở trên bàn kìa, bên cạnh máy vi tính.\nB: Còn cái áo màu đỏ của anh, em có thấy không vậy?\nA: Em đã giặt giúp anh rồi, đang để bên ngoài.",
        questions: ["他的手机在哪儿？", "他的红色衣服在哪儿？"],
      },
    ],
    notes: [
      "听我的: nghe lời tôi.",
      "在……呢: đang ở… (vị trí): 手机在桌子上呢.",
      "Văn hóa – Văn hóa uống trà của người Trung Quốc: trà vừa ngon vừa tốt cho sức khỏe (tỉnh táo, chống lão hóa, phòng bệnh, giảm cân). Có nhiều loại: hồng trà (红茶), trà xanh (绿茶), trà ô long (青茶), trà hoa (花茶). Thường uống trà hoa vào mùa xuân, trà xanh mùa hè, ô long mùa thu, hồng trà mùa đông.",
    ],
  },

  grammar: [
    {
      word: "不要……了 / 别……了",
      title: "Câu cầu khiến: 不要……了 / 别……了 (đừng… nữa)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả ý ngăn cản hay cấm đoán ai làm việc gì: 不要/别 + động từ (+ tân ngữ) + 了.",
          examples: ["不要玩手机了。", "不要做饭了。", "不要看电视了。", "别睡觉了。", "别看书了。", "别看报纸了。"],
        },
      ],
    },
    {
      word: "对",
      title: "Giới từ 对 (đối với)",
      usages: [
        {
          label: "Cách dùng",
          explain: "对 chỉ mối tương quan giữa người và người, người và sự vật, sự vật và sự vật: chủ ngữ + 对 + tân ngữ + động từ/tính từ.",
          examples: ["跑步对身体很好。", "老师对学生非常好。", "看电视对学汉语有帮助。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "明天上午还有汉语___呢。", options: ["课", "手机", "哥哥", "西瓜"], answer: "课" },
    { sentence: "看电视对学汉语有___。", options: ["帮助", "正在", "手机", "课"], answer: "帮助" },
    { sentence: "___看报纸了，医生说你要多休息。", options: ["别", "再", "还", "就"], answer: "别" },
    { sentence: "___今天中午回来吃饭。", options: ["哥哥", "鸡蛋", "西瓜", "手机"], answer: "哥哥" },
    { sentence: "我想吃两个___。", options: ["鸡蛋", "哥哥", "课", "手机"], answer: "鸡蛋" },
    { sentence: "夏天我最喜欢吃___。", options: ["西瓜", "手机", "课", "帮助"], answer: "西瓜" },
    { sentence: "妈妈___准备午饭呢！", options: ["正在", "别", "已经", "再"], answer: "正在" },
    { sentence: "别找了，___在桌子上呢。", options: ["手机", "鸡蛋", "哥哥", "课"], answer: "手机" },
    { sentence: "那件衣服我帮你___了，在外边呢。", options: ["洗", "找", "看", "买"], answer: "洗" },
    { sentence: "医生说吃药后两个小时___喝茶。", options: ["不要", "正在", "还", "就"], answer: "不要" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [9, 3, 8] },
        { vocabId: 2, distractors: [7, 4, 8] },
        { vocabId: 3, distractors: [9, 1, 7] },
        { vocabId: 4, distractors: [5, 6, 8] },
        { vocabId: 5, distractors: [6, 4, 2] },
        { vocabId: 6, distractors: [5, 8, 4] },
        { vocabId: 7, distractors: [2, 3, 6] },
        { vocabId: 8, distractors: [6, 5, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["别找了", "，", "手机", "在", "桌子上", "呢", "。"], answer: "别找了，手机在桌子上呢。", vi: "Đừng tìm nữa, điện thoại ở trên bàn kìa." },
        { tokens: ["看电视", "对", "学汉语", "有", "帮助", "。"], answer: "看电视对学汉语有帮助。", vi: "Xem ti vi có ích cho việc học tiếng Hán." },
        { tokens: ["不要", "看", "电视", "了", "。"], answer: "不要看电视了。", vi: "Đừng xem ti vi nữa." },
        { tokens: ["妈妈", "正在", "准备", "午饭", "呢", "。"], answer: "妈妈正在准备午饭呢。", vi: "Mẹ đang chuẩn bị bữa trưa." },
        { tokens: ["医生", "让", "你", "听", "我的", "。"], answer: "医生让你听我的。", vi: "Bác sĩ bảo anh nghe lời em." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Xem ti vi", text: "A：{{c1}}看电视了，明天上午还有汉语{{c2}}呢。\nB：看电视{{c3}}学汉语有{{c4}}。\nA：明天的课你都准备{{c5}}了吗？\nB：都准备好了。" },
        { title: "Bài khóa 2 · Trong bệnh viện", text: "A：{{c6}}看报纸了，医生说你要多{{c7}}。\nB：好，不看了。给我一杯茶吧。\nA：医生说吃{{c8}}后两个小时不要喝茶。\nB：医生{{c9}}说什么了？\nA：医生{{c10}}你听我的。" },
      ],
      answers: { c1: "不要", c2: "课", c3: "对", c4: "帮助", c5: "好", c6: "别", c7: "休息", c8: "药", c9: "还", c10: "让" },
      bank: ["不要", "课", "对", "帮助", "好", "别", "休息", "药", "还", "让", "正在", "完", "再"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Mua đồ", text: "A：你怎么买了这么多东西啊？\nB：{{e1}}今天中午回来吃饭。\nA：我看看买什么了。羊肉、{{e2}}、面条、{{e3}}……真不少！妈妈呢？\nB：{{e4}}准备午饭{{e5}}！" },
        { title: "Bài khóa 4 · Tìm điện thoại", text: "A：你在{{e6}}什么？\nB：你看见我的{{e7}}了吗？白色的。\nA：{{e8}}找了，手机在桌子上呢，电脑{{e9}}。\nB：你看见我的衣服了吗？红色的那件。\nA：那件衣服我帮你{{e10}}了，在外边呢。" },
      ],
      answers: { e1: "哥哥", e2: "鸡蛋", e3: "西瓜", e4: "正在", e5: "呢", e6: "找", e7: "手机", e8: "别", e9: "旁边", e10: "洗" },
      bank: ["哥哥", "鸡蛋", "西瓜", "正在", "呢", "找", "手机", "别", "旁边", "洗", "吗", "课", "左边"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "跑步对身体很好。", vi: "Chạy bộ rất tốt cho sức khỏe.", keywords: ["chạy bộ", "sức khỏe"] },
        { zh: "老师对学生非常好。", vi: "Thầy giáo đối với học sinh rất tốt.", keywords: ["thầy", "học sinh", "tốt"] },
        { zh: "别睡觉了。", vi: "Đừng ngủ nữa.", keywords: ["đừng", "ngủ"] },
        { zh: "不要玩手机了。", vi: "Đừng chơi điện thoại nữa.", keywords: ["đừng", "điện thoại"] },
        { zh: "妈妈正在准备午饭呢！", vi: "Mẹ đang chuẩn bị bữa trưa!", keywords: ["mẹ", "đang", "bữa trưa"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Đừng đọc sách nữa.", answers: ["别看书了。", "不要看书了。"] },
        { vi: "Đừng nấu cơm nữa.", answers: ["不要做饭了。", "别做饭了。"] },
        { vi: "Xem ti vi có ích cho việc học tiếng Hán.", answers: ["看电视对学汉语有帮助。", "看电视对学习汉语有帮助。"] },
        { vi: "Bạn có thấy điện thoại của tôi không?", answers: ["你看见我的手机了吗？", "你看见我的手机了没有？"] },
        { vi: "Trưa nay anh trai về ăn cơm.", answers: ["哥哥今天中午回来吃饭。", "今天中午哥哥回来吃饭。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "孩子们明天上午有汉语课。", a: true },
        { q: "孩子们还没准备好明天的课。", a: false },
        { q: "医生说他要多休息。", a: true },
        { q: "医生说吃药后可以马上喝茶。", a: false },
        { q: "哥哥今天中午回来吃饭。", a: true },
        { q: "妈妈正在睡觉。", a: false },
        { q: "他的手机在电脑旁边。", a: true },
        { q: "他的红色衣服在房间里。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "别找了，手机在桌子上呢。",
        "不要看电视了。",
        "看电视对学汉语有帮助。",
        "正在准备午饭呢！",
        "那件衣服我帮你洗了。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "你的朋友有一些不好的习惯，用“别……了/不要……了”给他一些建议。 (Bạn của bạn có vài thói quen không tốt, hãy dùng “别……了/不要……了” để khuyên bạn ấy.)",
      requirement: "Yêu cầu: viết ít nhất 40 chữ Hán, sử dụng tối thiểu 4 từ vựng và 2 điểm ngữ pháp của bài 10 (别/不要……了, 对).",
      minChars: 40,
      minVocab: 4,
      grammarMarkers: ["别", "不要", "对"],
      minGrammar: 2,
      sample: "我的朋友每天晚上都玩手机，很晚才睡觉。我对他说：“别玩手机了，早点儿睡觉对身体好。”他也经常喝咖啡，我说：“不要喝那么多咖啡了，多吃点儿西瓜和鸡蛋吧。”我希望他能听我的。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 不要……了 / 别……了", points: 6,
      subtitle: "Điền 别 hoặc 不要 vào chỗ trống.",
      grammarWord: "别 / 不要",
      options: ["别", "不要"],
      items: [
        { q: "___看电视了，明天上午还有汉语课呢。", answers: ["不要", "别"] },
        { q: "___看报纸了，医生说你要多休息。", answers: ["别", "不要"] },
        { q: "___找了，手机在桌子上呢。", answers: ["别", "不要"] },
        { q: "___玩手机了。", answers: ["不要", "别"] },
        { q: "___睡觉了，快起床吧。", answers: ["别", "不要"] },
        { q: "医生说吃药后两个小时___喝茶。", answers: ["不要", "别"] },
        { q: "___做饭了，我们去外面吃吧。", answers: ["不要", "别"] },
        { q: "下雨了，___出去了。", answers: ["别", "不要"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: giới từ 对", points: 6,
      subtitle: "Điền giới từ chỉ mối quan hệ “đối với” vào chỗ trống.",
      grammarWord: "对",
      items: [
        { q: "跑步___身体很好。", answers: ["对"] },
        { q: "老师___学生非常好。", answers: ["对"] },
        { q: "看电视___学汉语有帮助。", answers: ["对"] },
        { q: "咖啡喝多了___身体不好。", answers: ["对"] },
        { q: "多吃水果___身体好。", answers: ["对"] },
        { q: "妈妈___我很好。", answers: ["对"] },
        { q: "早睡早起___身体很好。", answers: ["对"] },
        { q: "听中国歌___学汉语有帮助。", answers: ["对"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 正在……呢", points: 5,
      subtitle: "Chọn 正在 hoặc 呢 cho mỗi chỗ trống.",
      grammarWord: "正在……呢",
      options: ["正在", "呢"],
      items: [
        { q: "妈妈___准备午饭呢！", answers: ["正在"] },
        { q: "妈妈正在准备午饭___！", answers: ["呢"] },
        { q: "孩子们___看电视。", answers: ["正在"] },
        { q: "他正在打电话___。", answers: ["呢"] },
        { q: "我___洗衣服，你等一下。", answers: ["正在"] },
        { q: "别找了，手机在桌子上___。", answers: ["呢"] },
        { q: "哥哥___休息，别打电话了。", answers: ["正在"] },
        { q: "那件衣服在外边___。", answers: ["呢"] },
      ],
    },
  ],
};
