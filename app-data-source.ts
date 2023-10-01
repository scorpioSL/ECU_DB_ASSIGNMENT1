import { DataSource } from 'typeorm';
import { Activity } from './entities/activity';
import { Campus } from './entities/campus';
import { Enrollment } from './entities/enrollment';
import { Mode } from './entities/mode';
import { Room } from './entities/room';
import { School } from './entities/school';
import { Semester } from './entities/semester';
import { Student } from './entities/student';
import { UnitCoordinator } from './entities/unit-coordinator';
import { Unit } from './entities/unit';
import { Year } from './entities/year';
import { CampusSchool } from './entities/relations/campus-school';
import { UnitActivity } from './entities/relations/unit-activity';
import { UnitUnitCoordinator } from './entities/relations/unit-unit-coordinator';
import { Environment } from './environment';
import { UnitRoom } from './entities/relations/unit-room';

export const AppDataSource: DataSource = new DataSource({
    type: Environment.DB_TYPE,
    host: Environment.DB_HOST,
    port: Environment.DB_PORT,
    username: Environment.DB_USERNAME,
    password: Environment.DB_PASSWORD,
    database: Environment.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        Activity,
        Campus,
        Enrollment,
        Mode,
        Room,
        School,
        Semester,
        Student,
        UnitCoordinator,
        Unit,
        Year,
        // Relations
        CampusSchool,
        UnitActivity,
        UnitUnitCoordinator,
        UnitRoom,
    ],
    subscribers: [],
    migrations: [],
})