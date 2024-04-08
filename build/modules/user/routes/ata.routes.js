"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const AtaCoordenadoresController_1 = __importDefault(require("../controllers/AtaCoordenadoresController"));
const ataRouter = (0, express_1.Router)();
const ataController = new AtaCoordenadoresController_1.default();
ataRouter.post('/', isAuth_1.default, ataController.create);
ataRouter.get('/', isAuth_1.default, ataController.list);
ataRouter.get('/:id', isAuth_1.default, ataController.show);
ataRouter.delete('/:id', isAuth_1.default, ataController.delete);
ataRouter.put('/', isAuth_1.default, ataController.update);
exports.default = ataRouter;
