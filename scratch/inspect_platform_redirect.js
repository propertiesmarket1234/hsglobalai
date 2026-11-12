const https = require('https');

function check(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, status: res.statusCode, location: res.headers.location });
    });
  });
}

async function run() {
  const r1 = await check('https://www.hsglobalai.com/platform');
  console.log('/platform:', r1);
  const r2 = await check('https://www.hsglobalai.com/products/dihuava');
  console.log('/products/dihuava:', r2);
  const r3 = await check('https://www.hsglobalai.com/digital-human');
  console.log('/digital-human:', r3);
}

run();

