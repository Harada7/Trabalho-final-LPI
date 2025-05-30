import { useEffect, useState } from 'react';
import api from "../services/api";

export default function LivroList({ onEdit }) {
  const [livros, setLivros] = useState([]);

  const carregarLivros = async () => {
    const res = await api.get('/');
    setLivros(res.data);
  };

  const excluirLivro = async (id) => {
    await api.delete(`/${id}`);
    carregarLivros();
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📚 Lista de Livros</h2>
      <ul className="space-y-2">
        {livros.map((livro) => (
          <li key={livro._id} className="p-3 bg-gray-100 rounded shadow">
            <strong>{livro.titulo}</strong> - {livro.autor}
            <div className="mt-2">
              <button onClick={() => onEdit(livro)} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">
                Editar
              </button>
              <button onClick={() => excluirLivro(livro._id)} className="px-3 py-1 bg-red-600 text-white rounded">
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
