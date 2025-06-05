import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  categoria: { type: String, required: true },
  descricao: { type: String, required: true },
  imagem: { type: String, required: true },
});


export default mongoose.model('Livro', livroSchema);
