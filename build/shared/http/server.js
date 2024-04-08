"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const AppError_1 = __importDefault(require("../erros/AppError"));
require("../mongoose/index");
const port = process.env.PORT || 3333;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*', // Aceita todas as origens
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Aceita todos os métodos
    },
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
//Middleware para tratamento de erros
app.use((error, req, res, next) => {
    //Se o erro for uma instancia da classe para tratamento de erros
    console.log(error.message);
    if (error instanceof AppError_1.default) {
        return res
            .status(error.codigoDoErro)
            .json({ status: 'erro', mensagem: error.mensagem });
    }
    //Se não for será um erro desconhecido
    return res
        .status(500)
        .json({ status: 'error', message: 'Erro interno no servidor' });
});
server.listen(port, () => {
    console.log(`Executando na porta ${port}`);
});
