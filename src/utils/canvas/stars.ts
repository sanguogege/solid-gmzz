import { createCanvas } from "@/utils/canvas";
import { Texture, Sprite } from "pixi.js";
export function createStartBg(type?: string) {
	const starbox = createCanvas(type);
	if (!starbox) {
		return;
	}
	let cameraZ = 1,
		baseSpeed = 0.06,
		stars: any = [],
		fov = 10,
		starBaseSize = 0.1;
	const starAmount = 300;
	//创建纹理
	const starTexture = Texture.from("img/star.png");
	for (let i = 0; i < starAmount; i++) {
		const star = {
			sprite: new Sprite(starTexture),
			z: 0,
			x: 0,
			y: 0,
		};

		star.sprite.anchor.set(0.5);
		const newstar = randomizeStar(star, true);
		starbox.stage.addChild(newstar.sprite);
		stars.push(star);
	}

	starbox.ticker.add((delta: any) => {
		cameraZ += delta * 10 * baseSpeed;
		for (let i = 0; i < starAmount; i++) {
			let star = stars[i];
			// 若z轴坐标小于相机，说明已出镜，重新计算位置
			if (star.z < cameraZ) {
				star = randomizeStar(star);
			}

			// 三维坐标投影至二维
			const z = star.z - cameraZ;
			star.sprite.x =
				star.x * (fov / z) * starbox.renderer.screen.width +
				starbox.renderer.screen.width / 2;
			star.sprite.y =
				star.y * (fov / z) * starbox.renderer.screen.width +
				starbox.renderer.screen.height / 2;

			// 计算缩放
			const distanceScale = Math.max(0, (2000 - z) / 2000) * starBaseSize;
			star.sprite.scale.x = distanceScale;
			star.sprite.scale.y = distanceScale;
		}
	});

	function randomizeStar(star: any, initial = false) {
		star.z = initial
			? Math.random() * 2000
			: cameraZ + Math.random() * 1000 + 2000;
		const deg = Math.random() * Math.PI * 2;
		const distance = Math.random() * 60 + 1;
		star.x = Math.cos(deg) * distance;
		star.y = Math.sin(deg) * distance;
		return star;
	}
}
