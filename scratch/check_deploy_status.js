const https = require('https');

function checkLivePage() {
  return new Promise((resolve) => {
    https.get('https://www.hsglobalai.com/products/ai-digital-human', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', chunk => { if (body.length < 20000) body += chunk; });
      res.on('end', () => {
        const titleMatch = body.match(/<title>([^<]+)<\/title>/);
        const descMatch = body.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/);
        resolve({
          status: res.statusCode,
          title: titleMatch ? titleMatch[1] : 'NONE',
          desc: descMatch ? descMatch[1] : 'NONE',
          server: res.headers['server'],
          xVercelId: res.headers['x-vercel-id'],
          age: res.headers['age']
        });
      });
    }).on('error', err => resolve({ error: err.message }));
  });
}

async function run() {
  console.log('Checking live deployment on https://www.hsglobalai.com/products/ai-digital-human ...');
  const res = await checkLivePage();
  console.log(JSON.stringify(res, null, 2));
}

run();

