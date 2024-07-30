import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rdqa2 from '../../mongoose/Rdqa2';

interface IRequest {
  id: string;
}
class DeleteRdqa2 {
  public async execute({ id }: IRequest): Promise<void> {
    const rdqa2Existe = await Rdqa2.findOne({
      _id: id,
    });

    if (!rdqa2Existe) {
      throw new AppError('Link não encontrado');
    }

    Cache.del('rdqa2');
    await Rdqa2.deleteOne({ _id: id });
  }
}

export default DeleteRdqa2;
