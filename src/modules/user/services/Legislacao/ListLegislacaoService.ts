import Cache from '../../../../config/cache';
import Legislacao from '../../mongoose/Legislacao';

interface ILegislacao {
  titulo: string;
  link: string;
}
class ListLegislacaoService {
  public async execute(): Promise<ILegislacao[]> {
    const cachedLegislacao = Cache.get<string>('legislacao');

    let legislacao: ILegislacao[] = [];

    if (!cachedLegislacao) {
      legislacao = await Legislacao.find();
      Cache.set('legislacao', JSON.stringify(legislacao));
    } else {
      legislacao = JSON.parse(cachedLegislacao) as ILegislacao[];
    }
    return legislacao;
  }
}

export default ListLegislacaoService;
