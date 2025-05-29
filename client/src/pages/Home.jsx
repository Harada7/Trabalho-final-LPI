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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Lista de Livros</h1>
        <button onClick={() => navigate('/cadastro')} className="bg-blue-600 text-white px-4 py-2 rounded">Novo Livro</button>
      </div>
      {livros.map(livro => (
        <LivroCard key={livro._id} livro={livro} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default Home;
