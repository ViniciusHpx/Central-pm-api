"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const Rdqa3Controller_1 = __importDefault(require("../controllers/Rdqa3Controller"));
const rdqa3Router = (0, express_1.Router)();
const rdqa3Controller = new Rdqa3Controller_1.default();
rdqa3Router.post('/', isAuth_1.default, rdqa3Controller.create);
rdqa3Router.get('/', isAuth_1.default, rdqa3Controller.list);
rdqa3Router.get('/:id', isAuth_1.default, rdqa3Controller.show);
rdqa3Router.delete('/:id', isAuth_1.default, rdqa3Controller.delete);
exports.default = rdqa3Router;
