import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第11课 闹钟的危害 (The Harm of Alarm Clocks)
// Nguồn: slide bài 11 và bộ bài tập "HSK5 tiêu chuẩn bài 11" trong hsk5/docs.
export const lesson11: Lesson = {
  level: "hsk5",
  no: 11,
  slug: "bai-11",
  zh: "闹钟的危害",
  pinyin: "Nàozhōng de wēihài",
  vi: "Tác hại của đồng hồ báo thức",
  en: "The Harm of Alarm Clocks",
  topic: "睡眠与健康 · Giấc ngủ và sức khỏe",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 危害、规律、必要、浅、用途、状态、慌张、采用、愿望、传统…",
    "Nắm cách kết hợp của các từ: 享受、导致、情绪、记忆、避免、模仿、计算、过来、精神、光线.",
    "Hiểu và dùng được 来/过来、所、相当、数; phân biệt 持续 và 继续.",
    "Đọc hiểu bài khóa về ảnh hưởng xấu của đồng hồ báo thức đối với cơ thể, so sánh tỉnh dậy tự nhiên với bị chuông đánh thức.",
    "Thảo luận cách nâng cao chất lượng giấc ngủ và viết đoạn văn 「你真的需要闹钟吗？」.",
    "Nắm 9 từ mở rộng chủ đề 家居 (đồ gia dụng)."
  ],
  warmUp: [
    {
      zh: "下面几种醒来的方式，你比较喜欢哪种？A.闹钟的铃声 B.家人的催促 C.鸟或狗的叫声 D.渐亮的太阳光线",
      vi: "Trong các cách thức dậy sau, bạn thích cách nào nhất? A. chuông báo thức B. người nhà giục C. tiếng chim hoặc chó kêu D. ánh nắng sáng dần"
    },
    {
      zh: "如果你突然被闹钟叫醒，你有什么感觉？",
      vi: "Nếu đột ngột bị đồng hồ báo thức đánh thức, bạn cảm thấy thế nào?"
    },
    {
      zh: "什么是“光闹钟”？",
      vi: "“Đồng hồ báo thức ánh sáng” là gì?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "闹钟",
      py: "nàozhōng",
      pos: "dt.",
      meaning: "đồng hồ báo thức",
      example: "你真的需要闹钟吗？",
      exampleVi: "Bạn có thực sự cần đồng hồ báo thức không?"
    },
    {
      id: 2,
      han: "危害",
      py: "wēihài",
      pos: "đg.",
      meaning: "gây hại",
      example: "吸烟危害健康。",
      exampleVi: "Hút thuốc gây hại cho sức khỏe."
    },
    {
      id: 3,
      han: "人类",
      py: "rénlèi",
      pos: "dt.",
      meaning: "loài người",
      example: "医学研究证明，人类睡眠有其特定的机制。",
      exampleVi: "Nghiên cứu y học chứng minh, giấc ngủ của loài người có cơ chế đặc thù riêng."
    },
    {
      id: 4,
      han: "生物",
      py: "shēngwù",
      pos: "dt.",
      meaning: "sinh vật",
      example: "地球拥有各种各样的生物。",
      exampleVi: "Trái đất có đủ loại sinh vật khác nhau."
    },
    {
      id: 5,
      han: "机制",
      py: "jīzhì",
      pos: "dt.",
      meaning: "cơ chế",
      example: "人类睡眠有其特定的机制。",
      exampleVi: "Giấc ngủ của loài người có cơ chế đặc thù riêng."
    },
    {
      id: 6,
      han: "规律",
      py: "guīlǜ",
      pos: "dt./tt.",
      meaning: "quy luật; có quy luật",
      example: "自然醒是最符合人体生物钟规律的。",
      exampleVi: "Thức dậy tự nhiên là phù hợp nhất với quy luật đồng hồ sinh học cơ thể."
    },
    {
      id: 7,
      han: "光线",
      py: "guāngxiàn",
      pos: "dt.",
      meaning: "ánh sáng",
      example: "光线是自然醒的必要条件。",
      exampleVi: "Ánh sáng là điều kiện cần thiết để thức dậy tự nhiên."
    },
    {
      id: 8,
      han: "必要",
      py: "bìyào",
      pos: "tt.",
      meaning: "cần thiết",
      example: "光线是自然醒的必要条件。",
      exampleVi: "Ánh sáng là điều kiện cần thiết để thức dậy tự nhiên."
    },
    {
      id: 9,
      han: "过度",
      py: "guòdù",
      pos: "đg./tt.",
      meaning: "quá mức",
      example: "过度劳累有害我们的健康。",
      exampleVi: "Làm việc quá sức có hại cho sức khỏe của chúng ta."
    },
    {
      id: 10,
      han: "浅",
      py: "qiǎn",
      pos: "tt.",
      meaning: "nông, cạn",
      example: "人逐渐从熟睡过渡到浅睡。",
      exampleVi: "Con người dần dần chuyển từ ngủ sâu sang ngủ nông."
    },
    {
      id: 11,
      han: "现代",
      py: "xiàndài",
      pos: "dt./tt.",
      meaning: "hiện đại",
      example: "紧张的现代生活，使很多上班的人无法享受轻松舒适的睡眠。",
      exampleVi: "Cuộc sống hiện đại căng thẳng, khiến nhiều người đi làm không thể tận hưởng giấc ngủ thoải mái."
    },
    {
      id: 12,
      han: "享受",
      py: "xiǎngshòu",
      pos: "đg.",
      meaning: "hưởng thụ",
      example: "放假了，人们来到河边享受生活。",
      exampleVi: "Được nghỉ rồi, mọi người đến bờ sông hưởng thụ cuộc sống."
    },
    {
      id: 13,
      han: "用途",
      py: "yòngtú",
      pos: "dt.",
      meaning: "công dụng",
      example: "闹钟的用途就显得格外重要了。",
      exampleVi: "Công dụng của đồng hồ báo thức trở nên vô cùng quan trọng."
    },
    {
      id: 14,
      han: "实验",
      py: "shíyàn",
      pos: "dt./đg.",
      meaning: "thí nghiệm",
      example: "但实验研究证明，人们对自然醒与被闹钟叫醒的反应不同。",
      exampleVi: "Nhưng nghiên cứu thực nghiệm chứng minh, phản ứng của con người với việc thức tự nhiên và bị đồng hồ đánh thức là khác nhau."
    },
    {
      id: 15,
      han: "所",
      py: "suǒ",
      pos: "đại từ/lt.",
      meaning: "(đứng trước động từ); (lượng từ cho cơ quan/trường học)",
      example: "山水画所表现的是人与自然的关系。",
      exampleVi: "Điều mà bức tranh sơn thủy thể hiện là mối quan hệ giữa con người và thiên nhiên."
    },
    {
      id: 16,
      han: "呼吸",
      py: "hūxī",
      pos: "đg.",
      meaning: "hô hấp, thở",
      example: "人的呼吸会从16次/分钟提高到24次/分钟。",
      exampleVi: "Nhịp thở của con người sẽ tăng từ 16 lần/phút lên 24 lần/phút."
    },
    {
      id: 17,
      han: "铃",
      py: "líng",
      pos: "dt.",
      meaning: "chuông",
      example: "铃铛。",
      exampleVi: "Cái chuông nhỏ."
    },
    {
      id: 18,
      han: "状态",
      py: "zhuàngtài",
      pos: "dt.",
      meaning: "trạng thái",
      example: "这棵植物的生长状态很好。",
      exampleVi: "Trạng thái sinh trưởng của cây này rất tốt."
    },
    {
      id: 19,
      han: "情绪",
      py: "qíngxù",
      pos: "dt.",
      meaning: "cảm xúc",
      example: "我们要控制好自己的情绪。",
      exampleVi: "Chúng ta phải kiểm soát tốt cảm xúc của mình."
    },
    {
      id: 20,
      han: "心理",
      py: "xīnlǐ",
      pos: "dt.",
      meaning: "tâm lý",
      example: "每年开学，学校都要给学生做心理测试。",
      exampleVi: "Mỗi năm nhập học, trường đều làm bài kiểm tra tâm lý cho học sinh."
    },
    {
      id: 21,
      han: "清醒",
      py: "qīngxǐng",
      pos: "tt./đg.",
      meaning: "tỉnh táo; tỉnh lại",
      example: "做生意的时候一定要清醒一点，不要被人骗了。",
      exampleVi: "Khi làm ăn nhất định phải tỉnh táo, đừng để bị người khác lừa."
    },
    {
      id: 22,
      han: "慌张",
      py: "huāngzhāng",
      pos: "tt.",
      meaning: "hoảng hốt",
      example: "小明今天起床起晚了，他慌张地跑去学校。",
      exampleVi: "Hôm nay Tiểu Minh dậy muộn, cậu ấy hoảng hốt chạy đi học."
    },
    {
      id: 23,
      han: "相当",
      py: "xiāngdāng",
      pos: "đg./p.",
      meaning: "tương đương; khá là",
      example: "这些能力最多为正常状态的65%，与醉酒者相当。",
      exampleVi: "Những năng lực này nhiều nhất chỉ bằng 65% trạng thái bình thường, tương đương với người say rượu."
    },
    {
      id: 24,
      han: "导致",
      py: "dǎozhì",
      pos: "đg.",
      meaning: "dẫn đến, gây ra",
      example: "这种状态如果持续，将导致高血压、失眠。",
      exampleVi: "Nếu trạng thái này tiếp diễn, sẽ dẫn đến cao huyết áp, mất ngủ."
    },
    {
      id: 25,
      han: "低落",
      py: "dīluò",
      pos: "tt.",
      meaning: "sa sút, xuống thấp (tinh thần)",
      example: "她看起来不开心，情绪非常低落。",
      exampleVi: "Cô ấy trông không vui, tâm trạng rất sa sút."
    },
    {
      id: 26,
      han: "计算",
      py: "jìsuàn",
      pos: "đg.",
      meaning: "tính toán",
      example: "商店经常用计算机进行计算。",
      exampleVi: "Cửa hàng thường dùng máy tính để tính toán."
    },
    {
      id: 27,
      han: "记忆",
      py: "jìyì",
      pos: "đg./dt.",
      meaning: "ghi nhớ, trí nhớ",
      example: "持续几天的熬夜让她的记忆变差。",
      exampleVi: "Thức khuya liên tục mấy ngày khiến trí nhớ của cô ấy kém đi."
    },
    {
      id: 28,
      han: "持续",
      py: "chíxù",
      pos: "đg.",
      meaning: "liên tục, kéo dài",
      example: "这场雨持续下了两个多小时。",
      exampleVi: "Trận mưa này kéo dài liên tục hơn hai tiếng."
    },
    {
      id: 29,
      han: "精神",
      py: "jīngshén",
      pos: "dt./tt.",
      meaning: "tinh thần",
      example: "失眠导致他第二天精神状态不好。",
      exampleVi: "Mất ngủ khiến tinh thần anh ấy hôm sau không tốt."
    },
    {
      id: 30,
      han: "失眠",
      py: "shīmián",
      pos: "đg.",
      meaning: "mất ngủ",
      example: "将导致高血压、失眠和一些精神问题。",
      exampleVi: "Sẽ dẫn đến cao huyết áp, mất ngủ và một số vấn đề tinh thần."
    },
    {
      id: 31,
      han: "数",
      py: "shǔ/shù",
      pos: "đg./số từ",
      meaning: "đếm; vài (văn viết)",
      example: "这种状态如果持续数天、数周，将导致高血压。",
      exampleVi: "Trạng thái này nếu kéo dài vài ngày, vài tuần, sẽ dẫn đến cao huyết áp."
    },
    {
      id: 32,
      han: "专家",
      py: "zhuānjiā",
      pos: "dt.",
      meaning: "chuyên gia",
      example: "专家解释说，人在睡眠时，身体会发生一些变化。",
      exampleVi: "Chuyên gia giải thích rằng, khi ngủ, cơ thể con người sẽ có một số thay đổi."
    },
    {
      id: 33,
      han: "采用",
      py: "cǎiyòng",
      pos: "đg.",
      meaning: "áp dụng, sử dụng",
      example: "如果你必须定个闹钟，应采用柔和的声音或音乐。",
      exampleVi: "Nếu bạn buộc phải đặt báo thức, nên dùng âm thanh hoặc nhạc nhẹ nhàng."
    },
    {
      id: 34,
      han: "柔和",
      py: "róuhé",
      pos: "tt.",
      meaning: "dịu dàng, êm ái",
      example: "应采用柔和的声音或音乐。",
      exampleVi: "Nên dùng âm thanh hoặc nhạc nhẹ nhàng."
    },
    {
      id: 35,
      han: "愿望",
      py: "yuànwàng",
      pos: "dt.",
      meaning: "nguyện vọng",
      example: "自然醒最符合我们的愿望。",
      exampleVi: "Thức dậy tự nhiên phù hợp nhất với nguyện vọng của chúng ta."
    },
    {
      id: 36,
      han: "窗帘",
      py: "chuānglián",
      pos: "dt.",
      meaning: "rèm cửa",
      example: "谁能替你拉开窗帘让阳光照进来呢？",
      exampleVi: "Ai có thể thay bạn kéo rèm cửa để ánh nắng chiếu vào đây?"
    },
    {
      id: 37,
      han: "市场",
      py: "shìchǎng",
      pos: "dt.",
      meaning: "thị trường",
      example: "近年来，市场上出现了一种新的电子产品。",
      exampleVi: "Những năm gần đây, trên thị trường xuất hiện một loại sản phẩm điện tử mới."
    },
    {
      id: 38,
      han: "产品",
      py: "chǎnpǐn",
      pos: "dt.",
      meaning: "sản phẩm",
      example: "名为“光闹钟”的新电子产品。",
      exampleVi: "Sản phẩm điện tử mới tên là \"đồng hồ ánh sáng\"."
    },
    {
      id: 39,
      han: "模仿",
      py: "mófǎng",
      pos: "đg.",
      meaning: "bắt chước, mô phỏng",
      example: "它能在室内模仿早晨自然光线的变化。",
      exampleVi: "Nó có thể mô phỏng sự thay đổi ánh sáng tự nhiên buổi sáng trong nhà."
    },
    {
      id: 40,
      han: "避免",
      py: "bìmiǎn",
      pos: "đg.",
      meaning: "tránh, phòng tránh",
      example: "可避免传统闹钟突然惊醒对人体健康的伤害。",
      exampleVi: "Có thể tránh được tổn hại sức khỏe do đồng hồ báo thức truyền thống làm giật mình đột ngột."
    },
    {
      id: 41,
      han: "传统",
      py: "chuántǒng",
      pos: "dt./tt.",
      meaning: "truyền thống",
      example: "可避免传统闹钟突然惊醒对人体健康的伤害。",
      exampleVi: "Có thể tránh được tổn hại sức khỏe do đồng hồ báo thức truyền thống làm giật mình đột ngột."
    },
    {
      id: 42,
      han: "沙发",
      py: "shāfā",
      pos: "dt.",
      meaning: "ghế sofa",
      example: "他坐在沙发上看电视。",
      exampleVi: "Anh ấy ngồi trên ghế sofa xem tivi.",
      group: "extended"
    },
    {
      id: 43,
      han: "书桌",
      py: "shūzhuō",
      pos: "dt.",
      meaning: "bàn học",
      example: "我的书桌上放满了书。",
      exampleVi: "Bàn học của tôi đầy sách.",
      group: "extended"
    },
    {
      id: 44,
      han: "衣柜",
      py: "yīguì",
      pos: "dt.",
      meaning: "tủ quần áo",
      example: "她把衣服都放进了衣柜。",
      exampleVi: "Cô ấy cất hết quần áo vào tủ.",
      group: "extended"
    },
    {
      id: 45,
      han: "床垫",
      py: "chuángdiàn",
      pos: "dt.",
      meaning: "nệm giường",
      example: "这个床垫躺起来很舒服。",
      exampleVi: "Chiếc nệm này nằm rất thoải mái.",
      group: "extended"
    },
    {
      id: 46,
      han: "枕头",
      py: "zhěntou",
      pos: "dt.",
      meaning: "gối",
      example: "我喜欢用软一点的枕头。",
      exampleVi: "Tôi thích dùng gối mềm một chút.",
      group: "extended"
    },
    {
      id: 47,
      han: "台灯",
      py: "táidēng",
      pos: "dt.",
      meaning: "đèn bàn",
      example: "晚上看书要开台灯。",
      exampleVi: "Buổi tối đọc sách phải bật đèn bàn.",
      group: "extended"
    },
    {
      id: 48,
      han: "地毯",
      py: "dìtǎn",
      pos: "dt.",
      meaning: "thảm",
      example: "客厅里铺了一块地毯。",
      exampleVi: "Trong phòng khách trải một tấm thảm.",
      group: "extended"
    },
    {
      id: 49,
      han: "窗户",
      py: "chuānghu",
      pos: "dt.",
      meaning: "cửa sổ",
      example: "请把窗户打开透透气。",
      exampleVi: "Hãy mở cửa sổ ra cho thoáng khí.",
      group: "extended"
    },
    {
      id: 50,
      han: "阳台",
      py: "yángtái",
      pos: "dt.",
      meaning: "ban công",
      example: "阳台上种了很多花。",
      exampleVi: "Trên ban công trồng rất nhiều hoa.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 闹钟的危害",
    paragraphs: [
      {
        zh: "医学研究证明，人类睡眠有其特定的机制，自然醒是最符合人体生物钟规律的。光线是自然醒的必要条件，是人体内的生物闹钟。早晨，人体感受到逐渐变强的太阳光线，新陈代谢随之加快，人逐渐从熟睡过渡到浅睡，直到醒来。这就是阴雨天人们往往喜欢睡懒觉的原因。紧张的现代生活，使很多上班的人无法享受轻松舒适的睡眠、自然地醒来，闹钟的用途就显得格外重要了。",
        vi: "Nghiên cứu y học chứng minh giấc ngủ của con người có cơ chế riêng, tỉnh dậy tự nhiên là phù hợp nhất với quy luật đồng hồ sinh học của cơ thể. Ánh sáng là điều kiện cần cho việc tỉnh dậy tự nhiên, là chiếc đồng hồ báo thức sinh học trong cơ thể. Buổi sáng, cơ thể cảm nhận ánh nắng mạnh dần, quá trình trao đổi chất theo đó tăng nhanh, con người dần chuyển từ ngủ say sang ngủ nông cho đến khi tỉnh dậy. Đó là lý do vào những ngày mưa âm u người ta thường thích ngủ nướng. Cuộc sống hiện đại căng thẳng khiến nhiều người đi làm không thể tận hưởng giấc ngủ thoải mái và tỉnh dậy tự nhiên, công dụng của đồng hồ báo thức vì thế trở nên đặc biệt quan trọng.",
        questions: ["自然醒是怎么实现的？它与光线有什么关系？", "请用重点词语复述：光线、生物钟、必要、熟睡、浅睡、醒"]
      },
      {
        zh: "但实验研究证明，人们对自然醒与被闹钟铃声叫醒这两种方式所产生的反应是很不相同的。从睡眠状态过渡到清醒状态时，人的呼吸会从16次/分钟提高到24次/分钟，心跳每分钟加快10次。如果突然被闹钟叫醒，将在心理上使人产生心慌、情绪低落、感觉没睡醒等不适。如果是从深度睡眠中被突然叫醒，那么，人的短期记忆能力、计算技能都会受到影响，这些能力最多为正常状态的65%，与醉酒者相当。",
        vi: "Nhưng nghiên cứu thực nghiệm chứng minh, phản ứng của con người với hai cách thức dậy tự nhiên và bị chuông báo thức đánh thức là rất khác nhau. Khi chuyển từ trạng thái ngủ sang trạng thái tỉnh táo, nhịp thở tăng từ 16 lần/phút lên 24 lần/phút, tim đập nhanh thêm 10 nhịp mỗi phút. Nếu đột ngột bị đồng hồ báo thức đánh thức, về mặt tâm lý sẽ khiến người ta hồi hộp, tâm trạng sa sút, cảm giác chưa ngủ đủ… Nếu bị đánh thức đột ngột từ giấc ngủ sâu, khả năng ghi nhớ ngắn hạn và kỹ năng tính toán đều bị ảnh hưởng, những năng lực này nhiều nhất chỉ bằng 65% trạng thái bình thường, tương đương người say rượu.",
        questions: ["人们从睡眠状态过渡到清醒状态，生理上会产生什么变化？", "突然被闹钟叫醒人体会出现哪些不适的情况？"]
      },
      {
        zh: "出于自我保护，被闹钟叫醒时我们的身体会提高体内的肾上腺素水平。这种状态如果持续数天、数周、数月，将导致高血压、失眠和一些精神问题等。研究发现，突然被闹铃惊醒的人比自然醒的人血压更高、心跳更快。因此，专家解释说，人在睡眠时，身体会发生一些变化，因此人们在早上醒来时更容易发病，而闹铃则会使发病的可能性变得更大。如果你必须定个闹钟，应采用柔和的声音或音乐。",
        vi: "Để tự bảo vệ, khi bị đồng hồ báo thức đánh thức, cơ thể sẽ nâng mức adrenaline. Trạng thái này nếu kéo dài vài ngày, vài tuần, vài tháng sẽ dẫn đến cao huyết áp, mất ngủ và một số vấn đề về tinh thần. Nghiên cứu phát hiện người bị chuông đánh thức đột ngột có huyết áp cao hơn, tim đập nhanh hơn người tỉnh dậy tự nhiên. Vì vậy chuyên gia giải thích rằng khi ngủ cơ thể có một số thay đổi, nên buổi sáng lúc thức dậy con người dễ phát bệnh hơn, còn chuông báo thức lại khiến khả năng phát bệnh càng lớn. Nếu bạn buộc phải đặt báo thức, nên dùng âm thanh hoặc nhạc nhẹ nhàng.",
        questions: ["长期使用闹钟可能导致什么问题？闹钟最好选择怎样的铃声？", "请用重点词语复述：导致、失眠、精神、发病、持续、惊醒"]
      },
      {
        zh: "各种醒来方式中，当然是自然醒最符合我们的愿望。可谁能替你拉开窗帘让阳光照进来呢？近年来，市场上出现了一种新的电子产品，名为“光闹钟”。它能在室内模仿早晨自然光线的变化，通过光线的作用使人在设定的时间里自然地醒来，可避免传统闹钟突然惊醒对人体健康的伤害。希望这样能向真正的“自然醒”走近一点，再走近一点。",
        vi: "Trong các cách thức dậy, tất nhiên tỉnh dậy tự nhiên là hợp với mong muốn của chúng ta nhất. Nhưng ai có thể kéo rèm giúp bạn để ánh nắng chiếu vào đây? Những năm gần đây, trên thị trường xuất hiện một sản phẩm điện tử mới tên là “đồng hồ báo thức ánh sáng”. Nó có thể mô phỏng sự thay đổi ánh sáng tự nhiên buổi sáng trong phòng, nhờ tác dụng của ánh sáng giúp con người tỉnh dậy tự nhiên vào thời gian đã cài đặt, tránh được tổn hại cho sức khỏe do đồng hồ báo thức truyền thống đánh thức đột ngột. Hy vọng như vậy có thể tiến gần hơn một chút, rồi gần thêm chút nữa, tới việc “tỉnh dậy tự nhiên” thực sự.",
        questions: ["什么是光闹钟？它和传统闹钟有什么不同？又有什么好处？"]
      }
    ],
    notes: ["生物钟: đồng hồ sinh học. 新陈代谢: trao đổi chất. 肾上腺素: adrenaline. 高血压: cao huyết áp."]
  },
  grammar: [
    {
      word: "持续 / 继续",
      title: "Phân biệt 持续 / 继续",
      usages: [
        {
          label: "持续",
          explain: "Diễn tả động tác/trạng thái liên tục, không ngắt quãng. Có thể làm định ngữ, có thể mang bổ ngữ thời lượng.",
          examples: ["这场雨持续下了两个多小时。", "持续的高温。"]
        },
        {
          label: "继续",
          explain: "Diễn tả tiếp tục lại một động tác, ở giữa có thể có khoảng dừng. Không làm định ngữ, không mang bổ ngữ thời lượng.",
          examples: ["你们继续学习吧。"]
        }
      ],
      note: "持续 nhấn mạnh tính liên tục xuyên suốt không gián đoạn; 继续 nhấn mạnh việc khởi động lại một hành động sau khi tạm dừng."
    },
    {
      word: "过来",
      title: "Động từ + 过来 (hồi phục trạng thái / năng lực)",
      usages: [
        {
          label: "động từ+过来",
          explain: "Biểu thị quay trở về trạng thái bình thường/ban đầu.",
          examples: ["脑子才清醒过来。", "妻子却不能活过来。"]
        },
        {
          label: "động từ+得/不+过来",
          explain: "Biểu thị năng lực có thể (hoặc không đủ) làm việc gì, thường dùng thể phủ định.",
          examples: ["谁数得过来呀？", "我都忙不过来了。"]
        }
      ],
      note: "\"V+过来\" đơn thuần chỉ sự hồi phục trạng thái; \"V+得/不+过来\" thêm 得/不 vào giữa để hỏi/khẳng định về khả năng hoàn thành việc gì đó, đa số dùng ở dạng phủ định (不过来) để than phiền về việc quá tải."
    },
    {
      word: "所",
      title: "Đại từ \"所 + động từ\" & cấu trúc \"有/无所...\"",
      usages: [
        {
          label: "所 + động từ",
          explain: "Đại từ đứng trước động từ, dùng để chỉ định sự vật (cái được biểu hiện/sản sinh...)",
          examples: ["山水画所表现的是人与自然的关系。"]
        },
        {
          label: "有/无 + 所 + động từ",
          explain: "Kết hợp thành cụm từ làm tân ngữ của \"有/无\"",
          examples: ["女性的职场幸福感有所提高。", "我们是无所不谈的好朋友。"]
        },
        {
          label: "Lượng từ",
          explain: "Dùng cho trú sở, cơ quan, trường học",
          examples: ["来自北京一所大学的学生。"]
        }
      ],
      note: "所 có 3 cách dùng chính trong HSK5: làm đại từ chỉ định trước động từ; kết hợp với 有/无 tạo cụm cố định; và làm lượng từ cho các tổ chức/cơ sở (trường học, bệnh viện...)."
    }
  ],
  wordChoice: [
    {
      sentence: "___的睡眠有自己特定的机制。",
      options: ["闹钟", "人类", "规律", "光线"],
      answer: "人类"
    },
    {
      sentence: "有___的生活习惯对身体健康非常有好处。",
      options: ["闹钟", "人类", "规律", "光线"],
      answer: "规律"
    },
    {
      sentence: "___是自然醒的必要条件。",
      options: ["闹钟", "人类", "规律", "光线"],
      answer: "光线"
    },
    {
      sentence: "在婚姻问题上，听听父母的意见还是很有___的。",
      options: ["所", "享受", "过渡", "必要"],
      answer: "必要"
    },
    {
      sentence: "正如你___估计的那样，李岩确实改变了主意。",
      options: ["所", "享受", "过渡", "必要"],
      answer: "所"
    },
    {
      sentence: "为了___轻松的生活，夫妻俩决定把家搬到这个安静的小镇。",
      options: ["所", "享受", "过渡", "必要"],
      answer: "享受"
    },
    {
      sentence: "真希望刘老师___给我们上课。",
      options: ["持续", "继续"],
      answer: "继续"
    },
    {
      sentence: "这次的宣传活动将___到9月底。",
      options: ["持续", "继续"],
      answer: "持续"
    },
    {
      sentence: "实验失败了没关系，打起___从头再来。",
      options: ["精神", "情绪"],
      answer: "精神"
    },
    {
      sentence: "每晚抽出点儿时间来阅读、学习，坚持___年，之后，成功就会向你招手。",
      options: ["数", "来"],
      answer: "数"
    },
    {
      sentence: "作为孩子的父母，我们当然___他能成为一个有用的人才。",
      options: ["希望", "愿望"],
      answer: "希望"
    },
    {
      sentence: "他的行为已经严重___到了社会安全。",
      options: ["伤害", "危害"],
      answer: "危害"
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
          distractors: [17, 7, 37]
        },
        {
          vocabId: 2,
          distractors: [40, 24, 9]
        },
        {
          vocabId: 3,
          distractors: [4, 41, 32]
        },
        {
          vocabId: 4,
          distractors: [3, 6, 5]
        },
        {
          vocabId: 6,
          distractors: [5, 8, 18]
        },
        {
          vocabId: 7,
          distractors: [17, 49, 36]
        },
        {
          vocabId: 16,
          distractors: [21, 22, 19]
        },
        {
          vocabId: 32,
          distractors: [33, 39, 3]
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
      vocabIds: [8, 12, 19, 21, 24, 28, 30, 33]
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
          tokens: ["光线", "是", "自然醒的", "必要条件", "。"],
          answer: "光线是自然醒的必要条件。",
          vi: "Ánh sáng là điều kiện cần thiết để thức dậy tự nhiên."
        },
        {
          tokens: ["突然", "被闹钟叫醒", "会让人", "情绪低落", "。"],
          answer: "突然被闹钟叫醒会让人情绪低落。",
          vi: "Bị đồng hồ báo thức đánh thức đột ngột sẽ khiến người ta tâm trạng sa sút."
        },
        {
          tokens: ["这种状态", "如果持续", "会", "导致", "失眠", "。"],
          answer: "这种状态如果持续会导致失眠。",
          vi: "Trạng thái này nếu kéo dài sẽ dẫn đến mất ngủ."
        },
        {
          tokens: ["应", "采用", "柔和的", "声音或音乐", "。"],
          answer: "应采用柔和的声音或音乐。",
          vi: "Nên sử dụng âm thanh hoặc nhạc nhẹ nhàng."
        },
        {
          tokens: ["光闹钟", "能", "模仿", "早晨自然光线的变化", "。"],
          answer: "光闹钟能模仿早晨自然光线的变化。",
          vi: "Đồng hồ ánh sáng có thể mô phỏng sự thay đổi ánh sáng tự nhiên buổi sáng."
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
          title: "课文 1 (đoạn 1) · Cơ chế thức dậy tự nhiên",
          text: "医学研究证明，{{d1}}睡眠有其特定的{{d2}}，自然醒是最符合人体生物钟{{d3}}的。光线是自然醒的{{d4}}条件，是人体内的生物闹钟。早晨，人体感受到逐渐变强的太阳光线，新陈代谢随之加快，人逐渐从熟睡过渡到{{d5}}睡，直到醒来。这就是阴雨天人们往往喜欢睡懒觉的原因。紧张的{{d6}}生活，使很多上班的人无法{{d7}}轻松舒适的睡眠、自然地醒来，闹钟的{{d8}}就显得格外重要了。"
        },
        {
          title: "课文 1 (đoạn 2) · Nghiên cứu về phản ứng cơ thể",
          text: "但{{d9}}研究证明，人们对自然醒与被闹钟铃声叫醒这两种方式所产生的反应是很不相同的。从睡眠状态过渡到清醒状态时，人的{{d10}}会从16次/分钟提高到24次/分钟，心跳每分钟加快10次。"
        }
      ],
      answers: {
        d1: "人类",
        d2: "机制",
        d3: "规律",
        d4: "必要",
        d5: "浅",
        d6: "现代",
        d7: "享受",
        d8: "用途",
        d9: "实验",
        d10: "呼吸"
      },
      bank: ["人类", "机制", "规律", "必要", "浅", "现代", "享受", "用途", "实验", "呼吸", "生物", "光线", "过度"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn về cơ chế thức dậy tự nhiên của con người.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 3) · Tác hại khi bị đánh thức đột ngột",
          text: "如果突然被闹钟叫醒，将在心理上使人产生心慌、{{t1}}低落、感觉没睡醒等不适。如果是从深度睡眠中被突然叫醒，那么，人的短期{{t2}}能力、{{t3}}技能都会受到影响，这些能力最多为正常状态的65%，与醉酒者{{t4}}。出于自我保护，被闹钟叫醒时我们的身体会提高体内的肾上腺素水平。这种状态如果{{t5}}数天、数周、数月，将{{t6}}高血压、{{t7}}和一些{{t8}}问题等。"
        },
        {
          title: "课文 1 (đoạn 4) · Lời khuyên từ chuyên gia",
          text: "研究发现，突然被闹铃惊醒的人比自然醒的人血压更高、心跳更快。因此，{{t9}}解释说，人在睡眠时，身体会发生一些变化，因此人们在早上醒来时更容易发病，而闹铃则会使发病的可能性变得更大。如果你必须定个闹钟，应{{t10}}柔和的声音或音乐。"
        }
      ],
      answers: {
        t1: "情绪",
        t2: "记忆",
        t3: "计算",
        t4: "相当",
        t5: "持续",
        t6: "导致",
        t7: "失眠",
        t8: "精神",
        t9: "专家",
        t10: "采用"
      },
      bank: ["情绪", "记忆", "计算", "相当", "持续", "导致", "失眠", "精神", "专家", "采用", "状态", "清醒", "柔和"]
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
          zh: "光线是自然醒的必要条件。",
          vi: "Ánh sáng là điều kiện cần thiết để thức dậy tự nhiên.",
          keywords: ["ánh sáng", "điều kiện cần thiết", "thức dậy tự nhiên"]
        },
        {
          zh: "如果突然被闹钟叫醒，将在心理上使人产生心慌、情绪低落。",
          vi: "Nếu bị đồng hồ báo thức đánh thức đột ngột, sẽ khiến người ta hoảng hốt, tâm trạng sa sút về mặt tâm lý.",
          keywords: ["đánh thức đột ngột", "hoảng hốt", "tâm trạng sa sút"]
        },
        {
          zh: "这种状态如果持续，将导致高血压、失眠等问题。",
          vi: "Trạng thái này nếu kéo dài, sẽ dẫn đến các vấn đề như cao huyết áp, mất ngủ.",
          keywords: ["kéo dài", "dẫn đến", "cao huyết áp", "mất ngủ"]
        },
        {
          zh: "光闹钟能在室内模仿早晨自然光线的变化。",
          vi: "Đồng hồ ánh sáng có thể mô phỏng sự thay đổi ánh sáng tự nhiên buổi sáng trong nhà.",
          keywords: ["mô phỏng", "ánh sáng tự nhiên", "buổi sáng", "trong nhà"]
        },
        {
          zh: "应采用柔和的声音或音乐作为闹钟铃声。",
          vi: "Nên sử dụng âm thanh nhẹ nhàng hoặc nhạc êm dịu làm nhạc chuông báo thức.",
          keywords: ["sử dụng", "âm thanh nhẹ nhàng", "nhạc chuông"]
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
          vi: "Ánh sáng là điều kiện cần thiết để thức dậy tự nhiên.",
          answers: ["光线是自然醒的必要条件。"]
        },
        {
          vi: "Bị đồng hồ báo thức đánh thức đột ngột sẽ khiến tâm trạng sa sút.",
          answers: ["被闹钟突然叫醒会使人情绪低落。", "突然被闹钟叫醒会使人情绪低落。"]
        },
        {
          vi: "Thiếu ngủ kéo dài sẽ dẫn đến các vấn đề về tinh thần.",
          answers: ["长期缺觉会导致精神问题。", "长期失眠会导致精神问题。"]
        },
        {
          vi: "Chuyên gia khuyên nên sử dụng âm thanh nhẹ nhàng.",
          answers: ["专家建议采用柔和的声音。"]
        },
        {
          vi: "Trí nhớ ngắn hạn của anh ấy dạo này kém hẳn đi.",
          answers: ["他最近的短期记忆能力变差了。", "他最近的记忆能力变差了。"]
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
          q: "自然醒是最符合人体生物钟规律的。",
          a: true
        },
        {
          q: "阴雨天人们不容易睡懒觉。",
          a: false
        },
        {
          q: "从睡眠过渡到清醒状态时，人的呼吸和心跳都会加快。",
          a: true
        },
        {
          q: "突然被闹钟叫醒不会影响人的记忆和计算能力。",
          a: false
        },
        {
          q: "长期使用闹钟可能导致高血压和失眠。",
          a: true
        },
        {
          q: "研究发现，突然被闹铃惊醒的人比自然醒的人血压更低。",
          a: false
        },
        {
          q: "光闹钟通过模仿自然光线的变化让人自然醒来。",
          a: true
        },
        {
          q: "专家建议闹钟应该采用又大又急的铃声。",
          a: false
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
      items: ["光线是自然醒的必要条件。", "突然被闹钟叫醒会让人情绪低落。", "这种状态如果持续会导致失眠。", "应采用柔和的声音或音乐。", "光闹钟能模仿早晨自然光线的变化。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“你真的需要闹钟吗？”为题写一段话。 (Hãy viết một đoạn văn nêu quan điểm của bạn về việc có thực sự cần đồng hồ báo thức hay không.)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 11 (持续/继续, 过来, 所).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["持续", "继续", "过来", "所"],
      minGrammar: 2,
      sample: "我觉得闹钟虽然方便，但对身体确实有一定的危害。医学研究证明，人类睡眠有其特定的机制，自然醒才是最符合人体生物钟规律的方式。如果突然被闹钟叫醒，人会感到心慌、情绪低落，短期记忆和计算能力也会受到影响。如果这种状态持续下去，甚至可能导致失眠、精神问题。所以我现在尽量少用传统闹钟，而是选择柔和的音乐来叫醒自己，也会尽量避免熬夜，让身体能自然过渡到清醒状态。当然，工作忙的时候有时还是必须靠闹钟，但我会采用比较温和的铃声，减少对身体的伤害。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 持续 / 继续",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (持续 so với 继续).",
      kind: "grammar-fill",
      grammarWord: "持续 / 继续",
      options: ["继续", "持续"],
      items: [
        {
          q: "真希望刘老师___给我们上课。",
          answers: ["继续"]
        },
        {
          q: "这次的宣传活动将___到9月底。",
          answers: ["持续"]
        },
        {
          q: "不管你是快乐还是难过，生活总要___下去。",
          answers: ["继续"]
        },
        {
          q: "朋友是在你失败时，鼓励你___前进的人。",
          answers: ["继续"]
        },
        {
          q: "这场雨___下了两个多小时。",
          answers: ["持续"]
        },
        {
          q: "对不起！打扰了，你们___学习吧。",
          answers: ["继续"]
        },
        {
          q: "小明发烧___三天了，家里人都很着急。",
          answers: ["持续"]
        },
        {
          q: "这种状态如果___数天，将导致高血压。",
          answers: ["持续"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 过来",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (过来 - động từ + 过来 (hồi phục trạng thái / năng lực)).",
      kind: "grammar-fill",
      grammarWord: "过来",
      items: [
        {
          q: "我被一阵吵闹声突然惊醒，过了半天，脑子才清醒___。",
          answers: ["过来"]
        },
        {
          q: "他救了妻子，妻子终于活___了。",
          answers: ["过来"]
        },
        {
          q: "天上的星星那么多，谁数得___呀？",
          answers: ["过来"]
        },
        {
          q: "最近手头的工作太多了，我都忙不___了。",
          answers: ["过来"]
        },
        {
          q: "早晨醒___，我发现窗外正下着大雪。",
          answers: ["过来"]
        },
        {
          q: "这棵树有上百年的树龄了，树干很粗，两个人都抱不___。",
          answers: ["过来"]
        },
        {
          q: "老师说我文章里的错别字比较多，我自己都数不___。",
          answers: ["过来"]
        },
        {
          q: "刘阿姨一个人肯定忙不___。",
          answers: ["过来"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 所",
      points: 5,
      subtitle: "Điền từ vào chỗ trống (所 - đại từ \"所 + động từ\" & cấu trúc \"有/无所...\").",
      kind: "grammar-fill",
      grammarWord: "所",
      items: [
        {
          q: "山水画___表现的是人与自然的关系。",
          answers: ["所"]
        },
        {
          q: "人们对自然醒与被闹钟铃声叫醒___产生的反应是不同的。",
          answers: ["所"]
        },
        {
          q: "调查显示，随着年龄的增大，女性的职场幸福感有___提高。",
          answers: ["所"]
        },
        {
          q: "我和李阳是无___不谈的好朋友。",
          answers: ["所"]
        },
        {
          q: "来自北京一___大学的学生做了关于这个问题的实验。",
          answers: ["所"]
        },
        {
          q: "学校附近就有一___幼儿园。",
          answers: ["所"]
        },
        {
          q: "我有一个建议要送给你，希望它能对你有___帮助。",
          answers: ["所"]
        },
        {
          q: "孔军是我们县的人___熟知的好医生。",
          answers: ["所"]
        }
      ]
    }
  ]
};
