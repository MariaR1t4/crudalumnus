"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const ClassroomRepositorie_1 = __importDefault(require("../models/repositories/ClassroomRepositorie"));
class ClassroomService {
    constructor() {
    }
    static getInstance() {
        if (!ClassroomService.instance) {
            ClassroomService.instance = new ClassroomService();
        }
        ;
        return ClassroomService.instance;
    }
    saveClassroom(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            obj.id = (0, uuid_1.v4)();
            return yield ClassroomRepositorie_1.default.save(obj);
        });
    }
    getClassroom() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ClassroomRepositorie_1.default.find();
        });
    }
    getClassroomById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ClassroomRepositorie_1.default.findOneBy({ id });
        });
    }
    deleteClassroomByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ClassroomRepositorie_1.default.delete({ id });
        });
    }
    uptadeClassroomById(id, classroom) {
        return __awaiter(this, void 0, void 0, function* () {
            const ClassroomNow = yield ClassroomRepositorie_1.default.findOneBy({ id });
            if (ClassroomNow) {
                ClassroomNow.data = classroom.data;
                ClassroomNow.descricao = classroom.descricao;
                ClassroomNow.nome = classroom.nome;
                ClassroomNow.materia = classroom.materia;
            }
        });
    }
}
exports.default = ClassroomService;
