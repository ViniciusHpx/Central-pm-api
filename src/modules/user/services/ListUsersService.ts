import User from '../mongoose/User';
import Cache from '../../../config/cache';

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
class ListUsersService {
  public async execute(): Promise<IUser[]> {
    const cachedUsers = Cache.get<string>('users');

    let users: IUser[] = [];

    if (!cachedUsers) {
      users = await User.find();
      Cache.set('users', JSON.stringify(users));
    } else {
      users = JSON.parse(cachedUsers) as IUser[];
    }
    return users;
  }
}

export default ListUsersService;
