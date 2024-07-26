import Cache from '../../../../config/cache';
import ProgramacaoAnual2025 from '../../mongoose/ProgramacaoAnual2025';

interface IProgramacaoAnual2025 {
  titulo: string;
  link: string;
}
class ListProgramacaoAnual2025Service {
  public async execute(): Promise<IProgramacaoAnual2025[]> {
    const cachedProgramacaoAnual2025 = Cache.get<string>(
      'programacaoAnual2025',
    );

    let programacaoAnual2025: IProgramacaoAnual2025[] = [];

    if (!cachedProgramacaoAnual2025) {
      programacaoAnual2025 = await ProgramacaoAnual2025.find();
      Cache.set('programacaoAnual2025', JSON.stringify(programacaoAnual2025));
    } else {
      programacaoAnual2025 = JSON.parse(
        cachedProgramacaoAnual2025,
      ) as IProgramacaoAnual2025[];
    }
    return programacaoAnual2025;
  }
}

export default ListProgramacaoAnual2025Service;
