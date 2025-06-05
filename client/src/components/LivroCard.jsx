import React from 'react';

const LivroCard = ({ livro, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <img src={livro.imagem} alt={livro.titulo} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl text-black font-bold mt-2">{livro.titulo}</h2>
      <p className="text-sm text-black">Autor: {livro.autor}</p>
      <p className="text-sm text-black">Categoria: {livro.categoria}</p>
      <p className="text-sm text-black mt-2">{livro.descricao}</p>
      <div className="flex gap-2 mt-3">
        <button onClick={() => onEdit(livro._id)} className="bg-blue-500 text-white px-3 py-1 rounded">Editar</button>
        <button onClick={() => onDelete(livro._id)} className="bg-red-500 text-white px-3 py-1 rounded">Excluir</button>
      </div>
    </div>
  );
};

export default LivroCard;
