import AppError from '../../../../shared/erros/AppError';
import Legislacao from '../../mongoose/Legislacao';

interface ILegislacao {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowLegislacaoService {
  public async execute({ id }: IRequest): Promise<ILegislacao> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const legislacao = await Legislacao.findOne({
      _id: id,
    });
    if (!legislacao) {
      throw new AppError('Link não encontrado');
    }
    return legislacao;
  }
}

export default ShowLegislacaoService;
