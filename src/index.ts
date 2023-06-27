import "reflect-metadata";
import  express  from "express";
import { AppDataSource } from "./models/DataBase";
import morgan from 'morgan';
import cors from 'cors';
import classroomRouter from "./router/classroomRouter";
import path from "path";


const app = express();
const port = 3030

app.use(express.json());

app.use(cors());

app.use(express.static('front'));

app.use(morgan('combined'));

//app.use('/app', express.static(path.join(__dirname, 'src')))
app.use('/app/classroom', classroomRouter);

app.listen(port,()=>{
    console.log(`Servido iniciado em http:/localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
    console.log('Sucesso')
});