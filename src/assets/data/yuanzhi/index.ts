const modules: Record<string, any> = import.meta.glob(["./yz/*.json"], {
	eager: true,
});

const yuans: any[] = [];

Object.keys(modules).forEach((key) => {
	yuans.push(modules[key].default);
});

export default { yuans };
