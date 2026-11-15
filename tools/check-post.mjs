// Quality gate for a blog post before it ships. The weekly SEO agent runs it and must fix every FAIL.
//   node tools/check-post.mjs content/blog/<slug>.md [--keyword "umrah packages melbourne"]
// Exit code 0 = pass (warnings allowed), 1 = at least one FAIL.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const args = process.argv.slice(2);
const file = args.find(a => a.endsWith('.md'));
const ki = args.indexOf('--keyword');
if (!file || !fs.existsSync(file)) { console.error('usage: node tools/check-post.mjs content/blog/<slug>.md [--keyword "<primary keyword>"]'); process.exit(1); }

const raw = fs.readFileSync(file, 'utf8');
const { data: fm, content } = matter(raw);
const slug = path.basename(file, '.md');
const keyword = (ki > -1 ? args[ki + 1] : (fm.keywords || [])[0] || '').toLowerCase();
const fails = [], warns = [], notes = [];
const fail = m => fails.push(m), warn = m => warns.push(m);

// ---------- frontmatter ----------
const CATS = ['Umrah Guide', 'Spiritual Guidance', 'Travel Tips', 'Ramadan', 'Makkah', 'Madinah'];
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(`slug "${slug}" must be lowercase words joined by hyphens`);
if (!fm.title) fail('title missing');
const date = fm.date instanceof Date ? fm.date.toISOString().slice(0, 10) : String(fm.date || '');
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) fail('date must be yyyy-mm-dd');
if (!CATS.includes(fm.category)) fail(`category must be one of: ${CATS.join(', ')}`);
const metaTitle = String(fm.metaTitle || fm.title || '');
const titleLen = (metaTitle + ' | Al-Haramain Travels').length;
if (!fm.metaTitle) fail('metaTitle missing (the title tag; " | Al-Haramain Travels" is added automatically)');
else if (fm.metaTitle.length > 60) fail(`metaTitle is ${fm.metaTitle.length} chars; keep it to 60 or fewer`);
if (titleLen > 70) warn(`full title tag is ${titleLen} chars with the brand suffix; Google may cut it`);
const md = String(fm.metaDescription || '');
if (!md) fail('metaDescription missing');
else if (md.length < 120 || md.length > 155) fail(`metaDescription is ${md.length} chars; aim for 120 to 155`);
const ex = String(fm.excerpt || '');
if (ex.length < 100 || ex.length > 170) warn(`excerpt is ${ex.length} chars; 120 to 160 reads best on cards`);
if (!Array.isArray(fm.keywords) || fm.keywords.length < 2) fail('keywords: list the primary keyword first, then 2 to 6 related terms');
if (fm.draft) warn('draft: true, the post will not be published');
if (fm.image) {
  if (!fs.existsSync(path.join('public', String(fm.image).replace(/^\//, '')))) fail(`image ${fm.image} not found under public/`);
} else warn('no image set; the category photo will be used');
const faq = Array.isArray(fm.faq) ? fm.faq : [];
if (faq.length < 3 || faq.length > 6) fail(`faq has ${faq.length} items; write 3 to 5 real questions with direct answers`);
for (const f of faq) {
  if (!f || !f.q || !f.a) { fail('every faq item needs q and a'); continue; }
  const words = String(f.a).split(/\s+/).length;
  if (words < 20 || words > 90) warn(`faq answer for "${f.q}" is ${words} words; 30 to 70 words gets quoted most`);
}

// ---------- body ----------
const body = content.trim();
const text = body.replace(/```[\s\S]*?```/g, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[#>*_`|-]/g, ' ');
const words = text.split(/\s+/).filter(Boolean).length + faq.reduce((n, f) => n + String(f.q || '').split(/\s+/).length + String(f.a || '').split(/\s+/).length, 0);
if (words < 1200) fail(`${words} words; the minimum is 1,200`);
else if (words > 2000) fail(`${words} words; the maximum is 2,000 (aim for about 1,700)`);
notes.push(`${words} words including the FAQ`);
if (/^#\s/m.test(body)) fail('body must not contain an H1 (#); the page renders the title as the H1. Start at ##');
const h2 = (body.match(/^##\s+.+$/gm) || []);
if (h2.length < 4) fail(`${h2.length} H2 sections; use at least 4, phrased the way people search`);
if (/^##\s+(frequently asked questions|faqs?)\b/im.test(body)) fail('do not write an FAQ section in the body; put Q&As in the faq frontmatter (the page renders them)');
const allText = raw;
if (/[–—]/.test(allText)) fail('em or en dash found; use a comma, full stop or hyphen');

const links = [...body.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)].map(m => ({ label: m[1], href: m[2] }));
const internal = links.filter(l => l.href.startsWith('/'));
const external = links.filter(l => /^https?:\/\//.test(l.href));
if (internal.length < 3) fail(`${internal.length} internal links; link at least 3 (e.g. /services/umrah, /umrah/<trip>, /contact, another /blog post)`);
if (!internal.some(l => /^\/(contact|services\/umrah|umrah\/)/.test(l.href))) fail('no link to a booking page (/contact, /services/umrah or /umrah/<trip>)');
// Pages that exist (app/ routes). Add here when a new page ships.
const KNOWN = new Set(['/', '/about', '/contact', '/blog', '/services/umrah', '/privacy', '/terms', '/refund-policy']);
const blogSlugs = new Set(fs.readdirSync('content/blog').filter(f => f.endsWith('.md') && !f.startsWith('_') && f !== 'README.md').map(f => f.replace(/\.md$/, '')));
let tripSlugs = new Set();
try { tripSlugs = new Set([...fs.readFileSync('lib/data.ts', 'utf8').matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)].map(m => m[1])); } catch {}
for (const l of internal) {
  const p = l.href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  const ok = KNOWN.has(p) || (p.startsWith('/blog/') && blogSlugs.has(p.slice(6))) || (p.startsWith('/umrah/') && tripSlugs.has(p.slice(7)));
  if (!ok) fail(`internal link ${l.href} does not match a page on the site`);
}
if (external.length < 2) fail(`${external.length} external sources; cite at least 2 authoritative ones (quran.com, sunnah.com, smartraveller.gov.au, nusuk.sa, visa.mofa.gov.sa, gov.uk)`);
for (const l of external) if (/alharamaintravel\.co\.uk|haramain\.com\.au|islamictravel|hisartravel|miqattravels|planmyumrah/.test(l.href)) fail(`links to a competitor: ${l.href}`);

// ---------- keyword placement ----------
if (keyword) {
  const firstPara = (body.split(/\n\s*\n/).find(p => p.trim() && !p.trim().startsWith('#')) || '').toLowerCase();
  const kwWords = keyword.split(/\s+/);
  const has = s => kwWords.every(w => s.toLowerCase().includes(w));
  if (!has(metaTitle)) fail(`primary keyword "${keyword}" (all its words) not in metaTitle`);
  if (!has(firstPara)) fail(`primary keyword "${keyword}" not in the first paragraph`);
  if (!h2.some(h => has(h))) warn(`no H2 contains the words of "${keyword}"`);
  if (!has(md)) warn(`metaDescription does not contain "${keyword}"`);
} else warn('no primary keyword given (--keyword or first keywords entry)');

// ---------- house style ----------
const US = ['organize', 'organized', 'organizing', 'traveling', 'traveled', 'traveler', 'color', 'favorite', 'center', 'program ', 'honor', 'neighbor', 'jewelry', 'analyze', 'realize', 'recognize', 'apologize', 'specialize', 'practicing', 'enroll'];
const isUK = /en-GB|\buk\b/i.test(String(fm.locale || ''));
for (const w of US) if (new RegExp('\\b' + w.trim() + '\\b', 'i').test(body)) fail(`American spelling "${w.trim()}"; use Australian/British English`);
const BANNED = ['delve', 'tapestry', 'embark on a journey', 'in today\'s fast-paced', 'unlock', 'elevate', 'seamless', 'game-changer', 'testament to', 'navigating the', 'look no further', 'a beacon of', 'whether you\'re a', 'in conclusion', 'it\'s important to note', 'realm', 'bustling', 'nestled', 'vibrant tapestry', 'ever-evolving', 'best umrah', 'cheapest', 'guaranteed', '100%'];
for (const b of BANNED) if (body.toLowerCase().includes(b)) fail(`banned phrase "${b}"`);
if (/\b(tirmidhi|abu dawud|abu dawood|nasa'?i|ibn majah|musnad ahmad)\b/i.test(body)) fail('hadith must come only from Sahih al-Bukhari or Sahih Muslim (house rule)');
for (const m of body.matchAll(/\b(Qur'?an|Quran)\b[^.\n]{0,80}/gi)) if (!/\d+:\d+/.test(m[0]) && /says|states|said|ayah|verse/i.test(m[0])) warn(`Qur'an reference without surah:ayah near "${m[0].slice(0, 60)}"`);
if (/\$\s?\d/.test(body) && !/(from|starting|deposit|AUD|per person|pp)/i.test(body)) warn('prices mentioned; make sure they match lib/data.ts and say "from" or "per person"');
if (/\b(we are the best|number one|#1|no\.? 1)\b/i.test(body)) fail('superlative claim ("best", "number one"); describe what we do instead');

// ---------- duplicates ----------
for (const s of blogSlugs) {
  if (s === slug) continue;
  const other = matter(fs.readFileSync(path.join('content/blog', s + '.md'), 'utf8')).data;
  if (other.metaTitle && other.metaTitle === fm.metaTitle) fail(`metaTitle duplicates content/blog/${s}.md`);
  if (keyword && Array.isArray(other.keywords) && String(other.keywords[0] || '').toLowerCase() === keyword) fail(`primary keyword "${keyword}" is already targeted by content/blog/${s}.md (cannibalisation); pick another or update that post instead`);
}

for (const n of notes) console.log('NOTE ' + n);
for (const w of warns) console.log('WARN ' + w);
for (const f of fails) console.log('FAIL ' + f);
console.log(fails.length ? `\n${fails.length} FAIL(s): fix and re-run.` : '\nPASS');
process.exit(fails.length ? 1 : 0);
