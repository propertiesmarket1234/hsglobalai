const https = require('https');

https.get('https://www.hsglobalai.com/blog/what-is-a-digital-human-avatar', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  console.log('HTTP Status:', res.statusCode);
  console.log('Vercel ID Header:', res.headers['x-vercel-id']);
  console.log('Server:', res.headers['server']);
  console.log('Age:', res.headers['age']);
  console.log('Date:', res.headers['date']);
  console.log('Cache-Control:', res.headers['cache-control']);
});

