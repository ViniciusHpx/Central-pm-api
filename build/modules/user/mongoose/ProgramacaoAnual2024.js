"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const programacaoAnual2024Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const ProgramacaoAnual2024 = (0, mongoose_1.model)('ProgramacaoAnual2024', programacaoAnual2024Schema);
exports.default = ProgramacaoAnual2024;
