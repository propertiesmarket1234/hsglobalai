const fs = require('fs');

function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split('\n').filter(l => l.trim().length > 0);
  const header = lines[0].split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
  return lines.slice(1).map(line => {
    const values = [];
    let cur = '', inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') inQuotes = !inQuotes;
      else if (c === ',' && !inQuotes) {
        values.push(cur.trim().replace(/^["']|["']$/g, ''));
        cur = '';
      } else cur += c;
    }
    values.push(cur.trim().replace(/^["']|["']$/g, ''));
    const obj = {};
    header.forEach((h, idx) => obj[h] = values[idx]);
    return obj;
  });
}

// 1. Countries Sitewide
const countries = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Countries.csv');
console.log('Total countries rows:', countries.length);
let totalImp = 0, totalClicks = 0;
countries.forEach(c => {
  totalImp += parseInt(c.Impressions || '0', 10);
  totalClicks += parseInt(c.Clicks || '0', 10);
});
console.log('Total Sitewide Countries Impressions:', totalImp);
console.log('Total Sitewide Countries Clicks:', totalClicks);

const india = countries.find(c => c.Country.toLowerCase() === 'india');
console.log('India row:', india);

const southAsia = ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal'];
let saImp = 0, saClicks = 0;
southAsia.forEach(name => {
  const row = countries.find(c => c.Country.toLowerCase() === name.toLowerCase());
  if (row) {
    saImp += parseInt(row.Impressions, 10);
    saClicks += parseInt(row.Clicks, 10);
    console.log(`  ${name}: Imp=${row.Impressions}, Clicks=${row.Clicks}`);
  }
});
console.log(`India & South Asia combined: Imp=${saImp}, Clicks=${saClicks}`);

// 2. Filters
const filtersSitewide = fs.readFileSync('D:/WebProjects/hsglobalai/docs/seo-sitewide/Filters.csv', 'utf8');
console.log('\n--- Sitewide Filters ---');
console.log(filtersSitewide);

const filtersBaseline = fs.readFileSync('D:/WebProjects/hsglobalai/docs/seo-baseline/Filters.csv', 'utf8');
console.log('\n--- Baseline Filters ---');
console.log(filtersBaseline);

// 3. Pages Sitewide
const pages = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Pages.csv');
console.log('Total Pages in sitewide export:', pages.length);

// 4. Queries Sitewide
const queries = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');
console.log('Total Queries in sitewide export:', queries.length);

const targetKeywords = [
  'offline AI digital human software',
  'digital human software',
  'AI digital human teacher',
  'holographic teacher',
  'hologram teachers',
  'AI virtual teacher',
  'hs global dmcc',
  'dihuava'
];

console.log('\n--- Target Keyword Matches in GSC Queries ---');
targetKeywords.forEach(kw => {
  const exact = queries.filter(q => q['Top queries'].toLowerCase() === kw.toLowerCase());
  const partial = queries.filter(q => q['Top queries'].toLowerCase().includes(kw.toLowerCase()) && q['Top queries'].toLowerCase() !== kw.toLowerCase());
  console.log(`Query: "${kw}" -> Exact matches: ${exact.length}, Partial matches: ${partial.length}`);
  exact.forEach(e => console.log(`   EXACT: "${e['Top queries']}" | Imp=${e.Impressions} | Clicks=${e.Clicks} | Pos=${e.Position}`));
  partial.forEach(p => console.log(`   PARTIAL: "${p['Top queries']}" | Imp=${p.Impressions} | Clicks=${p.Clicks} | Pos=${p.Position}`));
});

