// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const [, ...nums] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

nums.forEach(numStr => {
	const [num1, num2] = numStr.split(' ');
	console.log(Number(num1) + Number(num2));
})
