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
const CreateAtaService_1 = __importDefault(require("../services/AtaCoordenadores/CreateAtaService"));
const ListAtaService_1 = __importDefault(require("../services/AtaCoordenadores/ListAtaService"));
const ShowAtaService_1 = __importDefault(require("../services/AtaCoordenadores/ShowAtaService"));
const DeleteAtaService_1 = __importDefault(require("../services/AtaCoordenadores/DeleteAtaService"));
const UpdateAtaService_1 = __importDefault(require("../services/AtaCoordenadores/UpdateAtaService"));
class AtaCoordenadoresController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createAta = new CreateAtaService_1.default();
            const ata = yield createAta.execute({
                titulo,
                link,
            });
            return res.json(ata);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listAta = new ListAtaService_1.default();
            const atas = yield listAta.execute();
            return res.json(atas);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showAta = new ShowAtaService_1.default();
            const ata = yield showAta.execute({ id });
            return res.json(ata);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteAta = new DeleteAtaService_1.default();
            const ata = yield deleteAta.execute({ id });
            return res.json();
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, titulo, link } = req.body;
            const updateAta = new UpdateAtaService_1.default();
            const ata = yield updateAta.execute({
                id,
                titulo,
                link,
            });
            return res.json(ata);
        });
    }
}
exports.default = AtaCoordenadoresController;
