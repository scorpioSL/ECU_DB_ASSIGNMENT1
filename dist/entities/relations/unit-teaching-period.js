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
exports.UnitTeachingPeriod = void 0;
var typeorm_1 = require("typeorm");
var unit_1 = require("../unit");
var teaching_period_1 = require("../teaching-period");
var UnitTeachingPeriod = /** @class */ (function () {
    function UnitTeachingPeriod() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UnitTeachingPeriod.prototype, "UnitTeachingPeriodId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return unit_1.Unit; }),
        (0, typeorm_1.JoinColumn)({ name: 'UnitId' }),
        __metadata("design:type", unit_1.Unit)
    ], UnitTeachingPeriod.prototype, "Unit", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return teaching_period_1.TeachingPeriod; }),
        (0, typeorm_1.JoinColumn)({ name: 'TeachingPeriodId' }),
        __metadata("design:type", teaching_period_1.TeachingPeriod)
    ], UnitTeachingPeriod.prototype, "TeachingPeriod", void 0);
    UnitTeachingPeriod = __decorate([
        (0, typeorm_1.Entity)({ name: 'UnitTeachingPeriod' })
    ], UnitTeachingPeriod);
    return UnitTeachingPeriod;
}());
exports.UnitTeachingPeriod = UnitTeachingPeriod;
