import {Router} from "express"

const classroomRouter= Router();
import ClassroomController from "../controllers/classroom.Controllers";
import { ClassroomSchema } from "../models/dto/ClassroomDto";

//he routes to read
classroomRouter.get('/registro',ClassroomController.getInstance().getClassroom)
classroomRouter.get('/:id',ClassroomController.getInstance().getClassroomById)