import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第7课 成语故事两则 (Two Idiom Stories)
// Nguồn: slide bài 7 và bộ bài tập "HSK5 tiêu chuẩn bài 7" trong hsk5/docs.
export const lesson07: Lesson = {
  level: "hsk5",
  no: 7,
  slug: "bai-7",
  zh: "成语故事两则",
  pinyin: "Chéngyǔ gùshi liǎng zé",
  vi: "Hai câu chuyện thành ngữ",
  en: "Two Idiom Stories",
  topic: "成语故事 · Truyện thành ngữ",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 成语、则、象、智慧、士兵、牙齿、胡说、尾巴、绳子、墙、扇子、结论、善于、称、蹲、摇、摆、姿势…",
    "Nắm cách kết hợp của các từ: 寻找、确定、片面、连续、摸、碎、支、不要紧、反应.",
    "Hiểu và dùng được 瞎、分别、根、便; phân biệt 忽然 và 突然.",
    "Đọc hiểu hai truyện thành ngữ 《盲人摸象》 và 《精诚所至，金石为开》, kể lại bằng từ vựng đã học.",
    "Học thành ngữ “有的放矢”, thảo luận về thái độ và mục tiêu khi làm việc, viết đoạn văn theo chủ đề.",
    "Nắm 10 từ mở rộng chủ đề 语言文字 (ngôn ngữ – chữ viết)."
  ],
  warmUp: [
    {
      zh: "大象的各部位像什么？（牙齿、尾巴、身子、耳朵）",
      vi: "Các bộ phận của con voi (ngà, đuôi, thân, tai) trông giống cái gì?"
    },
    {
      zh: "你会射箭吗？射得准不准？",
      vi: "Bạn có biết bắn cung không? Bắn có chuẩn không?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "成语",
      py: "chéngyǔ",
      pos: "dt.",
      meaning: "thành ngữ",
      example: "人们长期以来习用的、简洁的词组或短句叫做成语。",
      exampleVi: "Những cụm từ hoặc câu ngắn gọn được người ta dùng quen thuộc lâu đời gọi là thành ngữ."
    },
    {
      id: 2,
      han: "士兵",
      py: "shìbīng",
      pos: "dt.",
      meaning: "binh sĩ",
      example: "他让士兵们去找一头大象。",
      exampleVi: "Ông ta sai binh sĩ đi tìm một con voi."
    },
    {
      id: 3,
      han: "智慧",
      py: "zhìhuì",
      pos: "dt.",
      meaning: "trí tuệ",
      example: "很久以前，有一个很有智慧的国王。",
      exampleVi: "Rất lâu trước đây, có một vị vua rất trí tuệ."
    },
    {
      id: 4,
      han: "摸",
      py: "mō",
      pos: "đg.",
      meaning: "sờ, chạm",
      example: "国王叫盲人们去摸一摸大象。",
      exampleVi: "Nhà vua bảo những người mù đi sờ thử con voi."
    },
    {
      id: 5,
      han: "盲人",
      py: "mángrén",
      pos: "dt.",
      meaning: "người mù",
      example: "这位盲人在寻找道路。",
      exampleVi: "Người mù này đang tìm đường."
    },
    {
      id: 6,
      han: "则",
      py: "zé",
      pos: "lt.",
      meaning: "mẩu, đoạn (dùng cho tin tức/bài viết)",
      example: "本课包含两个成语故事。",
      exampleVi: "Bài học này gồm hai câu chuyện thành ngữ."
    },
    {
      id: 7,
      han: "结论",
      py: "jiélùn",
      pos: "dt.",
      meaning: "kết luận",
      example: "只有片面的认识是不能下结论的。",
      exampleVi: "Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận."
    },
    {
      id: 8,
      han: "片面",
      py: "piànmiàn",
      pos: "tt.",
      meaning: "phiến diện, một chiều",
      example: "不能这样片面地看问题。",
      exampleVi: "Không thể nhìn nhận vấn đề một cách phiến diện như vậy."
    },
    {
      id: 9,
      han: "平",
      py: "píng",
      pos: "tt.",
      meaning: "bằng phẳng",
      example: "我觉得像一面又高又平的墙。",
      exampleVi: "Tôi thấy nó giống như một bức tường vừa cao vừa phẳng."
    },
    {
      id: 10,
      han: "胡说",
      py: "húshuō",
      pos: "đg.",
      meaning: "nói bậy, nói linh tinh",
      example: "别听他瞎说，胡说八道。",
      exampleVi: "Đừng nghe hắn nói linh tinh, nói bậy nói bạ."
    },
    {
      id: 11,
      han: "寻找",
      py: "xúnzhǎo",
      pos: "đg.",
      meaning: "tìm kiếm",
      example: "这位盲人在寻找道路。",
      exampleVi: "Người mù này đang tìm đường."
    },
    {
      id: 12,
      han: "分别",
      py: "fēnbié",
      pos: "đg./p./dt.",
      meaning: "chia tay; lần lượt, riêng; sự khác biệt",
      example: "士兵们分别去不同的地方寻找。",
      exampleVi: "Các binh sĩ lần lượt đi các nơi khác nhau để tìm kiếm."
    },
    {
      id: 13,
      han: "瞎",
      py: "xiā",
      pos: "đg./p.",
      meaning: "mù; linh tinh, không căn cứ",
      example: "出生时眼睛就瞎了的人。",
      exampleVi: "Người bị mù mắt từ khi sinh ra."
    },
    {
      id: 14,
      han: "称",
      py: "chēng",
      pos: "đg.",
      meaning: "gọi, xưng",
      example: "他被称为“飞将军”。",
      exampleVi: "Ông ấy được gọi là \"Phi Tướng Quân\"."
    },
    {
      id: 15,
      han: "蹲",
      py: "dūn",
      pos: "đg.",
      meaning: "ngồi xổm",
      example: "忽然发现远处蹲着一只大老虎。",
      exampleVi: "Bỗng nhiên phát hiện phía xa có một con hổ lớn đang ngồi xổm."
    },
    {
      id: 16,
      han: "摇",
      py: "yáo",
      pos: "đg.",
      meaning: "lắc, vẫy",
      example: "李广摇摇头，表示不要紧。",
      exampleVi: "Lý Quảng lắc đầu, biểu thị không sao."
    },
    {
      id: 17,
      han: "便",
      py: "biàn",
      pos: "p.",
      meaning: "thì, liền (≈就, văn viết)",
      example: "精诚所至，金石为开，这一成语也便由此流传下来。",
      exampleVi: "Câu thành ngữ \"tinh thành sở chí, kim thạch vi khai\" cũng từ đó mà được lưu truyền."
    },
    {
      id: 18,
      han: "碎",
      py: "suì",
      pos: "đg./tt.",
      meaning: "vỡ vụn",
      example: "有的箭头碎了。",
      exampleVi: "Có mũi tên bị vỡ vụn."
    },
    {
      id: 19,
      han: "根",
      py: "gēn",
      pos: "dt./lt.",
      meaning: "rễ, gốc; (lượng từ vật dài mảnh)",
      example: "这次他连续换了几根箭。",
      exampleVi: "Lần này anh ấy liên tục đổi mấy mũi tên."
    },
    {
      id: 20,
      han: "摆",
      py: "bǎi",
      pos: "đg.",
      meaning: "đặt, bày",
      example: "他摆好姿势，全神贯注。",
      exampleVi: "Anh ấy đứng vào tư thế, tập trung cao độ."
    },
    {
      id: 21,
      han: "善于",
      py: "shànyú",
      pos: "đg.",
      meaning: "giỏi về, thành thạo",
      example: "他善于骑马射箭。",
      exampleVi: "Anh ấy giỏi cưỡi ngựa bắn cung."
    },
    {
      id: 22,
      han: "忽然",
      py: "hūrán",
      pos: "p.",
      meaning: "đột nhiên",
      example: "忽然发现远处蹲着一只大老虎。",
      exampleVi: "Bỗng nhiên phát hiện phía xa có một con hổ lớn."
    },
    {
      id: 23,
      han: "不要紧",
      py: "búyàojǐn",
      pos: "cụm từ",
      meaning: "không sao, không quan trọng",
      example: "李广摇摇头，表示不要紧。",
      exampleVi: "Lý Quảng lắc đầu, biểu thị không sao."
    },
    {
      id: 24,
      han: "姿势",
      py: "zīshì",
      pos: "dt.",
      meaning: "tư thế",
      example: "他摆好姿势，全神贯注。",
      exampleVi: "Anh ấy đứng vào tư thế, tập trung cao độ."
    },
    {
      id: 25,
      han: "尽（力）",
      py: "jìn(lì)",
      pos: "đg.",
      meaning: "cố gắng hết sức",
      example: "只要我们尽力了，这件事失败了也不要紧。",
      exampleVi: "Chỉ cần chúng ta cố gắng hết sức, việc này thất bại cũng không sao."
    },
    {
      id: 26,
      han: "确定",
      py: "quèdìng",
      pos: "đg.",
      meaning: "xác định, chắc chắn",
      example: "士兵们想确定它是不是死了。",
      exampleVi: "Các binh sĩ muốn xác định xem nó đã chết chưa."
    },
    {
      id: 27,
      han: "反应",
      py: "fǎnyìng",
      pos: "đg./dt.",
      meaning: "phản ứng",
      example: "过了一会儿，老虎没什么反应。",
      exampleVi: "Qua một lúc, con hổ chẳng có phản ứng gì."
    },
    {
      id: 28,
      han: "打猎",
      py: "dǎliè",
      pos: "đg.",
      meaning: "đi săn",
      example: "他正带着士兵们在山中打猎。",
      exampleVi: "Ông ấy đang dẫn binh sĩ đi săn trong núi."
    },
    {
      id: 29,
      han: "将军",
      py: "jiāngjūn",
      pos: "dt.",
      meaning: "tướng quân",
      example: "西汉时期有一位著名的将军叫李广。",
      exampleVi: "Thời Tây Hán có một vị tướng quân nổi tiếng tên là Lý Quảng."
    },
    {
      id: 30,
      han: "支",
      py: "zhī",
      pos: "lt.",
      meaning: "(lượng từ vật dài mảnh, cứng)",
      example: "他从箭袋里取出一支箭。",
      exampleVi: "Ông ấy lấy ra một mũi tên từ ống tên."
    },
    {
      id: 31,
      han: "全神贯注",
      py: "quánshénguànzhù",
      pos: "th.ngữ",
      meaning: "toàn tâm toàn ý, tập trung cao độ",
      example: "他上课的时候全神贯注。",
      exampleVi: "Khi học anh ấy tập trung cao độ."
    },
    {
      id: 32,
      han: "石头",
      py: "shítou",
      pos: "dt.",
      meaning: "hòn đá",
      example: "被射中的竟不是老虎，而是一块大石头。",
      exampleVi: "Thứ bị bắn trúng lại không phải hổ, mà là một tảng đá lớn."
    },
    {
      id: 33,
      han: "连续",
      py: "liánxù",
      pos: "đg.",
      meaning: "liên tục",
      example: "他连续进了3个球，太厉害了！",
      exampleVi: "Anh ấy liên tục ghi 3 bàn, quá giỏi!"
    },
    {
      id: 34,
      han: "杆",
      py: "gǎn",
      pos: "dt.",
      meaning: "cán, cần",
      example: "有的箭杆断了。",
      exampleVi: "Có cán mũi tên bị gãy."
    },
    {
      id: 35,
      han: "金属",
      py: "jīnshǔ",
      pos: "dt.",
      meaning: "kim loại",
      example: "这些金属中，铁是最硬的。",
      exampleVi: "Trong các kim loại này, sắt là cứng nhất."
    },
    {
      id: 36,
      han: "硬",
      py: "yìng",
      pos: "tt.",
      meaning: "cứng",
      example: "即使像金属和石头那样硬的东西也会被打动。",
      exampleVi: "Kể cả những thứ cứng như kim loại và đá cũng sẽ bị lay động."
    },
    {
      id: 37,
      han: "哎",
      py: "āi",
      pos: "thán từ",
      meaning: "biểu thị ngạc nhiên/không hài lòng",
      example: "哎，怎么会这样？",
      exampleVi: "Ơ, sao lại thế này?"
    },
    {
      id: 38,
      han: "唉",
      py: "ài",
      pos: "thán từ",
      meaning: "biểu thị buồn bã, tiếc nuối",
      example: "唉，大概是我不够用心了吧！",
      exampleVi: "Haiz, chắc là tôi chưa đủ để tâm rồi!"
    },
    {
      id: 39,
      han: "汉字",
      py: "Hànzì",
      pos: "dt.",
      meaning: "chữ Hán",
      example: "这个汉字怎么读？",
      exampleVi: "Chữ Hán này đọc thế nào?",
      group: "extended"
    },
    {
      id: 40,
      han: "拼音",
      py: "pīnyīn",
      pos: "dt.",
      meaning: "phiên âm pinyin",
      example: "学汉语先要学好拼音。",
      exampleVi: "Học tiếng Trung trước tiên phải học tốt phiên âm.",
      group: "extended"
    },
    {
      id: 41,
      han: "声调",
      py: "shēngdiào",
      pos: "dt.",
      meaning: "thanh điệu",
      example: "汉语有四个声调。",
      exampleVi: "Tiếng Trung có bốn thanh điệu.",
      group: "extended"
    },
    {
      id: 42,
      han: "笔画",
      py: "bǐhuà",
      pos: "dt.",
      meaning: "nét chữ",
      example: "这个字的笔画很多。",
      exampleVi: "Chữ này có rất nhiều nét.",
      group: "extended"
    },
    {
      id: 43,
      han: "偏旁",
      py: "piānpáng",
      pos: "dt.",
      meaning: "bộ thủ",
      example: "很多汉字都有相同的偏旁。",
      exampleVi: "Rất nhiều chữ Hán có cùng bộ thủ.",
      group: "extended"
    },
    {
      id: 44,
      han: "词汇",
      py: "cíhuì",
      pos: "dt.",
      meaning: "từ vựng",
      example: "他的词汇量很大。",
      exampleVi: "Vốn từ vựng của anh ấy rất lớn.",
      group: "extended"
    },
    {
      id: 45,
      han: "语法",
      py: "yǔfǎ",
      pos: "dt.",
      meaning: "ngữ pháp",
      example: "汉语语法和越南语不太一样。",
      exampleVi: "Ngữ pháp tiếng Trung và tiếng Việt không giống nhau lắm.",
      group: "extended"
    },
    {
      id: 46,
      han: "句子",
      py: "jùzi",
      pos: "dt.",
      meaning: "câu",
      example: "请用这个词造一个句子。",
      exampleVi: "Hãy dùng từ này đặt một câu.",
      group: "extended"
    },
    {
      id: 47,
      han: "标点",
      py: "biāodiǎn",
      pos: "dt.",
      meaning: "dấu câu",
      example: "写文章要注意标点符号的使用。",
      exampleVi: "Viết văn phải chú ý cách dùng dấu câu.",
      group: "extended"
    },
    {
      id: 48,
      han: "方言",
      py: "fāngyán",
      pos: "dt.",
      meaning: "phương ngữ, tiếng địa phương",
      example: "中国有很多不同的方言。",
      exampleVi: "Trung Quốc có rất nhiều phương ngữ khác nhau.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 成语故事两则",
    paragraphs: [
      {
        zh: "很久以前，有一个很有智慧的国王。一天，他让士兵们去找一头大象和一些出生时眼睛就瞎了的人回来。士兵们分别去不同的地方寻找，把找到的大象和盲人带到他面前。",
        vi: "(Truyện 1 · 盲人摸象 – Người mù sờ voi) Rất lâu về trước, có một vị vua rất thông thái. Một hôm, ông sai binh lính đi tìm một con voi và mấy người mù bẩm sinh mang về. Binh lính chia nhau đến những nơi khác nhau tìm kiếm, rồi đưa con voi và những người mù tìm được đến trước mặt vua.",
        questions: ["国王让士兵们去找什么？"]
      },
      {
        zh: "国王叫盲人们去摸一摸大象，问他们：“你们觉得大象是什么样子的呢？”摸到牙齿的盲人说：“我觉得像一个角。”“胡说！”摸到尾巴的盲人说，“它像一条绳子。”摸到大象身子的盲人说：“我觉得像一面又高又平的墙。”“不，你们都错了，应该是像一把扇子。”这个盲人摸到了大象的耳朵。",
        vi: "Nhà vua bảo những người mù sờ thử con voi rồi hỏi họ: “Các ngươi thấy con voi trông như thế nào?” Người mù sờ phải ngà voi nói: “Tôi thấy nó giống một cái sừng.” “Nói bậy!” người mù sờ phải đuôi nói, “Nó giống một sợi dây thừng.” Người mù sờ phải thân voi nói: “Tôi thấy nó giống một bức tường vừa cao vừa phẳng.” “Không, các người đều sai cả, phải giống một cái quạt mới đúng.” Người mù này sờ phải tai voi.",
        questions: ["盲人们分别摸到了大象的哪个部位？他们觉得大象像什么？"]
      },
      {
        zh: "国王笑了起来：“你们每个人都只摸到了一点，就认为自己了解全部了吗？只有片面的认识是不能下结论的。”",
        vi: "Nhà vua bật cười: “Mỗi người các ngươi chỉ sờ được một chút mà đã cho rằng mình hiểu toàn bộ rồi sao? Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận được.”",
        questions: ["“盲人摸象”这个成语告诉我们什么道理？"]
      },
      {
        zh: "西汉时期有一位著名的将军叫李广，他善于骑马射箭，作战勇敢，被称为“飞将军”。一天傍晚，他正带着士兵们在山中打猎，忽然发现远处蹲着一只大老虎。士兵们都紧张地围了上来，想要保护他。李广摇摇头，表示不要紧。只见他从箭袋里取出一支箭，摆好姿势，全神贯注，用尽全力向老虎射去。",
        vi: "(Truyện 2 · 精诚所至，金石为开 – Lòng thành đến đâu, vàng đá cũng mở) Thời Tây Hán có một vị tướng nổi tiếng tên là Lý Quảng, ông giỏi cưỡi ngựa bắn cung, chiến đấu dũng cảm, được gọi là “Phi tướng quân”. Một buổi chiều tối, ông đang dẫn binh lính đi săn trong núi, bỗng phát hiện đằng xa có một con hổ lớn đang ngồi chồm hổm. Binh lính đều căng thẳng vây lại, muốn bảo vệ ông. Lý Quảng lắc đầu, ra hiệu không sao. Chỉ thấy ông rút từ ống tên ra một mũi tên, đứng vào tư thế, dồn hết tinh thần, dùng hết sức bắn về phía con hổ.",
        questions: ["李广射箭的时候是什么样的？", "请用重点词语复述故事：将军、善于、打猎、蹲、不要紧、全神贯注"]
      },
      {
        zh: "过了一会儿，老虎没什么反应，士兵们小心地走上前去，想确定它是不是死了。没想到仔细一看，被射中的竟不是老虎，而是一块形状很像老虎的大石头，而且一整支箭几乎全都射到石头中去了！大家都很吃惊，连李广自己都不相信他能有这么大的力气，于是他想再试试。可是，这次他连续换了几根箭，都没能再射进去，有的箭头碎了，有的箭杆断了，而大石头一点儿变化也没有。“哎，怎么会这样？”士兵奇怪地你看我，我看你。“唉！大概是我不够用心了吧！”李广也无奈地说。",
        vi: "Một lúc sau, con hổ không có phản ứng gì, binh lính cẩn thận tiến lên, muốn xác định xem nó đã chết chưa. Không ngờ nhìn kỹ thì thứ bị bắn trúng lại không phải hổ, mà là một tảng đá lớn có hình dáng rất giống con hổ, hơn nữa cả mũi tên gần như cắm ngập vào trong đá! Mọi người đều rất kinh ngạc, ngay cả Lý Quảng cũng không tin mình có sức mạnh lớn đến vậy, bèn muốn thử lại. Nhưng lần này ông liên tục thay mấy mũi tên mà đều không bắn vào được nữa, có mũi đầu tên vỡ vụn, có mũi cán tên gãy, còn tảng đá thì chẳng thay đổi chút nào. “Ơ, sao lại thế này?” Binh lính lấy làm lạ, nhìn nhau. “Haizz! Có lẽ là ta chưa đủ chuyên tâm rồi!” Lý Quảng bất lực nói.",
        questions: ["他以为自己射的是什么？实际上呢？", "他再试的结果是怎样的？为什么会这样？"]
      },
      {
        zh: "人们对这件事情感到很不解，就去问当时最有影响力的学者扬雄。扬雄回答说：“如果诚心实意，即使像金属和石头那样硬的东西也会被打动。”“精诚所至，金石为开”这一成语也便由此流传下来。",
        vi: "Mọi người thấy chuyện này rất khó hiểu, bèn đi hỏi học giả có ảnh hưởng nhất lúc bấy giờ là Dương Hùng. Dương Hùng trả lời: “Nếu thành tâm thật ý, thì dù là thứ cứng như kim loại và đá cũng sẽ bị lay động.” Thành ngữ “精诚所至，金石为开” cũng từ đó mà lưu truyền lại.",
        questions: ["“精诚所至，金石为开”是什么意思？"]
      }
    ],
    notes: [
      "盲人摸象: người mù sờ voi – chỉ cái nhìn phiến diện. 精诚所至，金石为开: lòng thành đến đâu, vàng đá cũng phải mở.",
      "李广 (Lǐ Guǎng): Lý Quảng, danh tướng thời 西汉 (Tây Hán). 扬雄 (Yáng Xióng): Dương Hùng.",
      "有的放矢: nhắm đích mà bắn tên – làm việc có mục tiêu rõ ràng (的 = đích, 矢 = mũi tên)."
    ]
  },
  grammar: [
    {
      word: "忽然 / 突然",
      title: "Phân biệt 忽然 / 突然",
      usages: [
        {
          label: "忽然",
          explain: "Chỉ dùng làm phó từ, đứng trước động từ hoặc tiểu cú.",
          examples: ["他忽然站了起来。"]
        },
        {
          label: "突然",
          explain: "Có thể làm phó từ (giống 忽然), đồng thời còn làm tính từ - làm vị ngữ, bổ ngữ hoặc định ngữ.",
          examples: ["这件事太突然了！（vị ngữ）", "这突然的变化（định ngữ）"]
        }
      ],
      note: "Khi đứng trước động từ diễn tả một hành động xảy ra bất ngờ, hai từ có thể thay thế cho nhau. Nhưng chỉ 突然 mới có thể làm tính từ (突然的、太突然了), 忽然 không có chức năng này."
    },
    {
      word: "分别",
      title: "Đa nghĩa: động từ/phó từ/danh từ",
      usages: [
        {
          label: "Chia tay, ly biệt",
          explain: "Động từ",
          examples: ["分别是暂时的，我们以后一定会再见。"]
        },
        {
          label: "Lần lượt, mỗi người riêng",
          explain: "Phó từ",
          examples: ["士兵们分别去不同的地方寻找。"]
        },
        {
          label: "Kể ra từng cái một",
          explain: "Phó từ",
          examples: ["一张桌子上放着三瓶饮料，分别是茶、可乐和咖啡。"]
        },
        {
          label: "Sự khác biệt",
          explain: "Danh từ",
          examples: ["我不知道这两种做法有什么分别。"]
        }
      ],
      note: "分别 là một từ đa nghĩa điển hình trong HSK5 - cần dựa vào ngữ cảnh để xác định đang dùng nghĩa nào: có đối tượng chia xa (động từ); có nhiều chủ thể hành động riêng rẽ (phó từ - lần lượt); liệt kê nhiều đối tượng ứng với nhiều thứ (phó từ - từng cái); hoặc nói về điểm khác nhau (danh từ)."
    },
    {
      word: "连续 / 继续",
      title: "Phân biệt 连续 / 继续",
      usages: [
        {
          label: "连续",
          explain: "Lặp lại/tiếp diễn liên tục không ngắt quãng, thường mô tả hiện tượng lặp lại nhiều lần hoặc hiện tượng tự nhiên.",
          examples: ["他连续迟到三次。", "雨水连续下了一周。"]
        },
        {
          label: "继续",
          explain: "Tiếp tục một động tác/trạng thái sau khi đã bị gián đoạn, khởi động lại.",
          examples: ["休息后继续跑步。"]
        }
      ],
      note: "连续 nhấn mạnh tính liên tục, không đứt quãng của một chuỗi sự kiện lặp lại; 继续 nhấn mạnh việc tiếp tục lại sau khi đã tạm dừng/gián đoạn."
    }
  ],
  wordChoice: [
    {
      sentence: "我的好朋友因为长得特别漂亮，人也聪明，所以被___为校花。",
      options: ["称", "蹲", "摇", "摆", "根", "碎", "便"],
      answer: "称"
    },
    {
      sentence: "老板看了一下合同，然后___头表示不同意。",
      options: ["称", "蹲", "摇", "摆", "根", "碎", "便"],
      answer: "摇"
    },
    {
      sentence: "那个孩子看他的妈妈不理他，___不再哭了。",
      options: ["称", "蹲", "摇", "摆", "根", "碎", "便"],
      answer: "便"
    },
    {
      sentence: "刚买回来的鲜花___在桌子上，漂亮极了。",
      options: ["称", "蹲", "摇", "摆", "根", "碎", "便"],
      answer: "摆"
    },
    {
      sentence: "听到这个消息，他的手抖了一下，玻璃杯掉到地上摔___了。",
      options: ["称", "蹲", "摇", "摆", "根", "碎", "便"],
      answer: "碎"
    },
    {
      sentence: "狮子悄悄地___在那匹斑马后面的草丛里，等待机会。",
      options: ["称", "蹲", "摇", "摆", "根", "碎", "便"],
      answer: "蹲"
    },
    {
      sentence: "消息来得太___了，我完全没有准备。",
      options: ["忽然", "突然"],
      answer: "突然"
    },
    {
      sentence: "不能这样___地看问题，而要多方面地考虑。",
      options: ["寻找", "善于", "片面", "确定"],
      answer: "片面"
    },
    {
      sentence: "对我们提出的意见，老板还没有做出___。",
      options: ["反应", "反映"],
      answer: "反应"
    },
    {
      sentence: "我真的需要休息了，我已经___工作20个小时了。",
      options: ["连续", "继续"],
      answer: "连续"
    },
    {
      sentence: "每天我一回家，可爱的小狗就___着尾巴冲我跑过来。",
      options: ["摇", "摸"],
      answer: "摇"
    },
    {
      sentence: "别难过了，虽然成绩不理想，但你已经___了。",
      options: ["不要紧", "尽力"],
      answer: "尽力"
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
          distractors: [7, 11, 44]
        },
        {
          vocabId: 5,
          distractors: [2, 13, 11]
        },
        {
          vocabId: 3,
          distractors: [7, 8, 21]
        },
        {
          vocabId: 2,
          distractors: [29, 5, 3]
        },
        {
          vocabId: 29,
          distractors: [2, 14, 31]
        },
        {
          vocabId: 31,
          distractors: [24, 25, 20]
        },
        {
          vocabId: 33,
          distractors: [18, 19, 27]
        },
        {
          vocabId: 35,
          distractors: [36, 32, 34]
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
      vocabIds: [7, 8, 11, 21, 24, 26, 27, 28]
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
          tokens: ["国王", "让士兵们", "去找", "一头大象", "。"],
          answer: "国王让士兵们去找一头大象。",
          vi: "Nhà vua sai binh sĩ đi tìm một con voi."
        },
        {
          tokens: ["摸到尾巴的盲人", "说", "它像", "一条绳子", "。"],
          answer: "摸到尾巴的盲人说它像一条绳子。",
          vi: "Người mù sờ vào đuôi voi nói nó giống như một sợi dây thừng."
        },
        {
          tokens: ["李广", "摇摇头", "表示", "不要紧", "。"],
          answer: "李广摇摇头表示不要紧。",
          vi: "Lý Quảng lắc đầu biểu thị không sao."
        },
        {
          tokens: ["被射中的", "竟不是", "老虎", "而是", "一块大石头", "。"],
          answer: "被射中的竟不是老虎而是一块大石头。",
          vi: "Thứ bị bắn trúng lại không phải hổ mà là một tảng đá lớn."
        },
        {
          tokens: ["精诚所至", "金石为开", "。"],
          answer: "精诚所至金石为开。",
          vi: "Chỉ cần thành tâm, kim loại và đá cũng sẽ bị lay động."
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
          title: "课文 · 《盲人摸象》",
          text: "很久以前，有一个很有{{d1}}的国王。一天，他让士兵们去找一头大象和一些出生时眼睛就{{d2}}了的人回来。士兵们{{d3}}去不同的地方{{d4}}，把找到的大象和{{d10}}带到他面前。国王叫盲人们去{{d5}}一摸大象，问他们：“你们觉得大象是什么样子的呢？”摸到牙齿的盲人说：“我觉得像一个角。”“{{d6}}！”摸到尾巴的盲人说，“它像一条绳子。”摸到大象身子的盲人说：“我觉得像一面又高又{{d7}}的墙。”“不，你们都错了，应该是像一把扇子。”这个盲人摸到了大象的耳朵。国王笑了起来：“你们每个人都只摸到了一点，就认为自己了解全部了吗？只有{{d8}}的认识是不能下{{d9}}的。”"
        }
      ],
      answers: {
        d1: "智慧",
        d2: "瞎",
        d3: "分别",
        d4: "寻找",
        d5: "摸",
        d6: "胡说",
        d7: "平",
        d8: "片面",
        d9: "结论",
        d10: "盲人"
      },
      bank: ["智慧", "瞎", "分别", "寻找", "摸", "胡说", "平", "片面", "结论", "盲人", "士兵", "成语", "善于"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể chuyện \"Người mù sờ voi\".",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 (đoạn 1) · Lý Quảng bắn hổ",
          text: "西汉时期有一位著名的{{t1}}叫李广，他{{t2}}骑马射箭，作战勇敢，被称为“飞将军”。一天傍晚，他正带着士兵们在山中{{t3}}，{{t4}}发现远处蹲着一只大老虎。士兵们都紧张地围了上来，想要保护他。李广摇摇头，表示不要紧。只见他从箭袋里取出一支箭，摆好{{t5}}，{{t6}}，用尽全力向老虎射去。"
        },
        {
          title: "课文 (đoạn 2) · Sự thật bất ngờ",
          text: "过了一会儿，老虎没什么{{t7}}，士兵们小心地走上前去，想{{t8}}它是不是死了。没想到仔细一看，被射中的竟不是老虎，而是一块形状很像老虎的大石头，而且一整支箭几乎全都射到石头中去了！大家都很吃惊，连李广自己都不相信他能有这么大的力气，于是他想再试试。可是，这次他{{t9}}换了几根箭，都没能再射进去，有的箭头{{t10}}了，有的箭杆断了，而大石头一点儿变化也没有。“哎，怎么会这样？”士兵奇怪地你看我，我看你。“唉！大概是我不够用心了吧！”李广也无奈地说。"
        }
      ],
      answers: {
        t1: "将军",
        t2: "善于",
        t3: "打猎",
        t4: "忽然",
        t5: "姿势",
        t6: "全神贯注",
        t7: "反应",
        t8: "确定",
        t9: "连续",
        t10: "碎"
      },
      bank: ["将军", "善于", "打猎", "忽然", "姿势", "全神贯注", "反应", "确定", "连续", "碎", "根", "硬", "金属"]
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
          zh: "只有片面的认识是不能下结论的。",
          vi: "Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận.",
          keywords: ["phiến diện", "nhận thức", "kết luận"]
        },
        {
          zh: "李广摇摇头，表示不要紧。",
          vi: "Lý Quảng lắc đầu, biểu thị không sao.",
          keywords: ["lắc đầu", "biểu thị", "không sao"]
        },
        {
          zh: "被射中的竟不是老虎，而是一块大石头。",
          vi: "Thứ bị bắn trúng lại không phải hổ, mà là một tảng đá lớn.",
          keywords: ["bắn trúng", "không phải", "tảng đá"]
        },
        {
          zh: "精诚所至，金石为开。",
          vi: "Chỉ cần thành tâm, kể cả kim loại và đá cũng sẽ bị lay động.",
          keywords: ["thành tâm", "kim loại", "lay động"]
        },
        {
          zh: "士兵们分别去不同的地方寻找大象和盲人。",
          vi: "Các binh sĩ lần lượt đi các nơi khác nhau để tìm con voi và người mù.",
          keywords: ["binh sĩ", "lần lượt", "tìm", "người mù"]
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
          vi: "Anh ấy giỏi cưỡi ngựa bắn cung.",
          answers: ["他善于骑马射箭。"]
        },
        {
          vi: "Đột nhiên phát hiện phía xa có một con hổ lớn.",
          answers: ["忽然发现远处有一只大老虎。", "突然发现远处有一只大老虎。"]
        },
        {
          vi: "Mọi người đều rất kinh ngạc.",
          answers: ["大家都很吃惊。", "大家都非常吃惊。"]
        },
        {
          vi: "Anh ấy toàn tâm toàn ý, dồn hết sức bắn về phía con hổ.",
          answers: ["他全神贯注，用尽全力向老虎射去。"]
        },
        {
          vi: "Đây là một câu thành ngữ lưu truyền đến nay.",
          answers: ["这是一个流传至今的成语。", "这是一句流传至今的成语。"]
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
          q: "国王是一个很有智慧的人。",
          a: true
        },
        {
          q: "摸到大象尾巴的盲人说大象像一面墙。",
          a: false
        },
        {
          q: "国王认为片面的认识不能下结论。",
          a: true
        },
        {
          q: "李广是一位善于骑马射箭的将军。",
          a: true
        },
        {
          q: "李广第一箭射中的其实是一只老虎。",
          a: false
        },
        {
          q: "李广后来又用箭射了很多次石头，都成功射进去了。",
          a: false
        },
        {
          q: "“精诚所至，金石为开”的意思是只要诚心实意，再硬的东西也能被打动。",
          a: true
        },
        {
          q: "李广被称为“飞将军”。",
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
      items: ["只有片面的认识是不能下结论的。", "李广摇摇头，表示不要紧。", "他全神贯注，用尽全力向老虎射去。", "被射中的竟不是老虎，而是一块大石头。", "精诚所至，金石为开。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“有的放矢”为题写一段话。 (Hãy viết một đoạn văn với chủ đề \"Bắn tên có đích - làm việc có mục tiêu\".)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 7 (忽然/突然, 分别, 连续/继续).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["忽然", "突然", "分别", "连续", "继续"],
      minGrammar: 2,
      sample: "“有的放矢”这个成语告诉我们，做任何事情都要有明确的目标，然后集中精力、全神贯注地去努力，这样才能真正做出成绩。就像李广将军射箭一样，如果没有目标，即使力气再大、箭术再好，也只是瞎射一通，不会有真正的结果。我们平时学习汉语也是一样，不能片面地只背单词，而应该确定好每个阶段的目标，比如这个月要通过HSK五级，下个月要能连续用汉语进行日常对话，然后一步一步、有针对性地努力。忽然想起老师说过的话：只要精诚所至，金石为开，只要我们坚持有目标地努力，就一定能取得进步。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 忽然 / 突然",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (忽然 so với 突然).",
      kind: "grammar-fill",
      grammarWord: "忽然 / 突然",
      options: ["忽然", "突然"],
      items: [
        {
          q: "我们正在上课，他___站了起来。",
          answers: ["忽然", "突然"]
        },
        {
          q: "一天傍晚，他正带着士兵们在山中打猎，___发现远处蹲着一只大老虎。",
          answers: ["忽然", "突然"]
        },
        {
          q: "这件事太___了！",
          answers: ["突然"]
        },
        {
          q: "这件事发生得太___了！",
          answers: ["突然"]
        },
        {
          q: "这___的一声喊叫吓了我一跳。",
          answers: ["突然"]
        },
        {
          q: "他抱着小狗走到门口，___想起妈妈不允许他在家里养小动物。",
          answers: ["忽然", "突然"]
        },
        {
          q: "消息来得太___了，我完全没有准备。",
          answers: ["突然"]
        },
        {
          q: "这是一个___的变化，我们谁也没想到。",
          answers: ["突然"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 分别",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (分别 - đa nghĩa: động từ/phó từ/danh từ).",
      kind: "grammar-fill",
      grammarWord: "分别",
      items: [
        {
          q: "士兵们___去不同的地方寻找，把找到的大象和盲人带到他面前。",
          answers: ["分别"]
        },
        {
          q: "从毕业到现在，我们已经___20年了，一直都没有联系。",
          answers: ["分别"]
        },
        {
          q: "我___找两个人打听了这件事，他们的说法都是一样的。",
          answers: ["分别"]
        },
        {
          q: "一张桌子上放着三瓶饮料，___是茶、可乐和咖啡。",
          answers: ["分别"]
        },
        {
          q: "我不知道这两种做法有什么___。",
          answers: ["分别"]
        },
        {
          q: "这两张照片的___是一眼就看得出来的。",
          answers: ["分别"]
        },
        {
          q: "___是暂时的，我们以后一定会再见。",
          answers: ["分别"]
        },
        {
          q: "他们去两个不同的城市做社会调查，想___了解南方和北方不同的风俗。",
          answers: ["分别"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 连续 / 继续",
      points: 5,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (连续 so với 继续).",
      kind: "grammar-fill",
      grammarWord: "连续 / 继续",
      options: ["连续", "继续"],
      items: [
        {
          q: "我真的需要休息了，我已经___工作20个小时了。",
          answers: ["连续"]
        },
        {
          q: "休息后___跑步。",
          answers: ["继续"]
        },
        {
          q: "他___迟到三次。",
          answers: ["连续"]
        },
        {
          q: "雨水___下了一周。",
          answers: ["连续"]
        },
        {
          q: "他连续换了几根箭，都没能再射进去，于是他决定停下来，明天再___。",
          answers: ["继续"]
        },
        {
          q: "这场比赛他___进了3个球，太厉害了！",
          answers: ["连续"]
        },
        {
          q: "老师说完，就___讲下一个语法点。",
          answers: ["继续"]
        },
        {
          q: "这个项目已经___进行了三年，一直没有中断过。",
          answers: ["连续"]
        }
      ]
    }
  ]
};
