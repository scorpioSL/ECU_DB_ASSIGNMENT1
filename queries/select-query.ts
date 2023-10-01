import { AppDataSource } from "../app-data-source";

export class SelectQueries {

    public static async MostPopularUnitsInAParticularYear(year: number = 2023): Promise<void> {
        const query = await AppDataSource.query(`
            SELECT UnitId,COUNT(UnitId) AS TOTALCOUNT FROM Enrollment WHERE YEAR(EnrollmentDateTime)=${year} GROUP BY UnitId ORDER BY TOTALCOUNT DESC;
        `);

        console.log(query);
    }

    public static async LeastPopularUnitsInAParticularYear(year: number = 2023): Promise<void> {
        const query = await AppDataSource.query(`
            SELECT UnitId,COUNT(UnitId) AS TOTALCOUNT FROM Enrollment WHERE YEAR(EnrollmentDateTime)=${year} GROUP BY UnitId ORDER BY TOTALCOUNT ASC;
        `);

        console.log(query);
    }

    public static async MostPopularStaffMember(): Promise<void> {
        const query = await AppDataSource.query(`
            SELECT UUC.UnitId,COUNT(UUC.UnitId) AS TOTALCOUNT FROM UnitUnitCoordinator UUC 
            INNER JOIN UnitCoordinator UC ON UC.UnitCoordinatorId=UUC.UnitCoordinatorId
            INNER JOIN Unit UN ON UN.UnitId=UUC.UnitId
            INNER JOIN Enrollment ENR ON ENR.UnitId=UN.UnitId
            INNER JOIN Semester SM ON SM.SemesterId=ENR.SemesterId 
            WHERE SM.SemesterName='2023SEM1' GROUP BY UUC.UnitId ORDER BY TOTALCOUNT DESC;
        `);

        console.log(query);
    }

    public static async LeastPopularStaffMember(): Promise<void> {
        const query = await AppDataSource.query(`
        SELECT UUC.UnitId,COUNT(UUC.UnitId) AS TOTALCOUNT FROM UnitUnitCoordinator UUC 
        INNER JOIN UnitCoordinator UC ON UC.UnitCoordinatorId=UUC.UnitCoordinatorId
        INNER JOIN Unit UN ON UN.UnitId=UUC.UnitId
        INNER JOIN Enrollment ENR ON ENR.UnitId=UN.UnitId
        INNER JOIN Semester SM ON SM.SemesterId=ENR.SemesterId 
        WHERE SM.SemesterName='2023SEM1' GROUP BY UUC.UnitId ORDER BY TOTALCOUNT ASC;
        `);

        console.log(query);
    }

    public static async StudentsWhoNeverEnrolled(): Promise<void> {
        const query = await AppDataSource.query(`
            SELECT StudentId FROM Enrollment WHERE EnrollmentId not in (SELECT EnrollmentId FROM Enrollment);
        `);

        console.log(query);
    }

    public static async OlderstFemaleAndYoungestMaleStudents(): Promise<void> {
        const query = await AppDataSource.query(`
            SELECT * FROM Student WHERE (Gender = 'Female' AND DOB = (SELECT MIN(DOB) FROM Student WHERE Gender = 'Female')) 
            OR (Gender = 'Male' AND DOB = (SELECT MAX(DOB) FROM Student WHERE Gender = 'Male'));
        `);

        console.log(query);
    }
}
