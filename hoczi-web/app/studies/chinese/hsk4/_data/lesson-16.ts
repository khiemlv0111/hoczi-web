import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第16课 生活可以更美好 (Cuộc sống có thể tốt đẹp hơn)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 80–93 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích và bài tập chọn từ lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["同情", "参观", "输", "郊区", "原谅"];
const W_EX2 = ["报名", "预习", "尊重", "推", "号码"];

export const lesson16: Lesson = {
  level: "hsk4",
  no: 16,
  slug: "bai-16",
  zh: "生活可以更美好",
  pinyin: "Shēnghuó kěyǐ gèng měihǎo",
  vi: "Cuộc sống có thể tốt đẹp hơn",
  en: "Life Can Be Better",
  topic: "人生态度 · Thái độ sống",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 博士、签证、报名、表格、参观、激动、代表、恐怕、失望、到底、礼貌、原谅、同情、推、预习、重点、马虎、自信、冷静、重视、敢、尊重…",
    "Hiểu và dùng được 5 điểm chú thích: 可 (nhấn mạnh)、恐怕 (phân biệt 恐怕 và 怕)、到底、拿……来说、敢.",
    "Đọc hiểu 5 bài khóa về du học, kinh nghiệm thành công, cách từ chối, thái độ học tập và sự khiêm tốn; thuật lại theo vai.",
    "Thảo luận “cơ hội và nỗ lực, yếu tố nào quan trọng hơn đối với thành công” và hỏi – đáp về thói quen chuẩn bị bài.",
    "Nắm nhóm từ cùng chữ 重: 严重、重点、重视、尊重.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：激动、参观、失望、挂、推、记者。", vi: "Chọn hình tương ứng với các từ: xúc động, tham quan, thất vọng, treo, đẩy, phóng viên — rồi đặt một câu có từ đó để mô tả hình." },
    { zh: "遇到下面这些情况，你会拒绝吗？说说你的原因。（好朋友向你借钱；读博士和上班的机会；父母要来看你；同学希望你在考试的时候帮助他）", vi: "Khi gặp các tình huống sau, bạn có từ chối không? Hãy nêu lý do (bạn thân ốm hỏi vay tiền; vừa có cơ hội học tiến sĩ vừa trúng tuyển đi làm; định đi du lịch nước ngoài nhưng bố mẹ muốn đến thăm; bạn học không ôn bài muốn bạn giúp khi thi)." },
  ],

  vocab: [
    { id: 1, han: "博士", py: "bóshì", pos: "dt.", meaning: "tiến sĩ", example: "我想出国读博士。", exampleVi: "Tôi muốn ra nước ngoài học tiến sĩ." },
    { id: 2, han: "签证", py: "qiānzhèng", pos: "dt.", meaning: "thị thực, visa", example: "我一直在准备办签证需要的材料。", exampleVi: "Tôi vẫn đang chuẩn bị giấy tờ cần thiết để làm visa." },
    { id: 3, han: "报名", py: "bào míng", pos: "đgt.", meaning: "ghi danh, đăng ký", example: "我想报名参加一万米长跑比赛。", exampleVi: "Tôi muốn đăng ký tham gia cuộc thi chạy 10.000 mét." },
    { id: 4, han: "表格", py: "biǎogé", pos: "dt.", meaning: "bản kê khai, mẫu đơn", example: "我已经填写了报名表格。", exampleVi: "Tôi đã điền mẫu đơn đăng ký rồi." },
    { id: 5, han: "传真", py: "chuánzhēn", pos: "đgt.", meaning: "gửi fax", example: "他们把邀请信传真给你了吗？", exampleVi: "Họ đã fax thư mời cho bạn chưa?" },
    { id: 6, han: "号码", py: "hàomǎ", pos: "dt.", meaning: "số", example: "我帮你查一下学校的电话号码。", exampleVi: "Tôi giúp bạn tra số điện thoại của trường." },
    { id: 7, han: "参观", py: "cānguān", pos: "đgt.", meaning: "tham quan, đi thăm", example: "谢谢您带我参观您的公司。", exampleVi: "Cảm ơn ông đã dẫn tôi tham quan công ty của ông." },
    { id: 8, han: "激动", py: "jīdòng", pos: "tt.", meaning: "cảm động, xúc động", example: "在参观过程中我很激动。", exampleVi: "Trong lúc tham quan tôi rất xúc động." },
    { id: 9, han: "小伙子", py: "xiǎohuǒzi", pos: "dt.", meaning: "chàng trai", example: "小伙子，咱们一边吃西瓜，一边聊。", exampleVi: "Chàng trai, chúng ta vừa ăn dưa hấu vừa nói chuyện nhé." },
    { id: 10, han: "记者", py: "jìzhě", pos: "dt.", meaning: "phóng viên, nhà báo", example: "这个问题以前一个记者也问过我。", exampleVi: "Câu hỏi này trước đây một phóng viên cũng từng hỏi tôi." },
    { id: 11, han: "代表", py: "dàibiǎo", pos: "đgt.", meaning: "đại diện, thay mặt", example: "我们用西瓜的大小代表钱的多少。", exampleVi: "Chúng ta dùng độ lớn nhỏ của miếng dưa hấu để đại diện cho số tiền nhiều hay ít." },
    { id: 12, han: "恐怕", py: "kǒngpà", pos: "p.", meaning: "e rằng, có lẽ", example: "听完我的回答，恐怕你已经知道我的答案了吧。", exampleVi: "Nghe xong câu trả lời của tôi, có lẽ cậu đã biết đáp án của tôi rồi." },
    { id: 13, han: "失望", py: "shīwàng", pos: "đgt.", meaning: "thất vọng", example: "今年放假我又回不了家了，这次我父母又要失望了。", exampleVi: "Kỳ nghỉ năm nay tôi lại không về nhà được, lần này bố mẹ tôi lại thất vọng rồi." },
    { id: 14, han: "郊区", py: "jiāoqū", pos: "dt.", meaning: "vùng ngoại ô", example: "我计划去郊区住一个月。", exampleVi: "Tôi định đến vùng ngoại ô ở một tháng." },
    { id: 15, han: "到底", py: "dàodǐ", pos: "p.", meaning: "rốt cuộc (dùng trong câu hỏi để nhấn mạnh)", example: "你到底怎么打算的呀？", exampleVi: "Rốt cuộc bạn định thế nào vậy?" },
    { id: 16, han: "呀", py: "ya", pos: "trợ.", meaning: "(biến thể của 啊) dùng cuối câu hỏi làm giọng điệu nhẹ nhàng hơn", example: "你到底怎么打算的呀？", exampleVi: "Rốt cuộc bạn định thế nào vậy?" },
    { id: 17, han: "导游", py: "dǎoyóu", pos: "dt.", meaning: "hướng dẫn viên du lịch", example: "朋友要来旅游，让我当导游。", exampleVi: "Bạn tôi định đến du lịch, nhờ tôi làm hướng dẫn viên." },
    { id: 18, han: "礼貌", py: "lǐmào", pos: "tt.", meaning: "lễ phép, lịch sự", example: "如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。", exampleVi: "Nếu bạn nói với bạn mình bằng một cách vừa phù hợp vừa lịch sự, cậu ấy nhất định sẽ thông cảm cho bạn." },
    { id: 19, han: "原谅", py: "yuánliàng", pos: "đgt.", meaning: "tha thứ", example: "虽然得到别人的原谅很容易，但要重新让别人再相信你却很难。", exampleVi: "Tuy được người khác tha thứ thì dễ, nhưng để người khác tin bạn lần nữa lại rất khó." },
    { id: 20, han: "挂", py: "guà", pos: "đgt.", meaning: "treo, móc", example: "有些同学经常把“明天”和“将来”挂在嘴边。", exampleVi: "Có những bạn học thường treo “ngày mai” và “tương lai” trên miệng." },
    { id: 21, han: "同情", py: "tóngqíng", pos: "đgt.", meaning: "thông cảm, đồng tình", example: "这种态度还得不到别人的同情。", exampleVi: "Thái độ này còn không nhận được sự thông cảm của người khác." },
    { id: 22, han: "推", py: "tuī", pos: "đgt.", meaning: "hoãn lại, đẩy, triển khai", example: "不要把什么事情都推到“明天”。", exampleVi: "Đừng đẩy việc gì cũng sang “ngày mai”." },
    { id: 23, han: "预习", py: "yùxí", pos: "đgt.", meaning: "chuẩn bị bài", example: "首先要注意课前预习。", exampleVi: "Trước hết phải chú ý chuẩn bị bài trước khi lên lớp." },
    { id: 24, han: "重点", py: "zhòngdiǎn", pos: "dt.", meaning: "trọng điểm, trọng tâm", example: "找出第二天要学习的重点。", exampleVi: "Tìm ra trọng tâm cần học của ngày hôm sau." },
    { id: 25, han: "马虎", py: "mǎhu", pos: "tt.", meaning: "cẩu thả, lơ đễnh", example: "上课时要认真听，不能马虎。", exampleVi: "Trong giờ học phải chăm chú nghe, không được lơ đễnh." },
    { id: 26, han: "自信", py: "zìxìn", pos: "tt.", meaning: "tự tin", example: "汉语就能越学越好、越说越自信。", exampleVi: "Tiếng Trung sẽ càng học càng giỏi, càng nói càng tự tin." },
    { id: 27, han: "冷静", py: "lěngjìng", pos: "tt.", meaning: "bình tĩnh, điềm tĩnh", example: "当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。", exampleVi: "Khi bạn cho rằng mình giỏi ở phương diện nào đó, nhất định phải bình tĩnh, đừng kiêu ngạo." },
    { id: 28, han: "输", py: "shū", pos: "đgt.", meaning: "thua", example: "没有人会永远输，也没有人会一直赢。", exampleVi: "Không ai thua mãi, cũng không ai thắng mãi." },
    { id: 29, han: "重视", py: "zhòngshì", pos: "đgt.", meaning: "xem trọng, chú trọng", example: "我们应该重视平时的积累。", exampleVi: "Chúng ta nên chú trọng việc tích lũy hằng ngày." },
    { id: 30, han: "敢", py: "gǎn", pos: "đgt.", meaning: "dám", example: "如果你敢诚实地说出自己对哪方面不了解……", exampleVi: "Nếu bạn dám thành thật nói ra mình không hiểu về mặt nào…" },
    { id: 31, han: "尊重", py: "zūnzhòng", pos: "đgt.", meaning: "tôn trọng", example: "这样做更能得到别人的尊重。", exampleVi: "Làm như vậy càng nhận được sự tôn trọng của người khác." },
    { id: 32, han: "严重", py: "yánzhòng", pos: "tt.", meaning: "nghiêm trọng", example: "塑料袋的大量使用带来了严重的环境污染问题。", exampleVi: "Việc dùng túi ni-lông với số lượng lớn đã gây ra vấn đề ô nhiễm môi trường nghiêm trọng.", group: "extended" },
  ],

  text: {
    title: "课文 生活可以更美好",
    paragraphs: [
      {
        heading: "课文一 · 小夏出国留学遇到了问题",
        zh: "小雨：你马上就要硕士毕业了吧？将来有什么打算？\n小夏：我想出国读博士，一直在准备办签证需要的材料。\n小雨：现在材料准备得怎么样了？\n小夏：成绩证明和护照已经准备好了，另外，还跟国外的大学取得了联系，填写了报名表格。\n小雨：还应该有国外大学给你的邀请信吧？他们把邀请信传真给你了吗？\n小夏：没有啊，下个星期我就要去使馆办签证了，这可怎么办？\n小雨：这可是个大问题，我也不太清楚。我帮你查一下学校的电话号码，你打电话问一下吧。",
        vi: "Tiểu Vũ: Bạn sắp tốt nghiệp thạc sĩ rồi nhỉ? Sau này có dự định gì?\nTiểu Hạ: Mình muốn ra nước ngoài học tiến sĩ, vẫn đang chuẩn bị giấy tờ cần để làm visa.\nTiểu Vũ: Giấy tờ bây giờ chuẩn bị đến đâu rồi?\nTiểu Hạ: Bảng điểm và hộ chiếu đã chuẩn bị xong, ngoài ra mình còn liên lạc được với trường đại học nước ngoài và đã điền mẫu đơn đăng ký.\nTiểu Vũ: Chắc còn phải có thư mời của trường đại học nước ngoài gửi cho bạn nữa chứ? Họ đã fax thư mời cho bạn chưa?\nTiểu Hạ: Chưa đâu, tuần sau mình phải đến đại sứ quán làm visa rồi, thế này thì biết làm sao?\nTiểu Vũ: Đây đúng là vấn đề lớn, mình cũng không rõ lắm. Mình giúp bạn tra số điện thoại của trường, bạn gọi điện hỏi thử xem.",
        questions: ["小夏毕业后计划做什么？顺利吗？为什么？", "根据课文，如果想出国留学可能需要准备哪些材料？"],
      },
      {
        heading: "课文二 · 王老板告诉李进自己成功的经验",
        zh: "李进：谢谢您带我参观您的公司。在参观过程中我很激动，有个问题一直想问您。\n王老板：好啊！小伙子，咱们一边吃西瓜，一边聊。\n李进：您从大学毕业开始工作，到现在才十年时间，怎么给公司赚了这么多钱？这让我非常吃惊。我想向您学习一下成功的经验。\n王老板：这个问题以前一个记者也问过我。做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。你看，这里有三块大小不同的西瓜，我们用西瓜的大小代表钱的多少，要是我们一起开始吃，你会先选哪块？\n李进：我肯定先吃最大的一块了，难道您会先吃小的，放弃吃大块的机会吗？\n王老板：我会先吃最小的一块，因为在你没吃完最大的那块时，我还有时间再多吃一块，最后一定比你吃的西瓜多。听完我的回答，恐怕你已经知道我的答案了吧。",
        vi: "Lý Tiến: Cảm ơn ông đã dẫn tôi tham quan công ty của ông. Trong lúc tham quan tôi rất xúc động, có một câu hỏi tôi muốn hỏi ông mãi.\nÔng chủ Vương: Được chứ! Chàng trai, chúng ta vừa ăn dưa hấu vừa nói chuyện.\nLý Tiến: Ông từ khi tốt nghiệp đại học bắt đầu đi làm đến nay mới mười năm, làm thế nào mà kiếm được cho công ty nhiều tiền như vậy? Điều này khiến tôi rất kinh ngạc. Tôi muốn học hỏi ông kinh nghiệm thành công.\nÔng chủ Vương: Câu hỏi này trước đây một phóng viên cũng từng hỏi tôi. Khi làm ăn tuy sẽ gặp đủ loại áp lực và khó khăn, nhưng cơ hội của mọi người đều như nhau. Cậu xem, ở đây có ba miếng dưa hấu to nhỏ khác nhau, chúng ta dùng độ to nhỏ của miếng dưa để đại diện cho số tiền nhiều hay ít, nếu chúng ta cùng bắt đầu ăn, cậu sẽ chọn miếng nào trước?\nLý Tiến: Tôi chắc chắn ăn miếng to nhất trước rồi, lẽ nào ông lại ăn miếng nhỏ trước, bỏ lỡ cơ hội ăn miếng to sao?\nÔng chủ Vương: Tôi sẽ ăn miếng nhỏ nhất trước, vì khi cậu chưa ăn xong miếng to nhất, tôi vẫn còn thời gian ăn thêm một miếng nữa, cuối cùng chắc chắn tôi ăn được nhiều dưa hơn cậu. Nghe xong câu trả lời của tôi, có lẽ cậu đã biết đáp án của tôi rồi.",
        questions: ["王老板怎么介绍自己的成功经验的？", "根据王老板的回答，说说他赚这么多钱的原因是什么。"],
      },
      {
        heading: "课文三 · 小林不好意思拒绝朋友",
        zh: "小林：今年放假我又回不了家了，这次我父母又要失望了。你有什么计划？\n小李：我计划去郊区住一个月。你不是已经买好火车票了吗？你到底怎么打算的呀？\n小林：昨天一个外地的好朋友打电话说要来旅游，让我当导游，我实在不好意思拒绝。\n小李：其实拒绝并不表示不愿意帮忙。遇到解决不了的问题或者无法完成的任务时，拒绝正好说明你对朋友负责。这也是对你父母负责的态度。\n小林：既然别人找我帮忙，说明他真的很需要我的帮助。我担心要是说“不”的话，会让他误会和伤心。\n小李：别担心！如果你用一个既合适又礼貌的方法告诉朋友，他一定会原谅你的。",
        vi: "Tiểu Lâm: Kỳ nghỉ năm nay mình lại không về nhà được, lần này bố mẹ mình lại thất vọng rồi. Bạn có kế hoạch gì?\nTiểu Lý: Mình định đến vùng ngoại ô ở một tháng. Chẳng phải bạn đã mua vé tàu rồi sao? Rốt cuộc bạn định thế nào vậy?\nTiểu Lâm: Hôm qua một người bạn thân ở nơi khác gọi điện nói muốn đến du lịch, nhờ mình làm hướng dẫn viên, mình thật sự ngại từ chối.\nTiểu Lý: Thật ra từ chối không có nghĩa là không muốn giúp. Khi gặp vấn đề không giải quyết được hoặc nhiệm vụ không thể hoàn thành, từ chối chính là thể hiện bạn có trách nhiệm với bạn bè. Đó cũng là thái độ có trách nhiệm với bố mẹ bạn.\nTiểu Lâm: Người ta đã tìm mình nhờ giúp, chứng tỏ cậu ấy thật sự rất cần mình giúp. Mình lo nếu nói “không” sẽ khiến cậu ấy hiểu lầm và buồn.\nTiểu Lý: Đừng lo! Nếu bạn nói với bạn mình bằng một cách vừa phù hợp vừa lịch sự, cậu ấy nhất định sẽ thông cảm cho bạn.",
        questions: ["小林放假后本来有什么打算？他可能因为什么事情改变计划？", "小李和小林两个人对“拒绝别人”有哪些不同的理解？"],
      },
      {
        heading: "课文四 · 一切从现在做起",
        zh: "有些同学经常把“明天”和“将来”挂在嘴边，常说作业明天再完成，下次考试一定好好儿复习，等等。这种态度会浪费时间，不但会让你到最后什么事情都做不成，而且还得不到别人的同情。所以不要把什么事情都推到“明天”，一切从现在做起。就拿学汉语来说吧，首先要注意课前预习，找出第二天要学习的重点；其次，上课时要认真听，不能马虎；最后，课后要记得复习。只要这样，汉语就能越学越好、越说越自信。",
        vi: "Có những bạn học thường treo “ngày mai” và “tương lai” trên miệng, hay nói bài tập để mai làm, lần thi sau nhất định sẽ ôn tập cẩn thận, v.v. Thái độ này sẽ lãng phí thời gian, không những khiến bạn đến cuối cùng chẳng làm được việc gì, mà còn không nhận được sự thông cảm của người khác. Vì vậy đừng đẩy việc gì cũng sang “ngày mai”, mọi thứ hãy bắt đầu từ bây giờ. Lấy việc học tiếng Trung làm ví dụ: trước hết phải chú ý chuẩn bị bài trước khi lên lớp, tìm ra trọng tâm cần học của ngày hôm sau; tiếp theo, trong giờ học phải chăm chú nghe, không được lơ đễnh; cuối cùng, sau giờ học phải nhớ ôn tập. Chỉ cần như vậy, tiếng Trung sẽ càng học càng giỏi, càng nói càng tự tin.",
        questions: ["对于“有什么事情明天再说”这句话，你认为正确吗？为什么？", "根据课文，学汉语应该注意哪些方面的问题？"],
      },
      {
        heading: "课文五 · 天外有天，人外有人",
        zh: "当你认为自己在哪方面很优秀时，千万要冷静，不要骄傲。因为这个世界很大，“天外有天，人外有人”，很可能有人在这方面比你更厉害。你现在是第一，并不表示你永远都是第一。就像比赛一样，没有人会永远输，也没有人会一直赢。我们知道的越多，就会发现自己不懂的也越多。我们应该重视平时的积累，多向周围的人学习。如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。",
        vi: "Khi bạn cho rằng mình rất giỏi ở phương diện nào đó, nhất định phải bình tĩnh, đừng kiêu ngạo. Bởi vì thế giới này rất rộng lớn, “ngoài trời còn có trời, ngoài người còn có người”, rất có thể có người giỏi hơn bạn ở phương diện này. Bây giờ bạn đứng thứ nhất không có nghĩa là bạn mãi mãi đứng thứ nhất. Giống như thi đấu, không ai thua mãi, cũng không ai thắng mãi. Chúng ta biết càng nhiều thì sẽ phát hiện những điều mình chưa hiểu cũng càng nhiều. Chúng ta nên chú trọng tích lũy hằng ngày, học hỏi nhiều hơn từ những người xung quanh. Nếu bạn dám thành thật nói ra mình không hiểu về mặt nào, điều đó không chứng tỏ bạn kém hơn người khác, ngược lại, làm như vậy càng nhận được sự tôn trọng của người khác.",
        questions: ["怎么理解“天外有天，人外有人”这句话？", "要是别人问你问题，可是你不会，你会觉得不好意思吗？为什么？"],
      },
    ],
    notes: [
      "小夏 (Xiǎo Xià): Tiểu Hạ. 小雨 (Xiǎoyǔ): Tiểu Vũ. 李进 (Lǐ Jìn): Lý Tiến. 王老板 (Wáng lǎobǎn): ông chủ Vương. 小林 (Xiǎo Lín): Tiểu Lâm. 小李 (Xiǎo Lǐ): Tiểu Lý.",
      "Văn hóa – 只要功夫深，铁杵磨成针 (Có công mài sắt có ngày nên kim): Lý Bạch thuở nhỏ lười học, thấy bà lão mài cây gậy sắt thành kim thêu thì hiểu ra rằng làm việc gì chỉ cần kiên trì là có thể thành công, từ đó chăm chỉ học hành và trở thành nhà thơ vĩ đại.",
    ],
  },

  grammar: [
    {
      word: "可",
      title: "Phó từ 可 – nhấn mạnh",
      usages: [
        {
          label: "Cách dùng",
          explain: "Phó từ 可 dùng để nhấn mạnh; cũng có thể dùng trong câu hỏi để làm ngữ khí mạnh hơn.",
          examples: [
            "这可是个大问题，我也不太清楚。",
            "下个星期我就要去使馆办签证了，这可怎么办？",
            "我办了一张那个理发店的会员卡，理发可节约了不少钱。",
          ],
        },
      ],
    },
    {
      word: "恐怕",
      title: "恐怕 – “lo rằng; e rằng, có lẽ”",
      usages: [
        {
          label: "Động từ – lo lắng",
          explain: "恐怕 làm động từ có nghĩa là lo lắng.",
          examples: ["我的工作经验还比较少，那份工作我恐怕完成不了。", "这几个动作我恐怕做得不标准，所以比赛前要多多练习。"],
        },
        {
          label: "Phó từ – phỏng đoán kèm lo lắng",
          explain: "Diễn tả sự phỏng đoán và có phần lo lắng.",
          examples: ["这个会议室的座位恐怕不够，还是换到旁边那个大的吧。", "有些事情如果你一定要找一个正确答案，恐怕会让简单的生活变得复杂。"],
        },
        {
          label: "Phó từ – có lẽ, có thể",
          explain: "Chỉ sự phỏng đoán, suy đoán với nghĩa “có lẽ, có thể” (大概、也许).",
          examples: ["听完我的回答，恐怕你已经知道我的答案了吧。", "京剧演出7点就开始了，现在恐怕已经结束了。"],
        },
        {
          label: "比一比 恐怕 — 怕",
          explain: "Giống nhau: đều là động từ nghĩa “lo lắng”, và đều làm phó từ chỉ phỏng đoán có hàm ý lo lắng.",
          examples: ["从这儿坐地铁到那儿至少得五十分钟，马克恐怕/怕来不及了。", "如果说一对夫妻缺少或者没有共同语言，那问题恐怕/怕就大了。"],
        },
      ],
      note: "Khác nhau: (1) Nghĩa “lo lắng”: 恐怕 chỉ đứng trước động từ, 怕 đứng trước cả động từ lẫn danh từ: 我恐怕/怕忘了这件事 / 我怕你忘了这件事。(2) Nghĩa phỏng đoán: 恐怕 đứng trước hoặc sau chủ ngữ, 怕 chỉ đứng sau chủ ngữ: 恐怕足球比赛不能举行了 / 足球比赛恐怕/怕不能举行了。(3) 怕 làm động từ mang tân ngữ nghĩa “sợ”: 有能力的人不怕找不到好工作 (恐怕 không dùng). (4) 恐怕 làm phó từ có thể thay bằng 也许、大概: 他离开这里恐怕有二十天了 (怕 không dùng).",
    },
    {
      word: "到底",
      title: "到底 – “đến cùng; rốt cuộc”",
      usages: [
        {
          label: "Động từ – đến cùng",
          explain: "到底 làm động từ có nghĩa là đến cùng, đến điểm cuối.",
          examples: ["今天我一定陪你逛街逛到底，保证让你买到合适的衣服。", "要是你觉得情人节只送巧克力还不够浪漫，那就再带她看《将爱情进行到底》这个爱情电影吧。"],
        },
        {
          label: "Phó từ – rốt cuộc",
          explain: "Dùng trong câu hỏi hoặc câu có đại từ nghi vấn để diễn tả ý tìm tòi, xem xét thêm; không dùng trong câu hỏi có 吗. Nếu chủ ngữ là đại từ nghi vấn thì 到底 chỉ đặt trước chủ ngữ.",
          examples: [
            "你不是已经买好火车票了吗？你到底怎么打算的呀？",
            "我给他打了好几次电话了，可是一直没人接，也不知道他到底是怎么回事。",
            "到底谁去参加比赛，大家还没决定。",
            "每个人都希望自己健康，那么到底什么是健康呢？不同的人有不同的理解。",
          ],
        },
      ],
    },
    {
      word: "拿……来说",
      title: "Cấu trúc 拿……来说 – “lấy … làm ví dụ”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Trong cấu trúc 拿……来说, 拿 là giới từ, dùng để đưa ra sự vật hay tình huống được nói rõ (nêu ví dụ).",
          examples: [
            "这次招聘很多人符合公司的要求，拿他来说，他不仅专业符合职业要求，而且还有工作经验。",
            "如果一个汉字中有“氵”这个部分，说明这个字的意思很可能和水有关系，拿“河、流、洗、汁”这几个字来说，它们都跟水有关。",
            "所以不要把什么事情都推到“明天”，一切从现在做起。就拿学汉语来说吧，首先要注意课前预习，找出第二天要学习的重点……",
          ],
        },
      ],
    },
    {
      word: "敢",
      title: "Động từ năng nguyện 敢 – “dám”",
      usages: [
        {
          label: "Cách dùng",
          explain: "敢 đứng trước động từ để diễn tả ý tự tin, có can đảm làm việc gì.",
          examples: [
            "我们应该把那些敢说真话的人当成“镜子”，这样才能及时发现自己的缺点。",
            "小时候我总喜欢躺在床上看书，结果眼睛越来越不好，所以从那儿以后我就不敢再躺着看书了。",
            "如果你敢诚实地说出自己对哪方面不了解，并不说明自己比别人差，相反，这样做更能得到别人的尊重。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "虽然得到别人的___很容易，但要重新让别人再相信你却很难。", options: W_EX1, answer: "原谅" },
    { sentence: "爱批评人或者没有___心的人是最不受欢迎的。", options: W_EX1, answer: "同情" },
    { sentence: "各位朋友大家好！欢迎来到美丽的海南，这几天就由我带着大家___。", options: W_EX1, answer: "参观" },
    { sentence: "现在城市里越来越多的人喜欢到___过周末。", options: W_EX1, answer: "郊区" },
    { sentence: "生活的关键就是：只要你努力做了，不管是___是赢，都一样精彩。", options: W_EX1, answer: "输" },
    { sentence: "不错，我们现在___出了“以旧换新”的活动，吸引了不少顾客。", options: W_EX2, answer: "推" },
    { sentence: "等他___完课文再跟你玩儿，奶奶先陪你做游戏吧。", options: W_EX2, answer: "预习" },
    { sentence: "既然这样，那我们___你的选择。", options: W_EX2, answer: "尊重" },
    { sentence: "我记得上次关教授把他的手机___给我了，可是不知道写哪儿了。", options: W_EX2, answer: "号码" },
    { sentence: "我想___参加一万米长跑比赛，你参加不参加？", options: W_EX2, answer: "报名" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 2, distractors: [1, 4, 6] },
        { vocabId: 7, distractors: [8, 10, 11] },
        { vocabId: 13, distractors: [12, 15, 19] },
        { vocabId: 17, distractors: [14, 9, 10] },
        { vocabId: 21, distractors: [19, 22, 20] },
        { vocabId: 24, distractors: [29, 31, 32] },
        { vocabId: 25, distractors: [26, 27, 18] },
        { vocabId: 30, distractors: [28, 22, 20] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [3, 8, 12, 15, 18, 23, 27, 31],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "想", "出国", "读博士", "。"], answer: "我想出国读博士。", vi: "Tôi muốn ra nước ngoài học tiến sĩ." },
        { tokens: ["谢谢您", "带我", "参观", "您的公司", "。"], answer: "谢谢您带我参观您的公司。", vi: "Cảm ơn ông đã dẫn tôi tham quan công ty của ông." },
        { tokens: ["你", "到底", "怎么", "打算的", "呀", "？"], answer: "你到底怎么打算的呀？", vi: "Rốt cuộc bạn định thế nào vậy?" },
        { tokens: ["不要", "把什么事情", "都", "推到", "明天", "。"], answer: "不要把什么事情都推到明天。", vi: "Đừng đẩy việc gì cũng sang ngày mai." },
        { tokens: ["我们", "应该", "重视", "平时的", "积累", "。"], answer: "我们应该重视平时的积累。", vi: "Chúng ta nên chú trọng tích lũy hằng ngày." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Đi du học", text: "小夏：我想出国读{{c1}}，一直在准备办{{c2}}需要的材料。\n小夏：成绩证明和护照已经准备好了，另外，还跟国外的大学取得了联系，填写了{{c3}}表格。\n小雨：他们把邀请信{{c4}}给你了吗？" },
        { title: "Bài 2 · Kinh nghiệm thành công", text: "李进：谢谢您带我{{c5}}您的公司。在参观过程中我很{{c6}}，有个问题一直想问您。\n王老板：这个问题以前一个{{c7}}也问过我。我们用西瓜的大小{{c8}}钱的多少。" },
        { title: "Bài 3 · Ngại từ chối", text: "小林：今年放假我又回不了家了，这次我父母又要{{c9}}了。\n小李：如果你用一个既合适又礼貌的方法告诉朋友，他一定会{{c10}}你的。" },
      ],
      answers: { c1: "博士", c2: "签证", c3: "报名", c4: "传真", c5: "参观", c6: "激动", c7: "记者", c8: "代表", c9: "失望", c10: "原谅" },
      bank: ["博士", "签证", "报名", "传真", "参观", "激动", "记者", "代表", "失望", "原谅", "导游", "号码", "郊区"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về thái độ học tập và sự khiêm tốn.",
      passages: [
        { title: "Bài 4 · Bắt đầu từ bây giờ", text: "有些同学经常把“明天”和“将来”{{e1}}在嘴边。这种态度还得不到别人的{{e2}}。所以不要把什么事情都{{e3}}到“明天”，一切从现在做起。就拿学汉语来说吧，首先要注意课前{{e4}}，找出第二天要学习的{{e5}}；其次，上课时要认真听，不能{{e6}}。只要这样，汉语就能越学越好、越说越{{e7}}。" },
        { title: "Bài 5 · Núi cao còn có núi cao hơn", text: "当你认为自己在哪方面很优秀时，千万要{{e8}}，不要骄傲。就像比赛一样，没有人会永远{{e9}}，也没有人会一直赢。如果你敢诚实地说出自己对哪方面不了解，这样做更能得到别人的{{e10}}。" },
      ],
      answers: { e1: "挂", e2: "同情", e3: "推", e4: "预习", e5: "重点", e6: "马虎", e7: "自信", e8: "冷静", e9: "输", e10: "尊重" },
      bank: ["挂", "同情", "推", "预习", "重点", "马虎", "自信", "冷静", "输", "尊重", "重视", "敢", "严重"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "我想出国读博士，一直在准备办签证需要的材料。", vi: "Tôi muốn ra nước ngoài học tiến sĩ, vẫn đang chuẩn bị giấy tờ cần để làm visa.", keywords: ["tiến sĩ", "visa", "giấy tờ"] },
        { zh: "做生意时虽然会遇到各种压力和困难，但是大家的机会都是相同的。", vi: "Khi làm ăn tuy sẽ gặp đủ loại áp lực và khó khăn, nhưng cơ hội của mọi người đều như nhau.", keywords: ["làm ăn", "áp lực", "khó khăn", "cơ hội"] },
        { zh: "其实拒绝并不表示不愿意帮忙。", vi: "Thật ra từ chối không có nghĩa là không muốn giúp.", keywords: ["từ chối", "không muốn", "giúp"] },
        { zh: "不要把什么事情都推到明天，一切从现在做起。", vi: "Đừng đẩy việc gì cũng sang ngày mai, mọi thứ hãy bắt đầu từ bây giờ.", keywords: ["ngày mai", "bắt đầu", "bây giờ"] },
        { zh: "没有人会永远输，也没有人会一直赢。", vi: "Không ai thua mãi, cũng không ai thắng mãi.", keywords: ["thua", "thắng", "không ai"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Đây đúng là một vấn đề lớn.", answers: ["这可是个大问题。", "这可是一个大问题。"] },
        { vi: "Rốt cuộc bạn định thế nào?", answers: ["你到底怎么打算的？", "你到底怎么打算？", "你到底怎么打算的呀？"] },
        { vi: "Buổi biểu diễn có lẽ đã kết thúc rồi.", answers: ["演出恐怕已经结束了。", "恐怕演出已经结束了。"] },
        { vi: "Tôi không dám nằm đọc sách nữa.", answers: ["我不敢再躺着看书了。", "我不敢躺着看书了。"] },
        { vi: "Chúng ta nên tôn trọng lựa chọn của bạn.", answers: ["我们应该尊重你的选择。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小夏马上就要博士毕业了。", a: false },
        { q: "国外的大学还没有把邀请信传真给小夏。", a: true },
        { q: "王老板大学毕业后工作了二十年。", a: false },
        { q: "王老板会先吃最小的一块西瓜。", a: true },
        { q: "小林已经买好火车票了。", a: true },
        { q: "小李认为拒绝就是不愿意帮忙。", a: false },
        { q: "学汉语时，上课前要注意预习。", a: true },
        { q: "如果你现在是第一，你就永远是第一。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "这可是个大问题。",
        "谢谢您带我参观您的公司。",
        "你到底怎么打算的呀？",
        "上课时要认真听，不能马虎。",
        "我们应该重视平时的积累。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "有人说成功是因为1%的机会加99%的汗水。你认为机会和努力，哪个对成功更重要？ (Có người nói thành công là do 1% cơ hội cộng 99% mồ hôi. Theo bạn, cơ hội và nỗ lực, yếu tố nào quan trọng hơn đối với thành công?)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 16 (可, 恐怕, 到底, 拿……来说, 敢).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["可", "恐怕", "到底", "拿", "来说", "敢"],
      minGrammar: 2,
      sample: "机会和努力到底哪个对成功更重要？我认为努力更重要。大家的机会都是相同的，没有努力，就算机会来了，恐怕你也抓不住。就拿学汉语来说吧，如果上课前不预习，上课时很马虎，下课后也不复习，那汉语可学不好。我们应该重视平时的积累，敢向别人请教，不要把什么事情都推到明天。只要一切从现在做起，我相信每个人都能越来越自信，生活也会更美好。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 恐怕 / 怕", points: 6,
      subtitle: "Chọn 恐怕 hoặc 怕 cho mỗi chỗ trống (nếu cả hai đều đúng, chọn 恐怕).",
      grammarWord: "恐怕 / 怕",
      options: ["恐怕", "怕"],
      items: [
        { q: "这次聚会你们怎么准备了这么多菜呢？我___他们吃不了。", answers: ["怕"] },
        { q: "如果你们今晚还想看节目的话，最好现在就出发，再晚了___就没座位了。", answers: ["恐怕"] },
        { q: "我本来想放假就走，但___现在走不了了，老师让我翻译几篇文章。", answers: ["恐怕"] },
        { q: "遇到任何困难都不要___，只要你努力，成功就离你越来越近。", answers: ["怕"] },
        { q: "有能力的人不___找不到好工作。", answers: ["怕"] },
        { q: "好久没见过他了，他离开这里___有二十天了。", answers: ["恐怕"] },
        { q: "我___你忘了这件事，所以打电话提醒你一下。", answers: ["怕"] },
        { q: "刚才听广播说明天可能会下大雨，___足球比赛不能举行了。", answers: ["恐怕"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 到底", points: 6,
      subtitle: "Điền từ vào chỗ trống (到底 – rốt cuộc; đến cùng).",
      grammarWord: "到底",
      items: [
        { q: "你不是已经买好火车票了吗？你___怎么打算的呀？", answers: ["到底"] },
        { q: "我给他打了好几次电话，也不知道他___是怎么回事。", answers: ["到底"] },
        { q: "___谁去参加比赛，大家还没决定。", answers: ["到底"] },
        { q: "每个人都希望自己健康，那么___什么是健康呢？", answers: ["到底"] },
        { q: "今天我一定陪你逛街逛___。", answers: ["到底"] },
        { q: "虽然这是两棵不同的植物，可是它们___有什么不一样？", answers: ["到底"] },
        { q: "从这儿一直往前走，走___就是图书馆。", answers: ["到底"] },
        { q: "明天就是报名的最后一天了，你___报不报名？", answers: ["到底"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 敢", points: 5,
      subtitle: "Điền động từ năng nguyện 敢 (dám) vào chỗ trống.",
      grammarWord: "敢",
      items: [
        { q: "我们应该把那些___说真话的人当成“镜子”。", answers: ["敢"] },
        { q: "从那儿以后我就不___再躺着看书了。", answers: ["敢"] },
        { q: "如果你___诚实地说出自己对哪方面不了解，并不说明自己比别人差。", answers: ["敢"] },
        { q: "你感冒了还___吃冰激凌？小心咳嗽得更厉害。", answers: ["敢"] },
        { q: "她打网球打得特别棒，我可不___跟她比赛。", answers: ["敢"] },
        { q: "老师应该为学生提供一种愉快的学习环境，让学生___问问题。", answers: ["敢"] },
        { q: "他很害羞，不___在别人面前唱歌。", answers: ["敢"] },
        { q: "这么晚了，我一个人不___回家。", answers: ["敢"] },
      ],
    },
  ],
};
