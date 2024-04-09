import { Request, Response } from 'express';
import AppError from '../../../shared/erros/AppError';
import CreateLancamentosService from '../services/Lancamentos/CreateLancamentosService';
import ListLancamentosService from '../services/Lancamentos/ListLancamentosService';
import ShowLancamentosService from '../services/Lancamentos/ShowLancamentosService';
import DeleteLancamentosService from '../services/Lancamentos/DeleteLancamentosService';
import UpdateLancamentosService from '../services/Lancamentos/UpdateLancamentosService';

interface ILancamentos {
  titulo: string;
  link: string;
}

class LancamentosController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createLancamentos = new CreateLancamentosService();

    const lancamentos = await createLancamentos.execute({
      titulo,
      link,
    });
    return res.json(lancamentos);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listLancamentos = new ListLancamentosService();
    const lancamentos = await listLancamentos.execute();

    return res.json(lancamentos);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showLancamentos = new ShowLancamentosService();
    const lancamentos = await showLancamentos.execute({ id });

    return res.json(lancamentos);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteLancamentos = new DeleteLancamentosService();
    const lancamentos = await deleteLancamentos.execute({ id });

    return res.json();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, titulo, link } = req.body;

    const updateLancamentos = new UpdateLancamentosService();
    const lancamentos = await updateLancamentos.execute({
      id,
      titulo,
      link,
    });

    return res.json(lancamentos);
  }
}

export default LancamentosController;
