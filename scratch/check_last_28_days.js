const fs = require('fs');

function parseChartCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(',');
    rows.push({
      date: parts[0],
      clicks: parseFloat(parts[1] || 0),
      impressions: parseFloat(parts[2] || 0),
      ctr: parts[3],
      position: parseFloat(parts[4] || 0)
    });
  }
  return rows;
}

const sitewideChart = parseChartCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Chart.csv');
const baselineChart = parseChartCSV('D:/WebProjects/hsglobalai/docs/seo-baseline/Chart.csv');

console.log('Sitewide Chart rows:', sitewideChart.length);
console.log('Baseline Chart rows:', baselineChart.length);

console.log('\n--- Sitewide Last 28 Days (From export: 2026-10-07 to 2026-11-03) ---');
const last28Sitewide = sitewideChart.slice(-28);
let totalClicksSitewide = 0;
let totalImpSitewide = 0;
let weightedPosSum = 0;

last28Sitewide.forEach(r => {
  totalClicksSitewide += r.clicks;
  totalImpSitewide += r.impressions;
  weightedPosSum += r.position * r.impressions;
});

const avgPosSitewide = totalImpSitewide > 0 ? (weightedPosSum / totalImpSitewide).toFixed(2) : '0';
const avgCtrSitewide = totalImpSitewide > 0 ? ((totalClicksSitewide / totalImpSitewide) * 100).toFixed(2) + '%' : '0%';

console.log(`Date range:   ${last28Sitewide[0].date} to ${last28Sitewide[last28Sitewide.length - 1].date}`);
console.log(`Impressions:  ${totalImpSitewide}`);
console.log(`Clicks:       ${totalClicksSitewide}`);
console.log(`Avg CTR:      ${avgCtrSitewide}`);
console.log(`Avg Position: ${avgPosSitewide}`);

console.log('\n--- DIHUAVA (/products/ai-digital-human) Last 28 Days (From export) ---');
const last28Baseline = baselineChart.slice(-28);
let totalClicksBaseline = 0;
let totalImpBaseline = 0;
let weightedPosSumBaseline = 0;

last28Baseline.forEach(r => {
  totalClicksBaseline += r.clicks;
  totalImpBaseline += r.impressions;
  weightedPosSumBaseline += r.position * r.impressions;
});

const avgPosBaseline = totalImpBaseline > 0 ? (weightedPosSumBaseline / totalImpBaseline).toFixed(2) : '0';
const avgCtrBaseline = totalImpBaseline > 0 ? ((totalClicksBaseline / totalImpBaseline) * 100).toFixed(2) + '%' : '0%';

console.log(`Date range:   ${last28Baseline[0].date} to ${last28Baseline[last28Baseline.length - 1].date}`);
console.log(`Impressions:  ${totalImpBaseline}`);
console.log(`Clicks:       ${totalClicksBaseline}`);
console.log(`Avg CTR:      ${avgCtrBaseline}`);
console.log(`Avg Position: ${avgPosBaseline}`);

