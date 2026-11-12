const fs = require('fs');
const path = require('path');

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

console.log('=== INTERNAL LINKS TO /products/ai-digital-human ===\n');

const links = [];

files.forEach(file => {
  const rel = file.replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  // Regex for Link href="/products/ai-digital-human" or markdown [text](/products/ai-digital-human)
  const mdRegex = /\[([^\]]+)\]\((\/products\/ai-digital-human[^)]*)\)/g;
  let m;
  while ((m = mdRegex.exec(content)) !== null) {
    links.push({
      file: rel,
      anchor: m[1],
      target: m[2],
      type: 'markdown'
    });
  }

  // Next.js Link or href
  const hrefRegex = /href=\{?["'](\/products\/ai-digital-human[^"']*)["']\}?/g;
  while ((m = hrefRegex.exec(content)) !== null) {
    // try to get enclosing text or nearby text
    const start = Math.max(0, m.index - 50);
    const snippet = content.slice(start, m.index + 120).replace(/\s+/g, ' ');
    links.push({
      file: rel,
      target: m[1],
      snippet: snippet.slice(0, 100),
      type: 'jsx'
    });
  }
});

console.log(`Found ${links.length} total internal link instances.\n`);
console.log('Markdown Links with Anchor Text:');
links.filter(l => l.type === 'markdown').forEach(l => {
  console.log(`  - [${l.anchor}](${l.target}) in ${l.file}`);
});

console.log('\nJSX Links Breakdown by Target:');
const byTarget = {};
links.filter(l => l.type === 'jsx').forEach(l => {
  byTarget[l.target] = (byTarget[l.target] || 0) + 1;
});
Object.keys(byTarget).forEach(t => {
  console.log(`  - Target: ${t} (${byTarget[t]} links)`);
});
