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
const CreateComissaoEmergenciaService_1 = __importDefault(require("../services/ComissaoEmergencia/CreateComissaoEmergenciaService"));
const ListComissaoEmergenciaService_1 = __importDefault(require("../services/ComissaoEmergencia/ListComissaoEmergenciaService"));
const ShowComissaoEmergenciaService_1 = __importDefault(require("../services/ComissaoEmergencia/ShowComissaoEmergenciaService"));
const DeleteComissaoEmergenciaService_1 = __importDefault(require("../services/ComissaoEmergencia/DeleteComissaoEmergenciaService"));
class ComissaoEmergenciaController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createComissaoEmergencia = new CreateComissaoEmergenciaService_1.default();
            const comissaoEmergencia = yield createComissaoEmergencia.execute({
                titulo,
                link,
            });
            return res.json(comissaoEmergencia);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listComissaoEmergencia = new ListComissaoEmergenciaService_1.default();
            const comissaoEmergencia = yield listComissaoEmergencia.execute();
            return res.json(comissaoEmergencia);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showComissaoEmergencia = new ShowComissaoEmergenciaService_1.default();
            const comissaoEmergencia = yield showComissaoEmergencia.execute({
                id,
            });
            return res.json(comissaoEmergencia);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteComissaoEmergencia = new DeleteComissaoEmergenciaService_1.default();
            const comissaoEmergencia = yield deleteComissaoEmergencia.execute({ id });
            return res.json();
        });
    }
}
exports.default = ComissaoEmergenciaController;
