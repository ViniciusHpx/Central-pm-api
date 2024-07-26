"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const ProgramacaoAnual2024Controller_1 = __importDefault(require("../controllers/ProgramacaoAnual2024Controller"));
const programacaoAnual2024Router = (0, express_1.Router)();
const programacaoAnual2024Controller = new ProgramacaoAnual2024Controller_1.default();
programacaoAnual2024Router.post('/', isAuth_1.default, programacaoAnual2024Controller.create);
programacaoAnual2024Router.get('/', isAuth_1.default, programacaoAnual2024Controller.list);
programacaoAnual2024Router.get('/:id', isAuth_1.default, programacaoAnual2024Controller.show);
programacaoAnual2024Router.delete('/:id', isAuth_1.default, programacaoAnual2024Controller.delete);
exports.default = programacaoAnual2024Router;
