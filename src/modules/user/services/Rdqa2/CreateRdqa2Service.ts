import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rdqa2 from '../../mongoose/Rdqa2';

interface IRdqa2 {
  titulo: string;
  link: string;
}
class CreateRdqa2Service {
  public async execute({ titulo, link }: IRdqa2): Promise<IRdqa2> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const rdqa2 = new Rdqa2({
      titulo,
      link,
    });

    await rdqa2.save();
    Cache.del('rdqa2');
    return rdqa2;
  }
}

export default CreateRdqa2Service;
