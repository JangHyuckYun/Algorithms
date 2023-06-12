// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i = 0; i < inputs.length; i++) {
	const [num1, num2] = inputs[i].split(' ');
	const [refineNumber1, refineNumber2] = [Number(num1), Number(num2)];
	if (refineNumber1 === 0 && refineNumber2 === 0) break;
	console.log(refineNumber1 + refineNumber2);
}
