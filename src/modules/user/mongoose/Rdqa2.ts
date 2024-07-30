import { Schema, model } from 'mongoose';

interface IRdqa2 {
  titulo: string;
  link: string;
}
const rdqa2Schema = new Schema<IRdqa2>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Rdqa2 = model<IRdqa2>('Rdqa2', rdqa2Schema);

export default Rdqa2;
