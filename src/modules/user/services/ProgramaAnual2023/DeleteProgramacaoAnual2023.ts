import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2023 from '../../mongoose/ProgramacaoAnual2023';

interface IRequest {
  id: string;
}
class DeleteProgramacaoAnual2023 {
  public async execute({ id }: IRequest): Promise<void> {
    const programacaoAnual2023Existe = await ProgramacaoAnual2023.findOne({
      _id: id,
    });

    if (!programacaoAnual2023Existe) {
      throw new AppError('PAS não encontrado');
    }

    Cache.del('programacaoAnual2023');
    await ProgramacaoAnual2023.deleteOne({ _id: id });
  }
}

export default DeleteProgramacaoAnual2023;
