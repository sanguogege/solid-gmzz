import { createStore } from "solid-js/store";

const [store, setStore] = createStore({
	bgState: localStorage.getItem("bgState") || "",
});

const toggleBg = (state: string) => {
	localStorage.setItem("bgState", state);
	setStore({ bgState: state });
};

export { store, toggleBg };
