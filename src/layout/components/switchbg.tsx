import { store, toggleBg } from "@/store/setbgstore";
import { createStartBg } from "@/utils/canvas/stars";

function switchPage(type: string) {
	const now = store.bgState;
	if (now !== type) {
		toggleBg(type);
		createStartBg(type);
	}
}

function Switchbg() {
	return (
		<>
			<div class="box switchbg">
				<span class="boxtitle">切换背景</span>
				<div class="boxcnt">
					<span onClick={[switchPage, "best"]}>性能模式</span>
					<span onClick={[switchPage, "normal"]}>普通模式</span>
					<span onClick={[switchPage, "canvas"]}>观赏模式</span>
				</div>
			</div>
		</>
	);
}

export default Switchbg;
