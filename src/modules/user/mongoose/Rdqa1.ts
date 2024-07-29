import { Schema, model } from 'mongoose';

interface IRdqa1 {
  titulo: string;
  link: string;
}
const rdqa1Schema = new Schema<IRdqa1>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Rdqa1 = model<IRdqa1>('Rdqa1', rdqa1Schema);

export default Rdqa1;
