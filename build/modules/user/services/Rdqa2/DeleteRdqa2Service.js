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
const AppError_1 = __importDefault(require("../../../../shared/erros/AppError"));
const cache_1 = __importDefault(require("../../../../config/cache"));
const Rdqa2_1 = __importDefault(require("../../mongoose/Rdqa2"));
class DeleteRdqa2 {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const rdqa2Existe = yield Rdqa2_1.default.findOne({
                _id: id,
            });
            if (!rdqa2Existe) {
                throw new AppError_1.default('Link não encontrado');
            }
            cache_1.default.del('rdqa2');
            yield Rdqa2_1.default.deleteOne({ _id: id });
        });
    }
}
exports.default = DeleteRdqa2;
