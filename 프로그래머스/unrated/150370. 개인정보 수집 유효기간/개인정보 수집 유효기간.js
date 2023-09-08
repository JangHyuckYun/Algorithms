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