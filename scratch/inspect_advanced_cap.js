const fs = require('fs');
const path = require('path');

const blogHtmlPath = path.join(__dirname, '..', '.next', 'server', 'app', 'blog', 'what-is-a-digital-human-avatar.html');
const content = fs.readFileSync(blogHtmlPath, 'utf8');

const idx = content.indexOf('Advanced Capability');
console.log('=== COMPILED HTML AROUND ADVANCED CAPABILITY ===');
console.log(content.substring(idx, idx + 800));

