import {DataSource} from "typeorm";
import Classroom from "./entities/Classroom";


export const AppDataSource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:38000,
    username: "root",
    database: "alumnus",
    synchronize: true,
    logging:true,
    entities:[Classroom],
    subscribers:[],
    migrations:[]

})