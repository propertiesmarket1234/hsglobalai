const fs = require('fs');

function readPNGExact(filePath) {
  const buf = fs.readFileSync(filePath);
  const ihdrIdx = buf.indexOf('IHDR');
  if (ihdrIdx !== -1) {
    const width = buf.readUInt32BE(ihdrIdx + 4);
    const height = buf.readUInt32BE(ihdrIdx + 8);
    return { width, height };
  }
  return { width: 'unknown', height: 'unknown' };
}

const pngs = [
  'D:/WebProjects/hsglobalai/public/logo/hs-global-ai-logo.png',
  'D:/WebProjects/hsglobalai/public/products/digital-humans/digital-human-new.png',
  'D:/WebProjects/hsglobalai/public/products/hologram-box/hologram-box.png',
  'D:/WebProjects/hsglobalai/public/products/spatial-display/spatial-display.png',
  'D:/WebProjects/hsglobalai/public/products/virtual-try-on/virtual-try-on.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/banking_hologram_kiosk.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/executive_lady_hologram.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/jewellery_hologram_kiosk.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/museum_hologram_avatar.png',
  'D:/WebProjects/hsglobalai/public/images/avatars/full_digital_human_presenter.png',
  'D:/WebProjects/hsglobalai/public/images/avatars/ai_digital_human_lady.png'
];

pngs.forEach(p => {
  const d = readPNGExact(p);
  console.log(p.split('/').pop() + ': ' + d.width + 'x' + d.height);
});

