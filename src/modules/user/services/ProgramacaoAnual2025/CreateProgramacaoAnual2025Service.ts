import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ProgramacaoAnual2025 from '../../mongoose/ProgramacaoAnual2025';

interface IProgramacaoAnual2025 {
  titulo: string;
  link: string;
}
class CreateProgramacaoAnual2025Service {
  public async execute({
    titulo,
    link,
  }: IProgramacaoAnual2025): Promise<IProgramacaoAnual2025> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const programacaoAnual2025 = new ProgramacaoAnual2025({
      titulo,
      link,
    });

    await programacaoAnual2025.save();
    Cache.del('programacaoAnual2025');
    return programacaoAnual2025;
  }
}

export default CreateProgramacaoAnual2025Service;
