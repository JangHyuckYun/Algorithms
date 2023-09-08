function solution(wallpaper) {
	// x = 세로
	// y = 가로
    const [lux, luy, rdx, rdy] = wallpaper.reduce((acc, data, idx) => {
		let [lux, luy, rdx, rdy] = acc;
		
	    const paperIdx = data.indexOf("#");
		if (paperIdx === -1) return acc;
	    
	    const paperLastIdx = data.lastIndexOf("#");
		if (lux === -1) {
			lux = idx;
			luy = paperIdx;
		}
		
		luy = luy > paperIdx ? paperIdx : luy;
		rdx = idx;
		rdy = rdy < paperLastIdx ? paperLastIdx : rdy;
		
		return [lux, luy, rdx, rdy];
    }, [-1, -1, -1, -1]);
	return [lux, luy, rdx + 1, rdy + 1];
}