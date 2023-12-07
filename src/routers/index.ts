const modules: any = import.meta.glob(["./modules/**/*.ts"], {
	eager: true,
});

let routes: any[] = [];

Object.keys(modules).forEach((key) => {
	routes = routes.concat(modules[key].default);
});

export default routes;
