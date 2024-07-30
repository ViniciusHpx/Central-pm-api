import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import Rag2022Controller from '../controllers/Rag2022Controller';

const rag2022Router = Router();
const rag2022Controller = new Rag2022Controller();

rag2022Router.post('/', isAuth, rag2022Controller.create);
rag2022Router.get('/', isAuth, rag2022Controller.list);
rag2022Router.get('/:id', isAuth, rag2022Controller.show);
rag2022Router.delete('/:id', isAuth, rag2022Controller.delete);

export default rag2022Router;
