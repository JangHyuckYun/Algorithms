const fs = require('fs');
const numberList = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(d => Number(d));
let idx = 0;
let maxNumber = 0;
for (let i = 0; i < numberList.length; i++) {
	if (maxNumber < numberList[i]) {
		maxNumber = numberList[i];
		idx = i;
	}
}
console.log(maxNumber + '\n' + (idx+1))
