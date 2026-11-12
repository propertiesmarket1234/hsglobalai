const https = require('https');

const pdfUrls = [
  'https://www.hsglobalai.com/wp-content/uploads/2026/06/Dihuava-Product-Brochure-2026-JUN.pdf',
  'https://www.hsglobalai.com/wp-content/uploads/2026/06/' + encodeURIComponent('AI数字人软件介绍-2026-JUN_billingual.pdf'),
  'https://hsglobalai.com/wp-content/uploads/2026/06/Dihuava-Product-Brochure-2026-JUN.pdf',
  'https://hsglobalai.com/wp-content/uploads/2026/06/' + encodeURIComponent('AI数字人软件介绍-2026-JUN_billingual.pdf')
];

function testPdf(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = Buffer.alloc(0);
      res.on('data', chunk => {
        if (data.length < 100) data = Buffer.concat([data, chunk]);
      });
      res.on('end', () => {
        const isPdfMagic = data.slice(0, 4).toString() === '%PDF';
        resolve({
          url,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          contentLength: res.headers['content-length'],
          location: res.headers['location'],
          isPdf: isPdfMagic,
          preview: data.slice(0, 30).toString()
        });
      });
    });
    req.on('error', e => resolve({ url, status: 'ERROR', error: e.message }));
    req.setTimeout(8000, () => {
      req.abort();
      resolve({ url, status: 'TIMEOUT' });
    });
    req.end();
  });
}

async function run() {
  console.log('=== TESTING LIVE PDF URLS ===\n');
  for (const u of pdfUrls) {
    const res = await testPdf(u);
    console.log(`URL: ${u}`);
    console.log(`  Status:       ${res.status}`);
    console.log(`  ContentType:  ${res.contentType}`);
    console.log(`  Location:     ${res.location}`);
    console.log(`  Is Valid PDF: ${res.isPdf}`);
    console.log(`  Preview:      ${JSON.stringify(res.preview)}\n`);
  }
}

run();

