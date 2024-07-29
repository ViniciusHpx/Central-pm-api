"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rdqa1Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Rdqa1 = (0, mongoose_1.model)('Rdqa1', rdqa1Schema);
exports.default = Rdqa1;
