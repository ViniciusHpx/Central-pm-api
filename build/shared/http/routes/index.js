"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protocolos_routes_1 = __importDefault(require("../../../modules/user/routes/protocolos.routes"));
const avisos_routes_1 = __importDefault(require("../../../modules/user/routes/avisos.routes"));
const users_routes_1 = __importDefault(require("../../../modules/user/routes/users.routes"));
const express_1 = require("express");
const ata_routes_1 = __importDefault(require("../../../modules/user/routes/ata.routes"));
const carteiraServicos_routes_1 = __importDefault(require("../../../modules/user/routes/carteiraServicos.routes"));
const comissaoEmergencia_routes_1 = __importDefault(require("../../../modules/user/routes/comissaoEmergencia.routes"));
const lancamentos_1 = __importDefault(require("../../../modules/user/routes/lancamentos"));
const planoMunicipalDeSaude_routes_1 = __importDefault(require("../../../modules/user/routes/planoMunicipalDeSaude.routes"));
const programacaoAnual2022_routes_1 = __importDefault(require("../../../modules/user/routes/programacaoAnual2022.routes"));
const programacaoAnual2023_routes_1 = __importDefault(require("../../../modules/user/routes/programacaoAnual2023.routes"));
const ProgramacaoAnual2024_routes_1 = __importDefault(require("../../../modules/user/routes/ProgramacaoAnual2024.routes"));
const ProgramacaoAnual2025_routes_1 = __importDefault(require("../../../modules/user/routes/ProgramacaoAnual2025.routes"));
const rdqa1_routes_1 = __importDefault(require("../../../modules/user/routes/rdqa1.routes"));
const rdqa2_routes_1 = __importDefault(require("../../../modules/user/routes/rdqa2.routes"));
const rdqa3_routes_1 = __importDefault(require("../../../modules/user/routes/rdqa3.routes"));
const rag2022_routes_1 = __importDefault(require("../../../modules/user/routes/rag2022.routes"));
const rag2023_routes_1 = __importDefault(require("../../../modules/user/routes/rag2023.routes"));
const rag2024_routes_1 = __importDefault(require("../../../modules/user/routes/rag2024.routes"));
const rag2025_routes_1 = __importDefault(require("../../../modules/user/routes/rag2025.routes"));
const legislacao_routes_1 = __importDefault(require("../../../modules/user/routes/legislacao.routes"));
const routes = (0, express_1.Router)();
routes.use('/users', users_routes_1.default);
routes.use('/avisos', avisos_routes_1.default);
routes.use('/protocolos', protocolos_routes_1.default);
routes.use('/ata', ata_routes_1.default);
routes.use('/carteiraservicos', carteiraServicos_routes_1.default);
routes.use('/comissaoemergencia', comissaoEmergencia_routes_1.default);
routes.use('/lancamentos', lancamentos_1.default);
routes.use('/planoMunicipalDeSaude', planoMunicipalDeSaude_routes_1.default);
routes.use('/programacaoAnual2022', programacaoAnual2022_routes_1.default);
routes.use('/programacaoAnual2023', programacaoAnual2023_routes_1.default);
routes.use('/programacaoAnual2024', ProgramacaoAnual2024_routes_1.default);
routes.use('/programacaoAnual2025', ProgramacaoAnual2025_routes_1.default);
routes.use('/rdqa1', rdqa1_routes_1.default);
routes.use('/rdqa2', rdqa2_routes_1.default);
routes.use('/rdqa3', rdqa3_routes_1.default);
routes.use('/rag2022', rag2022_routes_1.default);
routes.use('/rag2023', rag2023_routes_1.default);
routes.use('/rag2024', rag2024_routes_1.default);
routes.use('/rag2025', rag2025_routes_1.default);
routes.use('/legislacao', legislacao_routes_1.default);
exports.default = routes;
