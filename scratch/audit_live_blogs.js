const https = require('https');

const slugs = [
  'ai-business-automation',
  'edge-ai-vs-cloud-ai',
  'ai-for-business',
  'ai-product-catalogue',
  'multilingual-ai',
  'how-ai-in-retail',
  'why-100-offline-ai',
  'what-is-a-digital-human-avatar',
  'ai-patient-triage-healthcare-guidance',
  'what-is-virtual-try-on-technology',
  'ai-digital-human-fleet-management'
];

async function checkUrl(slug) {
  const url = `https://www.hsglobalai.com/blog/${slug}`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const canonicalUrl = `https://www.hsglobalai.com/blog/${slug}`;
        const hasCanonical = body.includes(`rel="canonical" href="${canonicalUrl}"`) || body.includes(`href="${canonicalUrl}" rel="canonical"`);
        const hasOg = body.includes(`property="og:url" content="${canonicalUrl}"`);
        const hasFaq = body.includes('FAQPage');
        const h1Matches = body.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
        const hasTargetBenchmark = body.includes('Target Benchmark') || body.includes('illustrative');
        const hasOfflineStatement = body.includes('DIHUAVA runs 100% offline on-device by default');

        resolve({
          slug,
          status: res.statusCode,
          canonical: hasCanonical,
          og: hasOg,
          faqSchema: hasFaq,
          h1Count: h1Matches.length,
          h1Text: h1Matches[0] ? h1Matches[0].replace(/<[^>]+>/g, '').trim() : '',
          hasTargetBenchmark,
          hasOfflineStatement
        });
      });
    }).on('error', (err) => {
      resolve({ slug, status: 'ERROR', error: err.message });
    });
  });
}

(async () => {
  console.log('--- AUDITING LIVE PRODUCTION BLOG POSTS ---');
  for (const slug of slugs) {
    const res = await checkUrl(slug);
    console.log(JSON.stringify(res, null, 2));
  }
})();
