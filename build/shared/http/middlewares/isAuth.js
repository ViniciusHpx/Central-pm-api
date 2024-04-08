"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../../../config/auth"));
const AppError_1 = __importDefault(require("../../erros/AppError"));
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('Não existe um token enviado');
    }
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiRmVsaXBlMyIsImVtYWlsIjoidGVzdGUz
    const token = authHeader.split(' ');
    try {
        const decodeToken = (0, jsonwebtoken_1.verify)(token[1], auth_1.default.jwt.secret);
        //const sub = decodeToken.sub;
        const { id, nome, usuario, isAdmin, resetarSenha, permissoes } = decodeToken;
        //Utilizando a sobrescita do objeto request
        req.user = {
            id: id,
            nome: nome,
            usuario: usuario,
            isAdmin: isAdmin,
            resetarSenha: resetarSenha,
            permissoes: permissoes,
        };
        return next();
    }
    catch (_a) {
        throw new AppError_1.default('Token inválido');
    }
}
exports.default = isAuth;
