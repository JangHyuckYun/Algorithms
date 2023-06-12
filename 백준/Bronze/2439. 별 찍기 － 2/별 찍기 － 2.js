// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

for (let i = 1; i <= num; i++) {
	const spaceStr = Array(num - i).fill(' ').join('');
	const starStr = Array(i).fill('*').join('');
	console.log(spaceStr + starStr);
}
