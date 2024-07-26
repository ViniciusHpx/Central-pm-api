import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2024 from '../../mongoose/ProgramacaoAnual2024';

interface IRequest {
  id: string;
}
class DeleteProgramacaoAnual2024 {
  public async execute({ id }: IRequest): Promise<void> {
    const programacaoAnual2024Existe = await ProgramacaoAnual2024.findOne({
      _id: id,
    });

    if (!programacaoAnual2024Existe) {
      throw new AppError('PAS não encontrado');
    }

    Cache.del('programacaoAnual2024');
    await ProgramacaoAnual2024.deleteOne({ _id: id });
  }
}

export default DeleteProgramacaoAnual2024;
