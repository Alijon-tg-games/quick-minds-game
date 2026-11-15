var module = { exports: {} };
// Quick Minds: algebra va geometriya, 30 savol (10 oson, 10 o'rta, 10 qiyin). Brauzer ham, server ham shu faylni ishlatadi.
(function (root) {
  function mulberry32(a){return function(){a|=0;a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}}
  const TIME_MS = 25000;
  const PICK = { 1: { hand: 8, gen: 2 }, 2: { hand: 8, gen: 2 }, 3: { hand: 10, gen: 0 } };
  const rint = (r, a, b) => a + Math.floor(r() * (b - a + 1));
  function shuffle(arr, r) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // [savol, to'g'ri javob, [3 ta noto'g'ri javob]]
  const HAND = {
    1: [
      ["2x = 10 bo'lsa, x nechaga teng?", "5", ["2", "10", "20"]],
      ["x + 7 = 15 bo'lsa, x nechaga teng?", "8", ["7", "9", "22"]],
      ["3 + 4 × 2 nechaga teng?", "11", ["14", "10", "9"]],
      ["(3 + 4) × 2 nechaga teng?", "14", ["11", "10", "12"]],
      ["Uchburchakning ichki burchaklari yig'indisi necha gradus?", "180°", ["90°", "270°", "360°"]],
      ["To'g'ri to'rtburchakning tomonlari 3 sm va 5 sm. Perimetri necha sm?", "16 sm", ["15 sm", "8 sm", "12 sm"]],
      ["Kvadratning tomoni 4 sm. Yuzi necha kv.sm?", "16", ["8", "12", "20"]],
      ["x = 3 bo'lsa, x · x nechaga teng?", "9", ["6", "3", "12"]],
      ["a = 2, b = 5 bo'lsa, a + b nechaga teng?", "7", ["10", "3", "25"]],
      ["Doiraning radiusi 1 bo'lsa, diametri necha?", "2", ["1", "3", "π"]],
      ["Qaysi son tub?", "7", ["9", "15", "21"]],
      ["Tomoni 6 sm bo'lgan kvadratning perimetri necha sm?", "24 sm", ["12 sm", "36 sm", "18 sm"]],
      ["Teng yonli to'g'ri burchakli uchburchakning o'tkir burchagi necha gradus?", "45°", ["30°", "60°", "90°"]],
      ["5 − (−3) nechaga teng?", "8", ["2", "−8", "−2"]],
      ["(−2) × (−4) nechaga teng?", "8", ["−8", "6", "−6"]],
      ["Kubning nechta yog'i bor?", "6", ["8", "12", "4"]],
      ["x = 2 bo'lsa, 3x − 1 nechaga teng?", "5", ["7", "4", "6"]],
      ["Yuzi 12 kv.sm, eni 3 sm bo'lgan to'g'ri to'rtburchakning uzunligi necha sm?", "4 sm", ["9 sm", "15 sm", "36 sm"]],
    ],
    2: [
      ["2(x + 3) = 14 bo'lsa, x nechaga teng?", "4", ["5", "3", "11"]],
      ["x² − 9 = 0 tenglamaning musbat ildizi nechaga teng?", "3", ["9", "2", "81"]],
      ["x² − 5x + 6 = 0 tenglama ildizlarining yig'indisi nechaga teng?", "5", ["6", "−5", "2"]],
      ["(a + b)² ni yoyib yozsak, qaysi ifoda to'g'ri?", "a² + 2ab + b²", ["a² + b²", "a² − 2ab + b²", "2a + 2b"]],
      ["3x − 7 = 2x + 5 bo'lsa, x nechaga teng?", "12", ["2", "−2", "6"]],
      ["x + y = 10 va x − y = 4 bo'lsa, x nechaga teng?", "7", ["6", "3", "14"]],
      ["Teng yonli uchburchakning asosidagi burchagi 40° bo'lsa, uchidagi burchak necha gradus?", "100°", ["80°", "40°", "140°"]],
      ["Kvadratning diagonali 2√2 bo'lsa, tomoni nechaga teng?", "2", ["√2", "4", "2√2"]],
      ["Katetlari 6 va 8 bo'lgan to'g'ri burchakli uchburchakning gipotenuzasi nechaga teng?", "10", ["14", "9", "12"]],
      ["Aylana uzunligi formulasi qaysi?", "2πr", ["πr²", "πr", "2πr²"]],
      ["x / 4 = 6 bo'lsa, x nechaga teng?", "24", ["10", "1,5", "2"]],
      ["Ikki sonning yig'indisi 20, ayirmasi 4. Katta son nechaga teng?", "12", ["8", "16", "10"]],
      ["Romb diagonallari 6 va 8 bo'lsa, yuzi necha kv.birlik?", "24", ["14", "48", "28"]],
      ["(x − 2)(x + 5) ko'paytmani yoyganda x oldidagi koeffitsient nechaga teng?", "3", ["10", "−10", "7"]],
      ["Parallelogrammning bitta burchagi 110° bo'lsa, unga qo'shni burchak necha gradus?", "70°", ["110°", "250°", "90°"]],
      ["y = 2x − 3 bo'lsa, x = 5 da y nechaga teng?", "7", ["10", "2", "13"]],
    ],
    3: [
      ["Kvadrat doiraga ichki chizilgan, kvadratning tomoni 2√2. Doira radiusi nechaga teng?", "2", ["2√2", "√2", "4"]],
      ["x² − 6x + k = 0 tenglamaning ildizlari teng bo'lsa, k nechaga teng?", "9", ["6", "3", "36"]],
      ["a + 1/a = 3 bo'lsa, a² + 1/a² nechaga teng?", "7", ["9", "5", "3"]],
      ["2x + y = 7 va x + 2y = 8 bo'lsa, x + y nechaga teng?", "5", ["15", "3", "7"]],
      ["log₂ 32 nechaga teng?", "5", ["4", "6", "16"]],
      ["x² + 4x + 5 ifodaning eng kichik qiymati nechaga teng?", "1", ["−4", "5", "0"]],
      ["Arifmetik progressiyaning birinchi hadi 3, ayirmasi 4. Uning 10-hadi nechaga teng?", "39", ["43", "35", "40"]],
      ["Geometrik progressiyada b₁ = 2, q = 3. b₄ nechaga teng?", "54", ["18", "24", "162"]],
      ["Tomonlari 5, 12 va 13 bo'lgan uchburchakning yuzi necha kv.birlik?", "30", ["60", "65", "25"]],
      ["Teng tomonli uchburchakning tomoni 6 bo'lsa, balandligi nechaga teng?", "3√3", ["6√3", "3√2", "2√3"]],
      ["Muntazam oltiburchakning tomoni 4 bo'lsa, perimetri nechaga teng?", "24", ["20", "16", "28"]],
      ["Doiraga ichki chizilgan kvadratning yuzi 18 bo'lsa, doiraning yuzi nechaga teng?", "9π", ["18π", "6π", "3π"]],
      ["Konusning asos radiusi 3, yasovchisi 5. Balandligi nechaga teng?", "4", ["√34", "8", "3"]],
      ["Kubning hajmi 27 bo'lsa, sirtining yuzi nechaga teng?", "54", ["27", "81", "36"]],
      ["sin 30° + cos 60° nechaga teng?", "1", ["0", "√3", "1/2"]],
      ["Kvadratlarning yuzlari nisbati 9:4. Tomonlari nisbati nechaga teng?", "3:2", ["9:4", "4:9", "2:3"]],
      ["x³ − 3x² − 4x + 12 = 0 tenglama ildizlarining yig'indisi nechaga teng?", "3", ["−3", "4", "12"]],
      ["Parallelogrammning tomonlari 6 va 10, o'tkir burchagi 60°. Yuzi nechaga teng?", "30√3", ["60√3", "15√3", "30"]],
      ["2^(x+1) = 32 bo'lsa, x nechaga teng?", "4", ["5", "3", "16"]],
      ["x² − 7x + 10 = 0 tenglama ildizlari x₁ va x₂. x₁² + x₂² nechaga teng?", "29", ["49", "39", "19"]],
      ["Ko'pburchakning ichki burchaklari yig'indisi 1440° bo'lsa, uning nechta tomoni bor?", "10", ["8", "9", "12"]],
      ["Tomoni 10 bo'lgan kvadratga ichki chizilgan doiraning yuzi nechaga teng?", "25π", ["50π", "100π", "10π"]],
    ],
  };

  // ---------- Algebraik generatorlar (oson va o'rta) ----------
  function opt3(ans, cands, r) {
    const set = [];
    for (const c of shuffle(cands, r)) if (c !== ans && c > 0 && !set.includes(c)) set.push(c);
    return set.slice(0, 3).map(String);
  }
  const GEN = {
    1: [
      r => { const x = rint(r, 2, 12), a = rint(r, 2, 15); return [`x + ${a} = ${x + a} bo'lsa, x nechaga teng?`, String(x), opt3(x, [x + 1, x - 1, x + 2, x - 2, a, x + a], r)]; },
      r => { const x = rint(r, 2, 12), k = rint(r, 2, 9); return [`${k}x = ${k * x} bo'lsa, x nechaga teng?`, String(x), opt3(x, [x + 1, x - 1, x + 3, k, k * x, x + 2], r)]; },
    ],
    2: [
      r => { const a = rint(r, 2, 9), b = rint(r, 1, 20), x = rint(r, 1, 12), c = a * x + b; return [`${a}x + ${b} = ${c} bo'lsa, x nechaga teng?`, String(x), opt3(x, [x + 1, x - 1, x + 2, b, c, a], r)]; },
      r => { const s = rint(r, 10, 30), x = rint(r, 1, s - 2); return [`x + y = ${s} va x = ${x} bo'lsa, y nechaga teng?`, String(s - x), opt3(s - x, [s - x + 1, s - x - 1, s - x + 2, x, s, s - x - 2], r)]; },
    ],
  };

  function build(seed) {
    const r = mulberry32(seed >>> 0);
    const out = [];
    for (const d of [1, 2, 3]) {
      const items = shuffle(HAND[d], r).slice(0, PICK[d].hand);
      const gens = GEN[d] || [];
      const order = shuffle(gens.map((_, i) => i), r);
      for (let i = 0; i < PICK[d].gen; i++) items.push(gens[order[i % order.length]](r));
      for (const q of shuffle(items, r)) {
        const opts = shuffle([q[1]].concat(q[2]), r);
        out.push({ d, q: q[0], o: opts, a: opts.indexOf(q[1]) });
      }
    }
    return out;
  }
  function publicQuiz(seed) { return build(seed).map(({ d, q, o }) => ({ d, q, o })); }
  function points(correct, ms) {
    if (!correct) return 0;
    const t = Math.min(Math.max(ms | 0, 0), TIME_MS);
    return 100 + Math.round(100 * (1 - t / TIME_MS));
  }
  function scoreOf(seed, answers) {
    const quiz = build(seed);
    if (!Array.isArray(answers) || answers.length !== quiz.length) return { valid: false, error: 'format' };
    let score = 0, correct = 0, totalMs = 0;
    for (let i = 0; i < quiz.length; i++) {
      const a = answers[i];
      if (!a || !Number.isInteger(a.a) || a.a < -1 || a.a > 3 || !Number.isFinite(a.t) || a.t < 0 || a.t > TIME_MS + 1000) return { valid: false, error: 'format' };
      const ok = a.a === quiz[i].a;
      if (ok) correct++;
      score += points(ok, a.t); totalMs += Math.min(a.t, TIME_MS);
    }
    return { valid: true, score, correct, totalMs };
  }

  const api = { build, publicQuiz, scoreOf, points, TIME_MS, HAND, GEN };
  if (typeof module !== 'undefined') module.exports = api; else root.LogicEngine = api;
})(typeof self !== 'undefined' ? self : this);

