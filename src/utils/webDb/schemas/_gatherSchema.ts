const primaryKey = "name";

const properties = {
	properties: {
		id: {
			type: "string",
			maxLength: 100,
		},
		name: {
			type: "string",
			default: "",
		},
	},
};

export default {
	gather: {
		schema: {
			title: "gather schema",
			description: "汇总页面的数据集合",
			version: 1,
			primaryKey: primaryKey,
			type: "object",
			properties: properties,
		},
		migrationStrategies: {
			0: function () {
				return null;
			},
		},
	},
};
