"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const programacaoAnual2025Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const ProgramacaoAnual2025 = (0, mongoose_1.model)('ProgramacaoAnual2025', programacaoAnual2025Schema);
exports.default = ProgramacaoAnual2025;
