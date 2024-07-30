"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const rdqa2Schema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const Rdqa2 = (0, mongoose_1.model)('Rdqa2', rdqa2Schema);
exports.default = Rdqa2;
