const https = require('https');

function check(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const canonicalMatch = data.match(/<link [^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/);
        resolve({
          url,
          status: res.statusCode,
          canonical: canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'
        });
      });
    });
  });
}

async function run() {
  console.log(await check('https://www.hsglobalai.com/'));
  console.log(await check('https://www.hsglobalai.com/products/ai-digital-human'));
  console.log(await check('https://www.hsglobalai.com/blog/what-is-a-digital-human-avatar'));
}

run();

