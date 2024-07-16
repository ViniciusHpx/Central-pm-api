import Cache from '../../../../config/cache';
import ComissaoEmergencia from '../../mongoose/ComissaoEmergencia';
import PlanoMunicipalDeSaude from '../../mongoose/PlanoMunicipalDeSaude';

interface IPlanoMunicipalDeSaude {
  titulo: string;
  link: string;
}
class ListPlanoMunicipalDeSaudeService {
  public async execute(): Promise<IPlanoMunicipalDeSaude[]> {
    const cachedPlanoMunicipalDeSaude = Cache.get<string>(
      'planoMunicipalDeSaude',
    );

    let planoMunicipalDeSaude: IPlanoMunicipalDeSaude[] = [];

    if (!cachedPlanoMunicipalDeSaude) {
      planoMunicipalDeSaude = await PlanoMunicipalDeSaude.find();
      Cache.set('planoMunicipalDeSaude', JSON.stringify(planoMunicipalDeSaude));
    } else {
      planoMunicipalDeSaude = JSON.parse(
        cachedPlanoMunicipalDeSaude,
      ) as IPlanoMunicipalDeSaude[];
    }
    return planoMunicipalDeSaude;
  }
}

export default ListPlanoMunicipalDeSaudeService;
