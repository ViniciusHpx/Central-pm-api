import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import Rdqa2Controller from '../controllers/Rdqa2Controller';

const rdqa2Router = Router();
const rdqa2Controller = new Rdqa2Controller();

rdqa2Router.post('/', isAuth, rdqa2Controller.create);
rdqa2Router.get('/', isAuth, rdqa2Controller.list);
rdqa2Router.get('/:id', isAuth, rdqa2Controller.show);
rdqa2Router.delete('/:id', isAuth, rdqa2Controller.delete);

export default rdqa2Router;
