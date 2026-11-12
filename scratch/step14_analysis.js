const fs = require('fs');
const path = require('path');

function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length === 0) return [];
  const header = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    // Basic CSV line parse handling quotes
    const line = lines[i];
    const cells = [];
    let inQuotes = false;
    let currentCell = '';
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        cells.push(currentCell.trim());
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
    cells.push(currentCell.trim());
    const obj = {};
    header.forEach((h, idx) => {
      obj[h] = cells[idx] ? cells[idx].replace(/^"|"$/g, '') : '';
    });
    rows.push(obj);
  }
  return rows;
}

const baselineQueries = parseCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Queries.csv');
const baselinePages = parseCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Pages.csv');
const sitewideQueries = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');
const sitewidePages = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Pages.csv');
const sitewideCountries = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Countries.csv');
const sitewideDevices = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Devices.csv');

console.log('=== BASELINE QUERIES (Page: /products/ai-digital-human) ===');
console.log(`Total queries: ${baselineQueries.length}`);
console.log(baselineQueries);

console.log('\n=== BASELINE PAGES ===');
console.log(baselinePages);

console.log('\n=== SEARCHING FOR 6 PRIORITY KEYWORDS IN SITEWIDE & BASELINE ===');
const targetKeywords = [
  'offline ai digital human software',
  'digital human software',
  'ai digital human platform',
  'offline digital human platform',
  'on-device ai digital human',
  'enterprise digital human software'
];

targetKeywords.forEach(kw => {
  const matchBaseline = baselineQueries.filter(q => q['Top queries'] && q['Top queries'].toLowerCase().includes(kw));
  const matchSitewide = sitewideQueries.filter(q => q['Top queries'] && q['Top queries'].toLowerCase().includes(kw));
  console.log(`\nExact / Substring match for: "${kw}"`);
  console.log(` Baseline matches (${matchBaseline.length}):`, matchBaseline);
  console.log(` Sitewide matches (${matchSitewide.length}):`, matchSitewide);
});

// Also search with component terms
console.log('\n=== QUERIES CONTAINING KEY THEMATIC WORDS IN SITEWIDE ===');
const terms = ['offline', 'software', 'platform', 'on-device', 'enterprise', 'digital human'];
terms.forEach(t => {
  const matches = sitewideQueries.filter(q => q['Top queries'] && q['Top queries'].toLowerCase().includes(t));
  console.log(`\nTerm "${t}" matched ${matches.length} queries:`);
  matches.forEach(m => console.log(`  - "${m['Top queries']}": Imp=${m['Impressions']}, Clicks=${m['Clicks']}, Pos=${m['Position']}, CTR=${m['CTR']}`));
});

