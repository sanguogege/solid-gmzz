import { createRxDatabase, addRxPlugin } from "rxdb";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { removeRxDatabase } from "rxdb";

import schemas from "./schemas";
import { all } from "@/assets/data/";
import isNewData from "@/utils/getversion";

addRxPlugin(RxDBMigrationPlugin);

const creatDataBase = async () => {
	if (isNewData.isNewData) {
		await removeRxDatabase("guimizhizhu", getRxStorageDexie());
		localStorage.setItem("version", isNewData.version);
	}

	const myDatabase = await createRxDatabase({
		name: "guimizhizhu",
		storage: getRxStorageDexie(),
	});
	const schemasAdd = schemas.map(async (element: any) => {
		await myDatabase.addCollections(element);
	});

	await Promise.all(schemasAdd);

	Object.values(myDatabase.collections).forEach((c: any) => {
		c.bulkInsert(all[c.name]);
	});

	return myDatabase;
};

export { creatDataBase };
