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
const cache_1 = __importDefault(require("../../../../config/cache"));
const ComissaoEmergencia_1 = __importDefault(require("../../mongoose/ComissaoEmergencia"));
class ListComissaoEmergenciaService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedComissaoEmergencia = cache_1.default.get('comissaoEmergencia');
            let comissaoEmergencia = [];
            if (!cachedComissaoEmergencia) {
                comissaoEmergencia = yield ComissaoEmergencia_1.default.find();
                cache_1.default.set('comissaoEmergencia', JSON.stringify(comissaoEmergencia));
            }
            else {
                comissaoEmergencia = JSON.parse(cachedComissaoEmergencia);
            }
            return comissaoEmergencia;
        });
    }
}
exports.default = ListComissaoEmergenciaService;
