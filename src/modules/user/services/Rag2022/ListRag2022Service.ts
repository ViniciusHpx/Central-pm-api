import Cache from '../../../../config/cache';
import Rag2022 from '../../mongoose/Rag2022';

interface IRag2022 {
  titulo: string;
  link: string;
}
class ListRag2022Service {
  public async execute(): Promise<IRag2022[]> {
    const cachedRag2022 = Cache.get<string>('rag2022');

    let rag2022: IRag2022[] = [];

    if (!cachedRag2022) {
      rag2022 = await Rag2022.find();
      Cache.set('rag2022', JSON.stringify(rag2022));
    } else {
      rag2022 = JSON.parse(cachedRag2022) as IRag2022[];
    }
    return rag2022;
  }
}

export default ListRag2022Service;
