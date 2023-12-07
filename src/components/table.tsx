import { For, createEffect, createSignal } from "solid-js";

import "@/assets/css/table.css";
import { A } from "@solidjs/router";

import { indexDb, loaclToIndexDb } from "@/store/setIndexDb";
import { switchArray } from "@/utils/checkdata";
import { creatDataBase } from "@/utils/webDb";

function getRowspan(el: any, rowspan: any) {
	if (rowspan.name == el.yuan.name) {
		rowspan.isName = false;
		rowspan.isTitle = false;
	} else {
		rowspan.name = el.yuan.name;
		rowspan.isName = true;
		rowspan.isTitle = true;
	}
	return rowspan;
}
const bgSet: any = {
	源堡: { name: "yuanbao" },
	永暗之河: { name: "yonganzhihe" },
	混沌海: { name: "hundunhai" },
	知识荒野: { name: "zhishihuangye" },
	失序之国: { name: "shixuzhiguo" },
	灾祸之城: { name: "zaihuozhicheng" },
	母巢: { name: "muchao" },
	暗影世界: { name: "anyingshijie" },
	光之钥: { name: "guangzhishi" },
};
function SetBgClass(yuan: string, name: string = "") {
	let className: string = "";
	if (name != "源堡") {
		className = bgSet[yuan].name;
	}
	return className;
}

function SetFontClass(name: string, num: number) {
	if (name == "lieren" && num <= 4) {
		return "male";
	} else if (name == "cike" && num <= 7) {
		return "female";
	} else if (name == "gengzhongzhe" && num <= 2) {
		return "female";
	} else if (name == "yaoshi" && num <= 1) {
		return "female";
	}
}

function DoubleCheck(name: string) {
	if (!name) {
		return {
			router: "",
			isSingle: true,
			name: "",
		};
	}
	if (name.indexOf("/") != -1) {
		if (name.indexOf("皇室") != -1) {
			const first = name.split("/");
			const last = first.map((e: any) => {
				if (e.indexOf("皇室") == -1) {
					return (e = e + "皇室");
				}
				return e;
			});
			return {
				router: last,
				name: first,
				isSingle: false,
			};
		} else if (name.indexOf("家族") != -1) {
			const first = name.split("/");
			const last = first.map((e: any) => {
				if (e.indexOf("家族") == -1) {
					return (e = e + "家族");
				}
				return e;
			});

			return {
				router: last,
				name: first,
				isSingle: false,
			};
		} else {
			return {
				router: name.split("/"),
				isSingle: false,
				name: name.split("/"),
			};
		}
	} else {
		return {
			router: name,
			isSingle: true,
			name: "",
		};
	}
}

let rowcon: any = {
	name: "",
	isName: true,
	isTitle: true,
};

