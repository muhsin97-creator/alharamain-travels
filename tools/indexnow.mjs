// IndexNow: tell Bing (and so Copilot and ChatGPT search), Yandex, Seznam and Naver about new or changed
// pages straight after a production deploy, instead of waiting for a crawl. Adapted from vitality-site.
// Run from the repo root AFTER the push has deployed (the key file must be live first):
//   node tools/indexnow.mjs                 sitemap URLs with lastmod today or later (Sydney date)
//   node tools/indexnow.mjs --since 2026-11-01
//   node tools/indexnow.mjs --all           every URL in the live sitemap
//   node tools/indexnow.mjs <url> ...       specific URLs
// The key file public/<KEY>.txt is served from the site root. Public URLs only; no personal data is sent.
const KEY = '8bf5c7f952de0f9ccea21c0296522d53';
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://alharamain-travels-six.vercel.app').replace(/\/+$/, ''); // keep in step with lib/site.ts
const HOST = new URL(SITE).host;
const args = process.argv.slice(2);
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Sydney' }).format(new Date());

const xml = await fetch(SITE + '/sitemap.xml').then(r => (r.ok ? r.text() : '')).catch(() => '');
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => ({
  url: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1] || '',
  lastmod: ((m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || '').slice(0, 10),
}));

let urls;
if (args.includes('--all')) urls = entries.map(e => e.url);
else if (args[0] && args[0].startsWith('http')) urls = args;
else {
  const since = args[0] === '--since' ? args[1] : today;
  urls = entries.filter(e => e.lastmod >= since && /\/blog\//.test(e.url)).map(e => e.url);
}
urls = [...new Set(urls)].filter(u => u && new URL(u).host === HOST);
if (!urls.length) { console.log('IndexNow: nothing to submit'); process.exit(0); }

const keyUrl = `https://${HOST}/${KEY}.txt`;
const live = await fetch(keyUrl).then(r => (r.ok ? r.text() : '')).catch(() => '');
if (live.trim() !== KEY) { console.error(`IndexNow: key file not live at ${keyUrl}; wait for the deploy`); process.exit(1); }

const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList: urls }),
});
console.log(`IndexNow: submitted ${urls.length} URL(s), HTTP ${r.status}${r.status === 200 || r.status === 202 ? ' (accepted)' : ' ' + (await r.text()).slice(0, 200)}`);
