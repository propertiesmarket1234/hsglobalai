const https = require('https');

const slugs = [
  'banking',
  'retail',
  'healthcare',
  'corporate',
  'education',
  'tourism'
];

async function checkUrl(slug) {
  const url = `https://www.hsglobalai.com/industries/${slug}`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const canonicalUrl = `https://www.hsglobalai.com/industries/${slug}`;
        const hasCanonical = body.includes(`rel="canonical" href="${canonicalUrl}"`) || body.includes(`href="${canonicalUrl}" rel="canonical"`);
        const hasOgUrl = body.includes(`property="og:url" content="${canonicalUrl}"`);
        const hasFaqSchema = body.includes('FAQPage');
        const hasBreadcrumbSchema = body.includes('BreadcrumbList');
        const hasServiceSchema = body.includes('Service');

        const titleMatch = body.match(/<title>([^<]+)<\/title>/i);
        const metaDescMatch = body.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
        const h1Matches = body.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];

        const hasTargetBenchmark = body.includes('Target Benchmark') || body.includes('illustrative');
        const hasOfflineStatement = body.includes('DIHUAVA runs 100% offline on-device by default');
        const hasMultilingualStatement = body.includes('29+ global languages') || body.includes('29+ Global Languages');

        resolve({
          slug,
          status: res.statusCode,
          title: titleMatch ? titleMatch[1] : '',
          metaDesc: metaDescMatch ? metaDescMatch[1] : '',
          canonicalUrl,
          hasCanonical,
          hasOgUrl,
          h1Count: h1Matches.length,
          h1Text: h1Matches[0] ? h1Matches[0].replace(/<[^>]+>/g, '').trim() : '',
          hasFaqSchema,
          hasBreadcrumbSchema,
          hasServiceSchema,
          hasTargetBenchmark,
          hasOfflineStatement,
          hasMultilingualStatement
        });
      });
    }).on('error', (err) => {
      resolve({ slug, status: 'ERROR', error: err.message });
    });
  });
}

(async () => {
  console.log('--- AUDITING LIVE PRODUCTION INDUSTRY PAGES ---');
  for (const slug of slugs) {
    const res = await checkUrl(slug);
    console.log(JSON.stringify(res, null, 2));
  }
})();
