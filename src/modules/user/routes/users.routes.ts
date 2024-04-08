import { Router } from 'express';
import UserController from '../controllers/UserController';
import isAuth from '../../../shared/http/middlewares/isAuth';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/', isAuth, userController.create);
usersRouter.get('/', isAuth, userController.list);
usersRouter.get('/:id', isAuth, userController.show);
usersRouter.delete('/:id', isAuth, userController.delete);
usersRouter.put('/', isAuth, userController.update);
usersRouter.post('/session', userController.createSession);
usersRouter.post('/changepassword', isAuth, userController.changePassword);
usersRouter.post('/checksession', isAuth, userController.checkSession);

export default usersRouter;
