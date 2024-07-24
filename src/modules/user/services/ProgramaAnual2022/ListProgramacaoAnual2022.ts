import Cache from '../../../../config/cache';
import ProgramacaoAnual2022 from '../../mongoose/ProgramacaoAnual2022';

interface IProgramacaoAnual2022 {
  titulo: string;
  link: string;
}
class ListProgramacaoAnual2022Service {
  public async execute(): Promise<IProgramacaoAnual2022[]> {
    const cachedProgramacaoAnual2022 = Cache.get<string>(
      'programacaoAnual2022',
    );

    let programacaoAnual2022: IProgramacaoAnual2022[] = [];

    if (!cachedProgramacaoAnual2022) {
      programacaoAnual2022 = await ProgramacaoAnual2022.find();
      Cache.set('programacaoAnual2022', JSON.stringify(programacaoAnual2022));
    } else {
      programacaoAnual2022 = JSON.parse(
        cachedProgramacaoAnual2022,
      ) as IProgramacaoAnual2022[];
    }
    return programacaoAnual2022;
  }
}

export default ListProgramacaoAnual2022Service;
