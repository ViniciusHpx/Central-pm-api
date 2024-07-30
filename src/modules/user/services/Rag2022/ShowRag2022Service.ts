import AppError from '../../../../shared/erros/AppError';
import Rag2022 from '../../mongoose/Rag2022';

interface IRag2022 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowRag2022Service {
  public async execute({ id }: IRequest): Promise<IRag2022> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const rag2022 = await Rag2022.findOne({
      _id: id,
    });
    if (!rag2022) {
      throw new AppError('Link não encontrado');
    }
    return rag2022;
  }
}

export default ShowRag2022Service;
