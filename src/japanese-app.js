const kanaGroups = {
  hiragana: [
    { name: "Vokal", chars: [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]] },
    { name: "Baris K", chars: [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]] },
    { name: "Baris S", chars: [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]] },
    { name: "Baris T", chars: [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]] },
    { name: "Baris N", chars: [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]] },
    { name: "Baris H", chars: [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]] },
    { name: "Baris M", chars: [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]] },
    { name: "Baris Y", chars: [["や", "ya"], ["ゆ", "yu"], ["よ", "yo"]] },
    { name: "Baris R", chars: [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]] },
    { name: "Baris W & N", chars: [["わ", "wa"], ["を", "wo"], ["ん", "n"]] },
  ],
  katakana: [
    { name: "Vokal", chars: [["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"]] },
    { name: "Baris K", chars: [["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"]] },
    { name: "Baris S", chars: [["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"]] },
    { name: "Baris T", chars: [["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"]] },
    { name: "Baris N", chars: [["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"]] },
    { name: "Baris H", chars: [["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"]] },
    { name: "Baris M", chars: [["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"]] },
    { name: "Baris Y", chars: [["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"]] },
    { name: "Baris R", chars: [["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"]] },
    { name: "Baris W & N", chars: [["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"]] },
  ],
};

const kanji = [
  { char: "日", meaning: "matahari / hari", reading: "nichi", example: "日本 (にほん) — Jepang" },
  { char: "月", meaning: "bulan", reading: "getsu", example: "月曜日 (げつようび) — hari Senin" },
  { char: "火", meaning: "api", reading: "ka", example: "火曜日 (かようび) — hari Selasa" },
  { char: "水", meaning: "air", reading: "sui", example: "水 (みず) — air" },
  { char: "木", meaning: "pohon / kayu", reading: "moku", example: "木曜日 (もくようび) — hari Kamis" },
  { char: "金", meaning: "emas / uang", reading: "kin", example: "金曜日 (きんようび) — hari Jumat" },
  { char: "土", meaning: "tanah", reading: "do", example: "土曜日 (どようび) — hari Sabtu" },
  { char: "人", meaning: "orang", reading: "jin", example: "日本人 (にほんじん) — orang Jepang" },
  { char: "大", meaning: "besar", reading: "dai", example: "大学 (だいがく) — universitas" },
  { char: "小", meaning: "kecil", reading: "shou", example: "小さい (ちいさい) — kecil" },
  { char: "山", meaning: "gunung", reading: "san", example: "山 (やま) — gunung" },
  { char: "川", meaning: "sungai", reading: "kawa", example: "川 (かわ) — sungai" },
];

const vocabulary = [
  ...[
    ["人", "ひと", "hito", "orang"], ["友だち", "ともだち", "tomodachi", "teman"],
    ["先生", "せんせい", "sensei", "guru"], ["学生", "がくせい", "gakusei", "pelajar"],
    ["会社員", "かいしゃいん", "kaishain", "pegawai perusahaan"], ["医者", "いしゃ", "isha", "dokter"],
    ["家族", "かぞく", "kazoku", "keluarga"], ["父", "ちち", "chichi", "ayah (sendiri)"],
    ["母", "はは", "haha", "ibu (sendiri)"], ["子ども", "こども", "kodomo", "anak"],
    ["名前", "なまえ", "namae", "nama"], ["国", "くに", "kuni", "negara"],
    ["日本", "にほん", "nihon", "Jepang"], ["インドネシア", "インドネシア", "indoneshia", "Indonesia"],
    ["日本語", "にほんご", "nihongo", "bahasa Jepang"], ["学校", "がっこう", "gakkou", "sekolah"],
    ["会社", "かいしゃ", "kaisha", "perusahaan"], ["家", "いえ", "ie", "rumah"],
    ["部屋", "へや", "heya", "kamar"], ["大学", "だいがく", "daigaku", "universitas"],
    ["駅", "えき", "eki", "stasiun"], ["店", "みせ", "mise", "toko"],
    ["銀行", "ぎんこう", "ginkou", "bank"], ["病院", "びょういん", "byouin", "rumah sakit"],
    ["図書館", "としょかん", "toshokan", "perpustakaan"], ["食堂", "しょくどう", "shokudou", "kantin"],
    ["町", "まち", "machi", "kota"], ["本", "ほん", "hon", "buku"],
    ["ノート", "ノート", "nooto", "buku catatan"], ["ペン", "ペン", "pen", "pulpen"],
    ["かばん", "かばん", "kaban", "tas"], ["時計", "とけい", "tokei", "jam"],
    ["電話", "でんわ", "denwa", "telepon"], ["車", "くるま", "kuruma", "mobil"],
    ["自転車", "じてんしゃ", "jitensha", "sepeda"], ["電車", "でんしゃ", "densha", "kereta"],
    ["バス", "バス", "basu", "bus"], ["水", "みず", "mizu", "air"],
    ["お茶", "おちゃ", "ocha", "teh"], ["ご飯", "ごはん", "gohan", "nasi / makanan"],
    ["パン", "パン", "pan", "roti"], ["卵", "たまご", "tamago", "telur"],
    ["肉", "にく", "niku", "daging"], ["魚", "さかな", "sakana", "ikan"],
    ["野菜", "やさい", "yasai", "sayuran"], ["果物", "くだもの", "kudamono", "buah-buahan"],
    ["今日", "きょう", "kyou", "hari ini"], ["明日", "あした", "ashita", "besok"],
    ["朝", "あさ", "asa", "pagi"], ["時間", "じかん", "jikan", "waktu"],
  ].map(([word, kana, reading, meaning]) => ({ word, kana, reading, meaning, category: "noun", categoryLabel: "Kata benda" })),
  ...[
    ["大きい", "おおきい", "ookii", "besar", "i-adjective"], ["小さい", "ちいさい", "chiisai", "kecil", "i-adjective"],
    ["新しい", "あたらしい", "atarashii", "baru", "i-adjective"], ["古い", "ふるい", "furui", "lama / tua", "i-adjective"],
    ["いい", "いい", "ii", "baik / bagus", "i-adjective"], ["悪い", "わるい", "warui", "buruk", "i-adjective"],
    ["暑い", "あつい", "atsui", "panas (cuaca)", "i-adjective"], ["寒い", "さむい", "samui", "dingin (cuaca)", "i-adjective"],
    ["熱い", "あつい", "atsui", "panas (benda)", "i-adjective"], ["冷たい", "つめたい", "tsumetai", "dingin (benda)", "i-adjective"],
    ["高い", "たかい", "takai", "tinggi / mahal", "i-adjective"], ["安い", "やすい", "yasui", "murah", "i-adjective"],
    ["おもしろい", "おもしろい", "omoshiroi", "menarik / seru", "i-adjective"], ["忙しい", "いそがしい", "isogashii", "sibuk", "i-adjective"],
    ["楽しい", "たのしい", "tanoshii", "menyenangkan", "i-adjective"], ["難しい", "むずかしい", "muzukashii", "sulit", "i-adjective"],
    ["易しい", "やさしい", "yasashii", "mudah", "i-adjective"], ["おいしい", "おいしい", "oishii", "enak", "i-adjective"],
    ["まずい", "まずい", "mazui", "tidak enak", "i-adjective"], ["かわいい", "かわいい", "kawaii", "lucu", "i-adjective"],
    ["きれい", "きれい", "kirei", "indah / bersih", "na-adjective"], ["静か", "しずか", "shizuka", "tenang", "na-adjective"],
    ["元気", "げんき", "genki", "sehat / bersemangat", "na-adjective"], ["有名", "ゆうめい", "yuumei", "terkenal", "na-adjective"],
    ["好き", "すき", "suki", "suka", "na-adjective"],
  ].map(([word, kana, reading, meaning, category]) => ({ word, kana, reading, meaning, category, categoryLabel: category === "i-adjective" ? "Kata sifat い" : "Kata sifat な" })),
  ...[
    ["行く", "いく", "iku", "pergi"], ["来る", "くる", "kuru", "datang"],
    ["帰る", "かえる", "kaeru", "pulang"], ["食べる", "たべる", "taberu", "makan"],
    ["飲む", "のむ", "nomu", "minum"], ["見る", "みる", "miru", "melihat / menonton"],
    ["聞く", "きく", "kiku", "mendengar / bertanya"], ["読む", "よむ", "yomu", "membaca"],
    ["書く", "かく", "kaku", "menulis"], ["話す", "はなす", "hanasu", "berbicara"],
    ["勉強する", "べんきょうする", "benkyou suru", "belajar"], ["働く", "はたらく", "hataraku", "bekerja"],
    ["休む", "やすむ", "yasumu", "beristirahat / libur"], ["寝る", "ねる", "neru", "tidur"],
    ["起きる", "おきる", "okiru", "bangun"], ["買う", "かう", "kau", "membeli"],
    ["会う", "あう", "au", "bertemu"], ["待つ", "まつ", "matsu", "menunggu"],
    ["作る", "つくる", "tsukuru", "membuat"], ["使う", "つかう", "tsukau", "menggunakan"],
    ["する", "する", "suru", "melakukan"], ["ある", "ある", "aru", "ada (benda)"],
    ["いる", "いる", "iru", "ada (makhluk hidup)"], ["わかる", "わかる", "wakaru", "mengerti"],
    ["電話する", "でんわする", "denwa suru", "menelepon"],
  ].map(([word, kana, reading, meaning]) => ({ word, kana, reading, meaning, category: "verb", categoryLabel: "Kata kerja" })),
];

