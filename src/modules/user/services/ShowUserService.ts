import AppError from '../../../shared/erros/AppError';
import User from '../mongoose/User';
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
interface IRequest {
  id: string;
}
class ShowUsersService {
  public async execute({ id }: IRequest): Promise<IUser> {
    if (!id) {
      throw new AppError('ID do usuário não informado');
    }
    const user = await User.findOne({ _id: id });
    if (!user) {
      throw new AppError('Usuário não encontrado');
    }
    return user;
  }
}

export default ShowUsersService;
