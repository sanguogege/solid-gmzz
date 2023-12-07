const primaryKey = {
	key: "id",
	fields: ["name", "title", "way", "des"],
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
	title: {
		type: "string",
		default: "",
	},
	way: {
		type: "array",
		items: {
			type: "string",
		},
	},
	des: {
		type: "array",
		items: {
			type: "string",
		},
	},
};

export default {
	yuans: {
		schema: {
			title: "源质 schema",
			description: "describes a 源质",
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
