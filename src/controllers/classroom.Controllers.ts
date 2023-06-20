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

    public async saveClassroom(req: Request, res: Response) {
        const classroomService = ClassroomService.getInstance();
        const classroom = req.body;
        const classroomcreated = await classroomService.saveClassroom(classroom);
        console.log(classroomcreated)
        res.json(classroomcreated)
    }

    public async getClassroom(req: Request,res: Response){
        const classroomService = ClassroomService.getInstance();
        res.json(await classroomService.getClassroom());
    }

    public async getClassroomById(req: Request,res:Response){
        const classroomService = ClassroomService.getInstance();
        const id = req.params.id;
        res.json(await classroomService.getClassroomById(id));
    }

    public async deleteClassroomById(req: Request,res:Response){
        const classroomService = ClassroomService.getInstance();
        const id = req.params.id;
        const classroom = req.body;
        await classroomService.deleteClassroomByID(id, classroom);
        res.json('ok');
    }
}

export default ClassroomController