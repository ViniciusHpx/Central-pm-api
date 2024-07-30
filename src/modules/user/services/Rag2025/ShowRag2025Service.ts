import AppError from '../../../../shared/erros/AppError';
import Rag2025 from '../../mongoose/Rag2025';

interface IRag2025 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowRag2025Service {
  public async execute({ id }: IRequest): Promise<IRag2025> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const rag2025 = await Rag2025.findOne({
      _id: id,
    });
    if (!rag2025) {
      throw new AppError('Link não encontrado');
    }
    return rag2025;
  }
}

export default ShowRag2025Service;
