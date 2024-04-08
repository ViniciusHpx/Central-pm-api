import protocoloRouter from '../../../modules/user/routes/protocolos.routes';
import avisoRouter from '../../../modules/user/routes/avisos.routes';
import usersRouter from '../../../modules/user/routes/users.routes';
import { Router } from 'express';
import ataRouter from '../../../modules/user/routes/ata.routes';
import carteiraServicosRouter from '../../../modules/user/routes/carteiraServicos.routes';
import comissaoEmergenciaRouter from '../../../modules/user/routes/comissaoEmergencia.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/avisos', avisoRouter);
routes.use('/protocolos', protocoloRouter);
routes.use('/ata', ataRouter);
routes.use('/carteiraservicos', carteiraServicosRouter);
routes.use('/comissaoemergencia', comissaoEmergenciaRouter);

export default routes;
