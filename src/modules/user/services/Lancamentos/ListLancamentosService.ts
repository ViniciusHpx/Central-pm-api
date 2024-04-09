import Lancamentos from '../../mongoose/Lancamentos';
import Cache from '../../../../config/cache';

interface ILancamentos {
  titulo: string;
  link: string;
}
class ListLancamentosService {
  public async execute(): Promise<ILancamentos[]> {
    const cachedLancamentos = Cache.get<string>('lancamentos');

    let lancamentos: ILancamentos[] = [];

    if (!cachedLancamentos) {
      lancamentos = await Lancamentos.find();
      Cache.set('lancamentos', JSON.stringify(lancamentos));
    } else {
      lancamentos = JSON.parse(cachedLancamentos) as ILancamentos[];
    }
    return lancamentos;
  }
}

export default ListLancamentosService;
