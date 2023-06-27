"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const DataBase_1 = require("./models/DataBase");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const classroomRouter_1 = __importDefault(require("./router/classroomRouter"));
const app = (0, express_1.default)();
const port = 3030;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('front'));
app.use((0, morgan_1.default)('combined'));
//app.use('/app', express.static(path.join(__dirname, 'src')))
app.use('/app/classroom', classroomRouter_1.default);
app.listen(port, () => {
    console.log(`Servido iniciado em http:/localhost:${port}`);
    DataBase_1.AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
    console.log('Sucesso');
});
