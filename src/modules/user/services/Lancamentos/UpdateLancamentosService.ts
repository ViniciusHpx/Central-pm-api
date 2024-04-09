import AppError from '../../../../shared/erros/AppError';
import Lancamentos from '../../mongoose/Lancamentos';
import Cache from '../../../../config/cache';

interface ILancamentos {
  id?: string;
  titulo: string;
  link: string;
}

class UpdateLancamentosService {
  public async execute({
    id,
    titulo,
    link,
  }: ILancamentos): Promise<ILancamentos> {
    if (!id) {
      throw new AppError('Aviso não informado');
    }
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }
    const lancamentosExiste = await Lancamentos.findById(id);
    if (!lancamentosExiste) {
      throw new AppError('Lançamento não encontrado');
    }

    await Lancamentos.findByIdAndUpdate(id, {
      titulo,
      link,
    });
    const lancamentosAtualizado = await Lancamentos.findOne({ _id: id });

    if (!lancamentosAtualizado) {
      throw new AppError('Erro ao atualizar o aviso');
    }
    Cache.del('lancamentos');

    return lancamentosAtualizado;
  }
}

export default UpdateLancamentosService;
