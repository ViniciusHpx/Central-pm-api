import { Schema, model } from 'mongoose';

interface IProtocolo {
  titulo: string;
  link: string;
}
const protocolosSchema = new Schema<IProtocolo>({
  titulo: { type: String, required: true },
  link: { type: String, required: true },
});

const Protocolo = model<IProtocolo>('Protocolo', protocolosSchema);

export default Protocolo;
