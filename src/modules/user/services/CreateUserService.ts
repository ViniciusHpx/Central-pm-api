import AppError from '../../../shared/erros/AppError';
import User from '../mongoose/User';
import { hash } from 'bcrypt';
import Cache from '../../../config/cache';

interface IUser {
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
class CreateUserService {
  public async execute({
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
  }: IUser): Promise<IUser> {
    if (
      !nome ||
      !usuario ||
      !senha ||
      !confirmSenha ||
      !unidade ||
      !setor ||
      !funcao ||
      !contato
    ) {
      throw new AppError('Campos obrigatórios não preenchidos');
    }

    if (senha !== confirmSenha) {
      throw new AppError('As senhas não conferem');
    }

    if (senha.length < 8) {
      throw new AppError('A senha deve possuir no mínimo 8 caracteres');
    }

    usuario = usuario.toUpperCase();

    const userExiste = await User.findOne({ usuario });
    if (userExiste) {
      throw new AppError('O nome de usuário já existe');
    }
    const hashedPassw = await hash(senha!, 8);

    nome = nome.toUpperCase();
    unidade = unidade.toUpperCase();
    setor = setor.toUpperCase();
    funcao = funcao.toUpperCase();
    const user = new User({
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

    await user.save();
    Cache.del('users');

    return user;
  }
}

export default CreateUserService;
