import { Request, Response } from 'express';

import CreateRag2022Service from '../services/Rag2022/CreateRag2022Service';
import ListRag2022Service from '../services/Rag2022/ListRag2022Service';
import ShowRag2022Service from '../services/Rag2022/ShowRag2022Service';
import DeleteRag2022Service from '../services/Rag2022/DeleteRag2022Service';

interface IRag2022 {
  titulo: string;
  link: string;
}

class Rag2022Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createRag2022 = new CreateRag2022Service();

    const rag2022 = await createRag2022.execute({
      titulo,
      link,
    });
    return res.json(rag2022);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listRag2022 = new ListRag2022Service();
    const rag2022 = await listRag2022.execute();

    return res.json(rag2022);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showRag2022 = new ShowRag2022Service();
    const rag2022 = await showRag2022.execute({
      id,
    });

    return res.json(rag2022);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteRag2022 = new DeleteRag2022Service();
    const rag2022 = await deleteRag2022.execute({
      id,
    });

    return res.json();
  }
}

export default Rag2022Controller;
