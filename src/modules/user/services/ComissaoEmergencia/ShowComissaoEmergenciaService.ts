import AppError from '../../../../shared/erros/AppError';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';

interface IComissaoEmergencia {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowComissaoEmergenciaService {
  public async execute({ id }: IRequest): Promise<IComissaoEmergencia> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const comissaoEmergencia = await ComissaoEmergencia.findOne({
      _id: id,
    });
    if (!comissaoEmergencia) {
      throw new AppError('Aviso não encontrado');
    }
    return comissaoEmergencia;
  }
}

export default ShowComissaoEmergenciaService;
