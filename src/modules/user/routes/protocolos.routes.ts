import { Router } from 'express';
import ProtocoloController from '../controllers/ProtocoloController';
import isAuth from '../../../shared/http/middlewares/isAuth';

const protocoloRouter = Router();
const protocoloController = new ProtocoloController();

protocoloRouter.post('/', isAuth, protocoloController.create);
protocoloRouter.get('/', isAuth, protocoloController.list);
protocoloRouter.get('/:id', isAuth, protocoloController.show);
protocoloRouter.delete('/:id', isAuth, protocoloController.delete);
protocoloRouter.put('/', isAuth, protocoloController.update);

export default protocoloRouter;
