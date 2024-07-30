import Cache from '../../../../config/cache';
import Rdqa2 from '../../mongoose/Rdqa2';

interface IRdqa2 {
  titulo: string;
  link: string;
}
class ListRdqa2Service {
  public async execute(): Promise<IRdqa2[]> {
    const cachedRdqa2 = Cache.get<string>('rdqa2');

    let rdqa2: IRdqa2[] = [];

    if (!cachedRdqa2) {
      rdqa2 = await Rdqa2.find();
      Cache.set('rdqa2', JSON.stringify(rdqa2));
    } else {
      rdqa2 = JSON.parse(cachedRdqa2) as IRdqa2[];
    }
    return rdqa2;
  }
}

export default ListRdqa2Service;