const sentencePatterns = [
  { id: "identity", name: "Memperkenalkan diri", pattern: "A は B です。", note: "は dibaca wa sebagai partikel topik; です membuat pernyataan sopan.", examples: [["わたしはアニです。", "Saya Ani."], ["わたしはインドネシアじんです。", "Saya orang Indonesia."]] },
  { id: "negative", name: "Menyatakan bukan", pattern: "A は B じゃありません。", note: "Bentuk sopan untuk menyatakan bahwa A bukan B.", examples: [["わたしはせんせいじゃありません。", "Saya bukan guru."], ["アニさんはがくせいじゃありません。", "Ani bukan pelajar."]] },
  { id: "question", name: "Bertanya dengan sopan", pattern: "A は B ですか。", note: "Tambahkan か di akhir pernyataan untuk membuat pertanyaan ya/tidak.", examples: [["アニさんはがくせいですか。", "Apakah Ani seorang pelajar?"], ["はい、がくせいです。", "Ya, saya pelajar."]] },
  { id: "no", name: "Menghubungkan dua kata benda", pattern: "A の B", note: "の menghubungkan kata benda, misalnya kepemilikan atau asal.", examples: [["わたしのほん", "Buku saya."], ["にほんごのせんせい", "Guru bahasa Jepang."]] },
  { id: "also", name: "Mengatakan juga", pattern: "A も B です。", note: "も menggantikan は untuk menyatakan “juga”.", examples: [["アニさんもがくせいです。", "Ani juga seorang pelajar."], ["わたしもインドネシアじんです。", "Saya juga orang Indonesia."]] },
];

const kanaWeek = [
  { title: "Hari 1", theme: "Hiragana · Vokal, K, S", groups: [["hiragana", 0], ["hiragana", 1], ["hiragana", 2]] },
  { title: "Hari 2", theme: "Hiragana · T, N, H", groups: [["hiragana", 3], ["hiragana", 4], ["hiragana", 5]] },
  { title: "Hari 3", theme: "Hiragana · M, Y, R, W & N", groups: [["hiragana", 6], ["hiragana", 7], ["hiragana", 8], ["hiragana", 9]] },
  { title: "Hari 4", theme: "Katakana · Vokal, K, S", groups: [["katakana", 0], ["katakana", 1], ["katakana", 2]] },
  { title: "Hari 5", theme: "Katakana · T, N, H", groups: [["katakana", 3], ["katakana", 4], ["katakana", 5]] },
  { title: "Hari 6", theme: "Katakana · M, Y, R, W & N", groups: [["katakana", 6], ["katakana", 7], ["katakana", 8], ["katakana", 9]] },
  { title: "Hari 7", theme: "Review Hiragana & Katakana", groups: [] },
];

