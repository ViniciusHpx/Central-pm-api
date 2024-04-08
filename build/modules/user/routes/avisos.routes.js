"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AvisoController_1 = __importDefault(require("../controllers/AvisoController"));
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const avisoRouter = (0, express_1.Router)();
const avisoController = new AvisoController_1.default();
avisoRouter.post('/', isAuth_1.default, avisoController.create);
avisoRouter.get('/', isAuth_1.default, avisoController.list);
avisoRouter.get('/:id', isAuth_1.default, avisoController.show);
avisoRouter.delete('/:id', isAuth_1.default, avisoController.delete);
avisoRouter.put('/', isAuth_1.default, avisoController.update);
exports.default = avisoRouter;
