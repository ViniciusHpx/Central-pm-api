import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2022 from '../../mongoose/Rag2022';

interface IRag2022 {
  titulo: string;
  link: string;
}
class CreateRag2022Service {
  public async execute({ titulo, link }: IRag2022): Promise<IRag2022> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const rag2022 = new Rag2022({
      titulo,
      link,
    });

    await rag2022.save();
    Cache.del('rag2022');
    return rag2022;
  }
}

export default CreateRag2022Service;
