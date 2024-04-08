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
const cache_1 = __importDefault(require("../../../config/cache"));
class CreateUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome, usuario, senha, confirmSenha, unidade, setor, funcao, contato, isAdmin, resetarSenha, permissoes, }) {
            if (!nome ||
                !usuario ||
                !senha ||
                !confirmSenha ||
                !unidade ||
                !setor ||
                !funcao ||
                !contato) {
                throw new AppError_1.default('Campos obrigatórios não preenchidos');
            }
            if (senha !== confirmSenha) {
                throw new AppError_1.default('As senhas não conferem');
            }
            if (senha.length < 8) {
                throw new AppError_1.default('A senha deve possuir no mínimo 8 caracteres');
            }
            usuario = usuario.toUpperCase();
            const userExiste = yield User_1.default.findOne({ usuario });
            if (userExiste) {
                throw new AppError_1.default('O nome de usuário já existe');
            }
            const hashedPassw = yield (0, bcrypt_1.hash)(senha, 8);
            nome = nome.toUpperCase();
            unidade = unidade.toUpperCase();
            setor = setor.toUpperCase();
            funcao = funcao.toUpperCase();
            const user = new User_1.default({
                nome,
                usuario,
                senha: hashedPassw,
                unidade,
                setor,
                funcao,
                contato,
                isAdmin,
                resetarSenha,
                permissoes,
            });
            yield user.save();
            cache_1.default.del('users');
            return user;
        });
    }
}
exports.default = CreateUserService;
