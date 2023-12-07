/**
 * @param name 组织、家族、特定种族、势力、机构等直接的名称
 * @param top 当前组织现存的高位者，一般是指途径的最高位
 * @param way 组织里的主要构成成员的途径合计 ["xxx","xxx"]
 * @param member 组织里的主要成员的名称
 * @param shiji 主要事迹，分段写  ["xxx","xxx"]
 * @param type 组织是什么性质 官方的还是什么
 * @param nickname 别称
 * @param born 诞生、创建时间
 * @param other 从属源流：黑夜女神教会从属与"黑夜女神"  超凡家族属于xx帝国
 * @param now 组织的现在状态
 * @param childorg 附属组织 黑夜女神教会=》值夜者
 * @param partway 部分掌握的途径 大地母神教会 主(way)母亲、部分月亮
 * @param tip 备注额外的添加、比如小心眼、敌对谁等小细节
 * @param ismian 是否是现在的途径主要组织
 * */
export interface organization {
	name: string;
	top: string;
	way: Array<string>;
	member: Array<string>;
	shiji: Array<string>;
	type: orgType;
	nickname: string;
	born: string;
	other: string;
	now: string;
	childorg: string;
	partway: string;
	tip: string;
	ismian: boolean;
}

/**
 * @param name 组织、家族、特定种族、势力、机构等直接的名称
 * @param top 当前组织现存的高位者，一般是指途径的最高位
 * @param way 组织里的主要构成成员的途径合计 ["xxx","xxx"]
 * @param member 组织里的主要成员的名称
 * @param shiji 主要事迹，分段写  ["xxx","xxx"]
 * @param type 组织是什么性质 官方的还是什么
 * @param nickname 别称
 * @param born 诞生、创建时间
 * @param other 从属源流：黑夜女神教会从属与"黑夜女神"
 * @param now 组织的现在状态
 * @param childorg 附属组织 黑夜女神教会=》值夜者
 * @param partway 部分掌握的途径 大地母神教会 主(way)母亲、部分月亮
 * @param tip 备注额外的添加、比如小心眼、敌对谁等小细节
 * */
export interface organizations extends Array<organization> {}

/**
 * @param name 
 * @param pic 
 * @param ower 

 * */
export interface taluopai {
	name: string;
	pic: string;
	ower: string;
	way: Array[string];
}
