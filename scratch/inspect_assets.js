const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      getFiles(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

const publicDir = 'D:/WebProjects/hsglobalai/public';
const allFiles = getFiles(publicDir);

console.log('Total files in public:', allFiles.length);
allFiles.forEach(f => {
  const rel = path.relative(publicDir, f);
  if (/\.(png|jpe?g|svg|webp|ico)$/i.test(f)) {
    const stat = fs.statSync(f);
    console.log(rel + ' (' + (stat.size / 1024).toFixed(1) + ' KB)');
  }
});

