import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUsersService';
import ShowUsersService from '../services/ShowUserService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';
import CreateSessionService from '../services/CreateSessionService';
import ChangePasswordService from '../services/ChangePasswordService';
import CheckAuthService from '../services/CheckAuthService';
import AppError from '../../../shared/erros/AppError';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    if (!req.user.isAdmin) {
      throw new AppError('Usuário sem permissão');
    }
    const {
      nome,
      usuario,
      unidade,
      senha,
      confirmSenha,
      setor,
      funcao,
      contato,
      isAdmin,
      resetarSenha,
      permissoes,
    } = req.body;

    const createUser = new CreateUserService();
    const user = await createUser.execute({
      nome,
      usuario,
      senha,
      confirmSenha,
      unidade,
      setor,
      funcao,
      contato,
      isAdmin,
      resetarSenha,
      permissoes,
    });
    return res.json(user);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    if (!req.user.isAdmin) {
      throw new AppError('Usuário sem permissão');
    }
    const listUser = new ListUsersService();
    const users = await listUser.execute();

    return res.json(users);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    if (!req.user.isAdmin) {
      throw new AppError('Usuário sem permissão');
    }
    const { id } = req.params;
    const showUser = new ShowUsersService();
    const user = await showUser.execute({ id });

    return res.json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    if (!req.user.isAdmin) {
      throw new AppError('Usuário sem permissão');
    }
    const { id } = req.params;
    const deleteUser = new DeleteUserService();
    const user = await deleteUser.execute({ id });

    return res.json();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    if (!req.user.isAdmin) {
      throw new AppError('Usuário sem permissão');
    }
    const {
      id,
      nome,
      usuario,
      senha,
      confirmSenha,
      unidade,
      setor,
      funcao,
      contato,
      isAdmin,
      resetarSenha,
      permissoes,
    } = req.body;

    const updateUser = new UpdateUserService();
    const user = await updateUser.execute({
      id,
      nome,
      usuario,
      senha,
      confirmSenha,
      unidade,
      setor,
      funcao,
      contato,
      isAdmin,
      resetarSenha,
      permissoes,
    });

    return res.json(user);
  }

  public async createSession(req: Request, res: Response): Promise<Response> {
    const { usuario, senha } = req.body;
    const createSession = new CreateSessionService();
    const session = await createSession.execute({ usuario, senha });

    return res.json(session);
  }

  public async changePassword(req: Request, res: Response): Promise<Response> {
    const { token, senha, senhaConfirm } = req.body;
    const changePassword = new ChangePasswordService();
    await changePassword.execute({ token, senha, senhaConfirm });

    return res.json();
  }
  public async checkSession(req: Request, res: Response): Promise<Response> {
    const { token } = req.body;
    const checkSession = new CheckAuthService();
    const user = await checkSession.execute({ token });

    return res.json(user);
  }
}

export default UserController;
