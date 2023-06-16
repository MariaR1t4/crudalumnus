import  express  from "express";
import 'reflect-metadata'    

const app = express();
const port = 3000

app.get('/test',)

app.listen(port,()=>{
    console.log(`Servido iniciado em http:/localhost:${port}`)
});
