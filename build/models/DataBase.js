"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Classroom_1 = __importDefault(require("./entities/Classroom"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "alumnus",
    synchronize: true,
    logging: true,
    entities: [Classroom_1.default],
    subscribers: [],
    migrations: []
});
