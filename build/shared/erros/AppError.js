"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError {
    constructor(mensagem, codigoDoErro = 400) {
        this.mensagem = mensagem;
        this.codigoDoErro = codigoDoErro;
    }
}
exports.default = AppError;
