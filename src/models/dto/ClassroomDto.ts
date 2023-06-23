import {z} from "zod";

export const ClassroomSchema = z.object ({
    body: z.object({
    IdClassroom: z.string(),         
    IdTeacher: z.string(),          
    IdSubject: z.string(),         
    Date: z.date(), 
    Description: z.string()
    })
})

