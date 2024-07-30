import { Schema, model } from 'mongoose';

interface IRdqa3 {
  titulo: string;
  link: string;
}
const rdqa3Schema = new Schema<IRdqa3>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Rdqa3 = model<IRdqa3>('Rdqa3', rdqa3Schema);

export default Rdqa3;
