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
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
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
    if (currentRow.some(c => c.trim().length > 0)) {
      rows.push(currentRow);
    }
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

const baselineQueries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Queries.csv');
const baselinePages = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Pages.csv');
const sitewideQueries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');
const sitewidePages = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Pages.csv');
const sitewideCountries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Countries.csv');
const sitewideDevices = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Devices.csv');

console.log('Fixed CSV parsing:');
console.log('Baseline queries count:', baselineQueries.length);
console.log('Sitewide queries count:', sitewideQueries.length);
console.log('Sitewide pages count:', sitewidePages.length);
console.log('Sitewide countries count:', sitewideCountries.length);
console.log('Sitewide devices count:', sitewideDevices.length);

// Print baseline queries properly
console.log('\n=== ALL BASELINE QUERIES ===');
baselineQueries.forEach(q => console.log(q));

// Print top sitewide queries by impressions
console.log('\n=== TOP 25 SITEWIDE QUERIES BY IMPRESSIONS ===');
const sortedQueries = [...sitewideQueries].sort((a,b) => parseFloat(b.Impressions || 0) - parseFloat(a.Impressions || 0));
sortedQueries.slice(0, 25).forEach(q => {
  console.log(`- "${q['Top queries']}": Imp=${q.Impressions}, Clicks=${q.Clicks}, Pos=${q.Position}, CTR=${q.CTR}`);
});

// Print top sitewide pages by impressions
console.log('\n=== TOP 20 SITEWIDE PAGES BY IMPRESSIONS ===');
const sortedPages = [...sitewidePages].sort((a,b) => parseFloat(b.Impressions || 0) - parseFloat(a.Impressions || 0));
sortedPages.slice(0, 20).forEach(p => {
  console.log(`- "${p['Top pages']}": Imp=${p.Impressions}, Clicks=${p.Clicks}, Pos=${p.Position}, CTR=${p.CTR}`);
});

// Check where /products/ai-digital-human sits in sitewidePages
const productPage = sitewidePages.find(p => p['Top pages'] && p['Top pages'].includes('/products/ai-digital-human'));
console.log('\n=== /products/ai-digital-human IN SITEWIDE PAGES ===');
console.log(productPage);
const allProductSubpages = sitewidePages.filter(p => p['Top pages'] && p['Top pages'].includes('/products/'));
console.log('\n=== ALL /products/* IN SITEWIDE PAGES ===');
console.log(allProductSubpages);

