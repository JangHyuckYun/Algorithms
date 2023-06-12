// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const len = Number(input);

const result = Array(len).fill(1).reduce((acc, num, idx) => acc + (idx + 1), 0);

console.log(result)
