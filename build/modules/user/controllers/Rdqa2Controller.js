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
const CreateRdqa2Service_1 = __importDefault(require("../services/Rdqa2/CreateRdqa2Service"));
const ListRdqa2Service_1 = __importDefault(require("../services/Rdqa2/ListRdqa2Service"));
const ShowRdqa2Service_1 = __importDefault(require("../services/Rdqa2/ShowRdqa2Service"));
const DeleteRdqa2Service_1 = __importDefault(require("../services/Rdqa2/DeleteRdqa2Service"));
class Rdqa2Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createRdqa2 = new CreateRdqa2Service_1.default();
            const rdqa2 = yield createRdqa2.execute({
                titulo,
                link,
            });
            return res.json(rdqa2);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRdqa2 = new ListRdqa2Service_1.default();
            const rdqa2 = yield listRdqa2.execute();
            return res.json(rdqa2);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showRdqa2 = new ShowRdqa2Service_1.default();
            const rdqa2 = yield showRdqa2.execute({
                id,
            });
            return res.json(rdqa2);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteRdqa2 = new DeleteRdqa2Service_1.default();
            const rdqa2 = yield deleteRdqa2.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = Rdqa2Controller;
