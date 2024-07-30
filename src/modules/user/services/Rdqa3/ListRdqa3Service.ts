import Cache from '../../../../config/cache';
import Rdqa3 from '../../mongoose/Rdqa3';

interface IRdqa3 {
  titulo: string;
  link: string;
}
class ListRdqa3Service {
  public async execute(): Promise<IRdqa3[]> {
    const cachedRdqa3 = Cache.get<string>('rdqa3');

    let rdqa3: IRdqa3[] = [];

    if (!cachedRdqa3) {
      rdqa3 = await Rdqa3.find();
      Cache.set('rdqa3', JSON.stringify(rdqa3));
    } else {
      rdqa3 = JSON.parse(cachedRdqa3) as IRdqa3[];
    }
    return rdqa3;
  }
}

export default ListRdqa3Service;
