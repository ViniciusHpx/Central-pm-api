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
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../../config/auth"));
class CreateSessionService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ usuario, senha }) {
            if (!usuario) {
                throw new AppError_1.default('Usuário não informado');
            }
            if (!senha) {
                throw new AppError_1.default('Senha não informada');
            }
            usuario = usuario.toUpperCase();
            const user = yield User_1.default.findOne({ usuario });
            if (!user) {
                throw new AppError_1.default('Usuário não encontrado');
            }
            const userCompare = yield (0, bcrypt_1.compare)(senha, user.senha);
            if (!userCompare) {
                throw new AppError_1.default('Senha incorreta', 401);
            }
            const token = (0, jsonwebtoken_1.sign)({
                id: user._id,
                nome: user.nome,
                usuario: user.usuario,
                isAdmin: user.isAdmin,
                resetarSenha: user.resetarSenha,
                permissoes: user.permissoes,
            }, auth_1.default.jwt.secret, {
                expiresIn: auth_1.default.jwt.expiresIn,
            });
            return { user, token };
        });
    }
}
exports.default = CreateSessionService;
