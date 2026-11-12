const p2r = require('D:/WebProjects/hsglobalai/node_modules/next/dist/compiled/path-to-regexp');

// Test 1: exact with Chinese
const matcher1 = p2r.match('/wp-content/uploads/2026/06/AI数字人软件介绍-2026-JUN_billingual.pdf', { decode: decodeURIComponent });
console.log('Match Chinese literal decoded:', matcher1('/wp-content/uploads/2026/06/AI数字人软件介绍-2026-JUN_billingual.pdf'));
console.log('Match Chinese literal encoded:', matcher1('/wp-content/uploads/2026/06/AI%E6%95%B0%E5%AD%97%E4%BA%BA%E8%BD%AF%E4%BB%B6%E4%BB%8B%E7%BB%8D-2026-JUN_billingual.pdf'));

// Test 2: PDF pattern
const matcher2 = p2r.match('/wp-content/uploads/:path*\\.pdf', { decode: decodeURIComponent });
console.log('\nPDF Pattern matches:');
console.log('English PDF:', matcher2('/wp-content/uploads/2026/06/Dihuava-Product-Brochure-2026-JUN.pdf'));
console.log('Chinese PDF:', matcher2('/wp-content/uploads/2026/06/AI%E6%95%B0%E5%AD%97%E4%BA%BA%E8%BD%AF%E4%BB%B6%E4%BB%8B%E7%BB%8D-2026-JUN_billingual.pdf'));
console.log('PNG Image (should be false):', matcher2('/wp-content/uploads/2026/06/logo.png'));
console.log('JPG Image (should be false):', matcher2('/wp-content/uploads/2026/06/banner.jpg'));

