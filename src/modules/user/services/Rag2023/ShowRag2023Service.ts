import AppError from '../../../../shared/erros/AppError';
import Rag2023 from '../../mongoose/Rag2023';

interface IRag2023 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowRag2023Service {
  public async execute({ id }: IRequest): Promise<IRag2023> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const rag2023 = await Rag2023.findOne({
      _id: id,
    });
    if (!rag2023) {
      throw new AppError('Link não encontrado');
    }
    return rag2023;
  }
}

export default ShowRag2023Service;