const jlptLevels = [
  {
    id: "N5", name: "Pemula", description: "Ungkapan dasar, tata bahasa sederhana, dan situasi sehari-hari.",
    duration: 15, questions: [
      { section: "文字・語彙", prompt: "「図書館」の読み方はどれですか。", options: ["としょかん", "としょうかん", "としょがん", "とじょかん"], answer: 0 },
      { section: "文字・語彙", prompt: "「あたらしい」と反対の意味の言葉はどれですか。", options: ["古い", "高い", "大きい", "長い"], answer: 0 },
      { section: "文字・語彙", prompt: "「魚」はインドネシア語で何ですか。", options: ["Daging", "Ikan", "Sayuran", "Telur"], answer: 1 },
      { section: "文法", prompt: "わたしは毎朝６時（　）起きます。", options: ["に", "で", "を", "が"], answer: 0 },
      { section: "文法", prompt: "きのう、スーパーでりんごを（　）。", options: ["買います", "買いました", "買いません", "買って"], answer: 1 },
      { section: "文法", prompt: "つくえの上に本（　）あります。", options: ["が", "を", "へ", "で"], answer: 0 },
      { section: "読解", passage: "わたしはマリアです。毎日７時に起きます。８時に朝ごはんを食べて、バスで学校へ行きます。", prompt: "マリアさんは何で学校へ行きますか。", options: ["電車", "バス", "自転車", "歩いて"], answer: 1 },
      { section: "読解", passage: "あしたは日曜日です。午前はうちで勉強します。午後、友だちと映画を見に行きます。", prompt: "午後、何をしますか。", options: ["家で勉強します", "買い物をします", "映画を見ます", "学校へ行きます"], answer: 2 },
      { section: "読解", passage: "この店は月曜日から土曜日まで開いています。日曜日は休みです。朝９時から夜８時までです。", prompt: "この店は何曜日に休みですか。", options: ["月曜日", "水曜日", "土曜日", "日曜日"], answer: 3 },
      { section: "聴解", audio: "店員：いらっしゃいませ。お客さん：コーヒーを一つください。店員：ホットですか、アイスですか。お客さん：アイスをお願いします。", prompt: "お客さんは何を注文しましたか。", options: ["ホットコーヒー", "アイスコーヒー", "お茶", "水"], answer: 1 },
      { section: "聴解", audio: "男の人：あした、何時に会いますか。女の人：駅に３時に来てください。男の人：わかりました。", prompt: "二人は何時に会いますか。", options: ["２時", "３時", "４時", "５時"], answer: 1 },
      { section: "聴解", audio: "母：たろう、牛乳を買ってきて。たろう：はい。母：それから、パンもお願いします。", prompt: "たろうさんは何を買いますか。", options: ["牛乳とパン", "牛乳と卵", "パンと水", "水と卵"], answer: 0 },
    ],
  },
  {
    id: "N4", name: "Dasar", description: "Percakapan rutin, bentuk lampau, alasan, dan teks pendek.",
    duration: 18, questions: [
      { section: "文字・語彙", prompt: "「準備」の読み方はどれですか。", options: ["じゅんび", "じゅびん", "しゅんび", "じゅんぴ"], answer: 0 },
      { section: "文字・語彙", prompt: "会議の時間が（　）ので、急いでください。", options: ["近づいた", "間に合った", "遅れた", "始めた"], answer: 0 },
      { section: "文字・語彙", prompt: "「予約する」と同じ意味に近いものはどれですか。", options: ["前もって申し込む", "すぐに出発する", "後で連絡する", "予定を変える"], answer: 0 },
      { section: "文法", prompt: "日本へ行く（　）、日本語を勉強しています。", options: ["ために", "そうに", "ながら", "までに"], answer: 0 },
      { section: "文法", prompt: "窓が開いて（　）から、閉めてください。", options: ["いる", "ある", "しまう", "おく"], answer: 0 },
      { section: "文法", prompt: "雨が降りそうですから、傘を持って行った（　）いいですよ。", options: ["ほうが", "ことが", "ものが", "ところが"], answer: 0 },
      { section: "読解", passage: "来週の土曜日に町の図書館で古本市があります。午前10時から午後４時までで、入場は無料です。売上金は子どもたちの本を買うために使われます。", prompt: "古本市の売上金は何に使われますか。", options: ["図書館の修理", "子どもの本の購入", "会場の予約", "新しい店の開店"], answer: 1 },
      { section: "読解", passage: "山田さんへ。昨日借りた傘を返しに行きましたが、留守だったので玄関の前に置いておきました。助かりました。ありがとう。田中", prompt: "田中さんは傘をどこに置きましたか。", options: ["山田さんの部屋", "玄関の前", "駅の入口", "郵便受けの中"], answer: 1 },
      { section: "読解", passage: "図書館からのお知らせ：来週の月曜日は本の整理をするため、午後５時に閉館します。返却ポストはいつも通り利用できます。", prompt: "来週の月曜日、図書館について正しいものはどれですか。", options: ["一日中休みだ", "午後５時に閉まる", "返却ポストが使えない", "本を借りることができる"], answer: 1 },
      { section: "聴解", audio: "女の人：すみません、駅まで歩いて何分ぐらいですか。男の人：歩くと20分ですが、このバスなら10分で着きますよ。女の人：じゃあ、バスに乗ります。", prompt: "女の人はどうしますか。", options: ["歩きます", "タクシーに乗ります", "バスに乗ります", "電車に乗ります"], answer: 2 },
      { section: "聴解", audio: "男の人：レポートはもう書きましたか。女の人：はい。でも、先生に出す前にもう一度読んで、間違いを直すつもりです。", prompt: "女の人はこれから何をしますか。", options: ["レポートを書く", "先生に質問する", "レポートを読み直す", "友だちに見せる"], answer: 2 },
      { section: "聴解", audio: "店員：こちらのシャツは三千円です。二枚買うと五百円安くなります。男の人：では、白と青を一枚ずつください。", prompt: "男の人はいくら払いますか。", options: ["二千五百円", "三千円", "五千円", "五千五百円"], answer: 3 },
    ],
  },
  {
    id: "N3", name: "Menengah", description: "Memahami informasi utama, hubungan antarkalimat, dan konteks sosial.",
    duration: 22, questions: [
      { section: "文字・語彙", prompt: "「影響」の読み方はどれですか。", options: ["えいきょう", "えいぎょう", "いんきょう", "えんきょう"], answer: 0 },
      { section: "文字・語彙", prompt: "会議の内容を忘れないように、要点をノートに（　）おいた。", options: ["記録して", "確認して", "比較して", "紹介して"], answer: 0 },
      { section: "文字・語彙", prompt: "この説明は少し（　）で、何をすればいいのか分かりにくい。", options: ["あいまい", "新鮮", "豊か", "正確"], answer: 0 },
      { section: "文法", prompt: "この薬を飲めば、すぐに熱が下がる（　）。", options: ["とは限らない", "に違いない", "わけがない", "ことになった"], answer: 0 },
      { section: "文法", prompt: "説明書をよく読んだ（　）、機械の使い方が分からなかった。", options: ["のに", "ので", "ために", "うえで"], answer: 0 },
      { section: "文法", prompt: "健康のために、毎日歩く（　）にしています。", options: ["こと", "もの", "ところ", "わけ"], answer: 0 },
      { section: "読解", passage: "市では、駅前の放置自転車を減らすため、来月から駐輪場の利用料金を一日100円から50円に下げる。一方、禁止区域に置かれた自転車は、これまで通り撤去する。市は、利用者に駐輪場の場所を知らせる案内板も設置する予定だ。", prompt: "市が来月から始めることは何ですか。", options: ["駐輪場を閉鎖する", "駐輪場を安く利用できるようにする", "撤去の対象区域を広げる", "駅前に自転車を置けるようにする"], answer: 1 },
      { section: "読解", passage: "新しい職場に慣れるには時間がかかると思っていたが、同僚が昼休みに話しかけてくれたおかげで、少しずつ安心できるようになった。仕事の手順も、分からないことをそのままにせず質問するようにしている。", prompt: "書き手が安心できるようになったのはなぜですか。", options: ["仕事が簡単だったから", "同僚が話しかけてくれたから", "昼休みが長かったから", "手順を全部覚えていたから"], answer: 1 },
      { section: "読解", passage: "地域の清掃活動は、以前は参加者が少なかった。そこで今年から、作業の後に地元の店で使える券を配ることにした。参加者は増えたが、主催者は券だけが目的にならないよう、活動の意義も伝えていきたいと話している。", prompt: "主催者がこれから大切にしたいことは何ですか。", options: ["券の金額を上げること", "清掃活動の意味を伝えること", "活動の回数を減らすこと", "地元の店を増やすこと"], answer: 1 },
      { section: "聴解", audio: "女の人：発表の資料、写真を増やしたほうがいいかな。男の人：写真より、最初に結論を一枚で見せたほうが分かりやすいと思うよ。女の人：なるほど。じゃあ、結論のページを作り直すね。", prompt: "女の人は資料をどう直しますか。", options: ["写真を増やす", "結論のページを直す", "発表時間を短くする", "資料を印刷し直す"], answer: 1 },
      { section: "聴解", audio: "男の人：予約した新幹線は９時発ですよね。女の人：そうです。でも、駅までのバスが遅れているので、一本後の電車に変更しました。男の人：それなら10時半ですね。", prompt: "二人が乗る新幹線は何時に出ますか。", options: ["９時", "９時半", "10時", "10時半"], answer: 3 },
      { section: "聴解", audio: "女の人：この仕事、今日中に終わりそう？男の人：予定より時間がかかっているけど、資料の確認を手伝ってもらえれば間に合うと思う。女の人：分かった。午後から確認するね。", prompt: "女の人は何を手伝いますか。", options: ["資料の確認", "予定の変更", "会議の予約", "仕事の説明"], answer: 0 },
    ],
  },
  {
    id: "N2", name: "Mahir", description: "Teks argumentatif, nuansa ungkapan, dan percakapan dengan maksud tersirat.",
    duration: 26, questions: [
      { section: "文字・語彙", prompt: "「著しい」の使い方として最も自然なものはどれですか。", options: ["技術の進歩が著しい。", "著しい道をまっすぐ歩く。", "水を著しく飲んだ。", "机を著しく片づけた。"], answer: 0 },
      { section: "文字・語彙", prompt: "新しい制度を導入する前に、現場の意見を（　）する必要がある。", options: ["考慮", "遠慮", "予想", "維持"], answer: 0 },
      { section: "文字・語彙", prompt: "予算が限られているため、計画の一部を（　）せざるを得なかった。", options: ["縮小", "拡大", "解消", "発揮"], answer: 0 },
      { section: "文法", prompt: "本人の努力（　）、周囲の支えも成功には欠かせない。", options: ["はもちろん", "に限らず", "を問わず", "に応じて"], answer: 0 },
      { section: "文法", prompt: "この調査結果は、対象者が少ない（　）、そのまま一般化することはできない。", options: ["ことから", "ばかりに", "ものの", "どころか"], answer: 0 },
      { section: "文法", prompt: "会議では、結論を急ぐ（　）、まず事実関係を整理すべきだ。", options: ["あまり", "より", "までに", "うえで"], answer: 1 },
      { section: "読解", passage: "在宅勤務は通勤時間を減らし、個人の生活に合わせて働ける点で評価されている。しかし、出勤しないこと自体が生産性を高めるわけではない。仕事の目標や情報共有の方法が曖昧なままでは、かえって確認に時間がかかる。働く場所を選ぶ制度を効果的にするには、成果を測る基準と、相談しやすい仕組みを整えることが欠かせない。", prompt: "筆者が在宅勤務を効果的にするために必要だと述べていることは何か。", options: ["全員が毎日出勤すること", "勤務時間を一律に短くすること", "成果の基準と相談の仕組みを整えること", "通勤時間を仕事にあてること"], answer: 2 },
      { section: "読解", passage: "ある店では、商品の説明を詳しく書いた札を置いたところ、店員への質問が減ると予想していた。ところが実際には、説明を読んだ客から、より具体的な質問が寄せられるようになった。店長はこれを失敗とは考えていない。客が商品を理解したうえで選ぼうとしている証拠だと受け止め、接客の内容を見直すことにした。", prompt: "店長は説明札を置いた結果をどう考えていますか。", options: ["客の関心が高まったと考えている", "説明が難しすぎたと考えている", "質問が減らず失敗したと考えている", "商品の数を減らすべきだと考えている"], answer: 0 },
      { section: "読解", passage: "地域の公共交通を維持するため、自治体は利用者数の少ない路線をただちに廃止するのではなく、運行時間や車両の大きさを見直す方針を示した。住民からは利便性への懸念も出ているが、自治体は試験運行の結果を公開し、必要に応じて計画を修正するとしている。", prompt: "自治体の方針として最も適切なものはどれか。", options: ["利用者の少ない路線をすべて廃止する", "試験運行をせず運行を続ける", "運行方法を試し、結果に応じて見直す", "住民の意見を聞かず車両を大型化する"], answer: 2 },
      { section: "聴解", audio: "男の人：新しい案、部長は賛成してくれた？女の人：方向性はいいと言っていたけど、費用の見積もりをもう少し具体的にしてほしいそうよ。男の人：じゃあ、実施時期より先に予算の根拠をまとめよう。", prompt: "二人はまず何をすることにしましたか。", options: ["実施時期を決める", "予算の根拠をまとめる", "部長に案を説明する", "方向性を変更する"], answer: 1 },
      { section: "聴解", audio: "女の人：資料、今日中に全員へ送る予定だったんですが、最終確認がまだで。男の人：急いで間違いが残るより、明日の朝一番に送ったほうがいい。会議は午後だから間に合うよ。", prompt: "資料はいつ送ることになりましたか。", options: ["今日の朝", "今日の午後", "明日の朝", "明日の午後"], answer: 2 },
      { section: "聴解", audio: "男の人：この店、昼はいつも混んでいますね。女の人：ええ。でも、向かいの通りに新しい店ができてから、こちらの列は少し短くなったんですよ。味は変わっていないんですけどね。", prompt: "女の人によると、最近どうなりましたか。", options: ["料理の味が変わった", "店の列が少し短くなった", "営業時間が短くなった", "向かいの店が閉まった"], answer: 1 },
    ],
  },
  {
    id: "N1", name: "Mahir lanjutan", description: "Nuansa makna, wacana abstrak, serta inferensi dalam konteks formal.",
    duration: 30, questions: [
      { section: "文字・語彙", prompt: "「懸念」の使い方として最も適切なものはどれですか。", options: ["計画の遅れが懸念されている。", "彼は懸念な服を着ている。", "懸念を食べて元気になった。", "懸念の道を駅まで歩いた。"], answer: 0 },
      { section: "文字・語彙", prompt: "彼の説明は、複雑な問題の核心を（　）に捉えていた。", options: ["的確", "過剰", "安易", "強引"], answer: 0 },
      { section: "文字・語彙", prompt: "予想外の批判を受けたが、彼女は冷静さを（　）ことなく説明を続けた。", options: ["失う", "欠く", "損なう", "逃す"], answer: 0 },
      { section: "文法", prompt: "彼の研究は、従来の前提を問い直す（　）、新たな議論の出発点となった。", options: ["契機となり", "ものの", "ことなく", "ばかりに"], answer: 0 },
      { section: "文法", prompt: "制度の見直しは、現場の実態を踏まえて行われる（　）である。", options: ["べき", "まい", "ところ", "のみ"], answer: 0 },
      { section: "文法", prompt: "問題の全容が明らかにならない（　）、拙速な判断は避けるべきだ。", options: ["ことには", "ものなら", "にしては", "とあれば"], answer: 0 },
      { section: "読解", passage: "効率化という言葉は、しばしば投入する時間や費用を減らすことと同一視される。だが、短期的な負担の削減が長期的な価値の損失を招くなら、それを効率化と呼ぶのは適切ではない。たとえば、相談の時間を省けば一見作業は速く進むものの、認識のずれが後工程で修正される可能性がある。何を効率とみなすかは、削減した資源だけでなく、その結果として何が実現したかを含めて検討されるべきだ。", prompt: "筆者が述べる「効率化」を評価する際の考え方はどれか。", options: ["作業時間が短くなれば常に効率化といえる", "費用を削減した量を最も重視すべきだ", "削減だけでなく、その結果得られた価値も見るべきだ", "相談の時間はすべて省くべきだ"], answer: 2 },
      { section: "読解", passage: "専門家の知見を社会に伝える際、正確さを損なわないことは当然重要である。しかし、専門用語を並べるだけでは、受け手が判断に必要な情報を得られるとは限らない。説明を簡潔にすることは、内容を単純化することと同じではない。何が分かっていて何が未確定なのかを区別し、受け手の関心に沿って構成し直すことが、むしろ理解の精度を高める。", prompt: "筆者が伝わる説明に必要だと考えていることは何か。", options: ["専門用語をできるだけ増やすこと", "不確かな情報を説明から除くこと", "受け手に合わせて情報を整理し、確実性も区別すること", "複雑な内容を一つの結論にまとめること"], answer: 2 },
      { section: "読解", passage: "地域の歴史を記録する事業では、資料の保存だけでなく、それを誰がどのように利用できるかも議論の対象となった。公開範囲を狭めれば個人情報への配慮はしやすくなるが、資料が研究や教育に生かされにくくなる。関係者は一律の公開・非公開を選ぶのではなく、情報の性質と利用目的に応じて扱いを決める仕組みを整えようとしている。", prompt: "関係者が目指している資料の扱い方はどれか。", options: ["すべての資料を無条件で公開する", "すべての資料を長期間非公開にする", "情報と利用目的に応じて公開方法を決める", "研究目的での利用を認めない"], answer: 2 },
      { section: "聴解", audio: "女の人：この提案、反対されたわけではないんですが、会議では結論が出ませんでした。男の人：資料が足りなかった？女の人：いいえ。費用対効果は説明できました。ただ、導入後に誰が運用を担うのか、その点が曖昧だと言われて。", prompt: "提案について、会議で問題になった点は何ですか。", options: ["費用対効果の根拠", "資料の正確さ", "導入後の運用担当", "提案への反対意見"], answer: 2 },
      { section: "聴解", audio: "男の人：調査の結果は、当初の仮説を支持していると言えますか。女の人：一部はそうですが、対象が都市部に偏っているので、全体に当てはまるとまでは言えません。追加調査の結果を待ってから結論を出したいです。", prompt: "女の人は調査結果についてどう考えていますか。", options: ["仮説はすでに完全に証明された", "対象に偏りがあり、結論には追加調査が必要だ", "調査方法に問題があり、結果は使えない", "都市部以外の調査は必要ない"], answer: 1 },
      { section: "聴解", audio: "女の人：報告書の公開は来週に延期したほうがよさそうです。男の人：内容に問題が見つかったんですか。女の人：内容ではなく、図表の出典確認が終わっていません。確認できた部分だけ先に公開する案もありますが、今回は一括で出すことになりました。", prompt: "報告書の公開が延期された理由は何ですか。", options: ["内容に誤りが見つかったから", "図表の出典確認が終わっていないから", "一部のデータが削除されたから", "公開方法が決まっていないから"], answer: 1 },
    ],
  },
];

