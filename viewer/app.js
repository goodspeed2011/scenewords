// Scenewords viewer: the 600-word picture wall and its word cards. No build step, no dependencies.
(() => {
  'use strict';

  const LANGS = ['en', 'zh', 'ko', 'ja', 'vi'];
  const LANG_NAMES = { en: 'English', zh: '中文', ko: '한국어', ja: '日本語', vi: 'Tiếng Việt' };
  // dictationtrainer.com has Chinese, Korean and Japanese pages under a prefix; English is unprefixed.
  // It has no Vietnamese pages, so Vietnamese readers go to the English ones.
  const SITE_PREFIX = { zh: '/zh', ko: '/ko', ja: '/ja' };
  const SERIES_URL = 'https://dictationtrainer.com/series/picture-words-600';
  // filled in by scripts/build_public.py once the repository exists; until then the link stays hidden
  const REPO_URL = /^https:/.test('https://github.com/goodspeed2011/scenewords') ? 'https://github.com/goodspeed2011/scenewords' : null;
  const UTM = { utm_source: 'scenewords', utm_medium: 'viewer', utm_campaign: 'open-source' };

  const T = {
    en: {
      title: 'Scenewords: 600 English words, one picture each',
      lede: '600 English words for work and everyday life. Each one has its own picture and one sentence that describes it.',
      source: 'Words from the TOEIC® Service List 1.2. Made by Dictation Trainer.',
      cta: 'Practice dictation on dictationtrainer.com',
      data: 'Download the data',
      search: 'Search 600 words',
      count: (n) => `${n} words`,
      empty: (q) => `No word matches “${q}”. Try fewer letters.`,
      play: 'Hear the word',
      prompt: 'Which word does this picture show?',
      turnBack: 'Show the word', turnFront: 'Show the picture', card: 'Word card',
      dictate: 'Dictate this sentence on dictationtrainer.com',
      prev: 'Previous word', next: 'Next word', close: 'Close', topics: 'Topics', language: 'Language',
      toLight: 'Switch to light mode', toDark: 'Switch to dark mode',
      pos: { noun: 'noun', verb: 'verb', adjective: 'adjective', adverb: 'adverb' },
      license: 'Pictures, word data, sentences and audio: CC BY-SA 4.0, to the extent we hold rights in them (the pictures and audio are AI-generated). Code: MIT.',
      credits: 'Word list: TOEIC® Service List 1.2 by Charles Browne and Brent Culligan, CC BY-SA 4.0. US pronunciations from the CMU Pronouncing Dictionary.',
      ets: 'TOEIC is a registered trademark of ETS. This project is not endorsed or approved by ETS.',
    },
    zh: {
      title: 'Scenewords：600 个英语词，每个词一幅图',
      lede: '600 个工作和生活中常用的英语词，每个词配一幅插画和一句描述这幅画的句子。',
      source: '词表选自 TOEIC® Service List 1.2。由 Dictation Trainer 制作。',
      cta: '去 dictationtrainer.com 练听写',
      data: '下载数据',
      search: '搜索 600 个词',
      count: (n) => `${n} 个词`,
      empty: (q) => `没有找到「${q}」。少输几个字母试试。`,
      play: '听单词',
      prompt: '这张图说的是哪个词？',
      turnBack: '看答案', turnFront: '看图', card: '单词卡',
      dictate: '去 dictationtrainer.com 听写这一句',
      prev: '上一个词', next: '下一个词', close: '关闭', topics: '话题', language: '语言',
      toLight: '切换到浅色模式', toDark: '切换到深色模式',
      pos: { noun: '名词', verb: '动词', adjective: '形容词', adverb: '副词' },
      license: '插画、词条数据、例句和发音按 CC BY-SA 4.0 授权，只在我们拥有的权利范围内有效（插画和发音由 AI 生成）。代码按 MIT 授权。',
      credits: '词表：TOEIC® Service List 1.2，作者 Charles Browne、Brent Culligan，CC BY-SA 4.0。美音音标来自 CMU 发音词典。',
      ets: 'TOEIC 是 ETS 的注册商标。本项目未经 ETS 认可或批准。',
    },
    ko: {
      title: 'Scenewords: 영어 단어 600개, 단어마다 그림 한 장',
      lede: '일과 일상에서 자주 쓰는 영어 단어 600개. 단어마다 그림 한 장과 그 그림을 설명하는 문장 하나가 있습니다.',
      source: '단어 목록: TOEIC® Service List 1.2. Dictation Trainer가 만들었습니다.',
      cta: 'dictationtrainer.com에서 받아쓰기 연습하기',
      data: '데이터 내려받기',
      search: '단어 600개 검색',
      count: (n) => `${n}개`,
      empty: (q) => `“${q}”와 일치하는 단어가 없습니다. 글자 수를 줄여 보세요.`,
      play: '단어 듣기',
      prompt: '이 그림은 어떤 단어일까요?',
      turnBack: '정답 보기', turnFront: '그림 보기', card: '단어 카드',
      dictate: 'dictationtrainer.com에서 이 문장 받아쓰기',
      prev: '이전 단어', next: '다음 단어', close: '닫기', topics: '주제', language: '언어',
      toLight: '밝은 모드로 전환', toDark: '어두운 모드로 전환',
      pos: { noun: '명사', verb: '동사', adjective: '형용사', adverb: '부사' },
      license: '그림, 단어 데이터, 예문, 발음: CC BY-SA 4.0. 저희가 가진 권리 범위 안에서만 유효합니다(그림과 발음은 AI로 생성). 코드: MIT.',
      credits: '단어 목록: TOEIC® Service List 1.2, Charles Browne·Brent Culligan, CC BY-SA 4.0. 미국식 발음 기호: CMU 발음 사전.',
      ets: 'TOEIC은 ETS의 등록 상표입니다. 이 프로젝트는 ETS의 보증이나 승인을 받지 않았습니다.',
    },
    ja: {
      title: 'Scenewords：英単語 600 語、1語に1枚の絵',
      lede: '仕事と日常でよく使う英単語 600 語。1語ごとに1枚の絵と、その絵を説明する1つの文があります。',
      source: '単語リスト：TOEIC® Service List 1.2。Dictation Trainer が制作。',
      cta: 'dictationtrainer.com で書き取り練習',
      data: 'データをダウンロード',
      search: '600 語を検索',
      count: (n) => `${n} 語`,
      empty: (q) => `「${q}」に一致する単語はありません。文字数を減らしてみてください。`,
      play: '単語を聞く',
      prompt: 'この絵が表す単語は？',
      turnBack: '答えを見る', turnFront: '絵を見る', card: '単語カード',
      dictate: 'dictationtrainer.com でこの文を書き取る',
      prev: '前の単語', next: '次の単語', close: '閉じる', topics: 'トピック', language: '言語',
      toLight: 'ライトモードに切り替え', toDark: 'ダークモードに切り替え',
      pos: { noun: '名詞', verb: '動詞', adjective: '形容詞', adverb: '副詞' },
      license: 'イラスト・単語データ・例文・発音：CC BY-SA 4.0（当方が持つ権利の範囲内。イラストと発音は AI で生成）。コード：MIT。',
      credits: '単語リスト：TOEIC® Service List 1.2（Charles Browne、Brent Culligan）、CC BY-SA 4.0。米国式発音記号：CMU 発音辞書。',
      ets: 'TOEIC は ETS の登録商標です。このプロジェクトは ETS による推奨・承認を受けたものではありません。',
    },
    vi: {
      title: 'Scenewords: 600 từ tiếng Anh, mỗi từ một bức tranh',
      lede: '600 từ tiếng Anh thường dùng trong công việc và đời sống. Mỗi từ có một bức tranh riêng và một câu mô tả bức tranh đó.',
      source: 'Danh sách từ: TOEIC® Service List 1.2. Do Dictation Trainer thực hiện.',
      cta: 'Luyện nghe chép chính tả trên dictationtrainer.com',
      data: 'Tải dữ liệu',
      search: 'Tìm trong 600 từ',
      count: (n) => `${n} từ`,
      empty: (q) => `Không có từ nào khớp với “${q}”. Hãy thử gõ ít chữ hơn.`,
      play: 'Nghe từ',
      prompt: 'Bức tranh này nói về từ nào?',
      turnBack: 'Xem đáp án', turnFront: 'Xem tranh', card: 'Thẻ từ',
      dictate: 'Nghe và chép câu này trên dictationtrainer.com',
      prev: 'Từ trước', next: 'Từ tiếp theo', close: 'Đóng', topics: 'Chủ đề', language: 'Ngôn ngữ',
      toLight: 'Chuyển sang chế độ sáng', toDark: 'Chuyển sang chế độ tối',
      pos: { noun: 'danh từ', verb: 'động từ', adjective: 'tính từ', adverb: 'trạng từ' },
      license: 'Tranh, dữ liệu từ, câu ví dụ và phát âm: CC BY-SA 4.0, trong phạm vi quyền mà chúng tôi có (tranh và phát âm do AI tạo). Mã nguồn: MIT.',
      credits: 'Danh sách từ: TOEIC® Service List 1.2 của Charles Browne và Brent Culligan, CC BY-SA 4.0. Phiên âm Mỹ: CMU Pronouncing Dictionary.',
      ets: 'TOEIC là nhãn hiệu đã đăng ký của ETS. Dự án này không được ETS xác nhận hay phê duyệt.',
    },
  };

  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  // some browsers refuse to rewrite the address of a page opened as a file; the page works without it
  const rewriteUrl = (u) => { try { history.replaceState(null, '', u); } catch { /* keep the old address */ } };
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode: fine */ } },
    remove: (k) => { try { localStorage.removeItem(k); } catch { /* private mode: fine */ } },
  };

  // Light or dark: the system's choice, unless the reader picks the other one with the button.
  // Picking what the system shows again forgets the choice, so the page follows the system again.
  // index.html applies a saved choice before the page paints.
  const darkSystem = matchMedia('(prefers-color-scheme: dark)');
  const systemTheme = () => (darkSystem.matches ? 'dark' : 'light');
  const themeNow = () => document.documentElement.dataset.theme || systemTheme();

  function setThemeLabel() {
    const label = themeNow() === 'dark' ? T[lang].toLight : T[lang].toDark;
    $('theme').setAttribute('aria-label', label);
    $('theme').title = label;
  }

  function switchTheme() {
    const root = document.documentElement;
    const next = themeNow() === 'dark' ? 'light' : 'dark';
    if (next === systemTheme()) {
      delete root.dataset.theme;
      store.remove('scenewords.theme');
    } else {
      root.dataset.theme = next;
      store.set('scenewords.theme', next);
    }
    document.querySelector('meta[name="color-scheme"]').content = root.dataset.theme || 'light dark';
    setThemeLabel();
  }

  let lang = 'en';
  let words = [];
  let topics = [];
  const byId = new Map();
  const tiles = new Map();
  const sections = new Map();
  let visible = [];
  let current = null;

  // Motion: code laid over the static pictures, the same as on dictationtrainer.com.
  // The pictures never change. With "reduce motion" on, nothing moves and the final state shows at once.
  const calm = matchMedia('(prefers-reduced-motion: reduce)');
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  /** Resolves once the image is loaded and decoded, or after `ms` whatever happens. */
  function ready(img, ms = 1500) {
    const loaded = img.complete ? Promise.resolve() : new Promise((r) => {
      img.addEventListener('load', r, { once: true });
      img.addEventListener('error', r, { once: true });
    });
    return Promise.race([loaded.then(() => img.decode().catch(() => {})), sleep(ms)]);
  }

  /** Restart the CSS animations keyed on data-motion by clearing it for one style pass. */
  function replay(node, state) {
    node.dataset.motion = '';
    void node.offsetWidth;
    node.dataset.motion = state;
  }

  // English unless the address asks for another language (?lang=zh) or the reader chose one here
  // before. The browser's own language is not used (11-27: the maintainer wants English first).
  function pickLang() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = store.get('scenewords.lang');
    if (LANGS.includes(saved)) return saved;
    return 'en';
  }

  function siteUrl(href, medium) {
    const u = new URL(href);
    if (SITE_PREFIX[lang]) u.pathname = SITE_PREFIX[lang] + u.pathname;
    for (const [k, v] of Object.entries({ ...UTM, utm_medium: medium })) u.searchParams.set(k, v);
    return u.toString();
  }

  const gloss = (w) => (lang === 'en' ? null : w.definition[lang]);

  function applyText() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    for (const n of document.querySelectorAll('[data-i18n]')) {
      const v = t[n.dataset.i18n];
      if (typeof v === 'string') n.textContent = v;
    }
    $('q').placeholder = t.search;
    $('topics').setAttribute('aria-label', t.topics);
    document.querySelector('.langs').setAttribute('aria-label', t.language);
    $('card').setAttribute('aria-label', t.card);
    $('card-prev').setAttribute('aria-label', t.prev);
    $('card-next').setAttribute('aria-label', t.next);
    $('card-close').setAttribute('aria-label', t.close);
    setTurnLabel();
    setThemeLabel();
    $('cta').href = siteUrl(SERIES_URL, 'viewer');
    if (REPO_URL) { $('repo').href = REPO_URL; $('repo').hidden = false; }
    for (const a of document.querySelectorAll('.langs a')) {
      a.setAttribute('aria-current', String(a.dataset.lang === lang));
    }
    for (const t2 of topics) {
      const s = sections.get(t2.id);
      s.querySelector('h2').textContent = t2.name[lang];
      s.querySelector('.topic-head span').textContent = T[lang].count(t2.count);
      document.querySelector(`.topics [data-topic="${t2.id}"]`).textContent = t2.name[lang];
    }
    for (const w of words) {
      tiles.get(w.id).querySelector('.tile-gloss').textContent = gloss(w) || t.pos[w.pos] || '';
    }
    if (current) fillCard(current);
    filter();
  }

  function setLang(l) {
    lang = l;
    store.set('scenewords.lang', l);
    const u = new URL(location.href);
    u.searchParams.set('lang', l);
    rewriteUrl(u);
    applyText();
  }

  function buildLangNav() {
    const nav = document.querySelector('.langs');
    for (const l of LANGS) {
      const a = el('a', null, LANG_NAMES[l]);
      a.href = `?lang=${l}`;
      a.lang = l;
      a.dataset.lang = l;
      a.addEventListener('click', (e) => { e.preventDefault(); setLang(l); });
      nav.append(a);
    }
  }

  function buildWall() {
    const wall = $('wall');
    const chips = $('topics');
    for (const t of topics) {
      const chip = el('button', null, t.name[lang]);
      chip.type = 'button';
      chip.dataset.topic = t.id;
      chip.addEventListener('click', () => {
        const s = sections.get(t.id);
        s.scrollIntoView({ block: 'start' });
        lightUp(inView(s.querySelectorAll('li')), 120);
        wallLit = true;
      });
      chips.append(chip);

      const section = el('section', 'topic');
      section.id = `topic-${t.id}`;
      const head = el('div', 'topic-head');
      head.append(el('h2'), el('span'));
      const grid = el('ul', 'grid');
      section.append(head, grid);
      sections.set(t.id, section);
      wall.append(section);
    }
    for (const w of words) {
      const li = el('li');
      const a = el('a', 'tile');
      a.href = `#${w.id}`;
      const img = el('img', 'tile-img');
      img.src = w.image.thumb;
      img.alt = w.sentence.text;
      img.width = 256;
      img.height = 256;
      img.loading = 'lazy';
      img.decoding = 'async';
      const frame = el('span', 'tile-frame');
      frame.append(img);
      const pic = el('span', 'tile-pic');
      pic.append(frame);
      a.append(pic, el('span', 'tile-word', w.word), el('span', 'tile-gloss'));
      li.append(a);
      tiles.set(w.id, li);
      sections.get(w.topic).querySelector('.grid').append(li);
    }
    const empty = el('p', 'empty');
    empty.id = 'empty';
    empty.hidden = true;
    wall.append(empty);
  }

  /** The tiles among `lis` that are on screen below the sticky toolbar, in page order. */
  function inView(lis) {
    const top = document.querySelector('.toolbar').getBoundingClientRect().bottom;
    return [...lis].filter((li) => {
      if (li.hidden) return false;
      const r = li.querySelector('.tile-pic').getBoundingClientRect();
      return r.width > 0 && r.bottom > top + 8 && r.top < innerHeight - 8;
    });
  }

  // Tiles light up as a lesson's tiles do on the site's picture wall: each picture opens as a
  // circle over its own grey copy, with one ring, 90ms after the one before it. Here every tile
  // starts unlit and lights the first time it is scrolled into view.
  const LIGHT = { each: 640, gap: 90, stagger: 24 };
  const lighting = new WeakMap();
  const waiting = new Set();
  let lightRun = 0;
  let wallWatch = null;
  let wallLit = false;

  function unlight(li) {
    clearTimeout(lighting.get(li)?.timer);
    lighting.delete(li);
    li.classList.remove('lit-wait', 'lighting');
    li.querySelector('.tile-ghost')?.remove();
    li.querySelector('.tile-ring')?.remove();
  }

  /** Light these tiles in order, the first after `start` ms; each waits for its own picture. */
  function lightUp(lis, start = 60) {
    if (calm.matches || !lis.length) return;
    const run = ++lightRun;
    lis.forEach((li, i) => {
      unlight(li);
      const img = li.querySelector('.tile-img');
      const ghost = el('img', 'tile-ghost');
      ghost.alt = '';
      ghost.src = img.src;
      img.before(ghost);
      const ring = el('span', 'tile-ring');
      ring.setAttribute('aria-hidden', 'true');
      li.querySelector('.tile-pic').append(ring);
      li.classList.add('lit-wait'); // the grey copy shows, exactly as the unlit tile looked
      li.classList.remove('unlit');
      lighting.set(li, { run });
      const at = start + Math.min(i, LIGHT.stagger) * LIGHT.gap;
      Promise.all([ready(img, 4000), sleep(at)]).then(() => {
        if (lighting.get(li)?.run !== run) return; // a later call has taken this tile over
        li.classList.replace('lit-wait', 'lighting');
        lighting.set(li, { run, timer: setTimeout(() => unlight(li), LIGHT.each + 120) });
      });
    });
  }

  /** Light the unlit tiles that have come into view. Waits while a word card covers the wall. */
  function flushLight() {
    if (!wallWatch || $('card').open || !waiting.size) return;
    const batch = [];
    for (const li of waiting) {
      if (li.hidden) continue;
      wallWatch.unobserve(li);
      if (li.classList.contains('unlit')) batch.push(li);
    }
    waiting.clear();
    if (!batch.length) return;
    batch.sort((x, y) => (x.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
    lightUp(batch, wallLit ? 60 : 350);
    wallLit = true;
  }

  function watchWall() {
    if (calm.matches || !('IntersectionObserver' in window)) return;
    let reported = false;
    const under = Math.round(document.querySelector('.toolbar').offsetHeight);
    wallWatch = new IntersectionObserver((entries) => {
      reported = true;
      for (const e of entries) {
        if (e.isIntersecting) waiting.add(e.target);
        else waiting.delete(e.target);
      }
      flushLight();
    }, { rootMargin: `-${under}px 0px 0px 0px`, threshold: 0.3 });
    for (const li of tiles.values()) {
      li.classList.add('unlit');
      wallWatch.observe(li);
    }
    // the observer reports within a frame or two; if it never does, do not leave the wall grey
    setTimeout(() => {
      if (reported || document.visibilityState !== 'visible') return;
      for (const li of tiles.values()) li.classList.remove('unlit');
    }, 5000);
  }

  const norm = (s) => (s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');

  function filter() {
    const q = norm($('q').value.trim());
    visible = [];
    const shown = new Map();
    for (const w of words) {
      const hay = q ? norm([w.word, w.definition.en, w.definition[lang]].join(' ')) : '';
      const ok = !q || hay.includes(q);
      tiles.get(w.id).hidden = !ok;
      if (ok) { visible.push(w); shown.set(w.topic, (shown.get(w.topic) || 0) + 1); }
    }
    for (const t of topics) sections.get(t.id).hidden = !shown.get(t.id);
    const empty = $('empty');
    empty.hidden = visible.length > 0;
    if (!visible.length) empty.textContent = T[lang].empty($('q').value.trim());
  }

  function sentenceNodes(text, target) {
    const i = target ? text.indexOf(target) : -1;
    if (i < 0) return [document.createTextNode(text)];
    return [document.createTextNode(text.slice(0, i)), el('strong', null, target),
      document.createTextNode(text.slice(i + target.length))];
  }

  function buildPicture() {
    const fig = $('card-picture');
    const ghost = el('img', 'ghost');
    ghost.alt = '';
    const pic = el('img', 'pic');
    pic.width = 768;
    pic.height = 768;
    const opening = el('div', 'open');
    opening.append(pic);
    const frame = el('div', 'frame'); // clips the pictures; the rings outside it may leave the square
    frame.append(ghost, opening);
    fig.append(frame);
    for (const cls of ['ring', 'ring r2', 'ring r3']) {
      const ring = el('span', cls);
      ring.setAttribute('aria-hidden', 'true');
      fig.append(ring);
    }
    const thumb = el('img'); // the back's small picture; the word beside it names it
    thumb.alt = '';
    thumb.width = 256;
    thumb.height = 256;
    $('card-thumb').append(thumb);
  }

  // The card has two faces, as on the Anki cards: the front asks with the picture, the back
  // answers. Every card starts on its front; the picture, the back's thumbnail, the button under
  // the card, Space and Enter turn it over.
  let face = 'front';

  function setTurnLabel() {
    $('card-turn-label').textContent = face === 'front' ? T[lang].turnBack : T[lang].turnFront;
  }

  /** Show one face. `animate` false switches at once, with no turning. */
  function turn(to, animate = true) {
    const card = $('card-turner');
    if (animate && to === face) return;
    face = to;
    if (!animate) card.classList.add('no-turn');
    card.classList.toggle('is-back', to === 'back');
    $('card-front').inert = to !== 'front';
    $('card-back').inert = to !== 'back';
    if (!animate) {
      void card.offsetWidth;
      card.classList.remove('no-turn');
    }
    setTurnLabel();
    $('card-said').textContent = to === 'back' && current ? [current.word, gloss(current)].filter(Boolean).join(', ') : '';
    // focus never stays on a face that has just turned away
    const d = $('card');
    if (d.open && (!d.contains(document.activeElement) || document.activeElement.closest('[inert]'))) $('card-turn').focus();
  }

  let picSeq = 0;

  /**
   * Put w's picture in the card, the same way whenever it changes (opened from the wall, or
   * stepped to with the arrows from either face): it opens from its centre inside three rings
   * and turns from grey to colour. A newer picture cuts an unfinished one short.
   */
  async function showPicture(w) {
    const my = ++picSeq;
    const card = document.querySelector('.card');
    const ghost = card.querySelector('.ghost');
    const pic = card.querySelector('.pic');
    pic.alt = w.sentence.text;
    if (calm.matches) {
      pic.src = w.image.file;
      card.dataset.motion = '';
      return;
    }
    ghost.src = w.image.thumb;
    card.dataset.motion = 'wait';
    pic.src = w.image.file;
    await ready(pic);
    if (my !== picSeq) return;
    replay(card, 'reveal');
  }

  function preloadAround(w) {
    const i = visible.indexOf(w);
    if (i < 0) return;
    for (const n of [visible[i - 1], visible[i + 1]]) if (n) new Image().src = n.image.file;
  }

  // While the word sounds, three rings leave the play button, 0.6s apart. When it ends, the rings
  // already out finish and no new one starts.
  let waves = [];
  const waveNodes = () => document.querySelectorAll('#card-play .wave');

  function wavesStop() {
    for (const n of waveNodes()) for (const a of n.getAnimations()) a.cancel();
    waves = [];
  }

  function wavesStart() {
    wavesStop();
    if (calm.matches) return;
    waves = [...waveNodes()].map((n, i) => n.animate(
      [{ inset: '-1px', opacity: 0.6 }, { inset: '-17px', opacity: 0 }],
      { duration: 1800, delay: i * 600, iterations: Infinity, easing: 'cubic-bezier(0, .55, .45, 1)' },
    ));
  }

  function wavesFinish() {
    for (const a of waves) {
      const { delay, duration } = a.effect.getTiming();
      const t = (a.currentTime ?? 0) - delay;
      if (t < 0) a.cancel();
      else a.effect.updateTiming({ iterations: Math.floor(t / duration) + 1 });
    }
    waves = [];
  }

  const POS_SHORT = { noun: 'n.', verb: 'v.', adjective: 'adj.', adverb: 'adv.' };

  function fillCard(w) {
    const t = T[lang];
    $('card-thumb').firstChild.src = w.image.thumb;
    $('card-word').textContent = w.word;
    $('card-word').style.setProperty('--chars', String(Math.max(7, w.word.length)));
    $('card-pos').textContent = POS_SHORT[w.pos] || w.pos;
    $('card-pos').title = t.pos[w.pos] || w.pos;
    $('card-ipa').textContent = w.ipa.us || '';
    $('card-play').hidden = !w.audio.us;
    $('card-gloss').textContent = gloss(w) || '';
    $('card-def').textContent = w.definition.en;
    $('card-sentence').replaceChildren(...sentenceNodes(w.sentence.text, w.sentence.target));
    $('card-dictate').href = siteUrl(w.practice, 'viewer');
    if (face === 'back') $('card-said').textContent = [w.word, gloss(w)].filter(Boolean).join(', ');
    const i = visible.indexOf(w);
    $('card-prev').disabled = i <= 0;
    $('card-next').disabled = i < 0 || i >= visible.length - 1;
  }

  function stopVoice() {
    const v = $('voice');
    v.pause();
    wavesStop();
    $('card-play').setAttribute('aria-pressed', 'false');
  }

  function open(id) {
    const w = byId.get(id);
    if (!w) return;
    stopVoice();
    const d = $('card');
    const stepping = d.open && current !== null;
    current = w;
    fillCard(w);
    turn('front', false); // every card starts on its front, whichever face the last one showed
    if (!d.open) d.showModal();
    showPicture(w);
    preloadAround(w);
    if (!stepping) {
      ($('card-play').hidden ? $('card-turn') : $('card-play')).focus();
    } else if (!d.contains(document.activeElement) || document.activeElement.disabled) {
      // stepping keeps focus on the arrow that was pressed, unless it has just been disabled
      $('card-turn').focus();
    }
  }

  function step(delta) {
    if (!current) return;
    const i = visible.indexOf(current);
    const next = visible[i + delta];
    if (!next) return;
    rewriteUrl(`#${next.id}`);
    open(next.id);
  }

  function clearHash() {
    if (location.hash) rewriteUrl(location.pathname + location.search);
  }

  function wireCard() {
    const d = $('card');
    $('card-close').addEventListener('click', () => d.close());
    $('card-prev').addEventListener('click', () => step(-1));
    $('card-next').addEventListener('click', () => step(1));
    d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
    d.addEventListener('close', () => {
      stopVoice();
      current = null;
      picSeq += 1;
      turn('front', false);
      clearHash();
      flushLight();
    });
    d.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
      // Space and Enter turn the card, unless a button or link has focus and takes the key itself
      if ((e.key === ' ' || e.key === 'Enter') && !e.target.closest('button, a')) {
        e.preventDefault();
        turn(face === 'front' ? 'back' : 'front');
      }
    });
    $('card-turn').addEventListener('click', () => turn(face === 'front' ? 'back' : 'front'));
    $('card-picture').addEventListener('click', () => turn('back'));
    $('card-thumb').addEventListener('click', () => turn('front'));
    $('card-play').addEventListener('click', () => {
      const v = $('voice');
      if (!current || !current.audio.us) return;
      const src = new URL(current.audio.us, location.href).toString();
      if (v.src !== src) v.src = src;
      v.currentTime = 0;
      $('card-play').setAttribute('aria-pressed', 'true');
      v.play().catch(() => $('card-play').setAttribute('aria-pressed', 'false'));
    });
    $('voice').addEventListener('playing', wavesStart);
    $('voice').addEventListener('pause', wavesFinish);
    $('voice').addEventListener('ended', () => {
      $('card-play').setAttribute('aria-pressed', 'false');
      wavesFinish();
    });
    window.addEventListener('hashchange', () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (byId.has(id)) open(id);
    });
  }

  async function start() {
    lang = pickLang();
    buildLangNav();
    $('theme').addEventListener('click', switchTheme);
    darkSystem.addEventListener('change', setThemeLabel);
    setThemeLabel();
    // viewer/data.js carries the data as a script, so the page also works when opened as a file.
    // Without it, read the JSON (this needs a web server: browsers refuse fetch() on file pages).
    const getJson = (path) => fetch(path).then((r) => {
      if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
      return r.json();
    });
    try {
      if (window.SCENEWORDS) ({ words, topics } = window.SCENEWORDS);
      else [words, topics] = await Promise.all([getJson('data/words.json'), getJson('data/topics.json')]);
    } catch (err) {
      const p = el('p', 'empty');
      p.append(`The word list did not load (${err.message}). Open `,
        Object.assign(el('a', null, 'data/words.json'), { href: 'data/words.json' }), ' directly, or reload the page.');
      $('wall').append(p);
      return;
    }
    for (const w of words) byId.set(w.id, w);
    buildWall();
    buildPicture();
    wireCard();
    $('q').addEventListener('input', filter);
    applyText();
    const id = decodeURIComponent(location.hash.slice(1));
    if (byId.has(id)) open(id);
    watchWall();
  }

  start();
})();
