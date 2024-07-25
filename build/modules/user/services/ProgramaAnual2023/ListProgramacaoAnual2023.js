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
const ProgramacaoAnual2023_1 = __importDefault(require("../../mongoose/ProgramacaoAnual2023"));
class ListProgramacaoAnual2023Service {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedProgramacaoAnual2023 = cache_1.default.get('programacaoAnual2023');
            let programacaoAnual2023 = [];
            if (!cachedProgramacaoAnual2023) {
                programacaoAnual2023 = yield ProgramacaoAnual2023_1.default.find();
                cache_1.default.set('programacaoAnual2023', JSON.stringify(programacaoAnual2023));
            }
            else {
                programacaoAnual2023 = JSON.parse(cachedProgramacaoAnual2023);
            }
            return programacaoAnual2023;
        });
    }
}
exports.default = ListProgramacaoAnual2023Service;
