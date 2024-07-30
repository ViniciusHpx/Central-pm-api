import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import LegislacaoController from '../controllers/LegislacaoController';

const legislacaoRouter = Router();
const legislacaoController = new LegislacaoController();

legislacaoRouter.post('/', isAuth, legislacaoController.create);
legislacaoRouter.get('/', isAuth, legislacaoController.list);
legislacaoRouter.get('/:id', isAuth, legislacaoController.show);
legislacaoRouter.delete('/:id', isAuth, legislacaoController.delete);

export default legislacaoRouter;
