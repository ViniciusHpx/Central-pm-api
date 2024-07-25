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
const ProgramacaoAnual2023_1 = __importDefault(require("../../mongoose/ProgramacaoAnual2023"));
class DeleteProgramacaoAnual2023 {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const programacaoAnual2023Existe = yield ProgramacaoAnual2023_1.default.findOne({
                _id: id,
            });
            if (!programacaoAnual2023Existe) {
                throw new AppError_1.default('PAS não encontrado');
            }
            cache_1.default.del('programacaoAnual2023');
            yield ProgramacaoAnual2023_1.default.deleteOne({ _id: id });
        });
    }
}
exports.default = DeleteProgramacaoAnual2023;
