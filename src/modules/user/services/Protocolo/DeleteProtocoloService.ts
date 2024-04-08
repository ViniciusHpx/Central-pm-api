import AppError from '../../../../shared/erros/AppError';
import Protocolo from '../../mongoose/Protocolo';
import Cache from '../../../../config/cache';

interface IRequest {
  id: string;
}
class DeleteProtocoloService {
  public async execute({ id }: IRequest): Promise<void> {
    const protocoloExiste = await Protocolo.findOne({ _id: id });

    if (!protocoloExiste) {
      throw new AppError('Aviso não encontrado');
    }

    Cache.del('protocolo');
    await Protocolo.deleteOne({ _id: id });
  }
}

export default DeleteProtocoloService;
