import AppError from '../../../../shared/erros/AppError';
import Protocolo from '../../mongoose/Protocolo';
import Cache from '../../../../config/cache';

interface IProtocolo {
  titulo: string;
  link: string;
}
class CreateProtocoloService {
  public async execute({ titulo, link }: IProtocolo): Promise<IProtocolo> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const protocolo = new Protocolo({
      titulo,
      link,
    });

    await protocolo.save();
    Cache.del('protocolo');
    return protocolo;
  }
}

export default CreateProtocoloService;
