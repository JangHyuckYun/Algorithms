const fs = require('fs');
const [[length, x], numberList] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(str => [...str.split(" ").map(d => Number(d))]);

let result = "";

for (let i = 0; i < length; i++) {
	if (x > numberList[i]) {
		result += numberList[i] + " ";
	}
}

console.log(result);
