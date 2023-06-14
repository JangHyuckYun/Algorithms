const fs = require('fs');
let [A, B, V] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(num => Number(num));

console.log(Math.ceil((V - B) / (A - B)))
