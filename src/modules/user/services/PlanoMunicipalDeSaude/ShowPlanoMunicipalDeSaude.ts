import AppError from '../../../../shared/erros/AppError';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';
import PlanoMunicipalDeSaude from '../../mongoose/PlanoMunicipalDeSaude';

interface IPlanoMunicipalDeSaude {
  titulo: string;
  link: string;
}
interface IRequest {
  id: string;
}
class ShowPlanoMunicipalDeSaudeService {
  public async execute({ id }: IRequest): Promise<IPlanoMunicipalDeSaude> {
    if (!id) {
      throw new AppError('ID do aviso não informado');
    }
    const planoMunicipalDeSaude = await PlanoMunicipalDeSaude.findOne({
      _id: id,
    });
    if (!planoMunicipalDeSaude) {
      throw new AppError('Plano Municipal não encontrado');
    }
    return planoMunicipalDeSaude;
  }
}

export default ShowPlanoMunicipalDeSaudeService;
