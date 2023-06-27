import {Router} from "express"
import ClassroomController from "../controllers/classroom.Controllers";

const classroomRouter= Router();

classroomRouter.post('/chamada',ClassroomController.getInstance().saveClassroom);
classroomRouter.get('/',ClassroomController.getInstance().getClassroom);
classroomRouter.get('/:id',ClassroomController.getInstance().getClassroomById);
classroomRouter.delete('/:id', ClassroomController.getInstance().deleteClassroomById);
classroomRouter.put('/:id',ClassroomController.getInstance().updateClassroomById);

export default classroomRouter 
