"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const lancamentosSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Lancamentos = (0, mongoose_1.model)('Lancamentos', lancamentosSchema);
exports.default = Lancamentos;
