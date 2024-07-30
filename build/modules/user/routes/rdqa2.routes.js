"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const Rdqa2Controller_1 = __importDefault(require("../controllers/Rdqa2Controller"));
const rdqa2Router = (0, express_1.Router)();
const rdqa2Controller = new Rdqa2Controller_1.default();
rdqa2Router.post('/', isAuth_1.default, rdqa2Controller.create);
rdqa2Router.get('/', isAuth_1.default, rdqa2Controller.list);
rdqa2Router.get('/:id', isAuth_1.default, rdqa2Controller.show);
rdqa2Router.delete('/:id', isAuth_1.default, rdqa2Controller.delete);
exports.default = rdqa2Router;
