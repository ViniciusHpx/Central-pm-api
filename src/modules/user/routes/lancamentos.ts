import { Router } from 'express';
import LancamentosController from '../controllers/LancamentosController';
import isAuth from '../../../shared/http/middlewares/isAuth';

const lancamentosRouter = Router();
const lancamentosController = new LancamentosController();

lancamentosRouter.post('/', lancamentosController.create);
lancamentosRouter.get('/', isAuth, lancamentosController.list);
lancamentosRouter.get('/:id', isAuth, lancamentosController.show);
lancamentosRouter.delete('/:id', isAuth, lancamentosController.delete);
lancamentosRouter.put('/', isAuth, lancamentosController.update);

export default lancamentosRouter;
