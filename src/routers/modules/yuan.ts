import { lazy } from "solid-js";

export default [
	{
		path: "/yuan",
		component: lazy(() => import("@/views/yuan/index.tsx"!)),
	},
	{
		path: "/yuan/:id",
		children: [
			{
				path: "/",
				component: lazy(() => import("@/views/yuan/yuan.tsx"!)),
			},
		],
	},
];
