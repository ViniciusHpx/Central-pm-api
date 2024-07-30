import { Request, Response } from 'express';

import CreateRdqa3Service from '../services/Rdqa3/CreateRdqa3Service';
import ListRdqa3Service from '../services/Rdqa3/ListRdqa3Service';
import ShowRdqa3Service from '../services/Rdqa3/ShowRdqa3Service';
import DeleteRdqa3Service from '../services/Rdqa3/DeleteRdqa3Service';

interface IRdqa3 {
  titulo: string;
  link: string;
}

class Rdqa3Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createRdqa3 = new CreateRdqa3Service();

    const rdqa3 = await createRdqa3.execute({
      titulo,
      link,
    });
    return res.json(rdqa3);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listRdqa3 = new ListRdqa3Service();
    const rdqa3 = await listRdqa3.execute();

    return res.json(rdqa3);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showRdqa3 = new ShowRdqa3Service();
    const rdqa3 = await showRdqa3.execute({
      id,
    });

    return res.json(rdqa3);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteRdqa3 = new DeleteRdqa3Service();
    const rdqa3 = await deleteRdqa3.execute({
      id,
    });

    return res.json();
  }
}

export default Rdqa3Controller;
