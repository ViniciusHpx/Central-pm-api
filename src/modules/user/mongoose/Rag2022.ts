import { Schema, model } from 'mongoose';

interface IRag2022 {
  titulo: string;
  link: string;
}
const rag2022Schema = new Schema<IRag2022>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Rag2022 = model<IRag2022>('Rag2022', rag2022Schema);

export default Rag2022;
