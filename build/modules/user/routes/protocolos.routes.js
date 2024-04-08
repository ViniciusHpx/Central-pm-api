"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProtocoloController_1 = __importDefault(require("../controllers/ProtocoloController"));
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const protocoloRouter = (0, express_1.Router)();
const protocoloController = new ProtocoloController_1.default();
protocoloRouter.post('/', isAuth_1.default, protocoloController.create);
protocoloRouter.get('/', isAuth_1.default, protocoloController.list);
protocoloRouter.get('/:id', isAuth_1.default, protocoloController.show);
protocoloRouter.delete('/:id', isAuth_1.default, protocoloController.delete);
protocoloRouter.put('/', isAuth_1.default, protocoloController.update);
exports.default = protocoloRouter;
