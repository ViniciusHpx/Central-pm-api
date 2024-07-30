import { Schema, model } from 'mongoose';

interface IRag2025 {
  titulo: string;
  link: string;
}
const rag2025Schema = new Schema<IRag2025>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Rag2025 = model<IRag2025>('Rag2025', rag2025Schema);

export default Rag2025;
