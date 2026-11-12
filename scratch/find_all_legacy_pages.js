const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'docs', 'seo-sitewide', 'Pages.csv'), 'utf8').trim();
const lines = content.split('\n');
const rows = [];
for (let i = 1; i < lines.length; i++) {
  const parts = lines[i].split(',');
  if (parts.length >= 5) {
    rows.push({
      url: parts[0].trim(),
      clicks: parseInt(parts[1], 10) || 0,
      impressions: parseInt(parts[2], 10) || 0,
      ctr: parts[3].trim(),
      position: parseFloat(parts[4]) || 0
    });
  }
}

// Find non-standard, legacy or non-www URLs
const legacy = rows.filter(r => {
  const u = r.url;
  // Non-www
  if (u.startsWith('https://hsglobalai.com/')) return true;
  // Common legacy patterns
  if (u.includes('wp-content')) return true;
  if (u.endsWith('-us/')) return true;
  return false;
});

console.log(`Found ${legacy.length} legacy / non-canonical URLs in GSC Pages.csv:`);
legacy.sort((a, b) => b.impressions - a.impressions);
console.table(legacy);

