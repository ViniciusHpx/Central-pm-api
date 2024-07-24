import AppError from '../../../../shared/erros/AppError';
import ProgramacaoAnual2022 from '../../mongoose/ProgramacaoAnual2022';

interface IProgramacaoAnual2022 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowProgramacaoAnual2022Service {
  public async execute({ id }: IRequest): Promise<IProgramacaoAnual2022> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const programacaoAnual2022 = await ProgramacaoAnual2022.findOne({
      _id: id,
    });
    if (!programacaoAnual2022) {
      throw new AppError('PAS 2022 não encontrado');
    }
    return programacaoAnual2022;
  }
}

export default ShowProgramacaoAnual2022Service;
