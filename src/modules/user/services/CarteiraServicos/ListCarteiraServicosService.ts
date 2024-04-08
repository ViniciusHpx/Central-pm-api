import Cache from '../../../../config/cache';
import CarteiraServicos from '../../mongoose/CarteiraServicos';

interface ICarteiraServico {
  titulo: string;
  link: string;
}
class ListCarteiraServicosService {
  public async execute(): Promise<ICarteiraServico[]> {
    const cachedCarteiraServicos = Cache.get<string>('carteiraServicos');

    let carteiraServicos: ICarteiraServico[] = [];

    if (!cachedCarteiraServicos) {
      carteiraServicos = await CarteiraServicos.find();
      Cache.set('carteiraServicos', JSON.stringify(carteiraServicos));
    } else {
      carteiraServicos = JSON.parse(
        cachedCarteiraServicos,
      ) as ICarteiraServico[];
    }
    return carteiraServicos;
  }
}

export default ListCarteiraServicosService;
