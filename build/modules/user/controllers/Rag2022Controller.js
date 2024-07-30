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
const CreateRag2022Service_1 = __importDefault(require("../services/Rag2022/CreateRag2022Service"));
const ListRag2022Service_1 = __importDefault(require("../services/Rag2022/ListRag2022Service"));
const ShowRag2022Service_1 = __importDefault(require("../services/Rag2022/ShowRag2022Service"));
const DeleteRag2022Service_1 = __importDefault(require("../services/Rag2022/DeleteRag2022Service"));
class Rag2022Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createRag2022 = new CreateRag2022Service_1.default();
            const rag2022 = yield createRag2022.execute({
                titulo,
                link,
            });
            return res.json(rag2022);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRag2022 = new ListRag2022Service_1.default();
            const rag2022 = yield listRag2022.execute();
            return res.json(rag2022);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showRag2022 = new ShowRag2022Service_1.default();
            const rag2022 = yield showRag2022.execute({
                id,
            });
            return res.json(rag2022);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteRag2022 = new DeleteRag2022Service_1.default();
            const rag2022 = yield deleteRag2022.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = Rag2022Controller;
