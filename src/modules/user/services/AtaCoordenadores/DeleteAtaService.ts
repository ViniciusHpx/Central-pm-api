import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import AtaCoordenadores from '../../mongoose/AtaCoordenadores';

interface IAta {
  id: string;
}
class DeleteAtaService {
  public async execute({ id }: IAta): Promise<void> {
    const ataExiste = await AtaCoordenadores.findOne({ _id: id });

    if (!ataExiste) {
      throw new AppError('Aviso não encontrado');
    }

    Cache.del('ata');
    await ataExiste.deleteOne({ _id: id });
  }
}

export default DeleteAtaService;
