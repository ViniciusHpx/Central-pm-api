import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import ComissaoEmergenciaController from '../controllers/ComissaoEmergenciaController';

const comissaoEmergenciaRouter = Router();
const comissaoEmergenciaController = new ComissaoEmergenciaController();

comissaoEmergenciaRouter.post('/', isAuth, comissaoEmergenciaController.create);
comissaoEmergenciaRouter.get('/', isAuth, comissaoEmergenciaController.list);
comissaoEmergenciaRouter.get('/:id', isAuth, comissaoEmergenciaController.show);
comissaoEmergenciaRouter.delete(
  '/:id',
  isAuth,
  comissaoEmergenciaController.delete,
);

export default comissaoEmergenciaRouter;
