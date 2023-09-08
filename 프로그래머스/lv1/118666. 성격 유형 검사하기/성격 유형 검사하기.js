function solution(survey, choices) {
	let table = {
		R: {
			order: 0,
			total: 0,
		},
		T: {
			order: 0,
			total: 0,
		},
		C: {
			order: 1,
			total: 0,
		},
		F: {
			order: 1,
			total: 0,
		},
		J: {
			order: 2,
			total: 0,
		},
		M: {
			order: 2,
			total: 0,
		},
		A: {
			order: 3,
			total: 0,
		},
		N: {
			order: 3,
			total: 0,
		},
	};
	
	let scoreTable = {
		1: -3,	//매우 비동의
		2: -2,	//비동의
		3: -1,	//약간 비동의
		4: 0,	//모르겠음
		5: 1,	//약간 동의
		6: 2,	//동의
		7: 3,	//매우 동의
	}
	
	survey.forEach((item, item_index) => {
		let [char_1, char_2] = [...item];
		
		const score = scoreTable[choices[item_index]];
		if (score === 0) return;
		
		table[score < 0 ? char_1 : char_2].total += Math.abs(score);
	});
	
	const refineTable = Object.keys(table).reduce((acc, key) => {
		if (!acc[table[key].order]) {
			acc[table[key].order] = [];
		}
		acc[table[key].order].push({ key, total: table[key].total });
		return acc;
	}, {});
	
	return Object.values(refineTable).reduce((acc, [data_1, data_2]) => {
		if (data_1.total === data_2.total) {
			return acc + (data_1.key.charCodeAt(0) > data_2.key.charCodeAt(0) ? data_2.key : data_1.key);
		}
		
		return acc + (data_1.total > data_2.total ? data_1.key : data_2.key);
	}, "");
}