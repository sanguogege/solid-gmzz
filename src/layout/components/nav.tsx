import { A } from "@solidjs/router";
import { onMount } from "solid-js";

import { animationInLine } from "@/utils/gasp";

function Nav() {
	onMount(() => {
		animationInLine(".head", {
			duration: 5,
			opacity: 0,
			ease: "power2",
			display: "flex",
			x: -600,
		});
	});
	return (
		<>
			<div class="head top">
				<div class="head_logo">
					<img class="img" src="img/logo.png" alt="" />
				</div>
				<div class="head_link">
					<A href="/">首页</A>
					<A href="/taluopai">塔罗牌</A>
					<A href="/orgs">组织大全</A>
					<A href="/roles">角色大全</A>
					<A href="/yuan">九大源质</A>
				</div>
			</div>
		</>
	);
}

export default Nav;
