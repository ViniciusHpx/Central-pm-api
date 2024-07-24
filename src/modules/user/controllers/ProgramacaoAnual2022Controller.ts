import { Request, Response } from 'express';

import CreateProgramacaoAnual2022Service from '../services/ProgramaAnual2022/CreateProgramacaoAnual2022';
import ListProgramacaoAnual2022Service from '../services/ProgramaAnual2022/ListProgramacaoAnual2022';
import ShowProgramacaoAnual2022Service from '../services/ProgramaAnual2022/ShowProgramacaoAnual2022';
import DeleteProgramacaoAnual2022Service from '../services/ProgramaAnual2022/DeleteProgramacaoAnual2022';

interface IProgramacaoAnual2022 {
  titulo: string;
  link: string;
}

class ProgramacaoAnual2022Controller {
  public async create(req: Request, res: Response): Promise<Response> {
    const { titulo, link } = req.body;

    const createProgramacaoAnual2022 = new CreateProgramacaoAnual2022Service();

    const programacaoAnual2022 = await createProgramacaoAnual2022.execute({
      titulo,
      link,
    });
    return res.json(programacaoAnual2022);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listProgramacaoAnual2022 = new ListProgramacaoAnual2022Service();
    const programacaoAnual2022 = await listProgramacaoAnual2022.execute();

    return res.json(programacaoAnual2022);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showProgramacaoAnual2022 = new ShowProgramacaoAnual2022Service();
    const programacaoAnual2022 = await showProgramacaoAnual2022.execute({
      id,
    });

    return res.json(programacaoAnual2022);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteProgramacaoAnual2022 = new DeleteProgramacaoAnual2022Service();
    const programacaoAnual2022 = await deleteProgramacaoAnual2022.execute({
      id,
    });

    return res.json();
  }
}

export default ProgramacaoAnual2022Controller;
