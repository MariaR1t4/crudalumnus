"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomSchema = void 0;
const zod_1 = require("zod");
exports.ClassroomSchema = zod_1.z.object({
    body: zod_1.z.object({
        idClassroom: zod_1.z.string(),
        idTeacher: zod_1.z.string(),
        IdSubject: zod_1.z.string(),
        startClass: zod_1.z.date(),
        Description: zod_1.z.string()
    })
});
