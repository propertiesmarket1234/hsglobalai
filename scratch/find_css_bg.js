async function main() {
  const css1 = await (await fetch('https://hsglobalai.com/wp-content/uploads/elementor/css/post-2684.css')).text();
  const css2 = await (await fetch('https://hsglobalai.com/wp-content/uploads/elementor/css/post-2664.css')).text();
  
  const allCss = css1 + '\n' + css2;
  const matches = allCss.match(/url\(['"]?([^'"\)]+)['"]?\)/gi);
  console.log('Background images in Elementor CSS:', matches);
}

main();
