import React, { useState, useEffect } from 'react';

const LivroForm = ({ onSubmit, initialData = {} }) => {
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    categoria: '',
    descricao: '',
    imagem: ''
  });

  useEffect(() => {
    if (initialData) setLivro(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(livro);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['titulo', 'autor', 'categoria', 'descricao', 'imagem'].map((field) => (
        <input
          key={field}
          name={field}
          value={livro[field]}
          onChange={handleChange}
          placeholder={field}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      ))}
      <button className="bg-green-600 text-white px-4 py-2 rounded">Salvar</button>
    </form>
  );
};

export default LivroForm;
