"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = require("../DataBase");
const Classroom_1 = __importDefault(require("../entities/Classroom"));
const ClassroomRepositorio = DataBase_1.AppDataSource.getRepository(Classroom_1.default);
exports.default = ClassroomRepositorio;
