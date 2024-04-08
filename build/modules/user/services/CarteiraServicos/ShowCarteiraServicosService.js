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
const AppError_1 = __importDefault(require("../../../../shared/erros/AppError"));
const CarteiraServicos_1 = __importDefault(require("../../mongoose/CarteiraServicos"));
class ShowCarteiraServicosService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            if (!id) {
                throw new AppError_1.default('ID do aviso não informado');
            }
            const carteiraServico = yield CarteiraServicos_1.default.findOne({ _id: id });
            if (!carteiraServico) {
                throw new AppError_1.default('Carteira de serviços não encontrado');
            }
            return carteiraServico;
        });
    }
}
exports.default = ShowCarteiraServicosService;
