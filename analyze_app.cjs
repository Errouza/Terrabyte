const fs = require('fs');
const src = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_app_source.txt', 'utf8');

// Find function declarations and components
const funcs = src.match(/function\s+([a-zA-Z0-9_]+)\s*\([^\)]*\)\s*\{/g) || [];
console.log('Functions found in app source:', funcs);

// Find all text literals inside JSX
const texts = src.match(/children:\s*`([^`\\]{2,200})`/g) || [];
console.log('Sample children texts (' + texts.length + '):');
texts.slice(0, 30).forEach(t => console.log('  ', t));