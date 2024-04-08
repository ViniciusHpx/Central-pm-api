"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const avisosSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    tipo: { type: String, required: true },
    conteudo: { type: String, required: true },
    data: { type: String, required: true },
});
const Aviso = (0, mongoose_1.model)('Avisos', avisosSchema);
exports.default = Aviso;
