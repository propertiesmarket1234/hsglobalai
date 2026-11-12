const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts = ['.ts', '.tsx']) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (item === 'node_modules' || item === '.next' || item === '.git') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(full, exts));
    } else if (exts.includes(path.extname(full))) {
      files.push(full);
    }
  }
  return files;
}

const files = getAllFiles('src');

const auditRules = [
  {
    category: 'Licensing: Perpetual / Lifetime',
    regex: /\b(perpetual|lifetime|one-time fee|one-time purchase|one-time investment)\b/i,
  },
  {
    category: 'Licensing: $0 / Free of recurring / Zero per-',
    regex: /(\$0|zero per-|no per-|free of recurring|zero ongoing|fixed hardware ownership)/i,
  },
  {
    category: 'Hardware: 8GB VRAM',
    regex: /8\s*GB\s*(?:GPU)?\s*VRAM/i,
  },
  {
    category: 'Hardware: Sub-second / Instantaneous',
    regex: /\b(sub-second|instantaneous)\b/i,
  },
  {
    category: 'Offline: Offline promises / QR / updates',
    regex: /(100% offline|completely offline|fully offline|airplane mode)/i,
  }
];

const matches = [];

files.forEach(file => {
  const relPath = file.replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    auditRules.forEach(rule => {
      if (rule.regex.test(line)) {
        matches.push({
          category: rule.category,
          file: relPath,
          line: idx + 1,
          text: line.trim()
        });
      }
    });
  });
});

console.log(`Found ${matches.length} matches across codebase:\n`);

const byCat = {};
matches.forEach(m => {
  if (!byCat[m.category]) byCat[m.category] = [];
  byCat[m.category].push(m);
});

Object.keys(byCat).forEach(cat => {
  console.log(`\n======================================================`);
  console.log(`CATEGORY: ${cat} (${byCat[cat].length} occurrences)`);
  console.log(`======================================================`);
  byCat[cat].forEach(m => {
    console.log(`[${m.file}:${m.line}] ${m.text.slice(0, 140)}`);
  });
});
