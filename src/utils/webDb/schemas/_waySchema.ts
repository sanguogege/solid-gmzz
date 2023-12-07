const primaryKey = {
	key: "id",
	fields: ["name"],
	separator: "|",
};

const properties = {
	id: {
		type: "string",
		maxLength: 100,
	},
	name: {
		type: "string",
		default: "",
	},
	power: {
		type: "string",
		default: "",
	},
	taluopai: {
		type: "string",
		default: "",
	},
	top: {
		type: "string",
		default: "",
	},
	orderby: {
		type: "number",
		default: 0,
	},
	order: {
		type: "array",
		uniqueItems: true,
		items: {
			type: "object",
			properties: {
				num: {
					type: "number",
				},
				name: {
					type: "string",
				},
				func: {
					type: "string",
				},
				main: {
					type: "string",
				},
				assist: {
					type: "string",
				},
				ceremony: {
					type: "string",
				},
			},
		},
	},
};

export default {
	ways: {
		schema: {
			title: "ways schema",
			description: "describes a way",
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
