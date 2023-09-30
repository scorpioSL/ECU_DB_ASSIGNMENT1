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
exports.Unit = void 0;
var typeorm_1 = require("typeorm");
var enrollment_1 = require("./enrollment");
var Unit = /** @class */ (function () {
    function Unit() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Unit.prototype, "UnitId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Unit.prototype, "UnitCode", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Unit.prototype, "Name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Unit.prototype, "Description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Unit.prototype, "Duration", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Unit.prototype, "Credits", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return enrollment_1.Enrollment; }, function (enrollment) { return enrollment.Unit; }),
        __metadata("design:type", Array)
    ], Unit.prototype, "Enrollments", void 0);
    Unit = __decorate([
        (0, typeorm_1.Entity)({ name: 'Unit' })
    ], Unit);
    return Unit;
}());
exports.Unit = Unit;
