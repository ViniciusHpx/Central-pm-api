import AppError from '../../../../shared/erros/AppError';
import Rdqa3 from '../../mongoose/Rdqa3';

interface IRdqa3 {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowRdqa3Service {
  public async execute({ id }: IRequest): Promise<IRdqa3> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const rdqa3 = await Rdqa3.findOne({
      _id: id,
    });
    if (!rdqa3) {
      throw new AppError('Link não encontrado');
    }
    return rdqa3;
  }
}

export default ShowRdqa3Service;
