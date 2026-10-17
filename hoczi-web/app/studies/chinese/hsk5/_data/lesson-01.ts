import type { Lesson } from "../../_lesson/types";

// HSK标准教程5 · 第1课 爱的细节 (Details of Love)
// Nguồn: slide bài 1 và bộ bài tập "HSK5 tiêu chuẩn bài 1" trong hsk5/docs.
export const lesson01: Lesson = {
  level: "hsk5",
  no: 1,
  slug: "bai-1",
  zh: "爱的细节",
  pinyin: "Ài de xìjié",
  vi: "Chi tiết của tình yêu",
  en: "Details of Love",
  topic: "夫妻关系 · Quan hệ vợ chồng",
  durationMinutes: 60,
  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm cấp 5: 离婚、自杀、吵闹、轮、不耐烦、递、叙述、催、等待、半夜…",
    "Nắm cách kết hợp của các từ: 抱怨、爱护、细节、电台、对比、喊、伸、吵、项.",
    "Hiểu và dùng được 如何、靠、居然; phân biệt 如何 và 怎么.",
    "Đọc hiểu bài khóa về ba cặp vợ chồng ân ái, kể lại câu chuyện bằng từ vựng đã học.",
    "Thảo luận về mối quan hệ vợ chồng lý tưởng và viết đoạn văn 「理想的夫妻关系」.",
    "Nắm 10 từ mở rộng chủ đề 人体 (bộ phận cơ thể)."
  ],
  warmUp: [
    {
      zh: "你认为朋友、亲戚、同学、夫妻、同事、亲子关系的亲密程度应该是什么顺序？",
      vi: "Theo bạn, mức độ thân thiết của các mối quan hệ: bạn bè, họ hàng, bạn học, vợ chồng, đồng nghiệp, cha mẹ – con cái nên xếp theo thứ tự nào?"
    },
    {
      zh: "你认为什么样的夫妻才是“恩爱”的夫妻？",
      vi: "Theo bạn, vợ chồng như thế nào mới là vợ chồng “ân ái”?"
    }
  ],
  vocab: [
    {
      id: 1,
      han: "恩爱",
      py: "ēn'ài",
      pos: "tt.",
      meaning: "mặn nồng, yêu thương (vợ chồng)",
      example: "他们已经结婚10年了，现在依旧很恩爱。",
      exampleVi: "Họ đã kết hôn 10 năm rồi, đến giờ vẫn còn rất mặn nồng."
    },
    {
      id: 2,
      han: "瘫痪",
      py: "tānhuàn",
      pos: "đg.",
      meaning: "bị liệt, tê liệt",
      example: "小明的母亲前段时间生了一场大病，导致身体瘫痪。",
      exampleVi: "Mẹ của Tiểu Minh trước đây bị bệnh nặng, dẫn đến toàn thân bị liệt."
    },
    {
      id: 3,
      han: "离婚",
      py: "líhūn",
      pos: "đg.",
      meaning: "ly hôn",
      example: "感情破裂的夫妻最终离婚了。",
      exampleVi: "Cặp vợ chồng tình cảm rạn nứt cuối cùng đã ly hôn."
    },
    {
      id: 4,
      han: "抱怨",
      py: "bàoyuàn",
      pos: "đg.",
      meaning: "than phiền, oán trách",
      example: "她对什么都觉得不满意，经常抱怨。",
      exampleVi: "Cô ấy cái gì cũng thấy không hài lòng, thường xuyên than phiền."
    },
    {
      id: 5,
      han: "爱护",
      py: "àihù",
      pos: "đg.",
      meaning: "yêu quý, chăm sóc, bảo vệ",
      example: "我们要爱护美丽的地球。",
      exampleVi: "Chúng ta phải bảo vệ trái đất xinh đẹp."
    },
    {
      id: 6,
      han: "如何",
      py: "rúhé",
      pos: "đại từ",
      meaning: "thế nào, như thế nào",
      example: "这件事该如何解决？",
      exampleVi: "Việc này nên giải quyết thế nào đây?"
    },
    {
      id: 7,
      han: "自杀",
      py: "zìshā",
      pos: "đg.",
      meaning: "tự tử",
      example: "他觉得生活没有希望，还好自杀时被邻居发现，被救了下来。",
      exampleVi: "Anh ta cảm thấy cuộc sống vô vọng, may mà lúc tự tử bị hàng xóm phát hiện nên được cứu."
    },
    {
      id: 8,
      han: "婚姻",
      py: "hūnyīn",
      pos: "dt.",
      meaning: "hôn nhân",
      example: "你理想中的婚姻生活是什么样的？",
      exampleVi: "Cuộc sống hôn nhân lý tưởng trong lòng bạn là như thế nào?"
    },
    {
      id: 9,
      han: "吵架",
      py: "chǎojià",
      pos: "đg.",
      meaning: "cãi nhau",
      example: "夫妻之间可不可能不吵架？",
      exampleVi: "Vợ chồng với nhau có thể nào không cãi nhau không?"
    },
    {
      id: 10,
      han: "相敬如宾",
      py: "xiāngjìng rúbīn",
      pos: "th.ngữ",
      meaning: "(vợ chồng) kính trọng nhau như khách",
      example: "他们俩从结婚到现在，一直相敬如宾。",
      exampleVi: "Hai người họ từ lúc kết hôn đến giờ luôn kính trọng nhau như khách."
    },
    {
      id: 11,
      han: "暗暗",
      py: "àn'àn",
      pos: "p.",
      meaning: "thầm, ngấm ngầm",
      example: "看到这个小伙子对女儿这么好，父亲暗暗点头。",
      exampleVi: "Thấy chàng trai này đối xử tốt với con gái mình như vậy, người cha thầm gật đầu."
    },
    {
      id: 12,
      han: "轮",
      py: "lún",
      pos: "đg.",
      meaning: "luân phiên, đến lượt",
      example: "轮到你上台表演了，快点儿！",
      exampleVi: "Đến lượt bạn lên biểu diễn rồi, nhanh lên!"
    },
    {
      id: 13,
      han: "不耐烦",
      py: "bú nàifán",
      pos: "tt.",
      meaning: "mất kiên nhẫn, sốt ruột",
      example: "我已经等了他一个小时了，越等越不耐烦。",
      exampleVi: "Tôi đã đợi anh ấy một tiếng rồi, càng đợi càng sốt ruột."
    },
    {
      id: 14,
      han: "靠",
      py: "kào",
      pos: "đg.",
      meaning: "dựa, tựa; nhờ vào; gần, kề",
      example: "小猫靠着沙发睡觉，看起来很舒服。",
      exampleVi: "Con mèo nhỏ tựa vào ghế sofa ngủ, trông rất thoải mái."
    },
    {
      id: 15,
      han: "催",
      py: "cuī",
      pos: "đg.",
      meaning: "giục, thúc giục",
      example: "老板催员工们抓紧时间完成这个项目。",
      exampleVi: "Sếp thúc giục nhân viên tranh thủ thời gian hoàn thành dự án này."
    },
    {
      id: 16,
      han: "喊",
      py: "hǎn",
      pos: "đg.",
      meaning: "hét, gọi to",
      example: "她朝着门口大喊：“开门！”",
      exampleVi: "Cô ấy hướng về phía cửa hét lớn: \"Mở cửa!\""
    },
    {
      id: 17,
      han: "叮",
      py: "dīng",
      pos: "đg.",
      meaning: "(muỗi) đốt, chích",
      example: "小宝宝的手被蚊子叮了一个大包。",
      exampleVi: "Tay của em bé bị muỗi đốt sưng một cục to."
    },
    {
      id: 18,
      han: "伸",
      py: "shēn",
      pos: "đg.",
      meaning: "duỗi, vươn ra",
      example: "每天早上起床她都要伸个懒腰。",
      exampleVi: "Mỗi sáng thức dậy cô ấy đều phải vươn vai."
    },
    {
      id: 19,
      han: "吵",
      py: "chǎo",
      pos: "đg./tt.",
      meaning: "ồn ào; cãi nhau",
      example: "外面在施工，声音特别大，吵得让人睡不着觉。",
      exampleVi: "Bên ngoài đang thi công, tiếng ồn rất lớn, ồn đến mức người ta không ngủ được."
    },
    {
      id: 20,
      han: "递",
      py: "dì",
      pos: "đg.",
      meaning: "đưa, chuyển",
      example: "请把那本书递给我，谢谢。",
      exampleVi: "Làm ơn đưa cuốn sách đó cho tôi, cảm ơn."
    },
    {
      id: 21,
      han: "猜",
      py: "cāi",
      pos: "đg.",
      meaning: "đoán",
      example: "你猜猜看这是什么礼物。",
      exampleVi: "Bạn đoán xem đây là món quà gì."
    },
    {
      id: 22,
      han: "只好",
      py: "zhǐhǎo",
      pos: "p.",
      meaning: "đành phải, chỉ còn cách",
      example: "外面下大雨，我们只好留在家里。",
      exampleVi: "Bên ngoài mưa to, chúng tôi đành phải ở nhà."
    },
    {
      id: 23,
      han: "来得及",
      py: "láidejí",
      pos: "đg.",
      meaning: "còn kịp",
      example: "现在出发还来得及吗？",
      exampleVi: "Bây giờ xuất phát còn kịp không?"
    },
    {
      id: 24,
      han: "南方",
      py: "nánfāng",
      pos: "dt.",
      meaning: "miền Nam",
      example: "南方的冬天不像北方那么冷。",
      exampleVi: "Mùa đông ở miền Nam không lạnh như miền Bắc."
    },
    {
      id: 25,
      han: "复习",
      py: "fùxí",
      pos: "đg.",
      meaning: "ôn tập",
      example: "考试前一定要认真复习。",
      exampleVi: "Trước khi thi nhất định phải ôn tập nghiêm túc."
    },
    {
      id: 26,
      han: "否则",
      py: "fǒuzé",
      pos: "lt.",
      meaning: "nếu không thì",
      example: "你得快点儿，否则就来不及了。",
      exampleVi: "Bạn phải nhanh lên, nếu không thì sẽ không kịp."
    },
    {
      id: 27,
      han: "游戏",
      py: "yóuxì",
      pos: "dt.",
      meaning: "trò chơi",
      example: "他半夜不睡觉，还在打游戏。",
      exampleVi: "Anh ta nửa đêm không ngủ, vẫn còn chơi game."
    },
    {
      id: 28,
      han: "叙述",
      py: "xùshù",
      pos: "đg.",
      meaning: "kể lại, trần thuật",
      example: "她对这件事情的叙述非常完整。",
      exampleVi: "Cách cô ấy kể lại chuyện này rất đầy đủ."
    },
    {
      id: 29,
      han: "老婆",
      py: "lǎopo",
      pos: "dt.",
      meaning: "vợ",
      example: "老婆的另一个称呼是妻子。",
      exampleVi: "Một cách gọi khác của \"老婆\" là \"妻子\" (thê tử)."
    },
    {
      id: 30,
      han: "半夜",
      py: "bànyè",
      pos: "dt.",
      meaning: "nửa đêm",
      example: "昨晚半夜我被蚊子叮醒了。",
      exampleVi: "Đêm qua lúc nửa đêm tôi bị muỗi đốt tỉnh dậy."
    },
    {
      id: 31,
      han: "蚊子",
      py: "wénzi",
      pos: "dt.",
      meaning: "con muỗi",
      example: "夏天要注意蚊子的叮咬。",
      exampleVi: "Mùa hè phải chú ý muỗi đốt."
    },
    {
      id: 32,
      han: "居然",
      py: "jūrán",
      pos: "p.",
      meaning: "thế mà, ai ngờ",
      example: "你居然还在学校，我以为你早就离开了。",
      exampleVi: "Thế mà bạn vẫn còn ở trường, tôi cứ tưởng bạn đã rời đi từ lâu rồi."
    },
    {
      id: 33,
      han: "等待",
      py: "děngdài",
      pos: "đg.",
      meaning: "chờ đợi",
      example: "他在车站等待最后一班公交车。",
      exampleVi: "Anh ấy ở bến xe chờ chuyến xe buýt cuối cùng."
    },
    {
      id: 34,
      han: "项",
      py: "xiàng",
      pos: "lt.",
      meaning: "khoản, hạng mục",
      example: "这是一项非常重要的任务。",
      exampleVi: "Đây là một nhiệm vụ vô cùng quan trọng."
    },
    {
      id: 35,
      han: "患难与共",
      py: "huànnàn yǔgòng",
      pos: "th.ngữ",
      meaning: "cùng chia sẻ hoạn nạn",
      example: "他们夫妻俩患难与共，一起度过了最困难的时期。",
      exampleVi: "Hai vợ chồng họ cùng nhau chia sẻ hoạn nạn, cùng vượt qua giai đoạn khó khăn nhất."
    },
    {
      id: 36,
      han: "歪歪扭扭",
      py: "wāiwāiniǔniǔ",
      pos: "tt.",
      meaning: "ngoằn ngoèo, xiêu vẹo",
      example: "他写的字歪歪扭扭的，大家都看不太懂。",
      exampleVi: "Chữ anh ấy viết ngoằn ngoèo, mọi người đều không đọc rõ được."
    },
    {
      id: 37,
      han: "女士",
      py: "nǚshì",
      pos: "dt.",
      meaning: "quý bà, quý cô",
      example: "这位女士举止非常优雅。",
      exampleVi: "Vị quý bà này cử chỉ rất thanh lịch."
    },
    {
      id: 38,
      han: "评委",
      py: "píngwěi",
      pos: "dt.",
      meaning: "giám khảo",
      example: "评委们被他们的爱情故事感动了。",
      exampleVi: "Các giám khảo đã bị câu chuyện tình yêu của họ làm cảm động."
    },
    {
      id: 39,
      han: "入围",
      py: "rùwéi",
      pos: "đg.",
      meaning: "lọt vào vòng trong",
      example: "恭喜你的参赛作品入围决赛。",
      exampleVi: "Chúc mừng tác phẩm dự thi của bạn đã lọt vào chung kết."
    },
    {
      id: 40,
      han: "对比",
      py: "duìbǐ",
      pos: "đg.",
      meaning: "so sánh, đối chiếu",
      example: "不要总是拿他们的成绩进行对比。",
      exampleVi: "Đừng lúc nào cũng đem thành tích của họ ra so sánh."
    },
    {
      id: 41,
      han: "电台",
      py: "diàntái",
      pos: "dt.",
      meaning: "đài phát thanh",
      example: "电台正在播放我最喜欢的歌曲。",
      exampleVi: "Đài phát thanh đang phát bài hát tôi thích nhất."
    },
    {
      id: 42,
      han: "细节",
      py: "xìjié",
      pos: "dt.",
      meaning: "chi tiết",
      example: "做任何事情都要注重细节。",
      exampleVi: "Làm bất cứ việc gì cũng phải chú trọng chi tiết."
    },
    {
      id: 43,
      han: "脑袋",
      py: "nǎodai",
      pos: "dt.",
      meaning: "cái đầu",
      example: "小心别撞到脑袋。",
      exampleVi: "Cẩn thận đừng để va vào đầu.",
      group: "extended"
    },
    {
      id: 44,
      han: "头发",
      py: "tóufa",
      pos: "dt.",
      meaning: "tóc",
      example: "她的头发又黑又长。",
      exampleVi: "Tóc cô ấy vừa đen vừa dài.",
      group: "extended"
    },
    {
      id: 45,
      han: "眉毛",
      py: "méimao",
      pos: "dt.",
      meaning: "lông mày",
      example: "他的眉毛很浓。",
      exampleVi: "Lông mày anh ấy rất rậm.",
      group: "extended"
    },
    {
      id: 46,
      han: "脸",
      py: "liǎn",
      pos: "dt.",
      meaning: "mặt",
      example: "她的脸红了。",
      exampleVi: "Mặt cô ấy đỏ lên.",
      group: "extended"
    },
    {
      id: 47,
      han: "脖子",
      py: "bózi",
      pos: "dt.",
      meaning: "cổ",
      example: "长时间低头看手机，脖子会很不舒服。",
      exampleVi: "Cúi đầu nhìn điện thoại lâu, cổ sẽ rất khó chịu.",
      group: "extended"
    },
    {
      id: 48,
      han: "肩膀",
      py: "jiānbǎng",
      pos: "dt.",
      meaning: "vai",
      example: "男人的头靠在女人的肩膀上，睡着了。",
      exampleVi: "Đầu người đàn ông tựa vào vai người phụ nữ, ngủ thiếp đi.",
      group: "extended"
    },
    {
      id: 49,
      han: "胳膊",
      py: "gēbo",
      pos: "dt.",
      meaning: "cánh tay",
      example: "他的胳膊上有一个纹身。",
      exampleVi: "Trên cánh tay anh ấy có một hình xăm.",
      group: "extended"
    },
    {
      id: 50,
      han: "腰",
      py: "yāo",
      pos: "dt.",
      meaning: "eo, lưng",
      example: "每天早上起床她都要伸个懒腰。",
      exampleVi: "Mỗi sáng thức dậy cô ấy đều vươn vai (duỗi lưng).",
      group: "extended"
    },
    {
      id: 51,
      han: "腿",
      py: "tuǐ",
      pos: "dt.",
      meaning: "chân (từ đùi trở xuống)",
      example: "她的腿已经不能动了。",
      exampleVi: "Chân của cô ấy đã không thể cử động được nữa.",
      group: "extended"
    },
    {
      id: 52,
      han: "脚",
      py: "jiǎo",
      pos: "dt.",
      meaning: "bàn chân",
      example: "他的脚很大。",
      exampleVi: "Bàn chân anh ấy rất to.",
      group: "extended"
    }
  ],
  text: {
    title: "课文 爱的细节",
    paragraphs: [
      {
        zh: "电台要选出一对最恩爱的夫妻。对比后，有三对夫妻入围。",
        vi: "Đài phát thanh muốn chọn ra một cặp vợ chồng ân ái nhất. Sau khi so sánh, có ba cặp vợ chồng lọt vào vòng trong.",
        questions: ["电台正在举行什么活动？有几对夫妻入围？"]
      },
      {
        zh: "评委叫第一对夫妻说说他俩是如何恩爱的。妻子说，几年前她全身瘫痪了，医生说她站起来的可能性很小。别人都觉得她的丈夫会跟她离婚，她也想过要自杀。但丈夫一直鼓励她，为她不知找了多少家医院，并且几年如一日地照顾她，从不抱怨。在丈夫的爱护和努力下，她终于又站了起来。她的故事十分感人，评委们听了都很感动。",
        vi: "Ban giám khảo bảo cặp thứ nhất kể xem hai người ân ái như thế nào. Người vợ kể, mấy năm trước chị bị liệt toàn thân, bác sĩ nói khả năng chị đứng dậy được là rất nhỏ. Ai cũng nghĩ chồng chị sẽ ly hôn với chị, chị cũng từng nghĩ đến chuyện tự tử. Nhưng người chồng luôn động viên chị, không biết đã tìm bao nhiêu bệnh viện cho chị, lại chăm sóc chị suốt mấy năm trời như một ngày, chưa bao giờ than phiền. Nhờ sự yêu thương chăm sóc và nỗ lực của chồng, cuối cùng chị đã đứng dậy được. Câu chuyện của chị vô cùng cảm động, các giám khảo nghe xong đều rất xúc động.",
        questions: ["第一对夫妻中的妻子碰到了什么问题？丈夫是怎么做的？", "请用重点词语复述故事：离婚、自杀、抱怨、爱护"]
      },
      {
        zh: "随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵过架，一直相亲相爱、相敬如宾。评委们听了暗暗点头。",
        vi: "Tiếp theo bước vào là cặp vợ chồng thứ hai. Họ nói, trong hơn mười năm chung sống, họ chưa bao giờ đỏ mặt hay cãi nhau vì bất cứ chuyện gì, lúc nào cũng yêu thương nhau, tôn trọng nhau như khách. Các giám khảo nghe xong thầm gật đầu.",
        questions: ["第二对夫妻为什么说他们关系很好？", "你觉得“红过脸”是什么意思？"]
      },
      {
        zh: "轮到第三对夫妻了，却很长时间不见人。评委们等得有些不耐烦，就走出来看个究竟。只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下了一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。评委们看那纸条上面写着：别出声，他昨晚没睡好。一个评委提起笔在后面写了一句话：但是女士，我们得听你们夫妻俩的叙述啊！女人又写：那我们就不参加了。",
        vi: "Đến lượt cặp thứ ba, nhưng mãi không thấy người đâu. Các giám khảo đợi đến mức hơi sốt ruột, bèn bước ra xem thế nào. Chỉ thấy cặp thứ ba vẫn ngồi ở cửa, đầu người đàn ông tựa lên vai người phụ nữ, đã ngủ thiếp đi. Một giám khảo định tiến lên gọi người đàn ông dậy, người phụ nữ liền đưa ngón tay lên làm động tác “khẽ thôi”, rồi cẩn thận lấy giấy bút trong túi ra, dùng tay trái viết xiêu xiêu vẹo vẹo một dòng chữ đưa cho giám khảo, còn vai phải vẫn để cho đầu chồng tựa vào. Các giám khảo đọc mảnh giấy: “Đừng lên tiếng, tối qua anh ấy ngủ không ngon.” Một giám khảo cầm bút viết thêm một câu phía sau: “Nhưng thưa chị, chúng tôi phải nghe hai vợ chồng kể lại chứ!” Người phụ nữ lại viết: “Vậy thì chúng tôi không tham gia nữa.”",
        questions: ["评委们是在什么情况下见到的第三对夫妻？", "请用重点词语复述故事：不耐烦、靠、喊、伸"]
      },
      {
        zh: "大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！但评委们还是决定先不催他们，而是再等待一段时间。过了一会儿，男人醒了。评委们问他怎么那么累。男人不好意思地笑笑说：“我家住一楼，蚊子多。昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。”",
        vi: "Mọi người đều rất ngạc nhiên: người phụ nữ này vì không muốn làm chồng mất giấc mà lại từ bỏ cơ hội này! Nhưng các giám khảo vẫn quyết định tạm thời không giục họ, mà đợi thêm một lúc. Một lát sau, người đàn ông tỉnh dậy. Giám khảo hỏi sao anh lại mệt như vậy. Anh ngượng ngùng cười nói: “Nhà tôi ở tầng một, nhiều muỗi. Nửa đêm qua tôi bị muỗi đốt tỉnh dậy, sợ vợ tôi cũng bị đánh thức nên cả nửa đêm về sau tôi ngồi đuổi muỗi cho cô ấy.”",
        questions: ["妻子为什么要放弃这次机会？", "第三对夫妻中的丈夫昨天晚上为什么没睡好？"]
      },
      {
        zh: "最后的结果是，电台增加了两项奖项，将第一对夫妻评为“患难与共夫妻”，将第二对夫妻评为“相敬如宾夫妻”，而真正的“最恩爱夫妻”奖，却给了第三对夫妻。",
        vi: "Kết quả cuối cùng là đài phát thanh thêm hai hạng mục giải thưởng: bình chọn cặp thứ nhất là “Vợ chồng hoạn nạn có nhau”, cặp thứ hai là “Vợ chồng tương kính như tân”, còn giải “Vợ chồng ân ái nhất” thực sự lại trao cho cặp thứ ba.",
        questions: ["在这里，“将”是什么意思？", "你同意评委们的决定吗？为什么？"]
      }
    ],
    notes: [
      "相敬如宾 (xiāngjìng rúbīn): vợ chồng tôn trọng nhau như khách.",
      "患难与共 (huànnàn yǔgòng): hoạn nạn có nhau, cùng nhau vượt qua khó khăn.",
      "看个究竟: xem cho rõ ngọn ngành. 将 ở đây ≈ 把."
    ]
  },
  grammar: [
    {
      word: "如何 / 怎么",
      title: "Phân biệt 如何 / 怎么",
      usages: [
        {
          label: "如何",
          explain: "Đại từ hỏi cách thức \"thế nào\" - thiên về văn viết/trang trọng. Có thể đứng cuối câu ≈ 怎么样.",
          examples: ["这件事该如何解决？", "收入情况如何？"]
        },
        {
          label: "怎么",
          explain: "Đại từ hỏi cách thức - dùng nhiều trong khẩu ngữ. Ngoài ra còn dùng để hỏi nguyên nhân và đứng đầu câu biểu thị ngạc nhiên - hai chức năng này 如何 KHÔNG có.",
          examples: ["你怎么这么不耐烦？", "怎么，你不认识我了？"]
        }
      ],
      note: "Nhiều trường hợp hỏi cách thức thông thường, 如何 và 怎么 dùng thay thế được cho nhau (VD: 他是如何/怎么解决的？). Nhưng khi hỏi nguyên nhân hoặc đứng đầu câu biểu thị ngạc nhiên, chỉ dùng được 怎么."
    },
    {
      word: "靠",
      title: "3 nghĩa: dựa/tựa · nhờ vào · gần kề",
      usages: [
        {
          label: "(1) Dựa, tựa vào",
          explain: "Động từ: 靠着/靠在 + vị trí",
          examples: ["小猫靠着沙发睡觉。"]
        },
        {
          label: "(2) Nhờ vào, dựa vào",
          explain: "Phụ thuộc/được giúp đỡ bởi ai đó",
          examples: ["在家靠父母，出门靠朋友。"]
        },
        {
          label: "(3) Gần, kề, sát",
          explain: "Vị trí gần với vật gì",
          examples: ["我的座位是靠窗的座位。"]
        }
      ],
      note: "Cả 3 nghĩa đều xoay quanh ý \"tiếp xúc/phụ thuộc vào một điểm tựa\" — phân biệt qua ngữ cảnh: có vị trí cụ thể (tựa), có đối tượng giúp đỡ (nhờ vào), hay chỉ vị trí gần (kề)."
    },
    {
      word: "居然",
      title: "Biểu thị bất ngờ",
      usages: [
        {
          label: "居然 ≈ 竟然",
          explain: "Phó từ biểu thị \"không ngờ, thế mà lại\" - nhấn mạnh điều xảy ra ngoài dự đoán.",
          examples: ["这么简单的题，你居然也不会做？"]
        }
      ],
      note: "居然 và 竟然 gần như đồng nghĩa và có thể thay thế cho nhau trong hầu hết ngữ cảnh; 居然 mang sắc thái khẩu ngữ, ngạc nhiên rõ hơn một chút."
    }
  ],
  wordChoice: [
    {
      sentence: "他突然___了我一声，吓了我一跳。",
      options: ["靠", "喊", "伸", "递", "催", "叮", "吵"],
      answer: "喊"
    },
    {
      sentence: "昨晚我被蚊子___醒了。",
      options: ["靠", "喊", "伸", "递", "催", "叮", "吵"],
      answer: "叮"
    },
    {
      sentence: "那个男人的头___在女人的肩膀上，睡着了。",
      options: ["靠", "喊", "伸", "递", "催", "叮", "吵"],
      answer: "靠"
    },
    {
      sentence: "她___出手指，做了个小声的动作。",
      options: ["靠", "喊", "伸", "递", "催", "叮", "吵"],
      answer: "伸"
    },
    {
      sentence: "请帮我把这本书___给迈克，谢谢。",
      options: ["靠", "喊", "伸", "递", "催", "叮", "吵"],
      answer: "递"
    },
    {
      sentence: "别___了，他们发信息说已经在路上了。",
      options: ["靠", "喊", "伸", "递", "催", "叮", "吵"],
      answer: "催"
    },
    {
      sentence: "你的病都好了吗？现在感觉___？",
      options: ["怎么", "如何"],
      answer: "如何"
    },
    {
      sentence: "这儿太___了，我们换个地方吧。",
      options: ["吵架", "吵"],
      answer: "吵"
    },
    {
      sentence: "他这么年轻，没想到___是一位著名的作家。",
      options: ["仍然", "居然"],
      answer: "居然"
    },
    {
      sentence: "不要总是___别人，要想想能不能改变自己。",
      options: ["爱护", "抱怨", "等待"],
      answer: "抱怨"
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
          distractors: [8, 9, 10]
        },
        {
          vocabId: 3,
          distractors: [7, 9, 35]
        },
        {
          vocabId: 4,
          distractors: [13, 15, 22]
        },
        {
          vocabId: 5,
          distractors: [4, 1, 10]
        },
        {
          vocabId: 9,
          distractors: [19, 13, 3]
        },
        {
          vocabId: 16,
          distractors: [15, 18, 20]
        },
        {
          vocabId: 15,
          distractors: [16, 18, 20]
        },
        {
          vocabId: 17,
          distractors: [31, 16, 18]
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
      vocabIds: [8, 10, 11, 13, 32, 38, 39, 41]
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
          tokens: ["男人的头", "靠在", "女人的肩膀上", "睡着了", "。"],
          answer: "男人的头靠在女人的肩膀上睡着了。",
          vi: "Đầu người đàn ông tựa vào vai người phụ nữ và ngủ thiếp đi."
        },
        {
          tokens: ["她的丈夫", "一直", "鼓励她", "从不", "抱怨", "。"],
          answer: "她的丈夫一直鼓励她从不抱怨。",
          vi: "Chồng cô ấy luôn động viên cô, chưa bao giờ than phiền."
        },
        {
          tokens: ["你", "居然", "还在学校", "我以为", "你早就", "离开了", "。"],
          answer: "你居然还在学校我以为你早就离开了。",
          vi: "Thế mà bạn vẫn còn ở trường, tôi cứ tưởng bạn đã rời đi từ lâu rồi."
        },
        {
          tokens: ["这件事", "该", "如何", "解决", "。"],
          answer: "这件事该如何解决。",
          vi: "Việc này nên giải quyết thế nào đây?"
        },
        {
          tokens: ["没有", "一个人", "可以", "完全", "不靠", "别人", "而", "生活", "。"],
          answer: "没有一个人可以完全不靠别人而生活。",
          vi: "Không ai có thể sống mà hoàn toàn không dựa vào người khác."
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
          title: "课文 1 (đoạn 3) · Cặp vợ chồng thứ ba - đôi vợ chồng lặng lẽ",
          text: "评委们等得有些不耐烦，就走出来看个{{d1}}。只见第三对夫妻仍然坐在门口，男人的头靠在女人的{{d2}}上，睡着了。一个评委要上前{{d3}}醒那个男的，女的却{{d4}}出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下了一行字{{d5}}给评委。评委看那纸条上写着：别出声，他昨晚没睡好。一个评委提起笔在后面写了一句话：但是女士，我们得听你们夫妻俩的{{d6}}啊！女人又写：那我们就不参加了。大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！但评委们还是决定先不{{d7}}他们，而是再{{d8}}一段时间。过了一会儿，男人醒了。男人不好意思地笑笑说：“我家住一楼，蚊子多。昨晚{{d9}}我被{{d10}}叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。”"
        }
      ],
      answers: {
        d1: "究竟",
        d2: "肩膀",
        d3: "喊",
        d4: "伸",
        d5: "递",
        d6: "叙述",
        d7: "催",
        d8: "等待",
        d9: "半夜",
        d10: "蚊子"
      },
      bank: ["究竟", "肩膀", "喊", "伸", "递", "叙述", "催", "等待", "半夜", "蚊子", "脖子", "抱怨", "居然"]
    },
    {
      id: "fill-2",
      icon: "📄",
      title: "Phần 5 · Hoàn thành bài khóa",
      points: 10,
      subtitle: "Điền từ thích hợp vào chỗ trống trong đoạn văn kể về 3 cặp vợ chồng.",
      kind: "fill-blanks",
      passages: [
        {
          title: "课文 1 (đoạn 1) · Cặp vợ chồng thứ nhất",
          text: "电台要选出一对最{{t1}}的夫妻。{{t2}}后，有三对夫妻入围。评委叫第一对夫妻说说他俩是如何恩爱的。妻子说，几年前她全身{{t3}}了，医生说她站起来的可能性很小。别人都觉得她的丈夫会跟她{{t4}}，她也想过要自杀。但丈夫一直鼓励她，为她不知找了多少家医院，并且几年如一日地照顾她，从不{{t5}}。在丈夫的{{t6}}和努力下，她终于又站了起来。她的故事十分感人，评委们听了都很感动。"
        },
        {
          title: "课文 1 (đoạn 2 &amp; kết) · Cặp vợ chồng thứ hai và kết quả cuộc thi",
          text: "随后进来的是第二对夫妻，他俩说，十几年的{{t7}}生活中，他们从来没为任何事红过脸、{{t8}}过，一直相亲相爱、{{t9}}。评委们听了暗暗点头。最后的结果是，电台增加了两项奖项，将第一对夫妻评为“{{t10}}夫妻”，将第二对夫妻评为“相敬如宾夫妻”，而真正的“最恩爱夫妻”奖，却给了第三对夫妻。"
        }
      ],
      answers: {
        t1: "恩爱",
        t2: "对比",
        t3: "瘫痪",
        t4: "离婚",
        t5: "抱怨",
        t6: "爱护",
        t7: "婚姻",
        t8: "吵架",
        t9: "相敬如宾",
        t10: "患难与共"
      },
      bank: ["恩爱", "对比", "瘫痪", "离婚", "抱怨", "爱护", "婚姻", "吵架", "相敬如宾", "患难与共", "细节", "居然", "只好"]
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
          zh: "这个女人为了不影响丈夫睡觉，居然放弃这次机会。",
          vi: "Người phụ nữ này vì không muốn ảnh hưởng đến giấc ngủ của chồng, thế mà lại từ bỏ cơ hội lần này.",
          keywords: ["không muốn ảnh hưởng", "giấc ngủ", "từ bỏ", "cơ hội"]
        },
        {
          zh: "没有一个人可以完全不靠别人而生活。",
          vi: "Không ai có thể sống mà hoàn toàn không dựa vào người khác.",
          keywords: ["không ai", "dựa vào", "người khác", "sống"]
        },
        {
          zh: "你居然还在学校，我以为你早就离开了。",
          vi: "Thế mà bạn vẫn còn ở trường, tôi cứ tưởng bạn đã rời đi từ lâu rồi.",
          keywords: ["thế mà", "còn ở trường", "tưởng", "rời đi"]
        },
        {
          zh: "做任何事情都要注重细节。",
          vi: "Làm bất cứ việc gì cũng phải chú trọng chi tiết.",
          keywords: ["việc gì", "chú trọng", "chi tiết"]
        },
        {
          zh: "电台要选出一对最恩爱的夫妻。",
          vi: "Đài phát thanh muốn chọn ra một cặp vợ chồng mặn nồng nhất.",
          keywords: ["đài phát thanh", "chọn", "vợ chồng", "mặn nồng"]
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
          vi: "Vợ chồng họ luôn kính trọng nhau như khách.",
          answers: ["他们夫妻俩一直相敬如宾。", "他们俩一直相敬如宾。"]
        },
        {
          vi: "Cô ấy vì bị bệnh mà toàn thân bị liệt.",
          answers: ["她因为生病而全身瘫痪。", "她因病全身瘫痪了。"]
        },
        {
          vi: "Đừng lúc nào cũng than phiền, hãy nghĩ cách mà thay đổi.",
          answers: ["不要总是抱怨，要想想办法改变。", "不要老是抱怨，要想办法改变。"]
        },
        {
          vi: "Anh ấy đợi đến mức sốt cả ruột.",
          answers: ["他等得很不耐烦。"]
        },
        {
          vi: "Việc này rốt cuộc nên giải quyết thế nào đây?",
          answers: ["这件事究竟该如何解决？", "这件事到底该如何解决？"]
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
          q: "电台一共有三对夫妻入围。",
          a: true
        },
        {
          q: "第一对夫妻的妻子最后又能站起来了。",
          a: true
        },
        {
          q: "第二对夫妻经常吵架。",
          a: false
        },
        {
          q: "评委们看到第三对夫妻的男人一直在说话。",
          a: false
        },
        {
          q: "第三对夫妻的女人用左手写字给评委看。",
          a: true
        },
        {
          q: "男人昨晚没睡好是因为工作太累。",
          a: false
        },
        {
          q: "电台最后把“最恩爱夫妻”奖给了第三对夫妻。",
          a: true
        },
        {
          q: "第二对夫妻被评为“患难与共夫妻”。",
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
      items: ["你居然还在学校，我以为你早就离开了。", "男人的头靠在女人的肩膀上睡着了。", "做任何事情都要注重细节。", "别出声，他昨晚没睡好。", "电台要选出一对最恩爱的夫妻。"]
    },
    {
      id: "essay",
      icon: "📝",
      title: "Phần 10 · Viết đoạn văn",
      points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      kind: "essay",
      prompt: "请以“理想的夫妻关系”为题写一段话。 (Hãy viết một đoạn văn với chủ đề \"Mối quan hệ vợ chồng lý tưởng\".)",
      requirement: "Yêu cầu: viết ít nhất 100 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 1 (如何, 靠, 居然).",
      minChars: 100,
      minVocab: 5,
      grammarMarkers: ["如何", "怎么", "居然", "靠"],
      minGrammar: 2,
      sample: "我认为理想的夫妻关系应该是相敬如宾，却又能患难与共。两个人在遇到困难的时候，不应该只会抱怨，而是要互相爱护、互相鼓励。比如说，如果一方生病瘫痪了，另一方也不能因此提出离婚，而应该不管如何都要一直陪在身边。生活中难免会吵架，但吵架之后应该冷静下来想一想问题究竟是如何发生的，而不是让不耐烦影响两个人的感情。真正恩爱的夫妻，居然可以在最平凡的小事里，比如一个眼神、一次搀扶，看出彼此之间深深的爱。"
    },
    {
      id: "gram-1",
      icon: "🧠",
      title: "Phần 11 · Ngữ pháp: 如何 / 怎么",
      points: 6,
      subtitle: "Chọn từ thích hợp cho mỗi chỗ trống (如何 so với 怎么).",
      kind: "grammar-fill",
      grammarWord: "如何 / 怎么",
      options: ["如何", "怎么"],
      items: [
        {
          q: "他向经理叙述了自己是___解决这个问题的。",
          answers: ["如何", "怎么"]
        },
        {
          q: "你___这么不耐烦？",
          answers: ["怎么"]
        },
        {
          q: "谁知道他们是___吵起来的。",
          answers: ["怎么"]
        },
        {
          q: "你的病都好了吗？现在感觉___？",
          answers: ["如何"]
        },
        {
          q: "这件事该___解决？",
          answers: ["如何", "怎么"]
        },
        {
          q: "___，你不认识我了？",
          answers: ["怎么"]
        },
        {
          q: "最近生意___？",
          answers: ["如何"]
        },
        {
          q: "只有知道___停止的人，才知道如何高速前进。",
          answers: ["如何", "怎么"]
        }
      ]
    },
    {
      id: "gram-2",
      icon: "🧠",
      title: "Phần 12 · Ngữ pháp: 靠",
      points: 6,
      subtitle: "Điền từ vào chỗ trống (靠 - 3 nghĩa: dựa/tựa · nhờ vào · gần kề).",
      kind: "grammar-fill",
      grammarWord: "靠",
      items: [
        {
          q: "小猫___在沙发上睡觉，看起来很舒服。",
          answers: ["靠"]
        },
        {
          q: "没有一个人可以完全不___别人而生活。",
          answers: ["靠"]
        },
        {
          q: "我的座位是17号，是___窗的座位。",
          answers: ["靠"]
        },
        {
          q: "以后我想买一个___海的房子。",
          answers: ["靠"]
        },
        {
          q: "有什么事我能帮忙的，你尽管开口，你可以___我。",
          answers: ["靠"]
        },
        {
          q: "那个男人的头___在女人的肩膀上，睡着了。",
          answers: ["靠"]
        },
        {
          q: "快到站了，你别___着门，这样不安全。",
          answers: ["靠"]
        },
        {
          q: "你一个人在国外，遇到困难的时候可以___朋友帮忙。",
          answers: ["靠"]
        }
      ]
    },
    {
      id: "gram-3",
      icon: "🧠",
      title: "Phần 13 · Ngữ pháp: 居然",
      points: 5,
      subtitle: "Điền từ vào chỗ trống (居然 (≈ 竟然) - biểu thị bất ngờ).",
      kind: "grammar-fill",
      grammarWord: "居然",
      items: [
        {
          q: "这么简单的题，你___也不会做？",
          answers: ["居然", "竟然"]
        },
        {
          q: "你___还在学校，我以为你早就离开了。",
          answers: ["居然", "竟然"]
        },
        {
          q: "这个女人为了不影响丈夫睡觉，___放弃这次机会！",
          answers: ["居然", "竟然"]
        },
        {
          q: "他这么年轻，没想到___是一位著名的作家。",
          answers: ["居然", "竟然"]
        },
        {
          q: "我没想到她___会做这种事。",
          answers: ["居然", "竟然"]
        },
        {
          q: "天气预报说今天会下雨，结果___出太阳了。",
          answers: ["居然", "竟然"]
        },
        {
          q: "他学习那么努力，这次考试___没有及格。",
          answers: ["居然", "竟然"]
        },
        {
          q: "真没想到，这么大的问题___被他一下子解决了。",
          answers: ["居然", "竟然"]
        }
      ]
    }
  ]
};
