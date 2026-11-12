const https = require('https');
const options = {
  hostname: 'www.linkedin.com',
  path: '/company/hs-global-ai/',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
    console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
    const ogTitle = data.match(/property="og:title"\s+content="([^"]+)"/i);
    console.log('og:title:', ogTitle ? ogTitle[1] : 'No og:title');
    const ogDesc = data.match(/property="og:description"\s+content="([^"]+)"/i);
    console.log('og:desc:', ogDesc ? ogDesc[1] : 'No og:desc');
    const metaDesc = data.match(/name="description"\s+content="([^"]+)"/i);
    console.log('meta:desc:', metaDesc ? metaDesc[1] : 'No meta:desc');
    // check if it is auth wall or actual company page
    if (data.includes('authwall') || data.includes('login') || data.includes('Join LinkedIn')) {
      console.log('Contains authwall / login elements');
    }
  });
}).on('error', (e) => console.error(e));

