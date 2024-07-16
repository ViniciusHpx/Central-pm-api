"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreatePlanoMunicipalDeSaude_1 = __importDefault(require("../services/PlanoMunicipalDeSaude/CreatePlanoMunicipalDeSaude"));
const ListPlanoMunicipalDeSaude_1 = __importDefault(require("../services/PlanoMunicipalDeSaude/ListPlanoMunicipalDeSaude"));
const ShowPlanoMunicipalDeSaude_1 = __importDefault(require("../services/PlanoMunicipalDeSaude/ShowPlanoMunicipalDeSaude"));
const DeletePlanoMunicipalDeSaude_1 = __importDefault(require("../services/PlanoMunicipalDeSaude/DeletePlanoMunicipalDeSaude"));
class PlanoMunicipalDeSaudeController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createPlanoMunicipalDeSaude = new CreatePlanoMunicipalDeSaude_1.default();
            const planoMunicipalDeSaude = yield createPlanoMunicipalDeSaude.execute({
                titulo,
                link,
            });
            return res.json(planoMunicipalDeSaude);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listPlanoMunicipalDeSaude = new ListPlanoMunicipalDeSaude_1.default();
            const planoMunicipalDeSaude = yield listPlanoMunicipalDeSaude.execute();
            return res.json(planoMunicipalDeSaude);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showPlanoMunicipalDeSaude = new ShowPlanoMunicipalDeSaude_1.default();
            const planoMunicipalDeSaude = yield showPlanoMunicipalDeSaude.execute({
                id,
            });
            return res.json(planoMunicipalDeSaude);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deletePlanoMunicipalDeSaude = new DeletePlanoMunicipalDeSaude_1.default();
            const planoMunicipalDeSaude = yield deletePlanoMunicipalDeSaude.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = PlanoMunicipalDeSaudeController;
