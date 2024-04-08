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
class CheckAuthService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ token }) {
            if (!token) {
                throw new AppError_1.default('Token não informado');
            }
            const tokenSplited = token.split(' ');
            let decodeToken;
            try {
                decodeToken = (0, jsonwebtoken_1.verify)(tokenSplited[1], auth_1.default.jwt.secret);
            }
            catch (_b) {
                throw new AppError_1.default('Token invalido');
            }
            const { id, nome, usuario, isAdmin, resetarSenha, permissoes } = decodeToken;
            const user = yield User_1.default.findById(id);
            if (!user) {
                throw new AppError_1.default('Usuário não encontrado');
            }
            return user;
        });
    }
}
exports.default = CheckAuthService;
