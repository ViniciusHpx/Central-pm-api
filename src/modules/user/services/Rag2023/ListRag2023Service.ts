import Cache from '../../../../config/cache';
import Rag2023 from '../../mongoose/Rag2023';

interface IRag2023 {
  titulo: string;
  link: string;
}
class ListRag2023Service {
  public async execute(): Promise<IRag2023[]> {
    const cachedRag2023 = Cache.get<string>('rag2023');

    let rag2023: IRag2023[] = [];

    if (!cachedRag2023) {
      rag2023 = await Rag2023.find();
      Cache.set('rag2023', JSON.stringify(rag2023));
    } else {
      rag2023 = JSON.parse(cachedRag2023) as IRag2023[];
    }
    return rag2023;
  }
}

export default ListRag2023Service;
