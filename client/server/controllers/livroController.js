import Livro from '../models/Livro.js';

export const getLivros = async (req, res) => {
  const livros = await Livro.find();
  res.json(livros);
};

export const getLivro = async (req, res) => {
  const livro = await Livro.findById(req.params.id);
  res.json(livro);
};

export const createLivro = async (req, res) => {
  const novoLivro = new Livro(req.body);
  await novoLivro.save();
  res.status(201).json(novoLivro);
};

export const updateLivro = async (req, res) => {
  const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(livroAtualizado);
};

export const deleteLivro = async (req, res) => {
  await Livro.findByIdAndDelete(req.params.id);
  res.json({ message: 'Livro deletado com sucesso' });
};
