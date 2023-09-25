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
exports.UnitUnitCoordinator = void 0;
var typeorm_1 = require("typeorm");
var unit_1 = require("../unit");
var unit_coordinator_1 = require("../unit-coordinator");
var UnitUnitCoordinator = /** @class */ (function () {
    function UnitUnitCoordinator() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], UnitUnitCoordinator.prototype, "UnitUnitCoordinatorId", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return unit_1.Unit; }),
        (0, typeorm_1.JoinColumn)({ name: 'UnitId' }),
        __metadata("design:type", unit_1.Unit)
    ], UnitUnitCoordinator.prototype, "Unit", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return unit_coordinator_1.UnitCoordinator; }),
        (0, typeorm_1.JoinColumn)({ name: 'UnitCoordinatorId' }),
        __metadata("design:type", unit_coordinator_1.UnitCoordinator)
    ], UnitUnitCoordinator.prototype, "UnitCoordinator", void 0);
    UnitUnitCoordinator = __decorate([
        (0, typeorm_1.Entity)({ name: 'UnitUnitCoordinator' })
    ], UnitUnitCoordinator);
    return UnitUnitCoordinator;
}());
exports.UnitUnitCoordinator = UnitUnitCoordinator;
