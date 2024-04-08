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
const AtaCoordenadores_1 = __importDefault(require("../../mongoose/AtaCoordenadores"));
const cache_1 = __importDefault(require("../../../../config/cache"));
class ListAtaService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedAta = cache_1.default.get('ata');
            let atas = [];
            if (!cachedAta) {
                atas = yield AtaCoordenadores_1.default.find();
                cache_1.default.set('ata', JSON.stringify(atas));
            }
            else {
                atas = JSON.parse(cachedAta);
            }
            return atas;
        });
    }
}
exports.default = ListAtaService;
