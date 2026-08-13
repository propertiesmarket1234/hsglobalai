const fs = require('fs');

async function main() {
  const res = await fetch('https://hsglobalai.com/events/');
  const html = await res.text();

  // Find LED China section image
  const ledIndex = html.indexOf('LED China 2026');
  const isleIndex = html.indexOf('ISLE China 2026');

  console.log('--- HTML snippet around LED China ---');
  console.log(html.slice(Math.max(0, ledIndex - 1000), ledIndex + 1500));

  console.log('--- HTML snippet around ISLE China ---');
  console.log(html.slice(Math.max(0, isleIndex - 1000), isleIndex + 1500));
}

main();
