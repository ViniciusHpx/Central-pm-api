import AppError from '../../../../shared/erros/AppError';
import Protocolo from '../../mongoose/Protocolo';

interface IProtocolo {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowProtocoloService {
  public async execute({ id }: IRequest): Promise<IProtocolo> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const protocolo = await Protocolo.findOne({ _id: id });
    if (!protocolo) {
      throw new AppError('Aviso não encontrado');
    }
    return protocolo;
  }
}

export default ShowProtocoloService;
