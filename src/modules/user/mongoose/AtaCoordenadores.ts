import { Schema, model } from 'mongoose';

interface IAta {
  titulo: string;
  link: string;
}
const ataSchema = new Schema<IAta>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const AtaCoordenadores = model<IAta>('AtaCoordenadores', ataSchema);

export default AtaCoordenadores;
