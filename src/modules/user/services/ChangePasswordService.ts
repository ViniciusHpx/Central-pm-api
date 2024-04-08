import { verify } from 'jsonwebtoken';
import auth from '../../../config/auth';
import AppError from '../../../shared/erros/AppError';
import User from '../mongoose/User';
import { compare, hash } from 'bcrypt';
import Cache from '../../../config/cache';

interface IRequest {
  token: string;
  senha: string;
  senhaConfirm: string;
}
interface TokenPayload {
  id: string;
  nome: string;
  usuario: string;
  isAdmin: boolean;
  resetarSenha: boolean;
  permissoes: Array<string>;
}
class ChangePasswordService {
  public async execute({
    token,
    senha,
    senhaConfirm,
  }: IRequest): Promise<void> {
    if (!token || !senha || !senhaConfirm) {
      throw new AppError('token, senha ou senha de confirmação não enviados');
    }

    const tokenSplited = token.split(' ');
    var decodeToken;
    try {
      decodeToken = verify(tokenSplited[1], auth.jwt.secret);
    } catch {
      throw new AppError('Token invalido');
    }
    const { id, nome, usuario, isAdmin, resetarSenha, permissoes } =
      decodeToken as TokenPayload;

    const user = await User.findOne({ usuario });

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    if (senha.length < 8) {
      throw new AppError('A senha deve possuir no mínimo 8 caracteres');
    }

    if (senha !== senhaConfirm) {
      throw new AppError('As senhas não conferem');
    }
    const hashedPassw = await hash(senha, 8);

    await User.findByIdAndUpdate(id, {
      senha: hashedPassw,
      resetarSenha: false,
    });
    Cache.del('users');
  }
}

export default ChangePasswordService;
