import protocoloRouter from '../../../modules/user/routes/protocolos.routes';
import avisoRouter from '../../../modules/user/routes/avisos.routes';
import usersRouter from '../../../modules/user/routes/users.routes';
import { Router } from 'express';
import ataRouter from '../../../modules/user/routes/ata.routes';
import carteiraServicosRouter from '../../../modules/user/routes/carteiraServicos.routes';
import comissaoEmergenciaRouter from '../../../modules/user/routes/comissaoEmergencia.routes';
import lancamentosRouter from '../../../modules/user/routes/lancamentos';
import planoMunicipalDeSaudeRouter from '../../../modules/user/routes/planoMunicipalDeSaude.routes';
import programacaoAnual2022Router from '../../../modules/user/routes/programacaoAnual2022.routes';
import programacaoAnual2023Router from '../../../modules/user/routes/programacaoAnual2023.routes';
import programacaoAnual2024Router from '../../../modules/user/routes/ProgramacaoAnual2024.routes';
import programacaoAnual2025Router from '../../../modules/user/routes/ProgramacaoAnual2025.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/avisos', avisoRouter);
routes.use('/protocolos', protocoloRouter);
routes.use('/ata', ataRouter);
routes.use('/carteiraservicos', carteiraServicosRouter);
routes.use('/comissaoemergencia', comissaoEmergenciaRouter);
routes.use('/lancamentos', lancamentosRouter);
routes.use('/planoMunicipalDeSaude', planoMunicipalDeSaudeRouter);
routes.use('/programacaoAnual2022', programacaoAnual2022Router);
routes.use('/programacaoAnual2023', programacaoAnual2023Router);
routes.use('/programacaoAnual2024', programacaoAnual2024Router);
routes.use('/programacaoAnual2025', programacaoAnual2025Router);

export default routes;
