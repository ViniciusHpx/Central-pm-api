import mongoose from 'mongoose';

const conection = mongoose
  .connect(
    'mongodb+srv://viniciushpx150:97d5QZe1en76xsq8@cluster0.1h6p0ht.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Banco de dadods conectado !');
  })
  .catch(err => {
    console.log(`Erro ao conectar ao banco de dados ${err}`);
  });

export default conection;
