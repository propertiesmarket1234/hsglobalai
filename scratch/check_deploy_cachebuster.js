const https = require('https');

function checkLivePage(path) {
  return new Promise((resolve) => {
    https.get(`https://www.hsglobalai.com${path}`, { headers: { 'User-Agent': 'Mozilla/5.0', 'Cache-Control': 'no-cache' } }, (res) => {
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
  const ts = Date.now();
  console.log(`Probing with cache-buster ?t=${ts}...`);
  const res = await checkLivePage(`/products/ai-digital-human?t=${ts}`);
  console.log(JSON.stringify(res, null, 2));
}

run();

