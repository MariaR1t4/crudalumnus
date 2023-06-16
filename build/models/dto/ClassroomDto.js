"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomSchema = void 0;
const zod_1 = require("zod");
exports.ClassroomSchema = zod_1.z.object({
    body: zod_1.z.object({
        idClassroom: zod_1.z.coerce.number(),
        idTeacher: zod_1.z.coerce.number(),
        IdClass: zod_1.z.coerce.number(),
        startClass: zod_1.z.date(),
        finishClass: zod_1.z.date()
    })
});
