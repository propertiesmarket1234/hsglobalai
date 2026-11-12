function renderTest(text) {
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return `<strong>${part.slice(2, -2)}</strong>`;
    }
    if (part.startsWith("[") && part.includes("](") && part.endsWith(")")) {
      const linkText = part.substring(1, part.indexOf("]("));
      const linkHref = part.substring(part.indexOf("](") + 2, part.length - 1);
      return `<a href="${linkHref}">${linkText}</a>`;
    }
    return part;
  }).join('');
}

console.log('Case 1: **[text](/url)**');
console.log(renderTest('Learn more about **[DIHUAVA, our offline AI digital human software platform](/products/ai-digital-human)**.'));

console.log('\nCase 2: [**text**](/url)');
console.log(renderTest('Learn more about [**DIHUAVA, our offline AI digital human software platform**](/products/ai-digital-human).'));

console.log('\nCase 3: [text](/url) (without asterisks, since Link component is already font-semibold)');
console.log(renderTest('Learn more about [DIHUAVA, our offline AI digital human software platform](/products/ai-digital-human).'));

