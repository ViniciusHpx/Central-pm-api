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
const CreateCarteiraServicosService_1 = __importDefault(require("../services/CarteiraServicos/CreateCarteiraServicosService"));
const ListCarteiraServicosService_1 = __importDefault(require("../services/CarteiraServicos/ListCarteiraServicosService"));
const ShowCarteiraServicosService_1 = __importDefault(require("../services/CarteiraServicos/ShowCarteiraServicosService"));
const DeleteCarteiraServicoService_1 = __importDefault(require("../services/CarteiraServicos/DeleteCarteiraServicoService"));
const UpdateCarteiraServicosService_1 = __importDefault(require("../services/CarteiraServicos/UpdateCarteiraServicosService"));
class CarteiraServicosController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createCarteiraServicos = new CreateCarteiraServicosService_1.default();
            const carteiraServicos = yield createCarteiraServicos.execute({
                titulo,
                link,
            });
            return res.json(carteiraServicos);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listCarteiraServicos = new ListCarteiraServicosService_1.default();
            const carteiraServicos = yield listCarteiraServicos.execute();
            return res.json(carteiraServicos);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showCarteiraServicos = new ShowCarteiraServicosService_1.default();
            const carteiraServicos = yield showCarteiraServicos.execute({ id });
            return res.json(carteiraServicos);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteCarteiraServicos = new DeleteCarteiraServicoService_1.default();
            const carteiraServicos = yield deleteCarteiraServicos.execute({ id });
            return res.json();
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, titulo, link } = req.body;
            const updateCarteiraServicos = new UpdateCarteiraServicosService_1.default();
            const carteiraServicos = yield updateCarteiraServicos.execute({
                id,
                titulo,
                link,
            });
            return res.json(carteiraServicos);
        });
    }
}
exports.default = CarteiraServicosController;
