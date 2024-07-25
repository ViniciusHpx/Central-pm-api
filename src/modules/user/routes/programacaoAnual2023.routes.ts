import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import ProgramacaoAnual2023Controller from '../controllers/ProgramacaoAnual2023Controller';

const programacaoAnual2023Router = Router();
const programacaoAnual2023Controller = new ProgramacaoAnual2023Controller();

programacaoAnual2023Router.post(
  '/',
  isAuth,
  programacaoAnual2023Controller.create,
);
programacaoAnual2023Router.get(
  '/',
  isAuth,
  programacaoAnual2023Controller.list,
);
programacaoAnual2023Router.get(
  '/:id',
  isAuth,
  programacaoAnual2023Controller.show,
);
programacaoAnual2023Router.delete(
  '/:id',
  isAuth,
  programacaoAnual2023Controller.delete,
);

export default programacaoAnual2023Router;
