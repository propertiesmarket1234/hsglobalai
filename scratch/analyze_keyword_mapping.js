const fs = require('fs');
const path = require('path');

const targetIntents = [
  'offline AI digital human software',
  'digital human software',
  'AI digital human platform',
  'offline digital human platform',
  'on-device AI digital human',
  'multilingual AI avatar software',
  'AI digital human for kiosks',
  'DIHUAVA AI digital human'
];

function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.next' || f === '.git') continue;
    if (fs.statSync(full).isDirectory()) res = res.concat(walk(full));
    else if (/\.(ts|tsx)$/.test(f)) res.push(full);
  }
  return res;
}

const files = walk('src');

console.log('=== TARGET INTENT MAPPING IN CODEBASE ===\n');

targetIntents.forEach(intent => {
  console.log(`----------------------------------------------------`);
  console.log(`INTENT: "${intent}"`);
  console.log(`----------------------------------------------------`);
  const regex = new RegExp(intent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  let matches = [];
  files.forEach(file => {
    const rel = file.replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    lines.forEach((l, idx) => {
      if (regex.test(l)) {
        matches.push({ file: rel, line: idx + 1, text: l.trim() });
      }
    });
  });

  console.log(`Total occurrences: ${matches.length}`);
  // Group by file
  const byFile = {};
  matches.forEach(m => {
    byFile[m.file] = (byFile[m.file] || 0) + 1;
  });
  Object.keys(byFile).forEach(f => {
    console.log(`  - ${f}: ${byFile[f]} occurrence(s)`);
  });
});
