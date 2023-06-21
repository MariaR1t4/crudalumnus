"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Classroom = class Classroom {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
], Classroom.prototype, "idClassroom", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Classroom.prototype, "idTeacher", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Classroom.prototype, "IdSubject", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Classroom.prototype, "Date", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Classroom.prototype, "Description", void 0);
Classroom = __decorate([
    (0, typeorm_1.Entity)()
], Classroom);
exports.default = Classroom;