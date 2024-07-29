import { Request, Response } from 'express';

import CreateRdqa1Service from '../services/Rdqa1/CreateRdqa1Service';
import ListRdqa1Service from '../services/Rdqa1/ListRdqa1Service';
import ShowRdqa1Service from '../services/Rdqa1/ShowRdqa1Service';
import DeleteRdqa1Service from '../services/Rdqa1/DeleteRdqa1Service';

interface IRdqa1 {
  titulo: string;
  link: string;
}

class Rdqa1Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createRdqa1 = new CreateRdqa1Service();

    const rdqa1 = await createRdqa1.execute({
      titulo,
      link,
    });
    return res.json(rdqa1);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listRdqa1 = new ListRdqa1Service();
    const rdqa1 = await listRdqa1.execute();

    return res.json(rdqa1);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showRdqa1 = new ShowRdqa1Service();
    const rdqa1 = await showRdqa1.execute({
      id,
    });

    return res.json(rdqa1);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteRdqa1 = new DeleteRdqa1Service();
    const rdqa1 = await deleteRdqa1.execute({
      id,
    });

    return res.json();
  }
}

export default Rdqa1Controller;
