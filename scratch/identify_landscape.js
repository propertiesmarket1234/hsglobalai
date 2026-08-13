const fs = require('fs');
const path = require('path');

const candidates = [
  { name: 'IMG_7671', file: 'event_img_24.jpg' },
  { name: 'IMG_7669', file: 'event_img_29.jpg' },
  { name: '5-1024x768', file: 'event_img_34.jpg' },
  { name: 'IMG_7717', file: 'event_img_38.jpg' },
  { name: 'IMG_7702-1', file: 'event_img_43.jpg' }
];

candidates.forEach(c => {
  const p = path.join('public/images/events', c.file);
  if (fs.existsSync(p)) {
    const size = fs.statSync(p).size;
    console.log(`${c.name} (${c.file}): ${size} bytes`);
  } else {
    console.log(`${c.name} (${c.file}): NOT FOUND`);
  }
});
