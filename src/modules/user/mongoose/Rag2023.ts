import { Schema, model } from 'mongoose';

interface IRag2023 {
  titulo: string;
  link: string;
}
const rag2023Schema = new Schema<IRag2023>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Rag2023 = model<IRag2023>('Rag2023', rag2023Schema);

export default Rag2023;
