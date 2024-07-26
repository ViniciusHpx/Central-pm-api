import { Schema, model } from 'mongoose';

interface IProgramacaoAnual2024 {
  titulo: string;
  link: string;
}
const programacaoAnual2024Schema = new Schema<IProgramacaoAnual2024>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const ProgramacaoAnual2024 = model<IProgramacaoAnual2024>(
  'ProgramacaoAnual2024',
  programacaoAnual2024Schema,
);

export default ProgramacaoAnual2024;
