import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import CarteiraServicosController from '../controllers/CarteiraServicosController';

const carteiraServicosRouter = Router();
const carteiraServicosController = new CarteiraServicosController();

carteiraServicosRouter.post('/', isAuth, carteiraServicosController.create);
carteiraServicosRouter.get('/', isAuth, carteiraServicosController.list);
carteiraServicosRouter.get('/:id', isAuth, carteiraServicosController.show);
carteiraServicosRouter.delete(
  '/:id',
  isAuth,
  carteiraServicosController.delete,
);
carteiraServicosRouter.put('/', isAuth, carteiraServicosController.update);

export default carteiraServicosRouter;
