import type { Lesson } from "../../_lesson/types";

// HSK标准教程3 · 第14课 你把水果拿过来。 (Cậu hãy mang trái cây đến đây.)
// Nguồn: Giáo trình chuẩn HSK3, trang 132–140 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson14: Lesson = {
  level: "hsk3",
  no: 14,
  slug: "bai-14",
  zh: "你把水果拿过来。",
  pinyin: "Nǐ bǎ shuǐguǒ ná guolai.",
  vi: "Cậu hãy mang trái cây đến đây.",
  en: "Bring the fruit over here.",
  topic: "家务 · Việc nhà, ngắm trăng, nấu ăn",
  durationMinutes: 45,

  goals: [
    "Nắm nghĩa và cách dùng 17 từ mới: 打扫、干净、然后、冰箱、洗澡、节目、月亮、像、盘子、刮风、叔叔、阿姨、故事、声音、菜单、简单、香蕉.",
    "Hiểu và dùng được 2 điểm ngữ pháp: câu chữ 把 (3) A 把 B + động từ + bổ ngữ kết quả/bổ ngữ phương hướng, cấu trúc trình tự 先……，再/又……，然后…….",
    "Đọc hiểu 3 đoạn hội thoại (dọn nhà đón khách, gọi điện lúc đang tắm, ngắm trăng nghe kể chuyện) và 1 đoạn văn hướng dẫn làm cơm trái cây.",
    "Sai bảo, nhờ vả bằng câu chữ 把; trình bày các bước làm một việc theo thứ tự.",
    "Từ mới ghép từ chữ cũ: 名单、读音、买单.",
  ],

  warmUp: [
    {
      zh: "给下面的词语选择对应的图片：菜单、盘子、电视节目、月亮、冰箱、香蕉",
      vi: "Chọn hình tương ứng với các từ: 菜单 (thực đơn), 盘子 (đĩa), 电视节目 (chương trình ti vi), 月亮 (mặt trăng), 冰箱 (tủ lạnh), 香蕉 (chuối).",
    },
    {
      zh: "说一说在下面的时间中，你会做的三件事：起床以后、睡觉以前、下课以后、考试以后、到家以后、吃饭以后",
      vi: "Nói ba việc bạn làm trong các thời điểm: sau khi dậy (vd. đánh răng, rửa mặt, ăn sáng), trước khi ngủ, sau khi tan học, sau khi thi, sau khi về nhà, sau khi ăn cơm.",
    },
  ],

  vocab: [
    { id: 1, han: "打扫", py: "dǎsǎo", pos: "đgt.", meaning: "quét dọn", example: "客人就要来了，你怎么还不打扫房间啊？", exampleVi: "Khách sắp đến rồi, sao anh vẫn chưa dọn phòng?" },
    { id: 2, han: "干净", py: "gānjìng", pos: "tt.", meaning: "sạch sẽ", example: "客人来的时候，他们会把房间打扫干净。", exampleVi: "Lúc khách đến, chúng sẽ dọn phòng sạch sẽ." },
    { id: 3, han: "然后", py: "ránhòu", pos: "liên.", meaning: "sau đó", example: "先把茶和杯子放好，然后把冰箱里的西瓜拿出来。", exampleVi: "Trước tiên bày trà và cốc, sau đó lấy dưa hấu trong tủ lạnh ra." },
    { id: 4, han: "冰箱", py: "bīngxiāng", pos: "dt.", meaning: "tủ lạnh", example: "把冰箱里的西瓜拿出来。", exampleVi: "Lấy dưa hấu trong tủ lạnh ra." },
    { id: 5, han: "洗澡", py: "xǐ zǎo", pos: "đgt.", meaning: "tắm, tắm rửa", example: "对不起，我刚洗了个澡，没听见。", exampleVi: "Xin lỗi, tôi vừa tắm nên không nghe thấy." },
    { id: 6, han: "节目", py: "jiémù", pos: "dt.", meaning: "chương trình (truyền hình)", example: "你先把电视节目看完吧。", exampleVi: "Cậu xem hết chương trình ti vi trước đi." },
    { id: 7, han: "月亮", py: "yuèliang", pos: "dt.", meaning: "mặt trăng", example: "今晚的月亮真漂亮。", exampleVi: "Trăng tối nay đẹp thật." },
    { id: 8, han: "像", py: "xiàng", pos: "đgt.", meaning: "giống", example: "今晚的月亮真漂亮，像白色的盘子一样。", exampleVi: "Trăng tối nay đẹp thật, giống như cái đĩa trắng." },
    { id: 9, han: "盘子", py: "pánzi", pos: "dt.", meaning: "đĩa, mâm", example: "我来做饭，你来洗盘子，怎么样？", exampleVi: "Tôi nấu cơm, bạn rửa đĩa, thế nào?" },
    { id: 10, han: "刮风", py: "guā fēng", pos: "đgt.", meaning: "nổi gió", example: "外边也不刮风，我们坐在外边吃东西吧。", exampleVi: "Bên ngoài cũng không có gió, chúng ta ngồi ngoài ăn uống đi." },
    { id: 11, han: "叔叔", py: "shūshu", pos: "dt.", meaning: "chú", example: "我们听叔叔阿姨讲他们年轻时候的故事。", exampleVi: "Chúng ta nghe chú dì kể chuyện thời trẻ của họ." },
    { id: 12, han: "阿姨", py: "āyí", pos: "dt.", meaning: "dì, cô", example: "叔叔阿姨都很热情。", exampleVi: "Chú dì đều rất nhiệt tình." },
    { id: 13, han: "故事", py: "gùshi", pos: "dt.", meaning: "truyện, câu chuyện", example: "每天晚上，爸爸都要给女儿讲一个故事。", exampleVi: "Tối nào bố cũng kể cho con gái một câu chuyện." },
    { id: 14, han: "声音", py: "shēngyīn", pos: "dt.", meaning: "âm thanh, tiếng", example: "你听外边的声音，一定是大山。", exampleVi: "Cậu nghe tiếng bên ngoài kìa, chắc chắn là Đại Sơn." },
    { id: 15, han: "菜单", py: "càidān", pos: "dt.", meaning: "thực đơn", example: "服务员，请拿菜单过来，我们点菜。", exampleVi: "Phục vụ ơi, mang thực đơn đến đây, chúng tôi gọi món." },
    { id: 16, han: "简单", py: "jiǎndān", pos: "tt.", meaning: "đơn giản", example: "其实做水果饭很简单。", exampleVi: "Thật ra làm cơm trái cây rất đơn giản." },
    { id: 17, han: "香蕉", py: "xiāngjiāo", pos: "dt.", meaning: "chuối tiêu, chuối", example: "我们买几斤香蕉吧，家里没有水果了。", exampleVi: "Chúng ta mua mấy cân chuối đi, nhà hết trái cây rồi." },
    { id: 18, han: "名单", py: "míngdān", pos: "dt.", meaning: "danh sách (名字 + 菜单)", example: "参加比赛的名单在黑板上。", exampleVi: "Danh sách tham gia thi đấu ở trên bảng.", group: "extended" },
    { id: 19, han: "读音", py: "dúyīn", pos: "dt.", meaning: "cách đọc, âm đọc (读 + 声音)", example: "这个字的读音是什么？", exampleVi: "Chữ này đọc thế nào?", group: "extended" },
    { id: 20, han: "买单", py: "mǎi dān", pos: "đgt.", meaning: "thanh toán (ở nhà hàng) (买 + 菜单)", example: "服务员，买单！", exampleVi: "Phục vụ ơi, thanh toán!", group: "extended" },
  ],

  text: {
    title: "课文 你把水果拿过来。",
    paragraphs: [
      {
        heading: "课文一 · 在家 (Ở nhà)",
        zh: "周太太：客人就要来了，你怎么还不打扫房间啊？\n周明：别着急，我让孩子们打扫呢，客人来的时候，他们会把房间打扫干净。\n周太太：那你也不能看电视啊。\n周明：你让我做什么？\n周太太：先把茶和杯子放好，然后把冰箱里的西瓜拿出来。\n周明：太热了，我还是先把空调打开吧。",
        vi: "Bà Châu: Khách sắp đến rồi, sao anh vẫn chưa dọn phòng?\nChâu Minh: Đừng sốt ruột, anh bảo bọn trẻ dọn rồi, lúc khách đến chúng sẽ dọn phòng sạch sẽ.\nBà Châu: Thế anh cũng không được xem ti vi chứ.\nChâu Minh: Em muốn anh làm gì?\nBà Châu: Trước tiên bày trà và cốc ra, sau đó lấy dưa hấu trong tủ lạnh ra.\nChâu Minh: Nóng quá, anh bật điều hòa trước đã.",
        questions: ["周明在做什么？", "周太太想让他做什么？"],
      },
      {
        heading: "课文二 · 在打电话 (Nói chuyện qua điện thoại)",
        zh: "同事：你在忙什么呢？刚才打你的手机你也不接。\n小刚：对不起，我刚洗了个澡，没听见。有什么事吗？\n同事：我想问问你公司里的一些事情。\n小刚：你先等一下，我去把电视关了。\n同事：没关系，你先把电视节目看完吧，然后再给我回电话。",
        vi: "Đồng nghiệp: Cậu đang bận gì thế? Vừa rồi gọi di động cậu cũng không nghe.\nTiểu Cương: Xin lỗi, tớ vừa tắm, không nghe thấy. Có việc gì vậy?\nĐồng nghiệp: Tớ muốn hỏi cậu vài chuyện ở công ty.\nTiểu Cương: Cậu đợi chút, tớ đi tắt ti vi đã.\nĐồng nghiệp: Không sao, cậu cứ xem hết chương trình ti vi đi, rồi gọi lại cho tớ sau.",
        questions: ["小刚为什么没接电话？", "同事为什么给小刚打电话？"],
      },
      {
        heading: "课文三 · 在小明家 (Tại nhà bạn Minh)",
        zh: "同学：今晚的月亮真漂亮，像白色的盘子一样。\n小明：是啊，外边也不刮风，我们坐在外边一边看月亮一边吃东西，怎么样？\n同学：好啊，我先把桌椅搬出去，然后你把水果拿过来，我们听叔叔阿姨讲他们年轻时候的故事。\n小明：太好了！记得给大山打个电话，让他马上过来。\n同学：不用打了，你听外边的声音，一定是大山。",
        vi: "Bạn học: Trăng tối nay đẹp thật, giống như cái đĩa trắng vậy.\nTiểu Minh: Ừ, bên ngoài cũng không có gió, chúng ta ngồi ngoài vừa ngắm trăng vừa ăn uống nhé?\nBạn học: Được, tớ bê bàn ghế ra trước, sau đó cậu mang trái cây ra đây, chúng ta nghe chú dì kể chuyện thời trẻ của họ.\nTiểu Minh: Tuyệt quá! Nhớ gọi điện cho Đại Sơn, bảo cậu ấy qua ngay.\nBạn học: Không cần gọi đâu, cậu nghe tiếng bên ngoài kìa, chắc chắn là Đại Sơn.",
        questions: ["小明和同学打算做什么？", "他们为什么不用给大山打电话？"],
      },
      {
        heading: "课文四 · 水果饭 (Cơm trái cây)",
        zh: "你吃过水果饭吗？你在饭馆儿的菜单上见过水果饭吗？你想学着做水果饭吗？其实做水果饭很简单，先把米饭做好，然后再把一块块新鲜的水果放进去，水果饭就做好了。你可以做苹果饭、香蕉饭，要是你愿意，还可以做西瓜饭。多吃新鲜水果对身体好。",
        vi: "Bạn đã ăn cơm trái cây bao giờ chưa? Bạn đã thấy món cơm trái cây trên thực đơn nhà hàng chưa? Bạn có muốn học làm cơm trái cây không? Thật ra làm cơm trái cây rất đơn giản, trước tiên nấu cơm cho chín, sau đó cho từng miếng trái cây tươi vào, thế là cơm trái cây đã xong. Bạn có thể làm cơm táo, cơm chuối, nếu bạn thích còn có thể làm cơm dưa hấu. Ăn nhiều trái cây tươi tốt cho sức khỏe.",
        questions: ["怎么做水果饭？", "为什么要多吃水果？"],
      },
    ],
    notes: [
      "像……一样: giống như… (像白色的盘子一样).",
      "一块块: từng miếng một (lượng từ lặp lại chỉ “từng…, mỗi…”).",
      "Tục ngữ – 先到先得 (Xiān dào xiān dé): người đến sớm sẽ được trước; khuyên làm việc phải tích cực, chủ động, chuẩn bị và bắt tay vào làm càng sớm càng tốt.",
    ],
  },

  grammar: [
    {
      word: "A 把 B + 动词 + 结果补语/趋向补语",
      title: "Câu chữ 把 (3)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả một hành động mang lại kết quả nào đó cho người/vật xác định (bổ ngữ kết quả: 干净、好、完…), hoặc làm thay đổi vị trí của nó (bổ ngữ phương hướng: 出来、过来、进去…).",
          examples: ["我把衣服洗干净了。", "妈妈还没把饭做好呢。", "请同学们把铅笔拿出来。", "你把水果拿过来。"],
        },
      ],
    },
    {
      word: "先……，再/又……，然后……",
      title: "Trình tự hành động: trước…, rồi…, sau đó…",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả trình tự của các hành động. 再 chỉ hành động chưa xảy ra; 又 chỉ hành động đã xảy ra.",
          examples: ["回家以后，我先做作业，然后吃饭。", "我先坐了一个小时公共汽车，又坐了一会儿地铁才到小刚家。", "你先把电视节目看完吧，然后再给我回电话。", "先把米饭做好，然后再把一块块新鲜的水果放进去。"],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "每天晚上，爸爸都要给女儿讲一个___。", options: ["节目", "故事", "菜单", "香蕉"], answer: "故事" },
    { sentence: "我来做饭，你来洗___，怎么样？", options: ["盘子", "节目", "故事", "菜单"], answer: "盘子" },
    { sentence: "我们买几斤___吧，家里没有水果了。", options: ["菜单", "盘子", "香蕉", "节目"], answer: "香蕉" },
    { sentence: "跟朋友一起喝着饮料看电视___，是最快乐的事。", options: ["香蕉", "节目", "盘子", "故事"], answer: "节目" },
    { sentence: "服务员，请拿___过来，我们点菜。", options: ["故事", "香蕉", "节目", "菜单"], answer: "菜单" },
    { sentence: "A：我们什么时候吃晚饭？B：先___完房间再吃。", options: ["打扫", "干净", "简单", "像"], answer: "打扫" },
    { sentence: "A：听！是谁在外边说话？B：没有___啊。", options: ["简单", "声音", "打扫", "干净"], answer: "声音" },
    { sentence: "A：你觉得洗衣服很___，可我觉得很难。B：那你觉得做什么不难呢？", options: ["像", "干净", "简单", "声音"], answer: "简单" },
    { sentence: "A：那么多衣服，终于洗完了！B：都洗___了吗？", options: ["干净", "像", "打扫", "声音"], answer: "干净" },
    { sentence: "A：这个地方真美！B：是啊，___画儿一样。", options: ["声音", "打扫", "像", "简单"], answer: "像" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 5, 10] },
        { vocabId: 2, distractors: [16, 1, 3] },
        { vocabId: 4, distractors: [9, 15, 17] },
        { vocabId: 6, distractors: [13, 14, 15] },
        { vocabId: 7, distractors: [8, 12, 10] },
        { vocabId: 13, distractors: [6, 14, 11] },
        { vocabId: 14, distractors: [13, 6, 16] },
        { vocabId: 16, distractors: [2, 15, 3] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 3, 4, 5, 7, 12, 15, 17],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["你", "把", "水果", "拿", "过来", "。"], answer: "你把水果拿过来。", vi: "Bạn mang trái cây đến đây." },
        { tokens: ["他们", "会", "把房间", "打扫", "干净", "。"], answer: "他们会把房间打扫干净。", vi: "Họ sẽ dọn phòng sạch sẽ." },
        { tokens: ["先", "把茶和杯子", "放好", "，", "然后", "把西瓜", "拿出来", "。"], answer: "先把茶和杯子放好，然后把西瓜拿出来。", vi: "Trước tiên bày trà và cốc, sau đó lấy dưa hấu ra." },
        { tokens: ["今晚的月亮", "像", "白色的盘子", "一样", "。"], answer: "今晚的月亮像白色的盘子一样。", vi: "Trăng tối nay giống như cái đĩa trắng." },
        { tokens: ["其实", "做水果饭", "很", "简单", "。"], answer: "其实做水果饭很简单。", vi: "Thật ra làm cơm trái cây rất đơn giản." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–2)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài khóa 1 · Dọn nhà đón khách", text: "周太太：客人就要来了，你怎么还不{{c1}}房间啊？\n周明：别着急，我让孩子们打扫呢，客人来的时候，他们会把房间打扫{{c2}}。\n周太太：{{c3}}把茶和杯子放好，{{c4}}把{{c5}}里的西瓜拿{{c6}}。" },
        { title: "Bài khóa 2 · Gọi điện", text: "小刚：对不起，我刚{{c7}}了个澡，没听见。有什么事吗？\n小刚：你先等一下，我去{{c8}}电视关了。\n同事：没关系，你先把电视{{c9}}看完吧，然后{{c10}}给我回电话。" },
      ],
      answers: { c1: "打扫", c2: "干净", c3: "先", c4: "然后", c5: "冰箱", c6: "出来", c7: "洗", c8: "把", c9: "节目", c10: "再" },
      bank: ["打扫", "干净", "先", "然后", "冰箱", "出来", "洗", "把", "节目", "再", "又", "过来", "盘子"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 3–4)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn hội thoại và đoạn văn.",
      passages: [
        { title: "Bài khóa 3 · Ngắm trăng", text: "同学：今晚的{{e1}}真漂亮，{{e2}}白色的{{e3}}一样。\n小明：是啊，外边也不{{e4}}，我们坐在外边一边看月亮一边吃东西，怎么样？\n同学：好啊，我先把桌椅搬出去，然后你把水果拿过来，我们听{{e5}}{{e6}}讲他们年轻时候的{{e7}}。\n同学：不用打了，你听外边的{{e8}}，一定是大山。" },
        { title: "Bài khóa 4 · Cơm trái cây", text: "你在饭馆儿的{{e9}}上见过水果饭吗？……其实做水果饭很{{e10}}，先把米饭做好，然后再把一块块新鲜的水果放进去，水果饭就做好了。" },
      ],
      answers: { e1: "月亮", e2: "像", e3: "盘子", e4: "刮风", e5: "叔叔", e6: "阿姨", e7: "故事", e8: "声音", e9: "菜单", e10: "简单" },
      bank: ["月亮", "像", "盘子", "刮风", "叔叔", "阿姨", "故事", "声音", "菜单", "简单", "节目", "香蕉", "干净"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我把衣服洗干净了。", vi: "Tôi giặt quần áo sạch sẽ rồi.", keywords: ["quần áo", "sạch"] },
        { zh: "请同学们把铅笔拿出来。", vi: "Mời các em lấy bút chì ra.", keywords: ["bút chì", "lấy", "ra"] },
        { zh: "回家以后，我先做作业，然后吃饭。", vi: "Sau khi về nhà, tôi làm bài tập trước, sau đó ăn cơm.", keywords: ["về nhà", "bài tập", "sau đó", "ăn cơm"] },
        { zh: "我刚洗了个澡，没听见。", vi: "Tôi vừa tắm, không nghe thấy.", keywords: ["tắm", "không nghe thấy"] },
        { zh: "多吃新鲜水果对身体好。", vi: "Ăn nhiều trái cây tươi tốt cho sức khỏe.", keywords: ["trái cây", "tươi", "sức khỏe"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Mẹ vẫn chưa nấu xong cơm.", answers: ["妈妈还没把饭做好呢。", "妈妈还没把饭做好。"] },
        { vi: "Tôi đi tắt ti vi.", answers: ["我去把电视关了。", "我去把电视关上。"] },
        { vi: "Bạn bật điều hòa lên đi.", answers: ["你把空调打开吧。", "你把空调打开。"] },
        { vi: "Phục vụ ơi, mang thực đơn đến đây.", answers: ["服务员，请拿菜单过来。", "服务员，请把菜单拿过来。", "服务员，把菜单拿过来。"] },
        { vi: "Tôi đi xe buýt một tiếng, lại đi tàu điện ngầm một lúc mới đến.", answers: ["我坐了一个小时公共汽车，又坐了一会儿地铁才到。", "我先坐了一个小时公共汽车，又坐了一会儿地铁才到。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "周明让孩子们打扫房间。", a: true },
        { q: "周太太让周明把冰箱里的西瓜拿出来。", a: true },
        { q: "小刚没接电话，因为他在睡觉。", a: false },
        { q: "同事让小刚马上回电话。", a: false },
        { q: "今晚外边刮大风。", a: false },
        { q: "他们想听叔叔阿姨讲故事。", a: true },
        { q: "做水果饭很难。", a: false },
        { q: "做水果饭要先把米饭做好。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "你把水果拿过来。",
        "他们会把房间打扫干净。",
        "我刚洗了个澡。",
        "今晚的月亮真漂亮。",
        "其实做水果饭很简单。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "介绍一个你会做的菜或者饮料，说说怎么做。 (Giới thiệu một món ăn hoặc đồ uống bạn biết làm, nói cách làm.)",
      requirement: "Yêu cầu: viết ít nhất 60 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 14 (câu chữ 把 + bổ ngữ, 先……再……然后……).",
      minChars: 60,
      minVocab: 5,
      grammarMarkers: ["把", "先", "再", "然后", "又"],
      minGrammar: 2,
      sample: "我会做香蕉牛奶，很简单。先把两个香蕉从冰箱里拿出来，把它们洗干净，然后切成一块块的。再把香蕉和一杯牛奶放进去，打两分钟，香蕉牛奶就做好了。最后把它放在白色的盘子上，拿过去给家人喝。我的叔叔阿姨都很喜欢喝我做的香蕉牛奶。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 把 + động từ + bổ ngữ", points: 6,
      subtitle: "Chọn bổ ngữ kết quả/phương hướng thích hợp cho câu chữ 把.",
      grammarWord: "把……补语",
      options: ["干净", "好", "出来", "过来", "完", "进去"],
      items: [
        { q: "我把衣服洗___了。", answers: ["干净"] },
        { q: "妈妈还没把饭做___呢。", answers: ["好"] },
        { q: "请同学们把铅笔拿___。", answers: ["出来"] },
        { q: "你把水果拿___。", answers: ["过来"] },
        { q: "你先把电视节目看___吧。", answers: ["完"] },
        { q: "再把一块块新鲜的水果放___。", answers: ["进去"] },
        { q: "他们会把房间打扫___。", answers: ["干净"] },
        { q: "先把茶和杯子放___。", answers: ["好"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 先 / 再 / 又 / 然后", points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống.",
      grammarWord: "先……再/又……然后……",
      options: ["先", "再", "又", "然后"],
      items: [
        { q: "回家以后，我___做作业，然后吃饭。", answers: ["先"] },
        { q: "我先坐了一个小时公共汽车，___坐了一会儿地铁才到小刚家。", answers: ["又"] },
        { q: "你先把电视节目看完吧，然后___给我回电话。", answers: ["再"] },
        { q: "先把米饭做好，___再把水果放进去。", answers: ["然后"] },
        { q: "我___把桌椅搬出去，然后你把水果拿过来。", answers: ["先"] },
        { q: "我们先去吃饭，___去看电影吧。", answers: ["再", "然后"] },
        { q: "昨天我先去了超市，___去了图书馆。", answers: ["又", "然后"] },
        { q: "下课以后，我先去锻炼，___回家。", answers: ["然后", "再"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 像……一样", points: 5,
      subtitle: "Chọn 像 hoặc 一样 cho mỗi chỗ trống.",
      grammarWord: "像……一样",
      options: ["像", "一样"],
      items: [
        { q: "今晚的月亮真漂亮，___白色的盘子一样。", answers: ["像"] },
        { q: "这个地方真美，像画儿___。", answers: ["一样"] },
        { q: "她的汉语说得___中国人一样好。", answers: ["像"] },
        { q: "你的眼睛像大熊猫___。", answers: ["一样"] },
        { q: "儿子长得很___爸爸。", answers: ["像"] },
        { q: "这个孩子像大人___，很会照顾自己。", answers: ["一样"] },
        { q: "她的声音___她妈妈的一样好听。", answers: ["像"] },
        { q: "今天热得像夏天___。", answers: ["一样"] },
      ],
    },
  ],
};
