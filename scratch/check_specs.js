const fs = require('fs');

function checkFile(path, pattern) {
  const c = fs.readFileSync(path, 'utf8');
  console.log('=== ' + path + ' ===');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if (pattern.test(l)) console.log((i+1) + ': ' + l.trim().slice(0, 140));
  });
}

checkFile('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', /RTX|GPU|RAM|CPU|specification|specs|hardware|system requirements/i);
checkFile('D:/WebProjects/hsglobalai/src/app/products/holographic-display/HolographicDisplayClient.tsx', /resolution|specs|nits|dimension|display/i);

