"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LancamentosController_1 = __importDefault(require("../controllers/LancamentosController"));
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const lancamentosRouter = (0, express_1.Router)();
const lancamentosController = new LancamentosController_1.default();
lancamentosRouter.post('/', lancamentosController.create);
lancamentosRouter.get('/', isAuth_1.default, lancamentosController.list);
lancamentosRouter.get('/:id', isAuth_1.default, lancamentosController.show);
lancamentosRouter.delete('/:id', isAuth_1.default, lancamentosController.delete);
lancamentosRouter.put('/', isAuth_1.default, lancamentosController.update);
exports.default = lancamentosRouter;
