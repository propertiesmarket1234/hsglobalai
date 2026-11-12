const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'docs', 'seo-sitewide');

function parseCsv(filename) {
  const content = fs.readFileSync(path.join(dir, filename), 'utf8').trim();
  const lines = content.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    let line = lines[i];
    while ((line.match(/"/g) || []).length % 2 === 1 && i + 1 < lines.length) {
      i++;
      line += '\n' + lines[i];
    }
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

console.log('=== SITEWIDE GSC ANALYSIS ===');

// 1. Chart
const chart = parseCsv('Chart.csv');
let totalClicks = 0;
let totalImpressions = 0;
chart.rows.forEach(r => {
  totalClicks += parseInt(r.Clicks, 10) || 0;
  totalImpressions += parseInt(r.Impressions, 10) || 0;
});
console.log(`Date Range: ${chart.rows[0].Date} to ${chart.rows[chart.rows.length - 1].Date}`);
console.log(`Total Days: ${chart.rows.length}`);
console.log(`Total Sitewide Clicks: ${totalClicks}`);
console.log(`Total Sitewide Impressions: ${totalImpressions}`);
console.log(`Overall CTR: ${((totalClicks / totalImpressions) * 100).toFixed(2)}%`);

// 2. Pages
const pages = parseCsv('Pages.csv');
console.log(`\nTotal Indexed Ranking Pages: ${pages.rows.length}`);
pages.rows.forEach(p => {
  p.Clicks = parseInt(p.Clicks, 10) || 0;
  p.Impressions = parseInt(p.Impressions, 10) || 0;
  p.Position = parseFloat(p.Position) || 0;
});

// Sort by impressions descending
pages.rows.sort((a, b) => b.Impressions - a.Impressions);
console.log('\nTop 15 Pages by Impressions:');
console.table(pages.rows.slice(0, 15).map(p => ({
  Page: p['Top pages'],
  Clicks: p.Clicks,
  Impressions: p.Impressions,
  CTR: p.CTR,
  Position: p.Position
})));

// 3. Queries
const queries = parseCsv('Queries.csv');
console.log(`\nTotal Tracked Queries: ${queries.rows.length}`);
queries.rows.forEach(q => {
  q.Clicks = parseInt(q.Clicks, 10) || 0;
  q.Impressions = parseInt(q.Impressions, 10) || 0;
  q.Position = parseFloat(q.Position) || 0;
});
queries.rows.sort((a, b) => b.Impressions - a.Impressions);

// Target keyword filter
const targetKeywords = queries.rows.filter(q => {
  const t = q['Top queries'].toLowerCase();
  return t.includes('digital human') || t.includes('avatar') || t.includes('offline') || t.includes('dihuava') || t.includes('virtual human');
});

console.log(`\nQueries containing 'digital human', 'avatar', 'offline', 'dihuava', 'virtual human' (${targetKeywords.length} queries):`);
console.table(targetKeywords.map(q => ({
  Query: q['Top queries'],
  Clicks: q.Clicks,
  Impressions: q.Impressions,
  CTR: q.CTR,
  Position: q.Position
})));

// Striking distance queries (positions 4 to 20)
const strikingDistance = queries.rows.filter(q => q.Position >= 4 && q.Position <= 20);
console.log(`\nStriking Distance Queries (Positions 4.0 - 20.0) (${strikingDistance.length} queries):`);
console.table(strikingDistance.slice(0, 25).map(q => ({
  Query: q['Top queries'],
  Clicks: q.Clicks,
  Impressions: q.Impressions,
  CTR: q.CTR,
  Position: q.Position
})));

// 4. Countries
const countries = parseCsv('Countries.csv');
countries.rows.forEach(c => {
  c.Clicks = parseInt(c.Clicks, 10) || 0;
  c.Impressions = parseInt(c.Impressions, 10) || 0;
  c.Position = parseFloat(c.Position) || 0;
});
countries.rows.sort((a, b) => b.Impressions - a.Impressions);
console.log('\nTop 15 Countries:');
console.table(countries.rows.slice(0, 15));

// Focus countries: USA, Germany, UAE, France, India
const focusCountries = ['United States', 'Germany', 'United Arab Emirates', 'France', 'India'];
console.log('\nFocus Countries Breakdown:');
console.table(countries.rows.filter(c => focusCountries.includes(c.Country)));

// 5. Devices
const devices = parseCsv('Devices.csv');
console.log('\nDevices Breakdown:');
console.table(devices.rows);

