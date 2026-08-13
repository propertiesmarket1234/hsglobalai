const fs = require('fs');
const path = require('path');

// Let's check images that were downloaded
const files = fs.readdirSync('public/images/events');

files.forEach(f => {
  const stat = fs.statSync(path.join('public/images/events', f));
  if (stat.size > 50000 && stat.size < 800000) {
    console.log(`${f}: ${stat.size} bytes`);
  }
});