const storageKey = "nihongo-learning-progress";
const state = loadProgress();
let activePage = "home";
let activeScript = "hiragana";
let activeGroupIndex = 0;
let activeVocabCategory = "all";
let activeVocabIndex = 0;
let vocabRevealed = false;
let showRomaji = true;
let currentQuiz = null;
let currentExam = null;
let selectedExamLevel = "N5";
let examTimer = 0;
let toastTimer;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      completed: Array.isArray(saved.completed) ? saved.completed : [],
      kanaCompleted: Array.isArray(saved.kanaCompleted) ? saved.kanaCompleted : [],
      vocabularyKnown: Array.isArray(saved.vocabularyKnown) ? saved.vocabularyKnown : [],
      patternsCompleted: Array.isArray(saved.patternsCompleted) ? saved.patternsCompleted : [],
      best: saved.best && typeof saved.best === "object" ? saved.best : {},
      examHistory: Array.isArray(saved.examHistory)
        ? saved.examHistory.filter((attempt) => attempt && jlptLevels.some((level) => level.id === attempt.level)
          && Number.isFinite(attempt.score) && Number.isFinite(attempt.total) && Number.isFinite(attempt.percent)
          && typeof attempt.date === "string").slice(0, 20)
        : [],
      quizzes: Number.isFinite(saved.quizzes) ? saved.quizzes : 0,
      streak: Number.isFinite(saved.streak) ? saved.streak : 0,
    };
  } catch {
    return { completed: [], kanaCompleted: [], vocabularyKnown: [], patternsCompleted: [], best: {}, examHistory: [], quizzes: 0, streak: 0 };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    showToast("Progres tidak bisa disimpan di browser ini.");
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
}

function allKana(script = activeScript) {
  return kanaGroups[script].flatMap((group) => group.chars.map(([char, reading]) => ({
    char, reading, meaning: reading, example: script === "hiragana" ? "Hiragana" : "Katakana",
  })));
}

function getCompletedKanaGroups(script) {
  const groups = kanaGroups[script];
  if (!groups) return [];
  return groups.flatMap((_, index) => (
    state.completed.includes(script) || state.kanaCompleted.includes(`${script}:${index}`)
      ? [index]
      : []
  ));
}

function setPage(page) {
  activePage = page;
  const primaryPages = ["home", "kana", "vocabulary", "patterns"];
  const isMorePage = !primaryPages.includes(page);
  document.querySelectorAll("[data-page-link]").forEach((button) => {
    button.classList.toggle("active", button.dataset.pageLink === page);
  });
  document.querySelectorAll(".mobile-tab[data-page-link]").forEach((button) => {
    if (button.dataset.pageLink === "home" || primaryPages.includes(button.dataset.pageLink)) {
      button.setAttribute("aria-current", button.dataset.pageLink === page ? "page" : "false");
    }
  });
  const moreToggle = document.getElementById("mobile-more-toggle");
  const moreMenu = document.getElementById("mobile-more-menu");
  moreToggle?.classList.toggle("active", isMorePage);
  moreToggle?.setAttribute("aria-expanded", "false");
  if (moreMenu) moreMenu.hidden = true;
  renderPage();
}

function renderPage() {
  const view = document.getElementById("app-view");
  if (activePage === "roadmap") view.innerHTML = renderRoadmap();
  else if (activePage === "kana") view.innerHTML = renderKana();
  else if (activePage === "vocabulary") view.innerHTML = renderVocabulary();
  else if (activePage === "patterns") view.innerHTML = renderPatterns();
  else if (activePage === "kanji") view.innerHTML = renderKanji();
  else if (activePage === "practice") view.innerHTML = renderPractice();
  else if (activePage === "exams") view.innerHTML = renderExams();
  else if (activePage === "progress") view.innerHTML = renderProgress();
  else view.innerHTML = renderHome();
  bindPageEvents();
}

function renderHome() {
  return `
    <section class="welcome-row">
      <div><h1>Belajar bahasa Jepang<br><em>mulai dari dasar.</em></h1>
      <p class="welcome-copy">Mulai dari Hiragana dan Katakana.</p>
      <button class="button button-dark" data-go="kana">Mulai belajar <span>→</span></button></div>
      <div class="hero-art" aria-label="Ilustrasi matahari Jepang"><div class="sun-disc">あ</div><span class="hero-stamp">日本語<br>NIHONGO</span><span class="art-sparkle sparkle-one">✳</span><span class="art-sparkle sparkle-two">✳</span><span class="art-hill hill-one"></span><span class="art-hill hill-two"></span></div>
    </section>
    <section class="section-block">
      <div class="section-heading"><h2>Jalur belajar</h2><button class="text-button" data-go="progress">Lihat progres <span>→</span></button></div>
      <div class="learning-cards">
        <button class="learning-card kana-card" data-go="roadmap"><span class="card-number">1 / KANA</span><span class="learning-symbol">あ</span><span class="card-title">Target 7 hari</span><span class="card-copy">Pelajari Hiragana dan Katakana per kelompok.</span><span class="card-bottom"><span>${getCompletedKanaGroups("hiragana").length + getCompletedKanaGroups("katakana").length} / 20 kelompok</span><span class="circle-arrow">↗</span></span></button>
        <button class="learning-card kanji-card" data-go="vocabulary"><span class="card-number">2 / KOTOBA</span><span class="learning-symbol">言</span><span class="card-title">100 kosakata</span><span class="card-copy">Kata benda, sifat, dan kata kerja.</span><span class="card-bottom"><span>${state.vocabularyKnown.length} / ${vocabulary.length} diingat</span><span class="circle-arrow">↗</span></span></button>
        <button class="learning-card practice-card" data-go="patterns"><span class="card-number">3 / KALIMAT</span><span class="learning-symbol">文</span><span class="card-title">Pola kalimat</span><span class="card-copy">Latih pola kalimat dasar.</span><span class="card-bottom"><span>${state.patternsCompleted.length} / ${sentencePatterns.length} pola</span><span class="circle-arrow">↗</span></span></button>
      </div>
    </section>
    <button class="jlpt-home-card" data-go="exams"><span class="jlpt-home-symbol">試</span><span><strong>Siap uji kemampuanmu?</strong><small>Coba simulasi JLPT dari N5 sampai N1.</small></span><span class="jlpt-home-arrow">Mulai simulasi →</span></button>
  `;
}

function renderRoadmap() {
  const completeGroups = (groups) => groups.filter(([script, index]) => getCompletedKanaGroups(script).includes(index)).length;
  return `<div class="page-intro"><h1>Target Kana <em>7 hari.</em></h1><p>Selesaikan kelompok setiap hari. Hari ke-7 untuk mengulang semua huruf.</p></div><div class="roadmap-list">${kanaWeek.map((day, index) => {
    const done = index === 6
      ? ["hiragana", "katakana"].every((script) => getCompletedKanaGroups(script).length === kanaGroups[script].length)
      : completeGroups(day.groups) === day.groups.length;
    const unlocked = index === 0 || (index === 6
      ? ["hiragana", "katakana"].every((script) => getCompletedKanaGroups(script).length === kanaGroups[script].length)
      : completeGroups(kanaWeek[index - 1].groups) === kanaWeek[index - 1].groups.length);
    const nextTask = day.groups.find(([script, group]) => !getCompletedKanaGroups(script).includes(group));
    const action = index === 6
      ? `<button class="button ${done ? "button-complete" : "button-dark"}" data-week-review ${unlocked ? "" : "disabled"}>${done ? "Review selesai ✓" : "Latihan gabungan →"}</button>`
      : `<button class="button ${done ? "button-complete" : "button-dark"}" data-week-day="${index}" ${unlocked ? "" : "disabled"}>${done ? "Selesai ✓" : (nextTask ? "Mulai target →" : "Hari selesai ✓")}</button>`;
    return `<article class="roadmap-day ${done ? "day-done" : ""} ${unlocked ? "" : "day-locked"}"><div class="day-marker">${done ? "✓" : String(index + 1).padStart(2, "0")}</div><div class="day-copy"><span class="eyebrow">${day.title.toUpperCase()}</span><strong>${day.theme}</strong><small>${index === 6 ? "Kuis campuran Hiragana dan Katakana" : `${completeGroups(day.groups)} dari ${day.groups.length} kelompok dikuasai`}</small></div>${action}</article>`;
  }).join("")}</div><div class="roadmap-next"><span class="eyebrow">SETELAH MINGGU PERTAMA</span><button class="next-step-card" data-go="vocabulary"><span class="next-step-symbol">言</span><span><strong>100 kosakata: kata benda, sifat, dan kerja</strong><small>Bangun bekal kata untuk mulai menyusun kalimat.</small></span><span>→</span></button></div>`;
}

