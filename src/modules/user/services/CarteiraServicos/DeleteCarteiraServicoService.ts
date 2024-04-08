import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import CarteiraServicos from '../../mongoose/CarteiraServicos';

interface IRequest {
  id: string;
}
class DeleteCarteiraServicoService {
  public async execute({ id }: IRequest): Promise<void> {
    const carteiraServicoExiste = await CarteiraServicos.findOne({ _id: id });

    if (!carteiraServicoExiste) {
      throw new AppError('Carteira de Servicos não encontrado');
    }

    Cache.del('carteiraServicos');
    await CarteiraServicos.deleteOne({ _id: id });
  }
}

export default DeleteCarteiraServicoService;
