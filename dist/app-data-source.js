"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var activity_1 = require("./entities/activity");
var campus_1 = require("./entities/campus");
var enrollment_1 = require("./entities/enrollment");
var mode_1 = require("./entities/mode");
var room_1 = require("./entities/room");
var school_1 = require("./entities/school");
var semester_1 = require("./entities/semester");
var student_1 = require("./entities/student");
var unit_coordinator_1 = require("./entities/unit-coordinator");
var unit_1 = require("./entities/unit");
var year_1 = require("./entities/year");
var campus_school_1 = require("./entities/relations/campus-school");
var unit_activity_1 = require("./entities/relations/unit-activity");
var environment_1 = require("./environment");
var unit_room_1 = require("./entities/relations/unit-room");
var enrollment_activity_1 = require("./entities/relations/enrollment-activity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: environment_1.Environment.DB_TYPE,
    host: environment_1.Environment.DB_HOST,
    port: environment_1.Environment.DB_PORT,
    username: environment_1.Environment.DB_USERNAME,
    password: environment_1.Environment.DB_PASSWORD,
    database: environment_1.Environment.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
        activity_1.Activity,
        campus_1.Campus,
        enrollment_1.Enrollment,
        mode_1.Mode,
        room_1.Room,
        school_1.School,
        semester_1.Semester,
        student_1.Student,
        unit_coordinator_1.UnitCoordinator,
        unit_1.Unit,
        year_1.Year,
        // Relations
        campus_school_1.CampusSchool,
        unit_activity_1.UnitActivity,
        unit_room_1.UnitRoom,
        enrollment_activity_1.EnrollmentActivity,
    ],
    subscribers: [],
    migrations: [],
});
