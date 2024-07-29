import Cache from '../../../../config/cache';
import Rdqa1 from '../../mongoose/Rdqa1';

interface IRdqa1 {
  titulo: string;
  link: string;
}
class ListRdqa1Service {
  public async execute(): Promise<IRdqa1[]> {
    const cachedRdqa1 = Cache.get<string>('rdqa1');

    let rdqa1: IRdqa1[] = [];

    if (!cachedRdqa1) {
      rdqa1 = await Rdqa1.find();
      Cache.set('rdqa1', JSON.stringify(rdqa1));
    } else {
      rdqa1 = JSON.parse(cachedRdqa1) as IRdqa1[];
    }
    return rdqa1;
  }
}

export default ListRdqa1Service;
