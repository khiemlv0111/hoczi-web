import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第19课 生活的味道 (Mùi vị của cuộc sống)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 122–134 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).

export const lesson19: Lesson = {
  level: "hsk4",
  no: 19,
  slug: "bai-19",
  zh: "生活的味道",
  pinyin: "Shēnghuó de wèidào",
  vi: "Mùi vị của cuộc sống",
  en: "The Flavor of Life",
  topic: "生活点滴 · Chuyện thường ngày",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 学期、出生、性别、道歉、打印、复印、破、脱、理发、零钱、打招呼、戴、眼镜、国籍、抬、胳膊、转、租、吵、房东、占线、禁止、座位…",
    "Hiểu và dùng được đại từ nghi vấn phiếm chỉ (谁/什么/怎么… + 都/也) và bổ ngữ 上 (đạt mục đích / khả năng).",
    "Dùng được bổ ngữ xu hướng 出来; phân biệt 出来 và 起来.",
    "Dùng được 总的来说 để tổng kết và 在于 để nói bản chất sự việc.",
    "Đọc hiểu các bài khóa về thủ tục đăng ký học, nấu bánh chẻo, học múa, thuê nhà và môn bóng bàn ở Trung Quốc; giới thiệu môn thể thao phổ biến ở nước mình.",
    "Nắm các từ mở rộng có chữ 发: 沙发、发生、发展、理发.",
  ],

  warmUp: [
    { zh: "给下面的词语选择对应的图片，并用这个词语根据图片说一个句子：复印、厨房、禁止、戴眼镜、理发、道歉。", vi: "Chọn hình tương ứng với các từ (photocopy, nhà bếp, cấm, đeo kính, cắt tóc, xin lỗi) và nói một câu có từ đó để mô tả hình." },
    { zh: "根据表格的内容，把下面的信息填在第一行，并按照表格写出自己的信息：出生、性别、护照、姓名、电话、年龄、地址。", vi: "Điền các mục (ngày sinh, giới tính, hộ chiếu, họ tên, điện thoại, tuổi, địa chỉ) vào hàng đầu của bảng thông tin của Tiểu Hạ, sau đó viết thông tin của chính bạn." },
  ],

  vocab: [
    { id: 1, han: "学期", py: "xuéqī", pos: "dt.", meaning: "học kỳ", example: "老师，您好！我希望下个学期在这里继续学习。", exampleVi: "Chào thầy! Em hy vọng học kỳ sau tiếp tục học ở đây." },
    { id: 2, han: "出生", py: "chūshēng", pos: "đgt.", meaning: "ra đời, sinh ra", example: "出生年月、性别、护照号码都要填。", exampleVi: "Năm tháng sinh, giới tính, số hộ chiếu đều phải điền." },
    { id: 3, han: "性别", py: "xìngbié", pos: "dt.", meaning: "giới tính", example: "请在表格上填好姓名、性别、年龄、职业等。", exampleVi: "Hãy điền đầy đủ họ tên, giới tính, tuổi, nghề nghiệp… vào bảng." },
    { id: 4, han: "道歉", py: "dào qiàn", pos: "đgt.", meaning: "xin lỗi", example: "没关系，不用道歉，谁都有粗心填错的时候。", exampleVi: "Không sao, không cần xin lỗi, ai cũng có lúc sơ ý điền sai." },
    { id: 5, han: "打印", py: "dǎyìn", pos: "đgt.", meaning: "in", example: "我给你重新打印一份，你等一下。", exampleVi: "Thầy in lại cho em một bản, em đợi một chút." },
    { id: 6, han: "复印", py: "fùyìn", pos: "đgt.", meaning: "photocopy, sao chụp", example: "请把你的护照给我，我们要把护照复印一下。", exampleVi: "Em đưa hộ chiếu cho thầy, chúng tôi cần photo hộ chiếu một chút." },
    { id: 7, han: "饺子", py: "jiǎozi", pos: "dt.", meaning: "bánh chẻo", example: "我想给你做点儿羊肉饺子。", exampleVi: "Em muốn làm cho anh ít bánh chẻo thịt dê." },
    { id: 8, han: "刀", py: "dāo", pos: "dt.", meaning: "con dao", example: "刚才用刀切肉的时候把手弄破了。", exampleVi: "Lúc nãy dùng dao thái thịt đã làm đứt tay." },
    { id: 9, han: "破", py: "pò", pos: "tt.", meaning: "bị đứt, bị thủng", example: "刚才用刀切肉的时候把手弄破了。", exampleVi: "Lúc nãy dùng dao thái thịt đã làm đứt tay." },
    { id: 10, han: "脱", py: "tuō", pos: "đgt.", meaning: "cởi ra", example: "你把衣服脱下来，我给你洗洗。", exampleVi: "Em cởi áo ra, anh giặt cho." },
    { id: 11, han: "理发", py: "lǐ fà", pos: "đgt.", meaning: "cắt tóc", example: "我常去的那家理发店附近有个餐厅。", exampleVi: "Gần tiệm cắt tóc anh hay đến có một nhà hàng." },
    { id: 12, han: "包子", py: "bāozi", pos: "dt.", meaning: "bánh bao", example: "那里的包子很好吃，我一会儿去买一点儿。", exampleVi: "Bánh bao ở đó rất ngon, lát nữa anh đi mua một ít." },
    { id: 13, han: "零钱", py: "língqián", pos: "dt.", meaning: "tiền lẻ", example: "我衣服口袋里有十几块零钱，买包子应该够。", exampleVi: "Trong túi áo em có hơn chục đồng tiền lẻ, mua bánh bao chắc là đủ." },
    { id: 14, han: "打招呼", py: "dǎ zhāohu", pos: "đgt.", meaning: "chào hỏi, chào", example: "我早上跟你打招呼，你没看见。", exampleVi: "Sáng nay tớ chào cậu mà cậu không nhìn thấy." },
    { id: 15, han: "戴", py: "dài", pos: "đgt.", meaning: "đeo, mang", example: "今天早上我忘戴眼镜了，看不清楚。", exampleVi: "Sáng nay tớ quên đeo kính, nhìn không rõ." },
    { id: 16, han: "眼镜", py: "yǎnjìng", pos: "dt.", meaning: "mắt kính", example: "今天早上我忘戴眼镜了，看不清楚。", exampleVi: "Sáng nay tớ quên đeo kính, nhìn không rõ." },
    { id: 17, han: "舞蹈", py: "wǔdǎo", pos: "dt.", meaning: "điệu múa", example: "舞蹈不仅是一门艺术，也是一种“语言”。", exampleVi: "Múa không chỉ là một môn nghệ thuật mà còn là một loại “ngôn ngữ”." },
    { id: 18, han: "国籍", py: "guójí", pos: "dt.", meaning: "quốc tịch", example: "这种语言与国籍无关，无论哪个国家的人都能看懂。", exampleVi: "Thứ ngôn ngữ này không liên quan đến quốc tịch, người nước nào cũng xem hiểu được." },
    { id: 19, han: "抬", py: "tái", pos: "đgt.", meaning: "giơ lên, đưa lên", example: "先抬胳膊，然后抬腿。", exampleVi: "Trước tiên giơ tay lên, sau đó nhấc chân lên." },
    { id: 20, han: "胳膊", py: "gēbo", pos: "dt.", meaning: "cánh tay", example: "先抬胳膊，然后抬腿，最后头再向右转一下。", exampleVi: "Trước tiên giơ tay, sau đó nhấc chân, cuối cùng quay đầu sang phải một chút." },
    { id: 21, han: "转", py: "zhuǎn", pos: "đgt.", meaning: "quay, xoay", example: "最后头再向右转一下。", exampleVi: "Cuối cùng quay đầu sang phải một chút." },
    { id: 22, han: "租", py: "zū", pos: "đgt.", meaning: "thuê, cho thuê", example: "马克去年租的房子离马路很近。", exampleVi: "Căn nhà Mark thuê năm ngoái ở rất gần đường lớn." },
    { id: 23, han: "吵", py: "chǎo", pos: "tt.", meaning: "ồn ào", example: "对面有大大小小的商店，周围环境非常吵。", exampleVi: "Đối diện có các cửa hàng lớn nhỏ, môi trường xung quanh rất ồn ào." },
    { id: 24, han: "厨房", py: "chúfáng", pos: "dt.", meaning: "nhà bếp", example: "广告上说房子交通方便，周围很安静，厨房很大。", exampleVi: "Quảng cáo nói căn nhà giao thông thuận tiện, xung quanh yên tĩnh, bếp rất rộng." },
    { id: 25, han: "房东", py: "fángdōng", pos: "dt.", meaning: "chủ nhà (nhà cho thuê)", example: "于是他就记下了房东的手机号码。", exampleVi: "Thế là anh ấy ghi lại số di động của chủ nhà." },
    { id: 26, han: "占线", py: "zhànxiàn", pos: "đgt.", meaning: "(đường dây điện thoại) bận", example: "可回家后打电话，电话总是占线。", exampleVi: "Nhưng về nhà gọi điện thì máy lúc nào cũng bận." },
    { id: 27, han: "功夫", py: "gōngfu", pos: "dt.", meaning: "võ thuật, môn võ kung fu", example: "很多外国人认为所有中国人都会功夫和乒乓球。", exampleVi: "Nhiều người nước ngoài cho rằng mọi người Trung Quốc đều biết võ và chơi bóng bàn." },
    { id: 28, han: "乒乓球", py: "pīngpāngqiú", pos: "dt.", meaning: "bóng bàn", example: "中国人特别喜欢打乒乓球。", exampleVi: "Người Trung Quốc đặc biệt thích chơi bóng bàn." },
    { id: 29, han: "羽毛球", py: "yǔmáoqiú", pos: "dt.", meaning: "cầu lông", example: "像乒乓球、羽毛球、跑步等运动对条件要求不高。", exampleVi: "Những môn như bóng bàn, cầu lông, chạy bộ… không đòi hỏi cao về điều kiện." },
    { id: 30, han: "场", py: "chǎng", pos: "lượng.", meaning: "trận (dùng cho thể thao hay các hoạt động giải trí…)", example: "很多人一到周末就会到体育馆打几场球。", exampleVi: "Nhiều người cứ đến cuối tuần là tới nhà thi đấu đánh vài trận bóng." },
    { id: 31, han: "禁止", py: "jìnzhǐ", pos: "đgt.", meaning: "cấm", example: "观众要安静，禁止大声讲话或者离开座位随便走动。", exampleVi: "Khán giả phải giữ yên lặng, cấm nói to hoặc rời chỗ ngồi đi lại tùy tiện." },
    { id: 32, han: "座位", py: "zuòwèi", pos: "dt.", meaning: "chỗ ngồi", example: "麻烦你给我们找个安静点儿的座位。", exampleVi: "Phiền anh tìm giúp chúng tôi một chỗ ngồi yên tĩnh một chút." },
    { id: 33, han: "沙发", py: "shāfā", pos: "dt.", meaning: "ghế sofa", example: "你回到家就把衣服、书包什么的扔在沙发上。", exampleVi: "Con về đến nhà là vứt quần áo, cặp sách lên ghế sofa.", group: "extended" },
    { id: 34, han: "发生", py: "fāshēng", pos: "đgt.", meaning: "xảy ra, phát sinh", example: "人们对很多事情的看法是会发生变化的。", exampleVi: "Cách nhìn của con người về nhiều chuyện sẽ thay đổi.", group: "extended" },
    { id: 35, han: "发展", py: "fāzhǎn", pos: "đgt.", meaning: "phát triển", example: "没想到事情的发展情况跟我想的正好相反。", exampleVi: "Không ngờ tình hình diễn biến của sự việc lại ngược hẳn với điều tôi nghĩ.", group: "extended" },
  ],

  text: {
    title: "课文 生活的味道",
    paragraphs: [
      {
        heading: "课文一 · 马克申请下个学期继续在学校学习",
        zh: "马克：老师，您好！我希望下个学期在这里继续学习，请问还需要重新申请吗？\n高老师：是的。给你表格，出生年月、性别、护照号码都要填，还有联系地址、联系电话。\n马克：真抱歉，我不小心把护照号码填错了，您能再给我一份新的申请表吗？\n高老师：没关系，不用道歉，谁都有粗心填错的时候。申请表都被别人拿走了，我给你重新打印一份，你等一下。\n（高老师打印，马克填表。）\n马克：这次我按照要求都填写完了，请问还需要做别的事情吗？\n高老师：请把你的护照给我，我们要把护照复印一下。",
        vi: "Mark: Chào thầy! Em hy vọng học kỳ sau tiếp tục học ở đây, xin hỏi em có cần làm đơn lại không ạ?\nThầy Cao: Đúng vậy. Đây là bảng biểu, năm tháng sinh, giới tính, số hộ chiếu đều phải điền, còn có địa chỉ liên lạc và số điện thoại liên lạc.\nMark: Thật xin lỗi, em sơ ý điền sai số hộ chiếu rồi, thầy có thể cho em một tờ đơn mới không ạ?\nThầy Cao: Không sao, không cần xin lỗi, ai cũng có lúc sơ ý điền sai. Đơn đăng ký bị người khác lấy hết rồi, thầy in lại cho em một bản, em đợi một chút.\n(Thầy Cao in, Mark điền đơn.)\nMark: Lần này em đã điền xong theo yêu cầu, xin hỏi còn cần làm việc gì khác nữa không ạ?\nThầy Cao: Em đưa hộ chiếu cho thầy, chúng tôi cần photo hộ chiếu một chút.",
        questions: ["填写申请表格时，应该提供哪些方面的信息？", "马克把申请表填错后，高老师批评他了吗？为什么？"],
      },
      {
        heading: "课文二 · 王静做饺子时手受伤了",
        zh: "李进：呀，你的手怎么流血了？等一下，我给你包起来。\n王静：没关系，我想给你做点儿羊肉饺子，刚才用刀切肉的时候把手弄破了。\n李进：你也太不小心了，不过好像不太严重，过几天就好了。衣服上也有一点儿血，你把衣服脱下来，我给你洗洗。\n王静：看来今天吃不上羊肉饺子了。\n李进：那我们就吃点儿别的。我常去的那家理发店附近有个餐厅，那里的包子很好吃，我一会儿去买一点儿。\n王静：好吧，我衣服口袋里有十几块零钱，买包子应该够。",
        vi: "Lý Tiến: Ối, tay em sao lại chảy máu thế? Đợi chút, anh băng lại cho em.\nVương Tĩnh: Không sao, em muốn làm cho anh ít bánh chẻo thịt dê, lúc nãy dùng dao thái thịt làm đứt tay.\nLý Tiến: Em cũng bất cẩn quá, nhưng hình như không nghiêm trọng lắm, vài hôm là khỏi. Trên áo cũng dính chút máu, em cởi áo ra, anh giặt cho.\nVương Tĩnh: Xem ra hôm nay không được ăn bánh chẻo thịt dê rồi.\nLý Tiến: Vậy chúng ta ăn món khác. Gần tiệm cắt tóc anh hay đến có một nhà hàng, bánh bao ở đó rất ngon, lát nữa anh đi mua một ít.\nVương Tĩnh: Được thôi, trong túi áo em có hơn chục đồng tiền lẻ, mua bánh bao chắc là đủ.",
        questions: ["王静的手是怎么弄破的？严重吗？", "今天他们能吃到羊肉饺子吗？如果吃不到，他们会怎么办？"],
      },
      {
        heading: "课文三 · 安娜帮助马克练习舞蹈动作",
        zh: "马克：我早上跟你打招呼，你没看见。想不到又在这儿碰见你了。\n安娜：真是对不起，我不是故意的，今天早上我忘戴眼镜了，看不清楚。\n马克：刚才我在旁边看到你跳中国舞了，没看出来你跳得这么好！难道你以前在你们国家就学过中国舞蹈吗？\n安娜：我小时候妈妈教我跳过两年的舞，所以稍微有点儿基础。再说，舞蹈不仅是一门艺术，也是一种“语言”，这种语言与国籍无关，无论哪个国家的人都能看懂。\n马克：太好了！我刚学习跳这种舞没多久，你帮我看看，我的这个动作对不对。\n安娜：你这个动作做得还是不太标准，我给你跳一遍。你仔细看着，应该像我这样：先抬胳膊，然后抬腿，最后头再向右转一下。",
        vi: "Mark: Sáng nay tớ chào cậu mà cậu không thấy. Không ngờ lại gặp cậu ở đây.\nAnna: Thật xin lỗi, tớ không cố ý đâu, sáng nay tớ quên đeo kính nên nhìn không rõ.\nMark: Lúc nãy tớ đứng bên cạnh xem cậu múa điệu múa Trung Quốc, không ngờ cậu múa hay thế! Chẳng lẽ trước đây ở nước cậu, cậu đã học múa Trung Quốc rồi à?\nAnna: Hồi nhỏ mẹ dạy tớ múa hai năm, nên cũng có chút nền tảng. Hơn nữa, múa không chỉ là một môn nghệ thuật mà còn là một loại “ngôn ngữ”, thứ ngôn ngữ này không liên quan đến quốc tịch, người nước nào cũng xem hiểu được.\nMark: Tuyệt quá! Tớ mới học điệu múa này chưa lâu, cậu xem giúp tớ động tác này đúng không.\nAnna: Động tác này cậu làm vẫn chưa chuẩn lắm, tớ múa cho cậu xem một lượt. Cậu nhìn kỹ nhé, phải như tớ thế này: trước tiên giơ tay lên, sau đó nhấc chân lên, cuối cùng quay đầu sang phải một chút.",
        questions: ["马克认为安娜中国舞跳得好的原因可能是什么？", "马克的那个动作做得正确吗？那个动作应该怎么做？"],
      },
      {
        heading: "课文四 · 马克想换房子",
        zh: "马克去年租的房子离马路很近，对面有大大小小的商店，周围环境非常吵。所以，房子还没到期，马克就开始着急换房子了。有一天，他在小区门口看到一个租房子的广告。广告上说房子交通方便，周围很安静，厨房很大。总的来说，这套房子他很满意，于是他就记下了房东的手机号码。可回家后打电话，电话总是占线。第二天，他路过小区门口时，又仔细看了一下广告，原来在记号码的时候写错了一个数字。",
        vi: "Căn nhà Mark thuê năm ngoái ở rất gần đường lớn, đối diện có các cửa hàng lớn nhỏ, môi trường xung quanh rất ồn ào. Vì vậy, nhà chưa hết hạn thuê, Mark đã bắt đầu sốt ruột muốn đổi nhà. Một hôm, anh ấy nhìn thấy một quảng cáo cho thuê nhà ở cổng khu chung cư. Quảng cáo nói căn nhà giao thông thuận tiện, xung quanh rất yên tĩnh, nhà bếp rất rộng. Nhìn chung, anh ấy rất hài lòng với căn nhà này, thế là anh ghi lại số điện thoại di động của chủ nhà. Nhưng về nhà gọi điện thì máy lúc nào cũng bận. Hôm sau, khi đi ngang qua cổng khu chung cư, anh lại xem kỹ quảng cáo một lần nữa, hóa ra lúc ghi số anh đã viết sai một chữ số.",
        questions: ["马克现在租的房子和广告上的房子各有哪些特点？", "马克为什么一直没联系上房东？"],
      },
      {
        heading: "课文五 · 乒乓球",
        zh: "很多外国人认为所有中国人都会功夫和乒乓球，其实只是喜爱这两种运动的中国人比较多。中国人特别喜欢打乒乓球，在中国你会发现到处都有乒乓球桌。像乒乓球、羽毛球、跑步等运动对条件要求不高，所以它们都成为人们运动不错的选择。人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。“乒乓球”这个名字也很有意思，“乒”和“乓”就是打球时发出的声音。在看乒乓球比赛时，尤其是在运动员发球的时候，观众要安静，禁止大声讲话或者离开座位随便走动。",
        vi: "Nhiều người nước ngoài cho rằng mọi người Trung Quốc đều biết võ kung fu và chơi bóng bàn, thực ra chỉ là người Trung Quốc yêu thích hai môn này khá nhiều mà thôi. Người Trung Quốc đặc biệt thích chơi bóng bàn, ở Trung Quốc bạn sẽ thấy đâu đâu cũng có bàn bóng bàn. Những môn như bóng bàn, cầu lông, chạy bộ… không đòi hỏi cao về điều kiện, vì vậy chúng đều trở thành lựa chọn vận động không tồi của mọi người. Người ta thường nói “sự sống nằm ở vận động”, nên nhiều người cứ đến cuối tuần là tới nhà thi đấu đánh vài trận bóng. Cái tên “乒乓球” (bóng bàn) cũng rất thú vị, “乒” (pīng) và “乓” (pāng) chính là âm thanh phát ra khi đánh bóng. Khi xem thi đấu bóng bàn, nhất là lúc vận động viên giao bóng, khán giả phải giữ yên lặng, cấm nói to hoặc rời khỏi chỗ ngồi đi lại tùy tiện.",
        questions: ["很多外国人对中国人有什么印象？这种印象对吗？为什么？", "“乒乓球”这个名字是怎么来的？看乒乓球比赛时要注意哪些问题？"],
      },
    ],
    notes: [
      "马克 (Mǎkè): Mark. 安娜 (Ānnà): Anna. 高老师: thầy Cao. 王静 (Wáng Jìng): Vương Tĩnh. 李进 (Lǐ Jìn): Lý Tiến.",
      "Văn hóa: 舌尖上的中国——饺子 (bánh chẻo). Bánh chẻo được gói trước giờ Tý đêm 30 Tết; 饺子 đồng âm với 交子 (giao thừa giờ Tý), hình giống thỏi vàng (元宝), tượng trưng cho may mắn, sum họp.",
    ],
  },

  grammar: [
    {
      word: "谁/什么/怎么… + 都/也",
      title: "Đại từ nghi vấn phiếm chỉ (疑问代词活用表示任指)",
      usages: [
        {
          label: "Cách dùng",
          explain: "Các đại từ nghi vấn 什么、谁、哪、哪儿、哪里、怎么… có thể dùng để chỉ bất kỳ người/vật nào: 什么 chỉ bất kỳ thứ gì, 谁 chỉ bất kỳ ai. Thường kết hợp với 都/也 trong câu.",
          examples: [
            "没关系，不用道歉，谁都有粗心填错的时候。",
            "昨天我做了一个奇怪的梦，但是早上起来怎么想都想不起来。",
            "“世界上没有免费的午餐”这句话是说，什么东西都要通过努力才能得到。",
          ],
        },
      ],
      note: "Luyện tập: 每个人都有自己的生活，___？(谁)；我已经练习了好几遍了，___？(怎么)",
    },
    {
      word: "上",
      title: "Bổ ngữ 上 (đạt được mục đích)",
      usages: [
        {
          label: "Bổ ngữ khả năng",
          explain: "Đặt sau động từ làm bổ ngữ khả năng (V不上 / V得上), diễn tả người ta có đạt được mục đích hay không khi thực hiện hành động.",
          examples: [
            "看来今天吃不上羊肉饺子了。",
            "现在堵车这么厉害，看来今天坐不上8点那趟去上海的飞机了。",
          ],
        },
        {
          label: "Bổ ngữ xu hướng (nghĩa mở rộng)",
          explain: "Đặt sau động từ, nghĩa mở rộng là hành động đã đạt được mục đích.",
          examples: ["一听到哥哥考上了经济专业的博士，我们全家都特别高兴。"],
        },
      ],
    },
    {
      word: "出来",
      title: "Bổ ngữ xu hướng 出来",
      usages: [
        {
          label: "Cách dùng",
          explain: "Đặt sau động từ làm bổ ngữ xu hướng, diễn tả hành động làm sự vật thay đổi trạng thái từ không có thành có, từ bị che khuất thành lộ rõ.",
          examples: [
            "有的人心里有什么看法或意见，嘴上就会直接说出来。",
            "你要的那篇文章我已经翻译出来了，你方便的时候就来取吧。",
            "刚才我在旁边看到你跳中国舞了，没看出来你跳得这么好！",
          ],
        },
      ],
      note: "比一比 出来—起来: (1) 出来 chỉ hướng từ trong ra ngoài, 起来 chỉ hướng từ dưới lên trên (拿不出来 / 坐起来). (2) 出来 nghĩa mở rộng: từ không thành có, từ ẩn thành hiện; 起来: hành động bắt đầu và tiếp diễn (算出来 / 热起来). (3) 想出来: nghĩ ra điều vốn chưa có; 想起来: nhớ lại điều đã quên (想不出来该选哪个 / 我想起来了).",
    },
    {
      word: "总的来说",
      title: "Thành phần chêm “nhìn chung, nói chung”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thường dùng làm thành phần xen kẽ (插入语), diễn tả người nói đưa ra nhận xét dựa trên tổng thể hoặc tình huống chủ yếu.",
          examples: [
            "广告上说房子交通方便，周围很安静，厨房很大。总的来说，这套房子他很满意。",
            "这个公司的工资虽然不算很高，但是奖金很多，所以总的来说收入还不错。",
            "很多人问去丽江旅游怎么样，总的来说，丽江景色不错，那里的人也很热情，去那里旅游是个不错的选择。",
          ],
        },
      ],
    },
    {
      word: "在于",
      title: "Động từ “nằm ở, chính là”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Thường dùng trong văn viết để chỉ ra bản chất của sự vật, có nghĩa “正是、就是”. Chủ ngữ thường là cụm danh từ; sau 在于 phải có danh từ, động từ hoặc câu ngắn làm tân ngữ.",
          examples: [
            "人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几场球。",
            "选择职业的关键在于兴趣，当你喜欢做一件事情的时候，你会带着热情去工作。",
            "没有人能一生都顺顺利利、没有失败。区别在于有的人能接受失败，找到失败的原因并继续努力；而有的人却在失败面前停下了脚步。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "请在表格上填好姓名、___、年龄、职业等，然后再给我们传真过来。", options: ["性别", "场", "吵", "禁止"], answer: "性别" },
    { sentence: "我觉得咱们还是换个地方住吧。这个小区太___了，我怕影响孩子学习和休息。", options: ["打招呼", "吵", "性别", "场"], answer: "吵" },
    { sentence: "在加油站这样的地方抽烟非常危险，因此，很多地方都___抽烟。", options: ["禁止", "打招呼", "场", "吵"], answer: "禁止" },
    { sentence: "要想更快适应新环境，比如，多和周围的人___，在别人遇到麻烦的时候去帮一把。", options: ["打招呼", "禁止", "性别", "场"], answer: "打招呼" },
    { sentence: "这个京剧我一直想看，下星期六是他们在这儿的最后一___演出。", options: ["场", "性别", "禁止", "吵"], answer: "场" },
    { sentence: "A：您付现金还是刷卡？B：现金。我带的___应该够了。", options: ["零钱", "座位", "占线", "道歉"], answer: "零钱" },
    { sentence: "我们一共四个人，麻烦你给我们找个安静点儿的___。", options: ["座位", "打印", "零钱", "占线"], answer: "座位" },
    { sentence: "提前点儿吧，咱们还得负责___会议材料呢。", options: ["打印", "道歉", "座位", "零钱"], answer: "打印" },
    { sentence: "我是专门来向您___的，我真的觉得很对不起您。", options: ["道歉", "占线", "打印", "座位"], answer: "道歉" },
    { sentence: "李经理的电话一直___，去办公室找他，敲了半天门，也没人开。", options: ["占线", "零钱", "道歉", "打印"], answer: "占线" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 3, distractors: [2, 13, 1] },
        { vocabId: 5, distractors: [6, 4, 11] },
        { vocabId: 7, distractors: [12, 8, 10] },
        { vocabId: 16, distractors: [15, 18, 17] },
        { vocabId: 20, distractors: [19, 21, 9] },
        { vocabId: 24, distractors: [25, 22, 23] },
        { vocabId: 28, distractors: [29, 27, 30] },
        { vocabId: 31, distractors: [32, 26, 14] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [4, 14, 17, 18, 20, 23, 26, 31],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "不小心", "把护照号码", "填错", "了", "。"], answer: "我不小心把护照号码填错了。", vi: "Em sơ ý điền sai số hộ chiếu rồi." },
        { tokens: ["你", "把衣服", "脱下来", "，", "我给你", "洗洗", "。"], answer: "你把衣服脱下来，我给你洗洗。", vi: "Em cởi áo ra, anh giặt cho." },
        { tokens: ["今天早上", "我", "忘", "戴眼镜", "了", "。"], answer: "今天早上我忘戴眼镜了。", vi: "Sáng nay tớ quên đeo kính rồi." },
        { tokens: ["这种语言", "与", "国籍", "无关", "。"], answer: "这种语言与国籍无关。", vi: "Thứ ngôn ngữ này không liên quan đến quốc tịch." },
        { tokens: ["我们", "要", "把护照", "复印", "一下", "。"], answer: "我们要把护照复印一下。", vi: "Chúng tôi cần photo hộ chiếu một chút." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Làm đơn học tiếp", text: "马克：老师，您好！我希望下个{{c1}}在这里继续学习，请问还需要重新申请吗？\n高老师：是的。给你表格，{{c2}}年月、{{c3}}、护照号码都要填，还有联系地址、联系电话。\n马克：真抱歉，我不小心把护照号码填错了，您能再给我一份新的申请表吗？\n高老师：没关系，不用{{c4}}，谁都有粗心填错的时候。我给你重新{{c5}}一份，你等一下。" },
        { title: "Bài 2 · Làm bánh chẻo bị đứt tay", text: "王静：没关系，我想给你做点儿羊肉{{c6}}，刚才用{{c7}}切肉的时候把手弄{{c8}}了。\n李进：你也太不小心了。衣服上也有一点儿血，你把衣服{{c9}}下来，我给你洗洗。" },
        { title: "Bài 3 · Học múa", text: "安娜：真是对不起，我不是故意的，今天早上我忘{{c10}}眼镜了，看不清楚。" },
      ],
      answers: { c1: "学期", c2: "出生", c3: "性别", c4: "道歉", c5: "打印", c6: "饺子", c7: "刀", c8: "破", c9: "脱", c10: "戴" },
      bank: ["学期", "出生", "性别", "道歉", "打印", "饺子", "刀", "破", "脱", "戴", "复印", "包子", "零钱"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về chuyện thuê nhà và môn bóng bàn.",
      passages: [
        { title: "Bài 4 · Đổi nhà", text: "马克去年{{e1}}的房子离马路很近，对面有大大小小的商店，周围环境非常{{e2}}。有一天，他在小区门口看到一个租房子的广告。广告上说房子交通方便，周围很安静，{{e3}}很大。总的来说，这套房子他很满意，于是他就记下了{{e4}}的手机号码。可回家后打电话，电话总是{{e5}}。" },
        { title: "Bài 5 · Bóng bàn", text: "很多外国人认为所有中国人都会{{e6}}和乒乓球。像乒乓球、{{e7}}、跑步等运动对条件要求不高。人们常说“生命在于运动”，所以很多人一到周末就会到体育馆打几{{e8}}球。在看乒乓球比赛时，观众要安静，{{e9}}大声讲话或者离开{{e10}}随便走动。" },
      ],
      answers: { e1: "租", e2: "吵", e3: "厨房", e4: "房东", e5: "占线", e6: "功夫", e7: "羽毛球", e8: "场", e9: "禁止", e10: "座位" },
      bank: ["租", "吵", "厨房", "房东", "占线", "功夫", "羽毛球", "场", "禁止", "座位", "乒乓球", "理发", "转"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "没关系，不用道歉，谁都有粗心填错的时候。", vi: "Không sao, không cần xin lỗi, ai cũng có lúc sơ ý điền sai.", keywords: ["xin lỗi", "ai cũng", "điền sai"] },
        { zh: "看来今天吃不上羊肉饺子了。", vi: "Xem ra hôm nay không được ăn bánh chẻo thịt dê rồi.", keywords: ["xem ra", "hôm nay", "bánh chẻo", "thịt dê"] },
        { zh: "舞蹈不仅是一门艺术，也是一种语言。", vi: "Múa không chỉ là một môn nghệ thuật mà còn là một loại ngôn ngữ.", keywords: ["múa", "nghệ thuật", "ngôn ngữ"] },
        { zh: "总的来说，这套房子他很满意。", vi: "Nhìn chung, anh ấy rất hài lòng với căn nhà này.", keywords: ["nhìn chung", "hài lòng", "căn nhà"] },
        { zh: "人们常说“生命在于运动”。", vi: "Người ta thường nói “sự sống nằm ở vận động”.", keywords: ["thường nói", "sự sống", "vận động"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tôi quên đeo kính rồi, nhìn không rõ.", answers: ["我忘戴眼镜了，看不清楚。", "我忘了戴眼镜，看不清楚。"] },
        { vi: "Điện thoại lúc nào cũng bận máy.", answers: ["电话总是占线。", "电话一直占线。"] },
        { vi: "Anh trai tôi đã thi đỗ tiến sĩ chuyên ngành kinh tế.", answers: ["我哥哥考上了经济专业的博士。", "哥哥考上了经济专业的博士。"] },
        { vi: "Mỗi cuối tuần anh ấy đều đến nhà thi đấu đánh vài trận bóng.", answers: ["他每个周末都到体育馆打几场球。", "每个周末他都到体育馆打几场球。", "他每个周末都去体育馆打几场球。"] },
        { vi: "Ai cũng có lúc sơ ý.", answers: ["谁都有粗心的时候。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "马克下个学期还想在这里继续学习。", a: true },
        { q: "马克第一次就把申请表填对了。", a: false },
        { q: "王静做饺子时用刀把手弄破了。", a: true },
        { q: "王静的手伤得很严重。", a: false },
        { q: "安娜小时候妈妈教她跳过两年的舞。", a: true },
        { q: "马克的舞蹈动作做得很标准。", a: false },
        { q: "马克打电话总是占线，是因为他记号码时写错了一个数字。", a: true },
        { q: "看乒乓球比赛时，观众可以大声讲话。", a: false },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "不用道歉，谁都有粗心的时候。",
        "看来今天吃不上羊肉饺子了。",
        "今天早上我忘戴眼镜了。",
        "总的来说，这套房子他很满意。",
        "很多人一到周末就会到体育馆打几场球。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "功夫和乒乓球运动在中国很普遍。请介绍一下在你们国家，哪种运动最普遍。 (Võ thuật và bóng bàn rất phổ biến ở Trung Quốc. Hãy giới thiệu môn thể thao phổ biến nhất ở nước bạn.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 19 (đại từ nghi vấn phiếm chỉ + 都, 上, 出来, 总的来说, 在于).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["总的来说", "在于", "出来", "谁都", "什么都", "哪儿都", "怎么都", "不上", "得上"],
      minGrammar: 2,
      sample: "在我们国家，最普遍的运动是足球。无论男女老少，谁都喜欢看足球比赛。踢足球对条件要求不高，在公园、学校门口，到处都能看到踢球的孩子。除了足球以外，羽毛球也很受欢迎，很多人一到周末就会去体育馆打几场球。人们常说“生命在于运动”，所以我每天早上都去跑步。总的来说，运动让我们的生活变得更健康、更快乐。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 出来 / 起来", points: 6,
      subtitle: "Chọn 出来 hoặc 起来 cho mỗi chỗ trống.",
      grammarWord: "出来 / 起来",
      options: ["出来", "起来"],
      items: [
        { q: "久坐办公室的人有时间一定要站___活动活动。", answers: ["起来"] },
        { q: "这个主意好像是三班的一个学生想___的。", answers: ["出来"] },
        { q: "声音听着挺熟悉的，不过我一下子想不___了。", answers: ["起来"] },
        { q: "遇到烦恼事时，你应该想一些办法让自己从不高兴的心情中走___。", answers: ["出来"] },
        { q: "我的日记本掉到沙发后面了，拿不___了。", answers: ["出来"] },
        { q: "早上六点，电话突然响了，他连忙坐___接电话。", answers: ["起来"] },
        { q: "你能算___这两个地方之间的距离是多少公里吗？", answers: ["出来"] },
        { q: "尽管现在才4月，天气已经开始慢慢热___。", answers: ["起来"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 总的来说", points: 6,
      subtitle: "Điền thành phần chêm thích hợp vào chỗ trống (总的来说 – nhìn chung).",
      grammarWord: "总的来说",
      items: [
        { q: "广告上说房子交通方便，周围很安静，厨房很大。___，这套房子他很满意。", answers: ["总的来说"] },
        { q: "这个公司的工资虽然不算很高，但是奖金很多，所以___收入还不错。", answers: ["总的来说"] },
        { q: "很多人问去丽江旅游怎么样，___，丽江景色不错，那里的人也很热情。", answers: ["总的来说"] },
        { q: "去国外留学有好处也有坏处，___，好处比坏处多。", answers: ["总的来说"] },
        { q: "这件衣服价格有点儿高，不过___，质量还是很好的。", answers: ["总的来说"] },
        { q: "这次考试有几个题我做错了，___，成绩还可以。", answers: ["总的来说"] },
        { q: "这个城市冬天有点儿冷，___，还是很适合生活的。", answers: ["总的来说"] },
        { q: "虽然工作中遇到了一些困难，但___，这一年过得很顺利。", answers: ["总的来说"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: Đại từ nghi vấn phiếm chỉ", points: 5,
      subtitle: "Chọn đại từ nghi vấn thích hợp (谁 / 什么 / 怎么 / 哪儿) để chỉ “bất kỳ”.",
      grammarWord: "谁/什么/怎么/哪儿 + 都/也",
      options: ["谁", "什么", "怎么", "哪儿"],
      items: [
        { q: "没关系，不用道歉，___都有粗心填错的时候。", answers: ["谁"] },
        { q: "昨天我做了一个奇怪的梦，但是早上起来___想都想不起来。", answers: ["怎么"] },
        { q: "世界上没有免费的午餐，___东西都要通过努力才能得到。", answers: ["什么"] },
        { q: "周末我___都不想去，只想在家休息。", answers: ["哪儿"] },
        { q: "每个人都有自己的生活，___也不能决定别人的生活。", answers: ["谁"] },
        { q: "他太累了，___都不想吃，就去睡觉了。", answers: ["什么"] },
        { q: "这个字我已经练习了好几遍了，___写都写不好。", answers: ["怎么"] },
        { q: "在中国，你会发现___都有乒乓球桌。", answers: ["哪儿"] },
      ],
    },
  ],
};
