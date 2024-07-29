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
const ProgramacaoAnual2025_1 = __importDefault(require("../../mongoose/ProgramacaoAnual2025"));
class ShowProgramacaoAnual2025Service {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new AppError_1.default('ID do aviso não informado');
            }
            const programacaoAnual2025 = yield ProgramacaoAnual2025_1.default.findOne({
                _id: id,
            });
            if (!programacaoAnual2025) {
                throw new AppError_1.default('PAS 2025 não encontrado');
            }
            return programacaoAnual2025;
        });
    }
}
exports.default = ShowProgramacaoAnual2025Service;
