const primaryKey = {
	key: "id",
	fields: [
		"name",
		"top",
		"way",
		"member",
		"shiji",
		"type",
		"nickname",
		"born",
		"other",
		"now",
		"childorg",
		"partway",
		"tip",
		"ismian",
	],
	separator: "|",
};

const properties = {
	properties: {
		id: {
			type: "string",
			maxLength: 100,
		},
		name: {
			type: "string",
			maxLength: 30,
		},
		top: {
			type: "string",
			default: "",
		},
		way: {
			type: "array",
			items: {
				type: "string",
			},
		},
		member: {
			type: "array",
			items: {
				type: "string",
			},
		},
		shiji: {
			type: "array",
			items: {
				type: "string",
			},
		},
		type: {
			type: "string",
			default: "",
		},
		nickname: {
			type: "string",
			default: "",
		},
		born: {
			type: "string",
			default: "",
		},
		other: {
			type: "string",
			default: "",
		},
		now: {
			type: "string",
			default: "",
		},
		childorg: {
			type: "string",
			default: "",
		},
		partway: {
			type: "string",
			default: "",
		},
		tip: {
			type: "string",
			default: "",
		},
		ismain: {
			type: "boolean",
			default: false,
		},
	},
};

export default {
	orgs: {
		schema: {
			title: "org schema",
			description: "describes a org",
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
