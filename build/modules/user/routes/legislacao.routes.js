"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const LegislacaoController_1 = __importDefault(require("../controllers/LegislacaoController"));
const legislacaoRouter = (0, express_1.Router)();
const legislacaoController = new LegislacaoController_1.default();
legislacaoRouter.post('/', isAuth_1.default, legislacaoController.create);
legislacaoRouter.get('/', isAuth_1.default, legislacaoController.list);
legislacaoRouter.get('/:id', isAuth_1.default, legislacaoController.show);
legislacaoRouter.delete('/:id', isAuth_1.default, legislacaoController.delete);
exports.default = legislacaoRouter;
