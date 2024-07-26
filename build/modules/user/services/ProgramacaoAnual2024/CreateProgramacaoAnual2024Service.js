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
const ProgramacaoAnual2024_1 = __importDefault(require("../../mongoose/ProgramacaoAnual2024"));
class CreateProgramacaoAnual2024Service {
    execute({ titulo, link, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!titulo || !link) {
                throw new AppError_1.default('Campos obrigatórios não preenchidos');
            }
            if (link.length < 3 || titulo.length < 3) {
                throw new AppError_1.default('Titulo ou conteúdo com menos de 3 caracteres');
            }
            const programacaoAnual2024 = new ProgramacaoAnual2024_1.default({
                titulo,
                link,
            });
            yield programacaoAnual2024.save();
            cache_1.default.del('programacaoAnual2024');
            return programacaoAnual2024;
        });
    }
}
exports.default = CreateProgramacaoAnual2024Service;
