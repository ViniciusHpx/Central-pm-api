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
const CreateProgramacaoAnual2024Service_1 = __importDefault(require("../services/ProgramacaoAnual2024/CreateProgramacaoAnual2024Service"));
const ListProgramacaoAnual2024Service_1 = __importDefault(require("../services/ProgramacaoAnual2024/ListProgramacaoAnual2024Service"));
const ShowProgramacaoAnual2024Service_1 = __importDefault(require("../services/ProgramacaoAnual2024/ShowProgramacaoAnual2024Service"));
const DeleteProgramacaoAnual2024Service_1 = __importDefault(require("../services/ProgramacaoAnual2024/DeleteProgramacaoAnual2024Service"));
class ProgramacaoAnual2024Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createProgramacaoAnual2024 = new CreateProgramacaoAnual2024Service_1.default();
            const programacaoAnual2024 = yield createProgramacaoAnual2024.execute({
                titulo,
                link,
            });
            return res.json(programacaoAnual2024);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listProgramacaoAnual2024 = new ListProgramacaoAnual2024Service_1.default();
            const programacaoAnual2024 = yield listProgramacaoAnual2024.execute();
            return res.json(programacaoAnual2024);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showProgramacaoAnual2024 = new ShowProgramacaoAnual2024Service_1.default();
            const programacaoAnual2024 = yield showProgramacaoAnual2024.execute({
                id,
            });
            return res.json(programacaoAnual2024);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteProgramacaoAnual2024 = new DeleteProgramacaoAnual2024Service_1.default();
            const programacaoAnual2024 = yield deleteProgramacaoAnual2024.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = ProgramacaoAnual2024Controller;
