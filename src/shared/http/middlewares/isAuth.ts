import auth from '../../../config/auth';
import AppError from '../../erros/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  nome: string;
  usuario: string;
  isAdmin: boolean;
  resetarSenha: boolean;
  permissoes: Array<string>;
}

function isAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError('Não existe um token enviado');
  }
  // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiRmVsaXBlMyIsImVtYWlsIjoidGVzdGUz
  const token = authHeader.split(' ');

  try {
    const decodeToken = verify(token[1], auth.jwt.secret);
    //const sub = decodeToken.sub;
    const { id, nome, usuario, isAdmin, resetarSenha, permissoes } =
      decodeToken as TokenPayload;

    //Utilizando a sobrescita do objeto request
    req.user = {
      id: id,
      nome: nome,
      usuario: usuario,
      isAdmin: isAdmin,
      resetarSenha: resetarSenha,
      permissoes: permissoes,
    };
    return next();
  } catch {
    throw new AppError('Token inválido');
  }
}

export default isAuth;
