import { AppDataSource } from "../app-data-source";

export class SelectQueries {

    public static async MostPopularUnitsInAParticularYear(year: number = 2023): Promise<void> {
        const query = await AppDataSource.query(`
        Select Unit.UnitId, Unit.Name, COUNT(*) AS EnrollmentCount
        From Unit 
        Join Enrollment On Unit.UnitId = Enrollment.UnitId
        Join Semester On Enrollment.SemesterId = Semester.SemesterId
        Join Year On Semester.YearId = Year.YearId
        Where Year.YearName = '2023Sem1'
        Group by Unit.UnitId, Unit.Name
        Order by EnrollmentCount DESC;
        `);

        console.log(query);
    }

    public static async LeastPopularUnitsInAParticularYear(year: number = 2023): Promise<void> {
        const query = await AppDataSource.query(`
        Select Unit.UnitId, Unit.Name, COUNT(*) AS EnrollmentCount
        From Unit 
        Join Enrollment On Unit.UnitId = Enrollment.UnitId
        Join Semester On Enrollment.SemesterId = Semester.SemesterId
        Join Year On Semester.YearId = Year.YearId
        Where Year.YearName = '2023Sem1'
        Group by Unit.UnitId, Unit.Name
        Order by EnrollmentCount ASC;
        `);

        console.log(query);
    }

    public static async MostPopularStaffMember(): Promise<void> {
        const query = await AppDataSource.query(`
            Select UnitCoordinator.UnitCoordinatorId, UnitCoordinator.FirstName, UnitCoordinator.SurName, COUNT(UnitCoordinator.UnitCoordinatorId) as UnitCount
            From UnitCoordinator 
            Join Enrollment on Enrollment.UnitCoordinatorId = UnitCoordinator.UnitCoordinatorId
            Join Unit On Unit.UnitId = Enrollment.UnitId
            Join Semester On Enrollment.SemesterId = Semester.SemesterId
            Join Year On Semester.YearId = Year.YearId
            Where Semester.SemesterName = ' Semester1'
            and Year.YearName = '2023Sem1'
            Group by UnitCoordinator.UnitCoordinatorId, UnitCoordinator.FirstName, UnitCoordinator.SurName
            Order by UnitCount DESC;
        `);

        console.log(query);
    }

    public static async LeastPopularStaffMember(): Promise<void> {
        const query = await AppDataSource.query(`
            Select UnitCoordinator.UnitCoordinatorId, UnitCoordinator.FirstName, UnitCoordinator.SurName, COUNT(UnitCoordinator.UnitCoordinatorId) as UnitCount
            From UnitCoordinator 
            Join Enrollment on Enrollment.UnitCoordinatorId = UnitCoordinator.UnitCoordinatorId
            Join Unit On Unit.UnitId = Enrollment.UnitId
            Join Semester On Enrollment.SemesterId = Semester.SemesterId
            Join Year On Semester.YearId = Year.YearId
            Where Semester.SemesterName = ' Semester1'
            and Year.YearName = '2023Sem1'
            Group by UnitCoordinator.UnitCoordinatorId, UnitCoordinator.FirstName, UnitCoordinator.SurName
            Order by UnitCount ASC;
        `);

        console.log(query);
    }

    public static async StudentsWhoNeverEnrolled(): Promise<void> {
        const query = await AppDataSource.query(`
            Select *
            From Student
            Where StudentId Not In (Select  Distinct  StudentId From Enrollment);
        `);

        console.log(query);
    }

    public static async OlderstFemaleAndYoungestMaleStudents(): Promise<void> {
        const query = await AppDataSource.query(`
        SELECT * FROM Student WHERE (Gender = 'F' AND DOB = (SELECT MIN(DOB) FROM Student WHERE Gender = 'F')) 
        OR (Gender = 'M' AND DOB = (SELECT MAX(DOB) FROM Student WHERE Gender = 'M'));
        `);

        console.log(query);
    }

    public static async SelectAllStudents(): Promise<void> {
        const query = await AppDataSource.query(`
            SELECT * FROM Student;
        `);

        console.table(query);
    }
}
