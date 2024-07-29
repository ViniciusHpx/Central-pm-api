import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rdqa1 from '../../mongoose/Rdqa1';

interface IRdqa1 {
  titulo: string;
  link: string;
}
class CreateRdqa1Service {
  public async execute({ titulo, link }: IRdqa1): Promise<IRdqa1> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const rdqa1 = new Rdqa1({
      titulo,
      link,
    });

    await rdqa1.save();
    Cache.del('rdqa1');
    return rdqa1;
  }
}

export default CreateRdqa1Service;
