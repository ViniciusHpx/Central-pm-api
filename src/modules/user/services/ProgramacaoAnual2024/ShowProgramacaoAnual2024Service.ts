import AppError from '../../../../shared/erros/AppError';
import ProgramacaoAnual2024 from '../../mongoose/ProgramacaoAnual2024';

interface IProgramacaoAnual2024 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowProgramacaoAnual2024Service {
  public async execute({ id }: IRequest): Promise<IProgramacaoAnual2024> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const programacaoAnual2024 = await ProgramacaoAnual2024.findOne({
      _id: id,
    });
    if (!programacaoAnual2024) {
      throw new AppError('PAS 2024 não encontrado');
    }
    return programacaoAnual2024;
  }
}

export default ShowProgramacaoAnual2024Service;
