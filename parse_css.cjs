const fs = require('fs');
const css = fs.readFileSync('C:/Users/dhia/CODING/Terrabyte/figma_css.txt', 'utf8');

console.log('CSS length:', css.length);
// Extract color variables, gradients, or key class names
const colors = css.match(/#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\)/g) || [];
const uniqueColors = [...new Set(colors)];
console.log('Colors in CSS:', uniqueColors.slice(0, 30));

const classes = css.match(/\.[a-zA-Z0-9_-]+/g) || [];
const uniqueClasses = [...new Set(classes)].filter(c => !c.startsWith('.-') && c.length > 3);
console.log('Sample classes:', uniqueClasses.slice(0, 40));