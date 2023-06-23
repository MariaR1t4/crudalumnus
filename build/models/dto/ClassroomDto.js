"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomSchema = void 0;
const zod_1 = require("zod");
exports.ClassroomSchema = zod_1.z.object({
    body: zod_1.z.object({
        IdClassroom: zod_1.z.string(),
        IdTeacher: zod_1.z.string(),
        IdSubject: zod_1.z.string(),
        Date: zod_1.z.date(),
        Description: zod_1.z.string()
    })
});
