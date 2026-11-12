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

const queries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');
const pages = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Pages.csv');
const countries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Countries.csv');
const devices = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Devices.csv');

console.log('=== COUNTRIES DATA ===');
const sortedCountries = [...countries].sort((a,b) => parseFloat(b.Impressions || 0) - parseFloat(a.Impressions || 0));
sortedCountries.slice(0, 15).forEach(c => {
  console.log(`- ${c.Country}: Imp=${c.Impressions}, Clicks=${c.Clicks}, Pos=${c.Position}, CTR=${c.CTR}`);
});

console.log('\n=== DEVICES DATA ===');
devices.forEach(d => {
  console.log(`- ${d.Device}: Imp=${d.Impressions}, Clicks=${d.Clicks}, Pos=${d.Position}, CTR=${d.CTR}`);
});

console.log('\n=== QUERIES WITH POSITIONS 4 to 20 (STRIKING DISTANCE) ===');
const strikingQueries = queries
  .map(q => ({ ...q, posNum: parseFloat(q.Position || 999), impNum: parseFloat(q.Impressions || 0), clickNum: parseFloat(q.Clicks || 0) }))
  .filter(q => q.posNum >= 4 && q.posNum <= 20)
  .sort((a, b) => b.impNum - a.impNum);

console.log(`Found ${strikingQueries.length} queries between position 4 and 20:`);
strikingQueries.forEach(q => {
  console.log(`  [Pos ${q.posNum.toFixed(1)}] "${q['Top queries']}": Imp=${q.impNum}, Clicks=${q.clickNum}, CTR=${q.CTR}`);
});

console.log('\n=== HIGH IMPRESSION LOW CTR PAGES (Imp >= 50, CTR < 2%) ===');
const lowCTRPages = pages
  .map(p => ({ ...p, impNum: parseFloat(p.Impressions || 0), clickNum: parseFloat(p.Clicks || 0), ctrNum: parseFloat((p.CTR || '0%').replace('%','')), posNum: parseFloat(p.Position || 0) }))
  .filter(p => p.impNum >= 50 && p.ctrNum < 2.0)
  .sort((a,b) => b.impNum - a.impNum);

lowCTRPages.forEach(p => {
  console.log(`- "${p['Top pages']}": Imp=${p.impNum}, Clicks=${p.clickNum}, CTR=${p.CTR}, Pos=${p.posNum.toFixed(1)}`);
});

