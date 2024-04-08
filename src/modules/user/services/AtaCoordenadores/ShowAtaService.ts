import AppError from '../../../../shared/erros/AppError';
import AtaCoordenadores from '../../mongoose/AtaCoordenadores';

interface IAta {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowAtaService {
  public async execute({ id }: IRequest): Promise<IAta> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const ata = await AtaCoordenadores.findOne({ _id: id });
    if (!ata) {
      throw new AppError('Aviso não encontrado');
    }
    return ata;
  }
}

export default ShowAtaService;
