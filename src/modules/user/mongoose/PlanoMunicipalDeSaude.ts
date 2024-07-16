import { Schema, model } from 'mongoose';

interface IPlanoMunicipalDeSaude {
  titulo: string;
  link: string;
}
const planoMunicipalDeSaudeSchema = new Schema<IPlanoMunicipalDeSaude>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const PlanoMunicipalDeSaude = model<IPlanoMunicipalDeSaude>(
  'PlanoMunicipalDeSaude',
  planoMunicipalDeSaudeSchema,
);

export default PlanoMunicipalDeSaude;
