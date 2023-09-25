"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
var typeorm_1 = require("typeorm");
var student_1 = require("./student");
var campus_school_1 = require("./relations/campus-school");
var unit_1 = require("./unit");
var mode_1 = require("./mode");
var Enrollment = /** @class */ (function () {
    function Enrollment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Enrollment.prototype, "EnrollmentId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Enrollment.prototype, "EnrollmentDateTime", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return student_1.Student; }),
        (0, typeorm_1.JoinColumn)({ name: 'StudentId' }),
        __metadata("design:type", student_1.Student)
    ], Enrollment.prototype, "Student", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return campus_school_1.CampusSchool; }),
        (0, typeorm_1.JoinColumn)({ name: 'CampusSchoolId' }),
        __metadata("design:type", campus_school_1.CampusSchool)
    ], Enrollment.prototype, "CampusSchool", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return unit_1.Unit; }),
        (0, typeorm_1.JoinColumn)({ name: 'UnitId' }),
        __metadata("design:type", unit_1.Unit)
    ], Enrollment.prototype, "Unit", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return mode_1.Mode; }),
        (0, typeorm_1.JoinColumn)({ name: 'ModeId' }),
        __metadata("design:type", mode_1.Mode)
    ], Enrollment.prototype, "Mode", void 0);
    Enrollment = __decorate([
        (0, typeorm_1.Entity)({ name: 'Enrollment' })
    ], Enrollment);
    return Enrollment;
}());
exports.Enrollment = Enrollment;
