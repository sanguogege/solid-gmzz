import { lazy } from "solid-js";

export default [
	{
		path: "/roles",
		component: lazy(() => import("@/views/roles/index.tsx"!)),
	},
	{
		path: "/roles/:id",
		children: [
			{
				path: "/",
				component: lazy(() => import("@/views/roles/role.tsx"!)),
			},
		],
	},
];
