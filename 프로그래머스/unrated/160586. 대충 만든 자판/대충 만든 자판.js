function solution(keymap, targets) {
	// ["ABC", "BBC"] 의 형태를 { A:1, B:1, C:3 } 의 형태로 변환.
	const alphaObj = keymap.reduce((acc, arr) => {
		[...arr].forEach((char, idx) => {
			idx = idx + 1;
			if (!acc[char]) acc[char] = idx;
			else if (acc[char] > idx) acc[char] = idx;
			
			return acc;
		});
		return acc;
	}, {});
	
	// map을 통해 [["ABC"], ["ABC"]] 등의 형태를 [[1,1,5], [1,1,5]] 등의 형태로 변환
	// -> reduce를 통해 [[1,1,5], [1,1,5]] 형태를 [9,9] 형태로 변환
	return targets
	.map(str => [...str].map(str => alphaObj[str]).reduce((acc, n) => acc + n, 0))
	.reduce((acc, n) => [...acc, isNaN(n) ? -1 : n], []);
}

solution(["ABACD", "BCEFD"], ["ABCD","AABB"])
