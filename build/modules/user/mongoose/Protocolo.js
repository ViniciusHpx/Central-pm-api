"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const protocolosSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Protocolo = (0, mongoose_1.model)('Protocolo', protocolosSchema);
exports.default = Protocolo;
