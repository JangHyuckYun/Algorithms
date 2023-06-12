// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const MAX_CNT = 9;

const input = fs.readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

for (let idx = 1; idx <= MAX_CNT; idx++) {
	console.log(`${num} * ${idx} = ${num * idx}`);
}
