"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const DataBase_1 = require("./models/DataBase");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 38000;
app.get('/test');
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use((0, morgan_1.default)('combined'));
app.listen(port, () => {
    console.log(`Servido iniciado em http:/localhost:${port}`);
    DataBase_1.AppDataSource.initialize().then(r => console.log('Banco de Dados iniciado'));
    console.log('Sucesso');
});
