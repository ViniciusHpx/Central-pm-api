"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const Rag2022Controller_1 = __importDefault(require("../controllers/Rag2022Controller"));
const rag2022Router = (0, express_1.Router)();
const rag2022Controller = new Rag2022Controller_1.default();
rag2022Router.post('/', isAuth_1.default, rag2022Controller.create);
rag2022Router.get('/', isAuth_1.default, rag2022Controller.list);
rag2022Router.get('/:id', isAuth_1.default, rag2022Controller.show);
rag2022Router.delete('/:id', isAuth_1.default, rag2022Controller.delete);
exports.default = rag2022Router;
