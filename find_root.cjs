const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

const idx = js.indexOf('createRoot');
console.log('createRoot at index:', idx);
if (idx !== -1) {
  console.log(js.slice(idx - 500, idx + 1500));
}