// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i = 0; i < inputs.length; i++) {
	const [num1, num2] = inputs[i].split(' ');
	console.log(Number(num1) + Number(num2))
}
