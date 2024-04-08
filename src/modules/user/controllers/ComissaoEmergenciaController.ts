import { Request, Response } from 'express';

import CreateComissaoEmergenciaService from '../services/ComissaoEmergencia/CreateComissaoEmergenciaService';
import ListComissaoEmergenciaService from '../services/ComissaoEmergencia/ListComissaoEmergenciaService';
import ShowComissaoEmergenciaService from '../services/ComissaoEmergencia/ShowComissaoEmergenciaService';
import DeleteComissaoEmergenciaService from '../services/ComissaoEmergencia/DeleteComissaoEmergenciaService';

interface IComissaoEmergencia {
  titulo: string;
  link: string;
}

class ComissaoEmergenciaController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createComissaoEmergencia = new CreateComissaoEmergenciaService();

    const comissaoEmergencia = await createComissaoEmergencia.execute({
      titulo,
      link,
    });
    return res.json(comissaoEmergencia);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listComissaoEmergencia = new ListComissaoEmergenciaService();
    const comissaoEmergencia = await listComissaoEmergencia.execute();

    return res.json(comissaoEmergencia);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showComissaoEmergencia = new ShowComissaoEmergenciaService();
    const comissaoEmergencia = await showComissaoEmergencia.execute({
      id,
    });

    return res.json(comissaoEmergencia);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteComissaoEmergencia = new DeleteComissaoEmergenciaService();
    const comissaoEmergencia = await deleteComissaoEmergencia.execute({ id });

    return res.json();
  }
}

export default ComissaoEmergenciaController;
