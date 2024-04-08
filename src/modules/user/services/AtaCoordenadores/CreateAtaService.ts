import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import AtaCoordenadores from '../../mongoose/AtaCoordenadores';

interface IAta {
  titulo: string;
  link: string;
}
class CreateAtaService {
  public async execute({ titulo, link }: IAta): Promise<IAta> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const ata = new AtaCoordenadores({
      titulo,
      link,
    });

    await ata.save();
    Cache.del('ata');
    return ata;
  }
}

export default CreateAtaService;
