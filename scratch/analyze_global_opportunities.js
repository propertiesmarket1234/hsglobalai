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

const countries = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Countries.csv');

console.log('Total countries in GSC export:', countries.length);

const regions = {
  'North America': ['United States', 'Canada', 'Mexico'],
  'UK & Europe': ['United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Poland', 'Sweden', 'Switzerland', 'Belgium', 'Austria', 'Norway', 'Denmark', 'Ireland', 'Portugal', 'Finland', 'Czechia', 'Greece', 'Romania', 'Hungary'],
  'UAE & Middle East': ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Egypt', 'Israel', 'Jordan', 'Turkey', 'Türkiye'],
  'India & South Asia': ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal'],
  'Australia & Oceania': ['Australia', 'New Zealand'],
  'Southeast Asia & East Asia': ['Singapore', 'Indonesia', 'Philippines', 'Malaysia', 'Vietnam', 'Thailand', 'China', 'Japan', 'South Korea', 'Taiwan', 'Hong Kong'],
  'Latin America': ['Brazil', 'Colombia', 'Argentina', 'Chile', 'Peru']
};

Object.entries(regions).forEach(([regName, countryList]) => {
  console.log(`\n=== REGION: ${regName} ===`);
  let regImp = 0;
  let regClicks = 0;
  let regEntries = [];
  countryList.forEach(cName => {
    const found = countries.find(c => c.Country.toLowerCase() === cName.toLowerCase());
    if (found) {
      const imp = parseFloat(found.Impressions || 0);
      const clk = parseFloat(found.Clicks || 0);
      regImp += imp;
      regClicks += clk;
      regEntries.push({ country: found.Country, imp, clk, pos: found.Position, ctr: found.CTR });
    }
  });
  regEntries.sort((a,b) => b.imp - a.imp);
  console.log(`Total Regional Impressions: ${regImp} | Total Clicks: ${regClicks} | CTR: ${regImp > 0 ? ((regClicks/regImp)*100).toFixed(2)+'%' : '0%'}`);
  regEntries.forEach(e => {
    console.log(`  - ${e.country}: Imp=${e.imp}, Clicks=${e.clk}, Pos=${e.pos}, CTR=${e.ctr}`);
  });
});

