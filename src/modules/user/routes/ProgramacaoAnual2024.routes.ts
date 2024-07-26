import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import ProgramacaoAnual2024Controller from '../controllers/ProgramacaoAnual2024Controller';

const programacaoAnual2024Router = Router();
const programacaoAnual2024Controller = new ProgramacaoAnual2024Controller();

programacaoAnual2024Router.post(
  '/',
  isAuth,
  programacaoAnual2024Controller.create,
);
programacaoAnual2024Router.get(
  '/',
  isAuth,
  programacaoAnual2024Controller.list,
);
programacaoAnual2024Router.get(
  '/:id',
  isAuth,
  programacaoAnual2024Controller.show,
);
programacaoAnual2024Router.delete(
  '/:id',
  isAuth,
  programacaoAnual2024Controller.delete,
);

export default programacaoAnual2024Router;
