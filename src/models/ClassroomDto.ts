import {z} from "zod";

export interface ClasssroomDto {
    id: string;
    curso: string;
    nome: string;
    data: Date;
    descriao: string;
    materia: string
}

export const ClassroomSchema = z.object({
    id: z.string(),
    curso: z.string(),
    nome: z.string(),
    data: z.date(),
    descriao: z.string(),
    materia: z.string()
})