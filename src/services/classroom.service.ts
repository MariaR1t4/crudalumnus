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

    public async getClassroomById(IdClassroom: string) : Promise<Classroom | null> {
        return await ClassroomRepositorio.findOneBy({IdClassroom}); 
    }

    public async deleteClassroomByID(IdClassroom: string) : Promise <void>{
        await ClassroomRepositorio.delete({IdClassroom});
    }

    public async uptadeClassroomById(IdClassroom: string,classroom : Classroom) : Promise <void>{
        const ClassroomNow = await ClassroomRepositorio.findOneBy({IdClassroom});
        if(ClassroomNow){
            ClassroomNow.Date = classroom.Date;
            ClassroomNow.Description = classroom.Description;
            ClassroomNow.IdSubject = classroom.IdSubject;
            ClassroomNow.IdClassroom = classroom.IdClassroom;
            ClassroomNow.IdTeacher = classroom.IdTeacher;
        }
    }
}

export default ClassroomService