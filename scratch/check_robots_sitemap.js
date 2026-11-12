const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ code: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function check() {
  const robots = await get('https://www.hsglobalai.com/robots.txt');
  console.log('=== ROBOTS.TXT (HTTP ' + robots.code + ') ===');
  console.log(robots.body);

  const sitemap = await get('https://www.hsglobalai.com/sitemap.xml');
  console.log('=== SITEMAP.XML (HTTP ' + sitemap.code + ') ===');
  console.log('Sitemap contains /products/ai-digital-human:', sitemap.body.includes('https://www.hsglobalai.com/products/ai-digital-human'));
  console.log('Sitemap contains /blog/what-is-a-digital-human-avatar:', sitemap.body.includes('https://www.hsglobalai.com/blog/what-is-a-digital-human-avatar'));
  console.log('Total <url> tags in sitemap:', (sitemap.body.match(/<url>/g) || []).length);
}

check();

