"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const ProgramacaoAnual2022Controller_1 = __importDefault(require("../controllers/ProgramacaoAnual2022Controller"));
const programacaoAnual2022Router = (0, express_1.Router)();
const programacaoAnual2022Controller = new ProgramacaoAnual2022Controller_1.default();
programacaoAnual2022Router.post('/', isAuth_1.default, programacaoAnual2022Controller.create);
programacaoAnual2022Router.get('/', isAuth_1.default, programacaoAnual2022Controller.list);
programacaoAnual2022Router.get('/:id', isAuth_1.default, programacaoAnual2022Controller.show);
programacaoAnual2022Router.delete('/:id', isAuth_1.default, programacaoAnual2022Controller.delete);
exports.default = programacaoAnual2022Router;
