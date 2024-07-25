import { Request, Response } from 'express';

import CreateProgramacaoAnual2023Service from '../services/ProgramaAnual2023/CreateProgramacaoAnual2023';
import ListProgramacaoAnual2023Service from '../services/ProgramaAnual2023/ListProgramacaoAnual2023';
import ShowProgramacaoAnual2023Service from '../services/ProgramaAnual2023/ShowProgramacaoAnual2023';
import DeleteProgramacaoAnual2023Service from '../services/ProgramaAnual2023/DeleteProgramacaoAnual2023';

interface IProgramacaoAnual2023 {
  titulo: string;
  link: string;
}

class ProgramacaoAnual2023Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createProgramacaoAnual2023 = new CreateProgramacaoAnual2023Service();

    const programacaoAnual2023 = await createProgramacaoAnual2023.execute({
      titulo,
      link,
    });
    return res.json(programacaoAnual2023);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listProgramacaoAnual2023 = new ListProgramacaoAnual2023Service();
    const programacaoAnual2023 = await listProgramacaoAnual2023.execute();

    return res.json(programacaoAnual2023);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showProgramacaoAnual2023 = new ShowProgramacaoAnual2023Service();
    const programacaoAnual2023 = await showProgramacaoAnual2023.execute({
      id,
    });

    return res.json(programacaoAnual2023);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteProgramacaoAnual2023 = new DeleteProgramacaoAnual2023Service();
    const programacaoAnual2023 = await deleteProgramacaoAnual2023.execute({
      id,
    });

    return res.json();
  }
}

export default ProgramacaoAnual2023Controller;
