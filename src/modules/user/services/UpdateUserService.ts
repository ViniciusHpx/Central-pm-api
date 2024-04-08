import { hash } from 'bcrypt';
import AppError from '../../../shared/erros/AppError';
import User from '../mongoose/User';
import Cache from '../../../config/cache';

interface IRequest {
  id: string;
  nome: string;
  usuario: string;
  senha: string;
  confirmSenha?: string;
  unidade: string;
  setor: string;
  funcao: string;
  contato: string;
  isAdmin?: boolean;
  resetarSenha?: boolean;
  permissoes?: Array<string>;
}
interface IUser {
  nome: string;
  usuario: string;
  senha: string;
  unidade: string;
  setor: string;
  funcao: string;
  contato: string;
  isAdmin?: boolean;
  resetarSenha?: boolean;
  permissoes?: Array<string>;
}
class UpdateUserService {
  public async execute({
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
  }: IRequest): Promise<IUser> {
    if (!nome || !usuario || !unidade || !setor || !funcao || !contato) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }
    if (!id) {
      throw new AppError('ID do usuário não informado');
    }
    const user = await User.findOne({ _id: id });
    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    usuario = usuario.toUpperCase();

    const userExiste = await User.findOne({ usuario });
    if (userExiste && usuario !== user.usuario) {
      throw new AppError('O nome de usuário já existe');
    }

    nome = nome.toUpperCase();
    unidade = unidade.toUpperCase();
    setor = setor.toUpperCase();
    funcao = funcao.toUpperCase();

    if (resetarSenha) {
      if (!senha) {
        throw new AppError('Senha não informada');
      }
      if (senha !== confirmSenha) {
        throw new AppError('As senhas não conferem');
      }
      if (senha.length < 8) {
        throw new AppError('A senha deve possuir no mínimo 8 caracteres');
      }
      const hashedPassw = await hash(senha, 8);

      await User.findByIdAndUpdate(id, {
        nome,
        usuario,
        senha: hashedPassw,
        unidade,
        setor,
        funcao,
        contato,
        isAdmin,
        resetarSenha,
        permissoes,
      });
      const userAtualizado = await User.findOne({ _id: id });

      if (!userAtualizado) {
        throw new AppError('Houve um problema ao atualizar o usuário');
      }
      Cache.del('users');
      return userAtualizado;
    } else {
      await User.findByIdAndUpdate(id, {
        nome,
        usuario,
        unidade,
        setor,
        funcao,
        contato,
        isAdmin,
        resetarSenha,
        permissoes,
      });
      const userAtualizado = await User.findOne({ _id: id });

      if (!userAtualizado) {
        throw new AppError('Houve um problema ao atualizar o usuário');
      }
      Cache.del('users');
      return userAtualizado;
    }
  }
}

export default UpdateUserService;
