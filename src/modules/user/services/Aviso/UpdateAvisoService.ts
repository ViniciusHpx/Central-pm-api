import AppError from '../../../../shared/erros/AppError';
import Aviso from '../../mongoose/Avisos';
import Cache from '../../../../config/cache';

interface IAvisos {
  id?: string;
  titulo: string;
  tipo: string;
  conteudo: string;
  data: string;
}

class UpdateAvisoService {
  public async execute({
    id,
    titulo,
    tipo,
    conteudo,
    data,
  }: IAvisos): Promise<IAvisos> {
    if (!id) {
      throw new AppError('Aviso não informado');
    }
    if (!titulo || !tipo || !conteudo || !data) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (conteudo.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }
    const avisoExiste = await Aviso.findById(id);
    if (!avisoExiste) {
      throw new AppError('Aviso não encontrado');
    }

    await Aviso.findByIdAndUpdate(id, {
      titulo,
      tipo,
      conteudo,
      data,
    });
    const avisoAtualizado = await Aviso.findOne({ _id: id });

    if (!avisoAtualizado) {
      throw new AppError('Erro ao atualizar o aviso');
    }
    Cache.del('avisos');

    return avisoAtualizado;
  }
}

export default UpdateAvisoService;
