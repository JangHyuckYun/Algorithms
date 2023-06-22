const fs = require('fs');
const [, numberList] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(str => [...str.split(" ").map(d => Number(d))]);
console.log(Math.min(...numberList), Math.max(...numberList));
