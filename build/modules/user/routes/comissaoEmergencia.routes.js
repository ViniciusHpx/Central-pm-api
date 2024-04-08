"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const ComissaoEmergenciaController_1 = __importDefault(require("../controllers/ComissaoEmergenciaController"));
const comissaoEmergenciaRouter = (0, express_1.Router)();
const comissaoEmergenciaController = new ComissaoEmergenciaController_1.default();
comissaoEmergenciaRouter.post('/', isAuth_1.default, comissaoEmergenciaController.create);
comissaoEmergenciaRouter.get('/', isAuth_1.default, comissaoEmergenciaController.list);
comissaoEmergenciaRouter.get('/:id', isAuth_1.default, comissaoEmergenciaController.show);
comissaoEmergenciaRouter.delete('/:id', isAuth_1.default, comissaoEmergenciaController.delete);
exports.default = comissaoEmergenciaRouter;
