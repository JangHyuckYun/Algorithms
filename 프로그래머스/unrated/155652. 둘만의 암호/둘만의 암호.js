function solution(s, skip, index) {
	const ascii_A = 97; // a를 아스키코드로 변환 시 97이 나옴
	const ascii_Z = 122;// z를 아스키코드로 변환 시 122이 나옴
	return [...s].reduce((acc, char) => {
		let cnt = 0;
		let changedChar = char;
		while(cnt < index) {
			let ascii_target = changedChar.charCodeAt(0) + 1;
			changedChar = String.fromCharCode(ascii_target > ascii_Z ? ascii_A : ascii_target);
			if (skip.includes(changedChar)) continue;
			cnt++;
		}
		return acc + changedChar;
	}, "");
}