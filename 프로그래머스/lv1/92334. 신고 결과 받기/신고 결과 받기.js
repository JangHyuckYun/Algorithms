function solution(id_list, report, k) {
	id_list = Object.fromEntries(id_list.map(_ => [_, { waring_cnt:0, report: []}]));
	const result = report.reduce((acc, data) => {
		const [reporter, targeter] = data.split(' ');
		if (!acc[reporter].report.includes(targeter)) {
			acc[reporter].report.push(targeter);
			acc[targeter].waring_cnt += 1;
		}
		return acc;
	}, id_list);
	
	return Object.values(result).map(({ report }) => report.filter(id => result[id].waring_cnt >= k).length);
}