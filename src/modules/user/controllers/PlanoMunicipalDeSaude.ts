import { Request, Response } from 'express';

import CreatePlanoMunicipalDeSaudeService from '../services/PlanoMunicipalDeSaude/CreatePlanoMunicipalDeSaude';
import ListPlanoMunicipalDeSaudeService from '../services/PlanoMunicipalDeSaude/ListPlanoMunicipalDeSaude';
import ShowPlanoMunicipalDeSaudeService from '../services/PlanoMunicipalDeSaude/ShowPlanoMunicipalDeSaude';
import DeletePlanoMunicipalDeSaudeService from '../services/PlanoMunicipalDeSaude/DeletePlanoMunicipalDeSaude';

interface IPlanoMunicipalDeSaude {
  titulo: string;
  link: string;
}

class PlanoMunicipalDeSaudeController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createPlanoMunicipalDeSaude =
      new CreatePlanoMunicipalDeSaudeService();

    const planoMunicipalDeSaude = await createPlanoMunicipalDeSaude.execute({
      titulo,
      link,
    });
    return res.json(planoMunicipalDeSaude);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listPlanoMunicipalDeSaude = new ListPlanoMunicipalDeSaudeService();
    const planoMunicipalDeSaude = await listPlanoMunicipalDeSaude.execute();

    return res.json(planoMunicipalDeSaude);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showPlanoMunicipalDeSaude = new ShowPlanoMunicipalDeSaudeService();
    const planoMunicipalDeSaude = await showPlanoMunicipalDeSaude.execute({
      id,
    });

    return res.json(planoMunicipalDeSaude);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deletePlanoMunicipalDeSaude =
      new DeletePlanoMunicipalDeSaudeService();
    const planoMunicipalDeSaude = await deletePlanoMunicipalDeSaude.execute({
      id,
    });

    return res.json();
  }
}

export default PlanoMunicipalDeSaudeController;
