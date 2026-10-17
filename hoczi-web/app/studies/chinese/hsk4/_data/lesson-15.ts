import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第15课 教育孩子的艺术 (Nghệ thuật giáo dục con cái)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 64–79 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và bài tập chọn từ lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["粗心", "表扬", "整理", "寒假", "批评"];
const W_EX2 = ["响", "管理", "故意", "赶", "害羞"];

export const lesson15: Lesson = {
  level: "hsk4",
  no: 15,
  slug: "bai-15",
  zh: "教育孩子的艺术",
  pinyin: "Jiàoyù háizi de yìshù",
  vi: "Nghệ thuật giáo dục con cái",
  en: "The Art of Educating Children",
  topic: "家庭教育 · Giáo dục trong gia đình",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 棒、寒假、闹钟、醒、赶、批评、管理、表扬、怀疑、故意、整理、合适、骗、儿童、懒、笨、粗心、骄傲、害羞…",
    "Hiểu và dùng được 5 điểm chú thích: 想起来、弄、千万 (phân biệt 千万 và 一定)、来 + động từ、左右.",
    "Đọc hiểu 5 bài khóa về cách cha mẹ, thầy cô giáo dục, khen ngợi và động viên trẻ em; thuật lại theo vai.",
    "Hỏi – đáp về cách giáo dục của cha mẹ mình và trình bày quan điểm “làm thế nào để trở thành cha mẹ tốt”.",
    "Nắm nhóm từ cùng chữ 护: 护照、保护、护士.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：赶时间、害羞、打针、闹钟、敲门、弹钢琴。", vi: "Chọn hình tương ứng với các từ: vội cho kịp giờ, ngượng ngùng, tiêm, đồng hồ báo thức, gõ cửa, chơi dương cầm — rồi đặt một câu có từ đó để mô tả hình." },
    { zh: "说说教室里孩子们在做什么。如果你是他们的老师，你会怎么办？", vi: "Cho biết những đứa trẻ đang làm gì trong lớp học. Nếu là giáo viên dạy các bé, bạn sẽ làm thế nào?" },
  ],

  vocab: [
    { id: 1, han: "弹钢琴", py: "tán gāngqín", pos: "đgt.", meaning: "chơi đàn dương cầm", example: "那个一边弹钢琴一边唱歌的男孩子是谁？", exampleVi: "Cậu bé vừa chơi dương cầm vừa hát kia là ai vậy?" },
    { id: 2, han: "棒", py: "bàng", pos: "tt.", meaning: "xuất sắc, hay, giỏi", example: "那个男孩子表演得真棒！", exampleVi: "Cậu bé đó biểu diễn hay thật!" },
    { id: 3, han: "孙子", py: "sūnzi", pos: "dt.", meaning: "cháu nội trai", example: "那个弹钢琴的男孩子是我孙子。", exampleVi: "Cậu bé chơi dương cầm đó là cháu nội tôi." },
    { id: 4, han: "寒假", py: "hánjià", pos: "dt.", meaning: "kỳ nghỉ đông", example: "去年寒假前的新年晚会他也表演过一次。", exampleVi: "Buổi tiệc mừng năm mới trước kỳ nghỉ đông năm ngoái cậu bé cũng đã biểu diễn một lần." },
    { id: 5, han: "父亲", py: "fùqīn", pos: "dt.", meaning: "cha, bố", example: "你就要先成为一位优秀的父亲或者母亲。", exampleVi: "Thì bạn phải trở thành một người cha hoặc người mẹ ưu tú trước đã." },
    { id: 6, han: "闹钟", py: "nàozhōng", pos: "dt.", meaning: "đồng hồ báo thức", example: "早上闹钟响了她不醒。", exampleVi: "Buổi sáng đồng hồ báo thức reo mà con bé không dậy." },
    { id: 7, han: "响", py: "xiǎng", pos: "đgt.", meaning: "reo, vang lên", example: "桌子上那个一直在响的手机是谁的？", exampleVi: "Chiếc điện thoại cứ reo mãi trên bàn kia là của ai?" },
    { id: 8, han: "醒", py: "xǐng", pos: "đgt.", meaning: "thức dậy, tỉnh dậy", example: "早上闹钟响了她不醒。", exampleVi: "Buổi sáng đồng hồ báo thức reo mà con bé không dậy." },
    { id: 9, han: "赶", py: "gǎn", pos: "đgt.", meaning: "vội, gấp rút", example: "我赶时间送她上学。", exampleVi: "Tôi vội vàng cho kịp giờ đưa con bé đi học." },
    { id: 10, han: "厕所", py: "cèsuǒ", pos: "dt.", meaning: "nhà vệ sinh", example: "我赶时间送她上学，她又急着上厕所。", exampleVi: "Tôi đang vội đưa con đi học thì nó lại cuống lên đòi đi vệ sinh." },
    { id: 11, han: "批评", py: "pīpíng", pos: "đgt.", meaning: "phê bình", example: "每天因为这些小事批评她，弄得我俩心情都不好。", exampleVi: "Ngày nào cũng vì mấy chuyện nhỏ này mà mắng con bé, làm hai mẹ con đều không vui." },
    { id: 12, han: "弄", py: "nòng", pos: "đgt.", meaning: "làm", example: "一会儿搬沙发的时候要小心点儿，别弄坏了。", exampleVi: "Lát nữa khi khiêng ghế sofa phải cẩn thận một chút, đừng làm hỏng." },
    { id: 13, han: "管理", py: "guǎnlǐ", pos: "đgt.", meaning: "quản lý", example: "你应该让孩子学会管理时间。", exampleVi: "Chị nên để con học cách quản lý thời gian." },
    { id: 14, han: "打针", py: "dǎ zhēn", pos: "đgt.", meaning: "tiêm, chích", example: "他就怕打针，每次打针都哭得特别厉害。", exampleVi: "Thằng bé rất sợ tiêm, lần nào tiêm cũng khóc dữ dội." },
    { id: 15, han: "护士", py: "hùshi", pos: "dt.", meaning: "y tá", example: "我就小声地和护士说我女儿很勇敢。", exampleVi: "Tôi liền nói nhỏ với cô y tá rằng con gái tôi rất dũng cảm." },
    { id: 16, han: "表扬", py: "biǎoyáng", pos: "đgt.", meaning: "khen ngợi, biểu dương", example: "原来鼓励和表扬对小孩儿挺有用的。", exampleVi: "Hóa ra động viên và khen ngợi khá có tác dụng với trẻ nhỏ." },
    { id: 17, han: "千万", py: "qiānwàn", pos: "p.", meaning: "nhất thiết phải", example: "表扬千万不要太多。", exampleVi: "Khen ngợi nhất thiết đừng quá nhiều." },
    { id: 18, han: "怀疑", py: "huáiyí", pos: "đgt.", meaning: "nghi ngờ, hoài nghi", example: "过多的表扬可能让孩子怀疑自己的能力。", exampleVi: "Khen quá nhiều có thể khiến trẻ hoài nghi năng lực của bản thân." },
    { id: 19, han: "故意", py: "gùyì", pos: "p.", meaning: "cố tình, cố ý", example: "放心吧，你也不是故意的，去跟她解释一下。", exampleVi: "Yên tâm đi, cậu cũng đâu cố ý, đi giải thích với cô ấy một chút." },
    { id: 20, han: "敲", py: "qiāo", pos: "đgt.", meaning: "gõ, khua", example: "有的孩子会故意敲打东西来引起父母的注意。", exampleVi: "Có đứa trẻ cố tình gõ đập đồ đạc để gây sự chú ý của bố mẹ." },
    { id: 21, han: "整理", py: "zhěnglǐ", pos: "đgt.", meaning: "thu dọn, dọn dẹp", example: "应该停下手中的事情，陪孩子整理整理东西。", exampleVi: "Nên dừng việc đang làm, cùng con dọn dẹp đồ đạc." },
    { id: 22, han: "合适", py: "héshì", pos: "tt.", meaning: "thích hợp", example: "教育孩子应该选择合适的教育方法。", exampleVi: "Giáo dục con cái nên chọn phương pháp giáo dục thích hợp." },
    { id: 23, han: "骗", py: "piàn", pos: "đgt.", meaning: "lừa gạt", example: "最好不要为了解决问题而骗孩子。", exampleVi: "Tốt nhất đừng vì để giải quyết vấn đề mà lừa trẻ." },
    { id: 24, han: "儿童", py: "értóng", pos: "dt.", meaning: "trẻ em", example: "儿童缺少判断能力。", exampleVi: "Trẻ em thiếu khả năng phán đoán." },
    { id: 25, han: "假", py: "jiǎ", pos: "tt.", meaning: "giả dối, không thật", example: "看到父母骗人，他们也会学着说假话。", exampleVi: "Thấy bố mẹ lừa người khác, chúng cũng sẽ học theo nói dối." },
    { id: 26, han: "左右", py: "zuǒyòu", pos: "dt.", meaning: "khoảng, khoảng chừng", example: "七岁左右的儿童普遍好动，坐不住。", exampleVi: "Trẻ em khoảng bảy tuổi thường hiếu động, không ngồi yên được." },
    { id: 27, han: "懒", py: "lǎn", pos: "tt.", meaning: "lười, lười nhác", example: "不要用“懒”这种词批评孩子。", exampleVi: "Đừng dùng những từ như “lười” để phê bình trẻ." },
    { id: 28, han: "笨", py: "bèn", pos: "tt.", meaning: "đần, ngốc", example: "不要用“笨”这种词批评他。", exampleVi: "Đừng dùng những từ như “ngốc” để phê bình con." },
    { id: 29, han: "粗心", py: "cūxīn", pos: "tt.", meaning: "cẩu thả", example: "他的优点是有礼貌、诚实，能吃苦，就是太粗心了。", exampleVi: "Ưu điểm của cậu ấy là lễ phép, thật thà, chịu khó, chỉ là quá cẩu thả." },
    { id: 30, han: "骄傲", py: "jiāo'ào", pos: "tt.", meaning: "kiêu ngạo", example: "如果孩子比较骄傲，应该让他明白还有很多知识需要学习。", exampleVi: "Nếu trẻ khá kiêu ngạo, nên để con hiểu rằng còn rất nhiều kiến thức cần học." },
    { id: 31, han: "害羞", py: "hàixiū", pos: "đgt.", meaning: "ngượng ngùng, thẹn thùng", example: "她只是有点儿害羞，等跟大家熟悉了就好了。", exampleVi: "Con bé chỉ hơi ngại thôi, đợi quen mọi người rồi sẽ ổn." },
    { id: 32, han: "护照", py: "hùzhào", pos: "dt.", meaning: "hộ chiếu", example: "没想到中午我去取护照时竟然遇到他了。", exampleVi: "Không ngờ trưa nay khi đi lấy hộ chiếu tôi lại gặp anh ấy.", group: "extended" },
    { id: 33, han: "保护", py: "bǎohù", pos: "đgt.", meaning: "bảo vệ", example: "保护地球环境，并不是离我们很远、很难做到的事情。", exampleVi: "Bảo vệ môi trường Trái Đất không phải là việc xa vời, khó làm.", group: "extended" },
  ],

  text: {
    title: "课文 教育孩子的艺术",
    paragraphs: [
      {
        heading: "课文一 · 李老师建议王静让孩子养成好习惯",
        zh: "王静：那个一边弹钢琴一边唱歌的男孩子是谁？表演得真棒！\n李老师：是我孙子。去年寒假前的新年晚会他也表演过一次。\n王静：我想起来了，这孩子又聪明又可爱，你们教育得真好！\n李老师：是他父母教育得好。父母是孩子最重要的老师。他父母不仅教他知识，而且还花了很长时间帮助他养成了非常好的习惯，现在他每天都自己练习弹钢琴。\n王静：让孩子养成一个好习惯实在太重要了，看来我得向他父母好好儿学习。\n李老师：对。如果希望有一个优秀的孩子，你就要先成为一位优秀的父亲或者母亲。",
        vi: "Vương Tĩnh: Cậu bé vừa chơi dương cầm vừa hát kia là ai vậy? Biểu diễn hay thật!\nThầy Lý: Là cháu nội tôi. Buổi tiệc mừng năm mới trước kỳ nghỉ đông năm ngoái nó cũng đã biểu diễn một lần.\nVương Tĩnh: Tôi nhớ ra rồi, đứa bé này vừa thông minh vừa đáng yêu, nhà mình dạy con giỏi thật!\nThầy Lý: Là bố mẹ nó dạy giỏi. Cha mẹ là người thầy quan trọng nhất của con cái. Bố mẹ nó không chỉ dạy nó kiến thức, mà còn dành rất nhiều thời gian giúp nó hình thành những thói quen rất tốt, bây giờ ngày nào nó cũng tự luyện đàn.\nVương Tĩnh: Giúp con hình thành một thói quen tốt thật sự quá quan trọng, xem ra tôi phải học hỏi bố mẹ nó thật nhiều.\nThầy Lý: Đúng vậy. Nếu muốn có một đứa con ưu tú, thì trước hết bạn phải trở thành một người cha hoặc người mẹ ưu tú.",
        questions: ["王静以前看过李老师孙子的表演吗？你是怎么知道的？", "怎么理解“父母是孩子最重要的老师”这句话？"],
      },
      {
        heading: "课文二 · 王静建议孙月教育孩子学会安排时间",
        zh: "王静：看你脸色不太好，是不是昨晚没休息好？\n孙月：别提了。我女儿昨晚做作业又做到11点。\n王静：睡觉太晚对孩子的身体没有好处。最近孩子作业是不是太多了？\n孙月：主要是她做事情比较慢，比如早上闹钟响了她不醒，我赶时间送她上学，她又急着上厕所。每天因为这些小事批评她，弄得我俩心情都不好。\n王静：孩子做事慢，往往是因为他们不会安排自己的时间。你应该让孩子学会管理时间。\n孙月：看来还是我的教育方法有问题。平时看她做事情慢，总想替她做，以后得让她学会安排时间，自己的事情自己做。",
        vi: "Vương Tĩnh: Trông sắc mặt chị không được tốt lắm, có phải tối qua nghỉ ngơi không đủ không?\nTôn Nguyệt: Đừng nhắc nữa. Tối qua con gái tôi lại làm bài tập đến tận 11 giờ.\nVương Tĩnh: Ngủ quá muộn không tốt cho sức khỏe của trẻ. Dạo này bài tập của cháu có phải nhiều quá không?\nTôn Nguyệt: Chủ yếu là nó làm việc khá chậm, ví dụ buổi sáng đồng hồ báo thức reo mà nó không dậy, tôi đang vội đưa nó đi học thì nó lại cuống lên đòi đi vệ sinh. Ngày nào cũng vì những chuyện nhỏ này mà mắng nó, làm hai mẹ con đều không vui.\nVương Tĩnh: Trẻ con làm việc chậm thường là vì chúng không biết sắp xếp thời gian của mình. Chị nên để cháu học cách quản lý thời gian.\nTôn Nguyệt: Xem ra vẫn là phương pháp giáo dục của tôi có vấn đề. Bình thường thấy nó làm chậm là tôi luôn muốn làm thay, sau này phải để nó học cách sắp xếp thời gian, việc của mình thì tự mình làm.",
        questions: ["孙月常因为什么事情心情不好？你小时候父母会因为什么和你生气？", "怎么做可以帮助孩子学会安排自己的事情？"],
      },
      {
        heading: "课文三 · 王静和孙月讨论表扬孩子的方法",
        zh: "王静：明天又要带我儿子去医院打针，想想我就头疼。他就怕打针，每次打针都哭得特别厉害。\n孙月：记得我女儿小时候，带她去医院打针，刚开始，她害怕得要哭。我就小声地和护士说我女儿很勇敢，一点儿也不怕打针，女儿听了以后马上就不哭了。\n王静：原来鼓励和表扬对小孩儿挺有用的，下次我也试试。\n孙月：不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。不仅起不到鼓励的作用，还可能让孩子怀疑自己的能力，变得没有信心。\n王静：那怎么表扬孩子才会更有效果呢？\n孙月：我认为表扬要及时，而且表扬不仅仅要看结果，更要看过程，这样才能鼓励他的积极性，让他变得勇敢，不怕困难。",
        vi: "Vương Tĩnh: Ngày mai lại phải đưa con trai đi bệnh viện tiêm, nghĩ đến là tôi đã đau đầu. Thằng bé sợ nhất là tiêm, lần nào tiêm cũng khóc dữ dội.\nTôn Nguyệt: Tôi nhớ hồi con gái tôi còn nhỏ, đưa nó đi bệnh viện tiêm, lúc đầu nó sợ đến mức sắp khóc. Tôi liền nói nhỏ với cô y tá rằng con gái tôi rất dũng cảm, không hề sợ tiêm chút nào, con bé nghe xong lập tức nín khóc.\nVương Tĩnh: Hóa ra động viên và khen ngợi khá có tác dụng với trẻ nhỏ, lần sau tôi cũng thử xem.\nTôn Nguyệt: Nhưng khen ngợi cũng là một nghệ thuật, nhất thiết đừng khen quá nhiều, khen quá mức có thể tạo áp lực cho trẻ. Không những không có tác dụng động viên, mà còn có thể khiến trẻ hoài nghi năng lực của mình, trở nên mất tự tin.\nVương Tĩnh: Vậy khen con thế nào mới hiệu quả hơn?\nTôn Nguyệt: Tôi cho rằng khen phải kịp thời, hơn nữa không chỉ nhìn vào kết quả mà càng phải nhìn vào quá trình, như vậy mới khích lệ được tính tích cực của con, giúp con trở nên dũng cảm, không sợ khó khăn.",
        questions: ["哪种教育方式对孙月的女儿比较有效？", "用表扬这种方式教育孩子时，应该注意哪些问题？"],
      },
      {
        heading: "课文四 · 不要骗孩子",
        zh: "有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来引起父母的注意。在这种情况下，建议父母先不要生气，应该停下手中的事情，陪孩子整理整理东西，和他们聊聊天儿，弄清楚他们的问题。父母的关心，可以让孩子心情愉快起来。教育孩子应该选择合适的教育方法，最好不要为了解决问题而骗孩子，这是因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。",
        vi: "Có những đứa trẻ khi không có được thứ mình muốn sẽ khóc, ném đồ hoặc cố tình gõ đập để gây sự chú ý của bố mẹ. Trong trường hợp này, bố mẹ trước hết đừng nổi giận, nên dừng việc đang làm, cùng con dọn dẹp đồ đạc, trò chuyện với con, tìm hiểu rõ vấn đề của con. Sự quan tâm của bố mẹ có thể khiến tâm trạng của trẻ vui vẻ trở lại. Giáo dục con cái nên chọn phương pháp thích hợp, tốt nhất đừng vì để giải quyết vấn đề mà lừa con, bởi vì trẻ em thiếu khả năng phán đoán, thấy bố mẹ lừa người khác, chúng cũng sẽ học theo nói dối.",
        questions: ["有的孩子为什么故意乱扔东西？遇到这种情况，父母应该怎么办？", "为什么有的孩子会说假话骗人？"],
      },
      {
        heading: "课文五 · 对不同性格的孩子使用不同的教育方法",
        zh: "七岁左右的儿童普遍好动，坐不住，所以老师在教这个年龄段的孩子时，一定要想办法引起他们的兴趣。只有让他们觉得你教的内容有趣，他们才会愿意努力学习。当孩子不明白时，应该多鼓励他，不要用“懒”“笨”“粗心”这种词批评他，这样对他们的正常发展不好。而且，对不同性格的孩子要使用不同的教育方法。如果孩子比较骄傲，应该让他明白还有很多知识需要学习；要是孩子性格有些害羞，就要经常鼓励他说出自己的看法，这样才能让每一个孩子都健康地发展。",
        vi: "Trẻ em khoảng bảy tuổi thường hiếu động, không ngồi yên được, vì vậy khi dạy trẻ ở độ tuổi này, giáo viên nhất định phải tìm cách khơi gợi hứng thú của chúng. Chỉ khi khiến chúng thấy nội dung bạn dạy thú vị, chúng mới chịu cố gắng học. Khi trẻ chưa hiểu, nên động viên nhiều hơn, đừng dùng những từ như “lười”, “ngốc”, “cẩu thả” để phê bình, như vậy không tốt cho sự phát triển bình thường của trẻ. Hơn nữa, với những đứa trẻ có tính cách khác nhau phải dùng phương pháp giáo dục khác nhau. Nếu trẻ khá kiêu ngạo, nên để trẻ hiểu rằng còn rất nhiều kiến thức cần học; nếu trẻ có tính hơi nhút nhát, thì phải thường xuyên khuyến khích trẻ nói ra suy nghĩ của mình, như vậy mới giúp mỗi đứa trẻ đều phát triển khỏe mạnh.",
        questions: ["对教儿童的老师来说，怎么做才能让他们安静地学习？", "如果孩子学习不太好，父母最好用什么方式教育他们？"],
      },
    ],
    notes: [
      "王静 (Wáng Jìng): Vương Tĩnh. 孙月 (Sūn Yuè): Tôn Nguyệt. 李老师 (Lǐ lǎoshī): thầy/cô Lý.",
      "Văn hóa – 孟母三迁 (Mạnh mẫu ba lần dọn nhà): mẹ Mạnh Tử từng dọn nhà ba lần (gần nghĩa địa → gần chợ → cạnh trường học) để con có môi trường giáo dục tốt; câu chuyện cho thấy môi trường có thể thay đổi sở thích, thói quen của một người.",
    ],
  },

  grammar: [
    {
      word: "想起来",
      title: "Bổ ngữ 起来 – “nhớ ra”",
      usages: [
        {
          label: "起来 chỉ phương hướng / khả năng",
          explain: "起来 đứng sau động từ làm bổ ngữ xu hướng hoặc bổ ngữ khả năng, diễn tả hướng của hành động là từ dưới đi lên.",
          examples: ["你这样躺着看书对眼睛不好，快坐起来！", "需要长时间坐着工作的人，一小时左右一定要站起来活动活动。"],
        },
        {
          label: "想起来 – nhớ ra",
          explain: "起来 dùng sau động từ 想 có nghĩa là nhớ lại người hoặc sự việc nào đó trong quá khứ.",
          examples: ["我突然想起来得去银行，所以不能陪你去大使馆了。", "我想起来了，这孩子又聪明又可爱，你们教育得真好！"],
        },
      ],
    },
    {
      word: "弄",
      title: "Động từ 弄 – “làm”",
      usages: [
        {
          label: "Cách dùng",
          explain: "弄 có nghĩa là “làm”, thường dùng trong văn nói, có thể thay thế cho một số động từ khác.",
          examples: [
            "A：关于那个新闻的材料你准备好了吗？我们开会时要用。B：都弄（准备）好了，马上给您送过去。",
            "A：一会儿搬沙发的时候要小心点儿，别弄（碰）坏了。B：没问题，我会注意看着脚下的。",
            "每天因为这些小事批评她，弄（批评）得我俩心情都不好。",
          ],
        },
      ],
    },
    {
      word: "千万",
      title: "Phó từ 千万 – “nhất thiết, nhất định”",
      usages: [
        {
          label: "Cách dùng",
          explain: "千万 có nghĩa là nhất định, nhất thiết phải; theo sau thường là cấu trúc phủ định.",
          examples: [
            "不过表扬也是一门艺术，表扬千万不要太多，过多的表扬可能会给孩子带来压力。",
            "我要等她生日那天再送给她这个礼物，你现在千万别告诉她。",
            "每个人都应该记住这句话：“开车千万别喝酒，喝酒千万别开车。”",
          ],
        },
        {
          label: "比一比 千万 — 一定",
          explain: "Giống nhau: đều là phó từ, dùng để đưa ra yêu cầu hay lời dặn dò.",
          examples: ["通过失败你能获得别人没有的经验，千万/一定不要因为失败就不努力了。"],
        },
      ],
      note: "Khác nhau: (1) 千万 hay dùng trong câu phủ định (别、不要、不能), 一定 hay dùng trong câu khẳng định (要、能): 千万不要把工作中的不愉快带到生活中来 / 找工作的人一定要到这里看一看。(2) 千万 ngữ khí nhẹ nhàng, mang ý hy vọng; 一定 mạnh hơn, mang ý ra lệnh: 当机会到来时，千万不要放手 / 在正式比赛前一定要练好。(3) 一定 dùng ở ngôi thứ nhất chỉ quyết tâm (会、能): 我一定会继续努力。(4) 一定 còn nghĩa “chắc chắn”, dạng phủ định 不一定 = không nhất thiết: 只要你不放弃希望……就一定能成功 / 其实不一定都是这样。(5) 一定 làm tính từ “ở mức độ nào đó, thích hợp”: 一定的语言基础。(6) 一定 dùng độc lập khi trả lời: “一定（请客）。” 千万 không có các cách dùng (3)–(6).",
    },
    {
      word: "来",
      title: "来 + động từ – “sẽ làm việc gì”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Động từ 来 đặt trước một động từ khác để diễn tả ý sắp thực hiện việc gì đó, thường dùng trong văn nói. Nếu bỏ 来 thì nghĩa của câu vẫn không thay đổi.",
          examples: [
            "这个沙发这么大，你们两个肯定抬不动，我来帮你们一起抬。",
            "小王经验比较丰富，并且做事认真，这次就让他来负责吧。",
            "有的孩子在得不到自己想要的东西的时候，会通过哭、扔东西或者故意敲打来引起父母的注意。",
          ],
        },
      ],
    },
    {
      word: "左右",
      title: "Danh từ 左右 – “khoảng, chừng”",
      usages: [
        {
          label: "Cách dùng",
          explain: "左右 chỉ dùng sau số lượng từ, diễn tả ý hơi nhiều hơn hoặc hơi ít hơn một số lượng nào đó.",
          examples: [
            "网上买的那本书估计三天左右就能到，你收到了记得给我打个电话说一声。",
            "这儿不能停车，前方500米左右有个免费停车场，您可以把车停到那儿。",
            "七岁左右的儿童普遍好动，坐不住，所以老师在教这个年龄段的孩子时，一定要想办法引起他们的兴趣。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "已经放___了，去打球的人肯定不多，星期天我们去学校的体育馆打网球吧。", options: W_EX1, answer: "寒假" },
    { sentence: "这些只有三分之一吧，还有很多东西没来得及___呢，下周再搬。", options: W_EX1, answer: "整理" },
    { sentence: "如果遇到不得不___别人的时候，态度要友好一点儿，不要让别人听了心里不舒服。", options: W_EX1, answer: "批评" },
    { sentence: "他的优点是有礼貌、诚实，能吃苦，就是太___了，不适合我们这儿的工作。", options: W_EX1, answer: "粗心" },
    { sentence: "孩子在受到___时，往往会对自己更有信心，对学习的兴趣也会更大。", options: W_EX1, answer: "表扬" },
    { sentence: "放心吧，你也不是___的，去跟她解释一下，她会理解的。", options: W_EX2, answer: "故意" },
    { sentence: "她只是有点儿___，等跟大家熟悉了就好了。", options: W_EX2, answer: "害羞" },
    { sentence: "大约有一半吧，李进还专门从国外___回来呢。", options: W_EX2, answer: "赶" },
    { sentence: "桌子上那个一直在___的手机是谁的？", options: W_EX2, answer: "响" },
    { sentence: "这个招聘会主要是为经济和___专业的学生举办的。", options: W_EX2, answer: "管理" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 4, distractors: [5, 3, 10] },
        { vocabId: 6, distractors: [7, 8, 9] },
        { vocabId: 11, distractors: [16, 18, 13] },
        { vocabId: 15, distractors: [14, 32, 33] },
        { vocabId: 19, distractors: [20, 23, 21] },
        { vocabId: 22, distractors: [25, 24, 26] },
        { vocabId: 29, distractors: [27, 28, 30] },
        { vocabId: 31, distractors: [30, 29, 2] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 8, 12, 13, 18, 21, 24, 30],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["父母", "是", "孩子", "最重要的", "老师", "。"], answer: "父母是孩子最重要的老师。", vi: "Cha mẹ là người thầy quan trọng nhất của con cái." },
        { tokens: ["你", "应该", "让孩子", "学会", "管理时间", "。"], answer: "你应该让孩子学会管理时间。", vi: "Chị nên để con học cách quản lý thời gian." },
        { tokens: ["表扬", "千万", "不要", "太多", "。"], answer: "表扬千万不要太多。", vi: "Khen ngợi nhất thiết đừng quá nhiều." },
        { tokens: ["教育孩子", "应该", "选择", "合适的", "教育方法", "。"], answer: "教育孩子应该选择合适的教育方法。", vi: "Giáo dục con cái nên chọn phương pháp giáo dục thích hợp." },
        { tokens: ["七岁左右的", "儿童", "普遍", "好动", "。"], answer: "七岁左右的儿童普遍好动。", vi: "Trẻ em khoảng bảy tuổi thường hiếu động." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Cậu bé chơi dương cầm", text: "王静：那个一边{{c1}}一边唱歌的男孩子是谁？表演得真{{c2}}！\n李老师：是我{{c3}}。去年{{c4}}前的新年晚会他也表演过一次。" },
        { title: "Bài 2 · Học cách sắp xếp thời gian", text: "孙月：主要是她做事情比较慢，比如早上{{c5}}响了她不{{c6}}，我{{c7}}时间送她上学，她又急着上厕所。每天因为这些小事{{c8}}她，弄得我俩心情都不好。" },
        { title: "Bài 3 · Khen ngợi con", text: "孙月：不过{{c9}}也是一门艺术，表扬{{c10}}不要太多，过多的表扬可能会给孩子带来压力。" },
      ],
      answers: { c1: "弹钢琴", c2: "棒", c3: "孙子", c4: "寒假", c5: "闹钟", c6: "醒", c7: "赶", c8: "批评", c9: "表扬", c10: "千万" },
      bank: ["弹钢琴", "棒", "孙子", "寒假", "闹钟", "醒", "赶", "批评", "表扬", "千万", "怀疑", "管理", "护士"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về cách giáo dục trẻ em.",
      passages: [
        { title: "Bài 4 · Đừng lừa trẻ", text: "有的孩子会通过哭、扔东西或者{{e1}}敲打来引起父母的注意。在这种情况下，应该陪孩子{{e2}}整理东西。教育孩子应该选择{{e3}}的教育方法，最好不要为了解决问题而{{e4}}孩子，这是因为{{e5}}缺少判断能力，看到父母骗人，他们也会学着说{{e6}}话。" },
        { title: "Bài 5 · Mỗi đứa trẻ một cách", text: "七岁{{e7}}的儿童普遍好动，坐不住。不要用“懒”“笨”“{{e8}}”这种词批评他。如果孩子比较{{e9}}，应该让他明白还有很多知识需要学习；要是孩子性格有些{{e10}}，就要经常鼓励他说出自己的看法。" },
      ],
      answers: { e1: "故意", e2: "整理", e3: "合适", e4: "骗", e5: "儿童", e6: "假", e7: "左右", e8: "粗心", e9: "骄傲", e10: "害羞" },
      bank: ["故意", "整理", "合适", "骗", "儿童", "假", "左右", "粗心", "骄傲", "害羞", "敲", "笨", "表扬"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "父母是孩子最重要的老师。", vi: "Cha mẹ là người thầy quan trọng nhất của con cái.", keywords: ["cha mẹ", "người thầy", "quan trọng nhất"] },
        { zh: "睡觉太晚对孩子的身体没有好处。", vi: "Ngủ quá muộn không tốt cho sức khỏe của trẻ.", keywords: ["ngủ", "muộn", "sức khỏe"] },
        { zh: "过多的表扬可能会给孩子带来压力。", vi: "Khen ngợi quá nhiều có thể tạo áp lực cho trẻ.", keywords: ["khen", "quá nhiều", "áp lực"] },
        { zh: "儿童缺少判断能力。", vi: "Trẻ em thiếu khả năng phán đoán.", keywords: ["trẻ em", "thiếu", "phán đoán"] },
        { zh: "对不同性格的孩子要使用不同的教育方法。", vi: "Với những đứa trẻ có tính cách khác nhau phải dùng phương pháp giáo dục khác nhau.", keywords: ["tính cách", "khác nhau", "phương pháp giáo dục"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi nhớ ra rồi!", answers: ["我想起来了！", "我想起来了。"] },
        { vi: "Bạn nhất thiết đừng nói với cô ấy.", answers: ["你千万别告诉她。", "你千万不要告诉她。"] },
        { vi: "Cuốn sách đó khoảng ba ngày là đến.", answers: ["那本书三天左右就能到。", "那本书三天左右就到。", "那本书大概三天左右就能到。"] },
        { vi: "Đừng làm hỏng nhé.", answers: ["别弄坏了。", "不要弄坏了。"] },
        { vi: "Nên để con học cách quản lý thời gian.", answers: ["应该让孩子学会管理时间。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "弹钢琴的男孩子是李老师的儿子。", a: false },
        { q: "王静以前看过这个男孩子的表演。", a: true },
        { q: "孙月的女儿昨晚做作业做到11点。", a: true },
        { q: "孙月认为女儿的作业太多了。", a: false },
        { q: "孙月的女儿小时候打针时一直哭。", a: false },
        { q: "孙月认为表扬不仅要看结果，更要看过程。", a: true },
        { q: "为了解决问题，父母可以骗孩子。", a: false },
        { q: "七岁左右的儿童普遍好动，坐不住。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "父母是孩子最重要的老师。",
        "早上闹钟响了她不醒。",
        "表扬千万不要太多。",
        "儿童缺少判断能力。",
        "七岁左右的儿童普遍好动。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "如果你有了孩子，你会怎么做？请写一写怎么成为一个优秀的父亲或者母亲。 (Nếu bạn có con, bạn sẽ làm gì? Hãy viết về cách trở thành một người cha hoặc người mẹ tốt.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 15 (想起来, 弄, 千万, 来 + động từ, 左右).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["想起来", "弄", "千万", "左右", "来"],
      minGrammar: 2,
      sample: "如果我有了孩子，我会先帮助他养成好习惯，比如让他学会管理时间，自己的事情自己做。孩子做得好的时候，我会及时表扬他；孩子做错了事，我也不会马上批评他，而是先弄清楚他的问题。我千万不会用“懒”“笨”这样的词说他，也不会为了解决问题而骗他。每天晚上我会花一个小时左右陪他看书、聊天儿。我想起来小时候父母也是这样教育我的，我觉得父母是孩子最重要的老师。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 千万 / 一定", points: 6,
      subtitle: "Chọn 千万 hoặc 一定 cho mỗi chỗ trống.",
      grammarWord: "千万 / 一定",
      options: ["千万", "一定"],
      items: [
        { q: "哭并不___是件坏事，哭可以让人从坏心情中走出来。", answers: ["一定"] },
        { q: "这次你一定要按照要求认真填写，小心一点儿，___别写错了。", answers: ["千万"] },
        { q: "兴趣是最好的老师，如果孩子对一件事情感兴趣，那他___会努力地去学习。", answers: ["一定"] },
        { q: "事情的原因和结果往往是互相联系的。___的原因会引起一定的结果。", answers: ["一定"] },
        { q: "我要等她生日那天再送给她这个礼物，你现在___别告诉她。", answers: ["千万"] },
        { q: "感谢您的支持和鼓励，我___会继续努力。", answers: ["一定"] },
        { q: "开车千万别喝酒，喝酒___别开车。", answers: ["千万"] },
        { q: "A：你得请客啊。B：___（请客）。", answers: ["一定"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 左右", points: 6,
      subtitle: "Điền từ vào chỗ trống (左右 – đứng sau số lượng từ, chỉ “khoảng, chừng”).",
      grammarWord: "左右",
      items: [
        { q: "网上买的那本书估计三天___就能到。", answers: ["左右"] },
        { q: "前方500米___有个免费停车场。", answers: ["左右"] },
        { q: "七岁___的儿童普遍好动，坐不住。", answers: ["左右"] },
        { q: "需要长时间坐着工作的人，一小时___一定要站起来活动活动。", answers: ["左右"] },
        { q: "从这儿到机场坐出租车要一个小时___，我们还是坐地铁吧。", answers: ["左右"] },
        { q: "马经理7月底去北京出差，大概一个星期___回来。", answers: ["左右"] },
        { q: "我每天晚上十一点___睡觉。", answers: ["左右"] },
        { q: "这件衣服两百块钱___，不算太贵。", answers: ["左右"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 弄", points: 5,
      subtitle: "Điền động từ 弄 (làm – thay cho một số động từ khác trong văn nói).",
      grammarWord: "弄",
      items: [
        { q: "开会的材料都___好了，马上给您送过去。", answers: ["弄"] },
        { q: "一会儿搬沙发的时候要小心点儿，别___坏了。", answers: ["弄"] },
        { q: "每天因为这些小事批评她，___得我俩心情都不好。", answers: ["弄"] },
        { q: "和他们聊聊天儿，___清楚他们的问题。", answers: ["弄"] },
        { q: "老师提醒我们考试时要仔细，别把题目___错了。", answers: ["弄"] },
        { q: "外面太吵了，___得我一晚上都没睡好。", answers: ["弄"] },
        { q: "我___不清楚去西边的公共汽车应该在哪儿坐。", answers: ["弄"] },
        { q: "你把我的衣服___脏了。", answers: ["弄"] },
      ],
    },
  ],
};
