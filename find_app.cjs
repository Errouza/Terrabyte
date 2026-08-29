const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

const idx = js.lastIndexOf('getElementById');
console.log('Last getElementById at index:', idx);
if (idx !== -1) {
  console.log(js.slice(idx - 2000, idx + 500));
}