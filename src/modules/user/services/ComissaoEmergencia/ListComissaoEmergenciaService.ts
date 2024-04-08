import Cache from '../../../../config/cache';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';

interface IComissaoEmergencia {
  titulo: string;
  link: string;
}
class ListComissaoEmergenciaService {
  public async execute(): Promise<IComissaoEmergencia[]> {
    const cachedComissaoEmergencia = Cache.get<string>('comissaoEmergencia');

    let comissaoEmergencia: IComissaoEmergencia[] = [];

    if (!cachedComissaoEmergencia) {
      comissaoEmergencia = await ComissaoEmergencia.find();
      Cache.set('comissaoEmergencia', JSON.stringify(comissaoEmergencia));
    } else {
      comissaoEmergencia = JSON.parse(
        cachedComissaoEmergencia,
      ) as IComissaoEmergencia[];
    }
    return comissaoEmergencia;
  }
}

export default ListComissaoEmergenciaService;
