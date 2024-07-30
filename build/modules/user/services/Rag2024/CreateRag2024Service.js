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
const cache_1 = __importDefault(require("../../../../config/cache"));
const Rag2024_1 = __importDefault(require("../../mongoose/Rag2024"));
class CreateRag2024Service {
    execute({ titulo, link }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!titulo || !link) {
                throw new AppError_1.default('Campos obrigatórios não preenchidos');
            }
            if (link.length < 3 || titulo.length < 3) {
                throw new AppError_1.default('Titulo ou conteúdo com menos de 3 caracteres');
            }
            const rag2024 = new Rag2024_1.default({
                titulo,
                link,
            });
            yield rag2024.save();
            cache_1.default.del('rag2024');
            return rag2024;
        });
    }
}
exports.default = CreateRag2024Service;
