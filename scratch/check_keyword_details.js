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
      if (currentRow.length > 0 && currentRow.some(c => c.trim().length > 0)) rows.push(currentRow);
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

const queries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');
const baselineQueries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Queries.csv');

console.log('=== CHECKING ALL QUERIES FOR RELEVANT KEYWORDS ===');

const priorityKeywords = [
  'offline ai digital human software',
  'digital human software',
  'ai digital human platform',
  'offline digital human platform',
  'on-device ai digital human',
  'enterprise digital human software'
];

console.log('\n--- 1. EXACT & SUBSTRING CHECKS ---');
priorityKeywords.forEach(kw => {
  const qMatches = queries.filter(q => q['Top queries'].toLowerCase().includes(kw));
  console.log(`Keyword "${kw}": ${qMatches.length} matches`);
  qMatches.forEach(m => console.log(`  -> "${m['Top queries']}" (Imp=${m.Impressions}, Clicks=${m.Clicks}, Pos=${m.Position})`));
});

console.log('\n--- 2. CLOSE SEMANTIC / VARIANT QUERIES IN GSC SITEWIDE ---');
const variantChecks = [
  { label: 'offline ai / offline llm / offline software', test: q => q.includes('offline') },
  { label: 'digital human / ai avatar / human avatar', test: q => q.includes('digital human') || q.includes('ai avatar') || q.includes('human avatar') },
  { label: 'software / platform', test: q => q.includes('software') || q.includes('platform') },
  { label: 'on-device / edge ai / local', test: q => q.includes('on-device') || q.includes('edge ai') || q.includes('local') || q.includes('device') },
  { label: 'enterprise', test: q => q.includes('enterprise') }
];

variantChecks.forEach(v => {
  const matches = queries.filter(q => v.test(q['Top queries'].toLowerCase()));
  console.log(`\nCategory: ${v.label} (${matches.length} queries):`);
  matches.forEach(m => console.log(`  - "${m['Top queries']}": Imp=${m.Impressions}, Clicks=${m.Clicks}, Pos=${m.Position}, CTR=${m.CTR}`));
});

