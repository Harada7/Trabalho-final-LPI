import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import LivroCard from '../components/LivroCard';

const Home = () => {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  const fetchLivros = async () => {
    const res = await api.get('/');
    setLivros(res.data);
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    fetchLivros();
  };

  const handleEdit = (id) => {
    navigate(`/editar/${id}`);
  };

  return (
    <div className="mx-auto px-6 py-10 font-sans text-gray-200">
      <header className="flex flex-col items-center justify-between mb-10 gap-4">
        <h1 className="mt-10 text-4xl font-bold tracking-wide text-white">
          Lista de Livros
        </h1>
        <button
          onClick={() => navigate('/cadastro')}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
          aria-label="Cadastrar novo livro"
        >
          Novo Livro
        </button>
      </header>

      <main>
        {livros.length === 0 ? (
          <p className="text-center text-gray-400 text-lg mt-20">
            Nenhum livro encontrado.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {livros.map((livro) => (
              <LivroCard
                key={livro._id}
                livro={livro}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
