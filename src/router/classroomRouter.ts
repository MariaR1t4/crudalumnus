import {Router} from "express"
import ClassroomController from "../controllers/classroom.Controllers";
import { ClassroomSchema } from "../models/dto/ClassroomDto";

const classroomRouter= Router();

classroomRouter.get('/registro',ClassroomController.getInstance().getClassroom)
classroomRouter.get('/:id',ClassroomController.getInstance().getClassroomById)
classroomRouter.delete('/:id', ClassroomController.getInstance().deleteClassroomById)
classroomRouter.put('/:id',ClassroomController.getInstance().updateClassroomById)

export default classroomRouter