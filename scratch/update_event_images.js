const fs = require('fs');

// Copy exact real images
fs.copyFileSync('public/images/events/event_img_7.jpg', 'public/images/events/led-china-2026.jpg');
fs.copyFileSync('public/images/events/event_img_48.jpg', 'public/images/events/isle-china-2026.jpg');

console.log('Successfully updated led-china-2026.jpg and isle-china-2026.jpg with real exhibition photos!');
