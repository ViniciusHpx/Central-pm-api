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
const Protocolo_1 = __importDefault(require("../../mongoose/Protocolo"));
const cache_1 = __importDefault(require("../../../../config/cache"));
class UpdateProtocoloService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, titulo, link }) {
            if (!id) {
                throw new AppError_1.default('Aviso não informado');
            }
            if (!titulo || !link) {
                throw new AppError_1.default('Campos obrigatórios não preenchidos');
            }
            if (link.length < 3 || titulo.length < 3) {
                throw new AppError_1.default('Titulo ou conteúdo com menos de 3 caracteres');
            }
            const protocoloExiste = yield Protocolo_1.default.findById(id);
            if (!protocoloExiste) {
                throw new AppError_1.default('Protocolo não encontrado');
            }
            yield Protocolo_1.default.findByIdAndUpdate(id, {
                titulo,
                link,
            });
            const protocoloAtualizado = yield Protocolo_1.default.findOne({ _id: id });
            if (!protocoloAtualizado) {
                throw new AppError_1.default('Erro ao atualizar o aviso');
            }
            cache_1.default.del('protocolo');
            return protocoloAtualizado;
        });
    }
}
exports.default = UpdateProtocoloService;
