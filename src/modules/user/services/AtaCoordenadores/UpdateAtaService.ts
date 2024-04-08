import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import AtaCoordenadores from '../../mongoose/AtaCoordenadores';

interface IAta {
  id?: string;
  titulo: string;
  link: string;
}

class UpdateAtaService {
  public async execute({ id, titulo, link }: IAta): Promise<IAta> {
    if (!id) {
      throw new AppError('Ata não informada');
    }
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }
    const ataExiste = await AtaCoordenadores.findById(id);
    if (!ataExiste) {
      throw new AppError('Ata não encontrado');
    }

    await AtaCoordenadores.findByIdAndUpdate(id, {
      titulo,
      link,
    });
    const ataAtualizado = await AtaCoordenadores.findOne({ _id: id });

    if (!ataAtualizado) {
      throw new AppError('Erro ao atualizar o aviso');
    }
    Cache.del('ata');

    return ataAtualizado;
  }
}

export default UpdateAtaService;
