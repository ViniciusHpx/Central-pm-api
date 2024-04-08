import { Schema, model } from 'mongoose';

interface IUser {
  nome: string;
  usuario: string;
  senha: string;
  unidade: string;
  setor: string;
  funcao: string;
  contato: string;
  isAdmin: boolean;
  resetarSenha: boolean;
  permissoes: Array<string>;
}
const userSchema = new Schema<IUser>({
  nome: { type: String, required: true },
  usuario: { type: String, required: true },
  senha: { type: String, required: true },
  unidade: { type: String, required: true },
  setor: { type: String, required: true },
  funcao: { type: String, required: true },
  contato: { type: String, required: true },
  isAdmin: { type: Boolean },
  resetarSenha: { type: Boolean },
  permissoes: { type: [Schema.Types.String] },
});

const User = model<IUser>('User', userSchema);

export default User;
