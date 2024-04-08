import { Request, Response } from 'express';
import AppError from '../../../shared/erros/AppError';
import CreateAtaService from '../services/AtaCoordenadores/CreateAtaService';
import ListAtaService from '../services/AtaCoordenadores/ListAtaService';
import ShowAtaService from '../services/AtaCoordenadores/ShowAtaService';
import DeleteAtaService from '../services/AtaCoordenadores/DeleteAtaService';
import UpdateAtaService from '../services/AtaCoordenadores/UpdateAtaService';

interface IAta {
  titulo: string;
  link: string;
}

class AtaCoordenadoresController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createAta = new CreateAtaService();

    const ata = await createAta.execute({
      titulo,
      link,
    });
    return res.json(ata);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listAta = new ListAtaService();
    const atas = await listAta.execute();

    return res.json(atas);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showAta = new ShowAtaService();
    const ata = await showAta.execute({ id });

    return res.json(ata);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteAta = new DeleteAtaService();
    const ata = await deleteAta.execute({ id });

    return res.json();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, titulo, link } = req.body;

    const updateAta = new UpdateAtaService();
    const ata = await updateAta.execute({
      id,
      titulo,
      link,
    });

    return res.json(ata);
  }
}

export default AtaCoordenadoresController;