const E = module.exports;
// ---------- Yordamchilar ----------
const CORS = {
  'content-type': 'application/json; charset=utf-8',
  'access-control-allow-origin': '*',
  'access-control-allow-headers': 'content-type',
  'access-control-allow-methods': 'GET,POST,OPTIONS',
};
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: CORS });

// Telegram initData imzosini tekshiradi (bot tokeni bilan)
async function verify(initData, token) {
  const p = new URLSearchParams(initData || '');
  const hash = p.get('hash');
  if (!hash || !token) return null;
  p.delete('hash');
  const check = [...p.entries()].sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)).map(([k, v]) => k + '=' + v).join('\n');
  const enc = new TextEncoder();
  const k1 = await crypto.subtle.importKey('raw', enc.encode('WebAppData'), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const secret = await crypto.subtle.sign('HMAC', k1, enc.encode(token));
  const k2 = await crypto.subtle.importKey('raw', secret, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', k2, enc.encode(check));
  const hex = [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');
  if (hex !== hash) return null;
  const authDate = Number(p.get('auth_date'));
  if (!authDate || Date.now() / 1000 - authDate > 86400) return null; // 24 soatdan eski bo'lsa rad
  try { return JSON.parse(p.get('user') || 'null'); } catch (e) { return null; }
}

function displayName(u) { return [u.first_name, u.last_name].filter(Boolean).join(' ') || u.username || 'Foydalanuvchi'; }

async function currentContest(env) {
  const row = await env.DB.prepare('SELECT id, name, seed, start, end FROM contests ORDER BY start DESC LIMIT 1').first();
  if (!row) return null;
  const now = Date.now();
  const status = now < row.start ? 'upcoming' : now < row.end ? 'live' : 'ended';
  return { ...row, status };
}

// ---------- Yo'nalishlar ----------
async function handle(request, env) {
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') return json({ ok: true });
  const user = await verify(url.searchParams.get('initData') || (await bodyInitData(request)), env.BOT_TOKEN);
  if (url.pathname.startsWith('/api/')) return lobby(request, env, url, user);

  if (request.method === 'GET' && url.pathname === '/quiz') {
    if (!user) return json({ ok: false, error: 'Telegram orqali oching' }, 401);
    const c = await currentContest(env);
    if (!c) return json({ ok: true, contest: { status: 'none' } });
    return json({ ok: true, seed: c.seed, contest: { status: c.status, start: c.start, end: c.end } });
  }

  if (request.method === 'GET' && url.pathname === '/leaderboard') {
    if (!user) return json({ ok: false, error: 'Telegram orqali oching' }, 401);
    const c = await currentContest(env);
    if (!c) return json({ ok: true, contest: { status: 'none' }, top: [], me: null });
    const top = (await env.DB.prepare(
      'SELECT user_id AS id, name, username, best AS score FROM scores WHERE contest_id = ? ORDER BY best DESC, updated ASC LIMIT 10'
    ).bind(c.id).all()).results;
    const mine = await env.DB.prepare('SELECT best FROM scores WHERE contest_id = ? AND user_id = ?').bind(c.id, user.id).first();
    let me = null;
    if (mine) {
      const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM scores WHERE contest_id = ? AND best > ?').bind(c.id, mine.best).first();
      me = { id: user.id, rank: n.n + 1, best: mine.best };
    }
    return json({ ok: true, contest: { status: c.status, start: c.start, end: c.end }, top, me });
  }

  if (request.method === 'POST' && url.pathname === '/score') {
    if (!user) return json({ ok: false, error: 'Telegram orqali oching' }, 401);
    const body = await request.json().catch(() => null);
    if (!body) return json({ ok: false, error: 'Noto\'g\'ri so\'rov' }, 400);
    if (!user.username) return json({ ok: false, error: "Reytingda qatnashish uchun Telegram'da username qo'ying" });
    const c = await currentContest(env);
    if (!c || c.status === 'ended') return json({ ok: false, error: 'Musobaqa tugagan' });
    if (c.status === 'upcoming') return json({ ok: false, error: 'Musobaqa hali boshlanmadi' });
    if (Number(body.seed) !== c.seed) return json({ ok: false, error: 'Eski yoki noto\'g\'ri savollar' });

    const res = E.scoreOf(c.seed, body.answers);
    if (!res.valid) return json({ ok: false, error: 'Natija noto\'g\'ri formatda' });

    const name = displayName(user), username = user.username, now = Date.now();
    const old = await env.DB.prepare('SELECT best FROM scores WHERE contest_id = ? AND user_id = ?').bind(c.id, user.id).first();
    const improved = !old || res.score > old.best;
    if (improved) {
      await env.DB.prepare(
        `INSERT INTO scores (contest_id, user_id, name, username, best, updated) VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(contest_id, user_id) DO UPDATE SET best = excluded.best, name = excluded.name, username = excluded.username, updated = excluded.updated`
      ).bind(c.id, user.id, name, username, res.score, now).run();
    } else {
      await env.DB.prepare('UPDATE scores SET name = ?, username = ? WHERE contest_id = ? AND user_id = ?').bind(name, username, c.id, user.id).run();
    }
    const best = improved ? res.score : old.best;
    const n = await env.DB.prepare('SELECT COUNT(*) AS n FROM scores WHERE contest_id = ? AND best > ?').bind(c.id, best).first();
    return json({ ok: true, improved, best, rank: n.n + 1 });
  }

  if (request.method === 'GET' && url.pathname === '/admin/scores') {
    if (!user || String(user.id) !== String(env.ADMIN_ID)) return json({ ok: false, error: 'Ruxsat yo\'q' }, 403);
    const c = await currentContest(env);
    if (!c) return json({ ok: true, rows: [] });
    const rows = (await env.DB.prepare(
      'SELECT user_id, name, username, best, updated FROM scores WHERE contest_id = ? ORDER BY best DESC, updated ASC'
    ).bind(c.id).all()).results;
    return json({ ok: true, contest: c, rows });
  }

  return json({ ok: false, error: 'Topilmadi' }, 404);
}

// POST bo'lsa initData tanada keladi
async function bodyInitData(request) {
  if (request.method !== 'POST') return '';
  const clone = request.clone();
  const b = await clone.json().catch(() => null);
  return (b && b.initData) || '';
}

// D1 ga Cloudflare REST API orqali ulanish (binding kerak emas, API token bilan ishlaydi)
function restDB(env) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/d1/database/${env.D1_DB_ID}/query`;
  async function run(sql, params) {
    const r = await fetch(url, {
      method: 'POST',
      headers: { authorization: 'Bearer ' + env.CF_API_TOKEN, 'content-type': 'application/json' },
      body: JSON.stringify({ sql, params: params || [] }),
    });
    const j = await r.json();
    if (!j.success) throw new Error('D1: ' + JSON.stringify(j.errors));
    return j.result[0];
  }
  return {
    prepare(sql) {
      let params = [];
      const st = {
        bind(...a) { params = a; return st; },
        async first() { const r = await run(sql, params); return (r.results && r.results[0]) || null; },
        async all() { const r = await run(sql, params); return { results: r.results || [] }; },
        async run() { return run(sql, params); },
      };
      return st;
    },
  };
}

export default {
  async fetch(request, env) {
    try {
      const e2 = env.DB ? env : { ...env, DB: restDB(env) };
      return await handle(request, e2);
    }
    catch (e) { return json({ ok: false, error: 'Server xatosi' }, 500); }
  },
};

// ---------- Lobbies, friends and invites ----------
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function lobbyCode() { let s = ''; for (let i = 0; i < 6; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]; return s; }
const perHandOf = game => (game === 'bura' ? 4 : 6);

async function lobby(request, env, url, user) {
  const DB = env.DB;
  const path = url.pathname;
  if (!user) return json({ ok: false, error: 'Open this from Telegram' }, 401);
  const body = request.method === 'POST' ? ((await request.clone().json().catch(() => null)) || {}) : {};
  const now = Date.now();
  await DB.prepare('INSERT INTO users (id, name, username, seen) VALUES (?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET name = excluded.name, username = excluded.username, seen = excluded.seen')
    .bind(user.id, displayName(user), user.username || '', now).run();

  const cleanName = v => String(v || '').replace(/^@/, '').trim();
  const lobbyId = () => String(body.id || url.searchParams.get('id') || '').toUpperCase();

  async function getLobby(id, needMember) {
    const row = await DB.prepare('SELECT * FROM lobbies WHERE id = ?').bind(id).first();
    if (!row) return { err: json({ ok: false, error: 'Lobby not found' }, 404) };
    const mem = await DB.prepare('SELECT 1 AS x FROM lobby_members WHERE lobby_id = ? AND user_id = ?').bind(id, user.id).first();
    if (needMember && !mem) return { err: json({ ok: false, error: 'You are not a member of this lobby' }, 403) };
    return { lobby: row, isMember: !!mem };
  }
  async function countMembers(id) {
    return (await DB.prepare('SELECT COUNT(*) AS n FROM lobby_members WHERE lobby_id = ?').bind(id).first()).n;
  }
  async function members(id) {
    return (await DB.prepare('SELECT m.user_id AS id, u.name, u.username, m.ready FROM lobby_members m JOIN users u ON u.id = m.user_id WHERE m.lobby_id = ?').bind(id).all()).results;
  }

  if (request.method === 'GET' && path === '/api/friends') {
    const rows = (await DB.prepare('SELECT u.id, u.name, u.username FROM friends f JOIN users u ON u.id = f.friend_id WHERE f.user_id = ?').bind(user.id).all()).results;
    return json({ ok: true, friends: rows });
  }

  if (request.method === 'POST' && path === '/api/follow') {
    const uname = cleanName(body.username);
    if (!uname) return json({ ok: false, error: 'Enter a username' }, 400);
    const u = await DB.prepare('SELECT id, name, username FROM users WHERE lower(username) = lower(?)').bind(uname).first();
    if (!u) return json({ ok: false, error: "User not found. They must open the bot first" });
    if (u.id === user.id) return json({ ok: false, error: "You can't add yourself" });
    await DB.prepare('INSERT OR IGNORE INTO friends (user_id, friend_id) VALUES (?, ?)').bind(user.id, u.id).run();
    return json({ ok: true, friend: u });
  }

  if (request.method === 'GET' && path === '/api/invites') {
    const rows = (await DB.prepare("SELECT l.id, l.game, l.cards, l.players, u.name AS host_name, u.username AS host_username FROM invites i JOIN lobbies l ON l.id = i.lobby_id JOIN users u ON u.id = l.host WHERE i.to_user = ? AND l.status = 'lobby'").bind(user.id).all()).results;
    return json({ ok: true, invites: rows });
  }

  if (request.method === 'POST' && path === '/api/room') {
    const game = body.game === 'bura' || body.game === 'durak' ? body.game : null;
    const cards = Number(body.cards), players = Number(body.players);
    if (!game) return json({ ok: false, error: 'Choose a game' }, 400);
    if (cards !== 24 && cards !== 36) return json({ ok: false, error: 'Card count must be 24 or 36' }, 400);
    if (!(players >= 2 && players <= 6)) return json({ ok: false, error: 'Player count must be between 2 and 6' }, 400);
    const per = perHandOf(game);
    if (players * per > cards) return json({ ok: false, error: `With this card count, at most ${Math.floor(cards / per)} players can play` }, 400);
    let id;
    do { id = lobbyCode(); } while (await DB.prepare('SELECT id FROM lobbies WHERE id = ?').bind(id).first());
    await DB.prepare("INSERT INTO lobbies (id, host, game, cards, players, status, created) VALUES (?, ?, ?, ?, ?, 'lobby', ?)").bind(id, user.id, game, cards, players, now).run();
    await DB.prepare('INSERT INTO lobby_members (lobby_id, user_id, ready) VALUES (?, ?, 1)').bind(id, user.id).run();
    return json({ ok: true, id });
  }

  if (request.method === 'GET' && path === '/api/room') {
    const id = lobbyId();
    const r = await getLobby(id, false);
    if (r.err) return r.err;
    const inv = await DB.prepare('SELECT 1 AS x FROM invites WHERE lobby_id = ? AND to_user = ?').bind(id, user.id).first();
    if (!r.isMember && !inv) return json({ ok: false, error: "You don't have access to this lobby" }, 403);
    return json({ ok: true, room: { ...r.lobby, perHand: perHandOf(r.lobby.game) }, members: await members(id), isHost: r.lobby.host === user.id, isMember: r.isMember });
  }

  if (request.method === 'POST' && path === '/api/invite') {
    const id = lobbyId();
    const r = await getLobby(id, true);
    if (r.err) return r.err;
    if (r.lobby.host !== user.id) return json({ ok: false, error: 'Only the host can invite' }, 403);
    if (r.lobby.status !== 'lobby') return json({ ok: false, error: 'The game has already started' });
    const u = await DB.prepare('SELECT id, name FROM users WHERE lower(username) = lower(?)').bind(cleanName(body.username)).first();
    if (!u) return json({ ok: false, error: "User not found. They must open the bot first" });
    if (u.id === user.id) return json({ ok: false, error: "You can't invite yourself" });
    if ((await countMembers(id)) >= r.lobby.players) return json({ ok: false, error: 'Lobby is full' });
    await DB.prepare('INSERT OR IGNORE INTO invites (lobby_id, to_user) VALUES (?, ?)').bind(id, u.id).run();
    return json({ ok: true, name: u.name });
  }

  if (request.method === 'POST' && path === '/api/join') {
    const id = lobbyId();
    const r = await getLobby(id, false);
    if (r.err) return r.err;
    const inv = await DB.prepare('SELECT 1 AS x FROM invites WHERE lobby_id = ? AND to_user = ?').bind(id, user.id).first();
    if (!inv && !r.isMember) return json({ ok: false, error: 'You have no invite to this lobby' }, 403);
    if (r.lobby.status !== 'lobby') return json({ ok: false, error: 'The game has already started' });
    if (!r.isMember) {
      if ((await countMembers(id)) >= r.lobby.players) return json({ ok: false, error: 'Lobby is full' });
      await DB.prepare('INSERT OR IGNORE INTO lobby_members (lobby_id, user_id, ready) VALUES (?, ?, 0)').bind(id, user.id).run();
    }
    await DB.prepare('DELETE FROM invites WHERE lobby_id = ? AND to_user = ?').bind(id, user.id).run();
    return json({ ok: true, id });
  }

  if (request.method === 'POST' && path === '/api/decline') {
    const id = lobbyId();
    await DB.prepare('DELETE FROM invites WHERE lobby_id = ? AND to_user = ?').bind(id, user.id).run();
    return json({ ok: true });
  }

  if (request.method === 'POST' && path === '/api/ready') {
    const id = lobbyId();
    const r = await getLobby(id, true);
    if (r.err) return r.err;
    await DB.prepare('UPDATE lobby_members SET ready = ? WHERE lobby_id = ? AND user_id = ?').bind(body.ready ? 1 : 0, id, user.id).run();
    return json({ ok: true });
  }

  if (request.method === 'POST' && path === '/api/leave') {
    const id = lobbyId();
    const r = await getLobby(id, true);
    if (r.err) return r.err;
    if (r.lobby.host === user.id) return json({ ok: false, error: "The host can't leave" });
    await DB.prepare('DELETE FROM lobby_members WHERE lobby_id = ? AND user_id = ?').bind(id, user.id).run();
    return json({ ok: true });
  }

  if (request.method === 'POST' && path === '/api/start') {
    const id = lobbyId();
    const r = await getLobby(id, true);
    if (r.err) return r.err;
    if (r.lobby.host !== user.id) return json({ ok: false, error: 'Only the host can start' }, 403);
    if (r.lobby.status !== 'lobby') return json({ ok: false, error: 'The game has already started' });
    const ms = await members(id);
    if (ms.length < 2) return json({ ok: false, error: 'At least 2 players needed' });
    if (!ms.every(m => m.ready)) return json({ ok: false, error: 'Not everyone is ready' });
    await DB.prepare("UPDATE lobbies SET status = 'playing' WHERE id = ?").bind(id).run();
    return json({ ok: true });
  }

  return json({ ok: false, error: 'Not found' }, 404);
}
