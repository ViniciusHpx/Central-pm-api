"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rag2023Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Rag2023 = (0, mongoose_1.model)('Rag2023', rag2023Schema);
exports.default = Rag2023;
