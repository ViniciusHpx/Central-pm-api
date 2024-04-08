import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';

interface IRequest {
  id: string;
}
class DeleteComissaoEmergenciaService {
  public async execute({ id }: IRequest): Promise<void> {
    const comissaoEmergenciaExiste = await ComissaoEmergencia.findOne({
      _id: id,
    });

    if (!comissaoEmergenciaExiste) {
      throw new AppError('Aviso não encontrado');
    }

    Cache.del('comissaoEmergencia');
    await ComissaoEmergencia.deleteOne({ _id: id });
  }
}

export default DeleteComissaoEmergenciaService;
