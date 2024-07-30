import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2025 from '../../mongoose/Rag2025';

interface IRequest {
  id: string;
}
class DeleteRag2025 {
  public async execute({ id }: IRequest): Promise<void> {
    const rag2025Existe = await Rag2025.findOne({
      _id: id,
    });

    if (!rag2025Existe) {
      throw new AppError('RAG não encontrada');
    }

    Cache.del('rag2025');
    await Rag2025.deleteOne({ _id: id });
  }
}

export default DeleteRag2025;
