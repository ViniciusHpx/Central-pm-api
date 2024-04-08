"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const usersRouter = (0, express_1.Router)();
const userController = new UserController_1.default();
usersRouter.post('/', /*isAuth,*/ userController.create);
usersRouter.get('/', /*isAuth,*/ userController.list);
usersRouter.get('/:id', /*isAuth,*/ userController.show);
usersRouter.delete('/:id', /*isAuth,*/ userController.delete);
usersRouter.put('/', /*isAuth,*/ userController.update);
usersRouter.post('/session', userController.createSession);
usersRouter.post('/changepassword', /*isAuth,*/ userController.changePassword);
usersRouter.post('/checksession', /*isAuth,*/ userController.checkSession);
exports.default = usersRouter;
