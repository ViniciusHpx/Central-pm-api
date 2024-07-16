import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import PlanoMunicipalDeSaudeController from '../controllers/PlanoMunicipalDeSaude';

const planoMunicipalDeSaudeRouter = Router();
const planoMunicipalDeSaudeController = new PlanoMunicipalDeSaudeController();

planoMunicipalDeSaudeRouter.post(
  '/',
  isAuth,
  planoMunicipalDeSaudeController.create,
);
planoMunicipalDeSaudeRouter.get(
  '/',
  isAuth,
  planoMunicipalDeSaudeController.list,
);
planoMunicipalDeSaudeRouter.get(
  '/:id',
  isAuth,
  planoMunicipalDeSaudeController.show,
);
planoMunicipalDeSaudeRouter.delete(
  '/:id',
  isAuth,
  planoMunicipalDeSaudeController.delete,
);

export default planoMunicipalDeSaudeRouter;
