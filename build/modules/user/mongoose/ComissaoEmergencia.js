"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const comissaoEmergenciaSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const ComissaoEmergencia = (0, mongoose_1.model)('ComissaoEmergencia', comissaoEmergenciaSchema);
exports.default = ComissaoEmergencia;
