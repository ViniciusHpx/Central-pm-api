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
const CreateRag2025Service_1 = __importDefault(require("../services/Rag2025/CreateRag2025Service"));
const ListRag2025Service_1 = __importDefault(require("../services/Rag2025/ListRag2025Service"));
const ShowRag2025Service_1 = __importDefault(require("../services/Rag2025/ShowRag2025Service"));
const DeleteRag2025Service_1 = __importDefault(require("../services/Rag2025/DeleteRag2025Service"));
class Rag2025Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createRag2025 = new CreateRag2025Service_1.default();
            const rag2025 = yield createRag2025.execute({
                titulo,
                link,
            });
            return res.json(rag2025);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRag2025 = new ListRag2025Service_1.default();
            const rag2025 = yield listRag2025.execute();
            return res.json(rag2025);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showRag2025 = new ShowRag2025Service_1.default();
            const rag2025 = yield showRag2025.execute({
                id,
            });
            return res.json(rag2025);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteRag2025 = new DeleteRag2025Service_1.default();
            const rag2025 = yield deleteRag2025.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = Rag2025Controller;
