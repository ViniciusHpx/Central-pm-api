import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rdqa1 from '../../mongoose/Rdqa1';

interface IRequest {
  id: string;
}
class DeleteRdqa1 {
  public async execute({ id }: IRequest): Promise<void> {
    const rdqa1Existe = await Rdqa1.findOne({
      _id: id,
    });

    if (!rdqa1Existe) {
      throw new AppError('Link não encontrado');
    }

    Cache.del('rdqa1');
    await Rdqa1.deleteOne({ _id: id });
  }
}

export default DeleteRdqa1;
