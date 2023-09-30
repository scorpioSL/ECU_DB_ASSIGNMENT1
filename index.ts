import "reflect-metadata";
import { AppDataSource } from "./app-data-source";
import { createDB } from "./create-db";
import { SelectQueries } from "./queries/select-query";

async function init(): Promise<void> {
    await createDB();
    await AppDataSource.initialize();

    await SelectQueries.MostPopularUnitsInAParticularYear();
    await SelectQueries.LeastPopularUnitsInAParticularYear();
    await SelectQueries.MostPopularStaffMember();
    await SelectQueries.LeastPopularStaffMember();
    await SelectQueries.StudentsWhoNeverEnrolled();
    await SelectQueries.OlderstFemaleAndYoungestMaleStudents();
}

init();