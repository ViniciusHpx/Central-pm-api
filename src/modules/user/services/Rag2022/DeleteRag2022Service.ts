import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import Rag2022 from '../../mongoose/Rag2022';

interface IRequest {
  id: string;
}
class DeleteRag2022 {
  public async execute({ id }: IRequest): Promise<void> {
    const rag2022Existe = await Rag2022.findOne({
      _id: id,
    });

    if (!rag2022Existe) {
      throw new AppError('RAG não encontrada');
    }

    Cache.del('rag2022');
    await Rag2022.deleteOne({ _id: id });
  }
}

export default DeleteRag2022;
