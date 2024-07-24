import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import ProgramacaoAnual2022Controller from '../controllers/ProgramacaoAnual2022Controller';

const programacaoAnual2022Router = Router();
const programacaoAnual2022Controller = new ProgramacaoAnual2022Controller();

programacaoAnual2022Router.post(
  '/',
  isAuth,
  programacaoAnual2022Controller.create,
);
programacaoAnual2022Router.get(
  '/',
  isAuth,
  programacaoAnual2022Controller.list,
);
programacaoAnual2022Router.get(
  '/:id',
  isAuth,
  programacaoAnual2022Controller.show,
);
programacaoAnual2022Router.delete(
  '/:id',
  isAuth,
  programacaoAnual2022Controller.delete,
);

export default programacaoAnual2022Router;
