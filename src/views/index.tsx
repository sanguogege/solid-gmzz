import Table from "@/components/table.tsx";
import { onMount } from "solid-js";
import { createStartBg } from "@/utils/canvas/stars";
import { store } from "@/store/setbgstore";

import { animationInLine } from "@/utils/gasp";

createStartBg(store.bgState);
export default function () {
	onMount(() => {
		animationInLine(".tablebox ", {
			duration: 3,
			opacity: 0,
			ease: "power2",
			display: "block",
			y: -1700,
		});
	});

	return (
		<div class="tablebox" style="margin-top: 20px;">
			<Table></Table>
		</div>
	);
}
