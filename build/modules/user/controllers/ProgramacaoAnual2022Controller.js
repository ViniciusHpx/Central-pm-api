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
const CreateProgramacaoAnual2022_1 = __importDefault(require("../services/ProgramaAnual2022/CreateProgramacaoAnual2022"));
const ListProgramacaoAnual2022_1 = __importDefault(require("../services/ProgramaAnual2022/ListProgramacaoAnual2022"));
const ShowProgramacaoAnual2022_1 = __importDefault(require("../services/ProgramaAnual2022/ShowProgramacaoAnual2022"));
const DeleteProgramacaoAnual2022_1 = __importDefault(require("../services/ProgramaAnual2022/DeleteProgramacaoAnual2022"));
class ProgramacaoAnual2022Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createProgramacaoAnual2022 = new CreateProgramacaoAnual2022_1.default();
            const programacaoAnual2022 = yield createProgramacaoAnual2022.execute({
                titulo,
                link,
            });
            return res.json(programacaoAnual2022);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listProgramacaoAnual2022 = new ListProgramacaoAnual2022_1.default();
            const programacaoAnual2022 = yield listProgramacaoAnual2022.execute();
            return res.json(programacaoAnual2022);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showProgramacaoAnual2022 = new ShowProgramacaoAnual2022_1.default();
            const programacaoAnual2022 = yield showProgramacaoAnual2022.execute({
                id,
            });
            return res.json(programacaoAnual2022);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteProgramacaoAnual2022 = new DeleteProgramacaoAnual2022_1.default();
            const programacaoAnual2022 = yield deleteProgramacaoAnual2022.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = ProgramacaoAnual2022Controller;
