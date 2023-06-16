import { AppDataSource } from "../DataBase";
import Classroom from "../entities/Classroom";

const ClassroomRepositorio = AppDataSource.getRepository(Classroom)

export default ClassroomRepositorio