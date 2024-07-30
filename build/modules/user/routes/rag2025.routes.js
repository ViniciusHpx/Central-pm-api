"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const Rag2025Controller_1 = __importDefault(require("../controllers/Rag2025Controller"));
const rag2025Router = (0, express_1.Router)();
const rag2025Controller = new Rag2025Controller_1.default();
rag2025Router.post('/', isAuth_1.default, rag2025Controller.create);
rag2025Router.get('/', isAuth_1.default, rag2025Controller.list);
rag2025Router.get('/:id', isAuth_1.default, rag2025Controller.show);
rag2025Router.delete('/:id', isAuth_1.default, rag2025Controller.delete);
exports.default = rag2025Router;
