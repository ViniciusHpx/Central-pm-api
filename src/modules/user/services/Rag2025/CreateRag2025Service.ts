import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2025 from '../../mongoose/Rag2025';

interface IRag2025 {
  titulo: string;
  link: string;
}
class CreateRag2025Service {
  public async execute({ titulo, link }: IRag2025): Promise<IRag2025> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const rag2025 = new Rag2025({
      titulo,
      link,
    });

    await rag2025.save();
    Cache.del('rag2025');
    return rag2025;
  }
}

export default CreateRag2025Service;
