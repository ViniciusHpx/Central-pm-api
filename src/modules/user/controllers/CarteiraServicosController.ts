import { Request, Response } from 'express';
import CreateCarteiraServicosService from '../services/CarteiraServicos/CreateCarteiraServicosService';
import ListCarteiraServicosService from '../services/CarteiraServicos/ListCarteiraServicosService';
import ShowCarteiraServicosService from '../services/CarteiraServicos/ShowCarteiraServicosService';
import DeleteCarteiraServicoService from '../services/CarteiraServicos/DeleteCarteiraServicoService';
import UpdateCarteiraServicosService from '../services/CarteiraServicos/UpdateCarteiraServicosService';

interface ICarteiraServicos {
  titulo: string;
  link: string;
}

class CarteiraServicosController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createCarteiraServicos = new CreateCarteiraServicosService();

    const carteiraServicos = await createCarteiraServicos.execute({
      titulo,
      link,
    });
    return res.json(carteiraServicos);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listCarteiraServicos = new ListCarteiraServicosService();
    const carteiraServicos = await listCarteiraServicos.execute();

    return res.json(carteiraServicos);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showCarteiraServicos = new ShowCarteiraServicosService();
    const carteiraServicos = await showCarteiraServicos.execute({ id });

    return res.json(carteiraServicos);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteCarteiraServicos = new DeleteCarteiraServicoService();
    const carteiraServicos = await deleteCarteiraServicos.execute({ id });

    return res.json();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, titulo, link } = req.body;

    const updateCarteiraServicos = new UpdateCarteiraServicosService();
    const carteiraServicos = await updateCarteiraServicos.execute({
      id,
      titulo,
      link,
    });

    return res.json(carteiraServicos);
  }
}

export default CarteiraServicosController;
