import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第13课 我是走回来的。 (Anh đi bộ về.)
// Nguồn: Giáo trình chuẩn HSK3, trang 123–131 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson13: Lesson = {
  level: "hsk3",
  no: 13,
  slug: "bai-13",
  zh: "我是走回来的。",
  pinyin: "Wǒ shì zǒu huilai de.",
  vi: "Anh đi bộ về.",
  en: "I walked back.",
  topic: "家庭生活 · Quà tặng, gặp bạn cũ, cuộc sống gia đình",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 15 từ mới: 终于、爷爷、礼物、奶奶、遇到、一边、过去、一般、愿意、起来、应该、生活、校长、坏、经常.",
    "Hiểu và dùng được 2 điểm ngữ pháp: bổ ngữ chỉ phương hướng dạng kết hợp (上来/下去/进来/出去/回来/过去/起来…), cấu trúc 一边……一边…… (vừa… vừa…).",
    "Đọc hiểu 3 đoạn hội thoại (mua quà cho ông bà, gặp bạn học cũ, thích xem ti vi ở nhà) và 1 đoạn văn về người chồng làm hiệu trưởng.",
    "Miêu tả cụ thể hướng của hành động; nói hai việc làm cùng lúc.",
    "Chữ Hán: chữ hình thanh kết cấu trên – dưới (爸、苹、想、努); từ mới ghép từ chữ cũ: 红酒、班长、遇见.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：上去、下来、进去、出来、起来、过来",
      vi: "Chọn hình tương ứng với các từ: 上去 (đi lên), 下来 (đi xuống), 进去 (đi vào), 出来 (đi ra), 起来 (đứng lên), 过来 (đi qua đây).",
    },
    {
      zh: "说说做下边这些事情的同时还可以做什么：看报纸、做作业、运动、等人、爬山、看电视",
      vi: "Cho biết trong lúc làm những việc sau bạn có thể làm gì khác: đọc báo (vd. uống trà), làm bài tập, vận động, đợi người, leo núi, xem ti vi.",
    },
  ],

  vocab: [
    { id: 1, han: "终于", py: "zhōngyú", pos: "p.", meaning: "cuối cùng", example: "你终于回来了！", exampleVi: "Cuối cùng anh cũng về rồi!" },
    { id: 2, han: "爷爷", py: "yéye", pos: "dt.", meaning: "ông nội", example: "这是给爷爷的礼物。", exampleVi: "Đây là quà cho ông nội." },
    { id: 3, han: "礼物", py: "lǐwù", pos: "dt.", meaning: "quà biếu, quà tặng", example: "那我的礼物呢？快拿出来让我看看。", exampleVi: "Thế quà của em đâu? Mau lấy ra cho em xem." },
    { id: 4, han: "奶奶", py: "nǎinai", pos: "dt.", meaning: "bà nội", example: "明天我们一起送过去，看看爷爷奶奶。", exampleVi: "Mai chúng ta cùng mang qua, thăm ông bà." },
    { id: 5, han: "遇到", py: "yùdào", pos: "đgt.", meaning: "tình cờ gặp", example: "她是我今天在路上遇到的一个老同学。", exampleVi: "Cô ấy là một bạn học cũ anh tình cờ gặp trên đường hôm nay." },
    { id: 6, han: "一边", py: "yìbiān", pos: "p.", meaning: "vừa (一边……一边…… vừa… vừa…)", example: "一边喝咖啡一边说了些过去的事。", exampleVi: "Vừa uống cà phê vừa nói chuyện ngày xưa." },
    { id: 7, han: "过去", py: "guòqù", pos: "dt.", meaning: "quá khứ, ngày trước", example: "你回来得这么晚，是说了很多过去的事吗？", exampleVi: "Anh về muộn thế, là nói nhiều chuyện ngày xưa à?" },
    { id: 8, han: "一般", py: "yìbān", pos: "tt.", meaning: "thông thường", example: "周末你一般跟小刚出去看电影吗？", exampleVi: "Cuối tuần cậu thường đi xem phim với Tiểu Cương à?" },
    { id: 9, han: "愿意", py: "yuànyì", pos: "đgt.", meaning: "muốn, sẵn lòng", example: "我更愿意在家看电视。", exampleVi: "Tớ thích ở nhà xem ti vi hơn." },
    { id: 10, han: "起来", py: "qǐlai", pos: "đgt.", meaning: "lên, đứng dậy (chỉ sự di chuyển hướng lên)", example: "坐久了还可以站起来休息一会儿。", exampleVi: "Ngồi lâu rồi còn có thể đứng dậy nghỉ một lát." },
    { id: 11, han: "应该", py: "yīnggāi", pos: "đgt.", meaning: "nên, cần phải", example: "你应该多出去走走。", exampleVi: "Cậu nên ra ngoài đi dạo nhiều hơn." },
    { id: 12, han: "生活", py: "shēnghuó", pos: "dt.", meaning: "đời sống, cuộc sống", example: "有他在，我的生活已经很有意思了。", exampleVi: "Có anh ấy, cuộc sống của tớ đã rất thú vị rồi." },
    { id: 13, han: "校长", py: "xiàozhǎng", pos: "dt.", meaning: "hiệu trưởng", example: "现在他已经是校长了。", exampleVi: "Bây giờ anh ấy đã là hiệu trưởng rồi." },
    { id: 14, han: "坏", py: "huài", pos: "tt.", meaning: "quá, quá mức (sau động từ/tính từ); hỏng, xấu", example: "我真怕他累坏了。", exampleVi: "Tôi thật sợ anh ấy mệt quá đổ bệnh." },
    { id: 15, han: "经常", py: "jīngcháng", pos: "p.", meaning: "thường xuyên", example: "希望他可以经常和我还有孩子在一起。", exampleVi: "Hy vọng anh ấy có thể thường xuyên ở bên tôi và con." },
    { id: 16, han: "红酒", py: "hóngjiǔ", pos: "dt.", meaning: "rượu vang đỏ (红 + 啤酒)", example: "怎么还买红酒回来了？", exampleVi: "Sao còn mua cả rượu vang về?", group: "extended" },
    { id: 17, han: "班长", py: "bānzhǎng", pos: "dt.", meaning: "lớp trưởng (班 + 校长)", example: "他是我们班的班长。", exampleVi: "Cậu ấy là lớp trưởng lớp chúng tôi.", group: "extended" },
    { id: 18, han: "遇见", py: "yùjiàn", pos: "đgt.", meaning: "gặp, gặp phải (遇到 + 看见)", example: "我在超市遇见了我的老师。", exampleVi: "Tôi gặp thầy giáo ở siêu thị.", group: "extended" },
  ],

  text: {
    title: "课文 我是走回来的。",
    paragraphs: [
      {
        heading: "课文一 · 在家 (Ở nhà)",
        zh: "小丽：你终于回来了！从哪儿买回来这么多东西啊？\n小刚：都是从那边的商店买回来的。\n小丽：怎么还买红酒回来了？谁喝啊？\n小刚：这是给爷爷的礼物，明天我们一起送过去，看看爷爷奶奶。\n小丽：那我的礼物呢？快拿出来让我看看。\n小刚：我不是已经回来了吗？",
        vi: "Tiểu Lệ: Cuối cùng anh cũng về rồi! Mua ở đâu về nhiều đồ thế?\nTiểu Cương: Đều mua ở cửa hàng đằng kia về đấy.\nTiểu Lệ: Sao còn mua cả rượu vang về? Ai uống?\nTiểu Cương: Đây là quà cho ông, mai chúng ta cùng mang qua, thăm ông bà.\nTiểu Lệ: Thế quà của em đâu? Mau lấy ra cho em xem.\nTiểu Cương: Chẳng phải anh đã về rồi đây sao?",
        questions: ["小刚买了什么礼物回来？", "小刚给小丽的礼物是什么？"],
      },
      {
        heading: "课文二 · 在家 (Ở nhà)",
        zh: "小丽：我今天看见你和一个女的进了咖啡店，她是谁啊？\n小刚：她是我今天在路上遇到的一个老同学。\n小丽：你们就一起去喝咖啡了？\n小刚：是啊，一边喝咖啡一边说了些过去的事。\n小丽：你回来得这么晚，是说了很多过去的事吗？\n小刚：不是。没有公共汽车了，我是走回来的。",
        vi: "Tiểu Lệ: Hôm nay em thấy anh với một cô gái vào quán cà phê, cô ấy là ai thế?\nTiểu Cương: Cô ấy là một bạn học cũ anh tình cờ gặp trên đường hôm nay.\nTiểu Lệ: Thế là hai người cùng đi uống cà phê à?\nTiểu Cương: Ừ, vừa uống cà phê vừa nói chuyện ngày xưa.\nTiểu Lệ: Anh về muộn thế, là nói nhiều chuyện ngày xưa lắm à?\nTiểu Cương: Không phải. Hết xe buýt rồi, anh đi bộ về.",
        questions: ["小刚今天做什么了？", "小刚为什么很晚才回家？"],
      },
      {
        heading: "课文三 · 在打电话 (Nói chuyện qua điện thoại)",
        zh: "同事：小丽，周末你一般跟小刚出去看电影吗？\n小丽：我很少去电影院看电影，我更愿意在家看电视。\n同事：看电视有什么意思啊？\n小丽：可以一边吃一边看，坐久了还可以站起来休息一会儿。\n同事：你应该多出去走走，这样你们的生活会更有意思。\n小丽：有他在，我的生活已经很有意思了。",
        vi: "Đồng nghiệp: Tiểu Lệ, cuối tuần cậu thường đi xem phim với Tiểu Cương à?\nTiểu Lệ: Tớ ít khi ra rạp xem phim, tớ thích ở nhà xem ti vi hơn.\nĐồng nghiệp: Xem ti vi thì có gì hay?\nTiểu Lệ: Có thể vừa ăn vừa xem, ngồi lâu rồi còn có thể đứng dậy nghỉ một lát.\nĐồng nghiệp: Cậu nên ra ngoài đi dạo nhiều hơn, như thế cuộc sống của hai người sẽ thú vị hơn.\nTiểu Lệ: Có anh ấy, cuộc sống của tớ đã rất thú vị rồi.",
        questions: ["小丽更喜欢看电视还是看电影？为什么？", "同事觉得小丽应该做什么？"],
      },
      {
        heading: "课文四 · 我的丈夫 (Chồng tôi)",
        zh: "刚结婚的时候，我丈夫是中学老师，他喜欢每天早上起床后，一边吃早饭一边看报纸。十年过去了，现在他已经是校长了，因为太忙，每天早上我起床后都看不到他，晚上很晚他才回到家。我真怕他累坏了。希望他能少一些会议，多一些休息，可以经常和我还有孩子在一起。",
        vi: "Lúc mới cưới, chồng tôi là giáo viên trung học, anh ấy thích mỗi sáng thức dậy vừa ăn sáng vừa đọc báo. Mười năm trôi qua, giờ anh ấy đã là hiệu trưởng, vì quá bận nên sáng nào tôi dậy cũng không thấy anh ấy đâu, tối rất muộn anh ấy mới về đến nhà. Tôi thật sợ anh ấy mệt quá đổ bệnh. Mong anh ấy bớt họp hành, nghỉ ngơi nhiều hơn, có thể thường xuyên ở bên tôi và các con.",
        questions: ["刚结婚的时候，丈夫习惯做什么？", "现在丈夫的生活什么样？"],
      },
    ],
    notes: [
      "是……的: nhấn mạnh cách thức/thời gian/nơi chốn của việc đã xảy ra: 我是走回来的 (anh đi bộ về đấy).",
      "累坏了: mệt rã rời, mệt quá đổ bệnh (坏 sau động từ/tính từ chỉ mức độ rất cao: 忙坏了、饿坏了).",
      "Tục ngữ – 礼轻情意重 (Lǐ qīng qíngyì zhòng): của ít lòng nhiều; điều quan trọng khi tặng quà là tình cảm chân thành chứ không phải giá trị món quà.",
      "Chữ Hán – 形声字 kết cấu trên – dưới: 上形下声: 爸 (父 + 巴), 苹 (艹 + 平); 下形上声: 想 (相 + 心), 努 (奴 + 力).",
    ],
  },

  grammar: [
    {
      word: "复合趋向补语",
      title: "Bổ ngữ chỉ phương hướng dạng kết hợp",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thêm 来/去 sau các động từ chỉ phương hướng 上、下、进、出、回、过、起 tạo thành bổ ngữ phương hướng kết hợp (上来/上去, 下来/下去, 进来/进去, 出来/出去, 回来/回去, 过来/过去, 起来), dùng sau động từ khác để chỉ hướng hành động.",
          examples: ["老师拿出一本书来。", "小狗从房间跑出来。", "我给你拿过去吧。", "坐久了还可以站起来休息一会儿。"],
        },
        {
          label: "Tân ngữ là nơi chốn",
          explain: "Tân ngữ chỉ nơi chốn phải đặt trước 来/去.",
          examples: ["老师走进教室来。", "周太太走进咖啡店去。"],
        },
        {
          label: "Tân ngữ là sự vật",
          explain: "Tân ngữ chỉ sự vật có thể đặt trước hoặc sau 来/去. Nếu hành động đã hoàn thành thì tân ngữ thường đặt sau 来/去.",
          examples: ["哥哥买回一个西瓜来。= 哥哥买回来一个西瓜。", "爸爸从国外带回一些礼物来。= 爸爸从国外带回来一些礼物。", "哥哥买回来了一个西瓜。"],
        },
      ],
    },
    {
      word: "一边……一边……",
      title: "Vừa… vừa…",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả hai hành động được thực hiện cùng lúc, vd. 一边听音乐一边做作业: vừa nghe nhạc vừa làm bài tập. 一 có thể lược bỏ (边……边……).",
          examples: ["妈妈一边唱歌一边做饭。", "老师边说边笑。", "小丽和老同学边喝咖啡边聊天儿。", "我丈夫喜欢一边吃早饭一边看报纸。"],
        },
      ],
      note: "Phân biệt với 又……又…… (bài 4): 又 nối hai tính chất (又高又漂亮), 一边 nối hai hành động.",
    },
  ],

  wordChoice: [
    { sentence: "周末你们___在哪儿吃饭？在家吃还是出去吃？", options: ["一般", "经常", "终于", "应该"], answer: "一般" },
    { sentence: "___考完试了，我们去哪儿玩儿玩儿？", options: ["终于", "愿意", "一般", "应该"], answer: "终于" },
    { sentence: "你___早睡早起，别睡得那么晚。", options: ["经常", "应该", "终于", "愿意"], answer: "应该" },
    { sentence: "我不___去那个公司工作，太远，也太累。", options: ["一般", "终于", "愿意", "经常"], answer: "愿意" },
    { sentence: "那个饭馆离我们学校很近，我们___去。", options: ["经常", "愿意", "应该", "终于"], answer: "经常" },
    { sentence: "A：一会儿周经理走进来的时候，请大家站___。B：好，我们知道了。", options: ["过去", "起来", "遇到", "校长"], answer: "起来" },
    { sentence: "A：我忘了把这本书还给他了。B：没关系，明天我帮你送___吧。", options: ["礼物", "起来", "过去", "遇到"], answer: "过去" },
    { sentence: "A：前边那位老人是谁？B：他是我们的___。", options: ["校长", "礼物", "过去", "起来"], answer: "校长" },
    { sentence: "A：你怎么回来这么晚？B：回家的路上___张老师了，跟他聊了一会儿。", options: ["起来", "遇到", "校长", "礼物"], answer: "遇到" },
    { sentence: "A：下个月是爷爷的生日，你有什么打算？B：我要送他一件特别的___。", options: ["遇到", "过去", "礼物", "校长"], answer: "礼物" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [15, 11, 8] },
        { vocabId: 3, distractors: [2, 4, 12] },
        { vocabId: 5, distractors: [7, 10, 9] },
        { vocabId: 8, distractors: [6, 15, 1] },
        { vocabId: 9, distractors: [11, 5, 3] },
        { vocabId: 11, distractors: [9, 15, 12] },
        { vocabId: 13, distractors: [2, 12, 4] },
        { vocabId: 15, distractors: [1, 8, 11] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 3, 5, 9, 11, 13, 15],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["没有", "公共汽车了", "，", "我", "是", "走回来", "的", "。"], answer: "没有公共汽车了，我是走回来的。", vi: "Hết xe buýt rồi, tôi đi bộ về." },
        { tokens: ["快", "拿出来", "让我", "看看", "。"], answer: "快拿出来让我看看。", vi: "Mau lấy ra cho tôi xem." },
        { tokens: ["我们", "一边", "喝咖啡", "一边", "说了些", "过去的事", "。"], answer: "我们一边喝咖啡一边说了些过去的事。", vi: "Chúng tôi vừa uống cà phê vừa nói chuyện ngày xưa." },
        { tokens: ["老师", "走", "进", "教室", "来", "。"], answer: "老师走进教室来。", vi: "Thầy giáo đi vào lớp." },
        { tokens: ["你", "应该", "多", "出去", "走走", "。"], answer: "你应该多出去走走。", vi: "Bạn nên ra ngoài đi dạo nhiều hơn." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Quà cho ông bà", text: "小丽：你{{c1}}回来了！从哪儿买{{c2}}这么多东西啊？\n小刚：这是给{{c3}}的{{c4}}，明天我们一起送{{c5}}，看看爷爷{{c6}}。\n小丽：那我的礼物呢？快拿{{c7}}让我看看。" },
        { title: "Bài khóa 2 · Gặp bạn cũ", text: "小刚：她是我今天在路上{{c8}}的一个老同学。\n小丽：你们就一起去喝咖啡了？\n小刚：是啊，{{c9}}喝咖啡一边说了些{{c10}}的事。" },
      ],
      answers: { c1: "终于", c2: "回来", c3: "爷爷", c4: "礼物", c5: "过去", c6: "奶奶", c7: "出来", c8: "遇到", c9: "一边", c10: "过去" },
      bank: ["终于", "回来", "爷爷", "礼物", "过去", "奶奶", "出来", "遇到", "一边", "过去", "起来", "经常"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Xem ti vi ở nhà", text: "同事：小丽，周末你{{e1}}跟小刚出去看电影吗？\n小丽：我很少去电影院看电影，我更{{e2}}在家看电视。\n小丽：可以一边吃一边看，坐久了还可以站{{e3}}休息一会儿。\n同事：你{{e4}}多出去走走，这样你们的{{e5}}会更有意思。" },
        { title: "Bài khóa 4 · Chồng tôi", text: "刚结婚的时候，我丈夫是中学老师，他喜欢每天早上起床后，一边吃早饭一边看报纸。十年{{e6}}了，现在他已经是{{e7}}了，因为太忙，……晚上很晚他{{e8}}回到家。我真怕他累{{e9}}了。希望他……可以{{e10}}和我还有孩子在一起。" },
      ],
      answers: { e1: "一般", e2: "愿意", e3: "起来", e4: "应该", e5: "生活", e6: "过去", e7: "校长", e8: "才", e9: "坏", e10: "经常" },
      bank: ["一般", "愿意", "起来", "应该", "生活", "过去", "校长", "才", "坏", "经常", "就", "终于", "礼物"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "你终于回来了！", vi: "Cuối cùng bạn cũng về rồi!", keywords: ["cuối cùng", "về"] },
        { zh: "妈妈一边唱歌一边做饭。", vi: "Mẹ vừa hát vừa nấu cơm.", keywords: ["vừa hát", "nấu cơm"] },
        { zh: "我更愿意在家看电视。", vi: "Tôi thích ở nhà xem ti vi hơn.", keywords: ["ở nhà", "ti vi"] },
        { zh: "爸爸从国外带回来一些礼物。", vi: "Bố mang từ nước ngoài về một ít quà.", keywords: ["bố", "nước ngoài", "quà"] },
        { zh: "我真怕他累坏了。", vi: "Tôi thật sợ anh ấy mệt quá đổ bệnh.", keywords: ["sợ", "mệt"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Con chó nhỏ chạy từ trong phòng ra.", answers: ["小狗从房间跑出来。", "小狗从房间里跑出来。", "小狗从房间里跑出来了。", "小狗从房间跑出来了。"] },
        { vi: "Thầy giáo lấy ra một quyển sách.", answers: ["老师拿出一本书来。", "老师拿出来一本书。"] },
        { vi: "Anh trai mua về một quả dưa hấu.", answers: ["哥哥买回来了一个西瓜。", "哥哥买回来一个西瓜。", "哥哥买回一个西瓜来。"] },
        { vi: "Thầy giáo vừa nói vừa cười.", answers: ["老师一边说一边笑。", "老师边说边笑。"] },
        { vi: "Bạn nên ngủ sớm dậy sớm.", answers: ["你应该早睡早起。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小刚买了红酒，是给爷爷的礼物。", a: true },
        { q: "小刚给小丽买了很多礼物。", a: false },
        { q: "小刚在路上遇到了一个老同学。", a: true },
        { q: "小刚是坐公共汽车回来的。", a: false },
        { q: "小丽更愿意在家看电视。", a: true },
        { q: "小丽周末经常去电影院看电影。", a: false },
        { q: "“我”的丈夫现在是校长。", a: true },
        { q: "丈夫现在每天晚上很早就回家。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我是走回来的。",
        "你终于回来了！",
        "这是给爷爷的礼物。",
        "我更愿意在家看电视。",
        "你应该多出去走走。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "如果你去外国旅游，会给亲戚朋友带回来什么礼物？为什么？ (Nếu đi du lịch nước ngoài, bạn sẽ mang quà gì về cho người thân, bạn bè? Tại sao?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 13 (bổ ngữ phương hướng kết hợp, 一边……一边……).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["回来", "回去", "出来", "过去", "起来", "进来", "一边", "边"],
      minGrammar: 2,
      sample: "下个月我要去中国旅游，我打算给家人带回来一些礼物。我会给爷爷买回来一瓶红酒，因为他喜欢一边吃饭一边喝酒。我要给奶奶带回来一些茶，她经常一边喝茶一边看电视。我还会给妈妈带回来一条红色的裙子，她最喜欢红色。我觉得礼轻情意重，礼物不一定要很贵。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: bổ ngữ phương hướng kết hợp", points: 6,
      subtitle: "Chọn bổ ngữ phương hướng thích hợp.",
      grammarWord: "复合趋向补语",
      options: ["出来", "过去", "起来", "回来", "进来", "下去"],
      items: [
        { q: "小狗从房间跑___。", answers: ["出来"] },
        { q: "我给你拿___吧。", answers: ["过去"] },
        { q: "坐久了还可以站___休息一会儿。", answers: ["起来"] },
        { q: "都是从那边的商店买___的。", answers: ["回来"] },
        { q: "外边太冷了，快走___吧。（说话人在屋里）", answers: ["进来"] },
        { q: "那我的礼物呢？快拿___让我看看。", answers: ["出来"] },
        { q: "明天我们一起把礼物送___，看看爷爷奶奶。", answers: ["过去"] },
        { q: "你在楼上等着，我拿了东西就走___找你。", answers: ["下去"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 一边……一边……", points: 6,
      subtitle: "Điền từ còn thiếu để hoàn thành cấu trúc vừa… vừa….",
      grammarWord: "一边",
      items: [
        { q: "妈妈一边唱歌___做饭。", answers: ["一边"] },
        { q: "我丈夫喜欢___吃早饭一边看报纸。", answers: ["一边"] },
        { q: "可以一边吃___看。", answers: ["一边"] },
        { q: "我们___喝咖啡一边说了些过去的事。", answers: ["一边"] },
        { q: "你不能一边开车___打电话。", answers: ["一边"] },
        { q: "我们一边聊天儿___爬山，一点儿也不累。", answers: ["一边"] },
        { q: "我喜欢___听音乐一边做作业。", answers: ["一边"] },
        { q: "他总是一边看电视___吃饭。", answers: ["一边"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 终于 / 应该 / 经常", points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "终于 / 应该 / 经常",
      options: ["终于", "应该", "经常"],
      items: [
        { q: "你___回来了！", answers: ["终于"] },
        { q: "你___多出去走走。", answers: ["应该"] },
        { q: "希望他可以___和我还有孩子在一起。", answers: ["经常"] },
        { q: "___考完试了，我们去玩儿玩儿吧。", answers: ["终于"] },
        { q: "你发烧了，___去医院看看。", answers: ["应该"] },
        { q: "那个饭馆离学校很近，我们___去。", answers: ["经常"] },
        { q: "等了一个小时，公共汽车___来了。", answers: ["终于"] },
        { q: "他___一边开车一边打电话，这是个坏习惯。", answers: ["经常"] },
      ],
    },
  ],
};
