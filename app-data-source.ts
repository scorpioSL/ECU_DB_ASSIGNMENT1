import { DataSource } from 'typeorm';
import { Activity } from './entities/activity';
import { Campus } from './entities/campus';
import { Enrollment } from './entities/enrollment';
import { Mode } from './entities/mode';
import { Room } from './entities/room';
import { School } from './entities/school';
import { Semerster } from './entities/semester';
import { Student } from './entities/student';
import { TeachingPeriod } from './entities/teaching-period';
import { UnitCoordinator } from './entities/unit-coordinator';
import { Unit } from './entities/unit';
import { Year } from './entities/year';
import { CampusSchool } from './entities/relations/campus-school';
import { TeachingRoom } from './entities/relations/teaching-room';
import { UnitActivity } from './entities/relations/unit-activity';
import { UnitTeachingPeriod } from './entities/relations/unit-teaching-period';
import { UnitUnitCoordinator } from './entities/relations/unit-unit-coordinator';
import * as fs from 'fs';

export const AppDataSource: DataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "db_assignment",
    synchronize: true,
    logging: true,
    entities: [
        Activity,
        Campus,
        Enrollment,
        Mode,
        Room,
        School,
        Semerster,
        Student,
        TeachingPeriod,
        UnitCoordinator,
        Unit,
        Year,
        // Relations
        CampusSchool,
        TeachingRoom,
        UnitActivity,
        UnitTeachingPeriod,
        UnitUnitCoordinator,
    ],
    subscribers: [],
    migrations: [],
})