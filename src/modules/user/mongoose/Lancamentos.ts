import { Schema, model } from 'mongoose';

interface ILancamentos {
  titulo: string;
  link: string;
}
const lancamentosSchema = new Schema<ILancamentos>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Lancamentos = model<ILancamentos>('Lancamentos', lancamentosSchema);

export default Lancamentos;
