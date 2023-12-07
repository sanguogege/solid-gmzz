import { lazy } from "solid-js";

export default [
	{
		path: "/taluopai",
		component: lazy(() => import("@/views/taluopai/index.tsx"!)),
	},
	{
		path: "/taluopai/:id",
		children: [
			{
				path: "/",
				component: lazy(() => import("@/views/taluopai/taluopai.tsx"!)),
			},
		],
	},
];
