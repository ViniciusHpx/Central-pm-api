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
const Rag2024_1 = __importDefault(require("../../mongoose/Rag2024"));
class ListRag2024Service {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedRag2024 = cache_1.default.get('rag2024');
            let rag2024 = [];
            if (!cachedRag2024) {
                rag2024 = yield Rag2024_1.default.find();
                cache_1.default.set('rag2024', JSON.stringify(rag2024));
            }
            else {
                rag2024 = JSON.parse(cachedRag2024);
            }
            return rag2024;
        });
    }
}
exports.default = ListRag2024Service;
