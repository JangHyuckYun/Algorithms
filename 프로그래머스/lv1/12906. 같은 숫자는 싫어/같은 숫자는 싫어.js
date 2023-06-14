function solution(arr)
{
	let idx = 0;
	return arr.reduce((acc, num) => {
		if (idx === 0 || idx !== 0 && acc[idx - 1] !== num) {
			acc.push(num);
			idx++;
		}
		return acc;
	}, [])
}