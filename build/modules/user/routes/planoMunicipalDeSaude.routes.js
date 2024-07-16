"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const PlanoMunicipalDeSaude_1 = __importDefault(require("../controllers/PlanoMunicipalDeSaude"));
const planoMunicipalDeSaudeRouter = (0, express_1.Router)();
const planoMunicipalDeSaudeController = new PlanoMunicipalDeSaude_1.default();
planoMunicipalDeSaudeRouter.post('/', isAuth_1.default, planoMunicipalDeSaudeController.create);
planoMunicipalDeSaudeRouter.get('/', isAuth_1.default, planoMunicipalDeSaudeController.list);
planoMunicipalDeSaudeRouter.get('/:id', isAuth_1.default, planoMunicipalDeSaudeController.show);
planoMunicipalDeSaudeRouter.delete('/:id', isAuth_1.default, planoMunicipalDeSaudeController.delete);
exports.default = planoMunicipalDeSaudeRouter;
