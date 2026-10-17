import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第7课 最好的医生是自己 (Bác sĩ tốt nhất là bản thân)
// Nguồn: Giáo trình chuẩn HSK4 tập 1, trang 86–97 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, chú thích ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["后悔", "擦", "反对", "动作", "指"];
const W_EX2 = ["严重", "研究", "辛苦", "超过", "出现"];

export const lesson07: Lesson = {
  level: "hsk4",
  no: 7,
  slug: "bai-7",
  zh: "最好的医生是自己",
  pinyin: "Zuì hǎo de yīshēng shì zìjǐ",
  vi: "Bác sĩ tốt nhất là bản thân",
  en: "The Best Doctor Is Yourself",
  topic: "健康生活 · Sống khỏe",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 气候、估计、咳嗽、严重、后悔、来不及、反对、研究、超过、精神、说明、减肥、辛苦、感情、烦恼…",
    "Hiểu và dùng được 估计 (phân biệt 估计 và 可能), 来不及, lặp lại từ ly hợp dạng AAB (散散步、帮帮忙…), 要是……(的话)，就……, 既……又/也/还…….",
    "Đọc hiểu năm bài khóa về khí hậu và sức khỏe, tác hại của thuốc lá, ảnh hưởng của máy tính, quan niệm về sức khỏe và lợi ích của việc đi dạo.",
    "Nói và viết về môn thể thao mình yêu thích và cách giữ gìn sức khỏe.",
    "Nắm các từ mở rộng có chữ 气: 生气、脾气、空气、气候.",
  ],

  warmUp: [
    { zh: "给下边的词语选择对应的图片：流血、咳嗽、减肥、抽烟、植物、烦恼。", vi: "Chọn hình tương ứng với các từ: chảy máu, ho, giảm cân, hút thuốc, thực vật, phiền muộn." },
    { zh: "说说你的运动情况：你有什么运动爱好？每周运动几次？每次多长时间？运动的目的和效果是什么？", vi: "Nói về việc chơi thể thao của bạn: bạn thích môn gì (chạy bộ, bơi, bóng rổ, bóng đá)? Mỗi tuần tập mấy lần, mỗi lần bao lâu? Mục đích (rèn luyện, giảm cân, kết bạn) và hiệu quả ra sao?" },
  ],

  vocab: [
    { id: 1, han: "流血", py: "liú xiě", pos: "đgt.", meaning: "chảy máu", example: "你的鼻子怎么流血了？快用纸擦擦。", exampleVi: "Mũi bạn sao lại chảy máu thế? Mau lấy giấy lau đi." },
    { id: 2, han: "擦", py: "cā", pos: "đgt.", meaning: "lau, chùi", example: "经理让服务员把所有桌子都擦干净。", exampleVi: "Giám đốc bảo nhân viên phục vụ lau sạch tất cả các bàn." },
    { id: 3, han: "气候", py: "qìhòu", pos: "dt.", meaning: "khí hậu", example: "我还不习惯北方的气候。", exampleVi: "Tôi vẫn chưa quen khí hậu miền Bắc." },
    { id: 4, han: "估计", py: "gūjì", pos: "đgt.", meaning: "đoán chừng, dự đoán", example: "估计是天气太干。", exampleVi: "Chắc là do thời tiết quá khô." },
    { id: 5, han: "咳嗽", py: "késou", pos: "đgt.", meaning: "ho", example: "我只是咳嗽，有点儿头疼，不严重。", exampleVi: "Tôi chỉ ho, hơi đau đầu, không nghiêm trọng." },
    { id: 6, han: "严重", py: "yánzhòng", pos: "tt.", meaning: "nghiêm trọng", example: "没事儿，大夫说不严重。", exampleVi: "Không sao, bác sĩ nói không nghiêm trọng." },
    { id: 7, han: "窗户", py: "chuānghu", pos: "dt.", meaning: "cửa sổ", example: "最好经常打开窗户换换空气。", exampleVi: "Tốt nhất là thường xuyên mở cửa sổ cho thoáng khí." },
    { id: 8, han: "空气", py: "kōngqì", pos: "dt.", meaning: "không khí", example: "因为太高，这里空气比别的地方少。", exampleVi: "Vì quá cao nên không khí ở đây ít hơn những nơi khác." },
    { id: 9, han: "抽烟", py: "chōu yān", pos: "đgt.", meaning: "hút thuốc", example: "医生让我以后不要再抽烟了。", exampleVi: "Bác sĩ bảo tôi sau này đừng hút thuốc nữa." },
    { id: 10, han: "动作", py: "dòngzuò", pos: "dt.", meaning: "động tác, hành động", example: "我觉得抽烟这个动作看上去很帅。", exampleVi: "Tôi thấy động tác hút thuốc trông rất ngầu." },
    { id: 11, han: "帅", py: "shuài", pos: "tt.", meaning: "đẹp (trai)", example: "他穿上这件衣服很帅。", exampleVi: "Anh ấy mặc bộ đồ này rất đẹp trai." },
    { id: 12, han: "出现", py: "chūxiàn", pos: "đgt.", meaning: "xuất hiện, nảy sinh", example: "等你身体出现问题了，后悔就来不及了。", exampleVi: "Đợi đến khi cơ thể có vấn đề thì hối hận cũng không kịp nữa." },
    { id: 13, han: "后悔", py: "hòuhuǐ", pos: "đgt.", meaning: "ân hận, hối hận", example: "别等健康出问题了才后悔。", exampleVi: "Đừng đợi sức khỏe có vấn đề rồi mới hối hận." },
    { id: 14, han: "来不及", py: "láibují", pos: "đgt.", meaning: "không kịp", example: "你不是和同学约了下午两点见面吗？再不走就来不及了。", exampleVi: "Chẳng phải bạn hẹn bạn học 2 giờ chiều gặp sao? Không đi ngay là không kịp đâu." },
    { id: 15, han: "反对", py: "fǎnduì", pos: "đgt.", meaning: "phản đối", example: "其实家人也一直反对我抽烟。", exampleVi: "Thật ra người nhà cũng luôn phản đối tôi hút thuốc." },
    { id: 16, han: "大夫", py: "dàifu", pos: "dt.", meaning: "bác sĩ", example: "大夫说是因为我长时间看电脑，眼睛太累。", exampleVi: "Bác sĩ nói là do tôi nhìn máy tính quá lâu, mắt quá mệt." },
    { id: 17, han: "植物", py: "zhíwù", pos: "dt.", meaning: "thực vật", example: "医生告诉我要多看看绿色的植物。", exampleVi: "Bác sĩ bảo tôi nên nhìn cây xanh nhiều hơn." },
    { id: 18, han: "研究", py: "yánjiū", pos: "đgt.", meaning: "nghiên cứu", example: "研究发现，如果人一天静坐超过6小时，就会影响身体健康。", exampleVi: "Nghiên cứu phát hiện, nếu một ngày ngồi yên quá 6 tiếng sẽ ảnh hưởng đến sức khỏe." },
    { id: 19, han: "超过", py: "chāoguò", pos: "đgt.", meaning: "vượt quá", example: "一共有十五个人，超过了三分之二。", exampleVi: "Tổng cộng có mười lăm người, vượt quá hai phần ba." },
    { id: 20, han: "散步", py: "sàn bù", pos: "đgt.", meaning: "đi dạo", example: "咱们午饭后就去附近的公园散散步吧。", exampleVi: "Ăn trưa xong chúng ta đi dạo công viên gần đây nhé." },
    { id: 21, han: "指", py: "zhǐ", pos: "đgt.", meaning: "chỉ về, nói đến", example: "过去，人们认为健康就是指身体不生病。", exampleVi: "Trước đây, người ta cho rằng sức khỏe chỉ là cơ thể không bị bệnh." },
    { id: 22, han: "精神", py: "jīngshén", pos: "dt.", meaning: "tinh thần", example: "现在人们认识到，健康还指精神上的健康。", exampleVi: "Ngày nay mọi người nhận ra sức khỏe còn là sức khỏe về tinh thần." },
    { id: 23, han: "教授", py: "jiàoshòu", pos: "dt.", meaning: "giáo sư", example: "有一位教授用数字来说明健康有多么重要。", exampleVi: "Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng đến mức nào." },
    { id: 24, han: "数字", py: "shùzì", pos: "dt.", meaning: "con số", example: "要是健康是1，其他都是1后面的0。", exampleVi: "Nếu sức khỏe là số 1 thì những thứ khác đều là số 0 phía sau số 1." },
    { id: 25, han: "说明", py: "shuōmíng", pos: "đgt.", meaning: "giải thích rõ, nói rõ", example: "他用一个例子说明了这个问题。", exampleVi: "Anh ấy dùng một ví dụ để giải thích rõ vấn đề này." },
    { id: 26, han: "要是", py: "yàoshi", pos: "liên.", meaning: "nếu như, nếu", example: "要是质量比别人的好的话，那么价格贵一点儿也是可以接受的。", exampleVi: "Nếu chất lượng tốt hơn của người khác thì giá đắt một chút cũng có thể chấp nhận được." },
    { id: 27, han: "既", py: "jì", pos: "p.", meaning: "(dùng kết hợp với 又) đã… lại…, vừa… vừa…", example: "散步既可以活动身体，又可以减肥。", exampleVi: "Đi dạo vừa có thể vận động cơ thể, lại vừa có thể giảm cân." },
    { id: 28, han: "减肥", py: "jiǎn féi", pos: "đgt.", meaning: "giảm cân", example: "她每天跑步是为了减肥。", exampleVi: "Cô ấy chạy bộ mỗi ngày là để giảm cân." },
    { id: 29, han: "辛苦", py: "xīnkǔ", pos: "tt.", meaning: "vất vả, cực nhọc", example: "散步不会像跑步那样辛苦。", exampleVi: "Đi dạo không vất vả như chạy bộ." },
    { id: 30, han: "肚子", py: "dùzi", pos: "dt.", meaning: "bụng", example: "肚子吃饱了需要活动。", exampleVi: "Ăn no bụng rồi thì cần vận động." },
    { id: 31, han: "感情", py: "gǎnqíng", pos: "dt.", meaning: "tình cảm", example: "夫妻说说一天的工作能加深感情。", exampleVi: "Vợ chồng kể cho nhau nghe công việc trong ngày có thể làm sâu đậm tình cảm." },
    { id: 32, han: "烦恼", py: "fánnǎo", pos: "tt.", meaning: "phiền muộn, buồn phiền", example: "听孩子谈谈学校里有意思的事，一天的烦恼就都跑掉了。", exampleVi: "Nghe con kể chuyện thú vị ở trường, mọi phiền muộn trong ngày đều tan biến." },
    { id: 33, han: "掉", py: "diào", pos: "đgt.", meaning: "(dùng sau động từ, chỉ kết quả) mất, đi, hết", example: "一天的烦恼就都跑掉了。", exampleVi: "Phiền muộn cả ngày đều chạy mất." },
    { id: 34, han: "生气", py: "shēng qì", pos: "đgt.", meaning: "tức giận, giận", example: "别生气了，我刚才真的是跟你开玩笑的。", exampleVi: "Đừng giận nữa, lúc nãy tôi thật sự chỉ đùa với bạn thôi.", group: "extended" },
    { id: 35, han: "脾气", py: "píqi", pos: "dt.", meaning: "tính khí, tính tình", example: "他不但能力强，而且脾气好，毕业后一定能找到一份好工作。", exampleVi: "Anh ấy không những có năng lực mà tính tình còn tốt, tốt nghiệp xong chắc chắn tìm được việc tốt.", group: "extended" },
  ],

  text: {
    title: "课文 最好的医生是自己",
    paragraphs: [
      {
        heading: "课文一 · 小李和小林聊天气和身体情况",
        zh: "小李：你的鼻子怎么流血了？快用纸擦擦。\n小林：我还不习惯北方的气候，估计是天气太干。今天天气不是很冷，你怎么穿这么多？\n小李：就是因为昨天穿得太少，我都感冒了。\n小林：最近感冒的人特别多。你去看医生了吗？\n小李：没有，我只是咳嗽，有点儿头疼，不严重，多喝点儿水就好了。\n小林：春天天气时冷时热，特别容易感冒。这时候一定要多注意保暖，另外，最好经常打开窗户换换空气。",
        vi: "Tiểu Lý: Mũi bạn sao lại chảy máu thế? Mau lấy giấy lau đi.\nTiểu Lâm: Mình vẫn chưa quen khí hậu miền Bắc, chắc là do thời tiết quá khô. Hôm nay trời không lạnh lắm, sao bạn mặc nhiều thế?\nTiểu Lý: Chính vì hôm qua mặc ít quá nên mình bị cảm rồi.\nTiểu Lâm: Dạo này nhiều người bị cảm lắm. Bạn đi khám bác sĩ chưa?\nTiểu Lý: Chưa, mình chỉ bị ho, hơi đau đầu, không nghiêm trọng, uống nhiều nước một chút là khỏi.\nTiểu Lâm: Mùa xuân thời tiết lúc lạnh lúc nóng, rất dễ bị cảm. Lúc này nhất định phải chú ý giữ ấm, ngoài ra, tốt nhất là thường xuyên mở cửa sổ cho thoáng khí.",
        questions: ["小林可能是中国哪里人？为什么？", "春天的时候怎么才能少感冒？"],
      },
      {
        heading: "课文二 · 小夏和小雨聊小雨抽烟的事情",
        zh: "小夏：你咳嗽好点儿了吗？医生怎么说的？\n小雨：还是老样子，他让我以后不要再抽烟了。\n小夏：抽烟对身体一点儿好处也没有。\n小雨：我也知道，可是我觉得抽烟这个动作看上去很帅。\n小夏：等你身体出现问题了，后悔就来不及了。\n小雨：其实家人也一直反对我抽烟，我自己却觉得没什么。但最近总是咳嗽，所以我有些担心了。\n小夏：抽烟不仅对自己没好处，还会影响周围人的身体健康。为了你和你的家人，别再抽了。",
        vi: "Tiểu Hạ: Bạn đỡ ho chút nào chưa? Bác sĩ nói sao?\nTiểu Vũ: Vẫn như cũ, bác sĩ bảo mình sau này đừng hút thuốc nữa.\nTiểu Hạ: Hút thuốc chẳng có chút lợi ích nào cho sức khỏe cả.\nTiểu Vũ: Mình cũng biết, nhưng mình thấy động tác hút thuốc trông rất ngầu.\nTiểu Hạ: Đợi đến khi cơ thể có vấn đề thì hối hận cũng không kịp nữa.\nTiểu Vũ: Thật ra người nhà cũng luôn phản đối mình hút thuốc, nhưng bản thân mình lại thấy chẳng sao. Có điều dạo này cứ ho mãi nên mình hơi lo rồi.\nTiểu Hạ: Hút thuốc không chỉ có hại cho bản thân mà còn ảnh hưởng đến sức khỏe của những người xung quanh. Vì bạn và gia đình bạn, đừng hút nữa nhé.",
        questions: ["小雨为什么喜欢抽烟？你同意小雨的想法吗？为什么？", "如果你有抽烟的朋友，你想对他/她说些什么？"],
      },
      {
        heading: "课文三 · 小李和小林聊电脑对身体的影响",
        zh: "小李：我最近眼睛总是跳，大夫说是因为我长时间看电脑，眼睛太累。\n小林：长时间坐在电脑前面工作，眼睛很容易累。最好是每过一小时就休息休息，然后再开始工作。\n小李：医生也这么说，他还告诉我要多向远处看看，尤其是多看看绿色的植物。\n小林：长时间对着电脑不仅对眼睛不好，身体也会不舒服。研究发现，如果人一天静坐超过6小时，就会影响身体健康。\n小李：是啊！像咱们这些久坐办公室的人要注意，有时间应该多站起来活动活动。\n小林：好，咱们午饭后就去附近的公园散散步吧。",
        vi: "Tiểu Lý: Dạo này mắt mình cứ giật hoài, bác sĩ nói là do mình nhìn máy tính quá lâu, mắt quá mệt.\nTiểu Lâm: Ngồi làm việc trước máy tính lâu thì mắt rất dễ mỏi. Tốt nhất là cứ mỗi tiếng nghỉ một chút rồi hãy làm tiếp.\nTiểu Lý: Bác sĩ cũng nói vậy, còn dặn mình nên nhìn ra xa nhiều hơn, nhất là nhìn cây xanh.\nTiểu Lâm: Nhìn máy tính lâu không chỉ hại mắt mà cơ thể cũng sẽ khó chịu. Nghiên cứu phát hiện, nếu một ngày ngồi yên quá 6 tiếng sẽ ảnh hưởng đến sức khỏe.\nTiểu Lý: Đúng vậy! Những người ngồi văn phòng lâu như chúng ta phải chú ý, có thời gian nên đứng dậy vận động nhiều hơn.\nTiểu Lâm: Được, ăn trưa xong chúng ta đi dạo ở công viên gần đây nhé.",
        questions: ["长时间坐在电脑前面工作好不好？为什么？", "要是你需要长时间用电脑工作，你会怎么保证自己的身体健康？"],
      },
      {
        heading: "课文四 · 什么才是健康",
        zh: "每个人都希望自己健康，那么什么才是健康呢？过去，人们认为健康就是指身体不生病。但是，现在人们认识到，健康还指精神上的健康。只有身体和精神都健康，才算是真正的健康。有一位教授用数字来说明健康有多么重要：要是健康是1，其他都是1后面的0；如果没有1，不管有多少0也没用。所以我们平时一定要注意锻炼，别等健康出问题了才后悔。",
        vi: "Ai cũng mong mình khỏe mạnh, vậy thế nào mới là khỏe mạnh? Trước đây, người ta cho rằng sức khỏe chỉ là cơ thể không bị bệnh. Nhưng ngày nay mọi người đã nhận ra, sức khỏe còn bao gồm sức khỏe về tinh thần. Chỉ khi cả thể chất và tinh thần đều khỏe mạnh mới được coi là khỏe mạnh thật sự. Có một vị giáo sư dùng con số để giải thích sức khỏe quan trọng đến mức nào: nếu sức khỏe là số 1 thì những thứ khác đều là số 0 phía sau số 1; nếu không có số 1 thì dù có bao nhiêu số 0 cũng vô dụng. Vì vậy, bình thường chúng ta nhất định phải chú ý rèn luyện, đừng đợi sức khỏe có vấn đề rồi mới hối hận.",
        questions: ["过去和现在的人们对健康的认识有哪些不同？", "那位教授用什么方法说明健康是非常重要的？"],
      },
      {
        heading: "课文五 · 最好的运动是散步",
        zh: "我听一位医生说过一句话：“最好的医生是自己，最好的药是时间，最好的运动是散步。”前两条我理解得不深，最后一条我完全同意。散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。晚饭后，一家人一起出去散散步，是一件很幸福的事情。肚子吃饱了需要活动，家人忙了一天需要交流，夫妻说说一天的工作能加深感情，听孩子谈谈学校里有意思的事，一天的烦恼就都跑掉了。",
        vi: "Tôi từng nghe một bác sĩ nói: “Bác sĩ tốt nhất là bản thân, liều thuốc tốt nhất là thời gian, môn vận động tốt nhất là đi dạo.” Hai câu đầu tôi hiểu chưa sâu, nhưng câu cuối thì tôi hoàn toàn đồng ý. Đi dạo là cách rèn luyện đơn giản nhất trong cuộc sống, vừa có thể vận động cơ thể, lại có thể giảm cân, hơn nữa không vất vả như chạy bộ. Sau bữa tối, cả nhà cùng ra ngoài đi dạo là một việc rất hạnh phúc. Ăn no rồi cần vận động, người nhà bận rộn cả ngày cần trò chuyện, vợ chồng kể cho nhau nghe công việc trong ngày có thể làm tình cảm thêm sâu đậm, nghe con kể chuyện thú vị ở trường, mọi phiền muộn trong ngày đều tan biến.",
        questions: ["“我”是怎么理解“最好的运动是散步”这句话的？", "晚饭后和家人一起去散散步有哪几个方面的好处？"],
      },
    ],
    notes: [
      "小李 (Xiǎo Lǐ): Tiểu Lý. 小林 (Xiǎo Lín): Tiểu Lâm. 小夏 (Xiǎo Xià): Tiểu Hạ. 小雨 (Xiǎoyǔ): Tiểu Vũ.",
      "Văn hóa: 太极和太极拳 – Thái cực và Thái cực quyền. Thái cực quyền động tác mềm mại, tốc độ chậm, dễ học, rất hợp với người trung niên và cao tuổi; tập thường xuyên vừa giữ sức khỏe vừa nâng cao đời sống tinh thần.",
    ],
  },

  grammar: [
    {
      word: "估计",
      title: "Động từ “đoán chừng, ước đoán”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Động từ 估计 có nghĩa là đưa ra suy đoán chung chung về sự vật dựa vào những điều kiện nào đó.",
          examples: [
            "我还不习惯北方的气候，估计是天气太干。",
            "你有没有去问问小王？估计他应该有办法。",
            "机场通知飞机晚点一个小时，估计他下午六点才能到上海。",
          ],
        },
      ],
      note: "比一比 估计 — 可能. Giống: đều chỉ suy đoán dựa vào điều kiện nào đó (今天的工作估计/可能完不成了). Khác: (1) 估计 là động từ, có thể làm vị ngữ trực tiếp, theo sau là động từ hoặc vế câu (我估计这次考试考得不错); 可能 là động từ năng nguyện, chỉ đứng trước động từ. (2) 可能 còn là tính từ “có thể xảy ra” (最可能的原因就是他回国了), 估计 không có cách dùng này. (3) Có thể nói 很可能, đứng trước hoặc sau chủ ngữ (很可能他还不知道这件事 / 他很可能还不知道这件事); 估计 thì không.",
    },
    {
      word: "来不及",
      title: "Động từ “không kịp”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Diễn tả do thời gian ngắn nên không kịp làm việc gì. Có thể dùng độc lập hoặc có động từ theo sau.",
          examples: [
            "等你身体出现问题了，后悔就来不及了。",
            "今天来不及开会了，明天我们再找时间说这个问题吧。",
            "你不是和同学约了下午两点见面吗？再不走就来不及了。",
          ],
        },
      ],
      note: "Trái nghĩa: 来得及 (còn kịp).",
    },
    {
      word: "离合词重叠 (AAB)",
      title: "Sự lặp lại của từ ly hợp",
      usages: [
        {
          label: "Cách dùng",
          explain: "Lặp lại từ ly hợp diễn tả thời gian ngắn, làm thử, sự nhẹ nhàng, tùy tiện. Hình thức lặp lại là “AAB”: 散散步、帮帮忙、睡睡觉、游游泳.",
          examples: [
            "咱们午饭后就去附近的公园散散步吧。",
            "行李箱怎么这么重啊！你快来帮帮我的忙。",
            "周末马克一般在宿舍看看书、听听音乐、睡睡觉。",
          ],
        },
      ],
      note: "Không nói *散步散步; tân ngữ/định ngữ có thể chen vào giữa: 帮帮我的忙.",
    },
    {
      word: "要是",
      title: "Liên từ “nếu, nếu như”: 要是……(的话)，就……",
      usages: [
        {
          label: "Cách dùng",
          explain: "要是 có nghĩa là nếu, nếu như; thường dùng trong cấu trúc “要是……(的话)，就……”. Vế có 要是 đưa ra một giả thiết, vế có 就 chỉ hành động hoặc kết quả xảy ra trong tình huống giả thiết đó.",
          examples: [
            "要是健康是1，其他都是1后面的0。",
            "要是你想来中国的大学留学，和中国学生一起学习专业课，那么就需要做好这些准备。",
            "要是质量比别人的好的话，那么价格贵一点儿也是可以接受的。",
          ],
        },
      ],
    },
    {
      word: "既……又/也/还……",
      title: "Cấu trúc “vừa… vừa…, đã… lại…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Nối hai cấu trúc động từ hoặc tính từ (thường giống nhau về cấu tạo), diễn tả hai tình huống tồn tại cùng lúc, đều mang nghĩa tích cực hoặc đều mang nghĩa tiêu cực.",
          examples: [
            "散步是生活中最简单的锻炼方法，既可以活动身体，又可以减肥。",
            "成功离不开交流，交流自然需要说话。会说话的人既容易交到朋友，也容易获得成功。",
            "他那个人做事既不认真，动作还慢，这个工作这么重要，还是让别人做吧。",
          ],
        },
      ],
    },
  ],

  wordChoice: [
    { sentence: "经理让服务员把所有桌子都___干净。", options: W_EX1, answer: "擦" },
    { sentence: "第一印象是___在第一次见面时给别人留下的印象。", options: W_EX1, answer: "指" },
    { sentence: "生气时不要急着做决定，因为这个时候做的决定可能让你___。", options: W_EX1, answer: "后悔" },
    { sentence: "他对自己的要求很高，希望比赛的时候把每个___都做好。", options: W_EX1, answer: "动作" },
    { sentence: "我本来以为她会___我这么做，没想到她竟然支持我。", options: W_EX1, answer: "反对" },
    { sentence: "A：你的腿怎么了？快坐下休息一会儿吧。B：没事儿，大夫说不___。", options: W_EX2, answer: "严重" },
    { sentence: "A：现在有多少人同意这个计划？B：一共有十五个人，___了三分之二。", options: W_EX2, answer: "超过" },
    { sentence: "A：今天的晚饭怎么样？B：特别好吃，___你了，一会儿我来洗碗。", options: W_EX2, answer: "辛苦" },
    { sentence: "老孙是个非常热情的人，他总是能在第一时间___，帮助大家解决问题。", options: W_EX2, answer: "出现" },
    { sentence: "A：你毕业后有什么打算？B：还没决定，我在考虑要不要读___生。", options: W_EX2, answer: "研究" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 3, distractors: [8, 4, 22] },
        { vocabId: 5, distractors: [1, 9, 28] },
        { vocabId: 13, distractors: [15, 14, 12] },
        { vocabId: 16, distractors: [23, 17, 30] },
        { vocabId: 18, distractors: [19, 25, 21] },
        { vocabId: 22, distractors: [31, 32, 24] },
        { vocabId: 29, distractors: [6, 11, 32] },
        { vocabId: 31, distractors: [22, 35, 10] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [4, 7, 12, 14, 17, 24, 30, 32],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["我", "还不习惯", "北方的", "气候", "。"], answer: "我还不习惯北方的气候。", vi: "Tôi vẫn chưa quen khí hậu miền Bắc." },
        { tokens: ["抽烟", "对身体", "一点儿好处", "也没有", "。"], answer: "抽烟对身体一点儿好处也没有。", vi: "Hút thuốc chẳng có chút lợi ích nào cho sức khỏe." },
        { tokens: ["最好", "经常", "打开窗户", "换换空气", "。"], answer: "最好经常打开窗户换换空气。", vi: "Tốt nhất là thường xuyên mở cửa sổ cho thoáng khí." },
        { tokens: ["散步", "既可以活动身体", "，", "又可以减肥", "。"], answer: "散步既可以活动身体，又可以减肥。", vi: "Đi dạo vừa có thể vận động cơ thể, lại có thể giảm cân." },
        { tokens: ["咱们", "午饭后", "就去", "附近的公园", "散散步吧", "。"], answer: "咱们午饭后就去附近的公园散散步吧。", vi: "Ăn trưa xong chúng ta đi dạo công viên gần đây nhé." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Khí hậu và sức khỏe", text: "小李：你的鼻子怎么{{c1}}了？快用纸{{c2}}擦。\n小林：我还不习惯北方的{{c3}}，{{c4}}是天气太干。\n小李：我只是{{c5}}，有点儿头疼，不{{c6}}。" },
        { title: "Bài 2 · Chuyện hút thuốc", text: "小雨：我觉得抽烟这个{{c7}}看上去很帅。\n小夏：等你身体出现问题了，{{c8}}就{{c9}}了。\n小雨：其实家人也一直{{c10}}我抽烟。" },
      ],
      answers: { c1: "流血", c2: "擦", c3: "气候", c4: "估计", c5: "咳嗽", c6: "严重", c7: "动作", c8: "后悔", c9: "来不及", c10: "反对" },
      bank: ["流血", "擦", "气候", "估计", "咳嗽", "严重", "动作", "后悔", "来不及", "反对", "空气", "超过", "窗户"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về sức khỏe và việc đi dạo.",
      passages: [
        { title: "Bài 4 · Thế nào là khỏe mạnh", text: "过去，人们认为健康就是{{e1}}身体不生病。但是，现在人们认识到，健康还指{{e2}}上的健康。有一位{{e3}}用{{e4}}来{{e5}}健康有多么重要。" },
        { title: "Bài 5 · Môn vận động tốt nhất", text: "散步是生活中最简单的锻炼方法，{{e6}}可以活动身体，又可以{{e7}}，而且不会像跑步那样{{e8}}。夫妻说说一天的工作能加深{{e9}}，听孩子谈谈学校里有意思的事，一天的{{e10}}就都跑掉了。" },
      ],
      answers: { e1: "指", e2: "精神", e3: "教授", e4: "数字", e5: "说明", e6: "既", e7: "减肥", e8: "辛苦", e9: "感情", e10: "烦恼" },
      bank: ["指", "精神", "教授", "数字", "说明", "既", "减肥", "辛苦", "感情", "烦恼", "要是", "肚子", "研究"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "春天天气时冷时热，特别容易感冒。", vi: "Mùa xuân thời tiết lúc lạnh lúc nóng, rất dễ bị cảm.", keywords: ["mùa xuân", "lạnh", "nóng", "cảm"] },
        { zh: "抽烟不仅对自己没好处，还会影响周围人的身体健康。", vi: "Hút thuốc không chỉ có hại cho bản thân mà còn ảnh hưởng đến sức khỏe của người xung quanh.", keywords: ["hút thuốc", "ảnh hưởng", "sức khỏe", "xung quanh"] },
        { zh: "如果人一天静坐超过6小时，就会影响身体健康。", vi: "Nếu một ngày ngồi yên quá 6 tiếng sẽ ảnh hưởng đến sức khỏe.", keywords: ["ngồi", "6 tiếng", "ảnh hưởng", "sức khỏe"] },
        { zh: "只有身体和精神都健康，才算是真正的健康。", vi: "Chỉ khi cả thể chất và tinh thần đều khỏe mạnh mới được coi là khỏe mạnh thật sự.", keywords: ["thể chất", "tinh thần", "khỏe mạnh", "thật sự"] },
        { zh: "最好的医生是自己，最好的药是时间，最好的运动是散步。", vi: "Bác sĩ tốt nhất là bản thân, liều thuốc tốt nhất là thời gian, môn vận động tốt nhất là đi dạo.", keywords: ["bác sĩ", "thuốc", "thời gian", "đi dạo"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Đừng đợi sức khỏe có vấn đề rồi mới hối hận.", answers: ["别等健康出问题了才后悔。", "不要等健康出问题了才后悔。", "别等健康出了问题才后悔。"] },
        { vi: "Không đi ngay là không kịp đâu.", answers: ["再不走就来不及了。", "现在不走就来不及了。"] },
        { vi: "Ăn trưa xong chúng ta đi dạo công viên nhé.", answers: ["咱们午饭后去公园散散步吧。", "我们午饭后去公园散散步吧。", "午饭后咱们去公园散散步吧。", "午饭后我们去公园散散步吧。"] },
        { vi: "Chắc là do thời tiết quá khô.", answers: ["估计是天气太干。", "可能是天气太干。"] },
        { vi: "Đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân.", answers: ["散步既可以活动身体，又可以减肥。", "散步既可以活动身体，也可以减肥。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小林的鼻子流血，估计是因为北方天气太干。", a: true },
        { q: "小李感冒很严重，已经去看医生了。", a: false },
        { q: "小雨的家人一直支持他抽烟。", a: false },
        { q: "小雨最近总是咳嗽，所以有些担心了。", a: true },
        { q: "大夫说小李眼睛总是跳是因为他睡觉太少。", a: false },
        { q: "研究发现，一天静坐超过6小时会影响身体健康。", a: true },
        { q: "现在人们认为健康就是指身体不生病。", a: false },
        { q: "“我”完全同意“最好的运动是散步”这句话。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "我还不习惯北方的气候。",
        "抽烟对身体一点儿好处也没有。",
        "后悔就来不及了。",
        "最好的运动是散步。",
        "一天的烦恼就都跑掉了。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "运动的方法有很多种，请介绍一下你最喜欢的一种运动，说说你是怎么保持身体健康的。 (Hãy giới thiệu môn thể thao bạn thích nhất và cách bạn giữ gìn sức khỏe.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 7 (估计, 来不及, lặp AAB như 散散步, 要是……就……, 既……又……).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["估计", "来不及", "要是", "既", "散散步", "游游泳", "跑跑步"],
      minGrammar: 2,
      sample: "我最喜欢的运动是散步。我在办公室工作，每天要长时间坐在电脑前面，眼睛和身体都很累。所以我每天晚饭后都和家人一起去附近的公园散散步。散步既可以活动身体，又可以减肥，而且不像跑步那样辛苦。散步的时候，我们一边走一边聊天儿，一天的烦恼就都跑掉了。我觉得要是不注意锻炼，等身体出现问题了，后悔就来不及了。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 估计 / 可能", points: 6,
      subtitle: "Chọn 估计 hoặc 可能 cho mỗi chỗ trống (có câu dùng được cả hai).",
      grammarWord: "估计 / 可能",
      options: ["估计", "可能"],
      items: [
        { q: "那个饭馆儿去晚了人特别多，要等很长时间，这会儿去___来不及了。", answers: ["估计", "可能"] },
        { q: "还有一分钟比赛就结束了，我___他们没机会再进球了。", answers: ["估计"] },
        { q: "已经这么晚了，老师___休息了，你别打电话了。", answers: ["估计", "可能"] },
        { q: "我看这是不___的事情，网上的消息可不能全信。", answers: ["可能"] },
        { q: "你看，那个人最___想做什么？", answers: ["可能"] },
        { q: "明天就可以上网查成绩了，我___这次考试考得不错。", answers: ["估计"] },
        { q: "他这么多天没来上课，最___的原因就是他回国了。", answers: ["可能"] },
        { q: "很___他还不知道这件事。", answers: ["可能"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 既……又/也/还……", points: 6,
      subtitle: "Điền từ thích hợp (既 / 又 / 也 / 还) vào chỗ trống.",
      grammarWord: "既……又/也/还……",
      items: [
        { q: "散步既可以活动身体，___可以减肥。", answers: ["又", "也"] },
        { q: "会说话的人___容易交到朋友，也容易获得成功。", answers: ["既"] },
        { q: "他那个人做事既不认真，动作___慢。", answers: ["还", "又"] },
        { q: "这两件衣服___漂亮又便宜，我都想买。", answers: ["既"] },
        { q: "来中国学习汉语，既能提高汉语水平，___能了解中国文化。", answers: ["也", "又", "还"] },
        { q: "我们都愿意跟他交朋友，因为他___热情又幽默。", answers: ["既"] },
        { q: "这个房间既干净，___安静。", answers: ["又", "也"] },
        { q: "抽烟___对自己没好处，又会影响周围人的健康。", answers: ["既"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: Lặp lại từ ly hợp (AAB)", points: 5,
      subtitle: "Viết dạng lặp AAB của từ trong ngoặc vào chỗ trống, vd. 散步 → 散散步.",
      grammarWord: "离合词重叠",
      items: [
        { q: "咱们午饭后就去附近的公园___吧。（散步）", answers: ["散散步"] },
        { q: "行李箱怎么这么重啊！你快来___我的忙。（帮忙）", answers: ["帮帮"] },
        { q: "周末马克一般在宿舍看看书、听听音乐、___。（睡觉）", answers: ["睡睡觉"] },
        { q: "天气这么热，我们去___吧，对身体特别好。（游泳）", answers: ["游游泳"] },
        { q: "你有时间应该多回家看看爸妈，___。（聊天儿）", answers: ["聊聊天儿", "聊聊天"] },
        { q: "我帮你跟小李联系好了，你们明天___吧。（见面）", answers: ["见见面"] },
        { q: "工作累了就站起来___，别一直坐着。（散步）", answers: ["散散步"] },
        { q: "你别一个人在家生气了，出去___，心情会好一点儿。（跑步）", answers: ["跑跑步"] },
      ],
    },
  ],
};
