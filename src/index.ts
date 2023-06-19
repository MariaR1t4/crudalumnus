import  express  from "express";
import 'reflect-metadata';
import path from "path";    
import classroomRouter from "./router/classroomRouter";

const app = express();
const port = 3000

app.get('/test',)

app.listen(port,()=>{
    console.log(`Servido iniciado em http:/localhost:${port}`)
});
app.use('/', express.static(path.join(__dirname, 'src')))
app.use('/classroom', classroomRouter);

