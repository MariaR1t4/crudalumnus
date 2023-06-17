import { Request, Response } from "express";
import ClassroomService from "../services/classroom.service";

class ClassroomController {
    private static instance: ClassroomController;

    private constructor(){

    }

    public static getInstance(){
        if(!ClassroomController.instance){
            ClassroomController.instance = new ClassroomController();
        }
        return ClassroomController.instance;
    }

    public async getClassroom(req: Request,res: Response){
        const classroomService = ClassroomService.getInstance();
        res.json(await classroomService.getClassroom());
    }
}

export default ClassroomController