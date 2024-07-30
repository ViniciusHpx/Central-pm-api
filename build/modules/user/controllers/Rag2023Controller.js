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
const CreateRag2023Service_1 = __importDefault(require("../services/Rag2023/CreateRag2023Service"));
const ListRag2023Service_1 = __importDefault(require("../services/Rag2023/ListRag2023Service"));
const ShowRag2023Service_1 = __importDefault(require("../services/Rag2023/ShowRag2023Service"));
const DeleteRag2023Service_1 = __importDefault(require("../services/Rag2023/DeleteRag2023Service"));
class Rag2023Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createRag2023 = new CreateRag2023Service_1.default();
            const rag2023 = yield createRag2023.execute({
                titulo,
                link,
            });
            return res.json(rag2023);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRag2023 = new ListRag2023Service_1.default();
            const rag2023 = yield listRag2023.execute();
            return res.json(rag2023);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showRag2023 = new ShowRag2023Service_1.default();
            const rag2023 = yield showRag2023.execute({
                id,
            });
            return res.json(rag2023);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteRag2023 = new DeleteRag2023Service_1.default();
            const rag2023 = yield deleteRag2023.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = Rag2023Controller;
