import { Schema, model } from 'mongoose';

interface ILegislacao {
  titulo: string;
  link: string;
}
const legislacaoSchema = new Schema<ILegislacao>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Legislacao = model<ILegislacao>('Legislacao', legislacaoSchema);

export default Legislacao;
