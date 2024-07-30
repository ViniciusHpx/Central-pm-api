"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rag2024Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Rag2024 = (0, mongoose_1.model)('Rag2024', rag2024Schema);
exports.default = Rag2024;
