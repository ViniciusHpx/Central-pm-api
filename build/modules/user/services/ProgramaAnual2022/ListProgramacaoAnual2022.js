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
const ProgramacaoAnual2022_1 = __importDefault(require("../../mongoose/ProgramacaoAnual2022"));
class ListProgramacaoAnual2022Service {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedProgramacaoAnual2022 = cache_1.default.get('programacaoAnual2022');
            let programacaoAnual2022 = [];
            if (!cachedProgramacaoAnual2022) {
                programacaoAnual2022 = yield ProgramacaoAnual2022_1.default.find();
                cache_1.default.set('programacaoAnual2022', JSON.stringify(programacaoAnual2022));
            }
            else {
                programacaoAnual2022 = JSON.parse(cachedProgramacaoAnual2022);
            }
            return programacaoAnual2022;
        });
    }
}
exports.default = ListProgramacaoAnual2022Service;
