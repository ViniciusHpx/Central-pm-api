"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rag2022Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Rag2022 = (0, mongoose_1.model)('Rag2022', rag2022Schema);
exports.default = Rag2022;
