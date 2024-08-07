import AppError from '../../../../shared/erros/AppError';
import Rdqa1 from '../../mongoose/Rdqa1';

interface IRdqa1 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowRdqa1Service {
  public async execute({ id }: IRequest): Promise<IRdqa1> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const rdqa1 = await Rdqa1.findOne({
      _id: id,
    });
    if (!rdqa1) {
      throw new AppError('Link não encontrado');
    }
    return rdqa1;
  }
}

export default ShowRdqa1Service;
