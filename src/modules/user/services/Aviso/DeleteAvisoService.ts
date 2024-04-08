import AppError from '../../../../shared/erros/AppError';
import Aviso from '../../mongoose/Avisos';
import Cache from '../../../../config/cache';

interface IRequest {
  id: string;
}
class DeleteAvisoService {
  public async execute({ id }: IRequest): Promise<void> {
    const avisoExiste = await Aviso.findOne({ _id: id });

    if (!avisoExiste) {
      throw new AppError('Aviso não encontrado');
    }

    Cache.del('avisos');
    await Aviso.deleteOne({ _id: id });
  }
}

export default DeleteAvisoService;
