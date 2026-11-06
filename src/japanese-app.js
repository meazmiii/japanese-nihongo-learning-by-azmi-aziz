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
      quizzes: Number.isFinite(saved.quizzes) ? saved.quizzes : 0,
      streak: Number.isFinite(saved.streak) ? saved.streak : 0,
    };
  } catch {
    return { completed: [], kanaCompleted: [], vocabularyKnown: [], patternsCompleted: [], best: {}, quizzes: 0, streak: 0 };
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
