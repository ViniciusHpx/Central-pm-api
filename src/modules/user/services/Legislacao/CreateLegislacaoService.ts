import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Legislacao from '../../mongoose/Legislacao';

interface ILegislacao {
  titulo: string;
  link: string;
}
class CreateLegislacaoService {
  public async execute({ titulo, link }: ILegislacao): Promise<ILegislacao> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const legislacao = new Legislacao({
      titulo,
      link,
    });

    await legislacao.save();
    Cache.del('legislacao');
    return legislacao;
  }
}

export default CreateLegislacaoService;
