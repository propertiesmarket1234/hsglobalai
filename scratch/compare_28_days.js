const fs = require('fs');

function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split('\n').filter(l => l.trim().length > 0);
  const header = lines[0].split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
    const obj = {};
    header.forEach((h, idx) => obj[h] = values[idx]);
    return obj;
  });
}

// 1. Baseline Chart (Filtered to /products/ai-digital-human)
const bChart = parseCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Chart.csv');
console.log(`Baseline Chart total days: ${bChart.length} (from ${bChart[0].Date} to ${bChart[bChart.length - 1].Date})`);

// Split bChart into 28-day windows
const bLatest28 = bChart.slice(-28);
const bPrev28 = bChart.slice(-56, -28);

function sumChart(rows) {
  let clicks = 0, imp = 0, posSum = 0;
  rows.forEach(r => {
    clicks += parseInt(r.Clicks || '0', 10);
    imp += parseInt(r.Impressions || '0', 10);
    posSum += parseFloat(r.Position || '0') * parseInt(r.Impressions || '0', 10);
  });
  const avgPos = imp > 0 ? (posSum / imp).toFixed(2) : 'N/A';
  const ctr = imp > 0 ? ((clicks / imp) * 100).toFixed(2) + '%' : '0%';
  return {
    start: rows[0].Date,
    end: rows[rows.length - 1].Date,
    clicks,
    impressions: imp,
    ctr,
    avgPosition: avgPos
  };
}

console.log('\n--- Target URL Baseline Performance (docs/seo-baseline/Chart.csv) ---');
console.log('Previous 28 Days (Aug 30 - Sep 26, 2026):', sumChart(bPrev28));
console.log('Latest 28 Days in Baseline (Sep 27 - Oct 24, 2026):', sumChart(bLatest28));

// 2. Sitewide Chart
const sChart = parseCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Chart.csv');
console.log(`\nSitewide Chart total days: ${sChart.length} (from ${sChart[0].Date} to ${sChart[sChart.length - 1].Date})`);

const sLatest28 = sChart.slice(-28);
const sPrev28 = sChart.slice(-56, -28);
console.log('Sitewide Previous 28 Days (Sep 9 - Oct 6, 2026):', sumChart(sPrev28));
console.log('Sitewide Latest 28 Days (Oct 7 - Nov 3, 2026):', sumChart(sLatest28));

