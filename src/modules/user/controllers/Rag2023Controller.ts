import { Request, Response } from 'express';

import CreateRag2023Service from '../services/Rag2023/CreateRag2023Service';
import ListRag2023Service from '../services/Rag2023/ListRag2023Service';
import ShowRag2023Service from '../services/Rag2023/ShowRag2023Service';
import DeleteRag2023Service from '../services/Rag2023/DeleteRag2023Service';

interface IRag2023 {
  titulo: string;
  link: string;
}

class Rag2023Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createRag2023 = new CreateRag2023Service();

    const rag2023 = await createRag2023.execute({
      titulo,
      link,
    });
    return res.json(rag2023);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listRag2023 = new ListRag2023Service();
    const rag2023 = await listRag2023.execute();

    return res.json(rag2023);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showRag2023 = new ShowRag2023Service();
    const rag2023 = await showRag2023.execute({
      id,
    });

    return res.json(rag2023);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteRag2023 = new DeleteRag2023Service();
    const rag2023 = await deleteRag2023.execute({
      id,
    });

    return res.json();
  }
}

export default Rag2023Controller;
