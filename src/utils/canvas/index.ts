import { Application } from "pixi.js";
export function createCanvas(type = "canvas") {
	if (type == "canvas") {
		const app: any = new Application({
			resizeTo: window,
			antialias: true,
			resolution: 1,
		});
		document.body.appendChild(app.view);
		document.getElementsByTagName("html")[0].className = "canvas";
		return app;
	} else {
		const app: any = document.querySelector("canvas");
		if (app) {
			app.remove();
		}
		document.getElementsByTagName("html")[0].className = "";
		return;
	}
}
