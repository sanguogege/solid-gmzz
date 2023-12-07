import { lazy } from "solid-js";

export default [
	{
		path: "/orgs",
		component: lazy(() => import("@/views/orgs/index.tsx"!)),
	},
	{
		path: "/orgs/:name",
		children: [
			{
				path: "/",
				component: lazy(() => import("@/views/orgs/org.tsx"!)),
			},
		],
	},
];
