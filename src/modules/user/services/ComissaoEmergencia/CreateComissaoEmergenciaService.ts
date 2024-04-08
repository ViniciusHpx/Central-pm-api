import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';

interface IComissaoEmergencia {
  titulo: string;
  link: string;
}
class CreateComissaoEmergenciaService {
  public async execute({
    titulo,
    link,
  }: IComissaoEmergencia): Promise<IComissaoEmergencia> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const comissaoEmergencia = new ComissaoEmergencia({
      titulo,
      link,
    });

    await comissaoEmergencia.save();
    Cache.del('comissaoEmergencia');
    return comissaoEmergencia;
  }
}

export default CreateComissaoEmergenciaService;
