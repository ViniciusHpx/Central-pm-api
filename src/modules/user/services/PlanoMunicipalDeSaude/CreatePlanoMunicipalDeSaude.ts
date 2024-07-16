import AppError from '../../../../shared/erros/AppError';
import Cache from '../../../../config/cache';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';
import PlanoMunicipalDeSaude from '../../mongoose/PlanoMunicipalDeSaude';

interface IPlanoMunicipalDeSaude {
  titulo: string;
  link: string;
}
class CreatePlanoMunicipalDeSaudeService {
  public async execute({
    titulo,
    link,
  }: IPlanoMunicipalDeSaude): Promise<IPlanoMunicipalDeSaude> {
    if (!titulo || !link) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (link.length < 3 || titulo.length < 3) {
      throw new AppError('Titulo ou conteúdo com menos de 3 caracteres');
    }

    const planoMunicipalDeSaude = new PlanoMunicipalDeSaude({
      titulo,
      link,
    });

    await planoMunicipalDeSaude.save();
    Cache.del('planoMunicipalDeSaude');
    return planoMunicipalDeSaude;
  }
}

export default CreatePlanoMunicipalDeSaudeService;
