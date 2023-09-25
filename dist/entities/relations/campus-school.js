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
exports.CampusSchool = void 0;
var typeorm_1 = require("typeorm");
var school_1 = require("../school");
var campus_1 = require("../campus");
var CampusSchool = /** @class */ (function () {
    function CampusSchool() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], CampusSchool.prototype, "CampusSchoolId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return school_1.School; }),
        (0, typeorm_1.JoinColumn)({ name: 'SchoolId' }),
        __metadata("design:type", school_1.School)
    ], CampusSchool.prototype, "School", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return campus_1.Campus; }),
        (0, typeorm_1.JoinColumn)({ name: 'CampusId' }),
        __metadata("design:type", campus_1.Campus)
    ], CampusSchool.prototype, "Campus", void 0);
    CampusSchool = __decorate([
        (0, typeorm_1.Entity)({ name: 'CampusSchool' })
    ], CampusSchool);
    return CampusSchool;
}());
exports.CampusSchool = CampusSchool;
