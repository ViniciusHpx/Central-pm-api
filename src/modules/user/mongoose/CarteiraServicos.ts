import { Schema, model } from 'mongoose';

interface ICarteiraServicos {
  titulo: string;
  link: string;
}
const CarteiraServicosSchema = new Schema<ICarteiraServicos>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const CarteiraServicos = model<ICarteiraServicos>(
  'CarteiraServicos',
  CarteiraServicosSchema,
);

export default CarteiraServicos;
