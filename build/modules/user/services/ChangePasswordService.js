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
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../../config/auth"));
const AppError_1 = __importDefault(require("../../../shared/erros/AppError"));
const User_1 = __importDefault(require("../mongoose/User"));
const bcrypt_1 = require("bcrypt");
const cache_1 = __importDefault(require("../../../config/cache"));
class ChangePasswordService {
    execute({ token, senha, senhaConfirm, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token || !senha || !senhaConfirm) {
                throw new AppError_1.default('token, senha ou senha de confirmação não enviados');
            }
            const tokenSplited = token.split(' ');
            var decodeToken;
            try {
                decodeToken = (0, jsonwebtoken_1.verify)(tokenSplited[1], auth_1.default.jwt.secret);
            }
            catch (_a) {
                throw new AppError_1.default('Token invalido');
            }
            const { id, nome, usuario, isAdmin, resetarSenha, permissoes } = decodeToken;
            const user = yield User_1.default.findOne({ usuario });
            if (!user) {
                throw new AppError_1.default('Usuário não encontrado');
            }
            if (senha.length < 8) {
                throw new AppError_1.default('A senha deve possuir no mínimo 8 caracteres');
            }
            if (senha !== senhaConfirm) {
                throw new AppError_1.default('As senhas não conferem');
            }
            const hashedPassw = yield (0, bcrypt_1.hash)(senha, 8);
            yield User_1.default.findByIdAndUpdate(id, {
                senha: hashedPassw,
                resetarSenha: false,
            });
            cache_1.default.del('users');
        });
    }
}
exports.default = ChangePasswordService;
