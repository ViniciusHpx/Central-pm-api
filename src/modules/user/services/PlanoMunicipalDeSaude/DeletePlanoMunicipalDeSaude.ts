import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';
import PlanoMunicipalDeSaude from '../../mongoose/PlanoMunicipalDeSaude';

interface IRequest {
  id: string;
}
class DeletePlanoMunicipalDeSaudeService {
  public async execute({ id }: IRequest): Promise<void> {
    const planoMunicipalDeSaudeExiste = await PlanoMunicipalDeSaude.findOne({
      _id: id,
    });

    if (!planoMunicipalDeSaudeExiste) {
      throw new AppError('Plano Municipal não encontrado');
    }

    Cache.del('planoMunicipalDeSaude');
    await PlanoMunicipalDeSaude.deleteOne({ _id: id });
  }
}

export default DeletePlanoMunicipalDeSaudeService;
