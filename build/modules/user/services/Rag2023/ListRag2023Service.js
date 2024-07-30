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
const Rag2023_1 = __importDefault(require("../../mongoose/Rag2023"));
class ListRag2023Service {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedRag2023 = cache_1.default.get('rag2023');
            let rag2023 = [];
            if (!cachedRag2023) {
                rag2023 = yield Rag2023_1.default.find();
                cache_1.default.set('rag2023', JSON.stringify(rag2023));
            }
            else {
                rag2023 = JSON.parse(cachedRag2023);
            }
            return rag2023;
        });
    }
}
exports.default = ListRag2023Service;
