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
        return await ClassroomRepositorio.save(obj);
    }

    public async getClassroom() : Promise<Classroom[]> {
        return await ClassroomRepositorio.find();
    }

    public async getClassroomById(idClassroom: string) : Promise<Classroom | null> {
        return await ClassroomRepositorio.findOneBy({idClassroom}); 
    }

    public async deleteClassroomByID(idClassroom: string) : Promise <void>{
        await ClassroomRepositorio.delete({idClassroom});
    }

    // public async uptadeClassroomById(idClassroom: string) : Promise <void>{
        
    }


export default ClassroomService