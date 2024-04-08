import Protocolo from '../../mongoose/Protocolo';
import Cache from '../../../../config/cache';

interface IProtocolo {
  titulo: string;
  link: string;
}
class ListProtocoloService {
  public async execute(): Promise<IProtocolo[]> {
    const cachedProtocolo = Cache.get<string>('protocolo');

    let protocolos: IProtocolo[] = [];

    if (!cachedProtocolo) {
      protocolos = await Protocolo.find();
      Cache.set('protocolo', JSON.stringify(protocolos));
    } else {
      protocolos = JSON.parse(cachedProtocolo) as IProtocolo[];
    }
    return protocolos;
  }
}

export default ListProtocoloService;
