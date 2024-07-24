import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2022 from '../../mongoose/ProgramacaoAnual2022';

interface IProgramacaoAnual2022 {
  titulo: string;
  link: string;
}
class CreateProgramacaoAnual2022Service {
  public async execute({
    titulo,
    link,
  }: IProgramacaoAnual2022): Promise<IProgramacaoAnual2022> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const programacaoAnual2022 = new ProgramacaoAnual2022({
      titulo,
      link,
    });

    await programacaoAnual2022.save();
    Cache.del('programacaoAnual2022');
    return programacaoAnual2022;
  }
}

export default CreateProgramacaoAnual2022Service;
