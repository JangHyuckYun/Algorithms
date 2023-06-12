// 1. 입력값이 한 개일 때(한 줄)
const fs = require('fs');
const [total,,...priceAndCntList] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const result = priceAndCntList.reduce((acc, priceAndCnt) => {
	const [price, cnt] = priceAndCnt.split(' ');
	acc += (price * cnt);
	
	return acc;
}, 0);

console.log(Number(total) === result ? 'Yes' : 'No');
