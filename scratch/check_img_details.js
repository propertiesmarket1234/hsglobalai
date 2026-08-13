const fs = require('fs');

// Copy candidate LED China (IMG_7669) -> led-china-2026.jpg
fs.copyFileSync('public/images/events/event_img_29.jpg', 'public/images/events/led-china-2026.jpg');

// Copy candidate ISLE China (IMG_7702-1 or 5.jpg) -> isle-china-2026.jpg
fs.copyFileSync('public/images/events/event_img_43.jpg', 'public/images/events/isle-china-2026.jpg');

console.log('Copied candidate images to led-china-2026.jpg and isle-china-2026.jpg');
