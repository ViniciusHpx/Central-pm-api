import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2023 from '../../mongoose/ProgramacaoAnual2023';

interface IProgramacaoAnual2023 {
  titulo: string;
  link: string;
}
class CreateProgramacaoAnual2023Service {
  public async execute({
    titulo,
    link,
  }: IProgramacaoAnual2023): Promise<IProgramacaoAnual2023> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const programacaoAnual2023 = new ProgramacaoAnual2023({
      titulo,
      link,
    });

    await programacaoAnual2023.save();
    Cache.del('programacaoAnual2023');
    return programacaoAnual2023;
  }
}

export default CreateProgramacaoAnual2023Service;
