const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'docs', 'seo-sitewide');

function parseCsv(filename) {
  const content = fs.readFileSync(path.join(dir, filename), 'utf8').trim();
  const lines = content.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    let line = lines[i];
    while ((line.match(/"/g) || []).length % 2 === 1 && i + 1 < lines.length) {
      i++;
      line += '\n' + lines[i];
    }
    const regex = /(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*|(?:\n|$))/g;
    const matches = [];
    let m;
    while ((m = regex.exec(line)) !== null) {
      let val = m[1];
      if (val === undefined) continue;
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1).replace(/""/g, '"');
      }
      matches.push(val.trim());
      if (regex.lastIndex >= line.length) break;
    }
    if (matches.length > 0) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = matches[idx];
      });
      rows.push(obj);
    }
  }
  return { headers, rows };
}

const queries = parseCsv('Queries.csv').rows;
const pages = parseCsv('Pages.csv').rows;

queries.forEach(q => {
  q.Clicks = parseInt(q.Clicks, 10) || 0;
  q.Impressions = parseInt(q.Impressions, 10) || 0;
  q.Position = parseFloat(q.Position) || 0;
});
queries.sort((a, b) => b.Impressions - a.Impressions);

pages.forEach(p => {
  p.Clicks = parseInt(p.Clicks, 10) || 0;
  p.Impressions = parseInt(p.Impressions, 10) || 0;
  p.Position = parseFloat(p.Position) || 0;
});
pages.sort((a, b) => b.Impressions - a.Impressions);

console.log('=== ALL 43 DIGITAL HUMAN & AVATAR & OFFLINE QUERIES ===');
const targetQueries = queries.filter(q => {
  const t = q['Top queries'].toLowerCase();
  return t.includes('digital human') || t.includes('avatar') || t.includes('offline') || t.includes('dihuava') || t.includes('virtual human');
});

targetQueries.forEach((q, i) => {
  console.log(`${i + 1}. [${q['Top queries']}] -> Imp: ${q.Impressions}, Clicks: ${q.Clicks}, CTR: ${q.CTR}, Pos: ${q.Position}`);
});

console.log('\n=== BLOG VS PRODUCT PAGES PERFORMANCE ===');
const blogPages = pages.filter(p => p['Top pages'].includes('/blog/'));
console.log('Top Blog Pages:');
blogPages.forEach(p => console.log(`  ${p['Top pages']} -> Imp: ${p.Impressions}, Clicks: ${p.Clicks}, Pos: ${p.Position}`));

const productPages = pages.filter(p => p['Top pages'].includes('/products'));
console.log('\nTop Product Pages:');
productPages.forEach(p => console.log(`  ${p['Top pages']} -> Imp: ${p.Impressions}, Clicks: ${p.Clicks}, Pos: ${p.Position}`));

const industryPages = pages.filter(p => p['Top pages'].includes('/industries'));
console.log('\nTop Industry Pages:');
industryPages.forEach(p => console.log(`  ${p['Top pages']} -> Imp: ${p.Impressions}, Clicks: ${p.Clicks}, Pos: ${p.Position}`));

console.log('\n=== LEGACY NON-WWW / SLASH CANNIBALIZATION ===');
const nonWwwOrLegacy = pages.filter(p => !p['Top pages'].startsWith('https://www.hsglobalai.com/'));
console.log('Non-canonical or legacy URLs receiving impressions:');
nonWwwOrLegacy.forEach(p => console.log(`  ${p['Top pages']} -> Imp: ${p.Impressions}, Clicks: ${p.Clicks}, Pos: ${p.Position}`));

