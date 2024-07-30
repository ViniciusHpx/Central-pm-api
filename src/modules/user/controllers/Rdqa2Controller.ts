import { Request, Response } from 'express';

import CreateRdqa2Service from '../services/Rdqa2/CreateRdqa2Service';
import ListRdqa2Service from '../services/Rdqa2/ListRdqa2Service';
import ShowRdqa2Service from '../services/Rdqa2/ShowRdqa2Service';
import DeleteRdqa2Service from '../services/Rdqa2/DeleteRdqa2Service';

interface IRdqa2 {
  titulo: string;
  link: string;
}

class Rdqa2Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createRdqa2 = new CreateRdqa2Service();

    const rdqa2 = await createRdqa2.execute({
      titulo,
      link,
    });
    return res.json(rdqa2);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listRdqa2 = new ListRdqa2Service();
    const rdqa2 = await listRdqa2.execute();

    return res.json(rdqa2);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showRdqa2 = new ShowRdqa2Service();
    const rdqa2 = await showRdqa2.execute({
      id,
    });

    return res.json(rdqa2);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteRdqa2 = new DeleteRdqa2Service();
    const rdqa2 = await deleteRdqa2.execute({
      id,
    });

    return res.json();
  }
}

export default Rdqa2Controller;
