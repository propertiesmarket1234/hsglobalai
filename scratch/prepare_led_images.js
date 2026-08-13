const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'events');

// Copy Image 1 (pendant presentation)
fs.copyFileSync(
  path.join(targetDir, 'event_img_43.jpg'),
  path.join(targetDir, 'led-china-demo-1.jpg')
);

// Copy Image 2 (handshake & earrings demo)
fs.copyFileSync(
  path.join(targetDir, 'event_img_24.jpg'),
  path.join(targetDir, 'led-china-demo-2.jpg')
);

console.log('Successfully prepared led-china-demo-1.jpg and led-china-demo-2.jpg!');
