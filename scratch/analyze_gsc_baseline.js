const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'docs', 'seo-baseline');

function parseCsv(filename) {
  const content = fs.readFileSync(path.join(dir, filename), 'utf8').trim();
  const lines = content.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    // Handle quotes in CSV
    let line = lines[i];
    // if line has unmatched quotes, join with next line
    while ((line.match(/"/g) || []).length % 2 === 1 && i + 1 < lines.length) {
      i++;
      line += '\n' + lines[i];
    }
    // simple csv row parser
    const regex = /(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*|(?:\n|$))/g;
    const matches = [];
    let m;
    while ((m = regex.exec(line)) !== null) {
      let val = m[1];
      if (val === undefined) continue;
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1).replace(/""/g, '"');
      }
      matches.push(val.trim());
      if (regex.lastIndex >= line.length) break;
    }
    if (matches.length > 0) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = matches[idx];
      });
      rows.push(obj);
    }
  }
  return { headers, rows };
}

console.log('--- FILTERS ---');
console.log(fs.readFileSync(path.join(dir, 'Filters.csv'), 'utf8'));

console.log('--- PAGES ---');
const pages = parseCsv('Pages.csv');
console.table(pages.rows);

console.log('--- QUERIES ---');
const queries = parseCsv('Queries.csv');
console.table(queries.rows);

console.log('--- COUNTRIES ---');
const countries = parseCsv('Countries.csv');
console.table(countries.rows);

console.log('--- DEVICES ---');
const devices = parseCsv('Devices.csv');
console.table(devices.rows);

console.log('--- CHART AGGREGATES ---');
const chart = parseCsv('Chart.csv');
let totalClicks = 0;
let totalImpressions = 0;
let positionSum = 0;
let positionCount = 0;
let activeDays = 0;

chart.rows.forEach(r => {
  const c = parseInt(r.Clicks, 10) || 0;
  const imp = parseInt(r.Impressions, 10) || 0;
  const pos = parseFloat(r.Position);
  totalClicks += c;
  totalImpressions += imp;
  if (!isNaN(pos) && imp > 0) {
    positionSum += pos * imp;
    positionCount += imp;
  }
  if (imp > 0) activeDays++;
});

console.log('Chart rows count:', chart.rows.length);
console.log('Date range:', chart.rows[0].Date, 'to', chart.rows[chart.rows.length - 1].Date);
console.log('Total Clicks (sum of days):', totalClicks);
console.log('Total Impressions (sum of days):', totalImpressions);
console.log('Weighted Average Position (chart):', (positionSum / positionCount).toFixed(2));
console.log('Average CTR:', ((totalClicks / totalImpressions) * 100).toFixed(2) + '%');
console.log('Active Impression Days:', activeDays);

