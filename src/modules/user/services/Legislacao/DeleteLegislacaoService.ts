import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Legislacao from '../../mongoose/Legislacao';

interface IRequest {
  id: string;
}
class DeleteLegislacao {
  public async execute({ id }: IRequest): Promise<void> {
    const legislacaoExiste = await Legislacao.findOne({
      _id: id,
    });

    if (!legislacaoExiste) {
      throw new AppError('Legislação não encontrada');
    }

    Cache.del('legislacao');
    await Legislacao.deleteOne({ _id: id });
  }
}

export default DeleteLegislacao;
