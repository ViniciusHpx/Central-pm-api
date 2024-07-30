import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2023 from '../../mongoose/Rag2023';

interface IRag2023 {
  titulo: string;
  link: string;
}
class CreateRag2023Service {
  public async execute({ titulo, link }: IRag2023): Promise<IRag2023> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const rag2023 = new Rag2023({
      titulo,
      link,
    });

    await rag2023.save();
    Cache.del('rag2023');
    return rag2023;
  }
}

export default CreateRag2023Service;
