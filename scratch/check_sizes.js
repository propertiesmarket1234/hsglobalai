const fs = require('fs');

function searchFile(path) {
  if (!fs.existsSync(path)) return;
  const c = fs.readFileSync(path, 'utf8');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if ((/43|55|65|75|86|inch|″|\"/i.test(l)) && (/kiosk|hologram|display|box|totem/i.test(l))) {
      console.log(path + ' [' + (i+1) + ']: ' + l.trim().slice(0, 140));
    }
  });
}

searchFile('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx');
searchFile('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx');
searchFile('D:/WebProjects/hsglobalai/src/app/products/holographic-display/HolographicDisplayClient.tsx');
searchFile('D:/WebProjects/hsglobalai/src/app/products/spatial-display/SpatialDisplayClient.tsx');

