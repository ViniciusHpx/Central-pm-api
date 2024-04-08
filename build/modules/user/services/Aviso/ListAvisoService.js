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
const Avisos_1 = __importDefault(require("../../mongoose/Avisos"));
const cache_1 = __importDefault(require("../../../../config/cache"));
class ListAvisosService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedAvisos = cache_1.default.get('avisos');
            let avisos = [];
            if (!cachedAvisos) {
                avisos = yield Avisos_1.default.find();
                cache_1.default.set('avisos', JSON.stringify(avisos));
            }
            else {
                avisos = JSON.parse(cachedAvisos);
            }
            return avisos;
        });
    }
}
exports.default = ListAvisosService;
