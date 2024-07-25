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
const CreateProgramacaoAnual2023_1 = __importDefault(require("../services/ProgramaAnual2023/CreateProgramacaoAnual2023"));
const ListProgramacaoAnual2023_1 = __importDefault(require("../services/ProgramaAnual2023/ListProgramacaoAnual2023"));
const ShowProgramacaoAnual2023_1 = __importDefault(require("../services/ProgramaAnual2023/ShowProgramacaoAnual2023"));
const DeleteProgramacaoAnual2023_1 = __importDefault(require("../services/ProgramaAnual2023/DeleteProgramacaoAnual2023"));
class ProgramacaoAnual2023Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createProgramacaoAnual2023 = new CreateProgramacaoAnual2023_1.default();
            const programacaoAnual2023 = yield createProgramacaoAnual2023.execute({
                titulo,
                link,
            });
            return res.json(programacaoAnual2023);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listProgramacaoAnual2023 = new ListProgramacaoAnual2023_1.default();
            const programacaoAnual2023 = yield listProgramacaoAnual2023.execute();
            return res.json(programacaoAnual2023);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showProgramacaoAnual2023 = new ShowProgramacaoAnual2023_1.default();
            const programacaoAnual2023 = yield showProgramacaoAnual2023.execute({
                id,
            });
            return res.json(programacaoAnual2023);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteProgramacaoAnual2023 = new DeleteProgramacaoAnual2023_1.default();
            const programacaoAnual2023 = yield deleteProgramacaoAnual2023.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = ProgramacaoAnual2023Controller;
