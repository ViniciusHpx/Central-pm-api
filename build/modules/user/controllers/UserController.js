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
const CreateUserService_1 = __importDefault(require("../services/CreateUserService"));
const ListUsersService_1 = __importDefault(require("../services/ListUsersService"));
const ShowUserService_1 = __importDefault(require("../services/ShowUserService"));
const DeleteUserService_1 = __importDefault(require("../services/DeleteUserService"));
const UpdateUserService_1 = __importDefault(require("../services/UpdateUserService"));
const CreateSessionService_1 = __importDefault(require("../services/CreateSessionService"));
const ChangePasswordService_1 = __importDefault(require("../services/ChangePasswordService"));
const CheckAuthService_1 = __importDefault(require("../services/CheckAuthService"));
const AppError_1 = __importDefault(require("../../../shared/erros/AppError"));
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.user.isAdmin) {
                throw new AppError_1.default('Usuário sem permissão');
            }
            const { nome, usuario, unidade, senha, confirmSenha, setor, funcao, contato, isAdmin, resetarSenha, permissoes, } = req.body;
            const createUser = new CreateUserService_1.default();
            const user = yield createUser.execute({
                nome,
                usuario,
                senha,
                confirmSenha,
                unidade,
                setor,
                funcao,
                contato,
                isAdmin,
                resetarSenha,
                permissoes,
            });
            return res.json(user);
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.user.isAdmin) {
                throw new AppError_1.default('Usuário sem permissão');
            }
            const listUser = new ListUsersService_1.default();
            const users = yield listUser.execute();
            return res.json(users);
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.user.isAdmin) {
                throw new AppError_1.default('Usuário sem permissão');
            }
            const { id } = req.params;
            const showUser = new ShowUserService_1.default();
            const user = yield showUser.execute({ id });
            return res.json(user);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.user.isAdmin) {
                throw new AppError_1.default('Usuário sem permissão');
            }
            const { id } = req.params;
            const deleteUser = new DeleteUserService_1.default();
            const user = yield deleteUser.execute({ id });
            return res.json();
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.user.isAdmin) {
                throw new AppError_1.default('Usuário sem permissão');
            }
            const { id, nome, usuario, senha, confirmSenha, unidade, setor, funcao, contato, isAdmin, resetarSenha, permissoes, } = req.body;
            const updateUser = new UpdateUserService_1.default();
            const user = yield updateUser.execute({
                id,
                nome,
                usuario,
                senha,
                confirmSenha,
                unidade,
                setor,
                funcao,
                contato,
                isAdmin,
                resetarSenha,
                permissoes,
            });
            return res.json(user);
        });
    }
    createSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario, senha } = req.body;
            const createSession = new CreateSessionService_1.default();
            const session = yield createSession.execute({ usuario, senha });
            return res.json(session);
        });
    }
    changePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, senha, senhaConfirm } = req.body;
            const changePassword = new ChangePasswordService_1.default();
            yield changePassword.execute({ token, senha, senhaConfirm });
            return res.json();
        });
    }
    checkSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req.body;
            const checkSession = new CheckAuthService_1.default();
            const user = yield checkSession.execute({ token });
            return res.json(user);
        });
    }
}
exports.default = UserController;
