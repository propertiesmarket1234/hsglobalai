const fs = require('fs');
const path = require('path');

function getDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.png') {
    if (buffer.length > 24) {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      return { width, height, type: 'PNG' };
    }
  } else if (ext === '.jpg' || ext === '.jpeg') {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xFF) break;
      const marker = buffer[offset + 1];
      if (marker === 0xC0 || marker === 0xC2) { // SOF0 or SOF2
        const height = buffer.readUInt16BE(offset + 5);
        const width = buffer.readUInt16BE(offset + 7);
        return { width, height, type: 'JPEG' };
      }
      const len = buffer.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
  } else if (ext === '.svg') {
    const text = buffer.toString('utf8', 0, 1000);
    const wMatch = text.match(/width=["'](\d+)/);
    const hMatch = text.match(/height=["'](\d+)/);
    const vbMatch = text.match(/viewBox=["']\d+\s+\d+\s+(\d+)\s+(\d+)/);
    if (wMatch && hMatch) {
      return { width: parseInt(wMatch[1]), height: parseInt(hMatch[1]), type: 'SVG' };
    } else if (vbMatch) {
      return { width: parseInt(vbMatch[1]), height: parseInt(vbMatch[2]), type: 'SVG' };
    }
    return { width: 'Vector', height: 'Vector', type: 'SVG' };
  }
  return { width: 'Unknown', height: 'Unknown', type: ext };
}

const targetFiles = [
  'D:/WebProjects/hsglobalai/public/logo/hs-global-ai-logo.png',
  'D:/WebProjects/hsglobalai/public/products/digital-humans/digital-human-dashboard.jpg',
  'D:/WebProjects/hsglobalai/public/products/digital-humans/digital-human-new.png',
  'D:/WebProjects/hsglobalai/public/products/hologram-box/hologram-box.png',
  'D:/WebProjects/hsglobalai/public/products/hologram-box/hologram-box-saree.jpg',
  'D:/WebProjects/hsglobalai/public/products/spatial-display/spatial-display.png',
  'D:/WebProjects/hsglobalai/public/products/virtual-try-on/virtual-try-on.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/banking_hologram_kiosk.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/executive_lady_hologram.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/jewellery_hologram_kiosk.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/jewellery_lady_hologram.jpg',
  'D:/WebProjects/hsglobalai/public/images/use-cases/museum_hologram_avatar.png',
  'D:/WebProjects/hsglobalai/public/images/events/led-china-2026.jpg',
  'D:/WebProjects/hsglobalai/public/images/events/led-china-demo-1.jpg',
  'D:/WebProjects/hsglobalai/public/images/events/led-china-demo-2.jpg',
  'D:/WebProjects/hsglobalai/public/images/events/isle-china-2026.jpg',
  'D:/WebProjects/hsglobalai/public/images/avatars/full_digital_human_presenter.png',
  'D:/WebProjects/hsglobalai/public/images/avatars/ai_digital_human_lady.png'
];

targetFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const stat = fs.statSync(f);
    const dim = getDimensions(f);
    console.log(`${path.basename(f)} | ${dim.type} | ${dim.width}x${dim.height} | ${(stat.size/1024).toFixed(1)} KB`);
  } else {
    console.log(`Missing: ${f}`);
  }
});

