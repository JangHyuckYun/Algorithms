const fs = require('fs');
const UNIT = 10;
let [, ...paperList] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
paperList = paperList.map(paper => (paper.split(' ').map(num => Number(num))));
const secondDArray = Array.from(Array(100).fill(0).map(d => Array(100).fill(0)));

paperList.forEach(([paperLeft, paperTop]) => {
	for (let topIdx = paperTop; topIdx < UNIT + paperTop; topIdx++) {
		for (let leftIdx = paperLeft; leftIdx < UNIT + paperLeft; leftIdx++) {
			secondDArray[topIdx][leftIdx] = secondDArray[topIdx][leftIdx] + 1;
		}
	}
});

const result = secondDArray.reduce((acc, arr) => {
	return acc + arr.filter(num => num > 0).length
}, 0)

console.log(result)
