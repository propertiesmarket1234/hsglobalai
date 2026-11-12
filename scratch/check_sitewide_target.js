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

const sitewidePages = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Pages.csv');
const targetPageSitewide = sitewidePages.find(p => p['Top pages'] === 'https://www.hsglobalai.com/products/ai-digital-human');
console.log('Target Page in sitewide export (Aug 4 - Nov 3):', targetPageSitewide);

// Subpages in sitewide export
const subpages = sitewidePages.filter(p => p['Top pages'].includes('/products/ai-digital-human/'));
console.log('\nSubpages under /products/ai-digital-human/ in sitewide export:');
subpages.forEach(s => console.log(' ', s['Top pages'], `| Clicks=${s.Clicks} | Imp=${s.Impressions} | CTR=${s.CTR} | Pos=${s.Position}`));

