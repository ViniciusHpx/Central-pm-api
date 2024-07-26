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
const CreateProgramacaoAnual2025Service_1 = __importDefault(require("../services/ProgramacaoAnual2025/CreateProgramacaoAnual2025Service"));
const ListProgramacaoAnual2025Service_1 = __importDefault(require("../services/ProgramacaoAnual2025/ListProgramacaoAnual2025Service"));
const ShowProgramacaoAnual2025Service_1 = __importDefault(require("../services/ProgramacaoAnual2025/ShowProgramacaoAnual2025Service"));
const DeleteProgramacaoAnual2025Service_1 = __importDefault(require("../services/ProgramacaoAnual2025/DeleteProgramacaoAnual2025Service"));
class ProgramacaoAnual2025Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createProgramacaoAnual2025 = new CreateProgramacaoAnual2025Service_1.default();
            const programacaoAnual2025 = yield createProgramacaoAnual2025.execute({
                titulo,
                link,
            });
            return res.json(programacaoAnual2025);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listProgramacaoAnual2025 = new ListProgramacaoAnual2025Service_1.default();
            const programacaoAnual2025 = yield listProgramacaoAnual2025.execute();
            return res.json(programacaoAnual2025);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showProgramacaoAnual2025 = new ShowProgramacaoAnual2025Service_1.default();
            const programacaoAnual2025 = yield showProgramacaoAnual2025.execute({
                id,
            });
            return res.json(programacaoAnual2025);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteProgramacaoAnual2025 = new DeleteProgramacaoAnual2025Service_1.default();
            const programacaoAnual2025 = yield deleteProgramacaoAnual2025.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = ProgramacaoAnual2025Controller;
