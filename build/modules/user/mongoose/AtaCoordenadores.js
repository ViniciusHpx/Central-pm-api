"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ataSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const AtaCoordenadores = (0, mongoose_1.model)('AtaCoordenadores', ataSchema);
exports.default = AtaCoordenadores;
