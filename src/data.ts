export interface Character {
  id: string;
  name: string;
  band: string;
  avatar: string;
  color: string;
}

export interface Band {
  id: string;
  name: string;
  color: string;
}

export interface Episode {
  id: number;
  title: string;
  characters: string[]; // Character IDs
  highlights: string[];
}

export const BANDS: Band[] = [
  { id: 'popipa', name: "Poppin'Party", color: '#FF3377' },
  { id: 'afterglow', name: 'Afterglow', color: '#EE3344' },
  { id: 'pastel-palettes', name: 'Pastel*Palettes', color: '#33DDAA' },
  { id: 'roselia', name: 'Roselia', color: '#3344AA' },
  { id: 'harohapi', name: 'Hello, Happy World!', color: '#FFDD00' },
  { id: 'monica', name: 'Morfonica', color: '#D1ECFF' },
  { id: 'ras', name: 'RAISE A SUILEN', color: '#33CCCC' },
  { id: 'mygo', name: 'MyGO!!!!!', color: '#3388BB' },
  { id: 'avemujica', name: 'Ave Mujica', color: '#881144' },
  { id: 'mewtype', name: '梦限大 MewType', color: '#FF7788' },
  { id: 'special', name: '特殊', color: '#666666' },
];

export const CHARACTERS: Character[] = [
  // Poppin'Party
  { id: 'kasumi', name: '户山香澄', band: 'popipa', avatar: '/avatars/kasumi.webp', color: '#FF5522' },
  { id: 'tae', name: '花园多惠', band: 'popipa', avatar: '/avatars/tae.webp', color: '#0077DD' },
  { id: 'rimi', name: '牛込里美', band: 'popipa', avatar: '/avatars/rimi.webp', color: '#FF55BB' },
  { id: 'saaya', name: '山吹沙绫', band: 'popipa', avatar: '/avatars/saaya.webp', color: '#FFCC11' },
  { id: 'arisa', name: '市谷有咲', band: 'popipa', avatar: '/avatars/arisa.webp', color: '#AA66DD' },
  // Afterglow
  { id: 'ran', name: '美竹兰', band: 'afterglow', avatar: '/avatars/ran.webp', color: '#EE0022' },
  { id: 'moca', name: '青叶摩卡', band: 'afterglow', avatar: '/avatars/moca.webp', color: '#00CCAA' },
  { id: 'himari', name: '上原绯玛丽', band: 'afterglow', avatar: '/avatars/himari.webp', color: '#FF9999' },
  { id: 'tomoe', name: '宇田川巴', band: 'afterglow', avatar: '/avatars/tomoe.webp', color: '#BB0033' },
  { id: 'tsugumi', name: '羽泽鸫', band: 'afterglow', avatar: '/avatars/tsugumi.webp', color: '#FFEE88' },
  // Pastel*Palettes
  { id: 'aya', name: '丸山彩', band: 'pastel-palettes', avatar: '/avatars/aya.webp', color: '#FF88BB' },
  { id: 'hina', name: '冰川日菜', band: 'pastel-palettes', avatar: '/avatars/hina.webp', color: '#55DDEE' },
  { id: 'chisato', name: '白鹭千圣', band: 'pastel-palettes', avatar: '/avatars/chisato.webp', color: '#FFEEAA' },
  { id: 'maya', name: '大和麻弥', band: 'pastel-palettes', avatar: '/avatars/maya.webp', color: '#99DD88' },
  { id: 'eve', name: '若宫伊芙', band: 'pastel-palettes', avatar: '/avatars/eve.webp', color: '#DDBBFF' },
  // Roselia
  { id: 'yukina', name: '凑友希那', band: 'roselia', avatar: '/avatars/yukina.webp', color: '#881188' },
  { id: 'sayo', name: '冰川纱夜', band: 'roselia', avatar: '/avatars/sayo.webp', color: '#00AABB' },
  { id: 'lisa', name: '今井莉莎', band: 'roselia', avatar: '/avatars/lisa.webp', color: '#DD2200' },
  { id: 'ako', name: '宇田川亚子', band: 'roselia', avatar: '/avatars/ako.webp', color: '#DD0088' },
  { id: 'rinko', name: '白金燐子', band: 'roselia', avatar: '/avatars/rinko.webp', color: '#BBBBBB' },
  // Hello, Happy World!
  { id: 'kokoro', name: '弦卷心', band: 'harohapi', avatar: '/avatars/kokoro.webp', color: '#FFEE22' },
  { id: 'kaoru', name: '濑田薰', band: 'harohapi', avatar: '/avatars/kaoru.webp', color: '#AA33CC' },
  { id: 'hagumi', name: '北泽育美', band: 'harohapi', avatar: '/avatars/hagumi.webp', color: '#ff6600' },
  { id: 'kanon', name: '松原花音', band: 'harohapi', avatar: '/avatars/kanon.webp', color: '#44DDFF' },
  // 奥泽美咲/米歇尔（合并为一个角色）
  { id: 'misaki', name: '奥泽美咲/米歇尔', band: 'harohapi', avatar: '/avatars/michelle.webp', color: '#006699' },
  // Morfonica
  { id: 'mashiro', name: '仓田真白', band: 'monica', avatar: '/avatars/mashiro.webp', color: '#6677CC' },
  { id: 'touko', name: '桐谷透子', band: 'monica', avatar: '/avatars/touko.webp', color: '#EE6666' },
  { id: 'nanami', name: '广町七深', band: 'monica', avatar: '/avatars/nanami.webp', color: '#EE7744' },
  { id: 'tsukushi', name: '二叶筑紫', band: 'monica', avatar: '/avatars/tsukushi.webp', color: '#EE7788' },
  { id: 'rui', name: '八潮瑠唯', band: 'monica', avatar: '/avatars/rui.webp', color: '#669988' },
  // RAISE A SUILEN
  { id: 'layer', name: 'LAYER', band: 'ras', avatar: '/avatars/layer.webp', color: '#CC0000' },
  { id: 'lock', name: 'LOCK', band: 'ras', avatar: '/avatars/lock.webp', color: '#AAEE22' },
  { id: 'masking', name: 'MASKING', band: 'ras', avatar: '/avatars/masking.webp', color: '#EEBB44' },
  { id: 'pareo', name: 'PAREO', band: 'ras', avatar: '/avatars/pareo.webp', color: '#FF99BB' },
  { id: 'chu2', name: 'CHU²', band: 'ras', avatar: '/avatars/chu2.webp', color: '#00BBFF' },
  // MyGO!!!!!
  { id: 'tomori', name: '高松灯', band: 'mygo', avatar: '/avatars/tomori.webp', color: '#77BBDD' },
  { id: 'anon', name: '千早爱音', band: 'mygo', avatar: '/avatars/anon.webp', color: '#FF8899' },
  { id: 'rana', name: '要乐奈', band: 'mygo', avatar: '/avatars/rana.webp', color: '#77DD77' },
  { id: 'taki', name: '椎名立希', band: 'mygo', avatar: '/avatars/taki.webp', color: '#7777AA' },
  { id: 'soyo', name: '长崎爽世', band: 'mygo', avatar: '/avatars/soyo.webp', color: '#FFDD88' },
  // Ave Mujica
  { id: 'uika', name: '三角初华', band: 'avemujica', avatar: '/avatars/uika.webp', color: '#BB9955' },
  { id: 'mutsumi', name: '若叶睦', band: 'avemujica', avatar: '/avatars/mutsumi.webp', color: '#779977' },
  { id: 'umiri', name: '八幡海铃', band: 'avemujica', avatar: '/avatars/umiri.webp', color: '#335566' },
  { id: 'nyamu', name: '祐天寺若麦', band: 'avemujica', avatar: '/avatars/nyamu.webp', color: '#AA4477' },
  { id: 'sakiko', name: '丰川祥子', band: 'avemujica', avatar: '/avatars/sakiko.webp', color: '#7799CC' },
  // MewType
  { id: 'arale', name: '仲町阿拉蕾', band: 'mewtype', avatar: '/avatars/arale.webp', color: '#FFEE55' },
  { id: 'nonoka', name: '宫永野乃花', band: 'mewtype', avatar: '/avatars/nonoka.webp', color: '#FFBBCC' },
  { id: 'ritsu', name: '峰月律', band: 'mewtype', avatar: '/avatars/ritsu.webp', color: '#4477CC' },
  { id: 'miyako', name: '藤都子', band: 'mewtype', avatar: '/avatars/miyako.webp', color: '#9977CC' },
  { id: 'yuno', name: '千石由乃', band: 'mewtype', avatar: '/avatars/yuno.webp', color: '#EE5577' },
  // Special（不计入总排行）
  { id: 'marina', name: '月岛麻里奈', band: 'special', avatar: '/avatars/marina.png', color: '#666666' },
  { id: 'box', name: '纸箱', band: 'special', avatar: '/avatars/box.png', color: '#666666' },
  { id: 'cornet', name: '巧克力螺(活)', band: 'special', avatar: '/avatars/cornet.png', color: '#666666' },
  { id: 'mortis', name: 'Mortis', band: 'special', avatar: '/avatars/mortis.png', color: '#666666' },
];

