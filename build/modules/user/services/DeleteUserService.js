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
const AppError_1 = __importDefault(require("../../../shared/erros/AppError"));
const User_1 = __importDefault(require("../mongoose/User"));
const cache_1 = __importDefault(require("../../../config/cache"));
class DeleteUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            const userExiste = yield User_1.default.findOne({ _id: id });
            if (!userExiste) {
                throw new AppError_1.default('Usuário não encontrado');
            }
            if (userExiste.isAdmin) {
                throw new AppError_1.default('Não é possível excluir um usuário administrador');
            }
            yield User_1.default.deleteOne({ _id: id });
            cache_1.default.del('users');
        });
    }
}
exports.default = DeleteUserService;
