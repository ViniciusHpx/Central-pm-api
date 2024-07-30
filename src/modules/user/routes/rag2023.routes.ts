import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import Rag2023Controller from '../controllers/Rag2023Controller';

const rag2023Router = Router();
const rag2023Controller = new Rag2023Controller();

rag2023Router.post('/', isAuth, rag2023Controller.create);
rag2023Router.get('/', isAuth, rag2023Controller.list);
rag2023Router.get('/:id', isAuth, rag2023Controller.show);
rag2023Router.delete('/:id', isAuth, rag2023Controller.delete);

export default rag2023Router;
