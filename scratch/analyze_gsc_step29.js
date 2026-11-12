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

console.log('=== docs/seo-baseline/Filters.csv ===');
console.log(fs.readFileSync('D:/WebProjects/hsglobalai/docs/seo-baseline/Filters.csv', 'utf8'));

console.log('=== docs/seo-baseline/Pages.csv ===');
console.log(fs.readFileSync('D:/WebProjects/hsglobalai/docs/seo-baseline/Pages.csv', 'utf8'));

console.log('=== docs/seo-baseline/Queries.csv ===');
console.log(fs.readFileSync('D:/WebProjects/hsglobalai/docs/seo-baseline/Queries.csv', 'utf8'));

console.log('=== Target Keyword Search in docs/seo-sitewide/Queries.csv ===');
const targetQueries = [
  'offline ai digital human software',
  'digital human software',
  'ai digital human software',
  'ai digital human platform',
  'enterprise digital human software',
  'on-device ai digital human',
  'dihuava'
];

const sitewideQueries = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Queries.csv');
targetQueries.forEach(kw => {
  const exact = sitewideQueries.filter(q => q['Top queries'].toLowerCase() === kw.toLowerCase());
  const partial = sitewideQueries.filter(q => q['Top queries'].toLowerCase().includes(kw.toLowerCase()) && q['Top queries'].toLowerCase() !== kw.toLowerCase());
  console.log(`Query "${kw}": exact=${exact.length}, partial=${partial.length}`);
  exact.forEach(e => console.log('  EXACT:', e));
  partial.forEach(p => console.log('  PARTIAL:', p));
});

// Analyze Chart.csv in baseline vs sitewide
const baselineChart = parseCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Chart.csv');
console.log('\nBaseline Chart dates count:', baselineChart.length);
if (baselineChart.length > 0) {
  console.log('First date:', baselineChart[0].Date, 'Last date:', baselineChart[baselineChart.length - 1].Date);
}

const sitewideChart = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Chart.csv');
console.log('Sitewide Chart dates count:', sitewideChart.length);
if (sitewideChart.length > 0) {
  console.log('First date:', sitewideChart[0].Date, 'Last date:', sitewideChart[sitewideChart.length - 1].Date);
}

