import Ata from '../../mongoose/AtaCoordenadores';
import Cache from '../../../../config/cache';

interface IAta {
  titulo: string;
  link: string;
}
class ListAtaService {
  public async execute(): Promise<IAta[]> {
    const cachedAta = Cache.get<string>('ata');

    let atas: IAta[] = [];

    if (!cachedAta) {
      atas = await Ata.find();
      Cache.set('ata', JSON.stringify(atas));
    } else {
      atas = JSON.parse(cachedAta) as IAta[];
    }
    return atas;
  }
}

export default ListAtaService;
