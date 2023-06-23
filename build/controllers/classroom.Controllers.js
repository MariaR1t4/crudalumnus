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
const classroom_service_1 = __importDefault(require("../services/classroom.service"));
class ClassroomController {
    constructor() {
    }
    static getInstance() {
        if (!ClassroomController.instance) {
            ClassroomController.instance = new ClassroomController();
        }
        return ClassroomController.instance;
    }
    saveClassroom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const classroomService = classroom_service_1.default.getInstance();
            const classroom = req.body;
            const classroomcreated = yield classroomService.saveClassroom(classroom);
            console.log(classroomcreated);
            res.json(classroomcreated);
        });
    }
    getClassroom(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const classroomService = classroom_service_1.default.getInstance();
            res.json(yield classroomService.getClassroom());
        });
    }
    getClassroomById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const classroomService = classroom_service_1.default.getInstance();
            const id = req.params.id;
            res.json(yield classroomService.getClassroomById(id));
        });
    }
    deleteClassroomById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const classroomService = classroom_service_1.default.getInstance();
            const id = req.params.id;
            yield classroomService.deleteClassroomByID(id);
            res.json('ok');
        });
    }
    updateClassroomById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const classroomService = classroom_service_1.default.getInstance();
            const id = req.params.id;
            const classroom = req.body;
            yield classroomService.uptadeClassroomById(id, classroom);
            res.json('ok');
        });
    }
}
exports.default = ClassroomController;
