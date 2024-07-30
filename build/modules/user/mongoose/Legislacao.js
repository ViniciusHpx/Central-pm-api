"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const legislacaoSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Legislacao = (0, mongoose_1.model)('Legislacao', legislacaoSchema);
exports.default = Legislacao;
