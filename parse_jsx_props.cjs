const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

// Search for jsx calls with text or children
const regex = /(?:children|title|desc|label|text)\s*:\s*\"([^\"\\]{4,200})\"/g;
let m;
const list = new Set();
while ((m = regex.exec(js)) !== null) {
  list.add(m[1]);
}

console.log('Found ' + list.size + ' JSX children/prop texts:');
Array.from(list).forEach((str, i) => console.log((i+1) + '. ' + str));