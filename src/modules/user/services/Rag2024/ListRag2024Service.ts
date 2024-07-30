import Cache from '../../../../config/cache';
import Rag2024 from '../../mongoose/Rag2024';

interface IRag2024 {
  titulo: string;
  link: string;
}
class ListRag2024Service {
  public async execute(): Promise<IRag2024[]> {
    const cachedRag2024 = Cache.get<string>('rag2024');

    let rag2024: IRag2024[] = [];

    if (!cachedRag2024) {
      rag2024 = await Rag2024.find();
      Cache.set('rag2024', JSON.stringify(rag2024));
    } else {
      rag2024 = JSON.parse(cachedRag2024) as IRag2024[];
    }
    return rag2024;
  }
}

export default ListRag2024Service;
