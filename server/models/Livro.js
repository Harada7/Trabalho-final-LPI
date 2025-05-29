import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  categoria: String,
  descricao: String,
  imagem: String
});

export default mongoose.model('Livro', livroSchema);
