import AppError from '../../../../shared/erros/AppError';
import Aviso from '../../mongoose/Avisos';

interface IAvisos {
  titulo: string;
  tipo: string;
  conteudo: string;
  data: string;
}
interface IRequest {
  id: string;
}
class ShowAvisoService {
  public async execute({ id }: IRequest): Promise<IAvisos> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const aviso = await Aviso.findOne({ _id: id });
    if (!aviso) {
      throw new AppError('Aviso não encontrado');
    }
    return aviso;
  }
}

export default ShowAvisoService;
