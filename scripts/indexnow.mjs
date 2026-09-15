// Submit every URL in the built sitemap to IndexNow (Bing, Yandex, Naver, Seznam and partners).
// Run after a production deploy:  npm run indexnow
// Key file is served at https://nextdoorpayments.com/<key>.txt from /public.
import { readFileSync, readdirSync } from 'node:fs';

const KEY = '2c145ebe707b442fb252d480a370e406';
const HOST = 'nextdoorpayments.com';
const files = readdirSync('dist').filter((f) => /^sitemap-\d+\.xml$/.test(f));
const urls = files.flatMap((f) => [...readFileSync(`dist/${f}`, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));
const only = process.argv.slice(2);
const list = only.length ? only : urls;
if (!list.length) { console.error('No URLs found. Run `npm run build` first.'); process.exit(1); }
const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: list }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${list.length} URLs`);
if (!res.ok) console.log(await res.text());
