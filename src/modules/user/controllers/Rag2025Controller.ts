import { Request, Response } from 'express';

import CreateRag2025Service from '../services/Rag2025/CreateRag2025Service';
import ListRag2025Service from '../services/Rag2025/ListRag2025Service';
import ShowRag2025Service from '../services/Rag2025/ShowRag2025Service';
import DeleteRag2025Service from '../services/Rag2025/DeleteRag2025Service';

interface IRag2025 {
  titulo: string;
  link: string;
}

class Rag2025Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createRag2025 = new CreateRag2025Service();

    const rag2025 = await createRag2025.execute({
      titulo,
      link,
    });
    return res.json(rag2025);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listRag2025 = new ListRag2025Service();
    const rag2025 = await listRag2025.execute();

    return res.json(rag2025);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showRag2025 = new ShowRag2025Service();
    const rag2025 = await showRag2025.execute({
      id,
    });

    return res.json(rag2025);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteRag2025 = new DeleteRag2025Service();
    const rag2025 = await deleteRag2025.execute({
      id,
    });

    return res.json();
  }
}

export default Rag2025Controller;
