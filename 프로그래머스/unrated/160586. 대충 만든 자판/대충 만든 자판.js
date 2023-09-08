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
	
	return targets.reduce((acc, arr) => {
		const result = [...arr].map(_ => alphaObj[_]).reduce((acc, _) => acc + _, 0);
		return [...acc, isNaN(result) ? -1 : result];
	}, []);
}