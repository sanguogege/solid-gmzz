const modules: Record<string, any> = import.meta.glob(["./ways/*.json"], {
	eager: true,
});

const ways: any[] = [];

Object.keys(modules).forEach((key) => {
	ways.push(modules[key].default);
});

export default { ways };
