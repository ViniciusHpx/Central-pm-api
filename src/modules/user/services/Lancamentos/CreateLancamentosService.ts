import AppError from '../../../../shared/erros/AppError';
import Lancamentos from '../../mongoose/Lancamentos';
import Cache from '../../../../config/cache';

interface ILancamentos {
  titulo: string;
  link: string;
}
class CreateLancamentosService {
  public async execute({ titulo, link }: ILancamentos): Promise<ILancamentos> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const lancamentos = new Lancamentos({
      titulo,
      link,
    });

    await lancamentos.save();
    Cache.del('lancamentos');
    return lancamentos;
  }
}

export default CreateLancamentosService;
