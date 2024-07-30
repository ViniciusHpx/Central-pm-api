import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2023 from '../../mongoose/Rag2023';

interface IRequest {
  id: string;
}
class DeleteRag2023 {
  public async execute({ id }: IRequest): Promise<void> {
    const rag2023Existe = await Rag2023.findOne({
      _id: id,
    });

    if (!rag2023Existe) {
      throw new AppError('RAG não encontrada');
    }

    Cache.del('rag2023');
    await Rag2023.deleteOne({ _id: id });
  }
}

export default DeleteRag2023;
