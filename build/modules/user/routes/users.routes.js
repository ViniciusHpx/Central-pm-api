"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const isAuth_1 = __importDefault(require("../../../shared/http/middlewares/isAuth"));
const usersRouter = (0, express_1.Router)();
const userController = new UserController_1.default();
usersRouter.post('/', isAuth_1.default, userController.create);
usersRouter.get('/', isAuth_1.default, userController.list);
usersRouter.get('/:id', isAuth_1.default, userController.show);
usersRouter.delete('/:id', isAuth_1.default, userController.delete);
usersRouter.put('/', isAuth_1.default, userController.update);
usersRouter.post('/session', userController.createSession);
usersRouter.post('/changepassword', isAuth_1.default, userController.changePassword);
usersRouter.post('/checksession', isAuth_1.default, userController.checkSession);
exports.default = usersRouter;
