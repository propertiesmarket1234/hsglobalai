const fs = require('fs');

function searchLinks(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = dir + '/' + entry.name;
    if (entry.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('scratch') && !fullPath.includes('docs')) {
      results = results.concat(searchLinks(fullPath));
    } else if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, i) => {
        if (line.includes('/products/ai-digital-human') && !line.includes('/products/ai-digital-human/')) {
          results.push({ file: fullPath, line: i + 1, text: line.trim() });
        }
      });
    }
  }
  return results;
}

const links = searchLinks('src');
console.log('Total internal links to /products/ai-digital-human:', links.length);
links.forEach(l => console.log(`${l.file}:${l.line} -> ${l.text.slice(0, 140)}`));

