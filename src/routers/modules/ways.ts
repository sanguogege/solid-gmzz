import { lazy } from "solid-js";

export default [
	{
		path: "/ways/:type",
		component: lazy(() => import("@/views/ways/index.tsx"!)),
	},
	{
		path: "/ways/:type/:name",
		children: [
			{
				path: "/",
				component: lazy(() => import("@/views/ways/way.tsx"!)),
			},
		],
	},
];
