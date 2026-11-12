const https = require('https');

function fetchWithUA(ua) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'www.hsglobalai.com',
      path: '/products/ai-digital-human',
      headers: {
        'User-Agent': ua
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve({ ua, status: res.statusCode, length: data.length }));
    }).on('error', (e) => resolve({ ua, error: e.message }));
  });
}

async function run() {
  const bots = [
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/130.0.6723.116 Safari/537.36',
    'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    'OAI-SearchBot/1.0; (+https://openai.com/bot)',
    'ChatGPT-User/1.0; (+https://openai.com/bot)',
    'PerplexityBot/1.0 (+https://perplexity.ai/perplexitybot)'
  ];

  for (const bot of bots) {
    const res = await fetchWithUA(bot);
    console.log(`UA: ${bot.split(' ')[0]} -> Status: ${res.status}, Length: ${res.length}`);
  }
}

run();

