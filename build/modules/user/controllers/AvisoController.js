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
const CreateAvisoService_1 = __importDefault(require("../services/Aviso/CreateAvisoService"));
const ListAvisoService_1 = __importDefault(require("../services/Aviso/ListAvisoService"));
const ShowAvisoService_1 = __importDefault(require("../services/Aviso/ShowAvisoService"));
const DeleteAvisoService_1 = __importDefault(require("../services/Aviso/DeleteAvisoService"));
const UpdateAvisoService_1 = __importDefault(require("../services/Aviso/UpdateAvisoService"));
class AvisoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, tipo, conteudo, data } = req.body;
            const createAviso = new CreateAvisoService_1.default();
            const aviso = yield createAviso.execute({ titulo, tipo, conteudo, data });
            return res.json(aviso);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listAviso = new ListAvisoService_1.default();
            const avisos = yield listAviso.execute();
            return res.json(avisos);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showAviso = new ShowAvisoService_1.default();
            const aviso = yield showAviso.execute({ id });
            return res.json(aviso);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteAviso = new DeleteAvisoService_1.default();
            const aviso = yield deleteAviso.execute({ id });
            return res.json();
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, titulo, tipo, conteudo, data } = req.body;
            const updateAviso = new UpdateAvisoService_1.default();
            const aviso = yield updateAviso.execute({
                id,
                titulo,
                tipo,
                conteudo,
                data,
            });
            return res.json(aviso);
        });
    }
}
exports.default = AvisoController;
