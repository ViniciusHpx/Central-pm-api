"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CarteiraServicosSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const CarteiraServicos = (0, mongoose_1.model)('CarteiraServicos', CarteiraServicosSchema);
exports.default = CarteiraServicos;
