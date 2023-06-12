// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const [total, nums, findNum] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const array = nums.split(' ');

let result = 0;
for (let i = 0; i < total; i++) {
	if (findNum === array[i]) {
		result++;
	}
}

console.log(result)
