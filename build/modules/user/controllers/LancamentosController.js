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
const CreateLancamentosService_1 = __importDefault(require("../services/Lancamentos/CreateLancamentosService"));
const ListLancamentosService_1 = __importDefault(require("../services/Lancamentos/ListLancamentosService"));
const ShowLancamentosService_1 = __importDefault(require("../services/Lancamentos/ShowLancamentosService"));
const DeleteLancamentosService_1 = __importDefault(require("../services/Lancamentos/DeleteLancamentosService"));
const UpdateLancamentosService_1 = __importDefault(require("../services/Lancamentos/UpdateLancamentosService"));
class LancamentosController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createLancamentos = new CreateLancamentosService_1.default();
            const lancamentos = yield createLancamentos.execute({
                titulo,
                link,
            });
            return res.json(lancamentos);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listLancamentos = new ListLancamentosService_1.default();
            const lancamentos = yield listLancamentos.execute();
            return res.json(lancamentos);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showLancamentos = new ShowLancamentosService_1.default();
            const lancamentos = yield showLancamentos.execute({ id });
            return res.json(lancamentos);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteLancamentos = new DeleteLancamentosService_1.default();
            const lancamentos = yield deleteLancamentos.execute({ id });
            return res.json();
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, titulo, link } = req.body;
            const updateLancamentos = new UpdateLancamentosService_1.default();
            const lancamentos = yield updateLancamentos.execute({
                id,
                titulo,
                link,
            });
            return res.json(lancamentos);
        });
    }
}
exports.default = LancamentosController;
