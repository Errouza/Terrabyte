const fs = require('fs');
const js = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_js.txt', 'utf8');

const appCode = js.slice(360000);
fs.writeFileSync('C:/Users/dhia/CODING/Terrabyte/figma_app_source.txt', appCode);
console.log('Saved figma app source code (length ' + appCode.length + ')');