import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';
import routes from './routes';
import AppError from '../erros/AppError';
import '../mongoose/index';

const port = process.env.PORT || 3333;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Aceita todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Aceita todos os métodos
  },
});
app.use(cors());
app.use(express.json());
app.use(routes);

//Middleware para tratamento de erros
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  //Se o erro for uma instancia da classe para tratamento de erros
  console.log(error.message);
  if (error instanceof AppError) {
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
