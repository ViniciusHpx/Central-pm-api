import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rdqa3 from '../../mongoose/Rdqa3';

interface IRequest {
  id: string;
}
class DeleteRdqa3 {
  public async execute({ id }: IRequest): Promise<void> {
    const rdqa3Existe = await Rdqa3.findOne({
      _id: id,
    });

    if (!rdqa3Existe) {
      throw new AppError('Link não encontrado');
    }

    Cache.del('rdqa3');
    await Rdqa3.deleteOne({ _id: id });
  }
}

export default DeleteRdqa3;
