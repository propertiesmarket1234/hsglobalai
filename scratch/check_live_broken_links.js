const https = require('https');

function getLinks(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        const matches = [...data.matchAll(/<a[^>]+href="([^"]+)"/g)].map(m => m[1]);
        resolve(matches);
      });
    }).on('error', reject);
  });
}

function checkStatus(path) {
  return new Promise((resolve) => {
    const fullUrl = path.startsWith('http') ? path : 'https://www.hsglobalai.com' + path;
    const u = new URL(fullUrl);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname + u.search,
      method: 'HEAD'
    }, (res) => {
      resolve({ path, status: res.statusCode });
    });
    req.on('error', (e) => resolve({ path, error: e.message }));
    req.end();
  });
}

async function run() {
  const links = await getLinks('https://www.hsglobalai.com/products/ai-digital-human');
  const internal = [...new Set(links.filter(l => l.startsWith('/') && !l.startsWith('//')))];
  console.log(`Found ${internal.length} unique internal links on live page. Checking status...`);

  for (const l of internal) {
    const res = await checkStatus(l);
    if (res.status !== 200 && res.status !== 308) {
      console.log(`⚠️ Unclean status: ${res.path} -> ${res.status}`);
    }
  }
  console.log('Internal links check completed.');
}

run();

