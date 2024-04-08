import { Schema, model } from 'mongoose';

interface IAvisos {
  titulo: string;
  tipo: string;
  conteudo: string;
  data: string;
}
const avisosSchema = new Schema<IAvisos>({
  titulo: { type: String, required: true },
  tipo: { type: String, required: true },
  conteudo: { type: String, required: true },
  data: { type: String, required: true },
});

const Aviso = model<IAvisos>('Avisos', avisosSchema);

export default Aviso;
