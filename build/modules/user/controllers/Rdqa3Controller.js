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
const CreateRdqa3Service_1 = __importDefault(require("../services/Rdqa3/CreateRdqa3Service"));
const ListRdqa3Service_1 = __importDefault(require("../services/Rdqa3/ListRdqa3Service"));
const ShowRdqa3Service_1 = __importDefault(require("../services/Rdqa3/ShowRdqa3Service"));
const DeleteRdqa3Service_1 = __importDefault(require("../services/Rdqa3/DeleteRdqa3Service"));
class Rdqa3Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createRdqa3 = new CreateRdqa3Service_1.default();
            const rdqa3 = yield createRdqa3.execute({
                titulo,
                link,
            });
            return res.json(rdqa3);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRdqa3 = new ListRdqa3Service_1.default();
            const rdqa3 = yield listRdqa3.execute();
            return res.json(rdqa3);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showRdqa3 = new ShowRdqa3Service_1.default();
            const rdqa3 = yield showRdqa3.execute({
                id,
            });
            return res.json(rdqa3);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteRdqa3 = new DeleteRdqa3Service_1.default();
            const rdqa3 = yield deleteRdqa3.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = Rdqa3Controller;