function getVocabularyDeck() {
  return activeVocabCategory === "all"
    ? vocabulary
    : vocabulary.filter((item) => item.category === activeVocabCategory);
}

function renderVocabulary() {
  const categories = [
    ["all", "Semua", vocabulary.length],
    ["noun", "Kata benda", vocabulary.filter((item) => item.category === "noun").length],
    ["i-adjective", "Sifat い", vocabulary.filter((item) => item.category === "i-adjective").length],
    ["na-adjective", "Sifat な", vocabulary.filter((item) => item.category === "na-adjective").length],
    ["verb", "Kata kerja", vocabulary.filter((item) => item.category === "verb").length],
  ];
  const deck = getVocabularyDeck();
  const item = deck[activeVocabIndex % deck.length];
  return `<div class="page-intro"><h1>100 <em>kosakata.</em></h1><p>Lihat bacaan dan arti, lalu tandai kata yang sudah diingat.</p></div><div class="vocab-stats"><strong>${state.vocabularyKnown.length}<small> / ${vocabulary.length}</small></strong><span>kata diingat</span><div class="mini-track"><i style="width:${state.vocabularyKnown.length / vocabulary.length * 100}%"></i></div></div><div class="vocab-filters">${categories.map(([id, label, count]) => `<button class="filter-chip ${activeVocabCategory === id ? "selected" : ""}" data-vocab-category="${id}">${label}<span>${count}</span></button>`).join("")}</div><section class="vocab-study-card"><div class="vocab-card-top"><span class="eyebrow">${item.categoryLabel.toUpperCase()}</span><span>${activeVocabIndex + 1} / ${deck.length}</span></div><button class="vocab-sound" data-speak="${escapeHtml(item.kana)}" aria-label="Dengarkan ${escapeHtml(item.word)}">♫</button><div class="vocab-word">${item.word}</div><div class="vocab-reading">${item.kana}</div>${vocabRevealed ? `<div class="vocab-answer"><strong>${item.meaning}</strong><span>${item.reading}</span></div>` : `<button class="reveal-word" id="reveal-word">Lihat arti & romaji</button>`}<div class="vocab-controls"><button class="button button-light" id="previous-word">← Sebelumnya</button><button class="button ${state.vocabularyKnown.includes(item.word) ? "button-complete" : "button-dark"}" id="mark-word">${state.vocabularyKnown.includes(item.word) ? "Sudah diingat ✓" : "Tandai sudah ingat"}</button><button class="button button-light" id="next-word">Selanjutnya →</button></div></section><p class="vocab-note">Arti kata dapat berubah sesuai konteks kalimat.</p>`;
}

function renderPatterns() {
  return `<div class="page-intro"><h1>Pola <em>kalimat.</em></h1><p>Pelajari pola, arti, dan contoh kalimat.</p></div><div class="pattern-list">${sentencePatterns.map((item, index) => {
    const done = state.patternsCompleted.includes(item.id);
    return `<article class="pattern-card"><div class="pattern-heading"><span class="pattern-number">${String(index + 1).padStart(2, "0")}</span><div><span class="eyebrow">POLA ${index + 1}</span><h2>${item.name}</h2></div><button class="button ${done ? "button-complete" : "button-light"}" data-pattern-done="${item.id}">${done ? "Sudah dipelajari ✓" : "Tandai dipelajari"}</button></div><div class="pattern-formula">${item.pattern}</div><p>${item.note}</p><div class="pattern-examples">${item.examples.map(([japanese, translation]) => `<div><span>${japanese}</span><small>${translation}</small><button class="sound-icon" data-speak="${escapeHtml(japanese)}" aria-label="Dengarkan contoh">♫</button></div>`).join("")}</div></article>`;
  }).join("")}</div>`;
}

function renderKana() {
  const scriptLabel = activeScript === "hiragana" ? "Hiragana" : "Katakana";
  const groups = kanaGroups[activeScript];
  const completedGroups = getCompletedKanaGroups(activeScript);
  const selectedGroup = activeGroupIndex === "all" ? null : groups[activeGroupIndex];
  const allGroupsComplete = completedGroups.length === groups.length;
  const selectedGroupComplete = activeGroupIndex !== "all"
    && completedGroups.includes(activeGroupIndex);
  const lessonChars = selectedGroup ? selectedGroup.chars : groups.flatMap((group) => group.chars);
  const groupTitle = selectedGroup ? selectedGroup.name : `Semua ${scriptLabel}`;
  return `
    <div class="page-intro"><h1>Belajar <em>Kana.</em></h1></div>
    <div class="content-card">
      <div class="content-toolbar"><div class="segmented-control" role="tablist" aria-label="Pilih jenis kana"><button class="${activeScript === "hiragana" ? "selected" : ""}" data-script="hiragana" role="tab" aria-selected="${activeScript === "hiragana"}">あ Hiragana</button><button class="${activeScript === "katakana" ? "selected" : ""}" data-script="katakana" role="tab" aria-selected="${activeScript === "katakana"}">ア Katakana</button></div><label class="toggle-label"><input id="romaji-toggle" type="checkbox" ${showRomaji ? "checked" : ""}><span class="toggle"></span>Tampilkan romaji</label></div>
      <div class="kana-learning-layout">
        <aside class="group-picker"><div class="group-picker-heading"><span class="eyebrow">BELAJAR BERTAHAP</span><strong>${completedGroups.length} / ${groups.length} kelompok</strong></div>${groups.map((group, index) => {
          const unlocked = index === 0 || completedGroups.includes(index - 1);
          const complete = completedGroups.includes(index);
          return `<button class="group-choice ${activeGroupIndex === index ? "active" : ""} ${complete ? "complete" : ""}" data-group="${index}" ${unlocked ? "" : "disabled"}><span class="group-number">${complete ? "✓" : String(index + 1).padStart(2, "0")}</span><span>${group.name}<small>${group.chars.length} huruf</small></span><span class="group-lock">${unlocked ? "›" : "🔒"}</span></button>`;
        }).join("")}${allGroupsComplete ? `<button class="group-choice mixed-choice ${activeGroupIndex === "all" ? "active" : ""}" data-group="all"><span class="group-number">46</span><span>Ulangi semua<small>Latihan campuran</small></span><span class="group-lock">›</span></button>` : `<p class="locked-hint">Selesaikan semua baris untuk membuka latihan campuran 46 huruf.</p>`}</aside>
        <section class="group-lesson"><div class="lesson-summary"><span class="summary-dot"></span><span><strong>${scriptLabel} · ${groupTitle}</strong> · ${lessonChars.length} huruf</span><span class="summary-tip">Ketuk huruf untuk dengar pelafalan</span></div><div class="kana-grid lesson-kana-grid">${lessonChars.map(([char, reading]) => `<button class="kana-tile" data-speak="${char}" aria-label="${char}, ${reading}"><span class="kana-char">${char}</span><span class="kana-reading ${showRomaji ? "" : "is-hidden"}">${reading}</span></button>`).join("")}</div><div class="group-learning-tip">${activeGroupIndex === 0 ? "Baca lima vokal dan dengarkan bunyinya." : "Pelajari huruf, lalu coba kuis."}</div>${activeGroupIndex === "all" ? `<div class="lesson-footer"><span>Ulangi semua huruf dengan latihan campuran.</span><button class="button button-dark" data-start-group="all">Latihan campuran 46 huruf →</button></div>` : `<div class="lesson-footer"><span>${selectedGroupComplete ? "✓ Kelompok selesai" : "Jawab minimal 4 dari 5 soal untuk lanjut."}</span><button class="button ${selectedGroupComplete ? "button-complete" : "button-dark"}" data-start-group="${activeGroupIndex}">${selectedGroupComplete ? "Latihan lagi" : "Latihan kelompok ini →"}</button></div>`}</section>
      </div>
    </div>`;
}

