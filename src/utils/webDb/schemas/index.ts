const modules: Record<string, any> = import.meta.glob(
	["./*Schema.ts", "!./*.d.ts"],
	{
		eager: true,
	}
);

const Schemas: any = [];

Object.keys(modules).forEach((key) => {
	Schemas.push(modules[key].default);
});

export default Schemas;
