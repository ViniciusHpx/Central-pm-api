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
const Avisos_1 = __importDefault(require("../../mongoose/Avisos"));
const cache_1 = __importDefault(require("../../../../config/cache"));
class DeleteAvisoService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            const avisoExiste = yield Avisos_1.default.findOne({ _id: id });
            if (!avisoExiste) {
                throw new AppError_1.default('Aviso não encontrado');
            }
            cache_1.default.del('avisos');
            yield Avisos_1.default.deleteOne({ _id: id });
        });
    }
}
exports.default = DeleteAvisoService;
