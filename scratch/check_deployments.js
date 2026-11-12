const https = require('https');

https.get('https://api.github.com/repos/propertiesmarket1234/hsglobalai/deployments', { headers: { 'User-Agent': 'Node' } }, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log('Total deployments:', json.length);
      json.slice(0, 5).forEach((d, i) => {
        console.log(`[${i+1}] sha=${d.sha.slice(0, 7)} created_at=${d.created_at} env=${d.environment} id=${d.id}`);
      });
      if (json[0]) {
        // Fetch status of newest deployment
        https.get(json[0].statuses_url, { headers: { 'User-Agent': 'Node' } }, sRes => {
          let sData = '';
          sRes.on('data', chunk => sData += chunk);
          sRes.on('end', () => {
            const statuses = JSON.parse(sData);
            console.log('Latest deployment status:', statuses[0]?.state, statuses[0]?.target_url);
          });
        });
      }
    } catch(e) {
      console.log('Error:', e.message, data.slice(0, 200));
    }
  });
});
