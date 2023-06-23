import  express  from "express";
import 'reflect-metadata'    
import { AppDataSource } from "./models/DataBase";
import morgan from 'morgan';
import cors from 'cors';
import favicon from 'serve-favicon';
import classroomRouter from "./router/classroomRouter";
import path from "path";


const app = express();
const port = 38000

app.get('/test')
app.use(express.json());

app.use(cors());

app.use(express.static('public'));

app.use(morgan('combined'));

app.listen(port,()=>{
    console.log(`Servido iniciado em http:/localhost:${port}`);
    AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
    console.log('Sucesso')
});
app.use('/app', express.static(path.join(__dirname, 'src')))
app.use('/classroom',classroomRouter );

