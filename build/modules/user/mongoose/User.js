"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    usuario: { type: String, required: true },
    senha: { type: String, required: true },
    unidade: { type: String, required: true },
    setor: { type: String, required: true },
    funcao: { type: String, required: true },
    contato: { type: String, required: true },
    isAdmin: { type: Boolean },
    resetarSenha: { type: Boolean },
    permissoes: { type: [mongoose_1.Schema.Types.String] },
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
