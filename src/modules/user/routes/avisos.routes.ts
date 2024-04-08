import { Router } from 'express';
import AvisoController from '../controllers/AvisoController';
import isAuth from '../../../shared/http/middlewares/isAuth';

const avisoRouter = Router();
const avisoController = new AvisoController();

avisoRouter.post('/', isAuth, avisoController.create);
avisoRouter.get('/', isAuth, avisoController.list);
avisoRouter.get('/:id', isAuth, avisoController.show);
avisoRouter.delete('/:id', isAuth, avisoController.delete);
avisoRouter.put('/', isAuth, avisoController.update);

export default avisoRouter;
