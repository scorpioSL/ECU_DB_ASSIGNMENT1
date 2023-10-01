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
exports.Semester = void 0;
var typeorm_1 = require("typeorm");
var year_1 = require("./year");
var Semester = /** @class */ (function () {
    function Semester() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Semester.prototype, "SemesterId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Semester.prototype, "SemesterName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Semester.prototype, "StartDate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Semester.prototype, "EndDate", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return year_1.Year; }),
        (0, typeorm_1.JoinColumn)({ name: 'YearId' }),
        __metadata("design:type", year_1.Year)
    ], Semester.prototype, "Year", void 0);
    Semester = __decorate([
        (0, typeorm_1.Entity)({ name: 'Semester' })
    ], Semester);
    return Semester;
}());
exports.Semester = Semester;
