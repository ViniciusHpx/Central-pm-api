import { Request, Response } from 'express';
import AppError from '../../../shared/erros/AppError';
import CreateProtocoloService from '../services/Protocolo/CreateProtocoloService';
import ListProtocoloService from '../services/Protocolo/ListProtocoloService';
import ShowProtocoloService from '../services/Protocolo/ShowProtocoloService';
import DeleteProtocoloService from '../services/Protocolo/DeleteProtocoloService';
import UpdateProtocoloService from '../services/Protocolo/UpdateProtocoloService';

interface IProtocolo {
  titulo: string;
  link: string;
}

class ProtocoloController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createProtocolo = new CreateProtocoloService();

    const protocolo = await createProtocolo.execute({
      titulo,
      link,
    });
    return res.json(protocolo);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listProtocolo = new ListProtocoloService();
    const protocolos = await listProtocolo.execute();

    return res.json(protocolos);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showProtocolo = new ShowProtocoloService();
    const protocolo = await showProtocolo.execute({ id });

    return res.json(protocolo);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteProtocolo = new DeleteProtocoloService();
    const protocolo = await deleteProtocolo.execute({ id });

    return res.json();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, titulo, link } = req.body;

    const updateProtocolo = new UpdateProtocoloService();
    const protocolo = await updateProtocolo.execute({
      id,
      titulo,
      link,
    });

    return res.json(protocolo);
  }
}

export default ProtocoloController;
