import Aviso from '../../mongoose/Avisos';
import Cache from '../../../../config/cache';

interface IAvisos {
  titulo: string;
  tipo: string;
  conteudo: string;
  data: string;
}
class ListAvisosService {
  public async execute(): Promise<IAvisos[]> {
    const cachedAvisos = Cache.get<string>('avisos');

    let avisos: IAvisos[] = [];

    if (!cachedAvisos) {
      avisos = await Aviso.find();
      Cache.set('avisos', JSON.stringify(avisos));
    } else {
      avisos = JSON.parse(cachedAvisos) as IAvisos[];
    }
    return avisos;
  }
}

export default ListAvisosService;
