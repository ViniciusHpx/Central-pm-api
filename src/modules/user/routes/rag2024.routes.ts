import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import Rag2024Controller from '../controllers/Rag2024Controller';

const rag2024Router = Router();
const rag2024Controller = new Rag2024Controller();

rag2024Router.post('/', isAuth, rag2024Controller.create);
rag2024Router.get('/', isAuth, rag2024Controller.list);
rag2024Router.get('/:id', isAuth, rag2024Controller.show);
rag2024Router.delete('/:id', isAuth, rag2024Controller.delete);

export default rag2024Router;
