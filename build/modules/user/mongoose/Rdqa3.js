"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rdqa3Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Rdqa3 = (0, mongoose_1.model)('Rdqa3', rdqa3Schema);
exports.default = Rdqa3;
