import { Schema, model } from 'mongoose';

interface IProgramacaoAnual2022 {
  titulo: string;
  link: string;
}
const programacaoAnual2022Schema = new Schema<IProgramacaoAnual2022>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const ProgramacaoAnual2022 = model<IProgramacaoAnual2022>(
  'ProgramacaoAnual2022',
  programacaoAnual2022Schema,
);

export default ProgramacaoAnual2022;
