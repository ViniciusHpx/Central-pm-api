"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const programacaoAnual2022Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const ProgramacaoAnual2022 = (0, mongoose_1.model)('ProgramacaoAnual2022', programacaoAnual2022Schema);
exports.default = ProgramacaoAnual2022;
