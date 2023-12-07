import gsap from "gsap";
import { store } from "@/store/setbgstore";

interface AnimationOption {
	duration?: number;
	ease?: string;
	display?: string;
	x?: number;
	y?: number;
	opacity?: number;
}

const animationInLine = (target: string, Option: AnimationOption) => {
	if (store.bgState === "best") {
		return;
	}
	const line = gsap.timeline();
	line.from(target, Option);
};

export { animationInLine };
