"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomSchema = void 0;
const zod_1 = require("zod");
exports.ClassroomSchema = zod_1.z.object({
    id: zod_1.z.string(),
    curso: zod_1.z.string(),
    nome: zod_1.z.string(),
    data: zod_1.z.date(),
    descriao: zod_1.z.string(),
    materia: zod_1.z.string()
});
