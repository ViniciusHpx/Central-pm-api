import AppError from '../../../../shared/erros/AppError';
import Rdqa2 from '../../mongoose/Rdqa2';

interface IRdqa2 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowRdqa2Service {
  public async execute({ id }: IRequest): Promise<IRdqa2> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const rdqa2 = await Rdqa2.findOne({
      _id: id,
    });
    if (!rdqa2) {
      throw new AppError('Link não encontrado');
    }
    return rdqa2;
  }
}

export default ShowRdqa2Service;
