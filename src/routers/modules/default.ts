import { lazy } from "solid-js";

export default [
	{
		path: "/",
		component: lazy(() => import("@/views/index.tsx"!)),
	},
];
