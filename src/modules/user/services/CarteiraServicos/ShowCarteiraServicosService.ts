import AppError from '../../../../shared/erros/AppError';
import CarteiraServicos from '../../mongoose/CarteiraServicos';

interface ICarteiraServicos {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowCarteiraServicosService {
  public async execute({ id }: IRequest): Promise<ICarteiraServicos> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const carteiraServico = await CarteiraServicos.findOne({ _id: id });
    if (!carteiraServico) {
      throw new AppError('Carteira de serviços não encontrado');
    }
    return carteiraServico;
  }
}

export default ShowCarteiraServicosService;
