import { verify } from 'jsonwebtoken';
import auth from '../../../config/auth';
import AppError from '../../../shared/erros/AppError';
import User from '../mongoose/User';

interface IRequest {
  token: string;
}
interface IUser {
  nome: string;
  usuario: string;
  senha: string;
  confirmSenha?: string;
  unidade: string;
  setor: string;
  funcao: string;
  contato: string;
  isAdmin?: boolean;
  resetarSenha?: boolean;
  permissoes?: Array<string>;
}
interface TokenPayload {
  id: string;
  nome: string;
  usuario: string;
  isAdmin: boolean;
  resetarSenha: boolean;
  permissoes: Array<string>;
}
class CheckAuthService {
  public async execute({ token }: IRequest): Promise<IUser> {
    if (!token) {
      throw new AppError('Token não informado');
    }

    const tokenSplited = token.split(' ');
    let decodeToken;
    try {
      decodeToken = verify(tokenSplited[1], auth.jwt.secret);
    } catch {
      throw new AppError('Token invalido');
    }
    const { id, nome, usuario, isAdmin, resetarSenha, permissoes } =
      decodeToken as TokenPayload;

    const user = await User.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    return user;
  }
}

export default CheckAuthService;
