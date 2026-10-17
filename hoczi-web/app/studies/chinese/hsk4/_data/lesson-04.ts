import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第4课 不要太着急赚钱 (Đừng quá nôn nóng kiếm tiền)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 48–59 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm,
// nghĩa từ mở rộng và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["完全", "责任", "顺利", "按时", "不得不"];
const W_EX2 = ["提前", "一切", "积累", "提醒", "保证"];

export const lesson04: Lesson = {
  level: "hsk4",
  no: 4,
  slug: "bai-4",
  zh: "不要太着急赚钱",
  pinyin: "Búyào tài zháojí zhuàn qián",
  vi: "Đừng quá nôn nóng kiếm tiền",
  en: "Don't Be Too Eager to Make Money",
  topic: "工作态度 · Thái độ với công việc",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 以为、完全、赚、调查、计划、提前、保证、提醒、生意、积累、经验、按照、成功、顺利、感谢、奖金、工资、知识、不得不、甚至、责任…",
    "Nắm 5 điểm ngữ pháp: 以为 (tưởng là – trái với sự thật); 原来 (danh từ / tính từ / phó từ) và phân biệt 原来 – 本来; phó từ 并 nhấn mạnh phủ định; giới từ 按照; 甚至.",
    "Đọc hiểu 5 bài khóa về đổi việc, lập kế hoạch, làm ăn, tổng kết công việc và tinh thần trách nhiệm; thuật lại bằng từ vựng đã học.",
    "Trao đổi về thái độ đối với công việc, viết đoạn văn kể mình sẽ làm gì khi có công việc mới khác chuyên ngành.",
    "Nắm các từ mở rộng có chữ 法: 办法、法律、方法.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片：感谢、谈生意、知识、按时、赚钱、手忙脚乱。", vi: "Chọn hình tương ứng với các từ: 感谢 (cảm ơn), 谈生意 (bàn chuyện làm ăn), 知识 (kiến thức), 按时 (đúng hạn), 赚钱 (kiếm tiền), 手忙脚乱 (luống cuống tay chân)." },
    { zh: "你觉得下面四种工作哪个最容易完成？哪个最难？说说为什么。① 用一个星期的时间调查1000个人换工作的原因。② 一个人用一天时间写一份公司全年的工作计划。③ 每天提前半个小时到公司。④ 用一个月时间把自己的工作经验教给新来的同事。", vi: "Theo bạn, trong bốn công việc sau, việc nào dễ hoàn thành nhất, việc nào khó nhất? Hãy giải thích. ① Trong một tuần điều tra lý do đổi việc của 1000 người. ② Một mình viết bản kế hoạch công việc cả năm của công ty trong một ngày. ③ Mỗi ngày đến công ty sớm nửa tiếng. ④ Trong một tháng truyền lại kinh nghiệm làm việc của mình cho đồng nghiệp mới." },
  ],

  vocab: [
    { id: 1, han: "提", py: "tí", pos: "đgt.", meaning: "nhắc đến", example: "别提了！我以为新工作比以前的好。", exampleVi: "Đừng nhắc nữa! Tôi tưởng công việc mới tốt hơn trước." },
    { id: 2, han: "以为", py: "yǐwéi", pos: "đgt.", meaning: "cho rằng, tưởng là", example: "我以为新工作比以前的好，没想到还没有以前好呢。", exampleVi: "Tôi tưởng công việc mới tốt hơn trước, không ngờ còn không bằng trước." },
    { id: 3, han: "份", py: "fèn", pos: "lượng.", meaning: "(dùng cho công việc, báo chí…) tờ, bản", example: "上次那份工作你只做了两个月就离开了。", exampleVi: "Công việc lần trước cậu chỉ làm hai tháng là bỏ." },
    { id: 4, han: "完全", py: "wánquán", pos: "p.", meaning: "hoàn toàn", example: "完全适应一个新的工作需要一年时间。", exampleVi: "Thích nghi hoàn toàn với một công việc mới cần một năm." },
    { id: 5, han: "赚", py: "zhuàn", pos: "đgt.", meaning: "kiếm (tiền)", example: "你才到新公司，不要太急着赚钱。", exampleVi: "Cậu mới đến công ty mới, đừng quá vội kiếm tiền." },
    { id: 6, han: "调查", py: "diàochá", pos: "đgt.", meaning: "điều tra, khảo sát", example: "那份调查还要多长时间才能做完？", exampleVi: "Bản khảo sát đó còn bao lâu nữa mới làm xong?" },
    { id: 7, han: "原来", py: "yuánlái", pos: "tt.", meaning: "ban đầu", example: "按原来的计划应该是两周。", exampleVi: "Theo kế hoạch ban đầu thì phải hai tuần." },
    { id: 8, han: "计划", py: "jìhuà", pos: "dt./đgt.", meaning: "kế hoạch; vạch kế hoạch", example: "我们今年的工作都已经按照计划完成了。", exampleVi: "Công việc năm nay của chúng ta đều đã hoàn thành theo kế hoạch." },
    { id: 9, han: "提前", py: "tíqián", pos: "đgt.", meaning: "làm việc gì đó sớm hơn quy định / trước thời hạn", example: "但是我们可以提前完成，周末保证做完。", exampleVi: "Nhưng chúng tôi có thể hoàn thành trước thời hạn, cuối tuần đảm bảo làm xong." },
    { id: 10, han: "保证", py: "bǎozhèng", pos: "đgt.", meaning: "cam đoan, bảo đảm", example: "您放心，我保证明天9点前给您。", exampleVi: "Anh yên tâm, tôi đảm bảo trước 9 giờ sáng mai sẽ gửi anh." },
    { id: 11, han: "提醒", py: "tíxǐng", pos: "đgt.", meaning: "nhắc nhở", example: "我把当天计划要做的事情写在笔记本上，提醒自己安排好时间。", exampleVi: "Tôi ghi những việc định làm trong ngày vào sổ, nhắc mình sắp xếp thời gian cho tốt." },
    { id: 12, han: "乱", py: "luàn", pos: "tt.", meaning: "lộn xộn, lúng túng", example: "这样我就不会手忙脚乱了。", exampleVi: "Như vậy tôi sẽ không bị luống cuống nữa." },
    { id: 13, han: "王", py: "Wáng", pos: "dt. riêng", meaning: "Vương (họ)", example: "王经理和小李在说工作。", exampleVi: "Giám đốc Vương và Tiểu Lý đang nói chuyện công việc." },
    { id: 14, han: "生意", py: "shēngyi", pos: "dt.", meaning: "việc kinh doanh, buôn bán", example: "我们和上次那个公司的生意终于谈成了。", exampleVi: "Vụ làm ăn với công ty lần trước cuối cùng chúng tôi đã bàn xong." },
    { id: 15, han: "谈", py: "tán", pos: "đgt.", meaning: "nói chuyện, thảo luận", example: "这笔生意终于谈成了。", exampleVi: "Vụ làm ăn này cuối cùng đã đàm phán thành công." },
    { id: 16, han: "并", py: "bìng", pos: "p.", meaning: "(dùng trước từ phủ định để nhấn mạnh) hoàn toàn (không)", example: "我原来以为做生意很简单，后来才发现其实并不容易。", exampleVi: "Trước tôi tưởng làm ăn rất đơn giản, sau mới phát hiện thật ra chẳng dễ chút nào." },
    { id: 17, han: "积累", py: "jīlěi", pos: "đgt.", meaning: "tích lũy", example: "万事开头难，重要的是要多积累经验。", exampleVi: "Vạn sự khởi đầu nan, quan trọng là phải tích lũy nhiều kinh nghiệm." },
    { id: 18, han: "经验", py: "jīngyàn", pos: "dt.", meaning: "kinh nghiệm", example: "这让我积累了很多工作经验。", exampleVi: "Điều này giúp tôi tích lũy được nhiều kinh nghiệm làm việc." },
    { id: 19, han: "一切", py: "yíqiè", pos: "dt.", meaning: "tất cả", example: "公司的生意会越做越大，一切都会好的。", exampleVi: "Việc làm ăn của công ty sẽ ngày càng phát triển, mọi thứ rồi sẽ ổn." },
    { id: 20, han: "按照", py: "ànzhào", pos: "gt.", meaning: "theo", example: "我们今年的工作都已经按照计划完成了。", exampleVi: "Công việc năm nay của chúng ta đều đã hoàn thành theo kế hoạch." },
    { id: 21, han: "成功", py: "chénggōng", pos: "tt.", meaning: "thành công", example: "我们成功地解决了问题。", exampleVi: "Chúng ta đã giải quyết vấn đề thành công." },
    { id: 22, han: "顺利", py: "shùnlì", pos: "tt.", meaning: "thuận lợi, suôn sẻ", example: "我们顺利地完成了工作。", exampleVi: "Chúng ta đã hoàn thành công việc một cách suôn sẻ." },
    { id: 23, han: "感谢", py: "gǎnxiè", pos: "đgt.", meaning: "cảm ơn", example: "非常感谢大家对我的帮助！", exampleVi: "Vô cùng cảm ơn mọi người đã giúp đỡ tôi!" },
    { id: 24, han: "消息", py: "xiāoxi", pos: "dt.", meaning: "tin tức", example: "马经理让我告诉大家一个好消息。", exampleVi: "Giám đốc Mã nhờ tôi báo cho mọi người một tin vui." },
    { id: 25, han: "按时", py: "ànshí", pos: "p.", meaning: "đúng hạn", example: "因为大家按时完成了工作，公司决定给每人多发三千元奖金。", exampleVi: "Vì mọi người hoàn thành công việc đúng hạn, công ty quyết định thưởng thêm mỗi người ba nghìn tệ." },
    { id: 26, han: "奖金", py: "jiǎngjīn", pos: "dt.", meaning: "tiền thưởng", example: "公司决定这个月给每人多发三千元奖金。", exampleVi: "Công ty quyết định tháng này thưởng thêm mỗi người ba nghìn tệ." },
    { id: 27, han: "工资", py: "gōngzī", pos: "dt.", meaning: "tiền lương", example: "不要眼睛里只有工资和奖金。", exampleVi: "Đừng chỉ chăm chăm nhìn vào tiền lương và tiền thưởng." },
    { id: 28, han: "方法", py: "fāngfǎ", pos: "dt.", meaning: "phương pháp, cách thức", example: "重要的是学习与同事交流的方法。", exampleVi: "Quan trọng là học cách giao tiếp với đồng nghiệp." },
    { id: 29, han: "知识", py: "zhīshi", pos: "dt.", meaning: "kiến thức", example: "积累专业知识比收入重要多了。", exampleVi: "Tích lũy kiến thức chuyên môn quan trọng hơn thu nhập nhiều." },
    { id: 30, han: "不得不", py: "bù dé bù", pos: "p.", meaning: "phải, không thể không", example: "很多时候，我们不得不去做一些自己不愿意做的工作。", exampleVi: "Nhiều khi chúng ta buộc phải làm những công việc mình không muốn làm." },
    { id: 31, han: "甚至", py: "shènzhì", pos: "liên.", meaning: "thậm chí", example: "我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。", exampleVi: "Chúng ta buộc phải làm những công việc mình không muốn làm, thậm chí rất không thích." },
    { id: 32, han: "责任", py: "zérèn", pos: "dt.", meaning: "trách nhiệm", example: "这时，我们最需要的就是对工作的责任心。", exampleVi: "Lúc này, điều chúng ta cần nhất chính là tinh thần trách nhiệm với công việc." },
    { id: 33, han: "办法", py: "bànfǎ", pos: "dt.", meaning: "cách, biện pháp", example: "要想完全解决这个难题，还需要找更好的办法。", exampleVi: "Muốn giải quyết triệt để vấn đề khó này, còn cần tìm cách tốt hơn.", group: "extended" },
    { id: 34, han: "法律", py: "fǎlǜ", pos: "dt.", meaning: "pháp luật", example: "我希望能够用法律来帮助别人，所以上大学的时候，我选择了法律专业。", exampleVi: "Tôi mong có thể dùng pháp luật để giúp người khác, nên khi vào đại học tôi đã chọn ngành luật.", group: "extended" },
  ],

  text: {
    title: "课文 不要太着急赚钱",
    paragraphs: [
      {
        heading: "课文一 · 小林和小李聊小李的工作",
        zh: "小林：听说你又换工作了？今年已经换了三次工作了吧？\n小李：别提了！我以为新工作比以前的好，没想到还没有以前好呢。\n小林：上次那份工作你只做了两个月就离开了，其实，完全适应一个新的工作需要一年时间，所以，经常换工作不一定好。\n小李：我也明白。但是那份工作的收入太少了！\n小林：你才到新公司，不要太急着赚钱，多学习才是最重要的。\n小李：好。我一定会努力把现在这份工作做好。",
        vi: "Tiểu Lâm: Nghe nói cậu lại đổi việc à? Năm nay đổi việc ba lần rồi nhỉ?\nTiểu Lý: Đừng nhắc nữa! Mình tưởng công việc mới tốt hơn trước, không ngờ còn không bằng trước.\nTiểu Lâm: Công việc lần trước cậu chỉ làm hai tháng là bỏ. Thật ra, để thích nghi hoàn toàn với một công việc mới cần một năm, nên thường xuyên đổi việc chưa chắc đã tốt.\nTiểu Lý: Mình cũng hiểu. Nhưng thu nhập của công việc đó thấp quá!\nTiểu Lâm: Cậu mới đến công ty mới, đừng quá vội kiếm tiền, học hỏi nhiều mới là quan trọng nhất.\nTiểu Lý: Được. Mình nhất định sẽ cố gắng làm tốt công việc hiện tại.",
        questions: ["你觉得小李为什么总是换工作？", "“如果认为新工作不适合你，就应该马上换。”这句话对吗？为什么？"],
      },
      {
        heading: "课文二 · 王经理和小李在说工作",
        zh: "王经理：那份调查还要多长时间才能做完？\n小李：按原来的计划应该是两周，但是我们可以提前完成，周末保证做完。\n王经理：虽然最近工作很忙，但你们也要注意身体啊。\n小李：谢谢您！现在有很多事情等着我做，真不知道该先做哪个好。\n王经理：每天早上我都把当天计划要做的事情写在笔记本上，提醒自己安排好时间。你也可以试试这样做。\n小李：这个办法真不错！这样我就不会手忙脚乱了。",
        vi: "Giám đốc Vương: Bản khảo sát đó còn bao lâu nữa mới làm xong?\nTiểu Lý: Theo kế hoạch ban đầu thì phải hai tuần, nhưng chúng tôi có thể hoàn thành sớm, cuối tuần đảm bảo làm xong.\nGiám đốc Vương: Dù dạo này công việc rất bận, các cậu cũng phải chú ý sức khỏe nhé.\nTiểu Lý: Cảm ơn anh! Bây giờ có rất nhiều việc đang chờ tôi làm, thật không biết nên làm việc nào trước.\nGiám đốc Vương: Sáng nào tôi cũng ghi những việc định làm trong ngày vào sổ, nhắc mình sắp xếp thời gian cho tốt. Cậu cũng có thể thử làm như vậy.\nTiểu Lý: Cách này hay thật! Như vậy tôi sẽ không bị luống cuống nữa.",
        questions: ["那份调查的完成时间有什么变化？最晚什么时候可以完成？", "每天把计划要做的事情记下来有什么好处？"],
      },
      {
        heading: "课文三 · 王经理和马经理在说工作",
        zh: "王经理：什么事让你这么高兴啊？\n马经理：我们和上次那个公司的生意终于谈成了。\n王经理：太好了！你工作那么努力，公司会越来越好的。\n马经理：我原来以为做生意很简单，后来才发现其实并不容易，现在赚钱越来越难了。\n王经理：慢慢来，万事开头难，重要的是要多积累经验。\n马经理：我相信经过我们大家的努力，公司的生意会越做越大，一切都会好的。",
        vi: "Giám đốc Vương: Chuyện gì khiến anh vui thế?\nGiám đốc Mã: Vụ làm ăn với công ty lần trước cuối cùng chúng tôi đã bàn xong rồi.\nGiám đốc Vương: Tốt quá! Anh làm việc chăm chỉ như vậy, công ty sẽ ngày càng tốt lên.\nGiám đốc Mã: Trước đây tôi tưởng làm ăn rất đơn giản, sau mới phát hiện thật ra chẳng dễ chút nào, bây giờ kiếm tiền ngày càng khó.\nGiám đốc Vương: Cứ từ từ, vạn sự khởi đầu nan, quan trọng là phải tích lũy nhiều kinh nghiệm.\nGiám đốc Mã: Tôi tin rằng qua sự nỗ lực của tất cả chúng ta, việc làm ăn của công ty sẽ ngày càng lớn, mọi thứ rồi sẽ ổn.",
        questions: ["马经理觉得做生意容易吗？为什么？", "“万事开头难”是什么意思？你会在什么时候用这句话？"],
      },
      {
        heading: "课文四 · 年终总结",
        zh: "我们今年的工作都已经按照计划完成了。这一段时间，尽管工作很紧张，中间也遇到了很多困难，但是因为有大家的努力，我们成功地解决了问题，顺利地完成了工作，非常感谢大家对我的帮助！另外，马经理让我告诉大家一个好消息，因为大家按时完成了工作，公司决定这个月给每人多发三千元奖金。感谢大家这三个多月的努力工作，希望明年能有更大的成绩！",
        vi: "Công việc năm nay của chúng ta đều đã hoàn thành theo kế hoạch. Thời gian qua, tuy công việc rất căng thẳng, giữa chừng cũng gặp nhiều khó khăn, nhưng nhờ sự nỗ lực của mọi người, chúng ta đã giải quyết vấn đề thành công, hoàn thành công việc suôn sẻ, vô cùng cảm ơn mọi người đã giúp đỡ tôi! Ngoài ra, giám đốc Mã nhờ tôi báo cho mọi người một tin vui: vì mọi người đã hoàn thành công việc đúng hạn, công ty quyết định tháng này thưởng thêm cho mỗi người ba nghìn tệ. Cảm ơn mọi người đã làm việc chăm chỉ trong hơn ba tháng qua, mong rằng năm sau chúng ta sẽ đạt thành tích lớn hơn!",
        questions: ["他们今年工作的完成情况怎么样？", "公司用什么方法来感谢大家的努力工作？"],
      },
      {
        heading: "课文五 · 对工作的责任心",
        zh: "年轻人刚开始工作的时候，不要太急着赚钱，不要眼睛里只有工资和奖金。在工作的前几年，重要的是丰富自己的工作经验，学习与同事交流的方法，积累专业知识，这些比收入重要多了。但是很多时候，我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。这时，我们最需要的就是对工作的责任心。一个人即使能力再高，经验再丰富，如果对工作没有责任心，也很难把工作做好。",
        vi: "Khi người trẻ mới bắt đầu đi làm, đừng quá vội kiếm tiền, đừng chỉ chăm chăm nhìn vào tiền lương và tiền thưởng. Trong mấy năm đầu đi làm, quan trọng là làm phong phú kinh nghiệm làm việc của mình, học cách giao tiếp với đồng nghiệp, tích lũy kiến thức chuyên môn – những điều này quan trọng hơn thu nhập nhiều. Nhưng nhiều khi, chúng ta buộc phải làm những công việc mình không muốn làm, thậm chí là rất không thích. Lúc này, điều chúng ta cần nhất chính là tinh thần trách nhiệm với công việc. Một người dù năng lực có cao đến đâu, kinh nghiệm có phong phú đến đâu, nếu không có trách nhiệm với công việc thì cũng rất khó làm tốt công việc.",
        questions: ["刚开始工作的时候，什么最重要？", "我们遇到不愿意做的工作时应该怎么办？"],
      },
    ],
    notes: [
      "小林 (Xiǎo Lín): Tiểu Lâm. 小李 (Xiǎo Lǐ): Tiểu Lý. 王经理 (Wáng jīnglǐ): giám đốc Vương. 马经理 (Mǎ jīnglǐ): giám đốc Mã.",
      "手忙脚乱 (shǒumáng-jiǎoluàn): luống cuống tay chân. 万事开头难: vạn sự khởi đầu nan.",
      "Văn hóa – 授人以鱼不如授人以渔 (Cho con cá không bằng dạy cách bắt cá): truyền dạy phương pháp học kiến thức, làm ra của cải tốt hơn trao sẵn kiến thức hay của cải. Trong công việc, khi người khác gặp khó khăn, cách tốt nhất không phải làm thay mà là hướng dẫn họ cách giải quyết vấn đề.",
    ],
  },

  grammar: [
    {
      word: "以为",
      title: "Động từ “tưởng là” (trái với sự thật)",
      usages: [
        {
          label: "Cách dùng",
          explain: "以为 thường được dùng để chỉ điều người nói cho là đúng nhưng thực tế không phải vậy.",
          examples: [
            "她汉语说得那么好，我还以为她是中国人。",
            "马克以为今天是星期一，到了学校一看，没人来上课，才发现今天是星期天。",
            "我以为新工作比以前的好，没想到还没有以前好呢。",
          ],
        },
      ],
    },
    {
      word: "原来",
      title: "Danh từ / tính từ / phó từ “ban đầu, trước đây; hóa ra”",
      usages: [
        { label: "Danh từ", explain: "Nghĩa là “ban đầu, trước đây” (= 开始的时候、从前); tình huống ở vế sau khác với trước đây.", examples: ["坐火车从北京到上海，原来最快差不多需要12个小时，现在有了高铁，5个小时就能到。"] },
        { label: "Tính từ", explain: "Nghĩa là “đầu tiên, không thay đổi”; không thể đứng một mình làm vị ngữ, khi bổ nghĩa cho danh từ phải có 的.", examples: ["按原来的计划应该是两周，但是我们可以提前完成。"] },
        { label: "Phó từ – thời kỳ trước", explain: "Chỉ một khoảng thời gian trước đây, hàm ý hiện giờ không còn như trước.", examples: ["她原来是汉语老师，现在已经成了一名律师。"] },
        { label: "Phó từ – “hóa ra”", explain: "Chỉ việc phát hiện ra tình huống mà trước đây không biết; đứng trước hoặc sau chủ ngữ đều được.", examples: ["马克一直等李明回电话，可是电话一晚上都没来，原来李明把马克的电话号码记错了。"] },
      ],
      note: "比一比 原来 – 本来: Giống: ① đều làm tính từ nghĩa “ban đầu, không thay đổi” (这是它原来/本来的颜色，不过现在已经穿了好几年，颜色都变了。); ② đều làm phó từ chỉ tình hình trước đây khác hiện nay (我家原来/本来住这儿附近，不过这里以前不像现在有这么多楼房。). Khác: 原来 làm phó từ còn nghĩa “hóa ra” – phát hiện điều trước đây không biết (我还以为是谁帮我打扫房间呢，原来是你啊！); 本来 làm phó từ còn nghĩa “lẽ ra phải như vậy” (这本书本来应该昨天还给你，真不好意思。).",
    },
    {
      word: "并",
      title: "Phó từ 并 – nhấn mạnh phủ định",
      usages: [
        {
          label: "Cách dùng",
          explain: "并 đặt trước từ phủ định 不/没(有) để nhấn mạnh ngữ khí phủ định; thường dùng trong câu chuyển ý nhằm phủ định một quan điểm nào đó và nói rõ tình hình thực tế.",
          examples: [
            "其实，人们将来做什么工作可能和上学学的专业并没有太大关系。",
            "我原来以为做生意很简单，后来才发现其实并不容易。",
            "根据调查，人每天晚上最少应该睡7个小时，但是这并不适合每一个人。",
          ],
        },
      ],
    },
    {
      word: "按照",
      title: "Giới từ “theo, dựa vào, căn cứ vào”",
      usages: [
        {
          label: "Cách dùng",
          explain: "按照 là giới từ, có nghĩa là “căn cứ theo” (= 根据).",
          examples: [
            "我们今年的工作都已经按照计划完成了。",
            "这回材料都按照银行的要求准备好了吧？",
            "按照经验，这个问题应该可以很快解决，请大家放心。",
          ],
        },
      ],
    },
    {
      word: "甚至",
      title: "“Thậm chí” – nhấn mạnh ví dụ nổi bật",
      usages: [
        {
          label: "Cách dùng",
          explain: "甚至 nhấn mạnh một ví dụ nổi bật, có thể đặt trước mục cuối cùng của các danh từ, động từ hay vế câu đồng đẳng để làm nổi bật mục này.",
          examples: [
            "这个房子离您公司也不远，您可以坐公共汽车甚至可以骑自行车上班。",
            "很多时候，我们不得不去做一些自己不愿意做甚至是非常不喜欢的工作。",
            "迟到会让别人觉得你没有责任心，使你错过重要的机会，甚至会让别人不再相信你。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "飞机10点___起飞，请大家不要着急。", options: ["按时", "完全", "顺利", "责任"], answer: "按时" },
    { sentence: "她们虽然是姐妹，但是性格___不一样。", options: ["顺利", "完全", "不得不", "按时"], answer: "完全" },
    { sentence: "我本来以为这件事会很___，没想到遇到这么多困难。", options: ["责任", "按时", "顺利", "完全"], answer: "顺利" },
    { sentence: "没想到那天突然下起了大雨，所以他___又在这里住了一晚上。", options: W_EX1.slice(1), answer: "不得不" },
    { sentence: "两个人在一起生活，都要对家有___感。", options: ["完全", "责任", "顺利", "按时"], answer: "责任" },
    { sentence: "我非常满意，___都安排得很好。", options: ["一切", "积累", "提醒", "保证"], answer: "一切" },
    { sentence: "还差一点儿，您放心，我___明天9点前给您。", options: ["提前", "一切", "保证", "积累"], answer: "保证" },
    { sentence: "今天下午的会议___一个小时，改在两点开。", options: ["提醒", "提前", "保证", "一切"], answer: "提前" },
    { sentence: "我大学二年级就开始在这个公司工作了，这让我___了很多工作经验。", options: W_EX2.slice(1), answer: "积累" },
    { sentence: "今天是王红的生日，谢谢你的___，我差点儿忘记了。", options: ["保证", "提醒", "提前", "积累"], answer: "提醒" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [7, 20, 30] },
        { vocabId: 6, distractors: [8, 10, 11] },
        { vocabId: 9, distractors: [11, 1, 25] },
        { vocabId: 14, distractors: [15, 18, 24] },
        { vocabId: 17, distractors: [18, 29, 28] },
        { vocabId: 22, distractors: [21, 23, 4] },
        { vocabId: 26, distractors: [27, 24, 32] },
        { vocabId: 31, distractors: [30, 16, 19] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [4, 5, 10, 12, 19, 23, 29, 32],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我以为", "新工作", "比以前的", "好", "。"], answer: "我以为新工作比以前的好。", vi: "Tôi tưởng công việc mới tốt hơn trước." },
        { tokens: ["你才到新公司", "，", "不要", "太急着", "赚钱", "。"], answer: "你才到新公司，不要太急着赚钱。", vi: "Cậu mới đến công ty mới, đừng quá vội kiếm tiền." },
        { tokens: ["我们", "可以", "提前", "完成", "这份调查", "。"], answer: "我们可以提前完成这份调查。", vi: "Chúng tôi có thể hoàn thành bản khảo sát này trước thời hạn." },
        { tokens: ["我们今年的工作", "都已经", "按照计划", "完成了", "。"], answer: "我们今年的工作都已经按照计划完成了。", vi: "Công việc năm nay của chúng ta đều đã hoàn thành theo kế hoạch." },
        { tokens: ["做生意", "其实", "并", "不容易", "。"], answer: "做生意其实并不容易。", vi: "Làm ăn thật ra chẳng dễ chút nào." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Lại đổi việc", text: "小李：别{{a1}}了！我{{a2}}新工作比以前的好，没想到还没有以前好呢。\n小林：其实，{{a3}}适应一个新的工作需要一年时间，所以，经常换工作不一定好。你才到新公司，不要太急着{{a4}}钱。" },
        { title: "Bài 2 · Lập kế hoạch", text: "王经理：那份{{a5}}还要多长时间才能做完？\n小李：按原来的计划应该是两周，但是我们可以{{a6}}完成，周末{{a7}}做完。\n王经理：每天早上我都把当天计划要做的事情写在笔记本上，{{a8}}自己安排好时间。" },
        { title: "Bài 3 · Chuyện làm ăn", text: "马经理：我原来以为做{{a9}}很简单，后来才发现其实并不容易。\n王经理：慢慢来，万事开头难，重要的是要多{{a10}}经验。" },
      ],
      answers: { a1: "提", a2: "以为", a3: "完全", a4: "赚", a5: "调查", a6: "提前", a7: "保证", a8: "提醒", a9: "生意", a10: "积累" },
      bank: ["提", "以为", "完全", "赚", "调查", "提前", "保证", "提醒", "生意", "积累", "计划", "谈", "一切", "经验"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn tổng kết công việc và đoạn văn về tinh thần trách nhiệm.",
      passages: [
        { title: "Bài 4 · Tổng kết công việc", text: "我们今年的工作都已经{{b1}}计划完成了。因为有大家的努力，我们{{b2}}地解决了问题，{{b3}}地完成了工作，非常{{b4}}大家对我的帮助！另外，马经理让我告诉大家一个好{{b5}}，因为大家按时完成了工作，公司决定这个月给每人多发三千元{{b6}}。" },
        { title: "Bài 5 · Trách nhiệm với công việc", text: "年轻人刚开始工作的时候，不要眼睛里只有{{b7}}和奖金。重要的是学习与同事交流的方法，积累专业{{b8}}。但是很多时候，我们{{b9}}去做一些自己不愿意做{{b10}}是非常不喜欢的工作。" },
      ],
      answers: { b1: "按照", b2: "成功", b3: "顺利", b4: "感谢", b5: "消息", b6: "奖金", b7: "工资", b8: "知识", b9: "不得不", b10: "甚至" },
      bank: ["按照", "成功", "顺利", "感谢", "消息", "奖金", "工资", "知识", "不得不", "甚至", "按时", "责任", "方法"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "完全适应一个新的工作需要一年时间。", vi: "Thích nghi hoàn toàn với một công việc mới cần một năm.", keywords: ["hoàn toàn", "thích nghi", "công việc mới", "một năm"] },
        { zh: "我们可以提前完成，周末保证做完。", vi: "Chúng tôi có thể hoàn thành trước thời hạn, cuối tuần đảm bảo làm xong.", keywords: ["hoàn thành", "cuối tuần", "đảm bảo"] },
        { zh: "万事开头难，重要的是要多积累经验。", vi: "Vạn sự khởi đầu nan, quan trọng là phải tích lũy nhiều kinh nghiệm.", keywords: ["khởi đầu", "tích lũy", "kinh nghiệm"] },
        { zh: "因为大家按时完成了工作，公司决定给每人多发三千元奖金。", vi: "Vì mọi người hoàn thành công việc đúng hạn, công ty quyết định thưởng thêm cho mỗi người ba nghìn tệ.", keywords: ["đúng hạn", "công ty", "thưởng"] },
        { zh: "一个人如果对工作没有责任心，也很难把工作做好。", vi: "Một người nếu không có trách nhiệm với công việc thì cũng rất khó làm tốt công việc.", keywords: ["trách nhiệm", "công việc", "khó"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Cô ấy nói tiếng Trung giỏi như vậy, tôi còn tưởng cô ấy là người Trung Quốc.", answers: ["她汉语说得那么好，我还以为她是中国人。", "她汉语说得这么好，我还以为她是中国人。", "她汉语说得那么好，我以为她是中国人。"] },
        { vi: "Làm ăn thật ra chẳng dễ chút nào.", answers: ["做生意其实并不容易。", "其实做生意并不容易。"] },
        { vi: "Công việc năm nay của chúng ta đều đã hoàn thành theo kế hoạch.", answers: ["我们今年的工作都已经按照计划完成了。", "我们今年的工作都按照计划完成了。"] },
        { vi: "Hóa ra là bạn à, tôi suýt nữa không nhận ra.", answers: ["原来是你啊，我差点儿没认出来。", "原来是你啊，我差点儿没认出来！", "原来是你，我差点儿没认出来。"] },
        { vi: "Đừng quá vội kiếm tiền, học hỏi nhiều mới là quan trọng nhất.", answers: ["不要太急着赚钱，多学习才是最重要的。", "不要太着急赚钱，多学习才是最重要的。", "别太急着赚钱，多学习才是最重要的。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小李今年已经换了三次工作。", a: true },
        { q: "小李觉得新工作比以前的好多了。", a: false },
        { q: "按原来的计划，那份调查应该两周做完。", a: true },
        { q: "王经理每天晚上把第二天要做的事情写在笔记本上。", a: false },
        { q: "马经理和上次那个公司的生意终于谈成了。", a: true },
        { q: "马经理一直觉得做生意很简单。", a: false },
        { q: "因为大家按时完成了工作，公司决定给每人多发三千元奖金。", a: true },
        { q: "年轻人刚开始工作的时候，收入比积累经验重要。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "听说你又换工作了？",
        "多学习才是最重要的。",
        "这个办法真不错！",
        "万事开头难。",
        "感谢大家对我的帮助！",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "最近你刚找到一个新工作，这个工作和你的专业非常不一样。请介绍一下你会怎么做。 (Bạn vừa tìm được công việc mới, rất khác với chuyên ngành của bạn. Hãy giới thiệu bạn sẽ làm thế nào.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 4 (以为, 原来, 并, 按照, 甚至).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["以为", "原来", "并", "按照", "甚至"],
      minGrammar: 2,
      sample: "我大学学的是法律专业，最近却在一家公司做销售工作。我原来以为这份工作很简单，后来才发现其实并不容易。我不得不学习很多新的知识，甚至每天晚上都要看书到十二点。不过万事开头难，我相信只要努力，一切都会好的。首先，我会按照经理的要求，每天把计划要做的事情写在笔记本上，提醒自己按时完成工作。其次，我会多向同事学习，积累工作经验。我不会太急着赚钱，因为对工作的责任心比工资更重要。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 原来 / 本来", points: 6,
      subtitle: "Chọn 原来 hoặc 本来 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "原来 / 本来",
      options: ["原来", "本来"],
      items: [
        { q: "事情总是变化着的，我们需要及时对___的计划做出改变。", answers: ["原来", "本来"] },
        { q: "___是你啊，我差点儿没认出来。", answers: ["原来"] },
        { q: "___我大学是学中文专业的，只是后来当了律师。", answers: ["原来", "本来"] },
        { q: "我___星期二就能回来，但是公司让我再调查一下，所以我就留下继续工作了。", answers: ["原来", "本来"] },
        { q: "我在后面叫她，可她一直没回头。等到了她身边，才发现___我认错人了。", answers: ["原来"] },
        { q: "我还以为是谁帮我打扫房间呢，___是你啊！", answers: ["原来"] },
        { q: "这本书___应该昨天还给你，真不好意思。", answers: ["本来"] },
        { q: "这件事___应该听他的。", answers: ["本来"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 并", points: 6,
      subtitle: "Điền phó từ thích hợp vào chỗ trống (并 + 不/没 – nhấn mạnh phủ định).",
      grammarWord: "并",
      items: [
        { q: "其实，人们将来做什么工作可能和上学学的专业___没有太大关系。", answers: ["并"] },
        { q: "我原来以为做生意很简单，后来才发现其实___不容易。", answers: ["并"] },
        { q: "人每天晚上最少应该睡7个小时，但是这___不适合每一个人。", answers: ["并"] },
        { q: "马克___没告诉我明天下午去看电影。", answers: ["并"] },
        { q: "这个问题___不像你想的那么简单。", answers: ["并"] },
        { q: "他说他会来，可是他___没有来。", answers: ["并"] },
        { q: "我跟你的学习方法差不多，但我的汉语水平___没有提高。", answers: ["并"] },
        { q: "经常换工作___不一定好。", answers: ["并"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 甚至", points: 5,
      subtitle: "Điền từ vào chỗ trống (甚至 – thậm chí, nhấn mạnh mục nổi bật).",
      grammarWord: "甚至",
      items: [
        { q: "这个房子离您公司也不远，您可以坐公共汽车___可以骑自行车上班。", answers: ["甚至"] },
        { q: "我们不得不去做一些自己不愿意做___是非常不喜欢的工作。", answers: ["甚至"] },
        { q: "迟到会使你错过重要的机会，___会让别人不再相信你。", answers: ["甚至"] },
        { q: "她们俩长得太像了，___她们的妈妈有时候也分不清。", answers: ["甚至"] },
        { q: "这个问题太简单了，___小孩子都知道。", answers: ["甚至"] },
        { q: "马克太累了，___没洗澡就睡觉了。", answers: ["甚至"] },
        { q: "他的汉语说得很好，___能用汉语讲笑话。", answers: ["甚至"] },
        { q: "他最近工作特别忙，周末___晚上都要加班。", answers: ["甚至"] },
      ],
    },
  ],
};
