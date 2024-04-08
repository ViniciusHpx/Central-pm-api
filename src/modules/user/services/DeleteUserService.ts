import AppError from '../../../shared/erros/AppError';
import User from '../mongoose/User';
import Cache from '../../../config/cache';

interface IRequest {
  id: string;
}
class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const userExiste = await User.findOne({ _id: id });

    if (!userExiste) {
      throw new AppError('Usuário não encontrado');
    }
    if (userExiste.isAdmin) {
      throw new AppError('Não é possível excluir um usuário administrador');
    }
    await User.deleteOne({ _id: id });
    Cache.del('users');
  }
}

export default DeleteUserService;
