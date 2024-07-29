import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import Rdqa1Controller from '../controllers/Rdqa1Controller';

const rdqa1Router = Router();
const rdqa1Controller = new Rdqa1Controller();

rdqa1Router.post('/', isAuth, rdqa1Controller.create);
rdqa1Router.get('/', isAuth, rdqa1Controller.list);
rdqa1Router.get('/:id', isAuth, rdqa1Controller.show);
rdqa1Router.delete('/:id', isAuth, rdqa1Controller.delete);

export default rdqa1Router;
