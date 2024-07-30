import AppError from '../../../../shared/erros/AppError';
import Rag2024 from '../../mongoose/Rag2024';

interface IRag2024 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowRag2024Service {
  public async execute({ id }: IRequest): Promise<IRag2024> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const rag2024 = await Rag2024.findOne({
      _id: id,
    });
    if (!rag2024) {
      throw new AppError('Link não encontrado');
    }
    return rag2024;
  }
}

export default ShowRag2024Service;
