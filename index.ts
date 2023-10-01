import "reflect-metadata";
import { AppDataSource } from "./app-data-source";
import { createDB } from "./create-db";
import { SelectQueries } from "./queries/select-query";
import { Seed } from "./inserts/seed";

async function init(): Promise<void> {
    await createDB();
    await AppDataSource.initialize();

    // seed data
    await Seed.AddStudents();

    // select queries
    await SelectQueries.MostPopularUnitsInAParticularYear();
    await SelectQueries.LeastPopularUnitsInAParticularYear();
    await SelectQueries.MostPopularStaffMember();
    await SelectQueries.LeastPopularStaffMember();
    await SelectQueries.StudentsWhoNeverEnrolled();
    await SelectQueries.OlderstFemaleAndYoungestMaleStudents();
    await SelectQueries.SelectAllStudents();
}

init();