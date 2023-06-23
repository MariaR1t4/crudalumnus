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
            return yield ClassroomRepositorie_1.default.save(obj);
        });
    }
    getClassroom() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ClassroomRepositorie_1.default.find();
        });
    }
    getClassroomById(IdClassroom) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ClassroomRepositorie_1.default.findOneBy({ IdClassroom });
        });
    }
    deleteClassroomByID(IdClassroom) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ClassroomRepositorie_1.default.delete({ IdClassroom });
        });
    }
    uptadeClassroomById(IdClassroom, classroom) {
        return __awaiter(this, void 0, void 0, function* () {
            const ClassroomNow = yield ClassroomRepositorie_1.default.findOneBy({ IdClassroom });
            if (ClassroomNow) {
                ClassroomNow.Date = classroom.Date;
                ClassroomNow.Description = classroom.Description;
                ClassroomNow.IdSubject = classroom.IdSubject;
                ClassroomNow.IdClassroom = classroom.IdClassroom;
                ClassroomNow.IdTeacher = classroom.IdTeacher;
            }
        });
    }
}
exports.default = ClassroomService;
