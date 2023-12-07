import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "@/assets/css/public.css";
import Layout from "@/layout";

const root = document.getElementById("root");

render(
	() => (
		<Router>
			<Layout />
		</Router>
	),
	root!
);
