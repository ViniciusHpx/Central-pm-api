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
const Rag2024_1 = __importDefault(require("../../mongoose/Rag2024"));
class ShowRag2024Service {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new AppError_1.default('ID do aviso não informado');
            }
            const rag2024 = yield Rag2024_1.default.findOne({
                _id: id,
            });
            if (!rag2024) {
                throw new AppError_1.default('Link não encontrado');
            }
            return rag2024;
        });
    }
}
exports.default = ShowRag2024Service;
