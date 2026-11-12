const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/industriesData.ts', 'utf8');
const industries = ['banking', 'retail', 'healthcare', 'corporate', 'tourism', 'museums', 'education'];
industries.forEach(ind => {
  const re = new RegExp(ind + ':[\\s\\S]*?heroOverview:\\s*"([\\s\\S]*?)",');
  const m = content.match(re);
  if (m) {
    console.log(`\n=== ${ind.toUpperCase()} heroOverview ===\n`, m[1]);
  }
});

