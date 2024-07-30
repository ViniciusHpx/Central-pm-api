"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const Rag2024Controller_1 = __importDefault(require("../controllers/Rag2024Controller"));
const rag2024Router = (0, express_1.Router)();
const rag2024Controller = new Rag2024Controller_1.default();
rag2024Router.post('/', isAuth_1.default, rag2024Controller.create);
rag2024Router.get('/', isAuth_1.default, rag2024Controller.list);
rag2024Router.get('/:id', isAuth_1.default, rag2024Controller.show);
rag2024Router.delete('/:id', isAuth_1.default, rag2024Controller.delete);
exports.default = rag2024Router;
