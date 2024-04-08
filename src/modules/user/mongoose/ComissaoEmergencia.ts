import { Schema, model } from 'mongoose';

interface IComissaoEmergencia {
  titulo: string;
  link: string;
}
const comissaoEmergenciaSchema = new Schema<IComissaoEmergencia>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const ComissaoEmergencia = model<IComissaoEmergencia>(
  'ComissaoEmergencia',
  comissaoEmergenciaSchema,
);

export default ComissaoEmergencia;
