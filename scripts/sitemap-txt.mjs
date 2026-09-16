// Write dist/sitemap.txt (one URL per line) from the XML sitemaps Astro generates.
// Runs automatically after `astro build` via the postbuild script.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const files = readdirSync('dist').filter((f) => /^sitemap-\d+\.xml$/.test(f)).sort();
const urls = files.flatMap((f) => [...readFileSync(`dist/${f}`, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));
if (!urls.length) { console.error('sitemap.txt: no URLs found in dist/sitemap-*.xml'); process.exit(1); }
writeFileSync('dist/sitemap.txt', urls.join('\n') + '\n');
console.log(`sitemap.txt: ${urls.length} URLs`);
