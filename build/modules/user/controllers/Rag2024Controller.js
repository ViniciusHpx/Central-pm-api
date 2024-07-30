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
const CreateRag2024Service_1 = __importDefault(require("../services/Rag2024/CreateRag2024Service"));
const ListRag2024Service_1 = __importDefault(require("../services/Rag2024/ListRag2024Service"));
const ShowRag2024Service_1 = __importDefault(require("../services/Rag2024/ShowRag2024Service"));
const DeleteRag2024Service_1 = __importDefault(require("../services/Rag2024/DeleteRag2024Service"));
class Rag2024Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createRag2024 = new CreateRag2024Service_1.default();
            const rag2024 = yield createRag2024.execute({
                titulo,
                link,
            });
            return res.json(rag2024);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRag2024 = new ListRag2024Service_1.default();
            const rag2024 = yield listRag2024.execute();
            return res.json(rag2024);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showRag2024 = new ShowRag2024Service_1.default();
            const rag2024 = yield showRag2024.execute({
                id,
            });
            return res.json(rag2024);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteRag2024 = new DeleteRag2024Service_1.default();
            const rag2024 = yield deleteRag2024.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = Rag2024Controller;