function renderKanji() {
  const isComplete = state.completed.includes("kanji");
  return `
    <div class="page-intro"><h1>Kanji <em>dasar.</em></h1><p>Pelajari arti, bacaan, dan contoh katanya.</p></div>
    <div class="level-banner"><span class="level-badge">N5</span><div><strong>12 kanji</strong></div></div>
    <div class="kanji-grid">${kanji.map((item, index) => `<article class="kanji-card"><div class="kanji-card-top"><span class="kanji-index">${String(index + 1).padStart(2, "0")}</span><button class="sound-icon" data-speak="${item.char}" aria-label="Dengarkan ${item.char}">♫</button></div><span class="kanji-character">${item.char}</span><strong class="kanji-meaning">${item.meaning}</strong><span class="kanji-reading">On'yomi · ${item.reading}</span><span class="kanji-example">${item.example}</span></article>`).join("")}</div>
    <div class="lesson-footer kanji-footer"><span>${isComplete ? "✓ Kanji pemula sudah ditandai selesai" : "Tip: perhatikan arti, bunyi, dan contoh katanya."}</span><button class="button ${isComplete ? "button-complete" : "button-dark"}" data-complete="kanji">${isComplete ? "Selesai ✓" : "Tandai materi selesai"}</button></div>`;
}

function renderPractice() {
  return `
    <div class="page-intro"><h1>Latihan <em>kuis.</em></h1></div>
    ${currentQuiz ? renderQuiz() : `<div class="practice-layout"><div class="content-card quiz-setup"><h2>Pilih materi</h2><div class="quiz-choices"><label><input type="radio" name="quiz-type" value="hiragana" checked><span class="choice-symbol">あ</span><span><strong>Hiragana</strong><small>${getCompletedKanaGroups("hiragana").length ? `${getCompletedKanaGroups("hiragana").length} kelompok dipelajari` : "Mulai dari kelompok Vokal"}</small></span><span class="radio-mark"></span></label><label><input type="radio" name="quiz-type" value="katakana"><span class="choice-symbol">ア</span><span><strong>Katakana</strong><small>${getCompletedKanaGroups("katakana").length ? `${getCompletedKanaGroups("katakana").length} kelompok dipelajari` : "Mulai dari kelompok Vokal"}</small></span><span class="radio-mark"></span></label><label><input type="radio" name="quiz-type" value="vocabulary"><span class="choice-symbol">言</span><span><strong>Kotoba</strong><small>Arti 100 kosakata</small></span><span class="radio-mark"></span></label><label><input type="radio" name="quiz-type" value="kanji"><span class="choice-symbol">漢</span><span><strong>Kanji pemula</strong><small>12 karakter</small></span><span class="radio-mark"></span></label></div><button id="start-quiz" class="button button-dark full-button">Mulai kuis <span>→</span></button></div></div>`}`;
}

function renderExams() {
  if (currentExam) return renderExamSession();

  const selected = jlptLevels.find((level) => level.id === selectedExamLevel) || jlptLevels[0];
  const attempts = state.examHistory.filter((attempt) => attempt.level === selected.id);
  const best = attempts.length ? Math.max(...attempts.map((attempt) => attempt.percent)) : null;
  const sections = ["文字・語彙", "文法", "読解", "聴解"];
  return `<div class="page-intro"><span class="eyebrow">JAPANESE LANGUAGE PROFICIENCY TEST</span><h1>Simulasi <em>JLPT.</em></h1><p>Kenali format soal dari level N5 hingga N1. Paket ini adalah mini-simulasi latihan dengan waktu ringkas, bukan ujian resmi atau prediksi skor JLPT.</p></div>
    <div class="jlpt-level-grid">${jlptLevels.map((level) => {
      const history = state.examHistory.filter((attempt) => attempt.level === level.id);
      const levelBest = history.length ? Math.max(...history.map((attempt) => attempt.percent)) : null;
      return `<button class="jlpt-level-card ${selected.id === level.id ? "selected" : ""}" data-select-exam="${level.id}" aria-pressed="${selected.id === level.id}"><span class="level-badge">${level.id}</span><strong>${level.name}</strong><small>${history.length ? `Terbaik ${levelBest}%` : "Belum dicoba"}</small></button>`;
    }).join("")}</div>
    <section class="jlpt-exam-detail"><div><span class="eyebrow">LEVEL DIPILIH</span><h2>${selected.id} · ${selected.name}</h2><p>${selected.description}</p></div><div class="jlpt-exam-meta"><span><strong>${selected.questions.length}</strong> soal</span><span><strong>${sections.length}</strong> bagian</span><span><strong>${selected.duration} menit</strong> waktu simulasi</span></div><div class="jlpt-section-list">${sections.map((section) => `<span>${section}<small>${selected.questions.filter((question) => question.section === section).length} soal</small></span>`).join("")}</div><p class="jlpt-disclaimer">Waktu dibuat lebih singkat dari tes penuh. Audio 聴解 menggunakan suara Jepang dari browser. Hasil hanya untuk latihan; penilaian resmi JLPT memakai skala dan kriteria tersendiri.</p><button class="button button-dark" id="start-exam" data-level="${selected.id}">Mulai simulasi ${selected.id} <span>→</span></button>${best === null ? "" : `<span class="jlpt-best-score">Skor terbaikmu: <strong>${best}%</strong> · ${attempts.length} kali mencoba</span>`}</section>
    ${state.examHistory.length ? `<section class="jlpt-history"><div class="section-heading"><h2>Riwayat simulasi</h2></div><div class="jlpt-history-list">${state.examHistory.slice(0, 5).map((attempt) => `<div><span class="level-badge">${escapeHtml(attempt.level)}</span><strong>${attempt.percent}%</strong><small>${attempt.score}/${attempt.total} benar · ${escapeHtml(attempt.date)}</small></div>`).join("")}</div></section>` : ""}`;
}

function renderExamSession() {
  if (currentExam.finished) {
    const level = jlptLevels.find((item) => item.id === currentExam.level);
    const correct = currentExam.answers.filter((answer, index) => answer === level.questions[index].answer).length;
    const sections = ["文字・語彙", "文法", "読解", "聴解"];
    return `<section class="content-card exam-result"><span class="result-flower">✳</span><span class="eyebrow">SIMULASI ${level.id} SELESAI</span><h2>Hasil latihanmu</h2><p>Ini adalah skor latihan, bukan penilaian resmi JLPT.</p><div class="result-score">${Math.round(correct / level.questions.length * 100)}<small>%</small></div><span class="result-caption">${correct} dari ${level.questions.length} jawaban benar</span><div class="exam-section-results">${sections.map((section) => {
      const questions = level.questions.map((question, index) => ({ question, index })).filter(({ question }) => question.section === section);
      const sectionCorrect = questions.filter(({ question, index }) => currentExam.answers[index] === question.answer).length;
      return `<div><span>${section}</span><strong>${sectionCorrect} / ${questions.length}</strong></div>`;
    }).join("")}</div><button class="button button-dark" id="finish-exam">Kembali ke pilihan level</button></section>`;
  }

  const level = jlptLevels.find((item) => item.id === currentExam.level);
  const question = level.questions[currentExam.index];
  const selectedAnswer = currentExam.answers[currentExam.index];
  const answeredCount = currentExam.answers.filter((answer) => answer !== null).length;
  const remaining = `${String(Math.floor(currentExam.remaining / 60)).padStart(2, "0")}:${String(currentExam.remaining % 60).padStart(2, "0")}`;
  return `<div class="exam-session-top"><button class="text-button" id="exit-exam">← Keluar</button><span class="exam-level-label">SIMULASI ${level.id}</span><span class="exam-timer" id="exam-timer" role="timer" aria-label="Sisa waktu">${remaining}</span></div>
    <div class="exam-session-progress"><span>Soal ${currentExam.index + 1} dari ${level.questions.length}</span><span>${answeredCount} dijawab</span><div class="quiz-track"><i style="width:${(currentExam.index + 1) / level.questions.length * 100}%"></i></div></div>
    <div class="exam-layout"><section class="content-card exam-question"><span class="exam-section-badge">${question.section}</span>${question.passage ? `<div class="exam-passage">${escapeHtml(question.passage)}</div>` : ""}<p class="exam-prompt">${escapeHtml(question.prompt)}</p>${question.audio ? `<button class="sound-button exam-audio" data-exam-speak="${escapeHtml(question.audio)}">♫ Dengarkan audio Jepang</button>` : ""}<div class="exam-answer-options">${question.options.map((option, index) => `<button class="exam-answer-option ${selectedAnswer === index ? "selected" : ""}" data-exam-answer="${index}" aria-pressed="${selectedAnswer === index}"><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}</button>`).join("")}</div><div class="exam-question-controls"><button class="button button-light" id="previous-exam-question" ${currentExam.index === 0 ? "disabled" : ""}>← Sebelumnya</button><button class="button ${currentExam.index === level.questions.length - 1 ? "button-dark" : "button-light"}" id="${currentExam.index === level.questions.length - 1 ? "submit-exam" : "next-exam-question"}">${currentExam.index === level.questions.length - 1 ? "Kumpulkan ujian" : "Berikutnya →"}</button></div></section>
    <aside class="content-card exam-question-nav"><strong>Navigasi soal</strong><div>${level.questions.map((_, index) => `<button class="${index === currentExam.index ? "current" : ""} ${currentExam.answers[index] !== null ? "answered" : ""}" data-exam-question="${index}" aria-label="Soal ${index + 1}${currentExam.answers[index] !== null ? ", dijawab" : ", belum dijawab"}" aria-current="${index === currentExam.index ? "step" : "false"}">${index + 1}</button>`).join("")}</div><small>${answeredCount} / ${level.questions.length} sudah dijawab</small><button class="text-button exam-submit-link" id="submit-exam-shortcut">Kumpulkan simulasi</button></aside></div>`;
}

function renderQuiz() {
  if (currentQuiz.finished) {
    const percent = Math.round(currentQuiz.score / currentQuiz.questions.length * 100);
    const passed = percent >= 80;
    const groupQuiz = Number.isInteger(currentQuiz.groupIndex);
    return `<div class="content-card quiz-result"><h2>${passed ? "Kuis selesai" : "Coba lagi"}</h2><p>${groupQuiz ? (passed ? "Kelompok berikutnya sudah terbuka." : "Jawab minimal 4 soal benar untuk lanjut.") : "Lanjutkan latihan untuk mengingat materi."}</p><div class="result-score">${currentQuiz.score}<small> / ${currentQuiz.questions.length}</small></div><span class="result-caption">jawaban benar</span><button class="button button-dark" id="finish-quiz">${groupQuiz ? "Kembali ke materi Kana" : "Kembali ke latihan"}</button></div>`;
  }
  const question = currentQuiz.questions[currentQuiz.index];
  const progress = currentQuiz.index / currentQuiz.questions.length * 100;
  const isMeaningQuiz = currentQuiz.type === "kanji" || currentQuiz.type === "vocabulary";
  return `<div class="quiz-card"><div class="quiz-topline"><button class="text-button" id="exit-quiz">← Keluar dari kuis</button><span>SOAL ${currentQuiz.index + 1} / ${currentQuiz.questions.length}</span></div><div class="quiz-track"><i style="width:${progress}%"></i></div><span class="eyebrow">${currentQuiz.type === "kanji" ? "ARTI KANJI" : currentQuiz.type === "vocabulary" ? "ARTI KOSAKATA" : "BACAAN ROMAJI"}</span><div class="quiz-prompt">${question.char}</div><button class="sound-button" data-speak="${escapeHtml(question.audio || question.char)}">♫ Dengarkan</button><p class="quiz-instruction">${isMeaningQuiz ? "Apa arti kata ini?" : "Bagaimana cara membaca huruf ini?"}</p><div class="answer-grid">${question.options.map((option) => `<button class="answer-option" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}</div><p class="answer-feedback" aria-live="polite"></p></div>`;
}

function renderProgress() {
  const kanaItems = ["hiragana", "katakana"].map((script) => ({
    id: script,
    title: script === "hiragana" ? "Hiragana" : "Katakana",
    detail: `${getCompletedKanaGroups(script).length} dari ${kanaGroups[script].length} kelompok`,
    symbol: script === "hiragana" ? "あ" : "ア",
    go: "kana",
    script,
    percent: getCompletedKanaGroups(script).length / kanaGroups[script].length * 100,
  }));
  const items = [
    ...kanaItems,
    { id: "vocabulary", title: "Kotoba", detail: `${state.vocabularyKnown.length} dari ${vocabulary.length} kosakata diingat`, symbol: "言", go: "vocabulary", percent: state.vocabularyKnown.length / vocabulary.length * 100 },
    { id: "patterns", title: "Pola kalimat", detail: `${state.patternsCompleted.length} dari ${sentencePatterns.length} pola dipelajari`, symbol: "文", go: "patterns", percent: state.patternsCompleted.length / sentencePatterns.length * 100 },
    { id: "kanji", title: "Kanji pemula", detail: "12 karakter", symbol: "漢", go: "kanji", percent: state.completed.includes("kanji") ? 100 : 0 },
  ];
  const completeCount = getCompletedKanaGroups("hiragana").length
    + getCompletedKanaGroups("katakana").length
    + state.vocabularyKnown.length
    + state.patternsCompleted.length
    + (state.completed.includes("kanji") ? 1 : 0);
  const totalUnits = kanaGroups.hiragana.length + kanaGroups.katakana.length
    + vocabulary.length + sentencePatterns.length + 1;
  const best = Math.max(0, ...Object.values(state.best));
  return `<div class="page-intro"><h1>Progres <em>belajar.</em></h1></div><div class="progress-overview"><div class="overview-card progress-ring-card"><div class="progress-ring" style="--progress:${completeCount / totalUnits * 100}%"><span>${Math.round(completeCount / totalUnits * 100)}<small>%</small></span></div><div><span class="eyebrow">MATERI SELESAI</span><strong>${completeCount} dari ${totalUnits} tahap</strong></div></div><div class="overview-card"><span class="overview-icon">✳</span><span class="eyebrow">TOTAL KUIS</span><strong>${state.quizzes}</strong></div><div class="overview-card"><span class="overview-icon">★</span><span class="eyebrow">SKOR TERBAIK</span><strong>${best}%</strong></div></div><section class="section-block progress-section"><div class="section-heading"><h2>Rincian materi</h2><button class="text-button" id="reset-progress">Atur ulang progres</button></div><div class="progress-list">${items.map((item) => `<div class="progress-item"><span class="progress-symbol">${item.symbol}</span><div class="progress-name"><strong>${item.title}</strong><small>${item.detail}</small></div><div class="progress-item-track"><i class="${item.percent ? "filled" : ""}" style="width:${item.percent}%"></i></div><span class="progress-status ${item.percent === 100 ? "done" : ""}">${item.percent === 100 ? "Selesai" : `${Math.round(item.percent)}%`}</span><button class="text-button" data-go="${item.go}" ${item.script ? `data-script-target="${item.script}"` : ""}>Buka →</button></div>`).join("")}</div></section>`;
}

function startQuiz(type, groupIndex = "learned") {
  const isKanaQuiz = ["hiragana", "katakana", "kana-mix"].includes(type);
  const completedGroups = isKanaQuiz && type !== "kana-mix" ? getCompletedKanaGroups(type) : [];
  const source = type === "kanji"
    ? kanji
    : type === "vocabulary"
      ? vocabulary.map((item) => ({ char: item.word, meaning: item.meaning, reading: item.reading, audio: item.kana }))
      : type === "kana-mix"
        ? [...allKana("hiragana"), ...allKana("katakana")]
        : groupIndex === "all"
          ? allKana(type)
          : Number.isInteger(groupIndex)
            ? kanaGroups[type][groupIndex].chars.map(([char, reading]) => ({ char, reading, meaning: reading }))
            : completedGroups.length
              ? completedGroups.flatMap((index) => kanaGroups[type][index].chars.map(([char, reading]) => ({ char, reading, meaning: reading })))
              : kanaGroups[type][0].chars.map(([char, reading]) => ({ char, reading, meaning: reading }));
  const questionCount = type === "kanji" || type === "vocabulary" || type === "kana-mix" || groupIndex === "all" ? 10 : 5;
  const questionItems = source.length >= questionCount
    ? shuffle(source).slice(0, questionCount)
    : shuffle(Array.from({ length: questionCount }, (_, index) => source[index % source.length]));
  const questions = questionItems.map((item) => {
    const answer = type === "kanji" || type === "vocabulary" ? item.meaning : item.reading;
    const distractorSource = type === "kanji" || type === "vocabulary"
      ? source
      : type === "kana-mix"
        ? source
        : allKana(type);
    const distractors = shuffle(distractorSource.filter((candidate) => candidate.char !== item.char)
      .map((candidate) => type === "kanji" || type === "vocabulary" ? candidate.meaning : candidate.reading))
      .filter((value, index, list) => value !== answer && list.indexOf(value) === index)
      .slice(0, 3);
    return { char: item.char, answer, options: shuffle([answer, ...distractors]) };
  });
  currentQuiz = { type, groupIndex: Number.isInteger(groupIndex) ? groupIndex : null, questions, index: 0, score: 0, answered: false, finished: false };
  setPage("practice");
}

function startExam(levelId) {
  const level = jlptLevels.find((item) => item.id === levelId);
  if (!level) {
    showToast("Level simulasi tidak ditemukan.");
    return;
  }
  window.clearInterval(examTimer);
  currentExam = {
    level: level.id,
    index: 0,
    answers: Array(level.questions.length).fill(null),
    remaining: level.duration * 60,
    finished: false,
  };
  setPage("exams");
  examTimer = window.setInterval(() => {
    if (!currentExam || currentExam.finished) {
      window.clearInterval(examTimer);
      return;
    }
    currentExam.remaining -= 1;
    const timer = document.getElementById("exam-timer");
    if (timer) {
      timer.textContent = `${String(Math.floor(currentExam.remaining / 60)).padStart(2, "0")}:${String(currentExam.remaining % 60).padStart(2, "0")}`;
      if (currentExam.remaining <= 60) timer.classList.add("urgent");
    }
    if (currentExam.remaining <= 0) finishExam();
  }, 1000);
}

function finishExam() {
  if (!currentExam || currentExam.finished) return;
  window.clearInterval(examTimer);
  const level = jlptLevels.find((item) => item.id === currentExam.level);
  const score = currentExam.answers.reduce((total, answer, index) => (
    total + (answer === level.questions[index].answer ? 1 : 0)
  ), 0);
  const attempt = {
    level: level.id,
    score,
    total: level.questions.length,
    percent: Math.round(score / level.questions.length * 100),
    date: new Date().toLocaleDateString("id-ID"),
  };
  currentExam.finished = true;
  state.examHistory = [attempt, ...state.examHistory].slice(0, 20);
  saveProgress();
  renderPage();
}

function answerQuestion(button) {
  if (!currentQuiz || currentQuiz.answered) return;
  currentQuiz.answered = true;
  const correct = button.dataset.answer === currentQuiz.questions[currentQuiz.index].answer;
  if (correct) currentQuiz.score += 1;
  if (correct && currentQuiz.type === "vocabulary") {
    const word = currentQuiz.questions[currentQuiz.index].char;
    if (!state.vocabularyKnown.includes(word)) state.vocabularyKnown.push(word);
  }
  document.querySelectorAll(".answer-option").forEach((option) => {
    option.disabled = true;
    if (option.dataset.answer === currentQuiz.questions[currentQuiz.index].answer) option.classList.add("correct");
    else if (option === button) option.classList.add("incorrect");
  });
  const feedback = document.querySelector(".answer-feedback");
  feedback.textContent = correct ? "Betul! Jawabanmu tepat 🌸" : `Belum tepat — jawabannya ${currentQuiz.questions[currentQuiz.index].answer}`;
  feedback.classList.toggle("is-correct", correct);
  button.blur();
  window.setTimeout(() => {
    currentQuiz.index += 1;
    currentQuiz.answered = false;
    if (currentQuiz.index >= currentQuiz.questions.length) {
      currentQuiz.finished = true;
      state.quizzes += 1;
      const percent = Math.round(currentQuiz.score / currentQuiz.questions.length * 100);
      state.best[currentQuiz.type] = Math.max(state.best[currentQuiz.type] || 0, percent);
      if (Number.isInteger(currentQuiz.groupIndex) && percent >= 80) {
        const key = `${currentQuiz.type}:${currentQuiz.groupIndex}`;
        if (!state.kanaCompleted.includes(key)) state.kanaCompleted.push(key);
      }
      saveProgress();
      updateStreak();
    }
    renderPage();
  }, 850);
}

function shuffle(items) {
  const result = items.slice();
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function speakJapanese(text) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showToast("Audio tidak didukung browser ini.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.8;
  utterance.onerror = (event) => {
    if (event.error !== "canceled" && event.error !== "interrupted") {
      showToast("Audio gagal diputar. Coba lagi.");
    }
  };
  window.speechSynthesis.speak(utterance);
}

function updateStreak() {
  const today = new Date().toLocaleDateString("en-CA");
  try {
    const lastStudy = localStorage.getItem(`${storageKey}-last-study`);
    if (lastStudy !== today) {
      const yesterday = new Date(Date.now() - 86400000).toLocaleDateString("en-CA");
      state.streak = lastStudy === yesterday ? state.streak + 1 : 1;
      localStorage.setItem(`${storageKey}-last-study`, today);
      saveProgress();
    }
  } catch {
    showToast("Progres tidak bisa disimpan di browser ini.");
  }
  document.getElementById("streak-count").textContent = state.streak;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
}

function bindPageEvents() {
  document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => {
    if (button.dataset.scriptTarget) activeScript = button.dataset.scriptTarget;
    setPage(button.dataset.go);
  }));
  document.querySelectorAll("[data-week-day]").forEach((button) => button.addEventListener("click", () => {
    const day = kanaWeek[Number(button.dataset.weekDay)];
    const nextTask = day.groups.find(([script, group]) => !getCompletedKanaGroups(script).includes(group));
    if (!nextTask) return;
    [activeScript, activeGroupIndex] = nextTask;
    setPage("kana");
  }));
  document.querySelector("[data-week-review]")?.addEventListener("click", () => startQuiz("kana-mix", "all"));
  document.querySelectorAll("[data-script]").forEach((button) => button.addEventListener("click", () => {
    activeScript = button.dataset.script;
    activeGroupIndex = Math.min(getCompletedKanaGroups(activeScript).length, kanaGroups[activeScript].length - 1);
    renderPage();
  }));
  document.querySelectorAll("[data-group]").forEach((button) => button.addEventListener("click", () => {
    activeGroupIndex = button.dataset.group === "all" ? "all" : Number(button.dataset.group);
    renderPage();
  }));
  document.querySelectorAll("[data-speak]").forEach((button) => button.addEventListener("click", () => speakJapanese(button.dataset.speak)));
  document.querySelectorAll("[data-vocab-category]").forEach((button) => button.addEventListener("click", () => {
    activeVocabCategory = button.dataset.vocabCategory;
    activeVocabIndex = 0;
    vocabRevealed = false;
    renderPage();
  }));
  document.getElementById("reveal-word")?.addEventListener("click", () => {
    vocabRevealed = true;
    renderPage();
  });
  document.getElementById("previous-word")?.addEventListener("click", () => {
    const deck = getVocabularyDeck();
    activeVocabIndex = (activeVocabIndex - 1 + deck.length) % deck.length;
    vocabRevealed = false;
    renderPage();
  });
  document.getElementById("next-word")?.addEventListener("click", () => {
    const deck = getVocabularyDeck();
    activeVocabIndex = (activeVocabIndex + 1) % deck.length;
    vocabRevealed = false;
    renderPage();
  });
  document.getElementById("mark-word")?.addEventListener("click", () => {
    const item = getVocabularyDeck()[activeVocabIndex];
    if (state.vocabularyKnown.includes(item.word)) {
      state.vocabularyKnown = state.vocabularyKnown.filter((word) => word !== item.word);
    } else {
      state.vocabularyKnown.push(item.word);
    }
    saveProgress();
    renderPage();
  });
  document.querySelectorAll("[data-pattern-done]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.patternDone;
    state.patternsCompleted = state.patternsCompleted.includes(id)
      ? state.patternsCompleted.filter((pattern) => pattern !== id)
      : [...state.patternsCompleted, id];
    saveProgress();
    renderPage();
  }));
  document.getElementById("romaji-toggle")?.addEventListener("change", (event) => {
    showRomaji = event.target.checked;
    document.querySelectorAll(".kana-reading").forEach((reading) => reading.classList.toggle("is-hidden", !showRomaji));
  });
  document.querySelectorAll("[data-complete]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.complete;
    if (!state.completed.includes(id)) {
      state.completed.push(id);
      saveProgress();
      showToast("Materi ditandai selesai. Mantap! 🌸");
    }
    renderPage();
  }));
  document.querySelectorAll("[data-start-group]").forEach((button) => button.addEventListener("click", () => {
    const groupIndex = button.dataset.startGroup === "all" ? "all" : Number(button.dataset.startGroup);
    startQuiz(activeScript, groupIndex);
  }));
  document.getElementById("start-quiz")?.addEventListener("click", () => {
    const type = document.querySelector('input[name="quiz-type"]:checked')?.value || "hiragana";
    startQuiz(type);
  });
  document.querySelectorAll("[data-select-exam]").forEach((button) => button.addEventListener("click", () => {
    selectedExamLevel = button.dataset.selectExam;
    renderPage();
  }));
  document.getElementById("start-exam")?.addEventListener("click", (event) => startExam(event.currentTarget.dataset.level));
  document.querySelectorAll("[data-exam-answer]").forEach((button) => button.addEventListener("click", () => {
    if (!currentExam || currentExam.finished) return;
    currentExam.answers[currentExam.index] = Number(button.dataset.examAnswer);
    renderPage();
  }));
  document.querySelectorAll("[data-exam-question]").forEach((button) => button.addEventListener("click", () => {
    if (!currentExam || currentExam.finished) return;
    currentExam.index = Number(button.dataset.examQuestion);
    renderPage();
  }));
  document.querySelector("[data-exam-speak]")?.addEventListener("click", (event) => speakJapanese(event.currentTarget.dataset.examSpeak));
  document.getElementById("previous-exam-question")?.addEventListener("click", () => {
    if (!currentExam || currentExam.index === 0) return;
    currentExam.index -= 1;
    renderPage();
  });
  document.getElementById("next-exam-question")?.addEventListener("click", () => {
    if (!currentExam) return;
    currentExam.index = Math.min(currentExam.index + 1, jlptLevels.find((level) => level.id === currentExam.level).questions.length - 1);
    renderPage();
  });
  document.getElementById("submit-exam")?.addEventListener("click", () => {
    if (currentExam && currentExam.answers.includes(null) && !window.confirm("Masih ada soal yang belum dijawab. Kumpulkan simulasi sekarang?")) return;
    finishExam();
  });
  document.getElementById("submit-exam-shortcut")?.addEventListener("click", () => {
    if (currentExam && currentExam.answers.includes(null) && !window.confirm("Masih ada soal yang belum dijawab. Kumpulkan simulasi sekarang?")) return;
    finishExam();
  });
  document.getElementById("exit-exam")?.addEventListener("click", () => {
    if (!window.confirm("Keluar sekarang? Jawaban simulasi ini tidak akan disimpan.")) return;
    window.clearInterval(examTimer);
    currentExam = null;
    setPage("exams");
  });
  document.getElementById("finish-exam")?.addEventListener("click", () => {
    currentExam = null;
    setPage("exams");
  });
  document.querySelectorAll(".answer-option").forEach((button) => button.addEventListener("click", () => answerQuestion(button)));
  document.getElementById("exit-quiz")?.addEventListener("click", () => {
    currentQuiz = null;
    renderPage();
  });
  document.getElementById("finish-quiz")?.addEventListener("click", () => {
    if (Number.isInteger(currentQuiz?.groupIndex)) {
      activeScript = currentQuiz.type;
      activeGroupIndex = Math.min(currentQuiz.groupIndex + (state.kanaCompleted.includes(`${currentQuiz.type}:${currentQuiz.groupIndex}`) ? 1 : 0), kanaGroups[activeScript].length - 1);
      activePage = "kana";
      document.querySelectorAll("[data-page-link]").forEach((button) => button.classList.toggle("active", button.dataset.pageLink === "kana"));
    }
    currentQuiz = null;
    renderPage();
  });
  document.getElementById("reset-progress")?.addEventListener("click", () => {
    if (!window.confirm("Yakin mau mengatur ulang semua progres belajar?")) return;
    window.clearInterval(examTimer);
    currentExam = null;
    try {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(`${storageKey}-last-study`);
    } catch {
      showToast("Progres tidak bisa diatur ulang di browser ini.");
      return;
    }
    state.completed = [];
    state.kanaCompleted = [];
    state.vocabularyKnown = [];
    state.patternsCompleted = [];
    state.best = {};
    state.examHistory = [];
    state.quizzes = 0;
    state.streak = 0;
    document.getElementById("streak-count").textContent = "0";
    renderPage();
    showToast("Progres belajar sudah diatur ulang.");
  });
}

document.querySelectorAll("[data-page-link]").forEach((button) => button.addEventListener("click", (event) => {
  event.preventDefault();
  setPage(button.dataset.pageLink);
}));
document.getElementById("mobile-more-toggle")?.addEventListener("click", () => {
  const toggle = document.getElementById("mobile-more-toggle");
  const menu = document.getElementById("mobile-more-menu");
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  menu.hidden = isOpen;
});
document.addEventListener("click", (event) => {
  const menu = document.getElementById("mobile-more-menu");
  const toggle = document.getElementById("mobile-more-toggle");
  if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const menu = document.getElementById("mobile-more-menu");
  const toggle = document.getElementById("mobile-more-toggle");
  if (!menu.hidden) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }
});
document.getElementById("streak-count").textContent = state.streak;
renderPage();
