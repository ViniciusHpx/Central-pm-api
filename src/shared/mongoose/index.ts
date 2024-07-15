import mongoose from 'mongoose';

const conection = mongoose
  .connect(
    'mongodb+srv://viniciushpx150:4n4rc0@cluster2.gvngvvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2',
  )
  .then(() => {
    console.log('Banco de dadods conectado !');
  })
  .catch(err => {
    console.log(`Erro ao conectar ao banco de dados ${err}`);
  });

export default conection;
