import {z} from "zod";

export const ClassroomSchema = z.object ({
    body: z.object({
    idClassroom: z.string(),         
    idTeacher: z.string(),          
    IdSubject: z.string(),         
    startClass: z.date(), 
    Description: z.string()
    })
})

