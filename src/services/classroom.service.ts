import { v4 } from "uuid";
import Classroom from "../models/entities/Classroom";
import ClassroomRepositorio from "../models/repositories/ClassroomRepositorie";

class ClassroomService {
    private static instance: ClassroomService;

    private constructor(){

    }

    public static getInstance(){
        if(!ClassroomService.instance){
            ClassroomService.instance = new ClassroomService();
        };
        return ClassroomService.instance;
    }

    public async saveClassroom(obj: Classroom): Promise<Classroom>{
        obj.id = v4();
        return await ClassroomRepositorio.save(obj);
    }

    public async getClassroom() : Promise<Classroom[]> {
        return await ClassroomRepositorio.find();
    }

    public async getClassroomById(id: string) : Promise<Classroom | null> {
        return await ClassroomRepositorio.findOneBy({id}); 
    }

    public async deleteClassroomByID(id: string) : Promise <void>{
        await ClassroomRepositorio.delete({id});
    }

    public async uptadeClassroomById(id: string,classroom : Classroom) : Promise <void>{
        const ClassroomNow = await ClassroomRepositorio.findOneBy({id});
        if(ClassroomNow){
            ClassroomNow.data = classroom.data;
            ClassroomNow.descricao = classroom.descricao;
            ClassroomNow.nome = classroom.nome;
            ClassroomNow.materia = classroom.materia;
            await ClassroomRepositorio.save(ClassroomNow)
        }
        
        Promise.resolve();
    }
}

export default ClassroomService