"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const programacaoAnual2023Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const ProgramacaoAnual2023 = (0, mongoose_1.model)('ProgramacaoAnual2023', programacaoAnual2023Schema);
exports.default = ProgramacaoAnual2023;
