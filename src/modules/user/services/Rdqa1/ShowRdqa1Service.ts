import AppError from '../../../../shared/erros/AppError';
import ProgramacaoAnual2025 from '../../mongoose/ProgramacaoAnual2025';

interface IProgramacaoAnual2025 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowProgramacaoAnual2025Service {
  public async execute({ id }: IRequest): Promise<IProgramacaoAnual2025> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const programacaoAnual2025 = await ProgramacaoAnual2025.findOne({
      _id: id,
    });
    if (!programacaoAnual2025) {
      throw new AppError('PAS 2025 não encontrado');
    }
    return programacaoAnual2025;
  }
}

export default ShowProgramacaoAnual2025Service;
