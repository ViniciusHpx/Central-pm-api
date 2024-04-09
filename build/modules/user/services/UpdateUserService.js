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
const bcrypt_1 = require("bcrypt");
const AppError_1 = __importDefault(require("../../../shared/erros/AppError"));
const User_1 = __importDefault(require("../mongoose/User"));
const cache_1 = __importDefault(require("../../../config/cache"));
class UpdateUserService {
    execute({ id, nome, usuario, senha, confirmSenha, unidade, setor, funcao, contato, isAdmin, resetarSenha, permissoes, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!nome || !usuario || !unidade || !setor || !funcao || !contato) {
                throw new AppError_1.default('Campos obrigatórios não preenchidos');
            }
            if (!id) {
                throw new AppError_1.default('ID do usuário não informado');
            }
            const user = yield User_1.default.findOne({ _id: id });
            if (!user) {
                throw new AppError_1.default('Usuário não encontrado');
            }
            usuario = usuario.toUpperCase();
            const userExiste = yield User_1.default.findOne({ usuario });
            if (userExiste && usuario !== user.usuario) {
                throw new AppError_1.default('O nome de usuário já existe');
            }
            nome = nome.toUpperCase();
            unidade = unidade.toUpperCase();
            setor = setor.toUpperCase();
            funcao = funcao.toUpperCase();
            if (resetarSenha) {
                if (!senha) {
                    throw new AppError_1.default('Senha não informada');
                }
                if (senha !== confirmSenha) {
                    throw new AppError_1.default('As senhas não conferem');
                }
                if (senha.length < 8) {
                    throw new AppError_1.default('A senha deve possuir no mínimo 8 caracteres');
                }
                const hashedPassw = yield (0, bcrypt_1.hash)(senha, 8);
                yield User_1.default.findByIdAndUpdate(id, {
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
                const userAtualizado = yield User_1.default.findOne({ _id: id });
                if (!userAtualizado) {
                    throw new AppError_1.default('Houve um problema ao atualizar o usuário');
                }
                cache_1.default.del('users');
                return userAtualizado;
            }
            else {
                yield User_1.default.findByIdAndUpdate(id, {
                    nome,
                    usuario,
                    unidade,
                    setor,
                    funcao,
                    contato,
                    isAdmin,
                    resetarSenha,
                    permissoes,
                });
                const userAtualizado = yield User_1.default.findOne({ _id: id });
                if (!userAtualizado) {
                    throw new AppError_1.default('Houve um problema ao atualizar o usuário');
                }
                cache_1.default.del('users');
                return userAtualizado;
            }
        });
    }
}
exports.default = UpdateUserService;
