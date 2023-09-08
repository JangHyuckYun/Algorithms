function solution(cards1, cards2, goal) {
	return !goal.some(goalWord => {
		if (cards1[0] === goalWord) {
			cards1.shift();
			return false;
		}
		if (cards2[0] === goalWord) {
			cards2.shift();
			return false;
		}
		return true;
	}) ? "Yes" : "No";
}