"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const CarteiraServicosController_1 = __importDefault(require("../controllers/CarteiraServicosController"));
const carteiraServicosRouter = (0, express_1.Router)();
const carteiraServicosController = new CarteiraServicosController_1.default();
carteiraServicosRouter.post('/', isAuth_1.default, carteiraServicosController.create);
carteiraServicosRouter.get('/', isAuth_1.default, carteiraServicosController.list);
carteiraServicosRouter.get('/:id', isAuth_1.default, carteiraServicosController.show);
carteiraServicosRouter.delete('/:id', isAuth_1.default, carteiraServicosController.delete);
carteiraServicosRouter.put('/', isAuth_1.default, carteiraServicosController.update);
exports.default = carteiraServicosRouter;
