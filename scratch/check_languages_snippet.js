const fs = require('fs');
const https = require('https');

https.get('https://www.hsglobalai.com/products/ai-digital-human', (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    const langMatches = [...body.matchAll(/(.{0,50}29.{0,50})/gi)].map(m => m[1]);
    console.log('29 matches count:', langMatches.length);
    langMatches.slice(0, 10).forEach(m => console.log(' ->', m.trim()));

    const indianMatches = [...body.matchAll(/(.{0,50}Indian.{0,50})/gi)].map(m => m[1]);
    console.log('\nIndian matches count:', indianMatches.length);
    indianMatches.slice(0, 10).forEach(m => console.log(' ->', m.trim()));
  });
});

