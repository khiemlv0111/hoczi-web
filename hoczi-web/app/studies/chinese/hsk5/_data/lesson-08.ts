import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第8课 “朝三暮四”的古今义 (The Ancient and Modern Meanings of “Zhao San Mu Si”)
// Nguồn: slide bài 8 và bộ bài tập "HSK5 tiêu chuẩn bài 8" trong hsk5/docs.
export const lesson08: Lesson = {
  level: "hsk5",
  no: 8,
  slug: "bai-8",
  zh: "“朝三暮四”的古今义",
  pinyin: "“Zhāosān-mùsì” de gǔjīn yì",
  vi: "Nghĩa xưa và nay của “Triêu tam mộ tứ”",
  en: "The Ancient and Modern Meanings of “Zhao San Mu Si”",
  topic: "词汇发展 · Sự phát triển của từ vựng",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 词汇、结构、整体、综合、猴子、宠物、表情、行为、对方、蔬菜、粮食、家庭、财产、调皮、淘气、似乎、吃亏、安慰、格外…",
    "Nắm cách kết hợp của các từ: 限制、显得、固定、消费、完整、相处、节省、群、颗.",
    "Hiểu và dùng được 倒、……来……去、要不; phân biệt 彼此 và 互相.",
    "Đọc hiểu câu chuyện thành ngữ “朝三暮四” và sự thay đổi nghĩa của nó, nêu được đặc điểm của thành ngữ.",
    "Thảo luận về sự biến đổi nghĩa của từ vựng và viết đoạn văn 「“朝三暮四”的古与今」.",
    "Nắm 11 từ mở rộng chủ đề 饮食 (ăn uống)."
  ],
  warmUp: [
    {
      zh: "你养过小动物吗？说一说你是怎么养的？",
      vi: "Bạn đã từng nuôi con vật nào chưa? Kể xem bạn nuôi nó như thế nào?"
    },
    {
      zh: "在你的国家有没有什么故事和动物有关？",
      vi: "Ở nước bạn có câu chuyện nào liên quan đến động vật không?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "喂养",
      py: "wèiyǎng",
      pos: "đg.",
      meaning: "nuôi dưỡng, cho ăn",
      example: "从前有位老人，喂养了一群猴子当宠物。",
      exampleVi: "Ngày xưa có một ông lão, nuôi một đàn khỉ làm thú cưng."
    },
    {
      id: 2,
      han: "群",
      py: "qún",
      pos: "lt.",
      meaning: "đàn, bầy, nhóm",
      example: "一群猴子。",
      exampleVi: "Một đàn khỉ."
    },
    {
      id: 3,
      han: "猴子",
      py: "hóuzi",
      pos: "dt.",
      meaning: "con khỉ",
      example: "从前有位老人，喂养了一群猴子当宠物。",
      exampleVi: "Ngày xưa có một ông lão, nuôi một đàn khỉ làm thú cưng."
    },
    {
      id: 4,
      han: "宠物",
      py: "chǒngwù",
      pos: "dt.",
      meaning: "thú cưng",
      example: "从前有位老人，喂养了一群猴子当宠物。",
      exampleVi: "Ngày xưa có một ông lão, nuôi một đàn khỉ làm thú cưng."
    },
    {
      id: 5,
      han: "相处",
      py: "xiāngchǔ",
      pos: "đg.",
      meaning: "sống chung, đối xử với nhau",
      example: "他是一个很好相处的人。",
      exampleVi: "Anh ấy là một người rất dễ sống chung."
    },
    {
      id: 6,
      han: "彼此",
      py: "bǐcǐ",
      pos: "đại từ",
      meaning: "lẫn nhau, hai bên",
      example: "我们彼此都很尊重对方。",
      exampleVi: "Chúng tôi đều tôn trọng lẫn nhau."
    },
    {
      id: 7,
      han: "表情",
      py: "biǎoqíng",
      pos: "dt.",
      meaning: "biểu cảm (khuôn mặt)",
      example: "相处久了，彼此可以从表情中了解对方的意思。",
      exampleVi: "Sống chung lâu, hai bên có thể hiểu ý nhau qua biểu cảm."
    },
    {
      id: 8,
      han: "词汇",
      py: "cíhuì",
      pos: "dt.",
      meaning: "từ vựng",
      example: "“你好”“智慧”都是汉语词汇。",
      exampleVi: "\"Nǐ hǎo\", \"zhìhuì\" đều là từ vựng tiếng Hán."
    },
    {
      id: 9,
      han: "固定",
      py: "gùdìng",
      pos: "tt./đg.",
      meaning: "cố định",
      example: "成语有固定的结构，不能随便更改。",
      exampleVi: "Thành ngữ có kết cấu cố định, không thể tùy tiện thay đổi."
    },
    {
      id: 10,
      han: "结构",
      py: "jiégòu",
      pos: "dt.",
      meaning: "kết cấu",
      example: "成语有固定的结构。",
      exampleVi: "Thành ngữ có kết cấu cố định."
    },
    {
      id: 11,
      han: "整体",
      py: "zhěngtǐ",
      pos: "dt.",
      meaning: "toàn thể, tổng thể",
      example: "成语的意义是整体性的。",
      exampleVi: "Ý nghĩa của thành ngữ mang tính tổng thể."
    },
    {
      id: 12,
      han: "综合",
      py: "zōnghé",
      pos: "đg./tt.",
      meaning: "tổng hợp",
      example: "综合起来表达一个完整的意思。",
      exampleVi: "Tổng hợp lại để biểu đạt một ý nghĩa hoàn chỉnh."
    },
    {
      id: 13,
      han: "完整",
      py: "wánzhěng",
      pos: "tt.",
      meaning: "hoàn chỉnh",
      example: "综合起来表达一个完整的意思。",
      exampleVi: "Tổng hợp lại để biểu đạt một ý nghĩa hoàn chỉnh."
    },
    {
      id: 14,
      han: "倒",
      py: "dào",
      pos: "p.",
      meaning: "lại, ngược lại, thế mà",
      example: "用橡子喂猴子倒是个办法。",
      exampleVi: "Dùng hạt dẻ cho khỉ ăn cũng là một cách hay đấy."
    },
    {
      id: 15,
      han: "行为",
      py: "xíngwéi",
      pos: "dt.",
      meaning: "hành vi",
      example: "随地吐痰的行为是不好的。",
      exampleVi: "Hành vi khạc nhổ bừa bãi là không tốt."
    },
    {
      id: 16,
      han: "对方",
      py: "duìfāng",
      pos: "dt.",
      meaning: "đối phương, bên kia",
      example: "他们俩觉得对方都很搞笑。",
      exampleVi: "Cả hai đều thấy đối phương rất hài hước."
    },
    {
      id: 17,
      han: "蔬菜",
      py: "shūcài",
      pos: "dt.",
      meaning: "rau củ",
      example: "每天要吃大量的瓜果、蔬菜和粮食。",
      exampleVi: "Mỗi ngày phải ăn lượng lớn hoa quả, rau củ và lương thực."
    },
    {
      id: 18,
      han: "粮食",
      py: "liángshi",
      pos: "dt.",
      meaning: "lương thực",
      example: "每天要吃大量的瓜果、蔬菜和粮食。",
      exampleVi: "Mỗi ngày phải ăn lượng lớn hoa quả, rau củ và lương thực."
    },
    {
      id: 19,
      han: "家庭",
      py: "jiātíng",
      pos: "dt.",
      meaning: "gia đình",
      example: "一个普通的家庭，财产不多。",
      exampleVi: "Một gia đình bình thường, tài sản không nhiều."
    },
    {
      id: 20,
      han: "财产",
      py: "cáichǎn",
      pos: "dt.",
      meaning: "tài sản",
      example: "一个普通的家庭，财产不多。",
      exampleVi: "Một gia đình bình thường, tài sản không nhiều."
    },
    {
      id: 21,
      han: "消费",
      py: "xiāofèi",
      pos: "đg.",
      meaning: "tiêu dùng",
      example: "老人必须减少家人的消费。",
      exampleVi: "Ông lão phải giảm bớt tiêu dùng của gia đình."
    },
    {
      id: 22,
      han: "节省",
      py: "jiéshěng",
      pos: "đg.",
      meaning: "tiết kiệm",
      example: "好节省些食物拿去喂养猴子。",
      exampleVi: "Để tiết kiệm chút thức ăn mang đi nuôi khỉ."
    },
    {
      id: 23,
      han: "限制",
      py: "xiànzhì",
      pos: "đg.",
      meaning: "hạn chế, giới hạn",
      example: "他注意到该限制猴子的食量了。",
      exampleVi: "Ông ấy nhận thấy nên hạn chế khẩu phần ăn của khỉ rồi."
    },
    {
      id: 24,
      han: "调皮",
      py: "tiáopí",
      pos: "tt.",
      meaning: "nghịch ngợm",
      example: "就会像一群调皮的孩子。",
      exampleVi: "Sẽ giống như một đám trẻ nghịch ngợm."
    },
    {
      id: 25,
      han: "淘气",
      py: "táoqì",
      pos: "tt.",
      meaning: "nghịch ngợm",
      example: "经常跟人淘气。",
      exampleVi: "Thường xuyên nghịch ngợm với người."
    },
    {
      id: 26,
      han: "似乎",
      py: "sìhū",
      pos: "p.",
      meaning: "dường như, có vẻ",
      example: "猴子们似乎只弄懂了主人前面说的一个“三”。",
      exampleVi: "Đàn khỉ dường như chỉ hiểu được chữ \"ba\" mà chủ nói lúc đầu."
    },
    {
      id: 27,
      han: "安慰",
      py: "ānwèi",
      pos: "đg.",
      meaning: "an ủi",
      example: "安慰它们说道。",
      exampleVi: "An ủi chúng nói rằng."
    },
    {
      id: 28,
      han: "不足",
      py: "bùzú",
      pos: "tt./đg.",
      meaning: "không đủ, thiếu",
      example: "在其他粮食不足的情况下。",
      exampleVi: "Trong tình huống các lương thực khác không đủ."
    },
    {
      id: 29,
      han: "颗",
      py: "kē",
      pos: "lt.",
      meaning: "(dùng cho vật nhỏ tròn)",
      example: "我早上给你们三颗，晚上给四颗。",
      exampleVi: "Buổi sáng ta cho các ngươi ba hạt, buổi tối cho bốn hạt."
    },
    {
      id: 30,
      han: "吃亏",
      py: "chīkuī",
      pos: "đg.",
      meaning: "chịu thiệt",
      example: "觉得自己吃了亏。",
      exampleVi: "Cảm thấy mình bị chịu thiệt."
    },
    {
      id: 31,
      han: "方式",
      py: "fāngshì",
      pos: "dt.",
      meaning: "phương thức, cách thức",
      example: "老人就换了一种方式。",
      exampleVi: "Ông lão liền đổi một cách khác."
    },
    {
      id: 32,
      han: "要不",
      py: "yàobù",
      pos: "lt.",
      meaning: "nếu không thì; hay là",
      example: "要不这样吧，既然你们觉得少……",
      exampleVi: "Hay là thế này đi, vì các ngươi thấy ít..."
    },
    {
      id: 33,
      han: "显得",
      py: "xiǎnde",
      pos: "đg.",
      meaning: "tỏ ra, có vẻ",
      example: "显得格外开心。",
      exampleVi: "Tỏ ra vô cùng vui vẻ."
    },
    {
      id: 34,
      han: "格外",
      py: "géwài",
      pos: "p.",
      meaning: "đặc biệt, khác thường",
      example: "显得格外开心。",
      exampleVi: "Tỏ ra vô cùng vui vẻ."
    },
    {
      id: 35,
      han: "情景",
      py: "qíngjǐng",
      pos: "dt.",
      meaning: "tình cảnh, quang cảnh",
      example: "老人看着这情景，哈哈地笑了。",
      exampleVi: "Ông lão nhìn cảnh tượng này, cười ha hả."
    },
    {
      id: 36,
      han: "朝三暮四",
      py: "zhāosānmùsì",
      pos: "th.ngữ",
      meaning: "sáng ba tối bốn (nghĩa cổ: bản chất không đổi; nghĩa hiện đại: ba phải, thay đổi thất thường)",
      example: "感情中朝三暮四的人，最终会失去信任。",
      exampleVi: "Người thay đổi thất thường trong tình cảm, cuối cùng sẽ mất đi lòng tin."
    },
    {
      id: 37,
      han: "哲学家",
      py: "zhéxuéjiā",
      pos: "dt.",
      meaning: "nhà triết học",
      example: "中国古代有一位哲学家，在他的书中讲了这样一个寓言故事。",
      exampleVi: "Thời cổ đại Trung Quốc có một nhà triết học, trong sách của ông kể một câu chuyện ngụ ngôn như vậy."
    },
    {
      id: 38,
      han: "寓言",
      py: "yùyán",
      pos: "dt.",
      meaning: "truyện ngụ ngôn",
      example: "寓言是指用比喻性的故事来讲道理的文学体裁。",
      exampleVi: "Ngụ ngôn là thể loại văn học dùng câu chuyện ẩn dụ để nói lên đạo lý."
    },
    {
      id: 39,
      han: "橡子",
      py: "xiàngzi",
      pos: "dt.",
      meaning: "hạt dẻ (quả sồi)",
      example: "老人的朋友送给他很多橡子。",
      exampleVi: "Bạn của ông lão tặng ông rất nhiều hạt dẻ."
    },
    {
      id: 40,
      han: "果实",
      py: "guǒshí",
      pos: "dt.",
      meaning: "quả, thành quả",
      example: "这是一种猴子爱吃的果实。",
      exampleVi: "Đây là một loại quả mà khỉ thích ăn."
    },
    {
      id: 41,
      han: "馒头",
      py: "mántou",
      pos: "dt.",
      meaning: "bánh bao (không nhân)",
      example: "今后你们除了吃馒头，还可以再吃一些橡子。",
      exampleVi: "Từ nay ngoài ăn bánh bao, các ngươi còn có thể ăn thêm chút hạt dẻ."
    },
    {
      id: 42,
      han: "哈",
      py: "hā",
      pos: "thán từ",
      meaning: "(tiếng cười)",
      example: "老人看着这情景，哈哈地笑了。",
      exampleVi: "Ông lão nhìn cảnh tượng này, cười ha hả."
    },
    {
      id: 43,
      han: "火锅",
      py: "huǒguō",
      pos: "dt.",
      meaning: "lẩu",
      example: "冬天吃火锅最舒服了。",
      exampleVi: "Mùa đông ăn lẩu là thoải mái nhất.",
      group: "extended"
    },
    {
      id: 44,
      han: "烧烤",
      py: "shāokǎo",
      pos: "dt.",
      meaning: "đồ nướng",
      example: "周末我们一起去吃烧烤吧。",
      exampleVi: "Cuối tuần chúng ta cùng đi ăn đồ nướng nhé.",
      group: "extended"
    },
    {
      id: 45,
      han: "炒饭",
      py: "chǎofàn",
      pos: "dt.",
      meaning: "cơm rang",
      example: "扬州炒饭很有名。",
      exampleVi: "Cơm rang Dương Châu rất nổi tiếng.",
      group: "extended"
    },
    {
      id: 46,
      han: "汤圆",
      py: "tāngyuán",
      pos: "dt.",
      meaning: "chè trôi nước",
      example: "元宵节要吃汤圆。",
      exampleVi: "Tết Nguyên Tiêu phải ăn chè trôi nước.",
      group: "extended"
    },
    {
      id: 47,
      han: "饺子",
      py: "jiǎozi",
      pos: "dt.",
      meaning: "sủi cảo, bánh chẻo",
      example: "北方人过年喜欢吃饺子。",
      exampleVi: "Người miền Bắc thích ăn sủi cảo vào dịp Tết.",
      group: "extended"
    },
    {
      id: 48,
      han: "包子",
      py: "bāozi",
      pos: "dt.",
      meaning: "bánh bao (có nhân)",
      example: "这家店的包子很好吃。",
      exampleVi: "Bánh bao của cửa hàng này rất ngon.",
      group: "extended"
    },
    {
      id: 49,
      han: "粥",
      py: "zhōu",
      pos: "dt.",
      meaning: "cháo",
      example: "生病的时候喝粥比较好消化。",
      exampleVi: "Khi bị bệnh ăn cháo sẽ dễ tiêu hóa hơn.",
      group: "extended"
    },
    {
      id: 50,
      han: "面条",
      py: "miàntiáo",
      pos: "dt.",
      meaning: "mì, mì sợi",
      example: "生日那天要吃一碗长长的面条。",
      exampleVi: "Vào ngày sinh nhật phải ăn một bát mì dài.",
      group: "extended"
    },
    {
      id: 51,
      han: "炖",
      py: "dùn",
      pos: "đg.",
      meaning: "hầm, ninh",
      example: "妈妈炖了一锅鸡汤。",
      exampleVi: "Mẹ hầm một nồi canh gà.",
      group: "extended"
    },
    {
      id: 52,
      han: "煮",
      py: "zhǔ",
      pos: "đg.",
      meaning: "luộc, nấu",
      example: "把鸡蛋煮熟。",
      exampleVi: "Luộc chín trứng gà.",
      group: "extended"
    },
    {
      id: 53,
      han: "蒸",
      py: "zhēng",
      pos: "đg.",
      meaning: "hấp",
      example: "蒸鱼比炸鱼更健康。",
      exampleVi: "Cá hấp lành mạnh hơn cá chiên.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 “朝三暮四”的古今义",
    paragraphs: [
      {
        zh: "成语是汉语中非常有特点的一部分词汇。成语有固定的结构，不能随便更改；意义是整体性的，不是每个字意思的简单相加，而是综合起来表达一个完整的意思。一般来说，成语的意义也是稳定的，很少发生变化，比如我们学过的“盲人摸象”和“精诚所至，金石为开”。但也有古今不同的，像我们今天要学习的“朝三暮四”。中国古代有一位哲学家，在他的书中讲了这样一个寓言故事：",
        vi: "Thành ngữ là một bộ phận từ vựng rất đặc sắc trong tiếng Hán. Thành ngữ có kết cấu cố định, không được tùy tiện sửa đổi; ý nghĩa mang tính chỉnh thể, không phải là phép cộng đơn giản nghĩa của từng chữ mà là tổng hợp lại để biểu đạt một ý nghĩa hoàn chỉnh. Nói chung, nghĩa của thành ngữ cũng ổn định, ít khi thay đổi, ví dụ như “盲人摸象” và “精诚所至，金石为开” chúng ta đã học. Nhưng cũng có thành ngữ xưa và nay khác nhau, như “朝三暮四” mà hôm nay chúng ta học. Thời cổ Trung Quốc có một nhà triết học, trong sách của ông đã kể một câu chuyện ngụ ngôn như sau:",
        questions: ["成语有哪些特点？"]
      },
      {
        zh: "从前有位老人，喂养了一群猴子当宠物。相处久了，彼此居然可以从表情、声音和行为举止中了解对方的意思。猴子太多，每天要吃大量的瓜果、蔬菜和粮食。然而，一个普通的家庭，财产不多，哪有那么大的财力满足一群猴子对食物的长期需要呢？老人甚至必须减少家人的消费，好节省些食物拿去喂养猴子。他注意到该限制猴子的食量了。",
        vi: "Ngày xưa có một ông lão nuôi một bầy khỉ làm thú cưng. Sống với nhau lâu ngày, hai bên thậm chí có thể hiểu ý nhau qua nét mặt, âm thanh và cử chỉ hành vi. Khỉ quá nhiều, mỗi ngày phải ăn rất nhiều hoa quả, rau và lương thực. Thế nhưng một gia đình bình thường, tài sản không nhiều, lấy đâu ra sức lực tài chính lớn như vậy để đáp ứng nhu cầu thức ăn lâu dài của cả một bầy khỉ? Ông lão thậm chí phải cắt giảm chi tiêu của người nhà để tiết kiệm chút thức ăn đem đi nuôi khỉ. Ông nhận ra đã đến lúc phải hạn chế lượng ăn của lũ khỉ.",
        questions: ["老人和猴子们相处得怎么样？", "老人发现了什么问题？"]
      },
      {
        zh: "问题是，猴子不像猪、狗，吃不饱时仅仅只是叫叫，它们如果得不到好的待遇，就会像一群调皮的孩子，经常跟人淘气。老人的朋友送给他很多橡子，这是一种猴子爱吃的果实。在其他粮食不足的情况下，用橡子喂猴子倒是个办法。于是老人对猴子们说：“今后你们除了吃馒头，还可以再吃一些橡子。我早上给你们三颗，晚上给四颗。”猴子们似乎只弄懂了主人前面说的一个“三”，觉得自己吃了亏，一个个立起身子跳来跳去，对着老人大喊大叫地发脾气。",
        vi: "Vấn đề là khỉ không giống lợn hay chó, ăn không no thì chỉ kêu vài tiếng; nếu không được đối xử tốt, chúng sẽ như một đám trẻ nghịch ngợm, thường xuyên quậy phá. Bạn của ông lão tặng ông rất nhiều hạt sồi, một loại quả khỉ rất thích ăn. Trong tình cảnh các loại lương thực khác không đủ, dùng hạt sồi cho khỉ ăn cũng là một cách hay. Thế là ông lão nói với lũ khỉ: “Từ nay ngoài bánh màn thầu, các con còn được ăn thêm ít hạt sồi. Buổi sáng ta cho mỗi con ba hạt, buổi tối bốn hạt.” Lũ khỉ dường như chỉ hiểu được mỗi chữ “ba” chủ nhân nói lúc đầu, cảm thấy mình bị thiệt, con nào con nấy đứng thẳng người nhảy qua nhảy lại, la hét nổi giận với ông lão.",
        questions: ["老人想了什么办法解决？", "请用重点词语复述故事：调皮、橡子、早上、晚上、吃亏、发脾气"]
      },
      {
        zh: "老人见猴子们不接受，就换了一种方式，安慰它们说道：“要不这样吧，既然你们觉得少，那就改成每天早上四颗，晚上三颗，这样总够了吧？”猴子把主人前面说的一个“四”当成全天多得了的橡子，所以马上安静下来，显得格外开心。老人看着这情景，哈哈地笑了。",
        vi: "Ông lão thấy lũ khỉ không chịu, bèn đổi cách khác, dỗ dành chúng: “Hay là thế này, các con đã thấy ít thì đổi thành mỗi ngày sáng bốn hạt, tối ba hạt, thế thì đủ rồi chứ?” Lũ khỉ coi chữ “bốn” chủ nhân nói lúc đầu là số hạt sồi được thêm trong cả ngày, nên lập tức im lặng, trông vui vẻ khác thường. Ông lão nhìn cảnh ấy, cười ha hả.",
        questions: ["猴子的反应怎么样？", "请用重点词语复述故事：不接受、换方式、显得、情景"]
      },
      {
        zh: "哲学家用这个故事告诉人们，不要太关心生死、得失，因为到最后我们会发现没有失去什么，也没有得到什么。不过，发展到今天，“朝三暮四”这个成语的意义已经完全改变了。你知道它现在是什么意思吗？",
        vi: "Nhà triết học dùng câu chuyện này để nói với mọi người rằng đừng quá bận tâm đến sống chết, được mất, vì đến cuối cùng ta sẽ thấy mình chẳng mất gì, cũng chẳng được gì. Tuy nhiên, phát triển đến ngày nay, nghĩa của thành ngữ “朝三暮四” đã hoàn toàn thay đổi. Bạn có biết bây giờ nó có nghĩa là gì không?",
        questions: ["这个故事告诉我们什么道理？", "“朝三暮四”现在是什么意思？"]
      }
    ],
    notes: [
      "朝三暮四 (zhāosān-mùsì): nghĩa gốc – sáng ba tối bốn, đổi cách nói mà thực chất không đổi; nghĩa ngày nay – thay lòng đổi dạ, hay thay đổi, không chuyên nhất.",
      "哲学家 ở đây là Trang Tử (庄子). 橡子 (xiàngzi): hạt sồi."
    ]
  },
  grammar: [
    {
      word: "彼此 / 互相",
      title: "Phân biệt 彼此 / 互相",
      usages: [
        {
          label: "彼此",
          explain: "Đại từ, có thể làm chủ ngữ/định ngữ/tân ngữ, có thể láy \"彼此彼此\" biểu thị hai bên như nhau.",
          examples: ["我们彼此的爱好相同。", "咱们俩彼此彼此。"]
        },
        {
          label: "互相",
          explain: "Phó từ, chỉ đứng trước động từ, câu cần có chủ ngữ riêng phía trước.",
          examples: ["好朋友应该互相帮助。"]
        }
      ],
      note: "Cả hai đều biểu thị \"hai bên có hành động/tình cảm giống nhau, dành cho nhau\". Nhưng 彼此 là đại từ (có thể làm chủ ngữ, định ngữ, tân ngữ, hoặc láy lại); 互相 là phó từ, chỉ đứng trước động từ."
    },
    {
      word: "倒",
      title: "Phó từ đa nghĩa (4 cách dùng)",
      usages: [
        {
          label: "Ngược lại với tình huống thường thấy",
          explain: "",
          examples: ["在其他水果不足的情况下，用苹果喂猴子倒是个办法。"]
        },
        {
          label: "Biểu thị không ngờ tới",
          explain: "",
          examples: ["对方确实厉害，但最后反倒是他赢了。"]
        },
        {
          label: "Biểu thị nhượng bộ (khẳng định trước, nói vấn đề khác sau)",
          explain: "",
          examples: ["质量倒是挺好，就是价格太贵了。"]
        },
        {
          label: "Hỏi/giục một cách không kiên nhẫn",
          explain: "",
          examples: ["你倒是说句话呀！"]
        }
      ],
      note: "倒 là phó từ đa nghĩa rất phổ biến trong khẩu ngữ HSK5+. Cần dựa vào ngữ cảnh: có sự đối lập với mong đợi thông thường, có sự bất ngờ, có ý nhượng bộ, hay có ý thúc giục/mất kiên nhẫn."
    },
    {
      word: "要不",
      title: "Liên từ (\"nếu không thì\" / \"hay là\")",
      usages: [
        {
          label: "Nếu không thì (≈要不然)",
          explain: "Liên từ, nêu hệ quả nếu không làm theo điều vừa nói",
          examples: ["4块，要不我不买。"]
        },
        {
          label: "Hay là (đề xuất lựa chọn khác)",
          explain: "Liên từ, đưa ra phương án thay thế",
          examples: ["今天太晚了，要不你明天再走吧。"]
        }
      ],
      note: "要不 rất linh hoạt trong khẩu ngữ: khi đi kèm một điều kiện ngầm ở trước, nó mang nghĩa \"nếu không thì\"; khi đứng đầu câu đề xuất, nó mang nghĩa \"hay là, hay thế này\"."
    }
  ],
  wordChoice: [
    {
      sentence: "希望我们能够友好___，共同发展。",
      options: ["颗", "群", "安慰", "似乎", "限制", "相处"],
      answer: "相处"
    },
    {
      sentence: "他最近心情不太好，事情___办得不太顺利。",
      options: ["颗", "群", "安慰", "似乎", "限制", "相处"],
      answer: "似乎"
    },
    {
      sentence: "聚在电台门口的那___人是干什么的？",
      options: ["颗", "群", "安慰", "似乎", "限制", "相处"],
      answer: "群"
    },
    {
      sentence: "她跟丈夫离婚后非常伤心，朋友们轮流来___她。",
      options: ["颗", "群", "安慰", "似乎", "限制", "相处"],
      answer: "安慰"
    },
    {
      sentence: "小明昨天掉了一___牙齿，这是他第一次换牙。",
      options: ["颗", "群", "安慰", "似乎", "限制", "相处"],
      answer: "颗"
    },
    {
      sentence: "这次的作文不___字数，你可以想写多少就写多少。",
      options: ["颗", "群", "安慰", "似乎", "限制", "相处"],
      answer: "限制"
    },
    {
      sentence: "两个人在一起生活，一定要经常为___考虑。",
      options: ["行为", "对方", "家庭", "财产"],
      answer: "对方"
    },
    {
      sentence: "我建议这几天我们应该把下周会议讨论话题的顺序___下来。",
      options: ["一定", "固定"],
      answer: "固定"
    },
    {
      sentence: "汉语的___非常丰富，你得特别注意近义词之间的区别。",
      options: ["词汇", "词"],
      answer: "词汇"
    },
    {
      sentence: "这篇文章___上写得不错，有些小地方还要再改改。",
      options: ["完整", "整体"],
      answer: "整体"
    },
    {
      sentence: "这两个女孩儿关系非常好，___亲姐妹一样。",
      options: ["好像", "似乎"],
      answer: "好像"
    },
    {
      sentence: "对同一个问题，___的认识不同，是很正常的事情。",
      options: ["彼此", "互相"],
      answer: "彼此"
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
          distractors: [22, 23, 27]
        },
        {
          vocabId: 3,
          distractors: [4, 2, 39]
        },
        {
          vocabId: 4,
          distractors: [3, 2, 15]
        },
        {
          vocabId: 6,
          distractors: [16, 5, 7]
        },
        {
          vocabId: 8,
          distractors: [10, 11, 31]
        },
        {
          vocabId: 9,
          distractors: [8, 10, 13]
        },
        {
          vocabId: 36,
          distractors: [38, 37, 39]
        },
        {
          vocabId: 37,
          distractors: [36, 38, 3]
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
      vocabIds: [5, 12, 13, 21, 22, 26, 27, 38]
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
          tokens: ["从前", "有位老人", "喂养了", "一群猴子", "。"],
          answer: "从前有位老人喂养了一群猴子。",
          vi: "Ngày xưa có một ông lão nuôi một đàn khỉ."
        },
        {
          tokens: ["成语", "有", "固定的结构", "不能", "随便更改", "。"],
          answer: "成语有固定的结构不能随便更改。",
          vi: "Thành ngữ có kết cấu cố định, không thể tùy tiện thay đổi."
        },
        {
          tokens: ["猴子们", "觉得", "自己", "吃了亏", "。"],
          answer: "猴子们觉得自己吃了亏。",
          vi: "Đàn khỉ cảm thấy mình bị chịu thiệt."
        },
        {
          tokens: ["老人", "看着", "这情景", "哈哈地", "笑了", "。"],
          answer: "老人看着这情景哈哈地笑了。",
          vi: "Ông lão nhìn cảnh tượng này cười ha hả."
        },
        {
          tokens: ["朝三暮四", "这个成语的意义", "已经", "完全", "改变了", "。"],
          answer: "朝三暮四这个成语的意义已经完全改变了。",
          vi: "Ý nghĩa của thành ngữ \"朝三暮四\" đã hoàn toàn thay đổi."
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
          title: "课文 1 (đoạn 2) · Ông lão và vấn đề thức ăn của đàn khỉ",
          text: "从前有位老人，{{d1}}了一群猴子当宠物。{{d2}}久了，{{d3}}居然可以从表情、声音和行为举止中了解对方的意思。猴子太多，每天要吃大量的瓜果、{{d4}}和粮食。然而，一个普通的家庭，{{d5}}不多，哪有那么大的财力满足一群猴子对食物的长期需要呢？老人甚至必须减少家人的{{d6}}，好{{d7}}些食物拿去喂养猴子。他注意到该{{d8}}猴子的食量了。"
        },
        {
          title: "课文 1 (đoạn 3) · Ý tưởng dùng hạt dẻ cho khỉ ăn",
          text: "问题是，猴子不像猪、狗，吃不饱时仅仅只是叫叫，它们如果得不到好的待遇，就会像一群{{d9}}的孩子，经常跟人淘气。老人的朋友送给他很多橡子，这是一种猴子爱吃的果实。在其他粮食{{d10}}的情况下，用橡子喂猴子倒是个办法。"
        }
      ],
      answers: {
        d1: "喂养",
        d2: "相处",
        d3: "彼此",
        d4: "蔬菜",
        d5: "财产",
        d6: "消费",
        d7: "节省",
        d8: "限制",
        d9: "调皮",
        d10: "不足"
      },
      bank: ["喂养", "相处", "彼此", "蔬菜", "财产", "消费", "节省", "限制", "调皮", "不足", "宠物", "粮食", "淘气"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể chuyện ông lão và đàn khỉ.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 4) · Đề nghị ba - bốn của ông lão",
          text: "于是老人对猴子们说：“今后你们除了吃{{t1}}，还可以再吃一些橡子。我早上给你们三{{t2}}，晚上给四颗。”猴子们{{t3}}只弄懂了主人前面说的一个“三”，觉得自己{{t4}}了，一个个立起身子跳来跳去，对着老人大喊大叫地发脾气。"
        },
        {
          title: "课文 1 (đoạn 5) · Giải pháp bốn - ba khiến khỉ vui vẻ",
          text: "老人见猴子们不接受，就换了一种{{t5}}，{{t6}}它们说道：“{{t7}}这样吧，既然你们觉得少，那就改成每天早上四颗，晚上三颗，这样总够了吧？”猴子把主人前面说的一个“四”当成全天多得了的橡子，所以马上安静下来，{{t8}}{{t9}}开心。老人看着这{{t10}}，哈哈地笑了。"
        }
      ],
      answers: {
        t1: "馒头",
        t2: "颗",
        t3: "似乎",
        t4: "吃亏",
        t5: "方式",
        t6: "安慰",
        t7: "要不",
        t8: "显得",
        t9: "格外",
        t10: "情景"
      },
      bank: ["馒头", "颗", "似乎", "吃亏", "方式", "安慰", "要不", "显得", "格外", "情景", "橡子", "果实", "哈"]
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
          zh: "成语有固定的结构，不能随便更改。",
          vi: "Thành ngữ có kết cấu cố định, không thể tùy tiện thay đổi.",
          keywords: ["thành ngữ", "kết cấu", "cố định", "thay đổi"]
        },
        {
          zh: "老人喂养了一群猴子当宠物。",
          vi: "Ông lão nuôi một đàn khỉ làm thú cưng.",
          keywords: ["ông lão", "đàn khỉ", "thú cưng"]
        },
        {
          zh: "猴子们觉得自己吃了亏，对着老人大喊大叫地发脾气。",
          vi: "Đàn khỉ cảm thấy mình bị chịu thiệt, la hét nổi giận với ông lão.",
          keywords: ["chịu thiệt", "la hét", "nổi giận"]
        },
        {
          zh: "老人看着这情景，哈哈地笑了。",
          vi: "Ông lão nhìn cảnh tượng này, cười ha hả.",
          keywords: ["cảnh tượng", "cười ha hả"]
        },
        {
          zh: "“朝三暮四”这个成语的意义已经完全改变了。",
          vi: "Ý nghĩa của thành ngữ \"朝三暮四\" đã hoàn toàn thay đổi.",
          keywords: ["ý nghĩa", "thành ngữ", "hoàn toàn thay đổi"]
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
          vi: "Hai bên nên giúp đỡ lẫn nhau.",
          answers: ["双方应该互相帮助。", "彼此应该互相帮助。"]
        },
        {
          vi: "Ông lão nuôi một đàn khỉ làm thú cưng.",
          answers: ["老人喂养了一群猴子当宠物。"]
        },
        {
          vi: "Cô ấy dường như đã hiểu ra vấn đề này.",
          answers: ["她似乎明白了这个问题。", "她似乎理解了这个问题。"]
        },
        {
          vi: "Nếu không thì chúng ta đổi một cách khác đi.",
          answers: ["要不我们换一种方式吧。", "要不我们换一个方式吧。"]
        },
        {
          vi: "Bầu trời hôm nay đặc biệt trong xanh.",
          answers: ["今天的天空格外蓝。", "今天天空格外蓝。"]
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
          q: "成语的意义是整体性的，不是每个字意思的简单相加。",
          a: true
        },
        {
          q: "“朝三暮四”这个成语的意义从古至今从未改变过。",
          a: false
        },
        {
          q: "老人喂养猴子的目的是把猴子当作食物。",
          a: false
        },
        {
          q: "老人的朋友送给他很多橡子。",
          a: true
        },
        {
          q: "猴子一开始听到“早上三颗，晚上四颗”就很满意。",
          a: false
        },
        {
          q: "老人后来把方案改成“早上四颗，晚上三颗”。",
          a: true
        },
        {
          q: "猴子们后来听到新方案后显得格外开心。",
          a: true
        },
        {
          q: "哲学家用这个故事告诉人们不要太在意生死得失。",
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
      items: ["成语有固定的结构，不能随便更改。", "老人喂养了一群猴子当宠物。", "猴子们觉得自己吃了亏。", "老人看着这情景，哈哈地笑了。", "“朝三暮四”这个成语的意义已经完全改变了。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“‘朝三暮四’的古与今”为题写一段话。 (Hãy viết một đoạn văn về sự thay đổi ý nghĩa xưa và nay của thành ngữ \"朝三暮四\".)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 8 (彼此/互相, 倒, 要不).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["彼此", "互相", "倒", "要不"],
      minGrammar: 2,
      sample: "“朝三暮四”这个成语很有意思，古义和今义完全不同。在寓言故事里，老人喂养了一群猴子当宠物，因为粮食不足，他想限制猴子的食量，于是把橡子分成早上三颗、晚上四颗。猴子们似乎只听懂了“三”，觉得自己吃了亏，就大喊大叫。老人于是换了一种方式，安慰它们说，要不改成早上四颗、晚上三颗吧，猴子们听了显得格外开心。其实橡子的总数根本没有变，只是猴子和人彼此的理解不同罢了。现在“朝三暮四”倒是常用来形容一个人反复无常、没有原则，和最初的意思相比，简直是天差地别。这也让我明白，词汇的意义是会随着时代变化的。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 彼此 / 互相",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (彼此 so với 互相).",
      kind: "grammar-fill",
      grammarWord: "彼此 / 互相",
      options: ["彼此", "互相", "彼此彼此"],
      items: [
        {
          q: "你们是姐妹，应该___照顾。",
          answers: ["彼此", "互相"]
        },
        {
          q: "对同一个问题，___的认识不同，是很正常的事情。",
          answers: ["彼此"]
        },
        {
          q: "我们是夫妻，各自除了孝顺自己的父母，也应该孝顺___的父母。",
          answers: ["彼此"]
        },
        {
          q: "现在是我们公司最困难的时候，大家应该___支持。",
          answers: ["彼此", "互相"]
        },
        {
          q: "我们___都很尊重对方。",
          answers: ["彼此", "互相"]
        },
        {
          q: "好朋友应该___帮助。",
          answers: ["互相"]
        },
        {
          q: "我们是最好的朋友，不分___。",
          answers: ["彼此"]
        },
        {
          q: "咱们俩___，我画得比你好不了多少。",
          answers: ["彼此彼此"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 倒",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (倒 - phó từ đa nghĩa (4 cách dùng)).",
      kind: "grammar-fill",
      grammarWord: "倒",
      items: [
        {
          q: "在其他水果不足的情况下，用苹果喂猴子___是个办法。",
          answers: ["倒"]
        },
        {
          q: "少年不解地问：“怎么勇敢反___成为缺点了？”",
          answers: ["倒"]
        },
        {
          q: "有这样的人？我___要认识认识。",
          answers: ["倒"]
        },
        {
          q: "对方确实厉害，一上场就先赢了他两局，但最后反___是他赢了。",
          answers: ["倒"]
        },
        {
          q: "质量___是挺好，就是价格太贵了。",
          answers: ["倒"]
        },
        {
          q: "我___是很愿意参与这次活动，就是暂时无法确定是否有时间。",
          answers: ["倒"]
        },
        {
          q: "你究竟去还是不去？___是说句话呀！",
          answers: ["倒"]
        },
        {
          q: "你___是说说看，这件事你不负责谁负责？",
          answers: ["倒"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 要不",
      points: 5,
      subtitle: "Điền từ vào chỗ trống (要不 - liên từ (\"nếu không thì\" / \"hay là\")).",
      kind: "grammar-fill",
      grammarWord: "要不",
      items: [
        {
          q: "老太太说：“4块，___我不买。”",
          answers: ["要不"]
        },
        {
          q: "还好碰见你了，___然我今天肯定要迟到了。",
          answers: ["要不"]
        },
        {
          q: "今天太晚了，___你明天再走吧。",
          answers: ["要不"]
        },
        {
          q: "___这样吧，既然你们觉得少，那就改成每天早上四颗，晚上三颗。",
          answers: ["要不"]
        },
        {
          q: "谢谢你昨晚给我发了短信，___我肯定得迟到。",
          answers: ["要不"]
        },
        {
          q: "后天我们打算去中国朋友家过除夕，___你也一起来吧？",
          answers: ["要不"]
        },
        {
          q: "天气预报说明天有雨，___我们改天再去爬山吧。",
          answers: ["要不"]
        },
        {
          q: "你再想想，___我们先按你的方案试试看？",
          answers: ["要不"]
        }
      ]
    }
  ]
};
