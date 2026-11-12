const fs = require('fs');
const path = require('path');

function search43(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') search43(full);
    } else if (/\.(tsx?|json|md)$/i.test(f)) {
      const c = fs.readFileSync(full, 'utf8');
      if (/\b43\b|\b43″|\b43"/i.test(c)) {
        console.log('43 found in:', full);
        const lines = c.split('\n');
        lines.forEach((l, i) => {
          if (/\b43\b|\b43″|\b43"/i.test(l)) {
            console.log('  line ' + (i+1) + ': ' + l.trim().slice(0, 120));
          }
        });
      }
    }
  }
}

search43('D:/WebProjects/hsglobalai/src');

