import Cache from '../../../../config/cache';
import ProgramacaoAnual2024 from '../../mongoose/ProgramacaoAnual2024';

interface IProgramacaoAnual2024 {
  titulo: string;
  link: string;
}
class ListProgramacaoAnual2024Service {
  public async execute(): Promise<IProgramacaoAnual2024[]> {
    const cachedProgramacaoAnual2024 = Cache.get<string>(
      'programacaoAnual2024',
    );

    let programacaoAnual2024: IProgramacaoAnual2024[] = [];

    if (!cachedProgramacaoAnual2024) {
      programacaoAnual2024 = await ProgramacaoAnual2024.find();
      Cache.set('programacaoAnual2024', JSON.stringify(programacaoAnual2024));
    } else {
      programacaoAnual2024 = JSON.parse(
        cachedProgramacaoAnual2024,
      ) as IProgramacaoAnual2024[];
    }
    return programacaoAnual2024;
  }
}

export default ListProgramacaoAnual2024Service;
