const fs = require('fs');
const path = require('path');

// Let's check files with sizes around 100k to 500k
const files = fs.readdirSync('public/images/events');

files.forEach(f => {
  const p = path.join('public/images/events', f);
  const size = fs.statSync(p).size;
  if (f !== 'event_img_7.jpg' && size > 80000 && size < 600000) {
    console.log(`${f}: ${size}`);
  }
});
