import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2024 from '../../mongoose/ProgramacaoAnual2024';

interface IProgramacaoAnual2024 {
  titulo: string;
  link: string;
}
class CreateProgramacaoAnual2024Service {
  public async execute({
    titulo,
    link,
  }: IProgramacaoAnual2024): Promise<IProgramacaoAnual2024> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const programacaoAnual2024 = new ProgramacaoAnual2024({
      titulo,
      link,
    });

    await programacaoAnual2024.save();
    Cache.del('programacaoAnual2024');
    return programacaoAnual2024;
  }
}

export default CreateProgramacaoAnual2024Service;
