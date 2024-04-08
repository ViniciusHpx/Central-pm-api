import AppError from '../../../../shared/erros/AppError';
import Aviso from '../../mongoose/Avisos';
import Cache from '../../../../config/cache';

interface IAvisos {
  titulo: string;
  tipo: string;
  conteudo: string;
  data: string;
}
class CreateAvisoService {
  public async execute({
    titulo,
    tipo,
    conteudo,
    data,
  }: IAvisos): Promise<IAvisos> {
    if (!titulo || !tipo || !conteudo || !data) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (conteudo.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const aviso = new Aviso({
      titulo,
      tipo,
      conteudo,
      data,
    });

    await aviso.save();
    Cache.del('avisos');
    return aviso;
  }
}

export default CreateAvisoService;
