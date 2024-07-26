import { Request, Response } from 'express';

import CreateProgramacaoAnual2025Service from '../services/ProgramacaoAnual2025/CreateProgramacaoAnual2025Service';
import ListProgramacaoAnual2025Service from '../services/ProgramacaoAnual2025/ListProgramacaoAnual2025Service';
import ShowProgramacaoAnual2025Service from '../services/ProgramacaoAnual2025/ShowProgramacaoAnual2025Service';
import DeleteProgramacaoAnual2025Service from '../services/ProgramacaoAnual2025/DeleteProgramacaoAnual2025Service';

interface IProgramacaoAnual2025 {
  titulo: string;
  link: string;
}

class ProgramacaoAnual2025Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createProgramacaoAnual2025 = new CreateProgramacaoAnual2025Service();

    const programacaoAnual2025 = await createProgramacaoAnual2025.execute({
      titulo,
      link,
    });
    return res.json(programacaoAnual2025);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listProgramacaoAnual2025 = new ListProgramacaoAnual2025Service();
    const programacaoAnual2025 = await listProgramacaoAnual2025.execute();

    return res.json(programacaoAnual2025);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showProgramacaoAnual2025 = new ShowProgramacaoAnual2025Service();
    const programacaoAnual2025 = await showProgramacaoAnual2025.execute({
      id,
    });

    return res.json(programacaoAnual2025);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteProgramacaoAnual2025 = new DeleteProgramacaoAnual2025Service();
    const programacaoAnual2025 = await deleteProgramacaoAnual2025.execute({
      id,
    });

    return res.json();
  }
}

export default ProgramacaoAnual2025Controller;
