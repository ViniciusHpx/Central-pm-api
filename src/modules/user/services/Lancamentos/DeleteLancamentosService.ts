import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Lancamentos from '../../mongoose/Lancamentos';

interface IRequest {
  id: string;
}
class DeleteLancamentosService {
  public async execute({ id }: IRequest): Promise<void> {
    const lancamentosExiste = await Lancamentos.findOne({ _id: id });

    if (!lancamentosExiste) {
      throw new AppError('Aviso não encontrado');
    }

    Cache.del('lancamentos');
    await Lancamentos.deleteOne({ _id: id });
  }
}

export default DeleteLancamentosService;
