import mongoose from 'mongoose';

const conection = mongoose
  .connect(
    'mongodb+srv://datalabsms:4n4rc0@cluster0.sx594ak.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Banco de dadods conectado !');
  })
  .catch(err => {
    console.log(`Erro ao conectar ao banco de dados ${err}`);
  });

export default conection;
