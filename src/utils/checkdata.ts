const checkString = (name: string) => {
	const nameArray: Array<string> = ["皇室", "家族"];
	for (let key = 0; key < nameArray.length; key++) {
		if (name.indexOf(nameArray[key]) != -1) {
			return name.replace(nameArray[key], "");
		} else if (key == nameArray.length - 1) {
			return name;
		}
	}
};

const switchArray = (items: Array<any>, isSort: boolean = false) => {
	const newArray: Array<any> = items.map((item: any) => {
		return item.toMutableJSON();
	});
	if (isSort) {
		return newArray.sort(orderBy);
	}
	return newArray;
};

function orderBy(a: any, b: any) {
	return a.orderby - b.orderby;
}

const checkMain = (ways: any, orgs?: any, yuans?: any) => {
	const newArray = JSON.parse(JSON.stringify(ways));
	newArray.forEach((way: any) => {
		orgs.forEach((org: any) => {
			if (org.way.includes(way.name) && org.ismian) {
				if (!way.org) {
					way.org = org.name;
				} else {
					way.org = checkString(org.name + "/" + way.org);
				}
			}
		});
		yuans.forEach((yz: any) => {
			if (yz.way.includes(way.name)) {
				way.yuan = {
					name: yz.name,
					title: yz.title,
				};
				way.rowspan = yz.way.length;
			}
		});
		way.taluopai = way.taluopai;

		way.order.forEach((cur: any) => {
			way[cur.num] = {
				name: cur.name,
				num: cur.num,
			};
		});

		delete way.order;
		return way;
	});

	return newArray;
};

export { checkMain, switchArray };
