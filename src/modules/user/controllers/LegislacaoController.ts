import { Request, Response } from 'express';

import CreateLegislacaoService from '../services/Legislacao/CreateLegislacaoService';
import ListLegislacaoService from '../services/Legislacao/ListLegislacaoService';
import ShowLegislacaoService from '../services/Legislacao/ShowLegislacaoService';
import DeleteLegislacaoService from '../services/Legislacao/DeleteLegislacaoService';

interface ILegislacao {
  titulo: string;
  link: string;
}

class LegislacaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createLegislacao = new CreateLegislacaoService();

    const legislacao = await createLegislacao.execute({
      titulo,
      link,
    });
    return res.json(legislacao);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listLegislacao = new ListLegislacaoService();
    const legislacao = await listLegislacao.execute();

    return res.json(legislacao);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showLegislacao = new ShowLegislacaoService();
    const legislacao = await showLegislacao.execute({
      id,
    });

    return res.json(legislacao);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteLegislacao = new DeleteLegislacaoService();
    const legislacao = await deleteLegislacao.execute({
      id,
    });

    return res.json();
  }
}

export default LegislacaoController;
