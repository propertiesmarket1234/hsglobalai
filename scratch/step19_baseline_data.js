const fs = require('fs');

function parseProperCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentField);
      currentField = '';
      if (currentRow.length > 0 && currentRow.some(c => c.trim().length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentField += char;
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(c => c.trim().length > 0)) rows.push(currentRow);
  }

  if (rows.length === 0) return [];
  const header = rows[0].map(h => h.trim());
  return rows.slice(1).map(row => {
    const obj = {};
    header.forEach((h, idx) => {
      obj[h] = row[idx] ? row[idx].trim() : '';
    });
    return obj;
  });
}

const baselinePages = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Pages.csv');
const baselineQueries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Queries.csv');
const sitewidePages = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Pages.csv');
const sitewideQueries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');

console.log('=== FIVE TARGET URLS PERFORMANCE IN GSC SITEWIDE EXPORT ===');
const targetUrls = [
  'https://www.hsglobalai.com/products/ai-digital-human',
  'https://www.hsglobalai.com/industries/retail',
  'https://www.hsglobalai.com/blog/how-ai-in-retail',
  'https://www.hsglobalai.com/blog/why-100-offline-ai',
  'https://www.hsglobalai.com/blog/ai-digital-human-fleet-management'
];

targetUrls.forEach(url => {
  const pEntry = sitewidePages.find(p => p['Top pages'] === url);
  if (pEntry) {
    console.log(`URL: ${url}`);
    console.log(`  Impressions: ${pEntry.Impressions}`);
    console.log(`  Clicks:      ${pEntry.Clicks}`);
    console.log(`  CTR:         ${pEntry.CTR}`);
    console.log(`  Position:    ${pEntry.Position}`);
  } else {
    console.log(`URL: ${url} -> NOT FOUND IN SITEWIDE PAGES`);
  }
});

console.log('\n=== PRIMARY DIHUAVA PAGE IN BASELINE EXPORT (Page Filtered) ===');
console.log(baselinePages);

console.log('\n=== QUERY GROUPS PERFORMANCE IN SITEWIDE & BASELINE EXPORTS ===');
const queryGroups = [
  { label: 'offline AI digital human software', terms: ['offline ai digital human software', 'offline ai digital human', 'offline digital human software'] },
  { label: 'digital human software', terms: ['digital human software', 'ai digital human software'] },
  { label: 'AI digital human platform', terms: ['ai digital human platform', 'ai digital human platforms', 'ai digital human platforms for retail stores'] },
  { label: 'offline digital human platform', terms: ['offline digital human platform', 'offline digital human platforms'] },
  { label: 'on-device AI digital human', terms: ['on-device ai digital human', 'on-device digital human', 'on-device ai'] },
  { label: 'enterprise digital human software', terms: ['enterprise digital human software', 'enterprise digital human', 'enterprise ai twin', 'offline llm enterprise'] },
  { label: 'DIHUAVA', terms: ['dihuava', 'dhi avatar', 'dihuava ai'] }
];

queryGroups.forEach(g => {
  console.log(`\nGroup: "${g.label}"`);
  const matches = sitewideQueries.filter(q => {
    const qText = (q['Top queries'] || '').toLowerCase();
    return g.terms.some(t => qText.includes(t));
  });
  if (matches.length > 0) {
    matches.forEach(m => {
      console.log(`  - "${m['Top queries']}": Imp=${m.Impressions}, Clicks=${m.Clicks}, Pos=${m.Position}, CTR=${m.CTR}`);
    });
  } else {
    console.log('  - No exact tracked queries recorded in GSC export.');
  }
});

