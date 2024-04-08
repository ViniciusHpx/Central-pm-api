import { Request, Response } from 'express';
import AppError from '../../../shared/erros/AppError';
import CreateAvisoService from '../services/Aviso/CreateAvisoService';
import ListAvisosService from '../services/Aviso/ListAvisoService';
import ShowAvisoService from '../services/Aviso/ShowAvisoService';
import DeleteAvisoService from '../services/Aviso/DeleteAvisoService';
import UpdateAvisoService from '../services/Aviso/UpdateAvisoService';

interface IAvisos {
  titulo: string;
  tipo: string;
  conteudo: string;
  data: string;
}
class AvisoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, tipo, conteudo, data } = req.body;

    const createAviso = new CreateAvisoService();

    const aviso = await createAviso.execute({ titulo, tipo, conteudo, data });
    return res.json(aviso);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listAviso = new ListAvisosService();
    const avisos = await listAviso.execute();

    return res.json(avisos);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showAviso = new ShowAvisoService();
    const aviso = await showAviso.execute({ id });

    return res.json(aviso);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteAviso = new DeleteAvisoService();
    const aviso = await deleteAviso.execute({ id });

    return res.json();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, titulo, tipo, conteudo, data } = req.body;

    const updateAviso = new UpdateAvisoService();
    const aviso = await updateAviso.execute({
      id,
      titulo,
      tipo,
      conteudo,
      data,
    });

    return res.json(aviso);
  }
}

export default AvisoController;
