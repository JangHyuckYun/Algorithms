let globalPark;
function findStartPosition() {
	let result = [0,0];
	globalPark.some((arr, arrIdx) => {
		const idx = arr.indexOf("S");
		if (idx !== -1) {
			result = [arrIdx, idx];
			return true;
		}
		return false;
	})
	return result;
}

function checkOutSide([y, x]) {
	if (globalPark.length - 1 < y || y < 0) {
		return false;
	}
	
	if (globalPark[y].length - 1 < x || x < 0) {
		return false;
	}
	
	return true;
}

function checkIsWall(position, [beforeY, beforeX], [afterY, afterX]) {
	let isWall = false;
	switch (position) {
		case "E": // 동
			for (let i = beforeX; i <= afterX; i++) {
				if (globalPark[afterY][i] === "X") {
					isWall = true;
					break;
				}
			}
			break;
		case "W": // 서
			for (let i = beforeX; i >= afterX; i--) {
				if (globalPark[afterY][i] === "X") {
					isWall = true;
					break;
				}
			}
			break;
		case "S": // 남
			for (let i = beforeY; i <= afterY; i++) {
				if (globalPark[i][afterX] === "X") {
					isWall = true;
					break;
				}
			}
			break;
		case "N": // 북
			for (let i = beforeY; i >= afterY; i--) {
				// console.log('N', globalPark[i][afterX])
				if (globalPark[i][afterX] === "X") {
					isWall = true;
					break;
				}
			}
			break;
	}
	
	return isWall;
}
function solution(park, routes) {
	globalPark = park;
	let [y, x] = findStartPosition();
	
	// console.log('start point..', y, x)
	for (const str of routes) {
		let [position, moveCount] = str.split(" ");
		moveCount = Number(moveCount);
		
		let checkY = y, checkX = x;
		switch (position) {
			case "E": // 동
				checkX = x + moveCount;
				break;
			case "W": // 서
				checkX = x - moveCount;
				break;
			case "S": // 남
				checkY = y + moveCount;
				break;
			case "N": // 북
				checkY = y - moveCount;
				break;
		}
		
		if (!checkOutSide([checkY, checkX])) continue;
		if (checkIsWall(position,[y, x], [checkY, checkX])) continue;
		
		console.log('will change', `${position} / ${moveCount} => ${y},${x} => ${checkY}, ${checkX}`)
		y = checkY;
		x = checkX;
	}
	console.log(y,x)
	return [y, x];
}