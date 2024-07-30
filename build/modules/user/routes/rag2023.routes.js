"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const Rag2023Controller_1 = __importDefault(require("../controllers/Rag2023Controller"));
const rag2023Router = (0, express_1.Router)();
const rag2023Controller = new Rag2023Controller_1.default();
rag2023Router.post('/', isAuth_1.default, rag2023Controller.create);
rag2023Router.get('/', isAuth_1.default, rag2023Controller.list);
rag2023Router.get('/:id', isAuth_1.default, rag2023Controller.show);
rag2023Router.delete('/:id', isAuth_1.default, rag2023Controller.delete);
exports.default = rag2023Router;
