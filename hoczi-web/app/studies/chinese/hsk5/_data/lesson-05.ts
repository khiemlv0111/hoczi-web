import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第5课 济南的泉水 (The Springs in Jinan)
// Nguồn: slide bài 5 và bộ bài tập "HSK5 tiêu chuẩn bài 5" trong hsk5/docs.
export const lesson05: Lesson = {
  level: "hsk5",
  no: 5,
  slug: "bai-5",
  zh: "济南的泉水",
  pinyin: "Jǐnán de quánshuǐ",
  vi: "Suối nước ở Tế Nam",
  en: "The Springs in Jinan",
  topic: "城市与自然 · Thành phố và thiên nhiên",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 悠久、记载、文字、形状、描写、赞美、天然、分布、独特、反映、形成…",
    "Nắm cách dùng các động từ: 救、抢、晕、埋、为、碰; giới từ 于.",
    "Hiểu và dùng được 于、从而; phân biệt 美丽 và 优美.",
    "Đọc hiểu bài khóa về lịch sử, truyền thuyết và nguồn gốc suối nước ở Tế Nam – “thành phố suối”.",
    "Thảo luận về tầm quan trọng của nước và viết đoạn văn 「节约每一滴水」."
  ],
  warmUp: [
    {
      zh: "你认为“天然的泉水”应该是什么样的？",
      vi: "Theo bạn, “nước suối tự nhiên” phải như thế nào?"
    },
    {
      zh: "我们买的瓶装水，是不是“天然的泉水”？为什么？",
      vi: "Nước đóng chai chúng ta mua có phải là “nước suối tự nhiên” không? Vì sao?"
    },
    {
      zh: "在你的国家，有关于“龙”的传说吗？",
      vi: "Ở nước bạn có truyền thuyết nào về “rồng” không?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "悠久",
      py: "yōujiǔ",
      pos: "tt.",
      meaning: "lâu đời",
      example: "济南的泉水，历史悠久。",
      exampleVi: "Suối nước Tế Nam có lịch sử lâu đời."
    },
    {
      id: 2,
      han: "文字",
      py: "wénzì",
      pos: "dt.",
      meaning: "chữ viết",
      example: "最早的文字记载可以推到3000多年前。",
      exampleVi: "Ghi chép bằng chữ viết sớm nhất có thể truy về hơn 3000 năm trước."
    },
    {
      id: 3,
      han: "记载",
      py: "jìzǎi",
      pos: "đg.",
      meaning: "ghi chép",
      example: "最早的文字记载可以推到3000多年前。",
      exampleVi: "Ghi chép bằng chữ viết sớm nhất có thể truy về hơn 3000 năm trước."
    },
    {
      id: 4,
      han: "形状",
      py: "xíngzhuàng",
      pos: "dt.",
      meaning: "hình dạng",
      example: "许多文人都对它的声音、颜色、形状、味道进行过描写。",
      exampleVi: "Nhiều văn nhân đã miêu tả về âm thanh, màu sắc, hình dạng, hương vị của nó."
    },
    {
      id: 5,
      han: "描写",
      py: "miáoxiě",
      pos: "đg.",
      meaning: "miêu tả",
      example: "请你用中文描写一下这个人。",
      exampleVi: "Bạn hãy dùng tiếng Trung miêu tả người này."
    },
    {
      id: 6,
      han: "赞美",
      py: "zànměi",
      pos: "đg.",
      meaning: "ca ngợi, khen ngợi",
      example: "留下了许多赞美泉水的诗文。",
      exampleVi: "Để lại rất nhiều thơ văn ca ngợi suối nước."
    },
    {
      id: 7,
      han: "诗",
      py: "shī",
      pos: "dt.",
      meaning: "thơ",
      example: "李白是唐朝的大诗人。",
      exampleVi: "Lý Bạch là nhà thơ lớn thời Đường."
    },
    {
      id: 8,
      han: "优美",
      py: "yōuměi",
      pos: "tt.",
      meaning: "đẹp đẽ, tao nhã (động tác, cảm nhận)",
      example: "演员们的动作十分优美。",
      exampleVi: "Động tác của các diễn viên vô cùng đẹp đẽ."
    },
    {
      id: 9,
      han: "善良",
      py: "shànliáng",
      pos: "tt.",
      meaning: "lương thiện, hiền lành",
      example: "济南城里有个善良的青年。",
      exampleVi: "Trong thành Tế Nam có một chàng trai lương thiện."
    },
    {
      id: 10,
      han: "传说",
      py: "chuánshuō",
      pos: "dt.",
      meaning: "truyền thuyết",
      example: "中国有许多神话传说。",
      exampleVi: "Trung Quốc có rất nhiều truyền thuyết thần thoại."
    },
    {
      id: 11,
      han: "产生",
      py: "chǎnshēng",
      pos: "đg.",
      meaning: "nảy sinh, phát sinh",
      example: "从而也产生了许多关于泉水的美丽传说。",
      exampleVi: "Từ đó cũng nảy sinh nhiều truyền thuyết đẹp về suối nước."
    },
    {
      id: 12,
      han: "从而",
      py: "cóng'ér",
      pos: "lt.",
      meaning: "từ đó, do đó",
      example: "他经过不断努力，从而实现自己的梦想。",
      exampleVi: "Anh ấy qua nỗ lực không ngừng, từ đó thực hiện được ước mơ của mình."
    },
    {
      id: 13,
      han: "感激",
      py: "gǎnjī",
      pos: "đg.",
      meaning: "cảm kích, biết ơn",
      example: "我对妈妈充满了感激。",
      exampleVi: "Tôi tràn đầy cảm kích với mẹ."
    },
    {
      id: 14,
      han: "充满",
      py: "chōngmǎn",
      pos: "đg.",
      meaning: "tràn đầy, chứa đầy",
      example: "这个街道挂满了灯笼，充满了喜庆的氛围。",
      exampleVi: "Con phố này treo đầy đèn lồng, tràn ngập không khí vui tươi."
    },
    {
      id: 15,
      han: "救",
      py: "jiù",
      pos: "đg.",
      meaning: "cứu",
      example: "他学习医术，救了很多人。",
      exampleVi: "Anh ấy học y thuật, đã cứu được rất nhiều người."
    },
    {
      id: 16,
      han: "抢",
      py: "qiǎng",
      pos: "đg.",
      meaning: "cướp, giành",
      example: "她的包被坏人抢走了。",
      exampleVi: "Túi của cô ấy bị kẻ xấu cướp mất."
    },
    {
      id: 17,
      han: "晕",
      py: "yūn",
      pos: "đg.",
      meaning: "ngất, choáng",
      example: "他在路边救了一位晕倒的老人。",
      exampleVi: "Anh ấy đã cứu một cụ già bị ngất bên đường."
    },
    {
      id: 18,
      han: "埋",
      py: "mái",
      pos: "đg.",
      meaning: "chôn, vùi",
      example: "他把壶埋入地下藏了起来。",
      exampleVi: "Anh ấy chôn cái bình xuống đất giấu đi."
    },
    {
      id: 19,
      han: "为",
      py: "wéi",
      pos: "đg.",
      meaning: "thành, trở thành",
      example: "压力也可以变为动力。",
      exampleVi: "Áp lực cũng có thể biến thành động lực."
    },
    {
      id: 20,
      han: "碰",
      py: "pèng",
      pos: "đg.",
      meaning: "gặp, va chạm",
      example: "今天上学的路上，我碰到了小明。",
      exampleVi: "Trên đường đi học hôm nay, tôi tình cờ gặp Tiểu Minh."
    },
    {
      id: 21,
      han: "于",
      py: "yú",
      pos: "gt.",
      meaning: "ở, từ, đối với (≈ 在/从/对/向/比)",
      example: "这家公司成立于1997年。",
      exampleVi: "Công ty này thành lập vào năm 1997."
    },
    {
      id: 22,
      han: "如今",
      py: "rújīn",
      pos: "dt.",
      meaning: "hiện nay, ngày nay",
      example: "如今的济南市区内，分布着大大小小七百多个天然泉。",
      exampleVi: "Ngày nay trong khu vực thành phố Tế Nam, phân bố hơn 700 con suối tự nhiên lớn nhỏ."
    },
    {
      id: 23,
      han: "天然",
      py: "tiānrán",
      pos: "tt.",
      meaning: "tự nhiên, thiên nhiên",
      example: "这些景色是天然形成的。",
      exampleVi: "Những cảnh sắc này được hình thành một cách tự nhiên."
    },
    {
      id: 24,
      han: "分布",
      py: "fēnbù",
      pos: "đg.",
      meaning: "phân bố",
      example: "如今的济南市区内，分布着大大小小七百多个天然泉。",
      exampleVi: "Ngày nay trong khu vực thành phố Tế Nam, phân bố hơn 700 con suối tự nhiên lớn nhỏ."
    },
    {
      id: 25,
      han: "独特",
      py: "dútè",
      pos: "tt.",
      meaning: "độc đáo",
      example: "这颗珍珠和其他珍珠不一样，样子非常独特。",
      exampleVi: "Viên ngọc trai này khác với những viên khác, hình dáng vô cùng độc đáo."
    },
    {
      id: 26,
      han: "反映",
      py: "fǎnyìng",
      pos: "đg.",
      meaning: "phản ánh",
      example: "济南泉水的优美，可以从它们的名字中反映出来。",
      exampleVi: "Vẻ đẹp của suối nước Tế Nam có thể được phản ánh qua tên gọi của chúng."
    },
    {
      id: 27,
      han: "珍珠",
      py: "zhēnzhū",
      pos: "dt.",
      meaning: "ngọc trai",
      example: "以形状命名的珍珠泉。",
      exampleVi: "Suối Trân Châu được đặt tên theo hình dạng."
    },
    {
      id: 28,
      han: "形成",
      py: "xíngchéng",
      pos: "đg.",
      meaning: "hình thành",
      example: "这些景色是天然形成的。",
      exampleVi: "Những cảnh sắc này được hình thành một cách tự nhiên."
    },
    {
      id: 29,
      han: "广大",
      py: "guǎngdà",
      pos: "tt.",
      meaning: "rộng lớn",
      example: "济南的泉水，来自于济南市以南的广大山区。",
      exampleVi: "Suối nước Tế Nam bắt nguồn từ vùng núi rộng lớn phía nam thành phố."
    },
    {
      id: 30,
      han: "表面",
      py: "biǎomiàn",
      pos: "dt.",
      meaning: "bề mặt",
      example: "陆地表面的水很容易进入地下。",
      exampleVi: "Nước trên bề mặt đất liền rất dễ thấm vào lòng đất."
    },
    {
      id: 31,
      han: "地区",
      py: "dìqū",
      pos: "dt.",
      meaning: "khu vực, vùng",
      example: "在这种石灰岩地区，陆地表面的水很容易进入地下。",
      exampleVi: "Ở vùng đá vôi như thế này, nước bề mặt rất dễ thấm vào lòng đất."
    },
    {
      id: 32,
      han: "角度",
      py: "jiǎodù",
      pos: "dt.",
      meaning: "góc độ",
      example: "我们要从不同角度思考问题。",
      exampleVi: "Chúng ta phải suy nghĩ vấn đề từ nhiều góc độ khác nhau."
    },
    {
      id: 33,
      han: "斜",
      py: "xié",
      pos: "tt.",
      meaning: "nghiêng, xiên",
      example: "山区的石灰岩层，以大约三十度的角度，由南向北斜。",
      exampleVi: "Tầng đá vôi vùng núi nghiêng từ nam sang bắc với góc khoảng 30 độ."
    },
    {
      id: 34,
      han: "挡",
      py: "dǎng",
      pos: "đg.",
      meaning: "chặn, cản",
      example: "地下水流到这里，碰到火成岩挡住了路。",
      exampleVi: "Nước ngầm chảy đến đây, gặp đá mácma chặn đường."
    },
    {
      id: 35,
      han: "地势",
      py: "dìshì",
      pos: "dt.",
      meaning: "địa thế, địa hình",
      example: "济南旧城一带，地势低。",
      exampleVi: "Khu vực thành cổ Tế Nam có địa thế thấp."
    },
    {
      id: 36,
      han: "壶",
      py: "hú",
      pos: "dt.",
      meaning: "ấm, bình",
      example: "他把壶埋入地下藏了起来。",
      exampleVi: "Anh ấy chôn cái bình xuống đất giấu đi."
    },
    {
      id: 37,
      han: "玉",
      py: "yù",
      pos: "dt.",
      meaning: "ngọc",
      example: "鲍全从龙王那儿求到了治病救人的白玉壶。",
      exampleVi: "Bào Toàn xin được từ Long Vương một chiếc bình ngọc trắng chữa bệnh cứu người."
    },
    {
      id: 38,
      han: "治（疗）",
      py: "zhìliáo",
      pos: "đg.",
      meaning: "điều trị, chữa bệnh",
      example: "这种药主要用于感冒的治疗。",
      exampleVi: "Loại thuốc này chủ yếu dùng để điều trị cảm cúm."
    },
    {
      id: 39,
      han: "龙",
      py: "lóng",
      pos: "dt.",
      meaning: "rồng",
      example: "这老人其实是东海龙王的哥哥。",
      exampleVi: "Ông lão này thực ra là anh trai của Long Vương Đông Hải."
    },
    {
      id: 40,
      han: "亿",
      py: "yì",
      pos: "số từ",
      meaning: "trăm triệu",
      example: "这些山区的岩石是大约四亿年前形成的。",
      exampleVi: "Đá ở những vùng núi này được hình thành khoảng 400 triệu năm trước."
    },
    {
      id: 41,
      han: "圆形",
      py: "yuánxíng",
      pos: "dt.",
      meaning: "hình tròn",
      example: "这个盘子是圆形的。",
      exampleVi: "Cái đĩa này là hình tròn.",
      group: "extended"
    },
    {
      id: 42,
      han: "三角形",
      py: "sānjiǎoxíng",
      pos: "dt.",
      meaning: "hình tam giác",
      example: "这个标志是三角形的。",
      exampleVi: "Biển báo này có hình tam giác.",
      group: "extended"
    },
    {
      id: 43,
      han: "正方形",
      py: "zhèngfāngxíng",
      pos: "dt.",
      meaning: "hình vuông",
      example: "这张桌子是正方形的。",
      exampleVi: "Cái bàn này có hình vuông.",
      group: "extended"
    },
    {
      id: 44,
      han: "长方形",
      py: "chángfāngxíng",
      pos: "dt.",
      meaning: "hình chữ nhật",
      example: "这本书是长方形的。",
      exampleVi: "Cuốn sách này có hình chữ nhật.",
      group: "extended"
    },
    {
      id: 45,
      han: "椭圆形",
      py: "tuǒyuánxíng",
      pos: "dt.",
      meaning: "hình elip, hình bầu dục",
      example: "这个镜子是椭圆形的。",
      exampleVi: "Chiếc gương này có hình bầu dục.",
      group: "extended"
    },
    {
      id: 46,
      han: "五角星",
      py: "wǔjiǎoxīng",
      pos: "dt.",
      meaning: "ngôi sao năm cánh",
      example: "国旗上有五角星。",
      exampleVi: "Trên quốc kỳ có ngôi sao năm cánh.",
      group: "extended"
    },
    {
      id: 47,
      han: "爱心",
      py: "àixīn",
      pos: "dt.",
      meaning: "hình trái tim; lòng yêu thương",
      example: "她画了一个爱心。",
      exampleVi: "Cô ấy vẽ một hình trái tim.",
      group: "extended"
    },
    {
      id: 48,
      han: "六边形",
      py: "liùbiānxíng",
      pos: "dt.",
      meaning: "hình lục giác",
      example: "蜂窝是六边形的。",
      exampleVi: "Tổ ong có hình lục giác.",
      group: "extended"
    },
    {
      id: 49,
      han: "梯形",
      py: "tīxíng",
      pos: "dt.",
      meaning: "hình thang",
      example: "这块地是梯形的。",
      exampleVi: "Mảnh đất này có hình thang.",
      group: "extended"
    },
    {
      id: 50,
      han: "平行四边形",
      py: "píngxíng sìbiānxíng",
      pos: "dt.",
      meaning: "hình bình hành",
      example: "数学课上老师讲了平行四边形。",
      exampleVi: "Trong giờ toán, cô giáo giảng về hình bình hành.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 济南的泉水",
    paragraphs: [
      {
        zh: "济南的泉水，历史悠久，最早的文字记载可以推到3000多年前。许多文人都对它的声音、颜色、形状、味道进行过描写，留下了许多赞美泉水的诗文。而济南的老百姓住在泉边，喝着这甜美的泉水，自然对它充满感激之情，从而也产生了许多关于泉水的美丽传说。",
        vi: "Suối nước Tế Nam có lịch sử lâu đời, ghi chép bằng văn tự sớm nhất có thể truy về hơn 3000 năm trước. Nhiều văn nhân từng miêu tả âm thanh, màu sắc, hình dáng, mùi vị của nó, để lại nhiều thơ văn ca ngợi suối nước. Còn người dân Tế Nam sống bên suối, uống dòng nước ngọt lành này, tự nhiên tràn đầy lòng biết ơn với nó, từ đó cũng nảy sinh nhiều truyền thuyết đẹp về suối nước.",
        questions: ["济南泉水的历史怎么样？文人为什么赞美它？老百姓又为什么感激它？", "你觉得“文人”是什么意思？"]
      },
      {
        zh: "相传很久以前，济南城里有个善良的青年，名叫鲍全，他学习医术，救了很多人。一次，他在路边救了一位晕倒的老人，并把老人接回家照顾。这老人其实是东海龙王的哥哥。通过老人的介绍，鲍全从龙王那儿求到了治病救人的白玉壶。为了不被坏人抢走，他把壶埋入地下藏了起来，于是就变成了今天有“天下第一泉”美名的趵突泉。",
        vi: "Tương truyền rất lâu về trước, trong thành Tế Nam có một chàng trai lương thiện tên là Bào Toàn, anh học nghề y, cứu được rất nhiều người. Một lần, anh cứu một cụ già ngất xỉu bên đường và đưa cụ về nhà chăm sóc. Cụ già ấy thực ra là anh trai của Long Vương Đông Hải. Nhờ cụ giới thiệu, Bào Toàn xin được từ Long Vương chiếc bình ngọc trắng chữa bệnh cứu người. Để không bị kẻ xấu cướp mất, anh chôn chiếc bình xuống đất giấu đi, thế là nó biến thành suối Báo Đột ngày nay – nơi mang danh “đệ nhất tuyền thiên hạ”.",
        questions: ["趵突泉有一个怎样的美名？青年鲍全跟它有什么关系？", "请用重点词语复述故事：鲍全、救、龙王、白玉壶、埋"]
      },
      {
        zh: "如今的济南市区内，分布着大大小小七百多个天然泉，这在国内外城市中是极为少有的。有如此之多的泉，名字当然也少不了。济南泉水的优美，还可从那独特的名字上反映出来，如：以人名命名的舜泉，以动物命名的黑虎泉，以形状命名的珍珠泉，等等。",
        vi: "Ngày nay trong nội thành Tế Nam phân bố hơn bảy trăm con suối tự nhiên lớn nhỏ, điều này cực kỳ hiếm thấy ở các thành phố trong và ngoài nước. Có nhiều suối như vậy, tên gọi đương nhiên cũng không ít. Vẻ đẹp của suối nước Tế Nam còn có thể thấy qua những cái tên độc đáo, như: suối Thuấn đặt theo tên người, suối Hắc Hổ đặt theo tên động vật, suối Trân Châu đặt theo hình dáng, v.v.",
        questions: ["如今的济南城有多少天然泉？举例说明它们是怎么命名的？"]
      },
      {
        zh: "说到这里，您也许要问，这么多、这么好的泉水是如何形成的呢？济南的泉水，来自于济南市以南的广大山区，这些山区的岩石是大约四亿年前形成的一层厚厚的石灰岩。在这种石灰岩地区，陆地表面的水很容易进入地下。山区的石灰岩层，以大约三十度的角度，由南向北斜，因此大量的地下水向济南运动。而济南市区的地下岩石变为了火成岩，地下水流到这里，碰到火成岩挡住了路，就积蓄起来，越积越多。它无处可流，就得另找出路。济南旧城一带，地势低，有的地方甚至低过了地下水的水面，地下水就冲出地表，形成了众多的泉水。这就是济南“泉城”美名得来的原因。",
        vi: "Nói đến đây, có lẽ bạn sẽ hỏi: nhiều suối nước tốt như vậy được hình thành thế nào? Suối nước Tế Nam bắt nguồn từ vùng núi rộng lớn phía nam thành phố, đá ở vùng núi này là một lớp đá vôi dày hình thành khoảng bốn trăm triệu năm trước. Ở vùng đá vôi như vậy, nước trên bề mặt đất rất dễ thấm xuống lòng đất. Lớp đá vôi vùng núi nghiêng từ nam xuống bắc với góc khoảng ba mươi độ, vì vậy lượng lớn nước ngầm chảy về phía Tế Nam. Còn đá dưới nội thành Tế Nam lại chuyển thành đá mácma, nước ngầm chảy đến đây gặp đá mácma chặn đường liền tích tụ lại, càng tụ càng nhiều. Không còn chỗ chảy, nó phải tìm lối ra khác. Khu phố cổ Tế Nam địa thế thấp, có chỗ thậm chí thấp hơn mặt nước ngầm, nước ngầm liền phun lên khỏi mặt đất, tạo thành rất nhiều suối. Đó chính là lý do Tế Nam có mỹ danh “thành phố suối”.",
        questions: ["济南的泉水是从哪儿来的？", "为什么济南会有这么多的泉水？", "请用重点词语复述故事：来自于、岩石、角度、斜、挡、积蓄、冲"]
      }
    ],
    notes: [
      "济南 (Jǐnán): Tế Nam, thủ phủ tỉnh Sơn Đông, được gọi là 泉城 “thành phố suối”.",
      "趵突泉 (Bàotū Quán): suối Báo Đột; 舜泉 (Shùn Quán): suối Thuấn; 黑虎泉: suối Hắc Hổ; 珍珠泉: suối Trân Châu.",
      "鲍全 (Bào Quán): Bào Toàn; 龙王: Long Vương (vua rồng)."
    ]
  },
  grammar: [
    {
      word: "美丽 / 优美",
      title: "Phân biệt 美丽 / 优美",
      usages: [
        {
          label: "美丽",
          explain: "Tả cảm nhận thị giác, thiên về tướng mạo, vóc dáng, ăn diện; biểu thị đẹp đẽ, cao sang.",
          examples: ["她有一双美丽的大眼睛。"]
        },
        {
          label: "优美",
          explain: "Thiên về tả động tác, âm thanh, hình tượng đem lại cảm nhận tốt đẹp; có thể tả nhiều loại cảm nhận khác ngoài thị giác.",
          examples: ["演员们的动作十分优美。"]
        }
      ],
      note: "Cả hai đều là tính từ tả phong cảnh/môi trường đẹp và có thể thay thế cho nhau khi tả phong cảnh chung chung (风景美丽/优美). Nhưng khi tả âm thanh, động tác, chỉ dùng được 优美; khi tả tướng mạo, chỉ dùng được 美丽."
    },
    {
      word: "于",
      title: "Giới từ đa nghĩa (≈ 在/从/对/向/比)",
      usages: [
        {
          label: "于",
          explain: "Giới từ văn viết, tương đương \"在/从/对/向/比\" tùy ngữ cảnh, thường đứng sau động từ.",
          examples: ["这家公司成立于1997年。（=在）济南的泉水来自于广大山区。（=从）"]
        }
      ],
      note: "于 là giới từ trang trọng, đa nghĩa, hay gặp trong văn viết/báo cáo/học thuật HSK5+. Khi viết lại câu bằng 于, thường ghép trực tiếp sau động từ: 成立于、来自于、用于、高于、助于、求助于..."
    },
    {
      word: "从而",
      title: "Liên từ nhân quả \"từ đó, do đó\"",
      usages: [
        {
          label: "从而",
          explain: "Liên từ nối hai vế câu: vế trước nêu nguyên nhân/phương pháp, vế sau nêu kết quả/mục đích đạt được.",
          examples: ["在学习过程中及时复习，可以加深理解，从而取得更好的成绩。"]
        }
      ],
      note: "从而 thường đứng đầu vế câu thứ hai, mang nghĩa \"từ đó, do đó, nhờ vậy mà\". Khác với 因此 (chỉ nêu kết quả đơn thuần), 从而 nhấn mạnh mối liên hệ nhân-quả logic, thường dùng trong văn viết trang trọng, báo cáo, luận văn."
    }
  ],
  wordChoice: [
    {
      sentence: "她的包被坏人___走了，没有钱打的回家。",
      options: ["救", "晕", "抢", "埋", "为", "碰", "于"],
      answer: "抢"
    },
    {
      sentence: "那个女孩儿来自___一个美丽的乡村。",
      options: ["救", "晕", "抢", "埋", "为", "碰", "于"],
      answer: "于"
    },
    {
      sentence: "他把宝贝___在地下，谁都找不到。",
      options: ["救", "晕", "抢", "埋", "为", "碰", "于"],
      answer: "埋"
    },
    {
      sentence: "昨天逛街时，___到了多年没见的老同学。",
      options: ["救", "晕", "抢", "埋", "为", "碰", "于"],
      answer: "碰"
    },
    {
      sentence: "当年互相不喜欢的两个人，多年后竟然成___了最好的朋友。",
      options: ["救", "晕", "抢", "埋", "为", "碰", "于"],
      answer: "为"
    },
    {
      sentence: "这篇文章的语言生动___。",
      options: ["美丽", "优美"],
      answer: "优美"
    },
    {
      sentence: "我这次来是想当面向你表示___的。",
      options: ["感激", "感谢"],
      answer: "感谢"
    },
    {
      sentence: "护士小姐___女儿很勇敢，本来很怕打针的她这次竟然没哭。",
      options: ["表扬", "赞美"],
      answer: "表扬"
    },
    {
      sentence: "这首诗主要___了一对年轻人的恋爱经历。",
      options: ["于", "为", "充满", "从而", "产生", "描写"],
      answer: "描写"
    },
    {
      sentence: "新产品很受顾客欢迎，使我对公司的未来___信心。",
      options: ["于", "为", "充满", "从而", "产生", "描写"],
      answer: "充满"
    },
    {
      sentence: "我担心长期吃这种药会对身体___不好的影响。",
      options: ["于", "为", "充满", "从而", "产生", "描写"],
      answer: "产生"
    },
    {
      sentence: "换一个角度考虑，也许正好就能发现问题的关键，___找到解决问题的答案。",
      options: ["于", "为", "充满", "从而", "产生", "描写"],
      answer: "从而"
    }
  ],
  practice: [
    {
      id: "listen",
      icon: "🎧",
      title: "Phần 1 · Nghe - Nối âm với chữ Hán",
      points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      kind: "listen-pick",
      items: [
        {
          vocabId: 1,
          distractors: [23, 25, 8]
        },
        {
          vocabId: 3,
          distractors: [2, 11, 26]
        },
        {
          vocabId: 6,
          distractors: [13, 15, 8]
        },
        {
          vocabId: 9,
          distractors: [25, 8, 1]
        },
        {
          vocabId: 10,
          distractors: [27, 39, 37]
        },
        {
          vocabId: 14,
          distractors: [13, 11, 6]
        },
        {
          vocabId: 27,
          distractors: [41, 43, 46]
        },
        {
          vocabId: 29,
          distractors: [31, 35, 30]
        }
      ]
    },
    {
      id: "pinyin",
      icon: "✍️",
      title: "Phần 2 · Điền phiên âm (pinyin) cho chữ Hán",
      points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      kind: "pinyin",
      vocabIds: [5, 11, 13, 25, 26, 35, 38, 40]
    },
    {
      id: "order",
      icon: "🧩",
      title: "Phần 3 · Sắp xếp câu (chữ Hán)",
      points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      kind: "order",
      items: [
        {
          tokens: ["济南的泉水", "历史", "悠久", "。"],
          answer: "济南的泉水历史悠久。",
          vi: "Suối nước Tế Nam có lịch sử lâu đời."
        },
        {
          tokens: ["许多", "文人", "都", "赞美", "泉水", "。"],
          answer: "许多文人都赞美泉水。",
          vi: "Nhiều văn nhân đều ca ngợi suối nước."
        },
        {
          tokens: ["鲍全", "救了", "一位", "晕倒的老人", "。"],
          answer: "鲍全救了一位晕倒的老人。",
          vi: "Bào Toàn đã cứu một cụ già bị ngất."
        },
        {
          tokens: ["济南的泉水", "来自于", "广大山区", "。"],
          answer: "济南的泉水来自于广大山区。",
          vi: "Suối nước Tế Nam bắt nguồn từ vùng núi rộng lớn."
        },
        {
          tokens: ["地下水", "冲出", "地表", "形成了", "泉水", "。"],
          answer: "地下水冲出地表形成了泉水。",
          vi: "Nước ngầm trào lên mặt đất hình thành nên suối nước."
        }
      ]
    },
    {
      id: "fill-1",
      icon: "💬",
      title: "Phần 4 · Hoàn thành hội thoại",
      points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 (đoạn 2) · Truyền thuyết chàng trai Bào Toàn",
          text: "相传很久以前，济南城里有个{{d1}}的青年，名叫鲍全，他学习医术，{{d2}}了很多人。一次，他在路边救了一位{{d3}}倒的老人，并把老人接回家照顾。这老人其实是东海{{d4}}王的哥哥。通过老人的介绍，鲍全从龙王那儿求到了{{d8}}病救人的白{{d5}}壶。为了不被坏人{{d6}}走，他把壶{{d7}}入地下藏了起来，于是就变成了今天有“天下第一泉”美名的趵突泉。"
        }
      ],
      answers: {
        d1: "善良",
        d2: "救",
        d3: "晕",
        d4: "龙",
        d5: "玉",
        d6: "抢",
        d7: "埋",
        d8: "治"
      },
      bank: ["善良", "救", "晕", "龙", "玉", "抢", "埋", "治", "传说", "珍珠", "形成"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể về truyền thuyết suối Bào Đột.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 (đoạn 1) · Lịch sử lâu đời của suối nước Tế Nam",
          text: "济南的泉水，历史{{t1}}，最早的文字{{t2}}可以推到3000多年前。许多文人都对它的声音、颜色、{{t3}}、味道进行过{{t4}}，留下了许多{{t5}}泉水的诗文。而济南的老百姓住在泉边，喝着这甜美的泉水，自然对它{{t6}}感激之情，{{t7}}也产生了许多关于泉水的美丽传说。"
        },
        {
          title: "课文 (đoạn 3) · Những cái tên độc đáo của suối",
          text: "{{t8}}的济南市区内，{{t9}}着大大小小七百多个天然泉，这在国内外城市中是极为少有的。有如此之多的泉，名字当然也少不了。济南泉水的优美，还可从那{{t10}}的名字上反映出来，如：以人名命名的舜泉，以动物命名的黑虎泉，以形状命名的珍珠泉，等等。"
        }
      ],
      answers: {
        t1: "悠久",
        t2: "记载",
        t3: "形状",
        t4: "描写",
        t5: "赞美",
        t6: "充满",
        t7: "从而",
        t8: "如今",
        t9: "分布",
        t10: "独特"
      },
      bank: ["悠久", "记载", "形状", "描写", "赞美", "充满", "从而", "如今", "分布", "独特", "产生", "反映", "珍珠"]
    },
    {
      id: "zh-vi",
      icon: "🇨🇳",
      title: "Phần 6 · Dịch Trung - Việt",
      points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      kind: "translate-zh-vi",
      items: [
        {
          zh: "济南的泉水，历史悠久，最早的文字记载可以推到3000多年前。",
          vi: "Suối nước Tế Nam có lịch sử lâu đời, ghi chép chữ viết sớm nhất có thể truy về hơn 3000 năm trước.",
          keywords: ["lịch sử lâu đời", "ghi chép", "3000 năm"]
        },
        {
          zh: "为了不被坏人抢走，他把壶埋入地下藏了起来。",
          vi: "Để không bị kẻ xấu cướp mất, anh ấy đã chôn cái bình xuống đất giấu đi.",
          keywords: ["kẻ xấu", "cướp", "chôn", "giấu"]
        },
        {
          zh: "如今的济南市区内，分布着大大小小七百多个天然泉。",
          vi: "Ngày nay trong khu vực thành phố Tế Nam, phân bố hơn 700 con suối tự nhiên lớn nhỏ.",
          keywords: ["ngày nay", "phân bố", "suối tự nhiên"]
        },
        {
          zh: "这种石灰岩地区，陆地表面的水很容易进入地下。",
          vi: "Ở vùng đá vôi như thế này, nước trên bề mặt đất liền rất dễ thấm vào lòng đất.",
          keywords: ["đá vôi", "bề mặt", "thấm", "lòng đất"]
        },
        {
          zh: "地下水冲出地表，形成了众多的泉水。",
          vi: "Nước ngầm trào lên mặt đất, hình thành nên vô số con suối.",
          keywords: ["nước ngầm", "trào lên", "hình thành", "suối"]
        }
      ]
    },
    {
      id: "vi-zh",
      icon: "🇻🇳",
      title: "Phần 7 · Dịch Việt - Trung",
      points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng - ngữ pháp đã học trong bài.",
      kind: "translate-vi-zh",
      items: [
        {
          vi: "Suối nước ở Tế Nam có lịch sử lâu đời.",
          answers: ["济南的泉水历史悠久。"]
        },
        {
          vi: "Nhiều văn nhân đã ca ngợi dòng suối này.",
          answers: ["许多文人都赞美这些泉水。", "很多文人都赞美这些泉水。"]
        },
        {
          vi: "Truyền thuyết này lưu truyền đến tận bây giờ.",
          answers: ["这个传说一直流传到现在。", "这个传说流传至今。"]
        },
        {
          vi: "Đá vôi được hình thành từ khoảng 400 triệu năm trước.",
          answers: ["石灰岩是大约四亿年前形成的。", "石灰岩大约是四亿年前形成的。"]
        },
        {
          vi: "Do địa thế thấp, nước ngầm trào lên mặt đất.",
          answers: ["由于地势低，地下水冲出了地表。", "因为地势低，地下水冲出了地表。"]
        }
      ]
    },
    {
      id: "true-false",
      icon: "✅",
      title: "Phần 8 · Đúng / Sai",
      points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      kind: "true-false",
      items: [
        {
          q: "济南的泉水最早的文字记载可以推到3000多年前。",
          a: true
        },
        {
          q: "鲍全是一个心地善良的青年。",
          a: true
        },
        {
          q: "鲍全救的那位老人其实是东海龙王的弟弟。",
          a: false
        },
        {
          q: "鲍全把白玉壶送给了别人。",
          a: false
        },
        {
          q: "趵突泉有“天下第一泉”的美名。",
          a: true
        },
        {
          q: "济南市区内的天然泉一共有七百多个。",
          a: true
        },
        {
          q: "珍珠泉是以人名命名的。",
          a: false
        },
        {
          q: "济南的泉水是因为地势低、地下水被火成岩挡住才冲出地表的。",
          a: true
        }
      ]
    },
    {
      id: "dictation",
      icon: "🎙️",
      title: "Phần 9 · Nghe - Viết (chính tả)",
      points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      kind: "dictation",
      items: ["济南的泉水，历史悠久。", "鲍全救了一位晕倒的老人。", "如今的济南市区内，分布着许多天然泉。", "这就是济南“泉城”美名得来的原因。", "地下水冲出地表，形成了众多的泉水。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“节约每一滴水”为题写一段话。 (Hãy viết một đoạn văn với chủ đề \"Tiết kiệm từng giọt nước\".)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 5 (美丽/优美, 于, 从而).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["美丽", "优美", "于", "从而"],
      minGrammar: 2,
      sample: "水是生命之源，济南的泉水历史悠久，正是因为大自然经过几亿年才形成的珍贵资源，我们更应该珍惜。如今很多地区却面临缺水问题，这提醒我们，从而更要养成节约用水的好习惯：洗手时把水龙头关小一点，洗菜的水可以用来浇花，看到有人浪费水要善意地提醒。每个人节约一滴水，看起来很小，但汇集起来，就能形成一股保护环境的巨大力量。希望大家都能对这美丽的自然充满感激，一起保护好这独特而珍贵的泉水资源。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 美丽 / 优美",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (美丽 so với 优美).",
      kind: "grammar-fill",
      grammarWord: "美丽 / 优美",
      options: ["优美", "美丽"],
      items: [
        {
          q: "这篇文章的语言生动___。",
          answers: ["优美"]
        },
        {
          q: "心也像窗户一样，如果不打开，就看不到外面的___和热闹。",
          answers: ["美丽"]
        },
        {
          q: "这里流传着许多___的传说。",
          answers: ["美丽"]
        },
        {
          q: "当地___的自然风景吸引了很多中外游客。",
          answers: ["优美", "美丽"]
        },
        {
          q: "济南是一座风景___的城市。",
          answers: ["优美", "美丽"]
        },
        {
          q: "她有一双___的大眼睛。",
          answers: ["美丽"]
        },
        {
          q: "演员们的动作十分___。",
          answers: ["优美"]
        },
        {
          q: "一进院子就听到了丽丽那___的歌声。",
          answers: ["优美"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 于",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (于 - giới từ đa nghĩa (≈ 在/从/对/向/比)).",
      kind: "grammar-fill",
      grammarWord: "于",
      items: [
        {
          q: "这家公司成立___1997年。",
          answers: ["于"]
        },
        {
          q: "这种药主要用___感冒的治疗。",
          answers: ["于"]
        },
        {
          q: "济南的泉水，来自___济南市以前的广大山区。",
          answers: ["于"]
        },
        {
          q: "运动有助___健康。",
          answers: ["于"]
        },
        {
          q: "队员们都认为对方的水平远远高___自己。",
          answers: ["于"]
        },
        {
          q: "乒乓球运动产生___19世纪末。",
          answers: ["于"]
        },
        {
          q: "他从不满足___已取得的成功。",
          answers: ["于"]
        },
        {
          q: "李明没办法，只好求助___当经理的老同学。",
          answers: ["于"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 从而",
      points: 5,
      subtitle: "Điền từ vào chỗ trống (从而 - liên từ nhân quả \"từ đó, do đó\").",
      kind: "grammar-fill",
      grammarWord: "从而",
      items: [
        {
          q: "玩游戏可以锻炼人的脑、眼和手，___提高反应能力。",
          answers: ["从而"]
        },
        {
          q: "公司通过引进新技术，加强管理，提高了产品质量，___获得了更多客户的信任。",
          answers: ["从而"]
        },
        {
          q: "比赛前做好思想准备可以减少运动员的压力，___取得比赛的成功。",
          answers: ["从而"]
        },
        {
          q: "在学习过程中及时复习，可以尽早发现和解决问题，___取得更好的成绩。",
          answers: ["从而"]
        },
        {
          q: "济南人住在泉边，喝着这甜美的泉水，自然对它充满感激之情，___也产生了许多关于泉水的美丽传说。",
          answers: ["从而"]
        },
        {
          q: "他经过不断努力，___实现了自己的梦想。",
          answers: ["从而"]
        },
        {
          q: "科学家们经过多次实验，___得出了这个重要的结论。",
          answers: ["从而"]
        },
        {
          q: "济南的老百姓自古以来就非常喜欢泉水，___产生了许多关于泉水的故事。",
          answers: ["从而"]
        }
      ]
    }
  ]
};
