import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import CarteiraServicos from '../../mongoose/CarteiraServicos';

interface ICarteiraServicos {
  id?: string;
  titulo: string;
  link: string;
}

class UpdateCarteiraServicosService {
  public async execute({
    id,
    titulo,
    link,
  }: ICarteiraServicos): Promise<ICarteiraServicos> {
    if (!id) {
      throw new AppError('Não informado');
    }
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }
    const carteiraServicoExiste = await CarteiraServicos.findById(id);
    if (!carteiraServicoExiste) {
      throw new AppError('Carteira Servicos não encontrado');
    }

    await CarteiraServicos.findByIdAndUpdate(id, {
      titulo,
      link,
    });
    const carteiraServicoAtualizado = await CarteiraServicos.findOne({
      _id: id,
    });

    if (!carteiraServicoAtualizado) {
      throw new AppError('Erro ao atualizar o aviso');
    }
    Cache.del('carteiraServicos');

    return carteiraServicoAtualizado;
  }
}

export default UpdateCarteiraServicosService;
