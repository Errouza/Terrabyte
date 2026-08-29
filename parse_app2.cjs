const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

// Look for JSX text or strings with letters and spaces
const backticks = js.match(/([^]{20,300})/g) || [];
console.log('Backtick strings found:', backticks.length);
backticks.slice(0, 20).forEach(b => console.log('---', b));

// Look for JSON or objects with labels/titles
const objs = js.match(/\{[^{}]*?(?:title|name|label|desc|text)[^{}]*?\}/g) || [];
console.log('Objects found:', objs.length);
objs.slice(0, 30).forEach(o => console.log('===', o));