"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const planoMunicipalDeSaudeSchema = new mongoose_1.Schema({
    titulo: { type: String, required: true },
    link: { type: String, required: true },
});
const PlanoMunicipalDeSaude = (0, mongoose_1.model)('PlanoMunicipalDeSaude', planoMunicipalDeSaudeSchema);
exports.default = PlanoMunicipalDeSaude;
