"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classroom_Controllers_1 = __importDefault(require("../controllers/classroom.Controllers"));
const classroomRouter = (0, express_1.Router)();
classroomRouter.post('/', classroom_Controllers_1.default.getInstance().saveClassroom);
classroomRouter.get('/', classroom_Controllers_1.default.getInstance().getClassroom);
classroomRouter.get('/:id', classroom_Controllers_1.default.getInstance().getClassroomById);
classroomRouter.delete('/:id', classroom_Controllers_1.default.getInstance().deleteClassroomById);
classroomRouter.put('/:id', classroom_Controllers_1.default.getInstance().updateClassroomById);
exports.default = classroomRouter;
