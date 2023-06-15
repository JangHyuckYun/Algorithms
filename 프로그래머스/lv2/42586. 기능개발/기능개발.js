function solution(progresses, speeds) {
	var answer = [];
	let copyProgresses = progresses.slice();
	let copySpeeds = speeds.slice();
	while(true) {
		if (copyProgresses.length === 0) break;
		if (copyProgresses[0] >= 100) {
			let cnt = 0;
			let idxList = [];
			
			copyProgresses.some((progress, idx) => {
				if (progress >= 100) {
					cnt++;
					idxList.push(idx);
					return false;
				} else {
					return true;
				}
			});
			if (idxList.length > 0) {
				if (idxList.length === 1 && copyProgresses.length === 1) {
					copyProgresses = [];
					copySpeeds = [];
				}
				answer.push(cnt);
				const maxIdx = Math.max(...idxList);
				copyProgresses = copyProgresses.slice(maxIdx + 1)
				copySpeeds = copySpeeds.slice(maxIdx + 1)
			}
			
		}
		
		copyProgresses = copyProgresses.map((progress, idx) => {
			if (progress < 100) {
				progress = progress + copySpeeds[idx]
			}
			return progress
		});
		
		
	}
	
	return answer;
}