import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2022 from '../../mongoose/ProgramacaoAnual2022';

interface IRequest {
  id: string;
}
class DeleteProgramacaoAnual2022 {
  public async execute({ id }: IRequest): Promise<void> {
    const programacaoAnual2022Existe = await ProgramacaoAnual2022.findOne({
      _id: id,
    });

    if (!programacaoAnual2022Existe) {
      throw new AppError('Plano Municipal não encontrado');
    }

    Cache.del('programacaoAnual2022');
    await ProgramacaoAnual2022.deleteOne({ _id: id });
  }
}

export default DeleteProgramacaoAnual2022;
