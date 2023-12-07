import { createStore } from "solid-js/store";

const localDb = localStorage.getItem("webdb");

const [indexDb, setindexDb] = createStore({
	indexDb: JSON.parse(localDb as string),
});

const loaclToIndexDb = (data: any) => {
	localStorage.setItem("webdb", JSON.stringify(data));
	setindexDb(data);
};

console.log(indexDb.indexDb);

export { indexDb, loaclToIndexDb };
