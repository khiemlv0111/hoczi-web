import type { Lesson } from "../../_lesson/types";

// HSK标准教程4 · 第17课 人与自然 (Con người và thiên nhiên)
// Nguồn: Giáo trình chuẩn HSK4 tập 2, trang 94–107 (bản scan, đọc từ ảnh trang).
// Từ vựng, bài khóa, ngữ pháp và luyện nhanh lấy từ sách; phần luyện tập 100 điểm
// và bản dịch tiếng Việt bài khóa được soạn thêm (cần giáo viên duyệt lại).
const W_EX1 = ["广播", "尊重", "剩", "照", "底"];
const W_EX2 = ["难受", "暖和", "活泼", "凉快", "热闹"];
const W_EXT = ["既然", "竟然", "仍然", "突然"];

export const lesson17: Lesson = {
  level: "hsk4",
  no: 17,
  slug: "bai-17",
  zh: "人与自然",
  pinyin: "Rén yǔ zìrán",
  vi: "Con người và thiên nhiên",
  en: "Man and Nature",
  topic: "人与自然 · Con người và thiên nhiên",
  durationMinutes: 60,

  goals: [
    "Nắm nghĩa và cách dùng các từ trọng điểm: 凉快、热闹、广播、照、严格、难受、趟、活泼、社会、竞争、森林、剩、暖和、海洋、仍然、排列…",
    "Hiểu và dùng được 5 điểm ngữ pháp: 倒 (động từ / phó từ), 干, lượng từ 趟 (phân biệt 趟 – 次), cấu trúc 为了……而……, phó từ 仍然.",
    "Đọc hiểu các bài khóa về thời tiết mùa thu, chó cưng, gấu trúc ở vườn thú, sự cạnh tranh của thực vật và thế giới đáy biển.",
    "Trao đổi về việc bảo vệ động vật, thực vật, đại dương và viết đoạn văn ngắn về chủ đề con người và thiên nhiên.",
    "Nắm các từ mở rộng cùng chữ 然: 既然、竟然、突然 (và 仍然).",
  ],

  warmUp: [
    { zh: "给下边的词语选择对应的图片，并用这个词语根据图片说一个句子：热闹、森林、云、活泼、老虎、海洋。", vi: "Chọn hình tương ứng với các từ 热闹 (náo nhiệt), 森林 (rừng rậm), 云 (mây), 活泼 (hoạt bát), 老虎 (con hổ), 海洋 (đại dương) và nói một câu có từ đó để mô tả hình." },
    { zh: "你最喜欢什么动物？为什么？", vi: "Bạn thích loài vật nào nhất? Tại sao? (Nói về hình dáng, đặc điểm của nó và lý do bạn thích: giống như bạn bè, như người nhà, giúp bạn không thấy cô đơn…)" },
  ],

  vocab: [
    { id: 1, han: "凉快", py: "liángkuai", pos: "tt.", meaning: "mát mẻ", example: "最近天气越来越凉快了。", exampleVi: "Dạo này thời tiết ngày càng mát mẻ." },
    { id: 2, han: "热闹", py: "rènao", pos: "tt.", meaning: "náo nhiệt", example: "这几天香山特别热闹。", exampleVi: "Mấy hôm nay Hương Sơn đặc biệt náo nhiệt." },
    { id: 3, han: "云", py: "yún", pos: "dt.", meaning: "mây", example: "你看天上的云，今天肯定有大雨。", exampleVi: "Cậu nhìn mây trên trời kìa, hôm nay chắc chắn có mưa to." },
    { id: 4, han: "广播", py: "guǎngbō", pos: "dt.", meaning: "chương trình phát thanh/truyền hình", example: "广播里说那里也有不少专门看红叶的好地方。", exampleVi: "Đài phát thanh nói ở đó cũng có không ít chỗ chuyên ngắm lá đỏ." },
    { id: 5, han: "照", py: "zhào", pos: "đgt.", meaning: "chụp (ảnh)", example: "我还想多照点儿香山的照片呢。", exampleVi: "Mình còn muốn chụp thêm ít ảnh Hương Sơn nữa." },
    { id: 6, han: "倒", py: "dào", pos: "p.", meaning: "(chỉ sự tương phản) nhưng, lại", example: "去长城倒是一个好主意。", exampleVi: "Đi Trường Thành thì lại là một ý hay." },
    { id: 7, han: "安娜", py: "Ānnà", pos: "dt. riêng", meaning: "An-na (Anna, tên người)", example: "小夏和安娜在聊天气。", exampleVi: "Tiểu Hạ và An-na đang nói chuyện về thời tiết." },
    { id: 8, han: "香山", py: "Xiāng Shān", pos: "dt. riêng", meaning: "Hương Sơn (ở Bắc Kinh)", example: "秋天很多人去香山看红叶。", exampleVi: "Mùa thu nhiều người đến Hương Sơn ngắm lá đỏ." },
    { id: 9, han: "长城", py: "Chángchéng", pos: "dt. riêng", meaning: "Trường Thành", example: "咱们改天去长城吧。", exampleVi: "Hôm khác chúng mình đi Trường Thành đi." },
    { id: 10, han: "毛", py: "máo", pos: "dt.", meaning: "lông", example: "你的这只大黑狗毛真漂亮。", exampleVi: "Con chó đen to này của cậu lông đẹp thật." },
    { id: 11, han: "抱", py: "bào", pos: "đgt.", meaning: "bế, bồng, ôm", example: "每次见了都想抱一抱它。", exampleVi: "Lần nào gặp cũng muốn ôm nó một cái." },
    { id: 12, han: "干", py: "gàn", pos: "đgt.", meaning: "làm", example: "每次你让它干什么，它就像能听懂你的话一样去做。", exampleVi: "Mỗi lần cậu bảo nó làm gì, nó đều làm như thể hiểu được lời cậu." },
    { id: 13, han: "严格", py: "yángé", pos: "tt.", meaning: "nghiêm khắc, nghiêm ngặt", example: "然后它就会严格按照你的要求做了。", exampleVi: "Sau đó nó sẽ làm đúng theo yêu cầu của cậu một cách nghiêm chỉnh." },
    { id: 14, han: "难受", py: "nánshòu", pos: "tt.", meaning: "bực bội, buồn rầu, khó chịu", example: "在你心里难受的时候，它会一直陪着你。", exampleVi: "Khi trong lòng cậu buồn, nó sẽ luôn ở bên cậu." },
    { id: 15, han: "趟", py: "tàng", pos: "lượng.", meaning: "lần, chuyến (số lần đi lại)", example: "上个月我去了趟北京动物园。", exampleVi: "Tháng trước tôi đã đi một chuyến đến vườn thú Bắc Kinh." },
    { id: 16, han: "放暑假", py: "fàng shǔjià", pos: "cụm đgt.", meaning: "nghỉ hè", example: "去年放暑假的时候，我也去过一次。", exampleVi: "Hè năm ngoái lúc được nghỉ, mình cũng đã đi một lần." },
    { id: 17, han: "老虎", py: "lǎohǔ", pos: "dt.", meaning: "hổ, cọp", example: "我在那儿看了马、熊猫、老虎等动物。", exampleVi: "Ở đó mình đã xem ngựa, gấu trúc, hổ và các loài vật khác." },
    { id: 18, han: "入口", py: "rùkǒu", pos: "dt.", meaning: "cổng vào", example: "入口处排队的人很多。", exampleVi: "Ở cổng vào có rất nhiều người xếp hàng." },
    { id: 19, han: "排队", py: "pái duì", pos: "đgt.", meaning: "xếp hàng", example: "买票的人都在排队。", exampleVi: "Những người mua vé đều đang xếp hàng." },
    { id: 20, han: "活泼", py: "huópō", pos: "tt.", meaning: "hoạt bát, nhanh nhẹn", example: "熊猫们也变得特别活泼。", exampleVi: "Lũ gấu trúc cũng trở nên đặc biệt hoạt bát." },
    { id: 21, han: "亚洲", py: "Yàzhōu", pos: "dt. riêng", meaning: "châu Á", example: "北京动物园是亚洲最大的动物园之一。", exampleVi: "Vườn thú Bắc Kinh là một trong những vườn thú lớn nhất châu Á." },
    { id: 22, han: "六一儿童节", py: "Liùyī Értóngjié", pos: "dt. riêng", meaning: "ngày Quốc tế thiếu nhi (1/6)", example: "我去的那天正赶上六一儿童节。", exampleVi: "Hôm tôi đi đúng vào ngày Quốc tế thiếu nhi 1/6." },
    { id: 23, han: "社会", py: "shèhuì", pos: "dt.", meaning: "xã hội", example: "不仅社会上的人与人之间有竞争……", exampleVi: "Không chỉ giữa người với người trong xã hội mới có cạnh tranh…" },
    { id: 24, han: "竞争", py: "jìngzhēng", pos: "đgt.", meaning: "cạnh tranh", example: "植物会为了阳光、空气和水而竞争。", exampleVi: "Thực vật cạnh tranh nhau vì ánh nắng, không khí và nước." },
    { id: 25, han: "森林", py: "sēnlín", pos: "dt.", meaning: "rừng rậm", example: "森林里的各种植物之间也有竞争。", exampleVi: "Giữa các loài thực vật trong rừng cũng có sự cạnh tranh." },
    { id: 26, han: "剩", py: "shèng", pos: "đgt.", meaning: "còn lại", example: "这本小说就剩十几页了。", exampleVi: "Cuốn tiểu thuyết này chỉ còn mười mấy trang nữa thôi." },
    { id: 27, han: "暖和", py: "nuǎnhuo", pos: "tt.", meaning: "ấm áp", example: "在暖和、水分比较多的地方，叶子往往长得又大又厚。", exampleVi: "Ở những nơi ấm áp, nhiều nước, lá cây thường mọc vừa to vừa dày." },
    { id: 28, han: "海洋", py: "hǎiyáng", pos: "dt.", meaning: "biển, đại dương", example: "地球上大约71%的地方是蓝色的海洋。", exampleVi: "Khoảng 71% bề mặt Trái Đất là đại dương xanh." },
    { id: 29, han: "底", py: "dǐ", pos: "dt.", meaning: "đáy", example: "真正的海底世界比故事里写的更美。", exampleVi: "Thế giới đáy biển thật còn đẹp hơn trong truyện." },
    { id: 30, han: "美人鱼", py: "Měirényú", pos: "dt.", meaning: "người cá", example: "我们小时候都听过美人鱼的故事。", exampleVi: "Hồi nhỏ chúng ta đều đã nghe chuyện nàng tiên cá." },
    { id: 31, han: "公里", py: "gōnglǐ", pos: "lượng.", meaning: "ki-lô-mét", example: "就算在几公里深的海底也仍然能看到东西。", exampleVi: "Dù ở đáy biển sâu mấy ki-lô-mét vẫn có thể nhìn thấy đồ vật." },
    { id: 32, han: "仍然", py: "réngrán", pos: "p.", meaning: "vẫn", example: "人比动物聪明，但动物仍然有很多值得人学习的地方。", exampleVi: "Con người thông minh hơn động vật, nhưng động vật vẫn có nhiều điều đáng để con người học hỏi." },
    { id: 33, han: "排列", py: "páiliè", pos: "đgt.", meaning: "sắp xếp (theo thứ tự)", example: "许多鱼会发出各种颜色的亮光，像一个个排列起来的灯。", exampleVi: "Nhiều loài cá phát ra ánh sáng đủ màu, giống những ngọn đèn xếp thành hàng." },
    { id: 34, han: "梦", py: "mèng", pos: "dt.", meaning: "giấc mơ", example: "美极了，就像在梦里一样。", exampleVi: "Đẹp vô cùng, cứ như trong mơ vậy." },
    { id: 35, han: "既然", py: "jìrán", pos: "liên.", meaning: "đã… thì…", example: "既然知道是你错了，那你就该主动向他道歉。", exampleVi: "Đã biết là bạn sai thì bạn nên chủ động xin lỗi anh ấy.", group: "extended" },
    { id: 36, han: "竟然", py: "jìngrán", pos: "p.", meaning: "vậy mà, lại (ngoài dự đoán)", example: "让人吃惊的是，这本小说的作者竟然是个十几岁的中学生。", exampleVi: "Điều khiến người ta ngạc nhiên là tác giả cuốn tiểu thuyết này lại là một học sinh trung học mới mười mấy tuổi.", group: "extended" },
    { id: 37, han: "突然", py: "tūrán", pos: "tt./p.", meaning: "đột ngột, bỗng nhiên", example: "那天的事情太突然了。", exampleVi: "Chuyện hôm đó quá đột ngột.", group: "extended" },
  ],

  text: {
    title: "课文 人与自然",
    paragraphs: [
      {
        heading: "课文一 · 小夏和安娜在聊天气",
        zh: "小夏：最近天气越来越凉快了，风一刮，草地上就会有一层厚厚的黄叶，看来秋天已经到了。\n安娜：这几天香山特别热闹，随着气温的降低，那里许多植物的叶子都由绿变黄或者变红，吸引了很多游客参观，咱们今天也去看看吧。\n小夏：你看天上的云，今天肯定有大雨。再说，香山上看红叶的人太多了。咱们改天去长城吧，广播里说那里也有不少专门看红叶的好地方。\n安娜：真可惜，我还想多照点儿香山的照片呢。去长城倒是一个好主意，那我们明天去吧。\n小夏：明天恐怕也不行，明天是我爸的生日。\n安娜：没关系，那我们再约时间。",
        vi: "Tiểu Hạ: Dạo này trời ngày càng mát mẻ, gió vừa thổi là trên bãi cỏ có ngay một lớp lá vàng dày, xem ra mùa thu đã đến rồi.\nAn-na: Mấy hôm nay Hương Sơn đặc biệt náo nhiệt, nhiệt độ giảm xuống, lá của nhiều loài cây ở đó đều chuyển từ xanh sang vàng hoặc đỏ, thu hút rất nhiều du khách đến tham quan, hôm nay chúng mình cũng đi xem đi.\nTiểu Hạ: Cậu nhìn mây trên trời kìa, hôm nay chắc chắn có mưa to. Hơn nữa, người lên Hương Sơn ngắm lá đỏ đông quá. Hôm khác chúng mình đi Trường Thành đi, đài phát thanh nói ở đó cũng có không ít chỗ chuyên ngắm lá đỏ rất đẹp.\nAn-na: Tiếc thật, mình còn muốn chụp thêm ít ảnh Hương Sơn cơ. Đi Trường Thành thì lại là một ý hay, vậy ngày mai chúng mình đi nhé.\nTiểu Hạ: Ngày mai e là cũng không được, mai là sinh nhật bố mình.\nAn-na: Không sao, vậy chúng mình hẹn lúc khác.",
        questions: ["现在是什么季节？天气怎么样？", "安娜打算做什么？小夏为什么不同意？小夏有什么建议？"],
      },
      {
        heading: "课文二 · 小林和小李在聊小李的狗",
        zh: "小林：你的这只大黑狗毛真漂亮，而且这么聪明，每次见了都想抱一抱它。\n小李：狗是很聪明的动物，只要稍微花点儿时间教教它，它就能学会很多东西。\n小林：听你这么一说，我现在也想养一只狗了。每次你让它干什么，它就像能听懂你的话一样去做。你教它是不是用了什么特别的方法？\n小李：要让它完成一些任务，只教一次是不够的，应该耐心地一遍一遍地教给它，使它熟悉，然后它就会严格按照你的要求做了。\n小林：看来没有想的那么容易。\n小李：狗是我们的好朋友，它能听懂人的话，明白人的心情。在你心里难受的时候，它会一直陪着你。",
        vi: "Tiểu Lâm: Con chó đen to này của cậu lông đẹp thật, lại còn thông minh thế, lần nào gặp mình cũng muốn ôm nó một cái.\nTiểu Lý: Chó là loài vật rất thông minh, chỉ cần bỏ ra một chút thời gian dạy nó là nó có thể học được rất nhiều thứ.\nTiểu Lâm: Nghe cậu nói vậy, giờ mình cũng muốn nuôi một con chó rồi. Mỗi lần cậu bảo nó làm gì, nó đều làm như thể hiểu được lời cậu. Cậu dạy nó có phải dùng phương pháp gì đặc biệt không?\nTiểu Lý: Muốn nó hoàn thành một số việc thì dạy một lần là không đủ, phải kiên nhẫn dạy nó hết lần này đến lần khác, để nó quen, sau đó nó sẽ làm đúng theo yêu cầu của cậu một cách nghiêm chỉnh.\nTiểu Lâm: Xem ra không dễ như mình nghĩ.\nTiểu Lý: Chó là bạn tốt của chúng ta, nó hiểu được lời người, hiểu được tâm trạng của người. Khi trong lòng cậu buồn, nó sẽ luôn ở bên cậu.",
        questions: ["小林为什么喜欢小李的狗？他为什么也想养狗？", "教狗完成一些任务可以用什么方法？"],
      },
      {
        heading: "课文三 · 马克和小夏在聊动物",
        zh: "马克：上个月我去了趟北京动物园，那里约有500种动物，听导游说北京动物园是亚洲最大的动物园之一。\n小夏：去年放暑假的时候，我也去过一次，我在那儿看了马、熊猫、老虎等动物。我特别喜欢熊猫，可惜它们当时大多在睡觉。\n马克：我去的那天正赶上六一儿童节，许多父母带着孩子去动物园。入口处排队的人很多，动物园里热闹极了。熊猫们也变得特别活泼，我还给它们照了不少照片呢。\n小夏：大熊猫身子胖胖的，样子可爱极了。\n马克：不过，它们数量不多，现在全世界一共才有一千多只吧。\n小夏：以前只有中国有大熊猫，为了表示友好，从1957年开始，中国把大熊猫作为礼物送给其他一些国家。现在，很多国家的人们在本国都能看到大熊猫了。",
        vi: "Mark: Tháng trước mình đã đi một chuyến đến vườn thú Bắc Kinh, ở đó có khoảng 500 loài động vật, nghe hướng dẫn viên nói vườn thú Bắc Kinh là một trong những vườn thú lớn nhất châu Á.\nTiểu Hạ: Hè năm ngoái lúc được nghỉ, mình cũng đã đi một lần, ở đó mình đã xem ngựa, gấu trúc, hổ và nhiều loài khác. Mình đặc biệt thích gấu trúc, tiếc là lúc đó phần lớn chúng đang ngủ.\nMark: Hôm mình đi đúng vào ngày Quốc tế thiếu nhi 1/6, rất nhiều bố mẹ dẫn con đến vườn thú. Ở cổng vào có rất nhiều người xếp hàng, trong vườn thú náo nhiệt vô cùng. Lũ gấu trúc cũng trở nên đặc biệt hoạt bát, mình còn chụp cho chúng khá nhiều ảnh nữa.\nTiểu Hạ: Gấu trúc mình béo tròn, trông đáng yêu cực kỳ.\nMark: Có điều số lượng của chúng không nhiều, hiện nay cả thế giới tổng cộng chỉ có hơn một nghìn con thôi.\nTiểu Hạ: Trước đây chỉ Trung Quốc có gấu trúc lớn, để thể hiện tình hữu nghị, từ năm 1957 Trung Quốc đã lấy gấu trúc làm quà tặng cho một số nước khác. Bây giờ, người dân nhiều nước đã có thể xem gấu trúc ngay tại nước mình.",
        questions: ["马克什么时候去的北京动物园？他去那儿做什么了？", "请介绍一下小夏最喜欢的动物。"],
      },
      {
        heading: "课文四 · 植物之间的竞争",
        zh: "不仅社会上的人与人之间有竞争，森林里的各种植物之间也有竞争，这一点儿也不奇怪。植物会为了阳光、空气和水而竞争。一些高大的植物往往能获得更多的阳光、空气和水，而剩下的一些比较低矮的植物就只能长在这些高大植物的下面。由于气候条件不同，世界各地植物叶子的样子也很不相同。在暖和、水分比较多的地方，叶子往往长得又大又厚；在阳光特别厉害、水分少的地方，叶子就会长得又细又长。",
        vi: "Không chỉ giữa người với người trong xã hội mới có cạnh tranh, giữa các loài thực vật trong rừng cũng có cạnh tranh, điều này chẳng có gì lạ cả. Thực vật cạnh tranh nhau vì ánh nắng, không khí và nước. Một số cây cao lớn thường có thể giành được nhiều ánh nắng, không khí và nước hơn, còn một số cây tương đối thấp bé còn lại thì chỉ có thể mọc bên dưới những cây cao lớn ấy. Do điều kiện khí hậu khác nhau, hình dạng lá cây ở các nơi trên thế giới cũng rất khác nhau. Ở những nơi ấm áp, nhiều nước, lá cây thường mọc vừa to vừa dày; ở những nơi nắng đặc biệt gắt, ít nước, lá cây sẽ mọc vừa mảnh vừa dài.",
        questions: ["植物之间会竞争吗？它们会为了什么而竞争？", "为什么世界各地植物叶子的样子会不同？有什么不同？"],
      },
      {
        heading: "课文五 · 美丽的海底世界",
        zh: "地球上大约71%的地方是蓝色的海洋，在美丽的海底世界里，生活着各种各样的植物和动物。我们小时候都听过美人鱼的故事，其实真正的海底世界比故事里写的更美。科学研究发现，海洋底部看上去非常安静，然而却不是一点儿声音也没有，海底的动物们一直在“说话”，只不过人的耳朵是听不到的。另外，就算在几公里深的海底也仍然能看到东西，许多鱼会发出各种颜色的亮光，像一个个排列起来的灯，美极了，就像在梦里一样。",
        vi: "Khoảng 71% bề mặt Trái Đất là đại dương xanh, trong thế giới đáy biển xinh đẹp có đủ loại thực vật và động vật sinh sống. Hồi nhỏ chúng ta đều đã nghe chuyện nàng tiên cá, thật ra thế giới đáy biển thật còn đẹp hơn trong truyện. Nghiên cứu khoa học phát hiện rằng đáy đại dương trông có vẻ rất yên tĩnh, nhưng không phải là không có chút âm thanh nào; các loài vật dưới đáy biển luôn “nói chuyện”, chỉ có điều tai người không nghe thấy được. Ngoài ra, dù ở đáy biển sâu mấy ki-lô-mét vẫn có thể nhìn thấy đồ vật, nhiều loài cá phát ra ánh sáng đủ màu sắc, giống như từng ngọn đèn xếp thành hàng, đẹp vô cùng, cứ như ở trong mơ vậy.",
        questions: ["海洋在地球上占多大比例？海底世界里有什么？", "科学研究发现，在海洋底部能听到什么？能看到什么？"],
      },
    ],
    notes: [
      "安娜 (Ānnà): An-na. 香山 (Xiāng Shān): Hương Sơn, núi ở ngoại ô Bắc Kinh, nổi tiếng ngắm lá đỏ mùa thu. 长城 (Chángchéng): Vạn Lý Trường Thành.",
      "亚洲 (Yàzhōu): châu Á. 六一儿童节 (Liùyī Értóngjié): ngày Quốc tế thiếu nhi 1/6.",
      "Văn hóa: 中国国宝大熊猫 – gấu trúc lớn là động vật được bảo vệ cấp một của Trung Quốc, được gọi là “hóa thạch sống” và “báu vật quốc gia”; 99% thức ăn là trúc, sống chủ yếu ở vùng núi Tứ Xuyên, Thiểm Tây, Cam Túc.",
    ],
  },

  grammar: [
    {
      word: "倒",
      title: "Động từ “đổ, rót” và phó từ “lại, thì lại”",
      usages: [
        {
          label: "倒 – động từ",
          explain: "Nghiêng vật chứa để đổ/rót thứ bên trong ra.",
          examples: ["麻烦你给我倒杯咖啡吧，困死我了。", "你怎么咳嗽得这么厉害？我给你倒杯水吧。"],
        },
        {
          label: "倒 – phó từ (trái dự đoán)",
          explain: "Diễn tả ý trái ngược với dự đoán.",
          examples: ["我以为坐出租车会快些，没想到倒比骑车还慢。"],
        },
        {
          label: "倒 – phó từ (trách móc)",
          explain: "Hàm chứa ngữ khí trách móc.",
          examples: ["你说得倒是容易，做起来可就难了！"],
        },
        {
          label: "倒是 – phó từ (nhượng bộ)",
          explain: "Chỉ sự nhượng bộ; đôi khi dùng 倒是 thay cho 倒.",
          examples: ["去长城倒是一个好主意，就是太远了。"],
        },
      ],
      note: "倒 động từ đọc dào (rót, đổ); phó từ 倒 / 倒是 đứng trước động từ hoặc tính từ.",
    },
    {
      word: "干",
      title: "Động từ 干 (gàn) “làm”",
      usages: [
        {
          label: "干 (gàn) – động từ",
          explain: "Làm (việc gì), diễn tả ý dấn thân vào sự nghiệp, công việc hay hoạt động nào đó.",
          examples: [
            "每次你让它干什么，它就像能听懂你的话一样去做。",
            "A：你这篇报道写得很好，以后要继续努力。B：谢谢您，我一定会好好儿干的。",
            "干工作的时候一定要认真、仔细，要注意到计划上的每一个地方，否则就很容易出问题。",
          ],
        },
        {
          label: "干 (gān) – tính từ / 干儿 (gānr) – danh từ",
          explain: "Đọc gān là tính từ, nghĩa là khô (không có hoặc rất ít nước). 干儿 (gānr) là danh từ, nghĩa là thực phẩm khô.",
          examples: ["又忘记带伞了吧？头发都湿了，先把头发擦干，别感冒了。", "这牛肉干味道真不错，在哪儿买的？"],
        },
      ],
      note: "Chú ý phân biệt âm đọc: 干 gàn (làm) – 干 gān (khô) – 牛肉干 niúròugānr (thịt bò khô).",
    },
    {
      word: "趟",
      title: "Lượng từ 趟 – số lần đi lại",
      usages: [
        {
          label: "Cách dùng",
          explain: "Lượng từ chỉ số lần đi lại (một đi một về).",
          examples: [
            "上个月我去了趟北京动物园，那里约有500种动物。",
            "我要出趟差，你能帮我照顾一下我的小狗吗？",
            "我打算先回一趟家，看看我奶奶，然后回学校准备研究生考试。",
          ],
        },
        {
          label: "Điểm giống 趟 – 次",
          explain: "Đều chỉ số lần của động tác, dùng với các động từ đi lại như 来、去、走、跑、接、送…, thường thay thế cho nhau được.",
          examples: ["今年寒假我去广东玩儿了一趟/次。"],
        },
        {
          label: "Điểm khác 趟 – 次",
          explain: "趟 nhấn mạnh “một đi một về”, chỉ dùng với hành động đi lại; 次 chỉ số lần lặp lại, dùng được cả với 问、说、看、讨论…; 趟 còn dùng cho xe buýt, tàu chạy theo lịch và tuyến cố định (tương tự 辆、列), 次 không dùng như vậy.",
          examples: ["回来的路上我顺便去了趟银行。", "小时候，爷爷差不多每个月都带我去看一次京剧。", "你这么着急去哪儿啊？我刚才叫了你两次，你都没听到。", "附近有好几趟公共汽车都能到我工作的公司。"],
        },
      ],
      note: "比一比 趟 – 次: 去了一趟/次北京动物园 (đều được); 去趟超市 (趟); 打了好几次电话 (次); 最后一趟公共汽车 (趟); 保证你一次就能学会 (次).",
    },
    {
      word: "为了……而……",
      title: "Cấu trúc “vì… mà…”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Vế trước chỉ mục đích của hành động trong vế sau. Sau 为了 là từ hoặc cụm từ.",
          examples: [
            "植物会为了阳光、空气和水而竞争。",
            "北风与南风为了比谁更有能力而吵了起来。它们决定，谁能把人们身上的大衣脱掉，谁就赢了。",
            "自然界中，不少动物和植物为了保护自己而改变身体的颜色或样子，使自己成为周围环境的一部分。",
          ],
        },
      ],
      note: "为了 + mục đích + 而 + động từ (hành động). Thường dùng trong văn viết.",
    },
    {
      word: "仍然",
      title: "Phó từ “vẫn”",
      usages: [
        {
          label: "Cách dùng",
          explain: "Chỉ tình huống như cũ, không có sự thay đổi.",
          examples: [
            "就算在几公里深的海底也仍然能看到东西。",
            "人比动物聪明，但动物仍然有很多值得人学习的地方。",
            "足球决赛时，如果90分钟后仍然是0比0，按照规定，可以进行加时赛来决定输赢。",
          ],
        },
      ],
      note: "Thường đi với 就算/尽管/虽然…… ở vế trước: 就算……也仍然……",
    },
  ],

  wordChoice: [
    { sentence: "这本小说就___十几页了，我想看看最后到底怎么样了。", options: W_EX1, answer: "剩" },
    { sentence: "刚才听___说明天可能会下大雨，足球比赛恐怕要推迟了。", options: W_EX1, answer: "广播" },
    { sentence: "您看这个沙发怎么样？我们年___有活动，正在打折。", options: W_EX1, answer: "底" },
    { sentence: "只要能在自己的工作中取得好的成绩，都应该赢得___。", options: W_EX1, answer: "尊重" },
    { sentence: "每当后面汽车的灯光___到它时，它就会反光。", options: W_EX1, answer: "照" },
    { sentence: "A：下了雨，___多了，前几天实在是太热了。", options: W_EX2, answer: "凉快" },
    { sentence: "B：不，我从来没参加过，我不太喜欢___。", options: W_EX2, answer: "热闹" },
    { sentence: "B：好，坐久了确实有些___。", options: W_EX2, answer: "难受" },
    { sentence: "B：我，我喜欢___可爱的女孩子。", options: W_EX2, answer: "活泼" },
    { sentence: "A：今天很___，外面一点儿也不冷，你不用穿这么多衣服。", options: W_EX2, answer: "暖和" },
    { sentence: "真是没想到，四年的大学生活___这么快就结束了！", options: W_EXT, answer: "竟然" },
    { sentence: "B：不知道，___加速，估计是新手，刚学会开车。", options: W_EXT, answer: "突然" },
    { sentence: "只要你不放弃努力，就___有希望。", options: W_EXT, answer: "仍然" },
    { sentence: "___不能重新来过，那么就把那些过去的事情放在心里，当成一种回忆。", options: W_EXT, answer: "既然" },
  ],

  practice: [
    {
      id: "listen", kind: "listen-pick", icon: "🎧", title: "Phần 1 · Nghe - chọn chữ Hán", points: 8,
      subtitle: "Bấm 🔊 nghe từ, sau đó chọn đúng chữ Hán tương ứng.",
      items: [
        { vocabId: 1, distractors: [2, 27, 20] },
        { vocabId: 4, distractors: [5, 26, 29] },
        { vocabId: 13, distractors: [14, 10, 11] },
        { vocabId: 15, distractors: [16, 18, 19] },
        { vocabId: 17, distractors: [28, 25, 3] },
        { vocabId: 24, distractors: [23, 33, 26] },
        { vocabId: 28, distractors: [25, 30, 31] },
        { vocabId: 32, distractors: [35, 36, 37] },
      ],
    },
    {
      id: "pinyin", kind: "pinyin", icon: "✍️", title: "Phần 2 · Điền pinyin", points: 8,
      subtitle: "Gõ pinyin không dấu thanh cũng được chấp nhận, nhưng cố gắng gõ đúng dấu thanh nhé.",
      vocabIds: [2, 13, 14, 19, 20, 24, 27, 33],
    },
    {
      id: "order", kind: "order", icon: "🧩", title: "Phần 3 · Sắp xếp câu", points: 10,
      subtitle: "Bấm lần lượt các mảnh theo đúng thứ tự để ghép thành câu. Bấm vào mảnh đã chọn để bỏ ra.",
      items: [
        { tokens: ["风一刮，", "草地上", "就会有", "一层厚厚的", "黄叶", "。"], answer: "风一刮，草地上就会有一层厚厚的黄叶。", vi: "Gió vừa thổi là trên bãi cỏ có ngay một lớp lá vàng dày." },
        { tokens: ["只要", "稍微花点儿时间", "教教它，", "它就能", "学会很多东西", "。"], answer: "只要稍微花点儿时间教教它，它就能学会很多东西。", vi: "Chỉ cần bỏ ra một chút thời gian dạy nó là nó có thể học được rất nhiều thứ." },
        { tokens: ["上个月", "我", "去了", "趟", "北京动物园", "。"], answer: "上个月我去了趟北京动物园。", vi: "Tháng trước tôi đã đi một chuyến đến vườn thú Bắc Kinh." },
        { tokens: ["植物", "会", "为了", "阳光、空气和水", "而", "竞争", "。"], answer: "植物会为了阳光、空气和水而竞争。", vi: "Thực vật cạnh tranh nhau vì ánh nắng, không khí và nước." },
        { tokens: ["就算在", "几公里深的海底", "也", "仍然", "能看到东西", "。"], answer: "就算在几公里深的海底也仍然能看到东西。", vi: "Dù ở đáy biển sâu mấy ki-lô-mét vẫn có thể nhìn thấy đồ vật." },
      ],
    },
    {
      id: "fill-1", kind: "fill-blanks", icon: "💬", title: "Phần 4 · Hoàn thành bài khóa (bài 1–3)", points: 10,
      subtitle: "Bấm vào chỗ trống rồi bấm từ đúng trong ngân hàng từ. Bấm lại chỗ đã điền để xóa.",
      passages: [
        { title: "Bài 1 · Nói chuyện thời tiết", text: "小夏：最近天气越来越{{c1}}了，风一刮，草地上就会有一层厚厚的黄叶。\n安娜：这几天香山特别{{c2}}，咱们今天也去看看吧。\n小夏：你看天上的{{c3}}，今天肯定有大雨。{{c4}}里说长城也有不少专门看红叶的好地方。\n安娜：真可惜，我还想多{{c5}}点儿香山的照片呢。去长城{{c6}}是一个好主意。" },
        { title: "Bài 2–3 · Chó cưng và vườn thú", text: "小林：每次见了都想{{c7}}一抱它。每次你让它{{c8}}什么，它就像能听懂你的话一样去做。\n小李：应该耐心地一遍一遍地教给它，然后它就会{{c9}}按照你的要求做了。\n马克：入口处{{c10}}的人很多，动物园里热闹极了。" },
      ],
      answers: { c1: "凉快", c2: "热闹", c3: "云", c4: "广播", c5: "照", c6: "倒", c7: "抱", c8: "干", c9: "严格", c10: "排队" },
      bank: ["凉快", "热闹", "云", "广播", "照", "倒", "抱", "干", "严格", "排队", "暖和", "活泼", "难受"],
    },
    {
      id: "fill-2", kind: "fill-blanks", icon: "📄", title: "Phần 5 · Hoàn thành bài khóa (bài 4–5)", points: 10,
      subtitle: "Điền từ thích hợp vào đoạn văn về thực vật trong rừng và thế giới đáy biển.",
      passages: [
        { title: "Bài 4 · Cạnh tranh giữa thực vật", text: "不仅{{e1}}上的人与人之间有{{e2}}，{{e3}}里的各种植物之间也有竞争。一些高大的植物往往能获得更多的阳光、空气和水，而{{e4}}下的一些比较低矮的植物就只能长在这些高大植物的下面。在{{e5}}、水分比较多的地方，叶子往往长得又大又厚。" },
        { title: "Bài 5 · Thế giới đáy biển", text: "地球上大约71%的地方是蓝色的{{e6}}，在美丽的海{{e7}}世界里，生活着各种各样的植物和动物。就算在几{{e8}}深的海底也{{e9}}能看到东西，许多鱼会发出各种颜色的亮光，像一个个{{e10}}起来的灯。" },
      ],
      answers: { e1: "社会", e2: "竞争", e3: "森林", e4: "剩", e5: "暖和", e6: "海洋", e7: "底", e8: "公里", e9: "仍然", e10: "排列" },
      bank: ["社会", "竞争", "森林", "剩", "暖和", "海洋", "底", "公里", "仍然", "排列", "梦", "美人鱼", "凉快"],
    },
    {
      id: "zh-vi", kind: "translate-zh-vi", icon: "🇨🇳", title: "Phần 6 · Dịch Trung → Việt", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Việt. Hệ thống chấm theo từ khóa chính, hãy so sánh với bản dịch gợi ý.",
      items: [
        { zh: "最近天气越来越凉快了，看来秋天已经到了。", vi: "Dạo này trời ngày càng mát mẻ, xem ra mùa thu đã đến rồi.", keywords: ["mát", "mùa thu"] },
        { zh: "狗是我们的好朋友，它能明白人的心情。", vi: "Chó là bạn tốt của chúng ta, nó hiểu được tâm trạng của con người.", keywords: ["chó", "bạn", "tâm trạng"] },
        { zh: "入口处排队的人很多，动物园里热闹极了。", vi: "Ở cổng vào có rất nhiều người xếp hàng, trong vườn thú náo nhiệt vô cùng.", keywords: ["cổng vào", "xếp hàng", "vườn thú", "náo nhiệt"] },
        { zh: "植物会为了阳光、空气和水而竞争。", vi: "Thực vật cạnh tranh nhau vì ánh nắng, không khí và nước.", keywords: ["thực vật", "cạnh tranh", "không khí", "nước"] },
        { zh: "地球上大约71%的地方是蓝色的海洋。", vi: "Khoảng 71% bề mặt Trái Đất là đại dương xanh.", keywords: ["71%", "trái đất", "đại dương"] },
      ],
    },
    {
      id: "vi-zh", kind: "translate-vi-zh", icon: "🇻🇳", title: "Phần 7 · Dịch Việt → Trung", points: 6,
      subtitle: "Dịch các câu sau sang tiếng Trung, dùng từ vựng – ngữ pháp đã học trong bài.",
      items: [
        { vi: "Tháng trước tôi đã đi một chuyến đến vườn thú Bắc Kinh.", answers: ["上个月我去了趟北京动物园。", "上个月我去了一趟北京动物园。"] },
        { vi: "Phiền bạn rót cho tôi một cốc cà phê.", answers: ["麻烦你给我倒杯咖啡。", "麻烦你给我倒杯咖啡吧。", "麻烦你给我倒一杯咖啡。"] },
        { vi: "Đi Trường Thành thì lại là một ý hay.", answers: ["去长城倒是一个好主意。", "去长城倒是个好主意。"] },
        { vi: "Con người thông minh hơn động vật, nhưng động vật vẫn có nhiều điều đáng để con người học hỏi.", answers: ["人比动物聪明，但动物仍然有很多值得人学习的地方。"] },
        { vi: "Gấu trúc lớn trông đáng yêu vô cùng.", answers: ["大熊猫样子可爱极了。", "大熊猫的样子可爱极了。", "大熊猫可爱极了。"] },
      ],
    },
    {
      id: "true-false", kind: "true-false", icon: "✅", title: "Phần 8 · Đúng / Sai", points: 8,
      subtitle: "Dựa vào nội dung bài khóa, chọn Đúng hoặc Sai.",
      items: [
        { q: "小夏觉得今天会下大雨，所以不想去香山。", a: true },
        { q: "安娜和小夏决定明天去长城。", a: false },
        { q: "小李说教狗只要教一次就够了。", a: false },
        { q: "北京动物园约有500种动物。", a: true },
        { q: "小夏去动物园的时候，熊猫们特别活泼。", a: false },
        { q: "从1957年开始，中国把大熊猫作为礼物送给其他一些国家。", a: true },
        { q: "在阳光特别厉害、水分少的地方，叶子往往又大又厚。", a: false },
        { q: "海底的动物们一直在“说话”，只不过人的耳朵听不到。", a: true },
      ],
    },
    {
      id: "dictation", kind: "dictation", icon: "🎙️", title: "Phần 9 · Nghe - viết (chính tả)", points: 10,
      subtitle: "Bấm 🔊 nghe câu (nghe lại bao nhiêu lần cũng được), gõ lại đúng chữ Hán và dấu câu.",
      items: [
        "最近天气越来越凉快了。",
        "我还想多照点儿香山的照片呢。",
        "上个月我去了趟北京动物园。",
        "大熊猫身子胖胖的，样子可爱极了。",
        "植物会为了阳光、空气和水而竞争。",
      ],
    },
    {
      id: "essay", kind: "essay", icon: "📝", title: "Phần 10 · Viết đoạn văn", points: 7,
      subtitle: "Tự luận – hệ thống chỉ chấm sơ bộ độ dài và từ vựng sử dụng.",
      prompt: "动物、植物和海洋都是大自然的一部分。请写一写：你最喜欢的动物或植物是什么？随着社会的发展，它们发生了哪些变化？我们应该怎样保护大自然？ (Viết về loài động vật hoặc thực vật bạn thích nhất, những thay đổi của chúng cùng sự phát triển của xã hội và cách chúng ta bảo vệ thiên nhiên.)",
      requirement: "Yêu cầu: viết ít nhất 80 chữ Hán, sử dụng tối thiểu 5 từ vựng và 2 điểm ngữ pháp của bài 17 (倒, 干, 趟, 为了……而……, 仍然).",
      minChars: 80,
      minVocab: 5,
      grammarMarkers: ["倒", "干", "趟", "为了", "而", "仍然"],
      minGrammar: 2,
      sample: "我最喜欢的动物是大熊猫。去年放暑假的时候，我去了一趟北京动物园。那天动物园里特别热闹，入口处排队的人很多。大熊猫身子胖胖的，样子可爱极了，有的还很活泼。可是大熊猫的数量不多，现在仍然需要人们的保护。随着社会的发展，森林越来越少，很多动物没有地方生活了。我觉得我们不应该为了钱而破坏森林和海洋。保护自然，人人都能干点儿什么，比如少用塑料袋、节约用水。",
    },
    {
      id: "gram-1", kind: "grammar-fill", icon: "🧠", title: "Phần 11 · Ngữ pháp: 趟 / 次", points: 6,
      subtitle: "Chọn 趟 hoặc 次 cho mỗi chỗ trống.",
      grammarWord: "趟 / 次",
      options: ["趟", "次"],
      items: [
        { q: "我们去___超市吧，明天出去玩儿得买点儿饼干和面包。", answers: ["趟"] },
        { q: "中午我给你打了好几___电话，你怎么都不接呢？", answers: ["次"] },
        { q: "他没赶上最后一___公共汽车，只好坐出租车回家了。", answers: ["趟"] },
        { q: "西红柿鸡蛋汤的做法很简单，我保证你一___就能学会。", answers: ["次"] },
        { q: "回来的路上我顺便去了___银行。", answers: ["趟"] },
        { q: "小时候，爷爷差不多每个月都带我去看一___京剧。", answers: ["次"] },
        { q: "你这么着急去哪儿啊？我刚才叫了你两___，你都没听到。", answers: ["次"] },
        { q: "附近有好几___公共汽车都能到我工作的公司。", answers: ["趟"] },
      ],
    },
    {
      id: "gram-2", kind: "grammar-fill", icon: "🧠", title: "Phần 12 · Ngữ pháp: 仍然", points: 6,
      subtitle: "Điền phó từ thích hợp vào chỗ trống (仍然 – vẫn, như cũ).",
      grammarWord: "仍然",
      items: [
        { q: "就算在几公里深的海底也___能看到东西。", answers: ["仍然"] },
        { q: "人比动物聪明，但动物___有很多值得人学习的地方。", answers: ["仍然"] },
        { q: "如果90分钟后___是0比0，可以进行加时赛来决定输赢。", answers: ["仍然"] },
        { q: "现在回忆起来，我___觉得那是一次愉快的旅行。", answers: ["仍然"] },
        { q: "我又跟我丈夫谈了这件事，他___不同意。", answers: ["仍然"] },
        { q: "尽管这只是一场误会，她___很生气。", answers: ["仍然"] },
        { q: "已经十点了，他___在睡觉。", answers: ["仍然"] },
        { q: "很多人试着对梦进行解释，可是到现在___没有一个科学的说法。", answers: ["仍然"] },
      ],
    },
    {
      id: "gram-3", kind: "grammar-fill", icon: "🧠", title: "Phần 13 · Ngữ pháp: 为了……而……", points: 5,
      subtitle: "Điền 为了 hoặc 而 vào chỗ trống để hoàn thành cấu trúc 为了……而…….",
      grammarWord: "为了……而……",
      items: [
        { q: "植物会为了阳光、空气和水___竞争。", answers: ["而"] },
        { q: "北风与南风___比谁更有能力而吵了起来。", answers: ["为了"] },
        { q: "不少动物和植物为了保护自己___改变身体的颜色或样子。", answers: ["而"] },
        { q: "胖一点儿没关系，千万不要为了减肥___不吃饭。", answers: ["而"] },
        { q: "我们不应该为了钱___工作，应该让钱为我们工作。", answers: ["而"] },
        { q: "不要___工作而忘了陪陪父母。", answers: ["为了"] },
        { q: "他为了考上好大学___努力学习。", answers: ["而"] },
        { q: "我们不能___赚钱而破坏环境。", answers: ["为了"] },
      ],
    },
  ],
};
