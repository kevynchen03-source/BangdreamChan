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
  { id: 'kasumi', name: '户山香澄', band: 'popipa', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/poppinparty/img_list_toyama-kasumi.webp', color: '#FF5522' },
  { id: 'tae', name: '花园多惠', band: 'popipa', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/poppinparty/img_list_hanazono-tae.webp', color: '#0077DD' },
  { id: 'rimi', name: '牛込里美', band: 'popipa', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/poppinparty/img_list_ushigome-rimi.webp', color: '#FF55BB' },
  { id: 'saaya', name: '山吹沙绫', band: 'popipa', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/poppinparty/img_list_yamabuki-saya.webp', color: '#FFCC11' },
  { id: 'arisa', name: '市谷有咲', band: 'popipa', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/poppinparty/img_list_ichigaya-arisa.webp', color: '#AA66DD' },
  // Afterglow
  { id: 'ran', name: '美竹兰', band: 'afterglow', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/afterglow/img_list_mitake-ran.webp', color: '#EE0022' },
  { id: 'moca', name: '青叶摩卡', band: 'afterglow', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/afterglow/img_list_aoba-moca.webp', color: '#00CCAA' },
  { id: 'himari', name: '上原绯玛丽', band: 'afterglow', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/afterglow/img_list_uehara-himari.webp', color: '#FF9999' },
  { id: 'tomoe', name: '宇田川巴', band: 'afterglow', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/afterglow/img_list_udagawa-tomoe.webp', color: '#BB0033' },
  { id: 'tsugumi', name: '羽泽鸫', band: 'afterglow', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/afterglow/img_list_hazawa-tsugumi.webp', color: '#FFEE88' },
  // Pastel*Palettes
  { id: 'aya', name: '丸山彩', band: 'pastel-palettes', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/pastel-palettes/img_list_maruyama-aya.webp', color: '#FF88BB' },
  { id: 'hina', name: '冰川日菜', band: 'pastel-palettes', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/pastel-palettes/img_list_hikawa-hina.webp', color: '#55DDEE' },
  { id: 'chisato', name: '白鹭千圣', band: 'pastel-palettes', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/pastel-palettes/img_list_shirasagi-chisato.webp', color: '#FFEEAA' },
  { id: 'maya', name: '大和麻弥', band: 'pastel-palettes', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/pastel-palettes/img_list_yamato-maya.webp', color: '#99DD88' },
  { id: 'eve', name: '若宫伊芙', band: 'pastel-palettes', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/pastel-palettes/img_list_wakamiya-eve.webp', color: '#DDBBFF' },
  // Roselia
  { id: 'yukina', name: '凑友希那', band: 'roselia', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/roselia/img_list_minato-yukina.webp', color: '#881188' },
  { id: 'sayo', name: '冰川纱夜', band: 'roselia', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/roselia/img_list_hikawa-sayo.webp', color: '#00AABB' },
  { id: 'lisa', name: '今井莉莎', band: 'roselia', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/roselia/img_list_imai-lisa.webp', color: '#DD2200' },
  { id: 'ako', name: '宇田川亚子', band: 'roselia', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/roselia/img_list_udagawa-ako.webp', color: '#DD0088' },
  { id: 'rinko', name: '白金燐子', band: 'roselia', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/roselia/img_list_shirokane-rinko.webp', color: '#BBBBBB' },
  // Hello, Happy World!
  { id: 'kokoro', name: '弦卷心', band: 'harohapi', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/hello-happy-world/img_list_tsurumaki-kokoro.webp', color: '#FFEE22' },
  { id: 'kaoru', name: '濑田薰', band: 'harohapi', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/hello-happy-world/img_list_seta-kaoru.webp', color: '#AA33CC' },
  { id: 'hagumi', name: '北泽育美', band: 'harohapi', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/hello-happy-world/img_list_kitazawa-hagumi.webp', color: '#ff6600' },
  { id: 'kanon', name: '松原花音', band: 'harohapi', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/hello-happy-world/img_list_matsubara-kanon.webp', color: '#44DDFF' },
  { id: 'misaki', name: '奥泽美咲', band: 'harohapi', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/hello-happy-world/img_list_okuzawa-misaki.webp', color: '#006699' },
  { id: 'michelle', name: '米歇尔', band: 'harohapi', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/hello-happy-world/img_list_michelle.webp', color: '#DD33CC' },
  // Morfonica
  { id: 'mashiro', name: '仓田真白', band: 'monica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/morfonica/img_list_kurata-mashiro.webp', color: '#6677CC' },
  { id: 'touko', name: '桐谷透子', band: 'monica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/morfonica/img_list_kirigaya-toko.webp', color: '#EE6666' },
  { id: 'nanami', name: '广町七深', band: 'monica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/morfonica/img_list_hiromachi-nanami.webp', color: '#EE7744' },
  { id: 'tsukushi', name: '二叶筑紫', band: 'monica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/morfonica/img_list_futaba-tsukushi.webp', color: '#EE7788' },
  { id: 'rui', name: '八潮瑠唯', band: 'monica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/morfonica/img_list_yashio-rui.webp', color: '#669988' },
  // RAISE A SUILEN
  { id: 'layer', name: 'LAYER', band: 'ras', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/raise-a-suilen/img_list_layer.webp', color: '#CC0000' },
  { id: 'lock', name: 'LOCK', band: 'ras', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/raise-a-suilen/img_list_lock.webp', color: '#AAEE22' },
  { id: 'masking', name: 'MASKING', band: 'ras', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/raise-a-suilen/img_list_masking.webp', color: '#EEBB44' },
  { id: 'pareo', name: 'PAREO', band: 'ras', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/raise-a-suilen/img_list_pareo.webp', color: '#FF99BB' },
  { id: 'chu2', name: 'CHU²', band: 'ras', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/raise-a-suilen/img_list_chu2.webp', color: '#00BBFF' },
  // MyGO!!!!!
  { id: 'tomori', name: '高松灯', band: 'mygo', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/mygo/img_list_takamatsu-tomori.webp', color: '#77BBDD' },
  { id: 'anon', name: '千早爱音', band: 'mygo', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/mygo/img_list_chihaya-anon.webp', color: '#FF8899' },
  { id: 'rana', name: '要乐奈', band: 'mygo', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/mygo/img_list_kaname-rana.webp', color: '#77DD77' },
  { id: 'taki', name: '椎名立希', band: 'mygo', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/mygo/img_list_shiina-taki.webp', color: '#7777AA' },
  { id: 'soyo', name: '长崎爽世', band: 'mygo', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/mygo/img_list_nagasaki-soyo.webp', color: '#FFDD88' },
  // Ave Mujica
  { id: 'uika', name: '三角初华', band: 'avemujica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/avemujica/img_list_misumi-uika.webp', color: '#BB9955' },
  { id: 'mutsumi', name: '若叶睦', band: 'avemujica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/avemujica/img_list_wakaba-mutsumi.webp', color: '#779977' },
  { id: 'umiri', name: '八幡海铃', band: 'avemujica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/avemujica/img_list_yahata-umiri.webp', color: '#335566' },
  { id: 'nyamu', name: '祐天寺若麦', band: 'avemujica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/avemujica/img_list_yutenji-nyamu.webp', color: '#AA4477' },
  { id: 'sakiko', name: '丰川祥子', band: 'avemujica', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/avemujica/img_list_togawa-sakiko.webp', color: '#7799CC' },
  // MewType
  { id: 'arale', name: '仲町阿拉蕾', band: 'mewtype', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/yumemita/img_list_nakamachi-arale_01.webp', color: '#FFEE55' },
  { id: 'nonoka', name: '宫永野乃花', band: 'mewtype', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/yumemita/img_list_miyanaga-nonoka_01.webp', color: '#FFBBCC' },
  { id: 'ritsu', name: '峰月律', band: 'mewtype', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/yumemita/img_list_minetsuki-ritsu_01.webp', color: '#4477CC' },
  { id: 'miyako', name: '藤都子', band: 'mewtype', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/yumemita/img_list_fuji-miyako_01.webp', color: '#9977CC' },
  { id: 'yuno', name: '千石由乃', band: 'mewtype', avatar: 'https://bang-dream.com/wordpress/wp-content/themes/bangdream-portal/assets/webp/common/artist/yumemita/img_list_sengoku-yuno_01.webp', color: '#EE5577' },
  // Special
  { id: 'marina', name: '月岛麻里奈', band: 'special', avatar: 'https://bestdori.com/assets/jp/characters/resources/chara_icon_51.png', color: '#666666' },
  { id: 'box', name: '纸箱', band: 'special', avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=box', color: '#666666' },
  { id: 'cornet', name: '巧克力螺(活)', band: 'special', avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=cornet', color: '#666666' },
  { id: 'mortis', name: 'mortis', band: 'special', avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=mortis', color: '#666666' },
];

export const EPISODES: Episode[] = [
  { id: 1, title: "第1期", characters: ['kasumi', 'yukina', 'ran', 'aya', 'kokoro', 'mashiro', 'layer', 'tomori', 'uika'], highlights: ["全员主唱集结！", "香澄成功达成第1次登场"] },
  { id: 2, title: "第2期", characters: ['kasumi', 'tae', 'rimi', 'saaya', 'arisa'], highlights: ["Poppin'Party 全员登场", "香澄达成第2次登场"] },
  { id: 3, title: "第3期", characters: ['ran', 'moca', 'himari', 'tomoe', 'tsugumi'], highlights: ["Afterglow 全员登场", "兰达成第2次登场"] },
  { id: 4, title: "第4期", characters: ['tomori', 'anon', 'rana', 'taki', 'soyo'], highlights: ["MyGO!!!!! 成员登场", "灯达成第2次登场", "爽世登场"] },
  { id: 5, title: "第5期", characters: ['kokoro', 'kaoru', 'hagumi', 'kanon', 'misaki', 'michelle'], highlights: ["Hello, Happy World! 全员登场", "心达成第2次登场"] },
  { id: 6, title: "第6期", characters: ['yukina', 'sayo', 'lisa', 'ako', 'rinko'], highlights: ["Roselia 全员登场", "友希那达成第2次登场"] },
  { id: 7, title: "第7期", characters: ['mashiro', 'touko', 'nanami', 'tsukushi', 'rui'], highlights: ["Morfonica 全员登场", "真白达成第2次登场"] },
  { id: 8, title: "第8期", characters: ['aya', 'hina', 'chisato', 'maya', 'eve'], highlights: ["Pastel*Palettes 全员登场", "彩达成第2次登场"] },
  { id: 9, title: "第9期", characters: ['layer', 'lock', 'masking', 'pareo', 'chu2'], highlights: ["RAISE A SUILEN 全员登场", "LAYER达成第2次登场"] },
  { id: 10, title: "第10期", characters: ['uika', 'mutsumi', 'umiri', 'nyamu', 'sakiko', 'mortis'], highlights: ["Ave Mujica 成员登场", "初华达成第2次登场", "mortis 登场"] },
  { id: 11, title: "第11期", characters: ['ran', 'moca', 'himari', 'tomoe', 'tsugumi', 'anon', 'taki'], highlights: ["Afterglow 再登场", "兰/摩卡达成第3次登场", "立希达成第2次登场"] },
  { id: 12, title: "第12期", characters: ['kasumi', 'hina', 'kokoro', 'tomori', 'uika', 'sakiko'], highlights: ["多位主唱再聚首", "香澄达成第3次登场"] },
  { id: 13, title: "第13期", characters: ['maya', 'eve', 'hagumi', 'tsukushi', 'rui'], highlights: ["不同乐队成员混搭", "伊芙/育美达成第2次登场"] },
  { id: 14, title: "第14期", characters: ['kasumi', 'tae', 'rimi', 'saaya', 'arisa', 'marina'], highlights: ["Popipa 再登场", "香澄达成第4次登场", "麻里奈登场"] },
  { id: 15, title: "第15期", characters: ['lock', 'masking'], highlights: ["RAS 成员登场", "LOCK/MASKING 达成第2次登场"] },
  { id: 16, title: "第16期", characters: ['aya', 'chisato'], highlights: ["pastel-palettes 成员登场", "彩达成第3次登场"] },
  { id: 17, title: "第17期", characters: ['pareo', 'chu2'], highlights: ["RAS 成员登场", "PAREO/CHU2 达成第2次登场"] },
  { id: 18, title: "第18期", characters: ['lisa', 'touko', 'nyamu'], highlights: ["莉莎/透子/若麦达成第2次登场"] },
  { id: 19, title: "第19期", characters: ['tae', 'saaya', 'arisa', 'yukina', 'eve', 'michelle', 'tsukushi', 'nyamu', 'box'], highlights: ["大混战", "友希那/多惠达成第3次登场", "纸箱登场"] },
  { id: 20, title: "第20期", characters: ['rimi', 'rana', 'layer', 'cornet'], highlights: ["里美达成第3次登场", "乐奈达成第2次登场", "活的巧克力螺登场"] },
  { id: 21, title: "第21期", characters: ['kokoro', 'kaoru', 'hagumi', 'kanon', 'misaki', 'michelle', 'sakiko'], highlights: ["哈啰哈比再登场", "心达成第4次登场", "祥子达成第3次登场"] },
  { id: 22, title: "第22期", characters: ['rimi', 'ran', 'moca', 'mashiro', 'nanami'], highlights: ["里美/兰/摩卡达成第4次登场", "真白达成第3次登场"] },
  { id: 23, title: "第23期", characters: ['rinko', 'rui', 'tomori', 'anon', 'mutsumi', 'taki'], highlights: ["燐子/瑠唯/灯/爱音/睦 达成新高", "灯达成第4次登场", "立希达成第3次登场"] },
  { id: 24, title: "第24期", characters: ['kasumi', 'saaya', 'arisa', 'uika', 'umiri'], highlights: ["香澄达成第5次登场！", "初华达成第4次登场"] },
  { id: 25, title: "第25期", characters: ['sayo', 'ako', 'tomoe'], highlights: ["纱夜/亚子/巴 达成新高"] },
];
