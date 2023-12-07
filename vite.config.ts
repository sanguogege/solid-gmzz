import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
	plugins: [solid()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	publicDir: resolve(__dirname, "public/"),
});
