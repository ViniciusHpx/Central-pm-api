import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import ProgramacaoAnual2025Controller from '../controllers/ProgramacaoAnual2025Controller';

const programacaoAnual2025Router = Router();
const programacaoAnual2025Controller = new ProgramacaoAnual2025Controller();

programacaoAnual2025Router.post(
  '/',
  isAuth,
  programacaoAnual2025Controller.create,
);
programacaoAnual2025Router.get(
  '/',
  isAuth,
  programacaoAnual2025Controller.list,
);
programacaoAnual2025Router.get(
  '/:id',
  isAuth,
  programacaoAnual2025Controller.show,
);
programacaoAnual2025Router.delete(
  '/:id',
  isAuth,
  programacaoAnual2025Controller.delete,
);

export default programacaoAnual2025Router;
