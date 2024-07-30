"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rag2025Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Rag2025 = (0, mongoose_1.model)('Rag2025', rag2025Schema);
exports.default = Rag2025;
