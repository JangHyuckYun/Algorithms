let globalWall;
function getStartIdx(m) {
	let resultIdx = globalWall.findIndex(item => !item);
	
	while(resultIdx + m - 1 > globalWall.length - 1) {
		resultIdx -= 1;
	}
	
	return resultIdx;
}

function fill(startIdx, m) {
	for (let i = startIdx; i < startIdx + m; i++) {
		if (!globalWall[i]) {
			globalWall[i] = 1;
		}
	}
}

function solution(n, m, section) {
	let cnt = 0;
	globalWall = Array(n).fill(0).map((_, idx) => section.includes(idx + 1) ? 0 : 1);

	while(true) {
		let startIdx = getStartIdx(m);
		if (startIdx === -1) break;
		fill(startIdx, m);
		cnt++;
	}
	return cnt;
}