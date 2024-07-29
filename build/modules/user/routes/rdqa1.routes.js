"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const Rdqa1Controller_1 = __importDefault(require("../controllers/Rdqa1Controller"));
const rdqa1Router = (0, express_1.Router)();
const rdqa1Controller = new Rdqa1Controller_1.default();
rdqa1Router.post('/', isAuth_1.default, rdqa1Controller.create);
rdqa1Router.get('/', isAuth_1.default, rdqa1Controller.list);
rdqa1Router.get('/:id', isAuth_1.default, rdqa1Controller.show);
rdqa1Router.delete('/:id', isAuth_1.default, rdqa1Controller.delete);
exports.default = rdqa1Router;
