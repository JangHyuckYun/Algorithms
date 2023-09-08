function dateToNumber(date) {
	return Number(date.replaceAll(/\./g, ""));
}

function addZero(str) {
	return str.length === 1 ? "0"+str : str;
}

function plusStoragePeriod(date, period) {
	date = new Date(date);
	date.setMonth(date.getMonth() + period);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate());
	const type = ".";
	return `${year}${type}${addZero(month)}${type}${addZero(day)}`
}


// (유효기간(달) + 수집기간) - 오늘 날짜의 결과값이 0이거나 0 아래일 경우 만기 되었다고 판단.
function solution(today, terms, privacies) {
	today = dateToNumber(today);
	
	terms = terms.reduce((acc, term) => ({...acc, [term.split(" ")[0]]: Number(term.split(" ")[1]) }), {});
	return privacies.reduce((acc, privacie, index) => {
		let [addedDate, type] = privacie.split(" ");
		const storagePeriod = terms[type];
		
		if ((dateToNumber(plusStoragePeriod(addedDate, storagePeriod)) - today) <= 0) {
			acc.push(index + 1);
		}
		return acc;
	}, []);
}

console.log(solution("2022.05.19",["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))
