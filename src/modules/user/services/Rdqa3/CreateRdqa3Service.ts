import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rdqa3 from '../../mongoose/Rdqa3';

interface IRdqa3 {
  titulo: string;
  link: string;
}
class CreateRdqa3Service {
  public async execute({ titulo, link }: IRdqa3): Promise<IRdqa3> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const rdqa3 = new Rdqa3({
      titulo,
      link,
    });

    await rdqa3.save();
    Cache.del('rdqa3');
    return rdqa3;
  }
}

export default CreateRdqa3Service;
