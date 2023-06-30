const fs = require('fs');
const [[basketCnt], ...putArrayList] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(str => str.split(' ').map(d => Number(d)));
let resultArray = Array(basketCnt).fill(0);

for (const putArray of putArrayList) {
	for (let i = putArray[0] - 1; i <= putArray[1] - 1; i++) {
		resultArray[i] = putArray[2];
	}
}

console.log(...resultArray)