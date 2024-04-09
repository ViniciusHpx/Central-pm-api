import AppError from '../../../../shared/erros/AppError';
import Lancamentos from '../../mongoose/Lancamentos';

interface ILancamentos {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowLancamentosService {
  public async execute({ id }: IRequest): Promise<ILancamentos> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const lancamentos = await Lancamentos.findOne({ _id: id });
    if (!lancamentos) {
      throw new AppError('Aviso não encontrado');
    }
    return lancamentos;
  }
}

export default ShowLancamentosService;
