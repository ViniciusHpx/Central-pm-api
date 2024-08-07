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
const Rag2025_1 = __importDefault(require("../../mongoose/Rag2025"));
class ListRag2025Service {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedRag2025 = cache_1.default.get('rag2025');
            let rag2025 = [];
            if (!cachedRag2025) {
                rag2025 = yield Rag2025_1.default.find();
                cache_1.default.set('rag2025', JSON.stringify(rag2025));
            }
            else {
                rag2025 = JSON.parse(cachedRag2025);
            }
            return rag2025;
        });
    }
}
exports.default = ListRag2025Service;
