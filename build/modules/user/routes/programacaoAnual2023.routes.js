"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const ProgramacaoAnual2023Controller_1 = __importDefault(require("../controllers/ProgramacaoAnual2023Controller"));
const programacaoAnual2023Router = (0, express_1.Router)();
const programacaoAnual2023Controller = new ProgramacaoAnual2023Controller_1.default();
programacaoAnual2023Router.post('/', isAuth_1.default, programacaoAnual2023Controller.create);
programacaoAnual2023Router.get('/', isAuth_1.default, programacaoAnual2023Controller.list);
programacaoAnual2023Router.get('/:id', isAuth_1.default, programacaoAnual2023Controller.show);
programacaoAnual2023Router.delete('/:id', isAuth_1.default, programacaoAnual2023Controller.delete);
exports.default = programacaoAnual2023Router;
