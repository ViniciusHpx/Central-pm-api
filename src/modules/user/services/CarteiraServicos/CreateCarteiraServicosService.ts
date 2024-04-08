import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import CarteiraServicos from '../../mongoose/CarteiraServicos';

interface ICarteiraServicos {
  titulo: string;
  link: string;
}
class CreateCarteiraServicosService {
  public async execute({
    titulo,
    link,
  }: ICarteiraServicos): Promise<ICarteiraServicos> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const carteiraServicos = new CarteiraServicos({
      titulo,
      link,
    });

    await carteiraServicos.save();
    Cache.del('carteiraServicos');
    return carteiraServicos;
  }
}

export default CreateCarteiraServicosService;
