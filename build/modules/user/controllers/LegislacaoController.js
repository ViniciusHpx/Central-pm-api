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
const CreateLegislacaoService_1 = __importDefault(require("../services/Legislacao/CreateLegislacaoService"));
const ListLegislacaoService_1 = __importDefault(require("../services/Legislacao/ListLegislacaoService"));
const ShowLegislacaoService_1 = __importDefault(require("../services/Legislacao/ShowLegislacaoService"));
const DeleteLegislacaoService_1 = __importDefault(require("../services/Legislacao/DeleteLegislacaoService"));
class LegislacaoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createLegislacao = new CreateLegislacaoService_1.default();
            const legislacao = yield createLegislacao.execute({
                titulo,
                link,
            });
            return res.json(legislacao);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listLegislacao = new ListLegislacaoService_1.default();
            const legislacao = yield listLegislacao.execute();
            return res.json(legislacao);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showLegislacao = new ShowLegislacaoService_1.default();
            const legislacao = yield showLegislacao.execute({
                id,
            });
            return res.json(legislacao);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteLegislacao = new DeleteLegislacaoService_1.default();
            const legislacao = yield deleteLegislacao.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = LegislacaoController;
