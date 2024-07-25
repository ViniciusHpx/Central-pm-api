import Cache from '../../../../config/cache';
import ProgramacaoAnual2023 from '../../mongoose/ProgramacaoAnual2023';

interface IProgramacaoAnual2023 {
  titulo: string;
  link: string;
}
class ListProgramacaoAnual2023Service {
  public async execute(): Promise<IProgramacaoAnual2023[]> {
    const cachedProgramacaoAnual2023 = Cache.get<string>(
      'programacaoAnual2023',
    );

    let programacaoAnual2023: IProgramacaoAnual2023[] = [];

    if (!cachedProgramacaoAnual2023) {
      programacaoAnual2023 = await ProgramacaoAnual2023.find();
      Cache.set('programacaoAnual2023', JSON.stringify(programacaoAnual2023));
    } else {
      programacaoAnual2023 = JSON.parse(
        cachedProgramacaoAnual2023,
      ) as IProgramacaoAnual2023[];
    }
    return programacaoAnual2023;
  }
}

export default ListProgramacaoAnual2023Service;
