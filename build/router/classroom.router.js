"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classroomRouter = (0, express_1.Router)();
const classroom_Controllers_1 = __importDefault(require("../controllers/classroom.Controllers"));
//he routes to read
classroomRouter.get('/registro', classroom_Controllers_1.default.getInstance().getClassroom);
classroomRouter.get('/:id', classroom_Controllers_1.default.getInstance().getClassroomById);
