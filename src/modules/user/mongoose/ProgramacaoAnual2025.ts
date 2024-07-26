import { Schema, model } from 'mongoose';

interface IProgramacaoAnual2025 {
  titulo: string;
  link: string;
}
const programacaoAnual2025Schema = new Schema<IProgramacaoAnual2025>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const ProgramacaoAnual2025 = model<IProgramacaoAnual2025>(
  'ProgramacaoAnual2025',
  programacaoAnual2025Schema,
);

export default ProgramacaoAnual2025;
