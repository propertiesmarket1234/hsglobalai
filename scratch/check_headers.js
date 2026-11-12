const fs = require('fs');

const files = [
  'D:/WebProjects/hsglobalai/public/products/hologram-box/hologram-box.png',
  'D:/WebProjects/hsglobalai/public/products/virtual-try-on/virtual-try-on.png',
  'D:/WebProjects/hsglobalai/public/images/avatars/full_digital_human_presenter.png',
  'D:/WebProjects/hsglobalai/public/images/avatars/ai_digital_human_lady.png'
];

files.forEach(f => {
  const buf = fs.readFileSync(f);
  console.log(f.split('/').pop(), 'Header bytes:', buf.slice(0, 16).toString('hex'), 'Ascii:', buf.slice(0, 16).toString('ascii'));
});

