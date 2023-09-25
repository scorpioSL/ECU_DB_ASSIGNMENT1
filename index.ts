import "reflect-metadata";
import { AppDataSource } from "./app-data-source";

async function init(): Promise<void> {
    await AppDataSource.initialize();
}

init();