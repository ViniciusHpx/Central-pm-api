import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import Rdqa3Controller from '../controllers/Rdqa3Controller';

const rdqa3Router = Router();
const rdqa3Controller = new Rdqa3Controller();

rdqa3Router.post('/', isAuth, rdqa3Controller.create);
rdqa3Router.get('/', isAuth, rdqa3Controller.list);
rdqa3Router.get('/:id', isAuth, rdqa3Controller.show);
rdqa3Router.delete('/:id', isAuth, rdqa3Controller.delete);

export default rdqa3Router;
