"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const ProgramacaoAnual2025Controller_1 = __importDefault(require("../controllers/ProgramacaoAnual2025Controller"));
const programacaoAnual2025Router = (0, express_1.Router)();
const programacaoAnual2025Controller = new ProgramacaoAnual2025Controller_1.default();
programacaoAnual2025Router.post('/', isAuth_1.default, programacaoAnual2025Controller.create);
programacaoAnual2025Router.get('/', isAuth_1.default, programacaoAnual2025Controller.list);
programacaoAnual2025Router.get('/:id', isAuth_1.default, programacaoAnual2025Controller.show);
programacaoAnual2025Router.delete('/:id', isAuth_1.default, programacaoAnual2025Controller.delete);
exports.default = programacaoAnual2025Router;
