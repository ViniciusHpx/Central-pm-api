import { Request, Response } from 'express';

import CreateRag2024Service from '../services/Rag2024/CreateRag2024Service';
import ListRag2024Service from '../services/Rag2024/ListRag2024Service';
import ShowRag2024Service from '../services/Rag2024/ShowRag2024Service';
import DeleteRag2024Service from '../services/Rag2024/DeleteRag2024Service';

interface IRag2024 {
  titulo: string;
  link: string;
}

class Rag2024Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createRag2024 = new CreateRag2024Service();

    const rag2024 = await createRag2024.execute({
      titulo,
      link,
    });
    return res.json(rag2024);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listRag2024 = new ListRag2024Service();
    const rag2024 = await listRag2024.execute();

    return res.json(rag2024);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showRag2024 = new ShowRag2024Service();
    const rag2024 = await showRag2024.execute({
      id,
    });

    return res.json(rag2024);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteRag2024 = new DeleteRag2024Service();
    const rag2024 = await deleteRag2024.execute({
      id,
    });

    return res.json();
  }
}

export default Rag2024Controller;
