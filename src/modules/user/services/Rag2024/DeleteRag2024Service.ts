import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2024 from '../../mongoose/Rag2024';

interface IRequest {
  id: string;
}
class DeleteRag2024 {
  public async execute({ id }: IRequest): Promise<void> {
    const rag2024Existe = await Rag2024.findOne({
      _id: id,
    });

    if (!rag2024Existe) {
      throw new AppError('RAG não encontrada');
    }

    Cache.del('rag2024');
    await Rag2024.deleteOne({ _id: id });
  }
}

export default DeleteRag2024;
