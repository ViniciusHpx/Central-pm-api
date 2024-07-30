import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import Rag2025Controller from '../controllers/Rag2025Controller';

const rag2025Router = Router();
const rag2025Controller = new Rag2025Controller();

rag2025Router.post('/', isAuth, rag2025Controller.create);
rag2025Router.get('/', isAuth, rag2025Controller.list);
rag2025Router.get('/:id', isAuth, rag2025Controller.show);
rag2025Router.delete('/:id', isAuth, rag2025Controller.delete);

export default rag2025Router;
