import {z} from "zod";

export const ClassroomSchema = z.object ({
    body: z.object({
    idClassroom: z.coerce.number(),         
    idTeacher: z.coerce.number(),          
    IdClass: z.coerce.number(),         
    startClass: z.date(), 
    finishClass: z.date()
    })
})