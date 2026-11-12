const fs = require('fs');

function readJPEGDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xFF) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    if (marker === 0xC0 || marker === 0xC1 || marker === 0xC2) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buf.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return { width: 'unknown', height: 'unknown' };
}

const files = [
  'D:/WebProjects/hsglobalai/public/products/hologram-box/hologram-box.png',
  'D:/WebProjects/hsglobalai/public/products/virtual-try-on/virtual-try-on.png',
  'D:/WebProjects/hsglobalai/public/images/avatars/full_digital_human_presenter.png',
  'D:/WebProjects/hsglobalai/public/images/avatars/ai_digital_human_lady.png',
  'D:/WebProjects/hsglobalai/public/images/use-cases/museum_hologram_avatar.png'
];

files.forEach(f => {
  const d = readJPEGDimensions(f);
  console.log(f.split('/').pop() + ' (JPEG content): ' + d.width + 'x' + d.height);
});

