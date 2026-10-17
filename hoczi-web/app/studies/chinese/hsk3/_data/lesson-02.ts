import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第2课 他什么时候回来？ (Khi nào anh ấy quay về?)
// Nguồn: Giáo trình chuẩn HSK3, trang 27–35 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson02: Lesson = {
  level: "hsk3",
  no: 2,
  slug: "bai-2",
  zh: "他什么时候回来？",
  pinyin: "Tā shénme shíhou huílai?",
  vi: "Khi nào anh ấy quay về?",
  en: "When will he be back?",
  topic: "日常生活 · Sinh hoạt hằng ngày, đi lại",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 18 từ mới: 腿、疼、脚、树、容易、难、太太、秘书、经理、办公室、辆、楼、拿、把、伞、胖、其实、瘦.",
    "Hiểu và dùng được 3 điểm ngữ pháp: bổ ngữ chỉ phương hướng đơn giản (động từ + 来/去), cấu trúc 动词1 + 了……就 + 动词2 diễn tả hai hành động liên tiếp, câu hỏi tu từ 能……吗？",
    "Đọc hiểu 4 đoạn hội thoại: trên đường xuống núi, gọi điện thoại tìm người, tiễn bạn trước tòa nhà, chuyện béo – gầy ở nhà.",
    "Hỏi – đáp ai đó đi đâu, khi nào về; kể chuỗi việc làm hằng ngày.",
    "Từ mới ghép từ chữ cũ: 办公楼、外出、午觉.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：伞、经理、办公室、脚、楼、树",
      vi: "Chọn hình tương ứng với các từ: 伞 (ô, dù), 经理 (giám đốc), 办公室 (văn phòng), 脚 (bàn chân), 楼 (tòa nhà), 树 (cây).",
    },
    {
      zh: "说说你做完这些事以后做什么：起床、吃饭、写作业、下课、运动、回家",
      vi: "Cho biết bạn sẽ làm gì sau khi làm xong những việc sau: thức dậy (vd. 起床了就吃早饭), ăn cơm, làm bài tập, tan học, vận động, về nhà.",
    },
  ],

  vocab: [
    { id: 1, han: "腿", py: "tuǐ", pos: "dt.", meaning: "chân (cẳng chân)", example: "我现在腿也疼，脚也疼。", exampleVi: "Bây giờ em đau cả chân lẫn bàn chân." },
    { id: 2, han: "疼", py: "téng", pos: "tt.", meaning: "đau, nhức", example: "昨天走路走得太多了，左边这条腿有点儿疼。", exampleVi: "Hôm qua đi bộ nhiều quá, chân trái hơi đau." },
    { id: 3, han: "脚", py: "jiǎo", pos: "dt.", meaning: "bàn chân", example: "我现在腿也疼，脚也疼。", exampleVi: "Bây giờ em đau cả chân lẫn bàn chân." },
    { id: 4, han: "树", py: "shù", pos: "dt.", meaning: "cây", example: "那边树多，我们过去坐一下吧。", exampleVi: "Bên kia nhiều cây, chúng ta qua đó ngồi một lát đi." },
    { id: 5, han: "容易", py: "róngyì", pos: "tt.", meaning: "dễ, dễ dàng", example: "上山容易下山难，你不知道？", exampleVi: "Lên núi dễ xuống núi khó, em không biết à?" },
    { id: 6, han: "难", py: "nán", pos: "tt.", meaning: "khó, khó khăn", example: "今天的考试一点儿也不难。", exampleVi: "Bài thi hôm nay không khó chút nào." },
    { id: 7, han: "太太", py: "tàitai", pos: "dt.", meaning: "bà (vợ, phu nhân)", example: "周太太每天都做饭。", exampleVi: "Bà Châu ngày nào cũng nấu cơm." },
    { id: 8, han: "秘书", py: "mìshū", pos: "dt.", meaning: "thư ký", example: "秘书说周经理出去了。", exampleVi: "Thư ký nói giám đốc Châu ra ngoài rồi." },
    { id: 9, han: "经理", py: "jīnglǐ", pos: "dt.", meaning: "giám đốc", example: "周经理出去了，不在办公室。", exampleVi: "Giám đốc Châu ra ngoài rồi, không có ở văn phòng." },
    { id: 10, han: "办公室", py: "bàngōngshì", pos: "dt.", meaning: "văn phòng", example: "他到了办公室我就告诉他。", exampleVi: "Anh ấy đến văn phòng là tôi báo ngay cho anh ấy." },
    { id: 11, han: "辆", py: "liàng", pos: "lượng.", meaning: "chiếc (lượng từ cho xe cộ)", example: "我出去叫辆出租车就行了。", exampleVi: "Em ra ngoài gọi một chiếc taxi là được rồi." },
    { id: 12, han: "楼", py: "lóu", pos: "dt.", meaning: "tòa nhà, lầu", example: "我上楼去给你拿把伞。", exampleVi: "Anh lên lầu lấy cho em cái ô." },
    { id: 13, han: "拿", py: "ná", pos: "đgt.", meaning: "cầm, lấy", example: "你在这儿等吧，我拿了伞就下来。", exampleVi: "Em đợi ở đây nhé, anh lấy ô xong là xuống ngay." },
    { id: 14, han: "把", py: "bǎ", pos: "lượng.", meaning: "cái, cây (lượng từ cho vật có cán, tay cầm)", example: "下雨了！去商店买一把伞吧。", exampleVi: "Mưa rồi! Ra cửa hàng mua một cái ô đi." },
    { id: 15, han: "伞", py: "sǎn", pos: "dt.", meaning: "ô (dù)", example: "下雨了！我没带伞，怎么办？", exampleVi: "Mưa rồi! Tôi không mang ô, làm sao bây giờ?" },
    { id: 16, han: "胖", py: "pàng", pos: "tt.", meaning: "béo, mập", example: "你看，我这么胖，怎么办呢？", exampleVi: "Anh xem, em béo thế này, làm sao bây giờ?" },
    { id: 17, han: "其实", py: "qíshí", pos: "p.", meaning: "thật ra", example: "其实我每天都运动。", exampleVi: "Thật ra ngày nào em cũng vận động." },
    { id: 18, han: "瘦", py: "shòu", pos: "tt.", meaning: "gầy, gầy còm", example: "但是你一点儿也没瘦！", exampleVi: "Nhưng em chẳng gầy đi chút nào!" },
    { id: 19, han: "周", py: "Zhōu", pos: "dt.", meaning: "Châu (họ)", example: "周经理什么时候回来？", exampleVi: "Giám đốc Châu khi nào quay về?" },
    { id: 20, han: "周明", py: "Zhōu Míng", pos: "dt.", meaning: "Châu Minh (tên người)", example: "请问周明在吗？", exampleVi: "Xin hỏi Châu Minh có ở đó không?" },
    { id: 21, han: "办公楼", py: "bàngōnglóu", pos: "dt.", meaning: "tòa nhà văn phòng (办公室 + 大楼)", example: "我们公司在那个办公楼的十层。", exampleVi: "Công ty chúng tôi ở tầng mười tòa nhà văn phòng đó.", group: "extended" },
    { id: 22, han: "外出", py: "wàichū", pos: "đgt.", meaning: "ra ngoài, đi vắng (外边 + 出去)", example: "经理外出办事了，下午回来。", exampleVi: "Giám đốc ra ngoài làm việc rồi, chiều về.", group: "extended" },
    { id: 23, han: "午觉", py: "wǔjiào", pos: "dt.", meaning: "giấc ngủ trưa (中午 + 睡觉)", example: "我每天中午都睡一个小时午觉。", exampleVi: "Trưa nào tôi cũng ngủ trưa một tiếng.", group: "extended" },
  ],

  text: {
    title: "课文 他什么时候回来？",
    paragraphs: [
      {
        heading: "课文一 · 下山的路上 (Trên đường xuống núi)",
        zh: "小丽：休息一下吧。\n小刚：怎么了？\n小丽：我现在腿也疼，脚也疼。\n小刚：好，那边树多，我们过去坐一下吧。\n小丽：上来的时候我怎么没觉得这么累？\n小刚：上山容易下山难，你不知道？",
        vi: "Tiểu Lệ: Nghỉ một chút đi.\nTiểu Cương: Sao thế?\nTiểu Lệ: Bây giờ em đau cả chân lẫn bàn chân.\nTiểu Cương: Được, bên kia nhiều cây, chúng ta qua đó ngồi một lát đi.\nTiểu Lệ: Lúc lên sao em không thấy mệt như thế này nhỉ?\nTiểu Cương: Lên núi dễ, xuống núi khó, em không biết à?",
        questions: ["小丽现在怎么了？", "他们为什么要过去坐一下？"],
      },
      {
        heading: "课文二 · 在打电话 (Đang gọi điện thoại)",
        zh: "周太太：喂，你好，请问周明在吗？\n秘书：周经理出去了，不在办公室。\n周太太：他去哪儿了？什么时候回来？\n秘书：他出去办事了，下午回来。\n周太太：回来了就让他给我打个电话。\n秘书：好的，他到了办公室我就告诉他。",
        vi: "Bà Châu: A lô, chào cô, xin hỏi Châu Minh có ở đó không?\nThư ký: Giám đốc Châu ra ngoài rồi, không có ở văn phòng.\nBà Châu: Anh ấy đi đâu? Khi nào quay về?\nThư ký: Anh ấy ra ngoài giải quyết công việc, chiều sẽ về.\nBà Châu: Về rồi thì bảo anh ấy gọi điện cho tôi nhé.\nThư ký: Vâng ạ, anh ấy đến văn phòng là tôi báo ngay.",
        questions: ["周经理去哪儿了？什么时候回来？", "周太太让秘书做什么？"],
      },
      {
        heading: "课文三 · 在楼门口送朋友 (Tiễn bạn ở trước cửa tòa nhà)",
        zh: "小刚：雨下得真大。你怎么回去？我送你吧。\n小丽：没事，我出去叫辆出租车就行了。\n小刚：那你等等，我上楼去给你拿把伞。\n小丽：好的。我跟你一起上去吧。\n小刚：你在这儿等吧，我拿了伞就下来。",
        vi: "Tiểu Cương: Mưa to thật. Em về bằng gì? Để anh đưa em về nhé.\nTiểu Lệ: Không sao, em ra ngoài gọi một chiếc taxi là được rồi.\nTiểu Cương: Vậy em đợi chút, anh lên lầu lấy cho em cái ô.\nTiểu Lệ: Được ạ. Em lên cùng anh nhé.\nTiểu Cương: Em đợi ở đây đi, anh lấy ô xong là xuống ngay.",
        questions: ["小丽怎么回去？", "小刚上楼去做什么？"],
      },
      {
        heading: "课文四 · 在家 (Ở nhà)",
        zh: "周太太：你看，我这么胖，怎么办呢？\n周明：你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？\n周太太：其实我每天都运动。\n周明：但是你一点儿也没瘦！你做什么运动了？\n周太太：做饭啊。",
        vi: "Bà Châu: Anh xem, em béo thế này, làm sao bây giờ?\nChâu Minh: Tối nào em cũng ăn cơm xong là đi ngủ, cũng chẳng ra ngoài đi dạo, sao mà không béo được?\nBà Châu: Thật ra ngày nào em cũng vận động.\nChâu Minh: Nhưng em chẳng gầy đi chút nào! Em tập môn gì vậy?\nBà Châu: Nấu cơm chứ sao.",
        questions: ["周太太为什么这么胖？", "周太太每天做运动吗？她做什么运动？"],
      },
    ],
    notes: [
      "周 (Zhōu): họ Châu; 周明 (Zhōu Míng): Châu Minh; 周太太: bà Châu (vợ ông Châu Minh).",
      "上山容易下山难: lên núi dễ, xuống núi khó.",
      "Tục ngữ – 饭后百步走，活到九十九 (Fàn hòu bǎi bù zǒu, huódào jiǔshíjiǔ): sau bữa ăn đi bộ trăm bước thì sống đến 99 tuổi; ý nói vận động nhẹ sau khi ăn rất tốt cho sức khỏe.",
    ],
  },

  grammar: [
    {
      word: "动词 + 来/去",
      title: "Bổ ngữ chỉ phương hướng đơn giản",
      usages: [
        {
          label: "Cách dùng",
          explain: "“Động từ + 来/去” chỉ phương hướng của hành động: 来 hướng về phía người nói, 去 hướng rời xa người nói. Động từ thường dùng: 上、下、进、出、回、过、起 và 买、带、搬…",
          examples: [
            "我们在楼上等你呢，你上来吧。（说话的人在楼上）",
            "谁在外边？你出去看看吧。（“你”在屋里）",
            "汉语书你带来了吗？",
            "那边树多，我们过去坐一下吧。",
          ],
        },
        {
          label: "Tân ngữ là nơi chốn",
          explain: "Nếu tân ngữ là danh từ chỉ nơi chốn thì phải đặt trước 来/去.",
          examples: ["小狗下楼来了。", "老师进教室来了。", "朋友回家去了。", "我上楼去。"],
        },
        {
          label: "Tân ngữ là sự vật",
          explain: "Nếu tân ngữ là danh từ chỉ sự vật thì có thể đặt trước hoặc sau 来/去.",
          examples: ["明天要带作业来。", "帮我买来点儿面包。", "你搬这把椅子去吧。", "这次旅游，我想带去这本书。"],
        },
      ],
      note: "Không nói *我上去楼 — phải nói 我上楼去.",
    },
    {
      word: "动词1 + 了……就 + 动词2",
      title: "Hai hành động xảy ra liên tiếp",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả hai hành động xảy ra liên tiếp, hành động thứ hai nối tiếp ngay sau hành động thứ nhất.",
          examples: ["我下了课就吃饭。", "妈妈起了床就做早饭。", "小刚拿了伞就下来。", "你每天晚上吃了饭就睡觉。"],
        },
        {
          label: "Câu có hai chủ ngữ",
          explain: "Nếu câu có hai chủ ngữ thì chủ ngữ thứ hai đặt trước 就.",
          examples: ["你下了课我们就去书店。", "老师进了教室我们就对她说“生日快乐”。", "爸爸回来了我们就吃饭。", "他到了办公室我就告诉他。"],
        },
      ],
    },
    {
      word: "能……吗？",
      title: "Câu hỏi tu từ 能……吗？",
      usages: [
        {
          label: "Cách dùng",
          explain: "能……吗 dùng trong câu hỏi tu từ: thành phần giữa 能 và 吗 ở dạng khẳng định thì mang nghĩa phủ định; ở dạng phủ định thì mang nghĩa khẳng định.",
          examples: [
            "A：为什么我的汉语学得不好？B：你不做作业，也不练习，能学好吗？（不能学好）",
            "A：你看我这么胖，怎么办呢？B：你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？（会胖）",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "这是你的___吗？真大！", options: ["楼", "办公室", "树", "胖"], answer: "办公室" },
    { sentence: "今天的考试一点儿也不___。", options: ["难", "楼", "树", "办公室"], answer: "难" },
    { sentence: "我在505教室上课，我现在要上___去。", options: ["树", "楼", "胖", "难"], answer: "楼" },
    { sentence: "你看，小狗在___下做什么呢？", options: ["楼", "办公室", "树", "难"], answer: "树" },
    { sentence: "我太___了，不能吃那么多饭。", options: ["难", "胖", "树", "楼"], answer: "胖" },
    { sentence: "A：你真爱看书，买了这么多！B：___我一点儿也不喜欢看书，这是给我弟弟买的。", options: ["辆", "腿", "把", "其实"], answer: "其实" },
    { sentence: "A：我想买这___车。B：太贵了，你有那么多钱吗？", options: ["辆", "把", "腿", "经理"], answer: "辆" },
    { sentence: "A：下雨了！我没带伞，怎么办？B：去商店买一___吧。", options: ["辆", "把", "经理", "其实"], answer: "把" },
    { sentence: "A：昨天走路走得太多了，左边这条___有点儿疼。B：那你今天别出去了。", options: ["经理", "辆", "腿", "把"], answer: "腿" },
    { sentence: "A：___，我今天想早一点儿回家，可以吗？B：今天不行，今天有很多工作要做。", options: ["经理", "其实", "腿", "辆"], answer: "经理" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [3, 4, 2] },
        { vocabId: 5, distractors: [6, 17, 2] },
        { vocabId: 8, distractors: [9, 7, 10] },
        { vocabId: 10, distractors: [12, 9, 8] },
        { vocabId: 11, distractors: [14, 13, 15] },
        { vocabId: 13, distractors: [14, 11, 12] },
        { vocabId: 16, distractors: [18, 2, 6] },
        { vocabId: 17, distractors: [5, 16, 9] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [1, 2, 5, 9, 12, 15, 16, 18],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["那边", "树多", "，", "我们", "过去", "坐一下吧", "。"], answer: "那边树多，我们过去坐一下吧。", vi: "Bên kia nhiều cây, chúng ta qua đó ngồi một lát đi." },
        { tokens: ["他", "到了", "办公室", "我", "就", "告诉他", "。"], answer: "他到了办公室我就告诉他。", vi: "Anh ấy đến văn phòng là tôi báo ngay cho anh ấy." },
        { tokens: ["我", "上楼去", "给你", "拿", "把伞", "。"], answer: "我上楼去给你拿把伞。", vi: "Tôi lên lầu lấy cho bạn cái ô." },
        { tokens: ["你", "每天晚上", "吃了饭", "就", "睡觉", "。"], answer: "你每天晚上吃了饭就睡觉。", vi: "Tối nào bạn cũng ăn cơm xong là đi ngủ." },
        { tokens: ["我", "出去", "叫", "辆", "出租车", "就行了", "。"], answer: "我出去叫辆出租车就行了。", vi: "Tôi ra ngoài gọi một chiếc taxi là được rồi." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Trên đường xuống núi", text: "小丽：我现在{{c1}}也{{c2}}，{{c3}}也疼。\n小刚：好，那边{{c4}}多，我们过去坐一下吧。\n小丽：上来的时候我怎么没觉得这么累？\n小刚：上山{{c5}}下山{{c6}}，你不知道？" },
        { title: "Bài khóa 2 · Đang gọi điện thoại", text: "周太太：喂，你好，请问周明在吗？\n秘书：周{{c7}}出去了，不在{{c8}}。\n周太太：他去哪儿了？什么时候{{c9}}？\n秘书：他出去办事了，下午回来。\n周太太：回来了{{c10}}让他给我打个电话。" },
      ],
      answers: { c1: "腿", c2: "疼", c3: "脚", c4: "树", c5: "容易", c6: "难", c7: "经理", c8: "办公室", c9: "回来", c10: "就" },
      bank: ["腿", "疼", "脚", "树", "容易", "难", "经理", "办公室", "回来", "就", "秘书", "楼", "胖"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào hai đoạn hội thoại.",
      passages: [
        { title: "Bài khóa 3 · Tiễn bạn trước tòa nhà", text: "小刚：雨下得真大。你怎么回去？我送你吧。\n小丽：没事，我出去叫{{e1}}出租车就行了。\n小刚：那你等等，我上{{e2}}去给你{{e3}}{{e4}}{{e5}}。\n小丽：好的。我跟你一起上去吧。\n小刚：你在这儿等吧，我拿了伞就{{e6}}。" },
        { title: "Bài khóa 4 · Ở nhà", text: "周太太：你看，我这么{{e7}}，怎么办呢？\n周明：你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？\n周太太：{{e8}}我每天都运动。\n周明：但是你一点儿也没{{e9}}！你做什么{{e10}}了？\n周太太：做饭啊。" },
      ],
      answers: { e1: "辆", e2: "楼", e3: "拿", e4: "把", e5: "伞", e6: "下来", e7: "胖", e8: "其实", e9: "瘦", e10: "运动" },
      bank: ["辆", "楼", "拿", "把", "伞", "下来", "胖", "其实", "瘦", "运动", "上去", "容易", "腿"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "上山容易下山难。", vi: "Lên núi dễ, xuống núi khó.", keywords: ["lên núi", "xuống núi", "khó"] },
        { zh: "周经理出去了，不在办公室。", vi: "Giám đốc Châu ra ngoài rồi, không có ở văn phòng.", keywords: ["giám đốc", "văn phòng"] },
        { zh: "他到了办公室我就告诉他。", vi: "Anh ấy đến văn phòng là tôi báo cho anh ấy ngay.", keywords: ["văn phòng", "báo"] },
        { zh: "其实我每天都运动。", vi: "Thật ra ngày nào tôi cũng vận động.", keywords: ["thật ra", "vận động"] },
        { zh: "你不做作业，也不练习，能学好吗？", vi: "Bạn không làm bài tập, cũng không luyện tập, sao mà học giỏi được?", keywords: ["bài tập", "luyện tập", "học"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Chúng tôi đang đợi bạn trên lầu, bạn lên đây đi.", answers: ["我们在楼上等你呢，你上来吧。", "我们在楼上等你，你上来吧。"] },
        { vi: "Tôi tan học xong là đi ăn cơm.", answers: ["我下了课就吃饭。", "我下了课就去吃饭。"] },
        { vi: "Thầy giáo vào lớp rồi.", answers: ["老师进教室来了。", "老师进教室了。"] },
        { vi: "Bố về rồi thì chúng ta ăn cơm.", answers: ["爸爸回来了我们就吃饭。"] },
        { vi: "Ngày mai phải mang bài tập đến.", answers: ["明天要带作业来。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小丽现在腿也疼，脚也疼。", a: true },
        { q: "小丽上山的时候也觉得很累。", a: false },
        { q: "周经理在办公室。", a: false },
        { q: "周经理下午回来。", a: true },
        { q: "小刚开车送小丽回去。", a: false },
        { q: "小刚上楼去给小丽拿伞。", a: true },
        { q: "周太太每天晚上吃了饭就出去走走。", a: false },
        { q: "周太太说的“运动”是做饭。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我现在腿也疼，脚也疼。",
        "他什么时候回来？",
        "我上楼去给你拿把伞。",
        "其实我每天都运动。",
        "你一点儿也没瘦！",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "你们家谁最忙？他/她每天做什么？ (Trong nhà bạn ai bận rộn nhất? Mỗi ngày người đó làm những gì?)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 2 (động từ + 来/去, 动词1 + 了……就 + 动词2, 能……吗).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["了就", "来", "去", "能不", "吗"],
      minGrammar: 2,
      sample: "我们家我爸爸最忙。他是一个公司的经理，每天早上起了床就去办公室。到了办公室他就开始工作，中午也不回来吃饭。晚上他回家来了，吃了饭就看电脑，十二点才睡觉。妈妈说他太累了，让他每天出去走走。其实爸爸也知道，这么忙，身体能好吗？",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: bổ ngữ phương hướng 来 / 去", points: 6,
      subtitle: "Chọn 来 hoặc 去 cho mỗi chỗ trống (chú ý vị trí người nói).",
      grammarWord: "来 / 去",
      options: ["来", "去"],
      items: [
        { q: "我们在楼上等你呢，你上___吧。", answers: ["来"] },
        { q: "谁在外边？你出___看看吧。", answers: ["去"] },
        { q: "汉语书你带___了吗？", answers: ["来"] },
        { q: "那边树多，我们过___坐一下吧。", answers: ["去"] },
        { q: "老师进教室___了。（说话的人在教室里）", answers: ["来"] },
        { q: "朋友回家___了。", answers: ["去"] },
        { q: "你怎么还没下___？我都在楼下等你半小时了。", answers: ["来"] },
        { q: "你在这儿等吧，我拿了伞就下___。", answers: ["来"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 动词1 + 了……就 + 动词2", points: 6,
      subtitle: "Điền từ còn thiếu (了 hoặc 就) vào chỗ trống.",
      grammarWord: "了 / 就",
      options: ["了", "就"],
      items: [
        { q: "我下了课___吃饭。", answers: ["就"] },
        { q: "妈妈起___床就做早饭。", answers: ["了"] },
        { q: "小刚拿了伞___下来。", answers: ["就"] },
        { q: "你下___课我们就去书店。", answers: ["了"] },
        { q: "爸爸回来了我们___吃饭。", answers: ["就"] },
        { q: "他到___办公室我就告诉他。", answers: ["了"] },
        { q: "我打算吃了晚饭___给妈妈打电话。", answers: ["就"] },
        { q: "你怎么到___家就睡觉？", answers: ["了"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: câu hỏi tu từ 能……吗？", points: 5,
      subtitle: "Hoàn thành câu hỏi tu từ: chọn 能 hoặc 能不.",
      grammarWord: "能……吗",
      options: ["能", "能不"],
      items: [
        { q: "你不做作业，也不练习，___学好吗？", answers: ["能"] },
        { q: "你每天晚上吃了饭就睡觉，也不出去走走，___胖吗？", answers: ["能不"] },
        { q: "你今天爬山爬得那么快，___累吗？", answers: ["能不"] },
        { q: "天气这么冷，你穿得这么少，___不生病吗？", answers: ["能"] },
        { q: "我每天都练习，___打得不好吗？", answers: ["能"] },
        { q: "我现在每天都运动，___不瘦吗？", answers: ["能"] },
        { q: "那么多工作，他___忙吗？", answers: ["能不"] },
        { q: "你一个人吃了这么多，___饱吗？", answers: ["能不"] },
      ],
    },
  ],
};
