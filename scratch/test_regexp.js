const { match } = require('path-to-regexp');

// Test 1: exact with Chinese characters
try {
  const matcher1 = match('/wp-content/uploads/2026/06/AI数字人软件介绍-2026-JUN_billingual.pdf', { decode: decodeURIComponent });
  console.log('Match decoded:', matcher1('/wp-content/uploads/2026/06/AI数字人软件介绍-2026-JUN_billingual.pdf'));
  console.log('Match encoded:', matcher1('/wp-content/uploads/2026/06/AI%E6%95%B0%E5%AD%97%E4%BA%BA%E8%BD%AF%E4%BB%B6%E4%BB%8B%E7%BB%8D-2026-JUN_billingual.pdf'));
} catch (e) {
  console.log('Error 1:', e.message);
}

// Test 2: PDF pattern
try {
  const matcher2 = match('/wp-content/uploads/:path*\\.pdf', { decode: decodeURIComponent });
  console.log('PDF matcher English:', matcher2('/wp-content/uploads/2026/06/Dihuava-Product-Brochure-2026-JUN.pdf'));
  console.log('PDF matcher Chinese:', matcher2('/wp-content/uploads/2026/06/AI%E6%95%B0%E5%AD%97%E4%BA%BA%E8%BD%AF%E4%BB%B6%E4%BB%8B%E7%BB%8D-2026-JUN_billingual.pdf'));
  console.log('PDF matcher image (should be false):', matcher2('/wp-content/uploads/2026/06/image.png'));
} catch (e) {
  console.log('Error 2:', e.message);
}

