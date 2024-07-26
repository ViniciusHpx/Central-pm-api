import { Request, Response } from 'express';

import CreateProgramacaoAnual2024Service from '../services/ProgramacaoAnual2024/CreateProgramacaoAnual2024Service';
import ListProgramacaoAnual2024Service from '../services/ProgramacaoAnual2024/ListProgramacaoAnual2024Service';
import ShowProgramacaoAnual2024Service from '../services/ProgramacaoAnual2024/ShowProgramacaoAnual2024Service';
import DeleteProgramacaoAnual2024Service from '../services/ProgramacaoAnual2024/DeleteProgramacaoAnual2024Service';

interface IProgramacaoAnual2024 {
  titulo: string;
  link: string;
}

class ProgramacaoAnual2024Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createProgramacaoAnual2024 = new CreateProgramacaoAnual2024Service();

    const programacaoAnual2024 = await createProgramacaoAnual2024.execute({
      titulo,
      link,
    });
    return res.json(programacaoAnual2024);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listProgramacaoAnual2024 = new ListProgramacaoAnual2024Service();
    const programacaoAnual2024 = await listProgramacaoAnual2024.execute();

    return res.json(programacaoAnual2024);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showProgramacaoAnual2024 = new ShowProgramacaoAnual2024Service();
    const programacaoAnual2024 = await showProgramacaoAnual2024.execute({
      id,
    });

    return res.json(programacaoAnual2024);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteProgramacaoAnual2024 = new DeleteProgramacaoAnual2024Service();
    const programacaoAnual2024 = await deleteProgramacaoAnual2024.execute({
      id,
    });

    return res.json();
  }
}

export default ProgramacaoAnual2024Controller;
