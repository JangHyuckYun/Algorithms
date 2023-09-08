function solution(keymap, targets) {
	const alphaObj = keymap.reduce((acc, arr) => {
		[...arr].forEach((char, idx) => {
			idx = idx + 1;
			if (!acc[char]) acc[char] = idx;
			else if (acc[char] > idx) acc[char] = idx;
			
			return acc;
		});
		return acc;
	}, {});
	
	return targets
	.map(str => [...str].map(str => alphaObj[str]).reduce((acc, _) => acc + _, 0))
	.reduce((acc, n) => [...acc, isNaN(n) ? -1 : n], []);
}
