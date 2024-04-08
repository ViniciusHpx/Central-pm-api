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
const CreateProtocoloService_1 = __importDefault(require("../services/Protocolo/CreateProtocoloService"));
const ListProtocoloService_1 = __importDefault(require("../services/Protocolo/ListProtocoloService"));
const ShowProtocoloService_1 = __importDefault(require("../services/Protocolo/ShowProtocoloService"));
const DeleteProtocoloService_1 = __importDefault(require("../services/Protocolo/DeleteProtocoloService"));
const UpdateProtocoloService_1 = __importDefault(require("../services/Protocolo/UpdateProtocoloService"));
class ProtocoloController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createProtocolo = new CreateProtocoloService_1.default();
            const protocolo = yield createProtocolo.execute({
                titulo,
                link,
            });
            return res.json(protocolo);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listProtocolo = new ListProtocoloService_1.default();
            const protocolos = yield listProtocolo.execute();
            return res.json(protocolos);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showProtocolo = new ShowProtocoloService_1.default();
            const protocolo = yield showProtocolo.execute({ id });
            return res.json(protocolo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteProtocolo = new DeleteProtocoloService_1.default();
            const protocolo = yield deleteProtocolo.execute({ id });
            return res.json();
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, titulo, link } = req.body;
            const updateProtocolo = new UpdateProtocoloService_1.default();
            const protocolo = yield updateProtocolo.execute({
                id,
                titulo,
                link,
            });
            return res.json(protocolo);
        });
    }
}
exports.default = ProtocoloController;
