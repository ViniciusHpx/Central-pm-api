import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2024 from '../../mongoose/Rag2024';

interface IRag2024 {
  titulo: string;
  link: string;
}
class CreateRag2024Service {
  public async execute({ titulo, link }: IRag2024): Promise<IRag2024> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const rag2024 = new Rag2024({
      titulo,
      link,
    });

    await rag2024.save();
    Cache.del('rag2024');
    return rag2024;
  }
}

export default CreateRag2024Service;
