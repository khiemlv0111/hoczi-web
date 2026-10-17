import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第1课 周末你有什么打算？ (Anh dự định làm gì vào cuối tuần vậy?)
// Nguồn: Giáo trình chuẩn HSK3, trang 17–26 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson01: Lesson = {
  level: "hsk3",
  no: 1,
  slug: "bai-1",
  zh: "周末你有什么打算？",
  pinyin: "Zhōumò nǐ yǒu shénme dǎsuàn?",
  vi: "Anh dự định làm gì vào cuối tuần vậy?",
  en: "What are your plans for the weekend?",
  topic: "计划 · Kế hoạch cuối tuần, du lịch",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 15 từ mới: 周末、打算、啊、跟、一直、游戏、作业、着急、复习、南方、北方、面包、带、地图、搬.",
    "Hiểu và dùng được 3 điểm ngữ pháp: bổ ngữ kết quả 好, cấu trúc phủ định hoàn toàn 一……也/都 + 不/没……, liên từ 那.",
    "Đọc hiểu 4 đoạn hội thoại về kế hoạch cuối tuần, việc học ở nhà và chuẩn bị đi du lịch.",
    "Hỏi – đáp về dự định cuối tuần, kế hoạch du lịch và những thứ cần chuẩn bị.",
    "Chữ Hán: chữ chỉ sự (指事字) 一、二、三、上、下、本、末; từ mới ghép từ chữ cũ: 游客、外地、北门.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：北方、作业、电脑游戏、面包、地图、周末",
      vi: "Chọn hình tương ứng với các từ: 北方 (miền Bắc), 作业 (bài tập), 电脑游戏 (trò chơi máy tính), 面包 (bánh mì), 地图 (bản đồ), 周末 (cuối tuần).",
    },
    {
      zh: "用一个词说明下面的图片内容：复习、着急、搬、打算",
      vi: "Mô tả hình bằng một từ cho sẵn: 复习 (ôn tập), 着急 (lo lắng), 搬 (dọn, chuyển), 打算 (dự định).",
    },
  ],

  vocab: [
    { id: 1, han: "周末", py: "zhōumò", pos: "dt.", meaning: "cuối tuần", example: "周末你有什么打算？", exampleVi: "Cuối tuần bạn có dự định gì?" },
    { id: 2, han: "打算", py: "dǎsuàn", pos: "dt./đgt.", meaning: "kế hoạch; dự định", example: "我们打算去旅行，我已经买好火车票了。", exampleVi: "Chúng tôi dự định đi du lịch, tôi đã mua xong vé tàu rồi." },
    { id: 3, han: "啊", py: "a", pos: "trợ.", meaning: "(trợ từ cuối câu) khẳng định hay biện minh cho điều gì", example: "是啊，我已经找好饭馆儿了。", exampleVi: "Đúng vậy, anh đã tìm xong nhà hàng rồi." },
    { id: 4, han: "跟", py: "gēn", pos: "giới.", meaning: "cùng, với", example: "我还没想好要不要跟你去呢。", exampleVi: "Em vẫn chưa nghĩ xong có đi với anh hay không nữa." },
    { id: 5, han: "一直", py: "yìzhí", pos: "p.", meaning: "suốt, liên tục", example: "你一直玩儿电脑游戏，作业写完了吗？", exampleVi: "Con chơi điện tử suốt, bài tập làm xong chưa?" },
    { id: 6, han: "游戏", py: "yóuxì", pos: "dt.", meaning: "trò chơi", example: "别玩儿游戏了，快去睡觉。", exampleVi: "Đừng chơi game nữa, mau đi ngủ đi." },
    { id: 7, han: "作业", py: "zuòyè", pos: "dt.", meaning: "bài tập về nhà", example: "你写完作业了吗？", exampleVi: "Con làm xong bài tập chưa?" },
    { id: 8, han: "着急", py: "zháojí", pos: "tt.", meaning: "lo lắng, sốt ruột", example: "你怎么一点儿也不着急？", exampleVi: "Sao con chẳng lo lắng chút nào vậy?" },
    { id: 9, han: "复习", py: "fùxí", pos: "đgt.", meaning: "ôn tập", example: "我早就复习好了。", exampleVi: "Con ôn bài xong từ lâu rồi." },
    { id: 10, han: "南方", py: "nánfāng", pos: "dt.", meaning: "phía nam, miền nam", example: "南方太热了，北方好一些。", exampleVi: "Miền Nam nóng quá, miền Bắc dễ chịu hơn." },
    { id: 11, han: "北方", py: "běifāng", pos: "dt.", meaning: "phía bắc, miền bắc", example: "北方好一些，不冷也不热。", exampleVi: "Miền Bắc dễ chịu hơn, không lạnh cũng không nóng." },
    { id: 12, han: "面包", py: "miànbāo", pos: "dt.", meaning: "bánh mì", example: "水果、面包、茶都准备好了。", exampleVi: "Hoa quả, bánh mì, trà đều chuẩn bị xong rồi." },
    { id: 13, han: "带", py: "dài", pos: "đgt.", meaning: "mang theo", example: "我们还带什么？", exampleVi: "Chúng ta còn mang theo gì nữa?" },
    { id: 14, han: "地图", py: "dìtú", pos: "dt.", meaning: "bản đồ", example: "手机、电脑、地图，一个也不能少。", exampleVi: "Điện thoại, máy tính, bản đồ, không thể thiếu thứ nào." },
    { id: 15, han: "搬", py: "bān", pos: "đgt.", meaning: "dọn, dời, chuyển", example: "我们是去旅游，不是搬家。", exampleVi: "Chúng ta đi du lịch chứ có phải chuyển nhà đâu." },
    { id: 16, han: "小丽", py: "Xiǎolì", pos: "dt.", meaning: "Tiểu Lệ (tên người)", example: "小丽还没想好要不要跟小刚去。", exampleVi: "Tiểu Lệ vẫn chưa nghĩ xong có đi với Tiểu Cương không." },
    { id: 17, han: "小刚", py: "Xiǎogāng", pos: "dt.", meaning: "Tiểu Cương (tên người)", example: "小刚想请小丽吃饭、看电影。", exampleVi: "Tiểu Cương muốn mời Tiểu Lệ ăn cơm, xem phim." },
    { id: 18, han: "游客", py: "yóukè", pos: "dt.", meaning: "du khách (旅游 + 客人)", example: "那个地方每年都有很多游客。", exampleVi: "Nơi đó năm nào cũng có rất nhiều du khách.", group: "extended" },
    { id: 19, han: "外地", py: "wàidì", pos: "dt.", meaning: "nơi khác, địa phương khác (外边 + 地方)", example: "他是外地人，对这儿不太熟悉。", exampleVi: "Anh ấy là người nơi khác, không quen thuộc lắm với chỗ này.", group: "extended" },
    { id: 20, han: "北门", py: "běimén", pos: "dt.", meaning: "cổng bắc (北方 + 门)", example: "我在学校北门等你。", exampleVi: "Tôi đợi bạn ở cổng bắc của trường.", group: "extended" },
  ],

  text: {
    title: "课文 周末你有什么打算？",
    paragraphs: [
      {
        heading: "课文一 · 谈周末的打算 (Nói về kế hoạch cuối tuần)",
        zh: "小丽：周末你有什么打算？\n小刚：我早就想好了，请你吃饭、看电影、喝咖啡。\n小丽：请我？\n小刚：是啊，我已经找好饭馆儿了，电影票也买好了。\n小丽：我还没想好要不要跟你去呢。",
        vi: "Tiểu Lệ: Cuối tuần anh có dự định gì?\nTiểu Cương: Anh nghĩ xong từ lâu rồi, mời em đi ăn cơm, xem phim, uống cà phê.\nTiểu Lệ: Mời em à?\nTiểu Cương: Đúng vậy, anh đã tìm xong nhà hàng rồi, vé xem phim cũng mua xong rồi.\nTiểu Lệ: Em vẫn chưa nghĩ xong có đi với anh hay không nữa.",
        questions: ["周末小刚打算做什么？", "小丽要不要跟小刚一起去？"],
      },
      {
        heading: "课文二 · 在家 (Ở nhà)",
        zh: "妈妈：你一直玩儿电脑游戏，作业写完了吗？\n儿子：都写完了。\n妈妈：明天不是有考试吗？你怎么一点儿也不着急？\n儿子：我早就复习好了。\n妈妈：那也不能一直玩儿啊。",
        vi: "Mẹ: Con chơi điện tử suốt, bài tập làm xong chưa?\nCon trai: Làm xong hết rồi ạ.\nMẹ: Ngày mai chẳng phải có bài thi sao? Sao con chẳng lo lắng chút nào vậy?\nCon trai: Con ôn bài xong từ lâu rồi.\nMẹ: Thế cũng không được chơi suốt như thế.",
        questions: ["儿子在做什么？", "他准备好考试了吗？"],
      },
      {
        heading: "课文三 · 聊旅游计划 (Nói về kế hoạch đi du lịch)",
        zh: "小丽：下个月我去旅游，你能跟我一起去吗？\n小刚：我还没想好呢。你觉得哪儿最好玩儿？\n小丽：南方啊，我们去年就是这个时候去的。\n小刚：南方太热了，北方好一些，不冷也不热。",
        vi: "Tiểu Lệ: Tháng sau em đi du lịch, anh có thể đi cùng em không?\nTiểu Cương: Anh vẫn chưa nghĩ xong. Em thấy đi đâu là vui nhất?\nTiểu Lệ: Miền Nam chứ, năm ngoái chúng ta đi đúng vào thời điểm này đấy.\nTiểu Cương: Miền Nam nóng quá, miền Bắc dễ chịu hơn, không lạnh cũng không nóng.",
        questions: ["小丽什么时候去旅游？", "小刚觉得哪儿最好玩儿？为什么？"],
      },
      {
        heading: "课文四 · 准备去旅游 (Chuẩn bị đi du lịch)",
        zh: "小刚：水果、面包、茶都准备好了，我们还带什么？\n小丽：手机、电脑、地图，一个也不能少。\n小刚：这些我昨天下午就准备好了。\n小丽：再多带几件衣服吧。\n小刚：我们是去旅游，不是搬家，还是少带一些吧。",
        vi: "Tiểu Cương: Hoa quả, bánh mì, trà đều chuẩn bị xong rồi, chúng ta còn mang gì nữa?\nTiểu Lệ: Điện thoại, máy tính, bản đồ, không được thiếu thứ nào.\nTiểu Cương: Mấy thứ này chiều hôm qua anh đã chuẩn bị xong rồi.\nTiểu Lệ: Mang thêm mấy bộ quần áo nữa đi.\nTiểu Cương: Chúng ta đi du lịch chứ có phải chuyển nhà đâu, thôi mang ít một chút đi.",
        questions: ["小刚和小丽带了什么东西？", "小刚为什么说“还是少带一些吧”？"],
      },
    ],
    notes: [
      "小丽 (Xiǎolì): Tiểu Lệ; 小刚 (Xiǎogāng): Tiểu Cương.",
      "早就……了: … từ lâu rồi, nhấn mạnh việc đã xong từ sớm (我早就想好了 / 我早就复习好了).",
      "Tục ngữ – 不到长城非好汉 (Bú dào Chángchéng fēi hǎohàn): “Bất đáo Trường Thành phi hảo hán” – chưa đến Trường Thành thì chưa phải anh hùng; dùng để khích lệ tinh thần tích cực, gặp khó khăn phải cố gắng vượt qua.",
      "Chữ Hán – 指事字 (chữ chỉ sự): dùng ký hiệu trừu tượng để biểu thị ý, vd. 一、二、三; 上、下 (trên/dưới đường chân trời); 本 (thêm chấm dưới chữ 木 = gốc cây), 末 (thêm nét trên chữ 木 = ngọn cây).",
    ],
  },

  grammar: [
    {
      word: "动词 + 好",
      title: "Bổ ngữ chỉ kết quả 好",
      usages: [
        {
          label: "Cách dùng",
          explain: "好 đứng sau động từ (吃好、准备好…) biểu thị hành động đã hoàn thành và làm người ta hài lòng. So sánh: 我吃完了 chỉ nói đã ăn xong; 我吃好了 còn cho biết đã ăn xong và rất hài lòng.",
          examples: [
            "今晚的电影小刚已经买好票了。",
            "饭还没做好，请你等一会儿。",
            "去旅游的东西准备好了吗？",
            "我还没想好要不要跟你去呢。",
          ],
        },
      ],
      note: "Phủ định dùng 没 + động từ + 好: 饭还没做好.",
    },
    {
      word: "一……也/都 + 不/没……",
      title: "Cấu trúc phủ định hoàn toàn",
      usages: [
        {
          label: "一 + lượng từ + danh từ + 也/都 + 不/没 + động từ",
          explain: "Diễn tả sự phủ định hoàn toàn (không… một chút nào / không… cái nào).",
          examples: [
            "我一个苹果也不想吃。",
            "昨天他一件衣服都没买。",
            "小丽一杯茶也没喝。",
            "手机、电脑、地图，一个也不能少（带）。",
          ],
        },
        {
          label: "一点儿 thay cho “一 + lượng từ”",
          explain: "Có thể dùng 一点儿 thay cho “一 + lượng từ”.",
          examples: [
            "我一点儿东西也不想吃。",
            "这个星期我很忙，一点儿时间也没有。",
            "今天早上我一点儿咖啡都没喝。",
            "我一点儿钱都没带，所以不能买衣服。",
          ],
        },
        {
          label: "一点儿也/都 + 不 + tính từ",
          explain: "Khi vị ngữ là tính từ, thường dùng “一点儿也/都 + 不 + tính từ” để phủ định hoàn toàn.",
          examples: [
            "他一点儿也不累。",
            "南方一点儿都不冷。",
            "那个地方一点儿也不远。",
            "你怎么一点儿也不着急？",
          ],
        },
      ],
    },
    {
      word: "那",
      title: "Liên từ 那 (vậy thì, thế thì)",
      usages: [
        {
          label: "Cách dùng",
          explain: "那 đứng ở đầu câu, chỉ kết quả hay nhận xét được rút ra dựa vào nội dung được nói đến trước đó.",
          examples: [
            "A：我不想去看电影。B：那我也不去了。",
            "A：（明天的考试）我早就复习好了。B：那也不能一直玩儿啊。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "你写完___了吗？", options: ["周末", "带", "游戏", "作业"], answer: "作业" },
    { sentence: "上个___我们去朋友家玩儿了。", options: ["周末", "跟", "游戏", "作业"], answer: "周末" },
    { sentence: "别玩儿___了，快去睡觉。", options: ["作业", "带", "游戏", "跟"], answer: "游戏" },
    { sentence: "他说好请我吃饭，但是没___钱。", options: ["周末", "带", "跟", "游戏"], answer: "带" },
    { sentence: "明天我要上课，不能___你们一起去玩儿。", options: ["带", "跟", "作业", "周末"], answer: "跟" },
    { sentence: "A：你是什么时候___家的？我怎么不知道？B：上个月。", options: ["南方", "搬", "面包", "打算"], answer: "搬" },
    { sentence: "A：你是北方人吗？B：不是，我是___人。", options: ["南方", "地图", "搬", "面包"], answer: "南方" },
    { sentence: "A：考完试你有什么___？B：我还没想好。", options: ["地图", "面包", "打算", "南方"], answer: "打算" },
    { sentence: "A：你好，我要买一张___。B：三块钱。", options: ["打算", "地图", "搬", "南方"], answer: "地图" },
    { sentence: "A：累了吧？吃点儿___吧。B：好，你也吃点儿吧。", options: ["面包", "地图", "打算", "搬"], answer: "面包" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 6, 7] },
        { vocabId: 2, distractors: [1, 9, 13] },
        { vocabId: 5, distractors: [4, 8, 15] },
        { vocabId: 8, distractors: [9, 5, 2] },
        { vocabId: 9, distractors: [7, 8, 6] },
        { vocabId: 10, distractors: [11, 14, 12] },
        { vocabId: 12, distractors: [14, 10, 6] },
        { vocabId: 15, distractors: [13, 4, 3] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 5, 7, 8, 11, 13, 14],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["周末", "你", "有", "什么", "打算", "？"], answer: "周末你有什么打算？", vi: "Cuối tuần bạn có dự định gì?" },
        { tokens: ["我", "已经", "找好", "饭馆儿", "了", "。"], answer: "我已经找好饭馆儿了。", vi: "Tôi đã tìm xong nhà hàng rồi." },
        { tokens: ["你", "怎么", "一点儿", "也不", "着急", "？"], answer: "你怎么一点儿也不着急？", vi: "Sao bạn chẳng lo lắng chút nào vậy?" },
        { tokens: ["下个月", "我", "去旅游", "，", "你能", "跟我", "一起去吗", "？"], answer: "下个月我去旅游，你能跟我一起去吗？", vi: "Tháng sau tôi đi du lịch, bạn có thể đi cùng tôi không?" },
        { tokens: ["这些", "我", "昨天下午", "就", "准备好了", "。"], answer: "这些我昨天下午就准备好了。", vi: "Mấy thứ này chiều hôm qua tôi đã chuẩn bị xong rồi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Kế hoạch cuối tuần", text: "小丽：{{c1}}你有什么{{c2}}？\n小刚：我早就想{{c3}}了，请你吃饭、看电影、喝咖啡。\n小丽：请我？\n小刚：是{{c4}}，我已经找好饭馆儿了，电影票也买好了。\n小丽：我还没想好要不要{{c5}}你去呢。" },
        { title: "Bài khóa 2 · Ở nhà", text: "妈妈：你{{c6}}玩儿电脑{{c7}}，{{c8}}写完了吗？\n儿子：都写完了。\n妈妈：明天不是有考试吗？你怎么一点儿也不{{c9}}？\n儿子：我早就{{c10}}好了。\n妈妈：那也不能一直玩儿啊。" },
      ],
      answers: { c1: "周末", c2: "打算", c3: "好", c4: "啊", c5: "跟", c6: "一直", c7: "游戏", c8: "作业", c9: "着急", c10: "复习" },
      bank: ["周末", "打算", "好", "啊", "跟", "一直", "游戏", "作业", "着急", "复习", "地图", "带", "搬"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại về chuyến du lịch.",
      passages: [
        { title: "Bài khóa 3 · Kế hoạch du lịch", text: "小丽：下个月我去旅游，你能{{e1}}我一起去吗？\n小刚：我还没想好呢。你觉得哪儿最好玩儿？\n小丽：{{e2}}啊，我们去年就是这个时候去的。\n小刚：南方太热了，{{e3}}好一些，不冷{{e4}}不热。" },
        { title: "Bài khóa 4 · Chuẩn bị đi du lịch", text: "小刚：水果、{{e5}}、茶都准备好了，我们还{{e6}}什么？\n小丽：手机、电脑、{{e7}}，一个也不能{{e8}}。\n小刚：这些我昨天下午就准备好了。\n小丽：再多带几件衣服吧。\n小刚：我们是去旅游，不是{{e9}}家，{{e10}}少带一些吧。" },
      ],
      answers: { e1: "跟", e2: "南方", e3: "北方", e4: "也", e5: "面包", e6: "带", e7: "地图", e8: "少", e9: "搬", e10: "还是" },
      bank: ["跟", "南方", "北方", "也", "面包", "带", "地图", "少", "搬", "还是", "作业", "着急", "都"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "周末你有什么打算？", vi: "Cuối tuần bạn có dự định gì?", keywords: ["cuối tuần", "dự định"] },
        { zh: "我早就复习好了。", vi: "Tôi đã ôn tập xong từ lâu rồi.", keywords: ["ôn tập", "từ lâu"] },
        { zh: "这个星期我很忙，一点儿时间也没有。", vi: "Tuần này tôi rất bận, không có chút thời gian nào.", keywords: ["tuần này", "bận", "thời gian"] },
        { zh: "南方太热了，北方好一些，不冷也不热。", vi: "Miền Nam nóng quá, miền Bắc dễ chịu hơn, không lạnh cũng không nóng.", keywords: ["miền nam", "miền bắc", "nóng", "lạnh"] },
        { zh: "我们是去旅游，不是搬家。", vi: "Chúng ta đi du lịch chứ không phải chuyển nhà.", keywords: ["du lịch", "chuyển nhà"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Cơm vẫn chưa nấu xong, mời bạn đợi một lát.", answers: ["饭还没做好，请你等一会儿。", "饭还没做好，请等一会儿。"] },
        { vi: "Tôi không muốn ăn quả táo nào cả.", answers: ["我一个苹果也不想吃。", "我一个苹果都不想吃。"] },
        { vi: "Hôm qua anh ấy không mua bộ quần áo nào.", answers: ["昨天他一件衣服都没买。", "昨天他一件衣服也没买。", "他昨天一件衣服都没买。", "他昨天一件衣服也没买。"] },
        { vi: "Nơi đó không xa chút nào.", answers: ["那个地方一点儿也不远。", "那个地方一点儿都不远。"] },
        { vi: "A: Tôi không muốn đi xem phim. B: Vậy tôi cũng không đi nữa.", answers: ["A：我不想去看电影。B：那我也不去了。", "我不想去看电影。那我也不去了。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小刚周末打算请小丽吃饭、看电影、喝咖啡。", a: true },
        { q: "小刚还没买电影票。", a: false },
        { q: "小丽已经想好要跟小刚去了。", a: false },
        { q: "儿子的作业都写完了。", a: true },
        { q: "儿子还没复习，所以很着急。", a: false },
        { q: "小丽下个月去旅游。", a: true },
        { q: "小刚觉得南方最好玩儿。", a: false },
        { q: "小刚觉得去旅游应该少带一些东西。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "周末你有什么打算？",
        "我早就复习好了。",
        "你怎么一点儿也不着急？",
        "北方不冷也不热。",
        "我们还带什么？",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "你打算去哪儿旅游？怎么去？旅游以前要准备什么？ (Bạn dự định đi du lịch ở đâu? Đi bằng gì? Trước khi đi cần chuẩn bị những gì?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 1 (động từ + 好, 一……也/都 + 不/没, 那).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["好了", "一点儿也", "一点儿都", "也不", "也没", "都不", "都没", "那"],
      minGrammar: 2,
      sample: "下个月我打算跟朋友一起去北方旅游。南方太热了，北方好一些，不冷也不热。我们打算坐飞机去，飞机票我已经买好了，宾馆也找好了。旅游以前，我们要准备手机、电脑、地图和一些面包，一个也不能少。我朋友想多带几件衣服，那也可以，但是我们不是搬家，还是少带一些吧。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: bổ ngữ kết quả 好", points: 6,
      subtitle: "Điền bổ ngữ kết quả thích hợp vào chỗ trống (好 hoặc 完).",
      grammarWord: "好 / 完",
      options: ["好", "完"],
      items: [
        { q: "今晚的电影小刚已经买___票了。", answers: ["好"] },
        { q: "饭还没做___，请你等一会儿。", answers: ["好"] },
        { q: "去旅游的东西准备___了吗？", answers: ["好"] },
        { q: "我还没想___要不要跟你去呢。", answers: ["好"] },
        { q: "你一直玩儿电脑游戏，作业写___了吗？", answers: ["完", "好"] },
        { q: "我们打算去旅行，我已经买___火车票了。", answers: ["好"] },
        { q: "快穿___衣服，我们准备出门了。", answers: ["好"] },
        { q: "这本书我已经看___了，你拿去看吧。", answers: ["完"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 一……也/都 + 不/没", points: 6,
      subtitle: "Chọn 不 hoặc 没 cho mỗi chỗ trống.",
      grammarWord: "不 / 没",
      options: ["不", "没"],
      items: [
        { q: "我一个苹果也___想吃。", answers: ["不"] },
        { q: "昨天他一件衣服都___买。", answers: ["没"] },
        { q: "小丽一杯茶也___喝。", answers: ["没"] },
        { q: "这个星期我很忙，一点儿时间也___有。", answers: ["没"] },
        { q: "南方一点儿都___冷。", answers: ["不"] },
        { q: "那个地方一点儿也___远。", answers: ["不"] },
        { q: "我一点儿钱都___带，所以不能买衣服。", answers: ["没"] },
        { q: "这些汉字太难了，我一个也___认识。", answers: ["不"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: liên từ 那", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (那 – vậy thì / 也 / 都).",
      grammarWord: "那",
      options: ["那", "也", "都"],
      items: [
        { q: "A：我不想去看电影。B：___我也不去了。", answers: ["那"] },
        { q: "A：我早就复习好了。B：那___不能一直玩儿啊。", answers: ["也"] },
        { q: "A：周末我不想去商店买东西。B：___我们在家看电视吧。", answers: ["那"] },
        { q: "A：外边下大雨了，不能去踢球了。B：___我们去看电影吧。", answers: ["那"] },
        { q: "A：对不起，红色的手机已经卖完了。B：___我买白色的吧。", answers: ["那"] },
        { q: "水果、面包、茶___准备好了。", answers: ["都"] },
        { q: "手机、电脑、地图，一个___不能少。", answers: ["也"] },
        { q: "A：你的狗生病了？B：是啊，它一点儿东西也不吃。A：___你带它去医院吧。", answers: ["那"] },
      ],
    },
  ],
};