function TableTr(props: any) {
	const el = props.item;
	const isDoubleOrg = DoubleCheck(el.org);
	const isDoubleTop = DoubleCheck(el.top);
	const rowspan = getRowspan(el, rowcon);
	return (
		<tr>
			<td>
				<A href={"/ways/" + el.name}>{el.power}</A>
			</td>
			<td>
				<A href={"/ways/" + el.name + "/" + el[9].name}>{el[9].name}</A>
			</td>
			<td>
				<A href={"/ways/" + el.name + "/" + el[8].name}>{el[8].name}</A>
			</td>
			<td>
				<A
					class={SetFontClass(el.name, el[7].num)}
					href={"/ways/" + el.name + "/" + el[7].name}
				>
					{el[7].name}
				</A>
			</td>
			<td>
				<A
					class={SetFontClass(el.name, el[6].num)}
					href={"/ways/" + el.name + "/" + el[6].name}
				>
					{el[6].name}
				</A>
			</td>
			<td>
				<A
					class={SetFontClass(el.name, el[5].num)}
					href={"/ways/" + el.name + "/" + el[5].name}
				>
					{el[5].name}
				</A>
			</td>
			<td class={SetBgClass(el.yuan.name, el.yuan.name)}>
				<A
					class={SetFontClass(el.name, el[4].num)}
					href={"/ways/" + el.name + "/" + el[4].name}
				>
					{el[4].name}
				</A>
			</td>
			<td class={SetBgClass(el.yuan.name)}>
				<A
					class={SetFontClass(el.name, el[3].num)}
					href={"/ways/" + el.name + "/" + el[3].name}
				>
					{el[3].name}
				</A>
			</td>
			<td class={SetBgClass(el.yuan.name)}>
				<A
					class={SetFontClass(el.name, el[2].num)}
					href={"/ways/" + el.name + "/" + el[2].name}
				>
					{el[2].name}
				</A>
			</td>
			<td class={SetBgClass(el.yuan.name)}>
				<A
					class={SetFontClass(el.name, el[1].num)}
					href={"/ways/" + el.name + "/" + el[1].name}
				>
					{el[1].name}
				</A>
			</td>
			<td class={SetBgClass(el.yuan.name)}>
				<A
					class={SetFontClass(el.name, el[0].num)}
					href={"/ways/" + el.name + "/" + el[0].name}
				>
					{el[0].name}
				</A>
			</td>
			{isDoubleOrg.isSingle ? (
				<td style="width:160px">
					<A
						href={
							(isDoubleOrg.router as string) == ""
								? "/orgs"
								: "/orgs/" + isDoubleOrg.router
						}
					>
						{isDoubleOrg.router == "" ? "——" : isDoubleOrg.router}
					</A>
				</td>
			) : (
				<td style="width:160px">
					<A href={"/orgs/" + isDoubleOrg.router[0]}>
						{isDoubleOrg.name[0]}
					</A>
					/
					<A href={"/orgs/" + isDoubleOrg.router[1]}>
						{isDoubleOrg.name[1]}
					</A>
				</td>
			)}
			<td style="width:120px">
				<A href={"/taluopai/" + el.taluopai}>{el.taluopai}</A>
			</td>
			{isDoubleTop.isSingle ? (
				<td style="width:160px">
					<A href={("/roles/" + isDoubleTop.router) as string}>
						{el.top}
					</A>
				</td>
			) : (
				<td style="width:160px">
					<A href={"/roles/" + isDoubleTop.router[0]}>
						{isDoubleTop.router[0]}
					</A>
					/
					<A href={"/roles/" + isDoubleTop.router[1]}>
						{isDoubleTop.router[1]}
					</A>
				</td>
			)}
			{rowspan.isName ? (
				<td
					class={SetBgClass(el.yuan.name)}
					rowspan={rowspan.isName ? el.rowspan : 0}
				>
					<A href={"/yuan/" + el.yuan.name}>{el.yuan.name}</A>
				</td>
			) : (
				""
			)}
			{rowspan.isTitle ? (
				<td
					style="width:250px"
					class={SetBgClass(el.yuan.name)}
					rowspan={rowspan.isTitle ? el.rowspan : 0}
				>
					<A href={"/yuan/" + el.yuan.name}>{el.yuan.title}</A>
				</td>
			) : (
				""
			)}
		</tr>
	);
}

function Table() {
	const [items, setitems]: any = createSignal(indexDb.indexDb);
	createEffect(async () => {
		try {
			if (indexDb.indexDb) {
				setitems(indexDb.indexDb);
			} else {
				const database: any = await creatDataBase();
				const gatherDocument = await database.gather.find().exec();
				const finalData = switchArray(gatherDocument, true);
				setitems(finalData);
				loaclToIndexDb(finalData);
			}
		} catch (error) {
			console.error(error);
		} finally {
		}
	});
	return (
		<table class="sequencetable">
			<thead>
				<tr class="tabletop">
					<td colspan="16">诡秘之主途径大全</td>
				</tr>
				<tr>
					<td>序列权柄</td>
					<td>序列九</td>
					<td>序列八</td>
					<td>序列七</td>
					<td>序列六</td>
					<td>序列五</td>
					<td>序列四</td>
					<td>序列三</td>
					<td>序列二</td>
					<td>序列一</td>
					<td>序列零</td>
					<td>主要途径组织</td>
					<td>塔罗牌</td>
					<td>现存高位者</td>
					<td>源质</td>
					<td>旧日称号</td>
				</tr>
			</thead>
			<tbody>
				<For each={items()}>
					{(item) => <TableTr item={item}></TableTr>}
				</For>
			</tbody>
			<tfoot>
				<tr>
					<td>序列强度</td>
					<td class="lowpower" colspan="2">
						低序列
					</td>
					<td class="centerpower" colspan="3">
						中序列
					</td>
					<td class="heightpower" colspan="2">
						圣者
					</td>
					<td class="anglepower" colspan="2">
						天使
					</td>
					<td class="zeropower">神灵</td>
				</tr>
				<tr>
					<td colspan="16">
						其他:三支柱为“上帝、全知全能者”、“诡秘之主、时空之王”、“堕落母神、邪恶之始”。若“永恒之暗、万物奇点”容纳了“灾祸之城、根源之祸”则会成为第四个支柱，但那会导致宇宙不可逆转的走向衰亡。黑夜途径的半神可以转换到魔女途径。
					</td>
				</tr>
				<tr>
					<td colspan="16">
						表注:可互换途径同属一个源质。可互换序列由同色背景色标出。神灵/天使之王栏中。蓝色为唯一性、白色为真神、浅黄为天使之王、绿色为权柄获取。粉色为阴性生物。红色为阳性生物。
					</td>
				</tr>
			</tfoot>
		</table>
	);
}

export default Table;
