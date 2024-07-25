import AppError from '../../../../shared/erros/AppError';
import ProgramacaoAnual2023 from '../../mongoose/ProgramacaoAnual2023';

interface IProgramacaoAnual2023 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowProgramacaoAnual2023Service {
  public async execute({ id }: IRequest): Promise<IProgramacaoAnual2023> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const programacaoAnual2023 = await ProgramacaoAnual2023.findOne({
      _id: id,
    });
    if (!programacaoAnual2023) {
      throw new AppError('PAS 2023 não encontrado');
    }
    return programacaoAnual2023;
  }
}

export default ShowProgramacaoAnual2023Service;
