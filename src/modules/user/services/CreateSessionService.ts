import AppError from '../../../shared/erros/AppError';
import User from '../mongoose/User';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../config/auth';
interface IRequest {
  usuario: string;
  senha: string;
}
interface IUser {
  nome: string;
  usuario: string;
  senha: string;
  unidade: string;
  setor: string;
  funcao: string;
  contato: string;
  isAdmin: boolean;
  resetarSenha: boolean;
  permissoes: Array<string>;
}
interface IResponse {
  token: string;
  user: IUser;
}

class CreateSessionService {
  public async execute({ usuario, senha }: IRequest): Promise<IResponse> {
    if (!usuario) {
      throw new AppError('Usuário não informado');
    }
    if (!senha) {
      throw new AppError('Senha não informada');
    }
    usuario = usuario.toUpperCase();
    const user = await User.findOne({ usuario });
    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    const userCompare = await compare(senha, user.senha);
    if (!userCompare) {
      throw new AppError('Senha incorreta', 401);
    }

    const token = sign(
      {
        id: user._id,
        nome: user.nome,
        usuario: user.usuario,
        isAdmin: user.isAdmin,
        resetarSenha: user.resetarSenha,
        permissoes: user.permissoes,
      },
      authConfig.jwt.secret,
      {
        expiresIn: authConfig.jwt.expiresIn,
      },
    );
    return { user, token };
  }
}

export default CreateSessionService;
