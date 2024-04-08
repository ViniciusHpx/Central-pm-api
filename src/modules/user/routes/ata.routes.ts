import { Router } from 'express';
import isAuth from '../../../shared/http/middlewares/isAuth';
import AtaCoordenadoresController from '../controllers/AtaCoordenadoresController';

const ataRouter = Router();
const ataController = new AtaCoordenadoresController();

ataRouter.post('/', isAuth, ataController.create);
ataRouter.get('/', isAuth, ataController.list);
ataRouter.get('/:id', isAuth, ataController.show);
ataRouter.delete('/:id', isAuth, ataController.delete);
ataRouter.put('/', isAuth, ataController.update);

export default ataRouter;
