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
const Rdqa1_1 = __importDefault(require("../../mongoose/Rdqa1"));
class ListRdqa1Service {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const cachedRdqa1 = cache_1.default.get('rdqa1');
            let rdqa1 = [];
            if (!cachedRdqa1) {
                rdqa1 = yield Rdqa1_1.default.find();
                cache_1.default.set('rdqa1', JSON.stringify(rdqa1));
            }
            else {
                rdqa1 = JSON.parse(cachedRdqa1);
            }
            return rdqa1;
        });
    }
}
exports.default = ListRdqa1Service;
