import { Schema, model } from 'mongoose';

interface IRag2024 {
  titulo: string;
  link: string;
}
const rag2024Schema = new Schema<IRag2024>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Rag2024 = model<IRag2024>('Rag2024', rag2024Schema);

export default Rag2024;
