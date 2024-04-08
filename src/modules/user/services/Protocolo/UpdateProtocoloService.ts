import AppError from '../../../../shared/erros/AppError';
import Protocolo from '../../mongoose/Protocolo';
import Cache from '../../../../config/cache';

interface IProtocolo {
  id?: string;
  titulo: string;
  link: string;
}

class UpdateProtocoloService {
  public async execute({ id, titulo, link }: IProtocolo): Promise<IProtocolo> {
    if (!id) {
      throw new AppError('Aviso não informado');
    }
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }
    const protocoloExiste = await Protocolo.findById(id);
    if (!protocoloExiste) {
      throw new AppError('Protocolo não encontrado');
    }

    await Protocolo.findByIdAndUpdate(id, {
      titulo,
      link,
    });
    const protocoloAtualizado = await Protocolo.findOne({ _id: id });

    if (!protocoloAtualizado) {
      throw new AppError('Erro ao atualizar o aviso');
    }
    Cache.del('protocolo');

    return protocoloAtualizado;
  }
}

export default UpdateProtocoloService;
