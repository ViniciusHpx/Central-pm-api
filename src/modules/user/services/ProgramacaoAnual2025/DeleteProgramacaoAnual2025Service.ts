import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2025 from '../../mongoose/ProgramacaoAnual2025';

interface IRequest {
  id: string;
}
class DeleteProgramacaoAnual2025 {
  public async execute({ id }: IRequest): Promise<void> {
    const programacaoAnual2025Existe = await ProgramacaoAnual2025.findOne({
      _id: id,
    });

    if (!programacaoAnual2025Existe) {
      throw new AppError('PAS não encontrado');
    }

    Cache.del('programacaoAnual2025');
    await ProgramacaoAnual2025.deleteOne({ _id: id });
  }
}

export default DeleteProgramacaoAnual2025;
