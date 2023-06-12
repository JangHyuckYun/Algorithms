// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const [total, nums] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const array = nums.split(' ').map(num => Number(num));
const maxNum = Math.max(...array);

let result = 0;
for (let i = 0; i < total; i++) {
	result += array[i] / maxNum * 100;
}
result = String(result / total)

console.log(result.includes('.') ? result : result + '.0');
