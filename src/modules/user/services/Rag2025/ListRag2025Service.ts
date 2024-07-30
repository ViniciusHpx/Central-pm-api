import Cache from '../../../../config/cache';
import Rag2025 from '../../mongoose/Rag2025';

interface IRag2025 {
  titulo: string;
  link: string;
}
class ListRag2025Service {
  public async execute(): Promise<IRag2025[]> {
    const cachedRag2025 = Cache.get<string>('rag2025');

    let rag2025: IRag2025[] = [];

    if (!cachedRag2025) {
      rag2025 = await Rag2025.find();
      Cache.set('rag2025', JSON.stringify(rag2025));
    } else {
      rag2025 = JSON.parse(cachedRag2025) as IRag2025[];
    }
    return rag2025;
  }
}

export default ListRag2025Service;
