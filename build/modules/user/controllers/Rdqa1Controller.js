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
const CreateRdqa1Service_1 = __importDefault(require("../services/Rdqa1/CreateRdqa1Service"));
const ListRdqa1Service_1 = __importDefault(require("../services/Rdqa1/ListRdqa1Service"));
const ShowRdqa1Service_1 = __importDefault(require("../services/Rdqa1/ShowRdqa1Service"));
const DeleteRdqa1Service_1 = __importDefault(require("../services/Rdqa1/DeleteRdqa1Service"));
class Rdqa1Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, link } = req.body;
            const createRdqa1 = new CreateRdqa1Service_1.default();
            const rdqa1 = yield createRdqa1.execute({
                titulo,
                link,
            });
            return res.json(rdqa1);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listRdqa1 = new ListRdqa1Service_1.default();
            const rdqa1 = yield listRdqa1.execute();
            return res.json(rdqa1);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const showRdqa1 = new ShowRdqa1Service_1.default();
            const rdqa1 = yield showRdqa1.execute({
                id,
            });
            return res.json(rdqa1);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleteRdqa1 = new DeleteRdqa1Service_1.default();
            const rdqa1 = yield deleteRdqa1.execute({
                id,
            });
            return res.json();
        });
    }
}
exports.default = Rdqa1Controller;