export const EPISODES: Episode[] = [
  { id: 1, title: "第1期", characters: ['kasumi', 'yukina', 'ran', 'aya', 'kokoro', 'mashiro', 'layer', 'tomori', 'uika'], highlights: ["超伟大对吧，九人九色", "啥是梦限大"] },
  { id: 2, title: "第2期", characters: ['kasumi', 'tae', 'rimi', 'saaya', 'arisa'], highlights: ["Poppin'Party 全员登场","ksar是真的"] },
  { id: 3, title: "第3期", characters: ['ran', 'moca', 'himari', 'tomoe', 'tsugumi'], highlights: ["Afterglow 全员登场","把天台当家了","依旧一直摸兜里"] },
  { id: 4, title: "第4期", characters: ['tomori', 'anon', 'rana', 'taki', 'soyo'], highlights: ["MyGO!!!!! 成员登场", "直到25集仍然是素世唯一一次登场","企鹅依旧捡石头"] },
  { id: 5, title: "第5期", characters: ['kokoro', 'kaoru', 'hagumi', 'kanon', 'misaki'], highlights: ["时隔3年，HHW和弦卷家再次于邦邦动画出场","给全宇宙带来笑容"] },
  { id: 6, title: "第6期", characters: ['yukina', 'sayo', 'lisa', 'ako', 'rinko'], highlights: ["Roselia 全员登场","好强的压","事已至此，先吃饭吧"] },
  { id: 7, title: "第7期", characters: ['mashiro', 'touko', 'nanami', 'tsukushi', 'rui'], highlights: ["Morfonica 全员登场","破茧失败差点成蝶"] },
  { id: 8, title: "第8期", characters: ['aya', 'hina', 'chisato', 'maya', 'eve'], highlights: ["Pastel*Palettes 全员登场","大脸盘子hina，鉴定为薯条吃多了"] },
  { id: 9, title: "第9期", characters: ['layer', 'lock', 'masking', 'pareo', 'chu2'], highlights: ["RAISE A SUILEN 全员登场","全体出动.jpg","拉面仙人、牛肉干仙人"] },
  { id: 10, title: "第10期", characters: ['uika', 'mutsumi', 'umiri', 'nyamu', 'sakiko', 'mortis'], highlights: ["Ave Mujica 成员登场", "mortis原来没死"] },
  { id: 11, title: "第11期", characters: ['ran', 'moca', 'himari', 'tomoe', 'tsugumi', 'anon', 'taki'], highlights: ["Afterglow 再登场", "rikki最激动的一集"] },
  { id: 12, title: "第12期", characters: ['kasumi', 'hina', 'kokoro', 'tomori', 'uika', 'sakiko'], highlights: ["喜欢看星星的孩子们", "依旧祥压抑"] },
  { id: 13, title: "第13期", characters: ['maya', 'eve', 'hagumi', 'tsukushi', 'rui'], highlights: ["土笔哼哼哼哼可爱捏","ars一觉醒来发现盆栽不见了"] },
  { id: 14, title: "第14期", characters: ['kasumi', 'tae', 'rimi', 'saaya', 'arisa', 'marina'], highlights: ["在元祖里看PICO是什么意思", "麻里奈登场"] },
  { id: 15, title: "第15期", characters: ['lock', 'masking'], highlights: ["mas6甜甜甜", "水淹东京这一块"] },
  { id: 16, title: "第16期", characters: ['aya', 'chisato'], highlights: ["啥也不让带", "扳手可以吗"] },
  { id: 17, title: "第17期", characters: ['pareo', 'chu2'], highlights: ["广播观众全是自己人", "怎么不是团活呢"] },
  { id: 18, title: "第18期", characters: ['lisa', 'touko', 'nyamu'], highlights: ["Nyamuchi channel元祖篇","喵梦最有热度的一集"] },
  { id: 19, title: "第19期", characters: ['tae', 'saaya', 'arisa', 'yukina', 'eve', 'misaki', 'tsukushi', 'nyamu', 'box'], highlights: ["华容道有点意思", "叫声为武士道的宝可梦", "纸箱里是波奇还是疯穿箱子"] },
  { id: 20, title: "第20期", characters: ['rimi', 'rana', 'layer', 'cornet'], highlights: ["巧克力螺活了是何意味", "巧克力螺走了，我们吃什么"] },
  { id: 21, title: "第21期", characters: ['kokoro', 'kaoru', 'hagumi', 'kanon', 'misaki', 'sakiko'], highlights: ["KKR救救祥子", "原来少女乐队这么温暖的吗","美咲和米歇尔果然是两个人"] },
  { id: 22, title: "第22期", characters: ['rimi', 'ran', 'moca', 'mashiro', 'nanami'], highlights: ["小白误灭七星灯", "神秘的第六人是谁呢"] },
  { id: 23, title: "第23期", characters: ['rinko', 'rui', 'tomori', 'anon', 'mutsumi'], highlights: ["社交恐怖分子爱音"] },
  { id: 24, title: "第24期", characters: ['kasumi', 'saaya', 'arisa', 'uika', 'umiri','taki'], highlights: ["划小船三剑客", "西邦与东邦","灯压抑、祥压抑、信压抑"] },
  { id: 25, title: "第25期", characters: ['sayo', 'ako', 'tomoe','tsugumi'], highlights: ["纱夜和亚子突破一次","kdhr上身纱夜","除了悲报外，只有soyo出场一次，且一句话都没说过"] },
  { id: 26, title: "第26期", characters: ['soyo', 'aya', 'kanon', 'mutsumi', 'mortis'], highlights: ["soyo终于回来了", "花音依旧迷路"] },
  { id: 27, title: "第27期", characters: ['yukina', 'rana'], highlights: ["最省经费的一集，猫猫可爱捏", "有种看迷子集会的感觉"] },
];
