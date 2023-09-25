import "reflect-metadata";
import { AppDataSource } from "./app-data-source";
import { createDB } from "./create-db";

async function init(): Promise<void> {
    await createDB();
    await AppDataSource.initialize();
}

init();