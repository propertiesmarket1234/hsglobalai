const fs = require('fs');
const path = require('path');

const keywords = [
  'offline AI digital human software',
  'digital human software',
  'AI digital human platform',
  'offline digital human platform',
  'on-device AI digital human',
  'enterprise digital human software',
  'multilingual AI avatar software',
  'AI digital human for kiosks',
  'offline conversational AI avatar',
  'DIHUAVA AI Digital Human'
];

function getAllFiles(dir, exts = ['.ts', '.tsx', '.json', '.md']) {
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

const allFiles = getAllFiles(path.resolve(__dirname, '../src'));

console.log(`Auditing ${allFiles.length} source files for 10 target keywords...\n`);

const results = {};
for (const kw of keywords) {
  results[kw] = [];
  const lowerKw = kw.toLowerCase();
  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes(lowerKw)) {
      // Find matching lines
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.toLowerCase().includes(lowerKw)) {
          results[kw].push({
            file: path.relative(path.resolve(__dirname, '..'), file).replace(/\\/g, '/'),
            line: idx + 1,
            text: line.trim()
          });
        }
      });
    }
  }
}

for (const [kw, matches] of Object.entries(results)) {
  console.log(`\n======================================================`);
  console.log(`KEYWORD: "${kw}" — Total Matches: ${matches.length}`);
  console.log(`======================================================`);
  if (matches.length === 0) {
    console.log('  [GAP] ZERO EXACT OCCURRENCES FOUND IN SRC CODEBASE!');
  } else {
    matches.slice(0, 5).forEach(m => {
      console.log(`  - ${m.file}:${m.line} -> ${m.text.slice(0, 110)}`);
    });
    if (matches.length > 5) {
      console.log(`  ... and ${matches.length - 5} more matches`);
    }
  }
}
