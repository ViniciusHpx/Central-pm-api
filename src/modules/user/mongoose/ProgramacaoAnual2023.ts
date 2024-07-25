import { Schema, model } from 'mongoose';

interface IProgramacaoAnual2023 {
  titulo: string;
  link: string;
}
const programacaoAnual2023Schema = new Schema<IProgramacaoAnual2023>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const ProgramacaoAnual2023 = model<IProgramacaoAnual2023>(
  'ProgramacaoAnual2023',
  programacaoAnual2023Schema,
);

export default ProgramacaoAnual2023;
